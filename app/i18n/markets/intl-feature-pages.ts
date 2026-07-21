import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import type { SeoPageKey } from "@/app/i18n/seo";
import {
  Calendar,
  ClipboardCheck,
  FileText,
  Link2,
  Users,
  Sparkles,
} from "lucide-react";

type Lang = "es" | "it" | "fr";

type FeatureDef = {
  pageKey: SeoPageKey;
  slug: Record<Lang, string>;
  icon: typeof Calendar;
  titles: Record<Lang, string>;
  descriptions: Record<Lang, string>;
  h1: Record<Lang, string>;
  subtitle: Record<Lang, string>;
};

const features: FeatureDef[] = [
  {
    pageKey: "appointment-calendar",
    slug: {
      es: "calendario-citas",
      it: "calendario-appuntamenti",
      fr: "calendrier-rendez-vous",
    },
    icon: Calendar,
    titles: {
      es: "Calendario de citas para salones de belleza",
      it: "Calendario appuntamenti per centri estetici",
      fr: "Calendrier de rendez-vous pour instituts de beauté",
    },
    descriptions: {
      es: "Calendario digital con vistas diaria, semanal y mensual. Evita dobles reservas y organiza a tu equipo.",
      it: "Calendario digitale con viste giornaliera, settimanale e mensile. Evita doppie prenotazioni e organizza il team.",
      fr: "Calendrier numérique avec vues journalière, hebdomadaire et mensuelle. Évite les doubles réservations.",
    },
    h1: {
      es: "Calendario de citas para tu salón",
      it: "Calendario appuntamenti per il tuo centro",
      fr: "Calendrier de rendez-vous pour votre institut",
    },
    subtitle: {
      es: "Planifica citas, pausas y bloqueos en un solo calendario – claro para todo el equipo.",
      it: "Pianifica appuntamenti, pause e blocchi in un unico calendario – chiaro per tutto il team.",
      fr: "Planifiez rendez-vous, pauses et blocages dans un seul calendrier – clair pour toute l'équipe.",
    },
  },
  {
    pageKey: "online-booking",
    slug: {
      es: "reservas-online",
      it: "prenotazioni-online",
      fr: "reservation-en-ligne",
    },
    icon: Link2,
    titles: {
      es: "Reservas online para salones de belleza",
      it: "Prenotazioni online per centri estetici",
      fr: "Réservation en ligne pour instituts de beauté",
    },
    descriptions: {
      es: "Tu propio enlace de reserva 24/7 sin comisiones por cita.",
      it: "Il tuo link di prenotazione 24/7 senza commissioni.",
      fr: "Votre lien de réservation 24/7 sans commission par rendez-vous.",
    },
    h1: {
      es: "Reservas online sin comisiones",
      it: "Prenotazioni online senza commissioni",
      fr: "Réservation en ligne sans commission",
    },
    subtitle: {
      es: "Tus clientas reservan cuando quieran – tú mantienes el control y tus datos.",
      it: "Le clienti prenotano quando vogliono – tu mantieni il controllo e i tuoi dati.",
      fr: "Vos clientes réservent quand elles veulent – vous gardez le contrôle et vos données.",
    },
  },
  {
    pageKey: "client-records",
    slug: { es: "fichas-clientes", it: "schede-clienti", fr: "fiches-clients" },
    icon: Users,
    titles: {
      es: "Fichas de clientes digitales",
      it: "Schede clienti digitali",
      fr: "Fiches clients numériques",
    },
    descriptions: {
      es: "Historial de tratamientos, fotos, notas y formularios en una ficha digital segura.",
      it: "Storico trattamenti, foto, note e moduli in una scheda digitale sicura.",
      fr: "Historique des soins, photos, notes et formulaires dans une fiche sécurisée.",
    },
    h1: {
      es: "Fichas de clientes para estética",
      it: "Schede clienti per l'estetica",
      fr: "Fiches clients pour l'esthétique",
    },
    subtitle: {
      es: "Toda la información de la clienta en un solo lugar.",
      it: "Tutte le informazioni della cliente in un unico posto.",
      fr: "Toutes les informations de la cliente au même endroit.",
    },
  },
  {
    pageKey: "forms",
    slug: { es: "formularios", it: "moduli", fr: "formulaires" },
    icon: ClipboardCheck,
    titles: {
      es: "Formularios de anamnesis y consentimiento",
      it: "Moduli di anamnesi e consenso",
      fr: "Formulaires d'anamnèse et de consentement",
    },
    descriptions: {
      es: "Formularios digitales con firma. Envíalos antes de la cita.",
      it: "Moduli digitali con firma. Inviali prima dell'appuntamento.",
      fr: "Formulaires numériques avec signature. Envoyez-les avant le rendez-vous.",
    },
    h1: {
      es: "Formularios digitales con firma",
      it: "Moduli digitali con firma",
      fr: "Formulaires numériques avec signature",
    },
    subtitle: {
      es: "Anamnesis, consentimientos y documentos – sin papel.",
      it: "Anamnesi, consensi e documenti – senza carta.",
      fr: "Anamnèse, consentements et documents – sans papier.",
    },
  },
  {
    pageKey: "treatment-documentation",
    slug: {
      es: "documentacion-tratamientos",
      it: "documentazione-trattamenti",
      fr: "documentation-soins",
    },
    icon: FileText,
    titles: {
      es: "Documentación de tratamientos",
      it: "Documentazione trattamenti",
      fr: "Documentation des soins",
    },
    descriptions: {
      es: "Documenta tratamientos, parámetros y fotos de forma profesional.",
      it: "Documenta trattamenti, parametri e foto in modo professionale.",
      fr: "Documentez soins, paramètres et photos de façon professionnelle.",
    },
    h1: {
      es: "Documentación profesional de tratamientos",
      it: "Documentazione professionale dei trattamenti",
      fr: "Documentation professionnelle des soins",
    },
    subtitle: {
      es: "Registra cada sesión con claridad.",
      it: "Registra ogni seduta con chiarezza.",
      fr: "Enregistrez chaque séance clairement.",
    },
  },
  {
    pageKey: "beauty-salon-software",
    slug: {
      es: "software-salon-belleza",
      it: "software-centro-estetico",
      fr: "logiciel-institut-beaute",
    },
    icon: Sparkles,
    titles: {
      es: "Software para salones de belleza",
      it: "Software per centri estetici",
      fr: "Logiciel pour instituts de beauté",
    },
    descriptions: {
      es: "Software todo en uno: agenda, reservas, fichas, formularios y documentación.",
      it: "Software all-in-one: calendario, prenotazioni, schede, moduli e documentazione.",
      fr: "Logiciel tout-en-un : agenda, réservations, fiches, formulaires et documentation.",
    },
    h1: {
      es: "Software para salones de belleza",
      it: "Software per centri estetici",
      fr: "Logiciel pour instituts de beauté",
    },
    subtitle: {
      es: "La alternativa al marketplace: software propio, sin comisión.",
      it: "L'alternativa al marketplace: software tuo, senza commissioni.",
      fr: "L'alternative au marketplace : votre logiciel, sans commission.",
    },
  },
];

