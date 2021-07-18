import styles from './skeleton.module.css'

export default function Skeleton() {
  return (
    Array(10).fill().map((value, index) => (
      <div className={styles.cardSkeleton} key={index}>
        <div className={styles.cardImageSkeleton}></div>
        <div className={styles.cardDesc}>
          <p className={styles.title}></p>
          <p className={styles.description}></p>
          <span className={styles.price}></span>
        </div>
      </div>
    ))
  )
}