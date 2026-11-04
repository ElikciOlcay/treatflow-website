import {
  BarChart3,
  Bell,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Gift,
  Globe,
  Languages,
  Link2,
  ListChecks,
  Lock,
  Mic,
  Plug,
  Server,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Ticket,
  Users,
  Workflow,
} from "lucide-react";
import { BASE_URL } from "@/app/i18n/config";
import type { LocaleSiteContent } from "../types";

/**
 * Contenido en español (España) – páginas generales (inicio, precios, funciones,
 * comparativas, sobre nosotros, contacto, privacidad, condiciones).
 * Enlaces internos como rutas EN; el remapper pone los slugs ES.
 */

const featureColors = {
  calendar: "bg-indigo-100 text-indigo-600",
  booking: "bg-emerald-100 text-emerald-600",
  consent: "bg-orange-100 text-orange-600",
  records: "bg-blue-100 text-blue-600",
  docs: "bg-teal-100 text-teal-600",
  reminders: "bg-rose-100 text-rose-600",
  workflows: "bg-purple-100 text-purple-600",
} as const;

const cardMeta = {
  calendar: { icon: CalendarDays, color: "text-indigo-600", bg: "bg-indigo-50" },
  booking: { icon: Link2, color: "text-rose-600", bg: "bg-rose-50" },
  records: { icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
  forms: { icon: ClipboardCheck, color: "text-orange-600", bg: "bg-orange-50" },
  docs: { icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
  messaging: { icon: Bell, color: "text-purple-600", bg: "bg-purple-50" },
  integrations: { icon: Plug, color: "text-sky-600", bg: "bg-sky-50" },
  shop: { icon: ShoppingBag, color: "text-amber-600", bg: "bg-amber-50" },
  vouchers: { icon: Gift, color: "text-violet-600", bg: "bg-violet-50" },
  website: { icon: Globe, color: "text-teal-600", bg: "bg-teal-50" },
} as const;

const heroImageSrc = "/images/lifestyle/hero-startseite-en.png";

/* -------------------------------------------------------------------------- */
/* Inicio                                                                     */
/* -------------------------------------------------------------------------- */

const homeFaqs = [
  {
    q: "¿Qué es Treatflow?",
    a: "Treatflow es un software todo en uno para centros de estética, salones de belleza y clínicas estéticas. Reúne agenda de citas, reservas online sin comisión, fichas de clientes digitales, formularios de consentimiento, notas de tratamiento, documentación fotográfica y recordatorios en una sola app. Desarrollado en Austria y alojado en servidores de la UE.",
  },
  {
    q: "¿Treatflow cobra comisión por las reservas?",
    a: "No. Treatflow es el software de tu centro, no un marketplace. Los datos de tus clientes son tuyos, pagas una cuota mensual transparente y no hay comisión por ninguna reserva.",
  },
  {
    q: "¿Para quién es Treatflow?",
    a: "Para salones de belleza, centros de estética, clínicas de medicina estética, centros de depilación láser, estudios de micropigmentación, salones de uñas y pestañas, spas y centros de masaje que quieren menos citas perdidas, consentimientos conformes al RGPD y una documentación de tratamientos ordenada.",
  },
  {
    q: "¿Incluye Treatflow consentimientos informados digitales para clínicas estéticas?",
    a: "Sí. Tus clientes rellenan la ficha de anamnesis y el consentimiento en el móvil antes de la cita. Las respuestas se guardan en su ficha, con firma digital cuando hace falta.",
  },
  {
    q: "¿Puede un centro de depilación láser documentar los tratamientos en Treatflow?",
    a: "Sí. La documentación de tratamientos incluye parámetros, notas y fotos de antes y después. También puedes dictar las notas por voz.",
  },
  {
    q: "¿Las fichas de clientes digitales cumplen el RGPD?",
    a: "Treatflow está alojado en servidores de la UE en Fráncfort, usa cifrado SSL y copias de seguridad diarias. Fichas, formularios y documentación están en un único sistema diseñado para cumplir el RGPD y la LOPDGDD.",
  },
  {
    q: "¿Cuánto cuesta Treatflow?",
    a: "El plan Basic cuesta desde 39 €/mes e incluye fichas de clientes, formularios y documentación. El plan Booking, desde 59 €/mes, añade agenda, reservas online y recordatorios. 14 días gratis, sin tarjeta de crédito.",
  },
  {
    q: "¿Cómo empiezo?",
    a: "Regístrate en app.treatflow.io y empieza tu prueba gratuita de 14 días. No necesitas tarjeta de crédito y puedes cancelar cuando quieras.",
  },
];

const home: LocaleSiteContent["home"] = {
  locale: "es",
  earlyAccessHref: "",
  pricingHref: "/en/pricing",
  hero: {
    eyebrow: "Para centros de estética y clínicas estéticas",
    titleLead: "Menos citas perdidas,",
    titleHighlight: "clientes más fieles",
    titleTail: "y adiós al papeleo",
    subtitle:
      "Agenda de citas, reservas online sin comisión, fichas de clientes, consentimientos y documentación de tratamientos – todo en una app clara y sencilla. Desarrollado en Austria para centros de todo el mundo.",
    primaryCta: "Prueba gratis",
    trustItems: [
      "Sin tarjeta de crédito",
      "Listo en 2 minutos",
      "Migración de datos gratuita",
      "Soporte personal",
    ],
    studiosLabel: "Más de 500 centros",
    ratingValue: "4.6/5",
    image: {
      src: heroImageSrc,
      alt: "Agenda de citas de Treatflow abierta en un portátil en un centro de estética moderno",
    },
  },
  aiCapsules: [
    {
      question: "¿Qué es Treatflow?",
      answer:
        "Treatflow es un software todo en uno para centros de estética y clínicas estéticas: agenda de citas, reservas online sin comisión, fichas de clientes, consentimientos digitales, notas de tratamiento y documentación fotográfica. Alojado en la UE. 14 días de prueba gratis.",
    },
    {
      question: "¿Treatflow cobra comisión por reserva?",
      answer:
        "No. Treatflow no es un marketplace. El centro paga una cuota mensual fija (Basic desde 39 €, Booking desde 59 €) y se queda con el 100 % de los ingresos de sus reservas.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "Cifrado SSL" },
    { icon: Server, text: "Servidores en la UE" },
    { icon: Shield, text: "Copias de seguridad diarias" },
    { icon: ShieldCheck, text: "Consentimientos conformes al RGPD" },
  ],
  features: {
    title: "Las funciones más importantes de un vistazo",
    subtitle: "Todo bien organizado para que tú y tu equipo trabajéis rápido.",
    ctaNote: "Sin tarjeta de crédito. Cancela cuando quieras.",
    items: [
      { icon: CalendarDays, label: "Agenda de citas", desc: "Vista diaria, semanal y mensual con columnas por profesional y cabina.", color: featureColors.calendar },
      { icon: Users, label: "Reservas online", desc: "Tu propio enlace de reserva, 24/7. Sin marketplace y sin comisión.", color: featureColors.booking },
      { icon: ClipboardCheck, label: "Consentimientos", desc: "Anamnesis y consentimiento digitales, firmados en el móvil o en el centro.", color: featureColors.consent },
      { icon: FileText, label: "Fichas de clientes", desc: "Historial, notas, fotos y formularios en una ficha conforme al RGPD.", color: featureColors.records },
      { icon: Shield, label: "Documentación de tratamientos", desc: "Parámetros, notas y fotos de antes y después en cada visita.", color: featureColors.docs },
      { icon: Bell, label: "Recordatorios", desc: "Recordatorios automáticos por WhatsApp y email que reducen las ausencias.", color: featureColors.reminders },
      { icon: Workflow, label: "Flujos digitales", desc: "De la reserva a la documentación en un único sistema.", color: featureColors.workflows },
    ],
  },
  extras: {
    title: "Y Treatflow hace todavía más",
    subtitle: "Extras prácticos que te facilitan el día a día en el centro – ya incluidos.",
    items: [
      { icon: BarChart3, label: "Estadísticas e informes", desc: "Facturación, citas, clientes y servicios más reservados de un vistazo." },
      { icon: Mic, label: "Dictado con IA", desc: "Dicta tus notas de tratamiento y Treatflow las escribe por ti." },
      { icon: Languages, label: "Reservas en varios idiomas", desc: "Tus clientes reservan en su idioma en tu página de reservas." },
      { icon: Ticket, label: "Códigos de descuento", desc: "Promociones y códigos para nuevos clientes en la reserva online." },
      { icon: ListChecks, label: "Tareas y notas del equipo", desc: "Tareas con fecha límite y confirmación de lectura para tu equipo." },
    ],
  },
  faqs: {
    title: "Preguntas frecuentes",
    pricingLinkLabel: "Ver precios",
    items: homeFaqs,
  },
  cta: {
    title: "¿Quieres días más tranquilos y menos ausencias?",
    subtitle: "Empieza hoy con Treatflow – 14 días gratis, sin tarjeta de crédito.",
    note: "14 días gratis · Sin tarjeta de crédito · Cancela cuando quieras",
  },
  schemas: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Treatflow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      description:
        "Software todo en uno para centros de estética y clínicas estéticas: agenda de citas, reservas online sin comisión, fichas de clientes, consentimientos y documentación de tratamientos. Alojamiento en la UE conforme al RGPD. Desarrollado en Austria.",
      url: `${BASE_URL}/es`,
      inLanguage: "es",
      author: { "@type": "Organization", name: "Treatflow", url: BASE_URL },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "19",
        reviewCount: "19",
        bestRating: "5",
        worstRating: "1",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          description: "Fichas de clientes, formularios y documentación de tratamientos",
        },
        {
          "@type": "Offer",
          name: "Booking",
          price: "59",
          priceCurrency: "EUR",
          description: "Agenda, reservas online y recordatorios automáticos",
        },
      ],
      featureList: [
        "Agenda de citas con columnas por profesional y cabina",
        "Reservas online sin comisión",
        "Fichas de clientes digitales",
        "Formularios de consentimiento y anamnesis",
        "Documentación de tratamientos con fotos",
        "Recordatorios por WhatsApp y email",
      ],
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "es",
      mainEntity: homeFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  },
};

