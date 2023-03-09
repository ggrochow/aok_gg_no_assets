import { ARMOR_SLOTS, ITEM_SLOTS, ITEM_TYPES } from '../data/constants/items'
import { ALPHABET_ARRAY } from '../data/constants'
import { STATS } from '../data/constants/stats'
import { getTypeFromAlpha } from '../utils/stats'

export default class Item {
  constructor (slot, itemType, itemLevel, baseStats, stats) {
    this.slot = slot
    this.itemType = itemType // weapon = className | armor = leather/cloth/plate
    this.itemLevel = itemLevel // *s
    this.baseStats = baseStats
    this.stats = stats
  }

  static createFromQueryString (queryString) {
    const slotAlpha = queryString[0]
    const itemSlot = getTypeFromAlpha(slotAlpha, ITEM_SLOTS)

    const typeAlpha = queryString[1]
    const itemType = getTypeFromAlpha(typeAlpha, ITEM_TYPES)

    const itemLevelAlpha = queryString[2]
    const itemLevel = ALPHABET_ARRAY.indexOf(itemLevelAlpha)

    const baseStats = {}
    if (itemSlot === ITEM_SLOTS.WEAPON) {
      baseStats[STATS.POWER] = Number(queryString.slice(4, 6))

    } else if (ARMOR_SLOTS.includes(itemSlot)) {

      const firstStatAlpha = queryString[3]
      const firstStatType = getTypeFromAlpha(firstStatAlpha, STATS)
      baseStats[firstStatType] = Number(queryString.slice(4, 6))

      const secondStatAlpha = queryString[6]
      const secondStatType = getTypeFromAlpha(secondStatAlpha, STATS)
      baseStats[secondStatType] = Number(queryString.slice(7, 9))
    }

    const extraStats = {}
    const extraStatsArray = queryString.split('-').slice(1)
    extraStatsArray.forEach(statString => {
      const statAlpha = statString[0]
      const statType = getTypeFromAlpha(statAlpha, STATS)

      extraStats[statType] = Number(statString.slice(1))
    })

    return new Item(itemSlot, itemType, itemLevel, baseStats, extraStats)
  }

  toQueryString () {
    let outString = ''

    // itemSlot
    const itemSlotIndex = Object.keys(ITEM_SLOTS).indexOf(this.slot)
    outString += ALPHABET_ARRAY[itemSlotIndex]

    // itemType single char
    if (this.itemType) {
      const itemTypeIndex = Object.keys(ITEM_TYPES).indexOf(this.itemType)
      outString += ALPHABET_ARRAY[itemTypeIndex]
    } else {
      outString += '_'
    }

    // itemLevel single char
    outString += ALPHABET_ARRAY[this.itemLevel]

    // baseStats char##
    const statsKeys = Object.keys(STATS)
    Object.keys(this.baseStats).forEach(stat => {
      const statIndex = statsKeys.indexOf(stat)
      const statValue = `${this.baseStats[stat]}`.padStart(2, '0')
      outString += `${ALPHABET_ARRAY[statIndex]}${statValue}`
    })

    // stats -char###
    Object.keys(this.stats).forEach(stat => {
      const statIndex = statsKeys.indexOf(stat)
      const statValue = `${this.stats[stat]}`.padStart(3, '0')
      outString += `-${ALPHABET_ARRAY[statIndex]}${statValue}`
    })


    return outString
  }

  get totalStats () {
    const totalStats = {}

    Object.keys(this.baseStats).forEach(stat => {
      totalStats[stat] = this.baseStats[stat]
    })

    Object.keys(this.stats).forEach(stat => {
      const currentValue = totalStats[stat] || 0
      totalStats[stat] = currentValue + this.stats[stat]
    })

    return totalStats
  }

  get imageFilename () {
    switch (this.slot) {
      case ITEM_SLOTS.RING:
      case ITEM_SLOTS.NECK:
      case ITEM_SLOTS.TRINKET:
        return `/item_icons/${this.slot}_T${this.itemLevel}.png`

      case ITEM_SLOTS.BACK:
        return `/item_icons/${this.slot}_CLOTH_T${this.itemLevel}.png`

      default:
        return `/item_icons/${this.slot}_${this.itemType}_T${this.itemLevel}.png`
    }
  }
}