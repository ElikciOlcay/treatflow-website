import { buildPageMetadata } from "@/app/i18n/seo";
import HomePageIntl from "@/app/components/HomePageIntl";
import { frHomePage } from "@/app/i18n/markets/home-pages";

export const metadata = buildPageMetadata({
  pageKey: "home",
  locale: "fr",
  title: "Logiciel pour instituts de beauté et cliniques esthétiques",
  description:
    "Agenda, réservation en ligne, fiches clients, formulaires et documentation des soins. Sans commission. RGPD. Demandez un accès anticipé à Treatflow.",
  keywords: [
    "logiciel institut de beauté",
    "logiciel esthétique",
    "réservation en ligne institut",
    "fiche client esthétique",
    "logiciel clinique esthétique",
  ],
});

export default function FrHomePage() {
  return <HomePageIntl content={frHomePage} />;
}