/* -------------------------------------------------------------------------- */
/* Precios                                                                    */
/* -------------------------------------------------------------------------- */

const pricing: LocaleSiteContent["pricing"] = {
  eyebrow: "Precios transparentes",
  titleBefore: "Precios sencillos –",
  titleHighlight: "sin costes ocultos",
  subtitle:
    "Elige el plan que mejor encaja con tu centro. Empieza tu prueba gratuita de 14 días – sin tarjeta de crédito.",
  monthly: "Mensual",
  yearly: "Anual",
  saveBadge: "Ahorra un 10 %",
  perMonth: "/mes",
  perYear: "/año",
  basicYearlyHint: "35 €/mes • Ahorras 47 € al año",
  bookingYearlyHint: "53 €/mes • Ahorras 71 € al año",
  exclVat: "IVA no incluido",
  popular: "Más elegido",
  cta: "Prueba gratis",
  earlyAccessHref: "",
  basic: {
    name: "Basic",
    description:
      "Anamnesis digital, consentimientos y documentación de tratamientos – sin agenda de citas.",
    included: [
      "Fichas de clientes",
      "Formularios con firma digital",
      "Documentación de tratamientos y notas de voz",
      "Fotos de antes y después",
      "Notas y tareas del equipo",
      "Tienda y productos",
      "Informes",
      "Roles de empleados",
      "Soporte por email",
    ],
    excluded: [
      "Agenda de citas",
      "Reservas online",
      "Automatizaciones y lista de espera",
      "Soporte prioritario",
    ],
  },
  booking: {
    name: "Booking",
    description:
      "Agenda de citas, reservas online y recordatorios automáticos para tu centro.",
    included: [
      "Todo lo del plan Basic",
      "Agenda de citas (profesionales y cabinas)",
      "Reservas online sin comisión",
      "Lista de espera",
      "Recordatorios por WhatsApp y email",
      "Flujos automáticos para clientes",
      "Códigos de descuento",
      "Página de reservas multilingüe",
      "Integraciones (Zapier y más)",
      "Soporte prioritario por email y chat",
    ],
  },
  trialBox: {
    title: "14 días gratis",
    text: "Sin tarjeta de crédito • Cancela cuando quieras • Migración de datos gratuita",
    points: ["Sin costes de alta", "Cancelación mensual", "Conforme al RGPD"],
  },
  comparison: {
    title: "¿Qué incluye cada plan?",
    subtitle: "Compara los dos planes en detalle y elige el que mejor encaja con tu centro.",
    vatNote: "Todos los precios sin IVA.",
    featureCol: "Función",
    rows: [
      { feature: "Fichas de clientes", basic: true, booking: true },
      { feature: "Formularios con firma digital", basic: true, booking: true },
      { feature: "Documentación de tratamientos y notas de voz", basic: true, booking: true },
      { feature: "Fotos de antes y después", basic: true, booking: true },
      { feature: "Notas y tareas del equipo", basic: true, booking: true },
      { feature: "Tienda y productos", basic: true, booking: true },
      { feature: "Informes", basic: true, booking: true },
      { feature: "Roles de empleados", basic: true, booking: true },
      { feature: "Soporte por email", basic: true, booking: true },
      { feature: "Agenda de citas (profesionales y cabinas)", basic: false, booking: true },
      { feature: "Reservas online sin comisión", basic: false, booking: true },
      { feature: "Lista de espera", basic: false, booking: true },
      { feature: "Recordatorios por WhatsApp y email", basic: false, booking: true },
      { feature: "Flujos automáticos para clientes", basic: false, booking: true },
      { feature: "Códigos de descuento", basic: false, booking: true },
      { feature: "Página de reservas multilingüe", basic: false, booking: true },
      { feature: "Integraciones (Zapier)", basic: false, booking: true },
      { feature: "Soporte prioritario", basic: false, booking: true },
    ],
  },
  why: {
    title: "¿Por qué Treatflow?",
    subtitle: "Precios fijos y transparentes en lugar de costes ocultos y comisiones.",
    items: [
      { value: "0 %", label: "de comisión por reserva" },
      { value: "0 €", label: "de costes de alta" },
      { value: "14 días", label: "de prueba gratis" },
      { value: "Siempre", label: "puedes cancelar" },
    ],
  },
  faq: {
    title: "Preguntas sobre los precios",
    subtitle: "Todo lo que necesitas saber sobre los precios de Treatflow.",
    items: [
      {
        question: "¿Cuánto cuesta Treatflow?",
        answer:
          "Treatflow tiene dos planes: Basic desde 39 €/mes para fichas de clientes, formularios y documentación, y Booking desde 59 €/mes con agenda de citas, reservas online y recordatorios automáticos. Puedes probar ambos durante 14 días.",
      },
      {
        question: "¿Hay costes ocultos?",
        answer:
          "No. Treatflow tiene precios fijos y transparentes, sin comisiones por reserva, sin costes de alta y sin extras ocultos.",
      },
      {
        question: "¿Puedo cancelar cuando quiera?",
        answer:
          "Sí. Con la facturación mensual cancelas al final del periodo de facturación. No hay permanencia mínima.",
      },
      {
        question: "¿Merece la pena el plan Booking?",
        answer:
          "Si necesitas reservas online, recordatorios automáticos de citas y una agenda digital, sí. Los recordatorios automáticos ayudan a reducir las ausencias y las reservas online te ahorran llamadas.",
      },
      {
        question: "¿Puedo usar Treatflow en España?",
        answer:
          "Sí. Puedes registrarte desde cualquier país y empezar tu prueba gratuita de 14 días en app.treatflow.io, sin tarjeta de crédito. Los precios son en euros.",
      },
    ],
  },
  meta: {
    title: "Precios",
    description:
      "Precios de Treatflow: Basic desde 39 €/mes, Booking desde 59 €/mes. Sin comisión por reserva, 14 días gratis, sin tarjeta de crédito.",
  },
};

