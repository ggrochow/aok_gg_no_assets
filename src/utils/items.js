import Item from '../classes/Item'
import { EMPTY_ITEM_SET } from '../data/constants/items'

export function getItemSetFromBuildString (buildString) {
  if (!buildString) { return null }

  const items = buildString.split('~').map(itemString => Item.createFromQueryString(itemString))

  const newItemSet = { ...EMPTY_ITEM_SET }
  items.forEach(item => {
    newItemSet[item.slot] = item
  })

  return newItemSet
}