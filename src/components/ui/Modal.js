import styles from './Modal.module.scss'

export default function Modal ({ children, onClose }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          { children }
        </div>
      </div>

      <div className={styles.overlay} onClick={onClose} />
    </>
  )
}