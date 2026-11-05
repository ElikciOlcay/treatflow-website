import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsEs: ClientWorkflowsContent = {
  meta: {
    title: "Flujos de clientes: seguimiento automático para centros de estética",
    description:
      "Automatizaciones en varios pasos con Treatflow: seguimiento postratamiento, recuperación de clientes inactivos y recordatorios con tiempos de espera, condiciones y envío por email, sin tener que perseguir a nadie.",
    keywords: [
      "flujos de clientes centro de estética",
      "automatización de marketing salón de belleza",
      "automatizar seguimiento postratamiento",
      "recuperar clientes centro de estética",
      "seguimiento automático clientes",
      "Treatflow flujos",
    ],
  },
  dates: { modified: "2026-08-21", published: "2026-08-21" },
  schema: {
    id: "kunden-workflows",
    webPage: {
      name: "Flujos de clientes para centros de estética",
      description:
        "Automatizaciones en varios pasos: seguimiento postratamiento, recuperación de clientes inactivos y recordatorios con tiempos de espera, condiciones y envío por email.",
    },
  },
  breadcrumb: "Flujos de clientes",
  hero: {
    eyebrow: "Flujos de clientes",
    eyebrowIcon: "workflow",
    title: { before: "Automatizaciones en ", highlight: "varios pasos" },
    description:
      "Crea secuencias para el seguimiento postratamiento, la recuperación de clientes y los recordatorios, con tiempos de espera, condiciones y emails automáticos.",
    chips: ["Editor visual", "Emails automáticos", "Se detiene si el cliente vuelve a reservar"],
    secondaryCta: { label: "Ver los recordatorios", href: { page: "messaging" } },
    capsules: [
      {
        question: "¿Cómo automatizo el seguimiento postratamiento en mi centro de estética?",
        answer:
          "Con los flujos de clientes de Treatflow creas secuencias en varios pasos: por ejemplo, esperar 2 días después del tratamiento, preguntar al cliente qué tal está, comprobar si ha vuelto a reservar y, solo si no lo ha hecho, invitarle a pedir la siguiente cita. Así sigues presente sin hacer el seguimiento a mano.",
      },
    ],
    image: {
      src: "/images/mockups/es/kunden-workflows.jpg",
      alt: "Editor de flujos de Treatflow con disparador, tiempo de espera y mensaje",
    },
  },
  understand: {
    title: "Secuencias que avanzan solas",
    description:
      "En vez de recordatorios sueltos, creas secuencias completas para el seguimiento postratamiento, la recuperación de clientes y los recordatorios en varios pasos.",
    items: [
      {
        icon: "heart",
        title: "Seguimiento sin trabajo extra",
        text: "Pregunta automáticamente qué tal está la piel y, si al cliente le interesa, ofrécele la siguiente cita.",
      },
      {
        icon: "bell",
        title: "Recupera a los clientes inactivos",
        text: "Tras 60-90 días sin venir, le llega una invitación personal para volver a tu centro, justo en el momento adecuado.",
      },
      {
        icon: "git-branch",
        title: "Ramificaciones inteligentes",
        text: "Comprueba si el cliente ha vuelto a reservar. Si es así, el flujo se detiene: nada de mensajes repetidos.",
      },
    ],
  },
  howItWorks: {
    description: "Tu primer flujo en tres pasos.",
    steps: [
      { title: "Elige el disparador", text: "Por ejemplo, al terminar una cita o cuando un cliente lleva tiempo sin venir." },
      { title: "Conecta los pasos", text: "Organiza tiempos de espera, mensajes y condiciones en el editor visual." },
      { title: "Actívalo", text: "Treatflow ejecuta la secuencia y envía los mensajes por email." },
    ],
  },
  cards: {
    title: "Qué incluye",
    description: "Todo para comunicarte con tus clientes paso a paso, con claridad y bajo control.",
    items: [
      { icon: "workflow", title: "Editor visual", text: "Disparador, tiempos de espera, mensajes y condiciones, con arrastrar y soltar.", points: ["Visión clara", "Varias etapas", "Fácil de ajustar"] },
      { icon: "message-circle", title: "Mensajes por email", text: "Cada paso llega directamente a la bandeja de entrada de tus clientes.", points: ["Email", "Tu propio texto", "Envío automático"] },
      { icon: "clock", title: "Tiempos de espera", text: "Días u horas entre pasos, al ritmo de tu centro.", points: ["Seguimiento a tiempo", "Recuperación de clientes", "Nada que recordar"] },
      { icon: "git-branch", title: "Condiciones", text: "Comprueba, por ejemplo, si hay una nueva reserva y detén la secuencia a tiempo.", points: ["Sin emails repetidos", "Ramificación inteligente", "Mensajes más relevantes"] },
      { icon: "heart", title: "Secuencias postratamiento", text: "Primero, un mensaje para saber qué tal está; después, si procede, la siguiente cita.", points: ["Más fidelización", "Menos plantones después", "Más citas de seguimiento"] },
      { icon: "zap", title: "Recupera clientes", text: "Invita de nuevo, de forma automática, a los clientes que llevan tiempo sin venir.", points: ["60-90 días", "Personal", "Sin listas interminables"] },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre los flujos de clientes",
    items: [
      {
        question: "¿Qué son los flujos de clientes en Treatflow?",
        answer:
          "Los flujos de clientes son automatizaciones en varios pasos: creas secuencias con un disparador, tiempos de espera, mensajes y condiciones. Así el seguimiento postratamiento, la recuperación de clientes y los recordatorios funcionan solos, sin escribir cada mensaje a mano.",
      },
      {
        question: "¿En qué se diferencian los flujos de los recordatorios simples?",
        answer:
          "Un mensaje simple (como un recordatorio de cita) es un disparador y un mensaje. Los flujos sirven para secuencias con varios pasos y ramificaciones: por ejemplo, preguntar tras el tratamiento, esperar, comprobar si el cliente ha vuelto a reservar y solo entonces enviar un segundo mensaje.",
      },
      {
        question: "¿Por qué canal se envían los mensajes de los flujos?",
        answer:
          "Los pasos de los flujos se envían por email. Los recordatorios de cita se siguen gestionando en los mensajes simples.",
      },
      {
        question: "¿Puede detenerse un flujo si el cliente vuelve a reservar?",
        answer:
          "Sí. Puedes poner condiciones, por ejemplo comprobar si hay una nueva reserva desde la última cita. Si la hay, la secuencia se detiene: sigues presente sin escribir dos veces.",
      },
      {
        question: "¿Con qué flujos conviene empezar?",
        answer:
          "Los más habituales son: seguimiento 1-2 días después del tratamiento, recuperación de clientes tras 60-90 días sin venir y un seguimiento en varios pasos con un segundo mensaje solo si todavía no han reservado la siguiente cita.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "messaging" }, title: "Recordatorios", description: "Emails antes de la cita" },
      { href: { page: "appointment-calendar" }, title: "Agenda de citas", description: "Citas y automatizaciones, juntas" },
      { href: { page: "client-records" }, title: "Fichas de cliente", description: "Historial y seguimiento" },
    ],
  },
  cta: {
    title: "Pon el seguimiento de tus clientes en piloto automático",
    description: "Pruébalo gratis 14 días: seguimientos y recuperación de clientes sin hacerlo a mano.",
    secondary: { label: "Ver los recordatorios", href: { page: "messaging" } },
  },
};
