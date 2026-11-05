import type { OnlineBookingContent } from "./types";

export const onlineBookingEs: OnlineBookingContent = {
  meta: {
    title: "Sistema de reservas online para centros de estética",
    description:
      "Reservas online para tu centro de estética: tus clientes reservan 24/7 desde tu propio enlace. Con Treatflow Pay cobras una señal o el importe completo al reservar. Sin comisión por reserva.",
    keywords: [
      "reservas online centro de estética",
      "sistema de reservas online salón de belleza",
      "citas online centro de estética",
      "reservar cita online spa",
      "enlace de reservas centro de estética",
      "lista de espera centro de estética",
      "cobrar señal reserva online",
    ],
  },
  dates: { modified: "2026-10-02", published: "2024-06-01" },
  schema: {
    id: "online-buchungen",
    webPage: {
      name: "Sistema de reservas online para centros de estética",
      description:
        "Reservas online para tu centro de estética: tus clientes reservan 24/7 desde tu propio enlace. Con Treatflow Pay cobras una señal o el importe completo al reservar.",
    },
  },
  breadcrumb: "Reservas online",
  hero: {
    eyebrow: "Reservas online",
    eyebrowIcon: "link",
    title: { before: "Reservas online para tu ", highlight: "centro" },
    description:
      "Con tu propio enlace de reservas, tus clientes piden cita a cualquier hora y las citas entran solas en tu agenda.",
    chips: ["Reservas 24/7", "Sin comisiones", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Ver la agenda", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "¿Qué sistema de reservas online es el adecuado para un centro de estética?",
        answer:
          "Treatflow ofrece un sistema de reservas online pensado para centros de estética: tu propio enlace de reservas, citas 24/7, confirmaciones automáticas por email y Treatflow Pay para cobrar una señal o el importe completo al reservar. Sin comisión por reserva, desde 59 €/mes en el plan Booking y con 14 días de prueba gratis.",
      },
    ],
    image: {
      src: "/images/mockups/online-buchung-hero.png",
      alt: "Sistema de reservas online de Treatflow: tu propio enlace de reservas",
    },
  },
  understand: {
    title: "Tus clientes reservan solos y tú te centras en tratar",
    description:
      "Con tu propio enlace de reservas, tus clientes eligen cita a cualquier hora. Se acabaron las llamadas perdidas y los mensajes de ida y vuelta.",
    items: [
      {
        icon: "calendar",
        title: "Abierto las 24 horas",
        text: "Tu enlace de reservas funciona 24/7. Más del 60 % de las reservas llegan por la noche o el fin de semana.",
      },
      {
        icon: "bell",
        title: "Confirmación y recordatorio automáticos",
        text: "Nada más reservar, tu cliente recibe la confirmación, y antes de la cita, un recordatorio por email.",
      },
      {
        icon: "list-ordered",
        title: "Lista de espera para los días con la agenda llena",
        text: "Cuando tienes la agenda llena, tus clientes pueden apuntarse a la lista de espera. En cuanto se libera un hueco, reciben un aviso automático.",
      },
    ],
  },
  howItWorks: {
    description: "Tu propio enlace de reservas en tres pasos.",
    steps: [
      { title: "Añade tus tratamientos", text: "Elige qué tratamientos se pueden reservar, cuánto duran y cuánto cuestan. Tus clientes solo ven las horas libres." },
      { title: "Comparte tu enlace", text: "Comparte tu enlace de reservas en Instagram, en tu web o por mensaje. Incluye también un código QR para imprimir." },
      { title: "Empiezan a llegar reservas", text: "Las nuevas citas entran solas en tu agenda y las confirmaciones y los recordatorios se envían automáticamente. Con Treatflow Pay, tus clientes pueden pagar en el momento una señal o el precio completo." },
    ],
  },
  cards: {
    title: "Qué incluye",
    description: "Enlace de reservas, idiomas, lista de espera, códigos de descuento y Treatflow Pay, sin comisión por cita.",
    items: [
      { icon: "link", title: "Tu propio enlace de reservas", text: "Tu enlace para compartir en tu web y en redes sociales, con la imagen de tu centro.", points: ["Enlace personalizado", "Código QR", "Con la imagen de tu centro"] },
      { icon: "languages", title: "Siete idiomas", text: "La página de reservas se muestra en el idioma de tu cliente, sin configurar nada.", points: ["DE, EN, NL, TR, PL, IT, RU", "Idioma automático", "Sin barreras de idioma"] },
      { icon: "wallet", title: "Treatflow Pay", text: "Señal o pago completo en el momento de reservar online.", points: ["Configurable por servicio", "Señal o pago completo", "2,69 % por transacción"], feature: "pay" },
      { icon: "list-ordered", title: "Lista de espera", text: "Si tienes la agenda llena, tus clientes se apuntan a la lista de espera. Cuando se libera un hueco, quienes encajan reciben un aviso por email.", points: ["Email automático si se cancela una cita", "Dos modos de aviso", "Resumen en el panel"] },
      { icon: "ticket", title: "Códigos de descuento", text: "Códigos para nuevos clientes y promociones que se canjean al reservar online.", points: ["Captación de nuevos clientes", "Se canjean al reservar", "Estadísticas de uso"] },
      { icon: "bell", title: "Recordatorios", text: "Recordatorios por email antes de la cita. Si tu cliente no puede venir, cancela a tiempo y el hueco vuelve a quedar libre.", points: ["Recordatorios por email", "Momento de envío flexible", "Menos plantones"] },
      { icon: "calendar", title: "Planificación flexible", text: "Horarios, duración de los tratamientos, descansos y vacaciones: solo se ofrecen las horas realmente disponibles.", points: ["Horarios de trabajo", "Descansos y vacaciones", "Sin reservas duplicadas"] },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre las reservas online",
    items: [
      {
        question: "¿Qué sistema de reservas online es el adecuado para un centro de estética?",
        answer:
          "Treatflow ofrece un sistema de reservas online pensado para centros de estética: tu propio enlace de reservas, confirmaciones automáticas por email, agenda por profesional y conexión con las fichas de cliente y la documentación de tratamientos. Desde 59 € al mes.",
      },
      {
        question: "¿Cómo configuro las reservas online en mi centro?",
        answer:
          "En tres pasos: 1) añade tus tratamientos con su duración y su precio, 2) define tus horarios y tu disponibilidad y 3) comparte tu enlace de reservas en Instagram, en tu web o por mensaje. Lo tienes listo en menos de 10 minutos.",
      },
      {
        question: "¿Cuánto cuesta un sistema de reservas online para centros de estética?",
        answer:
          "Las reservas online de Treatflow están incluidas en el plan Booking, desde 59 € al mes. Sin comisión por reserva, sin costes ocultos y con 14 días de prueba gratis, sin tarjeta de crédito.",
      },
      {
        question: "¿Pueden mis clientes reservar citas a cualquier hora?",
        answer:
          "Sí. Tu enlace de reservas funciona 24/7. Tus clientes pueden ver y reservar huecos libres en cualquier momento, también por la noche y el fin de semana. Más del 60 % de las reservas se hacen fuera del horario de apertura.",
      },
      {
        question: "¿Cómo reduce los plantones un sistema de reservas?",
        answer:
          "Con recordatorios automáticos por email, con la antelación que tú elijas. Tus clientes se acuerdan de su cita y, si no pueden venir, la cancelan a tiempo para que el hueco quede libre para otra persona. Así se pierden muchas menos citas.",
      },
      {
        question: "¿Qué pasa cuando tengo la agenda llena?",
        answer:
          "Con la lista de espera, tus clientes pueden apuntarse para que les avises si queda un hueco libre. Si se cancela una cita, quienes encajan reciben automáticamente un email con las horas que han quedado libres. Así no pierdes ninguna solicitud.",
      },
      {
        question: "¿Pueden mis clientes pagar directamente al reservar online?",
        answer:
          "Sí. Con Treatflow Pay, tus clientes pagan una señal o el importe completo al reservar. Tú lo configuras para cada servicio. La comisión es del 2,69 % por transacción.",
        feature: "pay",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Señal o pago completo", feature: "pay" },
      { href: { page: "appointment-calendar" }, title: "Agenda de citas", description: "Las reservas entran directamente en tu agenda" },
      { href: { page: "messaging" }, title: "Recordatorios", description: "Confirmaciones y recordatorios automáticos" },
      { href: { page: "client-records" }, title: "Fichas de cliente", description: "Cada reserva, con su ficha de cliente" },
    ],
  },
  cta: {
    title: "Empieza a recibir reservas online",
    description: "Pruébalo gratis 14 días, sin tarjeta de crédito y sin comisión por reserva.",
    secondary: { label: "Ver la agenda", href: { page: "appointment-calendar" } },
  },
};
