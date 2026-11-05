import type { PricingPageContent } from "./types";

export const pricingEs: PricingPageContent = {
  meta: {
    title: "Precios: software para centros de estética desde 39 €/mes",
    description:
      "Precios de Treatflow: Basic desde 39 €/mes y Booking desde 59 €/mes. Sin comisión por reserva, sin permanencia y 14 días gratis sin tarjeta de crédito.",
    keywords: [
      "precio software centro de estética",
      "cuánto cuesta un programa de gestión para centro de estética",
      "precio agenda online centro de estética",
      "software de reservas sin comisiones",
      "precio software clínica estética",
    ],
  },
  dates: { modified: "2026-11-05", published: "2024-06-01" },
  breadcrumb: "Precios",
  capsule: {
    question: "¿Cuánto cuesta Treatflow?",
    answer:
      "Basic desde 39 €/mes (fichas de cliente, formularios y documentación) y Booking desde 59 €/mes (con agenda de citas, reservas online y recordatorios). Sin comisión por reserva y con 14 días de prueba gratis.",
  },
  schema: {
    webPage: {
      name: "Precios: software para centros de estética desde 39 €/mes",
      description: "Precios transparentes de Treatflow: Basic desde 39 €/mes, Booking desde 59 €/mes.",
    },
    priceValidUntil: "2026-12-31",
    offers: [
      { name: "Basic", price: "39", currency: "EUR" },
      { name: "Booking", price: "59", currency: "EUR" },
    ],
  },
  comparison: {
    title: "¿Qué incluye?",
    subtitle: "Compara los dos planes al detalle y elige el que mejor encaja con tu centro.",
    vatNote: "Precios sin IVA.",
    featureLabel: "Función",
    basicLabel: "Basic (39 €)",
    bookingLabel: "Booking (59 €)",
    rows: [
      { label: "Fichas de cliente", basic: true, booking: true },
      { label: "Formularios con firma digital", basic: true, booking: true },
      { label: "Documentación de tratamientos y notas de voz", basic: true, booking: true },
      { label: "Fotos de antes y después", basic: true, booking: true },
      { label: "Notas y tareas para el equipo", basic: true, booking: true },
      { label: "Tienda y productos", basic: true, booking: true },
      { label: "Informes", basic: true, booking: true },
      { label: "Empleados y roles", basic: true, booking: true },
      { label: "Soporte por email", basic: true, booking: true },
      { label: "Agenda de citas (profesionales y cabinas)", basic: false, booking: true },
      { label: "Reservas online sin comisiones", basic: false, booking: true },
      { label: "Lista de espera", basic: false, booking: true },
      { label: "Recordatorios por email", basic: false, booking: true },
      { label: "Flujos de clientes", basic: false, booking: true },
      { label: "Códigos de descuento", basic: false, booking: true },
      { label: "Página de reservas en varios idiomas", basic: false, booking: true },
      { label: "Integraciones (Google Calendar, Zapier, asistentes de IA)", basic: false, booking: true },
      { label: "Soporte prioritario", basic: false, booking: true },
    ],
    cta: "Prueba gratis 14 días",
  },
  why: {
    title: "¿Por qué Treatflow?",
    subtitle: "Una cuota fija y transparente, sin costes ocultos ni comisiones.",
    stats: [
      { value: "0 %", label: "de comisión por reserva" },
      { value: "0 €", label: "de cuota de alta" },
      { value: "14 días", label: "de prueba gratis" },
      { value: "Sin permanencia", label: "cancela cuando quieras" },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre precios",
    subtitle: "Todo lo que necesitas saber sobre los precios de Treatflow.",
    items: [
      {
        question: "¿Cuánto cuesta Treatflow?",
        answer:
          "Treatflow tiene dos planes: Basic, desde 39 €/mes, para fichas de cliente, formularios y documentación; y Booking, desde 59 €/mes, que añade agenda de citas, reservas online y recordatorios automáticos. Puedes probar los dos gratis durante 14 días.",
      },
      {
        question: "¿Hay costes ocultos?",
        answer:
          "No. Treatflow funciona con una cuota fija y transparente: sin comisiones, sin cuota de alta y sin extras ocultos. Pagas exactamente lo que ves.",
      },
      {
        question: "¿Puedo cancelar en cualquier momento?",
        answer:
          "Sí. Con el pago mensual puedes darte de baja cuando quieras, con efecto al final del periodo de facturación. Sin permanencia.",
      },
      {
        question: "¿Existe un software gratuito para centros de estética?",
        answer:
          "Algunos proveedores, como Fresha, tienen versiones básicas gratuitas, pero ganan dinero con comisiones sobre los pagos y funciones premium. Treatflow apuesta por una cuota fija y transparente, sin costes ocultos, desde 39 €/mes con todas las funciones.",
      },
      {
        question: "¿Merece la pena el plan Booking?",
        answer:
          "Sí, si necesitas reservas online, recordatorios automáticos de citas por email y una agenda digital. Con el plan Booking tendrás muchos menos plantones y pasarás mucho menos tiempo al teléfono.",
      },
    ],
  },
};
