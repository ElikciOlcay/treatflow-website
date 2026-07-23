import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  RefreshCw,
  Shield,
  Sparkles,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import ContentHubCard from '../components/content/ContentHubCard';

export const metadata: Metadata = {
  title: 'Studio-Guides: Kosmetikstudio digitalisieren & organisieren',
  description:
    'Treatflow Guides für Kosmetikstudios: digitalisieren, NiSV verstehen, Software-Wechsel & Kundenimport. Praxisnahe Handbücher statt Marketing-Floskeln.',
  keywords: [
    'kosmetikstudio digitalisieren',
    'kosmetikstudio software guide',
    'nisv guide kosmetikstudio',
    'software wechsel kosmetikstudio',
    'studio organisation beauty',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/guides',
  },
  openGraph: {
    title: 'Studio-Guides für Kosmetikstudios | Treatflow',
    description:
      'Praxisnahe Handbücher: Studio digitalisieren, NiSV, Wechsel & Import. Das Wissenszentrum für Beauty-Studios.',
    url: 'https://www.treatflow.io/guides',
  },
};

const guides = [
  {
    href: '/guides/kosmetikstudio-digitalisieren',
    title: 'Kosmetikstudio digitalisieren',
    description:
      'Der komplette Fahrplan: Termine, Kundenkartei, Formulare, Dokumentation und Kasse – ohne Chaos und ohne Tool-Wildwuchs.',
    badge: 'Pillar',
    icon: Sparkles,
  },
  {
    href: '/guides/nisv',
    title: 'NiSV-Guide für Studios',
    description:
      'Was du dokumentieren musst, wie Beratung und Einwilligung zusammenspielen und wie du digital rechtssicher bleibst.',
    badge: 'Pillar',
    icon: Shield,
  },
  {
    href: '/guides/software-wechsel-kundenimport',
    title: 'Software-Wechsel & Kundenimport',
    description:
      'So gelingt der Umstieg: Kundendaten importieren, Buchungslink aktivieren, Formulare übernehmen – mit Checkliste.',
    badge: 'Umstieg',
    icon: RefreshCw,
  },
];

const related = [
  { href: '/vorlagen', label: 'Vorlagen-Bibliothek' },
  { href: '/kosmetikstudio-software', label: 'Kosmetikstudio Software' },
  { href: '/blog', label: 'Blog' },
];

export default function GuidesHubPage() {
  const breadcrumbItems = [{ label: 'Guides' }];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Script
        id="guides-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      <section className="pb-16 bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Treatflow Studio-Guides
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Das Wissenszentrum für dein Kosmetikstudio
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Klare Handbücher zu Digitalisierung, NiSV und Software-Wechsel – geschrieben für Studio-Alltag,
              nicht für Folienpräsentationen. Treatflow als Betriebssystem und Wissenszentrale.
            </p>
            <Link
              href="/vorlagen"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Zu den kostenlosen Vorlagen
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <ContentHubCard key={guide.href} {...guide} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
              <ClipboardCheck className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Weiterführende Produktseiten</h2>
              <p className="text-gray-600">
                Guides erklären das Warum und Wie. Die Feature-Seiten zeigen die Umsetzung in Treatflow.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
