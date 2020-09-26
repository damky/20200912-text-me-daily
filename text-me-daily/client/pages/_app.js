import { createContext, useState } from 'react';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const [tmd_user, setTmd_user] = useState({})
  return <Component tmd={{ tmd_user, setTmd_user }} {...pageProps} />
}

export default MyApp
