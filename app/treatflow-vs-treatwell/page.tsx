import { CheckCircle, X, ArrowRight, AlertTriangle, Shield, Users, FileText, Star, Heart } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import FAQSection from './FAQSection';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Treatflow vs. Treatwell: Der ehrliche Vergleich für Kosmetikstudios',
  description:
    'Treatflow oder Treatwell? Keine Provisionen, NiSV-konforme Dokumentation und persönliche Betreuung vs. Marktplatz-Modell mit bis zu 35% Provision. Jetzt vergleichen.',
  keywords: [
    'Treatflow vs Treatwell',
    'Treatwell Alternative',
    'Treatwell Provision',
    'Kosmetikstudio Software Vergleich',
    'Treatwell Kosten',
    'Treatflow Treatwell Unterschied',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/treatflow-vs-treatwell',
  },
  openGraph: {
    title: 'Treatflow vs. Treatwell: Der ehrliche Vergleich',
    description:
      'Keine Provisionen, NiSV-konform, persönliche Betreuung - warum über 500 Studios Treatflow statt Treatwell wählen.',
    url: 'https://www.treatflow.io/treatflow-vs-treatwell',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Treatflow vs Treatwell Vergleich',
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
      name: 'Was ist der Unterschied zwischen Treatflow und Treatwell?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treatflow ist eine Studio-Software speziell für Kosmetikstudios mit Kundenkartei, Behandlungsdokumentation und Online-Buchung - ohne Provisionen. Treatwell ist ein Marktplatz-Modell, das bis zu 35% Provision auf Neukunden verlangt und primär als Buchungsplattform fungiert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nimmt Treatflow Provisionen auf Buchungen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Treatflow arbeitet mit transparenten Festpreisen ab 39 Euro/Monat. Es fallen keine Provisionen auf Buchungen oder Neukunden an - im Gegensatz zu Treatwell, wo bis zu 35% Provision auf Neukunden fällig werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hat Treatwell eine Behandlungsdokumentation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Treatwell ist primär eine Buchungsplattform und bietet keine integrierte Behandlungsdokumentation oder NiSV-konforme Formulare. Treatflow hingegen hat Dokumentation, Anamnese-Formulare und NiSV-Konformität direkt integriert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich von Treatwell zu Treatflow wechseln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Wir unterstützen dich kostenlos beim Umzug deiner Kundendaten zu Treatflow. Der Wechsel ist unkompliziert und du kannst Treatflow 14 Tage kostenlos testen, bevor du dich entscheidest.',
      },
    },
  ],
};

