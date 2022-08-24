import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout_Just_Content } from '../components/Layouts'
import styles from '../styles/Home.module.css'
import styleBtn from '../styles/ButtonAnim.module.scss'
import TileBG from 'components/TileBG'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Theres a Will Theres a Website</title>
        <meta name="description" content="tawtaw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout_Just_Content>
        <TileBG>
          <main className={styles.main}>

            <h1>There&apos;s a Will <br/> There&apos;s a Website</h1>

            <Link href={`/portfolio`}>
              <a className={styleBtn.btnAnim} style={{pointerEvents: 'all'}}> <h3>Portfolio</h3> </a>
            </Link>

            <div className='bb'></div>

          </main>
        </TileBG>

      </Layout_Just_Content>
    </div>
  )
}

export default Home
