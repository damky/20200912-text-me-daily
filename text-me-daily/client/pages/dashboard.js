import useSWR from 'swr';
import axios from 'axios';
import Router from 'next/router';
import Btn from '../components/utils/btn'
import Layout from '../components/layout';
import ErrorMsg from '../components/utils/errorMsg';
import Refresh from '../components/refresh';
import Modal from '../components/utils/modal';
import PhoneNumber from "../components/phoneNumber";


export default function Dashboard({ serverUrl, tmd }) {

  const logOut = () => {
    const locstor = JSON.parse(window.localStorage.getItem('tmd_user'));
    window.localStorage.setItem('tmd_user', JSON.stringify({ ...locstor, token: null, refreshToken: null, status: 'out' }));
    tmd.setTmd_user({ ...tmd.tmd_user, token: null, refreshToken: null, status: 'out' });
    Router.push('/');
  }

  const reVerify = async () => {
    const locstor = JSON.parse(window.localStorage.getItem('tmd_user'));
    const token = locstor.token;
    const refreshToken = locstor.refreshToken;
    axios.post(`${serverUrl}/api/sendverifyemail`, { token: token, refreshToken: refreshToken }, { headers: { authorization: token } }).then(res => res.data).catch(err => { if (err) console.error('there was reverify error', err) });

  }


  // check privliges
  const token = `${process.browser && JSON.parse(window.localStorage.getItem('tmd_user')).token || tmd.tmd_user.token}`;
  const fetcherAuth = url => axios.get(url, { headers: { 'authorization': token } }).then(res => res.data);
  const { data, error } = useSWR(`${serverUrl}/api/ping`, fetcherAuth);
  if (error) {
    console.error(error, token); // TODO: delete when done


    return (
      <Layout disableNav>
        {window.localStorage.setItem('tmd_user', JSON.stringify({ ...JSON.parse(window.localStorage.getItem('tmd_user')), status: 'out' }))}
        <ErrorMsg>error loading. probably need to login again.</ErrorMsg>
        <Refresh tmd={tmd} serverUrl={serverUrl} >log in</Refresh>
      </Layout>
    )


  }

  if (!data) {
    return <Layout><ErrorMsg>loading...</ErrorMsg></Layout>
  }

  // if state is empty, update localStorage with localStorage
  // other wise use state
  const locstor = JSON.parse(window.localStorage.getItem('tmd_user'));
  window.localStorage.setItem('tmd_user', JSON.stringify(tmd.tmd_user = {} ? locstor : tmd.tmd_user));

  if (tmd.tmd_user.status === "verify") {
    return (
      <Layout disableNav>
        {window.localStorage.setItem('tmd_user', JSON.stringify({ ...JSON.parse(window.localStorage.getItem('tmd_user',)), status: 'verify' }))}
        <Modal headline="verify">
          <p>Look for an email message from us shortly. Then click the link in our message to verify your email. After that, log in with your email and password to start subscribing to texts. Yay!</p>
          <Btn primary onClick={() => reVerify()}>resend email</Btn>
          <Btn primary link="/">back to home</Btn>
        </Modal>
      </Layout>
    )
  } else {
    return (
      <Layout
        tmd={tmd}
        serverUrl={serverUrl}
      >
        {window.localStorage.setItem('tmd_user', JSON.stringify({ ...locstor, status: 'in' }))}
        <h2>Dashboard</h2>
        <PhoneNumber></PhoneNumber>
        <Modal pop={false} headline='feeds'>
          <p>No text feed was found. Create one now.</p>
          <Btn primary onClick={() => logOut()}>create text feed</Btn>
        </Modal>
        <Modal pop={false} headline='phone'>
          <p>No phone number was found. Create one now.</p>
          <Btn primary onClick={() => logOut()}>add & verify phone number</Btn>
        </Modal>
        {/* <Btn primary className='fullWidth' onClick={() => addPhone()}>add & verify new number</Btn> */}
      </Layout>
    )
  }
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      serverUrl: process.env.SERVER,
    }
  }
}