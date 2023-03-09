import PropTypes from 'prop-types'
import styles from './ToolTip.module.scss'

export default function Tooltip ({ enabled = true, children }) {
  if (!enabled) {
    return null
  }

  return (
    <div className={styles.container}>
      { children }
    </div>
  )
}

Tooltip.propTypes = {
  enabled: PropTypes.bool,
  children: PropTypes.node,
}