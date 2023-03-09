import styles from './TopNav.module.scss'
import Link from 'next/link'
import { CLASSES } from '../../data/classes'
import { randomArrayElement } from '../../utils'
import { useRouter } from 'next/router'

export default function TopNav () {
  const router = useRouter()
  const activePage = router.pathname.split('/')[1]

  console.log(activePage)

  const randomClass = () => {
    return randomArrayElement(Object.values(CLASSES))
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>

        <div className={styles.linkHolder}>
          <Link href={`/items/${randomClass()}`}>
            <a className={activePage === 'items' ? styles.active : ''}>Items (beta)</a>
          </Link>
        </div>

        <div className={styles.linkHolder}>
          <Link href={`/builds/${randomClass()}`}>
            <a className={activePage === 'builds' ? styles.active : ''}>Builds</a>
          </Link>
        </div>

        <div className={styles.linkHolder}>
          <Link href={'/options'}>
            <a className={activePage === 'options' ? styles.active : ''}>Options.json</a>
          </Link>
        </div>

      </div>
    </div>
  )
}
