import type { PricingPageContent } from "./types";

export const pricingEs: PricingPageContent = {
  meta: {
    title: "Precios",
    description:
      "Precios de Treatflow: Basic desde 39 €/mes, Booking desde 59 €/mes. Sin comisión por reserva, 14 días gratis, sin tarjeta de crédito.",
    keywords: [
      "software centro de estética precio",
      "programa de gestión para centros de estética precio",
      "agenda online para centros de estética precio",
      "software de reservas sin comisión",
      "software para clínicas estéticas precio",
    ],
  },
  dates: { modified: "2026-11-05", published: "2024-06-01" },
  breadcrumb: "Precios",
  capsule: {
    question: "¿Cuánto cuesta Treatflow?",
    answer:
      "Basic desde 39 €/mes (fichas de clientes, formularios, documentación), Booking desde 59 €/mes (con agenda de citas, reservas online y recordatorios). Sin comisión por reserva, 14 días de prueba gratis.",
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
    subtitle: "Compara los dos planes en detalle y elige el adecuado para tu centro.",
    vatNote: "Todos los precios sin IVA.",
    featureLabel: "Función",
    basicLabel: "Basic (39 €)",
    bookingLabel: "Booking (59 €)",
    rows: [
      { label: "Fichas de clientes", basic: true, booking: true },
      { label: "Formularios con firma digital", basic: true, booking: true },
      { label: "Documentación de tratamientos y notas de voz", basic: true, booking: true },
      { label: "Fotos de antes y después", basic: true, booking: true },
      { label: "Notas y tareas del equipo", basic: true, booking: true },
      { label: "Tienda y productos", basic: true, booking: true },
      { label: "Informes", basic: true, booking: true },
      { label: "Empleados y roles", basic: true, booking: true },
      { label: "Soporte por email", basic: true, booking: true },
      { label: "Agenda de citas (profesionales y cabinas)", basic: false, booking: true },
      { label: "Reservas online sin comisión", basic: false, booking: true },
      { label: "Lista de espera", basic: false, booking: true },
      { label: "Recordatorios por email", basic: false, booking: true },
      { label: "Flujos de clientes", basic: false, booking: true },
      { label: "Códigos de descuento", basic: false, booking: true },
      { label: "Página de reservas multilingüe", basic: false, booking: true },
      { label: "Integraciones (Google Calendar, Zapier, asistentes de IA)", basic: false, booking: true },
      { label: "Soporte prioritario", basic: false, booking: true },
    ],
    cta: "Prueba gratis 14 días",
  },
  why: {
    title: "¿Por qué Treatflow?",
    subtitle: "Precios fijos transparentes en lugar de costes ocultos y comisiones.",
    stats: [
      { value: "0 %", label: "de comisión por reserva" },
      { value: "0 €", label: "de alta" },
      { value: "14 días", label: "de prueba gratis" },
      { value: "Cuando quieras", label: "puedes cancelar" },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre precios",
    subtitle: "Todo lo que necesitas saber sobre los precios de Treatflow.",
    items: [
      {
        question: "¿Cuánto cuesta Treatflow?",
        answer:
          "Treatflow tiene dos planes: Basic desde 39 €/mes para fichas de clientes, formularios y documentación. Booking desde 59 €/mes, que añade agenda de citas, reservas online y recordatorios automáticos. Puedes probar ambos planes gratis durante 14 días.",
      },
      {
        question: "¿Hay costes ocultos?",
        answer:
          "No. Treatflow trabaja con precios fijos transparentes, sin comisiones, costes de alta ni extras ocultos. Pagas exactamente lo que ves.",
      },
      {
        question: "¿Puedo cancelar en cualquier momento?",
        answer:
          "Sí. Con el pago mensual puedes cancelar cuando quieras, con efecto al final del periodo de facturación. No hay permanencia mínima.",
      },
      {
        question: "¿Existe un software gratuito para centros de estética?",
        answer:
          "Algunos proveedores como Fresha ofrecen versiones básicas gratuitas, pero ganan dinero con comisiones de pago y funciones premium. Treatflow ofrece precios fijos transparentes sin costes ocultos, desde 39 €/mes con todas las funciones.",
      },
      {
        question: "¿Merece la pena el plan Booking?",
        answer:
          "Sí, si necesitas reservas online, recordatorios automáticos de citas por email y una agenda digital. Con el plan Booking tendrás muchas menos ausencias y pasarás menos tiempo al teléfono.",
      },
    ],
  },
};
