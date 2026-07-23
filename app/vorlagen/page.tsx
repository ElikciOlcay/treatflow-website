import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowRight,
  ClipboardList,
  FileText,
  Shield,
  Sparkles,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import ContentHubCard from '../components/content/ContentHubCard';

export const metadata: Metadata = {
  title: 'Vorlagen für Kosmetikstudios: PDF kostenlos',
  description:
    'Kostenlose Vorlagen für Kosmetikstudios: Hygieneplan, Anamnesebogen, NiSV-Beratungsprotokoll und Laser-Einverständniserklärung. Sofort nutzbar – digital mit Treatflow besser.',
  keywords: [
    'vorlagen kosmetikstudio',
    'anamnesebogen vorlage',
    'hygieneplan kosmetikstudio pdf',
    'nisv beratungsprotokoll vorlage',
    'einverständniserklärung laser haarentfernung vorlage',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/vorlagen',
  },
  openGraph: {
    title: 'Vorlagen-Bibliothek für Kosmetikstudios | Treatflow',
    description:
      'Hygieneplan, Anamnese, NiSV-Beratungsprotokoll und Laser-Einwilligung als Vorlagen – kostenlos.',
    url: 'https://www.treatflow.io/vorlagen',
  },
};

const templates = [
  {
    href: '/hygieneplan-kosmetikstudio-pdf',
    title: 'Hygieneplan Kosmetikstudio PDF',
    description:
      'Muster-Hygieneplan für Studios, Nagel- und Lash-Betriebe. Häufig gesucht, sofort einsetzbar.',
    badge: 'Top-Download',
    icon: Sparkles,
  },
  {
    href: '/anamnesebogen-kosmetik-vorlage-pdf',
    title: 'Anamnesebogen Kosmetik PDF',
    description:
      'Anamnese inkl. Einwilligung als PDF-Vorlage – oder direkt digital vor dem Termin ausfüllen lassen.',
    badge: 'PDF',
    icon: ClipboardList,
  },
  {
    href: '/vorlagen/nisv-beratungsprotokoll',
    title: 'NiSV-Beratungsprotokoll Vorlage',
    description:
      'Strukturierte Beratungsdokumentation für NiSV-relevante Anwendungen – als PDF und digitaler Workflow.',
    badge: 'Neu',
    icon: Shield,
  },
  {
    href: '/vorlagen/einverstaendniserklaerung-laser',
    title: 'Einverständnis Laser-Haarentfernung',
    description:
      'Vorlage für Aufklärung und Einwilligung bei Laser-/IPL-Haarentfernung – inkl. Checkliste.',
    badge: 'Neu',
    icon: FileText,
  },
];

export default function VorlagenHubPage() {
  const breadcrumbItems = [{ label: 'Vorlagen' }];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Script
        id="vorlagen-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      <section className="pb-16 bg-gradient-to-br from-emerald-50 via-white to-indigo-50">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4 mr-2" />
              Kostenlose Studio-Vorlagen
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Vorlagen, die Studios wirklich brauchen
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              PDF zum Sofortstart – und der klare Weg, dieselben Abläufe digital, DSGVO-konform und
              wiederfindbar in Treatflow zu führen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/guides"
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
              >
                Zu den Studio-Guides
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((item) => (
              <ContentHubCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vorlagen sind der Einstieg – digital ist der Standard
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Mit Treatflow sendest du Formulare vorab, holst Unterschriften digital ein und speicherst
            alles direkt in der Kundenakte.
          </p>
          <a
            href="https://app.treatflow.io/auth/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50"
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
