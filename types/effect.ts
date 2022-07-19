import { Attribute } from "./types";

export interface Effect {
  id: string;
  displayName: Array<string>;
  description: Array<Array<string>>;
  /** Array of arrays per level */
  attributes: Array<Array<Attribute>>;
  /** Array of attributes that automatically multiplied by ability level */
  attributesPerLevel: Array<Attribute>;
  listeners: Array<Array<string>>;
}
