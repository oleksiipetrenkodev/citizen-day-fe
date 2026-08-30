// Event content now lives in the mock CMS (`@/mock-cms/events`) and is loaded
// via `@/lib/cms/events`. This file keeps only the UI taxonomy used for
// filtering, which is a front-end concern rather than registration data.
export type { CatalogEvent } from "@/mock-cms/events";

export const categoryOptions = [
  { label: "All categories", value: "all" },
  { label: "Environment", value: "Environment" },
  { label: "Biodiversity", value: "Biodiversity" },
  { label: "Mobility", value: "Mobility" },
  { label: "Community", value: "Community" },
];
