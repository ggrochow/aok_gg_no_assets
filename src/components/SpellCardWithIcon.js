import PropTypes from 'prop-types'
import SpellCard from './SpellCard'
import styles from './SpellCardWithIcon.module.scss'
import SpellIcon from './builds/SpellIcon'

export default function SpellCardWithIcon ({ spell, power }) {

  return (
    <div className={styles.container}>
      <div className={styles.iconHolder}>
        <SpellIcon spell={spell} enableTooltip={false} />
      </div>
      <SpellCard spell={spell} power={power} />
    </div>
  )
}

SpellCardWithIcon.propTypes = {
  spell: PropTypes.object.isRequired,
  power: PropTypes.number,
}