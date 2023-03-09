import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from './SpellIcon.module.scss'
import emptySpellSlotImage from '../../../public/spell_icons/spell_icon_border_default.png'
import selectedSpellSlotImage from '../../../public/spell_icons/spell_icon_border_glowing.png'
import Tooltip from '../Tooltip'
import Spell from '../../classes/Spell'
import SpellCard from '../SpellCard'

export default function SpellIcon ({ spell, onClick, active, power, enableTooltip = true }) {
  const [showTooltip, setShowTooltip] = useState(false)
  const setTooltip = (bool) => {
    setShowTooltip(enableTooltip && bool)
  }

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <Image
        className={styles.backgroundImage}
        src={active ? selectedSpellSlotImage : emptySpellSlotImage}
        onClick={onClick}
        alt={'Empty Slot'}
        layout={'fill'}
        priority={true}
      />

      { spell && (
        <Image
          className={styles.iconImage}
          onClick={onClick}
          src={spell.imageFileName}
          alt={spell.name}
          width={53}
          height={53}
          priority={true}
        />
      )}

      {spell && <Tooltip enabled={showTooltip}><SpellCard spell={spell} power={power}/></Tooltip>}

    </div>
  )
}

SpellIcon.propTypes = {
  spell: PropTypes.instanceOf(Spell),
  onClick: PropTypes.func,
  active: PropTypes.bool,
  enableTooltip: PropTypes.bool,
  power: PropTypes.number,
}