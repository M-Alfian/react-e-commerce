import { LOCAL_END_POINT } from "../../globals/endpoint"
import { Link } from 'react-router-dom'
import styles from './card.module.css'
import { useState } from "react"

export default function Card({ id, title, price, description, image }) {
  const [load, setLoad] = useState(false)

  return (
    <>
      <div className={styles.card}>
        <img 
          src={`${LOCAL_END_POINT}${image.url}`} 
          alt={image.name}
          onLoad={() => setLoad(true)}
          className={`${load ? styles.cardImage : styles.cardImageHidden}`}
          />
        <div className={styles.cardDesc}>
          <Link to={{ pathname: '/detail', state: { id: id }}}>
            <h2>{title}</h2>
          </Link>
          <p>{description}</p>
          <span>$ {price}</span>
        </div>
      </div>
    </>
  )
}