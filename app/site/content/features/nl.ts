import type { FeaturesOverviewContent } from "./types";

export const featuresNl: FeaturesOverviewContent = {
  meta: {
    title: "Alle functies voor salons en klinieken",
    description:
      "Online agenda, online boeken zonder commissie, digitale klantenkaart, intake- en toestemmingsformulieren, behandelverslagen met ingesproken notities, herinneringen en koppelingen – alles in één salonsysteem.",
    keywords: [
      "salonsoftware functies",
      "online agenda salon",
      "digitaal klantdossier",
      "toestemmingsformulier digitaal",
      "online boeken salon",
    ],
  },
  breadcrumb: "Functies",
  hero: {
    eyebrow: "Functieoverzicht",
    eyebrowIcon: "sparkles",
    title: { before: "Alle ", highlight: "functies", after: " in één oogopslag" },
    description: "Agenda, online boekingen, klantdossiers, formulieren en behandelverslagen – één platform voor jouw salon.",
    chips: ["Alles-in-één", "Zonder commissie", "Made in Austria"],
    secondaryCta: { label: "Bekijk prijzen", href: { page: "pricing" } },
    tiles: [
      { label: "Agenda", icon: "calendar", gradient: "from-indigo-500 to-purple-600" },
      { label: "Boekingen", icon: "link", gradient: "from-rose-500 to-orange-600" },
      { label: "Klanten", icon: "users", gradient: "from-blue-500 to-indigo-600" },
      { label: "Formulieren", icon: "clipboard-check", gradient: "from-orange-500 to-amber-600" },
      { label: "Verslagen", icon: "file-text", gradient: "from-violet-500 to-purple-600" },
      { label: "Workflows", icon: "workflow", gradient: "from-green-500 to-emerald-600" },
    ],
  },
  grid: {
    title: "{count} kernfuncties voor jouw salon",
    subtitle: "Elke functie is gemaakt voor de praktijk van schoonheidssalons en klinieken.",
    more: "Meer informatie",
    items: [
      {
        href: { page: "appointment-calendar" },
        icon: "calendar",
        title: "Online agenda",
        description:
          "Plan medewerkers en ruimtes overzichtelijk in eigen kolommen. Je ziet meteen wie er vrij is, voorkomt dubbele boekingen en schuift sneller met afspraken.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Kolommen per medewerker en ruimte", "Bezetting in één oogopslag", "Drag-and-drop"],
      },
      {
        href: { page: "treatflow-pay" },
        icon: "wallet",
        title: "Treatflow Pay",
        description: "Klanten betalen een aanbetaling of het hele bedrag direct bij het online boeken. Per behandeling in te stellen, 2,69% per transactie.",
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-200 hover:border-violet-400",
        highlights: ["Aanbetaling of volledige betaling", "Kaart, Apple Pay, Google Pay", "2,69% per transactie"],
        feature: "pay",
      },
      {
        href: { page: "online-booking" },
        icon: "link",
        title: "Online boeken",
        description:
          "Je eigen boekingslink voor jouw salon. Klanten boeken dag en nacht – bevestigingen en herinneringen gaan automatisch de deur uit.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200 hover:border-rose-400",
        highlights: ["24/7 boekingslink", "Automatische bevestigingen", "Geen dubbele boekingen"],
      },
      {
        href: { page: "client-records" },
        icon: "users",
        title: "Digitaal klantdossier",
        description:
          "Behandelhistorie, voor- en nafoto's, allergieën en notities van elke klant. Alles op één plek.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200 hover:border-emerald-400",
        highlights: ["Onbeperkt aantal klanten", "Foto's en notities", "AVG-proof"],
      },
      {
        href: { page: "forms" },
        icon: "clipboard-check",
        title: "Formulieren en intake",
        description:
          "Digitale intake- en toestemmingsformulieren. Klanten vullen ze vooraf in op hun telefoon – papierloos en juridisch netjes geregeld.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200 hover:border-orange-400",
        highlights: ["Digitale intake", "Vooraf versturen via link", "Papierloos"],
      },
      {
        href: { page: "treatment-documentation" },
        icon: "file-text",
        title: "Behandelverslagen",
        description:
          "Leg elke behandeling digitaal vast: foto's, gebruikte producten, notities en resultaat. Ideaal bij vervolgbehandelingen.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200 hover:border-blue-400",
        highlights: ["Foto's en producten", "Verloop per sessie", "Volledig verslag"],
      },
      {
        href: { page: "messaging" },
        icon: "bell",
        title: "Automatische herinneringen",
        description: "Een herinnering per e-mail vóór elke afspraak. Minder no-shows – volledig automatisch.",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200 hover:border-purple-400",
        highlights: ["Herinneringen per e-mail", "Minder no-shows", "Instelbare tijden"],
      },
      {
        href: { page: "customer-workflows" },
        icon: "workflow",
        title: "Klantworkflows",
        description:
          "Automatische reeksen voor nazorg, het terughalen van klanten en follow-ups – met wachttijden, voorwaarden en e-mails.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Visuele editor", "Automatische e-mails", "Stopt bij een nieuwe boeking"],
      },
      {
        href: { page: "shop" },
        icon: "shopping-bag",
        title: "Productverkoop en voorraad",
        description:
          "Verkoop verzorgingsproducten direct aan je klanten. Beheer je voorraad, registreer verkopen en verdien extra bij.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200 hover:border-amber-400",
        highlights: ["Productverkoop", "Voorraadbeheer", "Meer omzet"],
      },
    ],
  },
  why: {
    title: "Waarom Treatflow?",
    points: [
      "Alles-in-één: alle functies in één platform",
      "AVG-proof met servers in de EU",
      "Geen verborgen kosten of commissies",
      "14 dagen gratis proberen, geen creditcard",
      "Gratis support en hulp bij het opstarten",
      "Made in Austria",
    ],
  },
};
