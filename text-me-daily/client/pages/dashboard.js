import { Cookies } from 'react-cookie';
import useSWR from 'swr';
import axios from 'axios';
import Router from 'next/router';
import Btn from '../components/btn'

// set up cookies

export default function Dashboard({ serverUrl }) {
  const cookies = new Cookies();
  const token = cookies.get('token');

  const logOut = () => {
    // cookies.remove('token', null);
    // cookies.remove('refreshToken', null);
    cookies.remove('status', null);
    Router.push('/');
  }

  const refreshToken = () => {
    // console.log(cookies.get('refreshToken'));
    axios.post(`${serverUrl}/api/token`, { refreshToken: cookies.get('refreshToken'), user: cookies.get('user') }, { headers: { 'Authorization': token } })
      .then(res => {
        cookies.set('token', res.data.token)
        Router.reload()
      })
      .catch(err => { if (err) { console.error(err); Router.push('/'); } });
  }

  const fetcherAuth = url => axios.get(url, { headers: { 'Authorization': token } }).then(res => res.data);
  const { data, error } = useSWR(`${serverUrl}/api/ping`, fetcherAuth);
  if (error) {
    // console.error(error.response.data.msg)
    cookies.remove('status');
    return (
      <div>
        <div>error loading. probably need to login again.</div>
        <Btn primary onClick={() => refreshToken()}>refresh</Btn>
      </div>
    )
  }
  if (!data) {
    return <div>loading...</div>
  }

  cookies.set('status', 'in');
  return (
    <div><h2>secret page</h2> <Btn primary onClick={() => logOut()}>log out</Btn><Btn primary onClick={() => refreshToken()}>refresh</Btn></div>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: {
      serverUrl: process.env.SERVER
    }
  }
}