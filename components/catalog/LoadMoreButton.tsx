import type { ButtonHTMLAttributes } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./LoadMoreButton.module.css";

export type LoadMoreButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function LoadMoreButton({ children = "Show more opportunities", ...props }: LoadMoreButtonProps) {
  return <div className={styles.wrapper}><Button variant="secondary" {...props}>{children}</Button></div>;
}
