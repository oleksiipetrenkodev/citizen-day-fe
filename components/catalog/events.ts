import type { EventCardProps } from "./EventCard";

export type CatalogEvent = EventCardProps & {
  slug: string;
  date: string;
  location: string;
};

export const events: CatalogEvent[] = [
  {
    slug: "riverbank-cleanup",
    title: "Riverbank cleanup",
    description: "A community morning to remove litter, protect local biodiversity, and raise awareness among riverside visitors.",
    imageUrl: "/events/river-cleanup.svg",
    imageAlt: "Volunteers cleaning the banks of a river",
    year: 2026,
    category: "Environment",
    capacity: 200,
    date: "September 12, 2026 · 9:00 AM",
    location: "Riverside Park",
    href: "/events/riverbank-cleanup",
  },
  {
    slug: "urban-forest-planting",
    title: "Plant an urban forest",
    description: "Help create a cooler urban space by planting tree species suited to the region’s climate.",
    imageUrl: "/events/tree-planting.svg",
    imageAlt: "Young trees planted in an urban park",
    year: 2026,
    category: "Biodiversity",
    capacity: 80,
    date: "October 3, 2026 · 8:30 AM",
    location: "North District Community Park",
    href: "/events/urban-forest-planting",
  },
  {
    slug: "community-bike-workshop",
    title: "Community bike workshop",
    description: "Help repair bicycles that will be given to people who need an affordable and sustainable way to travel.",
    imageUrl: "/events/bike-workshop.svg",
    imageAlt: "A bicycle being repaired in a community workshop",
    year: 2026,
    category: "Mobility",
    capacity: 24,
    isFull: true,
    date: "August 22, 2026 · 10:00 AM",
    location: "Central Mobility Hub",
    href: "/events/community-bike-workshop",
  },
  {
    slug: "neighborhood-food-drive",
    title: "Neighborhood food drive",
    description: "Welcome donors, sort products, and prepare food parcels for local community organizations.",
    imageUrl: "/events/food-collection.svg",
    imageAlt: "Boxes of groceries ready for a community food drive",
    year: 2026,
    category: "Community",
    capacity: 40,
    date: "November 7, 2026 · 9:30 AM",
    location: "Market Street Community Center",
    href: "/events/neighborhood-food-drive",
  },
  {
    slug: "park-bird-survey",
    title: "Park bird survey",
    description: "Join a naturalist to observe and record local species while contributing to a citizen science project.",
    imageUrl: "/events/bird-count.svg",
    imageAlt: "A bird observed among the trees in a park",
    year: 2025,
    category: "Biodiversity",
    capacity: 16,
    isFull: true,
    date: "May 16, 2025 · 7:00 AM",
    location: "East Lake Park",
    href: "/events/park-bird-survey",
  },
  {
    slug: "community-garden",
    title: "Intergenerational community garden",
    description: "Prepare garden beds, sow seasonal vegetables, and share growing tips with neighbors of all ages.",
    imageUrl: "/events/community-garden.svg",
    imageAlt: "A community vegetable garden with produce and gardening tools",
    year: 2026,
    category: "Environment",
    capacity: 32,
    date: "April 18, 2026 · 10:00 AM",
    location: "Greenway Community Garden",
    href: "/events/community-garden",
  },
  {
    slug: "nature-trail-restoration",
    title: "Restore a nature trail",
    description: "Repair trail markers and small structures along an inclusive and accessible route through nature.",
    imageUrl: "/events/nature-trail.svg",
    imageAlt: "A marked trail running through a forest",
    year: 2025,
    category: "Environment",
    capacity: 50,
    date: "June 20, 2025 · 8:00 AM",
    location: "Pine Ridge Nature Reserve",
    href: "/events/nature-trail-restoration",
  },
  {
    slug: "zero-waste-cooking",
    title: "Zero-waste cooking workshop",
    description: "Turn surplus food into shared meals and discover simple recipes that help reduce food waste.",
    imageUrl: "/events/food-collection.svg",
    imageAlt: "Fresh vegetables ready for a cooking workshop",
    year: 2026,
    category: "Community",
    capacity: 20,
    date: "December 5, 2026 · 11:00 AM",
    location: "Westside Community Kitchen",
    href: "/events/zero-waste-cooking",
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

export const categoryOptions = [
  { label: "All categories", value: "all" },
  { label: "Environment", value: "Environment" },
  { label: "Biodiversity", value: "Biodiversity" },
  { label: "Mobility", value: "Mobility" },
  { label: "Community", value: "Community" },
];
