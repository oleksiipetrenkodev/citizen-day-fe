import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EventDetails } from "@/components/catalog/EventDetails";
import { getEvents, getEventBySlug } from "@/lib/cms/events";
import styles from "./page.module.css";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return { title: "Event not found — Citizen Day" };
  }

  return {
    title: `${event.title} — Citizen Day`,
    description: event.description,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Event navigation">
        <Link className={styles.back} href="/">← Back to all opportunities</Link>
        <Link className={styles.brand} href="/">Citizen Day</Link>
      </nav>
      <EventDetails event={event} />
    </main>
  );
}
