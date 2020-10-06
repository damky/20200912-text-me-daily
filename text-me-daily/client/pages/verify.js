import Axios from "axios";
import Router from "next/router";
import { useState } from "react";
import Layout from "../components/layout";
import Btn from "../components/utils/btn";
import Modal from "../components/utils/modal";

export default function Verify({ serverUrl }) {
  const [needSignIn, setNeedSignIn] = useState(false);

  const verify = async () => {
    const token = window.location.search.match(/(token=(.+))&/)[2];
    const refreshToken = window.location.search.match(/(refreshToken=(.+))/i)[2];
    try {
      const request = await Axios.post(`${serverUrl}/api/verify`, { token: token, refreshToken: refreshToken }, { headers: { 'authorization': token } });
      const response = await request.data;
      if (await response.ok) {
        window.localStorage.setItem('tmd_user', JSON.stringify(response));
        Router.push('/dashboard');
      } else {
        console.error(response);
      }
    } catch (err) {
      if (err) console.error('there was a verify error', err);
      setNeedSignIn(true);
    }
  }

  const reVerify = async () => {
    const token = window.location.search.match(/(token=(.+))&/)[2];
    const refreshToken = window.location.search.match(/(refreshToken=(.+))/)[2];
    Axios.post(`${serverUrl}/api/sendverifyemail`, { token: token, refreshToken: refreshToken }, { headers: { authorization: token } }).then(res => res.data).catch(err => { if (err) console.error('there was reverify error', err) });

  }



  return (
    <Layout disableNav>
      {/* get token from url */}
      <Modal headline="verify">
        {
          <>
            {!needSignIn && <Btn primary onClick={() => verify()}>verify your email</Btn>}
            {needSignIn &&
              <>
                <p>Oops. you waited to long. Better sign in again. Then you can resend that email.</p>
                <Btn primary onClick={() => Router.push('/')}>login</Btn>
              </>}
          </>
        }

      </Modal>

    </Layout>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: {
      serverUrl: process.env.SERVER,
    }
  }
}