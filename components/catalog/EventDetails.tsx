import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import type { CatalogEvent } from "./events";
import { CapacityBadge } from "./CapacityBadge";
import { RegistrationForm } from "./RegistrationForm";
import { StatusBadge } from "./StatusBadge";
import styles from "./EventDetails.module.css";

export type EventDetailsProps = {
  event: CatalogEvent;
};

function DetailItem({ icon, label, value }: { icon: "calendar" | "location"; label: string; value: string }) {
  return (
    <div className={styles.detailItem}>
      {icon === "calendar" ? (
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3v3M18 3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></svg>
      )}
      <div><dt>{label}</dt><dd>{value}</dd></div>
    </div>
  );
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <article>
      <div className={styles.hero}>
        <Image className={styles.image} src={event.imageUrl} alt={event.imageAlt} fill priority sizes="(max-width: 1280px) 100vw, 1280px" />
        <div className={styles.indicators}>
          {event.capacity !== undefined && <CapacityBadge capacity={event.capacity} />}
          {event.isFull && <StatusBadge />}
        </div>
      </div>

      <div className={styles.layout}>
        <div className={styles.main}>
          <div className={styles.meta}>
            <Badge variant="category">{event.category}</Badge>
            {event.year && <span>{event.year}</span>}
          </div>
          <h1 className={styles.title}>{event.title}</h1>
          <p className={styles.description}>{event.description}</p>

          <section className={styles.about} aria-labelledby="about-event-title">
            <h2 id="about-event-title">About this event</h2>
            <p>
              Work alongside local volunteers and organizers to make a practical contribution to the community. Everything you need will be explained when you arrive, so no previous experience is required.
            </p>
          </section>

          <dl className={styles.details}>
            <DetailItem icon="calendar" label="Date and time" value={event.date} />
            <DetailItem icon="location" label="Location" value={event.location} />
          </dl>
        </div>

        <aside className={styles.registration} aria-label="Event registration">
          <RegistrationForm eventSlug={event.slug} isFull={event.isFull} />
        </aside>
      </div>
    </article>
  );
}
