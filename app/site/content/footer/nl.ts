import type { FooterContent } from "./types";

/**
 * Nederlandse footer (NL + BE). Zelfde kolommen als `en.ts`, zonder DACH-only items
 * (kassa, cadeaubonnen, NiSV, regio's, Duitse pdf-sjablonen). Links naar pagina's
 * die in een taal nog niet bestaan, worden automatisch verborgen
 * (zie app/i18n/site-pages.ts).
 */
export const footerNl: FooterContent = {
  tagline: "Jouw digitale salonassistent. Made in Austria.",
  instagramAria: "Treatflow op Instagram",
  columns: [
    {
      sections: [
        {
          title: "Functies",
          links: [
            { href: { page: "appointment-calendar" }, label: "Online agenda" },
            { href: { page: "online-booking" }, label: "Online boeken" },
            { href: { page: "treatflow-pay" }, label: "Treatflow Pay", feature: "pay" },
            { href: { page: "client-records" }, label: "Klantdossiers" },
            { href: { page: "forms" }, label: "Formulieren" },
            { href: { page: "try-forms" }, label: "Voorbeeldformulieren uitproberen" },
            { href: { page: "treatment-documentation" }, label: "Behandelverslagen" },
            { href: { page: "messaging" }, label: "Herinneringen" },
            { href: { page: "customer-workflows" }, label: "Klantworkflows" },
            { href: { page: "integrations" }, label: "Integraties" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Branches",
          links: [
            { href: { page: "beauty-salon-software" }, label: "Schoonheidssalons" },
            { href: { page: "laser-hair-removal-software" }, label: "Laser & IPL" },
            { href: { page: "permanent-makeup-software" }, label: "Permanente make-up" },
            { href: { page: "aesthetic-clinic-software" }, label: "Esthetische klinieken" },
            { href: { page: "nail-salon-software" }, label: "Nagelstudio's" },
            { href: { page: "foot-care-software" }, label: "Pedicure & voetzorg" },
            { href: { page: "lash-studio-software" }, label: "Wimperstudio's" },
            { href: { page: "tattoo-studio-software" }, label: "Tattoostudio's" },
            { href: { page: "spa-wellness-software" }, label: "Spa & wellness" },
            { href: { page: "massage-software" }, label: "Massage" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Product",
          links: [
            { href: { page: "pricing" }, label: "Prijzen" },
            { href: { page: "software-comparison" }, label: "Salonsoftware vergelijken" },
            { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
            { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
            { href: { page: "shop" }, label: "Shop" },
            { href: { page: "studio-website" }, label: "Salonwebsite" },
            { special: "register", label: "Probeer gratis" },
            { special: "login", label: "Inloggen" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Bedrijf",
          links: [
            { href: { page: "about" }, label: "Over ons" },
            { href: { page: "blog" }, label: "Blog" },
            { href: { page: "news" }, label: "Nieuws" },
            { href: { page: "try-features" }, label: "Functies live uitproberen" },
            { href: { page: "contact" }, label: "Contact" },
          ],
        },
        {
          title: "Juridisch",
          links: [
            { href: { page: "privacy" }, label: "Privacyverklaring" },
            { special: "cookie-settings", label: "Cookie-instellingen" },
            { href: { page: "terms" }, label: "Algemene voorwaarden" },
            { href: { page: "imprint" }, label: "Colofon" },
          ],
        },
      ],
    },
  ],
  popularTopicsTitle: "Populaire onderwerpen",
  popularTopics: [
    { href: { page: "online-booking" }, label: "Online afspraken boeken voor salons" },
    { href: { page: "treatment-documentation" }, label: "Digitaal behandelverslag" },
    { href: { page: "forms" }, label: "Digitale intakeformulieren" },
    { href: { page: "messaging" }, label: "Afspraakherinneringen" },
    { href: { page: "appointment-calendar" }, label: "Online agenda voor salons" },
    { href: { page: "client-records" }, label: "Digitale klantenkaart voor salons" },
    { href: { page: "aesthetic-clinic-software" }, label: "Software voor esthetische klinieken" },
    { href: { page: "software-comparison" }, label: "Salonsoftware vergelijken" },
  ],
  rights: "Alle rechten voorbehouden.",
};