const pricingKeywords = [
  "software centro de estética precio",
  "programa de gestión para centros de estética precio",
  "agenda online para centros de estética precio",
  "software de reservas sin comisión",
  "software para clínicas estéticas precio",
];

/* -------------------------------------------------------------------------- */
/* Funciones                                                                  */
/* -------------------------------------------------------------------------- */

const featuresMeta: LocaleSiteContent["featuresMeta"] = {
  title: "Funciones para centros de estética y clínicas",
  description:
    "Agenda de citas, reservas online sin comisión, fichas de clientes, consentimientos digitales, documentación de tratamientos con dictado por voz, recordatorios e integraciones – en un solo software para tu centro.",
  keywords: [
    "software para centros de estética",
    "agenda online para centros de estética",
    "programa de gestión centro de estética",
    "ficha de cliente estética digital",
    "consentimiento informado digital estética",
  ],
};

const featuresOverview: LocaleSiteContent["featuresOverview"] = {
  breadcrumbLabel: "Funciones",
  homeHref: "/en",
  registerHref: "",
  pricingHref: "/en/pricing",
  eyebrow: "Todas las funciones",
  title: "Software para centros de estética y clínicas, de la reserva a la documentación",
  subtitle:
    "Treatflow reúne agenda, reservas online, fichas de clientes, formularios digitales, notas de tratamiento y seguimiento en un solo lugar. Pensado para centros de estética y clínicas estéticas – no como un marketplace de reservas.",
  bullets: [
    "Sin comisión por reserva",
    "Formularios, fotos y notas en la ficha del cliente",
    "Dictado por voz para las notas de tratamiento",
    "14 días gratis, sin tarjeta de crédito",
  ],
  primaryCta: "Prueba gratis",
  pricingCta: "Ver precios",
  heroImageSrc,
  heroImageAlt:
    "Treatflow en un portátil y una tablet en una clínica: agenda de citas y fichas de clientes",
  capsules: [
    {
      question: "¿Qué funciones incluye Treatflow?",
      answer:
        "Treatflow incluye agenda de citas, reservas online sin comisión, fichas de clientes, formularios digitales de anamnesis y consentimiento, documentación de tratamientos con fotos y dictado por voz, recordatorios, integraciones, tienda y bonos regalo.",
    },
    {
      question: "¿Treatflow es un software todo en uno?",
      answer:
        "Sí. Treatflow es el software para centros de estética y clínicas estéticas. Reservas, fichas, formularios, documentación y seguimiento están en un único sistema. No es un marketplace y no cobra comisión por reserva.",
    },
  ],
  workflowTitle: "Cómo funcionan juntas las funciones",
  workflowSubtitle:
    "Cada paso lleva al siguiente, así el equipo trabaja con un único recorrido del cliente en lugar de con herramientas separadas.",
  workflowSteps: [
    {
      href: "/en/online-booking",
      label: "Reservas online",
      desc: "Tus clientes reservan desde tu propio enlace. Los huecos se sincronizan con la agenda del centro.",
    },
    {
      href: "/en/forms",
      label: "Anamnesis y consentimiento",
      desc: "Los formularios de anamnesis y consentimiento se pueden rellenar antes de que llegue el cliente.",
    },
    {
      href: "/en/client-records",
      label: "Fichas de clientes",
      desc: "Historial, notas y formularios en un perfil que todo el equipo puede abrir.",
    },
    {
      href: "/en/treatment-documentation",
      label: "Documentación",
      desc: "Notas, dictado por voz, parámetros y fotos quedan vinculados a la visita.",
    },
    {
      href: "/en/messaging",
      label: "Seguimiento",
      desc: "Los recordatorios y mensajes automáticos reducen las ausencias y hacen que los clientes vuelvan.",
    },
  ],
  cardsTitle: "Funciones de un vistazo",
  cardsSubtitle: "Cada tarjeta abre la página detallada de la función.",
  cards: [
    {
      href: "/en/appointment-calendar",
      ...cardMeta.calendar,
      title: "Agenda de citas",
      desc: "Vista diaria, semanal y mensual con columnas por profesional o cabina. Las reservas online entran en la misma agenda.",
      highlights: ["Columnas por profesional y cabina", "Arrastrar y soltar", "Sincronizada con las reservas online"],
    },
    {
      href: "/en/online-booking",
      ...cardMeta.booking,
      title: "Reservas online",
      desc: "Tu propia página de reservas con disponibilidad en tiempo real. Sin comisión de marketplace. Las confirmaciones se envían automáticamente.",
      highlights: ["Enlace de reserva 24/7", "Sin comisión", "Señal opcional"],
    },
    {
      href: "/en/client-records",
      ...cardMeta.records,
      title: "Fichas de clientes",
      desc: "Historial, notas, formularios y fotos en un perfil que todo el equipo puede consultar antes de la visita.",
      highlights: ["Perfiles con buscador", "Formularios en la ficha", "Visible para el equipo"],
    },
    {
      href: "/en/forms",
      ...cardMeta.forms,
      title: "Anamnesis y consentimiento",
      desc: "Envía los formularios de anamnesis y consentimiento antes de la cita. Tus clientes los rellenan en el móvil, con firma digital incluida.",
      highlights: ["Envío antes de la cita", "Firma digital", "Guardado en la ficha"],
    },
    {
      href: "/en/treatment-documentation",
      ...cardMeta.docs,
      title: "Documentación de tratamientos",
      desc: "Notas de sesión, parámetros y fotos de antes y después en cada visita. Dicta las notas por voz y, si quieres, mejóralas con IA.",
      highlights: ["Notas y parámetros", "Dictado por voz", "Fotos de antes y después"],
    },
    {
      href: "/en/messaging",
      ...cardMeta.messaging,
      title: "Recordatorios y seguimiento",
      desc: "Recordatorios automáticos por WhatsApp y email antes de la cita y mensajes de seguimiento después del tratamiento. Tú decides cuándo se envían.",
      highlights: ["WhatsApp y email", "Confirmaciones de reserva", "Mensajes de reactivación"],
    },
    {
      href: "/en/integrations",
      ...cardMeta.integrations,
      title: "Integraciones",
      desc: "Mantén Treatflow sincronizado con las herramientas que ya usas, como Google Calendar y Zapier.",
      highlights: ["Google Calendar", "Zapier", "Menos datos duplicados"],
    },
    {
      href: "/en/shop",
      ...cardMeta.shop,
      title: "Tienda e inventario",
      desc: "Vende productos junto a tus tratamientos y controla el stock en el mismo sistema.",
      highlights: ["Venta de productos", "Inventario", "Vinculado al cliente"],
    },
    {
      href: "/en/vouchers",
      ...cardMeta.vouchers,
      title: "Bonos regalo",
      desc: "Vende y canjea bonos regalo, incluido el saldo restante, sin hojas de cálculo aparte.",
      highlights: ["Venta y canje", "Saldo restante", "Control de validez"],
    },
    {
      href: "/en/studio-website",
      ...cardMeta.website,
      title: "Web del centro",
      desc: "Una web para tu centro conectada con tu página de reservas de Treatflow, para que las visitas reserven en lugar de solo mirar.",
      highlights: ["Pensada para el móvil", "Reservas conectadas", "Hecha para centros"],
    },
  ],
  learnMore: "Más información",
  stepLabel: (n: number) => `Paso ${n}`,
  showCheckoutSection: false,
  checkoutTitle: "",
  checkoutText: "",
  industriesTitle: "Para quién son estas funciones",
  industriesSubtitle: "Las mismas funciones, adaptadas a la forma de trabajar de cada centro.",
  industries: [
    { href: "/en/beauty-salon-software", label: "Salones de belleza" },
    { href: "/en/aesthetic-clinic-software", label: "Clínicas estéticas" },
    { href: "/en/laser-hair-removal-software", label: "Depilación láser" },
    { href: "/en/permanent-makeup-software", label: "Micropigmentación" },
    { href: "/en/lash-studio-software", label: "Estudios de pestañas" },
    { href: "/en/nail-salon-software", label: "Salones de uñas" },
    { href: "/en/massage-software", label: "Masaje y bienestar" },
    { href: "/en/spa-wellness-software", label: "Spa" },
  ],
  relatedTitle: "Páginas relacionadas",
  relatedLinks: [
    { href: "/en/pricing", label: "Precios" },
    { href: "/en/software-comparison", label: "Comparativa de software" },
    { href: "/en/treatflow-vs-fresha", label: "Treatflow vs Fresha" },
    { href: "/en/treatflow-vs-treatwell", label: "Treatflow vs Treatwell" },
  ],
  faqs: [
    {
      question: "¿Qué funciones incluye Treatflow?",
      answer:
        "Treatflow incluye agenda de citas, reservas online sin comisión, fichas de clientes, formularios digitales de anamnesis y consentimiento, documentación de tratamientos con fotos y dictado por voz, recordatorios, integraciones, tienda, bonos regalo y una web opcional para tu centro.",
    },
    {
      question: "¿Treatflow es un software todo en uno o solo una herramienta de reservas?",
      answer:
        "Treatflow es el software de tu centro, no un marketplace. Reservas, fichas, formularios, documentación y seguimiento están en un único sistema, así el equipo no tiene que saltar de una app a otra.",
    },
    {
      question: "¿Están seguros los datos de mis clientes?",
      answer:
        "Sí. Treatflow está alojado en servidores de la UE (Fráncfort), con cifrado SSL y copias de seguridad diarias. El sistema está diseñado para cumplir el RGPD.",
    },
    {
      question: "¿Puedo probar todas las funciones antes de pagar?",
      answer:
        "Sí. Empieza una prueba gratuita de 14 días sin tarjeta de crédito. Puedes cancelar cuando quieras.",
    },
  ],
  faqTitle: "Preguntas frecuentes",
  faqBadge: "FAQ",
  bottomTitle: "¿Quieres gestionar todo tu centro desde un solo lugar?",
  bottomText: "Empieza tu prueba gratuita – sin tarjeta de crédito, cancela cuando quieras.",
};

