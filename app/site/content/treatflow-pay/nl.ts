import type { TreatflowPayContent } from "./types";

export const treatflowPayNl: TreatflowPayContent = {
  meta: {
    title: "Treatflow Pay – aanbetaling en volledige betaling bij online boeken",
    description:
      "Treatflow Pay: klanten betalen een aanbetaling of de volledige prijs direct bij het online boeken. Per behandeling in te stellen, 2,69% per transactie.",
    keywords: [
      "Treatflow Pay",
      "aanbetaling online boeken",
      "online betalen schoonheidssalon",
      "aanbetaling salon",
      "vooruitbetaling afspraak",
      "Stripe betalingen salon",
    ],
  },
  dates: { modified: "2026-10-02", published: "2026-10-02" },
  schema: {
    id: "treatflow-pay",
    webPage: {
      name: "Treatflow Pay – aanbetaling en volledige betaling bij online boeken",
      description:
        "Treatflow Pay: klanten betalen een aanbetaling of de volledige prijs direct bij het online boeken. Per behandeling in te stellen, 2,69% per transactie.",
    },
  },
  breadcrumb: "Treatflow Pay",
  hero: {
    eyebrow: "Treatflow Pay",
    eyebrowIcon: "wallet",
    title: { before: "Aanbetaling of volledige betaling ", highlight: "bij het boeken" },
    description: "Bepaal per behandeling of de klant online een aanbetaling, de volledige prijs of niets betaalt.",
    chips: ["Per behandeling", "Kaart, Apple Pay, Google Pay", "2,69%"],
    secondaryCta: { label: "Naar online boeken", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Wat is Treatflow Pay?",
        answer:
          "Treatflow Pay is online betalen bij het boeken van een afspraak. Per behandeling kan de salon kiezen voor geen betaling, een aanbetaling als percentage of vast bedrag, of de volledige betaling. Klanten betalen met creditcard of debitcard, plus Apple Pay en Google Pay in de Stripe-checkout. De kosten bedragen 2,69% per transactie.",
      },
    ],
    image: {
      src: "/images/product-updates/treatflow-pay.png",
      alt: "Treatflow Pay – aanbetaling of volledige betaling bij online boeken",
    },
  },
  understand: {
    title: "Minder no-shows, duidelijke betalingen",
    description: "Je bepaalt per behandeling wat er online betaald moet worden. De klant betaalt direct tijdens het boeken.",
    items: [
      {
        icon: "percent",
        title: "Per behandeling instellen",
        text: "Geen online betaling, een aanbetaling of de volledige betaling. De aanbetaling is een percentage of een vast bedrag in euro.",
      },
      {
        icon: "credit-card",
        title: "Betalen bij het boeken",
        text: "Creditcard en debitcard in de Stripe-checkout. Apple Pay en Google Pay als het apparaat van de klant dat ondersteunt.",
      },
      {
        icon: "banknote",
        title: "2,69% per transactie",
        text: "Eén tarief, alles inbegrepen. Geen extra Treatflow-kosten op de betaling.",
      },
    ],
  },
  howItWorks: {
    description: "Eén keer koppelen, daarna per behandeling instellen.",
    steps: [
      { title: "Treatflow Pay koppelen", text: "Onder Apps stel je Treatflow Pay in en koppel je je Stripe-account. Pas daarna kun je bij het boeken betalingen ontvangen." },
      { title: "Per behandeling kiezen", text: "Voor elke behandeling: geen online betaling, een aanbetaling als percentage of vast bedrag, of de volledige prijs." },
      { title: "De klant betaalt", text: "De boeking wordt afgerond met de betaling. Bij een aanbetaling wordt het restbedrag in de salon betaald." },
    ],
  },
  cards: {
    title: "Alle mogelijkheden",
    description: "Dit voegt Treatflow Pay toe aan je online boekingen.",
    items: [
      { icon: "wallet", title: "Geen betaling, aanbetaling of volledige betaling", text: "Elke behandeling heeft een eigen modus. Behandelingen zonder online betaling blijven gewoon boekbaar.", points: ["Geen online betaling", "Aanbetaling", "Volledige betaling"] },
      { icon: "percent", title: "Aanbetaling als percentage", text: "Bijvoorbeeld 30% van de behandelprijs. Het percentage geldt voor die behandeling.", points: ["Percentage van de prijs", "Per behandeling", "Rest in de salon"] },
      { icon: "banknote", title: "Aanbetaling als bedrag", text: "Een vast bedrag in euro, maximaal de prijs van de behandeling.", points: ["Vast bedrag", "Begrensd tot de prijs", "Rest in de salon"] },
      { icon: "credit-card", title: "Kaarten en wallets", text: "Betalen in de Stripe-checkout met kaart, Apple Pay en Google Pay.", points: ["Creditcard en debitcard", "Apple Pay", "Google Pay"] },
      { icon: "shield-check", title: "2,69% all-in", text: "Eén tarief per transactie. Minimumbedrag € 0,50.", points: ["2,69% per betaling", "Vanaf € 0,50", "All-in"] },
      { icon: "layers", title: "Meerdere behandelingen", text: "De bedragen van één boeking worden opgeteld, maximaal tot de boekingsprijs.", points: ["Som van de behandelingen", "Begrensd tot de prijs", "Per behandeling in te stellen"] },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over Treatflow Pay",
    items: [
      {
        question: "Wat kan ik met Treatflow Pay instellen?",
        answer:
          "Per behandeling kies je: geen online betaling, een aanbetaling of de volledige betaling. De aanbetaling is een percentage of een vast bedrag. Boekt de klant meerdere behandelingen, dan worden de verschuldigde bedragen opgeteld, maximaal tot de prijs van de boeking.",
      },
      {
        question: "Welke betaalmethoden zijn er?",
        answer:
          "De klant betaalt in de Stripe-checkout met creditcard of debitcard. Apple Pay en Google Pay verschijnen daar als haar apparaat ze ondersteunt.",
      },
      {
        question: "Wat kost Treatflow Pay?",
        answer: "2,69% per transactie, alles inbegrepen. Er komen geen extra Treatflow-kosten bij op de betaling. Het minimumbedrag is € 0,50.",
      },
      {
        question: "Is Treatflow Pay ook bedoeld voor betalingen in de salon?",
        answer:
          "Nee. Treatflow Pay is bedoeld voor online boekingen. Betalingen in de salon verlopen zoals je gewend bent, bijvoorbeeld via je eigen pinautomaat.",
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
      "Probeer het 14 dagen gratis. Treatflow Pay koppel je daarna onder Apps – de kosten gelden alleen voor echte betalingen.",
    secondary: { label: "Naar online boeken", href: { page: "online-booking" } },
  },
};
