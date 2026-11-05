import type { TreatflowPayContent } from "./types";

export const treatflowPayEs: TreatflowPayContent = {
  meta: {
    title: "Treatflow Pay – depósito y pago completo al reservar online",
    description:
      "Treatflow Pay: tus clientes pagan un depósito o el precio completo al reservar online. Configurable por servicio, 2,69 % por transacción.",
    keywords: [
      "Treatflow Pay",
      "depósito reserva online",
      "pagos online centro de estética",
      "señal para citas",
      "pago anticipado de citas",
      "pagos Stripe salón de belleza",
    ],
  },
  dates: { modified: "2026-10-02", published: "2026-10-02" },
  schema: {
    id: "treatflow-pay",
    webPage: {
      name: "Treatflow Pay – depósito y pago completo al reservar online",
      description:
        "Treatflow Pay: tus clientes pagan un depósito o el precio completo al reservar online. Configurable por servicio, 2,69 % por transacción.",
    },
  },
  breadcrumb: "Treatflow Pay",
  hero: {
    eyebrow: "Treatflow Pay",
    eyebrowIcon: "wallet",
    title: { before: "Depósito o pago completo ", highlight: "al reservar" },
    description: "Decide para cada servicio si la clienta paga online un depósito, el precio completo o nada.",
    chips: ["Por servicio", "Tarjeta, Apple Pay, Google Pay", "2,69 %"],
    secondaryCta: { label: "Ver las reservas online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "¿Qué es Treatflow Pay?",
        answer:
          "Treatflow Pay es el pago online en el momento de reservar la cita. Para cada servicio, el centro puede pedir ningún pago, un depósito en porcentaje o como importe fijo, o el pago completo. Se paga con tarjeta de crédito o débito, además de Apple Pay y Google Pay en el checkout de Stripe. La comisión es del 2,69 % por transacción.",
      },
    ],
    image: {
      src: "/images/product-updates/treatflow-pay.png",
      alt: "Treatflow Pay – depósito o pago completo al reservar online",
    },
  },
  understand: {
    title: "Menos ausencias, cobros claros",
    description: "Tú decides en cada tratamiento qué se paga online. La clienta paga directamente durante la reserva.",
    items: [
      {
        icon: "percent",
        title: "Configuración por servicio",
        text: "Sin pago online, depósito o pago completo. El depósito es un porcentaje o un importe fijo en euros.",
      },
      {
        icon: "credit-card",
        title: "Pago al reservar",
        text: "Tarjetas de crédito y débito en el checkout de Stripe. Apple Pay y Google Pay si el dispositivo de la clienta los admite.",
      },
      {
        icon: "banknote",
        title: "2,69 % por transacción",
        text: "Una sola comisión, todo incluido. Sin ninguna comisión adicional de Treatflow sobre el pago.",
      },
    ],
  },
  howItWorks: {
    description: "Conéctalo una vez y después elige para cada servicio.",
    steps: [
      { title: "Conecta Treatflow Pay", text: "En Apps configuras Treatflow Pay y conectas tu cuenta de Stripe. A partir de ese momento puedes cobrar al reservar." },
      { title: "Elige para cada servicio", text: "Para cada tratamiento: sin pago online, depósito en porcentaje o como importe fijo, o el precio completo." },
      { title: "La clienta paga", text: "La reserva se completa con el pago. Con un depósito, el resto se paga en el centro." },
    ],
  },
  cards: {
    title: "Todas las opciones",
    description: "Esto es lo que Treatflow Pay añade a tus reservas online.",
    items: [
      { icon: "wallet", title: "Sin pago, depósito o pago completo", text: "Cada servicio tiene su propio modo. Los servicios sin pago online se siguen reservando como hasta ahora.", points: ["Sin pago online", "Depósito", "Pago completo"] },
      { icon: "percent", title: "Depósito en porcentaje", text: "Por ejemplo, el 30 % del precio del servicio. El porcentaje se aplica a ese tratamiento.", points: ["Porcentaje del precio", "Por servicio", "Resto en el centro"] },
      { icon: "banknote", title: "Depósito como importe fijo", text: "Un importe fijo en euros, como máximo el precio del servicio.", points: ["Importe fijo", "Limitado al precio", "Resto en el centro"] },
      { icon: "credit-card", title: "Tarjetas y monederos digitales", text: "Pago en el checkout de Stripe con tarjeta, Apple Pay y Google Pay.", points: ["Tarjeta de crédito y débito", "Apple Pay", "Google Pay"] },
      { icon: "shield-check", title: "2,69 % todo incluido", text: "Una sola comisión por transacción. Importe mínimo 0,50 €.", points: ["2,69 % por pago", "Desde 0,50 €", "Todo incluido"] },
      { icon: "layers", title: "Varios servicios", text: "Los importes de una misma reserva se suman, como máximo hasta el precio de la reserva.", points: ["Suma de los servicios", "Limitado al precio", "Configurable por servicio"] },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre Treatflow Pay",
    items: [
      {
        question: "¿Qué puedo configurar con Treatflow Pay?",
        answer:
          "Para cada servicio eliges: sin pago online, un depósito o el pago completo. El depósito es un porcentaje o un importe fijo. Si la clienta reserva varios servicios, los importes se suman, como máximo hasta el precio de la reserva.",
      },
      {
        question: "¿Qué métodos de pago hay?",
        answer:
          "La clienta paga en el checkout de Stripe con tarjeta de crédito o débito. Apple Pay y Google Pay aparecen si su dispositivo los admite.",
      },
      {
        question: "¿Cuánto cuesta Treatflow Pay?",
        answer: "2,69 % por transacción, todo incluido. No hay ninguna comisión adicional de Treatflow sobre el pago. El importe mínimo es de 0,50 €.",
      },
      {
        question: "¿Sirve Treatflow Pay también para cobrar en el centro?",
        answer:
          "No. Treatflow Pay es para las reservas online. Los cobros en el centro siguen como siempre, por ejemplo con tu datáfono.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Reservas online", description: "Enlace de reservas con Treatflow Pay" },
      { href: { page: "integrations" }, title: "Integraciones", description: "Stripe, Google Calendar y más" },
    ],
  },
  cta: {
    title: "El depósito, directamente al reservar",
    description:
      "Pruébalo gratis 14 días. Después conectas Treatflow Pay en Apps y la comisión solo se aplica a pagos reales.",
    secondary: { label: "Ver las reservas online", href: { page: "online-booking" } },
  },
};
