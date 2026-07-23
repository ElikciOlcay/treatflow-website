import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, CheckCircle, FileText, Shield } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';
import AiAnswerCapsule from '../../components/AiAnswerCapsule';
import SocialProofBar from '../../components/SocialProofBar';

export const metadata: Metadata = {
  title: 'NiSV-Guide für Kosmetikstudios: Dokumentation & Pflichten',
  description:
    'NiSV verständlich für Studios: Beratung, Einwilligung, Behandlungsdokumentation und Aufbewahrung. Mit Vorlagen und digitalem Workflow – ohne Juristensprech.',
  keywords: [
    'nisv dokumentation',
    'nisv kosmetikstudio',
    'nisv konform dokumentieren',
    'nisv beratungsprotokoll',
    'nisv pflichten laser',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/guides/nisv',
  },
  openGraph: {
    title: 'NiSV-Guide für Kosmetikstudios | Treatflow',
    description:
      'Beratung, Einwilligung, Dokumentation und Aufbewahrung – praxisnah für Laser, IPL & Co.',
    url: 'https://www.treatflow.io/guides/nisv',
  },
};

const faqData = [
  {
    q: 'Was ist die NiSV und wen betrifft sie?',
    a: 'Die NiSV regelt nichtionisierende Strahlung am Menschen – z. B. Laser und IPL zur Haarentfernung oder ähnlichen Anwendungen. Studios mit solchen Geräten müssen beraten, aufklären und dokumentieren.',
  },
  {
    q: 'Was muss ich bei NiSV-Behandlungen dokumentieren?',
    a: 'Typischerweise: Beratung/Aufklärung, Einwilligung, verwendetes Gerät, Parameter, Behandlungszone, Verlauf und Auffälligkeiten. Die Unterlagen müssen lange nachvollziehbar bleiben (häufig 10 Jahre).',
  },
  {
    q: 'Reicht ein PDF-Ordner für NiSV?',
    a: 'Papier oder lose PDFs sind riskant: schwer suchbar, leicht unvollständig, schlecht versioniert. Besser: strukturierte digitale Formulare und Protokolle direkt in der Kundenakte – wie in Treatflow.',
  },
  {
    q: 'Was ist der Unterschied zwischen Beratungsprotokoll und Einwilligung?',
    a: 'Das Beratungsprotokoll hält fest, worüber aufgeklärt wurde. Die Einwilligung dokumentiert die Zustimmung der Kundin zur Behandlung. Beides gehört zusammen – vor der Anwendung.',
  },
  {
    q: 'Welche Software eignet sich für NiSV-Dokumentation?',
    a: 'Eine Studio-Software mit digitalen Formularen, Unterschrift, Behandlungsdokumentation und Archiv in der Kundenakte. Treatflow ist darauf ausgelegt – inklusive Vorlagen und NiSV-Workflows.',
  },
];

const pillars = [
  {
    title: 'Beratung & Aufklärung',
    text: 'Vor der Anwendung: Wirkweise, Risiken, Kontraindikationen, Alternativen, Vor- und Nachsorge. Fragen beantworten und das festhalten.',
  },
  {
    title: 'Einwilligung',
    text: 'Schriftliche oder digitale Zustimmung der Kundin – nachvollziehbar, datierbar, zur Person und Behandlung zuordenbar.',
  },
  {
    title: 'Behandlungsdokumentation',
    text: 'Gerät, Parameter, Zone, Reaktion, Fotos/Notizen. So kannst du Folgebehandlungen sicher steuern und nachweisen.',
  },
  {
    title: 'Aufbewahrung',
    text: 'Unterlagen müssen über Jahre auffindbar bleiben. Digitale Archive mit Kundenzuordnung schlagen Ordner und USB-Sticks.',
  },
];

