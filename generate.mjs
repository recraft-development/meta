import * as path from "path";
import * as TJS from "typescript-json-schema";
import fs from "fs";

const settings = {
  required: true,
};

const compilerOptions = {
  strictNullChecks: true,
};

const basePath = "./types";

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

const program = TJS.getProgramFromFiles(
  getAllFiles(path.resolve("./types")),
  compilerOptions,
  basePath
);

const generator = TJS.buildGenerator(program, settings);

if (!fs.existsSync("./schemas")) fs.mkdirSync(path.resolve("./schemas"));

["Spell", "Ability", "Effect", "Modifier", "Item"].forEach((type) =>
  fs.writeFileSync(
    path.resolve(`./schemas/${type}.json`),
    JSON.stringify(generator.getSchemaForSymbol(type), null, 2)
  )
);
