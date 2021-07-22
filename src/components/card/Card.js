/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LOCAL_END_POINT } from '../../globals/endpoint'
import styles from './card.module.css'

export default function Card({
  id,
  title,
  price,
  description,
  image,
}) {
  const [load, setLoad] = useState(false)
  const { url, name } = image

  return (
    <>
      <div className={styles.card}>
        <img
          src={`${LOCAL_END_POINT}${url}`}
          alt={name}
          onLoad={() => setLoad(true)}
          className={`${load ? styles.cardImage : styles.cardImageHidden}`}
        />
        <div className={styles.cardDesc}>
          <Link to={{ pathname: '/detail', state: { id } }}>
            <h2>{title}</h2>
          </Link>
          <p>{description}</p>
          <span>
            $
            {' '}
            {price}
          </span>
        </div>
      </div>
    </>
  )
}
