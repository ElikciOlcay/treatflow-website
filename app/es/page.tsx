import { buildPageMetadata } from "@/app/i18n/seo";
import HomePageIntl from "@/app/components/HomePageIntl";
import { esHomePage } from "@/app/i18n/markets/home-pages";

export const metadata = buildPageMetadata({
  pageKey: "home",
  locale: "es",
  title: "Software para salones de belleza y clínicas estéticas",
  description:
    "Agenda, reservas online, fichas de clientes, formularios y documentación de tratamientos. Sin comisiones. RGPD. Solicita acceso anticipado a Treatflow.",
  keywords: [
    "software salón de belleza",
    "software estética",
    "reservas online salón",
    "ficha cliente estética",
    "software clínica estética",
  ],
});

export default function EsHomePage() {
  return <HomePageIntl content={esHomePage} />;
}
