import { faCaretDown, faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './header.module.css'
import { ShoppingListContext } from '../../utils/AppContext'
import Dropdown from './dropdown/dropdown'

export default function Header() {
  const { cartItemLists } = useContext(ShoppingListContext)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownToggle = () => setDropdownOpen(!dropdownOpen)
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Code Shop</h1>
        <nav className={styles.nav}>
          <Link to="/" aria-label="link to home" tabIndex={0}>
            <FontAwesomeIcon icon={faHome} size="lg" aria-hidden={false} />
          </Link>
          <Link to="/shopping" aria-label="link to cart" tabIndex={0}>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" aria-hidden={false} />
            {cartItemLists.length > 0
              && <span className={styles.icon}>{cartItemLists.length}</span>}
          </Link>
          <a href onClick={dropdownToggle}>
            <FontAwesomeIcon icon={faCaretDown} size="lg" />
          </a>
        </nav>
      </div>
      <Dropdown dropdownOpen={dropdownOpen} />
    </header>
  )
}
