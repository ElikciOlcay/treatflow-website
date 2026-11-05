import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationEn: TreatmentDocumentationContent = {
  meta: {
    title: "Digital Treatment Records for Salons & Aesthetic Clinics",
    description:
      "Digital treatment records for beauty salons and aesthetic clinics: before-and-after photos, notes, device settings and treatment history in the client profile. Dictate your notes instead of typing them.",
    keywords: [
      "treatment record software",
      "beauty salon treatment records",
      "before and after photo software",
      "treatment notes app",
      "dictate treatment notes",
      "aesthetics clinic treatment notes",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "behandlungsdokumentation",
    webPage: {
      name: "Digital Treatment Records for Salons & Aesthetic Clinics",
      description: "Digital treatment records with before-and-after photos, notes and history.",
    },
  },
  breadcrumb: "Treatment records",
  hero: {
    eyebrow: "Treatment records",
    eyebrowIcon: "file-text",
    title: { before: "Record every treatment ", highlight: "digitally" },
    description:
      "Photos, notes and parameters in one place – with AI support. At the next appointment you know straight away what was done.",
    chips: ["Before-and-after photos", "AI dictation", "Digital signature"],
    secondaryCta: { label: "Digital forms", href: { page: "forms" } },
    capsules: [
      {
        question: "What software can I use to record beauty treatments?",
        answer:
          "Treatflow documents treatments digitally with before-and-after photos, parameters, notes and signature. Complete records matter most for device-based treatments such as laser or IPL – and that's exactly the workflow Treatflow supports.",
      },
      {
        question: "How do I keep records across a course of aesthetic treatments?",
        answer:
          "Every session gets an entry with parameters, products, photos and notes. The history stays in the client record. You can dictate notes; Treatflow turns them into text and can optionally polish it.",
      },
    ],
    image: {
      src: "/images/mockups/dokumentation-hero.png",
      alt: "Treatflow treatment record with photos and notes",
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
        title: "Dictate instead of typing",
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
    description: "Three steps to a complete treatment record.",
    steps: [
      { title: "Open a treatment record", text: "Open it straight from the appointment or client profile – client and treatment are already filled in." },
      { title: "Add photos and notes", text: "Upload photos, enter treatment parameters and dictate or type your notes. If needed, have the client sign." },
      { title: "Saved and available", text: "Everything goes into the client profile automatically. At the next appointment you see right away what was done last time." },
    ],
  },
  cards: {
    title: "What you get",
    description: "Everything you need for thorough treatment records – without the paperwork.",
    items: [
      { icon: "camera", title: "Before-and-after photos", text: "Save photos directly with the treatment and compare them chronologically.", points: ["Linked to the treatment", "In the client profile", "GDPR-compliant"] },
      { icon: "mic", title: "Voice dictation", text: "Speak your notes instead of typing – ideal during or right after the treatment.", points: ["Hands-free", "Fast", "Clearly worded"] },
      { icon: "brain", title: "AI assistant", text: "Optionally polish and structure the dictated text – you review the entry before saving.", points: ["Polish text", "Structure", "Less typing"] },
      { icon: "file-text", title: "Parameters & products", text: "Log device settings, products and parameters accurately.", points: ["Laser/IPL", "Products", "Aftercare"] },
      { icon: "pen-tool", title: "Digital signature", text: "Capture consent or confirmation digitally on the tablet.", points: ["On the device", "In the profile", "Traceable"] },
      { icon: "shield", title: "Secure archive", text: "All treatment records are stored on EU servers and can be retrieved at any time.", points: ["EU servers", "Encrypted", "Always available"] },
    ],
  },
  faq: {
    title: "Frequently asked questions about treatment records",
    items: [
      {
        question: "What software can I use to record beauty treatments?",
        answer:
          "Treatflow documents treatments digitally with before-and-after photos, parameters, notes and signature. Complete records matter most for device-based treatments such as laser or IPL – and that's exactly the workflow Treatflow supports.",
      },
      {
        question: "How do I keep records across a course of aesthetic treatments?",
        answer:
          "Every session gets an entry with parameters, batch numbers, photos and notes. The history in the client record shows progress across several appointments. You can speak your notes; Treatflow turns them into text and can optionally polish it with AI.",
      },
      {
        question: "Do beauty salons have to keep treatment records?",
        answer:
          "Requirements depend on your country and the treatment. For device-based treatments such as laser or IPL, complete records are usually expected. For everything else they are still recommended – for legal protection, quality and client satisfaction.",
      },
      {
        question: "What should a professional treatment record include?",
        answer:
          "Treatment type and date, products and parameters, before-and-after photos, skin assessment, progress notes, aftercare recommendations and optionally the client's signature.",
      },
      {
        question: "How do I take good before-and-after photos?",
        answer:
          "Always under the same conditions (light, angle, distance). In Treatflow you save photos directly in the treatment record and link them to the client profile.",
      },
      {
        question: "What should I document for laser and IPL treatments?",
        answer:
          "Typically the consultation, consent, device settings (e.g. energy, frequency, pulse duration), treatment area, skin reaction and aftercare advice.",
      },
      {
        question: "Can I dictate treatment notes instead of typing?",
        answer:
          "Yes. In the treatment record you speak your notes. Treatflow converts speech to text and can optionally polish the text with AI. The record is not written fully automatically.",
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
      { href: { page: "forms" }, title: "Forms", description: "Digital consultation and consent forms" },
      { href: { page: "client-records" }, title: "Client records", description: "History in the client profile" },
      { href: { page: "appointment-calendar" }, title: "Appointment calendar", description: "Open the treatment record from the appointment" },
    ],
  },
  cta: {
    title: "Ready for clear, complete treatment records?",
    description: "Try it free for 14 days – no credit card required. Treatment records, photos and signatures in one app.",
    secondary: { label: "Digital forms", href: { page: "forms" } },
  },
};
