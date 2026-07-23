import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Shield,
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import LeadDownloadForm from '../../components/LeadDownloadForm';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';
import AiAnswerCapsule from '../../components/AiAnswerCapsule';

export const metadata: Metadata = {
  title: 'NiSV Beratungsprotokoll Vorlage PDF kostenlos',
  description:
    'NiSV-Beratungsprotokoll als PDF-Vorlage kostenlos: Beratung, Aufklärung und Bestätigung für Laser/IPL & Co. Orientierungshilfe für Kosmetikstudios – digital besser mit Treatflow.',
  keywords: [
    'nisv beratungsprotokoll vorlage',
    'nisv beratungsprotokoll pdf',
    'beratungsprotokoll laser kosmetik',
    'nisv aufklärung vorlage',
    'nisv dokumentation vorlage',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/vorlagen/nisv-beratungsprotokoll',
  },
  openGraph: {
    title: 'NiSV Beratungsprotokoll Vorlage PDF | Treatflow',
    description: 'Kostenlose Vorlage für Beratung und Aufklärung bei NiSV-Anwendungen.',
    url: 'https://www.treatflow.io/vorlagen/nisv-beratungsprotokoll',
  },
};

const PDF_URL = '/downloads/nisv-beratungsprotokoll-vorlage.pdf';
const LEAD_SOURCE = 'NiSV Beratungsprotokoll Vorlage PDF';
const SHORT_DISCLAIMER =
  'Diese Vorlage dient als Orientierungshilfe und ersetzt keine individuelle rechtliche oder fachliche Beratung.';

const faqData = [
  {
    question: 'Was ist ein NiSV-Beratungsprotokoll?',
    answer:
      'Ein Beratungsprotokoll dokumentiert, dass die Kundin vor einer NiSV-relevanten Anwendung (z. B. Laser/IPL) über Wirkweise, Risiken, Kontraindikationen und Nachsorge aufgeklärt wurde und Fragen stellen konnte.',
  },
  {
    question: 'Brauche ich zusätzlich eine Einwilligung?',
    answer:
      'Ja. Beratung und Einwilligung gehören zusammen: Das Protokoll hält die Aufklärung fest, die Einwilligung die Zustimmung zur Behandlung. Nutze ergänzend unsere Laser-Einverständnis-Vorlage.',
  },
  {
    question: 'Ist die Vorlage rechtssicher?',
    answer:
      'Nein – sie ist eine Orientierungshilfe und keine Rechtsberatung. Passe sie an deine Geräte, Anwendungen und internen Standards an und lass sie bei Bedarf fachlich prüfen.',
  },
  {
    question: 'Wie lange muss ich NiSV-Unterlagen aufbewahren?',
    answer:
      'Für NiSV-relevante Dokumentation gilt in der Praxis häufig eine lange Aufbewahrung (oft 10 Jahre). Digital in der Kundenakte ist das deutlich robuster als Papierordner.',
  },
  {
    question: 'Kann ich das Protokoll digital führen?',
    answer:
      'Ja. Mit Treatflow erstellst du Formulare mit Pflichtfeldern und Unterschrift – gespeichert direkt in der Kundenakte, suchbar und mit der Behandlungsdokumentation verknüpft.',
  },
];

export default function NisvBeratungsprotokollPage() {
  const breadcrumbItems = [
    { label: 'Vorlagen', href: '/vorlagen' },
    { label: 'NiSV-Beratungsprotokoll' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Script id="nisv-proto-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="nisv-proto-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }} />

      <section className="pb-16 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Kostenlose PDF-Vorlage
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                NiSV-Beratungsprotokoll: <span className="text-indigo-600">Vorlage PDF</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Strukturierte Vorlage für Beratung und Aufklärung vor NiSV-relevanten Anwendungen –
                z. B. Laser- oder IPL-Haarentfernung. Sofort nutzbar, individuell anpassbar.
              </p>
              <AiAnswerCapsule
                className="mb-6"
                question="Was gehört in ein NiSV-Beratungsprotokoll?"
                answer="Mindestens: Kundendaten, geplante Anwendung und Zone, Gerät/Parameter soweit bekannt, dokumentierte Aufklärung zu Wirkung, Risiken, Kontraindikationen und Nachsorge sowie Bestätigung durch Kundin und Behandler/in mit Datum. Am besten digital in der Kundenakte statt als loses Blatt."
              />
              <ul className="space-y-2 mb-6">
                {[
                  'Felder für Beratung, Gerät und Zone',
                  'Aufklärungs-Checkliste',
                  'Unterschriften Kundin & Behandler/in',
                  'Passend zu Laser/IPL & ähnlichen Anwendungen',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-indigo-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:sticky lg:top-28">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-1">PDF kostenlos herunterladen</h2>
                <p className="text-gray-500 text-sm mb-5">
                  E-Mail eintragen – Download startet sofort.
                </p>
                <LeadDownloadForm
                  downloadUrl={PDF_URL}
                  leadSource={LEAD_SOURCE}
                  buttonText="Beratungsprotokoll herunterladen"
                  successTitle="Dein Beratungsprotokoll ist bereit!"
                  successDescription="Der Download startet automatisch."
                  disclaimerText={SHORT_DISCLAIMER}
                  compact
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum ein Beratungsprotokoll?</h2>
            <p className="text-gray-700 leading-relaxed">
              Bei NiSV-Anwendungen reicht „mündlich besprochen“ oft nicht. Du brauchst einen nachvollziehbaren
              Nachweis, dass aufgeklärt wurde – und dass die Kundin verstanden hat, worauf sie sich einlässt.
              Das Protokoll schützt Studio und Kundin und ist die Basis für saubere{' '}
              <Link href="/guides/nisv" className="text-indigo-600 font-medium hover:underline">
                NiSV-Dokumentation
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">PDF heute – digital morgen</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nutze die Vorlage zum Sofortstart. Langfristig besser: Formular in Treatflow mit Pflichtfeldern,
              digitaler Unterschrift und Archiv in der{' '}
              <Link href="/kundenkartei-software" className="text-indigo-600 font-medium hover:underline">
                Kundenkartei
              </Link>
              . Produktseite:{' '}
              <Link href="/nisv-dokumentation" className="text-indigo-600 font-medium hover:underline">
                NiSV-Dokumentation Software
              </Link>
              .
            </p>
            <Link
              href="/vorlagen/einverstaendniserklaerung-laser"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Passende Einverständniserklärung Laser
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufige Fragen</h2>
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FileText className="h-10 w-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Protokolle digital in der Kundenakte</h2>
          <p className="text-indigo-100 mb-8">Treatflow: Formulare, Unterschrift, Dokumentation – an einem Ort.</p>
          <a
            href="https://app.treatflow.io/auth/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold"
          >
            14 Tage kostenlos testen
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
