import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/modal.module.scss'
import Btn from './btn';

export default function Modal({ children, headline, pop, trigger }) {
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
      {trigger && <Btn primary onClick={openModal}>{trigger}</Btn>}
      {modalOpen &&
        <div onClick={closeModal} className={pop ? styles.popped : null}>
          <div className={styles.modal} >
            <h3>{headline}</h3>
            {children}
          </div>
        </div> ||
        !trigger && <div className={styles.modal} >
          <h3>{headline}</h3>
          {children}
        </div>
      }
    </>
  )
}