export const AGILITY_ARMOR_MULTIPLIER = 0.15
export const STRENGTH_HEALTH_MULTIPLIER = 2

export const STATS = {
  STRENGTH: 'STRENGTH',
  AGILITY: 'AGILITY',
  INTELLIGENCE: 'INTELLIGENCE',
  WISDOM: 'WISDOM',
  CRITICAL_CHANCE: 'CRITICAL_CHANCE',
  HPS: 'HPS', // HP/S
  MPS: 'MPS', // MP/S
  EP5: 'EP5', // Energy per sec
  HEALTH: 'HEALTH',
  MANA: 'MANA',
  ARMOR: 'ARMOR',
  MAGIC_RESIST: 'MAGIC_RESIST',
  RESILIENCE: 'RESILIENCE', // less mana burn %
  TENACITY: 'TENACITY', // less damage taken in CC
  LIFE_STEAL: 'LIFE_STEAL',
  INCREASED_RARITY: 'INCREASED_RARITY',
  POWER: 'POWER',
  SOCKETS: 'SOCKETS', // not implemented,
  ENERGY: 'ENERGY',
  RAGE: 'RAGE',
}

export const READABLE_STATS = {
  [STATS.STRENGTH]: 'Strength',
  [STATS.AGILITY]: 'Agility',
  [STATS.INTELLIGENCE]: 'Intelligence',
  [STATS.WISDOM]: 'Wisdom',
  [STATS.CRITICAL_CHANCE]: 'Crit Chance',
  [STATS.HPS]: 'Health/sec',
  [STATS.MPS]: 'Mana/Sec',
  [STATS.EP5]: 'Energy/Sec',
  [STATS.HEALTH]: 'Health',
  [STATS.MANA]: 'Mana',
  [STATS.ARMOR]: 'Armor',
  [STATS.MAGIC_RESIST]: 'Magic Resist',
  [STATS.RESILIENCE]: '% Reduced Mana burned',
  [STATS.TENACITY]: '-% Damage Taken in CC',
  [STATS.LIFE_STEAL]: 'Lifesteal',
  [STATS.INCREASED_RARITY]: 'Item Rarity',
  [STATS.POWER]: 'Power',
  [STATS.ENERGY]: 'Energy',
  [STATS.RAGE]: 'Rage',
}

export const PRIMARY_STATS = [STATS.STRENGTH, STATS.AGILITY, STATS.WISDOM, STATS.INTELLIGENCE]
export const PRIMARY_POWER_SCALING_MULTIPLIERS = {
  [STATS.STRENGTH]: 0.15,
  [STATS.AGILITY]: 0.125,
  [STATS.WISDOM]: 0.15,
  [STATS.INTELLIGENCE]: 0.125,
}

const MAX_MAIN_STAT = 50
const MAX_HEALTH_MANA = 100
const MAX_ARMOR_MR = 15

export const STAT_MAX_ITEM_VALUES = {
  [STATS.STRENGTH]: MAX_MAIN_STAT,
  [STATS.AGILITY]: MAX_MAIN_STAT,
  [STATS.WISDOM]: MAX_MAIN_STAT,
  [STATS.INTELLIGENCE]: MAX_MAIN_STAT,
  [STATS.HPS]: 10,
  [STATS.MPS]: 3,
  [STATS.ARMOR]: MAX_ARMOR_MR,
  [STATS.MAGIC_RESIST]: MAX_ARMOR_MR,
  [STATS.CRITICAL_CHANCE]: 0.47, // unsure, could be 0.5
  [STATS.TENACITY]: 1.64, // source iverson
  [STATS.RESILIENCE]: 2.04, // seems random
  [STATS.HEALTH]: MAX_HEALTH_MANA,
  [STATS.MANA]: MAX_HEALTH_MANA,
  [STATS.INCREASED_RARITY]: 2.04, // seems odd
  [STATS.LIFE_STEAL]: 0.5,
}

export const STAT_MIN_ITEM_VALUES = {
  [STATS.STRENGTH]: 1,
  [STATS.AGILITY]: 1,
  [STATS.WISDOM]: 1,
  [STATS.INTELLIGENCE]: 1,
  [STATS.HPS]: 1,
  [STATS.MPS]: 1,
  [STATS.ARMOR]: 1,
  [STATS.MAGIC_RESIST]: 1,
  [STATS.CRITICAL_CHANCE]: 0.01, // unsure, could be 0.5
  [STATS.TENACITY]: 0.01, // source iverson
  [STATS.RESILIENCE]: 0.01, // seems random
  [STATS.HEALTH]: 1,
  [STATS.MANA]: 1,
  [STATS.INCREASED_RARITY]: 0.01, // seems odd
  [STATS.LIFE_STEAL]: 0.01,
}