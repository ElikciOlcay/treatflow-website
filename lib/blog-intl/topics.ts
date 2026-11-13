import type { BlogLang, BlogTopicId } from "./types";

/**
 * Themen des Blogs. Ein Thema erscheint in allen 8 Sprachen, ausser `markets` ist gesetzt:
 * dann gibt es es nur in diesen Sprachen (Markt-Themen mit lokalen Suchbegriffen, z. B. nur TR).
 * `deSlug` nur fuer aeltere Themen, deren deutsche Fassung eine eigene Seite unter
 * app/blog/<deSlug>/ ist. Neue Themen haben die deutsche Fassung in posts/de.ts.
 * Bilder sind sprachneutral (public/images/blog/).
 */
export const blogTopics: Record<
  BlogTopicId,
  { deSlug?: string; image: string; pageKeys: string[]; markets?: BlogLang[] }
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
    pageKeys: ["messaging", "client-records", "online-booking"],
  },
  "pricing-beauty-treatments": {
    deSlug: "preisgestaltung-kosmetikbehandlungen",
    image: "/images/blog/preisgestaltung-guide.jpg",
    pageKeys: ["pricing", "client-records", "features"],
  },
  "tr-appointment-book-vs-software": {
    image: "/images/lifestyle/online-buchung-smartphone.png",
    pageKeys: ["appointment-calendar", "online-booking", "client-records"],
    markets: ["tr"],
  },
  "cancellation-policy-salon": {
    deSlug: "stornogebuehren-kosmetikstudio",
    image: "/images/blog/no-shows.png",
    pageKeys: ["online-booking", "messaging", "appointment-calendar"],
  },
  "pl-booking-without-commission": {
    image: "/images/blog/online-buchung-vorteile.jpg",
    pageKeys: ["online-booking", "pricing", "appointment-calendar"],
    markets: ["pl"],
  },
};

export const blogTopicOrder: BlogTopicId[] = [
  "choose-salon-software",
  "reduce-no-shows",
  "online-booking-salon",
  "digital-consultation-forms",
  "client-retention",
  "gdpr-beauty-salon",
  "pricing-beauty-treatments",
  "tr-appointment-book-vs-software",
  "cancellation-policy-salon",
  "pl-booking-without-commission",
];
