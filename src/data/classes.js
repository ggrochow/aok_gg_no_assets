import { RESOURCE_TYPES} from './constants'
import { STATS } from './constants/stats'
import {
  assassinS1Gear,
  assassinStarterGear,
  assassinStats,
} from './classes/assassin'
import { mysticS1Gear, mysticStarterGear, mysticStats } from './classes/mystic'
import {
  championS1Gear,
  championStats,
  champStarterGear,
} from './classes/champion'
import { elderS1Gear, elderStarterGear, elderStats } from './classes/elder'
import { lichS1Gear, lichStarterGear, lichStats } from './classes/lich'
import {
  nihilistBaseGear,
  nihilistS1Gear,
  nihilistStats,
} from './classes/nihilist'
import {
  paladinS1Gear,
  paladinStarterGear,
  paladinStats,
} from './classes/paladin'
import { rangerS1Gear, rangerStarterGear, rangerStats } from './classes/ranger'
import {
  scholarS1Gear,
  scholarStarterGear,
  scholarStats,
} from './classes/scholar'
import { wizardS1Gear, wizardStarterGear, wizardStats } from './classes/wizard'
import { ITEM_TYPES } from './constants/items'

export const CLASSES = {
  assassin: 'assassin',
  champion: 'champion',
  elder: 'elder',
  lich: 'lich',
  mystic: 'mystic',
  nihilist: 'nihilist',
  paladin: 'paladin',
  ranger: 'ranger',
  scholar: 'scholar',
  wizard: 'wizard',
}

export const CLASS_DEFAULT_POWER = {
  [CLASSES.ranger]: 493,
  [CLASSES.champion]: 503,
  [CLASSES.assassin]: 493,
  [CLASSES.elder]: 503,
  [CLASSES.lich]: 493,
  [CLASSES.mystic]: 503,
  [CLASSES.nihilist]: 501,
  [CLASSES.paladin]: 519,
  [CLASSES.scholar]: 503,
  [CLASSES.wizard]: 493,
}

export const CLASS_STARTER_GEAR_POWER = {
  [CLASSES.ranger]: 505,
  [CLASSES.champion]: 515,
  [CLASSES.assassin]: 505,
  [CLASSES.elder]: 515,
  [CLASSES.lich]: 505,
  [CLASSES.mystic]: 515,
  [CLASSES.nihilist]: 513,
  [CLASSES.paladin]: 531,
  [CLASSES.scholar]: 515,
  [CLASSES.wizard]: 505,
}

export const CLASS_S1_GEAR_POWER = {
  [CLASSES.assassin]: 588,
  [CLASSES.champion]: 615,
  [CLASSES.elder]: 610,
  [CLASSES.lich]: 588,
  [CLASSES.mystic]: 612,
  [CLASSES.nihilist]: 596,
  [CLASSES.paladin]: 628,
  [CLASSES.ranger]: 591,
  [CLASSES.scholar]: 612,
  [CLASSES.wizard]: 588,
}

export const CLASS_PRIMARY_STATS = {
  [CLASSES.assassin]: [STATS.AGILITY, STATS.STRENGTH],
  [CLASSES.mystic]: [STATS.WISDOM, STATS.INTELLIGENCE],
  [CLASSES.ranger]: [STATS.AGILITY, STATS.STRENGTH],
  [CLASSES.champion]: [STATS.STRENGTH, STATS.AGILITY],
  [CLASSES.elder]: [STATS.WISDOM, STATS.AGILITY],
  [CLASSES.lich]: [STATS.INTELLIGENCE, STATS.STRENGTH],
  [CLASSES.nihilist]: [STATS.INTELLIGENCE, STATS.STRENGTH],
  [CLASSES.paladin]: [STATS.STRENGTH, STATS.WISDOM],
  [CLASSES.scholar]: [STATS.WISDOM, STATS.INTELLIGENCE],
  [CLASSES.wizard]: [STATS.INTELLIGENCE, STATS.WISDOM],
}

export const CLASS_BASE_STATS = {
  [CLASSES.assassin]: assassinStats,
  [CLASSES.champion]: championStats,
  [CLASSES.elder]: elderStats,
  [CLASSES.lich]: lichStats,
  [CLASSES.mystic]: mysticStats,
  [CLASSES.nihilist]: nihilistStats,
  [CLASSES.paladin]: paladinStats,
  [CLASSES.ranger]: rangerStats,
  [CLASSES.scholar]: scholarStats,
  [CLASSES.wizard]: wizardStats,
}

export const CLASS_STARTER_GEAR = {
  [CLASSES.assassin]: assassinStarterGear,
  [CLASSES.champion]: champStarterGear,
  [CLASSES.elder]: elderStarterGear,
  [CLASSES.lich]: lichStarterGear,
  [CLASSES.mystic]: mysticStarterGear,
  [CLASSES.nihilist]: nihilistBaseGear,
  [CLASSES.paladin]: paladinStarterGear,
  [CLASSES.ranger]: rangerStarterGear,
  [CLASSES.scholar]: scholarStarterGear,
  [CLASSES.wizard]: wizardStarterGear,
}

export const CLASS_S1_GEAR = {
  [CLASSES.assassin]: assassinS1Gear,
  [CLASSES.champion]: championS1Gear,
  [CLASSES.elder]: elderS1Gear,
  [CLASSES.lich]: lichS1Gear,
  [CLASSES.mystic]: mysticS1Gear,
  [CLASSES.nihilist]: nihilistS1Gear,
  [CLASSES.paladin]: paladinS1Gear,
  [CLASSES.ranger]: rangerS1Gear,
  [CLASSES.scholar]: scholarS1Gear,
  [CLASSES.wizard]: wizardS1Gear,
}

export const CLASS_RESOURCES = {
  [CLASSES.assassin]: RESOURCE_TYPES.energy,
  [CLASSES.champion]: RESOURCE_TYPES.rage,
  [CLASSES.elder]: RESOURCE_TYPES.mana,
  [CLASSES.lich]: RESOURCE_TYPES.mana,
  [CLASSES.mystic]: RESOURCE_TYPES.mana,
  [CLASSES.ranger]: RESOURCE_TYPES.energy,
  [CLASSES.nihilist]: RESOURCE_TYPES.mana,
  [CLASSES.paladin]: RESOURCE_TYPES.mana,
  [CLASSES.scholar]: RESOURCE_TYPES.mana,
  [CLASSES.wizard]: RESOURCE_TYPES.mana,
}

export const CLASS_ARMOR_TYPES = {
  [CLASSES.assassin]: ITEM_TYPES.LEATHER,
  [CLASSES.champion]: ITEM_TYPES.PLATE,
  [CLASSES.elder]: ITEM_TYPES.LEATHER,
  [CLASSES.lich]: ITEM_TYPES.CLOTH,
  [CLASSES.mystic]: ITEM_TYPES.CLOTH,
  [CLASSES.ranger]: ITEM_TYPES.LEATHER,
  [CLASSES.nihilist]: ITEM_TYPES.LEATHER,
  [CLASSES.paladin]: ITEM_TYPES.PLATE,
  [CLASSES.scholar]: ITEM_TYPES.CLOTH,
  [CLASSES.wizard]: ITEM_TYPES.CLOTH,
}