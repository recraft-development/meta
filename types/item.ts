import { Attribute } from "./types";
import { Enchantment } from "./enchantment";
import { Material } from "./material";

type ItemCategory =
  | "WEAPON"
  | "SHIELD"
  | "ARMOR"
  | "TOOL"
  | "FOOD"
  | "CONSUMABLE"
  | "POTION"
  | "MISCELLANEOUS"
  | "SPELL";

type EquipmentType =
  | "NONE"
  | "SWORD"
  | "DAGGER"
  | "BLUNT"
  | "HELMET"
  | "CHESTPLATE"
  | "LEGGINGS"
  | "BOOTS"
  | "SHIELD"
  | "BOW"
  | "AXE"
  | "SHOVEL"
  | "HOE"
  | "PICKAXE";

export interface RegularItem {
  id: string;
  material: Material;
  data: number;
  category: ItemCategory;
  displayName: string;
  description: Array<string>;
  listeners: Array<string>;
  modifiers: Array<string>;
  attributes: Array<Attribute>;
  primaryStats: Array<string>;
  enchantments: Record<Enchantment, number>;
  color: number;
  unbreakable: Boolean;
  version: string;
}

export type Item =
  | (RegularItem & {
      type: "EQUIPMENT";
      equipmentType: EquipmentType;
      tier: number;
      primaryMaterial?: string;
    })
  | { type: undefined };
