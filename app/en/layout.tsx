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
    default: "Treatflow: All-in-One Software for Beauty Salons & Aesthetic Clinics",
    template: "%s | Treatflow",
  },
  description:
    "Manage appointments, online booking, client records, consent forms and treatment documentation - all in one app. GDPR-compliant, 14-day free trial.",
  alternates: {
    canonical: `${BASE_URL}/en`,
    ...buildHreflangAlternates("home"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}/en`,
    siteName: "Treatflow",
  },
};

export default async function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary("en");

  return (
    <div className="min-h-screen bg-white">
      <HtmlLang lang="en" />
      <NavigationEn dict={dict} locale="en" />
      {children}
      <FooterEn dict={dict} locale="en" />
    </div>
  );
}
