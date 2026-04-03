import { CheckCircle, ArrowRight, FileText, Shield, Smartphone, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SocialProofBar from "../components/SocialProofBar";

export const metadata: Metadata = {
  title: "Kundenkartei App für Kosmetik & Beauty",
  description:
    "Die Kundenkartei App für Kosmetikstudios: Kundendaten, Behandlungshistorie und Fotos in einer App. DSGVO-konform, 14 Tage kostenlos testen.",
  keywords: [
    "kundenkartei app",
    "kundenkartei app kosmetik",
    "app kundenkartei",
    "app für kundenkartei",
    "kundenkartei kosmetik app",
    "digitale kundenkartei kosmetik",
    "kundenkartei software",
    "kundenkartei software kostenlos",
    "kundenkartei app kostenlos",
  ],
  alternates: {
    canonical: "https://www.treatflow.io/kundenkartei-software",
  },
  openGraph: {
    title: "Kundenkartei App für Kosmetik & Beauty | Treatflow",
    description:
      "Die Kundenkartei App für Kosmetikstudios: Kundendaten, Fotos und Formulare in einer App. Kostenlos testen.",
    url: "https://www.treatflow.io/kundenkartei-software",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Bietet Treatflow eine digitale Kundenkartei für Kosmetikstudios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. In Treatflow verwaltest du Kundendaten, Behandlungshistorie, Formulare und Fotos zentral an einem Ort.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich die Kundenkartei kostenlos testen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Du kannst Treatflow 14 Tage kostenlos testen, ohne Kreditkarte.",
      },
    },
    {
      "@type": "Question",
      name: "Ist die Kundenkartei DSGVO-konform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Kundendaten werden verschlüsselt in der EU gespeichert und DSGVO-konform verarbeitet.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Daten kann ich in der Kundenkartei speichern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kontaktdaten, Behandlungshistorie, Allergien, Vorher-Nachher-Fotos, ausgefüllte Formulare, Notizen und Terminhistorie - alles an einem Ort.",
      },
    },
    {
      "@type": "Question",
      name: "Funktioniert die Kundenkartei auf dem Smartphone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Treatflow ist eine webbasierte App, die auf Desktop, Tablet und Smartphone funktioniert. Du hast von überall Zugriff auf alle Kundendaten.",
      },
    },
  ],
};

export default function KundenkarteiSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="kundenkartei-software-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Digitale Kundenkartei
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Deine digitale <span className="text-indigo-600">Kundenkartei</span> für Kosmetik
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Kundendaten, Behandlungshistorie, Formulare und Fotos - alles an einem Ort.
              Schnell abrufbar, sicher gespeichert und ohne Zettelchaos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.treatflow.io/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
              >
                14 Tage kostenlos testen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200"
              >
                Beratung buchen
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Alle Kundendaten an einem Ort",
                text: "Kontaktdaten, Notizen, Allergien und Vorlieben direkt in der Kundenakte.",
              },
              {
                icon: FileText,
                title: "Behandlungshistorie sofort sichtbar",
                text: "Sieh auf einen Blick, welche Behandlung zuletzt gemacht wurde und wie sie verlief.",
              },
              {
                icon: Smartphone,
                title: "Kundenkartei App auf jedem Gerät",
                text: "Nutze die Kundenkartei am Desktop, Tablet oder Smartphone.",
              },
              {
                icon: Shield,
                title: "DSGVO-konforme Speicherung",
                text: "Sensible Daten werden verschlüsselt in der EU gespeichert.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Ist eine Kundenkartei kostenlos sinnvoll?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kostenlose Lösungen</h3>
              <ul className="space-y-3">
                {[
                  "Oft keine saubere Historie pro Kunde",
                  "Häufig ohne Foto-Dokumentation",
                  "Meist kein DSGVO-konformer Workflow",
                  "Schnell unübersichtlich bei Wachstum",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-indigo-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mit Treatflow</h3>
              <ul className="space-y-3">
                {[
                  "Strukturierte Kundenkartei mit Historie",
                  "Formulare und Dokumentation in einem System",
                  "DSGVO-konforme Datenverwaltung",
                  "14 Tage kostenlos testen ohne Risiko",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Weitere Funktionen entdecken</h2>
          <div className="flex flex-wrap justify-center gap-5 text-sm">
            <Link href="/kundenkartei-kosmetikstudio" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Digitale Kundenkartei Kosmetik
            </Link>
            <Link href="/kosmetikstudio-software" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Kosmetikstudio Software
            </Link>
            <Link href="/terminkalender" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Terminbuchung Kosmetikstudio
            </Link>
            <Link href="/behandlungsdokumentation" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Behandlungsdokumentation Kosmetik
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Häufige Fragen zur Kundenkartei
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Bietet Treatflow eine digitale Kundenkartei für Kosmetikstudios?",
                a: "Ja. In Treatflow verwaltest du Kundendaten, Behandlungshistorie, Formulare und Fotos zentral an einem Ort.",
              },
              {
                q: "Kann ich die Kundenkartei kostenlos testen?",
                a: "Ja. Du kannst Treatflow 14 Tage kostenlos testen, ohne Kreditkarte.",
              },
              {
                q: "Ist die Kundenkartei DSGVO-konform?",
                a: "Ja. Kundendaten werden verschlüsselt in der EU gespeichert und DSGVO-konform verarbeitet.",
              },
              {
                q: "Welche Daten kann ich in der Kundenkartei speichern?",
                a: "Kontaktdaten, Behandlungshistorie, Allergien, Vorher-Nachher-Fotos, ausgefüllte Formulare, Notizen und Terminhistorie - alles an einem Ort.",
              },
              {
                q: "Funktioniert die Kundenkartei auf dem Smartphone?",
                a: "Ja. Treatflow ist eine webbasierte App, die auf Desktop, Tablet und Smartphone funktioniert. Du hast von überall Zugriff auf alle Kundendaten.",
              },
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialProofBar />

      <Footer />
    </div>
  );
}
