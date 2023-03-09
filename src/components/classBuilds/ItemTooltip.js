import PropTypes from 'prop-types'
import Item from '../../classes/Item'
import { READABLE_STATS } from '../../data/constants/stats'

export default function ItemToolTip ({ item }) {
  if (!item) {
    return null
  }

  return (
    <div>
      <p>{'*'.repeat(item.itemLevel)}</p>
      { Object.keys(item.baseStats).map(stat => {
        return <p key={stat}>{READABLE_STATS[stat]} - {item.baseStats[stat] }</p>
      })}

      { Object.keys(item.baseStats).length > 0 && <hr/> }

      { Object.keys(item.stats).map(stat => {
        return <p key={stat}>{READABLE_STATS[stat]} - {item.stats[stat] }</p>
      })}
    </div>
  )
}

ItemToolTip.propTypes = {
  item: PropTypes.instanceOf(Item),
}