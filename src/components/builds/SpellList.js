import PropTypes from 'prop-types'
import styles from './SpellList.module.scss'
import SpellCardWithIcon from '../SpellCardWithIcon'

export default function SpellList ({ spells, onClick, selectedSpellId, power }) {
  const basic = spells.find(spell => spell.id === 'basic')
  const selectableSpells = spells.filter(spell => spell.id !== 'basic')

  return (
    <div className={styles.container}>

      { basic && (
        <div className={styles.spellContainer}>
          <SpellCardWithIcon spell={basic} power={power} />
        </div>
      )}

      { selectableSpells.map((spell) => {
        const spellContainerStyles = [styles.spellContainer]
        if (selectedSpellId === spell.id) {
          spellContainerStyles.push(styles.active)
        }

        return (
          <div className={spellContainerStyles.join(' ')} key={spell.id} onClick={() => onClick(spell.id)}>
            <SpellCardWithIcon spell={spell} power={power} />
          </div>
        )
      })}
    </div>
  )
}

SpellList.propTypes = {
  spells: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  selectedSpellId: PropTypes.number,
  power: PropTypes.number,
}

