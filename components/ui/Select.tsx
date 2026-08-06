"use client";

import { useId, type SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";

export type SelectOption = { label: string; value: string };

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: SelectOption[];
};

export function Select({ id, label, options, className = "", ...props }: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  return (
    <div className={`${styles.field} ${className}`}>
      <label className={styles.label} htmlFor={selectId}>{label}</label>
      <div className={styles.control}>
        <select id={selectId} className={styles.select} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
          <path d="m7 10 5 5 5-5" />
        </svg>
      </div>
    </div>
  );
}
