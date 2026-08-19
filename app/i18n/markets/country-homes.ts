import {
  BarChart3,
  Bell,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Languages,
  ListChecks,
  Mic,
  Ticket,
  Users,
  Workflow,
  Shield,
} from "lucide-react";
import type { HomePageIntlContent } from "@/app/components/HomePageIntl";
import { homeTrustIcons } from "@/app/components/HomePageIntl";
import { BASE_URL } from "@/app/i18n/config";

const { Lock, Server, ShieldCheck } = homeTrustIcons;

export type CountryHomeMarket = "us" | "nl" | "uk" | "fi" | "ie" | "ca" | "au" | "ae";

const heroImage = {
  src: "/images/lifestyle/hero-startseite-kalender.png",
  alt: "Treatflow appointment calendar open on a laptop in a modern beauty studio",
};

function softwareSchema(inLanguage: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Treatflow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    description,
    url: `${BASE_URL}${path}`,
    inLanguage,
    author: { "@type": "Organization", name: "Treatflow", url: BASE_URL },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      ratingCount: "19",
      reviewCount: "19",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

function faqSchema(inLanguage: string, items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

const featureColors = {
  calendar: "bg-indigo-100 text-indigo-600",
  booking: "bg-emerald-100 text-emerald-600",
  consent: "bg-orange-100 text-orange-600",
  records: "bg-blue-100 text-blue-600",
  docs: "bg-teal-100 text-teal-600",
  reminders: "bg-rose-100 text-rose-600",
  workflows: "bg-purple-100 text-purple-600",
} as const;

/* -------------------------------------------------------------------------- */
/* US – en-US                                                                 */
/* -------------------------------------------------------------------------- */

const usHomePage: HomePageIntlContent = {
  locale: "us",
  earlyAccessHref: "/us/early-access",
  pricingHref: "/us/pricing",
  hero: {
    eyebrow: "For beauty salons and med spas in the United States",
    titleLead: "Cut no-shows,",
    titleHighlight: "grow revenue",
    titleTail: "and ditch paperwork",
    subtitle:
      "Appointments, deposits, client records, HIPAA-aware consent forms and treatment documentation in one clear app – built for US salons and med spas.",
    primaryCta: "Request early access",
    trustItems: ["No credit card", "Ready in 2 minutes", "Free data migration", "Personal support"],
    studiosLabel: "500+ studios",
    ratingValue: "4.6/5",
    image: {
      ...heroImage,
      alt: "Treatflow calendar on a laptop in a US beauty salon and med spa",
    },
  },
  aiCapsules: [
    {
      question: "What is Treatflow?",
      answer:
        "Treatflow is all-in-one software for beauty salons and med spas in the United States. It combines online booking, deposits to reduce no-shows, client records, HIPAA-aware digital consent for aesthetics, treatment notes and photo documentation in one platform. Hosted on EU servers with strong privacy controls. No commission on bookings.",
    },
    {
      question: "Who is Treatflow for?",
      answer:
        "Treatflow is for US beauty salons, med spas, aesthetic clinics, laser studios and skin care businesses that want fewer no-shows, clearer consent workflows and structured treatment documentation – without paying booking commissions.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "SSL-encrypted" },
    { icon: Server, text: "EU servers" },
    { icon: Shield, text: "Daily backups" },
    { icon: ShieldCheck, text: "HIPAA-aware consent" },
  ],
  features: {
    title: "The most important features at a glance",
    subtitle: "Everything clearly structured so you and your team can work fast.",
    ctaNote: "No credit card. Cancel anytime.",
    items: [
      { icon: CalendarDays, label: "Appointment calendar", desc: "All appointments in a clear daily and weekly view.", color: featureColors.calendar },
      { icon: Users, label: "Online booking & deposits", desc: "Clients book online; deposits help cut no-shows and protect revenue.", color: featureColors.booking },
      { icon: ClipboardCheck, label: "Consent forms", desc: "HIPAA-aware digital intake and consent for aesthetic treatments.", color: featureColors.consent },
      { icon: FileText, label: "Client records", desc: "Client data, history and notes in one place.", color: featureColors.records },
      { icon: Shield, label: "Treatment documentation", desc: "Document treatments with notes and photos.", color: featureColors.docs },
      { icon: Bell, label: "Reminders", desc: "Automatic SMS and emails reduce no-shows.", color: featureColors.reminders },
      { icon: Workflow, label: "Digital workflows", desc: "From booking to documentation in one system.", color: featureColors.workflows },
    ],
  },
  extras: {
    title: "And Treatflow can do even more",
    subtitle: "Handy extras that make your studio day even easier – already included.",
    items: [
      { icon: BarChart3, label: "Statistics & reports", desc: "Revenue, appointments, clients and top services at a glance." },
      { icon: Mic, label: "AI dictation", desc: "Simply speak your treatment notes – the AI writes them for you." },
      { icon: Languages, label: "Multilingual booking", desc: "Your booking page in multiple languages – every client books in their own language." },
      { icon: Ticket, label: "Discount codes", desc: "Promotions and new-client codes for online booking." },
      { icon: ListChecks, label: "Tasks & team notes", desc: "Tasks with due dates, notes and assignments – with read receipts for your team." },
    ],
  },
  faqs: {
    title: "Frequently asked questions",
    pricingLinkLabel: "See pricing",
    items: [
      {
        q: "What is Treatflow?",
        a: "Treatflow is all-in-one software for beauty salons and med spas in the United States: appointment calendar, online booking with deposit support, digital client records, HIPAA-aware consent forms, treatment notes, photo documentation and reminders. No commission on bookings.",
      },
      {
        q: "Who is Treatflow for?",
        a: "Treatflow is for US beauty salons, med spas, aesthetic clinics, laser studios and skin care studios that want fewer no-shows, better consent workflows and structured treatment documentation.",
      },
      {
        q: "How can I get started in the United States?",
        a: "Self-serve signup is currently available in Germany, Austria and Switzerland. For the United States, request early access and we will get back to you.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. Treatflow is hosted on EU servers, SSL-encrypted and backed up daily. Consent and client workflows are designed with US aesthetic privacy expectations in mind.",
      },
    ],
  },
  cta: {
    title: "Ready to grow revenue and cut no-shows?",
    subtitle: "Request early access for salons and med spas in the United States.",
    note: "Cancel anytime. No booking commissions. With personal support.",
  },
  schemas: {
    software: softwareSchema(
      "en-US",
      "/us",
      "Salon and med spa software for the United States: appointments, deposits to reduce no-shows, client records, HIPAA-aware consent forms and treatment documentation. No commission on bookings."
    ),
    faq: faqSchema("en-US", [
      {
        q: "What is Treatflow?",
        a: "Treatflow is software for beauty salons and med spas in the United States with an appointment calendar, online booking, deposits, client records, HIPAA-aware consent forms, treatment documentation and reminders – all in one app. No commission on bookings.",
      },
      {
        q: "How can I get started in the United States?",
        a: "Request early access for the United States. Self-serve signup is currently available in Germany, Austria and Switzerland.",
      },
    ]),
  },
};

/* -------------------------------------------------------------------------- */
/* UK – en-GB                                                                 */
/* -------------------------------------------------------------------------- */

const ukHomePage: HomePageIntlContent = {
  locale: "uk",
  earlyAccessHref: "/uk/early-access",
  pricingHref: "/uk/pricing",
  hero: {
    eyebrow: "For salons, spas and aesthetic clinics in the United Kingdom",
    titleLead: "End the chaos of",
    titleHighlight: "paperwork",
    titleTail: "and no-shows",
    subtitle:
      "Appointments, client records, GDPR-ready consent forms and treatment documentation in one clear app – organised for UK salons, spas and aesthetic clinics. VAT-aware studio operations.",
    primaryCta: "Request early access",
    trustItems: ["No credit card", "Ready in 2 minutes", "Free data migration", "Personal support"],
    studiosLabel: "500+ studios",
    ratingValue: "4.6/5",
    image: {
      ...heroImage,
      alt: "Treatflow calendar on a laptop in a UK salon and aesthetic clinic",
    },
  },
  aiCapsules: [
    {
      question: "What is Treatflow?",
      answer:
        "Treatflow is all-in-one software for salons, spas and aesthetic clinics in the United Kingdom. It combines online booking, client records, GDPR-compliant consent forms, treatment notes, photo documentation and reminders in one platform. Hosted on EU servers. No commission on bookings. Built with VAT-aware studio operations in mind.",
    },
    {
      question: "Who is Treatflow for?",
      answer:
        "Treatflow is for beauty salons, day spas, aesthetic clinics, laser studios and skin clinics across the United Kingdom that want fewer no-shows, organised consent workflows and structured treatment documentation.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "SSL-encrypted" },
    { icon: Server, text: "EU servers (GDPR)" },
    { icon: Shield, text: "Daily backups" },
    { icon: ShieldCheck, text: "GDPR-ready" },
  ],
  features: {
    title: "The most important features at a glance",
    subtitle: "Everything clearly organised so you and your team can work fast.",
    ctaNote: "No credit card. Cancel anytime.",
    items: [
      { icon: CalendarDays, label: "Appointment calendar", desc: "All appointments in a clear daily and weekly view.", color: featureColors.calendar },
      { icon: Users, label: "Online booking", desc: "Clients book themselves – deposits help reduce no-shows.", color: featureColors.booking },
      { icon: ClipboardCheck, label: "Consent forms", desc: "Digital intake and consent forms, completed in advance – GDPR-ready.", color: featureColors.consent },
      { icon: FileText, label: "Client records", desc: "Client data, history and notes in one place.", color: featureColors.records },
      { icon: Shield, label: "Treatment documentation", desc: "Document treatments with notes and photos.", color: featureColors.docs },
      { icon: Bell, label: "Reminders", desc: "Automatic SMS and emails reduce no-shows.", color: featureColors.reminders },
      { icon: Workflow, label: "Digital workflows", desc: "From booking to documentation in one system.", color: featureColors.workflows },
    ],
  },
  extras: {
    title: "And Treatflow can do even more",
    subtitle: "Handy extras that make your studio day even easier – already included.",
    items: [
      { icon: BarChart3, label: "Statistics & reports", desc: "Revenue, appointments, clients and top services at a glance." },
      { icon: Mic, label: "AI dictation", desc: "Simply speak your treatment notes – the AI writes them for you." },
      { icon: Languages, label: "Multilingual booking", desc: "Your booking page in multiple languages – every client books in their own language." },
      { icon: Ticket, label: "Discount codes", desc: "Promotions and new-client codes for online booking." },
      { icon: ListChecks, label: "Tasks & team notes", desc: "Tasks with due dates, notes and assignments – with read receipts for your team." },
    ],
  },
  faqs: {
    title: "Frequently asked questions",
    pricingLinkLabel: "See pricing",
    items: [
      {
        q: "What is Treatflow?",
        a: "Treatflow is all-in-one software for salons, spas and aesthetic clinics in the United Kingdom: appointment calendar, digital client records, online booking, GDPR-ready consent forms, treatment notes, photo documentation and reminders. No commission on bookings.",
      },
      {
        q: "Who is Treatflow for?",
        a: "Treatflow is for UK beauty salons, spas, aesthetic clinics, laser studios and skin clinics that want organised digital workflows – from booking to treatment documentation.",
      },
      {
        q: "How can I get started in the United Kingdom?",
        a: "Self-serve signup is currently available in Germany, Austria and Switzerland. For the United Kingdom, request early access and we will get back to you.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. Treatflow is hosted on EU servers, GDPR-compliant, SSL-encrypted and backed up daily – with VAT-aware studio operations in mind.",
      },
    ],
  },
  cta: {
    title: "Ready to run your studio with less effort?",
    subtitle: "Request early access for salons and aesthetic clinics in the United Kingdom.",
    note: "Cancel anytime. GDPR-compliant. With personal support.",
  },
  schemas: {
    software: softwareSchema(
      "en-GB",
      "/uk",
      "Salon and aesthetic clinic software for the United Kingdom: appointments, client records, GDPR-ready consent forms and treatment documentation. Organised for UK studios. No commission on bookings."
    ),
    faq: faqSchema("en-GB", [
      {
        q: "What is Treatflow?",
        a: "Treatflow is software for salons, spas and aesthetic clinics in the United Kingdom with an appointment calendar, digital client records, online booking, GDPR-ready consent forms, treatment documentation and reminders. No commission on bookings.",
      },
      {
        q: "How can I get started in the United Kingdom?",
        a: "Request early access for the United Kingdom. Self-serve signup is currently available in Germany, Austria and Switzerland.",
      },
    ]),
  },
};

/* -------------------------------------------------------------------------- */
/* IE – en-IE                                                                 */
/* -------------------------------------------------------------------------- */

const ieHomePage: HomePageIntlContent = {
  locale: "ie",
  earlyAccessHref: "/ie/early-access",
  pricingHref: "/ie/pricing",
  hero: {
    eyebrow: "For salons, spas and aesthetic clinics in Ireland",
    titleLead: "End the chaos of",
    titleHighlight: "paperwork",
    titleTail: "and no-shows",
    subtitle:
      "Appointments, client records, GDPR-ready consent forms and treatment documentation in one clear app – organised for Irish salons, spas and aesthetic clinics. Euro pricing, EU data protection.",
    primaryCta: "Request early access",
    trustItems: ["No credit card", "Ready in 2 minutes", "Free data migration", "Personal support"],
    studiosLabel: "500+ studios",
    ratingValue: "4.6/5",
    image: {
      ...heroImage,
      alt: "Treatflow calendar on a laptop in an Irish beauty salon",
    },
  },
  aiCapsules: [
    {
      question: "What is Treatflow?",
      answer:
        "Treatflow is all-in-one software for salons, spas and aesthetic clinics in Ireland. It combines online booking, client records, GDPR-compliant consent forms, treatment notes, photo documentation and reminders. Hosted on EU servers. Priced in euro. No commission on bookings.",
    },
    {
      question: "Who is Treatflow for?",
      answer:
        "Treatflow is for beauty salons, spas, aesthetic clinics, laser studios and skin clinics across Ireland that want fewer no-shows, organised consent workflows and structured treatment documentation under EU GDPR.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "SSL-encrypted" },
    { icon: Server, text: "EU servers (GDPR)" },
    { icon: Shield, text: "Daily backups" },
    { icon: ShieldCheck, text: "GDPR-ready" },
  ],
  features: {
    title: "The most important features at a glance",
    subtitle: "Everything clearly organised so you and your team can work fast.",
    ctaNote: "No credit card. Cancel anytime.",
    items: [
      { icon: CalendarDays, label: "Appointment calendar", desc: "All appointments in a clear daily and weekly view.", color: featureColors.calendar },
      { icon: Users, label: "Online booking", desc: "Clients book themselves – deposits help reduce no-shows.", color: featureColors.booking },
      { icon: ClipboardCheck, label: "Consent forms", desc: "Digital intake and consent forms, completed in advance – GDPR-ready.", color: featureColors.consent },
      { icon: FileText, label: "Client records", desc: "Client data, history and notes in one place.", color: featureColors.records },
      { icon: Shield, label: "Treatment documentation", desc: "Document treatments with notes and photos.", color: featureColors.docs },
      { icon: Bell, label: "Reminders", desc: "Automatic SMS and emails reduce no-shows.", color: featureColors.reminders },
      { icon: Workflow, label: "Digital workflows", desc: "From booking to documentation in one system.", color: featureColors.workflows },
    ],
  },
  extras: {
    title: "And Treatflow can do even more",
    subtitle: "Handy extras that make your studio day even easier – already included.",
    items: [
      { icon: BarChart3, label: "Statistics & reports", desc: "Revenue, appointments, clients and top services at a glance." },
      { icon: Mic, label: "AI dictation", desc: "Simply speak your treatment notes – the AI writes them for you." },
      { icon: Languages, label: "Multilingual booking", desc: "Your booking page in multiple languages – every client books in their own language." },
      { icon: Ticket, label: "Discount codes", desc: "Promotions and new-client codes for online booking." },
      { icon: ListChecks, label: "Tasks & team notes", desc: "Tasks with due dates, notes and assignments – with read receipts for your team." },
    ],
  },
  faqs: {
    title: "Frequently asked questions",
    pricingLinkLabel: "See pricing",
    items: [
      {
        q: "What is Treatflow?",
        a: "Treatflow is all-in-one software for salons, spas and aesthetic clinics in Ireland: appointment calendar, digital client records, online booking, GDPR-ready consent forms, treatment notes, photo documentation and reminders. Euro pricing. No commission on bookings.",
      },
      {
        q: "Who is Treatflow for?",
        a: "Treatflow is for Irish beauty salons, spas, aesthetic clinics, laser studios and skin clinics that want organised digital workflows under EU GDPR.",
      },
      {
        q: "How can I get started in Ireland?",
        a: "Self-serve signup is currently available in Germany, Austria and Switzerland. For Ireland, request early access and we will get back to you.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. Treatflow is hosted on EU servers, fully GDPR-compliant, SSL-encrypted and backed up daily.",
      },
    ],
  },
  cta: {
    title: "Ready to run your studio with less effort?",
    subtitle: "Request early access for salons and aesthetic clinics in Ireland.",
    note: "Cancel anytime. GDPR-compliant. With personal support.",
  },
  schemas: {
    software: softwareSchema(
      "en-IE",
      "/ie",
      "Salon and aesthetic clinic software for Ireland: appointments, client records, GDPR-ready consent forms and treatment documentation. Euro pricing. No commission on bookings."
    ),
    faq: faqSchema("en-IE", [
      {
        q: "What is Treatflow?",
        a: "Treatflow is software for salons, spas and aesthetic clinics in Ireland with an appointment calendar, digital client records, online booking, GDPR-ready consent forms, treatment documentation and reminders. No commission on bookings.",
      },
      {
        q: "How can I get started in Ireland?",
        a: "Request early access for Ireland. Self-serve signup is currently available in Germany, Austria and Switzerland.",
      },
    ]),
  },
};

/* -------------------------------------------------------------------------- */
/* CA – en-CA                                                                 */
/* -------------------------------------------------------------------------- */

const caHomePage: HomePageIntlContent = {
  locale: "ca",
  earlyAccessHref: "/ca/early-access",
  pricingHref: "/ca/pricing",
  hero: {
    eyebrow: "For salons and aesthetic clinics in Canada",
    titleLead: "Cut no-shows,",
    titleHighlight: "grow revenue",
    titleTail: "and simplify consent",
    subtitle:
      "Appointments, client records, PIPEDA-aware consent forms and treatment documentation in one clear app – built for Canadian salons and aesthetic clinics.",
    primaryCta: "Request early access",
    trustItems: ["No credit card", "Ready in 2 minutes", "Free data migration", "Personal support"],
    studiosLabel: "500+ studios",
    ratingValue: "4.6/5",
    image: {
      ...heroImage,
      alt: "Treatflow calendar on a laptop in a Canadian beauty salon",
    },
  },
  aiCapsules: [
    {
      question: "What is Treatflow?",
      answer:
        "Treatflow is all-in-one software for beauty salons and aesthetic clinics in Canada. It combines online booking, deposits to reduce no-shows, client records, PIPEDA-aware digital consent, treatment notes and photo documentation. Hosted on EU servers. No commission on bookings. Pricing available in CAD context for Canadian studios.",
    },
    {
      question: "Who is Treatflow for?",
      answer:
        "Treatflow is for Canadian beauty salons, aesthetic clinics, med spas, laser studios and skin care businesses that want fewer no-shows, clearer privacy-aware consent workflows and structured treatment documentation.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "SSL-encrypted" },
    { icon: Server, text: "EU servers" },
    { icon: Shield, text: "Daily backups" },
    { icon: ShieldCheck, text: "PIPEDA-aware privacy" },
  ],
  features: {
    title: "The most important features at a glance",
    subtitle: "Everything clearly structured so you and your team can work fast.",
    ctaNote: "No credit card. Cancel anytime.",
    items: [
      { icon: CalendarDays, label: "Appointment calendar", desc: "All appointments in a clear daily and weekly view.", color: featureColors.calendar },
      { icon: Users, label: "Online booking & deposits", desc: "Clients book online; deposits help cut no-shows and protect revenue.", color: featureColors.booking },
      { icon: ClipboardCheck, label: "Consent forms", desc: "PIPEDA-aware digital intake and consent for aesthetic treatments.", color: featureColors.consent },
      { icon: FileText, label: "Client records", desc: "Client data, history and notes in one place.", color: featureColors.records },
      { icon: Shield, label: "Treatment documentation", desc: "Document treatments with notes and photos.", color: featureColors.docs },
      { icon: Bell, label: "Reminders", desc: "Automatic SMS and emails reduce no-shows.", color: featureColors.reminders },
      { icon: Workflow, label: "Digital workflows", desc: "From booking to documentation in one system.", color: featureColors.workflows },
    ],
  },
  extras: {
    title: "And Treatflow can do even more",
    subtitle: "Handy extras that make your studio day even easier – already included.",
    items: [
      { icon: BarChart3, label: "Statistics & reports", desc: "Revenue, appointments, clients and top services at a glance." },
      { icon: Mic, label: "AI dictation", desc: "Simply speak your treatment notes – the AI writes them for you." },
      { icon: Languages, label: "Multilingual booking", desc: "Your booking page in multiple languages – every client books in their own language." },
      { icon: Ticket, label: "Discount codes", desc: "Promotions and new-client codes for online booking." },
      { icon: ListChecks, label: "Tasks & team notes", desc: "Tasks with due dates, notes and assignments – with read receipts for your team." },
    ],
  },
  faqs: {
    title: "Frequently asked questions",
    pricingLinkLabel: "See pricing",
    items: [
      {
        q: "What is Treatflow?",
        a: "Treatflow is all-in-one software for beauty salons and aesthetic clinics in Canada: appointment calendar, online booking with deposit support, digital client records, PIPEDA-aware consent forms, treatment notes, photo documentation and reminders. No commission on bookings.",
      },
      {
        q: "Who is Treatflow for?",
        a: "Treatflow is for Canadian beauty salons, aesthetic clinics, med spas, laser studios and skin care studios that want fewer no-shows and structured treatment documentation.",
      },
      {
        q: "How can I get started in Canada?",
        a: "Self-serve signup is currently available in Germany, Austria and Switzerland. For Canada, request early access and we will get back to you.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. Treatflow is hosted on EU servers, SSL-encrypted and backed up daily. Consent and client workflows are designed with PIPEDA-aware privacy expectations in mind.",
      },
    ],
  },
  cta: {
    title: "Ready to run your salon with less effort?",
    subtitle: "Request early access for salons and aesthetic clinics in Canada.",
    note: "Cancel anytime. PIPEDA-aware privacy. With personal support.",
  },
  schemas: {
    software: softwareSchema(
      "en-CA",
      "/ca",
      "Salon and aesthetic clinic software for Canada: appointments, deposits to reduce no-shows, client records, PIPEDA-aware consent forms and treatment documentation. No commission on bookings."
    ),
    faq: faqSchema("en-CA", [
      {
        q: "What is Treatflow?",
        a: "Treatflow is software for beauty salons and aesthetic clinics in Canada with an appointment calendar, online booking, deposits, client records, PIPEDA-aware consent forms, treatment documentation and reminders. No commission on bookings.",
      },
      {
        q: "How can I get started in Canada?",
        a: "Request early access for Canada. Self-serve signup is currently available in Germany, Austria and Switzerland.",
      },
    ]),
  },
};

/* -------------------------------------------------------------------------- */
/* AU – en-AU                                                                 */
/* -------------------------------------------------------------------------- */

const auHomePage: HomePageIntlContent = {
  locale: "au",
  earlyAccessHref: "/au/early-access",
  pricingHref: "/au/pricing",
  hero: {
    eyebrow: "For salons, spas and aesthetic clinics in Australia",
    titleLead: "Cut no-shows,",
    titleHighlight: "protect revenue",
    titleTail: "and organise consent",
    subtitle:
      "Appointments, GST-aware deposits, client records, Privacy Act–ready consent forms and treatment documentation in one clear app – organised for Australian beauty businesses.",
    primaryCta: "Request early access",
    trustItems: ["No credit card", "Ready in 2 minutes", "Free data migration", "Personal support"],
    studiosLabel: "500+ studios",
    ratingValue: "4.6/5",
    image: {
      ...heroImage,
      alt: "Treatflow calendar on a laptop in an Australian beauty salon",
    },
  },
  aiCapsules: [
    {
      question: "What is Treatflow?",
      answer:
        "Treatflow is all-in-one software for salons, spas and aesthetic clinics in Australia. It combines online booking, GST-aware deposits to reduce no-shows, client records, Privacy Act–ready consent forms, treatment notes and photo documentation. Hosted on EU servers. No commission on bookings.",
    },
    {
      question: "Who is Treatflow for?",
      answer:
        "Treatflow is for Australian beauty salons, day spas, aesthetic clinics, laser studios and skin clinics that want fewer no-shows, organised consent workflows and structured treatment documentation.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "SSL-encrypted" },
    { icon: Server, text: "EU servers" },
    { icon: Shield, text: "Daily backups" },
    { icon: ShieldCheck, text: "Privacy Act–ready" },
  ],
  features: {
    title: "The most important features at a glance",
    subtitle: "Everything clearly organised so you and your team can work fast.",
    ctaNote: "No credit card. Cancel anytime.",
    items: [
      { icon: CalendarDays, label: "Appointment calendar", desc: "All appointments in a clear daily and weekly view.", color: featureColors.calendar },
      { icon: Users, label: "Online booking & deposits", desc: "Clients book online; GST-aware deposits help cut no-shows.", color: featureColors.booking },
      { icon: ClipboardCheck, label: "Consent forms", desc: "Digital intake and consent forms – Privacy Act–ready.", color: featureColors.consent },
      { icon: FileText, label: "Client records", desc: "Client data, history and notes in one place.", color: featureColors.records },
      { icon: Shield, label: "Treatment documentation", desc: "Document treatments with notes and photos.", color: featureColors.docs },
      { icon: Bell, label: "Reminders", desc: "Automatic SMS and emails reduce no-shows.", color: featureColors.reminders },
      { icon: Workflow, label: "Digital workflows", desc: "From booking to documentation in one system.", color: featureColors.workflows },
    ],
  },
  extras: {
    title: "And Treatflow can do even more",
    subtitle: "Handy extras that make your studio day even easier – already included.",
    items: [
      { icon: BarChart3, label: "Statistics & reports", desc: "Revenue, appointments, clients and top services at a glance." },
      { icon: Mic, label: "AI dictation", desc: "Simply speak your treatment notes – the AI writes them for you." },
      { icon: Languages, label: "Multilingual booking", desc: "Your booking page in multiple languages – every client books in their own language." },
      { icon: Ticket, label: "Discount codes", desc: "Promotions and new-client codes for online booking." },
      { icon: ListChecks, label: "Tasks & team notes", desc: "Tasks with due dates, notes and assignments – with read receipts for your team." },
    ],
  },
  faqs: {
    title: "Frequently asked questions",
    pricingLinkLabel: "See pricing",
    items: [
      {
        q: "What is Treatflow?",
        a: "Treatflow is all-in-one software for salons, spas and aesthetic clinics in Australia: appointment calendar, online booking with GST-aware deposits, digital client records, Privacy Act–ready consent forms, treatment notes, photo documentation and reminders. No commission on bookings.",
      },
      {
        q: "Who is Treatflow for?",
        a: "Treatflow is for Australian beauty salons, spas, aesthetic clinics, laser studios and skin clinics that want fewer no-shows and organised digital workflows.",
      },
      {
        q: "How can I get started in Australia?",
        a: "Self-serve signup is currently available in Germany, Austria and Switzerland. For Australia, request early access and we will get back to you.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. Treatflow is hosted on EU servers, SSL-encrypted and backed up daily. Consent and client workflows are designed with Australia's Privacy Act expectations in mind.",
      },
    ],
  },
  cta: {
    title: "Ready to protect revenue and cut no-shows?",
    subtitle: "Request early access for salons and aesthetic clinics in Australia.",
    note: "Cancel anytime. Privacy Act–ready. With personal support.",
  },
  schemas: {
    software: softwareSchema(
      "en-AU",
      "/au",
      "Salon and aesthetic clinic software for Australia: appointments, GST-aware deposits to reduce no-shows, client records, Privacy Act–ready consent forms and treatment documentation. No commission on bookings."
    ),
    faq: faqSchema("en-AU", [
      {
        q: "What is Treatflow?",
        a: "Treatflow is software for salons, spas and aesthetic clinics in Australia with an appointment calendar, online booking, GST-aware deposits, client records, Privacy Act–ready consent forms, treatment documentation and reminders. No commission on bookings.",
      },
      {
        q: "How can I get started in Australia?",
        a: "Request early access for Australia. Self-serve signup is currently available in Germany, Austria and Switzerland.",
      },
    ]),
  },
};

/* -------------------------------------------------------------------------- */
/* AE – en-AE (UAE)                                                           */
/* -------------------------------------------------------------------------- */

const aeHomePage: HomePageIntlContent = {
  locale: "ae",
  earlyAccessHref: "/ae/early-access",
  pricingHref: "/ae/pricing",
  hero: {
    eyebrow: "For premium salons and spas in the UAE",
    titleLead: "Elevate your",
    titleHighlight: "studio operations",
    titleTail: "across Dubai & Abu Dhabi",
    subtitle:
      "Appointments, client records, consent forms and treatment documentation in one refined app – built for premium salons and spas in Dubai, Abu Dhabi and across the UAE. VAT-aware studio management in AED.",
    primaryCta: "Request early access",
    trustItems: ["No credit card", "Ready in 2 minutes", "Free data migration", "Personal support"],
    studiosLabel: "500+ studios",
    ratingValue: "4.6/5",
    image: {
      ...heroImage,
      alt: "Treatflow calendar on a laptop in a premium Dubai beauty salon",
    },
  },
  aiCapsules: [
    {
      question: "What is Treatflow?",
      answer:
        "Treatflow is premium all-in-one software for salons and spas in the United Arab Emirates. It combines online booking, client records, digital consent forms, treatment notes, photo documentation and reminders. VAT-aware studio management with AED pricing context. Hosted on EU servers. No commission on bookings.",
    },
    {
      question: "Who is Treatflow for?",
      answer:
        "Treatflow is for premium beauty salons, day spas, aesthetic clinics and luxury wellness studios in Dubai, Abu Dhabi and across the UAE that want polished client journeys, fewer no-shows and structured treatment documentation.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "SSL-encrypted" },
    { icon: Server, text: "EU servers" },
    { icon: Shield, text: "Daily backups" },
    { icon: ShieldCheck, text: "VAT-aware operations" },
  ],
  features: {
    title: "The most important features at a glance",
    subtitle: "Everything clearly structured so your team delivers a premium experience.",
    ctaNote: "No credit card. Cancel anytime.",
    items: [
      { icon: CalendarDays, label: "Appointment calendar", desc: "All appointments in a clear daily and weekly view.", color: featureColors.calendar },
      { icon: Users, label: "Online booking", desc: "Clients book themselves; deposits help reduce no-shows.", color: featureColors.booking },
      { icon: ClipboardCheck, label: "Consent forms", desc: "Digital intake and consent forms, completed before the visit.", color: featureColors.consent },
      { icon: FileText, label: "Client records", desc: "Client data, history and notes in one place.", color: featureColors.records },
      { icon: Shield, label: "Treatment documentation", desc: "Document treatments with notes and photos.", color: featureColors.docs },
      { icon: Bell, label: "Reminders", desc: "Automatic SMS and emails reduce no-shows.", color: featureColors.reminders },
      { icon: Workflow, label: "Digital workflows", desc: "From booking to documentation in one system.", color: featureColors.workflows },
    ],
  },
  extras: {
    title: "And Treatflow can do even more",
    subtitle: "Refined extras that make your studio day smoother – already included.",
    items: [
      { icon: BarChart3, label: "Statistics & reports", desc: "Revenue, appointments, clients and top services at a glance." },
      { icon: Mic, label: "AI dictation", desc: "Simply speak your treatment notes – the AI writes them for you." },
      { icon: Languages, label: "Multilingual booking", desc: "Your booking page in multiple languages – ideal for Dubai's international clientele." },
      { icon: Ticket, label: "Discount codes", desc: "Promotions and new-client codes for online booking." },
      { icon: ListChecks, label: "Tasks & team notes", desc: "Tasks with due dates, notes and assignments – with read receipts for your team." },
    ],
  },
  faqs: {
    title: "Frequently asked questions",
    pricingLinkLabel: "See pricing",
    items: [
      {
        q: "What is Treatflow?",
        a: "Treatflow is premium all-in-one software for salons and spas in the UAE: appointment calendar, digital client records, online booking, consent forms, treatment notes, photo documentation and reminders. VAT-aware studio management. No commission on bookings.",
      },
      {
        q: "Who is Treatflow for?",
        a: "Treatflow is for premium beauty salons, spas, aesthetic clinics and wellness studios in Dubai, Abu Dhabi and across the United Arab Emirates.",
      },
      {
        q: "How can I get started in the UAE?",
        a: "Self-serve signup is currently available in Germany, Austria and Switzerland. For the UAE, request early access and we will get back to you.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. Treatflow is hosted on EU servers, SSL-encrypted and backed up daily – with VAT-aware studio operations suited to UAE businesses.",
      },
    ],
  },
  cta: {
    title: "Ready to elevate your salon operations?",
    subtitle: "Request early access for premium salons and spas in Dubai, Abu Dhabi and the UAE.",
    note: "Cancel anytime. VAT-aware. With personal support.",
  },
  schemas: {
    software: softwareSchema(
      "en-AE",
      "/ae",
      "Premium salon and spa software for the UAE: appointments, client records, consent forms and treatment documentation for Dubai and Abu Dhabi. VAT-aware studio management in AED. No commission on bookings."
    ),
    faq: faqSchema("en-AE", [
      {
        q: "What is Treatflow?",
        a: "Treatflow is premium software for salons and spas in the United Arab Emirates with an appointment calendar, digital client records, online booking, consent forms, treatment documentation and reminders. No commission on bookings.",
      },
      {
        q: "How can I get started in the UAE?",
        a: "Request early access for the UAE. Self-serve signup is currently available in Germany, Austria and Switzerland.",
      },
    ]),
  },
};

/* -------------------------------------------------------------------------- */
/* NL – nl-NL                                                                 */
/* -------------------------------------------------------------------------- */

const nlHomePage: HomePageIntlContent = {
  locale: "nl",
  earlyAccessHref: "/nl/early-access",
  pricingHref: "/nl/pricing",
  hero: {
    eyebrow: "Voor kappers, schoonheidssalons & spa's in Nederland",
    titleLead: "Stop met",
    titleHighlight: "papierchaos",
    titleTail: "en no-shows",
    subtitle:
      "Afspraken, klantendossiers, toestemmingsformulieren en behandeldocumentatie in één overzichtelijke app – gemaakt voor kappers, schoonheid en spa in Nederland. Minder no-shows met aanbetalingen.",
    primaryCta: "Vraag early access aan",
    trustItems: ["Geen creditcard", "Klaar in 2 minuten", "Gratis datamigratie", "Persoonlijke support"],
    studiosLabel: "500+ studio's",
    ratingValue: "4.6/5",
    image: {
      ...heroImage,
      alt: "Treatflow-agenda op een laptop in een Nederlands schoonheidssalon",
    },
  },
  aiCapsules: [
    {
      question: "Wat is Treatflow?",
      answer:
        "Treatflow is alles-in-één software voor kappers, schoonheidssalons, spa's en esthetische klinieken in Nederland. Het combineert online boeken, aanbetalingen tegen no-shows, klantendossiers, GDPR-conforme toestemmingsformulieren, behandelnotities en fotodocumentatie. Gehost op EU-servers. Geen commissie op boekingen.",
    },
    {
      question: "Voor wie is Treatflow?",
      answer:
        "Treatflow is voor kapperszaken, schoonheidssalons, spa's, laserstudio's en esthetische praktijken in Nederland die minder no-shows, duidelijke toestemmingsprocessen en gestructureerde behandeldocumentatie willen.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "SSL-versleuteld" },
    { icon: Server, text: "EU-servers (GDPR)" },
    { icon: Shield, text: "Dagelijkse backups" },
    { icon: ShieldCheck, text: "GDPR-klaar" },
  ],
  features: {
    title: "De belangrijkste functies in één oogopslag",
    subtitle: "Alles overzichtelijk gestructureerd zodat jij en je team snel werken.",
    ctaNote: "Geen creditcard. Altijd opzegbaar.",
    items: [
      { icon: CalendarDays, label: "Afspraakagenda", desc: "Alle afspraken in een duidelijke dag- en weekweergave.", color: featureColors.calendar },
      { icon: Users, label: "Online boeken & aanbetalingen", desc: "Klanten boeken zelf; aanbetalingen verminderen no-shows.", color: featureColors.booking },
      { icon: ClipboardCheck, label: "Toestemmingsformulieren", desc: "Digitale anamnese en toestemming, vooraf ingevuld – GDPR-klaar.", color: featureColors.consent },
      { icon: FileText, label: "Klantendossiers", desc: "Klantgegevens, historie en notities op één plek.", color: featureColors.records },
      { icon: Shield, label: "Behandeldocumentatie", desc: "Documenteer behandelingen met notities en foto's.", color: featureColors.docs },
      { icon: Bell, label: "Herinneringen", desc: "Automatische sms en e-mails verminderen no-shows.", color: featureColors.reminders },
      { icon: Workflow, label: "Digitale workflows", desc: "Van boeking tot documentatie in één systeem.", color: featureColors.workflows },
    ],
  },
  extras: {
    title: "En Treatflow kan nog meer",
    subtitle: "Handige extras die je studiodag makkelijker maken – al inbegrepen.",
    items: [
      { icon: BarChart3, label: "Statistieken & rapporten", desc: "Omzet, afspraken, klanten en topservices in één oogopslag." },
      { icon: Mic, label: "AI-dictee", desc: "Spreek je behandelnotities in – de AI schrijft ze voor je." },
      { icon: Languages, label: "Meertalig boeken", desc: "Je boekingspagina in meerdere talen – elke klant boekt in de eigen taal." },
      { icon: Ticket, label: "Kortingscodes", desc: "Acties en codes voor nieuwe klanten bij online boeken." },
      { icon: ListChecks, label: "Taken & teamnotities", desc: "Taken met deadlines, notities en toewijzingen – met leesbevestiging." },
    ],
  },
  faqs: {
    title: "Veelgestelde vragen",
    pricingLinkLabel: "Bekijk prijzen",
    items: [
      {
        q: "Wat is Treatflow?",
        a: "Treatflow is alles-in-één software voor kappers, schoonheidssalons en spa's in Nederland: afspraakagenda, digitale klantendossiers, online boeken met aanbetalingen, GDPR-conforme toestemmingsformulieren, behandelnotities, fotodocumentatie en herinneringen. Geen commissie op boekingen.",
      },
      {
        q: "Voor wie is Treatflow?",
        a: "Treatflow is voor kapperszaken, schoonheidssalons, spa's, laserstudio's en esthetische praktijken in Nederland die gestructureerde digitale workflows willen – van boeking tot behandeldocumentatie.",
      },
      {
        q: "Hoe kan ik starten in Nederland?",
        a: "Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland. Voor Nederland vraag je early access aan – wij nemen contact met je op.",
      },
      {
        q: "Zijn mijn gegevens veilig?",
        a: "Ja. Treatflow draait op EU-servers, is GDPR-conform, SSL-versleuteld en wordt dagelijks geback-upt.",
      },
    ],
  },
  cta: {
    title: "Klaar om je salon met minder moeite te runnen?",
    subtitle: "Vraag early access aan voor kappers, schoonheid en spa in Nederland.",
    note: "Altijd opzegbaar. GDPR-conform. Met persoonlijke support.",
  },
  schemas: {
    software: softwareSchema(
      "nl-NL",
      "/nl",
      "Salonsoftware voor kappers, schoonheidssalons en spa's in Nederland: afspraken, aanbetalingen tegen no-shows, klantendossiers, GDPR-conforme toestemmingsformulieren en behandeldocumentatie. Geen commissie op boekingen."
    ),
    faq: faqSchema("nl-NL", [
      {
        q: "Wat is Treatflow?",
        a: "Treatflow is software voor kappers, schoonheidssalons en spa's in Nederland met een afspraakagenda, digitale klantendossiers, online boeken, aanbetalingen, GDPR-conforme toestemmingsformulieren, behandeldocumentatie en herinneringen. Geen commissie op boekingen.",
      },
      {
        q: "Hoe kan ik starten in Nederland?",
        a: "Vraag early access aan voor Nederland. Directe registratie is momenteel beschikbaar in Duitsland, Oostenrijk en Zwitserland.",
      },
    ]),
  },
};

/* -------------------------------------------------------------------------- */
/* FI – fi-FI                                                                 */
/* -------------------------------------------------------------------------- */

const fiHomePage: HomePageIntlContent = {
  locale: "fi",
  earlyAccessHref: "/fi/early-access",
  pricingHref: "/fi/pricing",
  hero: {
    eyebrow: "Kauneushoitoloille ja estetiikkaklinikoille Suomessa",
    titleLead: "Lopeta",
    titleHighlight: "paperikaaos",
    titleTail: "ja peruuttamatta jääneet ajat",
    subtitle:
      "Ajanvaraus, asiakaskortistot, suostumuslomakkeet ja hoitodokumentointi yhdessä selkeässä sovelluksessa – suunniteltu Suomen kauneushoitoloille ja estetiikkaklinikoille. GDPR-valmis.",
    primaryCta: "Pyydä early access",
    trustItems: ["Ei luottokorttia", "Valmis 2 minuutissa", "Ilmainen datasiirto", "Henkilökohtainen tuki"],
    studiosLabel: "500+ studioa",
    ratingValue: "4.6/5",
    image: {
      ...heroImage,
      alt: "Treatflow-kalenteri kannettavalla tietokoneella suomalaisessa kauneushoitolassa",
    },
  },
  aiCapsules: [
    {
      question: "Mikä on Treatflow?",
      answer:
        "Treatflow on all-in-one-ohjelmisto Suomen kauneushoitoloille, spa-keskuksille ja estetiikkaklinikoille. Se yhdistää verkkoajanvarauksen, asiakaskortistot, GDPR-mukaiset suostumuslomakkeet, hoitomerkinnät ja valokuvadokumentoinnin. Palvelimet EU:ssa. Ei provisiota varauksista.",
    },
    {
      question: "Kenelle Treatflow on tarkoitettu?",
      answer:
        "Treatflow on tarkoitettu Suomen kauneushoitoloille, estetiikkaklinikoille, laserstudioille ja ihonhoitostudioille, jotka haluavat vähemmän hallinnointia, paremman asiakaskokemuksen ja jäsennellyn hoitodokumentoinnin.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "SSL-salattu" },
    { icon: Server, text: "EU-palvelimet (GDPR)" },
    { icon: Shield, text: "Päivittäiset varmuuskopiot" },
    { icon: ShieldCheck, text: "GDPR-valmis" },
  ],
  features: {
    title: "Tärkeimmät ominaisuudet yhdellä silmäyksellä",
    subtitle: "Kaikki selkeästi jäsenneltynä, jotta sinä ja tiimisi työskentelette nopeasti.",
    ctaNote: "Ei luottokorttia. Peru milloin tahansa.",
    items: [
      { icon: CalendarDays, label: "Ajanvarauskalenteri", desc: "Kaikki ajat selkeässä päivä- ja viikkonäkymässä.", color: featureColors.calendar },
      { icon: Users, label: "Verkkoajanvaraus", desc: "Asiakkaat varaavat itse – ennakkomaksut vähentävät no-show'ta.", color: featureColors.booking },
      { icon: ClipboardCheck, label: "Suostumuslomakkeet", desc: "Digitaalinen anamneesi ja suostumus etukäteen – GDPR-valmis.", color: featureColors.consent },
      { icon: FileText, label: "Asiakaskortistot", desc: "Asiakastiedot, historia ja muistiinpanot yhdessä paikassa.", color: featureColors.records },
      { icon: Shield, label: "Hoitodokumentointi", desc: "Dokumentoi hoidot muistiinpanoilla ja valokuvilla.", color: featureColors.docs },
      { icon: Bell, label: "Muistutukset", desc: "Automaattiset SMS- ja sähköpostimuistutukset vähentävät no-show'ta.", color: featureColors.reminders },
      { icon: Workflow, label: "Digitaaliset työnkulut", desc: "Varauksesta dokumentointiin yhdessä järjestelmässä.", color: featureColors.workflows },
    ],
  },
  extras: {
    title: "Ja Treatflow osaa vielä enemmän",
    subtitle: "Käytännöllisiä lisäominaisuuksia arkeen – jo mukana.",
    items: [
      { icon: BarChart3, label: "Tilastot ja raportit", desc: "Liikevaihto, ajat, asiakkaat ja suosituimmat palvelut yhdellä silmäyksellä." },
      { icon: Mic, label: "AI-sanelu", desc: "Sanele hoitomerkinnät – AI kirjoittaa ne puolestasi." },
      { icon: Languages, label: "Monikielinen ajanvaraus", desc: "Varaussivu useilla kielillä – jokainen asiakas varaa omalla kielellään." },
      { icon: Ticket, label: "Alennuskoodit", desc: "Kampanjat ja uuden asiakkaan koodit verkkoajanvaraukseen." },
      { icon: ListChecks, label: "Tehtävät ja tiimimuistiinpanot", desc: "Tehtävät määräajoilla, muistiinpanoilla ja vastuilla – lukukuittauksilla." },
    ],
  },
  faqs: {
    title: "Usein kysytyt kysymykset",
    pricingLinkLabel: "Katso hinnat",
    items: [
      {
        q: "Mikä on Treatflow?",
        a: "Treatflow on all-in-one-ohjelmisto Suomen kauneushoitoloille ja estetiikkaklinikoille: ajanvarauskalenteri, digitaaliset asiakaskortistot, verkkoajanvaraus, GDPR-mukaiset suostumuslomakkeet, hoitomerkinnät, valokuvadokumentointi ja muistutukset. Ei provisiota varauksista.",
      },
      {
        q: "Kenelle Treatflow on tarkoitettu?",
        a: "Treatflow on tarkoitettu Suomen kauneushoitoloille, estetiikkaklinikoille, laserstudioille ja ihonhoitostudioille, jotka haluavat jäsennellyt digitaaliset työnkulut – varauksesta hoitodokumentointiin.",
      },
      {
        q: "Miten aloitan Suomessa?",
        a: "Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä. Suomessa pyydä early access – otamme sinuun yhteyttä.",
      },
      {
        q: "Onko tietoni turvassa?",
        a: "Kyllä. Treatflow toimii EU-palvelimilla, on GDPR-mukainen, SSL-salattu ja varmuuskopioidaan päivittäin.",
      },
    ],
  },
  cta: {
    title: "Valmis pyörittämään hoitolaa vähemmällä vaivalla?",
    subtitle: "Pyydä early access Suomen kauneushoitoloille ja estetiikkaklinikoille.",
    note: "Peru milloin tahansa. GDPR-mukainen. Henkilökohtaisella tuella.",
  },
  schemas: {
    software: softwareSchema(
      "fi-FI",
      "/fi",
      "Kauneushoitolan ohjelmisto Suomeen: ajanvaraus, asiakaskortistot, GDPR-mukaiset suostumuslomakkeet ja hoitodokumentointi. Ei provisiota varauksista."
    ),
    faq: faqSchema("fi-FI", [
      {
        q: "Mikä on Treatflow?",
        a: "Treatflow on ohjelmisto Suomen kauneushoitoloille ja estetiikkaklinikoille ajanvarauskalenterilla, digitaalisilla asiakaskortistoilla, verkkoajanvarauksella, GDPR-mukaisilla suostumuslomakkeilla, hoitodokumentoinnilla ja muistutuksilla. Ei provisiota varauksista.",
      },
      {
        q: "Miten aloitan Suomessa?",
        a: "Pyydä early access Suomelle. Suora rekisteröityminen on tällä hetkellä saatavilla Saksassa, Itävallassa ja Sveitsissä.",
      },
    ]),
  },
};

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const countryHomePages: Record<CountryHomeMarket, HomePageIntlContent> = {
  us: usHomePage,
  uk: ukHomePage,
  ie: ieHomePage,
  ca: caHomePage,
  au: auHomePage,
  ae: aeHomePage,
  nl: nlHomePage,
  fi: fiHomePage,
};

export function getCountryHomePage(market: CountryHomeMarket): HomePageIntlContent {
  return countryHomePages[market];
}

export const countryHomeMeta: Record<
  CountryHomeMarket,
  { title: string; description: string }
> = {
  us: {
    title: "Salon & Med Spa Software for the United States",
    description:
      "All-in-one software for beauty salons and med spas in the United States. Appointments, deposits to cut no-shows, HIPAA-aware consent forms and treatment documentation. No booking commissions. Request early access.",
  },
  uk: {
    title: "Salon & Aesthetic Clinic Software for the UK",
    description:
      "Software for salons, spas and aesthetic clinics in the United Kingdom. Appointments, GDPR-ready consent forms, client records and treatment documentation. Organised for UK studios. Request early access.",
  },
  ie: {
    title: "Salon & Aesthetic Clinic Software for Ireland",
    description:
      "Software for salons, spas and aesthetic clinics in Ireland. Appointments, GDPR-ready consent forms, client records and treatment documentation. Euro pricing. Request early access.",
  },
  ca: {
    title: "Salon & Aesthetic Clinic Software for Canada",
    description:
      "Software for beauty salons and aesthetic clinics in Canada. Appointments, deposits, PIPEDA-aware consent forms and treatment documentation. No booking commissions. Request early access.",
  },
  au: {
    title: "Salon & Aesthetic Clinic Software for Australia",
    description:
      "Software for salons, spas and aesthetic clinics in Australia. Appointments, GST-aware deposits to cut no-shows, Privacy Act–ready consent and treatment documentation. Request early access.",
  },
  ae: {
    title: "Premium Salon & Spa Software for the UAE",
    description:
      "Premium software for salons and spas in Dubai, Abu Dhabi and the UAE. Appointments, client records, consent forms and treatment documentation. VAT-aware studio management in AED. Request early access.",
  },
  nl: {
    title: "Salonsoftware voor kappers, schoonheid & spa in Nederland",
    description:
      "Alles-in-één software voor kappers, schoonheidssalons en spa's in Nederland. Afspraken, aanbetalingen tegen no-shows, GDPR-conforme toestemmingsformulieren en behandeldocumentatie. Vraag early access aan.",
  },
  fi: {
    title: "Kauneushoitolan ohjelmisto Suomeen",
    description:
      "All-in-one-ohjelmisto Suomen kauneushoitoloille ja estetiikkaklinikoille. Ajanvaraus, asiakaskortistot, GDPR-mukaiset suostumuslomakkeet ja hoitodokumentointi. Pyydä early access.",
  },
};
