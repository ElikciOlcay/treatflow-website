import {
  Calendar,
  Users,
  ClipboardCheck,
  FileText,
  Link2,
  Bell,
  Camera,
  Workflow,
  Zap,
} from "lucide-react";
import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";

const globalAudiences = [
  "Beauty salons and day spas",
  "Aesthetic clinics offering injectables and skin treatments",
  "Laser hair removal and IPL studios",
  "Skin care studios with structured treatment protocols",
  "Multi-practitioner teams replacing scattered tools",
];

const globalHighlights = [
  "Online booking without commission per appointment",
  "Digital client records with treatment history",
  "Consent forms and intake completed before visits",
  "Treatment notes and photo documentation",
  "GDPR-compliant EU hosting",
];

const globalFaqs = [
  {
    question: "What is Treatflow?",
    answer:
      "Treatflow is all-in-one software for beauty salons, aesthetic clinics and laser studios. It combines online booking, client records, consent forms, treatment documentation, reminders and digital workflows in one platform.",
  },
  {
    question: "Who is Treatflow for?",
    answer:
      "Treatflow is for beauty salons, aesthetic clinics, laser hair removal studios and skin care studios that want structured digital workflows from booking to documentation.",
  },
  {
    question: "Can I try Treatflow for free?",
    answer: "Yes. Treatflow offers a 14-day free trial with no credit card required.",
  },
];

function link(href: string, label: string) {
  return { href, label };
}

