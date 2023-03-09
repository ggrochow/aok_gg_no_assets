import Item from '../../classes/Item'
import { STATS } from '../constants/stats'
import { ITEM_SLOTS, ITEM_TYPES } from '../constants/items'

export const assassinStats = {
  [STATS.AGILITY]: 670,
  [STATS.STRENGTH]: 300,
  [STATS.POWER]: 364,
  [STATS.CRITICAL_CHANCE]: 20.01,
  [STATS.HEALTH]: 10250,
  [STATS.ENERGY]: 100,
  [STATS.ARMOR]: 484,
  [STATS.MAGIC_RESIST]: 330,
  [STATS.HPS]: 25,
  [STATS.EP5]: 11,
  [STATS.LIFE_STEAL]: 0,
  [STATS.INCREASED_RARITY]: 0,
  [STATS.TENACITY]: 0,
  [STATS.RESILIENCE]: 0,
}

export const assassinStarterGear = {
  [ITEM_SLOTS.HEAD]: new Item(
    ITEM_SLOTS.HEAD,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.AGILITY]: 5, [STATS.HEALTH]: 15 }
  ),
  [ITEM_SLOTS.NECK]: null,
  [ITEM_SLOTS.SHOULDER]: new Item(
    ITEM_SLOTS.SHOULDER,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.AGILITY]: 5, [STATS.CRITICAL_CHANCE]: 0.09 }
  ),
  [ITEM_SLOTS.BACK]: new Item(
    ITEM_SLOTS.BACK,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.AGILITY]: 5, [STATS.CRITICAL_CHANCE]: 0.09 }
  ),
  [ITEM_SLOTS.CHEST]: new Item(
    ITEM_SLOTS.CHEST,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.AGILITY]: 10 }
  ),
  [ITEM_SLOTS.WRIST]: new Item(
    ITEM_SLOTS.WRIST,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.AGILITY]: 5, [STATS.ARMOR]: 5 }
  ),
  [ITEM_SLOTS.WEAPON]: new Item(
    ITEM_SLOTS.WEAPON,
    ITEM_TYPES.ASSASSIN,
    1,
    { [STATS.POWER]: 5 },
    { [STATS.AGILITY]: 5, [STATS.CRITICAL_CHANCE]: 0.09 }
  ),
  [ITEM_SLOTS.HANDS]: new Item(
    ITEM_SLOTS.HANDS,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.AGILITY]: 5, [STATS.CRITICAL_CHANCE]: 0.09 }
  ),
  [ITEM_SLOTS.LEGS]: new Item(
    ITEM_SLOTS.LEGS,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.AGILITY]: 5, [STATS.ARMOR]: 5 }
  ),
  [ITEM_SLOTS.FEET]: new Item(
    ITEM_SLOTS.FEET,
    ITEM_TYPES.LEATHER,
    1,
    { [STATS.ARMOR]: 5, [STATS.MAGIC_RESIST]: 5 },
    { [STATS.AGILITY]: 5, [STATS.ARMOR]: 5 }
  ),
  [ITEM_SLOTS.RING]: null,
  [ITEM_SLOTS.TRINKET]: null,
}

export const assassinS1Gear = {
  [ITEM_SLOTS.HEAD]: new Item(
    ITEM_SLOTS.HEAD,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.AGILITY]: 50,
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
      [STATS.AGILITY]: 50,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.HEALTH]: 100,
      [STATS.HPS]: 10,
    }
  ),
  [ITEM_SLOTS.SHOULDER]: new Item(
    ITEM_SLOTS.SHOULDER,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.AGILITY]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HEALTH]: 100,
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
      [STATS.AGILITY]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HPS]: 10,
      [STATS.LIFE_STEAL]: 0.5,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.CHEST]: new Item(
    ITEM_SLOTS.CHEST,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.AGILITY]: 50,
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
      [STATS.AGILITY]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HEALTH]: 100,
      [STATS.LIFE_STEAL]: 0.5,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.WEAPON]: new Item(
    ITEM_SLOTS.WEAPON,
    ITEM_TYPES.ASSASSIN,
    5,
    { [STATS.POWER]: 20 },
    {
      [STATS.AGILITY]: 50,
      [STATS.CRITICAL_CHANCE]: 1.41,
      [STATS.LIFE_STEAL]: 0.5,
    }
  ),
  [ITEM_SLOTS.HANDS]: new Item(
    ITEM_SLOTS.HANDS,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.AGILITY]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HEALTH]: 100,
      [STATS.LIFE_STEAL]: 0.5,
      [STATS.HPS]: 10,
    }
  ),
  [ITEM_SLOTS.LEGS]: new Item(
    ITEM_SLOTS.LEGS,
    ITEM_TYPES.LEATHER,
    4,
    { [STATS.ARMOR]: 15, [STATS.MAGIC_RESIST]: 15 },
    {
      [STATS.AGILITY]: 50,
      [STATS.CRITICAL_CHANCE]: 0.94,
      [STATS.HEALTH]: 100,
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
      [STATS.AGILITY]: 50,
      [STATS.CRITICAL_CHANCE]: 0.47,
      [STATS.HEALTH]: 100,
      [STATS.LIFE_STEAL]: 0.5,
      [STATS.TENACITY]: 1.64,
    }
  ),
  [ITEM_SLOTS.RING]: new Item(
    ITEM_SLOTS.RING,
    null,
    2,
    {},
    {
      [STATS.AGILITY]: 50,
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
      [STATS.MAGIC_RESIST]: 15,
    }
  ),
}