const ui = {
  es: {
    request: "Solicitar acceso anticipado",
    bottomTitle: "¿Quieres Treatflow en tu país?",
    bottomText:
      "Solicita acceso anticipado. El registro directo está disponible en Alemania, Austria y Suiza.",
    trust: "Acceso anticipado disponible",
    related: "Páginas relacionadas",
    whatTitle: "Cómo ayuda Treatflow",
    whoTitle: "Ideal para",
    problemsTitle: "Retos habituales",
    featuresTitle: "Lo esencial",
    benefitsTitle: "Por qué Treatflow",
    marketTitle: "Expansión internacional",
    aiTitle: "En resumen",
    marketLabel: "España & LATAM",
    audiences: ["Salones de belleza", "Clínicas estéticas", "Estudios de láser"],
    problem: "Procesos manuales lentos",
    benefits: ["Sin comisión", "RGPD / UE", "Datos tuyos", "Acceso anticipado"],
    highlights: ["Formulario de acceso", "Acceso anticipado", "Soporte cercano"],
    howStart: "¿Cómo empiezo?",
    howAnswer: (early: string) => `Solicita acceso anticipado en ${early}.`,
    pricingPath: "/es/precios",
    pricingLabel: "Precios",
    early: "/es/acceso-anticipado",
    areaServed: ["ES", "MX", "AR", "EU"],
  },
  it: {
    request: "Richiedi accesso anticipato",
    bottomTitle: "Vuoi Treatflow nel tuo Paese?",
    bottomText:
      "Richiedi l'accesso anticipato. La registrazione diretta è disponibile in Germania, Austria e Svizzera.",
    trust: "Accesso anticipato disponibile",
    related: "Pagine correlate",
    whatTitle: "Come aiuta Treatflow",
    whoTitle: "Ideale per",
    problemsTitle: "Sfide comuni",
    featuresTitle: "L'essenziale",
    benefitsTitle: "Perché Treatflow",
    marketTitle: "Espansione internazionale",
    aiTitle: "In breve",
    marketLabel: "Italia",
    audiences: ["Centri estetici", "Cliniche estetiche", "Studi laser"],
    problem: "Processi manuali lenti",
    benefits: ["Nessuna commissione", "GDPR / UE", "Dati tuoi", "Accesso anticipato"],
    highlights: ["Modulo di accesso", "Accesso anticipato", "Supporto diretto"],
    howStart: "Come inizio?",
    howAnswer: (early: string) => `Richiedi l'accesso anticipato su ${early}.`,
    pricingPath: "/it/prezzi",
    pricingLabel: "Prezzi",
    early: "/it/accesso-anticipato",
    areaServed: ["IT", "EU"],
  },
  fr: {
    request: "Demander un accès anticipé",
    bottomTitle: "Vous voulez Treatflow dans votre pays ?",
    bottomText:
      "Demandez un accès anticipé. L'inscription directe est disponible en Allemagne, Autriche et Suisse.",
    trust: "Accès anticipé disponible",
    related: "Pages associées",
    whatTitle: "Comment Treatflow aide",
    whoTitle: "Idéal pour",
    problemsTitle: "Défis courants",
    featuresTitle: "L'essentiel",
    benefitsTitle: "Pourquoi Treatflow",
    marketTitle: "Expansion internationale",
    aiTitle: "En résumé",
    marketLabel: "France & francophonie",
    audiences: ["Instituts de beauté", "Cliniques esthétiques", "Centres laser"],
    problem: "Processus manuels lents",
    benefits: ["Sans commission", "RGPD / UE", "Vos données", "Accès anticipé"],
    highlights: ["Formulaire d'accès", "Accès anticipé", "Support dédié"],
    howStart: "Comment commencer ?",
    howAnswer: (early: string) => `Demandez un accès anticipé sur ${early}.`,
    pricingPath: "/fr/tarifs",
    pricingLabel: "Tarifs",
    early: "/fr/acces-anticipe",
    areaServed: ["FR", "BE", "LU", "CA", "EU"],
  },
} as const;

