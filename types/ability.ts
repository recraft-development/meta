import type { Requirements, Skill } from "./types";

export interface Ability {
  id: string;
  /** Array of strings per level */
  displayName: Array<string>;
  /** Array of string arrays per level */
  description: Array<Array<string>>;
  skill: Skill;
  requirements: Array<Requirements>;
  maxLevel: number;
  spells: Array<Record<string, number>>;
}
