import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle,
  FileText,
  Lock,
  Server,
  Shield,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Navigation from "./components/Navigation";
import ChallengeSelector from "./components/ChallengeSelector";
import ComparisonTable from "./components/ComparisonTable";
import BenefitStats from "./components/BenefitStats";
import AlwaysWithYou from "./components/AlwaysWithYou";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

// Strukturierte Daten für SEO
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
    "ratingValue": "4.9",
    "ratingCount": "500"
  },
  "featureList": [
    "Terminkalender mit Online-Buchung",
    "Digitale Kundenkartei und Kundenverwaltung",
    "Formulare für Anamnesen",
    "Behandlungsdokumentation",
    "NiSV konform"
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
        "text": "Treatflow ist eine Software für Kosmetikstudios mit Terminkalender, digitaler Kundenkartei, Online-Buchungen, Anamnese-Formularen und Behandlungsdokumentation. Die App ist NiSV-konform und wird von über 500 Kosmetikerinnen genutzt. Made in Austria."
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

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                Termine, Kunden, Formulare und Behandlungsdokumentation in einer übersichtlichen App.
                So findet sich dein Team sofort zurecht.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
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
                  <span>Persönliche Betreuung und Hilfe</span>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
                <span className="font-semibold text-gray-900">500+ Studios</span>
                <span className="text-gray-400">|</span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5</span>
              </div>
            </div>
            <div className="order-2 relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[4/3] lg:min-h-[400px] lg:aspect-auto">
              <Image
                src="/images/hero-treatflow-calendar.png"
                alt="Treatflow Kalender im modernen Kosmetikstudio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* TrustBar */}
        <section className="py-6 bg-gray-50 border-y border-gray-100">
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

        <ChallengeSelector />

        <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
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

        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Die wichtigsten Funktionen auf einen Blick
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Alles klar strukturiert, damit du und dein Team schnell arbeiten könnt.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { href: '/terminkalender', icon: CalendarDays, label: 'Terminkalender', desc: 'Alle Termine in einer klaren Tages- und Wochenansicht.', color: 'bg-indigo-100 text-indigo-600' },
                { href: '/online-buchungen', icon: Users, label: 'Online-Buchung', desc: 'Kunden buchen selbst, auch außerhalb deiner Öffnungszeiten.', color: 'bg-emerald-100 text-emerald-600' },
                { href: '/kundenkartei-kosmetikstudio', icon: FileText, label: 'Kundenkartei', desc: 'Kundendaten, Historie und Notizen zentral und schnell auffindbar.', color: 'bg-blue-100 text-blue-600' },
                { href: '/behandlungsdokumentation', icon: Shield, label: 'Dokumentation', desc: 'Behandlungen sauber dokumentieren, inklusive NiSV-relevanter Nachweise.', color: 'bg-teal-100 text-teal-600' },
                { href: '/sms-erinnerungen-kosmetikstudio', icon: Bell, label: 'Erinnerungen', desc: 'Automatische SMS und E-Mails reduzieren No-Shows.', color: 'bg-rose-100 text-rose-600' },
              ].map((item) => (
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

        <ComparisonTable />

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Für welche Studios ist Treatflow gemacht?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Wähle deine Branche oder entdecke weitere passende Lösungen.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/kosmetikstudio-software', label: 'Kosmetikstudio' },
                { href: '/schoenheitssalon-software', label: 'Schönheitssalon' },
                { href: '/laser-haarentfernung-software', label: 'Laser & IPL' },
                { href: '/permanent-makeup-software', label: 'Permanent Makeup' },
                { href: '/nagelstudio-software', label: 'Nagelstudio' },
                { href: '/lash-studio-software', label: 'Lash Studio' },
                { href: '/aesthetische-medizin-software', label: 'Ästhetische Medizin' },
                { href: '/tattoo-studio-software', label: 'Tattoo Studio' },
                { href: '/spa-wellness-software', label: 'Spa & Wellness' },
                { href: '/massage-software', label: 'Massage' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <span className="bg-indigo-50 border border-indigo-200 rounded-full px-5 py-2 text-sm font-medium text-indigo-700">
                Und viele weitere
              </span>
            </div>
          </div>
        </section>

        <BenefitStats />
        <AlwaysWithYou />

        <PricingSection />
        <TestimonialsSection />
        <FAQSection />

        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Du suchst Treatwell? Das sind nicht wir.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Die Namen klingen ähnlich - aber Treatflow ist keine Buchungsplattform mit Provisionen, sondern eine Studio-Software speziell für Kosmetikstudios. Keine Provision, dafür Kundenkartei, Dokumentation und persönliche Betreuung.
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

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
              Warum moderne Kosmetikstudios auf digitale Software setzen
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Der Alltag im Kosmetikstudio ist anspruchsvoll: Termine koordinieren, Kunden betreuen, Behandlungen dokumentieren, Produkte über den <Link href="/shop" className="text-indigo-600 hover:underline">Online-Shop</Link> verkaufen und gleichzeitig den Überblick über das gesamte Business behalten. Viele Studios arbeiten noch mit Papierkalender, WhatsApp-Nachrichten und handgeschriebenen Karteikarten – das kostet wertvolle Zeit, die für die eigentliche Arbeit am Kunden fehlt.
              </p>
              <p>
                Eine spezialisierte Studio Software wie Treatflow löst genau diese Probleme. Der <Link href="/terminkalender" className="text-indigo-600 hover:underline">Terminkalender</Link> mit <Link href="/online-buchungen" className="text-indigo-600 hover:underline">Online-Buchungen</Link> ermöglicht Kunden, rund um die Uhr Termine zu buchen. Automatische Erinnerungen per SMS reduzieren No-Shows. Digitale <Link href="/formulare" className="text-indigo-600 hover:underline">Anamnesebögen und Formulare</Link> ersetzen den Papierstapel. Und die Behandlungsdokumentation erfüllt alle Anforderungen – auch für NiSV-pflichtige Geräte. Das Ergebnis: weniger Verwaltung, mehr Zeit für das, was zählt – deine Kunden.
              </p>
              <p>
                Für Studios mit Fokus auf Kundendaten bietet Treatflow eine zentrale <Link href="/kundenkartei-software" className="text-indigo-600 hover:underline">Kundenkartei Software</Link>. Dort findest du alle Informationen zur <Link href="/kundenkartei-kosmetikstudio" className="text-indigo-600 hover:underline">digitalen Kundenkartei im Kosmetikstudio</Link> inklusive Vergleich zu kostenlosen oder papierbasierten Alternativen.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <Link href="/kundenkartei-software" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Kundenkartei Software</Link>
              <Link href="/kosmetikstudio-software-vergleich" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Software-Vergleich</Link>
              <Link href="/blog/beste-kosmetikstudio-software-2026" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Beste Kosmetikstudio Software 2026</Link>
              <Link href="/blog/online-buchungssystem-vorteile" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Vorteile eines Online-Buchungssystems</Link>
              <Link href="/blog/behandlungsdokumentation-nisv-konform" className="hover:text-indigo-600 transition-colors underline underline-offset-4">NiSV-konform dokumentieren</Link>
              <Link href="/hygieneplan-kosmetikstudio-pdf" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Hygieneplan Kosmetikstudio PDF</Link>
              <Link href="/website-fuer-kosmetikstudios" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Website für Kosmetikstudios</Link>
              <Link href="/treatflow-vs-treatwell" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Treatflow vs. Treatwell</Link>
            </div>
          </div>
        </section>

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

        <Footer />
      </div>
    </>
  );
}
