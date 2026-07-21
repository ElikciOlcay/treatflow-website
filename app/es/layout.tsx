import type { Metadata } from "next";
import { getDictionary } from "../i18n/dictionaries";
import { buildHreflangAlternates } from "../i18n/seo";
import { BASE_URL } from "../i18n/config";
import NavigationEn from "../components/NavigationEn";
import FooterEn from "../components/FooterEn";
import HtmlLang from "../components/HtmlLang";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Treatflow: Software para salones de belleza y clínicas estéticas",
    template: "%s | Treatflow",
  },
  description:
    "Agenda, reservas online, fichas de clientes, formularios de consentimiento y documentación de tratamientos en una sola app. Cumple con el RGPD. Solicita acceso anticipado.",
  alternates: {
    canonical: `${BASE_URL}/es`,
    ...buildHreflangAlternates("home"),
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${BASE_URL}/es`,
    siteName: "Treatflow",
  },
};

export default async function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary("es");

  return (
    <div className="min-h-screen bg-white">
      <HtmlLang lang="es" />
      <NavigationEn dict={dict} locale="es" />
      {children}
      <FooterEn dict={dict} locale="es" />
    </div>
  );
}
