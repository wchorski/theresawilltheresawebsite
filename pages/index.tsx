import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout_Just_Content } from '../components/Layouts'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Theres a Will Theres a Website</title>
        <meta name="description" content="tawtaw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout_Just_Content>
        <main className={styles.main}>
          <h1>There's a Will There's a Website</h1>
          <Link href={`/portfolio`}>
            <a> Portfolio </a>
          </Link>
        </main>
      </Layout_Just_Content>
    </div>
  )
}

export default Home
