import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationEn: TreatmentDocumentationContent = {
  meta: {
    title: "Digital Treatment Documentation for Beauty Salons",
    description:
      "Digital treatment documentation for beauty and aesthetic salons: before-and-after photos, notes, device parameters and history in the client profile. Dictate notes instead of typing.",
    keywords: [
      "treatment documentation software",
      "beauty salon treatment records",
      "before and after photo software",
      "treatment notes app",
      "dictate treatment notes",
      "aesthetic clinic documentation",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "behandlungsdokumentation",
    webPage: {
      name: "Digital Treatment Documentation for Beauty Salons",
      description: "Digital treatment documentation with before-and-after photos, notes and history.",
    },
  },
  breadcrumb: "Documentation",
  hero: {
    eyebrow: "Treatment documentation",
    eyebrowIcon: "file-text",
    title: { before: "Document treatments ", highlight: "digitally" },
    description:
      "Photos, notes and parameters in one place – with AI support. At the next appointment you know straight away what was done.",
    chips: ["Before-and-after photos", "AI dictation", "Digital signature"],
    secondaryCta: { label: "Digital forms", href: { page: "forms" } },
    capsules: [
      {
        question: "Which software is suitable for documenting beauty treatments?",
        answer:
          "Treatflow documents treatments digitally with before-and-after photos, parameters, notes and signature. Especially for device-based treatments such as laser or IPL, complete documentation matters – Treatflow supports exactly this workflow.",
      },
      {
        question: "How do I document the course of aesthetic treatments?",
        answer:
          "Every session gets an entry with parameters, products, photos and notes. The history stays in the client record. You can dictate notes; Treatflow turns them into text and can optionally polish it.",
      },
    ],
    image: {
      src: "/images/mockups/dokumentation-hero.png",
      alt: "Treatflow treatment documentation with photos and notes",
    },
  },
  understand: {
    title: "Record every treatment properly",
    description:
      "After every session you have a digital entry with photos, notes and parameters – all stored in the client profile.",
    items: [
      {
        icon: "camera",
        title: "Before-and-after photos",
        text: "Capture progress with photos so you can show your client how the treatment is developing.",
      },
      {
        icon: "brain",
        title: "Capture by voice or AI",
        text: "Dictate your notes. Treatflow turns them into text and can optionally polish it with AI. Less typing, more time for the treatment.",
      },
      {
        icon: "shield",
        title: "Complete and traceable",
        text: "Every entry is saved with date, parameters and an optional signature in the client profile – so you can show what was done if questions come up later.",
      },
    ],
  },
  howItWorks: {
    description: "Three steps to finished documentation.",
    steps: [
      { title: "Open the documentation", text: "Open the documentation straight from the appointment or client profile – client and treatment are already filled in." },
      { title: "Add photos and notes", text: "Upload photos, enter treatment parameters and dictate or type your notes. If needed, have the client sign." },
      { title: "Saved and available", text: "Everything goes into the client profile automatically. At the next appointment you see right away what was done last time." },
    ],
  },
  cards: {
    title: "What you get",
    description: "Everything you need for clean treatment documentation – without paperwork.",
    items: [
      { icon: "camera", title: "Before-and-after photos", text: "Save photos directly with the treatment and compare them chronologically.", points: ["Same context", "In the client profile", "GDPR-compliant"] },
      { icon: "mic", title: "Voice dictation", text: "Speak your notes instead of typing – ideal during or right after the treatment.", points: ["Hands-free", "Fast", "Clearly worded"] },
      { icon: "brain", title: "AI assistant", text: "Optionally polish and structure the dictated text – you review the entry before saving.", points: ["Polish text", "Structure", "Less typing"] },
      { icon: "file-text", title: "Parameters & products", text: "Record device settings, products and parameters cleanly.", points: ["Laser/IPL", "Products", "Aftercare"] },
      { icon: "pen-tool", title: "Digital signature", text: "Capture consent or confirmation digitally on the tablet.", points: ["On the device", "In the profile", "Traceable"] },
      { icon: "shield", title: "Secure archive", text: "All documentation is stored on EU servers and can be retrieved at any time.", points: ["EU servers", "Encrypted", "Always available"] },
    ],
  },
  faq: {
    title: "Frequently asked questions about documentation",
    items: [
      {
        question: "Which software is suitable for documenting beauty treatments?",
        answer:
          "Treatflow documents treatments digitally with before-and-after photos, parameters, notes and signature. Especially for device-based treatments such as laser or IPL, complete documentation matters – Treatflow supports exactly this workflow.",
      },
      {
        question: "How do I document the course of aesthetic treatments?",
        answer:
          "Every session gets an entry with parameters, batch numbers, photos and notes. The history in the client record shows progress across several appointments. You can speak your notes; Treatflow turns them into text and can optionally polish it with AI.",
      },
      {
        question: "Is treatment documentation required in a beauty salon?",
        answer:
          "Requirements depend on your country and the treatment. For device-based treatments such as laser or IPL, complete documentation is usually expected. For all other treatments it is recommended – for legal certainty, quality and client satisfaction.",
      },
      {
        question: "What belongs in professional treatment documentation?",
        answer:
          "Treatment type and date, products and parameters, before-and-after photos, skin assessment, progress notes, aftercare recommendations and optionally the client's signature.",
      },
      {
        question: "How do I take before-and-after photos correctly?",
        answer:
          "Under the same conditions (light, angle, distance). In Treatflow you save photos directly in the documentation and link them to the client profile.",
      },
      {
        question: "What should I document for laser and IPL treatments?",
        answer:
          "Typically the consultation, consent, device settings (e.g. energy, frequency, pulse duration), treatment area, skin reaction and aftercare advice.",
      },
      {
        question: "Can I dictate treatment notes instead of typing?",
        answer:
          "Yes. In the documentation you speak your notes. Treatflow converts speech to text and can optionally polish the text with AI. The record is not written fully automatically.",
      },
      {
        question: "Can I mark treatment areas on photos or sketches?",
        answer:
          "You save before-and-after photos directly with the treatment and mark areas on the photos; forms offer sketch fields with a face or body template. There is no separate body chart module.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "forms" }, title: "Forms", description: "Digital intake and consent forms" },
      { href: { page: "client-records" }, title: "Client records", description: "History in the client profile" },
      { href: { page: "appointment-calendar" }, title: "Appointment calendar", description: "Open documentation from the appointment" },
    ],
  },
  cta: {
    title: "Ready for clear documentation?",
    description: "Try it free for 14 days – no credit card required. Documentation, photos and signatures in one app.",
    secondary: { label: "Digital forms", href: { page: "forms" } },
  },
};
