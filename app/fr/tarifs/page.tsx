import { buildPageMetadata } from "@/app/i18n/seo";
import PricingPageIntl from "@/app/components/PricingPageIntl";

export const metadata = buildPageMetadata({
  pageKey: "pricing",
  locale: "fr",
  title: "Tarifs",
  description:
    "Tarifs transparents Treatflow : Basic dès 39 EUR/mois, Booking dès 59 EUR/mois. Demandez un accès anticipé pour votre pays.",
});

export default function FrPricingPage() {
  return (
    <PricingPageIntl
      content={{
        title: "Tarifs simples et transparents",
        subtitle:
          "L'inscription directe est disponible en Allemagne, Autriche et Suisse. Dans les autres pays, demandez un accès anticipé.",
        monthLabel: "/ mois",
        earlyAccessHref: "/fr/acces-anticipe",
        ctaLabel: "Demander un accès anticipé",
        plans: [
          {
            name: "Basic",
            price: "39",
            description: "Parfait pour les petits instituts et indépendants.",
            features: [
              "Calendrier de rendez-vous",
              "Fiches clients numériques",
              "Anamnèse et consentements",
              "Documentation des soins",
              "Support personnel",
            ],
            highlighted: false,
          },
          {
            name: "Booking",
            price: "59",
            description: "Idéal pour les instituts en croissance avec réservation en ligne.",
            features: [
              "Tout Basic",
              "Page de réservation en ligne 24/7",
              "Rappels SMS et e-mail",
              "Codes promo",
              "Réservation multilingue",
            ],
            highlighted: true,
          },
        ],
      }}
    />
  );
}
