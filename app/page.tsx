import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle,
  ClipboardCheck,
  FileText,
  Lock,
  Receipt,
  Server,
  Shield,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import ChallengeSelector from "./components/ChallengeSelector";
import ComparisonTable from "./components/ComparisonTable";
import BenefitStats from "./components/BenefitStats";
import SupportTrustBanner from "./components/SupportTrustBanner";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SocialProofBar from "./components/SocialProofBar";
import Footer from "./components/Footer";
import { buildHreflangAlternates } from "./i18n/seo";

export const metadata: Metadata = {
  title: "Treatflow: All-in-One Software für dein Kosmetikstudio",
  description:
    "Kosmetikstudio-Software für Termine, Online-Buchung, Kundenkartei, Formulare, Doku & Kasse - alles in einer App. Keine Provision, DSGVO-konform, Made in Austria. Bereits von 500+ Studios getestet. 14 Tage gratis.",
  alternates: {
    canonical: "https://www.treatflow.io",
    ...buildHreflangAlternates("home"),
  },
  openGraph: {
    title: "Treatflow: All-in-One Software für dein Kosmetikstudio",
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
    title: "Treatflow: All-in-One Software für dein Kosmetikstudio",
    description:
      "Terminkalender, Online-Buchungen, digitale Kundenkartei, Formulare und Behandlungsdokumentation – alles in einer App.",
    images: ["https://www.treatflow.io/images/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Treatflow",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "description": "Software für Kosmetikstudio: Terminkalender, digitale Kundenkartei, Online-Buchungen und Behandlungsdokumentation",
  "url": "https://www.treatflow.io",
  "author": {
    "@type": "Organization",
    "name": "Treatflow",
    "url": "https://www.treatflow.io"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Basic",
      "price": "39",
      "priceCurrency": "EUR",
      "billingIncrement": "P1M",
      "description": "Perfekt für kleine Studios und Einzelunternehmer"
    },
    {
      "@type": "Offer",
      "name": "Booking",
      "price": "59",
      "priceCurrency": "EUR",
      "billingIncrement": "P1M",
      "description": "Ideal für wachsende Studios mit Online-Buchung"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "ratingCount": "19",
    "reviewCount": "19",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "Terminkalender mit Online-Buchung",
    "Digitale Kundenkartei und Kundenverwaltung",
    "Formulare für Anamnesen",
    "Behandlungsdokumentation",
    "NiSV konform"
  ],
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Stefanie Ruschmann" },
      "reviewBody": "Treatflow ist die ultimative Lösung für meine Praxis. Unschlagbar im Preis und intuitiv zu bedienen. Mein Wunsch nach einer Lexware Office Anbindung wurde innerhalb eines Tages umgesetzt!"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Organization", "name": "Laser-Haarentfernung Velura Saarburg" },
      "reviewBody": "Wir sind mehr als zufrieden mit Treatflow! Der Support ist wirklich herausragend – immer nett, freundlich und lösungsorientiert. Klare Empfehlung für jeden, der ein zuverlässiges System mit top Service sucht!"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Nadja Neumann" },
      "reviewBody": "Ich nutze Treatflow erst seit kurzem für mein Studio, aber bin jetzt schon voll und ganz begeistert. Es erleichtert die Arbeit enorm und ist NiSV-konform."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Sharon Ulbrich-Decker" },
      "reviewBody": "Hab von Phorest zu Treatflow gewechselt. Preisleistung ist super. Bei Phorest war ich bei ca. 300 EUR im Monat, bei Treatflow unter 100 EUR. Kann ich mit bestem Gewissen empfehlen."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Selina Klingshirn" },
      "reviewBody": "Für mich eine klare Empfehlung. Es wird auf individuelle Bedürfnisse eingegangen. Eine Funktion, die ich mir gewünscht habe, wurde tatsächlich extra für mich umgesetzt."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Pia Patricia" },
      "reviewBody": "Treatflow überzeugt mit einer benutzerfreundlichen Oberfläche und einem durchdachten Konzept. Nutze es täglich und bin sehr begeistert! Klare Empfehlung."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist Treatflow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treatflow ist eine Software für Kosmetikstudios mit Terminkalender, digitaler Kundenkartei, Online-Buchungen, Anamnese-Formularen und Behandlungsdokumentation. Die App ist NiSV-konform und wurde bereits von über 500 Studios getestet. Made in Austria."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Software braucht ein Kosmetikstudio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Kosmetikstudio braucht Software für Terminverwaltung (Terminplaner), digitale Kundenkartei, Online-Buchung, Anamnesebogen und Behandlungsdokumentation. Treatflow vereint alle Funktionen in einer App und ist speziell für Beauty-Studios entwickelt."
      }
    },
    {
      "@type": "Question",
      "name": "Kostet die Kundenkartei für Kosmetikstudios etwas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treatflow bietet eine digitale Kundenkartei inklusive. Du kannst 14 Tage kostenlos testen. Danach gibt es Tarife ab 39 Euro pro Monat (Basic) bzw. 59 Euro mit Online-Buchung (Booking)."
      }
    },
    {
      "@type": "Question",
      "name": "Ist Treatflow NiSV-konform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Die Behandlungsdokumentation und Formulare sind NiSV-konform und rechtssicher für Kosmetikstudios in Deutschland und Österreich."
      }
    },
    {
      "@type": "Question",
      "name": "Wie buchen Kunden online beim Kosmetikstudio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mit Treatflow erhältst du einen persönlichen Buchungslink. Kunden wählen dort Termin und Behandlung; der Kalender wird automatisch aktualisiert. Erinnerungen und Nachrichten können automatisiert werden, was No-Shows reduziert."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich die Kosmetikstudio-Software kostenlos testen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Treatflow kannst du 14 Tage kostenlos und unverbindlich testen – ohne Kreditkarte. So siehst du, ob Terminplaner, Kundenkartei, Online-Buchung und Behandlungsdokumentation zu deinem Studio passen."
      }
    }
  ]
};

