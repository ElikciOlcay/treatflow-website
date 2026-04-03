import { CheckCircle, X, ArrowRight, AlertTriangle, Shield, Users, FileText, Star, Globe, Clock } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import FAQSection from './FAQSection';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';

export const metadata = {
  title: 'Treatflow vs. Timely: Der ehrliche Vergleich für Kosmetikstudios',
  description:
    'Treatflow oder Timely? Spezialisierte Kosmetikstudio-Software mit NiSV-Dokumentation vs. internationale Salon-Software. Jetzt Feature für Feature vergleichen.',
  keywords: [
    'Treatflow vs Timely',
    'Timely Alternative',
    'Timely Kosmetikstudio',
    'Timely Software Vergleich',
    'Timely Kosten',
    'Salon Software Vergleich',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/treatflow-vs-timely',
  },
  openGraph: {
    title: 'Treatflow vs. Timely: Der ehrliche Vergleich',
    description:
      'Spezialisierte Kosmetikstudio-Software vs. internationale Salon-Software - warum über 500 Studios Treatflow wählen.',
    url: 'https://www.treatflow.io/treatflow-vs-timely',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Treatflow vs Timely Vergleich',
      },
    ],
  },
};

const breadcrumbItems = [
  { label: 'Vergleiche' },
  { label: 'Treatflow vs. Timely' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist Timely und für wen ist es gedacht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timely ist eine Salon-Management-Software aus Neuseeland, die sich an Friseure, Kosmetikstudios und Spas weltweit richtet. Der Fokus liegt auf Terminbuchung, Kassensystem und Marketing-Tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Treatflow und Timely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treatflow ist spezialisiert auf Kosmetikstudios im deutschsprachigen Raum mit NiSV-Dokumentation, digitalen Anamnesebögen und Behandlungsdokumentation. Timely ist eine internationale Salon-Software ohne spezialisierte Kosmetik-Funktionen und ohne deutschen Support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hat Timely eine Behandlungsdokumentation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Timely bietet keine integrierte Behandlungsdokumentation, keine NiSV-konformen Formulare und keine Vorher-Nachher-Foto-Dokumentation für Behandlungsverläufe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich von Timely zu Treatflow wechseln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Unser Team unterstützt dich kostenlos beim Umzug deiner Kundendaten. Du kannst Treatflow 14 Tage kostenlos testen und in Ruhe vergleichen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist Timely auf Deutsch verfügbar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timely ist primär auf Englisch ausgerichtet. Support und Dokumentation sind auf Englisch. Treatflow hingegen ist komplett auf Deutsch verfügbar - Software, Support und alle Formulare.',
      },
    },
  ],
};

const comparisonRows = [
  {
    feature: 'Spezialisierung',
    treatflow: 'Kosmetikstudios & Beauty',
    timely: 'Salons aller Art (Friseure, Beauty, Spa)',
    treatflowOk: true,
    timelyOk: false,
  },
  {
    feature: 'Herkunft / Markt',
    treatflow: 'Österreich, DACH-Fokus',
    timely: 'Neuseeland, international',
    treatflowOk: true,
    timelyOk: true,
  },
  {
    feature: 'Sprache & Support',
    treatflow: 'Komplett Deutsch, 1:1 Support',
    timely: 'Primär Englisch',
    treatflowOk: true,
    timelyOk: false,
  },
  {
    feature: 'Behandlungsdokumentation',
    treatflow: 'Integriert mit Fotos und KI',
    timely: 'Nicht vorhanden',
    treatflowOk: true,
    timelyOk: false,
  },
  {
    feature: 'Digitale Kundenkartei',
    treatflow: 'Umfassend mit Behandlungshistorie',
    timely: 'Basis-Kundenverwaltung',
    treatflowOk: true,
    timelyOk: false,
  },
  {
    feature: 'Anamnese-Formulare',
    treatflow: 'Digital + KI-Generator',
    timely: 'Nicht vorhanden',
    treatflowOk: true,
    timelyOk: false,
  },
  {
    feature: 'NiSV-Konformität',
    treatflow: 'Vollständig konform',
    timely: 'Nicht vorhanden',
    treatflowOk: true,
    timelyOk: false,
  },
  {
    feature: 'Online-Terminbuchung',
    treatflow: 'Eigener Buchungslink',
    timely: 'Online-Buchungsseite',
    treatflowOk: true,
    timelyOk: true,
  },
  {
    feature: 'Kassensystem (POS)',
    treatflow: 'Nicht integriert',
    timely: 'Integriertes POS',
    treatflowOk: false,
    timelyOk: true,
  },
  {
    feature: 'DSGVO / EU-Server',
    treatflow: 'Ja, EU-Server',
    timely: 'Server in Australien/Neuseeland',
    treatflowOk: true,
    timelyOk: false,
  },
  {
    feature: 'SMS-Erinnerungen',
    treatflow: 'Integriert',
    timely: 'Integriert',
    treatflowOk: true,
    timelyOk: true,
  },
  {
    feature: 'Preis',
    treatflow: 'Ab 39€/Monat',
    timely: 'Ab ca. 30€/Monat (je nach Plan)',
    treatflowOk: true,
    timelyOk: true,
  },
];

