import {
  faAddressCard, faCheckCircle, faDollarSign, faShippingFast,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './steps.module.css'

export default function Steps({ active }) {
  return (
    <div className={styles.container}>
      <div className={`${styles.step} ${active >= 1 && styles.active}`}>
        {active > 1 ? <FontAwesomeIcon icon={faCheckCircle} />
          : <FontAwesomeIcon icon={faAddressCard} />}
      </div>
      <div className={`${styles.gap} ${active >= 2 && styles.active}`}> </div>
      <div className={`${styles.step} ${active >= 2 && styles.active}`}>
        {active > 2 ? <FontAwesomeIcon icon={faCheckCircle} />
          : <FontAwesomeIcon icon={faDollarSign} />}
      </div>
      <div className={`${styles.gap} ${active >= 3 && styles.active}`}> </div>
      <div className={`${styles.step} ${active >= 3 && styles.active}`}>
        <FontAwesomeIcon icon={faShippingFast} />
      </div>
    </div>
  )
}
