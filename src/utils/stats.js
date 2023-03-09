import {
  AGILITY_ARMOR_MULTIPLIER,
  PRIMARY_POWER_SCALING_MULTIPLIERS,
  STRENGTH_HEALTH_MULTIPLIER,
} from '../data/constants/stats'
import { ALPHABET_ARRAY } from '../data/constants'

export function armorMagicResToPercent (value) {
  const damageReduction = (value / (value + 2400)) * 100
  return Math.round(damageReduction * 100) / 100
}

export function getPowerFromPrimaryStat (stat, value) {
  return value * PRIMARY_POWER_SCALING_MULTIPLIERS[stat]
}

export function getArmorFromAgi (value) {
  return value * AGILITY_ARMOR_MULTIPLIER || 0
}

export function getHealthFromStr (value) {
  return value * STRENGTH_HEALTH_MULTIPLIER || 0
}

export function critChanceFromAgi (value) {
  return 0.01875 * (value * 0.2) || 0
}

export function critChanceFromInt (value) {
  return 0.01875 * (value * 0.2) || 0
}

export function manaFromInt (value) {
  return value || 0
}

export function magicResFromInt (value) {
  return value * 0.1 || 0
}

export function manaFromWisdom (value) {
  return value * 2 || 0
}

export function mpsFromWisdom (value) {
  return value / 5.0 * 0.1 || 0
}

export function getTypeFromAlpha (alpha, typeObj) {
  const index = ALPHABET_ARRAY.indexOf(alpha)
  return Object.keys(typeObj)[index]
}