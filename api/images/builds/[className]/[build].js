import {
  getSelectedSpellsFromBuildString,
} from '../../../../src/utils'
import { getSpellByIdAndClass } from '../../../../src/data/spells'
import images from 'images'
import { CLASSES } from '../../../../src/data/classes'

export default function handler (req, res) {
  const imageDir = `./public/spell_icons`
  const iconSize = 48

  const { className, build } = req.query

  if (CLASSES[className] === undefined) {
    console.error("BAD CLASSNAME FOUND", className)
    return res.status(400).send()
  }

  const buildArray = getSelectedSpellsFromBuildString(build)
  for (let index in buildArray) {
    const spellId = buildArray[index]
    if (spellId !== 0) {
      const spell = getSpellByIdAndClass(spellId, className)
      if (spell === undefined) {
        console.error('BAD SPELL FOUND', spellId, className)
        return res.status(400).send()
      }
    }
  }

  const barImage = images(iconSize * 8, iconSize)

  buildArray.forEach((spellId, index) => {
    let image
    if (spellId === 0) {
      return
    } else {
      const spell = getSpellByIdAndClass(spellId, className)
      image = images(`${imageDir}/${spell.fileName}.png`)
    }

    const xOffset = iconSize * index
    const yOffset = 0
    barImage.draw(image, xOffset, yOffset)
  })

  const imageBuffer = barImage.encode('jpg')

  res.setHeader('Cache-Control', 's-maxage=2628000') // vercel edge cache for 1month
  res.setHeader('Content-Type', 'image/jpg')
  return res.status(200).send(imageBuffer)
}