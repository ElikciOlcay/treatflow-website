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
    default: "Treatflow: Logiciel pour instituts de beauté et cliniques esthétiques",
    template: "%s | Treatflow",
  },
  description:
    "Agenda, réservation en ligne, fiches clients, formulaires de consentement et documentation des soins dans une seule app. Conforme au RGPD. Demandez un accès anticipé.",
  alternates: {
    canonical: `${BASE_URL}/fr`,
    ...buildHreflangAlternates("home"),
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${BASE_URL}/fr`,
    siteName: "Treatflow",
  },
};

export default async function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary("fr");

  return (
    <div className="min-h-screen bg-white">
      <HtmlLang lang="fr" />
      <NavigationEn dict={dict} locale="fr" />
      {children}
      <FooterEn dict={dict} locale="fr" />
    </div>
  );
}
