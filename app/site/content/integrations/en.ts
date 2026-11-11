import type { IntegrationsContent } from "./types";

export const integrationsEn: IntegrationsContent = {
  meta: {
    title: "Integrations & Apps for Your Beauty Salon",
    description:
      "Connect Treatflow with Google Calendar, Zapier and AI assistants like Claude or ChatGPT, and take online payments with Treatflow Pay – calendar sync, automation and payments in one platform.",
    keywords: [
      "Treatflow integrations",
      "salon software integrations",
      "Google Calendar sync salon",
      "Zapier beauty salon",
      "salon software ChatGPT",
      "Claude MCP salon software",
      "online payments beauty salon",
      "appointment calendar sync",
    ],
  },
  schema: { id: "integrationen" },
  breadcrumb: "Integrations",
  hero: {
    eyebrow: "Integrations",
    eyebrowIcon: "plug",
    title: { before: "Connect apps, keep your ", highlight: "data", after: " in sync" },
    description:
      "Google Calendar, Zapier, AI assistants and Treatflow Pay – connect once, stay up to date everywhere.",
    chips: ["Google Calendar", "Zapier", "AI assistants (MCP)", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "See the calendar", href: { page: "appointment-calendar" } },
    tiles: [
      { name: "Google", category: "Calendar", gradient: "from-emerald-500 to-teal-600", icon: "calendar" },
      { name: "Zapier", category: "Automation", gradient: "from-orange-500 to-amber-600", icon: "zap" },
      { name: "Claude & ChatGPT", category: "AI assistants", gradient: "from-blue-500 to-indigo-600", icon: "bot" },
      { name: "Treatflow Pay", category: "Online payment", gradient: "from-violet-500 to-purple-600", icon: "wallet", feature: "pay" },
    ],
  },
  understand: {
    title: "At a glance: what integrations are for",
    description: "No more double entry – data flows between your tools.",
    items: [
      {
        icon: "refresh",
        title: "No more double entry",
        text: "Enter clients and appointments once – your calendar and connected tools stay up to date.",
      },
      {
        icon: "workflow",
        title: "Automatic workflows",
        text: "Calendar entries and Zapier workflows run quietly in the background.",
      },
      {
        icon: "shield-check",
        title: "GDPR-compliant",
        text: "Secure connections and data processing in line with EU rules. Medical data never leaves Treatflow.",
      },
    ],
  },
  howItWorks: {
    description: "Connected in three steps – no technical knowledge needed.",
    steps: [
      { title: "Choose an app", text: "Pick the integration you want under Studio settings > Apps." },
      { title: "Connect your account", text: "Sign in once with the provider – for example Google, Zapier, Claude or ChatGPT." },
      { title: "Automatically in sync", text: "Appointments, clients and workflows now work together." },
    ],
  },
  cards: {
    title: "These apps are integrated",
    description: "From calendar sync and automation to AI assistants and online payments.",
    items: [
      {
        icon: "calendar",
        title: "Google Calendar",
        text: "Two-way sync: Treatflow and Google stay aligned in real time.",
        points: ["Two-way sync", "No double bookings", "Personal & salon kept separate"],
      },
      {
        icon: "wallet",
        title: "Treatflow Pay",
        text: "Deposits or full payments for online bookings – processed securely via Stripe.",
        points: ["Deposits", "Full prepayment", "2.69% – transparent"],
        feature: "pay",
      },
      {
        icon: "zap",
        title: "Zapier",
        text: "Connect over 7,000 apps – workflows for new appointments and forms.",
        points: ["7,000+ apps", "Webhooks", "No code"],
      },
      {
        icon: "bot",
        title: "AI assistants (MCP)",
        text: "Connect Claude, ChatGPT and other assistants and ask about appointments, clients or revenue.",
        points: ["Read-only by default", "Medical data stays in Treatflow", "Revoke access anytime"],
      },
    ],
  },
  faq: {
    title: "Frequently asked questions about integrations",
    items: [
      {
        question: "Which apps can I connect to Treatflow?",
        answer:
          "Treatflow connects directly with Google Calendar (appointment sync), Treatflow Pay (online payments) and AI assistants such as Claude or ChatGPT via the Model Context Protocol (MCP). Through Zapier you can also reach more than 7,000 other apps, such as Google Sheets, Mailchimp or your CRM.",
      },
      {
        question: "How do I sync my appointments with Google Calendar?",
        answer:
          "Connect your Google account once under Studio settings > Apps. From then on, appointments are synced automatically in both directions: bookings in Treatflow appear in your Google Calendar and vice versa – so you avoid double bookings.",
      },
      {
        question: "Can I use Treatflow with ChatGPT or Claude?",
        answer:
          "Yes. Add Treatflow as a connector in your AI assistant and sign in with your Treatflow account. You can then ask about appointments, free slots, clients or revenue. Access is read-only by default; if you allow it, the assistant can also create and reschedule appointments and create or update clients and products, with every change logged. It can't cancel or delete anything, and treatment records, forms and photos are never shared.",
      },
      {
        question: "What is the Zapier integration for?",
        answer:
          "With Zapier you automate your own workflows without any coding. When a new appointment is booked or a form is completed, Treatflow can, for example, add a row to Google Sheets, create a contact in your CRM or trigger an email.",
      },
      {
        question: "Can clients pay online when they book?",
        answer:
          "Yes. With Treatflow Pay, clients pay a deposit or the full amount when booking online – processed securely via Stripe. You decide per service whether payment is required.",
        feature: "pay",
      },
      {
        question: "Are the integrations included in every plan?",
        answer:
          "The integrations are included in the Booking plan. After signing up, you can find and activate them in the dashboard under Studio settings > Apps.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Appointment calendar", description: "All appointments in one place, always in sync" },
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Deposit or full payment", feature: "pay" },
      { href: { page: "online-booking" }, title: "Online booking", description: "24/7 booking with payment" },
      { href: { page: "messaging" }, title: "Reminders", description: "Automatic confirmations and reminders" },
    ],
  },
  cta: {
    title: "Connected tools for your salon",
    description: "Try it free for 14 days – connect Google Calendar, Zapier and your AI assistant in minutes.",
    secondary: { label: "All features", href: { page: "features" } },
  },
};
