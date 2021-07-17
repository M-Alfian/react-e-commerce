import { useContext, useEffect, useState } from "react"
import Button from "../components/button/button"
import { ShoppingListContext } from "../utils/AppContext"
import styles from '../styles/shopping.module.css'
import { LOCAL_END_POINT } from "../globals/endpoint"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown, faTrash } from "@fortawesome/free-solid-svg-icons"

export default function Shopping() {
  const { cartItemLists, setCartItemLists } = useContext(ShoppingListContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cartItemLists.reduce((acc, current) => {
      return acc + (current.price * current.qty)
    }, 0)
    setTotal(total)
  }, [cartItemLists])
  
  const handlePlusClick = (currentId) => {
    const newList = cartItemLists.map((element) => {
      return element.id === currentId
        ? { ...element, qty: element.qty += 1 } 
        : element
    })
    setCartItemLists(newList)
  }

  const handleMinusClick = (id) => {
    const newList = cartItemLists.map((element) => {
      return element.id === id
        ? { ...element, qty: element.qty -= 1 } 
        : element
    })
    setCartItemLists(newList)
  }

  const handleDeleteItemList = (id) => {
    const filterList = cartItemLists.filter((obj) => obj.id !== id)
    setCartItemLists(filterList)
  }

  return (
    <div className={styles.container}>
      {cartItemLists.length > 0 ? 
        cartItemLists.map(({ id, title, price, image, qty }) => (
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
              <p>$ {price}</p>
            </div>
            <div className={styles.actionContainer}>
              {qty > 1 && <Button plus={false} onClick={() => handleMinusClick(id)}/>}
              <p>{qty} {qty > 1 ? 'items' : 'item'}</p>
              <Button plus={true} onClick={() => handlePlusClick(id)}/>
              <button 
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
            <button className={styles.shopButton}>
              <Link to='/'>
                <FontAwesomeIcon icon={faCartArrowDown} />
                <span> shopping now</span>
              </Link>
            </button>
          </div>
        )}
      {total > 0 && <button className={styles.buttonPayment}>Payment ${total.toFixed(2)}</button>}
    </div>
  )
}