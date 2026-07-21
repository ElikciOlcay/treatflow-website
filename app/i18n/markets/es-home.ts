import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import {
  Calendar,
  ClipboardCheck,
  FileText,
  Link2,
  Users,
} from "lucide-react";

export const esHomeContent: InternationalPageContent = {
  pageKey: "home",
  locale: "es",
  canonicalPath: "/es",
  serviceName: "Treatflow – Software para salones de belleza",
  serviceDescription:
    "Software todo en uno para salones de belleza y clínicas estéticas: agenda, reservas online, fichas de clientes, formularios y documentación de tratamientos.",
  areaServed: ["ES", "MX", "AR", "CO", "CL", "PE", "EU"],
  ctaPrimaryLabel: "Solicitar acceso anticipado",
  ctaBottomTitle: "¿Listo para digitalizar tu salón?",
  ctaBottomText:
    "Solicita acceso anticipado para tu país. El registro directo está disponible actualmente en Alemania, Austria y Suiza.",
  trustTrialLabel: "Acceso anticipado disponible",
  hero: {
    marketLabel: "España & LATAM",
    eyebrow: "Software para salones de belleza",
    h1: "Software todo en uno para salones de belleza y clínicas estéticas",
    subtitle:
      "Agenda, reservas online, fichas de clientes, consentimientos digitales y documentación de tratamientos – sin comisiones por reserva. Cumple con el RGPD. Hecho en Austria.",
  },
  aiCapsules: [
    {
      question: "¿Qué es Treatflow?",
      answer:
        "Treatflow es un software SaaS para salones de belleza y clínicas estéticas. Incluye agenda, reservas online, fichas de clientes, formularios de anamnesis/consentimiento y documentación de tratamientos. Servidores en la UE, RGPD. El registro directo está disponible en DACH; otros países pueden solicitar acceso anticipado.",
    },
    {
      question: "¿Treatflow cobra comisión por reserva?",
      answer:
        "No. Treatflow es software propio del salón, no un marketplace. No hay comisión por cita. Precios fijos desde 39 EUR/mes (Basic) o 59 EUR/mes (Booking).",
    },
  ],
  whatIsTreatflow: {
    title: "Qué es Treatflow",
    paragraphs: [
      "Treatflow centraliza la gestión del salón: citas, clientes, formularios y documentación clínica/estética en una sola aplicación web.",
      "Está pensado para cosméticas, centros de láser, micropigmentación, uñas, pestañas, spas y medicina estética que quieren digitalizar sin depender de un marketplace.",
    ],
  },
  whoIsItFor: {
    title: "Para quién es",
    audiences: [
      "Salones de belleza y centros de estética",
      "Clínicas de medicina estética",
      "Estudios de depilación láser",
      "Centros de micropigmentación y pestañas",
      "Spas y wellness",
    ],
  },
  problems: {
    title: "Problemas que resolvemos",
    items: [
      {
        problem: "Agenda en papel o Excel caótica",
        solution: "Calendario digital con vistas por profesional, evita dobles reservas y muestra la ocupación.",
      },
      {
        problem: "Llamadas todo el día para citas",
        solution: "Reservas online 24/7 con tu propio enlace, sin comisión por booking.",
      },
      {
        problem: "Consentimientos en papel",
        solution: "Formularios digitales de anamnesis y consentimiento enviados antes de la cita.",
      },
    ],
  },
  features: {
    title: "Funciones principales",
    items: [
      {
        icon: Calendar,
        title: "Calendario de citas",
        desc: "Vistas diaria, semanal y mensual con arrastrar y soltar.",
      },
      {
        icon: Link2,
        title: "Reservas online",
        desc: "Enlace personal para que tus clientas reserven a cualquier hora.",
      },
      {
        icon: Users,
        title: "Fichas de clientes",
        desc: "Historial, fotos, notas y tratamientos en un solo lugar.",
      },
      {
        icon: ClipboardCheck,
        title: "Formularios",
        desc: "Anamnesis y consentimientos digitales con firma.",
      },
      {
        icon: FileText,
        title: "Documentación",
        desc: "Registra tratamientos, parámetros y fotos de forma profesional.",
      },
    ],
  },
  benefits: {
    title: "Ventajas",
    items: [
      "Sin comisión por reserva",
      "Datos del cliente son tuyos",
      "Servidores en la UE / RGPD",
      "Precios transparentes en EUR",
      "Soporte cercano del equipo fundador",
    ],
  },
  marketFit: {
    title: "Treatflow para el mercado hispanohablante",
    paragraphs: [
      "Estamos abriendo Treatflow fuera del DACH. Los estudios en España y Latinoamérica pueden solicitar acceso anticipado mientras preparamos la experiencia local (idioma, onboarding y soporte).",
      "Mientras tanto ya puedes conocer el producto en español y solicitar acceso anticipado para tu salón.",
    ],
    highlights: [
      "RGPD / protección de datos UE",
      "Software propio, no marketplace",
      "Acceso anticipado por solicitud",
      "Soporte cercano del equipo",
    ],
  },
  aiSummary: {
    title: "En resumen",
    text: "Treatflow es el software de gestión para salones de belleza y clínicas estéticas: agenda, reservas online, fichas de clientes, formularios y documentación. Desde 39 EUR/mes, sin comisiones, servidores en la UE y conforme al RGPD. El registro directo está disponible en Alemania, Austria y Suiza; en otros países puedes solicitar acceso anticipado.",
  },
  faqs: [
    {
      question: "¿Puedo registrarme ya desde España?",
      answer:
        "El registro directo está abierto en Alemania, Austria y Suiza. Desde España y otros países puedes solicitar acceso anticipado en /es/acceso-anticipado.",
    },
    {
      question: "¿Cuánto cuesta Treatflow?",
      answer:
        "Basic desde 39 EUR/mes y Booking desde 59 EUR/mes (más IVA). Pago anual con descuento. Sin comisiones por reserva.",
    },
    {
      question: "¿Cumple el RGPD?",
      answer:
        "Sí. Treatflow está alojado en servidores de la UE y está diseñado para estudios que necesitan cumplir el RGPD.",
    },
  ],
  internalLinks: [
    { href: "/es/software-salon-belleza", label: "Software salón de belleza" },
    { href: "/es/precios", label: "Precios" },
    { href: "/es/calendario-citas", label: "Calendario" },
    { href: "/es/reservas-online", label: "Reservas online" },
    { href: "/es/acceso-anticipado", label: "Acceso anticipado" },
  ],
  internalLinksTitle: "Páginas relacionadas",
};
