import { CheckCircle, X, ArrowRight, AlertTriangle, Shield, Users, FileText, Star, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import FAQSection from './FAQSection';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';

export const metadata = {
  title: 'Treatflow vs. Fresha: Der ehrliche Vergleich für Kosmetikstudios',
  description:
    'Treatflow oder Fresha? Spezialisierte Kosmetikstudio-Software mit NiSV-Dokumentation vs. kostenloses Buchungstool mit Payment-Gebühren. Jetzt vergleichen.',
  keywords: [
    'Treatflow vs Fresha',
    'Fresha Alternative',
    'Fresha Kosten',
    'Fresha Kosmetikstudio',
    'Kosmetikstudio Software Vergleich',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/treatflow-vs-fresha',
  },
  openGraph: {
    title: 'Treatflow vs. Fresha: Der ehrliche Vergleich',
    description:
      'Spezialisierte Kosmetikstudio-Software vs. kostenloses Buchungstool - warum über 500 Studios Treatflow wählen.',
    url: 'https://www.treatflow.io/treatflow-vs-fresha',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Treatflow vs Fresha Vergleich',
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ist Fresha wirklich kostenlos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fresha bietet eine kostenlose Basisversion, verdient aber an Payment-Gebühren auf jede Kartenzahlung, Premium-Features und Produktverkäufen. Die tatsächlichen Kosten hängen vom Umsatz ab.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Treatflow und Fresha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treatflow ist eine spezialisierte Software für Kosmetikstudios mit NiSV-Dokumentation, digitaler Kundenkartei und Behandlungsdokumentation. Fresha ist ein kostenloses Buchungstool ohne spezialisierte Kosmetik-Funktionen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hat Fresha eine Behandlungsdokumentation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Fresha bietet keine integrierte Behandlungsdokumentation, keine NiSV-konformen Formulare und keine Vorher-Nachher-Foto-Dokumentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich von Fresha zu Treatflow wechseln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Unser Team unterstützt dich kostenlos beim Umzug deiner Kundendaten. Du kannst Treatflow 14 Tage kostenlos testen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Software ist besser für Kosmetikstudios in Deutschland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für Kosmetikstudios in Deutschland und Österreich ist Treatflow die bessere Wahl: DSGVO-konforme EU-Server, deutscher Support, NiSV-Dokumentation und spezialisierte Funktionen für die Beauty-Branche.',
      },
    },
  ],
};

const comparisonRows = [
  {
    feature: 'Geschäftsmodell',
    treatflow: 'Spezialisierte Studio-Software',
    competitor: 'Kostenloses Tool + Payment-Gebühren',
    treatflowOk: true,
    competitorOk: false,
  },
  {
    feature: 'Basispreis',
    treatflow: 'Ab 39€/Monat, transparent',
    competitor: 'Kostenlos (Basisversion)',
    treatflowOk: true,
    competitorOk: true,
  },
  {
    feature: 'Payment-Gebühren',
    treatflow: 'Keine',
    competitor: 'Gebühren auf jede Kartenzahlung',
    treatflowOk: true,
    competitorOk: false,
  },
  {
    feature: 'Behandlungsdokumentation',
    treatflow: 'Integriert und NiSV-konform',
    competitor: 'Nicht vorhanden',
    treatflowOk: true,
    competitorOk: false,
  },
  {
    feature: 'Digitale Kundenkartei',
    treatflow: 'Umfassend mit Behandlungshistorie',
    competitor: 'Basis-Kontaktdaten',
    treatflowOk: true,
    competitorOk: false,
  },
  {
    feature: 'Anamnese-Formulare',
    treatflow: 'Digital + KI-Generator',
    competitor: 'Nicht vorhanden',
    treatflowOk: true,
    competitorOk: false,
  },
  {
    feature: 'NiSV-Konformität',
    treatflow: 'Vollständig konform',
    competitor: 'Nicht vorhanden',
    treatflowOk: true,
    competitorOk: false,
  },
  {
    feature: 'Online-Terminbuchung',
    treatflow: 'Eigener Buchungslink',
    competitor: 'Über Fresha-Plattform',
    treatflowOk: true,
    competitorOk: true,
  },
  {
    feature: 'DSGVO / EU-Server',
    treatflow: 'Ja, EU-Server',
    competitor: 'US-Unternehmen, Server unklar',
    treatflowOk: true,
    competitorOk: false,
  },
  {
    feature: 'Speziell für Kosmetik',
    treatflow: 'Entwickelt für Beauty-Studios',
    competitor: 'Generisch für alle Branchen',
    treatflowOk: true,
    competitorOk: false,
  },
  {
    feature: 'Persönliche Betreuung',
    treatflow: '1:1 Support auf Deutsch',
    competitor: 'Standard-Support, primär Englisch',
    treatflowOk: true,
    competitorOk: false,
  },
  {
    feature: 'Kostenloser Datenumzug',
    treatflow: 'Ja, mit persönlicher Hilfe',
    competitor: 'Eingeschränkt',
    treatflowOk: true,
    competitorOk: false,
  },
];

