import type { FooterContent } from "./types";

/**
 * Footer français. Mêmes colonnes que `en.ts` (sans les éléments réservés à la
 * région DACH). Les liens vers des pages qui n'existent pas encore en français
 * sont masqués automatiquement (voir app/i18n/site-pages.ts).
 */
export const footerFr: FooterContent = {
  tagline: "L'assistant numérique de votre institut. Conçu en Autriche.",
  instagramAria: "Treatflow sur Instagram",
  columns: [
    {
      sections: [
        {
          title: "Fonctionnalités",
          links: [
            { href: { page: "appointment-calendar" }, label: "Agenda et planning" },
            { href: { page: "online-booking" }, label: "Réservation en ligne" },
            { href: { page: "treatflow-pay" }, label: "Treatflow Pay", feature: "pay" },
            { href: { page: "client-records" }, label: "Fiches clients" },
            { href: { page: "forms" }, label: "Formulaires" },
            { href: { page: "try-forms" }, label: "Essayer des formulaires d'exemple" },
            { href: { page: "treatment-documentation" }, label: "Suivi des soins" },
            { href: { page: "messaging" }, label: "Rappels" },
            { href: { page: "customer-workflows" }, label: "Parcours clients" },
            { href: { page: "integrations" }, label: "Intégrations" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Métiers",
          links: [
            { href: { page: "beauty-salon-software" }, label: "Instituts de beauté" },
            { href: { page: "laser-hair-removal-software" }, label: "Laser et IPL" },
            { href: { page: "permanent-makeup-software" }, label: "Maquillage permanent" },
            { href: { page: "aesthetic-clinic-software" }, label: "Médecine esthétique" },
            { href: { page: "nail-salon-software" }, label: "Ongleries" },
            { href: { page: "foot-care-software" }, label: "Soins des pieds" },
            { href: { page: "lash-studio-software" }, label: "Extensions de cils" },
            { href: { page: "tattoo-studio-software" }, label: "Salons de tatouage" },
            { href: { page: "spa-wellness-software" }, label: "Spa et bien-être" },
            { href: { page: "massage-software" }, label: "Massage" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Produit",
          links: [
            { href: { page: "pricing" }, label: "Tarifs" },
            { href: { page: "software-comparison" }, label: "Comparatif de logiciels" },
            { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
            { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
            { href: { page: "shop" }, label: "Boutique" },
            { href: { page: "studio-website" }, label: "Site web de l'institut" },
            { special: "register", label: "Essai gratuit" },
            { special: "login", label: "Connexion" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Entreprise",
          links: [
            { href: { page: "about" }, label: "À propos" },
            { href: { page: "blog" }, label: "Blog" },
            { href: { page: "news" }, label: "Nouveautés" },
            { href: { page: "try-features" }, label: "Tester les fonctionnalités en direct" },
            { href: { page: "contact" }, label: "Contact" },
          ],
        },
        {
          title: "Informations légales",
          links: [
            { href: { page: "privacy" }, label: "Politique de confidentialité" },
            { special: "cookie-settings", label: "Paramètres des cookies" },
            { href: { page: "terms" }, label: "Conditions d'utilisation" },
            { href: { page: "imprint" }, label: "Mentions légales" },
          ],
        },
      ],
    },
  ],
  popularTopicsTitle: "Sujets populaires",
  popularTopics: [
    { href: { page: "online-booking" }, label: "Réservation en ligne pour instituts de beauté" },
    { href: { page: "treatment-documentation" }, label: "Logiciel de suivi des soins" },
    { href: { page: "forms" }, label: "Questionnaires clients numériques" },
    { href: { page: "messaging" }, label: "Rappels de rendez-vous" },
    { href: { page: "appointment-calendar" }, label: "Logiciel de planning pour institut" },
    { href: { page: "client-records" }, label: "Fiches clients pour instituts" },
    { href: { page: "aesthetic-clinic-software" }, label: "Logiciel de médecine esthétique" },
    { href: { page: "software-comparison" }, label: "Comparatif de logiciels pour instituts" },
  ],
  rights: "Tous droits réservés.",
};