const coreFeatures = [
  { href: '/terminkalender', icon: CalendarDays, label: 'Terminkalender', desc: 'Alle Termine in einer klaren Tages- und Wochenansicht.', color: 'bg-indigo-100 text-indigo-600' },
  { href: '/online-buchungen', icon: Users, label: 'Online-Buchung', desc: 'Kunden buchen selbst – auch außerhalb deiner Öffnungszeiten.', color: 'bg-emerald-100 text-emerald-600' },
  { href: '/kundenkartei-software', icon: FileText, label: 'Kundenkartei', desc: 'Historie, Notizen und Fotos zentral und schnell auffindbar.', color: 'bg-blue-100 text-blue-600' },
  { href: '/formulare', icon: ClipboardCheck, label: 'Formulare', desc: 'Digitale Anamnese und Einwilligungen, vorab per Link ausfüllbar.', color: 'bg-orange-100 text-orange-600' },
  { href: '/behandlungsdokumentation', icon: Shield, label: 'Dokumentation', desc: 'Behandlungen sauber dokumentieren, inklusive NiSV-Nachweisen.', color: 'bg-teal-100 text-teal-600' },
  { href: '/kassensystem-kosmetikstudio', icon: Receipt, label: 'Kasse', desc: 'TSE- & RKSV-konform kassieren, direkt aus dem Termin.', color: 'bg-green-100 text-green-600' },
  { href: '/sms-erinnerungen-kosmetikstudio', icon: Bell, label: 'Erinnerungen', desc: 'Automatische SMS und E-Mails reduzieren No-Shows.', color: 'bg-rose-100 text-rose-600' },
];

const seoLinks = [
  { href: '/kundenkartei-software', label: 'Kundenkartei Software' },
  { href: '/online-buchungen', label: 'Online-Terminbuchung' },
  { href: '/behandlungsdokumentation-kosmetikstudio', label: 'Behandlungsdokumentation' },
  { href: '/digitale-anamnese-kosmetikstudio', label: 'Digitale Anamnese' },
  { href: '/sms-erinnerungen-kosmetikstudio', label: 'SMS-Erinnerungen' },
  { href: '/kosmetikstudio-software-vergleich', label: 'Software-Vergleich' },
  { href: '/blog/beste-kosmetikstudio-software-2026', label: 'Beste Software 2026' },
  { href: '/treatflow-vs-treatwell', label: 'Treatflow vs. Treatwell' },
];