const keyDifferences = [
  {
    icon: CreditCard,
    title: 'Versteckte Kosten durch Payment-Gebühren',
    desc: 'Fresha ist kostenlos - aber verdient an jeder Kartenzahlung mit. Bei Treatflow zahlst du einen festen Monatspreis ohne Gebühren pro Transaktion.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: FileText,
    title: 'Dokumentation inklusive',
    desc: 'Fresha bietet keine Behandlungsdokumentation oder NiSV-konforme Formulare. Treatflow hat alles integriert: Dokumentation, Anamnese-Formulare und vollständige Kundenkartei.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Shield,
    title: 'DSGVO und EU-Server',
    desc: 'Fresha ist ein US-Unternehmen - wo deine Kundendaten gespeichert werden, ist unklar. Treatflow speichert alle Daten verschlüsselt auf EU-Servern, vollständig DSGVO-konform.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Users,
    title: 'Deutscher Support statt Englisch',
    desc: 'Bei Treatflow bekommst du persönliche 1:1 Betreuung auf Deutsch - beim Einrichten, Datenumzug und im Alltag. Fresha bietet primär englischsprachigen Standard-Support.',
    color: 'bg-amber-100 text-amber-600',
  },
];

export default function TreatflowVsFresha() {
  return (
    <>
      <Script
        id="faq-schema-vs-fresha"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { label: 'Vergleiche' },
              { label: 'Treatflow vs. Fresha' },
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <Breadcrumbs
            items={[
              { label: 'Vergleiche' },
              { label: 'Treatflow vs. Fresha' },
            ]}
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Ehrlicher Vergleich
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Treatflow vs. Fresha:{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Was passt besser?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Fresha ist kostenlos - aber ist es auch die beste Lösung für dein
              Kosmetikstudio? Hier siehst du, was wirklich hinter den Kosten steckt
              und welche Funktionen dir fehlen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.treatflow.io/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                14 Tage kostenlos testen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#vergleich"
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                Zum Vergleich
              </a>
            </div>
          </div>
        </section>

        {/* Payment Warning Banner */}
        <section className="py-10 bg-rose-50 border-y border-rose-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-rose-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Wusstest du? &quot;Kostenlos&quot; bedeutet bei Fresha nicht ohne Kosten.
                </h2>
                <p className="text-gray-600">
                  Fresha verdient an Payment-Gebühren auf jede Kartenzahlung, an
                  Premium-Features und am Produktverkauf. Je mehr Umsatz du machst,
                  desto mehr verdient Fresha mit. Bei Treatflow zahlst du einen festen
                  Monatspreis - ohne versteckte Gebühren.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Die wichtigsten Unterschiede
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kostenloses Buchungstool vs. spezialisierte Studio-Software - zwei verschiedene Ansätze.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {keyDifferences.map((d) => (
                <div
                  key={d.title}
                  className="bg-gray-50 rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 ${d.color} rounded-2xl flex items-center justify-center mb-5`}
                  >
                    <d.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {d.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="vergleich" className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Treatflow vs. Fresha im Detail
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Feature für Feature - damit du die richtige Entscheidung triffst.
              </p>
            </div>

            {/* Desktop */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 w-1/3">
                      Feature
                    </th>
                    <th className="text-center px-6 py-4 w-1/3">
                      <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold">
                        Treatflow
                      </span>
                    </th>
                    <th className="text-center px-6 py-4 w-1/3">
                      <span className="inline-flex items-center gap-2 bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold">
                        Fresha
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-gray-100 ${
                        i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.treatflowOk ? (
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                          )}
                          <span className="text-sm text-gray-700">
                            {row.treatflow}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.competitorOk ? (
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                          )}
                          <span className="text-sm text-gray-500">
                            {row.competitor}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="md:hidden space-y-4">
              {comparisonRows.map((row) => (
                <div
                  key={row.feature}
                  className="bg-white rounded-xl border border-gray-200 p-5"
                >
                  <div className="font-semibold text-gray-900 mb-3 text-sm">
                    {row.feature}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      {row.treatflowOk ? (
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm text-gray-700">
                        <span className="font-medium text-indigo-600">
                          Treatflow:
                        </span>{' '}
                        {row.treatflow}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      {row.competitorOk ? (
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">
                          Fresha:
                        </span>{' '}
                        {row.competitor}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Was &quot;kostenlos&quot; wirklich kostet
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ein Rechenbeispiel: Payment-Gebühren summieren sich schnell.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                    Fresha
                  </div>
                  <div className="text-sm text-gray-500">Bei 80 Kartenzahlungen/Monat</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monatspreis</span>
                    <span className="font-semibold text-gray-900">0 Euro</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Payment-Gebühren (2,19% + 0,20€)
                    </span>
                    <span className="font-semibold text-rose-600">+ ~156 Euro</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Keine Dokumentation</span>
                    <span className="font-semibold text-rose-600">Fehlt</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="font-bold text-gray-900">
                      Effektive Kosten/Monat
                    </span>
                    <span className="font-bold text-rose-600 text-xl">
                      ~156 Euro+
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-2xl border-2 border-indigo-200 p-8 relative">
                <div className="absolute -top-3 right-6 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Alles inklusive
                </div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                    Treatflow
                  </div>
                  <div className="text-sm text-gray-500">Bei 80 Kartenzahlungen/Monat</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monatspreis (Booking)</span>
                    <span className="font-semibold text-gray-900">59 Euro</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Payment-Gebühren</span>
                    <span className="font-semibold text-emerald-600">0 Euro</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Dokumentation + NiSV</span>
                    <span className="font-semibold text-emerald-600">Inklusive</span>
                  </div>
                  <div className="border-t border-indigo-200 pt-4 flex justify-between">
                    <span className="font-bold text-gray-900">
                      Effektive Kosten/Monat
                    </span>
                    <span className="font-bold text-indigo-600 text-xl">59 Euro</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              Rechenbeispiel basierend auf 80 Kartenzahlungen/Monat mit
              durchschnittlich 85 Euro Behandlungswert über Freshas Payment-System.
            </p>
          </div>
        </section>

        {/* Who is Treatflow for */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Welche Lösung passt zu dir?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-indigo-600 mb-4">
                  Treatflow ist richtig für dich, wenn du...
                </h3>
                <ul className="space-y-3">
                  {[
                    'Behandlungsdokumentation und NiSV-Konformität brauchst',
                    'DSGVO-konforme EU-Server für Kundendaten willst',
                    'Keine Gebühren pro Kartenzahlung zahlen möchtest',
                    'Eine vollständige digitale Kundenkartei benötigst',
                    'Deutschen Support und persönliche Betreuung schätzt',
                    'Eine auf Kosmetik spezialisierte Software willst',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-500 mb-4">
                  Fresha passt eher, wenn du...
                </h3>
                <ul className="space-y-3">
                  {[
                    'Keine Behandlungsdokumentation brauchst',
                    'Ein kostenloses Basis-Buchungstool suchst',
                    'Payment-Gebühren pro Transaktion akzeptierst',
                    'Keinen Wert auf DSGVO-konforme EU-Server legst',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  value: '0€',
                  label: 'Payment-Gebühren',
                  desc: 'Keine Gebühren pro Zahlung',
                  icon: Shield,
                },
                {
                  value: '500+',
                  label: 'Studios',
                  desc: 'Nutzen Treatflow täglich',
                  icon: Users,
                },
                {
                  value: '4.9/5',
                  label: 'Bewertung',
                  desc: 'Von zufriedenen Kunden',
                  icon: Star,
                },
                {
                  value: '100%',
                  label: 'NiSV-konform',
                  desc: 'Dokumentation inklusive',
                  icon: FileText,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection />

        {/* SEO Text */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Treatflow vs. Fresha: Spezialisierung vs. Gratis-Modell
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Fresha hat sich als{' '}
                <strong>kostenloses Buchungs- und Kassensystem</strong> für die
                Beauty-Branche positioniert. Das klingt attraktiv - doch das
                Geschäftsmodell basiert auf Payment-Gebühren bei jeder
                Kartenzahlung, Premium-Features und einem integrierten
                Produktmarktplatz. Je mehr Umsatz du machst, desto mehr verdient
                Fresha mit.
              </p>
              <p>
                Treatflow verfolgt einen anderen Ansatz: eine{' '}
                <strong>
                  spezialisierte Software für Kosmetikstudios
                </strong>{' '}
                mit transparentem Festpreis. Du bekommst eine digitale{' '}
                <Link
                  href="/kundenverwaltung"
                  className="text-indigo-600 hover:underline"
                >
                  Kundenkartei
                </Link>
                , NiSV-konforme{' '}
                <Link
                  href="/behandlungsdokumentation"
                  className="text-indigo-600 hover:underline"
                >
                  Behandlungsdokumentation
                </Link>
                , digitale{' '}
                <Link
                  href="/formulare"
                  className="text-indigo-600 hover:underline"
                >
                  Anamnese-Formulare
                </Link>{' '}
                und automatische{' '}
                <Link
                  href="/sms-erinnerungen-kosmetikstudio"
                  className="text-indigo-600 hover:underline"
                >
                  SMS-Erinnerungen
                </Link>{' '}
                - alles zu einem festen Monatspreis ohne versteckte Kosten.
              </p>
              <p>
                Besonders für Studios in Deutschland und Österreich ist der
                DSGVO-Aspekt entscheidend: Treatflow speichert alle Daten auf
                EU-Servern, während Fresha als US-Unternehmen keine klare
                Garantie für europäische Datenspeicherung gibt. Wer mit
                NiSV-pflichtigen Geräten arbeitet, findet bei Fresha zudem
                keine passende Dokumentationslösung.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <Link
                href="/kosmetikstudio-software-vergleich"
                className="hover:text-indigo-600 transition-colors underline underline-offset-4"
              >
                Software-Vergleich
              </Link>
              <Link
                href="/kosmetikstudio-software"
                className="hover:text-indigo-600 transition-colors underline underline-offset-4"
              >
                Kosmetikstudio Software
              </Link>
              <Link
                href="/nisv-dokumentation"
                className="hover:text-indigo-600 transition-colors underline underline-offset-4"
              >
                NiSV-Dokumentation
              </Link>
              <Link
                href="/online-buchungen"
                className="hover:text-indigo-600 transition-colors underline underline-offset-4"
              >
                Online-Buchungen
              </Link>
            </div>
          </div>
        </section>

        <SocialProofBar />

        {/* Final CTA */}
        <section className="py-20 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Bereit für die bessere Lösung?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Teste Treatflow 14 Tage kostenlos. Keine Kreditkarte, keine
              Payment-Gebühren, keine versteckten Kosten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.treatflow.io/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                Jetzt kostenlos testen
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
              <a
                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                Beratung buchen
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
