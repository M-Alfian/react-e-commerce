import React from 'react'
import styles from './skeleton.module.css'

export default function Skeleton() {
  return (
    Array(10).fill().map((value, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className={styles.cardSkeleton} key={index}>
        <div className={styles.cardImageSkeleton} />
        <div className={styles.cardDesc}>
          <p className={styles.title} />
          <p className={styles.description} />
          <span className={styles.price} />
        </div>
      </div>
    ))
  )
}
