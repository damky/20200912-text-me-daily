import React, { useState } from 'react'
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Btn from '../components/utils/btn'
import SignIn from '../components/signIn';
import Router from 'next/router';
import { Cookies } from "react-cookie";
import Modal from '../components/utils/modal';


export default function Home({ serverUrl, tmd }) {
  const [needSignUp, setNeedSignUp] = useState(false);
  const [createdUser, setCreatedUser] = useState(false);


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {
          createdUser && !needSignUp &&
          <>
            <Modal headline="user created">
              <p>Congratulations, you're in! We sent you an email with a link to verify you are who you say you are. Go check your inbox. Hurry!</p>
              <Btn primary onClick={() => Router.reload()}>back to login</Btn>
            </Modal>
            {/* <div>User Created</div>
            <SignIn
              tmd={tmd}
              serverUrl={serverUrl}
              signin /> */}
          </> ||
          !needSignUp &&
          <>
            <SignIn
              tmd={tmd}
              signin
              serverUrl={serverUrl}
            />
            <Btn onClick={() => setNeedSignUp(true)} >sign up</Btn>
          </> ||
          <SignIn
            tmd={tmd}
            signup
            serverUrl={serverUrl}
            setCreatedUser={setCreatedUser}
            setNeedSignUp={setNeedSignUp} />
        }
        {/* <Btn
          link="/dashboard"
          primary >dashboard</Btn> */}
      </section>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: {
      serverUrl: process.env.SERVER
    }
  }
}
