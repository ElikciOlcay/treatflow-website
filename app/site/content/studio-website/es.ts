import type { StudioWebsiteContent } from "./types";

export const studioWebsiteEs: StudioWebsiteContent = {
  meta: {
    title: "Página web a medida para centros de estética",
    description:
      "Una web a medida para tu centro de estética, clínica láser o negocio de belleza. Profesional, optimizada para móvil y pensada para las reservas. Desde 1.000 euros.",
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
      "Webs profesionales y a medida para centros de estética y negocios de belleza. Optimizadas para reservas y para captar nuevas clientas.",
    serviceType: "Diseño web",
    areaServed: ["ES"],
    priceDescription: "Web a medida desde 1.000 euros",
  },
  emailHref: `mailto:hello@treatflow.io?subject=${encodeURIComponent("Solicitud de proyecto web")}`,
  hero: {
    badge: "Nuevo servicio de Treatflow",
    title: { before: "Webs a medida para", highlight: "centros de estética" },
    lead: "Profesionales, modernas y pensadas para las reservas. Tu web se convierte en tu canal más potente para conseguir nuevas clientas.",
    sub: "No hacemos simplemente webs bonitas. Hacemos webs que generan confianza y solicitudes.",
    primaryCta: "Asesoramiento gratuito",
    emailCta: "Solicitud por e-mail",
    checks: ["Desde 1.000 euros", "Diseño a medida", "Lista en 2-4 semanas"],
  },
  demo: {
    badge: "Ver un ejemplo en vivo (en alemán)",
    title: "Así puede ser la web de tu centro",
    description: "Compruébalo tú misma. Creamos esta web de ejemplo para un centro premium ficticio.",
    href: "/demo/skin-atelier",
    imageAlt: "Skin Atelier – web de demostración de Treatflow para centros de estética (en alemán)",
    overlayLabel: "Web de demostración",
    overlayTitle: "Skin Atelier Múnich",
    hoverCta: "Ver demo",
    cardTitle: "Web de demostración a medida",
    cardText: "Diseño premium con reservas integradas, tratamientos, opiniones y más",
    cardCta: "Ver en vivo",
  },
  why: {
    title: "Por qué tu centro necesita una web profesional",
    description:
      "Tus clientas se informan en internet antes de reservar. Una web profesional es tu tarjeta de visita digital y tu mejor herramienta para captar nuevas clientas.",
    stats: [
      { value: "97%", label: "busca en internet", desc: "Casi todas las clientas buscan un centro en Google antes de reservar." },
      { value: "75%", label: "juzga por la web", desc: "La calidad de tu web influye en la confianza en tu centro." },
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
        desc: "Sin constructores, sin plantillas. Tu centro recibe un diseño que encaja con tu marca y transmite confianza.",
      },
      {
        icon: "smartphone",
        title: "Optimizada para móvil",
        desc: "Más del 80% de tus visitas llegan desde el móvil. Tu web se ve perfecta en cualquier dispositivo.",
      },
      {
        icon: "search",
        title: "Base SEO",
        desc: "Técnica limpia, carga rápida y contenidos optimizados para que encuentren tu centro en Google.",
      },
      {
        icon: "mouse-pointer-click",
        title: "Pensada para reservas",
        desc: "Cada página está diseñada para convertir visitas en solicitudes o reservas.",
      },
      {
        icon: "calendar-days",
        title: "Reservas integradas",
        desc: "Tu enlace de reservas de Treatflow, formulario de contacto o botón de llamada, integrados directamente.",
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
    title: "Ideal en combinación con Treatflow",
    description:
      "Tu web es aún más potente cuando está conectada con Treatflow. El enlace de reservas, los tratamientos y el horario se pueden integrar directamente desde Treatflow.",
    points: [
      "Enlace de reservas online integrado",
      "Tratamientos y precios en tu web",
      "Actualización automática posible",
      "Una experiencia fluida del clic a la cita",
    ],
    boxTitle: "Ventaja para clientes de Treatflow",
    boxText: "Como cliente de Treatflow, al encargar una web recibes además:",
    creditAmount: "200 euros",
    creditLabel: "de saldo Treatflow de regalo",
    creditNote: "Canjeable en tu suscripción de Treatflow. Así ahorras también en el software de tu centro.",
  },
  pricing: {
    title: "Precios transparentes, sin costes ocultos",
    description: "Creemos en precios justos y claros. Sin letra pequeña.",
    badge: "Proyecto web a medida",
    price: { prefix: "desde", amount: "1.000", currency: "euros" },
    note: "Pago único. Sin suscripción por la creación de la web.",
    points: [
      "Diseño a medida según tus deseos",
      "Adaptada a todos los dispositivos",
      "Optimización SEO básica",
      "Estructura orientada a la conversión",
      "Contacto y reservas integrados",
      "Hasta 5 subpáginas incluidas",
      "Aviso legal y política de privacidad",
      "Cifrado SSL",
    ],
    customerLabel: "Clientes de Treatflow:",
    customerText: "200 euros de saldo Treatflow incluidos",
    cta: "Solicitar proyecto web",
    footnote: "Primera reunión sin compromiso. Te asesoramos gratis.",
  },
  process: {
    title: "Así nace la web de tu centro",
    description: "De la primera idea a la web terminada, en cuatro sencillos pasos.",
    steps: [
      { step: "01", title: "Primera reunión", desc: "Conocemos tu centro, entendemos tus objetivos y definimos el alcance." },
      { step: "02", title: "Concepto y diseño", desc: "Creamos un concepto de diseño a medida que encaja con tu marca." },
      { step: "03", title: "Desarrollo", desc: "Tu web se desarrolla de forma profesional y se completa con tus contenidos." },
      { step: "04", title: "Lanzamiento", desc: "Tras tu aprobación, la web se publica. Te acompañamos en el lanzamiento." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre la creación de tu web",
    description: "Todo lo que debes saber antes de encargarla.",
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
          "Totalmente. Tu enlace de reservas de Treatflow, tus tratamientos y tu horario se pueden integrar directamente en la web. Así las nuevas clientas reservan desde tu propia web.",
      },
      {
        question: "¿Cuánto cuesta una web a medida?",
        answer:
          "Las webs a medida empiezan en 1.000 euros. El precio final depende del alcance y de las funciones que necesites. Los clientes de Treatflow reciben además 200 euros de saldo Treatflow.",
      },
      {
        question: "¿También os encargáis del alojamiento y el mantenimiento?",
        answer:
          "Sí, si lo deseas también nos ocupamos del alojamiento y del mantenimiento técnico de tu web. Así no tienes que preocuparte de nada.",
      },
      {
        question: "¿Podré editar la web yo misma más adelante?",
        answer:
          "Según la configuración, ofrecemos soluciones con las que puedes hacer tú misma cambios sencillos como textos e imágenes. Para cambios más grandes, te ayudamos.",
      },
    ],
  },
  cta: {
    title: "¿Lista para la web profesional de tu centro?",
    description: "Creemos juntos la web perfecta para tu centro. Asesoramiento gratuito y sin compromiso.",
    primary: "Asesoramiento gratuito",
    email: "Solicitud por e-mail",
    checks: ["Sin compromiso", "Asesoramiento personal", "Especialistas en belleza"],
  },
};
