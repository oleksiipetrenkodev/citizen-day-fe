import { Badge } from "@/components/ui/Badge";
import styles from "./StatusBadge.module.css";

export type StatusBadgeProps = {
  children?: string;
};

export function StatusBadge({ children = "Event full" }: StatusBadgeProps) {
  return <Badge className={styles.status} variant="full">{children}</Badge>;
}
