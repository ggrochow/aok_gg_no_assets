import PropTypes from 'prop-types'
import styles from './PanelCard.module.scss'

export default function PanelCard ({children, id}) {

  return (
    <div className={styles.container} id={id}>
      {children}
    </div>
  )
}


PanelCard.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
}