const comparisonRows = [
  {
    feature: 'Geschäftsmodell',
    treatflow: 'Studio-Software - du bist die Marke',
    treatwell: 'Marktplatz - Kunden buchen über Treatwell',
    treatflowOk: true,
    treatwellOk: false,
  },
  {
    feature: 'Provision auf Neukunden',
    treatflow: '0% - keine Provisionen',
    treatwell: 'Bis zu 35% auf Neukunden',
    treatflowOk: true,
    treatwellOk: false,
  },
  {
    feature: 'Provision auf Stammkunden',
    treatflow: '0%',
    treatwell: '0% (über Marktplatz)',
    treatflowOk: true,
    treatwellOk: true,
  },
  {
    feature: 'Behandlungsdokumentation',
    treatflow: 'Integriert und NiSV-konform',
    treatwell: 'Nicht vorhanden',
    treatflowOk: true,
    treatwellOk: false,
  },
  {
    feature: 'Digitale Kundenkartei',
    treatflow: 'Umfassend mit Behandlungshistorie',
    treatwell: 'Basis-Kundeninfos',
    treatflowOk: true,
    treatwellOk: false,
  },
  {
    feature: 'Anamnese-Formulare',
    treatflow: 'Marketplace + KI-Generator',
    treatwell: 'Nicht vorhanden',
    treatflowOk: true,
    treatwellOk: false,
  },
  {
    feature: 'NiSV-Konformität',
    treatflow: 'Vollständig konform',
    treatwell: 'Nicht relevant/vorhanden',
    treatflowOk: true,
    treatwellOk: false,
  },
  {
    feature: 'Online-Terminbuchung',
    treatflow: 'Eigener Buchungslink',
    treatwell: 'Über Treatwell-Marktplatz',
    treatflowOk: true,
    treatwellOk: true,
  },
  {
    feature: 'Deine eigene Marke',
    treatflow: 'Dein Studio steht im Vordergrund',
    treatwell: 'Treatwell-Branding dominant',
    treatflowOk: true,
    treatwellOk: false,
  },
  {
    feature: 'Persönliche Betreuung',
    treatflow: '1:1 Betreuung und Hilfe',
    treatwell: 'Standard-Support',
    treatflowOk: true,
    treatwellOk: false,
  },
  {
    feature: 'Speziell für Kosmetik',
    treatflow: 'Entwickelt für Beauty-Studios',
    treatwell: 'Generische Branchenabdeckung',
    treatflowOk: true,
    treatwellOk: false,
  },
  {
    feature: 'Monatlicher Preis',
    treatflow: 'Ab 39 Euro/Monat',
    treatwell: 'Ab 39 Euro/Monat + Provisionen',
    treatflowOk: true,
    treatwellOk: false,
  },
  {
    feature: 'DSGVO-konform',
    treatflow: 'Ja, EU-Server',
    treatwell: 'Ja',
    treatflowOk: true,
    treatwellOk: true,
  },
  {
    feature: 'Kostenloser Datenumzug',
    treatflow: 'Ja, mit persönlicher Hilfe',
    treatwell: 'Ja',
    treatflowOk: true,
    treatwellOk: true,
  },
];

const keyDifferences = [
  {
    icon: AlertTriangle,
    title: 'Keine Provisionen',
    desc: 'Treatwell nimmt bis zu 35% Provision auf jeden Neukunden, der über den Marktplatz bucht. Bei Treatflow zahlst du einen festen Monatspreis - egal wie viele Kunden buchen.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Heart,
    title: 'Deine Marke, nicht unsere',
    desc: 'Bei Treatwell buchen Kunden über die Treatwell-Plattform. Bei Treatflow hast du deinen eigenen Buchungslink - dein Studio steht im Mittelpunkt, nicht eine Plattform.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: FileText,
    title: 'Dokumentation inklusive',
    desc: 'Treatwell ist eine Buchungsplattform ohne Behandlungsdokumentation. Treatflow bietet NiSV-konforme Dokumentation, digitale Anamnese-Formulare und eine vollständige Kundenkartei.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Users,
    title: 'Persönliche Betreuung',
    desc: 'Bei Treatflow bekommst du 1:1 Betreuung und Hilfe beim Einrichten, Datenumzug und im Alltag. Kein anonymes Ticket-System, sondern echte Menschen.',
    color: 'bg-amber-100 text-amber-600',
  },
];

