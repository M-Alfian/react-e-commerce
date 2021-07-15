import { LOCAL_END_POINT } from "../../globals/endpoint"
import { Link } from 'react-router-dom'
import styles from './card.module.css'

export default function Card({ id, title, price, description, image }) {

  return (
    <>
      <div className={styles.card}>
        <img 
          src={`${LOCAL_END_POINT}${image.url}`} 
          alt={image.name}
          className={styles.cardImage}
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