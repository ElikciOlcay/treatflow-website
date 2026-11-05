import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarEs: AppointmentCalendarContent = {
  meta: {
    title: "Agenda de citas para centros de estética: equipo y cabinas",
    description:
      "Agenda de citas online para centros de estética y clínicas estéticas: columnas por profesional y cabina, reservas online, citas que se mueven arrastrando y recordatorios automáticos por email. Sin comisiones y 14 días gratis.",
    keywords: [
      "agenda de citas centro de estética",
      "agenda online salón de belleza",
      "programa de citas para centro de estética",
      "software de citas para spa",
      "planificación de cabinas y personal",
      "agenda para clínica estética",
      "gestión de citas centro de estética",
    ],
  },
  dates: { modified: "2026-10-28", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Agenda de citas para centros de estética: equipo y cabinas",
      description:
        "Agenda de citas para centros de estética con vista diaria para el equipo y las cabinas, arrastrar y soltar, reservas online y recordatorios automáticos.",
    },
    software: {
      name: "Agenda de citas de Treatflow para centros de estética",
      description:
        "Agenda de citas para centros de estética con columnas para el equipo y las cabinas, arrastrar y soltar, reservas online y recordatorios automáticos.",
      featureList: [
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
    title: { before: "La agenda de tu centro, con tu equipo y tus ", highlight: "cabinas" },
    description:
      "Equipo, cabinas y citas de tu centro de estética en una sola vista, con reservas online incluidas. Mueve citas arrastrándolas y olvídate de las reservas duplicadas.",
    chips: ["Arrastrar y soltar", "Equipo y cabinas", "Menos plantones"],
    secondaryCta: { label: "Reservas online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "¿Cuál es la mejor forma de organizar las citas en un centro de estética?",
        answer:
          "Treatflow reúne citas, equipo y cabinas en una sola agenda. La vista diaria muestra a cada profesional o cabina en su propia columna: ves los huecos libres, evitas reservas duplicadas y reorganizas los cambios en un momento. Además, las reservas online y los recordatorios automáticos reducen las llamadas y los plantones.",
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
    title: "Software de citas para todo tu centro",
    description: "Citas, equipo y cabinas de un vistazo: sabes al momento quién está libre y cuándo.",
    items: [
      {
        icon: "users",
        title: "Equipo, cabinas y servicios",
        text: "Da de alta a tu equipo, tus cabinas y tus servicios. La agenda muestra una columna para cada profesional o cabina.",
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
      { title: "Configura equipo, servicios y cabinas", text: "Da de alta a tu equipo, tus tratamientos y tus cabinas con sus horarios. La agenda muestra una columna para cada uno." },
      { title: "Añade citas", text: "Apunta tú las citas o activa las reservas online: lo que reservan tus clientes entra solo en la agenda." },
      { title: "Los recordatorios salen solos", text: "Tus clientes reciben la confirmación de la reserva y un recordatorio por email, sin que tengas que enviar nada a mano." },
    ],
  },
  cards: {
    title: "Qué incluye",
    description: "Todo para organizar las citas de tu centro: equipo, cabinas y recordatorios en una sola agenda.",
    items: [
      { icon: "users", title: "Equipo y cabinas", text: "Una columna por profesional o cabina. Ocupación y huecos libres de un vistazo.", points: ["Vista por columnas", "Huecos libres a la vista", "Sin reservas duplicadas"] },
      { icon: "move", title: "Arrastrar y soltar", text: "Mueve, alarga o intercambia citas sin rellenar formularios y sin líos.", points: ["Cambios en segundos", "Al instante en la agenda", "Para todo el equipo"] },
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
    description: "Pruébalo gratis 14 días, sin tarjeta de crédito: agenda, planificación del equipo y reservas online en una sola app.",
    secondary: { label: "Reservas online", href: { page: "online-booking" } },
  },
};
