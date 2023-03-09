import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../../styles/Builds.module.scss'
import {
  capitalizeFirstLetter,
  getBuildStingFromSelectedSpells,
  getDefaultBuildArray,
  getDefaultBuildString,
  getSelectedSpellsFromBuildString,
} from '../../../src/utils'
import {
  getSpellByIdAndClass,
  getSpellsByClass,
} from '../../../src/data/spells'
import SpellBar from '../../../src/components/builds/SpellBar'
import MyHead from '../../../src/components/MyHead'
import {
  EMPTY_BUILD_SLOT_ID,
} from '../../../src/data/constants'
import SpellList from '../../../src/components/builds/SpellList'
import ClassPicker from '../../../src/components/builds/ClassPicker'
import {
  CLASS_DEFAULT_POWER, CLASS_S1_GEAR_POWER,
  CLASS_STARTER_GEAR_POWER,
  CLASSES,
} from '../../../src/data/classes'
import PanelCard from '../../../src/components/ui/PanelCard'
import PanelBackground from '../../../src/components/ui/PanelBackground'

export default function SpellPicker ({ className, build }) {
  const router = useRouter()

  const initialBuildString = build || getDefaultBuildString(className)
  const [selectedSpells , setSelectedSpells] = useState(getSelectedSpellsFromBuildString(initialBuildString))
  const [selectedSpellBarIndex, setSelectedSpellBarIndex] = useState()
  const [selectedSpellId, setSelectedSpellId] = useState()
  const [selectedClass, setSelectedClass] = useState(className)
  const [power, setPower] = useState(CLASS_DEFAULT_POWER[className])

  useEffect(() => {
    // Update class and clear build on route changes
    if (className && selectedClass !== className) {
      setSelectedClass(className)
      setPower(CLASS_DEFAULT_POWER[className])
      if (!build) {
        setSelectedSpells(getDefaultBuildArray(className))
      }
    }

    if (build) {
      setSelectedSpells(getSelectedSpellsFromBuildString(build))
    }

  }, [build, className, selectedClass])

  const placeOnBar = (barIndex, spellId) => {
    const tempSpellBar = [...selectedSpells]

    tempSpellBar[barIndex] = spellId

    if (spellId && selectedSpells.includes(spellId)) {
      const existingSpellIndex = selectedSpells.findIndex(id => id === spellId)
      tempSpellBar[existingSpellIndex] = EMPTY_BUILD_SLOT_ID
    }

    setSpells(tempSpellBar)
  }

  const swapBarPositions = (index, otherIndex) => {
    let tempSpellBar = [...selectedSpells]
    let tempItem = tempSpellBar[index]
    tempSpellBar[index] = tempSpellBar[otherIndex]
    tempSpellBar[otherIndex] = tempItem

    setSpells(tempSpellBar)
  }

  const getBuildUrl = (spells) => {
    const build = getBuildStingFromSelectedSpells(spells)
    return `/builds/${className}/${build}`
  }

  const setSpells = (spells) => {
    setSelectedSpells(spells)
    router.replace(getBuildUrl(spells), null, { shallow: true })
  }

  const resetBuild = () => {
    setSpells(getDefaultBuildArray(selectedClass))
  }

  const clearSelections = () => {
    setSelectedSpellId()
    setSelectedSpellBarIndex()
  }

  const isBarFull = () => {
    return !selectedSpells.includes(EMPTY_BUILD_SLOT_ID)
  }

  const handleSpellBarClick = (barIndex) => {
    if (selectedSpellId) {
      placeOnBar(barIndex, selectedSpellId)
      clearSelections()
    } else if (selectedSpellBarIndex !== undefined &&
      (selectedSpells[selectedSpellBarIndex] || selectedSpells[barIndex])
    ) {
      swapBarPositions(barIndex, selectedSpellBarIndex)
      clearSelections()
    } else {
      setSelectedSpellBarIndex(barIndex)
    }
  }

  const handleSpellIconClick = (spellId) => {
    if (selectedSpellBarIndex) {
      placeOnBar(selectedSpellBarIndex, spellId)
      clearSelections()
    } else {
      if (isBarFull()) {
        if (selectedSpellId === spellId) {
          setSelectedSpellId()
        } else {
          setSelectedSpellId(spellId)
        }
      } else if (!selectedSpells.includes(spellId)) {
        const firstEmptySlot = selectedSpells.findIndex(val => val === EMPTY_BUILD_SLOT_ID)
        placeOnBar(firstEmptySlot, spellId)
        clearSelections()
      }
    }
  }

  const copyBuildToClipboard = () => {
    const url = `${window.location.origin}${getBuildUrl(selectedSpells)}`

    navigator.clipboard.writeText(url)
  }

  const getDescriptionFromSelectedSpells = (spells) => {
    const spellNames = spells.map(spellId => {
      const spell = getSpellByIdAndClass(spellId, className)
      if (!spell) {
        return 'Empty'
      }

      return spell.name
    })

    return spellNames.join(' | ')
  }

  const handlePowerInputChange = (e) => {
    const value = e.target.value
    const powerNum = Number(value)
    if (!isNaN(powerNum)) {
      setPower(powerNum)
    }
  }

  const handleStarterGearButtonClick = () => {
    setPower(CLASS_STARTER_GEAR_POWER[className])
  }

  const handleSeasonOneGearButtonClick = () => {
    setPower(CLASS_S1_GEAR_POWER[className])
  }

  const handleNoGearButtonClick = () => {
    setPower(CLASS_DEFAULT_POWER[className])
  }

  const displayClassName = capitalizeFirstLetter(className)
  return (
    <div className={styles.container}>
      <MyHead
        title={`${displayClassName} Build`}
        imageUrl={`/api/images/builds/${className}/${getBuildStingFromSelectedSpells(selectedSpells)}.jpg`}
        description={getDescriptionFromSelectedSpells(selectedSpells)}
      />

      <ClassPicker
        selectedClass={className}
        urlBuilder={(className) => `/builds/${className}`}
      />

      <h1 className={styles.title}>{displayClassName} Build</h1>

      <PanelBackground className={styles.powerSelectContainer}>
        <PanelCard>
          <h4>Power</h4>
          <p>Orange values on abilities scale with power values.</p>

          <div>
            <input type="text" onChange={handlePowerInputChange} value={`${power}`} className={styles.powerInput} />
            <button className={power === CLASS_DEFAULT_POWER[className] ? 'active' : ''} onClick={handleNoGearButtonClick}>No Gear</button>
            <button className={power === CLASS_STARTER_GEAR_POWER[className] ? 'active' : ''} onClick={handleStarterGearButtonClick}>Starter Gear</button>
            <button className={power === CLASS_S1_GEAR_POWER[className] ? 'active' : ''} onClick={handleSeasonOneGearButtonClick}>S1 Gear</button>
          </div>
        </PanelCard>
      </PanelBackground>

      <SpellList
        selectedSpellId={selectedSpellId}
        spells={getSpellsByClass(className)}
        onClick={handleSpellIconClick}
        power={power}
      />

      <SpellBar
        spellList={selectedSpells}
        className={className}
        selectedIndex={selectedSpellBarIndex}
        onClick={handleSpellBarClick}
        onReset={resetBuild}
        onCopy={copyBuildToClipboard}
        power={power}
      />
    </div>
  )
}

export async function getStaticProps (context) {
  const { className, build } = context.params

  const props = {
    className,
  }

  if (build) {
    props.build = build[0]
  }

  return { props }
}

export async function getStaticPaths () {
  const paths = []

  Object.values(CLASSES).forEach(className => {
    paths.push({ params: { className, build: [] } })
  })

  return {
    paths,
    fallback: 'blocking',
  }
}
