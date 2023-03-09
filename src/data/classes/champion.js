import { STATS } from '../constants/stats'
import Item from '../../classes/Item'
import { ITEM_SLOTS, ITEM_TYPES } from '../constants/items'

export const championStats = {
  [STATS.STRENGTH]: 670,
  [STATS.AGILITY]: 300,
  [STATS.POWER]: 364,
  [STATS.HEALTH]: 13090 - 1340,
  [STATS.CRITICAL_CHANCE]: 21.13 - 1.12,
  [STATS.RAGE]: 100,
  [STATS.ARMOR]: 630 - 45,
  [STATS.MAGIC_RESIST]: 280,
  [STATS.HPS]: 25,
  [STATS.LIFE_STEAL]: 0,
  [STATS.INCREASED_RARITY]: 0,
  [STATS.TENACITY]: 0,
  [STATS.RESILIENCE]: 0,
}

export const champStarterGear = {
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
    { [STATS.STRENGTH]: 5, [STATS.HEALTH]: 15 }
  ),
  [ITEM_SLOTS.CHEST]: new Item(
    ITEM_SLOTS.CHEST,
    ITEM_TYPES.PLATE,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.STRENGTH]: 10 }
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
    ITEM_TYPES.CHAMPION,
    1,
    { [STATS.POWER]: 5 },
    { [STATS.STRENGTH]: 5, [STATS.CRITICAL_CHANCE]: 0.09 }
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

export const championS1Gear = {
  [ITEM_SLOTS.HEAD]: new Item(
    ITEM_SLOTS.HEAD,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 50,
      [STATS.CRITICAL_CHANCE]: 0.94,
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
      [STATS.STRENGTH]: 50,
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
      [STATS.STRENGTH]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HEALTH]: 100,
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
      [STATS.STRENGTH]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HPS]: 10,
      [STATS.LIFE_STEAL]: 0.5,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.CHEST]: new Item(
    ITEM_SLOTS.CHEST,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 50,
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
      [STATS.STRENGTH]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HEALTH]: 100,
      [STATS.ARMOR]: 15,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.WEAPON]: new Item(
    ITEM_SLOTS.WEAPON,
    ITEM_TYPES.CHAMPION,
    5,
    { [STATS.POWER]: 20 },
    {
      [STATS.STRENGTH]: 75,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.HEALTH]: 100,
      [STATS.LIFE_STEAL]: 0.5,
    }
  ),
  [ITEM_SLOTS.HANDS]: new Item(
    ITEM_SLOTS.HANDS,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HEALTH]: 100,
      [STATS.ARMOR]: 15,
      [STATS.HPS]: 10,
    }
  ),
  [ITEM_SLOTS.LEGS]: new Item(
    ITEM_SLOTS.LEGS,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 50,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.HEALTH]: 100,
      [STATS.ARMOR]: 15,
      [STATS.MAGIC_RESIST]: 15,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.FEET]: new Item(
    ITEM_SLOTS.FEET,
    ITEM_TYPES.PLATE,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.STRENGTH]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HEALTH]: 100,
      [STATS.ARMOR]: 15,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.RING]: new Item(
    ITEM_SLOTS.RING,
    null,
    2,
    {},
    {
      [STATS.STRENGTH]: 50,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.LIFE_STEAL]: 0.5,
      [STATS.HPS]: 10,
    }
  ),
  [ITEM_SLOTS.TRINKET]: new Item(
    ITEM_SLOTS.TRINKET,
    null,
    3,
    {},
    {
      [STATS.AGILITY]: 50,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.HPS]: 10,
      [STATS.ARMOR]: 15,
    }
  ),
}