import '../styles/globals.scss'
import styles from '../styles/Home.module.scss'
import TopNav from '../src/components/ui/TopNav'

function MyApp ({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <TopNav/>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
