import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarEs: AppointmentCalendarContent = {
  meta: {
    title: "Agenda de citas para centros de estética: equipo y cabinas",
    description:
      "Software de citas para centros de estética y clínicas estéticas: agenda con columnas para el equipo y las cabinas, reservas online, arrastrar y soltar y recordatorios automáticos por email. Sin comisión, 14 días gratis.",
    keywords: [
      "agenda de citas centro de estética",
      "software de citas para salones de belleza",
      "programa de citas para spa",
      "agenda de reservas salón de belleza",
      "planificación de personal y cabinas",
      "software de citas para clínicas estéticas",
      "agenda de citas arrastrar y soltar",
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
    title: { before: "La agenda de citas para tu centro: para tu equipo y tus ", highlight: "cabinas" },
    description:
      "La herramienta de citas para tu centro de estética: equipo, cabinas y citas en una sola vista, con reservas online incluidas. Mueve citas arrastrando y soltando y evita reservas duplicadas.",
    chips: ["Arrastrar y soltar", "Equipo y cabinas", "Menos ausencias"],
    secondaryCta: { label: "Reservas online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "¿Cuál es la mejor forma de organizar las citas en un centro de estética?",
        answer:
          "Treatflow reúne citas, equipo y cabinas en una sola agenda. La vista diaria muestra a cada persona o cabina en su propia columna, así ves los huecos libres, evitas reservas duplicadas y gestionas los cambios más rápido. Además, las reservas online y los recordatorios automáticos reducen las llamadas y las citas perdidas.",
      },
      {
        question: "¿Qué software de citas sirve para clínicas estéticas?",
        answer:
          "Treatflow combina una agenda con columnas para el equipo y las cabinas, reservas online para consultas y tratamientos, y recordatorios por email. Las reservas llegan a la agenda sin comisión.",
      },
    ],
    image: {
      src: "/images/mockups/kalender-overview.png",
      alt: "Agenda de citas de Treatflow: vista diaria con equipo y cabinas",
    },
  },
  understand: {
    title: "Software de citas para todo tu centro",
    description: "Todas las citas, el equipo y las cabinas de un vistazo: ves al instante quién está libre y cuándo.",
    items: [
      {
        icon: "users",
        title: "Equipo, cabinas y servicios",
        text: "Añade a tu equipo, tus cabinas de tratamiento y tus servicios. La agenda muestra entonces una columna propia para cada persona o cabina.",
      },
      {
        icon: "move",
        title: "Mueve citas arrastrando y soltando",
        text: "Si cambian los planes, arrastra la cita a otro hueco: no hace falta borrarla y crearla de nuevo.",
      },
      {
        icon: "bell",
        title: "Recordatorios automáticos",
        text: "Tus clientes reciben un recordatorio por email antes de su cita. Así se olvidan muchas menos citas.",
      },
    ],
  },
  howItWorks: {
    description: "Tres pasos para tener la agenda de tu centro en marcha.",
    steps: [
      { title: "Configura equipo, servicios y cabinas", text: "Añade a tu personal, tus tratamientos y tus cabinas con sus horarios. La agenda muestra entonces una columna propia para cada uno." },
      { title: "Añade citas", text: "Introduce tú las citas o activa las reservas online: las reservas de tus clientes aparecen automáticamente en la agenda." },
      { title: "Los recordatorios funcionan solos", text: "Tus clientes reciben una confirmación de reserva y un recordatorio por email, sin que tengas que enviar nada a mano." },
    ],
  },
  cards: {
    title: "Lo que obtienes",
    description: "Todo para organizar las citas de tu centro: equipo, cabinas y recordatorios en una sola agenda.",
    items: [
      { icon: "users", title: "Equipo y cabinas", text: "Una columna por profesional o cabina. Ocupación y huecos libres de un vistazo.", points: ["Vista por columnas", "Huecos libres a la vista", "Sin reservas duplicadas"] },
      { icon: "move", title: "Arrastrar y soltar", text: "Mueve, alarga o intercambia citas: sin formularios y sin caos.", points: ["Cambios en segundos", "Al instante en la agenda", "Para todo el equipo"] },
      { icon: "layout-grid", title: "De la vista diaria a la mensual", text: "Cambia entre día, semana y mes, según lo que necesites en cada momento.", points: ["Vista diaria", "Semana", "Mes"] },
      { icon: "bell", title: "Recordatorios automáticos", text: "Recordatorios por email antes de cada cita. Menos ausencias y menos llamadas de seguimiento.", points: ["Recordatorios por email", "Momento de envío flexible", "Enlace de cancelación"] },
      { icon: "calendar", title: "Reservas online", text: "Las reservas llegan directamente a la agenda. Sin reservas duplicadas y con confirmación automática.", points: ["Enlace de reservas personal", "Al instante en la agenda", "Sin comisión"] },
      { icon: "clock", title: "Menos tiempo administrativo", text: "Menos llamadas y procesos más claros: más tiempo para los tratamientos y menos para la agenda.", points: ["Menos llamadas", "Franjas horarias claras", "Visión rápida"] },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre la agenda de citas para centros de estética",
    items: [
      {
        question: "¿Cuál es la mejor forma de organizar las citas en un centro de estética?",
        answer:
          "Lo más eficiente es una herramienta de citas especializada como Treatflow. Con las reservas online tus clientes reservan 24/7, los recordatorios automáticos por email reducen claramente las ausencias y la agenda te da una visión completa en todo momento.",
      },
      {
        question: "¿Cuánto cuesta un software de citas para centros de estética?",
        answer:
          "Treatflow ofrece la agenda con reservas online desde 59 € al mes en el plan Booking (53 € al mes con pago anual, IVA no incluido). Pruébalo gratis 14 días, sin tarjeta de crédito. Sin costes ocultos y sin comisión por reserva.",
      },
      {
        question: "¿Existe una agenda de citas gratuita para centros de estética?",
        answer:
          "Existen agendas gratuitas, normalmente con limitaciones, publicidad o una comisión por reserva a través de un modelo de marketplace. Una agenda de papel o una hoja de cálculo no cuestan nada, pero no aceptan reservas online, no envían recordatorios y no se conectan con las fichas de clientes. Puedes probar Treatflow gratis 14 días sin tarjeta de crédito; después, la agenda con reservas online cuesta 59 € al mes, sin comisión por cita.",
      },
      {
        question: "Agenda, calendario o sistema de reservas: ¿en qué se diferencian?",
        answer:
          "En el día a día de un centro, los tres significan casi lo mismo: la agenda o el calendario es la vista en la que tú y tu equipo gestionáis las citas. El sistema de reservas es la parte que usan tus clientes para reservar online por su cuenta. En Treatflow son lo mismo: las reservas online llegan directamente a la agenda, con recordatorios y fichas de clientes incluidos.",
      },
      {
        question: "¿Pueden mis clientes reservar citas online?",
        answer:
          "Sí. Recibes un enlace de reservas personal que puedes compartir en tu web, en Instagram o en mensajes. Tus clientes eligen tratamiento y horario a cualquier hora. Las nuevas reservas aparecen al instante en la agenda y las confirmaciones se envían automáticamente por email.",
      },
      {
        question: "¿Cómo reduzco las ausencias en mi centro?",
        answer:
          "Los recordatorios automáticos por email son la forma más eficaz de reducir las ausencias. Treatflow envía recordatorios en los momentos que tú elijas antes de la cita, así muchos menos clientes olvidan su reserva.",
      },
      {
        question: "¿Qué funciones debe tener una agenda de citas para centros de estética?",
        answer:
          "Una buena agenda de citas para centros de estética debe ofrecer reservas online, vistas de día, semana y mes, planificación de personal y cabinas, recordatorios automáticos por email, arrastrar y soltar y conexión con las fichas de clientes y la documentación de tratamientos.",
      },
      {
        question: "¿Cómo planifico a varias personas del equipo y varias cabinas?",
        answer:
          "La vista diaria de Treatflow muestra al personal o las cabinas en columnas separadas. Ves los huecos libres, evitas reservas duplicadas y coordinas con más facilidad los cambios de última hora.",
      },
      {
        question: "¿Cómo evito reservas duplicadas de personal y cabinas?",
        answer:
          "Treatflow muestra la ocupación del personal y de las cabinas una al lado de otra. Los horarios libres y ocupados se ven al momento, así detectas a tiempo los cuellos de botella y evitas las reservas duplicadas.",
      },
      {
        question: "¿Qué software de citas sirve para clínicas estéticas?",
        answer:
          "Treatflow combina una agenda con columnas para el equipo y las cabinas, reservas online para consultas y tratamientos, y recordatorios por email. Las nuevas reservas llegan directamente a la agenda, sin comisión por cita.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Reservas online", description: "24/7 con tu enlace de reservas" },
      { href: { page: "messaging" }, title: "Recordatorios", description: "Recordatorios automáticos por email" },
      { href: { page: "client-records" }, title: "Fichas de clientes", description: "La ficha del cliente, directamente desde la cita" },
    ],
  },
  cta: {
    title: "¿Listo para organizar tus citas sin estrés?",
    description: "Pruébalo gratis 14 días, sin tarjeta de crédito. Agenda, planificación del equipo y reservas online en una sola app.",
    secondary: { label: "Reservas online", href: { page: "online-booking" } },
  },
};
