import type { HomeContent } from "./types";

/**
 * Página de inicio en español. Mismas secciones que `en.ts`, sin funciones
 * exclusivas de DACH (TPV, tarjetas regalo, WhatsApp, Lexware, SumUp, NiSV).
 * Sin vídeo de producto: el vídeo existente está en alemán.
 */
export const homeEs: HomeContent = {
  meta: {
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

  schema: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Treatflow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      inLanguage: "es",
      description:
        "Treatflow es una plataforma de gestión todo en uno para centros de estética, clínicas estéticas y negocios de tratamientos. Reúne reservas online, fichas de clientes, formularios digitales de anamnesis y consentimiento, documentación de tratamientos, fotos de antes y después y seguimientos automáticos. Alojado en la UE.",
      url: "https://www.treatflow.io/es",
      author: { "@type": "Organization", name: "Treatflow", url: "https://www.treatflow.io" },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Fichas de clientes, formularios y documentación de tratamientos",
        },
        {
          "@type": "Offer",
          name: "Booking",
          price: "59",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Agenda, reservas online y recordatorios automáticos",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "19",
        reviewCount: "19",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Agenda de citas con reservas online",
        "Fichas de clientes digitales",
        "Formularios de anamnesis y consentimiento",
        "Documentación de tratamientos con fotos",
        "Dictado por voz para notas de tratamiento",
        "Recordatorios automáticos por email",
        "Flujos de clientes",
      ],
    },
  },

  hero: {
    badge: "Para centros de estética que quieren crecer",
    title: {
      before: "Adiós al caos de citas,",
      highlight: "al papeleo",
      connector: "y a",
      end: "las ausencias",
    },
    subtitle:
      "Citas, clientes, formularios y documentación de tratamientos en una sola app clara. Tu equipo se orienta desde el primer día.",
    primaryCta: "Prueba gratis 14 días",
    demoCta: "Reserva una demo",
    checks: ["Sin tarjeta de crédito", "Listo en 2 minutos", "Migración de datos gratuita"],
    rating: "4,6/5 en Google",
    tested: { before: "Ya lo han probado ", highlight: "más de 500 centros", after: "" },
    calendarLocale: "es-ES",
    newBookingLabel: "Nueva reserva",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Treatflow en portátil y tableta: agenda y fichas de clientes en un centro moderno",
    },
    liveDemo: { href: { page: "try-features" }, label: "Prueba las funciones en directo" },
  },

  socialProof: {
    rating: "4,6/5 en Google",
    allReviews: "Ver todas las reseñas",
    tested: { before: "Ya lo han probado ", highlight: "más de 500 centros", after: "" },
    reviews: [
      {
        text: "El soporte es excepcional: siempre amable, cercano y orientado a soluciones. ¡Totalmente recomendable!",
        name: "Velura Saarburg",
        studio: "Depilación láser",
      },
      {
        text: "Imbatible en precio y muy intuitivo. ¡Mi petición se implementó en un solo día!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Me cambié desde Phorest y la relación calidad-precio es excelente. Lo recomiendo con total tranquilidad.",
        name: "Sharon U.",
        studio: "Centro de estética",
      },
    ],
    note: "Reseñas de Google, traducidas del alemán.",
  },

  studioDay: {
    eyebrow: "Una cita, un sistema",
    title: "De la reserva al seguimiento. En una sola app.",
    subtitle: "Así transcurre una cita con Treatflow. No hay que introducir nada dos veces.",
    steps: [
      {
        time: "lun · 21:14",
        module: "Reservas online",
        title: "Lena reserva por la noche desde el sofá.",
        text: "Sin llamadas y sin comisión por reserva. La cita aparece al instante en la agenda.",
        meta: "Tratamiento facial · jue 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "mié · 10:45",
        module: "Recordatorio",
        title: "El recordatorio sale automáticamente.",
        text: "Un día antes, por email. Menos citas olvidadas, sin que nadie tenga que acordarse.",
        meta: "Entregado · confirmado",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "jue · 10:40",
        module: "Formularios",
        title: "Ficha de anamnesis en la tableta, firmada.",
        text: "El formulario se guarda directamente en la ficha de Lena. Nada de pasar papeles a limpio después.",
        meta: "Anamnesis · firmada digitalmente",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "jue · 11:40",
        module: "Documentación",
        title: "Tratamiento documentado, con fotos.",
        text: "Parámetros, productos y fotos de antes y después quedan en el historial de tratamientos.",
        meta: "3 fotos · parámetros guardados",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "vie · 09:00",
        module: "Seguimiento",
        title: "El seguimiento y la nueva cita funcionan solos.",
        text: "Un consejo de cuidados al día siguiente y un recordatorio para volver a reservar unas semanas después. Se configura una vez como flujo de clientes.",
        meta: "Flujo · siguiente paso en 4 semanas",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Menos caos. Más tiempo para tus clientes.",
    subtitle: "Todo lo que necesita tu centro, en una app que tu equipo entiende desde el primer momento.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Agenda de citas", desc: "Todas las citas en una vista diaria y semanal clara.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Reservas online", desc: "Tus clientes reservan solos, incluso fuera de tu horario.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Fichas de clientes", desc: "Historial, notas y fotos en un solo lugar y fáciles de encontrar.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Formularios", desc: "Anamnesis y consentimientos digitales, rellenados de antemano mediante un enlace.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "Documentación", desc: "Documenta cada tratamiento como es debido, con fotos y parámetros.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "treatflow-pay", fallback: "online-booking" }, icon: "wallet", label: "Treatflow Pay", desc: "Cobra un depósito o el importe completo online al reservar.", color: "bg-green-100 text-green-600", feature: "pay" },
      { href: { page: "messaging" }, icon: "bell", label: "Recordatorios", desc: "Los recordatorios automáticos por email reducen las ausencias.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Flujos de clientes", desc: "Automatiza el seguimiento y la reactivación en varios pasos.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "Prueba gratis 14 días",
    ctaNote: "Sin tarjeta de crédito. Cancela cuando quieras.",
  },

  pricing: {
    eyebrow: "Precios transparentes",
    titleBefore: "Precios sencillos –",
    titleHighlight: " sin costes ocultos",
    subtitle:
      "Treatflow cuesta desde 39 €/mes (Basic) o 59 €/mes (Booking). Pruébalo gratis durante 14 días, sin comisiones y sin riesgo.",
    monthly: "Mensual",
    yearly: "Anual",
    saveBadge: "Ahorra un 10 %",
    perMonth: "/mes",
    perYear: "/año",
    vatNote: "IVA no incluido",
    basic: {
      name: "Basic",
      monthlyPrice: "39 €",
      yearlyPrice: "421 €",
      yearlyHint: "35 €/mes • Ahorras 47 € al año",
      description: "Anamnesis digital, fichas de clientes y documentación de tratamientos, sin agenda de citas.",
      included: [
        "Fichas de clientes",
        "Formularios con firma digital",
        "Documentación de tratamientos y notas de voz",
        "Fotos de antes y después",
        "Notas y tareas del equipo",
        "Tienda y productos",
        "Informes",
        "Empleados y roles",
        "Soporte por email",
      ],
      excluded: [
        "Agenda de citas",
        "Reservas online",
        "Automatizaciones y lista de espera",
        "Soporte prioritario",
      ],
      cta: "Prueba gratis 14 días",
    },
    booking: {
      name: "Booking",
      popular: "Más elegido",
      monthlyPrice: "59 €",
      yearlyPrice: "637 €",
      yearlyHint: "53 €/mes • Ahorras 71 € al año",
      description: "Agenda de citas, reservas online y recordatorios automáticos para tu centro.",
      included: [
        "Todo lo del plan Basic",
        "Agenda con columnas por profesional y cabina",
        "Reservas online sin comisión",
        "Lista de espera",
        "Recordatorios por email",
        "Flujos de clientes",
        "Códigos de descuento",
        "Página de reservas multilingüe",
        "Integraciones (Google Calendar, Zapier, asistentes de IA)",
        "Soporte prioritario por email y chat",
      ],
      cta: "Prueba gratis 14 días",
    },
    trial: {
      title: "14 días gratis",
      text: "Sin tarjeta de crédito • Cancela cuando quieras • Migración de datos gratuita",
      points: ["Sin costes de alta", "Cancelación mensual", "Conforme al RGPD"],
    },
  },

  faq: {
    badge: "FAQ",
    titleBefore: "¿Todavía tienes preguntas?",
    titleHighlight: " ¡Tenemos las respuestas!",
    subtitle: "Aquí encontrarás respuestas a las preguntas más frecuentes sobre Treatflow.",
    items: [
      {
        question: "¿Qué es Treatflow?",
        answer:
          "Treatflow es una app todo en uno para el día a día del centro: citas, fichas de clientes, formularios digitales y documentación de tratamientos están conectados en un solo sistema, sin comisión por reserva. Desarrollado en Austria, con los datos en servidores de la UE.",
      },
      {
        question: "¿Para quién es Treatflow?",
        answer: [
          "Para centros que realizan tratamientos: desde estética y medicina estética hasta láser, uñas, pestañas, micropigmentación, masajes y spa. Descubre más sobre nuestro ",
          { text: "software para clínicas estéticas", href: { page: "aesthetic-clinic-software" } },
          " y las ",
          { text: "fichas de clientes", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "¿Cuánto tiempo puedo probar Treatflow gratis?",
        answer:
          "Puedes probar Treatflow totalmente gratis durante 14 días. Sin tarjeta de crédito y sin costes ocultos. Al terminar la prueba, tú decides si quieres continuar.",
      },
      {
        question: "¿Qué diferencia hay entre Basic y Booking?",
        answer: [
          "Basic (39 €/mes) incluye ",
          { text: "gestión de clientes", href: { page: "client-records" } },
          " ilimitada, el marketplace de formularios, el generador de formularios con IA y la tienda. Booking (59 €/mes) añade la ",
          { text: "agenda de citas", href: { page: "appointment-calendar" } },
          " profesional con tu propio enlace de reservas y ",
          { text: "recordatorios de citas", href: { page: "messaging" } },
          " automáticos.",
        ],
      },
      {
        question: "¿Treatflow cumple el RGPD?",
        answer: [
          "Sí. Treatflow cumple plenamente el RGPD. Todos los datos se cifran y se almacenan de forma segura en servidores de la UE en Fráncfort (Alemania). Esto incluye también las ",
          { text: "fichas de anamnesis digitales", href: { page: "forms" } },
          " y la ",
          { text: "documentación de tratamientos", href: { page: "treatment-documentation" } },
          ".",
        ],
      },
      {
        question: "¿Puedo importar mis datos de clientes actuales?",
        answer: [
          "Sí, te ayudamos con la migración de forma gratuita. Nuestro equipo de soporte te ayuda a pasar tus datos de clientes de forma segura a tus ",
          { text: "fichas de clientes digitales", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "¿Funciona Treatflow en el móvil?",
        answer:
          "Sí. Treatflow funciona en todos los dispositivos: ordenador, tableta y smartphone. Puedes acceder a los datos de tus clientes y citas estés donde estés.",
      },
      {
        question: "¿Qué pasa con mis datos si cancelo?",
        answer:
          "Tus datos siempre son tuyos. Si cancelas, puedes exportarlos todos. Solo los eliminamos por completo después de un periodo de transición.",
      },
      {
        question: "¿Necesito conocimientos técnicos para usar Treatflow?",
        answer:
          "No. Treatflow es muy fácil de usar. No hay que instalar nada: inicia sesión en tu navegador y empieza. Si tienes dudas, nuestro equipo de soporte te ayuda encantado.",
      },
      {
        question: "¿Cómo funciona el marketplace de formularios?",
        answer: [
          "En el marketplace encontrarás ",
          { text: "formularios", href: { page: "forms" } },
          " profesionales para todos los tratamientos de estética. Úsalos tal cual, adáptalos con el generador de IA o personalízalos en el editor de arrastrar y soltar. Las fichas de anamnesis digitales están listas para usar desde el primer momento.",
        ],
      },
      {
        question: "¿Puedo gestionar un número ilimitado de clientes?",
        answer:
          "Sí. Puedes gestionar tantos clientes como quieras. El sistema crece con tu centro, y la función de importación facilita traer tus datos de clientes actuales.",
      },
    ],
    contactTitle: "¿Tienes otras preguntas?",
    contactText:
      "Nuestro equipo de soporte te ayuda encantado. Escríbenos un email o reserva directamente una llamada de asesoramiento.",
    demoCta: "Reserva una llamada de asesoramiento",
  },

  cta: {
    ariaLabel: "Llamada a la acción",
    title: "¿Lista para gestionar tu centro con más claridad?",
    subtitle: "Empieza hoy y descubre lo fácil que puede ser organizar tu centro.",
    checks: [
      "14 días gratis",
      "Sin tarjeta de crédito",
      "Listo en 2 minutos",
      "Soporte y ayuda personal",
    ],
    primaryCta: "Empieza tu prueba gratuita",
    demoCta: "Reserva una demo",
    note: "Cancela cuando quieras. Conforme al RGPD. Con soporte y ayuda personal.",
  },

  seo: {
    ariaLabel: "Más información",
    intro: [
      "Treatflow es el ",
      { text: "software para centros de estética", href: { page: "beauty-salon-software" } },
      " con agenda de citas, reservas online, fichas de clientes digitales, formularios y documentación de tratamientos: sin comisiones, conforme al RGPD y hecho en Austria.",
    ],
    links: [
      { href: { page: "client-records" }, label: "Software de fichas de clientes" },
      { href: { page: "online-booking" }, label: "Reserva de citas online" },
      { href: { page: "treatment-documentation" }, label: "Documentación de tratamientos" },
      { href: { page: "forms" }, label: "Fichas de anamnesis digitales" },
      { href: { page: "messaging" }, label: "Recordatorios de citas" },
      { href: { page: "software-comparison" }, label: "Comparativa de software" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
      { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
    ],
  },
};
