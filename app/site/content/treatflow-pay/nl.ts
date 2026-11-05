import type { TreatflowPayContent } from "./types";

export const treatflowPayNl: TreatflowPayContent = {
  meta: {
    title: "Treatflow Pay – aanbetaling en volledige betaling bij online boeken",
    description:
      "Treatflow Pay: klanten betalen een aanbetaling of het hele bedrag direct bij het online boeken. Minder no-shows, per behandeling in te stellen, 2,69% per transactie.",
    keywords: [
      "Treatflow Pay",
      "aanbetaling online boeken",
      "online betalen schoonheidssalon",
      "aanbetaling salon",
      "vooraf betalen afspraak",
      "no-shows voorkomen aanbetaling",
      "Stripe betalingen salon",
    ],
  },
  dates: { modified: "2026-10-02", published: "2026-10-02" },
  schema: {
    id: "treatflow-pay",
    webPage: {
      name: "Treatflow Pay – aanbetaling en volledige betaling bij online boeken",
      description:
        "Treatflow Pay: klanten betalen een aanbetaling of het hele bedrag direct bij het online boeken. Minder no-shows, per behandeling in te stellen, 2,69% per transactie.",
    },
  },
  breadcrumb: "Treatflow Pay",
  hero: {
    eyebrow: "Treatflow Pay",
    eyebrowIcon: "wallet",
    title: { before: "Aanbetaling of volledige betaling ", highlight: "bij het boeken" },
    description: "Bepaal per behandeling of je klant online een aanbetaling doet, alles vooraf betaalt of niets.",
    chips: ["Per behandeling", "Kaart, Apple Pay, Google Pay", "2,69%"],
    secondaryCta: { label: "Bekijk online boeken", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Wat is Treatflow Pay?",
        answer:
          "Met Treatflow Pay betalen klanten online bij het boeken van een afspraak. Per behandeling kiest de salon: geen betaling, een aanbetaling (percentage of vast bedrag) of de volledige betaling. Klanten betalen met creditcard of debitcard, of met Apple Pay en Google Pay in de Stripe-checkout. De kosten zijn 2,69% per transactie.",
      },
    ],
    image: {
      src: "/images/product-updates/treatflow-pay.png",
      alt: "Treatflow Pay – aanbetaling of volledige betaling bij online boeken",
    },
  },
  understand: {
    title: "Minder no-shows, heldere betalingen",
    description: "Jij bepaalt per behandeling wat er online betaald moet worden. De klant betaalt meteen bij het boeken.",
    items: [
      {
        icon: "percent",
        title: "Per behandeling instellen",
        text: "Geen online betaling, een aanbetaling of de volledige betaling. De aanbetaling stel je in als percentage of als vast bedrag in euro.",
      },
      {
        icon: "credit-card",
        title: "Betalen bij het boeken",
        text: "Creditcard en debitcard in de Stripe-checkout. Apple Pay en Google Pay als het toestel van de klant dat ondersteunt.",
      },
      {
        icon: "banknote",
        title: "2,69% per transactie",
        text: "Eén tarief, alles inbegrepen. Treatflow rekent niets extra op de betaling.",
      },
    ],
  },
  howItWorks: {
    description: "Eén keer koppelen, daarna per behandeling instellen.",
    steps: [
      { title: "Treatflow Pay koppelen", text: "Onder Apps stel je Treatflow Pay in en koppel je je Stripe-account. Daarna kun je bij het boeken betalingen ontvangen." },
      { title: "Per behandeling kiezen", text: "Voor elke behandeling: geen online betaling, een aanbetaling (percentage of vast bedrag) of het volledige bedrag." },
      { title: "De klant betaalt", text: "De boeking is rond zodra er betaald is. Bij een aanbetaling betaalt de klant het restbedrag in de salon." },
    ],
  },
  cards: {
    title: "Alle mogelijkheden",
    description: "Dit voegt Treatflow Pay toe aan je online boekingen.",
    items: [
      { icon: "wallet", title: "Geen betaling, aanbetaling of volledige betaling", text: "Per behandeling stel je dit apart in. Behandelingen zonder online betaling blijven gewoon te boeken.", points: ["Geen online betaling", "Aanbetaling", "Volledige betaling"] },
      { icon: "percent", title: "Aanbetaling als percentage", text: "Bijvoorbeeld 30% van de prijs. Het percentage geldt voor die ene behandeling.", points: ["Percentage van de prijs", "Per behandeling", "Rest in de salon"] },
      { icon: "banknote", title: "Aanbetaling als bedrag", text: "Een vast bedrag in euro, maximaal de prijs van de behandeling.", points: ["Vast bedrag", "Nooit meer dan de prijs", "Rest in de salon"] },
      { icon: "credit-card", title: "Kaarten en wallets", text: "Betalen in de Stripe-checkout met kaart, Apple Pay en Google Pay.", points: ["Creditcard en debitcard", "Apple Pay", "Google Pay"] },
      { icon: "shield-check", title: "2,69% all-in", text: "Eén tarief per transactie. Minimumbedrag € 0,50.", points: ["2,69% per betaling", "Vanaf € 0,50", "All-in"] },
      { icon: "layers", title: "Meerdere behandelingen", text: "Boekt de klant meerdere behandelingen, dan worden de bedragen opgeteld – nooit meer dan de totaalprijs.", points: ["Bedragen opgeteld", "Nooit meer dan de prijs", "Per behandeling in te stellen"] },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over Treatflow Pay",
    items: [
      {
        question: "Wat kan ik met Treatflow Pay instellen?",
        answer:
          "Per behandeling kies je: geen online betaling, een aanbetaling of de volledige betaling. De aanbetaling is een percentage of een vast bedrag. Boekt de klant meerdere behandelingen, dan worden de bedragen opgeteld, tot maximaal de prijs van de boeking.",
      },
      {
        question: "Welke betaalmethoden zijn er?",
        answer:
          "De klant betaalt in de Stripe-checkout met creditcard of debitcard. Apple Pay en Google Pay verschijnen daar als het toestel van de klant ze ondersteunt.",
      },
      {
        question: "Wat kost Treatflow Pay?",
        answer: "2,69% per transactie, alles inbegrepen. Treatflow rekent niets extra op de betaling. Het minimumbedrag is € 0,50.",
      },
      {
        question: "Is Treatflow Pay ook bedoeld voor betalingen in de salon?",
        answer:
          "Nee. Treatflow Pay is bedoeld voor online boekingen. In de salon reken je af zoals je gewend bent, bijvoorbeeld met je eigen pinautomaat.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Online boeken", description: "Boekingslink met Treatflow Pay" },
      { href: { page: "integrations" }, title: "Integraties", description: "Stripe, Google Agenda en meer" },
    ],
  },
  cta: {
    title: "Aanbetaling direct bij het boeken",
    description:
      "Probeer het 14 dagen gratis. Treatflow Pay koppel je daarna onder Apps – je betaalt alleen kosten over echte betalingen.",
    secondary: { label: "Bekijk online boeken", href: { page: "online-booking" } },
  },
};
