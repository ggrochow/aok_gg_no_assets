import { spellList } from './spellList'
import Spell from '../classes/Spell'

// spellClassList = { className: { id: Spell } }
const spellClassList = {}

spellList.forEach(spellJson => {
  spellClassList[spellJson.class] = spellClassList[spellJson.class] || {}
  const spell = new Spell(spellJson)
  spellClassList[spellJson.class][spell.id] = spell
})


export function getSpellsByClass (className) {
  const spellList = Object.values(spellClassList[className] || {})
  return spellList.sort((spellA, spellB) => {
    const nameA = spellA.name
    const nameB = spellB.name
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
}

export function getSpellByName (spellName) {
  return getAllSpells().find(spell => spell.name === spellName)
}

export function getSpellByIdAndClass (id, className) {
  return spellClassList?.[className]?.[id]
}

export function getAllSpells () {
  let spells = []
  Object.values(spellClassList).forEach(classSpells => {
    spells = spells.concat(Object.values(classSpells))
  })

  return spells
}