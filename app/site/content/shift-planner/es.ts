import type { ShiftPlannerContent } from "./types";

const faqItems: ShiftPlannerContent["faq"]["items"] = [
  {
    question: "¿Cómo organizo turnos y vacaciones en mi centro de estética?",
    answer:
      "Con el planificador de turnos de Treatflow organizas cada semana por persona del equipo: uno o varios turnos al día, plantillas como mañana, tarde o jornada completa y ausencias como vacaciones, baja por enfermedad o formación como periodo. Con «Copiar semana anterior» la semana siguiente está lista en segundos. Después, la reserva online solo muestra horas en las que alguien está realmente de turno.",
  },
  {
    question: "¿Cuánto cuesta el planificador de turnos?",
    answer:
      "El planificador de turnos es una app incluida en el plan Booking (59 € al mes, 53 € al mes con pago anual, IVA no incluido) y ahora mismo no cuesta nada extra. Lo activas en Apps → Planificador de turnos y puedes probarlo gratis durante los 14 días de prueba.",
  },
  {
    question: "¿Qué pasa con los horarios de trabajo actuales?",
    answer:
      "Al activarlo, Treatflow rellena las próximas 8 semanas a partir de los horarios de trabajo actuales para que no se pierda ninguna hora reservable. A partir de ahí planificas tú: Treatflow no rellena semanas automáticamente. Si desactivas el planificador de turnos, vuelven a valer los horarios normales y tu cuadrante queda guardado.",
  },
  {
    question: "¿Ven los clientes por qué alguien no está disponible?",
    answer:
      "No. Durante vacaciones, baja o formación esa persona simplemente no se puede reservar online. Los clientes solo ven las horas libres, nunca el motivo de la ausencia.",
  },
  {
    question: "¿Qué pasa con las citas que ya están reservadas?",
    answer:
      "Las citas reservadas se mantienen, aunque cambies un turno o registres vacaciones. Si una cita queda fuera del turno o dentro de una ausencia, Treatflow te avisa al abrir la cita para que puedas moverla a tiempo.",
  },
  {
    question: "¿Puedo planificar varios turnos en un mismo día?",
    answer:
      "Sí. Cada persona puede tener tantos turnos al día como necesites, por ejemplo de 9 a 12 y de 15 a 19 con una pausa larga al mediodía. Lo único es que los turnos no se solapen.",
  },
  {
    question: "¿Los turnos cuentan también fuera del horario de apertura?",
    answer:
      "Sí. Con el planificador de turnos activo cuenta el turno planificado, aunque empiece antes o termine después del horario de apertura habitual. Así puedes ofrecer, por ejemplo, un jueves hasta tarde con una persona sin cambiar el horario del centro.",
  },
  {
    question: "¿Puedo abrir un turno solo para algunos servicios?",
    answer:
      "Sí. Cada turno y cada plantilla se puede limitar online a determinadas categorías o servicios, por ejemplo solo láser el jueves por la tarde. En el cuadrante semanal verás en el turno qué se puede reservar online.",
  },
  {
    question: "¿Se tienen en cuenta los festivos?",
    answer:
      "Sí. Los festivos en los que tu centro está cerrado aparecen en el cuadrante como una columna gris con su nombre. Los configuras en Ajustes → Horario de apertura → Festivos.",
  },
  {
    question: "¿Quién puede editar el cuadrante?",
    answer:
      "El cuadrante lo editan las personas propietarias y las del equipo con rol de administración. Quienes solo inician sesión con su PIN no tienen acceso.",
  },
];

