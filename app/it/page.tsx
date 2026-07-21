import { buildPageMetadata } from "@/app/i18n/seo";
import HomePageIntl from "@/app/components/HomePageIntl";
import { itHomePage } from "@/app/i18n/markets/home-pages";

export const metadata = buildPageMetadata({
  pageKey: "home",
  locale: "it",
  title: "Software per centri estetici e cliniche estetiche",
  description:
    "Calendario, prenotazioni online, schede clienti, moduli e documentazione trattamenti. Nessuna commissione. GDPR. Richiedi l'accesso anticipato a Treatflow.",
  keywords: [
    "software centro estetico",
    "software estetista",
    "prenotazioni online estetista",
    "scheda cliente estetica",
    "software clinica estetica",
  ],
});

export default function ItHomePage() {
  return <HomePageIntl content={itHomePage} />;
}
