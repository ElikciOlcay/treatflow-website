import type { FeaturesOverviewContent } from "./types";

export const featuresNl: FeaturesOverviewContent = {
  meta: {
    title: "Functies voor salons en klinieken",
    description:
      "Afsprakenkalender, online boeken zonder commissie, klantdossiers, digitale toestemmingsformulieren, behandeldocumentatie met spraakinvoer, herinneringen en integraties – in één studiosysteem.",
    keywords: [
      "salonsoftware functies",
      "afsprakenkalender salon",
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
    description: "Agenda, boekingen, klantdossiers, formulieren en documentatie – één platform voor jouw salon.",
    chips: ["Alles-in-één", "Zonder commissie", "Made in Austria"],
    secondaryCta: { label: "Bekijk prijzen", href: { page: "pricing" } },
    tiles: [
      { label: "Agenda", icon: "calendar", gradient: "from-indigo-500 to-purple-600" },
      { label: "Boekingen", icon: "link", gradient: "from-rose-500 to-orange-600" },
      { label: "Klanten", icon: "users", gradient: "from-blue-500 to-indigo-600" },
      { label: "Formulieren", icon: "clipboard-check", gradient: "from-orange-500 to-amber-600" },
      { label: "Documentatie", icon: "file-text", gradient: "from-violet-500 to-purple-600" },
      { label: "Workflows", icon: "workflow", gradient: "from-green-500 to-emerald-600" },
    ],
  },
  grid: {
    title: "{count} kernfuncties voor jouw salon",
    subtitle: "Elke functie is afgestemd op de behoeften van schoonheidssalons en klinieken.",
    more: "Meer informatie",
    items: [
      {
        href: { page: "appointment-calendar" },
        icon: "calendar",
        title: "Afsprakenkalender",
        description:
          "Plan medewerkers en ruimtes overzichtelijk in eigen kolommen. Zie vrije capaciteit, voorkom dubbele boekingen en stem wijzigingen sneller af.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Kolommen per medewerker en ruimte", "Bezetting in één oogopslag", "Slepen en neerzetten"],
      },
      {
        href: { page: "treatflow-pay" },
        icon: "wallet",
        title: "Treatflow Pay",
        description: "Aanbetaling of volledige betaling direct bij de online boeking. Per behandeling in te stellen, 2,69% per transactie.",
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
          "Een persoonlijke boekingslink voor jouw salon. Klanten boeken dag en nacht – bevestigingen en herinneringen gaan automatisch.",
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
          "Digitaal klantdossier met behandelgeschiedenis, voor- en nafoto's, allergieën en notities. Alles op één plek.",
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
          "Digitale intakeformulieren en toestemmingsverklaringen. Klanten vullen ze vooraf in op hun smartphone – papierloos en juridisch correct.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200 hover:border-orange-400",
        highlights: ["Digitale intake", "Vooraf versturen via link", "Papierloos"],
      },
      {
        href: { page: "treatment-documentation" },
        icon: "file-text",
        title: "Behandeldocumentatie",
        description:
          "Documenteer elke behandeling digitaal: foto's, gebruikte producten, notities en resultaten. Ideaal voor vervolgbehandelingen.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200 hover:border-blue-400",
        highlights: ["Foto's en producten", "Behandelverloop", "Volledige documentatie"],
      },
      {
        href: { page: "messaging" },
        icon: "bell",
        title: "Automatische herinneringen",
        description: "Herinneringen per e-mail vóór elke afspraak. Minder no-shows – volledig automatisch.",
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
          "Automatiseringen in meerdere stappen voor nazorg, heractivering en follow-ups – met wachttijden, voorwaarden en e-mails.",
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
          "Verkoop verzorgingsproducten direct aan je klanten. Beheer je voorraad, registreer verkopen en verhoog je extra omzet.",
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
      "Gratis support en onboarding",
      "Made in Austria",
    ],
  },
};
