import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, CheckCircle, Clock } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Software Kosmetikinstitut: Die passende Lösung',
  description:
    'Software für Kosmetikinstitute im Vergleich: Welche Funktionen wirklich zählen, welche Fehler du vermeiden solltest und wie du schneller umstellst.',
  keywords: [
    'software kosmetikinstitut',
    'kosmetikinstitut software',
    'beauty institut software',
    'kosmetik institut digitalisieren',
    'kundenkartei kosmetik',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/blog/software-kosmetikinstitut',
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
              { label: 'Blog', href: '/blog' },
              { label: 'Software Kosmetikinstitut: Die passende Lösung' },
          ])) }}
      />
      <Breadcrumbs items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Software Kosmetikinstitut: Die passende Lösung' },
      ]} />
      <article className="pt-6 pb-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: 'Software Kosmetikinstitut: Digitalisierung im Institut',
              author: { '@type': 'Organization', name: 'Treatflow' },
              publisher: {
                '@type': 'Organization',
                name: 'Treatflow',
                logo: { '@type': 'ImageObject', url: 'https://www.treatflow.io/images/logos/treatflow-logo.svg' },
              },
              url: 'https://www.treatflow.io/blog/software-kosmetikinstitut',
              datePublished: '2026-03-24',
              dateModified: '2026-03-24',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://www.treatflow.io/blog/software-kosmetikinstitut',
              },
            }),
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">Digitalisierung</span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              24. März 2026
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />7 Min. Lesezeit
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Software Kosmetikinstitut: So findest du die passende Lösung
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Nicht jede Software passt zu einem Kosmetikinstitut. Je größer dein Team und je mehr Behandlungen du anbietest,
            desto wichtiger werden klare Prozesse und ein System, das wirklich mitwächst.
          </p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2>Typische Anforderungen in einem Kosmetikinstitut</h2>
            <p>
              In Instituten laufen viele Prozesse parallel: Terminplanung für mehrere Mitarbeitende, wiederkehrende Behandlungen,
              Kundenhistorie, Dokumentation und Kommunikation. Das funktioniert nur sauber mit einer zentralen Plattform.
            </p>

            <h2>Checkliste: Welche Software passt zu dir?</h2>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-6">
              <ul className="space-y-3">
                {[
                  'Mehrere Kalender in einer Teamansicht',
                  'Kundenkartei mit Verlauf je Behandlung',
                  'Digitale Formulare und Einwilligungen',
                  'Automatische Erinnerungen und Follow-ups',
                  'DSGVO-konforme Datenspeicherung',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2>Die häufigsten Fehler bei der Umstellung</h2>
            <p>
              Ein häufiger Fehler ist, zu viele Tools parallel zu nutzen: ein Kalender-Tool, ein Formular-Tool, ein CRM-Tool.
              Das führt zu Medienbrüchen und kostet Zeit. Besser ist eine Lösung, die alle Kernprozesse verbindet.
            </p>

            <h2>Fazit</h2>
            <p>
              Gute Software für Kosmetikinstitute schafft Struktur im Team und macht Kundenerlebnisse konsistent.
              Genau das ist die Grundlage für weniger Stress und planbares Wachstum.
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Direkt zur passenden Seite</h3>
            <div className="flex flex-wrap gap-4 text-sm mb-6">
              <Link href="/schoenheitssalon-software" className="text-indigo-700 hover:text-indigo-800 underline underline-offset-4">
                Schönheitssalon Software
              </Link>
              <Link href="/kundenkartei-software" className="text-indigo-700 hover:text-indigo-800 underline underline-offset-4">
                Kundenkartei Software
              </Link>
              <Link href="/behandlungsdokumentation" className="text-indigo-700 hover:text-indigo-800 underline underline-offset-4">
                Behandlungsdokumentation
              </Link>
            </div>
            <a
              href="https://app.treatflow.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              14 Tage kostenlos testen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
