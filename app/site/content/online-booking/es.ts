import type { OnlineBookingContent } from "./types";

export const onlineBookingEs: OnlineBookingContent = {
  meta: {
    title: "Sistema de reservas online para centros de estética",
    description:
      "Reservas online para tu centro de estética: tus clientes reservan 24/7 con tu enlace personal. Con Treatflow Pay cobras un depósito o el importe completo al reservar. Sin comisión por reserva.",
    keywords: [
      "sistema de reservas online centro de estética",
      "software de reservas para salones de belleza",
      "reserva de citas online spa",
      "enlace de reservas centro de estética",
      "reservas online 24/7",
      "lista de espera centro de estética",
      "depósito en reservas online",
    ],
  },
  dates: { modified: "2026-10-02", published: "2024-06-01" },
  schema: {
    id: "online-buchungen",
    webPage: {
      name: "Sistema de reservas online para centros de estética",
      description:
        "Reservas online para tu centro de estética: tus clientes reservan 24/7 con tu enlace personal. Con Treatflow Pay cobras un depósito o el importe completo al reservar.",
    },
  },
  breadcrumb: "Reservas online",
  hero: {
    eyebrow: "Reservas online",
    eyebrowIcon: "link",
    title: { before: "Reservas online para tu ", highlight: "centro" },
    description:
      "Tu enlace de reservas personal: tus clientes reservan a cualquier hora. Las citas llegan automáticamente a tu agenda.",
    chips: ["Reservas 24/7", "Sin comisión", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Ver la agenda", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "¿Qué sistema de reservas online es el adecuado para un centro de estética?",
        answer:
          "Treatflow ofrece un sistema de reservas online pensado para centros de estética, con enlace de reservas personal, reserva de citas 24/7, confirmaciones automáticas por email y Treatflow Pay para cobrar un depósito o el importe completo al reservar. Sin comisión por reserva, desde 59 €/mes en el plan Booking y con 14 días de prueba gratis.",
      },
    ],
    image: {
      src: "/images/mockups/online-buchung-hero.png",
      alt: "Sistema de reservas online de Treatflow: enlace de reservas personal",
    },
  },
  understand: {
    title: "Tus clientes reservan solos, tú te dedicas a tratar",
    description:
      "Con tu enlace de reservas personal, tus clientes eligen cita a cualquier hora. Se acabaron las llamadas perdidas y los mensajes de ida y vuelta.",
    items: [
      {
        icon: "calendar",
        title: "Abierto a todas horas",
        text: "Tu enlace de reservas está disponible 24/7. Más del 60 % de las reservas llegan por la noche o el fin de semana.",
      },
      {
        icon: "bell",
        title: "Confirmación y recordatorio automáticos",
        text: "Justo después de reservar, tu cliente recibe una confirmación. Antes de la cita le llega un recordatorio por email.",
      },
      {
        icon: "list-ordered",
        title: "Lista de espera para los días completos",
        text: "Cuando tienes la agenda llena, tus clientes pueden apuntarse a la lista de espera. En cuanto se libera un hueco, reciben un aviso automático.",
      },
    ],
  },
  howItWorks: {
    description: "Tres pasos para tener tu propio enlace de reservas.",
    steps: [
      { title: "Añade tus tratamientos", text: "Elige qué tratamientos se pueden reservar, cuánto duran y cuánto cuestan. Tus clientes solo ven horarios libres." },
      { title: "Comparte tu enlace", text: "Comparte tu enlace de reservas personal en Instagram, en tu web o en mensajes. También incluye un código QR para imprimir." },
      { title: "Llegan las reservas", text: "Las nuevas citas aparecen automáticamente en tu agenda. Las confirmaciones y los recordatorios se envían solos. Con Treatflow Pay, tus clientes pueden pagar al momento un depósito o el precio completo." },
    ],
  },
  cards: {
    title: "Lo que obtienes",
    description: "Enlace de reservas, idiomas, lista de espera, códigos de descuento y Treatflow Pay, sin comisión por cita.",
    items: [
      { icon: "link", title: "Enlace de reservas personal", text: "Tu enlace para compartir en tu web y en redes sociales, con la imagen de tu centro.", points: ["Enlace personalizado", "Código QR", "Imagen de tu centro"] },
      { icon: "languages", title: "Seis idiomas", text: "La página de reservas se adapta al idioma de tu cliente, sin configuración adicional.", points: ["DE, EN, TR, PL, IT, RU", "Idioma automático", "Sin barreras"] },
      { icon: "wallet", title: "Treatflow Pay", text: "Depósito o pago completo directamente al reservar online.", points: ["Configurable por servicio", "Depósito o pago completo", "2,69 % por transacción"], feature: "pay" },
      { icon: "list-ordered", title: "Lista de espera", text: "Tus clientes se apuntan a la lista de espera cuando tienes la agenda llena. Si se libera un hueco, los clientes que encajan reciben un email.", points: ["Email automático al cancelarse una cita", "Dos modos de aviso", "Resumen en el panel"] },
      { icon: "ticket", title: "Códigos de descuento", text: "Códigos para nuevos clientes y campañas, que se canjean directamente al reservar online.", points: ["Nuevos clientes y promociones", "Se canjean al reservar", "Estadísticas de uso"] },
      { icon: "bell", title: "Recordatorios", text: "Recordatorios por email antes de la cita. Tus clientes pueden cancelar a tiempo y el hueco vuelve a quedar libre.", points: ["Recordatorios por email", "Momento de envío flexible", "Menos ausencias"] },
      { icon: "calendar", title: "Planificación flexible", text: "Horarios de trabajo, duración de los tratamientos, pausas y vacaciones: solo se ofrece la disponibilidad real.", points: ["Horarios de trabajo", "Pausas y vacaciones", "Sin reservas duplicadas"] },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre las reservas online",
    items: [
      {
        question: "¿Qué sistema de reservas online es el adecuado para un centro de estética?",
        answer:
          "Treatflow ofrece un sistema de reservas online pensado para centros de estética, con enlace de reservas personal, confirmaciones automáticas por email, agendas por profesional y conexión con las fichas de clientes y la documentación de tratamientos. Desde 59 € al mes.",
      },
      {
        question: "¿Cómo configuro las reservas online en mi centro?",
        answer:
          "En tres pasos: 1) añade tus tratamientos con duración y precio, 2) define tus horarios de trabajo y tu disponibilidad, 3) comparte tu enlace de reservas personal en Instagram, en tu web o en mensajes. La configuración lleva menos de 10 minutos.",
      },
      {
        question: "¿Cuánto cuesta un sistema de reservas online para centros de estética?",
        answer:
          "Treatflow incluye las reservas online en el plan Booking desde 59 € al mes. Sin comisión por reserva, sin costes ocultos y con 14 días de prueba gratis, sin tarjeta de crédito.",
      },
      {
        question: "¿Pueden mis clientes reservar citas a cualquier hora?",
        answer:
          "Sí. Tu enlace de reservas personal está disponible 24/7. Tus clientes pueden ver y reservar huecos libres en cualquier momento, también por la noche y el fin de semana. Más del 60 % de las reservas se hacen fuera del horario de apertura.",
      },
      {
        question: "¿Cómo reduce las ausencias un sistema de reservas?",
        answer:
          "Con recordatorios automáticos por email en los momentos que tú elijas antes de la cita. Tus clientes recuerdan su cita y, si es necesario, pueden cancelarla, así el hueco queda libre para otra persona. Esto reduce claramente las citas perdidas.",
      },
      {
        question: "¿Qué pasa cuando todas las citas están reservadas?",
        answer:
          "Con la lista de espera, tus clientes pueden indicar su interés por huecos libres. Si se cancela una cita, los clientes que encajan reciben automáticamente un email con los horarios que han quedado libres. Así no se pierde ninguna solicitud.",
      },
      {
        question: "¿Pueden mis clientes pagar directamente al reservar online?",
        answer:
          "Sí. Con Treatflow Pay, tus clientes pagan un depósito o el importe completo al reservar. Tú lo configuras para cada servicio. La comisión es del 2,69 % por transacción.",
        feature: "pay",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Depósito o pago completo", feature: "pay" },
      { href: { page: "appointment-calendar" }, title: "Agenda de citas", description: "Las reservas llegan directamente a tu agenda" },
      { href: { page: "messaging" }, title: "Recordatorios", description: "Confirmaciones y recordatorios automáticos" },
      { href: { page: "client-records" }, title: "Fichas de clientes", description: "Nueva reserva, ficha conocida" },
    ],
  },
  cta: {
    title: "¿Listo para recibir reservas automáticamente?",
    description: "Pruébalo gratis 14 días, sin tarjeta de crédito y sin comisión por reserva.",
    secondary: { label: "Ver la agenda", href: { page: "appointment-calendar" } },
  },
};
