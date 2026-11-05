import type { Feature, Href, SiteIconName } from "../shared";

/** Eintrag im Funktionen- oder Branchen-Menü. */
export type NavMenuItem = {
  href: Href;
  label: string;
  desc: string;
  icon: SiteIconName;
  /** Tailwind-Farbklassen der Icon-Kachel, z. B. "text-indigo-600 bg-indigo-100". */
  color: string;
  /** Nur anzeigen, wenn die Funktion im Markt angeboten wird. */
  feature?: Feature;
};

export type NavMenuGroup = {
  title: string;
  items: NavMenuItem[];
};

export type NavTextLink = {
  href: Href;
  label: string;
  feature?: Feature;
};

/** Texte und Links der Hauptnavigation (Desktop + MobileMenu). */
export type NavigationContent = {
  /** Button „Funktionen“ */
  featuresLabel: string;
  featureGroups: NavMenuGroup[];
  /** Link unter dem Mega-Menü („Alle Funktionen ansehen“) */
  allFeatures: NavTextLink;
  /** Button „Branchen“ */
  industriesLabel: string;
  industries: NavMenuItem[];
  /** Direkte Links rechts (Preise, Blog, Neuigkeiten, Referenzen, Kontakt). */
  links: NavTextLink[];
  login: string;
  /** Primärer CTA („Kostenlos testen“) */
  cta: string;
  /** aria-label des Menü-Buttons auf Mobilgeräten (DE ohne, wie bisher). */
  menuAria?: string;
};
