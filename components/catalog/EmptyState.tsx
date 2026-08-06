import type { ReactNode } from "react";
import styles from "./EmptyState.module.css";

export type EmptyStateProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
};

export function EmptyState({ title = "No opportunities found", description = "Try adjusting your search criteria.", action }: EmptyStateProps) {
  return (
    <section className={styles.empty}>
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v12H4zM8 7V5h8v2M8 12h8" /></svg>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {action}
    </section>
  );
}
