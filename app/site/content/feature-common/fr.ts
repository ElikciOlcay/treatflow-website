import type { FeatureCommonContent } from "./types";

export const featureCommonFr: FeatureCommonContent = {
  breadcrumbHome: "Accueil",
  breadcrumbFeatures: "Fonctionnalités",
  hero: {
    primaryCta: "Essayer 14 jours gratuitement",
    trust: ["14 jours gratuits", "Sans carte bancaire", "Sans commission"],
    rating: "4,6/5 sur Google · plus de 500 instituts",
    shortExplained: "En bref",
  },
  sections: {
    understand: "Ce que cette fonctionnalité vous apporte",
    howItWorks: "Comment ça marche",
    cards: "Ce qui est inclus",
    faq: "Questions fréquentes",
    related: "Fonctionnalités associées",
  },
  pageCta: {
    primary: "Essayer 14 jours gratuitement",
    secondary: "Voir les tarifs",
    secondaryHref: { page: "pricing" },
  },
  attribution: {
    updated: "Mis à jour le",
    by: "Par",
    created: "Publié le",
    dateLocale: "fr-FR",
    jobTitles: { olcay: "Fondateur", goekce: "Cofondatrice" },
    authorHref: { page: "about" },
  },
  ctaSection: {
    title: "Envie de faire passer votre institut à la vitesse supérieure ?",
    text: "Démarrez aujourd'hui votre essai gratuit de 14 jours. Sans carte bancaire, sans engagement, sans frais cachés.",
    primary: "Essayer gratuitement",
    demo: "Réserver un appel conseil",
  },
  quickFacts: {
    ariaLabel: "Treatflow en bref",
    title: "Treatflow en un coup d'œil",
    subtitle: "Les faits essentiels sur Treatflow.",
    facts: [
      { icon: "map-pin", value: "Conçu en Autriche", label: "Bischofshofen, fondée en 2023", color: "bg-rose-100 text-rose-600" },
      { icon: "shield", value: "Conforme au RGPD", label: "Serveurs dans l'UE (Francfort), SSL, sauvegardes quotidiennes", color: "bg-emerald-100 text-emerald-600" },
      { icon: "euro", value: "À partir de 39 €/mois", label: "Formule Basic, 35 €/mois en paiement annuel", color: "bg-indigo-100 text-indigo-600" },
      { icon: "users", value: "Plus de 500 instituts", label: "ont déjà testé Treatflow", color: "bg-amber-100 text-amber-600" },
      { icon: "star", value: "4,6/5 étoiles", label: "Note Google (19 avis)", color: "bg-yellow-100 text-yellow-600" },
      { icon: "clock", value: "14 jours gratuits", label: "Sans carte bancaire, sans engagement", color: "bg-sky-100 text-sky-600" },
    ],
  },
  schemaLanguage: "fr-FR",
};
