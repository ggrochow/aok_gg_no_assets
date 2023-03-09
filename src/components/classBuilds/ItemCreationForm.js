import PropTypes from 'prop-types'
import {
  ARMOR_SLOTS,
  ITEM_SLOTS,
  MAX_ARMOR_MR_BASE_STAT,
  MAX_POWER_BASE_STAT,
  POSSIBLE_ITEM_STATS,
} from '../../data/constants/items'
import { CLASS_ARMOR_TYPES, CLASS_S1_GEAR, CLASSES } from '../../data/classes'
import { useState } from 'react'
import {
  PRIMARY_STATS, READABLE_STATS,
  STAT_MAX_ITEM_VALUES,
  STAT_MIN_ITEM_VALUES,
  STATS,
} from '../../data/constants/stats'
import Select from '../ui/Select'
import Item from '../../classes/Item'

const statSelectOptions = POSSIBLE_ITEM_STATS.map(stat => {
  return {
    value: stat,
    label: READABLE_STATS[stat],
  }
})

export default function ItemCreationForm ({ slot, className, onCreate }) {
  const isWeapon = slot === ITEM_SLOTS.WEAPON
  const isArmor = ARMOR_SLOTS.includes(slot)

  let initialBaseStats = {}
  if (isWeapon) {
    initialBaseStats = { [STATS.POWER]: 1 }
  } else if (isArmor) {
    initialBaseStats = { [STATS.ARMOR]: 1, [STATS.MAGIC_RESIST]: 1 }
  }

  const [baseStats, setBaseStats] = useState(initialBaseStats)
  const [stats, setStats] = useState([{ stat: STATS.HEALTH, value: 1 }])

  const addStatRow = () => {
    const newStats = [...stats]
    const firstStat = getStatSelectOptions()[0].value
    newStats.push({ stat: firstStat, value: STAT_MAX_ITEM_VALUES[firstStat] })
    setStats(newStats)
  }

  const removeStatRow = (index) => {
    const newStats = [...stats]
    newStats.splice(index, 1)

    setStats(newStats)
  }

  const getItemType = () => {
    if (isWeapon) {
      return className.toUpperCase()
    } else if (isArmor) {
      return CLASS_ARMOR_TYPES[className]
    }
  }

  const getItemStats = () => {
    const itemStats = {}
    stats.forEach(stat => {
      itemStats[stat.stat] = stat.value
    })

    return itemStats
  }

  const getItem = () => {
    return new Item(
      slot,
      getItemType(),
      isWeapon ? 5 : 4,
      baseStats,
      getItemStats()
    )
  }

  const getS1Item = () => {
    return CLASS_S1_GEAR[className][slot]
  }

  const getStatSelectOptions = (index) => {
    const currentStats = stats.map(stats => stats.stat)
    let statsToFilter = []
    currentStats.forEach((stat, i) => {
      if (i === index) { return }
      if (PRIMARY_STATS.includes(stat)) {
        statsToFilter = statsToFilter.concat(PRIMARY_STATS)
      } else {
        statsToFilter.push(stat)
      }
    })

    return statSelectOptions.filter(option => !statsToFilter.includes(option.value))
  }

  const handleStatsChange = (statIndex, value) => {
    const newStats = [...stats]
    const stat = stats[statIndex].stat
    let newValue = value
    if (newValue > STAT_MAX_ITEM_VALUES[stat]) {
      newValue = STAT_MAX_ITEM_VALUES[stat]
    } else if (newValue < 0) {
      newValue = 0
    }

    newStats[statIndex] = { stat, value: Number(newValue) }
    setStats(newStats)
  }

  const handleStatChange = (statIndex, newStat) => {
    const newStats = [...stats]
    newStats[statIndex] = { stat: newStat, value: STAT_MIN_ITEM_VALUES[newStat] }
    setStats(newStats)
  }

  const handleBaseStatsChange = (stat, value) => {
    let newVal = value

    if (newVal < 0) {
      newVal = 0
    }

    if (stat === STATS.POWER) {
      if (newVal > MAX_POWER_BASE_STAT) {
        newVal = MAX_POWER_BASE_STAT
      }
    } else {
      if (newVal > MAX_ARMOR_MR_BASE_STAT) {
        newVal = MAX_ARMOR_MR_BASE_STAT
      }
    }

    const stats = { ...baseStats }
    stats[stat] = Number(newVal)
    setBaseStats(stats)
  }

  return (
    <div>
      slot - { slot } | class - { className }

      { Object.keys(baseStats).map((stat) => {
        return (
          <div key={stat}>
            { stat }
            <input
              value={baseStats[stat]}
              onChange={(e) => handleBaseStatsChange(stat, e.target.value)}
            />
          </div>
        )
      })}

      { (stats).map((stat, index) => {
        return (
          <div key={stat.stat}>
            <Select
              options={getStatSelectOptions(index)}
              onChange={(e) => handleStatChange(index, e.target.value)}
              value={stat.stat}
            />
            <input
              value={stat.value}
              onChange={(e) => handleStatsChange(index, e.target.value)}
            />
            <button onClick={() => removeStatRow(index)}>Remove Stat</button>
          </div>
        )
      })}

      { stats.length < 5 && (
        <>
          <button onClick={addStatRow}>Add Stat</button>
          <br/>
        </>
      )}

      <button onClick={() => onCreate(getItem())}>Add Custom Item</button>
      <button onClick={() => onCreate(getS1Item())}>Add S1 Item</button>
    </div>
  )
}

ItemCreationForm.propTypes = {
  slot: PropTypes.oneOf(Object.values(ITEM_SLOTS)).isRequired,
  className: PropTypes.oneOf(Object.values(CLASSES)).isRequired,
}