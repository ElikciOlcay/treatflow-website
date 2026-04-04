import { CheckCircle, X, ArrowRight, AlertTriangle, Shield, Users, FileText, Star, Heart, Monitor } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import FAQSection from './FAQSection';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';

export const metadata = {
  title: 'Treatflow vs. Shore: Der ehrliche Vergleich für Kosmetikstudios',
  description:
    'Treatflow oder Shore? Spezialisierte Kosmetikstudio-Software mit NiSV-Dokumentation und Behandlungsdoku vs. generische Terminbuchungslösung. Jetzt vergleichen.',
  keywords: [
    'Treatflow vs Shore',
    'Shore Alternative',
    'Shore Kosmetikstudio',
    'Shore Software Vergleich',
    'Shore Kosten',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/treatflow-vs-shore',
  },
  openGraph: {
    title: 'Treatflow vs. Shore: Der ehrliche Vergleich',
    description:
      'Spezialisierte Kosmetikstudio-Software vs. generische Terminbuchung - warum über 500 Studios Treatflow statt Shore wählen.',
    url: 'https://www.treatflow.io/treatflow-vs-shore',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Treatflow vs Shore Vergleich',
      },
    ],
  },
};

const breadcrumbItems = [
  { label: 'Vergleiche' },
  { label: 'Treatflow vs. Shore' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Treatflow und Shore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treatflow ist spezialisiert auf Kosmetikstudios mit integrierter Behandlungsdokumentation, NiSV-Konformität und digitalen Anamnesebögen. Shore ist eine generische Terminbuchungslösung für verschiedene Branchen ohne spezialisierte Kosmetik-Funktionen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hat Shore eine Behandlungsdokumentation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Shore bietet keine integrierte Behandlungsdokumentation, keine NiSV-konformen Formulare und keine Foto-Dokumentation für Behandlungsverläufe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist Shore günstiger als Treatflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shore und Treatflow haben ähnliche Preise ab ca. 39€/Monat. Der Unterschied liegt in den Funktionen: Treatflow bietet Dokumentation, Formulare und NiSV-Konformität, Shore fokussiert auf Terminbuchung und Marketing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich von Shore zu Treatflow wechseln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Unser Team unterstützt dich kostenlos beim Umzug deiner Kundendaten. Du kannst Treatflow 14 Tage kostenlos testen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Software ist besser für Kosmetikstudios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für Kosmetikstudios, die Behandlungen dokumentieren, NiSV-konforme Formulare benötigen und eine spezialisierte Kundenkartei wollen, ist Treatflow die bessere Wahl. Shore eignet sich besser für Friseure oder Studios, die primär Marketing-Tools brauchen.',
      },
    },
  ],
};

const comparisonRows = [
  {
    feature: 'Geschäftsmodell',
    treatflow: 'Spezialisiert auf Kosmetikstudios',
    shore: 'Generische Terminbuchung für alle Branchen',
    treatflowOk: true,
    shoreOk: false,
  },
  {
    feature: 'Monatlicher Preis',
    treatflow: 'Ab 39€/Monat',
    shore: 'Ab ca. 39€/Monat',
    treatflowOk: true,
    shoreOk: true,
  },
  {
    feature: 'Behandlungsdokumentation',
    treatflow: 'Integriert mit Fotos und Notizen',
    shore: 'Nicht vorhanden',
    treatflowOk: true,
    shoreOk: false,
  },
  {
    feature: 'Digitale Kundenkartei',
    treatflow: 'Umfassend mit Behandlungshistorie',
    shore: 'Basis-Kundenverwaltung',
    treatflowOk: true,
    shoreOk: false,
  },
  {
    feature: 'Anamnese-Formulare',
    treatflow: 'Digital + KI-Generator',
    shore: 'Nicht vorhanden',
    treatflowOk: true,
    shoreOk: false,
  },
  {
    feature: 'NiSV-Konformität',
    treatflow: 'Vollständig konform',
    shore: 'Nicht vorhanden',
    treatflowOk: true,
    shoreOk: false,
  },
  {
    feature: 'Online-Terminbuchung',
    treatflow: 'Eigener Buchungslink',
    shore: 'Online-Buchungsseite',
    treatflowOk: true,
    shoreOk: true,
  },
  {
    feature: 'Marketing-Tools',
    treatflow: 'Grundlegende Automatisierung',
    shore: 'Website-Builder, Google-Integration',
    treatflowOk: false,
    shoreOk: true,
  },
  {
    feature: 'SMS-Erinnerungen',
    treatflow: 'Integriert',
    shore: 'Integriert',
    treatflowOk: true,
    shoreOk: true,
  },
  {
    feature: 'DSGVO / EU-Server',
    treatflow: 'Ja, EU-Server',
    shore: 'Ja, deutsche Server',
    treatflowOk: true,
    shoreOk: true,
  },
  {
    feature: 'Speziell für Kosmetik',
    treatflow: 'Ja, Beauty-Branche',
    shore: 'Nein, Friseure, Fitness, etc.',
    treatflowOk: true,
    shoreOk: false,
  },
  {
    feature: 'Persönliche Betreuung',
    treatflow: '1:1 Support auf Deutsch',
    shore: 'Support auf Deutsch',
    treatflowOk: true,
    shoreOk: true,
  },
];

