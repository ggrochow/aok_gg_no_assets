import { STATS } from '../constants/stats'
import Item from '../../classes/Item'
import { ITEM_SLOTS, ITEM_TYPES } from '../constants/items'

export const paladinStats = {
  [STATS.STRENGTH]: 705,
  [STATS.WISDOM]: 325,
  [STATS.POWER]: 364,
  [STATS.CRITICAL_CHANCE]: 20.01,
  [STATS.HEALTH]: 13410 - 1410,
  [STATS.MANA]: 4750 - 650,
  [STATS.ARMOR]: 660,
  [STATS.MAGIC_RESIST]: 305,
  [STATS.HPS]: 25,
  [STATS.MPS]: 36 - 7,
  [STATS.LIFE_STEAL]: 0,
  [STATS.INCREASED_RARITY]: 0,
  [STATS.RESILIENCE]: 0,
  [STATS.TENACITY]: 0,
}

export const paladinStarterGear =  {
  [ITEM_SLOTS.HEAD]: new Item(
    ITEM_SLOTS.HEAD,
    ITEM_TYPES.PLATE,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.STRENGTH]: 5, [STATS.HEALTH]: 15 }
  ),
  [ITEM_SLOTS.NECK]: null,
  [ITEM_SLOTS.SHOULDER]: new Item(
    ITEM_SLOTS.SHOULDER,
    ITEM_TYPES.PLATE,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.STRENGTH]: 5, [STATS.HEALTH]: 15 }
  ),
  [ITEM_SLOTS.BACK]: new Item(
    ITEM_SLOTS.BACK,
    ITEM_TYPES.PLATE,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.STRENGTH]: 5, [STATS.MPS]: 1 }
  ),
  [ITEM_SLOTS.CHEST]: new Item(
    ITEM_SLOTS.CHEST,
    ITEM_TYPES.PLATE,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.STRENGTH]: 8, [STATS.MPS]: 2 }
  ),
  [ITEM_SLOTS.WRIST]: new Item(
    ITEM_SLOTS.WRIST,
    ITEM_TYPES.PLATE,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.STRENGTH]: 5, [STATS.ARMOR]: 5 }
  ),
  [ITEM_SLOTS.WEAPON]: new Item(
    ITEM_SLOTS.WEAPON,
    ITEM_TYPES.PALADIN,
    1,
    { [STATS.POWER]: 5 },
    { [STATS.STRENGTH]: 5, [STATS.MPS]: 1 }
  ),
  [ITEM_SLOTS.HANDS]: new Item(
    ITEM_SLOTS.HANDS,
    ITEM_TYPES.PLATE,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.STRENGTH]: 5, [STATS.CRITICAL_CHANCE]: 0.09 }
  ),
  [ITEM_SLOTS.LEGS]: new Item(
    ITEM_SLOTS.LEGS,
    ITEM_TYPES.PLATE,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.STRENGTH]: 5, [STATS.HEALTH]: 15 }
  ),
  [ITEM_SLOTS.FEET]: new Item(
    ITEM_SLOTS.FEET,
    ITEM_TYPES.PLATE,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.STRENGTH]: 5, [STATS.HEALTH]: 15 }
  ),
  [ITEM_SLOTS.RING]: null,
  [ITEM_SLOTS.TRINKET]: null,
}

export const paladinS1Gear = {
  [ITEM_SLOTS.HEAD]: new Item(
    ITEM_SLOTS.HEAD,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 25,
      [STATS.WISDOM]: 25,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.MPS]: 4,
      [STATS.HEALTH]: 100,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.NECK]: new Item(
    ITEM_SLOTS.NECK,
    null,
    2,
    {},
    {
      [STATS.STRENGTH]: 25,
      [STATS.WISDOM]: 25,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.HEALTH]: 100,
      [STATS.HPS]: 10,
    }
  ),
  [ITEM_SLOTS.SHOULDER]: new Item(
    ITEM_SLOTS.SHOULDER,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 25,
      [STATS.WISDOM]: 25,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.MANA]: 100,
      [STATS.ARMOR]: 15,
      [STATS.MAGIC_RESIST]: 15,
    }
  ),
  [ITEM_SLOTS.BACK]: new Item(
    ITEM_SLOTS.BACK,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 25,
      [STATS.WISDOM]: 25,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HPS]: 10,
      [STATS.MPS]: 3,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.CHEST]: new Item(
    ITEM_SLOTS.CHEST,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 25,
      [STATS.WISDOM]: 25,
      [STATS.HEALTH]: 200,
      [STATS.ARMOR]: 15,
      [STATS.MAGIC_RESIST]: 15,
      [STATS.TENACITY]: 3.23,
    }
  ),
  [ITEM_SLOTS.WRIST]: new Item(
    ITEM_SLOTS.WRIST,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 25,
      [STATS.WISDOM]: 25,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.MANA]: 100,
      [STATS.MPS]: 3,
      [STATS.ARMOR]: 15,
    }
  ),
  [ITEM_SLOTS.WEAPON]: new Item(
    ITEM_SLOTS.WEAPON,
    ITEM_TYPES.PALADIN,
    5,
    { [STATS.POWER]: 20 },
    {
      [STATS.STRENGTH]: 35,
      [STATS.WISDOM]: 35,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.HEALTH]: 100,
      [STATS.MANA]: 100,
      [STATS.MPS]: 3,
    }
  ),
  [ITEM_SLOTS.HANDS]: new Item(
    ITEM_SLOTS.HANDS,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 25,
      [STATS.WISDOM]: 25,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HEALTH]: 100,
      [STATS.MPS]: 3,
      [STATS.ARMOR]: 15,
    }
  ),
  [ITEM_SLOTS.LEGS]: new Item(
    ITEM_SLOTS.LEGS,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 25,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.HEALTH]: 100,
      [STATS.MPS]: 3,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.FEET]: new Item(
    ITEM_SLOTS.FEET,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 25,
      [STATS.WISDOM]: 25,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.MANA]: 100,
      [STATS.MPS]: 3,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.RING]: new Item(
    ITEM_SLOTS.RING,
    null,
    2,
    {},
    {
      [STATS.STRENGTH]: 25,
      [STATS.WISDOM]: 25,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.HPS]: 10,
      [STATS.MPS]: 3,
    }
  ),
  [ITEM_SLOTS.TRINKET]: new Item(
    ITEM_SLOTS.TRINKET,
    null,
    3,
    {},
    {
      [STATS.STRENGTH]: 25,
      [STATS.WISDOM]: 25,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.MPS]: 3,
      [STATS.MANA]: 100,
    }
  ),
}