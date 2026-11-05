import type { FormsContent } from "./types";

export const formsEn: FormsContent = {
  meta: {
    title: "Digital Consultation & Consent Forms for Salons and Clinics",
    description:
      "Digital consultation, medical history and consent forms for beauty salons and aesthetic clinics: ready-made templates, AI form generator and drag & drop editor. Clients fill in and sign before their appointment.",
    keywords: [
      "beauty salon consultation form",
      "client consultation form",
      "digital consent form salon",
      "medical history form aesthetics",
      "AI form generator",
      "consent form templates salon",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "formulare",
    webPage: {
      name: "Digital Consultation & Consent Forms for Salons and Clinics",
      description:
        "Ready-made templates, AI form generator and drag & drop editor for consultation and consent forms in beauty salons and aesthetic clinics.",
    },
  },
  breadcrumb: "Forms",
  hero: {
    eyebrow: "Forms & AI generator",
    eyebrowIcon: "file-text",
    title: { before: "Forms for every ", highlight: "treatment" },
    description: "Marketplace, AI generator and drag & drop. Use templates or create your own forms in minutes.",
    chips: ["AI generator", "Marketplace", "Drag & drop"],
    secondaryCta: { label: "Try sample forms", href: { page: "try-forms" } },
    capsules: [
      {
        question: "Which forms does a beauty salon need?",
        answer:
          "At a minimum, a consultation form covering medical history and a consent form – plus detailed pre-treatment information for device-based treatments such as laser or IPL. Treatflow provides ready-made templates and an AI generator; clients fill them in digitally before their visit and the data is stored GDPR-compliantly in the client record.",
      },
    ],
    image: {
      src: "/images/mockups/en/formulare-marketplace.png",
      alt: "Treatflow forms marketplace with templates and AI generator",
    },
  },
  understand: {
    title: "Consultation and consent – digital, not paper",
    description:
      "Your clients complete forms on their own phone before the appointment. The data goes straight into the client profile.",
    items: [
      {
        icon: "file-text",
        title: "Use ready-made templates",
        text: "The marketplace has templates for consultations, treatment information and consent – including for laser and IPL treatments.",
      },
      {
        icon: "sparkles",
        title: "Create your own forms with AI",
        text: "Describe your treatment in your own words and the AI builds the right form for you. Afterwards you can adjust everything.",
      },
      {
        icon: "send",
        title: "Completed before the appointment",
        text: "Send the form link by email. Your client fills it in at home – you save 10–15 minutes per appointment.",
      },
    ],
  },
  tryBanner: {
    title: "Try sample forms – no sign-up needed",
    text: "These templates show how digital check-in works. Create forms for your own salon with the AI generator – or we'll set them up with you.",
    button: "Open sample forms",
    href: { page: "try-forms" },
  },
  howItWorks: {
    description: "From a blank page to a finished form in three steps.",
    steps: [
      { title: "Template or AI", text: "Pick a marketplace template or describe the treatment to the AI – the fields are created automatically." },
      { title: "Adjust with drag & drop", text: "Move, add or remove fields. The live preview shows exactly what your client will see." },
      { title: "Share and archive", text: "Send by link or QR code. Signature and timestamp are stored GDPR-compliantly in the client record." },
    ],
  },
  cards: {
    title: "What you get",
    description: "Three ways to create consultation and consent forms – plus sending and digital signatures.",
    items: [
      { icon: "file-text", title: "Forms marketplace", text: "Ready-made templates for beauty treatments – professionally written and ready to use.", points: ["Consultation & information", "Consent forms", "Ready to use"] },
      { icon: "sparkles", title: "AI generator", text: "Describe the treatment in your own words – the AI builds the form with the fields you need.", points: ["Fields created automatically", "In seconds", "Editable afterwards"] },
      { icon: "layout", title: "Drag & drop editor", text: "Build your own forms or adapt templates – with every field type and a live preview.", points: ["All field types", "Live preview", "Full control"] },
      { icon: "send", title: "Sent in advance by link", text: "The form goes out by email before the appointment. Saves 10–15 minutes at reception.", points: ["By email", "On their own device", "Saved to the client profile"] },
      { icon: "pen-tool", title: "Digital signature", text: "Clients sign consent on the tablet. Timestamped and archived in the EU.", points: ["On the device", "Timestamp", "Fully traceable"] },
      { icon: "shield", title: "Secure archive", text: "Every completed form is stored with signature and timestamp on EU servers and stays with the client record.", points: ["EU servers", "Encrypted", "GDPR-compliant"] },
    ],
  },
  faq: {
    title: "Frequently asked questions about forms",
    items: [
      {
        question: "Which forms does a beauty salon need?",
        answer:
          "At a minimum, a beauty salon needs a consultation form covering medical history and consent forms. Device-based treatments such as laser or IPL also call for detailed information about risks. Depending on the treatment, allergy questionnaires, aftercare instructions and satisfaction surveys can be added.",
      },
      {
        question: "What should a beauty consultation form include?",
        answer:
          "A consultation form for beauty treatments should ask for personal details, current medication, allergies and intolerances, skin conditions, pregnancy and previous treatments. Device-based treatments such as laser or IPL usually require additional questions.",
      },
      {
        question: "Can I send consultation forms to clients digitally?",
        answer:
          "Yes. With Treatflow you can send forms to your clients by email before their visit. They fill them in on their own phone ahead of the appointment – saving you 10–15 minutes per appointment in the salon.",
      },
      {
        question: "Are digital consent forms legally valid?",
        answer:
          "In most countries, consent forms signed electronically are legally recognised. Treatflow stores every form with a timestamp and signature, GDPR-compliantly in the EU.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "try-forms" }, title: "Try sample forms", description: "Fill in sample forms, no sign-up needed" },
      { href: { page: "treatment-documentation" }, title: "Treatment records", description: "Forms plus treatment history" },
      { href: { page: "client-records" }, title: "Client records", description: "Completed forms in the profile" },
    ],
  },
  cta: {
    title: "Ready for digital forms?",
    description: "Try it free for 14 days – marketplace, AI generator and drag & drop, no credit card required.",
    secondary: { label: "Try sample forms", href: { page: "try-forms" } },
  },
};
