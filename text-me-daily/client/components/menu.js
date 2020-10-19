import Btn from "./utils/btn";
import Router from "next/router"
import Refresh from "./refresh"

export default function Menu({ className, tmd, serverUrl }) {
  const logOut = () => {
    const locstor = JSON.parse(window.localStorage.getItem('tmd_user'));
    window.localStorage.setItem('tmd_user', JSON.stringify({ ...locstor, token: null, refreshToken: null, status: 'out' }));
    Router.push('/');
  }

  const changePhone = () => { }
  const changePassword = () => { }
  const deleteAccount = () => { }

  return (
    <div className={className}>
      <Btn onClick={changePhone}>change phone</Btn>
      <Btn onClick={changePassword}>change password</Btn>
      <Btn onClick={deleteAccount}>delete account</Btn>
      <Refresh tmd={tmd} serverUrl={serverUrl} />
      <Btn onClick={logOut}>log out</Btn>
    </div>
  )
}