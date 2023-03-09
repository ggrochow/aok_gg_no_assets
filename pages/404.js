import Link from 'next/link'
import styles from '../styles/404.module.scss'

export default function Custom404 () {
  return (
    <div>
      <h1>404 - Page Not Found</h1>

      <div className={styles.container}>
        <Link href='/builds/wizard'>
          <a>Builds</a>
        </Link>

        <Link href='/options'>
          <a>Options</a>
        </Link>
      </div>

    </div>
  )
}