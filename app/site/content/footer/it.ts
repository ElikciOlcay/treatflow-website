import type { FooterContent } from "./types";

/**
 * Footer italiano. Stesse colonne di `en.ts` (senza voci solo DACH come cassa,
 * buoni regalo, NiSV). I link a pagine non ancora disponibili in italiano vengono
 * nascosti automaticamente (vedi app/i18n/site-pages.ts).
 */
export const footerIt: FooterContent = {
  tagline: "Il gestionale digitale per il tuo centro. Made in Austria.",
  instagramAria: "Treatflow su Instagram",
  columns: [
    {
      sections: [
        {
          title: "Funzioni",
          links: [
            { href: { page: "appointment-calendar" }, label: "Agenda appuntamenti" },
            { href: { page: "shift-planner" }, label: "Pianificatore turni" },
            { href: { page: "online-booking" }, label: "Prenotazioni online" },
            { href: { page: "treatflow-pay" }, label: "Treatflow Pay", feature: "pay" },
            { href: { page: "client-records" }, label: "Schede clienti" },
            { href: { page: "forms" }, label: "Moduli" },
            { href: { page: "try-forms" }, label: "Prova i moduli di esempio" },
            { href: { page: "treatment-documentation" }, label: "Documentazione" },
            { href: { page: "messaging" }, label: "Promemoria" },
            { href: { page: "customer-workflows" }, label: "Flussi clienti" },
            { href: { page: "integrations" }, label: "Integrazioni" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Settori",
          links: [
            { href: { page: "beauty-salon-software" }, label: "Centri estetici" },
            { href: { page: "laser-hair-removal-software" }, label: "Laser e IPL" },
            { href: { page: "permanent-makeup-software" }, label: "Trucco permanente" },
            { href: { page: "aesthetic-clinic-software" }, label: "Medicina estetica" },
            { href: { page: "nail-salon-software" }, label: "Onicotecnica" },
            { href: { page: "foot-care-software" }, label: "Pedicure e podologia" },
            { href: { page: "lash-studio-software" }, label: "Extension ciglia" },
            { href: { page: "tattoo-studio-software" }, label: "Studi di tatuaggio" },
            { href: { page: "spa-wellness-software" }, label: "Spa e wellness" },
            { href: { page: "massage-software" }, label: "Massaggi" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Prodotto",
          links: [
            { href: { page: "pricing" }, label: "Prezzi" },
            { href: { page: "software-comparison" }, label: "Confronto gestionali" },
            { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
            { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
            { href: { page: "shop" }, label: "Shop" },
            { href: { page: "studio-website" }, label: "Sito web del centro" },
            { special: "register", label: "Prova gratis" },
            { special: "login", label: "Accedi" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Azienda",
          links: [
            { href: { page: "about" }, label: "Chi siamo" },
            { href: { page: "blog" }, label: "Blog" },
            { href: { page: "news" }, label: "Novità" },
            { href: { page: "try-features" }, label: "Prova le funzioni dal vivo" },
            { href: { page: "contact" }, label: "Contatti" },
          ],
        },
        {
          title: "Informazioni legali",
          links: [
            { href: { page: "privacy" }, label: "Informativa sulla privacy" },
            { special: "cookie-settings", label: "Impostazioni cookie" },
            { href: { page: "terms" }, label: "Termini e condizioni" },
            { href: { page: "imprint" }, label: "Note legali" },
          ],
        },
      ],
    },
  ],
  popularTopicsTitle: "Argomenti più cercati",
  popularTopics: [
    { href: { page: "online-booking" }, label: "Prenotazioni online per centri estetici" },
    { href: { page: "treatment-documentation" }, label: "Scheda trattamento digitale" },
    { href: { page: "forms" }, label: "Scheda anamnestica digitale" },
    { href: { page: "messaging" }, label: "Promemoria appuntamenti" },
    { href: { page: "appointment-calendar" }, label: "Agenda appuntamenti per centri estetici" },
    { href: { page: "client-records" }, label: "Schede clienti per centri estetici" },
    { href: { page: "aesthetic-clinic-software" }, label: "Gestionale per la medicina estetica" },
    { href: { page: "software-comparison" }, label: "Confronto gestionali per centri estetici" },
  ],
  rights: "Tutti i diritti riservati.",
};
