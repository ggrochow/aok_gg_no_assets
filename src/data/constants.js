
export const RESOURCE_TYPES = {
  rage: 'rage',
  energy: 'energy',
  mana: 'mana',
}

export const EMPTY_BUILD_STRING = '0000000000000000'
export const EMPTY_BUILD_SLOT_ID = 0
export const EMPTY_BUILD_ARRAY = [EMPTY_BUILD_SLOT_ID, EMPTY_BUILD_SLOT_ID, EMPTY_BUILD_SLOT_ID, EMPTY_BUILD_SLOT_ID, EMPTY_BUILD_SLOT_ID, EMPTY_BUILD_SLOT_ID, EMPTY_BUILD_SLOT_ID, EMPTY_BUILD_SLOT_ID]

export const ALPHABET_ARRAY = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 97))