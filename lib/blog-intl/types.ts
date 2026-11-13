import type { ContentLang } from "@/app/i18n/config";
import type { SeoPageKey } from "@/app/i18n/seo";

/** Blog-Sprachen: DE unter /blog, alle anderen unter /{lang}/blog. */
export type BlogLang = ContentLang | "de";

/** Gemeinsame Themen-ID verbindet Uebersetzungen (hreflang) ueber alle Sprachen. */
export type BlogTopicId =
  | "reduce-no-shows"
  | "choose-salon-software"
  | "digital-consultation-forms"
  | "online-booking-salon"
  | "gdpr-beauty-salon"
  | "client-retention"
  | "pricing-beauty-treatments"
  | "tr-appointment-book-vs-software"
  | "cancellation-policy-salon"
  | "pl-booking-without-commission";

export type BlogSection = {
  /** H2 des Abschnitts. Gern als Frage formuliert (wird von KI-Tools gern zitiert). */
  heading: string;
  /** Absaetze als reiner Text; **fett** ist erlaubt. */
  paragraphs: string[];
  bullets?: string[];
  /** Nummerierte Schritte (HowTo-artig). */
  steps?: string[];
  table?: { headers: string[]; rows: string[][] };
  /** Optionaler Hinweis-Kasten unter dem Abschnitt. */
  callout?: string;
};

export type BlogArticle = {
  topic: BlogTopicId;
  lang: BlogLang;
  /** URL-Slug in der Sprache, ASCII, Bindestriche, ohne Umlaute/Akzente. */
  slug: string;
  /** H1 und og:title. */
  title: string;
  /** <title> ohne " | Treatflow" (max. ~60 Zeichen). */
  metaTitle: string;
  /** Meta-Description, 140–160 Zeichen. */
  description: string;
  /** Kurztext fuer die Blog-Uebersicht (1–2 Saetze). */
  excerpt: string;
  category: string;
  keywords: string[];
  /** ISO-Datum YYYY-MM-DD. */
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  /** Direkte Antwort auf die Hauptfrage in 2–3 Saetzen (Answer-first fuer KI/Featured Snippets). */
  answer: string;
  /** 3–5 Kernaussagen als Liste. */
  takeaways: string[];
  intro: string[];
  sections: BlogSection[];
  faq: { q: string; a: string }[];
  /** Interne Links zu Produktseiten derselben Sprache. */
  related: { pageKey: SeoPageKey; label: string }[];
  /** Optionale externe Quellen (Behoerden, Gesetze, Studien). Nur echte, stabile URLs. */
  sources?: { label: string; url: string }[];
};
