import type { StudioWebsiteContent } from "./types";

export const studioWebsiteEs: StudioWebsiteContent = {
  meta: {
    title: "Diseño web a medida para centros de estética",
    description:
      "Una web a medida para tu centro de estética, clínica láser o negocio de belleza: profesional, adaptada al móvil y pensada para conseguir reservas. Desde 1.000 euros.",
    keywords: [
      "página web centro de estética",
      "diseño web centro de estética",
      "web para salón de belleza",
      "página web clínica láser",
      "web para salón de uñas",
      "web micropigmentación",
    ],
  },
  schema: {
    serviceName: "Página web a medida para centros de estética",
    serviceDescription:
      "Webs profesionales y a medida para centros de estética y negocios de belleza, pensadas para conseguir reservas y captar nuevos clientes.",
    serviceType: "Diseño web",
    areaServed: ["ES"],
    priceDescription: "Web a medida desde 1.000 euros",
  },
  emailHref: `mailto:hello@treatflow.io?subject=${encodeURIComponent("Solicitud de proyecto web")}`,
  hero: {
    badge: "Nuevo servicio de Treatflow",
    title: { before: "Webs a medida para", highlight: "centros de estética" },
    lead: "Profesionales, modernas y pensadas para conseguir reservas. Tu web se convierte en tu mejor canal para captar nuevos clientes.",
    sub: "No hacemos solo webs bonitas: hacemos webs que generan confianza y solicitudes.",
    primaryCta: "Asesoramiento gratuito",
    emailCta: "Escríbenos por email",
    checks: ["Desde 1.000 euros", "Diseño a medida", "Lista en 2-4 semanas"],
  },
  demo: {
    badge: "Ejemplo en directo (en alemán)",
    title: "Así puede ser la web de tu centro",
    description: "Compruébalo con tus propios ojos: hemos creado esta web de ejemplo para un centro premium ficticio.",
    href: "/demo/skin-atelier",
    imageAlt: "Skin Atelier: web de demostración de Treatflow para centros de estética (en alemán)",
    overlayLabel: "Web de demostración",
    overlayTitle: "Skin Atelier Múnich",
    hoverCta: "Ver demo",
    cardTitle: "Web de demostración a medida",
    cardText: "Diseño premium con reservas integradas, tratamientos, reseñas y más",
    cardCta: "Ver en directo",
  },
  why: {
    title: "Por qué tu centro necesita una web profesional",
    description:
      "Tus clientes se informan en internet antes de reservar. Una web profesional es tu tarjeta de presentación digital y tu mejor herramienta para captar nuevos clientes.",
    stats: [
      { value: "97%", label: "busca en internet", desc: "Casi todo el mundo busca un centro en Google antes de reservar." },
      { value: "75%", label: "juzga por la web", desc: "La calidad de tu web influye en la confianza que inspira tu centro." },
      { value: "3x", label: "más solicitudes", desc: "Los centros con una web profesional reciben muchas más solicitudes de reserva." },
    ],
  },
  services: {
    title: "Qué incluye tu web",
    description: "Cada web se diseña a medida para tu centro. Sin plantillas, sin concesiones.",
    items: [
      {
        icon: "palette",
        title: "Diseño a medida",
        desc: "Sin constructores web ni plantillas. Tu centro tiene un diseño que encaja con tu marca y transmite confianza.",
      },
      {
        icon: "smartphone",
        title: "Adaptada al móvil",
        desc: "Más del 80 % de tus visitas llegan desde el móvil. Tu web se ve perfecta en cualquier dispositivo.",
      },
      {
        icon: "search",
        title: "SEO de base",
        desc: "Código limpio, carga rápida y contenidos optimizados para que te encuentren en Google.",
      },
      {
        icon: "mouse-pointer-click",
        title: "Pensada para reservas",
        desc: "Cada página está pensada para convertir visitas en solicitudes o reservas.",
      },
      {
        icon: "calendar-days",
        title: "Reservas integradas",
        desc: "Tu enlace de reservas de Treatflow, un formulario de contacto o un botón de llamada, integrados directamente.",
      },
      {
        icon: "globe",
        title: "Para cualquier especialidad",
        desc: "Estética, láser, Hydrafacial, micropigmentación, microneedling, uñas, pestañas y más.",
      },
    ],
  },
  advantage: {
    badge: "Ventaja exclusiva",
    title: "La combinación perfecta con Treatflow",
    description:
      "Tu web rinde aún más conectada con Treatflow: el enlace de reservas, los tratamientos y el horario se integran directamente desde Treatflow.",
    points: [
      "Enlace de reservas online integrado",
      "Tratamientos y precios en tu web",
      "Actualización automática posible",
      "Del clic a la cita, sin fricciones",
    ],
    boxTitle: "Ventaja para clientes de Treatflow",
    boxText: "Si ya usas Treatflow y nos encargas tu web, te llevas además:",
    creditAmount: "200 euros",
    creditLabel: "de saldo Treatflow de regalo",
    creditNote: "Se descuenta de tu suscripción a Treatflow, así ahorras también en el software de tu centro.",
  },
  pricing: {
    title: "Precios transparentes, sin costes ocultos",
    description: "Precios justos y claros, sin letra pequeña.",
    badge: "Proyecto web a medida",
    price: { prefix: "desde", amount: "1.000", currency: "euros" },
    note: "Pago único. La creación de la web no lleva cuota mensual.",
    points: [
      "Diseño a medida, a tu gusto",
      "Adaptada a todos los dispositivos",
      "SEO básico",
      "Estructura orientada a la conversión",
      "Contacto y reservas integrados",
      "Hasta 5 páginas incluidas",
      "Aviso legal y política de privacidad",
      "Cifrado SSL",
    ],
    customerLabel: "Clientes de Treatflow:",
    customerText: "200 euros de saldo Treatflow incluidos",
    cta: "Solicitar proyecto web",
    footnote: "Primera reunión sin compromiso y asesoramiento gratuito.",
  },
  process: {
    title: "Así nace la web de tu centro",
    description: "De la primera idea a la web terminada, en cuatro sencillos pasos.",
    steps: [
      { step: "01", title: "Primera reunión", desc: "Conocemos tu centro, entendemos tus objetivos y definimos el alcance." },
      { step: "02", title: "Concepto y diseño", desc: "Creamos un concepto de diseño a medida que encaja con tu marca." },
      { step: "03", title: "Desarrollo", desc: "Desarrollamos tu web de forma profesional y la completamos con tus contenidos." },
      { step: "04", title: "Lanzamiento", desc: "Cuando nos das el visto bueno, publicamos la web y te acompañamos en el lanzamiento." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre la creación de tu web",
    description: "Todo lo que necesitas saber antes de encargarla.",
    items: [
      {
        question: "¿Cuánto se tarda en crear la web de mi centro?",
        answer:
          "Normalmente tu web está lista en 2-4 semanas. El plazo exacto depende del alcance y de cuándo nos entregues tus contenidos.",
      },
      {
        question: "¿Necesito tener ya textos y fotos?",
        answer:
          "No, no es imprescindible. Te ayudamos con los textos y te asesoramos sobre las imágenes. Unas fotos profesionales de tu centro son lo ideal, pero encontraremos juntos la mejor solución.",
      },
      {
        question: "¿Puedo usar mi dominio actual?",
        answer:
          "Sí, por supuesto. Si ya tienes un dominio, publicamos allí tu nueva web. Si no, te ayudamos a elegirlo y registrarlo.",
      },
      {
        question: "¿Se puede combinar la web con Treatflow?",
        answer:
          "Totalmente. Tu enlace de reservas de Treatflow, tus tratamientos y tu horario se pueden integrar directamente en la web. Así tus nuevos clientes reservan desde tu propia web.",
      },
      {
        question: "¿Cuánto cuesta una web a medida?",
        answer:
          "Las webs a medida empiezan en 1.000 euros. El precio final depende del alcance y de las funciones que necesites. Los clientes de Treatflow reciben además 200 euros de saldo Treatflow.",
      },
      {
        question: "¿También os encargáis del alojamiento y el mantenimiento?",
        answer:
          "Sí, si quieres también nos ocupamos del alojamiento y del mantenimiento técnico de tu web, para que no tengas que preocuparte de nada.",
      },
      {
        question: "¿Podré hacer cambios en la web por mi cuenta?",
        answer:
          "Según la configuración, te ofrecemos soluciones para que puedas cambiar por tu cuenta cosas sencillas como textos e imágenes. Para cambios más grandes, te echamos una mano.",
      },
    ],
  },
  cta: {
    title: "Dale a tu centro la web que se merece",
    description: "Creemos juntos la web perfecta para tu centro. Asesoramiento gratuito y sin compromiso.",
    primary: "Asesoramiento gratuito",
    email: "Escríbenos por email",
    checks: ["Sin compromiso", "Asesoramiento personal", "Especialistas en belleza"],
  },
};
