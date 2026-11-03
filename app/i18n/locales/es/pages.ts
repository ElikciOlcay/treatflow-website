import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import type { SeoPageKey } from "@/app/i18n/seo";
import type { IndustryPageKey } from "@/app/i18n/industry-slugs";
import type { LocaleSiteContent } from "../types";

import {
  BarChart3,
  Bell,
  Calendar,
  CalendarDays,
  Camera,
  ClipboardCheck,
  Clock,
  CreditCard,
  FileSignature,
  FileText,
  FolderOpen,
  Gift,
  Globe,
  LayoutDashboard,
  Link2,
  Mail,
  MessageCircle,
  Mic,
  Package,
  PenLine,
  Plug,
  Receipt,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Ticket,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  CalendarClock,
  Ban,
  KeyRound,
  BadgePercent,
  CalendarCog,
} from "lucide-react";

type FeatureLinkKey =
  | "online-booking"
  | "client-records"
  | "forms"
  | "treatment-documentation"
  | "pricing";

const industryLabels: Record<IndustryPageKey, string> = {
  "beauty-salon-software": "Software para salones de belleza",
  "aesthetic-clinic-software": "Software para clínicas estéticas",
  "laser-hair-removal-software": "Software para depilación láser",
  "permanent-makeup-software": "Software para micropigmentación",
  "tattoo-studio-software": "Software para estudios de tatuaje",
  "nail-salon-software": "Software para salones de uñas",
  "lash-studio-software": "Software para estudios de pestañas",
  "spa-wellness-software": "Software para spa y wellness",
  "massage-software": "Software para centros de masaje",
};

const featureLabels: Record<FeatureLinkKey, string> = {
  "online-booking": "Reservas online",
  "client-records": "Fichas de clientes",
  forms: "Formularios de consentimiento",
  "treatment-documentation": "Documentación de tratamientos",
  pricing: "Precios",
};

type IndustryBody = {
  serviceName: string;
  serviceDescription: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  aiCapsules: { question: string; answer: string }[];
  whatTitle: string;
  whatParas: string[];
  audiences: string[];
  problems: { problem: string; solution: string }[];
  features: InternationalPageContent["features"]["items"];
  benefits: string[];
  marketTitle: string;
  marketParas: string[];
  highlights: string[];
  aiSummary: string;
  faqs: { question: string; answer: string }[];
  siblingKeys: IndustryPageKey[];
  featureKeys: FeatureLinkKey[];
  workflow?: InternationalPageContent["workflow"];
  images?: InternationalPageContent["images"];
};

/** Baut eine ES-Branchenseite. Links als EN-Pfade (werden zentral auf /es/... gemappt). */
function industry(key: IndustryPageKey, body: IndustryBody): InternationalPageContent {
  return {
    pageKey: key as SeoPageKey,
    locale: "es",
    canonicalPath: `/en/${key}`,
    serviceName: body.serviceName,
    serviceDescription: body.serviceDescription,
    areaServed: ["ES"],
    ctaPrimaryLabel: "Prueba gratis",
    ctaBottomTitle: "¿Quieres gestionar tu centro desde un solo lugar?",
    ctaBottomText:
      "Empieza tu prueba gratuita de 14 días – sin tarjeta de crédito, cancela cuando quieras.",
    trustTrialLabel: "14 días gratis",
    hero: {
      marketLabel: "España",
      eyebrow: body.eyebrow,
      h1: body.h1,
      subtitle: body.subtitle,
    },
    aiCapsules: body.aiCapsules,
    whatIsTreatflow: { title: body.whatTitle, paragraphs: body.whatParas },
    whoIsItFor: { title: "¿Para quién es?", audiences: body.audiences },
    problems: { title: "¿Qué problemas resuelve Treatflow?", items: body.problems },
    features: { title: "Funciones principales", items: body.features },
    benefits: { title: "Ventajas", items: body.benefits },
    marketFit: {
      title: body.marketTitle,
      paragraphs: body.marketParas,
      highlights: body.highlights,
    },
    aiSummary: { title: "Resumen", text: body.aiSummary },
    faqs: body.faqs,
    internalLinksTitle: "Páginas relacionadas",
    internalLinks: [
      ...body.siblingKeys.map((k) => ({ href: `/en/${k}`, label: industryLabels[k] })),
      ...body.featureKeys.map((fk) => ({ href: `/en/${fk}`, label: featureLabels[fk] })),
    ],
    workflow: body.workflow,
    images: body.images,
  };
}

const featureCta = {
  primaryCta: "Prueba gratis 14 días",
  bottomTitle: "¿Empezamos?",
  bottomText: "Empieza tu prueba gratuita – sin tarjeta de crédito, cancela cuando quieras.",
  relatedTitle: "Páginas relacionadas",
} as const;

