import EmptyHeadSlotImg
  from '../../../public/item_icons/inventory_slot_head.png'
import EmptyNeckSlotImg
  from '../../../public/item_icons/inventory_slot_neck.png'
import EmptyShoulderSlotImg
  from '../../../public/item_icons/inventory_slot_shoulder.png'
import EmptyBackSlotImg
  from '../../../public/item_icons/inventory_slot_back.png'
import EmptyChestSlotImg
  from '../../../public/item_icons/inventory_slot_chest.png'
import EmptyWristSlotImg
  from '../../../public/item_icons/inventory_slot_wrist.png'
import EmptyWeaponSlotImg
  from '../../../public/item_icons/inventory_slot_weapon.png'
import EmptyHandsSlotImg
  from '../../../public/item_icons/inventory_slot_hands.png'
import EmptyLegsSlotImg
  from '../../../public/item_icons/inventory_slot_legs.png'
import EmptyFeetSlotImg
  from '../../../public/item_icons/inventory_slot_feet.png'
import EmptyRingSlotImg
  from '../../../public/item_icons/inventory_slot_ring.png'
import EmptyTrinketSlotImg
  from '../../../public/item_icons/inventory_slot_trinket.png'
import Image from 'next/image'
import PropTypes from 'prop-types'
import Item from '../../classes/Item'
import ItemToolTip from './ItemTooltip'
import ReactTooltip from 'react-tooltip'
import styles from './ItemIcon.module.scss'
import { ITEM_SLOTS } from '../../data/constants/items'

const itemSlotMapping = {
  [ITEM_SLOTS.HEAD]: EmptyHeadSlotImg,
  [ITEM_SLOTS.NECK]: EmptyNeckSlotImg,
  [ITEM_SLOTS.SHOULDER]: EmptyShoulderSlotImg,
  [ITEM_SLOTS.BACK]: EmptyBackSlotImg,
  [ITEM_SLOTS.CHEST]: EmptyChestSlotImg,
  [ITEM_SLOTS.WRIST]: EmptyWristSlotImg,
  [ITEM_SLOTS.WEAPON]: EmptyWeaponSlotImg,
  [ITEM_SLOTS.HANDS]: EmptyHandsSlotImg,
  [ITEM_SLOTS.LEGS]: EmptyLegsSlotImg,
  [ITEM_SLOTS.FEET]: EmptyFeetSlotImg,
  [ITEM_SLOTS.RING]: EmptyRingSlotImg,
  [ITEM_SLOTS.TRINKET]: EmptyTrinketSlotImg,
}

export default function ItemIcon ({ item, slot }) {
  let image
  if (item) {
    image = <Image
      src={item.imageFilename}
      height={48}
      width={48}
      layout={'fixed'}
      alt={slot}
    />
  } else {
    image = <Image
      alt={slot}
      src={itemSlotMapping[slot]}
      placeholder={'blur'}
    />
  }

  return (
    <div className={styles.container}>
      <a data-tip data-for={slot}>
        {image}
      </a>
      { item && (
        <ReactTooltip
          id={slot}
          place={'bottom'}
          effect={'solid'}
          border={true}
          borderColor={'#444444'}
          backgroundColor={'#242424'}
        >
          <ItemToolTip item={item}/>
        </ReactTooltip>
      )}
    </div>
  )

}

ItemIcon.propTypes = {
  item: PropTypes.instanceOf(Item),
  slot: PropTypes.oneOf(Object.values(ITEM_SLOTS)).isRequired,
}