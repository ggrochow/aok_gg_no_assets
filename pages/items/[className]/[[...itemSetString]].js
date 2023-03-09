import {
  CLASS_S1_GEAR,
  CLASS_STARTER_GEAR,
  CLASSES,
} from '../../../src/data/classes'
import AokClass from '../../../src/classes/AokClass'
import PanelBackground from '../../../src/components/ui/PanelBackground'
import PanelCard from '../../../src/components/ui/PanelCard'
import { armorMagicResToPercent } from '../../../src/utils/stats'
import ItemRack from '../../../src/components/classBuilds/ItemRack'
import { useEffect, useState } from 'react'
import { EMPTY_ITEM_SET } from '../../../src/data/constants/items'
import ClassPicker from '../../../src/components/builds/ClassPicker'
import Modal from '../../../src/components/ui/Modal'
import ItemCreationForm
  from '../../../src/components/classBuilds/ItemCreationForm'
import { useRouter } from 'next/router'
import { getItemSetFromBuildString } from '../../../src/utils/items'
import {
  capitalizeFirstLetter,
} from '../../../src/utils'
import { READABLE_STATS, STATS } from '../../../src/data/constants/stats'
import MyHead from '../../../src/components/MyHead'

export default function ItemSetString ({ className, itemSetString }) {
  const router = useRouter()

  const [itemSet, setItemSet] = useState(() => getItemSetFromBuildString(itemSetString) || EMPTY_ITEM_SET)
  const [createItemSlot, setCreateItemSlot] = useState(null)
  const aokClass = new AokClass(className)
  aokClass.setAllItems(itemSet)

  useEffect(() => {
    if (itemSetString) {
      setItemSet(getItemSetFromBuildString(itemSetString))
    } else {
      setItemSet(EMPTY_ITEM_SET)
    }
  }, [className, itemSetString])

  const equipStarter = () => {
    updateItems(CLASS_STARTER_GEAR[className])
  }

  const equipS1Gear = () => {
    updateItems(CLASS_S1_GEAR[className])
  }

  const clearItems = () => {
    updateItems(EMPTY_ITEM_SET)
  }

  const updateItems = (items) => {
    setItemSet(items)
    router.replace(getItemSetUrl(items), null, { shallow: true })
  }

  const getItemSetUrl = (items) => {
    const itemStringArray = []
    Object.values(items).forEach((item) => {
      if (item) {
        itemStringArray.push(item.toQueryString())
      }
    })

    let url = `/items/${className}`
    if (itemStringArray.length > 0) {
      url = `${url}/${itemStringArray.join('~')}`
    }

    return url
  }

  const copyBuildToClipboard = () => {
    const url = `${window.location.origin}${getItemSetUrl(itemSet)}`

    navigator.clipboard.writeText(url)
  }

  const handleSlotClick = (slot) => {

    if (itemSet[slot]) {
      let newItemSet = {...itemSet}
      newItemSet[slot] = null

      updateItems(newItemSet)
    } else {
      setCreateItemSlot(slot)
    }
  }

  const handleCreateItem = (item) => {
    const newItemSet = { ...itemSet }
    newItemSet[createItemSlot] = item

    updateItems(newItemSet)
    setCreateItemSlot(null)
  }

  const closeModal = () => {
    setCreateItemSlot(null)
  }

  return (
    <>
      <MyHead
        title={`${capitalizeFirstLetter(className)} Item Set`}
        description={'BETA | Arena of Kings item set planner'}
      />

      <ClassPicker
        urlBuilder={(className) => `/items/${className}`}
        selectedClass={className}
      />

      <PanelBackground>
        <PanelCard>
          <button onClick={equipStarter}>Starter Gear</button>
          <button onClick={equipS1Gear}>S1 Gear</button>
          <button onClick={clearItems}>No Gear</button>
          <button onClick={copyBuildToClipboard}>Copy set URL</button>
        </PanelCard>

        <PanelCard>
          <ItemRack itemSet={itemSet} onSlotClick={handleSlotClick} />
        </PanelCard>

        <PanelCard>
          { READABLE_STATS[aokClass.primaryStatTypes[0]] } - {aokClass.primaryStats[0]}
        </PanelCard>

        <PanelCard>
          { READABLE_STATS[aokClass.primaryStatTypes[1]] } - {aokClass.primaryStats[1]}
        </PanelCard>

        -

        <PanelCard>
          { READABLE_STATS[STATS.POWER] } - { aokClass.power }
        </PanelCard>

        <PanelCard>
          { READABLE_STATS[STATS.CRITICAL_CHANCE] } - { aokClass.criticalChance.toFixed(2) }%
        </PanelCard>

        <PanelCard>
          { READABLE_STATS[STATS.HEALTH] } - { aokClass.health }
        </PanelCard>

        <PanelCard>
          { capitalizeFirstLetter(aokClass.resourceType) } - { aokClass.resource }
        </PanelCard>

        -

        <PanelCard>
          { READABLE_STATS[STATS.ARMOR] } - { aokClass.armor } - { armorMagicResToPercent(aokClass.armor).toFixed(2) }%
        </PanelCard>

        <PanelCard>
          { READABLE_STATS[STATS.MAGIC_RESIST] } - { aokClass.magicResist } - { armorMagicResToPercent(aokClass.magicResist).toFixed(2) }%
        </PanelCard>

        <PanelCard>
          { READABLE_STATS[STATS.LIFE_STEAL] } - { aokClass.lifeSteal.toFixed(2) }%
        </PanelCard>

        <PanelCard>
          { READABLE_STATS[STATS.HPS] } - { aokClass.hps }
        </PanelCard>

        { aokClass.showMps && (
          <PanelCard>
            { READABLE_STATS[STATS.MPS] } - { aokClass.mps }
          </PanelCard>
        )}

        { aokClass.showEps && (
          <PanelCard>
            { READABLE_STATS[STATS.EP5] } - { aokClass.eps }
          </PanelCard>
        )}

        <PanelCard>
          { READABLE_STATS[STATS.INCREASED_RARITY] } - { aokClass.itemRarity.toFixed(2) }%
        </PanelCard>

        <PanelCard>
          { READABLE_STATS[STATS.TENACITY] } - { aokClass.tenacity.toFixed(2) }%
        </PanelCard>

        <PanelCard>
          { READABLE_STATS[STATS.RESILIENCE] } - { aokClass.resilience.toFixed(2) }%
        </PanelCard>

      </PanelBackground>

      { createItemSlot && (
        <Modal onClose={closeModal}>
          <ItemCreationForm className={className} slot={createItemSlot} onCreate={handleCreateItem}/>
        </Modal>
      )}
    </>
  )
}

export async function getStaticProps (context) {
  const { className, itemSetString } = context.params

  const props = {
    className,
  }

  if (itemSetString) {
    props.itemSetString = itemSetString[0]
  }

  return { props }
}

export async function getStaticPaths () {
  const paths = []

  Object.values(CLASSES).forEach(className => {
    paths.push({ params: { className, itemSetString: [] } })
  })

  return {
    paths,
    fallback: 'blocking',
  }
}
