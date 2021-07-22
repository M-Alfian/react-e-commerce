import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <FontAwesomeIcon icon={faCreditCard} size="lg" />
      </nav>
      <p>codan.com</p>
      <p>term and our policy</p>
    </footer>
  )
}
