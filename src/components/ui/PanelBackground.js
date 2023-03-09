import styles from './PanelBackground.module.scss'
import PropTypes from 'prop-types'

export default function PanelBackground ({ children, className = '' }) {

  return (
    <div className={[styles.container, className].join(' ')}>
      {children}
    </div>
  )
}

PanelBackground.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}