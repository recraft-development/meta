import type { Attribute } from "./types";
type SpellType = "ACTIVE" | "PASSIVE" | "TOGGLE";

export interface Spell {
  id: string;
  /**
   * Array of strings per level
   */
  displayName: Array<string>;
  /** Array of string arrays per level */
  description: Array<Array<string>>;
  spellType: SpellType;
  /** Array of listener id arrays, per level */
  listeners?: Array<Array<string>>;
  /** Array of attributes per level */
  attributes?: Array<Array<Attribute>>;
  /** Array of attributes that automatically multiplied by ability level */
  attributesPerLevel?: Array<Attribute>;
}
