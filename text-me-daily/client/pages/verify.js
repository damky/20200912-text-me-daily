import Axios from "axios";
import Router from "next/router";
import Layout from "../components/layout";
import Btn from "../components/utils/btn";
import Modal from "../components/utils/modal";

export default function Verify({ serverUrl }) {

  const verify = async () => {
    const token = window.location.search.match(/(token=(.+))&/)[2];
    const refreshToken = window.location.search.match(/(refreshToken=(.+))/i)[2];
    const request = await Axios.post(`${serverUrl}/api/verify`, { token: token, refreshToken: refreshToken }, { headers: { 'authorization': token } }).catch(err => { if (err) console.error('there was a verify error', err) });
    const response = await request.data;
    if (await response.ok) {
      window.localStorage.setItem('tmd_user', JSON.stringify(response));
      Router.push('/dashboard');
    } else {
      console.error(response);
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
            <Btn primary onClick={() => verify()}>verify your email</Btn>
            <p>Or, if you waited to long...</p>
            <Btn primary onClick={() => reVerify()}>resend verify email</Btn>
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