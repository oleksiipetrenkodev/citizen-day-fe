import type { ReactNode } from "react";
import styles from "./EventGrid.module.css";

export type EventGridProps = {
  children: ReactNode;
  label?: string;
};

export function EventGrid({ children, label = "Opportunity list" }: EventGridProps) {
  return <div className={styles.grid} aria-label={label}>{children}</div>;
}
