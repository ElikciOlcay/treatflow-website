import type { PricingPageContent } from "./types";

export const pricingNl: PricingPageContent = {
  meta: {
    title: "Prijzen",
    description:
      "Prijzen van Treatflow: Basic vanaf €39 per maand, Booking vanaf €59 per maand. Geen boekingscommissie, 14 dagen gratis proberen, geen creditcard nodig.",
    keywords: [
      "salonsoftware prijzen",
      "salonsoftware kosten",
      "afsprakensoftware kosten",
      "online boekingssysteem prijs",
      "software schoonheidssalon abonnement",
    ],
  },
  dates: { modified: "2026-11-05", published: "2024-06-01" },
  breadcrumb: "Prijzen",
  capsule: {
    question: "Wat kost Treatflow?",
    answer:
      "Basic vanaf €39/maand (klantenbeheer, formulieren, documentatie), Booking vanaf €59/maand (incl. afsprakenkalender, online boeken, herinneringen). Geen commissie per boeking, 14 dagen gratis proberen.",
  },
  schema: {
    webPage: {
      name: "Prijzen: salonsoftware vanaf €39/maand",
      description: "Transparante prijzen voor Treatflow: Basic vanaf €39/maand, Booking vanaf €59/maand.",
    },
    priceValidUntil: "2026-12-31",
    offers: [
      { name: "Basic", price: "39", currency: "EUR" },
      { name: "Booking", price: "59", currency: "EUR" },
    ],
  },
  comparison: {
    title: "Wat zit erin?",
    subtitle: "Vergelijk beide plannen in detail en vind het plan dat bij jouw salon past.",
    vatNote: "Alle prijzen excl. btw.",
    featureLabel: "Functie",
    basicLabel: "Basic (€39)",
    bookingLabel: "Booking (€59)",
    rows: [
      { label: "Klantenbeheer", basic: true, booking: true },
      { label: "Formulieren met digitale handtekening", basic: true, booking: true },
      { label: "Behandeldocumentatie incl. spraaknotities", basic: true, booking: true },
      { label: "Voor- en nafoto's", basic: true, booking: true },
      { label: "Teamnotities en taken", basic: true, booking: true },
      { label: "Shop en producten", basic: true, booking: true },
      { label: "Statistieken", basic: true, booking: true },
      { label: "Medewerkers en rollen", basic: true, booking: true },
      { label: "Support via e-mail", basic: true, booking: true },
      { label: "Afsprakenkalender (medewerkers en ruimtes)", basic: false, booking: true },
      { label: "Online boeken zonder commissie", basic: false, booking: true },
      { label: "Wachtlijst", basic: false, booking: true },
      { label: "Herinneringen per e-mail", basic: false, booking: true },
      { label: "Klantworkflows", basic: false, booking: true },
      { label: "Kortingscodes", basic: false, booking: true },
      { label: "Meertalige boekingspagina", basic: false, booking: true },
      { label: "Integraties (Google Agenda, Zapier, AI-assistenten)", basic: false, booking: true },
      { label: "Prioriteitssupport", basic: false, booking: true },
    ],
    cta: "Probeer 14 dagen gratis",
  },
  why: {
    title: "Waarom Treatflow?",
    subtitle: "Transparante vaste prijzen in plaats van verborgen kosten en commissies.",
    stats: [
      { value: "0%", label: "Commissie per boeking" },
      { value: "€0", label: "Opstartkosten" },
      { value: "14 dagen", label: "gratis proberen" },
      { value: "Altijd", label: "opzegbaar" },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over prijzen",
    subtitle: "Alles wat je moet weten over de prijzen van Treatflow.",
    items: [
      {
        question: "Wat kost Treatflow?",
        answer:
          "Treatflow heeft twee plannen: Basic vanaf €39/maand voor klantenbeheer, formulieren en documentatie. Booking vanaf €59/maand met daarnaast de afsprakenkalender, online boeken en automatische herinneringen. Beide plannen kun je 14 dagen gratis proberen.",
      },
      {
        question: "Zijn er verborgen kosten?",
        answer:
          "Nee. Treatflow werkt met transparante vaste prijzen zonder commissies, opstartkosten of verborgen extra's. Wat je ziet, is wat je betaalt.",
      },
      {
        question: "Kan ik op elk moment opzeggen?",
        answer:
          "Ja. Bij maandelijkse betaling kun je altijd opzeggen tegen het einde van de factuurperiode. Er is geen minimale contractduur.",
      },
      {
        question: "Bestaat er gratis salonsoftware?",
        answer:
          "Sommige aanbieders zoals Fresha bieden gratis basisversies aan, maar verdienen aan betaalkosten en premiumfuncties. Treatflow biedt transparante vaste prijzen zonder verborgen kosten – vanaf €39/maand met alle functies.",
      },
      {
        question: "Is het Booking-plan de moeite waard?",
        answer:
          "Als je online boekingen, automatische afspraakherinneringen per e-mail en een digitale afsprakenkalender nodig hebt: ja. Met het Booking-plan heb je duidelijk minder no-shows en ben je minder tijd kwijt aan de telefoon.",
      },
    ],
  },
};
