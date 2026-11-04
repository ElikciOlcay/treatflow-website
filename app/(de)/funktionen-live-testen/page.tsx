import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, FilePenLine, Mic, PlayCircle } from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import LiveDemos from "@/app/components/live-demo/LiveDemos";
import { FeaturePageCta } from "@/app/components/FeatureSections";
import { generateBreadcrumbSchema } from "@/app/components/Breadcrumbs";
import { DEMO_FORMS } from "@/lib/demoForms";

const PAGE_URL = "https://www.treatflow.io/funktionen-live-testen";

export const metadata: Metadata = {
  title: "Live testen: Online-Buchung, KI-Doku & Formulare",
  description:
    "Probier Treatflow direkt im Browser aus: Termin online buchen, Behandlung per KI-Diktat dokumentieren und Anamnese-Formulare unterschreiben. Ohne Anmeldung.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Entdecke die Funktionen von Treatflow live",
    description: "Online-Buchung, KI-Diktat für die Behandlungsdoku und digitale Formulare direkt im Browser testen, ohne Anmeldung.",
    url: PAGE_URL,
  },
};

const JUMP_LINKS = [
  { href: "#termin-buchen", label: "Termin buchen", Icon: CalendarDays },
  { href: "#behandlung-dokumentieren", label: "Behandlung dokumentieren", Icon: Mic },
  { href: "#formulare-ausfuellen", label: "Formulare ausfüllen", Icon: FilePenLine },
];

export default function FunktionenLiveTestenPage() {
  const featuredForms = DEMO_FORMS.filter((form) => form.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([{ label: "Funktionen", href: "/funktionen" }, { label: "Live testen" }])
          ),
        }}
      />
      <Navigation />

      <section className="relative overflow-hidden bg-white px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(56rem_32rem_at_50%_-10%,rgba(99,102,241,0.10),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
            <PlayCircle className="h-4 w-4" />
            Live-Demo · ohne Anmeldung
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
            Entdecke unsere Funktionen{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">live</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Probier Treatflow direkt hier im Browser aus. Alles läuft mit Beispieldaten des Studios „Aurora“, du brauchst kein Konto.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {JUMP_LINKS.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-indigo-300 hover:text-indigo-600"
              >
                <Icon className="h-4 w-4 text-indigo-500" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <LiveDemos />

      <section id="formulare-ausfuellen" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-indigo-600">
              <FilePenLine className="h-4 w-4" />
              Digitale Formulare
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">Anamnese ausfüllen und unterschreiben</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              So füllen Kundinnen deine Formulare vorab am Handy oder im Studio am Tablet aus, mit Unterschrift per Finger.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredForms.map((form) => (
              <Link
                key={form.slug}
                href={`/formulare-testen/${form.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg"
              >
                <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${form.iconBg} ${form.iconColor}`}>
                  <FilePenLine className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">{form.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{form.description}</p>
                <p className="mt-4 text-xs text-gray-400">
                  {form.pageCount} Seiten · {form.fieldCount} Felder
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                  Formular ausfüllen
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/formulare-testen" className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-800">
              Alle Formular-Vorlagen ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FeaturePageCta
        title="Gefällt dir, was du gesehen hast?"
        description="Teste Treatflow 14 Tage kostenlos mit deinem eigenen Studio. Ohne Kreditkarte, jederzeit kündbar."
        secondaryLabel="Preise ansehen"
        secondaryHref="/preise"
      />

      <Footer />
    </div>
  );
}