export const pages: Pick<LocaleSiteContent, "coreFeatures" | "extraFeatures" | "industries"> = {
  coreFeatures: {
    "appointment-calendar": {
      ...featureCta,
      eyebrow: "Agenda de citas",
      title: "Todas tus citas, bien organizadas",
      subtitle:
        "Gestiona la agenda de todo tu centro en un solo lugar, con vistas por día, semana y mes que tu equipo entiende de un vistazo.",
      bullets: [
        "Vistas por día, semana y mes",
        "Planifica varias profesionales y cabinas",
        "Arrastra y suelta para mover citas en segundos",
        "Sincronizada automáticamente con las reservas online",
      ],
      image: {
        src: "/images/lifestyle/terminkalender-wochenplanung.png",
        alt: "Agenda de citas de Treatflow con vista semanal",
      },
      features: [
        { icon: CalendarDays, title: "Vistas claras", desc: "Cambia entre día, semana y mes: siempre la visión que necesitas en cada momento." },
        { icon: Users, title: "Agenda del equipo", desc: "Gestiona a la vez las citas de varias profesionales, cabinas y recursos." },
        { icon: RefreshCw, title: "Siempre sincronizada", desc: "Las reservas online entran directamente en la agenda, sin dobles reservas." },
        { icon: Clock, title: "Cambios rápidos", desc: "Mueve o alarga citas arrastrando y soltando." },
        { icon: Smartphone, title: "En cualquier dispositivo", desc: "Gestiona tu agenda desde el ordenador, la tablet o el móvil." },
        { icon: Bell, title: "Recordatorios automáticos", desc: "Reduce las ausencias con recordatorios automáticos por WhatsApp y email." },
        { icon: CalendarClock, title: "Planificador de turnos", desc: "Planifica la semana de tu equipo con turnos, plantillas y ausencias. La reserva online solo ofrece horas dentro de los turnos planificados." },
        { icon: Ban, title: "Bloqueos y series", desc: "Bloquea pausas, reuniones de equipo y vacaciones, también de forma periódica. Planifica los tratamientos por bonos como una serie de sesiones." },
        { icon: KeyRound, title: "Tablet con PIN de empleado", desc: "Cada miembro del equipo entra con su propio PIN. Los roles separan administradores y empleados, y el bloqueo de pantalla protege los datos de clientes." },
      ],
      closingTitle: "Menos gestión, más tiempo para tus clientas",
      closingText:
        "Una agenda bien organizada es el corazón de cualquier centro. Treatflow mantiene tu planificación en orden para que tú y tu equipo os centréis en lo importante: buenos tratamientos y clientas contentas.",
      faqs: [
        {
          question: "¿Cómo funciona la agenda de citas de Treatflow?",
          answer:
            "Ves vistas por día, semana y mes con columnas por profesional o cabina. Las reservas online entran en la misma agenda, así evitas dobles reservas. Para cambiar una cita, basta con arrastrarla.",
        },
        {
          question: "¿La agenda se sincroniza con las reservas online?",
          answer:
            "Sí. Cuando una clienta reserva en tu página de reservas de Treatflow, la cita aparece al instante en la agenda del centro. Los recordatorios pueden enviarse por WhatsApp y email.",
        },
      ],
      relatedLinks: [
        { href: "/en/online-booking", label: "Reservas online" },
        { href: "/en/messaging", label: "Recordatorios" },
        { href: "/en/client-records", label: "Fichas de clientes" },
        { href: "/en/beauty-salon-software", label: "Software para salones de belleza" },
      ],
    },
    "online-booking": {
      ...featureCta,
      eyebrow: "Reservas online",
      title: "Tus clientas reservan solas, 24/7",
      subtitle:
        "Una página de reservas con tu marca que llena tu agenda incluso fuera del horario de apertura, sin llamadas perdidas ni dobles reservas.",
      bullets: [
        "Reservas a cualquier hora",
        "Solo muestra huecos realmente libres",
        "Señal opcional para reducir ausencias",
        "Confirmaciones y recordatorios incluidos",
      ],
      image: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Clienta reservando una cita de belleza desde el móvil",
      },
      features: [
        { icon: Globe, title: "Tu página de reservas", desc: "Comparte tu enlace de reservas en tu web, en Instagram y en tu perfil de Google." },
        { icon: Clock, title: "Disponibilidad en tiempo real", desc: "Tus clientas solo ven los huecos libres de verdad, sin dobles reservas." },
        { icon: CreditCard, title: "Señal o depósito", desc: "Pide una señal en los servicios más solicitados para proteger tu tiempo." },
        { icon: Bell, title: "Confirmación automática", desc: "Confirmación inmediata y recordatorios que reducen las ausencias." },
        { icon: Smartphone, title: "Pensada para el móvil", desc: "Diseñada para el teléfono, desde donde reservan la mayoría de las clientas." },
        { icon: Link2, title: "Agenda sincronizada", desc: "Cada reserva entra directamente en la agenda de tu centro." },
        { icon: BadgePercent, title: "Ofertas y precios «desde»", desc: "Destaca servicios como oferta con precio tachado, imagen y cuenta atrás. Muestra un precio «desde» para tratamientos a medida." },
        { icon: CalendarCog, title: "Cita autogestionada", desc: "Con el enlace de la confirmación, tus clientas ven su cita y pueden cambiarla o cancelarla, si tú lo permites." },
      ],
      closingTitle: "Más citas, menos tiempo al teléfono",
      closingText:
        "Las reservas online convierten las horas muertas en ingresos. Treatflow une reservas, recordatorios y agenda en un solo flujo.",
      faqs: [
        {
          question: "¿Treatflow cobra comisión por las reservas online?",
          answer:
            "No. Treatflow es el software de tu centro, no un marketplace. Compartes tu propio enlace de reservas y pagas una cuota mensual. No hay comisión por reserva.",
        },
        {
          question: "¿Mis clientas pueden reservar 24/7 sin pasar por un marketplace?",
          answer:
            "Sí. Tienes una página de reservas con tu marca que solo muestra la disponibilidad real. Las confirmaciones y los recordatorios están incluidos. La señal opcional ayuda a reducir las ausencias.",
        },
      ],
      aiCapsules: [
        {
          question: "¿Treatflow ofrece reservas online?",
          answer:
            "Sí. Treatflow da a salones de belleza y clínicas estéticas su propia página de reservas. Las clientas reservan según la disponibilidad real. No hay comisión de marketplace.",
        },
      ],
      problem: {
        problem: "Las llamadas y las comisiones de los marketplaces llenan el día, y aun así la agenda tiene huecos.",
        solution:
          "Treatflow te da tu propio enlace de reservas que solo muestra la disponibilidad real. Las reservas entran en la agenda del centro y los recordatorios salen solos.",
      },
      relatedLinks: [
        { href: "/en/appointment-calendar", label: "Agenda de citas" },
        { href: "/en/messaging", label: "Recordatorios" },
        { href: "/en/client-records", label: "Fichas de clientes" },
        { href: "/en/beauty-salon-software", label: "Software para salones de belleza" },
      ],
    },
    "client-records": {
      ...featureCta,
      eyebrow: "Fichas de clientes",
      title: "Todo el historial de cada clienta en un solo lugar",
      subtitle:
        "Notas, formularios, fotos e historial de tratamientos, listos antes de cada cita y sin carpetas de papel.",
      bullets: [
        "Fichas de clientes completas",
        "Historial de tratamientos y fotos",
        "Formularios vinculados a la ficha",
        "Búsqueda rápida en todo el centro",
      ],
      image: {
        src: "/images/lifestyle/kundenverwaltung-kartei.png",
        alt: "Vista general de la ficha digital de clientes en Treatflow",
      },
      features: [
        { icon: Users, title: "Perfiles de clientes", desc: "Datos de contacto, preferencias y notas en una ficha estructurada." },
        { icon: FileText, title: "Historial de tratamientos", desc: "Consulta qué se hizo, cuándo y con qué productos o parámetros." },
        { icon: Camera, title: "Documentación fotográfica", desc: "Fotos de antes y después asociadas al tratamiento correcto." },
        { icon: ClipboardCheck, title: "Formularios vinculados", desc: "La anamnesis y los consentimientos se guardan en la ficha de la clienta." },
        { icon: Search, title: "Búsqueda rápida", desc: "Encuentra clientas y tratamientos anteriores en segundos." },
        { icon: FolderOpen, title: "Archivo sin papel", desc: "Sustituye los archivadores por un archivo digital con buscador." },
      ],
      closingTitle: "Conoce a tu clienta antes de que se siente",
      closingText:
        "Unas buenas fichas significan tratamientos más seguros y una experiencia más personal, sin rebuscar entre papeles.",
      faqs: [
        {
          question: "¿Las fichas digitales de Treatflow cumplen el RGPD?",
          answer:
            "Sí. Las fichas se alojan en servidores de la UE en Fráncfort, con cifrado SSL y copias de seguridad diarias. Formularios, fotos e historial de tratamientos están en la misma ficha. El centro sigue siendo el propietario de los datos de sus clientes, de acuerdo con el RGPD y la LOPDGDD.",
        },
        {
          question: "¿Qué se guarda en una ficha de cliente de Treatflow?",
          answer:
            "Datos de contacto, notas, formularios de anamnesis y consentimiento, historial de tratamientos y fotos de antes y después, con búsqueda en todo el centro para que el equipo esté preparado antes de cada visita.",
        },
      ],
      aiCapsules: [
        {
          question: "¿Puedo guardar el historial de mis clientas en Treatflow?",
          answer:
            "Sí. Treatflow guarda datos de contacto, notas, formularios, historial de tratamientos y fotos en una sola ficha, para que el equipo abra el mismo expediente antes de cada visita.",
        },
      ],
      problem: {
        problem: "Las notas, fotos y formularios de las clientas están repartidos entre carpetas, chats y dispositivos.",
        solution:
          "Treatflow reúne el historial en una sola ficha: formularios, notas, fotos y tratamientos anteriores, todo junto.",
      },
      relatedLinks: [
        { href: "/en/forms", label: "Formularios de anamnesis y consentimiento" },
        { href: "/en/treatment-documentation", label: "Documentación de tratamientos" },
        { href: "/en/online-booking", label: "Reservas online" },
        { href: "/en/aesthetic-clinic-software", label: "Software para clínicas estéticas" },
      ],
    },
    forms: {
      ...featureCta,
      eyebrow: "Formularios de anamnesis y consentimiento",
      title: "Formularios digitales de anamnesis y consentimiento",
      subtitle:
        "Envía la anamnesis y el consentimiento informado antes de la cita. Parte de plantillas de ejemplo, crea las tuyas con el generador de formularios con IA o deja que te ayudemos a configurarlas.",
      bullets: [
        "Tus clientas rellenan los formularios antes de llegar",
        "Firma digital en cualquier dispositivo",
        "Plantillas de ejemplo, generador con IA o configuración con nuestra ayuda",
        "Guardados de forma segura en la ficha de la clienta",
      ],
      image: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Formulario de consentimiento digital firmado en una tablet",
      },
      features: [
        { icon: Send, title: "Envío previo", desc: "Comparte los formularios por enlace antes de la visita: menos esperas en recepción." },
        { icon: Smartphone, title: "Adaptados al móvil", desc: "Tus clientas los completan en su teléfono en pocos minutos." },
        { icon: FileSignature, title: "Firma digital", desc: "Recoge el consentimiento de forma segura y sin imprimir." },
        { icon: PenLine, title: "Plantillas y generador", desc: "Empieza con plantillas de ejemplo, crea las tuyas con el generador con IA o configúralas con nosotros." },
        { icon: ShieldCheck, title: "Almacenamiento seguro", desc: "Los formularios se guardan en la ficha de la clienta, en infraestructura alojada en la UE." },
        { icon: ClipboardCheck, title: "Todo listo para tratar", desc: "Tu equipo ve los formularios completados antes de que empiece la cita." },
      ],
      closingTitle: "Empieza cada tratamiento con el papeleo ya hecho",
      closingText:
        "La anamnesis digital protege a tu centro y ahorra tiempo en recepción, todos los días.",
      faqs: [
        {
          question: "¿Treatflow incluye consentimientos digitales para clínicas estéticas?",
          answer:
            "Sí. Envías las plantillas de anamnesis y consentimiento antes de la visita. Las clientas las rellenan en su móvil, firma digital incluida. Los formularios completados se guardan en su ficha.",
        },
        {
          question: "¿Pueden las clientas rellenar los formularios antes de llegar?",
          answer:
            "Sí. Comparte un enlace por WhatsApp o email. El equipo ve los formularios completados antes de la cita, así los tratamientos empiezan a su hora.",
        },
      ],
      aiCapsules: [
        {
          question: "¿Treatflow permite consentimientos digitales?",
          answer:
            "Sí. Treatflow envía plantillas de anamnesis y consentimiento antes de la visita. Las clientas las completan en su móvil, firma digital incluida, y quedan guardadas en su ficha.",
        },
      ],
      problem: {
        problem: "La anamnesis en papel ralentiza la recepción y luego cuesta encontrarla.",
        solution:
          "Treatflow envía los formularios digitales de anamnesis y consentimiento antes de la cita. Respuestas y firmas quedan en la ficha de la clienta.",
      },
      relatedLinks: [
        { href: "/en/client-records", label: "Fichas de clientes" },
        { href: "/en/treatment-documentation", label: "Documentación de tratamientos" },
        { href: "/en/aesthetic-clinic-software", label: "Software para clínicas estéticas" },
        { href: "/en/laser-hair-removal-software", label: "Software para depilación láser" },
      ],
    },
    "treatment-documentation": {
      ...featureCta,
      eyebrow: "Documentación de tratamientos",
      title: "Documenta cada tratamiento con claridad",
      subtitle:
        "Notas, parámetros y fotos en un registro de tratamiento estructurado, con dictado por voz incluido, pensado para centros de estética y belleza.",
      bullets: [
        "Notas de tratamiento estructuradas",
        "Dictado por voz, con mejora opcional mediante IA",
        "Series de fotos de antes y después",
        "Vinculada al historial de la clienta",
      ],
      image: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Documentación de tratamientos con comparación de fotos",
      },
      features: [
        { icon: FileText, title: "Notas de tratamiento", desc: "Registra qué hiciste, los productos utilizados y la reacción de la clienta." },
        { icon: Mic, title: "Dictado por voz", desc: "Dicta tus notas en lugar de escribirlas. Treatflow convierte la voz en texto y puede pulirlo con IA." },
        { icon: Camera, title: "Fotos como prueba", desc: "Adjunta las imágenes de antes y después al tratamiento exacto." },
        { icon: ClipboardCheck, title: "Seguimiento fácil", desc: "En la siguiente visita ves al instante el último tratamiento." },
        { icon: ShieldCheck, title: "Trazabilidad", desc: "Mantén un registro claro de los tratamientos vinculados a un consentimiento." },
        { icon: Users, title: "Visible para el equipo", desc: "Tus compañeras ven la misma documentación cuando se hacen cargo de una clienta." },
      ],
      closingTitle: "Documentación que protege y transmite confianza",
      closingText:
        "Unos registros de tratamiento claros mejoran la seguridad, la continuidad y la confianza de tus clientas, sin ralentizar tu día.",
      faqs: [
        {
          question: "¿Pueden los centros de depilación láser documentar sus tratamientos en Treatflow?",
          answer:
            "Sí. Registras parámetros, notas y fotos de antes y después en cada sesión. El historial queda vinculado a la clienta, lo que facilita el seguimiento y los relevos en el equipo.",
        },
        {
          question: "¿Las fotos de antes y después se guardan en la ficha de la clienta?",
          answer:
            "Sí. Las series de fotos se asocian al tratamiento exacto, no a una galería genérica del móvil, así puedes comparar la evolución en la siguiente visita.",
        },
        {
          question: "¿Puedo dictar las notas de tratamiento en Treatflow?",
          answer:
            "Sí. En la documentación de tratamientos puedes dictar las notas en lugar de escribirlas. Treatflow convierte la voz en texto y puede pulirlo con IA. La nota se guarda en esa visita.",
        },
      ],
      aiCapsules: [
        {
          question: "¿Puedo documentar tratamientos en Treatflow?",
          answer:
            "Sí. Treatflow guarda notas de tratamiento, parámetros y fotos de antes y después en la visita de la clienta. Puedes escribir las notas o dictarlas por voz y, si quieres, pulir el texto con IA.",
        },
      ],
      problem: {
        problem: "Notas y fotos acaban en móviles, papeles y chats, desconectadas de la visita.",
        solution:
          "Treatflow asocia notas y series de fotos al tratamiento. Puedes dictar las notas por voz, así la documentación queda en la visita sin ralentizar la sesión.",
      },
      relatedLinks: [
        { href: "/en/client-records", label: "Fichas de clientes" },
        { href: "/en/forms", label: "Formularios de anamnesis y consentimiento" },
        { href: "/en/laser-hair-removal-software", label: "Software para depilación láser" },
        { href: "/en/aesthetic-clinic-software", label: "Software para clínicas estéticas" },
      ],
    },
  },
  extraFeatures: {
    vouchers: {
      ...featureCta,
      eyebrow: "Tarjetas regalo",
      title: "Vende y canjea tarjetas regalo sin líos",
      subtitle:
        "Crea tarjetas regalo, véndelas en tu centro y canjea los saldos restantes de forma automática: una forma sencilla de generar ingresos extra.",
      bullets: [
        "Vende tarjetas regalo en el centro u online",
        "Canje total o parcial",
        "Control automático del saldo restante",
        "Validez clara e historial por clienta",
      ],
      image: {
        src: "/images/product-updates/rabattcodes-kalender.png",
        alt: "Tarjetas regalo y códigos de descuento de Treatflow en la agenda",
      },
      features: [
        {
          icon: Gift,
          title: "Tarjetas regalo",
          desc: "Ofrece tarjetas de importe fijo o para un tratamiento concreto que encantan a tus clientas.",
        },
        {
          icon: Receipt,
          title: "Venta rápida",
          desc: "Añade una tarjeta regalo en segundos al cerrar la visita.",
        },
        {
          icon: Ticket,
          title: "Canje sencillo",
          desc: "Introduce el código o selecciona la tarjeta cuando la clienta vuelva.",
        },
        {
          icon: RefreshCw,
          title: "Saldo restante",
          desc: "Los canjes parciales actualizan el saldo automáticamente.",
        },
        {
          icon: Calendar,
          title: "Control de validez",
          desc: "Define fechas de caducidad para que las ofertas sean claras y fáciles de gestionar.",
        },
        {
          icon: BarChart3,
          title: "Resumen de ventas",
          desc: "Consulta cuántas tarjetas se han vendido, canjeado o siguen pendientes.",
        },
      ],
      closingTitle: "Tarjetas regalo que de verdad traen clientas de vuelta",
      closingText:
        "Las tarjetas regalo llenan los días flojos y atraen clientas nuevas. Treatflow hace que venderlas y canjearlas sea sencillo, sin que nada se pierda en hojas de cálculo.",
      relatedLinks: [
        { href: "/en/online-booking", label: "Reservas online" },
        { href: "/en/client-records", label: "Fichas de clientes" },
        { href: "/en/features", label: "Todas las funciones" },
      ],
    },
    messaging: {
      ...featureCta,
      eyebrow: "Mensajes y recordatorios",
      title: "Menos ausencias con WhatsApp y email automáticos",
      subtitle:
        "Envía confirmaciones de reserva, recordatorios de cita y mensajes de seguimiento automáticamente, por WhatsApp y email, sin perseguir a tus clientas a mano.",
      bullets: [
        "Confirmaciones de reserva automáticas",
        "Recordatorios por WhatsApp y email antes de la cita",
        "Seguimiento después del tratamiento",
        "Mensajes de cumpleaños y de reactivación",
      ],
      image: {
        src: "/images/lifestyle/sms-erinnerung-studio.png",
        alt: "Clienta recibiendo por WhatsApp un recordatorio de cita de su salón de belleza",
      },
      features: [
        {
          icon: Bell,
          title: "Recordatorios de cita",
          desc: "Reduce las ausencias con recordatorios programados por WhatsApp y email.",
        },
        {
          icon: Mail,
          title: "Confirmaciones",
          desc: "Tus clientas reciben los datos de la reserva en el momento en que reservan.",
        },
        {
          icon: MessageCircle,
          title: "Seguimiento",
          desc: "Envía consejos de cuidado o invitaciones a volver a reservar de forma automática.",
        },
        {
          icon: Sparkles,
          title: "Felicitaciones de cumpleaños",
          desc: "Mantente presente con felicitaciones personales y automáticas.",
        },
        {
          icon: Clock,
          title: "Envío configurable",
          desc: "Decide cuándo salen los recordatorios y los mensajes de seguimiento.",
        },
        {
          icon: Smartphone,
          title: "WhatsApp y email",
          desc: "Usa el canal adecuado según la urgencia y el nivel de detalle.",
        },
      ],
      closingTitle: "Mantén el contacto sin trabajo extra",
      closingText:
        "Los mensajes automáticos mantienen a tus clientas informadas y fieles mientras tu equipo se centra en los tratamientos, no en escribir una y otra vez los mismos mensajes.",
      faqs: [
        {
          question: "¿Treatflow puede enviar recordatorios de cita?",
          answer:
            "Sí. Treatflow puede enviar recordatorios automáticos por WhatsApp y email antes de la cita. Las confirmaciones salen en cuanto la clienta reserva.",
        },
        {
          question: "¿Treatflow puede automatizar los mensajes a clientas?",
          answer:
            "Sí. Además de los recordatorios, puedes enviar mensajes de seguimiento después del tratamiento y mensajes de reactivación. El momento del envío es configurable.",
        },
      ],
      aiCapsules: [
        {
          question: "¿Treatflow envía recordatorios de cita?",
          answer:
            "Sí. Treatflow envía confirmaciones de reserva y recordatorios automáticos por WhatsApp o email para que tus clientas no olviden su cita.",
        },
      ],
      problem: {
        problem: "Las ausencias y los seguimientos olvidados dejan huecos que el equipo tiene que llenar a base de llamadas.",
        solution:
          "Treatflow envía confirmaciones, recordatorios y mensajes de seguimiento de forma automática, vinculados a la cita en la agenda.",
      },
      relatedLinks: [
        { href: "/en/online-booking", label: "Reservas online" },
        { href: "/en/appointment-calendar", label: "Agenda de citas" },
        { href: "/en/beauty-salon-software", label: "Software para salones de belleza" },
        { href: "/en/laser-hair-removal-software", label: "Software para depilación láser" },
      ],
    },
    integrations: {
      ...featureCta,
      eyebrow: "Integraciones",
      title: "Conecta Treatflow con las herramientas que ya usas",
      subtitle:
        "Sincroniza calendarios, contabilidad y automatizaciones para que los datos se introduzcan una sola vez, en lugar de teclearlos en tres sistemas distintos.",
      bullets: [
        "Sincronización bidireccional con Google Calendar",
        "Conexión con contabilidad y facturación",
        "Zapier para más de 7.000 aplicaciones",
        "Menos doble registro, menos errores",
      ],
      image: {
        src: "/images/product-updates/swiss21-abaninja-integration.png",
        alt: "Integraciones de Treatflow que conectan el software del salón con herramientas externas",
      },
      features: [
        {
          icon: CalendarDays,
          title: "Google Calendar",
          desc: "Mantén sincronizados en tiempo real tu calendario personal y el del centro.",
        },
        {
          icon: Receipt,
          title: "Contabilidad",
          desc: "Crea facturas y sincroniza clientes sin volver a teclear datos.",
        },
        {
          icon: Zap,
          title: "Zapier",
          desc: "Lanza flujos de trabajo en Sheets, tu CRM, el email y mucho más.",
        },
        {
          icon: RefreshCw,
          title: "Menos trabajo duplicado",
          desc: "Introduce los datos una vez en Treatflow y llegan al resto de herramientas.",
        },
        {
          icon: Workflow,
          title: "Automatizaciones a medida",
          desc: "Reacciona a nuevas reservas o formularios sin escribir código.",
        },
        {
          icon: Plug,
          title: "Ecosistema en crecimiento",
          desc: "Conecta las herramientas en las que ya confía tu salón.",
        },
        { icon: MessageCircle, title: "WhatsApp", desc: "Confirmaciones, recordatorios, cancelaciones y cambios por WhatsApp, con el e-mail como alternativa." },
        { icon: Sparkles, title: "Asistentes de IA (MCP)", desc: "Claude, ChatGPT y otros responden preguntas sobre citas, clientes y facturación: solo lectura, los datos de salud se quedan en Treatflow." },
        { icon: CalendarClock, title: "Planificador de turnos", desc: "Planifica turnos, vacaciones y ausencias por semana: la reserva online sigue el plan. Gratis." },
      ],
      closingTitle: "Una única fuente de datos para tu centro",
      closingText:
        "Las integraciones mantienen Treatflow en el centro de tu operativa mientras tus herramientas favoritas siguen al día, de forma automática.",
      faqs: [
        {
          question: "¿Treatflow se integra con Google Calendar?",
          answer:
            "Sí. Treatflow puede sincronizarse con Google Calendar para que las citas personales y las del centro estén siempre alineadas.",
        },
        {
          question: "¿Treatflow funciona con Zapier?",
          answer:
            "Sí. Con el plan Booking puedes conectar Treatflow con otras herramientas a través de Zapier, por ejemplo hojas de cálculo o flujos de email.",
        },
        { question: "¿Puedo conectar Claude o ChatGPT con mi centro?", answer: "Sí. En Apps → Asistentes de IA (MCP) conectas Claude, ChatGPT, Cursor y otros asistentes con tu centro. Pueden responder preguntas sobre citas, horas libres, datos de contacto de clientes, servicios y facturación. El acceso es solo de lectura: historiales de tratamiento, anamnesis, fotos y notas nunca se comparten." },
        { question: "¿Qué hace el planificador de turnos?", answer: "Con el planificador de turnos organizas la semana de tu equipo con turnos, plantillas y ausencias como vacaciones o bajas. Cuando está activo, la reserva online solo ofrece horas dentro de los turnos planificados. Lo activas gratis en Apps; las primeras ocho semanas se rellenan con tus horarios de trabajo actuales." },
      ],
      aiCapsules: [
        {
          question: "¿Treatflow se integra con Google Calendar?",
          answer:
            "Sí. Treatflow puede sincronizarse con Google Calendar para que las citas personales y las del centro estén siempre alineadas.",
        },
      ],
      relatedLinks: [
        { href: "/en/online-booking", label: "Reservas online" },
        { href: "/en/appointment-calendar", label: "Agenda de citas" },
        { href: "/en/features", label: "Todas las funciones" },
      ],
    },
    shop: {
      ...featureCta,
      eyebrow: "Venta de productos e inventario",
      title: "Vende productos y controla tu stock",
      subtitle:
        "Añade productos sin límite, véndelos en tu centro y consulta quién compró qué, con un inventario sencillo para que tus productos estrella nunca se agoten sin que te des cuenta.",
      bullets: [
        "Productos y categorías ilimitados",
        "Venta directa en el centro",
        "Niveles de stock y avisos sencillos",
        "Historial de compras por clienta",
      ],
      image: {
        src: "/images/mockups/shop-hero.png",
        alt: "Vista de venta de productos e inventario de Treatflow para salones de belleza",
      },
      features: [
        {
          icon: Package,
          title: "Catálogo de productos",
          desc: "Añade todas las referencias que necesites, con precios y categorías.",
        },
        {
          icon: ShoppingBag,
          title: "Venta en el centro",
          desc: "Vende después del tratamiento sin un sistema de tienda aparte.",
        },
        {
          icon: BarChart3,
          title: "Control de inventario",
          desc: "Consulta el stock y repón antes de quedarte sin existencias.",
        },
        {
          icon: Camera,
          title: "Fotos de producto",
          desc: "Imágenes claras de cada producto para tu equipo en recepción.",
        },
        {
          icon: TrendingUp,
          title: "Ingresos extra",
          desc: "Convierte cada visita en una oportunidad de venta.",
        },
        {
          icon: Users,
          title: "Historial de compras",
          desc: "Sabe qué clienta compró qué producto y cuándo.",
        },
      ],
      closingTitle: "Venta de productos integrada en el flujo de citas",
      closingText:
        "Treatflow mantiene la venta de productos junto a las citas y las fichas de clientes, para que vender sea parte natural de la visita y no otra tarea administrativa.",
      relatedLinks: [
        { href: "/en/client-records", label: "Fichas de clientes" },
        { href: "/en/appointment-calendar", label: "Agenda de citas" },
        { href: "/en/features", label: "Todas las funciones" },
      ],
    },
    "studio-website": {
      ...featureCta,
      eyebrow: "Web para tu centro",
      title: "Una web a medida que convierte visitas en reservas",
      subtitle:
        "Consigue una web profesional para tu salón: pensada para el móvil, preparada para SEO y conectada con las reservas online de Treatflow para que las clientas nuevas reserven en pocos toques.",
      bullets: [
        "Diseño a medida para tu marca",
        "Optimizada para el móvil",
        "Reservas online integradas",
        "Pensada para negocios de belleza y estética",
      ],
      image: {
        src: "/images/og-website-service.jpg",
        alt: "Web a medida de Treatflow para un salón de belleza",
      },
      features: [
        {
          icon: Sparkles,
          title: "Diseño a medida",
          desc: "Una imagen que encaja con tu centro, no una plantilla genérica más.",
        },
        {
          icon: Smartphone,
          title: "Pensada para el móvil",
          desc: "La mayoría de las visitas llegan desde el teléfono, y ahí tu web se ve genial.",
        },
        {
          icon: Globe,
          title: "Base SEO",
          desc: "Estructura y contenidos claros para que las clientas te encuentren en internet.",
        },
        {
          icon: Link2,
          title: "Reservas integradas",
          desc: "Conecta tu enlace de reservas de Treatflow y tu horario de apertura.",
        },
        {
          icon: Camera,
          title: "Muestra tu trabajo",
          desc: "Presenta tratamientos, equipo y ambiente de forma convincente.",
        },
        {
          icon: LayoutDashboard,
          title: "Hecha para salones",
          desc: "Pensada para belleza, láser, uñas, pestañas y medicina estética.",
        },
      ],
      closingTitle: "Tu web como canal de reservas, no como folleto",
      closingText:
        "Diseñamos webs con aspecto premium que convierten. Junto con las reservas de Treatflow, cada visita puede convertirse en una cita.",
      relatedLinks: [
        { href: "/en/online-booking", label: "Reservas online" },
        { href: "/en/pricing", label: "Precios" },
        { href: "/en/features", label: "Todas las funciones" },
      ],
    },
  },
  industries: {
    "beauty-salon-software": industry("beauty-salon-software", {
      serviceName: "Software para salones de belleza",
      serviceDescription:
        "Software para salones de belleza con reservas online, fichas de clientes, formularios de consentimiento y documentación de tratamientos.",
      eyebrow: "Software para salones de belleza",
      h1: "Software para salones de belleza modernos",
      subtitle:
        "Reservas online, fichas de clientes, formularios de consentimiento y documentación de tratamientos en una sola plataforma – pensado para salones que quieren menos papeleo y una mejor experiencia para sus clientes.",
      aiCapsules: [
        {
          question: "¿Cuál es el mejor software para salones de belleza en Europa?",
          answer:
            "Si tu salón necesita reservas online sin comisión, fichas de clientes digitales, formularios de consentimiento y documentación de tratamientos en un solo sistema, Treatflow es una opción sólida. Hecho en Austria, alojado en servidores de la UE y con planes desde 39 €/mes.",
        },
        {
          question: "¿Treatflow cobra comisión por reserva?",
          answer:
            "No. Treatflow es el software de tu salón, no un marketplace. No hay comisión por cita. Tú controlas tu página de reservas y los datos de tus clientes.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para salones de belleza?",
      whatParas: [
        "Treatflow sustituye herramientas dispersas por un único sistema: agenda, fichas de clientes, formularios digitales y notas de tratamiento trabajan juntos desde la reserva hasta el seguimiento.",
        "Los salones usan Treatflow para ofrecer reservas online, tener el historial de cada cliente siempre a mano y documentar los tratamientos de forma coherente en todo el equipo.",
      ],
      audiences: [
        "Salones de belleza y centros de estética",
        "Centros de cuidado facial con protocolos de tratamiento definidos",
        "Equipos con varias profesionales que quieren dejar atrás las herramientas sueltas",
        "Salones independientes listos para abandonar la agenda de papel",
      ],
      problems: [
        {
          problem: "Citas por WhatsApp y agenda de papel",
          solution: "Una agenda con reservas online y recordatorios automáticos.",
        },
        {
          problem: "Historial de clientes repartido en varias herramientas",
          solution: "Fichas digitales con notas, fotos e historial de visitas.",
        },
        {
          problem: "Consentimientos en papel",
          solution: "Fichas de anamnesis y consentimientos digitales completados antes de la cita.",
        },
        {
          problem: "Ausencias y huecos de última hora",
          solution: "Recordatorios por WhatsApp y email que reducen las citas perdidas.",
        },
      ],
      features: [
        { icon: Link2, title: "Reservas online", desc: "Página de reservas propia, 24/7 y sin comisión." },
        { icon: Users, title: "Fichas de clientes", desc: "Perfiles, historial y notas en un solo lugar." },
        { icon: ClipboardCheck, title: "Consentimientos", desc: "Formularios digitales antes de cada tratamiento." },
        { icon: FileText, title: "Notas de tratamiento", desc: "Documentación estructurada por visita, también por dictado de voz." },
        { icon: Camera, title: "Documentación fotográfica", desc: "Fotos de antes y después vinculadas a cada cliente." },
        { icon: Bell, title: "Recordatorios", desc: "WhatsApp y email para reducir ausencias." },
      ],
      benefits: [
        "Menos trabajo administrativo en reservas y documentación",
        "Mejor experiencia para tus clientes desde la primera reserva",
        "Historial estructurado para los relevos dentro del equipo",
        "Flujos de trabajo digitales y modernos en una sola app",
        "Alojado en la UE y diseñado para cumplir el RGPD",
      ],
      marketTitle: "Por qué los salones eligen Treatflow",
      marketParas: [
        "Las herramientas genéricas suelen quedarse en la gestión de citas. Treatflow conecta la reserva con las fichas de clientes y la documentación de tratamientos – justo donde un salón profesional necesita estructura.",
      ],
      highlights: [
        "Reservas online sin comisión por cita",
        "Fichas de clientes digitales con historial de tratamientos",
        "Anamnesis y consentimientos completados antes de la visita",
        "Notas de tratamiento y documentación fotográfica",
        "Alojamiento en la UE, diseñado para cumplir el RGPD",
      ],
      aiSummary:
        "Treatflow es un software para salones de belleza con reservas online, fichas de clientes, formularios de consentimiento, notas de tratamiento, documentación fotográfica y recordatorios. Para salones de belleza, centros de estética y centros de cuidado facial. Alojado en la UE.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno para salones de belleza y clínicas estéticas. Combina agenda de citas, reservas online sin comisión, fichas de clientes digitales, formularios de consentimiento, documentación de tratamientos y recordatorios. Hecho en Austria y alojado en la UE.",
        },
        {
          question: "¿Treatflow es un software para salones de belleza sin comisión por reserva?",
          answer:
            "Sí. Treatflow es software para tu centro, no un marketplace. Los datos de tus clientes son tuyos y pagas una cuota mensual transparente desde 39 €. No hay comisión por reserva.",
        },
        {
          question: "¿Las fichas de clientes digitales cumplen el RGPD?",
          answer:
            "Treatflow se aloja en servidores de la UE en Fráncfort, utiliza cifrado SSL y copias de seguridad diarias. Fichas, formularios y documentación están en un único sistema diseñado para cumplir el RGPD y la LOPDGDD.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Regístrate en app.treatflow.io y empieza una prueba gratuita de 14 días. Sin tarjeta de crédito. Disponible en todo el mundo.",
        },
        {
          question: "¿Puede un salón de belleza enviar recordatorios y hacer que los clientes vuelvan a reservar con Treatflow?",
          answer:
            "Sí. Los recordatorios automáticos por WhatsApp y email forman parte del plan Booking. Los mensajes de seguimiento ayudan a que tus clientes reserven su próxima visita en tu propia página de reservas.",
        },
      ],
      siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
      workflow: {
        title: "Cómo usa Treatflow un salón de belleza",
        subtitle: "Desde la primera reserva hasta la próxima visita, el salón trabaja en un solo sistema.",
        steps: [
          { href: "/en/online-booking", label: "El cliente reserva online", desc: "El cliente usa tu enlace de reservas y la cita aparece al instante en la agenda del salón." },
          { href: "/en/forms", label: "Formularios antes de llegar", desc: "La anamnesis o el consentimiento se envían antes de la cita, así en recepción nadie tiene que recoger papeles." },
          { href: "/en/client-records", label: "Abrir la ficha del cliente", desc: "Notas, historial y productos utilizados anteriormente están en una sola ficha." },
          { href: "/en/treatment-documentation", label: "Documentar la visita", desc: "Notas de tratamiento, dictado de voz opcional y fotos quedan vinculados a esta cita." },
          { href: "/en/messaging", label: "Recordar y volver a reservar", desc: "Los recordatorios automáticos reducen las ausencias y los seguimientos ayudan a que el cliente vuelva a reservar." },
        ],
      },
      images: {
        lifestyle: {
          src: "/images/lifestyle/hero-startseite-en.png",
          alt: "Treatflow en portátil y tablet en un centro: agenda y fichas de clientes",
        },
        mockup: {
          src: "/images/lifestyle/online-buchung-smartphone.png",
          alt: "Clienta reservando una cita en un salón desde el móvil",
        },
      },
    }),
    "aesthetic-clinic-software": industry("aesthetic-clinic-software", {
      serviceName: "Software para clínicas estéticas",
      serviceDescription:
        "Software para clínicas estéticas: documentación de tratamientos, formularios de consentimiento, fichas de pacientes y reservas online.",
      eyebrow: "Software para clínicas estéticas",
      h1: "Software para clínicas estéticas con documentación estructurada",
      subtitle:
        "Consentimientos, notas de tratamiento, documentación fotográfica y fichas de clientes para clínicas estéticas – una plataforma desde la reserva hasta el seguimiento.",
      aiCapsules: [
        {
          question: "¿Qué software necesita una clínica estética?",
          answer:
            "Una clínica estética necesita formularios de consentimiento, documentación de tratamientos, registro fotográfico e historial de clientes en un solo sistema. Treatflow ofrece reservas online, fichas digitales y notas de tratamiento estructuradas para inyectables, tratamientos faciales y medicina estética.",
        },
        {
          question: "¿Treatflow sirve para medicina estética?",
          answer:
            "Sí. Treatflow está pensado para clínicas donde importan la calidad de la documentación y la seguridad del paciente, no solo el volumen de citas. Consentimientos, notas y fotos quedan vinculados a cada ficha.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para clínicas estéticas?",
      whatParas: [
        "Treatflow acompaña todo el recorrido del cliente: reserva, anamnesis, consentimiento, documentación del tratamiento y seguimiento en una plataforma compartida.",
        "Pensado para clínicas donde importan la calidad de la documentación y la seguridad del paciente, no solo el volumen de citas.",
      ],
      audiences: [
        "Clínicas estéticas con inyectables y tratamientos de rejuvenecimiento",
        "Consultas de medicina estética",
        "Clínicas de cuidado de la piel con tratamientos basados en protocolos",
        "Clínicas con varios profesionales que necesitan una documentación coherente",
      ],
      problems: [
        {
          problem: "Notas de tratamiento poco homogéneas",
          solution: "Plantillas de documentación estructuradas y fichas compartidas.",
        },
        {
          problem: "Consentimiento no recogido antes del procedimiento",
          solution: "Formularios de consentimiento digitales completados antes del tratamiento.",
        },
        {
          problem: "Fotos guardadas en móviles personales",
          solution: "Documentación fotográfica vinculada a la ficha de cada cliente.",
        },
        {
          problem: "Recepción y cabinas trabajan con herramientas distintas",
          solution: "Un único flujo desde la reserva hasta las notas y el seguimiento.",
        },
      ],
      features: [
        { icon: FileText, title: "Documentación de tratamientos", desc: "Notas, dictado de voz, protocolos e historial." },
        { icon: ClipboardCheck, title: "Consentimientos", desc: "Consentimiento digital con almacenamiento seguro." },
        { icon: Camera, title: "Documentación fotográfica", desc: "Fotos clínicas por visita." },
        { icon: Users, title: "Fichas de clientes", desc: "Todo el historial estético en una ficha." },
        { icon: Link2, title: "Reservas online", desc: "Primeras consultas reservadas online." },
        { icon: Workflow, title: "Flujos digitales", desc: "De la anamnesis al tratamiento y al seguimiento." },
      ],
      benefits: [
        "Documentación coherente entre todos los profesionales",
        "Trazabilidad clara del consentimiento en cada procedimiento",
        "Menos administración entre recepción y cabinas",
        "Experiencia profesional desde la primera reserva",
        "Alojado en la UE y diseñado para cumplir el RGPD",
      ],
      marketTitle: "Por qué las clínicas estéticas eligen Treatflow",
      marketParas: [
        "Detrás de una experiencia profesional hace falta una documentación fiable. Treatflow conecta la reserva con las fichas y las notas de tratamiento sin complicaciones innecesarias.",
      ],
      highlights: [
        "Reservas online sin comisión por cita",
        "Fichas de clientes digitales con historial de tratamientos",
        "Anamnesis y consentimientos completados antes de la visita",
        "Notas de tratamiento y documentación fotográfica",
        "Alojamiento en la UE, diseñado para cumplir el RGPD",
      ],
      aiSummary:
        "Treatflow es un software para clínicas estéticas con documentación de tratamientos, formularios de consentimiento, fichas de clientes, documentación fotográfica y reservas online. Para clínicas estéticas y centros de medicina estética. Alojado en la UE.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno para salones de belleza, clínicas estéticas y centros de depilación láser. Combina reservas online, fichas de clientes, formularios de consentimiento, documentación de tratamientos y recordatorios.",
        },
        {
          question: "¿Treatflow incluye consentimientos digitales para clínicas estéticas?",
          answer:
            "Sí. Tus clientes pueden rellenar la anamnesis y el consentimiento desde el móvil antes de la visita. Respuestas y firmas se guardan en la ficha, así la clínica tiene una trazabilidad clara para inyectables y otros tratamientos estéticos.",
        },
        {
          question: "¿Pueden varios profesionales compartir una misma cuenta de la clínica?",
          answer:
            "Sí. Fichas de clientes, consentimientos y notas de tratamiento se comparten con todo el equipo para que la documentación sea coherente.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Regístrate en app.treatflow.io y empieza una prueba gratuita de 14 días. Sin tarjeta de crédito. Disponible en todo el mundo.",
        },
        {
          question: "¿Puede una clínica estética guardar fotos de antes y después?",
          answer:
            "Sí. Las series de fotos se adjuntan a la visita del tratamiento y quedan en la ficha del cliente, así el siguiente profesional puede comparar la evolución.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
      featureKeys: ["client-records", "forms", "treatment-documentation", "pricing"],
      workflow: {
        title: "Cómo usa Treatflow una clínica estética",
        subtitle: "Historial estructurado, consentimiento, documentación y seguimiento para todo el equipo.",
        steps: [
          { href: "/en/online-booking", label: "Reserva de la consulta", desc: "El cliente reserva una consulta o un tratamiento en la página de reservas de tu clínica." },
          { href: "/en/forms", label: "Anamnesis y consentimiento", desc: "La anamnesis y el consentimiento digitales se completan antes del procedimiento y se guardan en la ficha." },
          { href: "/en/client-records", label: "Historial estructurado", desc: "Tratamientos anteriores, notas y contraindicaciones están a la vista de cada profesional." },
          { href: "/en/treatment-documentation", label: "Documentar y fotografiar", desc: "Notas de la sesión, dictado de voz opcional y fotos de antes y después quedan vinculados a la visita." },
          { href: "/en/messaging", label: "Seguimiento", desc: "Recordatorios y mensajes de cuidados posteriores mantienen la próxima cita en la agenda." },
        ],
      },
      images: {
        lifestyle: {
          src: "/images/lifestyle/formulare-digital-ausfuellen.png",
          alt: "Consentimiento digital rellenado en una tablet en una clínica estética",
        },
        mockup: {
          src: "/images/lifestyle/dokumentation-vorher-nachher.png",
          alt: "Fotos de antes y después del tratamiento guardadas en Treatflow",
        },
      },
    }),
    "laser-hair-removal-software": industry("laser-hair-removal-software", {
      serviceName: "Software para depilación láser",
      serviceDescription:
        "Software para centros de depilación láser: seguimiento de sesiones, formularios de consentimiento, documentación fotográfica y reservas online.",
      eyebrow: "Software para centros láser",
      h1: "Software de depilación láser para tratamientos por sesiones",
      subtitle:
        "Controla las sesiones, documenta el consentimiento y gestiona las reservas – pensado para centros de láser e IPL que necesitan fichas estructuradas.",
      aiCapsules: [
        {
          question: "¿Qué software necesita un centro de depilación láser?",
          answer:
            "Un centro láser necesita fichas de clientes con el historial de cada serie de tratamiento, formularios de consentimiento, notas por sesión, documentación fotográfica y recordatorios de citas. Treatflow ofrece reservas online y documentación estructurada para centros de depilación láser.",
        },
        {
          question: "¿Treatflow puede hacer seguimiento de bonos de varias sesiones?",
          answer:
            "Sí. Cada sesión se documenta en la ficha del cliente, así siempre ves la evolución, las notas sobre parámetros y cuándo toca la siguiente cita.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para centros de depilación láser?",
      whatParas: [
        "Los tratamientos láser se realizan en varias sesiones. Treatflow registra cada sesión, guarda el consentimiento y el fototipo, y recuerda al cliente cuándo le toca la siguiente cita.",
        "Los centros trabajan con una agenda para las reservas, una ficha para el historial y formularios digitales para la anamnesis – sin comisiones de marketplace.",
      ],
      audiences: [
        "Centros de depilación láser",
        "Clínicas de IPL con bonos de varias sesiones",
        "Centros de estética que ofrecen tratamientos láser",
        "Equipos con mucho volumen de reservas y necesidad de documentar",
      ],
      problems: [
        {
          problem: "Se pierde el control del avance de las sesiones",
          solution: "Historial y notas de cada sesión en la ficha del cliente.",
        },
        {
          problem: "Falta información de consentimiento",
          solution: "Anamnesis y consentimiento digitales guardados antes de cada serie.",
        },
        {
          problem: "Los clientes olvidan las sesiones de seguimiento",
          solution: "Recordatorios y nueva reserva sencilla desde tu página de reservas.",
        },
        {
          problem: "Fotos y notas en dispositivos distintos",
          solution: "Documentación fotográfica vinculada a cada ficha de cliente.",
        },
      ],
      features: [
        { icon: Zap, title: "Seguimiento de sesiones", desc: "Documenta cada sesión con notas, también por dictado de voz." },
        { icon: ClipboardCheck, title: "Consentimiento y anamnesis", desc: "Fototipo y contraindicaciones siempre registrados." },
        { icon: Camera, title: "Documentación fotográfica", desc: "Fotos de evolución por zona." },
        { icon: Calendar, title: "Planificación de series", desc: "Programa las citas de seguimiento." },
        { icon: Link2, title: "Reservas online", desc: "Tus clientes reservan las siguientes sesiones online." },
        { icon: Bell, title: "Recordatorios", desc: "Recordatorios de cita automáticos." },
      ],
      benefits: [
        "Visión clara de la serie de tratamiento de cada cliente",
        "Consentimiento estructurado para cada cliente nuevo",
        "Menos seguimiento manual de sesiones perdidas",
        "Documentación profesional y coherente en el equipo",
        "Alojado en la UE y diseñado para cumplir el RGPD",
      ],
      marketTitle: "Por qué los centros láser eligen Treatflow",
      marketParas: [
        "Los centros láser combinan mucho volumen de reservas con la necesidad de documentar. Treatflow conecta la reserva con la ficha, así cada sesión suma un historial útil del cliente.",
      ],
      highlights: [
        "Reservas online sin comisión por cita",
        "Historial de sesiones en fichas de clientes digitales",
        "Consentimientos antes de cada serie de tratamiento",
        "Documentación fotográfica y recordatorios",
        "Alojamiento en la UE, diseñado para cumplir el RGPD",
      ],
      aiSummary:
        "Treatflow es un software de depilación láser con seguimiento de sesiones, formularios de consentimiento, documentación fotográfica, reservas online y recordatorios. Para centros de láser e IPL. Alojado en la UE.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno para salones de belleza, clínicas estéticas y centros de depilación láser. Combina reservas online, fichas de clientes, formularios de consentimiento, documentación de tratamientos y recordatorios.",
        },
        {
          question: "¿Puede un centro de depilación láser documentar los tratamientos en Treatflow?",
          answer:
            "Sí. La documentación de tratamientos incluye parámetros, notas y fotos de antes y después por sesión.",
        },
        {
          question: "¿Para quién es esta página?",
          answer:
            "Para centros de depilación láser e IPL que necesitan seguimiento de sesiones, consentimientos y un sistema fiable para que los clientes vuelvan a reservar.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Regístrate en app.treatflow.io y empieza una prueba gratuita de 14 días. Sin tarjeta de crédito. Disponible en todo el mundo.",
        },
        {
          question: "¿Treatflow puede guardar las zonas tratadas y las notas de cada sesión láser?",
          answer:
            "Sí. Cada sesión puede incluir parámetros, zonas tratadas, notas y fotos en la ficha del cliente. Puedes escribir las notas o dictarlas por voz. La siguiente cita de la serie empieza con el historial completo.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "treatment-documentation", "forms", "pricing"],
      workflow: {
        title: "Cómo usa Treatflow un centro láser",
        subtitle: "Cada sesión parte de la anterior: consentimiento, zonas tratadas, notas, fotos y la próxima reserva.",
        steps: [
          { href: "/en/online-booking", label: "El cliente reserva una sesión", desc: "Clientes nuevos y habituales reservan en tu propio enlace, también las citas de seguimiento." },
          { href: "/en/forms", label: "Anamnesis y consentimiento", desc: "La anamnesis y el consentimiento se completan antes de la primera sesión y se guardan en la ficha." },
          { href: "/en/client-records", label: "Revisar el historial", desc: "Notas sobre el fototipo, parámetros anteriores y zonas tratadas en una sola ficha." },
          { href: "/en/treatment-documentation", label: "Documentar la sesión", desc: "Parámetros, zonas tratadas, notas de la sesión (escritas o dictadas) y fotos quedan vinculados a la visita." },
          { href: "/en/messaging", label: "Seguimiento de la serie", desc: "Los recordatorios hacen que el cliente vuelva a la siguiente cita de la serie." },
        ],
      },
      images: {
        lifestyle: {
          src: "/images/lifestyle/dokumentation-vorher-nachher.png",
          alt: "Documentación de un tratamiento láser con fotos de antes y después",
        },
        mockup: {
          src: "/images/lifestyle/formulare-digital-ausfuellen.png",
          alt: "Consentimiento digital para una cita de depilación láser",
        },
      },
    }),
    "permanent-makeup-software": industry("permanent-makeup-software", {
      serviceName: "Software para micropigmentación",
      serviceDescription:
        "Software para micropigmentación y maquillaje permanente: consentimientos, notas de pigmentos, documentación fotográfica, fichas de clientes y reservas online.",
      eyebrow: "Software para micropigmentación",
      h1: "Software de maquillaje permanente para artistas de micropigmentación",
      subtitle:
        "Consentimientos, documentación de pigmentos, planificación de retoques y fichas de clientes – pensado para estudios de micropigmentación que necesitan un historial preciso.",
      aiCapsules: [
        {
          question: "¿Qué software necesita un estudio de micropigmentación?",
          answer:
            "Un estudio de micropigmentación necesita consentimientos detallados, notas de pigmentos y técnicas, fotos de antes y después, planificación de retoques e historial de clientes. Treatflow une reservas, formularios y documentación con alojamiento en la UE conforme al RGPD.",
        },
        {
          question: "¿Puedo documentar pigmentos y retoques?",
          answer:
            "Sí. Las notas de tratamiento y las fotos quedan en la ficha del cliente, así cada retoque parte de la sesión anterior.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para maquillaje permanente?",
      whatParas: [
        "El maquillaje permanente exige una documentación precisa: pigmentos, zonas, técnicas y notas de cicatrización. Treatflow guarda ese historial en la ficha del cliente junto con el consentimiento y las fotos.",
        "Las artistas usan las reservas online para consultas y retoques, formularios digitales antes de cada procedimiento y recordatorios para que sus clientes vuelvan a tiempo.",
      ],
      audiences: [
        "Artistas de micropigmentación y microblading",
        "Estudios de micropigmentación con varias cabinas",
        "Salones de belleza que ofrecen cejas, labios y eyeliner permanentes",
        "Equipos que documentan pigmentos y ciclos de retoque",
      ],
      problems: [
        {
          problem: "Los detalles de pigmentos se pierden entre sesiones",
          solution: "Notas de tratamiento estructuradas en cada ficha de cliente.",
        },
        {
          problem: "Consentimiento en papel antes del procedimiento",
          solution: "Consentimiento digital completado antes de la cita.",
        },
        {
          problem: "Fechas de retoque apuntadas en libretas",
          solution: "Agenda, recordatorios y nueva reserva online en un solo lugar.",
        },
        {
          problem: "Fotos de antes y después difíciles de encontrar",
          solution: "Fotos vinculadas a la ficha del cliente y a cada visita.",
        },
      ],
      features: [
        { icon: FileText, title: "Notas de pigmentos y técnica", desc: "Documenta colores, agujas y zonas tratadas." },
        { icon: ClipboardCheck, title: "Consentimientos", desc: "Consentimiento digital antes de cada procedimiento." },
        { icon: Camera, title: "Documentación fotográfica", desc: "Fotos de antes y después en la ficha del cliente." },
        { icon: Calendar, title: "Planificación de retoques", desc: "Programa revisiones de cicatrización y retoques." },
        { icon: Users, title: "Fichas de clientes", desc: "Todo el historial de micropigmentación en un lugar." },
        { icon: Bell, title: "Recordatorios", desc: "Menos retoques olvidados." },
      ],
      benefits: [
        "Historial preciso para retoques más seguros",
        "Trazabilidad profesional del consentimiento de cada cliente",
        "Menos administración entre la consulta y el procedimiento",
        "Registro fotográfico claro para tu portfolio y el seguimiento",
        "Alojamiento en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los estudios de micropigmentación eligen Treatflow",
      marketParas: [
        "La micropigmentación vive de los detalles. Treatflow conecta la reserva con el consentimiento, las notas y las fotos, así cada visita queda documentada sin herramientas adicionales.",
      ],
      highlights: [
        "Reservas online sin comisión",
        "Consentimientos antes de cada procedimiento",
        "Documentación de pigmentos y técnicas",
        "Historial fotográfico vinculado a cada cliente",
        "Alojamiento en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es un software de maquillaje permanente con consentimientos, notas de pigmentos, documentación fotográfica, fichas de clientes, reservas online y recordatorios. Para estudios de micropigmentación y microblading. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno para estudios con reservas online, fichas de clientes, formularios de consentimiento, documentación de tratamientos y recordatorios – ideal para estudios de micropigmentación.",
        },
        {
          question: "¿Sirve para microblading?",
          answer:
            "Sí. Puedes documentar técnicas, pigmentos, fotos y la planificación de retoques para cejas, labios y eyeliner.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Regístrate en app.treatflow.io y empieza una prueba gratuita de 14 días. Sin tarjeta de crédito. Disponible en todo el mundo.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
      featureKeys: ["forms", "treatment-documentation", "client-records", "pricing"],
    }),
    "tattoo-studio-software": industry("tattoo-studio-software", {
      serviceName: "Software para estudios de tatuaje",
      serviceDescription:
        "Software para estudios de tatuaje: consentimientos, fichas de clientes, reserva de citas, notas de sesión y recordatorios.",
      eyebrow: "Software para estudios de tatuaje",
      h1: "Software para estudios de tatuaje modernos",
      subtitle:
        "Consentimiento digital, fichas de clientes, notas de sesión y reservas online – pensado para estudios de tatuaje que quieren menos papeleo y una agenda más clara.",
      aiCapsules: [
        {
          question: "¿Qué software necesita un estudio de tatuaje?",
          answer:
            "Un estudio de tatuaje necesita consentimientos y descargos de responsabilidad digitales, fichas de clientes, notas de sesión, fotos de referencia y una reserva de citas fiable con recordatorios. Treatflow lo reúne todo en una plataforma conforme al RGPD con alojamiento en la UE.",
        },
        {
          question: "¿Treatflow sustituye los consentimientos en papel?",
          answer:
            "Sí. Tus clientes pueden completar el consentimiento digital antes de la cita, así tu equipo empieza cada sesión con el papeleo ya hecho.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para estudios de tatuaje?",
      whatParas: [
        "Treatflow ayuda a los estudios de tatuaje a reunir consentimientos, reservas e historial de clientes en un solo sistema. Los artistas ven notas y fotos en la ficha del cliente; recepción gestiona la agenda.",
        "Las reservas online y los recordatorios reducen las ausencias, y los formularios digitales eliminan el papeleo antes de cada sesión.",
      ],
      audiences: [
        "Estudios de tatuaje y estudios privados",
        "Estudios con varios artistas que comparten agenda",
        "Estudios que ofrecen tatuajes y seguimiento de cuidados posteriores",
        "Equipos que quieren dejar atrás los consentimientos y agendas en papel",
      ],
      problems: [
        {
          problem: "Consentimientos en papel y archivadores",
          solution: "Consentimiento digital guardado de forma segura en la ficha del cliente.",
        },
        {
          problem: "Citas duplicadas entre artistas",
          solution: "Agenda compartida con disponibilidad clara.",
        },
        {
          problem: "Notas de sesión en el móvil y en papel",
          solution: "Notas de tratamiento y fotos vinculadas a cada cliente.",
        },
        {
          problem: "Los clientes olvidan la señal o la hora de la cita",
          solution: "Recordatorios por WhatsApp y email.",
        },
      ],
      features: [
        { icon: ClipboardCheck, title: "Consentimientos y descargos", desc: "Formularios digitales antes de cada sesión." },
        { icon: Users, title: "Fichas de clientes", desc: "Historial, notas y contactos en una ficha." },
        { icon: FileText, title: "Notas de sesión", desc: "Documenta el trabajo, los cuidados posteriores y los próximos pasos." },
        { icon: Camera, title: "Fotos de referencia", desc: "Guarda referencias y fotos de evolución." },
        { icon: Link2, title: "Reservas online", desc: "Tus clientes solicitan o reservan huecos disponibles." },
        { icon: Calendar, title: "Agenda del estudio", desc: "Coordina artistas y cabinas." },
      ],
      benefits: [
        "Menos papeleo antes de cada sesión",
        "Agendas más claras entre artistas",
        "Historial del cliente listo para retoques y cover-ups",
        "Menos citas perdidas gracias a los recordatorios",
        "Alojamiento en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los estudios de tatuaje eligen Treatflow",
      marketParas: [
        "Un estudio de tatuaje necesita consentimientos y una buena agenda tanto como herramientas creativas. Treatflow se centra en la gestión del estudio – reservas, formularios y fichas – sin comisiones de marketplace.",
      ],
      highlights: [
        "Consentimiento digital antes de cada sesión",
        "Agenda compartida para estudios con varios artistas",
        "Fichas de clientes con notas y fotos",
        "Recordatorios para reducir ausencias",
        "Alojamiento en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es un software para estudios de tatuaje con consentimiento digital, fichas de clientes, notas de sesión, documentación fotográfica, reservas online y recordatorios. Para estudios de tatuaje y estudios con varios artistas. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software de gestión para estudios con reservas online, fichas de clientes, formularios de consentimiento, documentación y recordatorios – ideal para estudios de tatuaje.",
        },
        {
          question: "¿Pueden varios artistas compartir un mismo estudio?",
          answer:
            "Sí. Una agenda compartida y las fichas de clientes ayudan a que los estudios con varios artistas estén bien organizados.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Regístrate en app.treatflow.io y empieza una prueba gratuita de 14 días. Sin tarjeta de crédito. Disponible en todo el mundo.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["forms", "online-booking", "client-records", "pricing"],
    }),
    "nail-salon-software": industry("nail-salon-software", {
      serviceName: "Software para salones de uñas",
      serviceDescription:
        "Software para salones de uñas: reservas online, fichas de clientas, recordatorios de citas y notas de cada servicio.",
      eyebrow: "Software para salones de uñas",
      h1: "Software para salones de uñas con mucho movimiento",
      subtitle:
        "Reservas online, preferencias de cada clienta, recordatorios y una agenda clara – pensado para salones de uñas y nail bars con un gran volumen de citas.",
      aiCapsules: [
        {
          question: "¿Cuál es el mejor software para salones de uñas?",
          answer:
            "A un salón de uñas le interesa tener reservas online sin comisiones, una agenda de equipo clara, notas sobre las preferencias de cada clienta y recordatorios automáticos. Treatflow lo reúne todo, con alojamiento en la UE conforme al RGPD.",
        },
        {
          question: "¿Pueden las clientas reservar el relleno online?",
          answer:
            "Sí. Tus clientas reservan sus servicios en tu propia página de reservas a cualquier hora – sin tarifas de marketplace.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para salones de uñas?",
      whatParas: [
        "Un salón de uñas vive de las clientas que repiten. Treatflow mantiene la agenda ordenada, guarda las preferencias de cada clienta y envía recordatorios para que los rellenos y los nuevos esmaltados lleguen a su hora.",
        "Las fichas digitales ayudan a tu equipo a recordar formas, colores y alergias – sin tener que buscar en chats y libretas.",
      ],
      audiences: [
        "Salones de uñas y nail bars",
        "Centros de manicura y pedicura",
        "Equipos con varias manicuristas y agenda compartida",
        "Salones que quieren dejar de gestionar reservas por mensajes de Instagram",
      ],
      problems: [
        {
          problem: "Reservas repartidas entre mensajes directos y llamadas",
          solution: "Una página de reservas online y una agenda compartida.",
        },
        {
          problem: "Preferencias de clientas que se olvidan",
          solution: "Notas sobre color, forma y alergias en la ficha de la clienta.",
        },
        {
          problem: "Muchas ausencias en los rellenos",
          solution: "Recordatorios automáticos por WhatsApp y email.",
        },
        {
          problem: "Traspasos complicados entre manicuristas",
          solution: "Historial compartido de cada clienta.",
        },
      ],
      features: [
        { icon: Link2, title: "Reservas online", desc: "Página de reservas 24/7 sin comisión." },
        { icon: Calendar, title: "Agenda del equipo", desc: "Coordina manicuristas y puestos de trabajo." },
        { icon: Users, title: "Fichas de clientas", desc: "Preferencias, historial y notas." },
        { icon: Bell, title: "Recordatorios", desc: "Menos rellenos perdidos y menos huecos en la agenda." },
        { icon: ClipboardCheck, title: "Formularios de admisión", desc: "Registra alergias y preferencias en digital." },
        { icon: FileText, title: "Notas de visita", desc: "Documenta servicios y productos utilizados." },
      ],
      benefits: [
        "Menos mensajes de reserva que gestionar",
        "Días más fluidos con una agenda de equipo clara",
        "Clientas que se sienten recordadas gracias a sus preferencias",
        "Menos ausencias gracias a los recordatorios",
        "Alojamiento en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los salones de uñas eligen Treatflow",
      marketParas: [
        "Un salón de uñas con mucho volumen necesita reservas y memoria de clientas más que módulos clínicos complejos. Treatflow mantiene el día a día sencillo y, aun así, ofrece formularios y documentación cuando los necesitas.",
      ],
      highlights: [
        "Reservas online sin comisiones",
        "Agenda compartida para manicuristas",
        "Historial de preferencias de cada clienta",
        "Recordatorios automáticos",
        "Alojamiento en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es un software para salones de uñas con reservas online, fichas de clientas, notas de preferencias, recordatorios y formularios digitales. Para salones de uñas y nail bars con varias manicuristas. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno para centros de belleza con reservas online, fichas de clientas, formularios, documentación y recordatorios – ideal también para salones de uñas.",
        },
        {
          question: "¿Treatflow cobra por reserva?",
          answer:
            "No. No hay comisión por cita.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Regístrate en app.treatflow.io y empieza una prueba gratuita de 14 días. Sin tarjeta de crédito. Disponible en todo el mundo.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    }),
    "lash-studio-software": industry("lash-studio-software", {
      serviceName: "Software para estudios de pestañas",
      serviceDescription:
        "Software para estudios de pestañas: planificación de rellenos, fichas de clientas, consentimientos, fotos y reservas online.",
      eyebrow: "Software para estudios de pestañas",
      h1: "Software para estudios de extensiones de pestañas",
      subtitle:
        "Planifica rellenos, guarda el mapping y los consentimientos, envía recordatorios y conserva las fotos de cada clienta – pensado para estudios de pestañas que viven de la fidelización.",
      aiCapsules: [
        {
          question: "¿Qué software necesita un estudio de pestañas?",
          answer:
            "Un estudio de pestañas necesita planificar rellenos, anotar preferencias y mapping de cada clienta, formularios de consentimiento, fotos de evolución y recordatorios. Treatflow combina reservas, fichas y formularios con alojamiento en la UE conforme al RGPD.",
        },
        {
          question: "¿Puedo controlar el intervalo de relleno de cada clienta?",
          answer:
            "Sí. El historial de visitas y las notas quedan en la ficha de la clienta, así sabes cuándo toca el siguiente relleno y qué le aplicaste la última vez.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para estudios de pestañas?",
      whatParas: [
        "Un estudio de pestañas crece con los rellenos. Treatflow mantiene la agenda llena, documenta curvatura, longitud y mapping, y recuerda a tus clientas su próxima cita.",
        "Los consentimientos digitales y la documentación fotográfica te ayudan a trabajar con estándares profesionales sin restar tiempo en la camilla.",
      ],
      audiences: [
        "Estudios de extensiones de pestañas",
        "Salones de belleza con lash artists propias",
        "Lash artists autónomas que gestionan sus propias reservas",
        "Equipos que coordinan rellenos en varias camillas",
      ],
      problems: [
        {
          problem: "Fechas de relleno anotadas en hojas de cálculo",
          solution: "Historial de clientas y recordatorios en un solo sistema.",
        },
        {
          problem: "Preferencias de mapping que se olvidan",
          solution: "Notas y fotos en la ficha de cada clienta.",
        },
        {
          problem: "Consentimientos todavía en papel",
          solution: "Formularios digitales completados antes de la cita.",
        },
        {
          problem: "Bandeja de entrada llena de peticiones de cita",
          solution: "Página de reservas online sin comisión.",
        },
      ],
      features: [
        { icon: Calendar, title: "Planificación de rellenos", desc: "Organiza juegos completos y rellenos con disponibilidad clara." },
        { icon: Users, title: "Ficha y notas de pestañas", desc: "Curvatura, longitud, mapping y adhesivos siempre a mano." },
        { icon: ClipboardCheck, title: "Formularios de consentimiento", desc: "Admisión digital antes de cada juego nuevo." },
        { icon: Camera, title: "Fotos de evolución", desc: "Documenta el resultado de cada visita." },
        { icon: Link2, title: "Reservas online", desc: "Tus clientas reservan rellenos 24/7." },
        { icon: Bell, title: "Recordatorios de relleno", desc: "Mantén alta la fidelización con recordatorios automáticos." },
      ],
      benefits: [
        "Más clientas que vuelven a tiempo gracias a los recordatorios",
        "Resultados coherentes con preferencias documentadas",
        "Menos administración junto a la camilla",
        "Consentimientos y fotos con registro profesional",
        "Alojamiento en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los estudios de pestañas eligen Treatflow",
      marketParas: [
        "Un estudio de pestañas necesita herramientas de fidelización tanto como de reservas. Treatflow conecta las citas con las notas de cada clienta y los recordatorios para que los rellenos sean previsibles.",
      ],
      highlights: [
        "Reservas online sin comisiones",
        "Notas de preferencias y mapping",
        "Consentimientos antes de cada juego nuevo",
        "Recordatorios de relleno e historial de fotos",
        "Alojamiento en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es un software para estudios de pestañas con planificación de rellenos, notas de clientas, formularios de consentimiento, documentación fotográfica, reservas online y recordatorios. Para estudios de extensiones de pestañas. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno para centros de belleza con reservas online, fichas de clientas, formularios de consentimiento, documentación y recordatorios – ideal también para estudios de pestañas.",
        },
        {
          question: "¿Sirve para lash artists que trabajan solas?",
          answer:
            "Sí. Muchas profesionales autónomas usan Treatflow para reservas, recordatorios e historial de clientas sin comisiones de marketplace.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Regístrate en app.treatflow.io y empieza una prueba gratuita de 14 días. Sin tarjeta de crédito. Disponible en todo el mundo.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
      featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    }),
    "spa-wellness-software": industry("spa-wellness-software", {
      serviceName: "Software para spa y wellness",
      serviceDescription:
        "Software para spas y centros de wellness: reservas online, fichas de clientes, notas de tratamiento, formularios de consentimiento y recordatorios.",
      eyebrow: "Software para spa y wellness",
      h1: "Software para spa y wellness con una gestión tranquila",
      subtitle:
        "Coordina cabinas, terapeutas y bonos con reservas online, historial de clientes y formularios digitales – sin comisiones de marketplace.",
      aiCapsules: [
        {
          question: "¿Qué software necesita un spa?",
          answer:
            "Un spa necesita planificar varios recursos a la vez, reservas online, preferencias de cada cliente, notas de tratamiento y recordatorios. Treatflow da soporte a spas y centros de wellness con alojamiento en la UE conforme al RGPD.",
        },
        {
          question: "¿Puede Treatflow gestionar bonos y visitas recurrentes?",
          answer:
            "Sí. El historial de clientes y los recordatorios te ayudan a gestionar tratamientos en serie y a tus clientes habituales de wellness.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para spas y centros de wellness?",
      whatParas: [
        "Un spa equilibra ambiente y operativa. Treatflow mantiene las reservas organizadas, guarda las preferencias de cada cliente y documenta los tratamientos para que la experiencia sea fluida de principio a fin.",
        "Los formularios de admisión digitales y los recordatorios descargan la recepción, mientras los terapeutas tienen a mano las notas que necesitan.",
      ],
      audiences: [
        "Day spas y centros de wellness",
        "Spas de hotel y spas boutique",
        "Centros de wellness con varios terapeutas",
        "Centros que combinan masajes, faciales y tratamientos corporales",
      ],
      problems: [
        {
          problem: "Conflictos de cabinas y terapeutas",
          solution: "Agenda compartida con planificación clara de recursos.",
        },
        {
          problem: "Preferencias de clientes que se pierden entre visitas",
          solution: "Fichas de clientes con notas e historial.",
        },
        {
          problem: "Formularios en papel en recepción",
          solution: "Formularios digitales completados antes de la llegada.",
        },
        {
          problem: "Ausencias en tratamientos largos",
          solution: "Recordatorios automáticos antes de cada cita.",
        },
      ],
      features: [
        { icon: Calendar, title: "Agenda del spa", desc: "Coordina cabinas, terapeutas y servicios." },
        { icon: Link2, title: "Reservas online", desc: "Tus clientes reservan tratamientos 24/7 sin comisión." },
        { icon: Users, title: "Perfiles de clientes", desc: "Preferencias, historial y notas en un solo lugar." },
        { icon: ClipboardCheck, title: "Formularios de admisión", desc: "Cuestionarios de salud y consentimientos antes de la visita." },
        { icon: FileText, title: "Notas de tratamiento", desc: "Documenta cada servicio para una atención coherente." },
        { icon: Bell, title: "Recordatorios", desc: "Menos ausencias en citas largas." },
      ],
      benefits: [
        "Traspasos más fluidos entre recepción y cabina",
        "Clientes que se sienten reconocidos gracias a su historial de preferencias",
        "Menos papel en recepción",
        "Más asistencia a las citas gracias a los recordatorios",
        "Alojamiento en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los spas eligen Treatflow",
      marketParas: [
        "Un software para spa debe proteger la experiencia del cliente, no complicarla. Treatflow conecta las reservas con las fichas y los formularios para que la operativa siga siendo tranquila y profesional.",
      ],
      highlights: [
        "Reservas online sin comisiones",
        "Agenda compartida para cabinas y terapeutas",
        "Historial de preferencias de cada cliente",
        "Admisión digital y notas de tratamiento",
        "Alojamiento en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es un software para spa y wellness con reservas online, fichas de clientes, formularios de admisión, notas de tratamiento y recordatorios. Para day spas y centros de wellness. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno para centros de belleza, spas y wellness con reservas online, fichas de clientes, formularios, documentación y recordatorios.",
        },
        {
          question: "¿Es adecuado para day spas?",
          answer:
            "Sí. Los day spas usan Treatflow para coordinar reservas, el historial de sus clientes y los formularios de admisión digitales.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Regístrate en app.treatflow.io y empieza una prueba gratuita de 14 días. Sin tarjeta de crédito. Disponible en todo el mundo.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
    }),
    "massage-software": industry("massage-software", {
      serviceName: "Software para centros de masaje",
      serviceDescription:
        "Software para masajistas y centros de masaje: reservas online, fichas de clientes, formularios de admisión, notas de sesión y recordatorios.",
      eyebrow: "Software para centros de masaje",
      h1: "Software para masajistas y centros de masaje",
      subtitle:
        "Reservas online, formularios de admisión, notas de sesión y recordatorios – pensado para masajistas autónomos y centros con varias cabinas.",
      aiCapsules: [
        {
          question: "¿Qué software necesita un masajista?",
          answer:
            "Un masajista necesita reservas online sencillas, formularios de admisión y consentimiento, notas de sesión, historial de clientes y recordatorios. Treatflow lo ofrece con alojamiento en la UE conforme al RGPD y sin comisiones por reserva.",
        },
        {
          question: "¿Treatflow sirve para masajistas autónomos?",
          answer:
            "Sí. Muchos masajistas autónomos usan Treatflow para gestionar su agenda, las fichas de clientes y los recordatorios sin tarifas de marketplace.",
        },
      ],
      whatTitle: "¿Qué es Treatflow para centros de masaje?",
      whatParas: [
        "Treatflow ayuda a los masajistas a dedicar menos tiempo a la administración y más a sus clientes. Reservas, formularios de admisión y notas de sesión están en un solo lugar.",
        "Los centros con varias cabinas coordinan la disponibilidad, y el historial de cada cliente sigue siendo privado y accesible para el terapeuta que lo atiende.",
      ],
      audiences: [
        "Masajistas autónomos",
        "Centros de masaje con varias cabinas",
        "Centros de wellness con masajes terapéuticos y de relajación",
        "Equipos que dejan atrás los formularios en papel y las reservas por teléfono",
      ],
      problems: [
        {
          problem: "Reservas solo por teléfono y llamadas perdidas",
          solution: "Página de reservas online disponible 24/7.",
        },
        {
          problem: "Formularios de admisión en papel",
          solution: "Cuestionarios de salud y consentimientos digitales antes de la sesión.",
        },
        {
          problem: "Notas de sesión difíciles de encontrar",
          solution: "Notas guardadas en la ficha del cliente.",
        },
        {
          problem: "Clientes que olvidan sus citas",
          solution: "Recordatorios automáticos por WhatsApp y email.",
        },
      ],
      features: [
        { icon: Link2, title: "Reservas online", desc: "Tus clientes reservan sus masajes sin comisión." },
        { icon: ClipboardCheck, title: "Formularios de admisión", desc: "Historial de salud y consentimiento en digital." },
        { icon: FileText, title: "Notas de sesión", desc: "Documenta zonas tratadas y evolución." },
        { icon: Users, title: "Fichas de clientes", desc: "Historial completo de los clientes que repiten." },
        { icon: Calendar, title: "Agenda del centro", desc: "Coordina terapeutas y cabinas." },
        { icon: Bell, title: "Recordatorios", desc: "Menos ausencias." },
      ],
      benefits: [
        "Menos administración entre sesiones",
        "Admisión más segura con formularios digitales",
        "Mejor continuidad del tratamiento gracias a las notas",
        "Menos citas perdidas",
        "Alojamiento en la UE conforme al RGPD",
      ],
      marketTitle: "Por qué los profesionales del masaje eligen Treatflow",
      marketParas: [
        "Un centro de masaje necesita reservas fiables y fichas claras más que sistemas complejos. Treatflow se centra en citas, formularios y documentación.",
      ],
      highlights: [
        "Reservas online sin comisiones",
        "Admisión y consentimiento digitales",
        "Notas de sesión en la ficha del cliente",
        "Recordatorios para clientes habituales",
        "Alojamiento en la UE conforme al RGPD",
      ],
      aiSummary:
        "Treatflow es un software para centros de masaje con reservas online, formularios de admisión, notas de sesión, fichas de clientes y recordatorios. Para masajistas y centros con varias cabinas. Conforme al RGPD.",
      faqs: [
        {
          question: "¿Qué es Treatflow?",
          answer:
            "Treatflow es un software todo en uno con reservas online, fichas de clientes, formularios, documentación y recordatorios – ideal para masajistas y centros de masaje.",
        },
        {
          question: "¿Lo pueden usar masajistas autónomos?",
          answer:
            "Sí. Los profesionales autónomos gestionan reservas, formularios y notas sin comisiones de marketplace.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Regístrate en app.treatflow.io y empieza una prueba gratuita de 14 días. Sin tarjeta de crédito. Disponible en todo el mundo.",
        },
        {
          question: "¿Dónde se alojan los datos?",
          answer:
            "Treatflow aloja los datos en la UE y está diseñado para cumplir el RGPD.",
        },
      ],
      siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
      featureKeys: ["online-booking", "forms", "client-records", "pricing"],
    }),
  },
};
