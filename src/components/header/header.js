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
        <h1 className={styles.title}>Code Shop</h1>
        <nav className={styles.nav}>
          <Link to='/'>
            <FontAwesomeIcon icon={faHome} size='lg'/>
          </Link>
          <Link to='/shopping'>
            <FontAwesomeIcon icon={faShoppingCart} size='lg' />
            <span className={styles.icon}>{cartItemLists.length}</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
