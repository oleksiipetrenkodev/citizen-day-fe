import { events } from "@/mock-cms/events";
import type { CatalogEvent } from "@/mock-cms/events";

/**
 * CMS data access. Currently returns the local mock content, but the call
 * sites are already async so switching to a real headless-CMS fetch later
 * only changes the body of these functions (e.g. `await apiFetch(...)`).
 */
export async function getEvents(): Promise<CatalogEvent[]> {
  return events;
}

export async function getEventBySlug(
  slug: string,
): Promise<CatalogEvent | undefined> {
  return events.find((event) => event.slug === slug);
}
