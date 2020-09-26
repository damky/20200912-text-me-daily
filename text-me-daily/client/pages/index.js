import React, { useState } from 'react'
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Btn from '../components/btn'
import SignIn from '../components/signIn';
import router from 'next/router';
import { Cookies } from "react-cookie";





export default function Home({ serverUrl, tmd }) {
  const [needSignUp, setNeedSignUp] = useState(false);
  const [createdUser, setCreatedUser] = useState(false);

  // // set up cookies
  // const fetcher = url => axios.get(url).then(res => res.data);
  // const cookies = new Cookies();
  // const { data, error } = useSWR(serverUrl + '/api/login', fetcher);
  // if (error) return 'failed to load token' + JSON.stringify(error);
  // if (!data) return 'loading...';


  // // console.log('data token ', data.token);
  // const theToken = data.token;
  // cookies.set('token', theToken);

  if (new Cookies().get('status') === 'Logged in') {
    router.push('/dashboard');
    console.log('logged in');
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {
          createdUser && !needSignUp &&
          <>
            <div>User Created</div>
            <SignIn
              tmd={tmd}
              signin />
          </> ||
          !needSignUp &&
          <>
            <SignIn
              tmd={tmd}
              signin
              serverUrl={serverUrl} />
            <Btn
              onClick={() => setNeedSignUp(true)} >sign up</Btn>
          </> ||
          <SignIn
            tmd={tmd}
            signup
            serverUrl={serverUrl}
            setCreatedUser={setCreatedUser}
            setNeedSignUp={setNeedSignUp} />
        }
        <Btn
          link="/dashboard"
          primary >dashboard</Btn>
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
