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
    default: "Treatflow: Software per centri estetici e cliniche estetiche",
    template: "%s | Treatflow",
  },
  description:
    "Calendario appuntamenti, prenotazioni online, schede clienti, moduli di consenso e documentazione trattamenti in un'unica app. Conforme al GDPR. Richiedi l'accesso anticipato.",
  alternates: {
    canonical: `${BASE_URL}/it`,
    ...buildHreflangAlternates("home"),
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: `${BASE_URL}/it`,
    siteName: "Treatflow",
  },
};

export default async function ItLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary("it");

  return (
    <div className="min-h-screen bg-white">
      <HtmlLang lang="it" />
      <NavigationEn dict={dict} locale="it" />
      {children}
      <FooterEn dict={dict} locale="it" />
    </div>
  );
}
