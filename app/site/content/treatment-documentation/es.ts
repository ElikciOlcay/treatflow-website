import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationEs: TreatmentDocumentationContent = {
  meta: {
    title: "Documentación digital de tratamientos para centros de estética",
    description:
      "Documentación digital de tratamientos para centros de estética y clínicas estéticas: fotos de antes y después, notas, parámetros de aparatología e historial en la ficha del cliente. Dicta las notas en vez de escribirlas.",
    keywords: [
      "ficha de tratamiento estética",
      "historial de tratamientos centro de estética",
      "software documentación de tratamientos",
      "fotos antes y después estética",
      "dictar notas de tratamiento",
      "historia clínica estética digital",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "behandlungsdokumentation",
    webPage: {
      name: "Documentación digital de tratamientos para centros de estética",
      description: "Documentación digital de tratamientos con fotos de antes y después, notas e historial.",
    },
  },
  breadcrumb: "Documentación",
  hero: {
    eyebrow: "Documentación de tratamientos",
    eyebrowIcon: "file-text",
    title: { before: "Documenta tus tratamientos en ", highlight: "digital" },
    description:
      "Fotos, notas y parámetros en un solo lugar, con ayuda de la IA. En la siguiente cita sabrás al momento qué se hizo.",
    chips: ["Fotos de antes y después", "Dictado con IA", "Firma digital"],
    secondaryCta: { label: "Formularios digitales", href: { page: "forms" } },
    capsules: [
      {
        question: "¿Qué software sirve para documentar tratamientos estéticos?",
        answer:
          "Treatflow documenta los tratamientos en digital con fotos de antes y después, parámetros, notas y firma. Una documentación completa es especialmente importante en tratamientos con aparatología como láser o IPL, y Treatflow está pensado justo para ese día a día.",
      },
      {
        question: "¿Cómo documento la evolución de los tratamientos estéticos?",
        answer:
          "Cada sesión tiene su registro con parámetros, productos, fotos y notas, y el historial queda en la ficha de cliente. Puedes dictar las notas: Treatflow las pasa a texto y, si quieres, lo pule.",
      },
    ],
    image: {
      src: "/images/mockups/es/dokumentation-hero.png",
      alt: "Documentación de tratamientos de Treatflow con fotos y notas",
    },
  },
  understand: {
    title: "Cada tratamiento, bien documentado",
    description:
      "Después de cada sesión tienes un registro digital con fotos, notas y parámetros, guardado en la ficha del cliente.",
    items: [
      {
        icon: "camera",
        title: "Fotos de antes y después",
        text: "Registra la evolución con fotos y enséñale a tu cliente cómo avanza el tratamiento.",
      },
      {
        icon: "brain",
        title: "Con la voz o con IA",
        text: "Dicta tus notas: Treatflow las pasa a texto y, si quieres, lo pule con IA. Menos teclear y más tiempo para tratar.",
      },
      {
        icon: "shield",
        title: "Completa y trazable",
        text: "Cada registro se guarda con fecha, parámetros y, si quieres, firma en la ficha del cliente, para que puedas acreditar qué se hizo si más adelante surgen dudas.",
      },
    ],
  },
  howItWorks: {
    description: "Documentación lista en tres pasos.",
    steps: [
      { title: "Abre la documentación", text: "Ábrela directamente desde la cita o la ficha del cliente: el cliente y el tratamiento ya vienen rellenados." },
      { title: "Añade fotos y notas", text: "Sube fotos, introduce los parámetros del tratamiento y dicta o escribe tus notas. Si hace falta, pide la firma del cliente." },
      { title: "Guardado y siempre a mano", text: "Todo se guarda automáticamente en la ficha del cliente. En la siguiente cita ves al momento qué se hizo la última vez." },
    ],
  },
  cards: {
    title: "Qué incluye",
    description: "Todo lo que necesitas para documentar tus tratamientos con orden y sin papeleo.",
    items: [
      { icon: "camera", title: "Fotos de antes y después", text: "Guarda las fotos junto al tratamiento y compáralas en orden cronológico.", points: ["Junto al tratamiento", "En la ficha del cliente", "Conforme al RGPD"] },
      { icon: "mic", title: "Dictado por voz", text: "Habla en vez de escribir: ideal durante el tratamiento o justo al terminar.", points: ["Manos libres", "Rápido", "Texto claro"] },
      { icon: "brain", title: "Asistente de IA", text: "Si quieres, pule y ordena el texto dictado; tú revisas el registro antes de guardarlo.", points: ["Pulir el texto", "Estructura", "Menos teclear"] },
      { icon: "file-text", title: "Parámetros y productos", text: "Registra con orden los valores de la aparatología, los productos y los ajustes.", points: ["Láser/IPL", "Productos", "Cuidados posteriores"] },
      { icon: "pen-tool", title: "Firma digital", text: "Recoge el consentimiento o la conformidad del cliente en la tablet.", points: ["En la tablet", "En la ficha", "Trazable"] },
      { icon: "shield", title: "Archivo seguro", text: "Toda la documentación se guarda en servidores de la UE y se puede consultar en cualquier momento.", points: ["Servidores en la UE", "Cifrado", "Siempre disponible"] },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre la documentación",
    items: [
      {
        question: "¿Qué software sirve para documentar tratamientos estéticos?",
        answer:
          "Treatflow documenta los tratamientos en digital con fotos de antes y después, parámetros, notas y firma. Una documentación completa es especialmente importante en tratamientos con aparatología como láser o IPL, y Treatflow está pensado justo para ese día a día.",
      },
      {
        question: "¿Cómo documento la evolución de los tratamientos estéticos?",
        answer:
          "Cada sesión tiene su registro con parámetros, números de lote, fotos y notas. El historial de la ficha de cliente muestra la evolución a lo largo de las citas. Puedes dictar las notas: Treatflow las pasa a texto y, si quieres, lo pule con IA.",
      },
      {
        question: "¿Es obligatoria la documentación de tratamientos en un centro de estética?",
        answer:
          "Depende del país y del tratamiento. En los tratamientos con aparatología como láser o IPL, normalmente se espera una documentación completa. En los demás es muy recomendable, por seguridad jurídica, por calidad y por la satisfacción de tus clientes.",
      },
      {
        question: "¿Qué debe incluir una documentación profesional de tratamientos?",
        answer:
          "Tipo y fecha del tratamiento, productos y parámetros, fotos de antes y después, valoración de la piel, notas de evolución, recomendaciones de cuidados posteriores y, opcionalmente, la firma del cliente.",
      },
      {
        question: "¿Cómo se hacen bien las fotos de antes y después?",
        answer:
          "Siempre en las mismas condiciones (luz, ángulo y distancia). En Treatflow guardas las fotos directamente en la documentación y quedan asociadas a la ficha del cliente.",
      },
      {
        question: "¿Qué debo documentar en los tratamientos de láser e IPL?",
        answer:
          "Normalmente la consulta, el consentimiento, los ajustes del equipo (p. ej., energía, frecuencia, duración del pulso), la zona tratada, la reacción de la piel y las recomendaciones de cuidados posteriores.",
      },
      {
        question: "¿Puedo dictar las notas del tratamiento en lugar de escribirlas?",
        answer:
          "Sí. En la documentación dictas las notas y Treatflow pasa la voz a texto; si quieres, lo pule con IA. Eso sí, la ficha no se redacta de forma totalmente automática.",
      },
      {
        question: "¿Puedo marcar zonas de tratamiento en fotos o bocetos?",
        answer:
          "Las fotos de antes y después se guardan directamente con el tratamiento y las zonas se marcan sobre las fotos; en los formularios hay campos de boceto con plantilla de rostro o cuerpo. No existe un módulo independiente de mapa corporal.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "forms" }, title: "Formularios", description: "Anamnesis y consentimientos digitales" },
      { href: { page: "client-records" }, title: "Fichas de cliente", description: "El historial, en la ficha del cliente" },
      { href: { page: "appointment-calendar" }, title: "Agenda de citas", description: "Abre la documentación desde la cita" },
    ],
  },
  cta: {
    title: "Documenta tus tratamientos con orden",
    description: "Pruébalo gratis 14 días, sin tarjeta de crédito: documentación, fotos y firmas en una sola app.",
    secondary: { label: "Formularios digitales", href: { page: "forms" } },
  },
};
