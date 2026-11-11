import type { IntegrationsContent } from "./types";

export const integrationsEs: IntegrationsContent = {
  meta: {
    title: "Integraciones y apps para tu centro de estética",
    description:
      "Conecta Treatflow con Google Calendar, Zapier y asistentes de IA como Claude o ChatGPT, y cobra online con Treatflow Pay: agenda sincronizada, automatizaciones y pagos en una sola plataforma.",
    keywords: [
      "integraciones Treatflow",
      "integraciones software de estética",
      "sincronizar Google Calendar centro de estética",
      "Zapier centro de estética",
      "software de estética ChatGPT",
      "Claude MCP software de gestión",
      "pagos online centro de estética",
      "sincronizar agenda de citas",
    ],
  },
  schema: { id: "integrationen" },
  breadcrumb: "Integraciones",
  hero: {
    eyebrow: "Integraciones",
    eyebrowIcon: "plug",
    title: { before: "Conecta tus apps y mantén tus ", highlight: "datos", after: " sincronizados" },
    description:
      "Google Calendar, Zapier, asistentes de IA y Treatflow Pay: conectas una vez y todo queda actualizado en todas partes.",
    chips: ["Google Calendar", "Zapier", "Asistentes de IA (MCP)", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Ver la agenda", href: { page: "appointment-calendar" } },
    tiles: [
      { name: "Google", category: "Calendario", gradient: "from-emerald-500 to-teal-600", icon: "calendar" },
      { name: "Zapier", category: "Automatización", gradient: "from-orange-500 to-amber-600", icon: "zap" },
      { name: "Claude y ChatGPT", category: "Asistentes de IA", gradient: "from-blue-500 to-indigo-600", icon: "bot" },
      { name: "Treatflow Pay", category: "Pagos online", gradient: "from-violet-500 to-purple-600", icon: "wallet", feature: "pay" },
    ],
  },
  understand: {
    title: "De un vistazo: para qué sirven las integraciones",
    description: "Menos trabajo por duplicado: los datos pasan solos de una herramienta a otra.",
    items: [
      {
        icon: "refresh",
        title: "Sin trabajo por duplicado",
        text: "Introduces clientes y citas una sola vez y tu agenda y las herramientas conectadas se mantienen al día.",
      },
      {
        icon: "workflow",
        title: "Procesos automáticos",
        text: "La sincronización de la agenda y los flujos de Zapier trabajan en segundo plano.",
      },
      {
        icon: "shield-check",
        title: "Conforme al RGPD",
        text: "Conexiones seguras y tratamiento de datos conforme al RGPD. Los datos médicos nunca salen de Treatflow.",
      },
    ],
  },
  howItWorks: {
    description: "Conectado en tres pasos, sin conocimientos técnicos.",
    steps: [
      { title: "Elige la app", text: "Selecciona la integración que necesitas en Ajustes del centro > Apps." },
      { title: "Conecta tu cuenta", text: "Inicia sesión una sola vez con el proveedor, por ejemplo Google, Zapier, Claude o ChatGPT." },
      { title: "Sincronización automática", text: "Desde ese momento, citas, clientes y flujos trabajan juntos." },
    ],
  },
  cards: {
    title: "Estas apps están integradas",
    description: "De la sincronización de la agenda y las automatizaciones a los asistentes de IA y los pagos online.",
    items: [
      {
        icon: "calendar",
        title: "Google Calendar",
        text: "Sincronización en ambos sentidos: Treatflow y Google siempre al día, en tiempo real.",
        points: ["Sincronización en ambos sentidos", "Sin reservas duplicadas", "Citas personales y del centro por separado"],
      },
      {
        icon: "wallet",
        title: "Treatflow Pay",
        text: "Señal o pago completo en las reservas online, procesados de forma segura con Stripe.",
        points: ["Señal al reservar", "Pago completo por adelantado", "2,69 % sin sorpresas"],
        feature: "pay",
      },
      {
        icon: "zap",
        title: "Zapier",
        text: "Conecta con más de 7.000 apps: flujos automáticos para nuevas citas y formularios.",
        points: ["Más de 7.000 apps", "Webhooks", "Sin código"],
      },
      {
        icon: "bot",
        title: "Asistentes de IA (MCP)",
        text: "Conecta Claude, ChatGPT u otros asistentes y pregúntales por tus citas, tus clientes o tu facturación.",
        points: ["Solo lectura por defecto", "Los datos médicos se quedan en Treatflow", "Acceso revocable en cualquier momento"],
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre las integraciones",
    items: [
      {
        question: "¿Qué apps puedo conectar con Treatflow?",
        answer:
          "Treatflow se conecta directamente con Google Calendar (sincronización de citas), Treatflow Pay (pagos online) y asistentes de IA como Claude o ChatGPT mediante el Model Context Protocol (MCP). Y con Zapier llegas a más de 7.000 apps, como Google Sheets, Mailchimp o tu CRM.",
      },
      {
        question: "¿Cómo sincronizo mis citas con Google Calendar?",
        answer:
          "Conectas tu cuenta de Google una sola vez en Ajustes del centro > Apps. A partir de ahí, las citas se sincronizan solas en ambos sentidos: las reservas de Treatflow aparecen en tu Google Calendar y viceversa, y así evitas reservas duplicadas.",
      },
      {
        question: "¿Puedo usar Treatflow con ChatGPT o Claude?",
        answer:
          "Sí. Añade Treatflow como conector en tu asistente de IA e inicia sesión con tu cuenta de Treatflow. Después puedes preguntarle por citas, huecos libres, clientes o facturación. El acceso es de solo lectura por defecto; si lo permites, el asistente también puede crear y mover citas y crear o editar clientes y productos, y cada cambio queda registrado. No puede cancelar ni borrar nada, y la documentación de tratamientos, los formularios y las fotos nunca se comparten.",
      },
      {
        question: "¿Para qué necesito la integración con Zapier?",
        answer:
          "Con Zapier automatizas tus propios procesos sin programar. Cuando entra una nueva cita o se rellena un formulario, Treatflow puede, por ejemplo, añadir una fila en Google Sheets, crear un contacto en tu CRM o enviar un email.",
      },
      {
        question: "¿Pueden los clientes pagar online al reservar?",
        answer:
          "Sí. Con Treatflow Pay, tus clientes pagan una señal o el importe completo al reservar online, procesado de forma segura con Stripe. Tú decides para cada servicio si el pago es obligatorio.",
        feature: "pay",
      },
      {
        question: "¿Están incluidas las integraciones en todos los planes?",
        answer:
          "Las integraciones están incluidas en el plan Booking. Cuando te registras, las encuentras y las activas en el panel, en Ajustes del centro > Apps.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Agenda de citas", description: "Todas las citas en un solo sitio, siempre sincronizadas" },
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Señal o pago completo", feature: "pay" },
      { href: { page: "online-booking" }, title: "Reservas online", description: "Reservas 24/7 con pago" },
      { href: { page: "messaging" }, title: "Recordatorios", description: "Confirmaciones y recordatorios automáticos" },
    ],
  },
  cta: {
    title: "Herramientas conectadas para tu centro",
    description: "Pruébalo gratis 14 días y conecta Google Calendar, Zapier y tu asistente de IA en pocos minutos.",
    secondary: { label: "Todas las funciones", href: { page: "features" } },
  },
};
