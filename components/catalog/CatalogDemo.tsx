"use client";

import { useMemo, useState } from "react";
import { SearchInput } from "@/components/ui/SearchInput";
import { Select } from "@/components/ui/Select";
import { EmptyState } from "./EmptyState";
import { EventCard } from "./EventCard";
import { EventGrid } from "./EventGrid";
import { LoadMoreButton } from "./LoadMoreButton";
import { categoryOptions, events } from "./events";
import styles from "./CatalogDemo.module.css";

export type CatalogDemoProps = {
  showHeading?: boolean;
};

export function CatalogDemo({ showHeading = true }: CatalogDemoProps) {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("en");
    return events.filter((event) => {
      const matchesCategory = category === "all" || event.category === category;
      const matchesQuery = !normalizedQuery || `${event.title} ${event.description}`.toLocaleLowerCase("en").includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const resultLabel = `${filteredEvents.length} ${filteredEvents.length === 1 ? "opportunity" : "opportunities"}`;

  return (
    <section className={styles.catalog} aria-labelledby={showHeading ? "catalog-title" : undefined}>
      {showHeading && (
        <header className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>Make a difference near you</p>
            <h1 id="catalog-title" className={styles.title}>Volunteer and environmental opportunities</h1>
          </div>
          <p className={styles.count} aria-live="polite">{resultLabel}</p>
        </header>
      )}
      {!showHeading && <p className={styles.count} aria-live="polite">{resultLabel}</p>}

      <div className={styles.toolbar}>
        <SearchInput label="Search opportunities" placeholder="Title or keyword" value={query} onChange={(event) => setQuery(event.target.value)} />
        <Select label="Category" options={categoryOptions} value={category} onChange={(event) => setCategory(event.target.value)} />
      </div>

      {filteredEvents.length > 0 ? (
        <>
          <EventGrid label={`${resultLabel} available`}>
            {filteredEvents.map((event) => <EventCard key={event.title} {...event} />)}
          </EventGrid>
          <LoadMoreButton aria-label="Show more volunteer opportunities" />
        </>
      ) : (
        <EmptyState />
      )}
    </section>
  );
}
