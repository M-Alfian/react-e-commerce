import styles from './skeleton.module.css'

export default function Skeleton() {
  return (
    <div className={styles.cardSkeleton}>
      <div className={styles.cardImageSkeleton}></div>
      <div className={styles.cardDesc}>
        <p className={styles.title}></p>
        <p className={styles.description}></p>
        <span className={styles.price}></span>
      </div>
    </div>
  )
}