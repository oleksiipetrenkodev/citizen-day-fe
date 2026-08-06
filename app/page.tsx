import Link from "next/link";
import { CatalogDemo } from "@/components/catalog/CatalogDemo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link className={styles.brand} href="/">Citizen Day</Link>
        <Link className={styles.systemLink} href="/design-system">View the design system</Link>
      </nav>
      <CatalogDemo />
    </main>
  );
}