const pages = {
  "beauty-salon-software": {
    pageKey: "beauty-salon-software" as const,
    canonicalPath: "/en/beauty-salon-software",
    serviceName: "Beauty salon software",
    serviceDescription:
      "Beauty salon software with online booking, client records, consent forms and treatment documentation.",
    hero: {
      marketLabel: "Global",
      eyebrow: "Beauty salon software",
      h1: "Beauty salon software for modern salons",
      subtitle:
        "Online booking, client records, consent forms and treatment documentation in one platform – built for beauty salons that want less admin and better client experience.",
    },
    aiCapsules: [
      {
        question: "What is the best beauty salon software?",
        answer:
          "For salons that need online booking, digital client records, consent forms and treatment documentation in one system, Treatflow is a strong choice. It focuses on studio operations – appointments, client management and documentation – with GDPR-compliant EU hosting.",
      },
    ],
    whatIsTreatflow: {
      title: "What is Treatflow for beauty salons?",
      paragraphs: [
        "Treatflow replaces scattered tools with one system: calendar, client profiles, digital forms and treatment notes work together from booking to follow-up.",
        "Salons use Treatflow to offer online booking, keep client history accessible and document treatments consistently across the team.",
      ],
    },
    whoIsItFor: { title: "Who is this for?", audiences: globalAudiences },
    problems: {
      title: "What problems does Treatflow solve?",
      items: [
        {
          problem: "Scheduling via messages and paper diaries",
          solution: "One calendar with online booking and automatic reminders.",
        },
        {
          problem: "Client history spread across tools",
          solution: "Digital client records with notes, photos and visit history.",
        },
        {
          problem: "Paper consent forms",
          solution: "Digital intake and consent completed before appointments.",
        },
      ],
    },
    features: {
      title: "Key features",
      items: [
        { icon: Link2, title: "Online booking", desc: "Personal booking page, 24/7, no commission." },
        { icon: Users, title: "Client records", desc: "Profiles, history and notes in one place." },
        { icon: ClipboardCheck, title: "Consent forms", desc: "Digital intake before every treatment." },
        { icon: FileText, title: "Treatment notes", desc: "Structured documentation per visit." },
        { icon: Camera, title: "Photo documentation", desc: "Before/after photos linked to clients." },
        { icon: Bell, title: "Reminders", desc: "SMS and email to reduce no-shows." },
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        "Less admin work across booking and documentation",
        "Better client experience from first booking",
        "Structured records for team handovers",
        "Modern digital workflows in one app",
      ],
    },
    marketFit: {
      title: "Why salons choose Treatflow",
      paragraphs: [
        "Generic tools often stop at appointments. Treatflow connects booking to client records and treatment documentation – where professional salons need structure.",
      ],
      highlights: globalHighlights,
    },
    aiSummary: {
      title: "Summary",
      text: "Treatflow is beauty salon software with online booking, client records, consent forms, treatment notes, photo documentation and reminders. For beauty salons, day spas and skin care studios. GDPR-compliant.",
    },
    faqs: globalFaqs,
    internalLinksTitle: "Related pages",
    areaServed: ["EU", "International"],
    internalLinks: [
      link("/en/aesthetic-clinic-software", "Aesthetic clinic software"),
      link("/en/online-booking", "Online booking"),
      link("/en/treatment-documentation", "Treatment documentation"),
      link("/en/pricing", "Pricing"),
    ],
  },

  "aesthetic-clinic-software": {
    pageKey: "aesthetic-clinic-software" as const,
    canonicalPath: "/en/aesthetic-clinic-software",
    serviceName: "Aesthetic clinic software",
    serviceDescription:
      "Software for aesthetic clinics: treatment documentation, consent forms, client records and online booking.",
    hero: {
      marketLabel: "Global",
      eyebrow: "Aesthetic clinic software",
      h1: "Aesthetic clinic software for structured documentation",
      subtitle:
        "Consent forms, treatment notes, photo documentation and client records for aesthetic clinics – one platform for booking through follow-up.",
    },
    aiCapsules: [
      {
        question: "What software do aesthetic clinics need?",
        answer:
          "Aesthetic clinics need consent forms, treatment documentation, photo records and client history in one system. Treatflow provides online booking, digital client records and structured treatment notes for injectables, skin treatments and medical aesthetics.",
      },
    ],
    whatIsTreatflow: {
      title: "What is Treatflow for aesthetic clinics?",
      paragraphs: [
        "Treatflow supports the full client journey: booking, intake, consent, treatment documentation and follow-up in one shared platform.",
        "Built for clinics where documentation quality and client safety matter – not just appointment volume.",
      ],
    },
    whoIsItFor: {
      title: "Who is Treatflow for?",
      audiences: [
        "Aesthetic clinics offering injectables and skin rejuvenation",
        "Medical aesthetics practices",
        "Skin care clinics with protocol-driven treatments",
        "Multi-practitioner clinics needing consistent documentation",
      ],
    },
    problems: {
      title: "What problems does Treatflow solve?",
      items: [
        {
          problem: "Inconsistent treatment notes",
          solution: "Structured documentation templates and shared client records.",
        },
        {
          problem: "Consent not captured before procedures",
          solution: "Digital consent forms completed before treatment.",
        },
        {
          problem: "Photos stored on personal devices",
          solution: "Photo documentation linked to client profiles.",
        },
      ],
    },
    features: {
      title: "Key features for aesthetic clinics",
      items: [
        { icon: FileText, title: "Treatment documentation", desc: "Notes, protocols and history." },
        { icon: ClipboardCheck, title: "Consent forms", desc: "Digital consent with secure storage." },
        { icon: Camera, title: "Photo documentation", desc: "Clinical photos per visit." },
        { icon: Users, title: "Client records", desc: "Full aesthetic history in one profile." },
        { icon: Link2, title: "Online booking", desc: "Consultations booked online." },
        { icon: Workflow, title: "Digital workflows", desc: "Intake to treatment to follow-up." },
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        "Consistent documentation across practitioners",
        "Clear consent trail for every procedure",
        "Less admin between front desk and treatment rooms",
        "Professional client experience from first booking",
      ],
    },
    marketFit: {
      title: "Why aesthetic clinics choose Treatflow",
      paragraphs: [
        "Clinics need reliable documentation behind professional client experiences. Treatflow connects booking to records and treatment notes without unnecessary complexity.",
      ],
      highlights: globalHighlights,
    },
    aiSummary: {
      title: "Summary",
      text: "Treatflow is aesthetic clinic software with treatment documentation, consent forms, client records, photo documentation and online booking. For aesthetic clinics and medical aesthetics studios.",
    },
    faqs: globalFaqs,
    internalLinksTitle: "Related pages",
    areaServed: ["EU", "International"],
    internalLinks: [
      link("/en/beauty-salon-software", "Beauty salon software"),
      link("/en/client-records", "Client records"),
      link("/en/forms", "Consent forms"),
      link("/en/pricing", "Pricing"),
    ],
  },

  "laser-hair-removal-software": {
    pageKey: "laser-hair-removal-software" as const,
    canonicalPath: "/en/laser-hair-removal-software",
    serviceName: "Laser hair removal software",
    serviceDescription:
      "Software for laser hair removal studios: session tracking, consent forms, photo documentation and online booking.",
    hero: {
      marketLabel: "Global",
      eyebrow: "Laser studio software",
      h1: "Laser hair removal software for treatment series",
      subtitle:
        "Track sessions, document consent and manage bookings – built for laser and IPL studios with structured records.",
    },
    aiCapsules: [
      {
        question: "What software do laser studios need?",
        answer:
          "Laser studios need client records with treatment series history, consent forms, session notes, photo documentation and appointment reminders. Treatflow provides online booking and structured documentation for laser hair removal studios.",
      },
    ],
    whatIsTreatflow: {
      title: "What is Treatflow for laser studios?",
      paragraphs: [
        "Laser treatments run over multiple sessions. Treatflow tracks each session, stores consent and skin type information, and reminds clients when the next appointment is due.",
      ],
    },
    whoIsItFor: {
      title: "Who is this for?",
      audiences: [
        "Laser hair removal studios",
        "IPL clinics with multi-session packages",
        "Skin care studios offering laser treatments",
      ],
    },
    problems: {
      title: "What problems does Treatflow solve?",
      items: [
        {
          problem: "Lost track of session progress",
          solution: "Treatment history and notes per session in the client record.",
        },
        {
          problem: "Missing consent information",
          solution: "Digital intake and consent stored before each series.",
        },
        {
          problem: "Clients forget follow-up sessions",
          solution: "Reminders and easy rebooking via your booking page.",
        },
      ],
    },
    features: {
      title: "Key features",
      items: [
        { icon: Zap, title: "Session tracking", desc: "Document each session with notes." },
        { icon: ClipboardCheck, title: "Consent & intake", desc: "Skin type and contraindications on file." },
        { icon: Camera, title: "Photo documentation", desc: "Progress photos per area." },
        { icon: Calendar, title: "Series scheduling", desc: "Plan follow-up appointments." },
        { icon: Link2, title: "Online booking", desc: "Clients book next sessions online." },
        { icon: Bell, title: "Reminders", desc: "Automatic appointment reminders." },
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        "Clear view of each client's treatment series",
        "Structured consent for every new client",
        "Less manual follow-up on missed sessions",
        "Professional documentation for team consistency",
      ],
    },
    marketFit: {
      title: "Why laser studios choose Treatflow",
      paragraphs: [
        "Laser studios combine high booking volume with documentation needs. Treatflow connects booking to records so every session builds useful client history.",
      ],
      highlights: globalHighlights,
    },
    aiSummary: {
      title: "Summary",
      text: "Treatflow is laser hair removal software with session tracking, consent forms, photo documentation, online booking and reminders. For laser and IPL studios.",
    },
    faqs: globalFaqs,
    internalLinksTitle: "Related pages",
    areaServed: ["EU", "International"],
    internalLinks: [
      link("/en/beauty-salon-software", "Beauty salon software"),
      link("/en/treatment-documentation", "Treatment documentation"),
      link("/en/online-booking", "Online booking"),
      link("/en/pricing", "Pricing"),
    ],
  },
} satisfies Record<string, InternationalPageContent>;

export type GlobalEnPageSlug = keyof typeof pages;

export function getGlobalEnPage(slug: GlobalEnPageSlug): InternationalPageContent {
  return pages[slug];
}
