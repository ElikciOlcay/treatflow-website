import { CheckCircle, X, ArrowRight, AlertTriangle, Shield, Users, FileText, Star, CreditCard, Clock, Zap } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';

export const metadata = {
  title: 'Kosmetikstudio Software kostenlos? Was du wissen musst [2026]',
  description:
    'Gibt es gute kostenlose Software für Kosmetikstudios? Wir vergleichen kostenlose und kostenpflichtige Lösungen - mit ehrlicher Bewertung, Funktionsvergleich und Empfehlung.',
  keywords: [
    'Kosmetikstudio Software kostenlos',
    'kostenlose Salon Software',
    'Kosmetikstudio Software gratis',
    'Beauty Software kostenlos',
    'Salon Software kostenlos Vergleich',
    'Kosmetikstudio Software Kosten',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/kosmetikstudio-software-kostenlos',
  },
  openGraph: {
    title: 'Kosmetikstudio Software kostenlos? Was du wissen musst',
    description:
      'Kostenlose vs. kostenpflichtige Software für Kosmetikstudios im Vergleich. Funktionen, Einschränkungen und Empfehlungen.',
    url: 'https://www.treatflow.io/kosmetikstudio-software-kostenlos',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kosmetikstudio Software kostenlos Vergleich',
      },
    ],
  },
};

const breadcrumbItems = [
  { label: 'Ratgeber' },
  { label: 'Kosmetikstudio Software kostenlos' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Gibt es kostenlose Software für Kosmetikstudios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, es gibt kostenlose Optionen wie Fresha (Basis) oder Google Kalender. Diese haben jedoch Einschränkungen: fehlende Behandlungsdokumentation, keine NiSV-Konformität, versteckte Kosten durch Gebühren oder eingeschränkter Funktionsumfang.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet Kosmetikstudio Software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professionelle Kosmetikstudio-Software kostet zwischen 30 und 80 Euro pro Monat. Treatflow startet ab 39 Euro/Monat mit 14 Tagen kostenloser Testphase. Marktplätze wie Treatwell nehmen stattdessen Provision pro Buchung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Lohnt sich kostenlose Software für mein Kosmetikstudio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für den Einstieg kann kostenlose Software ausreichen. Sobald du Behandlungen dokumentieren, NiSV-Vorschriften einhalten oder professionelle Kundenkartei führen musst, stößt du an Grenzen. Professionelle Software spart langfristig Zeit und ist rechtssicher.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Funktionen fehlen bei kostenloser Kosmetikstudio Software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kostenlose Software bietet meist keine Behandlungsdokumentation, keine NiSV-konformen Formulare, keine digitale Kundenkartei mit Fotos, keine automatischen SMS-Erinnerungen und keinen deutschen Support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist Treatflow kostenlos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treatflow bietet eine 14-tägige kostenlose Testphase ohne Kreditkarte. Danach starten die Pläne ab 39 Euro/Monat (Basic) bzw. 59 Euro/Monat (Booking). Es gibt keine versteckten Kosten und keine Provisionen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich Treatflow kostenlos testen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Treatflow bietet 14 Tage kostenlosen Test aller Funktionen. Keine Kreditkarte nötig, keine automatische Verlängerung. Du kannst alle Features unverbindlich ausprobieren.',
      },
    },
  ],
};

