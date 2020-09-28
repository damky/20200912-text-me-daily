import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Hero from './hero'
import Nav from './nav'
import Footer from './footer'
import { useState } from 'react'

const name = 'Doug McKay'
export const siteTitle = 'TextMe Daily'

export default function Layout({ children, home, disableNav, tmd, serverUrl }) {
  const [openStatus, setOpenStatus] = useState(false);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A personal subcription service. Like rss for texts"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div onClick={() => openStatus ? setOpenStatus(false) : null} className={styles.wrap}>
        <header className={styles.header}>
          {home ? (<Hero />) : (<Nav
            disableNav={disableNav}
            tmd={tmd}
            serverUrl={serverUrl}
            menuState={{ openStatus, setOpenStatus }} />)}
        </header>
        <main className={styles.main}>
          <div className={styles.container}>
            {children}
          </div>
        </main>
      </div>
      {home && <Footer />}
    </div>
  )
}
