import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import HomePage from "@/app/components/home/HomePage";
import HomeSchemas from "@/app/components/home/HomeSchemas";
import { buildHreflangAlternates } from "@/app/i18n/seo";
import { homeDe } from "@/app/site/content/home/de";

export const metadata: Metadata = {
  title: homeDe.meta.title,
  description: homeDe.meta.description,
  alternates: {
    canonical: "https://www.treatflow.io",
    ...buildHreflangAlternates("home"),
  },
  openGraph: {
    title: homeDe.meta.title,
    description:
      "Terminkalender, Online-Buchungen, digitale Kundenkartei, Formulare und Behandlungsdokumentation – alles in einer App. Bereits von 500+ Studios getestet. DSGVO-konform.",
    url: "https://www.treatflow.io",
    locale: "de_DE",
    type: "website",
    siteName: "Treatflow",
    images: [
      {
        url: "https://www.treatflow.io/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Treatflow - Kosmetikstudio Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeDe.meta.title,
    description:
      "Terminkalender, Online-Buchungen, digitale Kundenkartei, Formulare und Behandlungsdokumentation – alles in einer App.",
    images: ["https://www.treatflow.io/images/og-image.png"],
  },
};

/** Deutsche Startseite. Sektionen + Texte: HomePage + app/site/content/home/de.ts */
export default function Home() {
  return (
    <>
      <HomeSchemas content={homeDe} market="de" />

      <div className="min-h-screen bg-white">
        <Navigation />
        <HomePage content={homeDe} market="de" />
        <Footer />
      </div>
    </>
  );
}
