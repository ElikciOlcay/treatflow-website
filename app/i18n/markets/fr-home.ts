import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import {
  Calendar,
  ClipboardCheck,
  FileText,
  Link2,
  Users,
} from "lucide-react";

export const frHomeContent: InternationalPageContent = {
  pageKey: "home",
  locale: "fr",
  canonicalPath: "/fr",
  serviceName: "Treatflow – Logiciel pour instituts de beauté",
  serviceDescription:
    "Logiciel tout-en-un pour instituts de beauté et cliniques esthétiques : agenda, réservation en ligne, fiches clients, formulaires et documentation des soins.",
  areaServed: ["FR", "BE", "LU", "CA", "EU"],
  ctaPrimaryLabel: "Demander un accès anticipé",
  ctaBottomTitle: "Prêt à digitaliser votre institut ?",
  ctaBottomText:
    "Demandez un accès anticipé pour votre pays. L'inscription directe est actuellement disponible en Allemagne, Autriche et Suisse.",
  trustTrialLabel: "Accès anticipé disponible",
  hero: {
    marketLabel: "France & francophonie",
    eyebrow: "Logiciel pour instituts de beauté",
    h1: "Logiciel tout-en-un pour instituts de beauté et cliniques esthétiques",
    subtitle:
      "Agenda, réservation en ligne, fiches clients, consentements numériques et documentation des soins – sans commission. Conforme au RGPD. Made in Austria.",
  },
  aiCapsules: [
    {
      question: "Qu'est-ce que Treatflow ?",
      answer:
        "Treatflow est un logiciel SaaS pour instituts de beauté et cliniques esthétiques. Il inclut agenda, réservation en ligne, fiches clients, formulaires d'anamnèse/consentement et documentation des soins. Serveurs UE, RGPD. Inscription directe en DACH ; les autres pays demandent un accès anticipé.",
    },
    {
      question: "Treatflow prend-il une commission sur les réservations ?",
      answer:
        "Non. Treatflow est le logiciel de l'institut, pas une marketplace. Aucune commission par rendez-vous. Tarifs fixes dès 39 EUR/mois (Basic) ou 59 EUR/mois (Booking).",
    },
  ],
  whatIsTreatflow: {
    title: "Qu'est-ce que Treatflow",
    paragraphs: [
      "Treatflow centralise la gestion de l'institut : rendez-vous, clients, formulaires et documentation dans une seule application web.",
      "Il s'adresse aux institutrices, centres laser, maquillage permanent, ongles, cils, spas et médecine esthétique qui veulent se digitaliser sans dépendre d'une marketplace.",
    ],
  },
  whoIsItFor: {
    title: "Pour qui",
    audiences: [
      "Instituts de beauté",
      "Cliniques esthétiques",
      "Centres d'épilation laser",
      "Studios de maquillage permanent et cils",
      "Spas et wellness",
    ],
  },
  problems: {
    title: "Problèmes que nous résolvons",
    items: [
      {
        problem: "Agenda papier ou Excel chaotique",
        solution:
          "Calendrier numérique par collaborateur, évite les doubles réservations et montre l'occupation.",
      },
      {
        problem: "Téléphone saturé pour les rendez-vous",
        solution: "Réservation en ligne 24/7 avec votre propre lien, sans commission.",
      },
      {
        problem: "Consentements papier",
        solution:
          "Formulaires numériques d'anamnèse et de consentement envoyés avant le rendez-vous.",
      },
    ],
  },
  features: {
    title: "Fonctionnalités principales",
    items: [
      {
        icon: Calendar,
        title: "Calendrier de rendez-vous",
        desc: "Vues journalière, hebdomadaire et mensuelle avec glisser-déposer.",
      },
      {
        icon: Link2,
        title: "Réservation en ligne",
        desc: "Lien personnel pour que vos clientes réservent à toute heure.",
      },
      {
        icon: Users,
        title: "Fiches clients",
        desc: "Historique, photos, notes et soins au même endroit.",
      },
      {
        icon: ClipboardCheck,
        title: "Formulaires",
        desc: "Anamnèse et consentements numériques avec signature.",
      },
      {
        icon: FileText,
        title: "Documentation",
        desc: "Enregistrez soins, paramètres et photos professionnellement.",
      },
    ],
  },
  benefits: {
    title: "Avantages",
    items: [
      "Sans commission par réservation",
      "Les données client vous appartiennent",
      "Serveurs UE / RGPD",
      "Tarifs transparents en EUR",
      "Support proche de l'équipe fondatrice",
    ],
  },
  marketFit: {
    title: "Treatflow pour le marché francophone",
    paragraphs: [
      "Nous ouvrons Treatflow hors DACH. Les instituts en France et dans la francophonie peuvent demander un accès anticipé pendant que nous préparons l'expérience locale (langue, onboarding et support).",
      "En attendant, vous pouvez déjà découvrir le produit en français et demander un accès anticipé pour votre institut.",
    ],
    highlights: [
      "RGPD / protection des données UE",
      "Logiciel propriétaire, pas une marketplace",
      "Accès anticipé sur demande",
      "Support dédié de l'équipe",
    ],
  },
  aiSummary: {
    title: "En résumé",
    text: "Treatflow est le logiciel de gestion pour instituts de beauté et cliniques esthétiques : agenda, réservation en ligne, fiches clients, formulaires et documentation. Dès 39 EUR/mois, sans commission, serveurs en UE et conforme au RGPD. L'inscription directe est disponible en Allemagne, Autriche et Suisse ; dans les autres pays, vous pouvez demander un accès anticipé.",
  },
  faqs: [
    {
      question: "Puis-je m'inscrire depuis la France ?",
      answer:
        "L'inscription directe est ouverte en Allemagne, Autriche et Suisse. Depuis la France et les autres pays, demandez un accès anticipé sur /fr/acces-anticipe.",
    },
    {
      question: "Combien coûte Treatflow ?",
      answer:
        "Basic dès 39 EUR/mois et Booking dès 59 EUR/mois (HT). Paiement annuel avec réduction. Aucune commission.",
    },
    {
      question: "Est-ce conforme au RGPD ?",
      answer:
        "Oui. Treatflow est hébergé sur des serveurs UE et conçu pour les instituts soumis au RGPD.",
    },
  ],
  internalLinks: [
    { href: "/fr/logiciel-institut-beaute", label: "Logiciel institut de beauté" },
    { href: "/fr/tarifs", label: "Tarifs" },
    { href: "/fr/calendrier-rendez-vous", label: "Calendrier" },
    { href: "/fr/reservation-en-ligne", label: "Réservation en ligne" },
    { href: "/fr/acces-anticipe", label: "Accès anticipé" },
  ],
  internalLinksTitle: "Pages associées",
};
