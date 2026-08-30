import Link from "next/link";
import { CatalogDemo } from "@/components/catalog/CatalogDemo";
import { getEvents } from "@/lib/cms/events";
import styles from "./page.module.css";

export default async function Home() {
  const events = await getEvents();

  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link className={styles.brand} href="/">Citizen Day</Link>
        <Link className={styles.systemLink} href="/design-system">View the design system</Link>
      </nav>
      <CatalogDemo events={events} />
    </main>
  );
}
