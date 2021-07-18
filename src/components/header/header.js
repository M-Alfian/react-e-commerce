import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './header.module.css'
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ShoppingListContext } from '../../utils/AppContext'

export default function Header() {
  const { cartItemLists } = useContext(ShoppingListContext)
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title} tabIndex={0}>Code Shop</h1>
        <nav className={styles.nav}>
          <Link to='/' aria-label='link to home' tabIndex={0}>
            <FontAwesomeIcon icon={faHome} size='lg' aria-hidden={false} />
          </Link>
          <Link to='/shopping' aria-label='link to cart' tabIndex={0}>
            <FontAwesomeIcon icon={faShoppingCart} size='lg' aria-hidden={false} />
            {cartItemLists.length > 0 && <span className={styles.icon}>{cartItemLists.length}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}
