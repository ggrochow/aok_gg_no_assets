import React from 'react'
import PropTypes from 'prop-types'
import styles from './SpellBar.module.scss'
import SpellIcon from './SpellIcon'
import { getSpellByIdAndClass } from '../../data/spells'

export default function SpellBar ({ spellList, className, onClick, selectedIndex, onReset, onCopy, power }) {
  return (
    <div className={styles.container}>
      <div className={styles.barHolder}>

      <button onClick={onReset} className={styles.resetButton}>Reset</button>

      <div className={styles.spellList}>
        { spellList.map((spellId, index) => {
          const spell = getSpellByIdAndClass(spellId, className)
          const isActive = selectedIndex === index
          const icon = <SpellIcon spell={spell} key={`${index}_${spellId}`} onClick={() => {onClick(index)}} active={isActive} power={power} />

          if (index === 4) {
            return (
              <React.Fragment key={'divider'}>
                <div className={styles.flexDivider} />
                {icon}
              </React.Fragment>
            )
          }

          return icon
        })}
      </div>

      <button onClick={onCopy} className={styles.copyButton}>Copy Build</button>
      </div>
    </div>
  )
}

SpellBar.propTypes = {
  spellList: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onReset: PropTypes.func,
  onCopy: PropTypes.func,
  selectedIndex: PropTypes.number,
}