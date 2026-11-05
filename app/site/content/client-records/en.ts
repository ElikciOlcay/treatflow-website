import type { ClientRecordsContent } from "./types";

export const clientRecordsEn: ClientRecordsContent = {
  meta: {
    title: "Client Record Software for Salons: Client Cards & History",
    description:
      "Professional client management for your beauty salon: treatment history, client notes and photos in one place. GDPR-compliant, hosted in the EU.",
    keywords: [
      "client records software beauty salon",
      "salon client management",
      "digital client record cards",
      "beauty salon CRM",
      "treatment history software",
      "GDPR client data salon",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "kundenverwaltung",
    webPage: {
      name: "Client Record Software for Salons: Client Cards & History",
      description:
        "Professional client management for your beauty salon: treatment history, client notes and photos in one place. GDPR-compliant.",
    },
    software: {
      name: "Treatflow client records",
      description: "Digital client records for beauty salons with treatment history, notes and photos.",
      price: "39",
      currency: "EUR",
    },
  },
  breadcrumb: "Client records",
  hero: {
    eyebrow: "Digital client records",
    eyebrowIcon: "users",
    title: { before: "All client data in one ", highlight: "place" },
    description: "Unlimited client records with history, import and search. GDPR-compliant on EU servers.",
    chips: ["GDPR-compliant", "Data import", "Unlimited clients"],
    secondaryCta: { label: "Digital forms", href: { page: "forms" } },
    capsules: [
      {
        question: "Which app is right for managing clients in a beauty salon?",
        answer:
          "Treatflow offers client management built for beauty salons, with digital client records, treatment history, photos and GDPR-compliant hosting in the EU. All client data is available on desktop, tablet and smartphone. Try it free for 14 days.",
      },
    ],
    image: {
      src: "/images/mockups/kundenverwaltung-overview.png",
      alt: "Treatflow client records – overview with search and detail view",
    },
  },
  understand: {
    title: "All client data in one place",
    description:
      "A profile for every client with contact details, treatment history and photos – available any time, on any device.",
    items: [
      {
        icon: "shield",
        title: "Secure and GDPR-compliant",
        text: "Your client data is stored encrypted on EU servers. Subject access and erasure requests can be handled at any time.",
      },
      {
        icon: "upload",
        title: "Bring your existing data",
        text: "Already have a client list? Simply import it from Excel or CSV. Our team helps you move over.",
      },
      {
        icon: "database",
        title: "Unlimited clients",
        text: "Whether 50 or 5,000 clients – no limit and no extra cost per contact.",
      },
    ],
  },
  howItWorks: {
    description: "Three steps to digital client records.",
    steps: [
      { title: "Add or import clients", text: "Create new clients manually or import your existing list from Excel or CSV. Duplicates are detected automatically." },
      { title: "Fill the profile", text: "Store contact details, allergies, notes and photos in the profile. Completed forms are added automatically." },
      { title: "Everything ready at the next visit", text: "Open the client profile before the treatment – you see right away what was done last time and what to look out for." },
    ],
  },
  cards: {
    title: "What you get",
    description: "Digital client records without limits – including import, search and GDPR compliance.",
    items: [
      { icon: "database", title: "Unlimited clients", text: "As many profiles as your salon needs – no surcharge per contact.", points: ["No client limit", "Stays fast", "Automatic backups"] },
      { icon: "upload", title: "Data import", text: "Bring existing lists over from Excel or CSV. Help with the move included.", points: ["Excel & CSV", "Field mapping", "Duplicate detection"] },
      { icon: "shield", title: "GDPR-compliant", text: "Storage in the EU, encryption, subject access and erasure on request.", points: ["EU servers", "Encrypted", "Right to erasure"] },
      { icon: "search", title: "Fast search", text: "Find profiles by name, phone, email or treatment – in seconds.", points: ["Full-text search", "Filters", "Sorting"] },
      { icon: "camera", title: "Photos & history", text: "Before-and-after photos and treatments right in the profile, not in separate folders.", points: ["Photos in the profile", "Treatment history", "Notes"] },
      { icon: "users", title: "Always with you", text: "Web-based on smartphone, tablet and desktop – no extra app to install.", points: ["Smartphone", "Tablet in the treatment room", "Desktop"] },
    ],
  },
  faq: {
    title: "Frequently asked questions about client records",
    items: [
      {
        question: "Which app is right for managing clients in a beauty salon?",
        answer:
          "Treatflow is client management software built for beauty salons. The app offers digital client records, treatment history, photos, notes and GDPR-compliant data storage in the EU. Try it free for 14 days.",
      },
      {
        question: "What are digital client records for beauty salons?",
        answer:
          "Digital client records are software that stores all client data, treatment histories, before-and-after photos and notes in one place. Unlike paper cards, they are GDPR-compliant, searchable and accessible from any device.",
      },
      {
        question: "Are digital client records GDPR-compliant?",
        answer:
          "Yes. Treatflow stores all client data encrypted on EU servers and meets all GDPR requirements. Clients can view their data and have it deleted at any time.",
      },
      {
        question: "What information should a salon's client record contain?",
        answer:
          "A professional client record should contain contact details, treatment history, allergies and intolerances, before-and-after photos, completed forms (medical history, consent), notes and appointment history.",
      },
      {
        question: "Can I import my existing client data?",
        answer:
          "Yes. Treatflow supports importing client data from Excel and CSV files. Our onboarding team helps you move your data from your previous system free of charge.",
      },
      {
        question: "Can Treatflow send automatic messages to my clients?",
        answer:
          "Yes. Treatflow includes built-in message automation. You can set up automatic appointment reminders, birthday messages and follow-up messages after treatments to strengthen client loyalty – with no extra effort.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Appointment calendar", description: "Client profile right from the appointment" },
      { href: { page: "forms" }, title: "Forms", description: "Consultation forms go straight to the client record" },
      { href: { page: "treatment-documentation" }, title: "Treatment records", description: "History in the client profile" },
    ],
  },
  cta: {
    title: "Ready for well-organised client records?",
    description: "Try it free for 14 days – no credit card required. Import, history and GDPR compliance in one app.",
    secondary: { label: "Digital forms", href: { page: "forms" } },
  },
};
