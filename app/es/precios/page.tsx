import { buildPageMetadata } from "@/app/i18n/seo";
import PricingPageIntl from "@/app/components/PricingPageIntl";

export const metadata = buildPageMetadata({
  pageKey: "pricing",
  locale: "es",
  title: "Precios",
  description:
    "Precios transparentes de Treatflow: Basic desde 39 EUR/mes, Booking desde 59 EUR/mes. Solicita acceso anticipado para tu país.",
});

export default function EsPricingPage() {
  return (
    <PricingPageIntl
      content={{
        title: "Precios simples y transparentes",
        subtitle:
          "El registro directo está disponible en Alemania, Austria y Suiza. En otros países solicita acceso anticipado.",
        monthLabel: "/ mes",
        earlyAccessHref: "/es/acceso-anticipado",
        ctaLabel: "Solicitar acceso anticipado",
        plans: [
          {
            name: "Basic",
            price: "39",
            description: "Ideal para salones pequeños y profesionales independientes.",
            features: [
              "Calendario de citas",
              "Fichas de clientes digitales",
              "Anamnesis y consentimientos",
              "Documentación de tratamientos",
              "Soporte personal",
            ],
            highlighted: false,
          },
          {
            name: "Booking",
            price: "59",
            description: "Ideal para salones en crecimiento con reservas online.",
            features: [
              "Todo de Basic",
              "Página de reserva online 24/7",
              "Recordatorios SMS y email",
              "Códigos de descuento",
              "Reserva multilingüe",
            ],
            highlighted: true,
          },
        ],
      }}
    />
  );
}
