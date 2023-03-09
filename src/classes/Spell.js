import { RESOURCE_TYPES } from '../data/constants'
import { capitalizeFirstLetter } from '../utils'
import { CLASS_DEFAULT_POWER, CLASSES } from '../data/classes'

export default class Spell {
  constructor (spell) {
    this.className = spell.class
    this.name = spell.name
    this.fileName = spell.fileName
    this.cost = spell.cost
    this.cast = spell.cast
    this.range = spell.range
    this.cooldown = spell.cooldown
    this.description = spell.desc
    this.id = spell.id
    this.scaling = spell.scaling
  }

  get imageFileName () {
    return `/spell_icons/${this.fileName}.png`
  }

  get costDisplayText () {
    if (this.cost === undefined || this.cost === null || this.cost === 0) {
      return undefined
    }

    return `${this.cost} ${capitalizeFirstLetter(this.resourceType)}`
  }

  get rangeDisplayText () {
    if (this.range === undefined || this.range === null) {
      return undefined
    }

    return `${this.range} yd range`
  }

  get castDisplayText () {
    if (this.cast === 0) {
      return 'Instant'
    } else if (this.cast) {
      return `${this.cast} sec cast`
    }
  }

  get cooldownDisplayText () {
    if (this.cooldown === undefined || this.cooldown === null) {
      return undefined
    }

    return `${this.cooldown} sec cooldown`
  }

  get resourceType () {
    if (this.className === CLASSES.champion) {
      return RESOURCE_TYPES.rage
    } else if (this.className === CLASSES.ranger || this.className === CLASSES.assassin) {
      return RESOURCE_TYPES.energy
    } else {
      return RESOURCE_TYPES.mana
    }
  }

  parseRawSpellDesc (parser, power = CLASS_DEFAULT_POWER[this.className]) {
    // loader passed in from component to prevent api module conflicts with react
    return parser(this.description, this.scaling, power)
  }
}