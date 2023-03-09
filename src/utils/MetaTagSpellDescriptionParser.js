export function parseMetaTagSpellDesc (rawDescription, scaling, power) {
  let description = ''

  let workingDesc = rawDescription.slice(7).split('') // remove [WHITE] without closing tag
  let tempString = ''
  let index = 0
  let damageIndex = 0

  const addText = (text) => {
    let str = text

    if (str === '%d') {
      // damage values should always be a single '%d' inside orange brackets.
      // meaning that we should be able to replace the entire string with the value
      const damageScaling = scaling[damageIndex]
      if (!damageScaling) {
        console.warn('Unable to calculate damage for index', damageIndex, rawDescription)
      }

      if (typeof damageScaling === 'function') {
        str = damageScaling(power)
      } else {
        str = damageScaling * power
      }

      str = Math.floor(str)
      damageIndex++
    }

    description += str
    description += ' '
    tempString = ''
  }

  while (index < workingDesc.length) {
    const character = workingDesc[index]

    if (character === '[') {
      // handle special color formatting
      addText(tempString)

      // find next closing bracket
      let closingBracketIndex = workingDesc.findIndex((char, i) => {
        if (i < index) { return false }
        return char === ']'
      })

      if (index + 1 === closingBracketIndex) {
        // end of color block closing brackets, should never see this
        console.warn('Hit end of colored text brackets', character, index, rawDescription)
      } else if (index >= 0) {
        // end of color block opening brackets,
        // characters in between index and closing are the color the text should be
        const color = workingDesc.slice(index + 1, closingBracketIndex).join('').toLowerCase()


        // find the closing pair of brackets for this color block
        const colorBlockEndBracketIndex = workingDesc.findIndex((char, i) => {
          if (i < index) { return false }
          return char === '[' && workingDesc[i+1] === ']'
        })

        if (colorBlockEndBracketIndex >= 0) {
          // characters in-between the start+closing pair of brackets are the text to color
          let text = workingDesc.slice(closingBracketIndex+1, colorBlockEndBracketIndex).join('')
          addText(text, color)

          // move up our index past the entire set of brackets
          index = colorBlockEndBracketIndex+2
        } else {
          console.warn("WARN no closing bracket set found at index", index)
        }
      } else {
        console.warn("No index found for next bracket", character, index, workingDesc.join(''))
      }
      index++
    } else if (character === '\n') {
      // handle line breaks
      addText(tempString)
      description += '\n'
      index++
    } else if (index === workingDesc.length-1) {
      // final character, clear out the remaining text
      tempString += character
      addText(tempString)
      index++
    } else {
      tempString += character
      index++
    }
  }

  return description
}