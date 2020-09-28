import axios from 'axios'
import Btn from './utils/btn'
import Router from 'next/router'

export default function Refresh({ children, serverUrl, tmd }) {
  const refreshToken = () => {
    const locstor = JSON.parse(window.localStorage.getItem('tmd_user'));

    axios.post(`${serverUrl}/api/token`, { refreshToken: locstor.refreshToken, user: locstor.user }, { headers: { 'Authorization': locstor.token } })
      .then(res => {
        window.localStorage.setItem('tmd_user', JSON.stringify({ ...locstor, token: res.data.token }));
        tmd.setTmd_user({ ...locstor, token: res.data.token, status: 'in' });
        // TODO: loading graphic
        setTimeout(() => Router.reload(), 1000);
      })
      .catch(err => {
        if (err) {
          console.error(err);
          window.localStorage.setItem('tmd_user', JSON.stringify({ ...locstor, status: 'out' }));
          Router.push('/');
        }
      });
  }

  return (
    <>
      <Btn onClick={() => refreshToken()}>{children ? children : 'refresh'}</Btn>
    </>
  )
}
