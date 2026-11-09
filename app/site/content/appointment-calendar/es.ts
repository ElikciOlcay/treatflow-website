import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarEs: AppointmentCalendarContent = {
  meta: {
    title: "Agenda de citas para centros de estética: en solitario o en equipo",
    description:
      "Agenda de citas para centros de estética, en solitario o en equipo: reservas online, arrastrar y soltar, recordatorios y columnas por cabina. Sin comisión.",
    keywords: [
      "agenda de citas centro de estética",
      "agenda online salón de belleza",
      "programa de citas para centro de estética",
      "agenda de citas esteticista",
      "agenda de citas para autónomos de estética",
      "software de citas para spa",
      "planificación de cabinas y personal",
      "agenda para clínica estética",
      "gestión de citas centro de estética",
    ],
  },
  dates: { modified: "2026-11-09", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Agenda de citas para centros de estética: en solitario o en equipo",
      description:
        "Agenda de citas para centros de estética – para quien trabaja en solitario y para equipos – con arrastrar y soltar, reservas online, recordatorios automáticos y columnas para el equipo y las cabinas.",
    },
    software: {
      name: "Agenda de citas de Treatflow para centros de estética",
      description:
        "Agenda de citas para centros de estética – en solitario o en equipo – con arrastrar y soltar, reservas online, recordatorios automáticos y columnas para el equipo y las cabinas.",
      featureList: [
        "Agenda de citas para quien trabaja en solitario y para equipos",
        "Vista diaria con una columna por profesional o cabina",
        "Ocupación y huecos libres de un vistazo",
        "Sin reservas duplicadas de personal ni de cabinas",
        "Mover citas arrastrando y soltando",
        "Vistas de día, semana y mes",
        "Reservas online y recordatorios automáticos",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Agenda de citas",
  hero: {
    eyebrow: "Planificación y agenda de citas",
    eyebrowIcon: "calendar",
    title: { before: "La agenda de citas de tu centro – ", highlight: "en solitario o en equipo" },
    description:
      "Tu agenda de citas con reservas online, recordatorios y arrastrar y soltar: ideal si trabajas en solitario. Cuando tu centro crece, cada profesional y cada cabina tiene su propia columna.",
    chips: ["En solitario o en equipo", "Arrastrar y soltar", "Menos plantones"],
    secondaryCta: { label: "Reservas online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "¿Cuál es la mejor forma de organizar las citas en un centro de estética?",
        answer:
          "Treatflow reúne citas, reservas online y recordatorios en una sola agenda, tanto si trabajas en solitario como en equipo. Si trabajas en solitario, ves todo tu día con todas las citas de un vistazo. Con equipo, la vista diaria muestra a cada profesional o cabina en su propia columna: ves los huecos libres y evitas reservas duplicadas. Además, las reservas online y los recordatorios automáticos reducen las llamadas y los plantones.",
      },
      {
        question: "¿Qué software de citas sirve para clínicas estéticas?",
        answer:
          "Treatflow combina una agenda con columnas por profesional y cabina, reservas online para consultas y tratamientos y recordatorios por email. Las reservas entran en la agenda sin comisiones.",
      },
    ],
    image: {
      src: "/images/mockups/es/kalender-overview.png",
      alt: "Agenda de citas de Treatflow: vista diaria con equipo y cabinas",
    },
  },
  understand: {
    title: "Una agenda que crece con tu centro",
    description: "Tanto si trabajas en solitario como en equipo: todas las citas de un vistazo y sabes al momento cuándo queda un hueco libre.",
    items: [
      {
        icon: "calendar-days",
        title: "En solitario o en equipo",
        text: "Si trabajas en solitario, tienes tu día con todas las citas a la vista. Cuando se suman profesionales o cabinas, cada persona y cada cabina tiene su propia columna.",
      },
      {
        icon: "move",
        title: "Mueve citas arrastrándolas",
        text: "¿Cambio de planes? Arrastra la cita a otro hueco, sin borrarla ni crearla de nuevo.",
      },
      {
        icon: "bell",
        title: "Recordatorios automáticos",
        text: "Tus clientes reciben un recordatorio por email antes de su cita, así se olvidan muchas menos.",
      },
    ],
  },
  howItWorks: {
    description: "La agenda de tu centro, en marcha en tres pasos.",
    steps: [
      { title: "Configura servicios y horarios", text: "Da de alta tus tratamientos y tus horarios de trabajo. Si tienes equipo o varias cabinas, añádelos también: cada profesional y cada cabina tendrá su propia columna." },
      { title: "Añade citas", text: "Apunta tú las citas o activa las reservas online: lo que reservan tus clientes entra solo en la agenda." },
      { title: "Los recordatorios salen solos", text: "Tus clientes reciben la confirmación de la reserva y un recordatorio por email, sin que tengas que enviar nada a mano." },
    ],
  },
  cards: {
    title: "Qué incluye",
    description: "Todo para organizar tus citas, en solitario o en equipo, con reservas online y recordatorios en una sola agenda.",
    items: [
      { icon: "users", title: "En solitario o en equipo", text: "En solitario ves tu día de un vistazo. Con equipo, cada profesional y cada cabina tiene su propia columna.", points: ["Para trabajar en solitario", "Columnas para equipo y cabinas", "Sin reservas duplicadas"] },
      { icon: "move", title: "Arrastrar y soltar", text: "Mueve, alarga o intercambia citas sin rellenar formularios y sin líos.", points: ["Cambios en segundos", "Al instante en la agenda", "Sin crearlas de nuevo"] },
      { icon: "layout-grid", title: "De la vista diaria a la mensual", text: "Pasa de la vista diaria a la semanal o la mensual según lo que necesites.", points: ["Vista diaria", "Semana", "Mes"] },
      { icon: "bell", title: "Recordatorios automáticos", text: "Recordatorios por email antes de cada cita. Menos plantones y menos llamadas para confirmar.", points: ["Recordatorios por email", "Momento de envío flexible", "Enlace de cancelación"] },
      { icon: "calendar", title: "Reservas online", text: "Las reservas entran directamente en la agenda, sin duplicados y con confirmación automática.", points: ["Tu propio enlace de reservas", "Al instante en la agenda", "Sin comisiones"] },
      { icon: "clock", title: "Menos tiempo administrativo", text: "Menos llamadas y procesos más claros: más tiempo para tratar y menos para cuadrar la agenda.", points: ["Menos llamadas", "Franjas horarias claras", "Visión rápida"] },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre la agenda de citas para centros de estética",
    items: [
      {
        question: "¿La agenda de citas también sirve si trabajo en solitario?",
        answer:
          "Sí. Muchos centros usan Treatflow sin equipo. Ves tu día con todas las citas, tus clientes reservan online directamente en tus huecos libres y reciben automáticamente la confirmación y el recordatorio. Las columnas para el equipo y las cabinas solo te harán falta cuando tu centro crezca.",
      },
      {
        question: "¿Cuál es la mejor forma de organizar las citas en un centro de estética?",
        answer:
          "Lo más eficaz es un programa de citas especializado como Treatflow. Con las reservas online tus clientes reservan 24/7, los recordatorios automáticos por email reducen mucho los plantones y la agenda te da una visión completa en todo momento.",
      },
      {
        question: "¿Cuánto cuesta un software de citas para centros de estética?",
        answer:
          "Con Treatflow, la agenda con reservas online está incluida en el plan Booking desde 59 € al mes (53 € al mes con pago anual, IVA no incluido). Pruébalo gratis 14 días, sin tarjeta de crédito, sin costes ocultos y sin comisión por reserva.",
      },
      {
        question: "¿Existe una agenda de citas gratuita para centros de estética?",
        answer:
          "Hay agendas gratuitas, pero suelen tener limitaciones, publicidad o cobrar una comisión por reserva a través de un marketplace. Una agenda de papel o un Excel no cuestan nada, pero no admiten reservas online, no envían recordatorios y no se conectan con las fichas de cliente. Puedes probar Treatflow gratis 14 días sin tarjeta de crédito; después, la agenda con reservas online cuesta 59 € al mes, sin comisión por cita.",
      },
      {
        question: "Agenda, calendario o sistema de reservas: ¿en qué se diferencian?",
        answer:
          "En el día a día de un centro, los tres términos se usan casi como sinónimos: la agenda o el calendario es donde tú y tu equipo gestionáis las citas, y el sistema de reservas es la parte que usan tus clientes para reservar online por su cuenta. En Treatflow son lo mismo: las reservas online llegan directamente a la agenda, con recordatorios y fichas de cliente incluidos.",
      },
      {
        question: "¿Pueden mis clientes reservar citas online?",
        answer:
          "Sí. Tienes tu propio enlace de reservas para compartir en tu web, en Instagram o por mensaje. Tus clientes eligen tratamiento y hora cuando quieran. Las nuevas reservas aparecen al instante en la agenda y las confirmaciones se envían solas por email.",
      },
      {
        question: "¿Cómo reduzco los plantones en mi centro de estética?",
        answer:
          "Los recordatorios automáticos por email son la forma más eficaz de reducir los plantones. Treatflow los envía con la antelación que tú elijas, así muchos menos clientes se olvidan de su cita.",
      },
      {
        question: "¿Qué funciones debe tener una agenda de citas para centros de estética?",
        answer:
          "Una buena agenda para centros de estética debe ofrecer reservas online, vistas por día, semana y mes, planificación de personal y cabinas, recordatorios automáticos por email, arrastrar y soltar y conexión con las fichas de cliente y la documentación de tratamientos.",
      },
      {
        question: "¿Cómo planifico a varias personas del equipo y varias cabinas?",
        answer:
          "La vista diaria de Treatflow muestra a cada profesional o cabina en su propia columna. Ves los huecos libres, evitas reservas duplicadas y reorganizas con facilidad los cambios de última hora.",
      },
      {
        question: "¿Cómo evito reservas duplicadas de personal y cabinas?",
        answer:
          "Treatflow muestra la ocupación del personal y de las cabinas una junto a otra. Ves al momento qué horas están libres y cuáles ocupadas, así detectas a tiempo los cuellos de botella y evitas las reservas duplicadas.",
      },
      {
        question: "¿Qué software de citas sirve para clínicas estéticas?",
        answer:
          "Treatflow combina una agenda con columnas por profesional y cabina, reservas online para consultas y tratamientos y recordatorios por email. Las nuevas reservas entran directamente en la agenda, sin comisión por cita.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Reservas online", description: "24/7 con tu enlace de reservas" },
      { href: { page: "messaging" }, title: "Recordatorios", description: "Recordatorios automáticos por email" },
      { href: { page: "client-records" }, title: "Fichas de cliente", description: "Abre la ficha del cliente desde la cita" },
    ],
  },
  cta: {
    title: "Organiza tus citas sin estrés",
    description: "Pruébalo gratis 14 días, sin tarjeta de crédito: agenda, reservas online y recordatorios en una sola app, en solitario o en equipo.",
    secondary: { label: "Reservas online", href: { page: "online-booking" } },
  },
};
