import {
  RESOURCE_TYPES,
} from '../data/constants'
import {
  CLASS_BASE_STATS,
  CLASS_PRIMARY_STATS,
  CLASS_RESOURCES,
} from '../data/classes'
import {
  critChanceFromAgi,
  critChanceFromInt,
  getArmorFromAgi,
  getHealthFromStr,
  getPowerFromPrimaryStat,
  magicResFromInt,
  manaFromInt,
  manaFromWisdom,
  mpsFromWisdom,
} from '../utils/stats'
import { STATS } from '../data/constants/stats'
import { EMPTY_ITEM_SET } from '../data/constants/items'

export default class AokClass {
  constructor (className) {
    this.className = className
    this.baseStats = CLASS_BASE_STATS[className]
    this.items = EMPTY_ITEM_SET
  }

  setAllItems (itemSet) {
    this.items = itemSet
  }

  get initialStats () {
    if (!this._initialStats) {
      const stats = { ...this.baseStats }

      Object.values(this.items).forEach(item => {
        if (item === null || item === undefined) { return }

        const itemStats = item.totalStats
        Object.keys(itemStats).forEach(stat => {
          const currentValue = stats[stat] || 0
          stats[stat] = currentValue + itemStats[stat]
        })
      })

      this._initialStats = stats
    }

    return this._initialStats
  }

  get armor () {
    const stats = this.initialStats
    const agiArmorValue = getArmorFromAgi(stats[STATS.AGILITY])

    return Math.round(stats[STATS.ARMOR] + agiArmorValue)
  }

  get power () {
    const primaryStats = this.primaryStatTypes
    const stats = this.initialStats

    const firstStatPower = getPowerFromPrimaryStat(primaryStats[0], stats[primaryStats[0]])
    const secondStatPower = getPowerFromPrimaryStat(primaryStats[1], stats[primaryStats[1]])

    return Math.round(stats[STATS.POWER] + firstStatPower + secondStatPower)
  }

  get primaryStatTypes () {
    return CLASS_PRIMARY_STATS[this.className]
  }

  get primaryStats () {
    const stats = this.initialStats

    return this.primaryStatTypes.map(statType => stats[statType])
  }

  get health () {
    const stats = this.initialStats

    const strHealth = getHealthFromStr(stats[STATS.STRENGTH])

    return stats[STATS.HEALTH] + strHealth
  }

  get criticalChance () {
    const stats = this.initialStats

    const agiCrit = critChanceFromAgi(stats[STATS.AGILITY])
    const intCrit = critChanceFromInt(stats[STATS.INTELLIGENCE])

    return stats[STATS.CRITICAL_CHANCE] + agiCrit + intCrit
  }

  get magicResist () {
    const intMr = magicResFromInt(this.initialStats[STATS.INTELLIGENCE])

    return Math.round(this.initialStats[STATS.MAGIC_RESIST] + intMr)
  }

  get resource () {
    let stats = this.initialStats

    switch (this.resourceType) {
      case RESOURCE_TYPES.energy:
        return stats[STATS.ENERGY]
      case RESOURCE_TYPES.rage:
        return stats[STATS.RAGE]
      case RESOURCE_TYPES.mana:
        const intMana = manaFromInt(stats.INTELLIGENCE)
        const wisMana = manaFromWisdom(stats.WISDOM)
        return Math.round(stats[STATS.MANA] + intMana + wisMana)
    }
  }

  get hps () {
    return this.initialStats[STATS.HPS]
  }

  get mps () {
    const stats = this.initialStats
    const wisMps = mpsFromWisdom(stats[STATS.WISDOM])

    return Math.round(stats[STATS.MPS] + wisMps)
  }

  get eps () {
    return this.initialStats[STATS.EP5]
  }

  get resourceType () {
    return CLASS_RESOURCES[this.className]
  }

  get lifeSteal () {
    return this.initialStats[STATS.LIFE_STEAL]
  }

  get itemRarity () {
    return this.initialStats[STATS.INCREASED_RARITY]
  }

  get tenacity () {
    return this.initialStats[STATS.TENACITY]
  }

  get resilience () {
    return this.initialStats[STATS.RESILIENCE]
  }

  get showMps () {
    return this.resourceType === RESOURCE_TYPES.mana
  }

  get showEps () {
    return this.resourceType === RESOURCE_TYPES.energy
  }
}