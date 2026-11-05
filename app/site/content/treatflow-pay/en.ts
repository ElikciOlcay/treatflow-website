import type { TreatflowPayContent } from "./types";

export const treatflowPayEn: TreatflowPayContent = {
  meta: {
    title: "Treatflow Pay – Deposits and Full Payment at Online Booking",
    description:
      "Treatflow Pay: clients pay a deposit or the full price right when they book online. Set per service, 2.69% per transaction.",
    keywords: [
      "Treatflow Pay",
      "online booking deposit",
      "salon online payments",
      "beauty salon deposit",
      "prepayment appointment booking",
      "Stripe payments salon",
    ],
  },
  dates: { modified: "2026-10-02", published: "2026-10-02" },
  schema: {
    id: "treatflow-pay",
    webPage: {
      name: "Treatflow Pay – Deposits and Full Payment at Online Booking",
      description:
        "Treatflow Pay: clients pay a deposit or the full price right when they book online. Set per service, 2.69% per transaction.",
    },
  },
  breadcrumb: "Treatflow Pay",
  hero: {
    eyebrow: "Treatflow Pay",
    eyebrowIcon: "wallet",
    title: { before: "Deposit or full payment ", highlight: "at booking" },
    description: "Decide for each service whether the client pays a deposit, the full price or nothing online.",
    chips: ["Per service", "Card, Apple Pay, Google Pay", "2.69%"],
    secondaryCta: { label: "See online booking", href: { page: "online-booking" } },
    capsules: [
      {
        question: "What is Treatflow Pay?",
        answer:
          "Treatflow Pay is online payment at the time of booking. For each service, the salon can ask for no payment, a deposit as a percentage or fixed amount, or full payment. Clients pay by credit or debit card, plus Apple Pay and Google Pay in the Stripe checkout. The fee is 2.69% per transaction.",
      },
    ],
    image: {
      src: "/images/product-updates/treatflow-pay.png",
      alt: "Treatflow Pay – deposit or full payment at online booking",
    },
  },
  understand: {
    title: "Fewer no-shows, clear incoming payments",
    description: "You decide for each treatment what is due online. The client pays right in the booking flow.",
    items: [
      {
        icon: "percent",
        title: "Set per service",
        text: "No online payment, a deposit or full payment. The deposit is a percentage or a fixed amount in euros.",
      },
      {
        icon: "credit-card",
        title: "Pay when booking",
        text: "Credit and debit cards in the Stripe checkout. Apple Pay and Google Pay when the client's device supports them.",
      },
      {
        icon: "banknote",
        title: "2.69% per transaction",
        text: "One all-in fee. No additional Treatflow fee on the payment.",
      },
    ],
  },
  howItWorks: {
    description: "Connect once, then choose per service.",
    steps: [
      { title: "Connect Treatflow Pay", text: "Set up Treatflow Pay under Apps and connect your Stripe account. Only then can payments be collected at booking." },
      { title: "Choose per service", text: "For every treatment: no online payment, a deposit as a percentage or fixed amount, or the full price." },
      { title: "The client pays", text: "The booking is completed with the payment. With a deposit, the rest is paid at the salon." },
    ],
  },
  cards: {
    title: "All options",
    description: "What Treatflow Pay adds to your online booking.",
    items: [
      { icon: "wallet", title: "No payment, deposit or full payment", text: "Every service has its own mode. Services without online payment stay bookable as before.", points: ["No online payment", "Deposit", "Full payment"] },
      { icon: "percent", title: "Deposit as a percentage", text: "For example 30% of the service price. The rate applies to that treatment.", points: ["Percentage of the price", "Per service", "Rest paid at the salon"] },
      { icon: "banknote", title: "Deposit as a fixed amount", text: "A fixed amount in euros, up to the price of the service.", points: ["Fixed amount", "Capped at the price", "Rest paid at the salon"] },
      { icon: "credit-card", title: "Cards and wallets", text: "Payment in the Stripe checkout by card, Apple Pay and Google Pay.", points: ["Credit and debit cards", "Apple Pay", "Google Pay"] },
      { icon: "shield-check", title: "2.69% all-in", text: "One fee per transaction. Minimum amount €0.50.", points: ["2.69% per payment", "From €0.50", "All-in"] },
      { icon: "layers", title: "Multiple services", text: "Amounts within one booking are added up, capped at the booking price.", points: ["Sum of the services", "Capped at the price", "Set per service"] },
    ],
  },
  faq: {
    title: "Frequently asked questions about Treatflow Pay",
    items: [
      {
        question: "What can I set up with Treatflow Pay?",
        answer:
          "For each service you choose: no online payment, a deposit or full payment. The deposit is a percentage or a fixed amount. If the client books several services, the amounts due are added up, capped at the price of the booking.",
      },
      {
        question: "Which payment methods are available?",
        answer:
          "The client pays by credit or debit card in the Stripe checkout. Apple Pay and Google Pay appear there when her device supports them.",
      },
      {
        question: "How much does Treatflow Pay cost?",
        answer: "2.69% per transaction, all-in. There is no additional Treatflow fee on the payment. The minimum amount is €0.50.",
      },
      {
        question: "Is Treatflow Pay also for payments in the salon?",
        answer:
          "No. Treatflow Pay is for online booking. Payments in the salon work as before, for example with your existing card terminal.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Online booking", description: "Booking link with Treatflow Pay" },
      { href: { page: "integrations" }, title: "Integrations", description: "Stripe, Google Calendar and more" },
    ],
  },
  cta: {
    title: "Take deposits right at booking",
    description:
      "Try it free for 14 days. Connect Treatflow Pay under Apps afterwards – the fee only applies to real payments.",
    secondary: { label: "See online booking", href: { page: "online-booking" } },
  },
};