export default function Home() {
  return (
    <>
      {/* Roh-script (nicht next/script): sonst landet JSON-LD nur im RSC-Flight */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* 1. Hero */}
        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Für Kosmetikstudios, die wachsen wollen
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Schluss mit Terminchaos,{" "}
                <span className="text-indigo-600">Zettelwirtschaft</span>
                {" "}und No-Shows
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
                Termine, Kunden, Formulare, Behandlungsdokumentation und Kasse in einer übersichtlichen App.
                So findet sich dein Team sofort zurecht.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="https://app.treatflow.io/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Jetzt 14 Tage kostenlos testen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
                >
                  Demo buchen
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Ohne Kreditkarte</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>In 2 Minuten startklar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Kostenloser Datenumzug</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Persönliche Betreuung</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">4,6/5 auf Google</span>
                </div>
                <span className="hidden sm:inline text-gray-400">|</span>
                <span className="text-gray-600">
                  Bereits von <span className="font-semibold text-gray-900">500+ Studios</span> getestet
                </span>
              </div>
            </div>
            <div className="order-2 relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[4/3] lg:min-h-[400px] lg:aspect-auto">
              <Image
                src="/images/lifestyle/hero-startseite-kalender.png"
                alt="Treatflow Terminkalender geöffnet auf einem Laptop in einem modernen Kosmetikstudio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>

        {/* 2. Trust + frühe Social Proof */}
        <section className="py-5 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                { icon: Lock, text: 'SSL-verschlüsselt' },
                { icon: Server, text: 'EU-Server (DSGVO)' },
                { icon: Shield, text: 'Tägliche Datensicherung' },
                { icon: ShieldCheck, text: 'NiSV-konform' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                  <item.icon className="h-4 w-4 text-indigo-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SocialProofBar />

        {/* 3. Problem → Lösung */}
        <ChallengeSelector />

        {/* 4. Klarer Einstieg */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 lg:p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  So startest du mit Treatflow
                </h2>
                <p className="text-gray-600">
                  Klarer Ablauf ohne langes Setup.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Kostenlos registrieren", desc: "Account in wenigen Minuten anlegen und direkt starten." },
                  { step: "2", title: "Daten übernehmen", desc: "Wir unterstützen dich beim Import deiner bestehenden Kundendaten." },
                  { step: "3", title: "Online Buchungen aktivieren", desc: "Buchungslink teilen und erste Termine automatisch erhalten." },
                ].map((item) => (
                  <div key={item.step} className="bg-white rounded-xl border border-gray-100 p-5 text-center">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <a
                  href="https://app.treatflow.io/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Jetzt kostenlos starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Ein Feature-Block (Outcomes) */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Weniger Chaos. Mehr Zeit für Kundinnen.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Alles was dein Studio braucht – in einer App, die dein Team sofort versteht.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {coreFeatures.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="https://app.treatflow.io/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                14 Tage kostenlos testen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <p className="text-sm text-gray-500 mt-3">Ohne Kreditkarte. Jederzeit kündbar.</p>
            </div>
          </div>
        </section>

        {/* 6. Ergebnisse */}
        <BenefitStats />

        {/* 7. Differenzierung */}
        <ComparisonTable />

        {/* 8. Betreuung */}
        <SupportTrustBanner />

        {/* 9. Preis → Proof → FAQ */}
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />

        {/* Treatwell-Klarstellung (kurz) */}
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Du suchst Treatwell? Das sind nicht wir.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Treatflow ist keine Buchungsplattform mit Provisionen, sondern Studio-Software für Kosmetikstudios – mit Kundenkartei, Dokumentation und persönlicher Betreuung.
                </p>
              </div>
              <Link
                href="/treatflow-vs-treatwell"
                className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Unterschiede ansehen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="py-20 bg-indigo-600" aria-label="Call-to-Action">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Bereit, dein Studio übersichtlicher zu steuern?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Starte heute und erlebe, wie einfach Studio-Organisation sein kann.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 text-white/90">
              {[
                "14 Tage kostenlos testen",
                "Keine Kreditkarte nötig",
                "In 2 Minuten startklar",
                "Persönliche Betreuung und Hilfe",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-sm"
                >
                  <CheckCircle className="h-4 w-4 text-indigo-200 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <a
                href="https://app.treatflow.io/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Jetzt kostenlos testen
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
              <a
                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
              >
                Demo buchen
              </a>
            </div>
            <p className="text-sm text-indigo-200 mt-6">Jederzeit kündbar. DSGVO-konform. Mit persönlicher Betreuung und Hilfe.</p>
          </div>
        </section>

        {/* SEO: kompakt, nach dem CTA – kein Conversion-Ballast */}
        <section className="py-10 bg-white border-t border-gray-100" aria-label="Weiterführende Informationen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Treatflow ist die{' '}
              <Link href="/kosmetikstudio-software" className="text-indigo-600 hover:underline">
                Software für Kosmetikstudios
              </Link>
              {' '}mit Terminkalender, Online-Buchung, digitaler Kundenkartei, Formularen und NiSV-konformer Behandlungsdokumentation – ohne Provision, DSGVO-konform und Made in Austria.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
              {seoLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-indigo-600 transition-colors underline underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
