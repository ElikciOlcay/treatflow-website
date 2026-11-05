import type { Feature, Href, SiteIconName } from "../shared";
import type { FeatureTitle } from "../feature-common/types";

/** Karte im Funktionsraster. Fehlt die Zielseite in der Sprache, entfällt die Karte. */
export type FeaturesGridItem = {
  href: Href;
  icon: SiteIconName;
  title: string;
  description: string;
  /** Tailwind-Klassen (Icon-Farbe, Kachel-Hintergrund, Rahmen) */
  color: string;
  bg: string;
  border: string;
  highlights: string[];
  feature?: Feature;
};

/** Inhalte der Funktionsübersicht (DE `/funktionen`, sonst `/{lang}/features` lokalisiert). */
export type FeaturesOverviewContent = {
  meta: {
    title: string;
    description: string;
    keywords?: string[];
    /** Nur DE: eigenes OpenGraph (andere Sprachen: buildPageMetadata). */
    openGraph?: { title: string; description: string };
  };
  /** Letzter Breadcrumb (Seitenname) */
  breadcrumb: string;
  hero: {
    eyebrow: string;
    eyebrowIcon: SiteIconName;
    title: FeatureTitle;
    description: string;
    chips: string[];
    secondaryCta: { label: string; href: Href };
    /** Kacheln rechts im Hero */
    tiles: { label: string; icon: SiteIconName; gradient: string; feature?: Feature }[];
  };
  grid: {
    /** `{count}` wird durch die Zahl der angezeigten Karten ersetzt. */
    title: string;
    subtitle: string;
    /** „Mehr erfahren“ */
    more: string;
    items: FeaturesGridItem[];
  };
  why: {
    title: string;
    points: string[];
  };
};
