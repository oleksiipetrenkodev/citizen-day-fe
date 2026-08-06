import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { CapacityBadge } from "./CapacityBadge";
import { StatusBadge } from "./StatusBadge";
import styles from "./EventCard.module.css";

export type EventCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  year?: number;
  category: string;
  capacity?: number;
  isFull?: boolean;
  href?: string;
};

function CardContent({ title, description, imageUrl, imageAlt, year, category, capacity, isFull }: EventCardProps) {
  return (
    <>
      <div className={styles.media}>
        <Image className={styles.image} src={imageUrl} alt={imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
        <div className={styles.indicators}>
          {capacity !== undefined && <CapacityBadge capacity={capacity} />}
          {isFull && <StatusBadge />}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <Badge variant="category">{category}</Badge>
          {year && <span className={styles.year}>{year}</span>}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.action} aria-hidden="true">
          View opportunity
          <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </span>
      </div>
    </>
  );
}

export function EventCard(props: EventCardProps) {
  const content: ReactNode = <CardContent {...props} />;

  if (props.href) {
    return <Link className={styles.card} href={props.href} aria-label={`View opportunity: ${props.title}`}>{content}</Link>;
  }

  return <article className={styles.card}>{content}</article>;
}