const comparisonRows = [
  {
    feature: 'Terminverwaltung',
    free: 'Einfacher Kalender',
    paid: 'Professioneller Kalender mit Mitarbeiterplanung',
    freeOk: true,
    paidOk: true,
  },
  {
    feature: 'Online-Buchungen',
    free: 'Teilweise (über Marktplatz)',
    paid: 'Eigener Buchungslink, 24/7',
    freeOk: false,
    paidOk: true,
  },
  {
    feature: 'Kundenkartei',
    free: 'Basis-Kontaktdaten',
    paid: 'Vollständig mit Fotos und Behandlungshistorie',
    freeOk: false,
    paidOk: true,
  },
  {
    feature: 'Behandlungsdokumentation',
    free: 'Nicht vorhanden',
    paid: 'Integriert mit Fotos und Notizen',
    freeOk: false,
    paidOk: true,
  },
  {
    feature: 'NiSV-Konformität',
    free: 'Nicht vorhanden',
    paid: 'Vollständig konform',
    freeOk: false,
    paidOk: true,
  },
  {
    feature: 'Digitale Formulare',
    free: 'Nicht vorhanden',
    paid: 'Anamnese, Einwilligung, KI-Generator',
    freeOk: false,
    paidOk: true,
  },
  {
    feature: 'SMS-Erinnerungen',
    free: 'Meist nicht inklusive',
    paid: 'Automatisch per SMS und E-Mail',
    freeOk: false,
    paidOk: true,
  },
  {
    feature: 'DSGVO / EU-Server',
    free: 'Oft unklar',
    paid: 'Ja, EU-Server garantiert',
    freeOk: false,
    paidOk: true,
  },
  {
    feature: 'Versteckte Kosten',
    free: 'Provision, Payment-Gebühren, Upgrades',
    paid: 'Keine - transparenter Festpreis',
    freeOk: false,
    paidOk: true,
  },
  {
    feature: 'Support',
    free: 'Community / E-Mail (oft Englisch)',
    paid: 'Persönlich auf Deutsch',
    freeOk: false,
    paidOk: true,
  },
];

const freeOptions = [
  {
    name: 'Google Kalender + Tabelle',
    pros: ['Komplett kostenlos', 'Einfache Terminplanung', 'Überall verfügbar'],
    cons: [
      'Keine Kundenkartei',
      'Keine Online-Buchungen',
      'Keine Dokumentation',
      'Nicht professionell',
      'Keine DSGVO-Konformität für Kundendaten',
    ],
    verdict: 'Nur für absolute Anfänger ohne professionellen Anspruch.',
  },
  {
    name: 'Fresha (kostenlose Basis)',
    pros: ['Kostenlose Basisversion', 'Online-Buchungen', 'Terminkalender'],
    cons: [
      'Payment-Gebühren auf Kartenzahlungen',
      'Keine Behandlungsdokumentation',
      'Keine NiSV-Formulare',
      'US-Unternehmen, Server unklar',
      'Support primär auf Englisch',
    ],
    verdict: 'Kostenlos im Einstieg, aber versteckte Kosten bei Kartenzahlungen.',
  },
  {
    name: 'Treatwell (Marktplatz)',
    pros: ['Neukunden über Plattform', 'Bekannte Marke', 'Online-Buchungen'],
    cons: [
      'Bis zu 35% Provision pro Buchung',
      'Kundendaten gehören Treatwell',
      'Keine eigene Software',
      'Keine Dokumentation',
      'Abhängigkeit vom Marktplatz',
    ],
    verdict: 'Nicht wirklich Software, sondern ein Marktplatz mit hohen Provisionen.',
  },
];

