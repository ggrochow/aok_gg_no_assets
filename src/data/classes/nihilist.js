import { STATS } from '../constants/stats'
import Item from '../../classes/Item'
import { ITEM_SLOTS, ITEM_TYPES } from '../constants/items'

export const nihilistStats = {
  [STATS.INTELLIGENCE]: 705,
  [STATS.STRENGTH]: 325,
  [STATS.POWER]: 364,
  [STATS.CRITICAL_CHANCE]: 22.65 - 2.64,
  [STATS.HEALTH]: 10900 - 650,
  [STATS.MANA]: 5455 - 705,
  [STATS.ARMOR]: 485,
  [STATS.MAGIC_RESIST]: 450 - 70,
  [STATS.HPS]: 25,
  [STATS.MPS]: 30,
  [STATS.LIFE_STEAL]: 0,
  [STATS.INCREASED_RARITY]: 0,
  [STATS.TENACITY]: 0,
  [STATS.RESILIENCE]: 0,
}

export const nihilistBaseGear = {
  [ITEM_SLOTS.HEAD]: new Item(
    ITEM_SLOTS.HEAD,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.INTELLIGENCE]: 5, [STATS.HEALTH]: 15 }
  ),
  [ITEM_SLOTS.NECK]: null,
  [ITEM_SLOTS.SHOULDER]: new Item(
    ITEM_SLOTS.SHOULDER,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.INTELLIGENCE]: 5, [STATS.MPS]: 1 }
  ),
  [ITEM_SLOTS.BACK]: new Item(
    ITEM_SLOTS.BACK,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.INTELLIGENCE]: 5, [STATS.MANA]: 15 }
  ),
  [ITEM_SLOTS.CHEST]: new Item(
    ITEM_SLOTS.CHEST,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.INTELLIGENCE]: 10 }
  ),
  [ITEM_SLOTS.WRIST]: new Item(
    ITEM_SLOTS.WRIST,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.INTELLIGENCE]: 5, [STATS.CRITICAL_CHANCE]: 0.09 }
  ),
  [ITEM_SLOTS.WEAPON]: new Item(
    ITEM_SLOTS.WEAPON,
    ITEM_TYPES.NIHILIST,
    1,
    { [STATS.POWER]: 5 },
    { [STATS.INTELLIGENCE]: 5, [STATS.CRITICAL_CHANCE]: 0.09 }
  ),
  [ITEM_SLOTS.HANDS]: new Item(
    ITEM_SLOTS.HANDS,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.INTELLIGENCE]: 5, [STATS.MPS]: 1 }
  ),
  [ITEM_SLOTS.LEGS]: new Item(
    ITEM_SLOTS.LEGS,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.INTELLIGENCE]: 5, [STATS.RESILIENCE]: 0.21 }
  ),
  [ITEM_SLOTS.FEET]: new Item(
    ITEM_SLOTS.FEET,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.INTELLIGENCE]: 5, [STATS.CRITICAL_CHANCE]: 0.09 }
  ),
  [ITEM_SLOTS.RING]: null,
  [ITEM_SLOTS.TRINKET]: null,
}

export const nihilistS1Gear = {
  [ITEM_SLOTS.HEAD]: new Item(
    ITEM_SLOTS.HEAD,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.HEALTH]: 100,
      [STATS.MANA]: 150,
      [STATS.MPS]: 4,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.NECK]: new Item(
    ITEM_SLOTS.NECK,
    null,
    3,
    {},
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.HEALTH]: 100,
      [STATS.MANA]: 150,
      [STATS.MPS]: 4,
    }
  ),
  [ITEM_SLOTS.SHOULDER]: new Item(
    ITEM_SLOTS.SHOULDER,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.HEALTH]: 100,
      [STATS.MANA]: 100,
      [STATS.ARMOR]: 15,
      [STATS.MAGIC_RESIST]: 15,
    }
  ),
  [ITEM_SLOTS.BACK]: new Item(
    ITEM_SLOTS.BACK,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.MANA]: 100,
      [STATS.MPS]: 3,
      [STATS.TENACITY]: 1.64,
      [STATS.RESILIENCE]: 2.04,
    }
  ),
  [ITEM_SLOTS.CHEST]: new Item(
    ITEM_SLOTS.CHEST,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.HEALTH]: 200,
      [STATS.ARMOR]: 15,
      [STATS.MAGIC_RESIST]: 15,
      [STATS.TENACITY]: 3.23,
    }
  ),
  [ITEM_SLOTS.WRIST]: new Item(
    ITEM_SLOTS.WRIST,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.HEALTH]: 100,
      [STATS.MANA]: 100,
      [STATS.MPS]: 3,
      [STATS.RESILIENCE]: 2.04,
    }
  ),
  [ITEM_SLOTS.WEAPON]: new Item(
    ITEM_SLOTS.WEAPON,
    ITEM_TYPES.NIHILIST,
    5,
    { [STATS.POWER]: 20 },
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.MANA]: 100,
      [STATS.MPS]: 6,
    }
  ),
  [ITEM_SLOTS.HANDS]: new Item(
    ITEM_SLOTS.HANDS,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HEALTH]: 100,
      [STATS.MANA]: 100,
      [STATS.MPS]: 3,
    }
  ),
  [ITEM_SLOTS.LEGS]: new Item(
    ITEM_SLOTS.LEGS,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.HEALTH]: 100,
      [STATS.MANA]: 100,
      [STATS.ARMOR]: 15,
      [STATS.MAGIC_RESIST]: 15,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.FEET]: new Item(
    ITEM_SLOTS.FEET,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.HEALTH]: 100,
      [STATS.MANA]: 100,
      [STATS.TENACITY]: 1.64,
      [STATS.RESILIENCE]: 2.04,
    }
  ),
  [ITEM_SLOTS.RING]: new Item(
    ITEM_SLOTS.RING,
    null,
    3,
    {},
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.MANA]: 150,
      [STATS.HPS]: 10,
      [STATS.MPS]: 4,
    }
  ),
  [ITEM_SLOTS.TRINKET]: new Item(
    ITEM_SLOTS.TRINKET,
    null,
    3,
    {},
    {
      [STATS.INTELLIGENCE]: 50,
      [STATS.MANA]: 150,
      [STATS.MAGIC_RESIST]: 15,
      [STATS.MPS]: 4,
    }
  ),
}