/* -------------------------------------------------------------------------- */
/* Comparativas                                                               */
/* -------------------------------------------------------------------------- */

const comparisons: LocaleSiteContent["comparisons"] = {
  "treatflow-vs-fresha": {
    competitor: "Fresha",
    title: "Treatflow vs Fresha",
    description:
      "Treatflow vs Fresha para centros de estética: software con documentación y consentimientos frente a una herramienta de reservas gratuita financiada con pagos. Comparativa honesta.",
    intro:
      "Fresha se usa mucho como herramienta de reservas gratuita. Treatflow es un software de pago para tu centro: tus clientes siguen siendo tuyos, pagas una cuota fija y documentas tratamientos y consentimientos en un solo lugar. Sin comisión de marketplace.",
    rows: [
      { feature: "Modelo de negocio", treatflow: "SaaS, precio mensual fijo", competitor: "Base gratuita, ingresos vía pagos", treatflowOk: true, competitorOk: false },
      { feature: "Comisión por reserva", treatflow: "Ninguna", competitor: "Sin comisión de marketplace, posibles tasas de pago", treatflowOk: true, competitorOk: true },
      { feature: "Propiedad de los clientes", treatflow: "Las fichas son del centro", competitor: "Depende de cómo uses la plataforma", treatflowOk: true, competitorOk: false },
      { feature: "Consentimientos y anamnesis", treatflow: "Integrados, firmados y guardados en la ficha", competitor: "Limitados / no centrados en documentación estética", treatflowOk: true, competitorOk: false },
      { feature: "Documentación de tratamientos", treatflow: "Notas, parámetros, fotos de antes y después", competitor: "No es un sistema de documentación", treatflowOk: true, competitorOk: false },
      { feature: "Precio", treatflow: "Desde 39 €/mes, transparente", competitor: "Entrada gratuita, costes que crecen con los pagos", treatflowOk: true, competitorOk: true },
      { feature: "Alojamiento", treatflow: "Servidores en la UE, conforme al RGPD", competitor: "Producto internacional", treatflowOk: true, competitorOk: false },
    ],
    faqs: [
      {
        q: "¿Fresha es realmente gratis?",
        a: "La parte de reservas puede ser gratuita. Fresha suele ganar dinero con los pagos con tarjeta y productos adicionales. Tu coste real depende de tu facturación, no de una cuota fija publicada.",
      },
      {
        q: "¿Qué diferencia hay entre Treatflow y Fresha?",
        a: "Treatflow es un software independiente para tu centro con agenda, fichas, consentimientos y documentación de tratamientos. Fresha es ante todo una herramienta de reservas gratuita. Treatflow no cobra comisión por reserva.",
      },
      {
        q: "¿Fresha incluye documentación de tratamientos para clínicas estéticas?",
        a: "Fresha no está pensada como sistema de documentación de tratamientos con parámetros y fotos. Treatflow guarda parámetros, notas y fotos en cada visita.",
      },
      {
        q: "¿Puedo pasarme de Fresha a Treatflow?",
        a: "Sí. Te ayudamos a migrar los datos de tus clientes. Puedes probar Treatflow 14 días sin tarjeta de crédito.",
      },
    ],
    ctaTitle: "¿Prefieres pagar un software y no un porcentaje de cada visita?",
    keywords: [
      "alternativa a Fresha",
      "Fresha opiniones",
      "Treatflow vs Fresha",
      "software centro de estética alternativa a Fresha",
    ],
  },
  "treatflow-vs-treatwell": {
    competitor: "Treatwell",
    title: "Treatflow vs Treatwell",
    description:
      "Treatflow vs Treatwell: quédate con tus clientes y paga una cuota mensual, o aparece en un marketplace que cobra comisión. Comparativa para centros de estética y salones de belleza.",
    intro:
      "Treatwell es un marketplace. Treatflow es tu propio software. Si buscas visibilidad en una plataforma, Treatwell puede ayudarte. Si quieres que la relación con tus clientes sea tuya y evitar comisiones, Treatflow encaja mejor.",
    rows: [
      { feature: "Modelo", treatflow: "El software de tu centro", competitor: "Marketplace / plataforma", treatflowOk: true, competitorOk: false },
      { feature: "Comisión", treatflow: "0 % por reserva", competitor: "Comisión en las reservas del marketplace", treatflowOk: true, competitorOk: false },
      { feature: "Datos de clientes", treatflow: "Se quedan en la cuenta de tu centro", competitor: "Compartidos con la plataforma", treatflowOk: true, competitorOk: false },
      { feature: "Reservas online", treatflow: "Tu enlace, tu marca", competitor: "Perfil en la plataforma más herramientas", treatflowOk: true, competitorOk: true },
      { feature: "Formularios y documentación", treatflow: "Núcleo del producto", competitor: "No es la función principal de un marketplace", treatflowOk: true, competitorOk: false },
      { feature: "Precio", treatflow: "SaaS de 39 € a 59 €/mes", competitor: "Basado en comisiones", treatflowOk: true, competitorOk: false },
    ],
    faqs: [
      {
        q: "¿Es Treatflow una alternativa a Treatwell sin comisión?",
        a: "Sí, si lo que buscas es un software y no un marketplace. Compartes tu propio enlace de reserva y pagas un plan mensual en lugar de un porcentaje por cada reserva.",
      },
      {
        q: "¿Treatwell incluye consentimientos y notas de tratamiento?",
        a: "Los marketplaces se centran en la captación y las reservas. Treatflow está construido en torno a fichas, formularios y documentación, además de la agenda.",
      },
      {
        q: "¿Puedo usar los dos?",
        a: "Algunos centros mantienen un marketplace para captar clientes y gestionan el día a día en Treatflow. Treatflow no requiere ninguna cuenta en un marketplace.",
      },
    ],
    ctaTitle: "Gestiona las reservas con tu propio enlace, sin comisión de marketplace",
    keywords: [
      "alternativa a Treatwell",
      "Treatwell comisión",
      "Treatflow vs Treatwell",
      "reservas online sin comisión",
    ],
  },
  "software-comparison": {
    competitor: "Herramientas habituales",
    title: "Comparativa de software para centros de estética",
    description:
      "Compara software para centros de estética: marketplace, herramienta de reservas gratuita o Treatflow. Sin comisión, fichas conformes al RGPD, consentimientos y documentación.",
    intro:
      "La mayoría de centros combinan una agenda, un widget de reservas, formularios en papel y carpetas de fotos. Treatflow sustituye todo eso por una sola app: citas, reservas online sin comisión, fichas de clientes, formularios y documentación de tratamientos.",
    rows: [
      { feature: "Todo en uno", treatflow: "Agenda, fichas, formularios, documentación", competitor: "A menudo varias herramientas", treatflowOk: true, competitorOk: false },
      { feature: "Comisión", treatflow: "Ninguna", competitor: "Los marketplaces cobran comisión", treatflowOk: true, competitorOk: false },
      { feature: "RGPD / alojamiento en la UE", treatflow: "Servidores en la UE", competitor: "Variable", treatflowOk: true, competitorOk: false },
      { feature: "Consentimientos", treatflow: "Digitales, en la ficha del cliente", competitor: "En papel o como complemento", treatflowOk: true, competitorOk: false },
      { feature: "Prueba", treatflow: "14 días, sin tarjeta", competitor: "Variable", treatflowOk: true, competitorOk: true },
    ],
    faqs: [
      {
        q: "¿Qué software necesita realmente un centro de estética?",
        a: "Una agenda sincronizada con las reservas online, una ficha de cliente, anamnesis y consentimiento, y una forma de documentar los tratamientos. Treatflow está construido en torno a ese conjunto.",
      },
      {
        q: "¿Cuál es el mejor software para centros de estética en Europa sin comisión por reserva?",
        a: "Treatflow es un software SaaS desarrollado en Austria, con alojamiento en la UE y sin comisión de marketplace. Planes desde 39 €/mes.",
      },
      {
        q: "¿Qué debo comparar al elegir un programa de gestión para mi centro?",
        a: "El modelo de cobro (cuota o comisión), de quién son los datos de los clientes, dónde se alojan y si el sistema incluye consentimientos y documentación de tratamientos. Comprueba siempre los precios y condiciones actuales directamente con cada proveedor.",
      },
    ],
    ctaTitle: "Compara Treatflow con las herramientas que ya usas",
    keywords: [
      "comparativa software peluquería y estética",
      "mejor software para centros de estética",
      "programa de gestión centro de estética",
      "software para salones de belleza comparativa",
      "software de gestión para centros de belleza",
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* Sobre nosotros / Contacto                                                  */
/* -------------------------------------------------------------------------- */

const about: LocaleSiteContent["about"] = {
  metaTitle: "Sobre Treatflow",
  metaDescription:
    "Treatflow es el software todo en uno para centros de estética. Desarrollado en Austria, conforme al RGPD y alojado en la UE.",
  eyebrow: "Sobre nosotros",
  title: "Software que devuelve tiempo a los centros de estética",
  subtitle:
    "Treatflow nació de una observación sencilla: los profesionales de la estética dedican demasiado tiempo a tareas administrativas en lugar de a sus clientes. Nos propusimos cambiarlo con una única app clara que reúne citas, clientes, formularios y documentación.",
  valuesTitle: "Lo que nos importa",
  values: [
    {
      title: "Hecho para centros",
      desc: "Desarrollamos Treatflow de la mano de profesionales de la estética: cada función resuelve un problema real del día a día.",
    },
    {
      title: "La privacidad, lo primero",
      desc: "Conforme al RGPD y alojado en servidores de la UE. Tus datos y los de tus clientes están protegidos.",
    },
    {
      title: "Soporte personal",
      desc: "Personas reales que conocen el sector de la belleza y te ayudan a empezar y a sacar el máximo partido a Treatflow.",
    },
    {
      title: "Made in Austria",
      desc: "Desarrollado y con soporte en Europa, para centros de toda Europa y más allá.",
    },
  ],
  ctaLabel: "Prueba gratis",
};

const contact: LocaleSiteContent["contact"] = {
  metaTitle: "Contacto con Treatflow",
  metaDescription:
    "Ponte en contacto con el equipo de Treatflow. Ayudamos a centros de estética y clínicas estéticas a digitalizar citas, formularios y documentación de tratamientos.",
  title: "Contacto",
  body: "Escríbenos a hello@treatflow.io o empieza tu prueba gratuita ahora mismo.",
  cta: "Prueba gratis",
};

/* -------------------------------------------------------------------------- */
/* Textos legales                                                             */
/* -------------------------------------------------------------------------- */

const privacy: LocaleSiteContent["privacy"] = {
  metaTitle: "Política de privacidad",
  metaDescription:
    "Política de privacidad de Treatflow: tratamiento de datos conforme al RGPD, alojamiento en la UE (Fráncfort), tus derechos y cómo gestionamos los datos de los centros y de los visitantes de la web.",
  title: "Política de privacidad",
  intro:
    "Treatflow es un software para centros de estética y clínicas estéticas. Tratamos los datos personales conforme al RGPD. La versión jurídicamente completa y vinculante es la declaración de privacidad en alemán disponible en /datenschutz. Esta página en español resume los puntos sobre los que más preguntan los centros y sus clientes.",
  sections: [
    {
      heading: "1. Responsable del tratamiento",
      html: `<p>Responsable del tratamiento de esta web y de la aplicación Treatflow:</p>
<p><strong>Treatflow</strong><br/>Olcay Elikci<br/>Bahnhofstrasse 17<br/>5500 Bischofshofen, Austria<br/>Email: <a href="mailto:hello@treatflow.io">hello@treatflow.io</a></p>`,
    },
    {
      heading: "2. Dónde se alojan los datos",
      html: `<p>Treatflow está alojado en servidores de la UE (Fráncfort). Las conexiones están cifradas con SSL. Hacemos copias de seguridad diarias. El alojamiento está diseñado para cumplir el RGPD. No vendemos datos de clientes y no somos un marketplace de reservas.</p>`,
    },
    {
      heading: "3. Datos que tratamos",
      html: `<p><strong>Visitantes de la web:</strong> dirección IP, hora de acceso, navegador y página de referencia, necesarios para ofrecer y proteger el sitio.</p>
<p><strong>Contacto y registro de la prueba:</strong> nombre, email y los datos del centro que nos facilites.</p>
<p><strong>Dentro de la aplicación (datos del centro):</strong> fichas de clientes, citas, formularios, firmas, notas de tratamiento, fotos y datos de facturación que guarda el centro. Normalmente, el centro es el responsable del tratamiento de los datos de sus clientes; Treatflow actúa como encargado del tratamiento en virtud de un contrato de encargo del tratamiento.</p>`,
    },
    {
      heading: "4. Finalidades y bases jurídicas",
      html: `<ul>
<li>Prestación de la web y del software (contrato / interés legítimo)</li>
<li>Cuenta, facturación y soporte (contrato)</li>
<li>Obligaciones legales (fiscales y contables)</li>
<li>Cookies opcionales de analítica y marketing, solo con tu consentimiento</li>
</ul>`,
    },
    {
      heading: "5. Tus derechos",
      html: `<p>Según la normativa aplicable, puedes solicitar el acceso, la rectificación, la supresión, la limitación del tratamiento y la portabilidad de tus datos, así como oponerte al tratamiento. Puedes presentar una reclamación ante una autoridad de control: en España, la Agencia Española de Protección de Datos (AEPD); en Austria, la Datenschutzbehörde. Escríbenos a hello@treatflow.io.</p>`,
    },
    {
      heading: "6. Integración con Google Calendar",
      html: `<p>Los centros pueden conectar opcionalmente su cuenta de Google en la app de Treatflow (app.treatflow.io) en <strong>Apps → Google Calendar</strong>. La conexión es voluntaria y solo se establece cuando un usuario concede activamente el acceso en la pantalla de consentimiento de Google.</p>
<p><strong>A qué datos accedemos y para qué:</strong></p>
<ul>
<li><strong>Perfil básico (openid, correo electrónico, perfil):</strong> para vincular la cuenta de Google con la cuenta de Treatflow y mostrar qué cuenta de Google está conectada.</li>
<li><strong>Lista de calendarios (calendar.readonly):</strong> para mostrar tus calendarios y que puedas elegir el que quieres sincronizar.</li>
<li><strong>Eventos del calendario (calendar.events):</strong> para crear, modificar y eliminar citas y bloqueos de tiempo de Treatflow como eventos en el calendario elegido, y para leer los eventos de ese calendario y mostrarlos en Treatflow como horas bloqueadas o citas (sincronización bidireccional).</li>
</ul>
<p><strong>Datos que almacenamos:</strong> tokens de acceso y de actualización (cifrados con AES), el ID y la dirección de correo de la cuenta de Google, el ID y el nombre del calendario elegido, los ID, horas y títulos de los eventos sincronizados y los registros de sincronización. Todos los datos se almacenan en nuestra base de datos en la UE (Supabase, Fráncfort).</p>
<p><strong>Uso y cesión:</strong> los datos de usuario de Google se utilizan exclusivamente para la sincronización del calendario dentro de Treatflow. No los cedemos a terceros, no los vendemos, no los usamos para publicidad ni para entrenar modelos de inteligencia artificial. Ninguna persona accede a estos datos salvo con tu consentimiento expreso (p. ej., en una consulta de soporte), cuando sea necesario por motivos de seguridad o para investigar abusos, o cuando lo exija la ley.</p>
<p><strong>Revocación del acceso y eliminación:</strong> puedes desconectar la cuenta en cualquier momento en Treatflow en Apps → Google Calendar con «Desconectar»; los tokens guardados se eliminan. También puedes revocar el acceso en <a href="https://myaccount.google.com/permissions">https://myaccount.google.com/permissions</a>.</p>
<p>El uso que Treatflow haga de la información recibida de las API de Google y su transferencia a cualquier otra aplicación se ajustarán a la <a href="https://developers.google.com/terms/api-services-user-data-policy">Política de Datos de Usuario de los Servicios de API de Google</a> (Google API Services User Data Policy), incluidos los requisitos de Uso Limitado (Limited Use). Texto original en inglés:</p>
<p lang="en"><em>Treatflow's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.</em></p>`,
    },
    {
      heading: "7. Versión completa en alemán",
      html: `<p>Encontrarás la información sobre cookies, encargados del tratamiento, plazos de conservación y el texto legal completo en la <a href="/datenschutz">política de privacidad en alemán</a>.</p>`,
    },
  ],
};

const terms: LocaleSiteContent["terms"] = {
  metaTitle: "Condiciones de uso",
  metaDescription:
    "Condiciones de Treatflow: SaaS para centros de estética, precios transparentes, 14 días de prueba, sin comisión por reserva. Se aplican las condiciones generales completas en alemán (AGB).",
  title: "Condiciones de uso",
  intro:
    "Treatflow es un producto SaaS de pago para la gestión de centros. Al crear una cuenta aceptas estas condiciones. El contrato vinculante son las condiciones generales en alemán (AGB) disponibles en /agb. Esta página en español explica los puntos comerciales para centros internacionales.",
  sections: [
    {
      heading: "1. El servicio",
      html: `<p>Treatflow ofrece software web para citas, reservas online, fichas de clientes, formularios, documentación de tratamientos y otras herramientas para centros. No es un marketplace y no cobra comisión por reserva.</p>`,
    },
    {
      heading: "2. Planes, prueba y cancelación",
      html: `<p>Los planes cuestan desde 39 €/mes (Basic) y desde 59 €/mes (Booking), IVA no incluido. La prueba de 14 días no requiere tarjeta de crédito. Los planes mensuales se pueden cancelar al final del periodo de facturación.</p>`,
    },
    {
      heading: "3. Responsabilidad del centro",
      html: `<p>Eres responsable de los datos que introduces, del uso correcto de los formularios y la documentación, y del cumplimiento de la normativa sanitaria, fiscal y del sector de la estética de tu país. Treatflow no sustituye el asesoramiento jurídico ni médico.</p>`,
    },
    {
      heading: "4. Disponibilidad y soporte",
      html: `<p>Trabajamos para ofrecer una alta disponibilidad y damos soporte por email (soporte prioritario en el plan Booking). Podemos actualizar el producto. Las actualizaciones de seguridad críticas pueden aplicarse sin previo aviso.</p>`,
    },
    {
      heading: "5. Condiciones vinculantes en alemán",
      html: `<p>Las condiciones contractuales completas son las <a href="/agb">AGB en alemán</a>. Preguntas: hello@treatflow.io.</p>`,
    },
  ],
};

export const general: Omit<LocaleSiteContent, "coreFeatures" | "extraFeatures" | "industries"> = {
  home,
  homeMeta: {
    title: "Software para centros de estética y clínicas",
    description:
      "Treatflow es el software todo en uno para centros de estética, salones de belleza y clínicas estéticas: reservas online sin comisión, fichas de clientes, formularios digitales, documentación de tratamientos y recordatorios. 14 días gratis.",
    keywords: [
      "software para centros de estética",
      "agenda online para centros de estética",
      "programa de gestión para salones de belleza",
      "software para clínicas estéticas",
      "reservas online sin comisión",
    ],
  },
  pricing,
  pricingKeywords,
  featuresMeta,
  featuresOverview,
  comparisons,
  about,
  contact,
  privacy,
  terms,
};