export default function TreatflowVsTreatwell() {
  return (
    <>
      <Script
        id="faq-schema-vs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Ehrlicher Vergleich
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Treatflow vs. Treatwell:{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Was passt besser?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Du verwechselst uns manchmal? Kein Wunder - die Namen klingen ähnlich. Aber
              dahinter stecken zwei völlig verschiedene Konzepte. Hier siehst du die
              Unterschiede auf einen Blick.
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

        {/* Provision Warning Banner */}
        <section className="py-10 bg-rose-50 border-y border-rose-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-rose-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Wusstest du? Treatwell nimmt bis zu 35% Provision auf Neukunden.
                </h2>
                <p className="text-gray-600">
                  Bei einer Behandlung für 100 Euro gehen bis zu 35 Euro an Treatwell. Bei
                  Treatflow zahlst du nur deinen festen Monatspreis - egal wie viele Kunden
                  buchen. Null Prozent Provision. Immer.
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
                Marktplatz vs. Studio-Software - zwei verschiedene Ansätze.
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
                Treatflow vs. Treatwell im Detail
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
                        Treatwell
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
                          {row.treatwellOk ? (
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                          )}
                          <span className="text-sm text-gray-500">
                            {row.treatwell}
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
                      {row.treatwellOk ? (
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">
                          Treatwell:
                        </span>{' '}
                        {row.treatwell}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Provision Calculator */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                So viel sparst du ohne Provision
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ein Rechenbeispiel: Was Provisionen wirklich kosten.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                    Treatwell
                  </div>
                  <div className="text-sm text-gray-500">Bei 15 Neukunden/Monat</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monatspreis</span>
                    <span className="font-semibold text-gray-900">39 Euro</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      15 Neukunden x 80 Euro x 35%
                    </span>
                    <span className="font-semibold text-rose-600">+ 420 Euro</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Online-Zahlungsgebühr (2%)</span>
                    <span className="font-semibold text-rose-600">+ variabel</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="font-bold text-gray-900">
                      Effektive Kosten/Monat
                    </span>
                    <span className="font-bold text-rose-600 text-xl">
                      ~459 Euro+
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-2xl border-2 border-indigo-200 p-8 relative">
                <div className="absolute -top-3 right-6 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Spare über 400 Euro/Monat
                </div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                    Treatflow
                  </div>
                  <div className="text-sm text-gray-500">Bei 15 Neukunden/Monat</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monatspreis (Booking)</span>
                    <span className="font-semibold text-gray-900">59 Euro</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Provision auf Neukunden</span>
                    <span className="font-semibold text-emerald-600">0 Euro</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Versteckte Gebühren</span>
                    <span className="font-semibold text-emerald-600">0 Euro</span>
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
              Rechenbeispiel basierend auf 15 Neukunden/Monat mit durchschnittlich 80
              Euro Behandlungswert über den Treatwell-Marktplatz.
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
                    'Keine Provisionen auf Buchungen zahlen willst',
                    'Deine eigene Marke stärken möchtest',
                    'Behandlungsdokumentation brauchst',
                    'NiSV-konforme Formulare benötigst',
                    'Eine vollständige Kundenkartei willst',
                    'Persönliche 1:1 Betreuung schätzt',
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
                  Treatwell passt eher, wenn du...
                </h3>
                <ul className="space-y-3">
                  {[
                    'Primär über einen Marktplatz Neukunden gewinnen willst',
                    'Keine Behandlungsdokumentation brauchst',
                    'Ein Kassensystem (POS) benötigst',
                    'Provisionen auf Neukunden akzeptierst',
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
                  value: '0%',
                  label: 'Provision',
                  desc: 'Auf alle Buchungen',
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
              Treatflow vs. Treatwell: Zwei verschiedene Konzepte
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Treatflow und Treatwell klingen ähnlich, verfolgen aber grundlegend
                verschiedene Ansätze. Treatwell ist ein{' '}
                <strong>Marktplatz für Beauty-Dienstleistungen</strong> - vergleichbar
                mit Booking.com für Hotels. Kunden suchen auf der
                Treatwell-Plattform nach Studios und buchen dort direkt. Dafür
                verlangt Treatwell bis zu 35% Provision auf Neukunden-Buchungen.
              </p>
              <p>
                Treatflow hingegen ist eine{' '}
                <strong>
                  Studio-Software speziell für Kosmetikstudios
                </strong>
                . Du bekommst deinen eigenen Buchungslink, eine digitale{' '}
                <Link
                  href="/kundenkartei-kosmetikstudio"
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
                - alles zu einem festen Monatspreis ohne versteckte Kosten oder
                Provisionen.
              </p>
              <p>
                Besonders für Studios, die mit NiSV-pflichtigen Geräten arbeiten
                oder Wert auf eine lückenlose Behandlungsdokumentation legen, ist
                Treatflow die bessere Wahl. Denn diese Funktionen bietet Treatwell
                schlicht nicht an.
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

        {/* Final CTA */}
        <section className="py-20 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Bereit, ohne Provisionen zu wachsen?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Teste Treatflow 14 Tage kostenlos. Keine Kreditkarte, keine
              Provisionen, keine versteckten Kosten.
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
