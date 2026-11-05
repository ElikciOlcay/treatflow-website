import type { FeaturesOverviewContent } from "./types";

export const featuresFr: FeaturesOverviewContent = {
  meta: {
    title: "Fonctionnalités pour instituts et cliniques",
    description:
      "Agenda, prise de rendez-vous en ligne sans commission, fiches clients, formulaires de consentement numériques, documentation des soins avec dictée vocale, rappels et intégrations – dans un seul logiciel pour votre institut.",
    keywords: [
      "fonctionnalités logiciel institut de beauté",
      "logiciel gestion institut de beauté",
      "formulaire de consentement numérique",
      "logiciel esthétique tout-en-un",
    ],
  },
  breadcrumb: "Fonctionnalités",
  hero: {
    eyebrow: "Aperçu des fonctionnalités",
    eyebrowIcon: "sparkles",
    title: { before: "Toutes les ", highlight: "fonctionnalités", after: " en un coup d'œil" },
    description: "Agenda, réservations, fiches clients, formulaires et documentation – une seule plateforme pour votre institut.",
    chips: ["Tout-en-un", "Sans commission", "Made in Austria"],
    secondaryCta: { label: "Voir les tarifs", href: { page: "pricing" } },
    tiles: [
      { label: "Agenda", icon: "calendar", gradient: "from-indigo-500 to-purple-600" },
      { label: "Réservations", icon: "link", gradient: "from-rose-500 to-orange-600" },
      { label: "Clients", icon: "users", gradient: "from-blue-500 to-indigo-600" },
      { label: "Formulaires", icon: "clipboard-check", gradient: "from-orange-500 to-amber-600" },
      { label: "Documentation", icon: "file-text", gradient: "from-violet-500 to-purple-600" },
      { label: "Parcours", icon: "workflow", gradient: "from-green-500 to-emerald-600" },
    ],
  },
  grid: {
    title: "{count} fonctionnalités clés pour votre institut",
    subtitle: "Chaque fonctionnalité est pensée pour les besoins des instituts de beauté et des cliniques.",
    more: "En savoir plus",
    items: [
      {
        href: { page: "appointment-calendar" },
        icon: "calendar",
        title: "Agenda",
        description:
          "Planifiez collaborateurs et cabines dans des colonnes dédiées. Repérez les créneaux libres, évitez les doubles réservations et coordonnez les changements plus vite.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Colonnes collaborateurs et cabines", "Taux d'occupation en un coup d'œil", "Glisser-déposer"],
      },
      {
        href: { page: "treatflow-pay" },
        icon: "wallet",
        title: "Treatflow Pay",
        description: "Acompte ou paiement intégral dès la réservation en ligne. Réglable par prestation, 2,69 % par transaction.",
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-200 hover:border-violet-400",
        highlights: ["Acompte ou paiement intégral", "Carte, Apple Pay, Google Pay", "2,69 % par transaction"],
        feature: "pay",
      },
      {
        href: { page: "online-booking" },
        icon: "link",
        title: "Réservation en ligne",
        description:
          "Un lien de réservation personnel pour votre institut. Vos clientes réservent à toute heure – confirmations et rappels partent automatiquement.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200 hover:border-rose-400",
        highlights: ["Lien de réservation 24h/24", "Confirmations automatiques", "Pas de double réservation"],
      },
      {
        href: { page: "client-records" },
        icon: "users",
        title: "Fiches clients numériques",
        description:
          "Fiche client numérique avec historique des soins, photos avant/après, allergies et notes. Tout au même endroit.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200 hover:border-emerald-400",
        highlights: ["Clients illimités", "Photos et notes", "Conforme au RGPD"],
      },
      {
        href: { page: "forms" },
        icon: "clipboard-check",
        title: "Formulaires et anamnèse",
        description:
          "Questionnaires d'anamnèse et formulaires de consentement numériques. Vos clientes les remplissent à l'avance sur leur smartphone – sans papier et juridiquement solide.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200 hover:border-orange-400",
        highlights: ["Anamnèse numérique", "Envoi préalable par lien", "Zéro papier"],
      },
      {
        href: { page: "treatment-documentation" },
        icon: "file-text",
        title: "Documentation des soins",
        description:
          "Documentez chaque soin en numérique : photos, produits utilisés, notes et résultats. Idéal pour les soins de suivi.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200 hover:border-blue-400",
        highlights: ["Photos et produits", "Historique des soins", "Documentation complète"],
      },
      {
        href: { page: "messaging" },
        icon: "bell",
        title: "Rappels automatiques",
        description: "Rappels par e-mail avant chaque rendez-vous. Moins de rendez-vous non honorés – entièrement automatiquement.",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200 hover:border-purple-400",
        highlights: ["Rappels par e-mail", "Moins de rendez-vous manqués", "Horaires configurables"],
      },
      {
        href: { page: "customer-workflows" },
        icon: "workflow",
        title: "Parcours clients",
        description:
          "Automatisations en plusieurs étapes pour le suivi après soin, la réactivation et les relances – avec délais d'attente, conditions et e-mails.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Éditeur visuel", "E-mails automatiques", "S'arrête à la nouvelle réservation"],
      },
      {
        href: { page: "shop" },
        icon: "shopping-bag",
        title: "Vente de produits et stock",
        description:
          "Vendez des produits de soin directement à vos clientes. Gérez le stock, enregistrez les ventes et augmentez votre chiffre d'affaires additionnel.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200 hover:border-amber-400",
        highlights: ["Vente de produits", "Gestion du stock", "Plus de chiffre d'affaires"],
      },
    ],
  },
  why: {
    title: "Pourquoi Treatflow ?",
    points: [
      "Tout-en-un : toutes les fonctionnalités sur une seule plateforme",
      "Conforme au RGPD avec serveurs dans l'UE",
      "Aucun frais caché ni commission",
      "14 jours d'essai gratuit, sans carte bancaire",
      "Support et prise en main gratuits",
      "Made in Austria",
    ],
  },
};
