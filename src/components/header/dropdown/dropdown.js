import { faAddressCard, faBlog, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './dropdown.module.css'

export default function Dropdown({ dropdownOpen }) {
  return (
    <div className={`${styles.container} ${dropdownOpen && styles.open}`}>
      <ul>
        <li>
          Login
          {' '}
          <FontAwesomeIcon icon={faUserCircle} />
        </li>
        <li>
          Blog
          {' '}
          <FontAwesomeIcon icon={faBlog} />
        </li>
        <li>
          About Us
          {' '}
          <FontAwesomeIcon icon={faAddressCard} />
        </li>
      </ul>
    </div>
  )
}
