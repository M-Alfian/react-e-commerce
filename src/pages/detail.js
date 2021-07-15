import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DbSources from "../globals/DbSources";
import { LOCAL_END_POINT } from "../globals/endpoint";
import styles from '../styles/detail.module.css'
import { ShoppingListContext } from "../utils/AppContext";

export default function Detail() {
  const { cartItemLists, setCartItemLists } = useContext(ShoppingListContext)
  const [product, setProduct] = useState(null)
  const { state } = useLocation()

  useEffect(() => {
    const getProductData = async () => {
      const [ data ] = await DbSources.getProductById(state.id)
      setProduct(data)
    }
    getProductData()
  }, [state])

  const handleClick = () => {
    const { id, image, price, title } = product
    const idIsExists = cartItemLists.some((el) => el.id === id)
    console.log(idIsExists)

    if(idIsExists) {
      setCartItemLists((current) => {
        return current.map((obj) => {
          return obj.id === id ? { ...obj, qty: obj.qty += 1 } : obj
        })
      })
    } else {
      setCartItemLists((current) => {
        return [...current, { id, image, price, title, qty: 1 }]
      })
    }
  }

  return (
    <div className={styles.container}>
      {product && (
        <div className={styles.detail}>
          <img src={`${LOCAL_END_POINT}${product.image.url}`} alt={product.title} />
          <div className={styles.description}>
            <h3>{product.title}</h3>
            <p>categories <span>{product.categories[0].name}</span></p>
            <span>$ {product.price}</span>
            <p>{product.description}</p>
            <p>release at {new Date(product.created_at).toDateString()}</p>
            <button onClick={handleClick}>add to cart $ {product.price}</button>
          </div>
        </div>
      )}
    </div>
  )
}