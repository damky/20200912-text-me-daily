import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/modal.module.scss'
import Btn from './btn';

export default function Modal({ children, headline, pop, trigger, closeBtn, submit, primary, disabled, submitCount, isSubmitting }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
    console.log(modalOpen)
  }

  const closeModal = () => {
    if (pop && modalOpen) {
      setModalOpen(false);
      console.log('closing');
    }
  }




  return (
    <>
      {trigger && primary && <Btn primary onClick={openModal}>{trigger}</Btn>
        || trigger && !primary && <a onClick={openModal}>{trigger}</a>}
      {modalOpen &&
        <>
          <div onClick={closeModal} className={pop ? styles.popped : null}></div>
          <div className={styles.modal} >
            <h3>{headline}</h3>
            {closeBtn && <button className={styles.close} onClick={closeModal}>x</button>}
            {children}
            {submit}
            {/* {submit && document.querySelector('form button[type="submit"]')?.addEventListener("submit", (e) => console.log('submitted', e))} */}
          </div>
        </>
        || !trigger && <div className={styles.modal} >
          <h3>{headline}</h3>
          {closeBtn && <button className={styles.close} onClick={closeModal}>x</button>}
          {children}
        </div>
      }

    </>
  )
}