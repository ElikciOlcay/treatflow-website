import type { FooterContent } from "./types";

/** Deutscher Footer (Referenz). Reihenfolge und Texte = bisheriges Footer.tsx. */
export const footerDe: FooterContent = {
  tagline: "Dein digitaler Studio-Assistent. Made in Austria.",
  instagramAria: "Treatflow auf Instagram",
  columns: [
    {
      sections: [
        {
          title: "Funktionen",
          links: [
            { href: { page: "appointment-calendar" }, label: "Terminkalender" },
            { href: { page: "online-booking" }, label: "Online-Buchungen" },
            { href: { page: "treatflow-pay" }, label: "Treatflow Pay", feature: "pay" },
            { href: { page: "point-of-sale" }, label: "Kassensystem", feature: "pos" },
            { href: { page: "vouchers" }, label: "Gutscheine", feature: "vouchers" },
            { href: { page: "client-records" }, label: "Kundenverwaltung" },
            { href: { page: "forms" }, label: "Formulare" },
            { href: { page: "try-forms" }, label: "Formulare testen" },
            { href: { page: "treatment-documentation" }, label: "Dokumentation" },
            { href: { page: "messaging" }, label: "Nachrichten" },
            { href: { page: "customer-workflows" }, label: "Kunden-Workflows" },
            { href: { page: "nisv-documentation" }, label: "NiSV-Dokumentation", feature: "nisv" },
            { href: { page: "integrations" }, label: "Integrationen" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Branchen",
          links: [
            { href: { page: "beauty-salon-software" }, label: "Kosmetikstudios" },
            { href: "/schoenheitssalon-software", label: "Schönheitssalons" },
            { href: { page: "laser-hair-removal-software" }, label: "Laser & IPL" },
            { href: { page: "permanent-makeup-software" }, label: "Permanent Makeup" },
            { href: { page: "aesthetic-clinic-software" }, label: "Ästhetische Medizin" },
            { href: { page: "nail-salon-software" }, label: "Nagelstudios" },
            { href: { page: "foot-care-software" }, label: "Fußpflege" },
            { href: { page: "lash-studio-software" }, label: "Lash Studios" },
            { href: { page: "tattoo-studio-software" }, label: "Tattoo Studios" },
            { href: { page: "spa-wellness-software" }, label: "Spa & Wellness" },
            { href: { page: "massage-software" }, label: "Massage" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Produkt",
          links: [
            { href: { page: "pricing" }, label: "Preise" },
            { href: { page: "software-comparison" }, label: "Software-Vergleich" },
            { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs. Treatwell" },
            { href: "/kundenkartei-software", label: "Kundenkartei Software" },
            { href: { page: "shop" }, label: "Shop" },
            { href: { page: "studio-website" }, label: "Studio-Website" },
            { special: "register", label: "Kostenlos testen" },
            { special: "login", label: "Login" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Unternehmen",
          links: [
            { href: { page: "about" }, label: "Über uns" },
            { href: { page: "blog" }, label: "Blog" },
            { href: { page: "news" }, label: "Neuigkeiten" },
            { href: "/hygieneplan-kosmetikstudio-pdf", label: "Hygieneplan PDF" },
            { href: "/nisv-checkliste-kosmetikstudio-pdf", label: "NiSV-Checkliste PDF" },
            { href: "/kundenkartei-vorlage-kosmetikstudio-pdf", label: "Kundenkartei-Vorlage" },
            { href: "/no-show-playbook-kosmetikstudio-pdf", label: "No-Show-Playbook" },
            { href: "/preisliste-vorlage-kosmetikstudio-pdf", label: "Preislisten-Vorlage" },
            { href: { page: "try-forms" }, label: "Formulare live testen" },
            { href: { page: "contact" }, label: "Kontakt" },
          ],
        },
        {
          title: "Regionen",
          links: [
            { href: "/kosmetikstudio-software-deutschland", label: "Deutschland" },
            { href: "/kosmetikstudio-software-oesterreich", label: "Österreich" },
            { href: "/kosmetikstudio-software-berlin", label: "Berlin" },
            { href: "/kosmetikstudio-software-wien", label: "Wien" },
          ],
        },
        {
          title: "Rechtliches",
          links: [
            { href: { page: "privacy" }, label: "Datenschutz" },
            { special: "cookie-settings", label: "Cookie-Einstellungen" },
            { href: { page: "terms" }, label: "AGB" },
            { href: { page: "imprint" }, label: "Impressum" },
          ],
        },
      ],
    },
  ],
  popularTopicsTitle: "Beliebte Themen",
  popularTopics: [
    { href: { page: "online-booking" }, label: "Online-Terminbuchung Kosmetikstudio" },
    { href: "/behandlungsdokumentation-kosmetikstudio", label: "Behandlungsdokumentation Kosmetikstudio" },
    { href: "/digitale-anamnese-kosmetikstudio", label: "Digitale Anamnese Kosmetikstudio" },
    { href: { page: "messaging" }, label: "WhatsApp-Erinnerungen Kosmetikstudio", feature: "whatsapp" },
    { href: { page: "appointment-calendar" }, label: "Terminsoftware Kosmetikstudio" },
    { href: { page: "client-records" }, label: "Kundenkartei Kosmetikstudio" },
    { href: "/anamnesebogen-kosmetikstudio", label: "Anamnesebogen Kosmetikstudio" },
    { href: "/nisv-dokumentation-kosmetikstudio", label: "NiSV-Dokumentation", feature: "nisv" },
    { href: "/kosmetikstudio-kasse", label: "Kosmetikstudio Kasse", feature: "pos" },
    { href: "/kassensystem-kosmetikstudio-deutschland", label: "Kassensystem Kosmetikstudio Deutschland", feature: "pos" },
    { href: "/registrierkasse-kosmetikstudio-oesterreich", label: "Registrierkasse Kosmetikstudio Österreich", feature: "pos" },
  ],
  rights: "Alle Rechte vorbehalten.",
};
