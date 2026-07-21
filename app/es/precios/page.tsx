import { buildPageMetadata } from "@/app/i18n/seo";
import PricingPageIntl from "@/app/components/PricingPageIntl";

export const metadata = buildPageMetadata({
  pageKey: "pricing",
  locale: "es",
  title: "Precios Treatflow | Software para salones de belleza",
  description:
    "Precios claros en euros: Basic desde 39 €/mes, Booking desde 59 €/mes. Sin comisión por reserva. Solicita acceso anticipado para España y Latinoamérica.",
  keywords: [
    "precios software salón belleza",
    "software estética precio",
    "reservas online sin comisión",
  ],
});

export default function EsPricingPage() {
  return (
    <PricingPageIntl
      content={{
        title: "Precios claros, en euros",
        subtitle:
          "Sin comisión por cita y sin sorpresas de marketplace. En España y LATAM empieza con acceso anticipado; el alta directa está abierta primero en DACH.",
        monthLabel: "/ mes",
        earlyAccessHref: "/es/acceso-anticipado",
        ctaLabel: "Solicitar acceso anticipado",
        footerNote:
          "Precios orientativos en EUR (sin IVA u otros impuestos locales). Al activar tu cuenta te confirmamos el importe y la facturación según tu país. Cancela cuando quieras.",
        plans: [
          {
            name: "Basic",
            price: "39",
            description: "Para profesionales independientes y salones pequeños.",
            features: [
              "Agenda de citas",
              "Ficha digital de clientas",
              "Anamnesis y consentimientos",
              "Documentación de tratamientos",
              "Soporte personal",
            ],
            highlighted: false,
          },
          {
            name: "Booking",
            price: "59",
            description: "Para centros que quieren crecer con reservas online propias.",
            features: [
              "Todo de Basic",
              "Página de reserva 24/7 (tu enlace)",
              "Recordatorios SMS y email",
              "Códigos de descuento",
              "Reserva en varios idiomas",
              "Sin comisión por reserva",
            ],
            highlighted: true,
          },
        ],
      }}
    />
  );
}
