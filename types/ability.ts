import type { Requirements, Skill } from "./types";

export interface Ability {
  id: string;
  /** Array of strings per level
   *  Example
   *  [
   *    "Punch", // Level 1 name
   *    "Strong punch", // Level 2 name
   *    "Super Punch" // Level 3 name
   *  ]
   */
  displayName: Array<string>;
  /** Array of string arrays per level */
  description: Array<Array<string>>;
  skill: Skill;
  requirements: Array<Requirements>;
  maxLevel: number;
  spells?: Array<Record<string, number>>;
}
