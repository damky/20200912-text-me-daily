import Logo from './logo'
import Sun from './sun'
import styles from '../styles/hero.module.css'

export default function Hero(props) {
  return (
    <div className={styles.hero}>
      <Logo
        svgStyle={{ fill: '#053E5F', width: '155px', height: 'auto', filter: 'drop-shadow(2px 2px 0px rgba(255,237,140,.65))', top: '30px', position: 'relative' }} />
      <Sun />
    </div>
  )
}