export default function NisvGuidePage() {
  const breadcrumbItems = [
    { label: 'Guides', href: '/guides' },
    { label: 'NiSV-Guide' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'NiSV-Guide für Kosmetikstudios: Dokumentation & Pflichten',
    dateModified: '2026-07-23',
    author: { '@type': 'Organization', name: 'Treatflow' },
    publisher: { '@type': 'Organization', name: 'Treatflow', url: 'https://www.treatflow.io' },
    mainEntityOfPage: 'https://www.treatflow.io/guides/nisv',
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Script id="nisv-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="nisv-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="nisv-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }} />

      <section className="pb-12 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-3">Guide · Stand Juli 2026 · Keine Rechtsberatung</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            NiSV-Guide für Kosmetikstudios
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Was du bei Laser, IPL & Co. beraten, einwilligen und dokumentieren solltest – als klarer
            Praxisleitfaden mit Vorlagen und digitalem Workflow.
          </p>
          <AiAnswerCapsule
            question="Wie dokumentiere ich NiSV-konform im Kosmetikstudio?"
            answer="Dokumentiere Beratung/Aufklärung, Einwilligung, Geräte- und Behandlungsparameter, Zone und Verlauf – zuordenbar zur Kundin und langfristig auffindbar. Am robustesten geht das digital in der Kundenakte (Formulare + Behandlungsdoku), statt lose Papierordner. Treatflow unterstützt genau diesen Workflow inklusive Vorlagen."
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/vorlagen/nisv-beratungsprotokoll"
              className="inline-flex items-center justify-center bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-700"
            >
              Beratungsprotokoll-Vorlage
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/nisv-dokumentation"
              className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-7 py-3.5 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600"
            >
              NiSV in Treatflow
            </Link>
          </div>
        </div>
      </section>

      <SocialProofBar />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Die vier Säulen der NiSV-Praxis</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl border border-gray-100 p-5 bg-gray-50/60">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-indigo-600" />
                    <h3 className="font-bold text-gray-900">{p.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Empfohlener Ablauf vor jeder NiSV-Behandlung</h2>
            <ol className="space-y-3">
              {[
                'Anamnese aktualisieren (Kontraindikationen, Hautzustand, Medikamente)',
                'Beratung durchführen und Beratungsprotokoll ausfüllen',
                'Einwilligung einholen (Unterschrift)',
                'Behandlung dokumentieren (Gerät, Parameter, Zone, Reaktion)',
                'Nachsorgehinweise mitgeben und Terminfolge planen',
              ].map((item, i) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="font-bold text-indigo-600">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vorlagen zum Sofortstart</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FileText className="h-5 w-5 text-indigo-600 mt-0.5" />
                <Link href="/vorlagen/nisv-beratungsprotokoll" className="text-indigo-700 font-medium hover:underline">
                  NiSV-Beratungsprotokoll Vorlage (PDF)
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="h-5 w-5 text-indigo-600 mt-0.5" />
                <Link href="/vorlagen/einverstaendniserklaerung-laser" className="text-indigo-700 font-medium hover:underline">
                  Einverständniserklärung Laser-Haarentfernung
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="h-5 w-5 text-indigo-600 mt-0.5" />
                <Link href="/anamnesebogen-kosmetik-vorlage-pdf" className="text-indigo-700 font-medium hover:underline">
                  Anamnesebogen Kosmetik PDF
                </Link>
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Die Vorlagen sind Orientierungshilfen und ersetzen keine individuelle Rechtsberatung.
              Bei Unsicherheit Fachstelle oder Rechtsberatung hinzuziehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Papier vs. digital</h2>
            <ul className="space-y-2">
              {[
                'Digitale Formulare sind lesbar und vollständig pflichtfeld-gesteuert',
                'Unterschrift und Protokoll landen sofort in der Kundenakte',
                'Suche nach Kundin, Datum oder Behandlung in Sekunden',
                'Weniger Risiko durch verlegte Ordner oder unvollständige Sätze',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700">
              Produktseite:{' '}
              <Link href="/nisv-dokumentation" className="text-indigo-600 font-medium hover:underline">
                NiSV-Dokumentation Software
              </Link>{' '}
              · Cluster:{' '}
              <Link href="/nisv-dokumentation-kosmetikstudio" className="text-indigo-600 font-medium hover:underline">
                NiSV-Anforderungen im Studio
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufige Fragen</h2>
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      <section className="py-16 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">NiSV digital statt Ordnerchaos</h2>
          <p className="text-indigo-100 mb-8">
            Formulare, Protokolle und Behandlungsdokumentation in einer Kundenakte – mit Treatflow.
          </p>
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
