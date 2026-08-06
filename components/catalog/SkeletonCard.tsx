import styles from "./SkeletonCard.module.css";

export function SkeletonCard() {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={`${styles.block} ${styles.image}`} />
      <div className={styles.content}>
        <div className={`${styles.block} ${styles.badge}`} />
        <div className={`${styles.block} ${styles.title}`} />
        <div className={`${styles.block} ${styles.line}`} />
        <div className={`${styles.block} ${styles.shortLine}`} />
      </div>
    </div>
  );
}
