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

const heroImage = {
  src: "/images/lifestyle/hero-startseite-kalender.png",
  alt: "Treatflow appointment calendar open on a laptop in a modern beauty studio",
};

function softwareSchema(locale: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Treatflow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    description,
    url: `${BASE_URL}${path}`,
    inLanguage: locale,
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

function faqSchema(locale: string, items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export const enHomePage: HomePageIntlContent = {
  locale: "en",
  earlyAccessHref: "/en/early-access",
  pricingHref: "/en/pricing",
  hero: {
    eyebrow: "For beauty salons, aesthetic clinics & laser studios",
    titleLead: "End the chaos of",
    titleHighlight: "paperwork",
    titleTail: "and no-shows",
    subtitle:
      "Appointments, client records, consent forms and treatment documentation in one clear app – built for beauty and aesthetic businesses worldwide.",
    primaryCta: "Request early access",
    trustItems: ["No credit card", "Ready in 2 minutes", "Free data migration", "Personal support"],
    studiosLabel: "500+ studios",
    ratingValue: "4.6/5",
    image: heroImage,
  },
  aiCapsules: [
    {
      question: "What is Treatflow?",
      answer:
        "Treatflow is all-in-one software for beauty salons, aesthetic clinics and laser studios. It combines online booking, client records, consent forms, treatment notes, photo documentation, calendar reminders and digital workflows in one platform. GDPR-compliant, hosted in the EU.",
    },
    {
      question: "Who is Treatflow for?",
      answer:
        "Treatflow is for beauty salons, aesthetic clinics, laser hair removal studios, cosmetic studios and skin care studios that want less admin, better client experience and structured treatment documentation.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "SSL-encrypted" },
    { icon: Server, text: "EU servers (GDPR)" },
    { icon: Shield, text: "Daily backups" },
    { icon: ShieldCheck, text: "Data-protection ready" },
  ],
  features: {
    title: "The most important features at a glance",
    subtitle: "Everything clearly structured so you and your team can work fast.",
    ctaNote: "No credit card. Cancel anytime.",
    items: [
      { icon: CalendarDays, label: "Appointment calendar", desc: "All appointments in a clear daily and weekly view.", color: "bg-indigo-100 text-indigo-600" },
      { icon: Users, label: "Online booking", desc: "Clients book themselves, even outside opening hours.", color: "bg-emerald-100 text-emerald-600" },
      { icon: ClipboardCheck, label: "Consent forms", desc: "Digital intake and consent forms, completed in advance.", color: "bg-orange-100 text-orange-600" },
      { icon: FileText, label: "Client records", desc: "Client data, history and notes in one place.", color: "bg-blue-100 text-blue-600" },
      { icon: Shield, label: "Treatment documentation", desc: "Document treatments with notes and photos.", color: "bg-teal-100 text-teal-600" },
      { icon: Bell, label: "Reminders", desc: "Automatic SMS and emails reduce no-shows.", color: "bg-rose-100 text-rose-600" },
      { icon: Workflow, label: "Digital workflows", desc: "From booking to documentation in one system.", color: "bg-purple-100 text-purple-600" },
    ],
  },
  extras: {
    title: "And Treatflow can do even more",
    subtitle: "Handy extras that make your studio day even easier - already included.",
    items: [
      { icon: BarChart3, label: "Statistics & reports", desc: "Revenue, appointments, clients and top services at a glance." },
      { icon: Mic, label: "AI dictation", desc: "Simply speak your treatment notes - the AI writes them for you." },
      { icon: Languages, label: "Multilingual booking", desc: "Your booking page in 6 languages - every client books in their own language." },
      { icon: Ticket, label: "Discount codes", desc: "Promotions and new-client codes for online booking." },
      { icon: ListChecks, label: "Tasks & team notes", desc: "Tasks with due dates, notes and assignments - with read receipts for your team." },
    ],
  },
  faqs: {
    title: "Frequently asked questions",
    pricingLinkLabel: "See pricing",
    items: [
      { q: "What is Treatflow?", a: "Treatflow is all-in-one software for beauty salons, aesthetic clinics and laser studios: appointment calendar, digital client records, online booking, consent forms, treatment notes, photo documentation and reminders." },
      { q: "Who is Treatflow for?", a: "Treatflow is for beauty salons, aesthetic clinics, laser hair removal studios, cosmetic studios and skin care studios that want structured digital workflows – from booking to treatment documentation." },
      { q: "How can I get started?", a: "Self-serve signup is currently available in Germany, Austria and Switzerland. For other countries, request early access and we will get back to you." },
      { q: "Is my data secure?", a: "Yes. Treatflow is hosted on EU servers, GDPR-compliant, SSL-encrypted and backed up daily." },
    ],
  },
  cta: {
    title: "Ready to run your studio with less effort?",
    subtitle: "Request early access and see how simple studio management can be.",
    note: "Cancel anytime. GDPR-compliant. With personal support.",
  },
  schemas: {
    software: softwareSchema(
      "en",
      "/en",
      "Software for beauty salons and aesthetic clinics: appointment calendar, digital client records, online booking, consent forms and treatment documentation."
    ),
    faq: faqSchema("en", [
      { q: "What is Treatflow?", a: "Treatflow is software for beauty salons, aesthetic clinics and laser studios with an appointment calendar, digital client records, online booking, consent forms, treatment notes, photo documentation and reminders – all in one app. Made in Austria, GDPR-compliant." },
      { q: "How can I get started?", a: "Request early access for your country, or sign up directly if you are in Germany, Austria or Switzerland." },
    ]),
  },
};

export const esHomePage: HomePageIntlContent = {
  locale: "es",
  earlyAccessHref: "/es/acceso-anticipado",
  pricingHref: "/es/precios",
  hero: {
    eyebrow: "Para salones de belleza, clínicas estéticas y centros láser",
    titleLead: "Acaba con el caos del",
    titleHighlight: "papeleo",
    titleTail: "y las ausencias",
    subtitle:
      "Citas, fichas de clientes, consentimientos y documentación de tratamientos en una sola app clara – pensada para negocios de belleza y estética.",
    primaryCta: "Solicitar acceso anticipado",
    trustItems: ["Sin tarjeta", "Listo en 2 minutos", "Migración de datos", "Soporte personal"],
    studiosLabel: "Más de 500 estudios",
    ratingValue: "4.6/5",
    image: {
      ...heroImage,
      alt: "Calendario de Treatflow abierto en un portátil en un salón de belleza moderno",
    },
  },
  aiCapsules: [
    {
      question: "¿Qué es Treatflow?",
      answer:
        "Treatflow es software todo en uno para salones de belleza, clínicas estéticas y centros láser. Combina reservas online, fichas de clientes, consentimientos, notas de tratamiento, fotos, recordatorios y flujos digitales en una plataforma. Cumple el RGPD y está alojado en la UE.",
    },
    {
      question: "¿Para quién es Treatflow?",
      answer:
        "Para salones de belleza, clínicas estéticas, centros de depilación láser y estudios de estética que quieren menos administración y una documentación clara.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "Cifrado SSL" },
    { icon: Server, text: "Servidores UE (RGPD)" },
    { icon: Shield, text: "Copias diarias" },
    { icon: ShieldCheck, text: "Listo para protección de datos" },
  ],
  features: {
    title: "Las funciones más importantes de un vistazo",
    subtitle: "Todo claramente organizado para que tú y tu equipo trabajéis rápido.",
    ctaNote: "Sin tarjeta. Cancela cuando quieras.",
    items: [
      { icon: CalendarDays, label: "Calendario de citas", desc: "Todas las citas en una vista diaria y semanal clara.", color: "bg-indigo-100 text-indigo-600" },
      { icon: Users, label: "Reservas online", desc: "Las clientas reservan solas, también fuera de horario.", color: "bg-emerald-100 text-emerald-600" },
      { icon: ClipboardCheck, label: "Consentimientos", desc: "Anamnesis y consentimientos digitales, antes de la cita.", color: "bg-orange-100 text-orange-600" },
      { icon: FileText, label: "Fichas de clientes", desc: "Datos, historial y notas en un solo lugar.", color: "bg-blue-100 text-blue-600" },
      { icon: Shield, label: "Documentación", desc: "Documenta tratamientos con notas y fotos.", color: "bg-teal-100 text-teal-600" },
      { icon: Bell, label: "Recordatorios", desc: "SMS y emails automáticos reducen las ausencias.", color: "bg-rose-100 text-rose-600" },
      { icon: Workflow, label: "Flujos digitales", desc: "De la reserva a la documentación en un sistema.", color: "bg-purple-100 text-purple-600" },
    ],
  },
  extras: {
    title: "Y Treatflow puede aún más",
    subtitle: "Extras prácticos que facilitan el día a día – ya incluidos.",
    items: [
      { icon: BarChart3, label: "Estadísticas e informes", desc: "Ingresos, citas, clientas y servicios top de un vistazo." },
      { icon: Mic, label: "Dictado con IA", desc: "Dicta tus notas de tratamiento – la IA las escribe por ti." },
      { icon: Languages, label: "Reservas multilingües", desc: "Tu página de reserva en varios idiomas." },
      { icon: Ticket, label: "Códigos de descuento", desc: "Promociones y códigos para nuevas clientas." },
      { icon: ListChecks, label: "Tareas y notas de equipo", desc: "Tareas con fechas, notas y asignación al equipo." },
    ],
  },
  faqs: {
    title: "Preguntas frecuentes",
    pricingLinkLabel: "Ver precios",
    items: [
      { q: "¿Qué es Treatflow?", a: "Software todo en uno para salones de belleza y clínicas estéticas: calendario, fichas, reservas online, consentimientos, documentación y recordatorios." },
      { q: "¿Para quién es?", a: "Para salones, clínicas estéticas, centros láser y estudios que quieren flujos digitales claros." },
      { q: "¿Cómo empiezo?", a: "El registro directo está disponible en Alemania, Austria y Suiza. En otros países solicita acceso anticipado." },
      { q: "¿Están seguros mis datos?", a: "Sí. Servidores en la UE, RGPD, cifrado SSL y copias diarias." },
    ],
  },
  cta: {
    title: "¿Listo para gestionar tu salón con menos esfuerzo?",
    subtitle: "Solicita acceso anticipado para tu país.",
    note: "Cancela cuando quieras. RGPD. Con soporte personal.",
  },
  schemas: {
    software: softwareSchema(
      "es",
      "/es",
      "Software para salones de belleza y clínicas estéticas: agenda, fichas, reservas online, consentimientos y documentación."
    ),
    faq: faqSchema("es", [
      { q: "¿Qué es Treatflow?", a: "Software para salones de belleza y clínicas estéticas con agenda, fichas, reservas, consentimientos y documentación. Cumple el RGPD." },
      { q: "¿Cómo empiezo?", a: "Solicita acceso anticipado para tu país." },
    ]),
  },
};

export const itHomePage: HomePageIntlContent = {
  locale: "it",
  earlyAccessHref: "/it/accesso-anticipato",
  pricingHref: "/it/prezzi",
  hero: {
    eyebrow: "Per centri estetici, cliniche estetiche e studi laser",
    titleLead: "Fine al caos della",
    titleHighlight: "carta",
    titleTail: "e delle mancate presenze",
    subtitle:
      "Appuntamenti, schede clienti, consensi e documentazione trattamenti in un'unica app chiara – pensata per bellezza ed estetica.",
    primaryCta: "Richiedi accesso anticipato",
    trustItems: ["Nessuna carta", "Pronto in 2 minuti", "Migrazione dati", "Supporto personale"],
    studiosLabel: "Oltre 500 studi",
    ratingValue: "4.6/5",
    image: {
      ...heroImage,
      alt: "Calendario Treatflow aperto su un laptop in un centro estetico moderno",
    },
  },
  aiCapsules: [
    {
      question: "Cos'è Treatflow?",
      answer:
        "Treatflow è software all-in-one per centri estetici, cliniche estetiche e studi laser. Combina prenotazioni online, schede clienti, consensi, note di trattamento, foto, promemoria e flussi digitali. Conforme al GDPR, server in UE.",
    },
    {
      question: "Per chi è Treatflow?",
      answer:
        "Per centri estetici, cliniche estetiche, studi di epilazione laser e beauty salon che vogliono meno amministrazione e documentazione strutturata.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "Crittografia SSL" },
    { icon: Server, text: "Server UE (GDPR)" },
    { icon: Shield, text: "Backup giornalieri" },
    { icon: ShieldCheck, text: "Pronto per la privacy" },
  ],
  features: {
    title: "Le funzioni più importanti a colpo d'occhio",
    subtitle: "Tutto organizzato in modo chiaro per lavorare velocemente.",
    ctaNote: "Nessuna carta. Disdici quando vuoi.",
    items: [
      { icon: CalendarDays, label: "Calendario appuntamenti", desc: "Tutti gli appuntamenti in vista giornaliera e settimanale.", color: "bg-indigo-100 text-indigo-600" },
      { icon: Users, label: "Prenotazioni online", desc: "Le clienti prenotano da sole, anche fuori orario.", color: "bg-emerald-100 text-emerald-600" },
      { icon: ClipboardCheck, label: "Consensi", desc: "Anamnesi e consensi digitali, prima dell'appuntamento.", color: "bg-orange-100 text-orange-600" },
      { icon: FileText, label: "Schede clienti", desc: "Dati, storico e note in un unico posto.", color: "bg-blue-100 text-blue-600" },
      { icon: Shield, label: "Documentazione", desc: "Documenta i trattamenti con note e foto.", color: "bg-teal-100 text-teal-600" },
      { icon: Bell, label: "Promemoria", desc: "SMS ed email automatici riducono le assenze.", color: "bg-rose-100 text-rose-600" },
      { icon: Workflow, label: "Flussi digitali", desc: "Dalla prenotazione alla documentazione in un sistema.", color: "bg-purple-100 text-purple-600" },
    ],
  },
  extras: {
    title: "E Treatflow può fare ancora di più",
    subtitle: "Extra pratici che semplificano la giornata – già inclusi.",
    items: [
      { icon: BarChart3, label: "Statistiche e report", desc: "Ricavi, appuntamenti, clienti e servizi top a colpo d'occhio." },
      { icon: Mic, label: "Dettatura AI", desc: "Detta le note di trattamento – l'AI le scrive per te." },
      { icon: Languages, label: "Prenotazioni multilingue", desc: "La tua pagina di prenotazione in più lingue." },
      { icon: Ticket, label: "Codici sconto", desc: "Promozioni e codici per nuove clienti." },
      { icon: ListChecks, label: "Task e note di team", desc: "Task con scadenze, note e assegnazioni al team." },
    ],
  },
  faqs: {
    title: "Domande frequenti",
    pricingLinkLabel: "Vedi i prezzi",
    items: [
      { q: "Cos'è Treatflow?", a: "Software all-in-one per centri estetici: calendario, schede, prenotazioni online, consensi, documentazione e promemoria." },
      { q: "Per chi è?", a: "Per centri estetici, cliniche estetiche, studi laser e beauty salon." },
      { q: "Come inizio?", a: "La registrazione diretta è disponibile in Germania, Austria e Svizzera. Negli altri Paesi richiedi l'accesso anticipato." },
      { q: "I miei dati sono al sicuro?", a: "Sì. Server in UE, GDPR, SSL e backup giornalieri." },
    ],
  },
  cta: {
    title: "Pronto a gestire il centro con meno fatica?",
    subtitle: "Richiedi l'accesso anticipato per il tuo Paese.",
    note: "Disdici quando vuoi. GDPR. Con supporto personale.",
  },
  schemas: {
    software: softwareSchema(
      "it",
      "/it",
      "Software per centri estetici e cliniche estetiche: calendario, schede, prenotazioni online, consensi e documentazione."
    ),
    faq: faqSchema("it", [
      { q: "Cos'è Treatflow?", a: "Software per centri estetici e cliniche estetiche con calendario, schede, prenotazioni, consensi e documentazione. Conforme al GDPR." },
      { q: "Come inizio?", a: "Richiedi l'accesso anticipato per il tuo Paese." },
    ]),
  },
};

export const frHomePage: HomePageIntlContent = {
  locale: "fr",
  earlyAccessHref: "/fr/acces-anticipe",
  pricingHref: "/fr/tarifs",
  hero: {
    eyebrow: "Pour instituts de beauté, cliniques esthétiques et centres laser",
    titleLead: "Finissez avec le chaos du",
    titleHighlight: "papier",
    titleTail: "et des absences",
    subtitle:
      "Rendez-vous, fiches clients, consentements et documentation des soins dans une app claire – conçue pour la beauté et l'esthétique.",
    primaryCta: "Demander un accès anticipé",
    trustItems: ["Sans carte", "Prêt en 2 minutes", "Migration des données", "Support personnel"],
    studiosLabel: "Plus de 500 instituts",
    ratingValue: "4.6/5",
    image: {
      ...heroImage,
      alt: "Calendrier Treatflow ouvert sur un ordinateur dans un institut de beauté moderne",
    },
  },
  aiCapsules: [
    {
      question: "Qu'est-ce que Treatflow ?",
      answer:
        "Treatflow est un logiciel tout-en-un pour instituts de beauté, cliniques esthétiques et centres laser. Il combine réservation en ligne, fiches clients, consentements, notes de soins, photos, rappels et flux numériques. Conforme au RGPD, hébergé dans l'UE.",
    },
    {
      question: "Pour qui est Treatflow ?",
      answer:
        "Pour les instituts de beauté, cliniques esthétiques, centres d'épilation laser et studios qui veulent moins d'administratif et une documentation structurée.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "Chiffrement SSL" },
    { icon: Server, text: "Serveurs UE (RGPD)" },
    { icon: Shield, text: "Sauvegardes quotidiennes" },
    { icon: ShieldCheck, text: "Prêt pour la protection des données" },
  ],
  features: {
    title: "Les fonctionnalités essentielles en un coup d'œil",
    subtitle: "Tout est clairement structuré pour travailler vite avec votre équipe.",
    ctaNote: "Sans carte. Résiliable à tout moment.",
    items: [
      { icon: CalendarDays, label: "Calendrier de rendez-vous", desc: "Tous les rendez-vous en vue journalière et hebdomadaire.", color: "bg-indigo-100 text-indigo-600" },
      { icon: Users, label: "Réservation en ligne", desc: "Les clientes réservent seules, même hors horaires.", color: "bg-emerald-100 text-emerald-600" },
      { icon: ClipboardCheck, label: "Consentements", desc: "Anamnèse et consentements numériques, avant le rendez-vous.", color: "bg-orange-100 text-orange-600" },
      { icon: FileText, label: "Fiches clients", desc: "Données, historique et notes au même endroit.", color: "bg-blue-100 text-blue-600" },
      { icon: Shield, label: "Documentation", desc: "Documentez les soins avec notes et photos.", color: "bg-teal-100 text-teal-600" },
      { icon: Bell, label: "Rappels", desc: "SMS et e-mails automatiques réduisent les absences.", color: "bg-rose-100 text-rose-600" },
      { icon: Workflow, label: "Flux numériques", desc: "De la réservation à la documentation dans un système.", color: "bg-purple-100 text-purple-600" },
    ],
  },
  extras: {
    title: "Et Treatflow fait encore plus",
    subtitle: "Des extras pratiques pour votre journée – déjà inclus.",
    items: [
      { icon: BarChart3, label: "Statistiques et rapports", desc: "CA, rendez-vous, clients et services phares en un coup d'œil." },
      { icon: Mic, label: "Dictée IA", desc: "Dictez vos notes de soins – l'IA les écrit pour vous." },
      { icon: Languages, label: "Réservation multilingue", desc: "Votre page de réservation en plusieurs langues." },
      { icon: Ticket, label: "Codes promo", desc: "Promotions et codes pour nouvelles clientes." },
      { icon: ListChecks, label: "Tâches et notes d'équipe", desc: "Tâches avec échéances, notes et assignations." },
    ],
  },
  faqs: {
    title: "Questions fréquentes",
    pricingLinkLabel: "Voir les tarifs",
    items: [
      { q: "Qu'est-ce que Treatflow ?", a: "Logiciel tout-en-un pour instituts de beauté : calendrier, fiches, réservation en ligne, consentements, documentation et rappels." },
      { q: "Pour qui ?", a: "Pour instituts, cliniques esthétiques, centres laser et studios beauté." },
      { q: "Comment commencer ?", a: "L'inscription directe est disponible en Allemagne, Autriche et Suisse. Dans les autres pays, demandez un accès anticipé." },
      { q: "Mes données sont-elles protégées ?", a: "Oui. Serveurs UE, RGPD, SSL et sauvegardes quotidiennes." },
    ],
  },
  cta: {
    title: "Prêt à gérer votre institut plus simplement ?",
    subtitle: "Demandez un accès anticipé pour votre pays.",
    note: "Résiliable à tout moment. RGPD. Avec support personnel.",
  },
  schemas: {
    software: softwareSchema(
      "fr",
      "/fr",
      "Logiciel pour instituts de beauté et cliniques esthétiques : agenda, fiches, réservation en ligne, consentements et documentation."
    ),
    faq: faqSchema("fr", [
      { q: "Qu'est-ce que Treatflow ?", a: "Logiciel pour instituts de beauté et cliniques esthétiques avec agenda, fiches, réservation, consentements et documentation. Conforme au RGPD." },
      { q: "Comment commencer ?", a: "Demandez un accès anticipé pour votre pays." },
    ]),
  },
};
