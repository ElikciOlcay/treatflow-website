import type { HomeContent } from "./types";

/**
 * Página de inicio en español. Mismas secciones que `en.ts`, sin funciones
 * exclusivas de DACH (TPV, tarjetas regalo, WhatsApp, Lexware, SumUp, NiSV).
 * Sin vídeo de producto: el vídeo existente está en alemán.
 */
export const homeEs: HomeContent = {
  meta: {
    title: "Software de gestión para centros de estética y clínicas",
    description:
      "Treatflow es el software de gestión todo en uno para centros de estética, salones de belleza y clínicas estéticas: agenda de citas, reservas online sin comisiones, fichas de cliente, consentimientos digitales, documentación de tratamientos y recordatorios. Pruébalo 14 días gratis.",
    keywords: [
      "software de gestión para centros de estética",
      "programa para centro de estética",
      "agenda de citas online",
      "programa de gestión para salones de belleza",
      "software para clínicas estéticas",
      "reservas online sin comisiones",
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
        "Treatflow es un software de gestión todo en uno para centros de estética, clínicas estéticas y negocios de tratamientos. Reúne reservas online, fichas de cliente, formularios digitales de anamnesis y consentimiento informado, documentación de tratamientos, fotos de antes y después y seguimientos automáticos. Datos alojados en la UE.",
      url: "https://www.treatflow.io/es",
      author: { "@type": "Organization", name: "Treatflow", url: "https://www.treatflow.io" },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Fichas de cliente, formularios y documentación de tratamientos",
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
        "Fichas de cliente digitales",
        "Formularios de anamnesis y consentimiento informado",
        "Documentación de tratamientos con fotos",
        "Dictado por voz para notas de tratamiento",
        "Recordatorios automáticos por email",
        "Flujos de clientes",
      ],
    },
  },

  hero: {
    badge: "Para centros de estética con ganas de crecer",
    title: {
      before: "Adiós al caos en la agenda,",
      highlight: "al papeleo",
      connector: "y a",
      end: "los plantones",
    },
    subtitle:
      "Citas, clientes, formularios y documentación de tratamientos en una sola app, clara y sencilla. Tu equipo se maneja con ella desde el primer día.",
    primaryCta: "Prueba gratis 14 días",
    demoCta: "Reserva una demo",
    checks: ["Sin tarjeta de crédito", "En marcha en 2 minutos", "Sin permanencia"],
    rating: "4,6/5 en Google",
    tested: { before: "Ya lo han probado ", highlight: "más de 500 centros", after: "" },
    calendarLocale: "es-ES",
    newBookingLabel: "Nueva reserva",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Treatflow en portátil y tablet: agenda y fichas de cliente en un centro de estética moderno",
    },
    liveDemo: { href: { page: "try-features" }, label: "Prueba las funciones en directo" },
  },

  socialProof: {
    rating: "4,6/5 en Google",
    allReviews: "Ver todas las reseñas",
    tested: { before: "Ya lo han probado ", highlight: "más de 500 centros", after: "" },
    reviews: [
      {
        text: "El soporte es excepcional: siempre amable, cercano y resolutivo. ¡Muy recomendable!",
        name: "Velura Saarburg",
        studio: "Depilación láser",
      },
      {
        text: "Precio imbatible y muy intuitivo. ¡Implementaron lo que les pedí en un solo día!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Me pasé de Phorest a Treatflow y la relación calidad-precio es excelente. Lo recomiendo sin dudarlo.",
        name: "Sharon U.",
        studio: "Centro de estética",
      },
    ],
    note: "Reseñas de Google, traducidas del alemán.",
  },

  studioDay: {
    eyebrow: "Una cita, un solo sistema",
    title: "De la reserva al seguimiento. En una sola app.",
    subtitle: "Así es una cita con Treatflow, sin introducir nada dos veces.",
    steps: [
      {
        time: "lun · 21:14",
        module: "Reservas online",
        title: "Lena reserva por la noche desde el sofá.",
        text: "Sin llamadas y sin comisión por reserva. La cita entra al momento en la agenda.",
        meta: "Tratamiento facial · jue 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "mié · 10:45",
        module: "Recordatorio",
        title: "El recordatorio sale solo.",
        text: "Un día antes, por email. Menos citas olvidadas, sin que nadie tenga que estar pendiente.",
        meta: "Entregado · confirmado",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "jue · 10:40",
        module: "Formularios",
        title: "Anamnesis en la tablet, ya firmada.",
        text: "El formulario se guarda directamente en la ficha de Lena. Se acabó pasar papeles a limpio.",
        meta: "Anamnesis · firmada digitalmente",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "jue · 11:40",
        module: "Documentación",
        title: "Tratamiento documentado, con fotos.",
        text: "Parámetros, productos y fotos de antes y después quedan guardados en el historial de tratamientos.",
        meta: "3 fotos · parámetros guardados",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "vie · 09:00",
        module: "Seguimiento",
        title: "Seguimiento y próxima cita, en piloto automático.",
        text: "Un consejo de cuidados al día siguiente y un recordatorio para volver a reservar unas semanas después. Lo configuras una sola vez como flujo de clientes.",
        meta: "Flujo · siguiente paso en 4 semanas",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Menos caos. Más tiempo para tus clientes.",
    subtitle: "Todo lo que necesita tu centro, en una app que tu equipo entiende a la primera.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Agenda de citas", desc: "Todas las citas de un vistazo, por día o por semana.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Reservas online", desc: "Tus clientes reservan solos, también fuera de tu horario.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Fichas de cliente", desc: "Historial, notas y fotos en un mismo sitio y siempre a mano.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Formularios", desc: "Anamnesis y consentimientos digitales que tus clientes rellenan antes de venir, desde un enlace.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "Documentación", desc: "Documenta cada tratamiento con rigor, con fotos y parámetros.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "treatflow-pay", fallback: "online-booking" }, icon: "wallet", label: "Treatflow Pay", desc: "Cobra una señal o el importe completo al reservar online.", color: "bg-green-100 text-green-600", feature: "pay" },
      { href: { page: "messaging" }, icon: "bell", label: "Recordatorios", desc: "Los recordatorios automáticos por email reducen los plantones.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Flujos de clientes", desc: "Automatiza seguimientos y recupera clientes inactivos, paso a paso.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "Prueba gratis 14 días",
    ctaNote: "Sin tarjeta de crédito. Cancela cuando quieras.",
  },

  support: {
    ariaLabel: "Atención personal desde el primer día",
    badge: "Atención personal",
    title: "Te acompañamos desde el primer día",
    text: "Desde la configuración hasta tus primeras dudas: nuestro equipo te acompaña personalmente en tus primeros pasos con Treatflow, para que trabajes con seguridad desde el primer día.",
    trialCta: "Prueba gratis 14 días",
    demoCta: "Reserva una demo gratuita",
    imageAlt: "Atención personal del equipo de Treatflow",
    chip: "Atención personal. Incluida.",
  },

  pricing: {
    eyebrow: "Precios transparentes",
    titleBefore: "Precios claros,",
    titleHighlight: " sin costes ocultos",
    subtitle:
      "Treatflow cuesta desde 39 €/mes (Basic) o 59 €/mes (Booking). Pruébalo gratis 14 días, sin comisiones y sin compromiso.",
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
      yearlyHint: "35 €/mes · Ahorras 47 € al año",
      description: "Anamnesis digital, fichas de cliente y documentación de tratamientos, sin agenda de citas.",
      included: [
        "Fichas de cliente",
        "Formularios con firma digital",
        "Documentación de tratamientos y notas de voz",
        "Fotos de antes y después",
        "Notas y tareas para el equipo",
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
      popular: "El más elegido",
      monthlyPrice: "59 €",
      yearlyPrice: "637 €",
      yearlyHint: "53 €/mes · Ahorras 71 € al año",
      description: "Agenda de citas, reservas online y recordatorios automáticos para tu centro.",
      included: [
        "Todo lo del plan Basic",
        "Agenda con columnas por profesional y cabina",
        "Reservas online sin comisiones",
        "Lista de espera",
        "Recordatorios por email",
        "Flujos de clientes",
        "Códigos de descuento",
        "Página de reservas en varios idiomas",
        "Integraciones (Google Calendar, Zapier, asistentes de IA)",
        "Soporte prioritario por email y chat",
      ],
      cta: "Prueba gratis 14 días",
    },
    trial: {
      title: "14 días gratis",
      text: "Sin tarjeta de crédito · Cancela cuando quieras",
      points: ["Sin cuota de alta", "Sin permanencia", "Cumple el RGPD"],
    },
  },

  faq: {
    badge: "FAQ",
    titleBefore: "¿Tienes dudas?",
    titleHighlight: " Te las resolvemos.",
    subtitle: "Aquí tienes las respuestas a las preguntas más frecuentes sobre Treatflow.",
    items: [
      {
        question: "¿Qué es Treatflow?",
        answer:
          "Treatflow es una app todo en uno para el día a día de tu centro: citas, fichas de cliente, formularios digitales y documentación de tratamientos, conectados en un solo sistema y sin comisión por reserva. Desarrollado en Austria, con los datos en servidores de la UE.",
      },
      {
        question: "¿Para quién es Treatflow?",
        answer: [
          "Para cualquier centro que realice tratamientos: estética y medicina estética, láser, uñas, pestañas, micropigmentación, masajes y spa. Descubre más sobre nuestro ",
          { text: "software para clínicas estéticas", href: { page: "aesthetic-clinic-software" } },
          " y las ",
          { text: "fichas de cliente", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "¿Cuánto tiempo puedo probar Treatflow gratis?",
        answer:
          "Puedes probar Treatflow gratis durante 14 días, sin tarjeta de crédito y sin costes ocultos. Cuando termine la prueba, tú decides si sigues.",
      },
      {
        question: "¿Qué diferencia hay entre Basic y Booking?",
        answer: [
          "Basic (39 €/mes) incluye ",
          { text: "gestión de clientes", href: { page: "client-records" } },
          " ilimitada, el marketplace de formularios con editor de arrastrar y soltar y la tienda. Booking (59 €/mes) añade la ",
          { text: "agenda de citas", href: { page: "appointment-calendar" } },
          " profesional con tu propio enlace de reservas y ",
          { text: "recordatorios de citas", href: { page: "messaging" } },
          " automáticos.",
        ],
      },
      {
        question: "¿Treatflow cumple el RGPD?",
        answer: [
          "Sí. Treatflow cumple plenamente el RGPD. Todos los datos se cifran y se alojan de forma segura en servidores de la UE, en Fráncfort (Alemania). Esto incluye también las ",
          { text: "fichas de anamnesis digitales", href: { page: "forms" } },
          " y la ",
          { text: "documentación de tratamientos", href: { page: "treatment-documentation" } },
          ".",
        ],
      },
      {
        question: "¿Puedo importar mis datos de clientes actuales?",
        answer: [
          "Sí. Importas tus listas de clientes como archivo CSV, con asignación de campos y detección de duplicados, directamente a tus ",
          { text: "fichas de cliente digitales", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "¿Funciona Treatflow en el móvil?",
        answer:
          "Sí. Treatflow funciona en cualquier dispositivo: ordenador, tablet y móvil. Tienes tus citas y los datos de tus clientes a mano, estés donde estés.",
      },
      {
        question: "¿Qué pasa con mis datos si cancelo?",
        answer:
          "Tus datos son siempre tuyos. Si cancelas, puedes exportarlos todos. Solo los borramos definitivamente tras un periodo de transición.",
      },
      {
        question: "¿Necesito conocimientos técnicos para usar Treatflow?",
        answer:
          "No. Treatflow es muy fácil de usar. No tienes que instalar nada: inicias sesión en el navegador y listo. Y si te surge alguna duda, nuestro equipo de soporte te echa una mano.",
      },
      {
        question: "¿Cómo funciona el marketplace de formularios?",
        answer: [
          "En el marketplace encontrarás ",
          { text: "formularios", href: { page: "forms" } },
          " profesionales para todo tipo de tratamientos estéticos. Úsalos tal cual o personalízalos con el editor de arrastrar y soltar. Las fichas de anamnesis digitales están listas para usar desde el primer día.",
        ],
      },
      {
        question: "¿Puedo gestionar un número ilimitado de clientes?",
        answer:
          "Sí. Puedes gestionar todos los clientes que quieras. El sistema crece con tu centro y, con la función de importación, traer tus datos actuales es muy fácil.",
      },
    ],
    contactTitle: "¿Te queda alguna duda?",
    contactText:
      "Nuestro equipo de soporte estará encantado de ayudarte. Escríbenos un email.",
    demoCta: "Reserva una llamada de asesoramiento",
  },

  cta: {
    ariaLabel: "Llamada a la acción",
    title: "¿Te animas a llevar tu centro con más orden?",
    subtitle: "Empieza hoy y descubre lo fácil que puede ser organizar tu centro.",
    checks: [
      "14 días gratis",
      "Sin tarjeta de crédito",
      "En marcha en 2 minutos",
      "Soporte personal y cercano",
    ],
    primaryCta: "Empieza tu prueba gratuita",
    demoCta: "Reserva una demo",
    note: "Cancela cuando quieras. Cumple el RGPD. Con soporte personal y cercano.",
  },

  seo: {
    ariaLabel: "Más información",
    intro: [
      "Treatflow es el ",
      { text: "software para centros de estética", href: { page: "beauty-salon-software" } },
      " con agenda de citas, reservas online, fichas de cliente digitales, formularios y documentación de tratamientos: sin comisiones, conforme al RGPD y desarrollado en Austria.",
    ],
    links: [
      { href: { page: "client-records" }, label: "Software de fichas de cliente" },
      { href: { page: "online-booking" }, label: "Reservas online" },
      { href: { page: "treatment-documentation" }, label: "Documentación de tratamientos" },
      { href: { page: "forms" }, label: "Fichas de anamnesis digitales" },
      { href: { page: "messaging" }, label: "Recordatorios de citas" },
      { href: { page: "software-comparison" }, label: "Comparativa de software" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
      { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
    ],
  },
};
