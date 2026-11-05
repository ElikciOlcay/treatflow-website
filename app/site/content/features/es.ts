import type { FeaturesOverviewContent } from "./types";

export const featuresEs: FeaturesOverviewContent = {
  meta: {
    title: "Funciones para centros de estética y clínicas",
    description:
      "Agenda de citas, reservas online sin comisión, fichas de clientes, consentimientos digitales, documentación de tratamientos con dictado por voz, recordatorios e integraciones – en un solo software para tu centro.",
    keywords: [
      "software para centros de estética",
      "agenda online para centros de estética",
      "programa de gestión centro de estética",
      "ficha de cliente estética digital",
      "consentimiento informado digital estética",
    ],
  },
  breadcrumb: "Funciones",
  hero: {
    eyebrow: "Resumen de funciones",
    eyebrowIcon: "sparkles",
    title: { before: "Todas las ", highlight: "funciones", after: " de un vistazo" },
    description: "Agenda, reservas, fichas de clientes, formularios y documentación: una sola plataforma para tu centro.",
    chips: ["Todo en uno", "Sin comisiones", "Made in Austria"],
    secondaryCta: { label: "Ver precios", href: { page: "pricing" } },
    tiles: [
      { label: "Agenda", icon: "calendar", gradient: "from-indigo-500 to-purple-600" },
      { label: "Reservas", icon: "link", gradient: "from-rose-500 to-orange-600" },
      { label: "Clientes", icon: "users", gradient: "from-blue-500 to-indigo-600" },
      { label: "Formularios", icon: "clipboard-check", gradient: "from-orange-500 to-amber-600" },
      { label: "Documentación", icon: "file-text", gradient: "from-violet-500 to-purple-600" },
      { label: "Flujos", icon: "workflow", gradient: "from-green-500 to-emerald-600" },
    ],
  },
  grid: {
    title: "{count} funciones clave para tu centro",
    subtitle: "Cada función está pensada para las necesidades de centros de estética y clínicas.",
    more: "Más información",
    items: [
      {
        href: { page: "appointment-calendar" },
        icon: "calendar",
        title: "Agenda de citas",
        description:
          "Planifica profesionales y cabinas en columnas propias. Detecta huecos libres, evita reservas duplicadas y coordina los cambios más rápido.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Columnas por profesional y cabina", "Ocupación de un vistazo", "Arrastrar y soltar"],
      },
      {
        href: { page: "treatflow-pay" },
        icon: "wallet",
        title: "Treatflow Pay",
        description: "Depósito o pago completo directamente al reservar online. Configurable por servicio, 2,69 % por transacción.",
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-200 hover:border-violet-400",
        highlights: ["Depósito o pago completo", "Tarjeta, Apple Pay, Google Pay", "2,69 % por transacción"],
        feature: "pay",
      },
      {
        href: { page: "online-booking" },
        icon: "link",
        title: "Reservas online",
        description:
          "Un enlace de reserva propio para tu centro. Tus clientes reservan a cualquier hora y las confirmaciones y recordatorios se envían solos.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200 hover:border-rose-400",
        highlights: ["Enlace de reserva 24/7", "Confirmaciones automáticas", "Sin reservas duplicadas"],
      },
      {
        href: { page: "client-records" },
        icon: "users",
        title: "Fichas de clientes digitales",
        description:
          "Ficha digital con historial de tratamientos, fotos de antes y después, alergias y notas. Todo en un solo lugar.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200 hover:border-emerald-400",
        highlights: ["Clientes ilimitados", "Fotos y notas", "Conforme al RGPD"],
      },
      {
        href: { page: "forms" },
        icon: "clipboard-check",
        title: "Formularios y anamnesis",
        description:
          "Fichas de anamnesis y consentimientos digitales. Tus clientes los rellenan antes de la cita en su móvil: sin papel y con seguridad jurídica.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200 hover:border-orange-400",
        highlights: ["Anamnesis digital", "Envío previo por enlace", "Sin papel"],
      },
      {
        href: { page: "treatment-documentation" },
        icon: "file-text",
        title: "Documentación de tratamientos",
        description:
          "Documenta cada tratamiento en digital: fotos, productos utilizados, notas y resultados. Ideal para las sesiones de seguimiento.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200 hover:border-blue-400",
        highlights: ["Fotos y productos", "Historial de tratamientos", "Documentación completa"],
      },
      {
        href: { page: "messaging" },
        icon: "bell",
        title: "Recordatorios automáticos",
        description: "Recordatorios por email antes de cada cita. Menos ausencias, de forma totalmente automática.",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200 hover:border-purple-400",
        highlights: ["Recordatorios por email", "Menos ausencias", "Horarios configurables"],
      },
      {
        href: { page: "customer-workflows" },
        icon: "workflow",
        title: "Flujos de clientes",
        description:
          "Automatizaciones en varios pasos para cuidados posteriores, reactivación y seguimiento, con tiempos de espera, condiciones y emails.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Editor visual", "Emails automáticos", "Se detiene con una nueva reserva"],
      },
      {
        href: { page: "shop" },
        icon: "shopping-bag",
        title: "Venta de productos e inventario",
        description:
          "Vende productos de cuidado directamente a tus clientes. Gestiona el inventario, registra las ventas y aumenta tus ingresos adicionales.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200 hover:border-amber-400",
        highlights: ["Venta de productos", "Gestión de inventario", "Más ingresos"],
      },
    ],
  },
  why: {
    title: "¿Por qué Treatflow?",
    points: [
      "Todo en uno: todas las funciones en una sola plataforma",
      "Conforme al RGPD con servidores en la UE",
      "Sin costes ocultos ni comisiones",
      "14 días de prueba gratis, sin tarjeta de crédito",
      "Soporte y puesta en marcha gratuitos",
      "Made in Austria",
    ],
  },
};
