export type Operation =
  | "ADD_NUMBER"
  | "ADD_PERCENT"
  | "MULTIPLY_PERCENT"
  | "ADD_NUMBER_SELF"
  | "ADD_PERCENT_SELF"
  | "MULTIPLY_PERCENT_SELF";

export type Skill =
  | "CRAFTING"
  | "MINING"
  | "FIGHTING"
  | "ARCHERY"
  | "ALCHEMY"
  | "ACROBATICS"
  | "SURVIVAL";

export interface Attribute {
  attribute: string;
  operation: Operation;
  value: number;
}

export interface Requirements {
  level: number;
  skills: Record<string, number>;
  abilities: Record<string, number>;
  spells: Record<string, number>;
}

export interface ItemData {
  id: string;
  amount: string;
}

export interface Price {
  points?: number;
  gold?: number;
  items?: Array<ItemData>;
  permission?: string;
}
