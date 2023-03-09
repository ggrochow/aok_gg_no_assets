import styles from './ItemRack.module.scss'
import PropTypes from 'prop-types'
import ItemIcon from './ItemIcon'
import { ITEM_SLOTS } from '../../data/constants/items'

const itemSlotOrder = [
  ITEM_SLOTS.HEAD,
  ITEM_SLOTS.NECK,
  ITEM_SLOTS.SHOULDER,
  ITEM_SLOTS.BACK,
  ITEM_SLOTS.CHEST,
  ITEM_SLOTS.WRIST,
  ITEM_SLOTS.WEAPON,
  ITEM_SLOTS.HANDS,
  ITEM_SLOTS.LEGS,
  ITEM_SLOTS.FEET,
  ITEM_SLOTS.RING,
  ITEM_SLOTS.TRINKET,
]

export default function ItemRack ({ itemSet, onSlotClick }) {

  return (
    <div className={styles.container}>

      { itemSlotOrder.map(slot => {
        return (
          <div
            className={styles.iconSlot}
            key={slot}
            onClick={() => onSlotClick(slot)}
          >
            <ItemIcon item={itemSet[slot]} slot={slot} />
          </div>
        )
      })}
    </div>
  )
}

ItemRack.propTypes = {
  itemSet: PropTypes.object.isRequired,
  onSlotClick: PropTypes.func,
}