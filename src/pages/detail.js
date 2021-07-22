/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Modal from '../components/modal/modal'
import DbSources from '../globals/DbSources'
import { LOCAL_END_POINT } from '../globals/endpoint'
import styles from '../styles/detail.module.css'
import { ShoppingListContext } from '../utils/AppContext'

export default function Detail() {
  const { cartItemLists, setCartItemLists } = useContext(ShoppingListContext)
  const [product, setProduct] = useState(null)
  const [modal, setModal] = useState(false)
  const [isError, setIsError] = useState(false)
  const { state } = useLocation()

  useEffect(() => {
    const getProductData = async () => {
      try {
        const [data] = await DbSources.getProductById(state.id)
        setProduct(data)
      } catch (err) {
        setIsError(!isError)
      }
    }
    getProductData()
  }, [state])

  const handleClick = () => {
    const {
      id,
      image,
      price,
      title,
    } = product

    const idIsExists = cartItemLists.some((el) => el.id === id)
    setModal(true)

    if (idIsExists) {
      setCartItemLists((current) => current
        .map((obj) => (
          obj.id === id ? { ...obj, qty: obj.qty += 1 } : obj
        )))
    } else {
      setCartItemLists((current) => [...current, {
        id, image, price, title, qty: 1,
      }])
    }
  }

  return (
    <div>
      {isError && <p>You can not go directly to the detail page</p>}
      {product && (
        <div className={styles.detail}>
          <img
            src={`${LOCAL_END_POINT}${product.image.url}`}
            alt={product.title}
            className={styles.detailImage}
          />
          <div className={styles.description}>
            <div>
              <h3>{product.title}</h3>
              <span className={styles.price}>
                $
                {' '}
                {product.price}
              </span>
            </div>
            <p>{product.description}</p>
            <p>
              release at
              {' '}
              {new Date(product.created_at).toDateString()}
            </p>
            <p>
              categorie
              {' '}
              <span>{product.categories[0].name}</span>
            </p>
            <button type="button" onClick={handleClick}>
              <FontAwesomeIcon icon={faCartArrowDown} />
              <span>
                {' '}
                add to cart $
                {' '}
                {product.price}
              </span>
            </button>
          </div>
          <Modal
            modalText={product.title}
            modalOpen={modal}
            setModal={setModal}
          />
        </div>
      )}
    </div>
  )
}
