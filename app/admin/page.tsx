import Link from "next/link";
import { AdminRegistrations } from "@/components/admin/AdminRegistrations";
import { getEvents } from "@/lib/cms/events";
import styles from "./page.module.css";

export default async function AdminPage() {
  const events = await getEvents();

  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <Link className={styles.back} href="/">← Back to home</Link>
        <h1 className={styles.title}>Admin — Registrations</h1>
      </nav>
      <AdminRegistrations events={events} />
    </main>
  );
}