const keyDifferences = [
  {
    icon: Globe,
    title: 'Deutsch statt Englisch',
    desc: 'Timely ist eine internationale Software auf Englisch. Treatflow ist komplett auf Deutsch - die Software, der Support, alle Formulare und die Dokumentation.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: FileText,
    title: 'Dokumentation inklusive',
    desc: 'Timely bietet keine Behandlungsdokumentation. Treatflow hat NiSV-konforme Dokumentation, digitale Anamnese-Formulare und eine vollständige Kundenkartei mit Fotos direkt integriert.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Shield,
    title: 'DSGVO & EU-Server',
    desc: 'Timely speichert Daten in Australien/Neuseeland. Treatflow hostet alle Daten verschlüsselt auf EU-Servern - vollständig DSGVO-konform für Studios in Deutschland und Österreich.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Clock,
    title: 'Support in deiner Zeitzone',
    desc: 'Timely sitzt in Neuseeland - Support-Zeiten passen nicht zum europäischen Alltag. Bei Treatflow erreichst du uns zu normalen Geschäftszeiten im DACH-Raum.',
    color: 'bg-amber-100 text-amber-600',
  },
];

export default function TreatflowVsTimely() {
  return (
    <>
      <Script
        id="faq-schema-vs-timely"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema-vs-timely"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Ehrlicher Vergleich
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Treatflow vs. Timely:{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Was passt besser?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Timely ist eine beliebte Salon-Software aus Neuseeland. Aber passt
              eine internationale Lösung auf Englisch zu deinem Kosmetikstudio
              in Deutschland oder Österreich? Hier siehst du die Unterschiede.
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

        {/* Info Banner */}
        <section className="py-10 bg-amber-50 border-y border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Gut zu wissen: Timely ist nicht für den deutschen Markt gebaut.
                </h2>
                <p className="text-gray-600">
                  Timely kommt aus Neuseeland und richtet sich an den
                  internationalen Markt. Die Software, der Support und alle
                  Inhalte sind auf Englisch. Spezialisierte Funktionen für
                  Kosmetikstudios wie NiSV-Dokumentation oder digitale
                  Anamnesebögen fehlen.
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
                DACH-spezialisierte Kosmetik-Software vs. internationale Salon-Software.
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
                Treatflow vs. Timely im Detail
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
                        Timely
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
                          {row.timelyOk ? (
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                          )}
                          <span className="text-sm text-gray-500">
                            {row.timely}
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
                      {row.timelyOk ? (
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">
                          Timely:
                        </span>{' '}
                        {row.timely}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlight */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Was Treatflow kann, was Timely nicht bietet
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Funktionen, die speziell für Kosmetikstudios im DACH-Raum entwickelt wurden.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: FileText,
                  title: 'Behandlungsdokumentation',
                  desc: 'Dokumentiere jede Behandlung mit Fotos, Notizen und Parametern - NiSV-konform und rechtssicher.',
                  color: 'bg-emerald-100 text-emerald-600',
                },
                {
                  icon: Shield,
                  title: 'NiSV-Formulare',
                  desc: 'Digitale Anamnesebögen, Einwilligungserklärungen und Beratungsprotokolle - alles rechtskonform.',
                  color: 'bg-indigo-100 text-indigo-600',
                },
                {
                  icon: Globe,
                  title: 'Komplett auf Deutsch',
                  desc: 'Software, Formulare, Support und Dokumentation - alles auf Deutsch für dein Studio im DACH-Raum.',
                  color: 'bg-purple-100 text-purple-600',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-gray-50 rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}
                  >
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who is it for */}
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
                    'Ein Kosmetikstudio in Deutschland oder Österreich betreibst',
                    'Behandlungsdokumentation und NiSV-Konformität brauchst',
                    'Deutsche Software mit deutschem Support willst',
                    'DSGVO-konforme EU-Server für Kundendaten benötigst',
                    'Digitale Anamnesebögen vorab an Kunden senden möchtest',
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
                  Timely passt eher, wenn du...
                </h3>
                <ul className="space-y-3">
                  {[
                    'Einen Salon im englischsprachigen Raum betreibst',
                    'Ein integriertes Kassensystem (POS) brauchst',
                    'Keine Behandlungsdokumentation benötigst',
                    'Englischsprachigen Support akzeptierst',
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
                  value: '100%',
                  label: 'Deutsch',
                  desc: 'Software, Support & Formulare',
                  icon: Globe,
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
              Treatflow vs. Timely: Lokal spezialisiert statt international generisch
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Timely ist eine etablierte{' '}
                <strong>Salon-Management-Software aus Neuseeland</strong>, die
                sich an Friseure, Kosmetikstudios und Spas weltweit richtet. Die
                Stärken liegen in der Terminbuchung, dem integrierten
                Kassensystem und Marketing-Automatisierungen. Allerdings ist die
                Software primär auf Englisch und wurde nicht für den deutschen
                Markt entwickelt.
              </p>
              <p>
                Treatflow verfolgt einen anderen Ansatz: eine{' '}
                <strong>
                  spezialisierte Software für Kosmetikstudios im DACH-Raum
                </strong>
                . Du bekommst eine digitale{' '}
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
                  href="/nachrichtenautomatisierung"
                  className="text-indigo-600 hover:underline"
                >
                  SMS-Erinnerungen
                </Link>{' '}
                - komplett auf Deutsch und mit DSGVO-konformen EU-Servern.
              </p>
              <p>
                Für Kosmetikstudios in Deutschland und Österreich, die Wert auf
                NiSV-Konformität, deutsche Formulare und lokalen Support legen,
                ist Treatflow die naheliegende Wahl. Timely eignet sich besser
                für englischsprachige Salons, die ein integriertes Kassensystem
                benötigen.
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
                href="/preise"
                className="hover:text-indigo-600 transition-colors underline underline-offset-4"
              >
                Preise
              </Link>
            </div>
          </div>
        </section>

        <SocialProofBar />

        {/* Final CTA */}
        <section className="py-20 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Bereit für deutsche Kosmetik-Software?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Teste Treatflow 14 Tage kostenlos. Komplett auf Deutsch, mit
              NiSV-Dokumentation und EU-Servern.
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
