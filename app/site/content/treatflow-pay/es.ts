import type { TreatflowPayContent } from "./types";

export const treatflowPayEs: TreatflowPayContent = {
  meta: {
    title: "Treatflow Pay: cobra una señal o el pago completo al reservar online",
    description:
      "Con Treatflow Pay, tus clientes pagan una señal o el precio completo al reservar online. Configurable por servicio, 2,69 % por transacción.",
    keywords: [
      "Treatflow Pay",
      "cobrar señal reserva online",
      "señal para citas centro de estética",
      "pago por adelantado citas",
      "evitar plantones con señal",
      "pagos online centro de estética",
      "pagos Stripe salón de belleza",
    ],
  },
  dates: { modified: "2026-10-02", published: "2026-10-02" },
  schema: {
    id: "treatflow-pay",
    webPage: {
      name: "Treatflow Pay: cobra una señal o el pago completo al reservar online",
      description:
        "Con Treatflow Pay, tus clientes pagan una señal o el precio completo al reservar online. Configurable por servicio, 2,69 % por transacción.",
    },
  },
  breadcrumb: "Treatflow Pay",
  hero: {
    eyebrow: "Treatflow Pay",
    eyebrowIcon: "wallet",
    title: { before: "Señal o pago completo ", highlight: "al reservar" },
    description: "Decide para cada servicio si tu cliente paga online una señal, el precio completo o nada.",
    chips: ["Por servicio", "Tarjeta, Apple Pay, Google Pay", "2,69 %"],
    secondaryCta: { label: "Ver las reservas online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "¿Qué es Treatflow Pay?",
        answer:
          "Treatflow Pay es el pago online en el momento de reservar la cita. Para cada servicio, el centro decide si no cobra nada, si pide una señal (en porcentaje o como importe fijo) o si cobra el pago completo. Se paga con tarjeta de crédito o débito, Apple Pay o Google Pay en la pasarela de pago de Stripe. La comisión es del 2,69 % por transacción.",
      },
    ],
    image: {
      src: "/images/product-updates/treatflow-pay.png",
      alt: "Treatflow Pay: señal o pago completo al reservar online",
    },
  },
  understand: {
    title: "Menos plantones y cobros claros",
    description: "Tú decides en cada tratamiento qué se paga online, y tu cliente paga en el mismo momento de reservar.",
    items: [
      {
        icon: "percent",
        title: "Configuración por servicio",
        text: "Sin pago online, con señal o con pago completo. La señal puede ser un porcentaje o un importe fijo en euros.",
      },
      {
        icon: "credit-card",
        title: "Pago al reservar",
        text: "Tarjetas de crédito y débito en la pasarela de pago de Stripe, y Apple Pay y Google Pay si el dispositivo del cliente los admite.",
      },
      {
        icon: "banknote",
        title: "2,69 % por transacción",
        text: "Una única comisión, todo incluido. Treatflow no cobra nada más sobre el pago.",
      },
    ],
  },
  howItWorks: {
    description: "Lo conectas una vez y después eliges para cada servicio.",
    steps: [
      { title: "Conecta Treatflow Pay", text: "En Apps configuras Treatflow Pay y conectas tu cuenta de Stripe. Desde ese momento ya puedes cobrar al reservar." },
      { title: "Elige para cada servicio", text: "Para cada tratamiento: sin pago online, una señal en porcentaje o como importe fijo, o el precio completo." },
      { title: "Tu cliente paga", text: "La reserva se confirma con el pago. Si pides una señal, el resto se paga en el centro." },
    ],
  },
  cards: {
    title: "Todas las opciones",
    description: "Esto es lo que Treatflow Pay añade a tus reservas online.",
    items: [
      { icon: "wallet", title: "Sin pago, señal o pago completo", text: "Cada servicio tiene su propia opción. Los servicios sin pago online se siguen reservando como hasta ahora.", points: ["Sin pago online", "Señal", "Pago completo"] },
      { icon: "percent", title: "Señal en porcentaje", text: "Por ejemplo, el 30 % del precio del servicio. El porcentaje se aplica a ese tratamiento.", points: ["Porcentaje del precio", "Por servicio", "Resto en el centro"] },
      { icon: "banknote", title: "Señal como importe fijo", text: "Un importe fijo en euros, como máximo el precio del servicio.", points: ["Importe fijo", "Limitado al precio", "Resto en el centro"] },
      { icon: "credit-card", title: "Tarjetas y monederos digitales", text: "Pago en la pasarela de Stripe con tarjeta, Apple Pay o Google Pay.", points: ["Tarjeta de crédito y débito", "Apple Pay", "Google Pay"] },
      { icon: "shield-check", title: "2,69 % todo incluido", text: "Una única comisión por transacción. Importe mínimo: 0,50 €.", points: ["2,69 % por pago", "Desde 0,50 €", "Todo incluido"] },
      { icon: "layers", title: "Varios servicios", text: "Los importes de una misma reserva se suman, como máximo hasta el precio de la reserva.", points: ["Suma de los servicios", "Limitado al precio", "Configurable por servicio"] },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre Treatflow Pay",
    items: [
      {
        question: "¿Qué puedo configurar con Treatflow Pay?",
        answer:
          "Para cada servicio eliges: sin pago online, una señal o el pago completo. La señal puede ser un porcentaje o un importe fijo. Si tu cliente reserva varios servicios, los importes se suman, como máximo hasta el precio de la reserva.",
      },
      {
        question: "¿Qué métodos de pago hay?",
        answer:
          "Tu cliente paga en la pasarela de pago de Stripe con tarjeta de crédito o débito. Apple Pay y Google Pay aparecen si su dispositivo los admite.",
      },
      {
        question: "¿Cuánto cuesta Treatflow Pay?",
        answer: "2,69 % por transacción, todo incluido. Treatflow no cobra ninguna comisión adicional sobre el pago. El importe mínimo es de 0,50 €.",
      },
      {
        question: "¿Sirve Treatflow Pay para cobrar en el centro?",
        answer:
          "No. Treatflow Pay es para las reservas online. En el centro sigues cobrando como siempre, por ejemplo con tu datáfono.",
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
    title: "Cobra la señal en el momento de reservar",
    description:
      "Pruébalo gratis 14 días. Después activas Treatflow Pay en Apps y solo pagas comisión por los cobros reales.",
    secondary: { label: "Ver las reservas online", href: { page: "online-booking" } },
  },
};
