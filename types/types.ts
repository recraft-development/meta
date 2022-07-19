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

export type AttributeType =
  | "STRENGTH"
  | "AGILITY"
  | "INTELLIGENCE"
  | "MAX_HEALTH"
  | "KNOCKBACK_RESISTANCE"
  | "MOVEMENT_SPEED"
  | "ATTACK_DAMAGE"
  | "ATTACK_SPEED"
  | "ARMOR"
  | "ARROW_DAMAGE"
  | "ARROW_POWER"
  | "ARROW_CHARGE_BOOST"
  | "ACCURACY"
  | "ARROW_PIERCING"
  | "DURABILITY"
  | "MAX_STAMINA"
  | "STAMINA_REGENERATION"
  | "STAMINA_REGENERATION_DELAY"
  | "STAMINA_REGENERATION_RATE"
  | "STAMINA_SPRINT_EXHAUSTION"
  | "STAMINA_HIT_EXHAUSTION"
  | "STAMINA_MISS_EXHAUSTION"
  | "STAMINA_JUMP_EXHAUSTION"
  | "STAMINA_FLOAT_EXHAUSTION"
  | "STAMINA_SWIM_EXHAUSTION"
  | "STAMINA_BLOCK_EXHAUSTION_MULTIPLIER"
  | "HEALTH_REGENERATION"
  | "HEALTH_REGENERATION_DELAY"
  | "HEALTH_REGENERATION_RATE"
  | "TEMPERATURE_SELF_WARM_BASE"
  | "TEMPERATURE_SELF_WARM_MAX"
  | "TEMPERATURE_SELF_COOL_MAX"
  | "TEMPERATURE_COOLING"
  | "TEMPERATURE_WARMING"
  | string;

export interface Attribute {
  attribute: AttributeType;
  operation: Operation;
  value: number;
}

export interface Requirements {
  level?: number;
  skills?: Record<string, number>;
  abilities?: Record<string, number>;
  spells?: Record<string, number>;
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
