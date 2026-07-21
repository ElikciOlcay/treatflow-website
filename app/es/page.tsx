import { buildPageMetadata } from "@/app/i18n/seo";
import HomePageIntl from "@/app/components/HomePageIntl";
import { esHomePage } from "@/app/i18n/markets/home-pages";

export const metadata = buildPageMetadata({
  pageKey: "home",
  locale: "es",
  title: "Software para salones de belleza y clínicas estéticas | España & LATAM",
  description:
    "Agenda, reservas online sin comisión, fichas de clientas, anamnesis y documentación de tratamientos. RGPD, servidores en la UE. Solicita acceso anticipado a Treatflow en España y Latinoamérica.",
  keywords: [
    "software salón de belleza",
    "software centro de estética",
    "software clínica estética España",
    "reservas online salón sin comisión",
    "ficha cliente estética",
    "agenda citas belleza",
    "software depilación láser",
    "alternativa Treatwell salón",
  ],
});

export default function EsHomePage() {
  return <HomePageIntl content={esHomePage} />;
}