export function buildIntlFeatureContent(
  lang: Lang,
  pageKey: SeoPageKey
): InternationalPageContent | null {
  const def = features.find((f) => f.pageKey === pageKey);
  if (!def) return null;
  const t = ui[lang];
  const path = `/${lang}/${def.slug[lang]}`;

  return {
    pageKey,
    locale: lang,
    canonicalPath: path,
    serviceName: def.titles[lang],
    serviceDescription: def.descriptions[lang],
    areaServed: [...t.areaServed],
    ctaPrimaryLabel: t.request,
        ctaBottomTitle: t.bottomTitle,
    ctaBottomText: t.bottomText,
    trustTrialLabel: t.trust,
    hero: {
      marketLabel: t.marketLabel,
      eyebrow: "Treatflow",
      h1: def.h1[lang],
      subtitle: def.subtitle[lang],
    },
    aiCapsules: [
      {
        question: `${def.titles[lang]} ?`,
        answer: `${def.descriptions[lang]} Treatflow. ${t.bottomText}`,
      },
    ],
    whatIsTreatflow: {
      title: t.whatTitle,
      paragraphs: [def.descriptions[lang]],
    },
    whoIsItFor: {
      title: t.whoTitle,
      audiences: [...t.audiences],
    },
    problems: {
      title: t.problemsTitle,
      items: [{ problem: t.problem, solution: def.subtitle[lang] }],
    },
    features: {
      title: t.featuresTitle,
      items: [
        {
          icon: def.icon,
          title: def.h1[lang],
          desc: def.descriptions[lang],
        },
      ],
    },
    benefits: {
      title: t.benefitsTitle,
      items: [...t.benefits],
    },
    marketFit: {
      title: t.marketTitle,
      paragraphs: [t.bottomText],
      highlights: [...t.highlights],
    },
    aiSummary: {
      title: t.aiTitle,
      text: `${def.titles[lang]}. ${def.descriptions[lang]} URL: https://www.treatflow.io${path}. Early access: https://www.treatflow.io${t.early}`,
    },
    faqs: [
      {
        question: t.howStart,
        answer: t.howAnswer(t.early),
      },
    ],
    internalLinks: [
      { href: t.early, label: t.request },
      { href: t.pricingPath, label: t.pricingLabel },
      { href: `/${lang}`, label: "Treatflow" },
    ],
    internalLinksTitle: t.related,
  };
}

export function listIntlFeatureKeys(): SeoPageKey[] {
  return features.map((f) => f.pageKey);
}