export const shiftPlannerEs: ShiftPlannerContent = {
  meta: {
    title: "Cuadrante de turnos para centros de estética",
    description:
      "Planificador de turnos para centros de estética: turnos semanales, vacaciones y bajas en un solo cuadrante; la reserva online solo muestra horas en las que alguien trabaja.",
    keywords: [
      "cuadrante de turnos centro de estética",
      "software de turnos de personal",
      "planificador de turnos salón de belleza",
      "gestión de turnos empleados",
      "app cuadrante de turnos",
      "planificación de vacaciones empleados",
      "reserva online según turnos",
    ],
  },
  dates: { modified: "2026-11-11", published: "2026-11-11" },
  schema: {
    id: "shift-planner",
    webPage: {
      name: "Cuadrante de turnos para centros de estética",
      description:
        "Planificador de turnos para centros de estética con cuadrante semanal por persona, plantillas de turno, vacaciones y bajas; la reserva online sigue el cuadrante.",
    },
    software: {
      name: "Treatflow planificador de turnos para centros de estética",
      description:
        "Planificador de turnos con cuadrante semanal por persona, plantillas de turno y ausencias. La reserva online solo ofrece horas dentro de los turnos planificados.",
      featureList: [
        "Cuadrante semanal por persona con varios turnos al día",
        "Plantillas de turno como mañana, tarde y jornada completa",
        "Copiar la semana anterior o rellenar desde el horario de trabajo",
        "Vacaciones, bajas y formación como periodo",
        "Reserva online solo dentro de los turnos planificados",
        "Turnos abiertos solo para algunos servicios",
        "Turnos y ausencias en la agenda de citas",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Planificador de turnos",
  hero: {
    eyebrow: "Planificador de turnos y cuadrante",
    eyebrowIcon: "calendar-clock",
    title: { before: "Cuadrante de turnos para tu centro: ", highlight: "solo se reserva cuando alguien trabaja" },
    description:
      "Planifica la semana de tu equipo con turnos, plantillas y vacaciones. La reserva online sigue el cuadrante automáticamente: los días sin turno y las ausencias no se pueden reservar.",
    chips: ["Turnos por semana", "Vacaciones y bajas", "Reservas según el cuadrante"],
    secondaryCta: { label: "Agenda de citas", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "¿Cómo organizo turnos y vacaciones en mi centro de estética?",
        answer:
          "Con el planificador de turnos de Treatflow organizas cada semana por persona del equipo: uno o varios turnos al día, plantillas como mañana, tarde o jornada completa y ausencias como vacaciones o bajas como periodo. Después, la reserva online solo muestra horas en las que alguien está realmente de turno.",
      },
      {
        question: "¿Qué pasa con la reserva online cuando alguien está de vacaciones?",
        answer:
          "Durante vacaciones, baja o formación esa persona no se puede reservar online. Los clientes no ven el motivo, solo las horas libres del resto del equipo. Las citas ya reservadas se mantienen.",
      },
    ],
    image: {
      src: "/images/mockups/es/schichtplan.png",
      alt: "Planificador de turnos de Treatflow: cuadrante semanal con turnos y ausencias por persona",
    },
  },
  understand: {
    title: "Un cuadrante que dirige tus reservas online",
    description:
      "En lugar de horarios fijos planificas semana a semana, y los clientes solo reservan cuando hay alguien en el centro.",
    items: [
      {
        icon: "calendar-days",
        title: "Semana a semana",
        text: "Cada persona tiene uno o varios turnos al día, también turnos partidos con pausa para comer. Las horas de la semana aparecen junto al nombre.",
      },
      {
        icon: "plane",
        title: "Vacaciones, bajas, formación",
        text: "Registras las ausencias como periodo. Durante ese tiempo la persona no se puede reservar online y los clientes no ven el motivo.",
      },
      {
        icon: "globe",
        title: "Reservas según el cuadrante",
        text: "Tu página de reservas solo muestra horas dentro de los turnos planificados. Los días sin turno no se pueden reservar; la lista de espera y los cambios de cita también siguen el cuadrante.",
      },
    ],
  },
  howItWorks: {
    description: "Tres pasos del cuadrante semanal a las reservas online que encajan.",
    steps: [
      {
        title: "Activa el planificador de turnos",
        text: "Lo activas en la sección Apps. Para que no se pierda ninguna hora reservable, Treatflow rellena las próximas 8 semanas a partir de los horarios de trabajo actuales.",
      },
      {
        title: "Ajusta la semana",
        text: "Añade turnos desde una plantilla, copia la semana anterior o cambia días concretos. Las vacaciones y bajas se registran como periodo.",
      },
      {
        title: "Los clientes reservan según el cuadrante",
        text: "La reserva online solo ofrece horas dentro de los turnos. En la agenda ves turnos y ausencias directamente en la vista diaria.",
      },
    ],
  },
  cards: {
    description: "Todo para planificar el equipo de tu centro, conectado con la agenda y la reserva online.",
    items: [
      {
        icon: "users",
        title: "Cuadrante semanal por persona",
        text: "El equipo de arriba abajo y los días uno al lado del otro, con tantos turnos al día como necesites.",
        points: ["Turnos partidos", "Horas por semana", "Copiar semana anterior"],
      },
      {
        icon: "layers",
        title: "Plantillas de turno",
        text: "Crea plantillas como mañana, tarde o jornada completa y añádelas con un clic. O rellena una semana desde el horario de trabajo estándar.",
        points: ["Plantillas propias", "Selección rápida por día", "Rellenar desde el horario"],
      },
      {
        icon: "plane",
        title: "Ausencias",
        text: "Vacaciones, bajas, formación u otras ausencias como periodo, con nota opcional.",
        points: ["Vacaciones y bajas", "Formaciones", "El motivo queda interno"],
      },
      {
        icon: "globe",
        title: "Reserva online según el cuadrante",
        text: "Solo se reserva dentro de los turnos planificados, también desde la lista de espera y cuando los clientes cambian su cita.",
        points: ["Días sin turno bloqueados", "Lista de espera y cambios", "Las citas se mantienen"],
      },
      {
        icon: "list-ordered",
        title: "Turnos para algunos servicios",
        text: "Abre un turno online solo para determinadas categorías o servicios, por ejemplo solo láser el jueves por la tarde.",
        points: ["Ajustable por turno", "Categorías o servicios", "También en plantillas"],
      },
      {
        icon: "calendar",
        title: "Visible en la agenda",
        text: "En la vista diaria las horas fuera de turno aparecen rayadas, y los turnos y ausencias se ven bajo cada nombre.",
        points: ["Rayado fuera de turno", "Aviso en la cita", "Festivos en el cuadrante"],
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre el planificador de turnos",
    items: faqItems,
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Agenda de citas", description: "Equipo y cabinas en una sola agenda" },
      { href: { page: "online-booking" }, title: "Reservas online", description: "24/7 con tu enlace de reservas" },
      { href: { page: "messaging" }, title: "Recordatorios", description: "Recordatorios automáticos por email" },
    ],
  },
  cta: {
    title: "Planifica tu equipo y deja que las reservas sigan",
    description: "Pruébalo gratis 14 días, sin tarjeta de crédito. Cuadrante, agenda y reserva online en una sola app.",
    secondary: { label: "Agenda de citas", href: { page: "appointment-calendar" } },
  },
};
