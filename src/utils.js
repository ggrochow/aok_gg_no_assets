import {
    EMPTY_BUILD_SLOT_ID,
    EMPTY_BUILD_STRING,
} from './data/constants'
import { CLASSES } from './data/classes'

export function capitalizeFirstLetter (string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`
}

export function capitalizeOnlyFirstLetter (string) {
    return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`
}

export function getBuildStingFromSelectedSpells (spellIds) {
    return spellIds.map(spellId => {
        if (spellId === undefined || spellId === null) return '00'
        return Number(spellId).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    }).join('')
}

export function getSelectedSpellsFromBuildString (buildString) {
    return [...new Array(8)].map((_, index) => {
        const stringIndex = index * 2
        const part = Number(buildString.slice(stringIndex, stringIndex+2))
        if (isNaN(part)) {
            return EMPTY_BUILD_SLOT_ID
        }

        return part
    })
}

export function getDefaultBuildString (className) {
    switch (className) {
        case CLASSES.ranger:
            return '0302071211061310'

        case CLASSES.scholar:
            return '1409060403110715'

        case CLASSES.wizard:
            return '0701031508171905'

        case CLASSES.paladin:
            return '0215050603130711'

        case CLASSES.nihilist:
            return '0806071703121504'

        case CLASSES.mystic:
            return '1015090405080314'

        case CLASSES.lich:
            return '1608111215010317'

        case CLASSES.elder:
            return '0604050813031007'

        case CLASSES.champion:
            return '1014040116060709'

        case CLASSES.assassin:
            return '0106070411131002'

        default:
            return EMPTY_BUILD_STRING
    }
}

export function getDefaultBuildArray (className) {
    return getSelectedSpellsFromBuildString(getDefaultBuildString(className))
}

export function randomArrayElement (array) {
    return array[Math.floor(Math.random() * array.length)]
}

export function browserDownloadJson (dataString) {
    if(!dataString) {
        console.error('Console.save: No data')
        return
    }

    const blob = new Blob([dataString], {type: 'text/json'}),
      e    = document.createEvent('MouseEvents'),
      a    = document.createElement('a')

    a.download = 'options.json'
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
    a.remove()
}