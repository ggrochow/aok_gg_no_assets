import styles from './SpellCard.module.scss'
import PropTypes from 'prop-types'
import { parseRawSpellDesc } from '../utils/SpellDescriptionParser'

export default function SpellCard ({ spell, power }) {

  return (
    <div className={styles.container}>
      <p className={styles.name}>{spell.name}</p>

      <p className={[styles.cost, styles[spell.resourceType]].join(' ')}>{spell.costDisplayText}</p>
      <p className={styles.range}>{spell.rangeDisplayText}</p>

      <p className={styles.cast}>{spell.castDisplayText}</p>
      <p className={styles.cooldown}>{spell.cooldownDisplayText}</p>

      <p className={styles.description}>{spell.parseRawSpellDesc(parseRawSpellDesc, power)}</p>
    </div>
  )
}

SpellCard.propTypes = {
  spell: PropTypes.object.isRequired,
  power: PropTypes.number,
}