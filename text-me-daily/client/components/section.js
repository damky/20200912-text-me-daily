import styles from '../styles/section.module.scss'

export default function Section({ children, headline }) {
  return (
    <>
      <section className={styles.section} >
        <h3>{headline}</h3>
        {children}
      </section>
    </>
  )
}