import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsEs: ClientWorkflowsContent = {
  meta: {
    title: "Flujos de clientes para centros de estética",
    description:
      "Automatizaciones en varios pasos con Treatflow: seguimiento postratamiento, reactivación y recordatorios con tiempos de espera, condiciones y envío por email, sin tener que perseguir a nadie.",
    keywords: [
      "flujos de clientes centro de estética",
      "automatización marketing salón de belleza",
      "automatizar seguimiento postratamiento",
      "reactivar clientes centro de estética",
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
        "Automatizaciones en varios pasos: seguimiento postratamiento, reactivación y recordatorios con tiempos de espera, condiciones y envío por email.",
    },
  },
  breadcrumb: "Flujos de clientes",
  hero: {
    eyebrow: "Flujos de clientes",
    eyebrowIcon: "workflow",
    title: { before: "Automatizaciones en ", highlight: "varios pasos" },
    description:
      "Crea secuencias de seguimiento postratamiento, reactivación y recordatorios, con tiempos de espera, condiciones y emails automáticos.",
    chips: ["Editor visual", "Emails automáticos", "Se detiene si vuelve a reservar"],
    secondaryCta: { label: "Ver los recordatorios", href: { page: "messaging" } },
    capsules: [
      {
        question: "¿Cómo automatizo el seguimiento postratamiento en mi centro de estética?",
        answer:
          "Con los flujos de clientes de Treatflow creas secuencias en varios pasos: por ejemplo, esperar 2 días después del tratamiento, preguntar qué tal está la clienta, comprobar si ha vuelto a reservar y, solo si no lo ha hecho, enviarle una invitación para la siguiente cita. Así sigues presente sin tener que hacer el seguimiento a mano.",
      },
    ],
    image: {
      src: "/images/mockups/kunden-workflows.jpg",
      alt: "Editor de flujos de Treatflow con disparador, tiempo de espera y mensaje",
    },
  },
  understand: {
    title: "Secuencias que avanzan solas",
    description:
      "En lugar de recordatorios sueltos, creas secuencias pensadas para el seguimiento postratamiento, la reactivación y los recordatorios en varios pasos.",
    items: [
      {
        icon: "heart",
        title: "Seguimiento sin trabajo extra",
        text: "Pregunta automáticamente cómo está la piel y, si le interesa, ofrece la siguiente cita.",
      },
      {
        icon: "bell",
        title: "Recupera a los clientes inactivos",
        text: "Tras 60–90 días sin visita, se envía una invitación para volver a tu centro, personal y en el momento adecuado.",
      },
      {
        icon: "git-branch",
        title: "Ramificaciones inteligentes",
        text: "Comprueba si ha vuelto a reservar. Si es así, el flujo se detiene: nada de mensajes duplicados.",
      },
    ],
  },
  howItWorks: {
    description: "Tu primer flujo en tres pasos.",
    steps: [
      { title: "Elige el disparador", text: "Empieza, por ejemplo, al terminar una cita o cuando alguien lleva tiempo sin venir." },
      { title: "Conecta los pasos", text: "Ordena tiempos de espera, mensajes y condiciones en el editor visual." },
      { title: "Actívalo", text: "Treatflow ejecuta la secuencia y envía los mensajes por email." },
    ],
  },
  cards: {
    title: "Lo que obtienes",
    description: "Todo para una comunicación con tus clientes en varios pasos, clara y bajo control.",
    items: [
      { icon: "workflow", title: "Editor visual", text: "Disparador, tiempos de espera, mensaje y condición con arrastrar y soltar.", points: ["Visión clara", "Varias etapas", "Fácil de ajustar"] },
      { icon: "message-circle", title: "Mensajes por email", text: "Cada paso llega directamente a la bandeja de entrada de tus clientes.", points: ["Email", "Tu propio texto", "Envío automático"] },
      { icon: "clock", title: "Tiempos de espera", text: "Días u horas entre pasos, igual que en la rutina de tu centro.", points: ["Seguimiento a tiempo", "Reactivación", "Nada que recordar"] },
      { icon: "git-branch", title: "Condiciones", text: "Comprueba, por ejemplo, si hay nuevas reservas y detén la secuencia a tiempo.", points: ["Sin emails duplicados", "Ramificación inteligente", "Mensajes más relevantes"] },
      { icon: "heart", title: "Secuencias postratamiento", text: "Primero un mensaje para saber cómo está y, después, si procede, la siguiente cita.", points: ["Más fidelización", "Menos ausencias después", "Más citas de seguimiento"] },
      { icon: "zap", title: "Reactivación", text: "Vuelve a invitar automáticamente a tus clientes tras una pausa más larga.", points: ["60–90 días", "Personal", "Sin listas caóticas"] },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre los flujos de clientes",
    items: [
      {
        question: "¿Qué son los flujos de clientes en Treatflow?",
        answer:
          "Los flujos de clientes son automatizaciones en varios pasos: creas secuencias con un disparador, tiempos de espera, mensajes y condiciones. Así el seguimiento postratamiento, la reactivación y los recordatorios funcionan solos, sin que tengas que escribir cada mensaje a mano.",
      },
      {
        question: "¿En qué se diferencian los flujos de los recordatorios simples?",
        answer:
          "Los mensajes simples (como los recordatorios de cita) son un disparador y un mensaje. Los flujos sirven para secuencias con varios pasos y ramificaciones: por ejemplo, preguntar tras el tratamiento, esperar, comprobar si ha vuelto a reservar y solo entonces enviar un segundo mensaje.",
      },
      {
        question: "¿Por qué canal se envían los mensajes de los flujos?",
        answer:
          "Los pasos de los flujos se envían por email. Los recordatorios de cita siguen disponibles en los mensajes simples.",
      },
      {
        question: "¿Puede detenerse un flujo si el cliente vuelve a reservar?",
        answer:
          "Sí. Puedes fijar condiciones, por ejemplo comprobar si hay una nueva reserva desde la última cita. Si la hay, la secuencia se detiene: sigues presente sin escribir dos veces.",
      },
      {
        question: "¿Con qué flujos conviene empezar?",
        answer:
          "Los más habituales son: seguimiento 1–2 días después del tratamiento, reactivación tras 60–90 días sin visita y seguimiento en varios pasos con un segundo mensaje solo si todavía no se ha reservado la siguiente cita.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "messaging" }, title: "Recordatorios", description: "Emails antes de la cita" },
      { href: { page: "appointment-calendar" }, title: "Agenda de citas", description: "Citas y automatizaciones juntas" },
      { href: { page: "client-records" }, title: "Fichas de clientes", description: "Historial y seguimiento" },
    ],
  },
  cta: {
    title: "¿Listo para los flujos de clientes en varios pasos?",
    description: "Pruébalo gratis 14 días: seguimiento y reactivación sin tener que hacerlo a mano.",
    secondary: { label: "Ver los recordatorios", href: { page: "messaging" } },
  },
};
