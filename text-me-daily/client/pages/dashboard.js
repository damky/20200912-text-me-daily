import useSWR from 'swr';
import axios from 'axios';
import Router from 'next/router';
import Btn from '../components/btn'
import { useContext, useEffect, useState } from 'react';




export default function Dashboard({ serverUrl, tmd }) {
  // const [dashboardState, setDashboardState] = useState(tmd.tmd_user);
  // const setTmd_user = setDashboardState;
  // const theme = useContext(Tmd_user_ctx)
  // console.log(tmd);
  // useEffect(() => {

  // });
  // console.log('dashboard', tmd);
  // console.time('initial');
  // console.time('refreshed');
  // console.timeLog('initial', token.token);




  const logOut = () => {
    tmd.setTmd_user({ ...tmd.tmd_user, token: null, refreshToken: null, status: null });
    // useLocalStorage().removeItem('token');
    // useLocalStorage().removeItem('refreshToken');
    // useLocalStorage().removeItem('status');
    Router.push('/');
  }
  const refreshToken = () => {
    // console.log(userDetails.getItem('refreshToken'));
    const locstor = JSON.parse(window.localStorage.getItem('tmd_user'));

    axios.post(`${serverUrl}/api/token`, { refreshToken: locstor.refreshToken, user: locstor.user }, { headers: { 'Authorization': locstor.token } })
      .then(res => {
        // tmd.setTmd_user({ ...tmd.tmd_user, token: res.data.token });
        window.localStorage.setItem('tmd_user', JSON.stringify({ ...locstor, token: res.data.token }));
        tmd.setTmd_user({ ...locstor, token: res.data.token });
        // TODO: loading graphic
        setTimeout(() => Router.reload(), 1000);
      })
      .catch(err => { if (err) { console.error(err); Router.push('/'); } });
    // console.timeLog('refreshed', token.token);
  }

  // check privliges
  const token = `${process.browser && JSON.parse(window.localStorage.getItem('tmd_user')).token || tmd.tmd_user.token}`;
  const fetcherAuth = url => axios.get(url, { headers: { 'authorization': token } }).then(res => res.data);
  const { data, error } = useSWR(`${serverUrl}/api/ping`, fetcherAuth);
  if (error) {
    console.error(error, token)
    // if (error && useLocalStorage().getItem('status') === 'in') {
    //   axios.getItem(`${serverUrl}/api/ping`, { headers: { 'Authorization': token } }).then(res => { if (res.data.msg === 'pong') Router.reload() });
    // }

    // tmd.setTmd_user({ ...tmd.tmd_user, status: null });
    return (
      <div>
        <div>error loading. probably need to login again.</div>
        <Btn primary onClick={() => refreshToken()}>log in</Btn>
      </div>
    )
  }
  if (!data) {
    return <div>loading...</div>
  }

  // console.timeLog('initial', 'second initial ' + JSON.stringify(tmd.tmd_user.token));
  const locstor = JSON.parse(window.localStorage.getItem('tmd_user'));
  window.localStorage.setItem('tmd_user', JSON.stringify(tmd.tmd_user = {} ? locstor : tmd.tmd_user));
  return (
    <div><h2>secret page</h2> <Btn primary onClick={() => logOut()}>log out</Btn><Btn primary onClick={() => refreshToken()}>refresh</Btn></div>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      serverUrl: process.env.SERVER,
    }
  }
}