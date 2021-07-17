import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import styles from './modal.module.css'

export default function Modal({ modalText, modalOpen, setModal }) {
  return (
    <div className={modalOpen ? styles.modalOpen : styles.modalClose }>
      <div className={styles.modal}>
      <h4>{modalText}</h4>
      <p>has been added to cart!</p>
      <div className={styles.modalButtonContainer}>
        <Link to='/shopping'>
          <button className={styles.button}>
            <FontAwesomeIcon icon={faCartArrowDown} />
            <span> Go to Cart</span>
          </button>
        </Link>
        <button className={styles.button} onClick={() => setModal(false)}>OK</button>
        </div>
      </div>
    </div>
  )
}