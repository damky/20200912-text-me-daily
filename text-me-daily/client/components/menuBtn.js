import styles from '../styles/menuBtn.module.scss'

export default function MenuBtn({ menuState, onClick }) {

  return (
    <div
      className={menuState.openStatus ? [styles.circle, styles.open].join(' ') : styles.circle}
      onClick={onClick}
    >
      <span className={[styles.line, styles.line1].join(' ')} />
      <span className={[styles.line, styles.line2].join(' ')} />
      <span className={[styles.line, styles.line3].join(' ')} />
    </div>
  )
}