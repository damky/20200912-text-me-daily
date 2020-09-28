import Link from "next/link";
import styles from "../styles/nav.module.scss";
import Logo from "./logo";
import Menu from "./menu";
import MenuBtn from "./menuBtn";

export default function Nav({ menuState, tmd, serverUrl, disableNav }) {

  const toggleMenu = () => {
    menuState.setOpenStatus(!menuState.openStatus);
    console.log('clicked', menuState.openStatus);
    // menuState.setOpenStatus(!menuState.openStatus);
  }

  return (
    <nav className={styles.nav}>
      <Link href="/"><a><Logo className={styles.logo} /></a></Link>
      {!disableNav && <MenuBtn menuState={menuState} onClick={() => toggleMenu()} />}
      {!disableNav && <Menu
        tmd={tmd}
        serverUrl={serverUrl}
        className={menuState.openStatus ? [styles.menu, styles.open].join(' ') : styles.menu} />}
    </nav>
  )
}