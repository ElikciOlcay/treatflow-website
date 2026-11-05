import type { OnlineBookingContent } from "./types";

export const onlineBookingEn: OnlineBookingContent = {
  meta: {
    title: "Online Booking System for Beauty Salons",
    description:
      "Online booking for your beauty salon: clients book 24/7 through your personal link. With Treatflow Pay, take a deposit or full payment right at booking. No commission per booking.",
    keywords: [
      "online booking system beauty salon",
      "salon booking software",
      "online appointment booking spa",
      "booking link beauty salon",
      "24/7 online booking",
      "salon waitlist",
      "deposit online booking",
    ],
  },
  dates: { modified: "2026-10-02", published: "2024-06-01" },
  schema: {
    id: "online-buchungen",
    webPage: {
      name: "Online Booking System for Beauty Salons",
      description:
        "Online booking for your beauty salon: clients book 24/7 through your personal link. With Treatflow Pay, take a deposit or full payment right at booking.",
    },
  },
  breadcrumb: "Online booking",
  hero: {
    eyebrow: "Online booking",
    eyebrowIcon: "link",
    title: { before: "Online booking for your ", highlight: "salon" },
    description:
      "Your personal booking link – clients book around the clock. Appointments land in your calendar automatically.",
    chips: ["Bookable 24/7", "No commission", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "See the calendar", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Which online booking system is right for beauty salons?",
        answer:
          "Treatflow offers an online booking system built for beauty salons, with a personal booking link, 24/7 appointment booking, automatic email confirmations and Treatflow Pay for a deposit or full payment at booking. No commission per booking, from €59/month on the Booking plan, 14-day free trial.",
      },
    ],
    image: {
      src: "/images/mockups/online-buchung-hero.png",
      alt: "Treatflow online booking system – personal booking link",
    },
  },
  understand: {
    title: "Clients book themselves – you focus on treatments",
    description:
      "With your personal booking link, clients can pick appointments around the clock. No more phone tag or back-and-forth messages.",
    items: [
      {
        icon: "calendar",
        title: "Open 24/7",
        text: "Your booking link is available 24/7. More than 60% of bookings come in during evenings or weekends.",
      },
      {
        icon: "bell",
        title: "Automatic confirmation and reminder",
        text: "Right after booking, your client receives a confirmation. Before the appointment, an email reminder follows.",
      },
      {
        icon: "list-ordered",
        title: "Waitlist for fully booked days",
        text: "When you're fully booked, clients can join the waitlist. As soon as a slot opens up, they're notified automatically.",
      },
    ],
  },
  howItWorks: {
    description: "Three steps to your own booking link.",
    steps: [
      { title: "Add your treatments", text: "Choose which treatments can be booked, how long they take and what they cost. Clients only ever see free times." },
      { title: "Share your link", text: "Share your personal booking link on Instagram, your website or in messages. A printable QR code is included too." },
      { title: "Bookings come in", text: "New appointments appear in your calendar automatically. Confirmations and reminders go out on their own. With Treatflow Pay, clients can pay a deposit or the full price right away." },
    ],
  },
  cards: {
    title: "What you get",
    description: "Booking link, languages, waitlist, discount codes and Treatflow Pay – with no commission per appointment.",
    items: [
      { icon: "link", title: "Personal booking link", text: "Your link to share on your website and social media – with your salon's branding.", points: ["Custom link", "QR code", "Salon branding"] },
      { icon: "languages", title: "Seven languages", text: "The booking page adapts to your client's language – no extra setup.", points: ["DE, EN, NL, TR, PL, IT, RU", "Automatic language", "No language barriers"] },
      { icon: "wallet", title: "Treatflow Pay", text: "Deposit or full payment right at online booking.", points: ["Set per service", "Deposit or full payment", "2.69% per transaction"], feature: "pay" },
      { icon: "list-ordered", title: "Waitlist", text: "Clients join the waitlist when you're fully booked. When a slot opens up, matching clients get an email.", points: ["Automatic email on cancellation", "Two notification modes", "Overview in the dashboard"] },
      { icon: "ticket", title: "Discount codes", text: "Codes for new clients and promotions – redeemed right at online booking.", points: ["New clients & promotions", "Redeemed at booking", "Usage statistics"] },
      { icon: "bell", title: "Reminders", text: "Email reminders before the appointment. Clients can cancel in good time and the slot becomes free again.", points: ["Email reminders", "Flexible timing", "Fewer no-shows"] },
      { icon: "calendar", title: "Flexible scheduling", text: "Working hours, treatment durations, breaks and holidays – only genuinely free slots are offered.", points: ["Working hours", "Breaks & holidays", "No double bookings"] },
    ],
  },
  faq: {
    title: "Frequently asked questions about online booking",
    items: [
      {
        question: "Which online booking system is right for beauty salons?",
        answer:
          "Treatflow offers an online booking system built for beauty salons, with a personal booking link, automatic email confirmations, staff calendars and a connection to client profiles and treatment records. From €59 per month.",
      },
      {
        question: "How do I set up online booking for my salon?",
        answer:
          "In three steps: 1) add your treatments with duration and price, 2) set your working hours and availability, 3) share your personal booking link on Instagram, your website or in messages. Setup takes less than 10 minutes.",
      },
      {
        question: "How much does an online booking system for beauty salons cost?",
        answer:
          "Treatflow includes online booking in the Booking plan from €59 per month. There is no commission per booking, no hidden costs and a 14-day free trial with no credit card required.",
      },
      {
        question: "Can clients book appointments around the clock?",
        answer:
          "Yes. Your personal booking link is available 24/7. Clients can see and book free slots at any time – including evenings and weekends. More than 60% of bookings happen outside opening hours.",
      },
      {
        question: "How does a booking system reduce no-shows?",
        answer:
          "With automatic email reminders at times you choose before the appointment. Clients are reminded and can cancel if needed, so the slot becomes free for someone else. That noticeably reduces no-shows.",
      },
      {
        question: "What happens when all appointments are booked?",
        answer:
          "With the waitlist, clients can register their interest in free slots. If an existing appointment is cancelled, matching clients automatically receive an email with the newly available times. That way, no enquiry gets lost.",
      },
      {
        question: "Can clients pay directly when booking online?",
        answer:
          "Yes. With Treatflow Pay, clients pay a deposit or the full amount when they book. You set this per service. The fee is 2.69% per transaction.",
        feature: "pay",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Deposit or full payment", feature: "pay" },
      { href: { page: "appointment-calendar" }, title: "Appointment calendar", description: "Bookings land straight in your schedule" },
      { href: { page: "messaging" }, title: "Reminders", description: "Automatic confirmations and reminders" },
      { href: { page: "client-records" }, title: "Client records", description: "New booking, familiar profile" },
    ],
  },
  cta: {
    title: "Ready to take bookings around the clock?",
    description: "Try it free for 14 days – no credit card and no commission per booking.",
    secondary: { label: "See the calendar", href: { page: "appointment-calendar" } },
  },
};