const keyDifferences = [
  {
    icon: Heart,
    title: 'Spezialisiert statt generisch',
    desc: 'Shore bedient Friseure, Fitness, Gesundheit und mehr. Treatflow ist ausschließlich für Kosmetikstudios entwickelt - jede Funktion ist auf deine Branche zugeschnitten.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: FileText,
    title: 'Dokumentation inklusive',
    desc: 'Shore bietet keine Behandlungsdokumentation. Treatflow hat NiSV-konforme Dokumentation, digitale Anamnese-Formulare und eine vollständige Kundenkartei mit Fotos direkt integriert.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Shield,
    title: 'NiSV-Konformität',
    desc: 'Arbeitest du mit Laser, IPL oder anderen NiSV-pflichtigen Geräten? Treatflow bietet die nötige Dokumentation und Formulare. Shore hat keine NiSV-spezifischen Funktionen.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Users,
    title: 'Persönliche Betreuung',
    desc: 'Bei Treatflow bekommst du 1:1 Betreuung und Hilfe beim Einrichten, Datenumzug und im Alltag. Kein anonymes Ticket-System, sondern echte Menschen.',
    color: 'bg-amber-100 text-amber-600',
  },
];

export default function TreatflowVsShore() {
  return (
    <>
      <Script
        id="faq-schema-vs-shore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema-vs-shore"
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
              Treatflow vs. Shore:{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Was passt besser?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Shore ist eine beliebte Terminbuchungslösung aus Deutschland. Aber ist
              eine generische Software wirklich die beste Wahl für dein
              Kosmetikstudio? Hier siehst du die Unterschiede auf einen Blick.
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
                  Gut zu wissen: Shore ist nicht auf Kosmetikstudios spezialisiert.
                </h2>
                <p className="text-gray-600">
                  Shore bedient viele Branchen - von Friseuren über Fitness bis
                  Gesundheit. Das bedeutet: Keine Behandlungsdokumentation, keine
                  NiSV-Formulare und keine spezialisierten Kosmetik-Funktionen.
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
                Spezialisierte Kosmetik-Software vs. generische Terminbuchung.
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
                Treatflow vs. Shore im Detail
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
                        Shore
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
                          {row.shoreOk ? (
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                          )}
                          <span className="text-sm text-gray-500">
                            {row.shore}
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
                      {row.shoreOk ? (
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">
                          Shore:
                        </span>{' '}
                        {row.shore}
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
                Was Treatflow kann, was Shore nicht bietet
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Funktionen, die speziell für Kosmetikstudios entwickelt wurden.
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
                  icon: Monitor,
                  title: 'Spezialisierte Kundenkartei',
                  desc: 'Vollständige Behandlungshistorie mit Fotos, Hauttyp, Allergien und individuellen Notizen.',
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
                    'Behandlungen dokumentieren musst',
                    'NiSV-konforme Formulare brauchst',
                    'Eine spezialisierte Kundenkartei willst',
                    'Vorher-Nachher-Fotos festhalten möchtest',
                    'Digitale Anamnesebögen benötigst',
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
                  Shore passt eher, wenn du...
                </h3>
                <ul className="space-y-3">
                  {[
                    'Primär eine Terminbuchungslösung suchst',
                    'Marketing-Tools wie Website-Builder brauchst',
                    'Keine Behandlungsdokumentation benötigst',
                    'Einen Friseursalon oder Fitness-Studio führst',
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
              Treatflow vs. Shore: Spezialisierung macht den Unterschied
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Shore ist eine <strong>deutsche Terminbuchungslösung</strong>, die
                sich an verschiedene Branchen richtet - von Friseuren über
                Fitness-Studios bis hin zu Gesundheitsdienstleistern. Die Stärken
                liegen in der Online-Terminbuchung, Marketing-Tools wie einem
                Website-Builder und der Google-Integration.
              </p>
              <p>
                Treatflow hingegen ist eine{' '}
                <strong>
                  Studio-Software speziell für Kosmetikstudios
                </strong>
                . Du bekommst deinen eigenen Buchungslink, eine digitale{' '}
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
                Besonders für Studios, die mit NiSV-pflichtigen Geräten arbeiten
                oder Wert auf eine lückenlose Behandlungsdokumentation legen, ist
                Treatflow die bessere Wahl. Denn diese Funktionen bietet Shore als
                generische Terminbuchungslösung nicht an.
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
              Bereit für spezialisierte Kosmetik-Software?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Teste Treatflow 14 Tage kostenlos. Keine Kreditkarte, keine
              versteckten Kosten - dafür Dokumentation, Formulare und NiSV-Konformität.
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
