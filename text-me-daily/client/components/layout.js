import Head from 'next/head'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Hero from './hero'
import Nav from './nav'
import Footer from './footer'

const name = 'Doug McKay'
export const siteTitle = 'TextMe Daily'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
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
      <header className={styles.header}>
        {home ? (<Hero />) : (<Nav />)}
      </header>
      <main className={styles.main}><div className={styles.container}>{children}</div></main>
      {home && <Footer />}
    </div>
  )
}
