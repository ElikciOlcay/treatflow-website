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
  title: 'Einverständniserklärung Laser Haarentfernung Vorlage PDF',
  description:
    'Einverständniserklärung Laser-/IPL-Haarentfernung als PDF-Vorlage kostenlos. Aufklärung, Gesundheitsangaben und Unterschrift – für Kosmetik- und Laserstudios.',
  keywords: [
    'einverständniserklärung laser haarentfernung vorlage',
    'einwilligung laser haarentfernung pdf',
    'einverständniserklärung ipl vorlage',
    'aufklärung laser kosmetik',
    'laser haarentfernung formular',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/vorlagen/einverstaendniserklaerung-laser',
  },
  openGraph: {
    title: 'Einverständniserklärung Laser Haarentfernung Vorlage | Treatflow',
    description: 'Kostenlose PDF-Vorlage für Aufklärung und Einwilligung bei Laser/IPL.',
    url: 'https://www.treatflow.io/vorlagen/einverstaendniserklaerung-laser',
  },
};

const PDF_URL = '/downloads/einverstaendniserklaerung-laser-haarentfernung.pdf';
const LEAD_SOURCE = 'Einverständniserklärung Laser Haarentfernung PDF';
const SHORT_DISCLAIMER =
  'Diese Vorlage dient als Orientierungshilfe und ersetzt keine individuelle rechtliche oder fachliche Beratung.';

const faqData = [
  {
    question: 'Warum brauche ich eine Einverständniserklärung für Laser-Haarentfernung?',
    answer:
      'Sie dokumentiert, dass die Kundin über Ablauf, Risiken und Nachsorge aufgeklärt wurde und der Behandlung zustimmt. Zusammen mit Anamnese und Beratungsprotokoll schützt dich das rechtlich und organisatorisch.',
  },
  {
    question: 'Reicht die Einwilligung allein für NiSV?',
    answer:
      'Meist nicht. Ergänze Beratung/Aufklärung (Beratungsprotokoll) und die eigentliche Behandlungsdokumentation (Gerät, Parameter, Zone). Siehe unseren NiSV-Guide.',
  },
  {
    question: 'Für IPL und Laser gleichermaßen nutzbar?',
    answer:
      'Die Vorlage deckt Laser- und IPL-Haarentfernung als Ausgangspunkt ab. Passe Gerätebezeichnungen, Risiken und Studiohinweise an deine Praxis an.',
  },
  {
    question: 'Kann die Kundin vorab digital unterschreiben?',
    answer:
      'Ja. Mit Treatflow sendest du das Formular per Link – ausfüllen und unterschreiben vor dem Termin, gespeichert in der Kundenakte.',
  },
];

export default function LaserEinverstaendnisPage() {
  const breadcrumbItems = [
    { label: 'Vorlagen', href: '/vorlagen' },
    { label: 'Einverständnis Laser' },
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
      <Script id="laser-einw-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="laser-einw-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }} />

      <section className="pb-16 bg-gradient-to-br from-rose-50 via-white to-indigo-50">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileText className="h-4 w-4 mr-2" />
                Kostenlose PDF-Vorlage
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Einverständniserklärung Laser-Haarentfernung:{' '}
                <span className="text-indigo-600">Vorlage PDF</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Vorlage für Aufklärung und Einwilligung bei Laser- und IPL-Haarentfernung – inkl.
                Gesundheitsangaben und Unterschrift.
              </p>
              <AiAnswerCapsule
                className="mb-6"
                question="Was muss in einer Einverständniserklärung für Laser-Haarentfernung stehen?"
                answer="Personendaten, relevante Gesundheitsangaben, dokumentierte Aufklärung zu Risiken und Nachsorge sowie die ausdrückliche Einwilligung mit Datum und Unterschrift. Ideal ergänzt um Beratungsprotokoll und Behandlungsdokumentation – digital in der Kundenakte."
              />
              <ul className="space-y-2">
                {[
                  'Gesundheits-Checkliste (Auszug)',
                  'Aufklärung & Risiken',
                  'Einwilligungs-Checkboxen',
                  'Unterschrift Kundin & Behandler/in',
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
                  buttonText="Einverständniserklärung herunterladen"
                  successTitle="Deine Vorlage ist bereit!"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Passt zu Beratung & Anamnese</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Einwilligung ersetzt keine Anamnese und kein Beratungsprotokoll. Empfohlenes Set:
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/anamnesebogen-kosmetik-vorlage-pdf" className="text-indigo-600 font-medium hover:underline">
                  Anamnesebogen Kosmetik PDF
                </Link>
              </li>
              <li>
                <Link href="/vorlagen/nisv-beratungsprotokoll" className="text-indigo-600 font-medium hover:underline">
                  NiSV-Beratungsprotokoll Vorlage
                </Link>
              </li>
              <li>
                <Link href="/laser-haarentfernung-software" className="text-indigo-600 font-medium hover:underline">
                  Software für Laser-Haarentfernung
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Digital statt Wartezimmer-Zettel</h2>
            <p className="text-gray-700 leading-relaxed">
              Mit Treatflow füllen Kundinnen Formulare vorab aus – inklusive Unterschrift. Alles landet in der
              Akte und ist mit der{' '}
              <Link href="/behandlungsdokumentation" className="text-indigo-600 font-medium hover:underline">
                Behandlungsdokumentation
              </Link>{' '}
              verknüpft. Mehr im{' '}
              <Link href="/guides/nisv" className="text-indigo-600 font-medium hover:underline">
                NiSV-Guide
              </Link>
              .
            </p>
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

          <p className="text-sm text-gray-500 flex items-start gap-2">
            <Shield className="h-4 w-4 mt-0.5 shrink-0" />
            {SHORT_DISCLAIMER}
          </p>
        </div>
      </section>

      <section className="py-16 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Formulare vor dem Termin erledigen</h2>
          <p className="text-indigo-100 mb-8">Weniger Wartezeit, vollständige Unterlagen, digitale Akte.</p>
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
