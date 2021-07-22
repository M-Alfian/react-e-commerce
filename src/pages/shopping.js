/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartArrowDown,
  faMinus,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { LOCAL_END_POINT } from '../globals/endpoint'
import { ShoppingListContext } from '../utils/AppContext'
import styles from '../styles/shopping.module.css'

export default function Shopping() {
  const { cartItemLists, setCartItemLists } = useContext(ShoppingListContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const sum = cartItemLists.reduce((acc, current) => acc + (current.price * current.qty), 0)
    setTotal(sum)
  }, [cartItemLists])

  const handlePlusClick = (currentId) => {
    const newList = cartItemLists
      .map((element) => (
        element.id === currentId ? { ...element, qty: element.qty += 1 } : element
      ))
    setCartItemLists(newList)
  }

  const handleMinusClick = (id) => {
    const newList = cartItemLists
      .map((element) => (
        element.id === id ? { ...element, qty: element.qty -= 1 } : element
      ))
    setCartItemLists(newList)
  }

  const handleDeleteItemList = (id) => {
    const filterList = cartItemLists.filter((obj) => obj.id !== id)
    setCartItemLists(filterList)
  }

  console.log(cartItemLists)

  return (
    <div>
      {cartItemLists.length > 0
        ? cartItemLists.map(({
          id, title, price, image, qty,
        }) => (
          <div key={id} className={styles.card}>
            <img
              src={`${LOCAL_END_POINT}${image.url}`}
              width={100}
              height={100}
              alt={title}
              className={styles.cardImage}
            />
            <div className={styles.description}>
              <h2>{title}</h2>
              <p>
                $
                {' '}
                {price}
              </p>
            </div>
            <div className={styles.actionContainer}>
              {qty > 1 && (
                <button type="button" onClick={() => handleMinusClick(id)}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              )}
              <p>
                {qty}
                {' '}
                {qty > 1 ? 'items' : 'item'}
              </p>
              <button type="button" onClick={() => handlePlusClick(id)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                type="submit"
                onClick={() => handleDeleteItemList(id)}
                className={styles.buttonDelete}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))
        : (
          <div className={styles.emptyListContainer}>
            <h4>Shopping list is empty</h4>
            <button type="button" className={styles.shopButton}>
              <Link to="/">
                <FontAwesomeIcon icon={faCartArrowDown} />
                <span> shopping now</span>
              </Link>
            </button>
          </div>
        )}

      {total > 0 && (
        <button type="submit" className={styles.buttonPayment}>
          <Link to="/checkout">
            Checkout $
            {' '}
            {total.toFixed(2)}
          </Link>
        </button>
      )}
    </div>
  )
}
