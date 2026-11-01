import type { BlogTopicId } from "./types";

/**
 * Themen des Blogs. Jedes Thema erscheint in allen 8 Sprachen.
 * `deSlug` nur fuer aeltere Themen, deren deutsche Fassung eine eigene Seite unter
 * app/blog/<deSlug>/ ist. Neue Themen haben die deutsche Fassung in posts/de.ts.
 * Bilder sind sprachneutral (public/images/blog/).
 */
export const blogTopics: Record<
  BlogTopicId,
  { deSlug?: string; image: string; pageKeys: string[] }
> = {
  "reduce-no-shows": {
    deSlug: "no-shows-reduzieren-kosmetikstudio",
    image: "/images/blog/no-shows-reduzieren.jpg",
    pageKeys: ["messaging", "online-booking", "appointment-calendar"],
  },
  "choose-salon-software": {
    deSlug: "beste-kosmetikstudio-software-2026",
    image: "/images/blog/beste-kosmetikstudio-software-2026.jpg",
    pageKeys: ["beauty-salon-software", "features", "pricing", "software-comparison"],
  },
  "digital-consultation-forms": {
    deSlug: "anamnesebogen-kosmetikstudio",
    image: "/images/blog/anamnesebogen-kosmetikstudio.jpg",
    pageKeys: ["forms", "treatment-documentation", "client-records"],
  },
  "online-booking-salon": {
    deSlug: "online-buchungssystem-vorteile",
    image: "/images/blog/online-buchung-vorteile.jpg",
    pageKeys: ["online-booking", "appointment-calendar", "studio-website"],
  },
  "gdpr-beauty-salon": {
    deSlug: "dsgvo-datenschutz-kosmetikstudio",
    image: "/images/blog/dsgvo-kosmetikstudio.jpg",
    pageKeys: ["client-records", "forms", "treatment-documentation"],
  },
  "client-retention": {
    deSlug: "kundenbindung-kosmetikstudio-5-strategien",
    image: "/images/blog/kundenbindung-strategien.jpg",
    pageKeys: ["messaging", "client-records", "vouchers"],
  },
};

export const blogTopicOrder: BlogTopicId[] = [
  "choose-salon-software",
  "reduce-no-shows",
  "online-booking-salon",
  "digital-consultation-forms",
  "client-retention",
  "gdpr-beauty-salon",
];
