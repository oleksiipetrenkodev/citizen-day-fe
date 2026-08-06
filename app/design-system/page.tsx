import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SearchInput } from "@/components/ui/SearchInput";
import { Select } from "@/components/ui/Select";
import { CapacityBadge } from "@/components/catalog/CapacityBadge";
import { CatalogDemo } from "@/components/catalog/CatalogDemo";
import { EmptyState } from "@/components/catalog/EmptyState";
import { EventCard } from "@/components/catalog/EventCard";
import { EventGrid } from "@/components/catalog/EventGrid";
import { SkeletonCard } from "@/components/catalog/SkeletonCard";
import { StatusBadge } from "@/components/catalog/StatusBadge";
import { categoryOptions, events } from "@/components/catalog/events";
import styles from "./page.module.css";

const colors = [
  ["Navy", "#0f2043", "navy"],
  ["Body", "#2d3748", "body"],
  ["Muted", "#718096", "muted"],
  ["Separator", "#e2e8f0", "separator"],
  ["Success", "#16803c", "success"],
  ["Accent", "#f8d12f", "accent"],
] as const;

export default function DesignSystemPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Link className={styles.back} href="/">← Back to catalog</Link>
        <p className={styles.eyebrow}>Citizen Day</p>
        <h1 className={styles.pageTitle}>Design system</h1>
        <p className={styles.intro}>Foundations and reusable components for volunteer and environmental opportunities.</p>
      </header>

      <section className={styles.section} aria-labelledby="colors-title">
        <h2 id="colors-title" className={styles.sectionTitle}>Colors</h2>
        <div className={styles.palette}>
          {colors.map(([name, value, className]) => (
            <div className={styles.swatchCard} key={name}>
              <div className={`${styles.swatch} ${styles[className]}`} />
              <strong>{name}</strong><span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="type-title">
        <h2 id="type-title" className={styles.sectionTitle}>Typography</h2>
        <div className={styles.typeScale}>
          <div><span>Page title</span><p className={styles.typePage}>Make a difference together</p></div>
          <div><span>Section title</span><p className={styles.typeSection}>Opportunities to discover</p></div>
          <div><span>Card title</span><p className={styles.typeCard}>Riverbank cleanup</p></div>
          <div><span>Body text</span><p className={styles.typeBody}>Every contribution helps build a stronger and more sustainable community.</p></div>
          <div><span>Metadata</span><p className={styles.typeMeta}>Updated in 2026</p></div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="controls-title">
        <h2 id="controls-title" className={styles.sectionTitle}>Buttons and badges</h2>
        <div className={styles.row}>
          <Button>Primary action</Button><Button variant="secondary">Secondary action</Button><Button variant="outline">Outline action</Button>
        </div>
        <div className={styles.row}>
          <Badge variant="category">Environment</Badge><Badge variant="available">Places available</Badge><Badge variant="full">Full</Badge><Badge variant="critical">Critical</Badge><Badge variant="important">Important</Badge><Badge variant="neutral">Neutral</Badge>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="forms-title">
        <h2 id="forms-title" className={styles.sectionTitle}>Forms and indicators</h2>
        <div className={styles.formGrid}>
          <SearchInput label="Search opportunities" placeholder="Title or keyword" />
          <Select label="Category" options={categoryOptions} defaultValue="all" />
        </div>
        <div className={styles.row}>
          <CapacityBadge capacity={200} /><StatusBadge />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="cards-title">
        <h2 id="cards-title" className={styles.sectionTitle}>Card states</h2>
        <EventGrid>
          <EventCard {...events[0]} />
          <EventCard {...events[2]} />
          <EventCard {...events[1]} capacity={undefined} href={undefined} />
          <SkeletonCard />
        </EventGrid>
      </section>

      <section className={styles.section} aria-labelledby="empty-title">
        <h2 id="empty-title" className={styles.sectionTitle}>Empty state</h2>
        <EmptyState action={<Button variant="outline">Reset filters</Button>} />
      </section>

      <section className={styles.section} aria-labelledby="example-title">
        <h2 id="example-title" className={styles.sectionTitle}>Responsive catalog</h2>
        <CatalogDemo showHeading={false} />
      </section>
    </main>
  );
}
