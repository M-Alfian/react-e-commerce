import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../components/popup/modal";
import DbSources from "../globals/DbSources";
import { LOCAL_END_POINT } from "../globals/endpoint";
import styles from '../styles/detail.module.css'
import { ShoppingListContext } from "../utils/AppContext";

export default function Detail() {
  const { cartItemLists, setCartItemLists } = useContext(ShoppingListContext)
  const [product, setProduct] = useState(null)
  const [modal, setModal] = useState(false)
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
    setModal(true)
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
          <img 
            src={`${LOCAL_END_POINT}${product.image.url}`} 
            alt={product.title} 
            className={styles.detailImage}
            />
          <div className={styles.description}>
            <div>
              <h3>{product.title}</h3>
              <span className={styles.price}>$ {product.price}</span>
            </div>
            <p>{product.description}</p>
            <p>release at {new Date(product.created_at).toDateString()}</p>
            <p>categories <span>{product.categories[0].name}</span></p>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faCartArrowDown} />
              <span> add to cart $ {product.price}</span>
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