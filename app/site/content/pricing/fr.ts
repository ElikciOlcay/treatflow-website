import type { PricingPageContent } from "./types";

export const pricingFr: PricingPageContent = {
  meta: {
    title: "Tarifs du logiciel pour institut de beauté",
    description:
      "Tarifs Treatflow : Basic dès 39 €/mois, Booking dès 59 €/mois. Aucune commission sur les réservations, 14 jours d'essai gratuit, sans carte bancaire.",
    keywords: [
      "logiciel institut de beauté prix",
      "tarif logiciel esthéticienne",
      "logiciel prise de rendez-vous sans commission",
      "abonnement logiciel salon de beauté",
      "logiciel médecine esthétique tarif",
    ],
  },
  dates: { modified: "2026-11-05", published: "2024-06-01" },
  breadcrumb: "Tarifs",
  capsule: {
    question: "Combien coûte Treatflow ?",
    answer:
      "Basic dès 39 €/mois (fiches clients, formulaires, suivi des soins), Booking dès 59 €/mois (avec agenda, réservation en ligne et rappels). Aucune commission par réservation, 14 jours d'essai gratuit.",
  },
  schema: {
    webPage: {
      name: "Tarifs : logiciel pour institut de beauté dès 39 €/mois",
      description: "Des tarifs Treatflow transparents : Basic dès 39 €/mois, Booking dès 59 €/mois.",
    },
    priceValidUntil: "2026-12-31",
    offers: [
      { name: "Basic", price: "39", currency: "EUR" },
      { name: "Booking", price: "59", currency: "EUR" },
    ],
  },
  comparison: {
    title: "Que contient chaque formule ?",
    subtitle: "Comparez les deux formules en détail et choisissez celle qui convient à votre institut.",
    vatNote: "Tous les prix sont indiqués HT.",
    featureLabel: "Fonctionnalité",
    basicLabel: "Basic (39 €)",
    bookingLabel: "Booking (59 €)",
    rows: [
      { label: "Fiches clients", basic: true, booking: true },
      { label: "Formulaires avec signature électronique", basic: true, booking: true },
      { label: "Suivi des soins et notes vocales", basic: true, booking: true },
      { label: "Photos avant/après", basic: true, booking: true },
      { label: "Notes d'équipe et tâches", basic: true, booking: true },
      { label: "Boutique et produits", basic: true, booking: true },
      { label: "Statistiques", basic: true, booking: true },
      { label: "Collaborateurs et rôles", basic: true, booking: true },
      { label: "Support par e-mail", basic: true, booking: true },
      { label: "Agenda (collaborateurs et cabines)", basic: false, booking: true },
      { label: "Réservation en ligne sans commission", basic: false, booking: true },
      { label: "Liste d'attente", basic: false, booking: true },
      { label: "Rappels par e-mail", basic: false, booking: true },
      { label: "Parcours clients", basic: false, booking: true },
      { label: "Codes promo", basic: false, booking: true },
      { label: "Page de réservation multilingue", basic: false, booking: true },
      { label: "Intégrations (Google Agenda, Zapier, assistants IA)", basic: false, booking: true },
      { label: "Support prioritaire", basic: false, booking: true },
    ],
    cta: "Essayer 14 jours gratuitement",
  },
  why: {
    title: "Pourquoi Treatflow ?",
    subtitle: "Des tarifs fixes et transparents plutôt que des frais cachés et des commissions.",
    stats: [
      { value: "0 %", label: "de commission par réservation" },
      { value: "0 €", label: "de frais de mise en service" },
      { value: "14 jours", label: "d'essai gratuit" },
      { value: "À tout moment", label: "résiliable" },
    ],
  },
  faq: {
    title: "Questions fréquentes sur les tarifs",
    subtitle: "Tout ce qu'il faut savoir sur les tarifs de Treatflow.",
    items: [
      {
        question: "Combien coûte Treatflow ?",
        answer:
          "Treatflow propose deux formules : Basic dès 39 €/mois pour les fiches clients, les formulaires et le suivi des soins. Booking dès 59 €/mois avec en plus l'agenda, la réservation en ligne et les rappels automatiques. Les deux formules peuvent être testées gratuitement pendant 14 jours.",
      },
      {
        question: "Y a-t-il des frais cachés ?",
        answer:
          "Non. Treatflow fonctionne avec des tarifs fixes et transparents, sans commission, frais de mise en service ni coûts cachés. Le prix affiché est le prix payé.",
      },
      {
        question: "Puis-je résilier à tout moment ?",
        answer:
          "Oui. En formule mensuelle, vous pouvez résilier à tout moment, avec effet à la fin de la période de facturation. Aucune durée minimale d'engagement.",
      },
      {
        question: "Existe-t-il un logiciel gratuit pour institut de beauté ?",
        answer:
          "Certains éditeurs comme Fresha proposent une version de base gratuite, mais se rémunèrent sur les frais de paiement et les options payantes. Treatflow propose des tarifs fixes et transparents sans frais cachés – dès 39 €/mois avec toutes les fonctionnalités.",
      },
      {
        question: "La formule Booking vaut-elle le coup ?",
        answer:
          "Oui, si vous avez besoin de la réservation en ligne, de rappels automatiques par e-mail et d'un agenda numérique. Avec la formule Booking, vous limitez nettement les rendez-vous non honorés et passez moins de temps au téléphone.",
      },
    ],
  },
};