export default function KosmetikstudioSoftwareKostenlos() {
  return (
    <>
      <Script
        id="faq-schema-kostenlos"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema-kostenlos"
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
              Ratgeber 2026
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kosmetikstudio Software{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                kostenlos?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
              Eine kostenlose Software für dein Kosmetikstudio klingt verlockend.
              Aber was bekommst du wirklich - und wo liegen die Grenzen? Dieser
              Ratgeber zeigt dir ehrlich, wann kostenlos reicht und wann sich eine
              professionelle Lösung lohnt.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
              Kostenlose Kosmetikstudio-Software deckt meist nur die Terminplanung ab.
              Funktionen wie Behandlungsdokumentation, NiSV-Konformität und digitale
              Kundenkartei fehlen - genau die Bereiche, die professionelle Studios brauchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.treatflow.io/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                Treatflow 14 Tage kostenlos testen
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

        {/* Warning Banner */}
        <section className="py-10 bg-amber-50 border-y border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Kostenlos bedeutet nicht ohne Kosten.
                </h2>
                <p className="text-gray-600">
                  Viele &quot;kostenlose&quot; Lösungen verdienen an Provisionen,
                  Payment-Gebühren oder Premium-Upgrades. Andere sind so
                  eingeschränkt, dass du wichtige Funktionen wie
                  Behandlungsdokumentation oder NiSV-Konformität nicht abdecken
                  kannst.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Options Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Welche kostenlosen Optionen gibt es?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ein ehrlicher Blick auf die verfügbaren kostenlosen Lösungen und ihre Grenzen.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {freeOptions.map((option) => (
                <div
                  key={option.name}
                  className="bg-gray-50 rounded-2xl border border-gray-200 p-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {option.name}
                  </h3>
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-emerald-600 mb-3">
                      Vorteile
                    </div>
                    <ul className="space-y-2">
                      {option.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-rose-600 mb-3">
                      Nachteile
                    </div>
                    <ul className="space-y-2">
                      {option.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2">
                          <X className="h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 italic">{option.verdict}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When Free is Enough / When Not */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Wann reicht kostenlose Software - und wann nicht?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Kostenlos reicht, wenn du...
                </h3>
                <ul className="space-y-3">
                  {[
                    'Gerade erst startest und nur wenige Kunden hast',
                    'Nur einfache Terminplanung brauchst',
                    'Keine Behandlungsdokumentation führen musst',
                    'Keine NiSV-pflichtigen Geräte nutzt',
                    'Bereit bist, Abstriche bei Funktionen zu machen',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border-2 border-indigo-200 p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-indigo-600 mb-4">
                  Professionelle Software lohnt sich, wenn du...
                </h3>
                <ul className="space-y-3">
                  {[
                    'Behandlungen professionell dokumentieren willst',
                    'NiSV-konforme Formulare benötigst',
                    'Eine vollständige digitale Kundenkartei führen möchtest',
                    'No-Shows durch SMS-Erinnerungen reduzieren willst',
                    'DSGVO-konform mit Kundendaten arbeiten musst',
                    'Anamnese und Einwilligung digital vorab versenden möchtest',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="vergleich" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Kostenlos vs. Professionell im Vergleich
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Was bekommst du wirklich - Funktion für Funktion?
              </p>
            </div>

            {/* Desktop */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 w-1/3">
                      Funktion
                    </th>
                    <th className="text-center px-6 py-4 w-1/3">
                      <span className="inline-flex items-center gap-2 bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold">
                        Kostenlose Software
                      </span>
                    </th>
                    <th className="text-center px-6 py-4 w-1/3">
                      <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold">
                        Treatflow (59€)
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
                          {row.freeOk ? (
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                          )}
                          <span className="text-sm text-gray-500">
                            {row.free}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.paidOk ? (
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                          )}
                          <span className="text-sm text-gray-700">
                            {row.paid}
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
                      {row.freeOk ? (
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">
                          Kostenlos:
                        </span>{' '}
                        {row.free}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      {row.paidOk ? (
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm text-gray-700">
                        <span className="font-medium text-indigo-600">
                          Treatflow:
                        </span>{' '}
                        {row.paid}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Calculation */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Was kostet Kosmetikstudio Software wirklich?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ein realistischer Kostenvergleich - transparent und ehrlich.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                    Kostenlos
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">0€</div>
                    <div className="text-sm text-gray-500">pro Monat</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Einfacher Kalender</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">Keine Dokumentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">Keine Kundenkartei</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">Kein NiSV</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                    Marktplatz
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-rose-600">
                      ~250€+
                    </div>
                    <div className="text-sm text-gray-500">
                      pro Monat (durch Provision)
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Neukunden möglich</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">Bis zu 35% Provision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">Keine eigene Software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">Kunden gehören Plattform</span>
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-2xl border-2 border-indigo-200 p-8 relative">
                <div className="absolute -top-3 right-6 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Empfehlung
                </div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                    Treatflow
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-600">59€</div>
                    <div className="text-sm text-gray-500">pro Monat (Booking)</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Alles inklusive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dokumentation + NiSV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Keine Provision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">14 Tage kostenlos testen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Treatflow */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Warum professionelle Studios Treatflow wählen
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Über 500 Studios vertrauen auf Treatflow statt auf kostenlose Alternativen.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FileText,
                  title: 'Alles in einer App',
                  desc: 'Termine, Kunden, Formulare, Dokumentation und Nachrichten - kein Zusammenbasteln aus 5 verschiedenen Tools.',
                  color: 'bg-indigo-100 text-indigo-600',
                },
                {
                  icon: Shield,
                  title: 'NiSV-konform ab Tag 1',
                  desc: 'Beratungsprotokolle, Einwilligungen und Dokumentation für NiSV-pflichtige Behandlungen direkt integriert.',
                  color: 'bg-emerald-100 text-emerald-600',
                },
                {
                  icon: CreditCard,
                  title: 'Transparenter Festpreis',
                  desc: '59€/Monat mit allen Funktionen, ohne Provision, ohne Payment-Gebühren. 14 Tage kostenlos testen.',
                  color: 'bg-amber-100 text-amber-600',
                },
                {
                  icon: Clock,
                  title: '10 Min. spart pro Termin',
                  desc: 'Anamnese und Einwilligung werden vorab digital an Kunden gesendet - kein Papierkram im Studio.',
                  color: 'bg-rose-100 text-rose-600',
                },
                {
                  icon: Users,
                  title: 'Persönlicher Support',
                  desc: '1:1 Betreuung auf Deutsch. Hilfe beim Einrichten, Datenumzug und im Alltag. Kein anonymes Ticket-System.',
                  color: 'bg-purple-100 text-purple-600',
                },
                {
                  icon: Star,
                  title: '4.9/5 Sterne Bewertung',
                  desc: 'Über 500 Studios nutzen Treatflow täglich und bewerten uns mit 4.9 von 5 Sternen auf Google.',
                  color: 'bg-sky-100 text-sky-600',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-5`}
                  >
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Häufige Fragen zu kostenloser Kosmetikstudio Software
              </h2>
            </div>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl border border-gray-200 p-8"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Text */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Kosmetikstudio Software kostenlos: Fazit und Empfehlung
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Kostenlose Software für Kosmetikstudios gibt es - aber sie deckt
                in der Regel nur die{' '}
                <strong>Grundfunktionen der Terminplanung</strong> ab. Wer
                professionell arbeiten will, braucht mehr: eine digitale{' '}
                <Link
                  href="/kundenverwaltung"
                  className="text-indigo-600 hover:underline"
                >
                  Kundenkartei
                </Link>{' '}
                mit Behandlungshistorie, NiSV-konforme{' '}
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
                  Formulare
                </Link>{' '}
                und automatische{' '}
                <Link
                  href="/nachrichtenautomatisierung"
                  className="text-indigo-600 hover:underline"
                >
                  Terminerinnerungen
                </Link>
                .
              </p>
              <p>
                Marktplätze wie{' '}
                <Link
                  href="/treatflow-vs-treatwell"
                  className="text-indigo-600 hover:underline"
                >
                  Treatwell
                </Link>{' '}
                nehmen bis zu 35% Provision pro Buchung. Tools wie{' '}
                <Link
                  href="/treatflow-vs-fresha"
                  className="text-indigo-600 hover:underline"
                >
                  Fresha
                </Link>{' '}
                verdienen an Payment-Gebühren. Und generische Lösungen wie{' '}
                <Link
                  href="/treatflow-vs-shore"
                  className="text-indigo-600 hover:underline"
                >
                  Shore
                </Link>{' '}
                oder{' '}
                <Link
                  href="/treatflow-vs-timely"
                  className="text-indigo-600 hover:underline"
                >
                  Timely
                </Link>{' '}
                bieten keine spezialisierten Kosmetik-Funktionen.
              </p>
              <p>
                Treatflow bietet alles, was ein professionelles Kosmetikstudio
                braucht - ab 59 Euro pro Monat im vollen Paket, ohne versteckte Kosten. Mit 14
                Tagen kostenloser Testphase kannst du alle Funktionen
                unverbindlich ausprobieren.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <Link
                href="/kosmetikstudio-software"
                className="hover:text-indigo-600 transition-colors underline underline-offset-4"
              >
                Kosmetikstudio Software
              </Link>
              <Link
                href="/kosmetikstudio-software-vergleich"
                className="hover:text-indigo-600 transition-colors underline underline-offset-4"
              >
                Software-Vergleich
              </Link>
              <Link
                href="/preise"
                className="hover:text-indigo-600 transition-colors underline underline-offset-4"
              >
                Preise
              </Link>
              <Link
                href="/funktionen"
                className="hover:text-indigo-600 transition-colors underline underline-offset-4"
              >
                Alle Funktionen
              </Link>
            </div>
          </div>
        </section>

        <SocialProofBar />

        {/* Final CTA */}
        <section className="py-20 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              14 Tage kostenlos testen - ohne Risiko
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Keine Kreditkarte nötig, keine automatische Verlängerung. Teste
              alle Funktionen unverbindlich.
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
