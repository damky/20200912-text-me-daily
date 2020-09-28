import styles from '../../styles/modal.module.scss'

export default function Modal({ children, headline, pop }) {

  return (
    <>
      <div className={pop ? styles.popped : null}>
        <div className={styles.modal} >
          <h3>{headline}</h3>
          {children}
        </div>
      </div>
    </>
  )
}