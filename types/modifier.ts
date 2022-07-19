import { Attribute } from "./types";
import { Enchantment } from "./enchantment";

export interface Modifier {
  priority: number;
  listeners: Array<string>;
  stats: Array<Attribute>;
  enchantments: Map<Enchantment, number>;
  prefix?: string;
  suffix?: string;
  lore?: Array<string>;
}
