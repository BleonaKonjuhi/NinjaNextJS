import Head from 'next/head'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
      <div className={styles.title}>
        <h1>HomePage</h1>
        <p className={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>
        <p className={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>
        <Link href="ninjas"><a className={styles.btn}>See ninja listing </a></Link>
      </div>
      </>
    )
}
