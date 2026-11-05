import type { PricingPageContent } from "./types";

export const pricingEn: PricingPageContent = {
  meta: {
    title: "Salon Software Pricing – from €39 per Month",
    description:
      "Treatflow pricing: Basic from €39/month, Booking from €59/month. No booking commission, 14-day free trial, no credit card required.",
    keywords: [
      "salon software pricing",
      "beauty salon software cost",
      "appointment booking software price",
      "salon software without commission",
      "aesthetic clinic software pricing",
    ],
  },
  dates: { modified: "2026-11-05", published: "2024-06-01" },
  breadcrumb: "Pricing",
  capsule: {
    question: "How much does Treatflow cost?",
    answer:
      "Basic from €39/month (client records, consultation forms, treatment records), Booking from €59/month (incl. appointment calendar, online booking, reminders). No commission per booking, 14-day free trial.",
  },
  schema: {
    webPage: {
      name: "Pricing: salon software from €39/month",
      description: "Transparent Treatflow pricing: Basic from €39/month, Booking from €59/month.",
    },
    priceValidUntil: "2026-12-31",
    offers: [
      { name: "Basic", price: "39", currency: "EUR" },
      { name: "Booking", price: "59", currency: "EUR" },
    ],
  },
  comparison: {
    title: "What's included?",
    subtitle: "Compare both plans in detail and find the right fit for your salon.",
    vatNote: "All prices exclude VAT.",
    featureLabel: "Feature",
    basicLabel: "Basic (€39)",
    bookingLabel: "Booking (€59)",
    rows: [
      { label: "Client management", basic: true, booking: true },
      { label: "Forms with digital signature", basic: true, booking: true },
      { label: "Treatment records incl. voice dictation", basic: true, booking: true },
      { label: "Before-and-after photos", basic: true, booking: true },
      { label: "Team notes and tasks", basic: true, booking: true },
      { label: "Shop and products", basic: true, booking: true },
      { label: "Statistics", basic: true, booking: true },
      { label: "Staff and roles", basic: true, booking: true },
      { label: "Email support", basic: true, booking: true },
      { label: "Appointment calendar (staff and rooms)", basic: false, booking: true },
      { label: "Online booking without commission", basic: false, booking: true },
      { label: "Waitlist", basic: false, booking: true },
      { label: "Email reminders", basic: false, booking: true },
      { label: "Client workflows", basic: false, booking: true },
      { label: "Discount codes", basic: false, booking: true },
      { label: "Multilingual booking page", basic: false, booking: true },
      { label: "Integrations (Google Calendar, Zapier, AI assistants)", basic: false, booking: true },
      { label: "Priority support", basic: false, booking: true },
    ],
    cta: "Try free for 14 days",
  },
  why: {
    title: "Why Treatflow?",
    subtitle: "Fixed, transparent prices – no hidden fees, no commission.",
    stats: [
      { value: "0%", label: "Commission per booking" },
      { value: "€0", label: "Setup fees" },
      { value: "14 days", label: "free trial" },
      { value: "Cancel", label: "anytime" },
    ],
  },
  faq: {
    title: "Pricing FAQ",
    subtitle: "Everything you need to know about Treatflow pricing.",
    items: [
      {
        question: "How much does Treatflow cost?",
        answer:
          "Treatflow comes in two plans: Basic from €39/month for client management, forms and treatment records. Booking from €59/month adds the appointment calendar, online booking and automatic reminders. You can try both plans free for 14 days.",
      },
      {
        question: "Are there hidden fees?",
        answer:
          "No. Treatflow uses transparent fixed prices without commissions, setup fees or hidden extras. What you see is what you pay.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes. On monthly billing you can cancel at any time, effective from the end of the billing period. There's no minimum term.",
      },
      {
        question: "Is there free salon software?",
        answer:
          "Some providers such as Fresha offer free basic versions, but earn money through payment fees and premium features. Treatflow offers transparent fixed prices without hidden costs – from €39/month with the full feature set.",
      },
      {
        question: "Is the Booking plan worth it?",
        answer:
          "If you need online booking, automatic email appointment reminders and a digital appointment calendar, yes. With the Booking plan you'll see significantly fewer no-shows and spend less time on the phone.",
      },
    ],
  },
};
