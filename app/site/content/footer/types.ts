import type { Feature, Href } from "../shared";

/**
 * Footer-Link. `special` statt `href` für App-Links (Registrierung/Login je Sprache)
 * und den Cookie-Einstellungen-Button.
 */
export type FooterLink =
  | { label: string; href: Href; feature?: Feature }
  | { label: string; special: "register" | "login" | "cookie-settings"; feature?: Feature };

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

/** Eine Spalte kann mehrere Abschnitte untereinander haben (z. B. Unternehmen/Regionen/Rechtliches). */
export type FooterColumn = {
  sections: FooterSection[];
};

export type FooterContent = {
  /** Text unter dem Logo */
  tagline: string;
  instagramAria: string;
  columns: FooterColumn[];
  popularTopicsTitle: string;
  popularTopics: { label: string; href: Href; feature?: Feature }[];
  /** „Alle Rechte vorbehalten.“ */
  rights: string;
};
