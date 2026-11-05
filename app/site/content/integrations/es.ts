import type { IntegrationsContent } from "./types";

export const integrationsEs: IntegrationsContent = {
  meta: {
    title: "Integraciones y apps para tu centro de estética",
    description:
      "Conecta Treatflow con Google Calendar, Zapier y asistentes de IA como Claude o ChatGPT, y cobra online con Treatflow Pay: sincronización de agenda, automatizaciones y pagos en una sola plataforma.",
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
    description: "Menos trabajo duplicado: los datos fluyen entre tus herramientas.",
    items: [
      {
        icon: "refresh",
        title: "Menos trabajo duplicado",
        text: "Introduce clientes y citas una sola vez: tu agenda y las herramientas conectadas se mantienen al día.",
      },
      {
        icon: "workflow",
        title: "Procesos automáticos",
        text: "Las entradas de la agenda y los flujos de Zapier funcionan en segundo plano.",
      },
      {
        icon: "shield-check",
        title: "Conforme al RGPD",
        text: "Conexiones seguras y tratamiento de datos conforme a la normativa europea. Los datos médicos nunca salen de Treatflow.",
      },
    ],
  },
  howItWorks: {
    description: "Conectado en tres pasos, sin conocimientos técnicos.",
    steps: [
      { title: "Elige la app", text: "Selecciona la integración que necesitas en Ajustes del centro > Apps." },
      { title: "Conecta tu cuenta", text: "Inicia sesión una sola vez con el proveedor, por ejemplo Google, Zapier, Claude o ChatGPT." },
      { title: "Sincronización automática", text: "A partir de ahora, citas, clientes y flujos trabajan juntos." },
    ],
  },
  cards: {
    title: "Estas apps están integradas",
    description: "Desde la sincronización de la agenda y las automatizaciones hasta los asistentes de IA y los pagos online.",
    items: [
      {
        icon: "calendar",
        title: "Google Calendar",
        text: "Sincronización bidireccional: Treatflow y Google se mantienen alineados en tiempo real.",
        points: ["Sincronización bidireccional", "Sin reservas duplicadas", "Lo personal y el centro por separado"],
      },
      {
        icon: "wallet",
        title: "Treatflow Pay",
        text: "Anticipos o pagos completos en las reservas online, procesados de forma segura con Stripe.",
        points: ["Anticipos", "Pago completo por adelantado", "2,69 % transparente"],
        feature: "pay",
      },
      {
        icon: "zap",
        title: "Zapier",
        text: "Conecta más de 7.000 apps: flujos automáticos para nuevas citas y formularios.",
        points: ["Más de 7.000 apps", "Webhooks", "Sin código"],
      },
      {
        icon: "bot",
        title: "Asistentes de IA (MCP)",
        text: "Conecta Claude, ChatGPT y otros asistentes y pregunta por citas, clientes o facturación.",
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
          "Treatflow se conecta directamente con Google Calendar (sincronización de citas), Treatflow Pay (pagos online) y asistentes de IA como Claude o ChatGPT a través del Model Context Protocol (MCP). Con Zapier llegas además a más de 7.000 apps, como Google Sheets, Mailchimp o tu CRM.",
      },
      {
        question: "¿Cómo sincronizo mis citas con Google Calendar?",
        answer:
          "Conectas tu cuenta de Google una sola vez en Ajustes del centro > Apps. A partir de ahí, las citas se sincronizan automáticamente en ambas direcciones: las reservas de Treatflow aparecen en tu Google Calendar y viceversa, así evitas reservas duplicadas.",
      },
      {
        question: "¿Puedo usar Treatflow con ChatGPT o Claude?",
        answer:
          "Sí. Añade Treatflow como conector en tu asistente de IA e inicia sesión con tu cuenta de Treatflow. Después puedes preguntar por citas, huecos libres, clientes o facturación. El acceso es de solo lectura por defecto; si lo permites, el asistente también puede crear y mover citas, y cada cambio queda registrado. La documentación de tratamientos, los formularios y las fotos nunca se comparten.",
      },
      {
        question: "¿Para qué necesito la integración con Zapier?",
        answer:
          "Con Zapier automatizas tus propios flujos de trabajo sin programar. Cuando llega una nueva cita o se rellena un formulario, Treatflow puede, por ejemplo, añadir una fila en Google Sheets, crear un contacto en tu CRM o enviar un email.",
      },
      {
        question: "¿Pueden los clientes pagar online al reservar?",
        answer:
          "Sí. Con Treatflow Pay, tus clientes pagan un anticipo o el importe completo al reservar online, procesado de forma segura con Stripe. Tú decides para cada servicio si el pago es obligatorio.",
        feature: "pay",
      },
      {
        question: "¿Están incluidas las integraciones en todos los planes?",
        answer:
          "Las integraciones están incluidas en el plan Booking. Tras registrarte, las encuentras y activas en el panel, en Ajustes del centro > Apps.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Agenda de citas", description: "Todas las citas en un lugar, siempre sincronizadas" },
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Anticipo o pago completo", feature: "pay" },
      { href: { page: "online-booking" }, title: "Reservas online", description: "Reservas 24/7 con pago" },
      { href: { page: "messaging" }, title: "Recordatorios", description: "Confirmaciones y recordatorios automáticos" },
    ],
  },
  cta: {
    title: "Herramientas conectadas para tu centro",
    description: "Pruébalo gratis 14 días: conecta Google Calendar, Zapier y tu asistente de IA en pocos minutos.",
    secondary: { label: "Todas las funciones", href: { page: "features" } },
  },
};
