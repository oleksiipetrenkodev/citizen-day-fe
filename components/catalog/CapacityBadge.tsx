import styles from "./CapacityBadge.module.css";

export type CapacityBadgeProps = {
  capacity: number;
};

export function CapacityBadge({ capacity }: CapacityBadgeProps) {
  return (
    <span className={styles.badge} aria-label={`${capacity} places`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 21a7.5 7.5 0 0 1 15 0" />
      </svg>
      {capacity} PLACES
    </span>
  );
}
