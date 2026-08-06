import {
  Bell,
  Calendar,
  Camera,
  ClipboardCheck,
  FileText,
  Link2,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import type { SeoPageKey } from "@/app/i18n/seo";
import {
  industrySlugs,
  listIndustryKeys,
  type IndustryLocale,
  type IndustryPageKey,
} from "@/app/i18n/industry-slugs";

export type { IndustryPageKey, IndustryLocale };
export { industrySlugs, listIndustryKeys };

const featureSlugs = {
  "online-booking": {
    en: "online-booking",
    es: "reservas-online",
    it: "prenotazioni-online",
    fr: "reservation-en-ligne",
  },
  "client-records": {
    en: "client-records",
    es: "fichas-clientes",
    it: "schede-clienti",
    fr: "fiches-clients",
  },
  forms: {
    en: "forms",
    es: "formularios",
    it: "moduli",
    fr: "formulaires",
  },
  "treatment-documentation": {
    en: "treatment-documentation",
    es: "documentacion-tratamientos",
    it: "documentazione-trattamenti",
    fr: "documentation-soins",
  },
  pricing: {
    en: "pricing",
    es: "precios",
    it: "prezzi",
    fr: "tarifs",
  },
} as const;

type FeatureSlugKey = keyof typeof featureSlugs;

const industryLabels: Record<IndustryPageKey, Record<IndustryLocale, string>> = {
  "beauty-salon-software": {
    en: "Beauty salon software",
    es: "Software para salones de belleza",
    it: "Software per centri estetici",
    fr: "Logiciel pour instituts de beauté",
  },
  "aesthetic-clinic-software": {
    en: "Aesthetic clinic software",
    es: "Software para clínicas estéticas",
    it: "Software per cliniche estetiche",
    fr: "Logiciel pour cliniques esthétiques",
  },
  "laser-hair-removal-software": {
    en: "Laser hair removal software",
    es: "Software de depilación láser",
    it: "Software per epilazione laser",
    fr: "Logiciel d'épilation laser",
  },
  "permanent-makeup-software": {
    en: "Permanent makeup software",
    es: "Software de maquillaje permanente",
    it: "Software per trucco permanente",
    fr: "Logiciel de maquillage permanent",
  },
  "tattoo-studio-software": {
    en: "Tattoo studio software",
    es: "Software para estudios de tatuajes",
    it: "Software per studi di tatuaggi",
    fr: "Logiciel pour salons de tatouage",
  },
  "nail-salon-software": {
    en: "Nail salon software",
    es: "Software para salones de uñas",
    it: "Software per centri unghie",
    fr: "Logiciel pour salons d'ongles",
  },
  "lash-studio-software": {
    en: "Lash studio software",
    es: "Software de extensión de pestañas",
    it: "Software per extension ciglia",
    fr: "Logiciel d'extension de cils",
  },
  "spa-wellness-software": {
    en: "Spa & wellness software",
    es: "Software spa y wellness",
    it: "Software spa e wellness",
    fr: "Logiciel spa et wellness",
  },
  "massage-software": {
    en: "Massage studio software",
    es: "Software para centros de masajes",
    it: "Software per centri massaggi",
    fr: "Logiciel pour cabinets de massage",
  },
};

const featureLabels: Record<FeatureSlugKey, Record<IndustryLocale, string>> = {
  "online-booking": {
    en: "Online booking",
    es: "Reservas online",
    it: "Prenotazioni online",
    fr: "Réservation en ligne",
  },
  "client-records": {
    en: "Client records",
    es: "Fichas de clientes",
    it: "Schede clienti",
    fr: "Fiches clients",
  },
  forms: {
    en: "Consent forms",
    es: "Formularios de consentimiento",
    it: "Moduli di consenso",
    fr: "Formulaires de consentement",
  },
  "treatment-documentation": {
    en: "Treatment documentation",
    es: "Documentación de tratamientos",
    it: "Documentazione trattamenti",
    fr: "Documentation des soins",
  },
  pricing: {
    en: "Pricing",
    es: "Precios",
    it: "Prezzi",
    fr: "Tarifs",
  },
};

const localeShell: Record<
  IndustryLocale,
  {
    marketLabel: string;
    areaServed: string[];
    ctaPrimaryLabel: string;
    ctaBottomTitle: string;
    ctaBottomText: string;
    trustTrialLabel: string;
    internalLinksTitle: string;
    problemsTitle: string;
    featuresTitle: string;
    benefitsTitle: string;
    whoTitle: string;
    summaryTitle: string;
  }
> = {
  en: {
    marketLabel: "Global",
    areaServed: ["EU", "International"],
    ctaPrimaryLabel: "Request early access",
    ctaBottomTitle: "Ready to modernise your studio?",
    ctaBottomText:
      "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.",
    trustTrialLabel: "Early access available",
    internalLinksTitle: "Related pages",
    problemsTitle: "What problems does Treatflow solve?",
    featuresTitle: "Key features",
    benefitsTitle: "Benefits",
    whoTitle: "Who is this for?",
    summaryTitle: "Summary",
  },
  es: {
    marketLabel: "España & LATAM",
    areaServed: ["ES", "MX", "AR", "EU"],
    ctaPrimaryLabel: "Solicitar acceso anticipado",
    ctaBottomTitle: "¿Listo para digitalizar tu salón?",
    ctaBottomText:
      "Solicita acceso anticipado para tu país. El registro directo está disponible actualmente en Alemania, Austria y Suiza.",
    trustTrialLabel: "Acceso anticipado disponible",
    internalLinksTitle: "Páginas relacionadas",
    problemsTitle: "¿Qué problemas resuelve Treatflow?",
    featuresTitle: "Funciones principales",
    benefitsTitle: "Beneficios",
    whoTitle: "¿Para quién es?",
    summaryTitle: "Resumen",
  },
  it: {
    marketLabel: "Italia",
    areaServed: ["IT", "EU"],
    ctaPrimaryLabel: "Richiedi accesso anticipato",
    ctaBottomTitle: "Pronto a digitalizzare il tuo centro?",
    ctaBottomText:
      "Richiedi l'accesso anticipato per il tuo Paese. La registrazione diretta è attualmente disponibile in Germania, Austria e Svizzera.",
    trustTrialLabel: "Accesso anticipato disponibile",
    internalLinksTitle: "Pagine correlate",
    problemsTitle: "Quali problemi risolve Treatflow?",
    featuresTitle: "Funzionalità principali",
    benefitsTitle: "Vantaggi",
    whoTitle: "Per chi è pensato?",
    summaryTitle: "Riepilogo",
  },
  fr: {
    marketLabel: "France & francophonie",
    areaServed: ["FR", "BE", "LU", "CA", "EU"],
    ctaPrimaryLabel: "Demander un accès anticipé",
    ctaBottomTitle: "Prêt à digitaliser votre institut ?",
    ctaBottomText:
      "Demandez un accès anticipé pour votre pays. L'inscription directe est actuellement disponible en Allemagne, Autriche et Suisse.",
    trustTrialLabel: "Accès anticipé disponible",
    internalLinksTitle: "Pages associées",
    problemsTitle: "Quels problèmes Treatflow résout-il ?",
    featuresTitle: "Fonctionnalités clés",
    benefitsTitle: "Avantages",
    whoTitle: "Pour qui ?",
    summaryTitle: "Résumé",
  },
};

type PageBody = {
  serviceName: string;
  serviceDescription: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  aiCapsules: { question: string; answer: string }[];
  whatTitle: string;
  whatParas: string[];
  audiences: string[];
  problems: { problem: string; solution: string }[];
  features: InternationalPageContent["features"]["items"];
  benefits: string[];
  marketTitle: string;
  marketParas: string[];
  highlights: string[];
  aiSummary: string;
  faqs: { question: string; answer: string }[];
  siblingKeys: IndustryPageKey[];
  featureKeys: FeatureSlugKey[];
};

function buildPage(
  locale: IndustryLocale,
  key: IndustryPageKey,
  body: PageBody
): InternationalPageContent {
  const shell = localeShell[locale];
  const slug = industrySlugs[key][locale];
  const canonicalPath = `/${locale}/${slug}`;

  const internalLinks = [
    ...body.siblingKeys.map((k) => ({
      href: `/${locale}/${industrySlugs[k][locale]}`,
      label: industryLabels[k][locale],
    })),
    ...body.featureKeys.map((fk) => ({
      href: `/${locale}/${featureSlugs[fk][locale]}`,
      label: featureLabels[fk][locale],
    })),
  ];

  return {
    pageKey: key as SeoPageKey,
    locale,
    canonicalPath,
    serviceName: body.serviceName,
    serviceDescription: body.serviceDescription,
    areaServed: shell.areaServed,
    ctaPrimaryLabel: shell.ctaPrimaryLabel,
    ctaBottomTitle: shell.ctaBottomTitle,
    ctaBottomText: shell.ctaBottomText,
    trustTrialLabel: shell.trustTrialLabel,
    hero: {
      marketLabel: shell.marketLabel,
      eyebrow: body.eyebrow,
      h1: body.h1,
      subtitle: body.subtitle,
    },
    aiCapsules: body.aiCapsules,
    whatIsTreatflow: {
      title: body.whatTitle,
      paragraphs: body.whatParas,
    },
    whoIsItFor: {
      title: shell.whoTitle,
      audiences: body.audiences,
    },
    problems: {
      title: shell.problemsTitle,
      items: body.problems,
    },
    features: {
      title: shell.featuresTitle,
      items: body.features,
    },
    benefits: {
      title: shell.benefitsTitle,
      items: body.benefits,
    },
    marketFit: {
      title: body.marketTitle,
      paragraphs: body.marketParas,
      highlights: body.highlights,
    },
    aiSummary: {
      title: shell.summaryTitle,
      text: body.aiSummary,
    },
    faqs: body.faqs,
    internalLinksTitle: shell.internalLinksTitle,
    internalLinks,
  };
}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

const pages: Record<IndustryPageKey, Record<IndustryLocale, InternationalPageContent>> = {
  "beauty-salon-software": {
    en: buildPage("en", "beauty-salon-software", {
      serviceName: "Beauty salon software",
      serviceDescription:
        "Beauty salon software with online booking, client records, consent forms and treatment documentation.",
      eyebrow: "Beauty salon software",
      h1: "Beauty salon software for modern salons",
      subtitle:
        "Online booking, client records, consent forms and treatment documentation in one platform – built for beauty salons that want less admin and better client experience.",
      aiCapsules: [
        {
          question: "What is the best beauty salon software?",
          answer:
            "For salons that need online booking, digital client records, consent forms and treatment documentation in one system, Treatflow is a strong choice. It focuses on studio operations – appointments, client management and documentation – with GDPR-compliant EU hosting.",
        },
        {
          question: "Does Treatflow charge booking commissions?",
          answer:
            "No. Treatflow is your studio software, not a marketplace. There is no commission per appointment. You keep full control of your booking page and client data.",
        },
      ],
      whatTitle: "What is Treatflow for beauty salons?",
      whatParas: [
        "Treatflow replaces scattered tools with one system: calendar, client profiles, digital forms and treatment notes work together from booking to follow-up.",
        "Salons use Treatflow to offer online booking, keep client history accessible and document treatments consistently across the team.",
      ],
      audiences: [
        "Beauty salons and day spas",
        "Skin care studios with structured treatment protocols",
        "Multi-practitioner teams replacing scattered tools",
        "Independent salons ready to leave paper diaries behind",
      ],
      problems: [
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
        {
          problem: "No-shows and last-minute gaps",
          solution: "SMS and email reminders that reduce missed appointments.",
        },
      ],
      features: [
        { icon: Link2, title: "Online booking", desc: "Personal booking page, 24/7, no commission." },
        { icon: Users, title: "Client records", desc: "Profiles, history and notes in one place." },
        { icon: ClipboardCheck, title: "Consent forms", desc: "Digital intake before every treatment." },
        { icon: FileText, title: "Treatment notes", desc: "Structured documentation per visit." },
        { icon: Camera, title: "Photo documentation", desc: "Before/after photos linked to clients." },
        { icon: Bell, title: "Reminders", desc: "SMS and email to reduce no-shows." },
      ],
      benefits: [
        "Less admin work across booking and documentation",
        "Better client experience from first booking",
        "Structured records for team handovers",
        "Modern digital workflows in one app",
        "GDPR-compliant hosting in the EU",
      ],
      marketTitle: "Why salons choose Treatflow",
      marketParas: [
        "Generic tools often stop at appointments. Treatflow connects booking to client records and treatment documentation – where professional salons need structure.",
      ],
      highlights: [
        "Online booking without commission per appointment",
        "Digital client records with treatment history",
        "Consent forms and intake completed before visits",
        "Treatment notes and photo documentation",
        "GDPR-compliant EU hosting",
      ],
      aiSummary:
        "Treatflow is beauty salon software with online booking, client records, consent forms, treatment notes, photo documentation and reminders. For beauty salons, day spas and skin care studios. GDPR-compliant EU hosting.",
      faqs: [
        {
          question: "What is Treatflow?",
          answer:
            "Treatflow is all-in-one software for beauty salons, aesthetic clinics and related studios. It combines online booking, client records, consent forms, treatment documentation, reminders and digital workflows in one platform.",
        },
        {
          question: "Who is Treatflow for?",
          answer:
            "Treatflow is for beauty salons, skin care studios and multi-practitioner teams that want structured digital workflows from booking to documentation.",
        },
        {
          question: "How do I get started?",
          answer:
            "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.",
        },
        {
          question: "Where is my data hosted?",
          answer:
            "Treatflow hosts data in the EU and is designed for GDPR compliance. International markets do not require German-specific fiscal modules.",
        },
      ],
      siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    }),
    es: buildPage("es", "beauty-salon-software", {
      serviceName: "Software para salones de belleza",
      serviceDescription:
        "Software para salones de belleza con reservas online, fichas de clientas, consentimientos y documentación de tratamientos.",
      eyebrow: "Software para salones de belleza",
      h1: "Software para salones de belleza modernos",
      subtitle:
        "Reservas online, fichas de clientas, formularios de consentimiento y documentación de tratamientos en una sola plataforma – pensado para salones que quieren menos administración y mejor experiencia.",
      aiCapsules: [
        {
          question: "¿Cuál es el mejor software para salones de belleza?",
          answer:
            "Si tu salón necesita reservas online, fichas digitales, consentimientos y documentación de tratamientos en un solo sistema, Treatflow es una opción sólida. Se centra en la operativa del salón – citas, clientas y documentación – con hosting en la UE conforme al RGPD.",
        },
        {
          question: "¿Treatflow cobra comisión por reserva?",
          answer:
            "No. Treatflow es el software de tu salón, no un marketplace. No hay comisión por cita. Tú controlas tu página de reservas y los datos de tus clientas.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para salones de belleza?",
      whatParas: [
        "Treatflow sustituye herramientas dispersas por un único sistema: agenda, fichas, formularios digitales y notas de tratamiento trabajan juntos desde la reserva hasta el seguimiento.",
        "Los salones usan Treatflow para ofrecer reservas online, mantener el historial accesible y documentar tratamientos de forma coherente en todo el equipo.",
      ],
      audiences: [
        "Salones de belleza y centros de estética",
        "Estudios de cuidado de la piel con protocolos claros",
        "Equipos con varios profesionales que dejan herramientas sueltas",
        "Salones independientes listos para abandonar la agenda en papel",
      ],
      problems: [
        {
          problem: "Citas por WhatsApp y agenda en papel",
          solution: "Un calendario con reservas online y recordatorios automáticos.",
        },
        {
          problem: "Historial de clientas repartido en varias herramientas",
          solution: "Fichas digitales con notas, fotos e historial de visitas.",
        },
        {
          problem: "Consentimientos en papel",
          solution: "Anamnesis y consentimiento digitales antes de la cita.",
        },
        {
          problem: "Ausencias y huecos de última hora",
          solution: "Recordatorios por SMS y email que reducen no-shows.",
        },
      ],
      features: [
        { icon: Link2, title: "Reservas online", desc: "Página de reserva propia, 24/7, sin comisión." },
        { icon: Users, title: "Fichas de clientas", desc: "Perfiles, historial y notas en un solo lugar." },
        { icon: ClipboardCheck, title: "Consentimientos", desc: "Formularios digitales antes de cada tratamiento." },
        { icon: FileText, title: "Notas de tratamiento", desc: "Documentación estructurada por visita." },
        { icon: Camera, title: "Fotos", desc: "Fotos antes/después vinculadas a la ficha." },
        { icon: Bell, title: "Recordatorios", desc: "SMS y email para reducir ausencias." },
      ],
      benefits: [
        "Menos administración entre reservas y documentación",
        "Mejor experiencia desde la primera reserva",
        "Historial claro para traspasos en el equipo",
        "Flujos digitales modernos en una sola app",
        "Hosting en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los salones eligen Treatflow",
      marketParas: [
        "Las herramientas genéricas suelen quedarse en las citas. Treatflow conecta la reserva con las fichas y la documentación – donde los salones profesionales necesitan estructura.",
      ],
      highlights: [
        "Reservas online sin comisión por cita",
        "Fichas digitales con historial de tratamientos",
        "Consentimientos completados antes de la visita",
        "Notas de tratamiento y documentación fotográfica",
        "Hosting en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es software para salones de belleza con reservas online, fichas de clientas, consentimientos, notas de tratamiento, fotos y recordatorios. Para salones, spas diurnos y centros de estética. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno para salones de belleza, clínicas estéticas y estudios afines. Combina reservas online, fichas, consentimientos, documentación, recordatorios y flujos digitales.",
        },
        {
          question: "¿Para quién es Treatflow?",
          answer:
            "Para salones de belleza, centros de estética y equipos que quieren digitalizar el flujo desde la reserva hasta la documentación.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Solicita acceso anticipado para tu país. El registro directo está disponible en Alemania, Austria y Suiza.",
        },
        {
          question: "¿Dónde se alojan mis datos?",
          answer: "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    }),
    it: buildPage("it", "beauty-salon-software", {
      serviceName: "Software per centri estetici",
      serviceDescription:
        "Software per centri estetici con prenotazioni online, schede clienti, consensi e documentazione dei trattamenti.",
      eyebrow: "Software per centri estetici",
      h1: "Software per centri estetici moderni",
      subtitle:
        "Prenotazioni online, schede clienti, moduli di consenso e documentazione dei trattamenti in un'unica piattaforma – pensato per centri che vogliono meno amministrazione e un'esperienza cliente migliore.",
      aiCapsules: [
        {
          question: "Qual è il miglior software per centri estetici?",
          answer:
            "Se il tuo centro estetico ha bisogno di prenotazioni online, schede digitali, consensi e documentazione trattamenti in un solo sistema, Treatflow è una scelta solida. Si concentra sulla gestione dello studio – appuntamenti, clienti e documentazione – con hosting UE conforme al GDPR.",
        },
        {
          question: "Treatflow applica commissioni sulle prenotazioni?",
          answer:
            "No. Treatflow è il software del tuo centro, non un marketplace. Nessuna commissione per appuntamento. Controlli tu la pagina di prenotazione e i dati delle clienti.",
        },
      ],
      whatTitle: "Cos'è Treatflow per i centri estetici?",
      whatParas: [
        "Treatflow sostituisce strumenti sparsi con un unico sistema: calendario, schede, moduli digitali e note di trattamento lavorano insieme dalla prenotazione al follow-up.",
        "I centri usano Treatflow per offrire prenotazioni online, tenere lo storico accessibile e documentare i trattamenti in modo coerente in tutto il team.",
      ],
      audiences: [
        "Centri estetici e beauty salon",
        "Studi di skincare con protocolli strutturati",
        "Team multi-operatore che abbandonano strumenti frammentati",
        "Centri indipendenti pronti a lasciare l'agenda cartacea",
      ],
      problems: [
        {
          problem: "Appuntamenti via messaggi e agenda cartacea",
          solution: "Un calendario con prenotazioni online e promemoria automatici.",
        },
        {
          problem: "Storico clienti sparso su più strumenti",
          solution: "Schede digitali con note, foto e storico visite.",
        },
        {
          problem: "Consensi cartacei",
          solution: "Anamnesi e consenso digitali prima dell'appuntamento.",
        },
        {
          problem: "Assenze e buchi dell'ultimo minuto",
          solution: "Promemoria SMS ed email che riducono i no-show.",
        },
      ],
      features: [
        { icon: Link2, title: "Prenotazioni online", desc: "Pagina di prenotazione personale, 24/7, senza commissioni." },
        { icon: Users, title: "Schede clienti", desc: "Profili, storico e note in un unico posto." },
        { icon: ClipboardCheck, title: "Moduli di consenso", desc: "Intake digitale prima di ogni trattamento." },
        { icon: FileText, title: "Note di trattamento", desc: "Documentazione strutturata per visita." },
        { icon: Camera, title: "Documentazione fotografica", desc: "Foto prima/dopo collegate alla scheda." },
        { icon: Bell, title: "Promemoria", desc: "SMS ed email per ridurre le assenze." },
      ],
      benefits: [
        "Meno amministrazione tra prenotazioni e documentazione",
        "Migliore esperienza cliente dalla prima prenotazione",
        "Storico chiaro per i passaggi di consegna nel team",
        "Flussi digitali moderni in un'unica app",
        "Hosting UE conforme al GDPR",
      ],
      marketTitle: "Perché i centri estetici scelgono Treatflow",
      marketParas: [
        "Gli strumenti generici spesso si fermano agli appuntamenti. Treatflow collega prenotazione, schede e documentazione – dove i centri professionali hanno bisogno di struttura.",
      ],
      highlights: [
        "Prenotazioni online senza commissione per appuntamento",
        "Schede digitali con storico trattamenti",
        "Consensi completati prima della visita",
        "Note di trattamento e documentazione fotografica",
        "Hosting UE conforme al GDPR",
      ],
      aiSummary:
        "Treatflow è software per centri estetici con prenotazioni online, schede clienti, consensi, note di trattamento, foto e promemoria. Per centri estetici, day spa e studi di skincare. Conforme al GDPR.",
      faqs: [
        {
          question: "Cos'è Treatflow?",
          answer:
            "Treatflow è un software all-in-one per centri estetici, cliniche estetiche e studi correlati. Combina prenotazioni online, schede, consensi, documentazione, promemoria e flussi digitali.",
        },
        {
          question: "Per chi è Treatflow?",
          answer:
            "Per centri estetici, studi di skincare e team che vogliono digitalizzare il flusso dalla prenotazione alla documentazione.",
        },
        {
          question: "Come inizio?",
          answer:
            "Richiedi l'accesso anticipato per il tuo Paese. La registrazione diretta è disponibile in Germania, Austria e Svizzera.",
        },
        {
          question: "Dove sono ospitati i miei dati?",
          answer: "Treatflow ospita i dati nell'UE ed è progettato per la conformità GDPR.",
        },
      ],
      siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    }),
    fr: buildPage("fr", "beauty-salon-software", {
      serviceName: "Logiciel pour instituts de beauté",
      serviceDescription:
        "Logiciel pour instituts de beauté avec réservation en ligne, fiches clientes, consentements et documentation des soins.",
      eyebrow: "Logiciel pour instituts de beauté",
      h1: "Logiciel pour instituts de beauté modernes",
      subtitle:
        "Réservation en ligne, fiches clientes, formulaires de consentement et documentation des soins sur une seule plateforme – conçu pour les instituts qui veulent moins d'admin et une meilleure expérience cliente.",
      aiCapsules: [
        {
          question: "Quel est le meilleur logiciel pour instituts de beauté ?",
          answer:
            "Si votre institut a besoin de réservation en ligne, de fiches numériques, de consentements et de documentation des soins dans un seul système, Treatflow est un choix solide. Il se concentre sur l'exploitation de l'institut – rendez-vous, clientes et documentation – avec un hébergement UE conforme au RGPD.",
        },
        {
          question: "Treatflow prend-il une commission sur les réservations ?",
          answer:
            "Non. Treatflow est le logiciel de votre institut, pas une marketplace. Aucune commission par rendez-vous. Vous gardez le contrôle de votre page de réservation et des données clientes.",
        },
      ],
      whatTitle: "Qu'est-ce que Treatflow pour les instituts de beauté ?",
      whatParas: [
        "Treatflow remplace les outils dispersés par un système unique : agenda, fiches, formulaires numériques et notes de soin fonctionnent ensemble de la réservation au suivi.",
        "Les instituts utilisent Treatflow pour offrir la réservation en ligne, garder l'historique accessible et documenter les soins de façon cohérente dans toute l'équipe.",
      ],
      audiences: [
        "Instituts de beauté et day spas",
        "Studios de soins de la peau avec protocoles structurés",
        "Équipes multi-praticiennes qui quittent les outils éparpillés",
        "Instituts indépendants prêts à abandonner l'agenda papier",
      ],
      problems: [
        {
          problem: "Rendez-vous par messages et agenda papier",
          solution: "Un calendrier avec réservation en ligne et rappels automatiques.",
        },
        {
          problem: "Historique clientes dispersé entre plusieurs outils",
          solution: "Fiches numériques avec notes, photos et historique de visites.",
        },
        {
          problem: "Consentements papier",
          solution: "Anamnèse et consentement numériques avant le rendez-vous.",
        },
        {
          problem: "Absences et créneaux de dernière minute",
          solution: "Rappels SMS et e-mail qui réduisent les no-shows.",
        },
      ],
      features: [
        { icon: Link2, title: "Réservation en ligne", desc: "Page de réservation personnelle, 24/7, sans commission." },
        { icon: Users, title: "Fiches clientes", desc: "Profils, historique et notes au même endroit." },
        { icon: ClipboardCheck, title: "Formulaires de consentement", desc: "Intake numérique avant chaque soin." },
        { icon: FileText, title: "Notes de soin", desc: "Documentation structurée par visite." },
        { icon: Camera, title: "Documentation photo", desc: "Photos avant/après liées à la fiche." },
        { icon: Bell, title: "Rappels", desc: "SMS et e-mail pour réduire les absences." },
      ],
      benefits: [
        "Moins d'administration entre réservation et documentation",
        "Meilleure expérience dès la première réservation",
        "Historique clair pour les passages de relais en équipe",
        "Flux numériques modernes dans une seule application",
        "Hébergement UE conforme au RGPD",
      ],
      marketTitle: "Pourquoi les instituts choisissent Treatflow",
      marketParas: [
        "Les outils génériques s'arrêtent souvent aux rendez-vous. Treatflow relie réservation, fiches et documentation – là où les instituts professionnels ont besoin de structure.",
      ],
      highlights: [
        "Réservation en ligne sans commission par rendez-vous",
        "Fiches numériques avec historique des soins",
        "Consentements complétés avant la visite",
        "Notes de soin et documentation photo",
        "Hébergement UE conforme au RGPD",
      ],
      aiSummary:
        "Treatflow est un logiciel pour instituts de beauté avec réservation en ligne, fiches clientes, consentements, notes de soin, photos et rappels. Pour instituts, day spas et studios de soins. Conforme au RGPD.",
      faqs: [
        {
          question: "Qu'est-ce que Treatflow ?",
          answer:
            "Treatflow est un logiciel tout-en-un pour instituts de beauté, cliniques esthétiques et studios associés. Il combine réservation en ligne, fiches, consentements, documentation, rappels et flux numériques.",
        },
        {
          question: "Pour qui est Treatflow ?",
          answer:
            "Pour les instituts de beauté, studios de soins et équipes qui veulent digitaliser le parcours de la réservation à la documentation.",
        },
        {
          question: "Comment commencer ?",
          answer:
            "Demandez un accès anticipé pour votre pays. L'inscription directe est disponible en Allemagne, Autriche et Suisse.",
        },
        {
          question: "Où sont hébergées mes données ?",
          answer: "Treatflow héberge les données dans l'UE et est conçu pour la conformité RGPD.",
        },
      ],
      siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    }),
  },

  "aesthetic-clinic-software": {
    en: buildPage("en", "aesthetic-clinic-software", {
      serviceName: "Aesthetic clinic software",
      serviceDescription:
        "Software for aesthetic clinics: treatment documentation, consent forms, client records and online booking.",
      eyebrow: "Aesthetic clinic software",
      h1: "Aesthetic clinic software for structured documentation",
      subtitle:
        "Consent forms, treatment notes, photo documentation and client records for aesthetic clinics – one platform for booking through follow-up.",
      aiCapsules: [
        {
          question: "What software do aesthetic clinics need?",
          answer:
            "Aesthetic clinics need consent forms, treatment documentation, photo records and client history in one system. Treatflow provides online booking, digital client records and structured treatment notes for injectables, skin treatments and medical aesthetics.",
        },
        {
          question: "Is Treatflow suitable for medical aesthetics?",
          answer:
            "Yes. Treatflow is built for clinics where documentation quality and client safety matter – not just appointment volume. Consent, notes and photos stay linked to each client profile.",
        },
      ],
      whatTitle: "What is Treatflow for aesthetic clinics?",
      whatParas: [
        "Treatflow supports the full client journey: booking, intake, consent, treatment documentation and follow-up in one shared platform.",
        "Built for clinics where documentation quality and client safety matter – not just appointment volume.",
      ],
      audiences: [
        "Aesthetic clinics offering injectables and skin rejuvenation",
        "Medical aesthetics practices",
        "Skin care clinics with protocol-driven treatments",
        "Multi-practitioner clinics needing consistent documentation",
      ],
      problems: [
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
        {
          problem: "Front desk and treatment rooms use different tools",
          solution: "One workflow from booking to notes and follow-up.",
        },
      ],
      features: [
        { icon: FileText, title: "Treatment documentation", desc: "Notes, protocols and history." },
        { icon: ClipboardCheck, title: "Consent forms", desc: "Digital consent with secure storage." },
        { icon: Camera, title: "Photo documentation", desc: "Clinical photos per visit." },
        { icon: Users, title: "Client records", desc: "Full aesthetic history in one profile." },
        { icon: Link2, title: "Online booking", desc: "Consultations booked online." },
        { icon: Workflow, title: "Digital workflows", desc: "Intake to treatment to follow-up." },
      ],
      benefits: [
        "Consistent documentation across practitioners",
        "Clear consent trail for every procedure",
        "Less admin between front desk and treatment rooms",
        "Professional client experience from first booking",
        "GDPR-compliant EU hosting",
      ],
      marketTitle: "Why aesthetic clinics choose Treatflow",
      marketParas: [
        "Clinics need reliable documentation behind professional client experiences. Treatflow connects booking to records and treatment notes without unnecessary complexity.",
      ],
      highlights: [
        "Online booking without commission per appointment",
        "Digital client records with treatment history",
        "Consent forms and intake completed before visits",
        "Treatment notes and photo documentation",
        "GDPR-compliant EU hosting",
      ],
      aiSummary:
        "Treatflow is aesthetic clinic software with treatment documentation, consent forms, client records, photo documentation and online booking. For aesthetic clinics and medical aesthetics studios. GDPR-compliant.",
      faqs: [
        {
          question: "What is Treatflow?",
          answer:
            "Treatflow is all-in-one software for beauty salons, aesthetic clinics and laser studios. It combines online booking, client records, consent forms, treatment documentation and reminders.",
        },
        {
          question: "Can multiple practitioners share one clinic account?",
          answer:
            "Yes. Client records, consent forms and treatment notes are shared across the team so documentation stays consistent.",
        },
        {
          question: "How do I get started?",
          answer:
            "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.",
        },
        {
          question: "Is Treatflow GDPR compliant?",
          answer: "Treatflow hosts data in the EU and is designed for GDPR compliance.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
      featureKeys: ["client-records", "forms", "treatment-documentation", "pricing"],
    }),
    es: buildPage("es", "aesthetic-clinic-software", {
      serviceName: "Software para clínicas estéticas",
      serviceDescription:
        "Software para clínicas estéticas: documentación de tratamientos, consentimientos, fichas de clientas y reservas online.",
      eyebrow: "Software para clínicas estéticas",
      h1: "Software para clínicas estéticas con documentación estructurada",
      subtitle:
        "Consentimientos, notas de tratamiento, documentación fotográfica y fichas de clientas – una plataforma desde la reserva hasta el seguimiento.",
      aiCapsules: [
        {
          question: "¿Qué software necesitan las clínicas estéticas?",
          answer:
            "Las clínicas estéticas necesitan consentimientos, documentación de tratamientos, fotos e historial en un solo sistema. Treatflow ofrece reservas online, fichas digitales y notas estructuradas para inyectables, tratamientos faciales y medicina estética.",
        },
        {
          question: "¿Treatflow sirve para medicina estética?",
          answer:
            "Sí. Está pensado para clínicas donde la calidad de la documentación y la seguridad de la clienta importan – no solo el volumen de citas.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para clínicas estéticas?",
      whatParas: [
        "Treatflow acompaña todo el recorrido: reserva, anamnesis, consentimiento, documentación del tratamiento y seguimiento en una plataforma compartida.",
        "Diseñado para clínicas donde la calidad documental importa tanto como la experiencia de la clienta.",
      ],
      audiences: [
        "Clínicas estéticas con inyectables y rejuvenecimiento",
        "Consultas de medicina estética",
        "Centros de skin care con protocolos definidos",
        "Clínicas con varios profesionales que necesitan documentación uniforme",
      ],
      problems: [
        {
          problem: "Notas de tratamiento inconsistentes",
          solution: "Plantillas de documentación y fichas compartidas.",
        },
        {
          problem: "Consentimiento no capturado antes del procedimiento",
          solution: "Formularios digitales completados antes del tratamiento.",
        },
        {
          problem: "Fotos en dispositivos personales",
          solution: "Documentación fotográfica vinculada a la ficha.",
        },
        {
          problem: "Recepción y cabinas usan herramientas distintas",
          solution: "Un flujo desde la reserva hasta las notas y el seguimiento.",
        },
      ],
      features: [
        { icon: FileText, title: "Documentación de tratamientos", desc: "Notas, protocolos e historial." },
        { icon: ClipboardCheck, title: "Consentimientos", desc: "Consentimiento digital con almacenamiento seguro." },
        { icon: Camera, title: "Fotos clínicas", desc: "Fotos por visita vinculadas a la ficha." },
        { icon: Users, title: "Fichas de clientas", desc: "Historial estético completo en un perfil." },
        { icon: Link2, title: "Reservas online", desc: "Consultas reservadas online." },
        { icon: Workflow, title: "Flujos digitales", desc: "De la anamnesis al seguimiento." },
      ],
      benefits: [
        "Documentación coherente entre profesionales",
        "Rastro claro de consentimiento en cada procedimiento",
        "Menos fricción entre recepción y cabinas",
        "Experiencia profesional desde la primera reserva",
        "Hosting en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué las clínicas estéticas eligen Treatflow",
      marketParas: [
        "Las clínicas necesitan documentación fiable detrás de una experiencia profesional. Treatflow conecta reservas, fichas y notas sin complejidad innecesaria.",
      ],
      highlights: [
        "Reservas online sin comisión por cita",
        "Fichas digitales con historial de tratamientos",
        "Consentimientos completados antes de la visita",
        "Notas de tratamiento y documentación fotográfica",
        "Hosting en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es software para clínicas estéticas con documentación de tratamientos, consentimientos, fichas, fotos y reservas online. Para clínicas estéticas y medicina estética. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno para salones, clínicas estéticas y centros de láser. Combina reservas, fichas, consentimientos, documentación y recordatorios.",
        },
        {
          question: "¿Varios profesionales pueden compartir la clínica?",
          answer:
            "Sí. Fichas, consentimientos y notas se comparten en el equipo para mantener la documentación coherente.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Solicita acceso anticipado para tu país. El registro directo está disponible en Alemania, Austria y Suiza.",
        },
        {
          question: "¿Cumple el RGPD?",
          answer: "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
      featureKeys: ["client-records", "forms", "treatment-documentation", "pricing"],
    }),
    it: buildPage("it", "aesthetic-clinic-software", {
      serviceName: "Software per cliniche estetiche",
      serviceDescription:
        "Software per cliniche estetiche: documentazione trattamenti, consensi, schede clienti e prenotazioni online.",
      eyebrow: "Software per cliniche estetiche",
      h1: "Software per cliniche estetiche con documentazione strutturata",
      subtitle:
        "Consensi, note di trattamento, documentazione fotografica e schede clienti – una piattaforma dalla prenotazione al follow-up.",
      aiCapsules: [
        {
          question: "Di quale software hanno bisogno le cliniche estetiche?",
          answer:
            "Le cliniche estetiche necessitano di consensi, documentazione trattamenti, foto e storico in un solo sistema. Treatflow offre prenotazioni online, schede digitali e note strutturate per iniettabili, trattamenti skin e medicina estetica.",
        },
        {
          question: "Treatflow è adatto alla medicina estetica?",
          answer:
            "Sì. È pensato per cliniche in cui qualità della documentazione e sicurezza della cliente contano – non solo il volume di appuntamenti.",
        },
      ],
      whatTitle: "Cos'è Treatflow per le cliniche estetiche?",
      whatParas: [
        "Treatflow supporta l'intero percorso: prenotazione, anamnesi, consenso, documentazione del trattamento e follow-up in un'unica piattaforma condivisa.",
        "Pensato per cliniche in cui la qualità documentale conta quanto l'esperienza della cliente.",
      ],
      audiences: [
        "Cliniche estetiche con iniettabili e ringiovanimento",
        "Studi di medicina estetica",
        "Centri skincare con protocolli definiti",
        "Cliniche multi-operatore che richiedono documentazione uniforme",
      ],
      problems: [
        {
          problem: "Note di trattamento incoerenti",
          solution: "Template di documentazione e schede condivise.",
        },
        {
          problem: "Consenso non raccolto prima della procedura",
          solution: "Moduli digitali completati prima del trattamento.",
        },
        {
          problem: "Foto su dispositivi personali",
          solution: "Documentazione fotografica collegata alla scheda.",
        },
        {
          problem: "Reception e cabine usano strumenti diversi",
          solution: "Un flusso dalla prenotazione alle note e al follow-up.",
        },
      ],
      features: [
        { icon: FileText, title: "Documentazione trattamenti", desc: "Note, protocolli e storico." },
        { icon: ClipboardCheck, title: "Moduli di consenso", desc: "Consenso digitale con archiviazione sicura." },
        { icon: Camera, title: "Foto cliniche", desc: "Foto per visita collegate alla scheda." },
        { icon: Users, title: "Schede clienti", desc: "Storico estetico completo in un profilo." },
        { icon: Link2, title: "Prenotazioni online", desc: "Consulti prenotati online." },
        { icon: Workflow, title: "Flussi digitali", desc: "Dall'anamnesi al follow-up." },
      ],
      benefits: [
        "Documentazione coerente tra professionisti",
        "Traccia chiara del consenso per ogni procedura",
        "Meno attrito tra reception e cabine",
        "Esperienza professionale dalla prima prenotazione",
        "Hosting UE conforme al GDPR",
      ],
      marketTitle: "Perché le cliniche estetiche scelgono Treatflow",
      marketParas: [
        "Le cliniche hanno bisogno di documentazione affidabile dietro un'esperienza professionale. Treatflow collega prenotazioni, schede e note senza complessità inutile.",
      ],
      highlights: [
        "Prenotazioni online senza commissione per appuntamento",
        "Schede digitali con storico trattamenti",
        "Consensi completati prima della visita",
        "Note di trattamento e documentazione fotografica",
        "Hosting UE conforme al GDPR",
      ],
      aiSummary:
        "Treatflow è software per cliniche estetiche con documentazione trattamenti, consensi, schede, foto e prenotazioni online. Per cliniche estetiche e medicina estetica. Conforme al GDPR.",
      faqs: [
        {
          question: "Cos'è Treatflow?",
          answer:
            "Treatflow è un software all-in-one per centri estetici, cliniche estetiche e studi laser. Combina prenotazioni, schede, consensi, documentazione e promemoria.",
        },
        {
          question: "Più professionisti possono condividere la clinica?",
          answer:
            "Sì. Schede, consensi e note sono condivisi nel team per mantenere la documentazione coerente.",
        },
        {
          question: "Come inizio?",
          answer:
            "Richiedi l'accesso anticipato per il tuo Paese. La registrazione diretta è disponibile in Germania, Austria e Svizzera.",
        },
        {
          question: "È conforme al GDPR?",
          answer: "Treatflow ospita i dati nell'UE ed è progettato per la conformità GDPR.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
      featureKeys: ["client-records", "forms", "treatment-documentation", "pricing"],
    }),
    fr: buildPage("fr", "aesthetic-clinic-software", {
      serviceName: "Logiciel pour cliniques esthétiques",
      serviceDescription:
        "Logiciel pour cliniques esthétiques : documentation des soins, consentements, fiches clientes et réservation en ligne.",
      eyebrow: "Logiciel pour cliniques esthétiques",
      h1: "Logiciel pour cliniques esthétiques avec documentation structurée",
      subtitle:
        "Consentements, notes de soin, documentation photo et fiches clientes – une plateforme de la réservation au suivi.",
      aiCapsules: [
        {
          question: "De quel logiciel les cliniques esthétiques ont-elles besoin ?",
          answer:
            "Les cliniques esthétiques ont besoin de consentements, de documentation des soins, de photos et d'historique dans un seul système. Treatflow offre réservation en ligne, fiches numériques et notes structurées pour injectables, soins de la peau et médecine esthétique.",
        },
        {
          question: "Treatflow convient-il à la médecine esthétique ?",
          answer:
            "Oui. Il est conçu pour les cliniques où la qualité de la documentation et la sécurité de la cliente comptent – pas seulement le volume de rendez-vous.",
        },
      ],
      whatTitle: "Qu'est-ce que Treatflow pour les cliniques esthétiques ?",
      whatParas: [
        "Treatflow accompagne tout le parcours : réservation, anamnèse, consentement, documentation du soin et suivi sur une plateforme partagée.",
        "Conçu pour les cliniques où la qualité documentaire compte autant que l'expérience cliente.",
      ],
      audiences: [
        "Cliniques esthétiques proposant injectables et rajeunissement",
        "Cabinets de médecine esthétique",
        "Centres de soins de la peau avec protocoles définis",
        "Cliniques multi-praticiennes nécessitant une documentation uniforme",
      ],
      problems: [
        {
          problem: "Notes de soin incohérentes",
          solution: "Modèles de documentation et fiches partagées.",
        },
        {
          problem: "Consentement non recueilli avant la procédure",
          solution: "Formulaires numériques complétés avant le soin.",
        },
        {
          problem: "Photos sur appareils personnels",
          solution: "Documentation photo liée à la fiche cliente.",
        },
        {
          problem: "Accueil et cabines utilisent des outils différents",
          solution: "Un flux de la réservation aux notes et au suivi.",
        },
      ],
      features: [
        { icon: FileText, title: "Documentation des soins", desc: "Notes, protocoles et historique." },
        { icon: ClipboardCheck, title: "Formulaires de consentement", desc: "Consentement numérique sécurisé." },
        { icon: Camera, title: "Photos cliniques", desc: "Photos par visite liées à la fiche." },
        { icon: Users, title: "Fiches clientes", desc: "Historique esthétique complet dans un profil." },
        { icon: Link2, title: "Réservation en ligne", desc: "Consultations réservées en ligne." },
        { icon: Workflow, title: "Flux numériques", desc: "De l'anamnèse au suivi." },
      ],
      benefits: [
        "Documentation cohérente entre praticiens",
        "Trace claire du consentement pour chaque procédure",
        "Moins de friction entre accueil et cabines",
        "Expérience professionnelle dès la première réservation",
        "Hébergement UE conforme au RGPD",
      ],
      marketTitle: "Pourquoi les cliniques esthétiques choisissent Treatflow",
      marketParas: [
        "Les cliniques ont besoin d'une documentation fiable derrière une expérience professionnelle. Treatflow relie réservation, fiches et notes sans complexité inutile.",
      ],
      highlights: [
        "Réservation en ligne sans commission par rendez-vous",
        "Fiches numériques avec historique des soins",
        "Consentements complétés avant la visite",
        "Notes de soin et documentation photo",
        "Hébergement UE conforme au RGPD",
      ],
      aiSummary:
        "Treatflow est un logiciel pour cliniques esthétiques avec documentation des soins, consentements, fiches, photos et réservation en ligne. Pour cliniques esthétiques et médecine esthétique. Conforme au RGPD.",
      faqs: [
        {
          question: "Qu'est-ce que Treatflow ?",
          answer:
            "Treatflow est un logiciel tout-en-un pour instituts, cliniques esthétiques et centres laser. Il combine réservation, fiches, consentements, documentation et rappels.",
        },
        {
          question: "Plusieurs praticiens peuvent-ils partager la clinique ?",
          answer:
            "Oui. Fiches, consentements et notes sont partagés dans l'équipe pour garder une documentation cohérente.",
        },
        {
          question: "Comment commencer ?",
          answer:
            "Demandez un accès anticipé pour votre pays. L'inscription directe est disponible en Allemagne, Autriche et Suisse.",
        },
        {
          question: "Est-ce conforme au RGPD ?",
          answer: "Treatflow héberge les données dans l'UE et est conçu pour la conformité RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
      featureKeys: ["client-records", "forms", "treatment-documentation", "pricing"],
    }),
  },

  "laser-hair-removal-software": {
    en: buildPage("en", "laser-hair-removal-software", {
      serviceName: "Laser hair removal software",
      serviceDescription:
        "Software for laser hair removal studios: session tracking, consent forms, photo documentation and online booking.",
      eyebrow: "Laser studio software",
      h1: "Laser hair removal software for treatment series",
      subtitle:
        "Track sessions, document consent and manage bookings – built for laser and IPL studios with structured records.",
      aiCapsules: [
        {
          question: "What software do laser studios need?",
          answer:
            "Laser studios need client records with treatment series history, consent forms, session notes, photo documentation and appointment reminders. Treatflow provides online booking and structured documentation for laser hair removal studios.",
        },
        {
          question: "Can Treatflow track multi-session packages?",
          answer:
            "Yes. Each session is documented in the client record so you always see progress, settings notes and when the next appointment is due.",
        },
      ],
      whatTitle: "What is Treatflow for laser studios?",
      whatParas: [
        "Laser treatments run over multiple sessions. Treatflow tracks each session, stores consent and skin type information, and reminds clients when the next appointment is due.",
        "Studios use one calendar for bookings, one client profile for history, and digital forms for intake – without marketplace commissions.",
      ],
      audiences: [
        "Laser hair removal studios",
        "IPL clinics with multi-session packages",
        "Skin care studios offering laser treatments",
        "Teams managing high booking volume with documentation needs",
      ],
      problems: [
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
        {
          problem: "Photos and notes on separate devices",
          solution: "Photo documentation linked to each client profile.",
        },
      ],
      features: [
        { icon: Zap, title: "Session tracking", desc: "Document each session with notes." },
        { icon: ClipboardCheck, title: "Consent & intake", desc: "Skin type and contraindications on file." },
        { icon: Camera, title: "Photo documentation", desc: "Progress photos per area." },
        { icon: Calendar, title: "Series scheduling", desc: "Plan follow-up appointments." },
        { icon: Link2, title: "Online booking", desc: "Clients book next sessions online." },
        { icon: Bell, title: "Reminders", desc: "Automatic appointment reminders." },
      ],
      benefits: [
        "Clear view of each client's treatment series",
        "Structured consent for every new client",
        "Less manual follow-up on missed sessions",
        "Professional documentation for team consistency",
        "GDPR-compliant EU hosting",
      ],
      marketTitle: "Why laser studios choose Treatflow",
      marketParas: [
        "Laser studios combine high booking volume with documentation needs. Treatflow connects booking to records so every session builds useful client history.",
      ],
      highlights: [
        "Online booking without commission per appointment",
        "Session history in digital client records",
        "Consent forms before treatment series",
        "Photo documentation and reminders",
        "GDPR-compliant EU hosting",
      ],
      aiSummary:
        "Treatflow is laser hair removal software with session tracking, consent forms, photo documentation, online booking and reminders. For laser and IPL studios. GDPR-compliant.",
      faqs: [
        {
          question: "What is Treatflow?",
          answer:
            "Treatflow is all-in-one software for beauty salons, aesthetic clinics and laser studios. It combines online booking, client records, consent forms, treatment documentation and reminders.",
        },
        {
          question: "Who is this page for?",
          answer:
            "Laser hair removal and IPL studios that need session tracking, consent and reliable rebooking.",
        },
        {
          question: "How do I get started?",
          answer:
            "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.",
        },
        {
          question: "Where is data hosted?",
          answer:
            "Treatflow hosts data in the EU and is designed for GDPR compliance.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "treatment-documentation", "forms", "pricing"],
    }),
    es: buildPage("es", "laser-hair-removal-software", {
      serviceName: "Software de depilación láser",
      serviceDescription:
        "Software para centros de depilación láser: seguimiento de sesiones, consentimientos, fotos y reservas online.",
      eyebrow: "Software para centros de láser",
      h1: "Software de depilación láser para series de tratamiento",
      subtitle:
        "Controla sesiones, documenta el consentimiento y gestiona las reservas – pensado para centros de láser e IPL con registros estructurados.",
      aiCapsules: [
        {
          question: "¿Qué software necesitan los centros de depilación láser?",
          answer:
            "Necesitan fichas con historial de series, consentimientos, notas de sesión, fotos y recordatorios. Treatflow ofrece reservas online y documentación estructurada para depilación láser.",
        },
        {
          question: "¿Se pueden seguir packs de varias sesiones?",
          answer:
            "Sí. Cada sesión queda documentada en la ficha para ver el progreso, las notas y cuándo toca la siguiente cita.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para centros de láser?",
      whatParas: [
        "Los tratamientos láser se desarrollan en varias sesiones. Treatflow registra cada sesión, guarda consentimiento e información de fototipo y recuerda a las clientas la siguiente cita.",
        "Un calendario para reservas, una ficha para el historial y formularios digitales para la anamnesis – sin comisiones de marketplace.",
      ],
      audiences: [
        "Centros de depilación láser",
        "Clínicas IPL con packs de varias sesiones",
        "Estudios de estética que ofrecen láser",
        "Equipos con alto volumen de citas y necesidad de documentación",
      ],
      problems: [
        {
          problem: "Se pierde el seguimiento de las sesiones",
          solution: "Historial y notas por sesión en la ficha de la clienta.",
        },
        {
          problem: "Falta información de consentimiento",
          solution: "Anamnesis y consentimiento digitales antes de cada serie.",
        },
        {
          problem: "Las clientas olvidan las sesiones de seguimiento",
          solution: "Recordatorios y rebooking fácil con tu página de reservas.",
        },
        {
          problem: "Fotos y notas en dispositivos distintos",
          solution: "Documentación fotográfica vinculada a cada ficha.",
        },
      ],
      features: [
        { icon: Zap, title: "Seguimiento de sesiones", desc: "Documenta cada sesión con notas." },
        { icon: ClipboardCheck, title: "Consentimiento y anamnesis", desc: "Fototipo y contraindicaciones en la ficha." },
        { icon: Camera, title: "Fotos de progreso", desc: "Fotos por zona tratada." },
        { icon: Calendar, title: "Planificación de series", desc: "Programa las citas de seguimiento." },
        { icon: Link2, title: "Reservas online", desc: "Las clientas reservan la siguiente sesión online." },
        { icon: Bell, title: "Recordatorios", desc: "Recordatorios automáticos de cita." },
      ],
      benefits: [
        "Visión clara de cada serie de tratamiento",
        "Consentimiento estructurado para cada clienta nueva",
        "Menos seguimiento manual de sesiones perdidas",
        "Documentación profesional para el equipo",
        "Hosting en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los centros de láser eligen Treatflow",
      marketParas: [
        "Los centros de láser combinan alto volumen de reservas con necesidad de documentación. Treatflow conecta la reserva con las fichas para que cada sesión construya historial útil.",
      ],
      highlights: [
        "Reservas online sin comisión por cita",
        "Historial de sesiones en fichas digitales",
        "Consentimientos antes de la serie",
        "Fotos y recordatorios",
        "Hosting en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es software de depilación láser con seguimiento de sesiones, consentimientos, fotos, reservas online y recordatorios. Para centros de láser e IPL. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno para salones, clínicas estéticas y centros de láser. Combina reservas, fichas, consentimientos, documentación y recordatorios.",
        },
        {
          question: "¿Para quién es esta página?",
          answer:
            "Para centros de depilación láser e IPL que necesitan seguimiento de sesiones, consentimiento y rebooking fiable.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Solicita acceso anticipado para tu país. El registro directo está disponible en Alemania, Austria y Suiza.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "treatment-documentation", "forms", "pricing"],
    }),
    it: buildPage("it", "laser-hair-removal-software", {
      serviceName: "Software per epilazione laser",
      serviceDescription:
        "Software per studi di epilazione laser: tracking sessioni, consensi, foto e prenotazioni online.",
      eyebrow: "Software per studi laser",
      h1: "Software per epilazione laser e cicli di trattamento",
      subtitle:
        "Monitora le sessioni, documenta il consenso e gestisci le prenotazioni – pensato per studi laser e IPL con documentazione strutturata.",
      aiCapsules: [
        {
          question: "Di quale software hanno bisogno gli studi laser?",
          answer:
            "Servono schede con storico dei cicli, consensi, note di sessione, foto e promemoria. Treatflow offre prenotazioni online e documentazione strutturata per l'epilazione laser.",
        },
        {
          question: "Si possono gestire pacchetti multi-sessione?",
          answer:
            "Sì. Ogni sessione è documentata nella scheda così vedi progressi, note e quando è previsto il prossimo appuntamento.",
        },
      ],
      whatTitle: "Cos'è Treatflow per gli studi laser?",
      whatParas: [
        "I trattamenti laser si sviluppano su più sessioni. Treatflow traccia ogni sessione, conserva consenso e fototipo e ricorda alle clienti il prossimo appuntamento.",
        "Un calendario per le prenotazioni, una scheda per lo storico e moduli digitali per l'anamnesi – senza commissioni di marketplace.",
      ],
      audiences: [
        "Studi di epilazione laser",
        "Cliniche IPL con pacchetti multi-sessione",
        "Centri estetici che offrono laser",
        "Team con alto volume di prenotazioni e necessità di documentazione",
      ],
      problems: [
        {
          problem: "Si perde il filo delle sessioni",
          solution: "Storico e note per sessione nella scheda cliente.",
        },
        {
          problem: "Manca il consenso",
          solution: "Anamnesi e consenso digitali prima di ogni ciclo.",
        },
        {
          problem: "Le clienti dimenticano i follow-up",
          solution: "Promemoria e riprenotazione facile con la tua pagina.",
        },
        {
          problem: "Foto e note su dispositivi diversi",
          solution: "Documentazione fotografica collegata a ogni scheda.",
        },
      ],
      features: [
        { icon: Zap, title: "Tracking sessioni", desc: "Documenta ogni sessione con note." },
        { icon: ClipboardCheck, title: "Consenso e anamnesi", desc: "Fototipo e controindicazioni in scheda." },
        { icon: Camera, title: "Foto di progresso", desc: "Foto per area trattata." },
        { icon: Calendar, title: "Pianificazione cicli", desc: "Programma gli appuntamenti di follow-up." },
        { icon: Link2, title: "Prenotazioni online", desc: "Le clienti prenotano la sessione successiva online." },
        { icon: Bell, title: "Promemoria", desc: "Promemoria automatici degli appuntamenti." },
      ],
      benefits: [
        "Visione chiara di ogni ciclo di trattamento",
        "Consenso strutturato per ogni nuova cliente",
        "Meno follow-up manuale sulle sessioni perse",
        "Documentazione professionale per il team",
        "Hosting UE conforme al GDPR",
      ],
      marketTitle: "Perché gli studi laser scelgono Treatflow",
      marketParas: [
        "Gli studi laser uniscono alto volume di prenotazioni e esigenze di documentazione. Treatflow collega prenotazione e schede così ogni sessione costruisce uno storico utile.",
      ],
      highlights: [
        "Prenotazioni online senza commissione",
        "Storico sessioni nelle schede digitali",
        "Consensi prima del ciclo",
        "Foto e promemoria",
        "Hosting UE conforme al GDPR",
      ],
      aiSummary:
        "Treatflow è software per epilazione laser con tracking sessioni, consensi, foto, prenotazioni online e promemoria. Per studi laser e IPL. Conforme al GDPR.",
      faqs: [
        {
          question: "Cos'è Treatflow?",
          answer:
            "Treatflow è un software all-in-one per centri estetici, cliniche e studi laser. Combina prenotazioni, schede, consensi, documentazione e promemoria.",
        },
        {
          question: "Per chi è questa pagina?",
          answer:
            "Per studi di epilazione laser e IPL che necessitano tracking sessioni, consenso e riprenotazione affidabile.",
        },
        {
          question: "Come inizio?",
          answer:
            "Richiedi l'accesso anticipato per il tuo Paese. La registrazione diretta è disponibile in Germania, Austria e Svizzera.",
        },
        {
          question: "Dove sono i dati?",
          answer:
            "Treatflow ospita i dati nell'UE ed è progettato per la conformità GDPR.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "treatment-documentation", "forms", "pricing"],
    }),
    fr: buildPage("fr", "laser-hair-removal-software", {
      serviceName: "Logiciel d'épilation laser",
      serviceDescription:
        "Logiciel pour centres d'épilation laser : suivi des séances, consentements, photos et réservation en ligne.",
      eyebrow: "Logiciel pour centres laser",
      h1: "Logiciel d'épilation laser pour les séries de soins",
      subtitle:
        "Suivez les séances, documentez le consentement et gérez les réservations – conçu pour les centres laser et IPL avec des dossiers structurés.",
      aiCapsules: [
        {
          question: "De quel logiciel les centres laser ont-ils besoin ?",
          answer:
            "Ils ont besoin de fiches avec historique des séries, consentements, notes de séance, photos et rappels. Treatflow offre réservation en ligne et documentation structurée pour l'épilation laser.",
        },
        {
          question: "Peut-on suivre des forfaits multi-séances ?",
          answer:
            "Oui. Chaque séance est documentée dans la fiche pour voir la progression, les notes et le prochain rendez-vous.",
        },
      ],
      whatTitle: "Qu'est-ce que Treatflow pour les centres laser ?",
      whatParas: [
        "Les soins laser se déroulent sur plusieurs séances. Treatflow suit chaque séance, conserve consentement et phototype et rappelle aux clientes le prochain rendez-vous.",
        "Un calendrier pour les réservations, une fiche pour l'historique et des formulaires numériques pour l'anamnèse – sans commission marketplace.",
      ],
      audiences: [
        "Centres d'épilation laser",
        "Cliniques IPL avec forfaits multi-séances",
        "Instituts proposant le laser",
        "Équipes à fort volume de réservations avec besoin de documentation",
      ],
      problems: [
        {
          problem: "Perte du suivi des séances",
          solution: "Historique et notes par séance dans la fiche cliente.",
        },
        {
          problem: "Informations de consentement manquantes",
          solution: "Anamnèse et consentement numériques avant chaque série.",
        },
        {
          problem: "Les clientes oublient les séances de suivi",
          solution: "Rappels et rebooking facile via votre page de réservation.",
        },
        {
          problem: "Photos et notes sur des appareils séparés",
          solution: "Documentation photo liée à chaque fiche.",
        },
      ],
      features: [
        { icon: Zap, title: "Suivi des séances", desc: "Documentez chaque séance avec des notes." },
        { icon: ClipboardCheck, title: "Consentement et anamnèse", desc: "Phototype et contre-indications au dossier." },
        { icon: Camera, title: "Photos de progression", desc: "Photos par zone traitée." },
        { icon: Calendar, title: "Planification des séries", desc: "Planifiez les rendez-vous de suivi." },
        { icon: Link2, title: "Réservation en ligne", desc: "Les clientes réservent la séance suivante en ligne." },
        { icon: Bell, title: "Rappels", desc: "Rappels automatiques de rendez-vous." },
      ],
      benefits: [
        "Vue claire de chaque série de soins",
        "Consentement structuré pour chaque nouvelle cliente",
        "Moins de relances manuelles sur les séances manquées",
        "Documentation professionnelle pour l'équipe",
        "Hébergement UE conforme au RGPD",
      ],
      marketTitle: "Pourquoi les centres laser choisissent Treatflow",
      marketParas: [
        "Les centres laser combinent un fort volume de réservations et des besoins de documentation. Treatflow relie réservation et fiches pour que chaque séance construise un historique utile.",
      ],
      highlights: [
        "Réservation en ligne sans commission",
        "Historique des séances dans les fiches numériques",
        "Consentements avant la série",
        "Photos et rappels",
        "Hébergement UE conforme au RGPD",
      ],
      aiSummary:
        "Treatflow est un logiciel d'épilation laser avec suivi des séances, consentements, photos, réservation en ligne et rappels. Pour centres laser et IPL. Conforme au RGPD.",
      faqs: [
        {
          question: "Qu'est-ce que Treatflow ?",
          answer:
            "Treatflow est un logiciel tout-en-un pour instituts, cliniques esthétiques et centres laser. Il combine réservation, fiches, consentements, documentation et rappels.",
        },
        {
          question: "Pour qui est cette page ?",
          answer:
            "Pour les centres d'épilation laser et IPL qui ont besoin de suivi de séances, de consentement et de rebooking fiable.",
        },
        {
          question: "Comment commencer ?",
          answer:
            "Demandez un accès anticipé pour votre pays. L'inscription directe est disponible en Allemagne, Autriche et Suisse.",
        },
        {
          question: "Où sont hébergées les données ?",
          answer:
            "Treatflow héberge les données dans l'UE et est conçu pour la conformité RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "treatment-documentation", "forms", "pricing"],
    }),
  },

  "permanent-makeup-software": {
    en: buildPage("en", "permanent-makeup-software", {
      serviceName: "Permanent makeup software",
      serviceDescription:
        "Software for permanent makeup artists: consent forms, pigment notes, photo documentation, client records and online booking.",
      eyebrow: "Permanent makeup software",
      h1: "Permanent makeup software for pigment artists",
      subtitle:
        "Consent, pigment documentation, touch-up scheduling and client records – built for PMU studios that need precise history.",
      aiCapsules: [
        {
          question: "What software do permanent makeup studios need?",
          answer:
            "PMU studios need detailed consent, pigment and technique notes, before/after photos, touch-up scheduling and client history. Treatflow brings booking, forms and documentation together with GDPR-compliant EU hosting.",
        },
        {
          question: "Can I document pigments and touch-ups?",
          answer:
            "Yes. Treatment notes and photos stay on the client profile so every touch-up builds on the previous session.",
        },
      ],
      whatTitle: "What is Treatflow for permanent makeup?",
      whatParas: [
        "Permanent makeup requires precise documentation: pigments, areas, techniques and healing notes. Treatflow keeps that history on the client record alongside consent and photos.",
        "Artists use online booking for consultations and touch-ups, digital forms before procedures, and reminders so clients return on time.",
      ],
      audiences: [
        "Permanent makeup and microblading artists",
        "PMU studios with multiple chairs",
        "Beauty salons offering brows, lips and eyeliner PMU",
        "Teams documenting pigments and touch-up cycles",
      ],
      problems: [
        {
          problem: "Pigment details lost between sessions",
          solution: "Structured treatment notes on every client profile.",
        },
        {
          problem: "Paper consent before procedures",
          solution: "Digital consent completed before appointments.",
        },
        {
          problem: "Touch-up dates tracked in notebooks",
          solution: "Calendar, reminders and online rebooking in one place.",
        },
        {
          problem: "Before/after photos hard to find",
          solution: "Photos linked to the client record and visit.",
        },
      ],
      features: [
        { icon: FileText, title: "Pigment & technique notes", desc: "Document colours, needles and areas treated." },
        { icon: ClipboardCheck, title: "Consent forms", desc: "Digital consent before every procedure." },
        { icon: Camera, title: "Photo documentation", desc: "Before/after photos on the client profile." },
        { icon: Calendar, title: "Touch-up scheduling", desc: "Plan healing checks and touch-ups." },
        { icon: Users, title: "Client records", desc: "Full PMU history in one place." },
        { icon: Bell, title: "Reminders", desc: "Reduce missed touch-up appointments." },
      ],
      benefits: [
        "Precise history for safer touch-ups",
        "Professional consent trail for every client",
        "Less admin between consultation and procedure",
        "Clear photo records for your portfolio and follow-up",
        "GDPR-compliant EU hosting",
      ],
      marketTitle: "Why PMU studios choose Treatflow",
      marketParas: [
        "Permanent makeup is detail-driven. Treatflow connects booking to consent, notes and photos so every visit stays documented without extra tools.",
      ],
      highlights: [
        "Online booking without commission",
        "Consent forms before procedures",
        "Pigment and technique documentation",
        "Photo history linked to clients",
        "GDPR-compliant EU hosting",
      ],
      aiSummary:
        "Treatflow is permanent makeup software with consent forms, pigment notes, photo documentation, client records, online booking and reminders. For PMU and microblading studios. GDPR-compliant.",
      faqs: [
        {
          question: "What is Treatflow?",
          answer:
            "Treatflow is all-in-one studio software with online booking, client records, consent forms, treatment documentation and reminders – suitable for permanent makeup studios.",
        },
        {
          question: "Is it suitable for microblading?",
          answer:
            "Yes. You can document techniques, pigments, photos and touch-up schedules for brows, lips and eyeliner.",
        },
        {
          question: "How do I get started?",
          answer:
            "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.",
        },
        {
          question: "Where is data hosted?",
          answer:
            "Treatflow hosts data in the EU and is designed for GDPR compliance.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
      featureKeys: ["forms", "treatment-documentation", "client-records", "pricing"],
    }),
    es: buildPage("es", "permanent-makeup-software", {
      serviceName: "Software de maquillaje permanente",
      serviceDescription:
        "Software para micropigmentación: consentimientos, notas de pigmento, fotos, fichas de clientas y reservas online.",
      eyebrow: "Software de maquillaje permanente",
      h1: "Software de maquillaje permanente para artistas PMU",
      subtitle:
        "Consentimiento, documentación de pigmentos, citas de retoque y fichas – pensado para estudios PMU que necesitan historial preciso.",
      aiCapsules: [
        {
          question: "¿Qué software necesitan los estudios de maquillaje permanente?",
          answer:
            "Necesitan consentimiento detallado, notas de pigmento y técnica, fotos antes/después, planificación de retoques e historial. Treatflow une reservas, formularios y documentación con hosting UE conforme al RGPD.",
        },
        {
          question: "¿Puedo documentar pigmentos y retoques?",
          answer:
            "Sí. Las notas y fotos quedan en la ficha para que cada retoque parta de la sesión anterior.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para maquillaje permanente?",
      whatParas: [
        "El maquillaje permanente exige documentación precisa: pigmentos, zonas, técnicas y notas de cicatrización. Treatflow guarda ese historial en la ficha junto al consentimiento y las fotos.",
        "Las artistas usan reservas online para consultas y retoques, formularios digitales antes del procedimiento y recordatorios para que las clientas vuelvan a tiempo.",
      ],
      audiences: [
        "Artistas de maquillaje permanente y microblading",
        "Estudios PMU con varias cabinas",
        "Salones que ofrecen cejas, labios y eyeliner PMU",
        "Equipos que documentan pigmentos y ciclos de retoque",
      ],
      problems: [
        {
          problem: "Detalles de pigmento perdidos entre sesiones",
          solution: "Notas de tratamiento estructuradas en cada ficha.",
        },
        {
          problem: "Consentimiento en papel",
          solution: "Consentimiento digital antes de la cita.",
        },
        {
          problem: "Fechas de retoque en libretas",
          solution: "Calendario, recordatorios y rebooking en un solo lugar.",
        },
        {
          problem: "Fotos difíciles de encontrar",
          solution: "Fotos vinculadas a la ficha y a la visita.",
        },
      ],
      features: [
        { icon: FileText, title: "Notas de pigmento y técnica", desc: "Documenta colores, agujas y zonas." },
        { icon: ClipboardCheck, title: "Consentimientos", desc: "Consentimiento digital antes de cada procedimiento." },
        { icon: Camera, title: "Fotos", desc: "Fotos antes/después en la ficha." },
        { icon: Calendar, title: "Retoques", desc: "Planifica revisiones y retoques." },
        { icon: Users, title: "Fichas de clientas", desc: "Historial PMU completo." },
        { icon: Bell, title: "Recordatorios", desc: "Menos citas de retoque perdidas." },
      ],
      benefits: [
        "Historial preciso para retoques más seguros",
        "Rastro profesional de consentimiento",
        "Menos administración entre consulta y procedimiento",
        "Archivo fotográfico claro para seguimiento",
        "Hosting en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los estudios PMU eligen Treatflow",
      marketParas: [
        "El maquillaje permanente es un trabajo de detalle. Treatflow conecta reserva, consentimiento, notas y fotos para que cada visita quede documentada sin herramientas extra.",
      ],
      highlights: [
        "Reservas online sin comisión",
        "Consentimientos antes del procedimiento",
        "Documentación de pigmento y técnica",
        "Historial fotográfico en la ficha",
        "Hosting en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es software de maquillaje permanente con consentimientos, notas de pigmento, fotos, fichas, reservas online y recordatorios. Para estudios PMU y microblading. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno con reservas, fichas, consentimientos, documentación y recordatorios – adecuado para estudios de maquillaje permanente.",
        },
        {
          question: "¿Sirve para microblading?",
          answer:
            "Sí. Puedes documentar técnicas, pigmentos, fotos y calendarios de retoque para cejas, labios y eyeliner.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Solicita acceso anticipado para tu país. El registro directo está disponible en Alemania, Austria y Suiza.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
      featureKeys: ["forms", "treatment-documentation", "client-records", "pricing"],
    }),
    it: buildPage("it", "permanent-makeup-software", {
      serviceName: "Software per trucco permanente",
      serviceDescription:
        "Software per trucco permanente: consensi, note sui pigmenti, foto, schede clienti e prenotazioni online.",
      eyebrow: "Software per trucco permanente",
      h1: "Software per trucco permanente e PMU",
      subtitle:
        "Consenso, documentazione pigmenti, ritocchi e schede clienti – pensato per studi PMU che necessitano di uno storico preciso.",
      aiCapsules: [
        {
          question: "Di quale software hanno bisogno gli studi di trucco permanente?",
          answer:
            "Servono consenso dettagliato, note su pigmenti e tecnica, foto prima/dopo, pianificazione ritocchi e storico. Treatflow unisce prenotazioni, moduli e documentazione con hosting UE GDPR.",
        },
        {
          question: "Posso documentare pigmenti e ritocchi?",
          answer:
            "Sì. Note e foto restano sulla scheda così ogni ritocco parte dalla sessione precedente.",
        },
      ],
      whatTitle: "Cos'è Treatflow per il trucco permanente?",
      whatParas: [
        "Il trucco permanente richiede documentazione precisa: pigmenti, aree, tecniche e note di guarigione. Treatflow conserva lo storico sulla scheda insieme a consenso e foto.",
        "Le artiste usano prenotazioni online per consulti e ritocchi, moduli digitali prima della procedura e promemoria per far tornare le clienti in tempo.",
      ],
      audiences: [
        "Artiste di trucco permanente e microblading",
        "Studi PMU con più postazioni",
        "Centri estetici con PMU sopracciglia, labbra e eyeliner",
        "Team che documentano pigmenti e cicli di ritocco",
      ],
      problems: [
        {
          problem: "Dettagli pigmento persi tra le sessioni",
          solution: "Note di trattamento strutturate su ogni scheda.",
        },
        {
          problem: "Consenso cartaceo",
          solution: "Consenso digitale prima dell'appuntamento.",
        },
        {
          problem: "Date ritocco su taccuini",
          solution: "Calendario, promemoria e riprenotazione in un unico posto.",
        },
        {
          problem: "Foto difficili da ritrovare",
          solution: "Foto collegate a scheda e visita.",
        },
      ],
      features: [
        { icon: FileText, title: "Note pigmento e tecnica", desc: "Documenta colori, aghi e aree." },
        { icon: ClipboardCheck, title: "Moduli di consenso", desc: "Consenso digitale prima di ogni procedura." },
        { icon: Camera, title: "Documentazione fotografica", desc: "Foto prima/dopo sul profilo." },
        { icon: Calendar, title: "Ritocchi", desc: "Pianifica controlli e ritocchi." },
        { icon: Users, title: "Schede clienti", desc: "Storico PMU completo." },
        { icon: Bell, title: "Promemoria", desc: "Meno ritocchi mancati." },
      ],
      benefits: [
        "Storico preciso per ritocchi più sicuri",
        "Traccia professionale del consenso",
        "Meno amministrazione tra consulto e procedura",
        "Archivio foto chiaro per il follow-up",
        "Hosting UE conforme al GDPR",
      ],
      marketTitle: "Perché gli studi PMU scelgono Treatflow",
      marketParas: [
        "Il trucco permanente è un lavoro di dettaglio. Treatflow collega prenotazione, consenso, note e foto così ogni visita resta documentata senza strumenti extra.",
      ],
      highlights: [
        "Prenotazioni online senza commissione",
        "Consensi prima della procedura",
        "Documentazione pigmento e tecnica",
        "Storico fotografico sulla scheda",
        "Hosting UE conforme al GDPR",
      ],
      aiSummary:
        "Treatflow è software per trucco permanente con consensi, note pigmento, foto, schede, prenotazioni online e promemoria. Per studi PMU e microblading. Conforme al GDPR.",
      faqs: [
        {
          question: "Cos'è Treatflow?",
          answer:
            "Treatflow è un software all-in-one con prenotazioni, schede, consensi, documentazione e promemoria – adatto agli studi di trucco permanente.",
        },
        {
          question: "Va bene per il microblading?",
          answer:
            "Sì. Puoi documentare tecniche, pigmenti, foto e calendari di ritocco per sopracciglia, labbra e eyeliner.",
        },
        {
          question: "Come inizio?",
          answer:
            "Richiedi l'accesso anticipato per il tuo Paese. La registrazione diretta è disponibile in Germania, Austria e Svizzera.",
        },
        {
          question: "Dove sono i dati?",
          answer:
            "Treatflow ospita i dati nell'UE ed è progettato per la conformità GDPR.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
      featureKeys: ["forms", "treatment-documentation", "client-records", "pricing"],
    }),
    fr: buildPage("fr", "permanent-makeup-software", {
      serviceName: "Logiciel de maquillage permanent",
      serviceDescription:
        "Logiciel pour le maquillage permanent : consentements, notes de pigments, photos, fiches clientes et réservation en ligne.",
      eyebrow: "Logiciel de maquillage permanent",
      h1: "Logiciel de maquillage permanent pour artistes PMU",
      subtitle:
        "Consentement, documentation des pigments, retouches et fiches clientes – conçu pour les studios PMU qui ont besoin d'un historique précis.",
      aiCapsules: [
        {
          question: "De quel logiciel les studios de maquillage permanent ont-ils besoin ?",
          answer:
            "Ils ont besoin d'un consentement détaillé, de notes pigments/technique, de photos avant/après, de planification des retouches et d'un historique. Treatflow réunit réservation, formulaires et documentation avec hébergement UE RGPD.",
        },
        {
          question: "Puis-je documenter pigments et retouches ?",
          answer:
            "Oui. Notes et photos restent sur la fiche pour que chaque retouche s'appuie sur la séance précédente.",
        },
      ],
      whatTitle: "Qu'est-ce que Treatflow pour le maquillage permanent ?",
      whatParas: [
        "Le maquillage permanent exige une documentation précise : pigments, zones, techniques et notes de cicatrisation. Treatflow conserve cet historique sur la fiche avec consentement et photos.",
        "Les artistes utilisent la réservation en ligne pour consultations et retouches, des formulaires numériques avant la procédure et des rappels pour le retour des clientes.",
      ],
      audiences: [
        "Artistes de maquillage permanent et microblading",
        "Studios PMU multi-postes",
        "Instituts proposant sourcils, lèvres et eyeliner PMU",
        "Équipes documentant pigments et cycles de retouche",
      ],
      problems: [
        {
          problem: "Détails de pigment perdus entre les séances",
          solution: "Notes de soin structurées sur chaque fiche.",
        },
        {
          problem: "Consentement papier",
          solution: "Consentement numérique avant le rendez-vous.",
        },
        {
          problem: "Dates de retouche sur carnets",
          solution: "Calendrier, rappels et rebooking au même endroit.",
        },
        {
          problem: "Photos difficiles à retrouver",
          solution: "Photos liées à la fiche et à la visite.",
        },
      ],
      features: [
        { icon: FileText, title: "Notes pigments et technique", desc: "Documentez couleurs, aiguilles et zones." },
        { icon: ClipboardCheck, title: "Formulaires de consentement", desc: "Consentement numérique avant chaque procédure." },
        { icon: Camera, title: "Documentation photo", desc: "Photos avant/après sur la fiche." },
        { icon: Calendar, title: "Retouches", desc: "Planifiez contrôles et retouches." },
        { icon: Users, title: "Fiches clientes", desc: "Historique PMU complet." },
        { icon: Bell, title: "Rappels", desc: "Moins de retouches manquées." },
      ],
      benefits: [
        "Historique précis pour des retouches plus sûres",
        "Trace professionnelle du consentement",
        "Moins d'admin entre consultation et procédure",
        "Archives photo claires pour le suivi",
        "Hébergement UE conforme au RGPD",
      ],
      marketTitle: "Pourquoi les studios PMU choisissent Treatflow",
      marketParas: [
        "Le maquillage permanent est un métier de précision. Treatflow relie réservation, consentement, notes et photos pour documenter chaque visite sans outils supplémentaires.",
      ],
      highlights: [
        "Réservation en ligne sans commission",
        "Consentements avant la procédure",
        "Documentation pigments et technique",
        "Historique photo sur la fiche",
        "Hébergement UE conforme au RGPD",
      ],
      aiSummary:
        "Treatflow est un logiciel de maquillage permanent avec consentements, notes de pigments, photos, fiches, réservation en ligne et rappels. Pour studios PMU et microblading. Conforme au RGPD.",
      faqs: [
        {
          question: "Qu'est-ce que Treatflow ?",
          answer:
            "Treatflow est un logiciel tout-en-un avec réservation, fiches, consentements, documentation et rappels – adapté aux studios de maquillage permanent.",
        },
        {
          question: "Convient-il au microblading ?",
          answer:
            "Oui. Vous pouvez documenter techniques, pigments, photos et calendriers de retouche pour sourcils, lèvres et eyeliner.",
        },
        {
          question: "Comment commencer ?",
          answer:
            "Demandez un accès anticipé pour votre pays. L'inscription directe est disponible en Allemagne, Autriche et Suisse.",
        },
        {
          question: "Où sont hébergées les données ?",
          answer:
            "Treatflow héberge les données dans l'UE et est conçu pour la conformité RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
      featureKeys: ["forms", "treatment-documentation", "client-records", "pricing"],
    }),
  },

  "tattoo-studio-software": {
    en: buildPage("en", "tattoo-studio-software", {
      serviceName: "Tattoo studio software",
      serviceDescription:
        "Software for tattoo studios: consent forms, client records, appointment booking, session notes and reminders.",
      eyebrow: "Tattoo studio software",
      h1: "Tattoo studio software for modern studios",
      subtitle:
        "Digital consent, client records, session notes and online booking – built for tattoo studios that want less paperwork and clearer schedules.",
      aiCapsules: [
        {
          question: "What software do tattoo studios need?",
          answer:
            "Tattoo studios need digital consent and waiver forms, client records, session notes, reference photos and reliable appointment booking with reminders. Treatflow combines these in one GDPR-compliant platform with EU hosting.",
        },
        {
          question: "Does Treatflow replace paper waivers?",
          answer:
            "Yes. Clients can complete digital consent before the appointment so your team starts sessions with paperwork already done.",
        },
      ],
      whatTitle: "What is Treatflow for tattoo studios?",
      whatParas: [
        "Treatflow helps tattoo studios move consent, bookings and client history into one system. Artists see notes and photos on the client profile; the front desk manages the calendar.",
        "Online booking and reminders reduce no-shows, while digital forms cut paper clutter before every session.",
      ],
      audiences: [
        "Tattoo studios and private studios",
        "Multi-artist shops sharing one calendar",
        "Studios offering tattoos and aftercare follow-ups",
        "Teams replacing paper waivers and diaries",
      ],
      problems: [
        {
          problem: "Paper waivers and filing cabinets",
          solution: "Digital consent stored securely on the client record.",
        },
        {
          problem: "Double bookings across artists",
          solution: "Shared calendar with clear availability.",
        },
        {
          problem: "Session notes on phones and paper",
          solution: "Treatment notes and photos linked to each client.",
        },
        {
          problem: "Clients forget deposit or appointment times",
          solution: "Reminders by SMS and email.",
        },
      ],
      features: [
        { icon: ClipboardCheck, title: "Consent & waivers", desc: "Digital forms before every session." },
        { icon: Users, title: "Client records", desc: "History, notes and contacts in one profile." },
        { icon: FileText, title: "Session notes", desc: "Document work, aftercare and next steps." },
        { icon: Camera, title: "Reference photos", desc: "Store references and progress photos." },
        { icon: Link2, title: "Online booking", desc: "Clients request or book available slots." },
        { icon: Calendar, title: "Studio calendar", desc: "Coordinate artists and rooms." },
      ],
      benefits: [
        "Less paper before every session",
        "Clearer schedules across artists",
        "Client history ready for touch-ups and cover-ups",
        "Fewer missed appointments with reminders",
        "GDPR-compliant EU hosting",
      ],
      marketTitle: "Why tattoo studios choose Treatflow",
      marketParas: [
        "Tattoo studios need consent and scheduling as much as creative tools. Treatflow focuses on studio operations – booking, forms and records – without marketplace commissions.",
      ],
      highlights: [
        "Digital consent before sessions",
        "Shared calendar for multi-artist shops",
        "Client records with notes and photos",
        "Reminders to reduce no-shows",
        "GDPR-compliant EU hosting",
      ],
      aiSummary:
        "Treatflow is tattoo studio software with digital consent, client records, session notes, photo documentation, online booking and reminders. For tattoo studios and multi-artist shops. GDPR-compliant.",
      faqs: [
        {
          question: "What is Treatflow?",
          answer:
            "Treatflow is studio management software with online booking, client records, consent forms, documentation and reminders – suitable for tattoo studios.",
        },
        {
          question: "Can multiple artists share one studio?",
          answer:
            "Yes. A shared calendar and client records help multi-artist shops stay organised.",
        },
        {
          question: "How do I get started?",
          answer:
            "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.",
        },
        {
          question: "Where is data hosted?",
          answer:
            "Treatflow hosts data in the EU and is designed for GDPR compliance.",
        },
      ],
      siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["forms", "online-booking", "client-records", "pricing"],
    }),
    es: buildPage("es", "tattoo-studio-software", {
      serviceName: "Software para estudios de tatuajes",
      serviceDescription:
        "Software para estudios de tatuajes: consentimientos, fichas, reservas, notas de sesión y recordatorios.",
      eyebrow: "Software para estudios de tatuajes",
      h1: "Software para estudios de tatuajes modernos",
      subtitle:
        "Consentimiento digital, fichas de clientas, notas de sesión y reservas online – pensado para estudios que quieren menos papel y agendas más claras.",
      aiCapsules: [
        {
          question: "¿Qué software necesitan los estudios de tatuajes?",
          answer:
            "Necesitan consentimientos digitales, fichas, notas de sesión, fotos de referencia y reservas fiables con recordatorios. Treatflow lo combina en una plataforma conforme al RGPD con hosting en la UE.",
        },
        {
          question: "¿Sustituye los waivers en papel?",
          answer:
            "Sí. Las clientas pueden completar el consentimiento digital antes de la cita para empezar la sesión con el papeleo hecho.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para estudios de tatuajes?",
      whatParas: [
        "Treatflow ayuda a pasar consentimientos, reservas e historial a un solo sistema. Los artistas ven notas y fotos en la ficha; recepción gestiona la agenda.",
        "Las reservas online y los recordatorios reducen ausencias; los formularios digitales eliminan el papel antes de cada sesión.",
      ],
      audiences: [
        "Estudios de tatuajes y estudios privados",
        "Shops con varios artistas y una sola agenda",
        "Estudios con follow-up de aftercare",
        "Equipos que dejan waivers y agendas en papel",
      ],
      problems: [
        {
          problem: "Waivers en papel y archivadores",
          solution: "Consentimiento digital seguro en la ficha.",
        },
        {
          problem: "Dobles reservas entre artistas",
          solution: "Calendario compartido con disponibilidad clara.",
        },
        {
          problem: "Notas en el móvil y en papel",
          solution: "Notas y fotos vinculadas a cada clienta.",
        },
        {
          problem: "Se olvidan depósitos o horarios",
          solution: "Recordatorios por SMS y email.",
        },
      ],
      features: [
        { icon: ClipboardCheck, title: "Consentimientos", desc: "Formularios digitales antes de cada sesión." },
        { icon: Users, title: "Fichas", desc: "Historial, notas y contacto en un perfil." },
        { icon: FileText, title: "Notas de sesión", desc: "Documenta trabajo, aftercare y siguientes pasos." },
        { icon: Camera, title: "Fotos de referencia", desc: "Guarda referencias y progreso." },
        { icon: Link2, title: "Reservas online", desc: "Las clientas solicitan o reservan huecos." },
        { icon: Calendar, title: "Agenda del estudio", desc: "Coordina artistas y espacios." },
      ],
      benefits: [
        "Menos papel antes de cada sesión",
        "Agendas más claras entre artistas",
        "Historial listo para retoques y cover-ups",
        "Menos ausencias con recordatorios",
        "Hosting en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los estudios de tatuajes eligen Treatflow",
      marketParas: [
        "Los estudios necesitan consentimiento y agenda tanto como herramientas creativas. Treatflow se centra en la operativa – reservas, formularios y fichas – sin comisiones de marketplace.",
      ],
      highlights: [
        "Consentimiento digital antes de la sesión",
        "Agenda compartida multi-artista",
        "Fichas con notas y fotos",
        "Recordatorios para reducir ausencias",
        "Hosting en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es software para estudios de tatuajes con consentimientos digitales, fichas, notas, fotos, reservas online y recordatorios. Para estudios y shops multi-artista. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es software de gestión con reservas, fichas, consentimientos, documentación y recordatorios – adecuado para estudios de tatuajes.",
        },
        {
          question: "¿Varios artistas pueden compartir el estudio?",
          answer:
            "Sí. Un calendario compartido y fichas comunes ayudan a organizar shops multi-artista.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Solicita acceso anticipado para tu país. El registro directo está disponible en Alemania, Austria y Suiza.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["forms", "online-booking", "client-records", "pricing"],
    }),
    it: buildPage("it", "tattoo-studio-software", {
      serviceName: "Software per studi di tatuaggi",
      serviceDescription:
        "Software per studi di tatuaggi: consensi, schede clienti, prenotazioni, note di sessione e promemoria.",
      eyebrow: "Software per studi di tatuaggi",
      h1: "Software per studi di tatuaggi moderni",
      subtitle:
        "Consenso digitale, schede clienti, note di sessione e prenotazioni online – pensato per studi che vogliono meno carta e agende più chiare.",
      aiCapsules: [
        {
          question: "Di quale software hanno bisogno gli studi di tatuaggi?",
          answer:
            "Servono consensi digitali, schede, note di sessione, foto di riferimento e prenotazioni affidabili con promemoria. Treatflow li unisce in una piattaforma GDPR con hosting UE.",
        },
        {
          question: "Sostituisce i waiver cartacei?",
          answer:
            "Sì. Le clienti possono completare il consenso digitale prima dell'appuntamento così la sessione parte con la documentazione già pronta.",
        },
      ],
      whatTitle: "Cos'è Treatflow per gli studi di tatuaggi?",
      whatParas: [
        "Treatflow aiuta a spostare consensi, prenotazioni e storico in un unico sistema. Gli artisti vedono note e foto sulla scheda; la reception gestisce il calendario.",
        "Prenotazioni online e promemoria riducono le assenze; i moduli digitali eliminano la carta prima di ogni sessione.",
      ],
      audiences: [
        "Studi di tatuaggi e private studio",
        "Shop multi-artista con un solo calendario",
        "Studi con follow-up di aftercare",
        "Team che abbandonano waiver e agende cartacee",
      ],
      problems: [
        {
          problem: "Waiver cartacei e archivi",
          solution: "Consenso digitale sicuro sulla scheda.",
        },
        {
          problem: "Doppie prenotazioni tra artisti",
          solution: "Calendario condiviso con disponibilità chiara.",
        },
        {
          problem: "Note su telefono e carta",
          solution: "Note e foto collegate a ogni cliente.",
        },
        {
          problem: "Si dimenticano depositi o orari",
          solution: "Promemoria SMS ed email.",
        },
      ],
      features: [
        { icon: ClipboardCheck, title: "Consensi e waiver", desc: "Moduli digitali prima di ogni sessione." },
        { icon: Users, title: "Schede clienti", desc: "Storico, note e contatti in un profilo." },
        { icon: FileText, title: "Note di sessione", desc: "Documenta lavoro, aftercare e passi successivi." },
        { icon: Camera, title: "Foto di riferimento", desc: "Conserva riferimenti e progressi." },
        { icon: Link2, title: "Prenotazioni online", desc: "Le clienti richiedono o prenotano slot." },
        { icon: Calendar, title: "Calendario dello studio", desc: "Coordina artisti e stanze." },
      ],
      benefits: [
        "Meno carta prima di ogni sessione",
        "Agende più chiare tra artisti",
        "Storico pronto per ritocchi e cover-up",
        "Meno assenze con i promemoria",
        "Hosting UE conforme al GDPR",
      ],
      marketTitle: "Perché gli studi di tatuaggi scelgono Treatflow",
      marketParas: [
        "Gli studi hanno bisogno di consenso e pianificazione quanto di strumenti creativi. Treatflow si concentra sull'operatività – prenotazioni, moduli e schede – senza commissioni marketplace.",
      ],
      highlights: [
        "Consenso digitale prima della sessione",
        "Calendario condiviso multi-artista",
        "Schede con note e foto",
        "Promemoria per ridurre le assenze",
        "Hosting UE conforme al GDPR",
      ],
      aiSummary:
        "Treatflow è software per studi di tatuaggi con consensi digitali, schede, note, foto, prenotazioni online e promemoria. Per studi e shop multi-artista. Conforme al GDPR.",
      faqs: [
        {
          question: "Cos'è Treatflow?",
          answer:
            "Treatflow è un software di gestione con prenotazioni, schede, consensi, documentazione e promemoria – adatto agli studi di tatuaggi.",
        },
        {
          question: "Più artisti possono condividere lo studio?",
          answer:
            "Sì. Un calendario condiviso e schede comuni aiutano gli shop multi-artista.",
        },
        {
          question: "Come inizio?",
          answer:
            "Richiedi l'accesso anticipato per il tuo Paese. La registrazione diretta è disponibile in Germania, Austria e Svizzera.",
        },
        {
          question: "Dove sono i dati?",
          answer:
            "Treatflow ospita i dati nell'UE ed è progettato per la conformità GDPR.",
        },
      ],
      siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["forms", "online-booking", "client-records", "pricing"],
    }),
    fr: buildPage("fr", "tattoo-studio-software", {
      serviceName: "Logiciel pour salons de tatouage",
      serviceDescription:
        "Logiciel pour salons de tatouage : consentements, fiches clients, réservation, notes de séance et rappels.",
      eyebrow: "Logiciel pour salons de tatouage",
      h1: "Logiciel pour salons de tatouage modernes",
      subtitle:
        "Consentement numérique, fiches clients, notes de séance et réservation en ligne – conçu pour les studios qui veulent moins de papier et des agendas plus clairs.",
      aiCapsules: [
        {
          question: "De quel logiciel les salons de tatouage ont-ils besoin ?",
          answer:
            "Ils ont besoin de consentements numériques, de fiches, de notes de séance, de photos de référence et de réservations fiables avec rappels. Treatflow les réunit dans une plateforme RGPD avec hébergement UE.",
        },
        {
          question: "Remplace-t-il les waivers papier ?",
          answer:
            "Oui. Les clientes peuvent remplir le consentement numérique avant le rendez-vous pour démarrer la séance avec les formalités déjà faites.",
        },
      ],
      whatTitle: "Qu'est-ce que Treatflow pour les salons de tatouage ?",
      whatParas: [
        "Treatflow aide à centraliser consentements, réservations et historique. Les artistes voient notes et photos sur la fiche ; l'accueil gère le calendrier.",
        "La réservation en ligne et les rappels réduisent les absences ; les formulaires numériques éliminent le papier avant chaque séance.",
      ],
      audiences: [
        "Salons de tatouage et studios privés",
        "Shops multi-artistes partageant un calendrier",
        "Studios avec suivi aftercare",
        "Équipes qui quittent waivers et agendas papier",
      ],
      problems: [
        {
          problem: "Waivers papier et classeurs",
          solution: "Consentement numérique sécurisé sur la fiche.",
        },
        {
          problem: "Doubles réservations entre artistes",
          solution: "Calendrier partagé avec disponibilités claires.",
        },
        {
          problem: "Notes sur téléphone et papier",
          solution: "Notes et photos liées à chaque cliente.",
        },
        {
          problem: "Oublis d'acompte ou d'horaire",
          solution: "Rappels SMS et e-mail.",
        },
      ],
      features: [
        { icon: ClipboardCheck, title: "Consentements", desc: "Formulaires numériques avant chaque séance." },
        { icon: Users, title: "Fiches clients", desc: "Historique, notes et contacts dans un profil." },
        { icon: FileText, title: "Notes de séance", desc: "Documentez travail, aftercare et prochaines étapes." },
        { icon: Camera, title: "Photos de référence", desc: "Conservez références et progression." },
        { icon: Link2, title: "Réservation en ligne", desc: "Les clientes demandent ou réservent des créneaux." },
        { icon: Calendar, title: "Agenda du studio", desc: "Coordonnez artistes et espaces." },
      ],
      benefits: [
        "Moins de papier avant chaque séance",
        "Agendas plus clairs entre artistes",
        "Historique prêt pour retouches et cover-ups",
        "Moins d'absences grâce aux rappels",
        "Hébergement UE conforme au RGPD",
      ],
      marketTitle: "Pourquoi les salons de tatouage choisissent Treatflow",
      marketParas: [
        "Les studios ont besoin de consentement et de planning autant que d'outils créatifs. Treatflow se concentre sur l'exploitation – réservation, formulaires et fiches – sans commission marketplace.",
      ],
      highlights: [
        "Consentement numérique avant la séance",
        "Agenda partagé multi-artistes",
        "Fiches avec notes et photos",
        "Rappels pour réduire les absences",
        "Hébergement UE conforme au RGPD",
      ],
      aiSummary:
        "Treatflow est un logiciel pour salons de tatouage avec consentements numériques, fiches, notes, photos, réservation en ligne et rappels. Pour studios et shops multi-artistes. Conforme au RGPD.",
      faqs: [
        {
          question: "Qu'est-ce que Treatflow ?",
          answer:
            "Treatflow est un logiciel de gestion avec réservation, fiches, consentements, documentation et rappels – adapté aux salons de tatouage.",
        },
        {
          question: "Plusieurs artistes peuvent-ils partager le studio ?",
          answer:
            "Oui. Un calendrier partagé et des fiches communes aident les shops multi-artistes.",
        },
        {
          question: "Comment commencer ?",
          answer:
            "Demandez un accès anticipé pour votre pays. L'inscription directe est disponible en Allemagne, Autriche et Suisse.",
        },
        {
          question: "Où sont hébergées les données ?",
          answer:
            "Treatflow héberge les données dans l'UE et est conçu pour la conformité RGPD.",
        },
      ],
      siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["forms", "online-booking", "client-records", "pricing"],
    }),
  },

  "nail-salon-software": {
    en: buildPage("en", "nail-salon-software", {
      serviceName: "Nail salon software",
      serviceDescription:
        "Software for nail salons: online booking, client records, appointment reminders and treatment notes.",
      eyebrow: "Nail salon software",
      h1: "Nail salon software for busy nail bars",
      subtitle:
        "Online booking, client preferences, reminders and clear schedules – built for nail salons that run on high appointment volume.",
      aiCapsules: [
        {
          question: "What is the best software for nail salons?",
          answer:
            "Nail salons benefit from online booking without commissions, a clear team calendar, client preference notes and automatic reminders. Treatflow provides these with GDPR-compliant EU hosting.",
        },
        {
          question: "Can clients book fill appointments online?",
          answer:
            "Yes. Clients can book services on your personal booking page around the clock – without marketplace fees.",
        },
      ],
      whatTitle: "What is Treatflow for nail salons?",
      whatParas: [
        "Nail salons live on repeat bookings. Treatflow keeps the calendar clear, stores client preferences and sends reminders so fills and new sets arrive on time.",
        "Digital client records help your team remember shapes, colours and allergies – without hunting through chats and notebooks.",
      ],
      audiences: [
        "Nail salons and nail bars",
        "Manicure and pedicure studios",
        "Multi-technician teams with shared calendars",
        "Salons replacing Instagram DMs for bookings",
      ],
      problems: [
        {
          problem: "Bookings scattered across DMs and phone calls",
          solution: "One online booking page and shared calendar.",
        },
        {
          problem: "Forgotten client preferences",
          solution: "Notes on colour, shape and allergies in the client record.",
        },
        {
          problem: "High no-show rates on fills",
          solution: "Automatic SMS and email reminders.",
        },
        {
          problem: "Hard handovers between technicians",
          solution: "Shared history for every client.",
        },
      ],
      features: [
        { icon: Link2, title: "Online booking", desc: "24/7 booking page without commission." },
        { icon: Calendar, title: "Team calendar", desc: "Coordinate technicians and stations." },
        { icon: Users, title: "Client records", desc: "Preferences, history and notes." },
        { icon: Bell, title: "Reminders", desc: "Reduce missed fills and walk-outs." },
        { icon: ClipboardCheck, title: "Intake forms", desc: "Capture allergies and preferences digitally." },
        { icon: FileText, title: "Visit notes", desc: "Document services and products used." },
      ],
      benefits: [
        "Fewer booking messages to manage",
        "Smoother days with a clear team calendar",
        "Clients feel remembered through preference notes",
        "Lower no-show rates with reminders",
        "GDPR-compliant EU hosting",
      ],
      marketTitle: "Why nail salons choose Treatflow",
      marketParas: [
        "High-volume nail salons need booking and client memory more than complex clinic modules. Treatflow keeps operations simple while still offering forms and documentation when you need them.",
      ],
      highlights: [
        "Commission-free online booking",
        "Shared calendar for technicians",
        "Client preference history",
        "Automatic reminders",
        "GDPR-compliant EU hosting",
      ],
      aiSummary:
        "Treatflow is nail salon software with online booking, client records, preference notes, reminders and digital forms. For nail salons and multi-technician nail bars. GDPR-compliant.",
      faqs: [
        {
          question: "What is Treatflow?",
          answer:
            "Treatflow is all-in-one studio software with online booking, client records, forms, documentation and reminders – suitable for nail salons.",
        },
        {
          question: "Does Treatflow charge per booking?",
          answer:
            "No. There is no commission per appointment.",
        },
        {
          question: "How do I get started?",
          answer:
            "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.",
        },
        {
          question: "Where is data hosted?",
          answer:
            "Treatflow hosts data in the EU and is designed for GDPR compliance.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    }),
    es: buildPage("es", "nail-salon-software", {
      serviceName: "Software para salones de uñas",
      serviceDescription:
        "Software para salones de uñas: reservas online, fichas de clientas, recordatorios y notas de servicio.",
      eyebrow: "Software para salones de uñas",
      h1: "Software para salones de uñas con alta rotación",
      subtitle:
        "Reservas online, preferencias de clientas, recordatorios y agendas claras – pensado para nail bars con mucho volumen de citas.",
      aiCapsules: [
        {
          question: "¿Cuál es el mejor software para salones de uñas?",
          answer:
            "Los salones de uñas necesitan reservas online sin comisión, agenda de equipo, notas de preferencias y recordatorios automáticos. Treatflow lo ofrece con hosting UE conforme al RGPD.",
        },
        {
          question: "¿Las clientas pueden reservar rellenos online?",
          answer:
            "Sí. Pueden reservar servicios en tu página de reservas las 24 horas – sin comisiones de marketplace.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para salones de uñas?",
      whatParas: [
        "Los salones de uñas viven de las citas recurrentes. Treatflow mantiene la agenda clara, guarda preferencias y envía recordatorios para que rellenos y sets nuevos lleguen a tiempo.",
        "Las fichas digitales ayudan al equipo a recordar formas, colores y alergias – sin buscar en chats y libretas.",
      ],
      audiences: [
        "Salones de uñas y nail bars",
        "Estudios de manicura y pedicura",
        "Equipos con varias técnicas y agenda compartida",
        "Salones que dejan de gestionar citas por Instagram DM",
      ],
      problems: [
        {
          problem: "Reservas repartidas entre DMs y llamadas",
          solution: "Una página de reservas y calendario compartido.",
        },
        {
          problem: "Preferencias olvidadas",
          solution: "Notas de color, forma y alergias en la ficha.",
        },
        {
          problem: "Muchas ausencias en rellenos",
          solution: "Recordatorios automáticos por SMS y email.",
        },
        {
          problem: "Traspasos difíciles entre técnicas",
          solution: "Historial compartido de cada clienta.",
        },
      ],
      features: [
        { icon: Link2, title: "Reservas online", desc: "Página 24/7 sin comisión." },
        { icon: Calendar, title: "Agenda del equipo", desc: "Coordina técnicas y puestos." },
        { icon: Users, title: "Fichas de clientas", desc: "Preferencias, historial y notas." },
        { icon: Bell, title: "Recordatorios", desc: "Menos rellenos perdidos." },
        { icon: ClipboardCheck, title: "Formularios", desc: "Alergias y preferencias en digital." },
        { icon: FileText, title: "Notas de visita", desc: "Documenta servicios y productos." },
      ],
      benefits: [
        "Menos mensajes de reserva que gestionar",
        "Días más fluidos con agenda clara",
        "Las clientas se sienten recordadas",
        "Menos ausencias con recordatorios",
        "Hosting en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los salones de uñas eligen Treatflow",
      marketParas: [
        "Los salones de uñas de alto volumen necesitan reservas y memoria de clienta más que módulos clínicos complejos. Treatflow mantiene la operativa simple y ofrece formularios cuando hacen falta.",
      ],
      highlights: [
        "Reservas online sin comisión",
        "Agenda compartida para técnicas",
        "Historial de preferencias",
        "Recordatorios automáticos",
        "Hosting en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es software para salones de uñas con reservas online, fichas, preferencias, recordatorios y formularios. Para nail bars y equipos multi-técnica. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno con reservas, fichas, formularios, documentación y recordatorios – adecuado para salones de uñas.",
        },
        {
          question: "¿Cobra comisión por cita?",
          answer:
            "No. No hay comisión por reserva.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Solicita acceso anticipado para tu país. El registro directo está disponible en Alemania, Austria y Suiza.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    }),
    it: buildPage("it", "nail-salon-software", {
      serviceName: "Software per centri unghie",
      serviceDescription:
        "Software per centri unghie: prenotazioni online, schede clienti, promemoria e note di servizio.",
      eyebrow: "Software per centri unghie",
      h1: "Software per nail bar ad alto volume",
      subtitle:
        "Prenotazioni online, preferenze clienti, promemoria e agende chiare – pensato per centri unghie con tanti appuntamenti.",
      aiCapsules: [
        {
          question: "Qual è il miglior software per centri unghie?",
          answer:
            "I centri unghie hanno bisogno di prenotazioni online senza commissioni, calendario team, note sulle preferenze e promemoria automatici. Treatflow li offre con hosting UE GDPR.",
        },
        {
          question: "Le clienti possono prenotare i refill online?",
          answer:
            "Sì. Possono prenotare servizi sulla tua pagina 24/7 – senza commissioni di marketplace.",
        },
      ],
      whatTitle: "Cos'è Treatflow per i centri unghie?",
      whatParas: [
        "I centri unghie vivono di appuntamenti ricorrenti. Treatflow tiene l'agenda chiara, conserva le preferenze e invia promemoria così refill e nuovi set arrivano in orario.",
        "Le schede digitali aiutano il team a ricordare forme, colori e allergie – senza cercare tra chat e taccuini.",
      ],
      audiences: [
        "Centri unghie e nail bar",
        "Studi di manicure e pedicure",
        "Team multi-tecnica con calendario condiviso",
        "Centri che abbandonano le DM di Instagram per le prenotazioni",
      ],
      problems: [
        {
          problem: "Prenotazioni sparse tra DM e telefono",
          solution: "Una pagina di prenotazione e calendario condiviso.",
        },
        {
          problem: "Preferenze dimenticate",
          solution: "Note su colore, forma e allergie in scheda.",
        },
        {
          problem: "Tanti no-show sui refill",
          solution: "Promemoria automatici SMS ed email.",
        },
        {
          problem: "Passaggi difficili tra tecniche",
          solution: "Storico condiviso di ogni cliente.",
        },
      ],
      features: [
        { icon: Link2, title: "Prenotazioni online", desc: "Pagina 24/7 senza commissioni." },
        { icon: Calendar, title: "Calendario team", desc: "Coordina tecniche e postazioni." },
        { icon: Users, title: "Schede clienti", desc: "Preferenze, storico e note." },
        { icon: Bell, title: "Promemoria", desc: "Meno refill mancati." },
        { icon: ClipboardCheck, title: "Moduli", desc: "Allergie e preferenze in digitale." },
        { icon: FileText, title: "Note di visita", desc: "Documenta servizi e prodotti." },
      ],
      benefits: [
        "Meno messaggi di prenotazione da gestire",
        "Giornate più fluide con agenda chiara",
        "Le clienti si sentono ricordate",
        "Meno assenze con i promemoria",
        "Hosting UE conforme al GDPR",
      ],
      marketTitle: "Perché i centri unghie scelgono Treatflow",
      marketParas: [
        "I centri unghie ad alto volume hanno bisogno di prenotazioni e memoria cliente più che di moduli clinici complessi. Treatflow mantiene l'operatività semplice e offre moduli quando servono.",
      ],
      highlights: [
        "Prenotazioni online senza commissione",
        "Calendario condiviso per le tecniche",
        "Storico delle preferenze",
        "Promemoria automatici",
        "Hosting UE conforme al GDPR",
      ],
      aiSummary:
        "Treatflow è software per centri unghie con prenotazioni online, schede, preferenze, promemoria e moduli. Per nail bar e team multi-tecnica. Conforme al GDPR.",
      faqs: [
        {
          question: "Cos'è Treatflow?",
          answer:
            "Treatflow è un software all-in-one con prenotazioni, schede, moduli, documentazione e promemoria – adatto ai centri unghie.",
        },
        {
          question: "Applica commissioni per appuntamento?",
          answer:
            "No. Nessuna commissione per prenotazione.",
        },
        {
          question: "Come inizio?",
          answer:
            "Richiedi l'accesso anticipato per il tuo Paese. La registrazione diretta è disponibile in Germania, Austria e Svizzera.",
        },
        {
          question: "Dove sono i dati?",
          answer:
            "Treatflow ospita i dati nell'UE ed è progettato per la conformità GDPR.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    }),
    fr: buildPage("fr", "nail-salon-software", {
      serviceName: "Logiciel pour salons d'ongles",
      serviceDescription:
        "Logiciel pour salons d'ongles : réservation en ligne, fiches clientes, rappels et notes de service.",
      eyebrow: "Logiciel pour salons d'ongles",
      h1: "Logiciel pour nail bars à fort volume",
      subtitle:
        "Réservation en ligne, préférences clientes, rappels et agendas clairs – conçu pour les salons d'ongles à fort rythme de rendez-vous.",
      aiCapsules: [
        {
          question: "Quel est le meilleur logiciel pour salons d'ongles ?",
          answer:
            "Les salons d'ongles ont besoin de réservation en ligne sans commission, d'un agenda d'équipe, de notes de préférences et de rappels automatiques. Treatflow les offre avec hébergement UE RGPD.",
        },
        {
          question: "Les clientes peuvent-elles réserver des remplissages en ligne ?",
          answer:
            "Oui. Elles réservent sur votre page 24/7 – sans frais de marketplace.",
        },
      ],
      whatTitle: "Qu'est-ce que Treatflow pour les salons d'ongles ?",
      whatParas: [
        "Les salons d'ongles vivent des rendez-vous récurrents. Treatflow garde l'agenda clair, conserve les préférences et envoie des rappels pour que remplissages et poses arrivent à l'heure.",
        "Les fiches numériques aident l'équipe à retenir formes, couleurs et allergies – sans fouiller chats et carnets.",
      ],
      audiences: [
        "Salons d'ongles et nail bars",
        "Studios de manucure et pédicure",
        "Équipes multi-techniciennes avec agenda partagé",
        "Salons qui quittent les DM Instagram pour les réservations",
      ],
      problems: [
        {
          problem: "Réservations éparpillées entre DM et appels",
          solution: "Une page de réservation et un calendrier partagé.",
        },
        {
          problem: "Préférences oubliées",
          solution: "Notes sur couleur, forme et allergies dans la fiche.",
        },
        {
          problem: "Beaucoup d'absences sur les remplissages",
          solution: "Rappels automatiques SMS et e-mail.",
        },
        {
          problem: "Passages difficiles entre techniciennes",
          solution: "Historique partagé de chaque cliente.",
        },
      ],
      features: [
        { icon: Link2, title: "Réservation en ligne", desc: "Page 24/7 sans commission." },
        { icon: Calendar, title: "Agenda d'équipe", desc: "Coordonnez techniciennes et postes." },
        { icon: Users, title: "Fiches clientes", desc: "Préférences, historique et notes." },
        { icon: Bell, title: "Rappels", desc: "Moins de remplissages manqués." },
        { icon: ClipboardCheck, title: "Formulaires", desc: "Allergies et préférences en numérique." },
        { icon: FileText, title: "Notes de visite", desc: "Documentez services et produits." },
      ],
      benefits: [
        "Moins de messages de réservation à gérer",
        "Journées plus fluides avec un agenda clair",
        "Les clientes se sentent reconnues",
        "Moins d'absences grâce aux rappels",
        "Hébergement UE conforme au RGPD",
      ],
      marketTitle: "Pourquoi les salons d'ongles choisissent Treatflow",
      marketParas: [
        "Les salons d'ongles à fort volume ont besoin de réservation et de mémoire cliente plus que de modules cliniques complexes. Treatflow garde l'exploitation simple et offre des formulaires quand il le faut.",
      ],
      highlights: [
        "Réservation en ligne sans commission",
        "Agenda partagé pour les techniciennes",
        "Historique des préférences",
        "Rappels automatiques",
        "Hébergement UE conforme au RGPD",
      ],
      aiSummary:
        "Treatflow est un logiciel pour salons d'ongles avec réservation en ligne, fiches, préférences, rappels et formulaires. Pour nail bars et équipes multi-techniciennes. Conforme au RGPD.",
      faqs: [
        {
          question: "Qu'est-ce que Treatflow ?",
          answer:
            "Treatflow est un logiciel tout-en-un avec réservation, fiches, formulaires, documentation et rappels – adapté aux salons d'ongles.",
        },
        {
          question: "Prend-il une commission par rendez-vous ?",
          answer:
            "Non. Aucune commission par réservation.",
        },
        {
          question: "Comment commencer ?",
          answer:
            "Demandez un accès anticipé pour votre pays. L'inscription directe est disponible en Allemagne, Autriche et Suisse.",
        },
        {
          question: "Où sont hébergées les données ?",
          answer:
            "Treatflow héberge les données dans l'UE et est conçu pour la conformité RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    }),
  },

  "lash-studio-software": {
    en: buildPage("en", "lash-studio-software", {
      serviceName: "Lash studio software",
      serviceDescription:
        "Software for lash studios: fill scheduling, client records, consent forms, photo documentation and online booking.",
      eyebrow: "Lash studio software",
      h1: "Lash studio software for extensions and fills",
      subtitle:
        "Schedule fills, store lash maps and consent, send reminders and keep client photos – built for lash studios that run on retention.",
      aiCapsules: [
        {
          question: "What software do lash studios need?",
          answer:
            "Lash studios need fill scheduling, client preference and mapping notes, consent forms, progress photos and reminders. Treatflow combines booking, records and forms with GDPR-compliant EU hosting.",
        },
        {
          question: "Can I track fill intervals per client?",
          answer:
            "Yes. Visit history and notes stay on the client profile so you know when the next fill is due and what was applied last time.",
        },
      ],
      whatTitle: "What is Treatflow for lash studios?",
      whatParas: [
        "Lash businesses thrive on fills. Treatflow keeps the calendar full, documents curl, length and mapping preferences, and reminds clients before their next appointment.",
        "Digital consent and photo documentation support professional standards without slowing down your chair time.",
      ],
      audiences: [
        "Lash extension studios",
        "Beauty salons with dedicated lash artists",
        "Solo lash techs managing their own bookings",
        "Teams coordinating fills across multiple chairs",
      ],
      problems: [
        {
          problem: "Fill dates tracked in spreadsheets",
          solution: "Client history and reminders in one system.",
        },
        {
          problem: "Mapping preferences forgotten",
          solution: "Notes and photos on every client profile.",
        },
        {
          problem: "Consent still on paper",
          solution: "Digital forms completed before appointments.",
        },
        {
          problem: "Inbox flooded with booking requests",
          solution: "Online booking page without commission.",
        },
      ],
      features: [
        { icon: Calendar, title: "Fill scheduling", desc: "Plan sets and fills with clear availability." },
        { icon: Users, title: "Client & lash notes", desc: "Curl, length, mapping and adhesives on file." },
        { icon: ClipboardCheck, title: "Consent forms", desc: "Digital intake before every new set." },
        { icon: Camera, title: "Progress photos", desc: "Document results per visit." },
        { icon: Link2, title: "Online booking", desc: "Clients book fills 24/7." },
        { icon: Bell, title: "Fill reminders", desc: "Keep retention high with automatic reminders." },
      ],
      benefits: [
        "Higher fill retention with timely reminders",
        "Consistent results through documented preferences",
        "Less chair-side admin",
        "Professional consent and photo records",
        "GDPR-compliant EU hosting",
      ],
      marketTitle: "Why lash studios choose Treatflow",
      marketParas: [
        "Lash studios need retention tools as much as booking tools. Treatflow connects appointments to client notes and reminders so fills stay predictable.",
      ],
      highlights: [
        "Commission-free online booking",
        "Lash preference and mapping notes",
        "Consent forms before new sets",
        "Fill reminders and photo history",
        "GDPR-compliant EU hosting",
      ],
      aiSummary:
        "Treatflow is lash studio software with fill scheduling, client notes, consent forms, photo documentation, online booking and reminders. For lash extension studios. GDPR-compliant.",
      faqs: [
        {
          question: "What is Treatflow?",
          answer:
            "Treatflow is all-in-one studio software with online booking, client records, consent forms, documentation and reminders – suitable for lash studios.",
        },
        {
          question: "Is it good for solo lash techs?",
          answer:
            "Yes. Solo artists use Treatflow for booking, reminders and client history without marketplace commissions.",
        },
        {
          question: "How do I get started?",
          answer:
            "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.",
        },
        {
          question: "Where is data hosted?",
          answer:
            "Treatflow hosts data in the EU and is designed for GDPR compliance.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    }),
    es: buildPage("es", "lash-studio-software", {
      serviceName: "Software de extensión de pestañas",
      serviceDescription:
        "Software para estudios de pestañas: agenda de rellenos, fichas, consentimientos, fotos y reservas online.",
      eyebrow: "Software de extensión de pestañas",
      h1: "Software para estudios de pestañas y rellenos",
      subtitle:
        "Programa rellenos, guarda mapas y consentimientos, envía recordatorios y conserva fotos – pensado para estudios que viven de la retención.",
      aiCapsules: [
        {
          question: "¿Qué software necesitan los estudios de pestañas?",
          answer:
            "Necesitan agenda de rellenos, notas de preferencias y mapeo, consentimientos, fotos y recordatorios. Treatflow combina reservas, fichas y formularios con hosting UE conforme al RGPD.",
        },
        {
          question: "¿Puedo seguir el intervalo de relleno por clienta?",
          answer:
            "Sí. El historial y las notas quedan en la ficha para saber cuándo toca el siguiente relleno y qué se aplicó la vez anterior.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para estudios de pestañas?",
      whatParas: [
        "Los negocios de pestañas prosperan con los rellenos. Treatflow mantiene la agenda llena, documenta curl, largo y mapeo, y recuerda a las clientas antes de la siguiente cita.",
        "El consentimiento digital y las fotos respaldan un estándar profesional sin frenar el trabajo en cabina.",
      ],
      audiences: [
        "Estudios de extensión de pestañas",
        "Salones con artistas de pestañas dedicadas",
        "Técnicas independientes que gestionan sus citas",
        "Equipos que coordinan rellenos en varias cabinas",
      ],
      problems: [
        {
          problem: "Fechas de relleno en hojas de cálculo",
          solution: "Historial y recordatorios en un solo sistema.",
        },
        {
          problem: "Preferencias de mapeo olvidadas",
          solution: "Notas y fotos en cada ficha.",
        },
        {
          problem: "Consentimiento en papel",
          solution: "Formularios digitales antes de la cita.",
        },
        {
          problem: "Bandeja llena de peticiones de reserva",
          solution: "Página de reservas online sin comisión.",
        },
      ],
      features: [
        { icon: Calendar, title: "Agenda de rellenos", desc: "Planifica sets y rellenos con disponibilidad clara." },
        { icon: Users, title: "Notas de pestañas", desc: "Curl, largo, mapeo y adhesivos en la ficha." },
        { icon: ClipboardCheck, title: "Consentimientos", desc: "Anamnesis digital antes de cada set nuevo." },
        { icon: Camera, title: "Fotos de progreso", desc: "Documenta resultados por visita." },
        { icon: Link2, title: "Reservas online", desc: "Las clientas reservan rellenos 24/7." },
        { icon: Bell, title: "Recordatorios de relleno", desc: "Más retención con recordatorios automáticos." },
      ],
      benefits: [
        "Mayor retención de rellenos con recordatorios a tiempo",
        "Resultados coherentes gracias a las preferencias documentadas",
        "Menos administración en cabina",
        "Consentimiento y fotos profesionales",
        "Hosting en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los estudios de pestañas eligen Treatflow",
      marketParas: [
        "Los estudios de pestañas necesitan herramientas de retención tanto como de reserva. Treatflow conecta citas, notas y recordatorios para que los rellenos sean predecibles.",
      ],
      highlights: [
        "Reservas online sin comisión",
        "Notas de preferencias y mapeo",
        "Consentimientos antes de sets nuevos",
        "Recordatorios de relleno e historial fotográfico",
        "Hosting en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es software de extensión de pestañas con agenda de rellenos, notas, consentimientos, fotos, reservas online y recordatorios. Para estudios de pestañas. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno con reservas, fichas, consentimientos, documentación y recordatorios – adecuado para estudios de pestañas.",
        },
        {
          question: "¿Sirve para técnicas independientes?",
          answer:
            "Sí. Las artistas en solitario usan Treatflow para reservas, recordatorios e historial sin comisiones de marketplace.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Solicita acceso anticipado para tu país. El registro directo está disponible en Alemania, Austria y Suiza.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    }),
    it: buildPage("it", "lash-studio-software", {
      serviceName: "Software per extension ciglia",
      serviceDescription:
        "Software per studi ciglia: pianificazione refill, schede, consensi, foto e prenotazioni online.",
      eyebrow: "Software per extension ciglia",
      h1: "Software per studi ciglia e refill",
      subtitle:
        "Pianifica i refill, conserva mappe e consensi, invia promemoria e archivia foto – pensato per studi che vivono di retention.",
      aiCapsules: [
        {
          question: "Di quale software hanno bisogno gli studi ciglia?",
          answer:
            "Servono pianificazione refill, note su preferenze e mapping, consensi, foto e promemoria. Treatflow unisce prenotazioni, schede e moduli con hosting UE GDPR.",
        },
        {
          question: "Posso tracciare l'intervallo di refill per cliente?",
          answer:
            "Sì. Storico e note restano sulla scheda così sai quando è il prossimo refill e cosa è stato applicato la volta scorsa.",
        },
      ],
      whatTitle: "Cos'è Treatflow per gli studi ciglia?",
      whatParas: [
        "I business ciglia prosperano con i refill. Treatflow tiene l'agenda piena, documenta curl, lunghezza e mapping e ricorda alle clienti il prossimo appuntamento.",
        "Consenso digitale e documentazione fotografica supportano standard professionali senza rallentare il lavoro in cabina.",
      ],
      audiences: [
        "Studi di extension ciglia",
        "Centri estetici con lash artist dedicate",
        "Tecnici indipendenti che gestiscono le proprie prenotazioni",
        "Team che coordinano refill su più postazioni",
      ],
      problems: [
        {
          problem: "Date refill su fogli di calcolo",
          solution: "Storico e promemoria in un unico sistema.",
        },
        {
          problem: "Preferenze di mapping dimenticate",
          solution: "Note e foto su ogni scheda.",
        },
        {
          problem: "Consenso cartaceo",
          solution: "Moduli digitali prima dell'appuntamento.",
        },
        {
          problem: "Inbox piena di richieste di prenotazione",
          solution: "Pagina di prenotazione online senza commissioni.",
        },
      ],
      features: [
        { icon: Calendar, title: "Pianificazione refill", desc: "Pianifica set e refill con disponibilità chiara." },
        { icon: Users, title: "Note ciglia", desc: "Curl, lunghezza, mapping e adesivi in scheda." },
        { icon: ClipboardCheck, title: "Moduli di consenso", desc: "Intake digitale prima di ogni nuovo set." },
        { icon: Camera, title: "Foto di progresso", desc: "Documenta i risultati per visita." },
        { icon: Link2, title: "Prenotazioni online", desc: "Le clienti prenotano i refill 24/7." },
        { icon: Bell, title: "Promemoria refill", desc: "Più retention con promemoria automatici." },
      ],
      benefits: [
        "Maggiore retention dei refill con promemoria puntuali",
        "Risultati coerenti grazie alle preferenze documentate",
        "Meno amministrazione in cabina",
        "Consenso e foto professionali",
        "Hosting UE conforme al GDPR",
      ],
      marketTitle: "Perché gli studi ciglia scelgono Treatflow",
      marketParas: [
        "Gli studi ciglia hanno bisogno di strumenti di retention quanto di prenotazione. Treatflow collega appuntamenti, note e promemoria così i refill restano prevedibili.",
      ],
      highlights: [
        "Prenotazioni online senza commissione",
        "Note su preferenze e mapping",
        "Consensi prima dei nuovi set",
        "Promemoria refill e storico foto",
        "Hosting UE conforme al GDPR",
      ],
      aiSummary:
        "Treatflow è software per extension ciglia con pianificazione refill, note, consensi, foto, prenotazioni online e promemoria. Per studi ciglia. Conforme al GDPR.",
      faqs: [
        {
          question: "Cos'è Treatflow?",
          answer:
            "Treatflow è un software all-in-one con prenotazioni, schede, consensi, documentazione e promemoria – adatto agli studi ciglia.",
        },
        {
          question: "Va bene per lash tech indipendenti?",
          answer:
            "Sì. Le artiste solo usano Treatflow per prenotazioni, promemoria e storico senza commissioni marketplace.",
        },
        {
          question: "Come inizio?",
          answer:
            "Richiedi l'accesso anticipato per il tuo Paese. La registrazione diretta è disponibile in Germania, Austria e Svizzera.",
        },
        {
          question: "Dove sono i dati?",
          answer:
            "Treatflow ospita i dati nell'UE ed è progettato per la conformità GDPR.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    }),
    fr: buildPage("fr", "lash-studio-software", {
      serviceName: "Logiciel d'extension de cils",
      serviceDescription:
        "Logiciel pour studios de cils : planification des remplissages, fiches, consentements, photos et réservation en ligne.",
      eyebrow: "Logiciel d'extension de cils",
      h1: "Logiciel pour studios de cils et remplissages",
      subtitle:
        "Planifiez les remplissages, conservez maps et consentements, envoyez des rappels et archivez les photos – conçu pour les studios qui vivent de la rétention.",
      aiCapsules: [
        {
          question: "De quel logiciel les studios de cils ont-ils besoin ?",
          answer:
            "Ils ont besoin de planification des remplissages, de notes de préférences et de mapping, de consentements, de photos et de rappels. Treatflow réunit réservation, fiches et formulaires avec hébergement UE RGPD.",
        },
        {
          question: "Puis-je suivre l'intervalle de remplissage par cliente ?",
          answer:
            "Oui. Historique et notes restent sur la fiche pour savoir quand le prochain remplissage est dû et ce qui a été appliqué la fois précédente.",
        },
      ],
      whatTitle: "Qu'est-ce que Treatflow pour les studios de cils ?",
      whatParas: [
        "Les activités cils prospèrent grâce aux remplissages. Treatflow garde l'agenda rempli, documente curl, longueur et mapping, et rappelle aux clientes le prochain rendez-vous.",
        "Consentement numérique et documentation photo soutiennent un standard professionnel sans ralentir le travail en cabine.",
      ],
      audiences: [
        "Studios d'extension de cils",
        "Instituts avec lash artists dédiées",
        "Techniciennes indépendantes qui gèrent leurs réservations",
        "Équipes qui coordonnent les remplissages sur plusieurs postes",
      ],
      problems: [
        {
          problem: "Dates de remplissage dans des tableurs",
          solution: "Historique et rappels dans un seul système.",
        },
        {
          problem: "Préférences de mapping oubliées",
          solution: "Notes et photos sur chaque fiche.",
        },
        {
          problem: "Consentement papier",
          solution: "Formulaires numériques avant le rendez-vous.",
        },
        {
          problem: "Boîte de réception saturée de demandes",
          solution: "Page de réservation en ligne sans commission.",
        },
      ],
      features: [
        { icon: Calendar, title: "Planification des remplissages", desc: "Planifiez poses et remplissages avec disponibilités claires." },
        { icon: Users, title: "Notes cils", desc: "Curl, longueur, mapping et colles au dossier." },
        { icon: ClipboardCheck, title: "Formulaires de consentement", desc: "Intake numérique avant chaque nouvelle pose." },
        { icon: Camera, title: "Photos de progression", desc: "Documentez les résultats par visite." },
        { icon: Link2, title: "Réservation en ligne", desc: "Les clientes réservent les remplissages 24/7." },
        { icon: Bell, title: "Rappels de remplissage", desc: "Plus de rétention grâce aux rappels automatiques." },
      ],
      benefits: [
        "Meilleure rétention des remplissages avec des rappels à temps",
        "Résultats cohérents grâce aux préférences documentées",
        "Moins d'admin en cabine",
        "Consentement et photos professionnels",
        "Hébergement UE conforme au RGPD",
      ],
      marketTitle: "Pourquoi les studios de cils choisissent Treatflow",
      marketParas: [
        "Les studios de cils ont besoin d'outils de rétention autant que de réservation. Treatflow relie rendez-vous, notes et rappels pour que les remplissages restent prévisibles.",
      ],
      highlights: [
        "Réservation en ligne sans commission",
        "Notes de préférences et de mapping",
        "Consentements avant les nouvelles poses",
        "Rappels de remplissage et historique photo",
        "Hébergement UE conforme au RGPD",
      ],
      aiSummary:
        "Treatflow est un logiciel d'extension de cils avec planification des remplissages, notes, consentements, photos, réservation en ligne et rappels. Pour studios de cils. Conforme au RGPD.",
      faqs: [
        {
          question: "Qu'est-ce que Treatflow ?",
          answer:
            "Treatflow est un logiciel tout-en-un avec réservation, fiches, consentements, documentation et rappels – adapté aux studios de cils.",
        },
        {
          question: "Convient-il aux lash tech indépendantes ?",
          answer:
            "Oui. Les artistes solo utilisent Treatflow pour réservation, rappels et historique sans commission marketplace.",
        },
        {
          question: "Comment commencer ?",
          answer:
            "Demandez un accès anticipé pour votre pays. L'inscription directe est disponible en Allemagne, Autriche et Suisse.",
        },
        {
          question: "Où sont hébergées les données ?",
          answer:
            "Treatflow héberge les données dans l'UE et est conçu pour la conformité RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    }),
  },

  "spa-wellness-software": {
    en: buildPage("en", "spa-wellness-software", {
      serviceName: "Spa & wellness software",
      serviceDescription:
        "Software for spas and wellness studios: online booking, client records, treatment notes, consent forms and reminders.",
      eyebrow: "Spa & wellness software",
      h1: "Spa and wellness software for calm operations",
      subtitle:
        "Coordinate rooms, therapists and packages with online booking, client history and digital forms – without marketplace commissions.",
      aiCapsules: [
        {
          question: "What software do spas need?",
          answer:
            "Spas need multi-resource scheduling, online booking, client preferences, treatment notes and reminders. Treatflow supports spa and wellness studios with GDPR-compliant EU hosting.",
        },
        {
          question: "Can Treatflow handle packages and return visits?",
          answer:
            "Yes. Client history and reminders help you manage series treatments and regular wellness clients.",
        },
      ],
      whatTitle: "What is Treatflow for spas and wellness studios?",
      whatParas: [
        "Spas balance atmosphere with operations. Treatflow keeps bookings organised, stores client preferences and documents treatments so the guest experience stays seamless.",
        "Digital intake and reminders reduce front-desk load while therapists access the notes they need.",
      ],
      audiences: [
        "Day spas and wellness studios",
        "Hotel and boutique spas",
        "Multi-therapist wellness centres",
        "Studios combining massage, facials and body treatments",
      ],
      problems: [
        {
          problem: "Room and therapist conflicts",
          solution: "Shared calendar with clear resource planning.",
        },
        {
          problem: "Guest preferences lost between visits",
          solution: "Client records with notes and history.",
        },
        {
          problem: "Paper intake at reception",
          solution: "Digital forms completed before arrival.",
        },
        {
          problem: "No-shows on longer treatments",
          solution: "Automatic reminders before appointments.",
        },
      ],
      features: [
        { icon: Calendar, title: "Spa calendar", desc: "Coordinate rooms, therapists and services." },
        { icon: Link2, title: "Online booking", desc: "Guests book treatments 24/7 without commission." },
        { icon: Users, title: "Guest profiles", desc: "Preferences, history and notes in one place." },
        { icon: ClipboardCheck, title: "Intake forms", desc: "Health and consent forms before visits." },
        { icon: FileText, title: "Treatment notes", desc: "Document services for consistent care." },
        { icon: Bell, title: "Reminders", desc: "Reduce no-shows on longer appointments." },
      ],
      benefits: [
        "Smoother front-desk and treatment-room handovers",
        "Guests feel recognised through preference history",
        "Less paper at reception",
        "Higher show-up rates with reminders",
        "GDPR-compliant EU hosting",
      ],
      marketTitle: "Why spas choose Treatflow",
      marketParas: [
        "Spa software should protect the guest experience, not complicate it. Treatflow connects booking to records and forms so operations stay calm and professional.",
      ],
      highlights: [
        "Commission-free online booking",
        "Shared calendar for rooms and therapists",
        "Guest preference history",
        "Digital intake and treatment notes",
        "GDPR-compliant EU hosting",
      ],
      aiSummary:
        "Treatflow is spa and wellness software with online booking, guest records, intake forms, treatment notes and reminders. For day spas and wellness centres. GDPR-compliant.",
      faqs: [
        {
          question: "What is Treatflow?",
          answer:
            "Treatflow is all-in-one software for beauty, spa and wellness studios with online booking, client records, forms, documentation and reminders.",
        },
        {
          question: "Is it suitable for day spas?",
          answer:
            "Yes. Day spas use Treatflow to coordinate bookings, guest history and digital intake.",
        },
        {
          question: "How do I get started?",
          answer:
            "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.",
        },
        {
          question: "Where is data hosted?",
          answer:
            "Treatflow hosts data in the EU and is designed for GDPR compliance.",
        },
      ],
      siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    }),
    es: buildPage("es", "spa-wellness-software", {
      serviceName: "Software spa y wellness",
      serviceDescription:
        "Software para spas y centros wellness: reservas online, fichas, notas de tratamiento, consentimientos y recordatorios.",
      eyebrow: "Software spa y wellness",
      h1: "Software spa y wellness para una operativa serena",
      subtitle:
        "Coordina cabinas, terapeutas y packs con reservas online, historial de clientas y formularios digitales – sin comisiones de marketplace.",
      aiCapsules: [
        {
          question: "¿Qué software necesitan los spas?",
          answer:
            "Necesitan agenda multi-recurso, reservas online, preferencias, notas de tratamiento y recordatorios. Treatflow apoya spas y centros wellness con hosting UE conforme al RGPD.",
        },
        {
          question: "¿Sirve para packs y visitas recurrentes?",
          answer:
            "Sí. El historial y los recordatorios ayudan a gestionar series y clientas regulares de wellness.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para spas y wellness?",
      whatParas: [
        "Los spas equilibran ambiente y operativa. Treatflow organiza las reservas, guarda preferencias y documenta tratamientos para que la experiencia sea fluida.",
        "La anamnesis digital y los recordatorios alivian recepción mientras las terapeutas acceden a las notas que necesitan.",
      ],
      audiences: [
        "Day spas y centros wellness",
        "Spas de hotel y boutique",
        "Centros con varias terapeutas",
        "Estudios que combinan masaje, faciales y corporales",
      ],
      problems: [
        {
          problem: "Conflictos de cabina y terapeuta",
          solution: "Calendario compartido con planificación clara.",
        },
        {
          problem: "Preferencias perdidas entre visitas",
          solution: "Fichas con notas e historial.",
        },
        {
          problem: "Anamnesis en papel en recepción",
          solution: "Formularios digitales antes de la llegada.",
        },
        {
          problem: "Ausencias en tratamientos largos",
          solution: "Recordatorios automáticos antes de la cita.",
        },
      ],
      features: [
        { icon: Calendar, title: "Agenda del spa", desc: "Coordina cabinas, terapeutas y servicios." },
        { icon: Link2, title: "Reservas online", desc: "Las clientas reservan 24/7 sin comisión." },
        { icon: Users, title: "Perfiles de clientas", desc: "Preferencias, historial y notas." },
        { icon: ClipboardCheck, title: "Formularios de ingreso", desc: "Salud y consentimiento antes de la visita." },
        { icon: FileText, title: "Notas de tratamiento", desc: "Documenta servicios para un cuidado coherente." },
        { icon: Bell, title: "Recordatorios", desc: "Menos ausencias en citas largas." },
      ],
      benefits: [
        "Traspasos más fluidos entre recepción y cabina",
        "Las clientas se sienten reconocidas",
        "Menos papel en recepción",
        "Mayor asistencia con recordatorios",
        "Hosting en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los spas eligen Treatflow",
      marketParas: [
        "El software de spa debe proteger la experiencia, no complicarla. Treatflow conecta reservas, fichas y formularios para una operativa serena y profesional.",
      ],
      highlights: [
        "Reservas online sin comisión",
        "Agenda compartida para cabinas y terapeutas",
        "Historial de preferencias",
        "Anamnesis digital y notas de tratamiento",
        "Hosting en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es software spa y wellness con reservas online, fichas, formularios, notas de tratamiento y recordatorios. Para day spas y centros wellness. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno para belleza, spa y wellness con reservas, fichas, formularios, documentación y recordatorios.",
        },
        {
          question: "¿Sirve para day spas?",
          answer:
            "Sí. Los day spas usan Treatflow para coordinar reservas, historial y anamnesis digital.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Solicita acceso anticipado para tu país. El registro directo está disponible en Alemania, Austria y Suiza.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    }),
    it: buildPage("it", "spa-wellness-software", {
      serviceName: "Software spa e wellness",
      serviceDescription:
        "Software per spa e centri wellness: prenotazioni online, schede, note di trattamento, consensi e promemoria.",
      eyebrow: "Software spa e wellness",
      h1: "Software spa e wellness per un'operatività serena",
      subtitle:
        "Coordina cabine, terapisti e pacchetti con prenotazioni online, storico clienti e moduli digitali – senza commissioni marketplace.",
      aiCapsules: [
        {
          question: "Di quale software hanno bisogno le spa?",
          answer:
            "Servono pianificazione multi-risorsa, prenotazioni online, preferenze, note di trattamento e promemoria. Treatflow supporta spa e centri wellness con hosting UE GDPR.",
        },
        {
          question: "Gestisce pacchetti e visite ricorrenti?",
          answer:
            "Sì. Storico e promemoria aiutano a gestire cicli di trattamento e clienti wellness regolari.",
        },
      ],
      whatTitle: "Cos'è Treatflow per spa e wellness?",
      whatParas: [
        "Le spa bilanciano atmosfera e operatività. Treatflow organizza le prenotazioni, conserva le preferenze e documenta i trattamenti per un'esperienza fluida.",
        "Intake digitale e promemoria alleggeriscono la reception mentre i terapisti accedono alle note necessarie.",
      ],
      audiences: [
        "Day spa e centri wellness",
        "Spa di hotel e boutique spa",
        "Centri multi-terapista",
        "Studi che combinano massaggi, facial e body treatment",
      ],
      problems: [
        {
          problem: "Conflitti di cabina e terapista",
          solution: "Calendario condiviso con pianificazione chiara.",
        },
        {
          problem: "Preferenze perse tra le visite",
          solution: "Schede con note e storico.",
        },
        {
          problem: "Anamnesi cartacea in reception",
          solution: "Moduli digitali prima dell'arrivo.",
        },
        {
          problem: "Assenze su trattamenti lunghi",
          solution: "Promemoria automatici prima dell'appuntamento.",
        },
      ],
      features: [
        { icon: Calendar, title: "Calendario spa", desc: "Coordina cabine, terapisti e servizi." },
        { icon: Link2, title: "Prenotazioni online", desc: "Le clienti prenotano 24/7 senza commissioni." },
        { icon: Users, title: "Profili ospiti", desc: "Preferenze, storico e note." },
        { icon: ClipboardCheck, title: "Moduli di intake", desc: "Salute e consenso prima della visita." },
        { icon: FileText, title: "Note di trattamento", desc: "Documenta i servizi per cure coerenti." },
        { icon: Bell, title: "Promemoria", desc: "Meno assenze su appuntamenti lunghi." },
      ],
      benefits: [
        "Passaggi più fluidi tra reception e cabina",
        "Le ospiti si sentono riconosciute",
        "Meno carta in reception",
        "Maggiore presenza con i promemoria",
        "Hosting UE conforme al GDPR",
      ],
      marketTitle: "Perché le spa scelgono Treatflow",
      marketParas: [
        "Il software spa deve proteggere l'esperienza, non complicarla. Treatflow collega prenotazioni, schede e moduli per un'operatività serena e professionale.",
      ],
      highlights: [
        "Prenotazioni online senza commissione",
        "Calendario condiviso per cabine e terapisti",
        "Storico delle preferenze",
        "Intake digitale e note di trattamento",
        "Hosting UE conforme al GDPR",
      ],
      aiSummary:
        "Treatflow è software spa e wellness con prenotazioni online, schede, moduli, note di trattamento e promemoria. Per day spa e centri wellness. Conforme al GDPR.",
      faqs: [
        {
          question: "Cos'è Treatflow?",
          answer:
            "Treatflow è un software all-in-one per bellezza, spa e wellness con prenotazioni, schede, moduli, documentazione e promemoria.",
        },
        {
          question: "Va bene per le day spa?",
          answer:
            "Sì. Le day spa usano Treatflow per coordinare prenotazioni, storico e intake digitale.",
        },
        {
          question: "Come inizio?",
          answer:
            "Richiedi l'accesso anticipato per il tuo Paese. La registrazione diretta è disponibile in Germania, Austria e Svizzera.",
        },
        {
          question: "Dove sono i dati?",
          answer:
            "Treatflow ospita i dati nell'UE ed è progettato per la conformità GDPR.",
        },
      ],
      siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    }),
    fr: buildPage("fr", "spa-wellness-software", {
      serviceName: "Logiciel spa et wellness",
      serviceDescription:
        "Logiciel pour spas et centres wellness : réservation en ligne, fiches, notes de soin, consentements et rappels.",
      eyebrow: "Logiciel spa et wellness",
      h1: "Logiciel spa et wellness pour une exploitation sereine",
      subtitle:
        "Coordonnez cabines, thérapeutes et forfaits avec réservation en ligne, historique clientes et formulaires numériques – sans commission marketplace.",
      aiCapsules: [
        {
          question: "De quel logiciel les spas ont-ils besoin ?",
          answer:
            "Ils ont besoin d'un planning multi-ressources, de réservation en ligne, de préférences, de notes de soin et de rappels. Treatflow accompagne spas et centres wellness avec hébergement UE RGPD.",
        },
        {
          question: "Gère-t-il forfaits et visites récurrentes ?",
          answer:
            "Oui. Historique et rappels aident à gérer les séries de soins et les clientes wellness régulières.",
        },
      ],
      whatTitle: "Qu'est-ce que Treatflow pour spas et wellness ?",
      whatParas: [
        "Les spas équilibrent ambiance et exploitation. Treatflow organise les réservations, conserve les préférences et documente les soins pour une expérience fluide.",
        "L'anamnèse numérique et les rappels allègent l'accueil pendant que les thérapeutes accèdent aux notes nécessaires.",
      ],
      audiences: [
        "Day spas et centres wellness",
        "Spas d'hôtel et spas boutique",
        "Centres multi-thérapeutes",
        "Studios combinant massage, soins visage et corps",
      ],
      problems: [
        {
          problem: "Conflits de cabine et de thérapeute",
          solution: "Calendrier partagé avec planification claire.",
        },
        {
          problem: "Préférences perdues entre les visites",
          solution: "Fiches avec notes et historique.",
        },
        {
          problem: "Anamnèse papier à l'accueil",
          solution: "Formulaires numériques avant l'arrivée.",
        },
        {
          problem: "Absences sur les soins longs",
          solution: "Rappels automatiques avant le rendez-vous.",
        },
      ],
      features: [
        { icon: Calendar, title: "Agenda du spa", desc: "Coordonnez cabines, thérapeutes et services." },
        { icon: Link2, title: "Réservation en ligne", desc: "Les clientes réservent 24/7 sans commission." },
        { icon: Users, title: "Profils hôtes", desc: "Préférences, historique et notes." },
        { icon: ClipboardCheck, title: "Formulaires d'admission", desc: "Santé et consentement avant la visite." },
        { icon: FileText, title: "Notes de soin", desc: "Documentez les services pour des soins cohérents." },
        { icon: Bell, title: "Rappels", desc: "Moins d'absences sur les rendez-vous longs." },
      ],
      benefits: [
        "Passages plus fluides entre accueil et cabine",
        "Les clientes se sentent reconnues",
        "Moins de papier à l'accueil",
        "Meilleur taux de présence grâce aux rappels",
        "Hébergement UE conforme au RGPD",
      ],
      marketTitle: "Pourquoi les spas choisissent Treatflow",
      marketParas: [
        "Un logiciel spa doit protéger l'expérience, pas la compliquer. Treatflow relie réservation, fiches et formulaires pour une exploitation sereine et professionnelle.",
      ],
      highlights: [
        "Réservation en ligne sans commission",
        "Agenda partagé pour cabines et thérapeutes",
        "Historique des préférences",
        "Anamnèse numérique et notes de soin",
        "Hébergement UE conforme au RGPD",
      ],
      aiSummary:
        "Treatflow est un logiciel spa et wellness avec réservation en ligne, fiches, formulaires, notes de soin et rappels. Pour day spas et centres wellness. Conforme au RGPD.",
      faqs: [
        {
          question: "Qu'est-ce que Treatflow ?",
          answer:
            "Treatflow est un logiciel tout-en-un pour beauté, spa et wellness avec réservation, fiches, formulaires, documentation et rappels.",
        },
        {
          question: "Convient-il aux day spas ?",
          answer:
            "Oui. Les day spas utilisent Treatflow pour coordonner réservations, historique et anamnèse numérique.",
        },
        {
          question: "Comment commencer ?",
          answer:
            "Demandez un accès anticipé pour votre pays. L'inscription directe est disponible en Allemagne, Autriche et Suisse.",
        },
        {
          question: "Où sont hébergées les données ?",
          answer:
            "Treatflow héberge les données dans l'UE et est conçu pour la conformité RGPD.",
        },
      ],
      siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    }),
  },

  "massage-software": {
    en: buildPage("en", "massage-software", {
      serviceName: "Massage studio software",
      serviceDescription:
        "Software for massage therapists and studios: online booking, client records, intake forms, session notes and reminders.",
      eyebrow: "Massage studio software",
      h1: "Massage software for therapists and studios",
      subtitle:
        "Online booking, intake forms, session notes and reminders – built for massage therapists and multi-room studios.",
      aiCapsules: [
        {
          question: "What software do massage therapists need?",
          answer:
            "Massage therapists need simple online booking, intake and consent forms, session notes, client history and reminders. Treatflow provides these with GDPR-compliant EU hosting and no booking commissions.",
        },
        {
          question: "Is Treatflow suitable for solo therapists?",
          answer:
            "Yes. Solo therapists use Treatflow to manage their calendar, client records and reminders without marketplace fees.",
        },
      ],
      whatTitle: "What is Treatflow for massage studios?",
      whatParas: [
        "Treatflow helps massage therapists spend less time on admin and more time with clients. Booking, intake and session notes live in one place.",
        "Studios with multiple rooms coordinate availability while keeping each client's history private and accessible to the treating therapist.",
      ],
      audiences: [
        "Independent massage therapists",
        "Massage studios with multiple rooms",
        "Wellness centres offering therapeutic and relaxation massage",
        "Teams replacing paper intake and phone booking",
      ],
      problems: [
        {
          problem: "Phone-only booking and missed calls",
          solution: "Online booking page available 24/7.",
        },
        {
          problem: "Paper intake forms",
          solution: "Digital health and consent forms before sessions.",
        },
        {
          problem: "Session notes hard to retrieve",
          solution: "Notes stored on the client profile.",
        },
        {
          problem: "Clients forget appointments",
          solution: "Automatic SMS and email reminders.",
        },
      ],
      features: [
        { icon: Link2, title: "Online booking", desc: "Clients book massage appointments without commission." },
        { icon: ClipboardCheck, title: "Intake forms", desc: "Health history and consent digitally." },
        { icon: FileText, title: "Session notes", desc: "Document focus areas and progress." },
        { icon: Users, title: "Client records", desc: "Full history for returning clients." },
        { icon: Calendar, title: "Studio calendar", desc: "Coordinate therapists and rooms." },
        { icon: Bell, title: "Reminders", desc: "Reduce no-shows." },
      ],
      benefits: [
        "Less admin between sessions",
        "Safer intake with digital forms",
        "Better continuity of care through notes",
        "Fewer missed appointments",
        "GDPR-compliant EU hosting",
      ],
      marketTitle: "Why massage professionals choose Treatflow",
      marketParas: [
        "Massage practices need reliable booking and clear records more than complex POS systems. Treatflow focuses on appointments, forms and documentation.",
      ],
      highlights: [
        "Commission-free online booking",
        "Digital intake and consent",
        "Session notes on client records",
        "Reminders for returning clients",
        "GDPR-compliant EU hosting",
      ],
      aiSummary:
        "Treatflow is massage studio software with online booking, intake forms, session notes, client records and reminders. For therapists and multi-room studios. GDPR-compliant.",
      faqs: [
        {
          question: "What is Treatflow?",
          answer:
            "Treatflow is all-in-one studio software with online booking, client records, forms, documentation and reminders – suitable for massage therapists and studios.",
        },
        {
          question: "Can solo therapists use it?",
          answer:
            "Yes. Solo practitioners manage booking, forms and notes without marketplace commissions.",
        },
        {
          question: "How do I get started?",
          answer:
            "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.",
        },
        {
          question: "Where is data hosted?",
          answer:
            "Treatflow hosts data in the EU and is designed for GDPR compliance.",
        },
      ],
      siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "forms", "client-records", "pricing"],
    }),
    es: buildPage("es", "massage-software", {
      serviceName: "Software para centros de masajes",
      serviceDescription:
        "Software para masajistas y centros: reservas online, fichas, anamnesis, notas de sesión y recordatorios.",
      eyebrow: "Software para centros de masajes",
      h1: "Software de masajes para terapeutas y centros",
      subtitle:
        "Reservas online, formularios de anamnesis, notas de sesión y recordatorios – pensado para masajistas y centros con varias salas.",
      aiCapsules: [
        {
          question: "¿Qué software necesitan los masajistas?",
          answer:
            "Necesitan reservas online sencillas, anamnesis y consentimiento, notas de sesión, historial y recordatorios. Treatflow lo ofrece con hosting UE conforme al RGPD y sin comisiones por reserva.",
        },
        {
          question: "¿Sirve para terapeutas independientes?",
          answer:
            "Sí. Los profesionales en solitario gestionan agenda, fichas y recordatorios sin comisiones de marketplace.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para centros de masajes?",
      whatParas: [
        "Treatflow ayuda a los masajistas a dedicar menos tiempo a la administración y más a las clientas. Reserva, anamnesis y notas viven en un solo lugar.",
        "Los centros con varias salas coordinan la disponibilidad manteniendo el historial accesible para la terapeuta que atiende.",
      ],
      audiences: [
        "Masajistas independientes",
        "Centros de masajes con varias salas",
        "Centros wellness con masaje terapéutico y de relax",
        "Equipos que dejan anamnesis en papel y reservas por teléfono",
      ],
      problems: [
        {
          problem: "Solo reservas por teléfono y llamadas perdidas",
          solution: "Página de reservas online 24/7.",
        },
        {
          problem: "Anamnesis en papel",
          solution: "Formularios de salud y consentimiento digitales.",
        },
        {
          problem: "Notas de sesión difíciles de recuperar",
          solution: "Notas guardadas en la ficha.",
        },
        {
          problem: "Las clientas olvidan la cita",
          solution: "Recordatorios automáticos por SMS y email.",
        },
      ],
      features: [
        { icon: Link2, title: "Reservas online", desc: "Las clientas reservan sin comisión." },
        { icon: ClipboardCheck, title: "Anamnesis", desc: "Historial de salud y consentimiento digitales." },
        { icon: FileText, title: "Notas de sesión", desc: "Documenta zonas de foco y progreso." },
        { icon: Users, title: "Fichas", desc: "Historial completo para clientas recurrentes." },
        { icon: Calendar, title: "Agenda del centro", desc: "Coordina terapeutas y salas." },
        { icon: Bell, title: "Recordatorios", desc: "Reduce ausencias." },
      ],
      benefits: [
        "Menos administración entre sesiones",
        "Anamnesis más segura en digital",
        "Mejor continuidad gracias a las notas",
        "Menos citas perdidas",
        "Hosting en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los profesionales del masaje eligen Treatflow",
      marketParas: [
        "Los centros de masajes necesitan reservas fiables y fichas claras más que un TPV complejo. Treatflow se centra en citas, formularios y documentación.",
      ],
      highlights: [
        "Reservas online sin comisión",
        "Anamnesis y consentimiento digitales",
        "Notas de sesión en la ficha",
        "Recordatorios para clientas recurrentes",
        "Hosting en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es software de masajes con reservas online, anamnesis, notas de sesión, fichas y recordatorios. Para terapeutas y centros multi-sala. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno con reservas, fichas, formularios, documentación y recordatorios – adecuado para masajistas y centros.",
        },
        {
          question: "¿Pueden usarlo terapeutas en solitario?",
          answer:
            "Sí. Gestionan reservas, formularios y notas sin comisiones de marketplace.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Solicita acceso anticipado para tu país. El registro directo está disponible en Alemania, Austria y Suiza.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "forms", "client-records", "pricing"],
    }),
    it: buildPage("it", "massage-software", {
      serviceName: "Software per centri massaggi",
      serviceDescription:
        "Software per massaggiatori e centri: prenotazioni online, schede, anamnesi, note di sessione e promemoria.",
      eyebrow: "Software per centri massaggi",
      h1: "Software massaggi per terapisti e centri",
      subtitle:
        "Prenotazioni online, moduli di anamnesi, note di sessione e promemoria – pensato per massaggiatori e centri multi-sala.",
      aiCapsules: [
        {
          question: "Di quale software hanno bisogno i massaggiatori?",
          answer:
            "Servono prenotazioni online semplici, anamnesi e consenso, note di sessione, storico e promemoria. Treatflow li offre con hosting UE GDPR e senza commissioni.",
        },
        {
          question: "Va bene per terapisti indipendenti?",
          answer:
            "Sì. I professionisti solo gestiscono calendario, schede e promemoria senza commissioni marketplace.",
        },
      ],
      whatTitle: "Cos'è Treatflow per i centri massaggi?",
      whatParas: [
        "Treatflow aiuta i massaggiatori a dedicare meno tempo all'amministrazione e più alle clienti. Prenotazione, anamnesi e note vivono in un unico posto.",
        "I centri con più sale coordinano la disponibilità mantenendo lo storico accessibile al terapista che tratta.",
      ],
      audiences: [
        "Massaggiatori indipendenti",
        "Centri massaggi multi-sala",
        "Centri wellness con massaggio terapeutico e relax",
        "Team che abbandonano anamnesi cartacea e prenotazioni telefoniche",
      ],
      problems: [
        {
          problem: "Solo prenotazioni telefoniche e chiamate perse",
          solution: "Pagina di prenotazione online 24/7.",
        },
        {
          problem: "Anamnesi cartacea",
          solution: "Moduli di salute e consenso digitali.",
        },
        {
          problem: "Note di sessione difficili da ritrovare",
          solution: "Note salvate sulla scheda.",
        },
        {
          problem: "Le clienti dimenticano l'appuntamento",
          solution: "Promemoria automatici SMS ed email.",
        },
      ],
      features: [
        { icon: Link2, title: "Prenotazioni online", desc: "Le clienti prenotano senza commissioni." },
        { icon: ClipboardCheck, title: "Anamnesi", desc: "Storia clinica e consenso digitali." },
        { icon: FileText, title: "Note di sessione", desc: "Documenta aree di focus e progressi." },
        { icon: Users, title: "Schede clienti", desc: "Storico completo per clienti ricorrenti." },
        { icon: Calendar, title: "Calendario del centro", desc: "Coordina terapisti e sale." },
        { icon: Bell, title: "Promemoria", desc: "Riduci le assenze." },
      ],
      benefits: [
        "Meno amministrazione tra le sessioni",
        "Anamnesi più sicura in digitale",
        "Migliore continuità grazie alle note",
        "Meno appuntamenti persi",
        "Hosting UE conforme al GDPR",
      ],
      marketTitle: "Perché i professionisti del massaggio scelgono Treatflow",
      marketParas: [
        "I centri massaggi hanno bisogno di prenotazioni affidabili e schede chiare più che di un POS complesso. Treatflow si concentra su appuntamenti, moduli e documentazione.",
      ],
      highlights: [
        "Prenotazioni online senza commissione",
        "Anamnesi e consenso digitali",
        "Note di sessione sulla scheda",
        "Promemoria per clienti ricorrenti",
        "Hosting UE conforme al GDPR",
      ],
      aiSummary:
        "Treatflow è software per massaggi con prenotazioni online, anamnesi, note di sessione, schede e promemoria. Per terapisti e centri multi-sala. Conforme al GDPR.",
      faqs: [
        {
          question: "Cos'è Treatflow?",
          answer:
            "Treatflow è un software all-in-one con prenotazioni, schede, moduli, documentazione e promemoria – adatto a massaggiatori e centri.",
        },
        {
          question: "Possono usarlo terapisti indipendenti?",
          answer:
            "Sì. Gestiscono prenotazioni, moduli e note senza commissioni marketplace.",
        },
        {
          question: "Come inizio?",
          answer:
            "Richiedi l'accesso anticipato per il tuo Paese. La registrazione diretta è disponibile in Germania, Austria e Svizzera.",
        },
        {
          question: "Dove sono i dati?",
          answer:
            "Treatflow ospita i dati nell'UE ed è progettato per la conformità GDPR.",
        },
      ],
      siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "forms", "client-records", "pricing"],
    }),
    fr: buildPage("fr", "massage-software", {
      serviceName: "Logiciel pour cabinets de massage",
      serviceDescription:
        "Logiciel pour masseurs et centres : réservation en ligne, fiches, anamnèse, notes de séance et rappels.",
      eyebrow: "Logiciel pour cabinets de massage",
      h1: "Logiciel de massage pour thérapeutes et centres",
      subtitle:
        "Réservation en ligne, formulaires d'anamnèse, notes de séance et rappels – conçu pour masseurs et centres multi-salles.",
      aiCapsules: [
        {
          question: "De quel logiciel les masseurs ont-ils besoin ?",
          answer:
            "Ils ont besoin d'une réservation en ligne simple, d'anamnèse et de consentement, de notes de séance, d'historique et de rappels. Treatflow les offre avec hébergement UE RGPD et sans commission.",
        },
        {
          question: "Convient-il aux thérapeutes indépendants ?",
          answer:
            "Oui. Les praticiens solo gèrent agenda, fiches et rappels sans frais de marketplace.",
        },
      ],
      whatTitle: "Qu'est-ce que Treatflow pour les centres de massage ?",
      whatParas: [
        "Treatflow aide les masseurs à passer moins de temps sur l'admin et plus avec les clientes. Réservation, anamnèse et notes vivent au même endroit.",
        "Les centres multi-salles coordonnent les disponibilités tout en gardant l'historique accessible au thérapeute qui traite.",
      ],
      audiences: [
        "Masseurs indépendants",
        "Centres de massage multi-salles",
        "Centres wellness avec massage thérapeutique et relaxant",
        "Équipes qui quittent l'anamnèse papier et la réservation téléphonique",
      ],
      problems: [
        {
          problem: "Réservation uniquement par téléphone et appels manqués",
          solution: "Page de réservation en ligne 24/7.",
        },
        {
          problem: "Anamnèse papier",
          solution: "Formulaires de santé et consentement numériques.",
        },
        {
          problem: "Notes de séance difficiles à retrouver",
          solution: "Notes enregistrées sur la fiche.",
        },
        {
          problem: "Les clientes oublient le rendez-vous",
          solution: "Rappels automatiques SMS et e-mail.",
        },
      ],
      features: [
        { icon: Link2, title: "Réservation en ligne", desc: "Les clientes réservent sans commission." },
        { icon: ClipboardCheck, title: "Anamnèse", desc: "Antécédents de santé et consentement numériques." },
        { icon: FileText, title: "Notes de séance", desc: "Documentez zones de focus et progression." },
        { icon: Users, title: "Fiches clients", desc: "Historique complet pour les clientes régulières." },
        { icon: Calendar, title: "Agenda du centre", desc: "Coordonnez thérapeutes et salles." },
        { icon: Bell, title: "Rappels", desc: "Réduisez les absences." },
      ],
      benefits: [
        "Moins d'admin entre les séances",
        "Anamnèse plus sûre en numérique",
        "Meilleure continuité grâce aux notes",
        "Moins de rendez-vous manqués",
        "Hébergement UE conforme au RGPD",
      ],
      marketTitle: "Pourquoi les professionnels du massage choisissent Treatflow",
      marketParas: [
        "Les cabinets de massage ont besoin de réservations fiables et de fiches claires plus que d'un TPV complexe. Treatflow se concentre sur rendez-vous, formulaires et documentation.",
      ],
      highlights: [
        "Réservation en ligne sans commission",
        "Anamnèse et consentement numériques",
        "Notes de séance sur la fiche",
        "Rappels pour clientes régulières",
        "Hébergement UE conforme au RGPD",
      ],
      aiSummary:
        "Treatflow est un logiciel de massage avec réservation en ligne, anamnèse, notes de séance, fiches et rappels. Pour thérapeutes et centres multi-salles. Conforme au RGPD.",
      faqs: [
        {
          question: "Qu'est-ce que Treatflow ?",
          answer:
            "Treatflow est un logiciel tout-en-un avec réservation, fiches, formulaires, documentation et rappels – adapté aux masseurs et centres.",
        },
        {
          question: "Les thérapeutes solo peuvent-ils l'utiliser ?",
          answer:
            "Oui. Ils gèrent réservation, formulaires et notes sans commission marketplace.",
        },
        {
          question: "Comment commencer ?",
          answer:
            "Demandez un accès anticipé pour votre pays. L'inscription directe est disponible en Allemagne, Autriche et Suisse.",
        },
        {
          question: "Où sont hébergées les données ?",
          answer:
            "Treatflow héberge les données dans l'UE et est conçu pour la conformité RGPD.",
        },
      ],
      siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "forms", "client-records", "pricing"],
    }),
  },
};

export function getIndustryPage(
  locale: IndustryLocale,
  key: IndustryPageKey
): InternationalPageContent {
  return pages[key][locale];
}

