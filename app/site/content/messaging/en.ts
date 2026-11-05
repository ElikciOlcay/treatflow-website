import type { MessagingContent } from "./types";

export const messagingEn: MessagingContent = {
  meta: {
    title: "Automated Email Appointment Reminders for Salons",
    description:
      "Automatic client messages for beauty salons: booking confirmations, email reminders, cancellation notices, follow-ups and birthday greetings – with ready-made templates.",
    keywords: [
      "appointment reminder email beauty salon",
      "automated client messages salon",
      "reduce no-shows beauty salon",
      "automatic appointment reminders",
      "booking confirmation email",
      "follow-up emails after treatment",
      "automatic birthday messages",
      "client retention beauty salon",
    ],
  },
  dates: { modified: "2026-09-07", published: "2024-06-01" },
  schema: {
    id: "nachrichtenautomatisierung",
    webPage: {
      name: "Automated Email Appointment Reminders for Salons",
      description:
        "Automatic client messages for beauty salons: booking confirmations, email reminders, cancellation notices, follow-ups and birthday greetings.",
    },
  },
  breadcrumb: "Reminders",
  hero: {
    eyebrow: "Automated messages",
    eyebrowIcon: "message-circle",
    title: { before: "Automatic ", highlight: "reminders" },
    description:
      "Booking confirmations, reminders and follow-ups by email – fewer no-shows, more loyal clients.",
    chips: ["Email reminders", "Fewer no-shows", "Birthday greetings"],
    secondaryCta: { label: "See the calendar", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "How can I reduce no-shows in my beauty salon?",
        answer:
          "Automatic appointment reminders are the most effective way to reduce no-shows. Treatflow sends email reminders at times you choose (for example 24 hours and 2 hours before the appointment). With reminders switched on, far fewer appointments are missed.",
      },
    ],
    image: {
      src: "/images/lifestyle/sms-erinnerung-studio.png",
      alt: "Client in a beauty salon reading an appointment reminder on her smartphone",
    },
  },
  understand: {
    title: "Messages that go out on their own",
    description:
      "Booking confirmation, reminder and aftercare – your clients get the right message at the right time, without you lifting a finger.",
    items: [
      {
        icon: "bell",
        title: "Fewer forgotten appointments",
        text: "Your clients receive an email reminder 1–7 days before their appointment, so far fewer appointments are missed.",
      },
      {
        icon: "message-circle",
        title: "Aftercare and follow-up",
        text: "After the treatment, your client automatically receives aftercare tips, a feedback request or an offer for the next appointment.",
      },
      {
        icon: "heart",
        title: "Personal greetings",
        text: "Birthday wishes and personalised messages go out automatically – building loyalty with zero extra effort.",
      },
    ],
  },
  howItWorks: {
    description: "Three steps to automatic messages.",
    steps: [
      { title: "Pick a template", text: "Choose a ready-made template for confirmations, reminders or follow-ups. Placeholders such as the client's name and appointment date are filled in automatically." },
      { title: "Set the timing", text: "Decide when the message should go out – for example 3 days and 1 day before the appointment, or right after the treatment." },
      { title: "It runs by itself", text: "Treatflow sends the emails at the right time, so you can focus on your clients." },
    ],
  },
  cards: {
    title: "What you get",
    description: "Everything for automatic client communication – clear and fully under your control.",
    items: [
      { icon: "clock", title: "Appointment reminders", text: "Flexible timing and personalised texts, sent by email.", points: ["1–7 days before", "Multiple reminders", "Fewer cancellations"] },
      { icon: "mail", title: "Booking confirmation", text: "Sent the moment a client books – with appointment, treatment and salon details.", points: ["Automatic", "Clear content", "Fewer questions"] },
      { icon: "message-circle", title: "Follow-up & aftercare", text: "After the treatment, share tips, ask for feedback or suggest the next appointment.", points: ["Automatic after the visit", "Templates", "More loyalty"] },
      { icon: "heart", title: "Birthday greetings", text: "Personal wishes and an optional offer on your client's birthday.", points: ["Automatic", "Discount possible", "Stronger loyalty"] },
      { icon: "zap", title: "Templates & placeholders", text: "Name, appointment, treatment – your texts fill themselves in.", points: ["Personalisation", "Per treatment", "Quick to set up"] },
      { icon: "bell", title: "Cancellation notices", text: "Clients and salon stay informed whenever an appointment is cancelled.", points: ["Instant", "Transparent", "Less chaos"] },
    ],
  },
  faq: {
    title: "Frequently asked questions about automated messages",
    items: [
      {
        question: "How can I reduce no-shows in my beauty salon?",
        answer:
          "Automatic appointment reminders are the most effective way to reduce no-shows. Treatflow sends email reminders at times you can configure (for example 3 days and 1 day before the appointment). This noticeably lowers the number of forgotten appointments.",
      },
      {
        question: "What do email reminders cost?",
        answer:
          "Email reminders and confirmations are included in all Treatflow plans at no extra cost and without a sending limit.",
      },
      {
        question: "Which messages should I automate?",
        answer:
          "The most important automated messages are booking confirmations, appointment reminders (1–7 days before), cancellation notices, follow-up messages after treatments and birthday greetings. They save you time and strengthen client loyalty.",
      },
      {
        question: "Can I write the messages myself?",
        answer:
          "Yes. Start with a ready-made template or write your own text. Placeholders such as the client's name, appointment date and treatment are filled in automatically, so every message feels personal.",
      },
      {
        question: "Can I send aftercare messages automatically?",
        answer:
          "Yes. With Treatflow you can set up automatic follow-up emails after treatments. They can include aftercare tips, feedback requests or offers for the next appointment.",
      },
      {
        question: "Can I combine several messages into one automation?",
        answer:
          "Yes. With client workflows you chain several steps together – for example aftercare tips two days after the treatment, a rebooking reminder after six weeks and a message to clients who haven't visited in a while.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "customer-workflows" }, title: "Client workflows", description: "Multi-step aftercare & reactivation" },
      { href: { page: "online-booking" }, title: "Online booking", description: "Bookings arrive with a confirmation" },
      { href: { page: "appointment-calendar" }, title: "Appointment calendar", description: "Appointments & reminders in one place" },
    ],
  },
  cta: {
    title: "Ready to put client communication on autopilot?",
    description: "Try it free for 14 days – reminders, follow-ups and birthday greetings without extra work.",
    secondary: { label: "See the calendar", href: { page: "appointment-calendar" } },
  },
};
