import Link from "next/link";
import { Bell, CalendarDays, Camera, FileSignature, MessageCircleHeart, Receipt, type LucideIcon } from "lucide-react";

type Step = {
  time: string;
  module: string;
  title: string;
  text: string;
  meta: string;
  href: string;
  Icon: LucideIcon;
  tone: string;
};

const STEPS: Step[] = [
  {
    time: "Mo · 21:14",
    module: "Online-Buchung",
    title: "Lena bucht abends vom Sofa aus.",
    text: "Ohne Anruf und ohne Provision pro Buchung. Der Termin steht sofort im Kalender.",
    meta: "Gesichtsbehandlung · Do 10:45",
    href: "/online-buchungen",
    Icon: CalendarDays,
    tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
  },
  {
    time: "Mi · 10:45",
    module: "Erinnerung",
    title: "Die Erinnerung geht automatisch raus.",
    text: "Einen Tag vorher per E-Mail oder WhatsApp. Weniger vergessene Termine, ohne dass jemand daran denken muss.",
    meta: "Zugestellt · bestätigt",
    href: "/nachrichtenautomatisierung",
    Icon: Bell,
    tone: "bg-sky-50 text-sky-600 ring-sky-100",
  },
  {
    time: "Do · 10:40",
    module: "Formulare",
    title: "Anamnese am Tablet, unterschrieben.",
    text: "Das Formular landet direkt in Lenas Kundenakte. Kein Papier, das abgetippt werden muss.",
    meta: "Anamnesebogen · digital signiert",
    href: "/formulare",
    Icon: FileSignature,
    tone: "bg-violet-50 text-violet-600 ring-violet-100",
  },
  {
    time: "Do · 11:40",
    module: "Dokumentation",
    title: "Behandlung dokumentiert, mit Fotos.",
    text: "Parameter, Produkte und Vorher-nachher-Bilder bleiben in der Behandlungshistorie.",
    meta: "3 Fotos · Parameter gespeichert",
    href: "/behandlungsdokumentation",
    Icon: Camera,
    tone: "bg-rose-50 text-rose-600 ring-rose-100",
  },
  {
    time: "Do · 11:45",
    module: "Kasse",
    title: "Kassiert direkt aus dem Termin.",
    text: "Bar, Karte oder Gutschein. Der Beleg ist fiskalkonform, der Umsatz sofort in der Übersicht.",
    meta: "Beleg mit Signatur-QR",
    href: "/kassensystem-kosmetikstudio",
    Icon: Receipt,
    tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  },
  {
    time: "Fr · 10:00",
    module: "Nachsorge",
    title: "Lena bekommt ihre Pflegetipps.",
    text: "Die Nachsorge-Nachricht verschickt Treatflow von selbst. So bleibt dein Studio in Erinnerung.",
    meta: "Automatisch versendet",
    href: "/nachrichtenautomatisierung",
    Icon: MessageCircleHeart,
    tone: "bg-amber-50 text-amber-600 ring-amber-100",
  },
];

/** Ein Termin von der Buchung bis zur Nachsorge, als Zeitleiste erzählt. */
export default function StudioDayTimeline() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="studio-day-title">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">Ein Termin, ein System</p>
          <h2 id="studio-day-title" className="text-3xl font-bold leading-tight tracking-tight text-gray-900 lg:text-4xl">
            Von der Buchung bis zur Nachsorge – ohne einmal die App zu wechseln.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            So läuft ein Termin mit Treatflow. Jeder Schritt baut auf dem vorherigen auf, nichts muss doppelt eingetragen werden.
          </p>
        </div>

        <ol className="relative space-y-4 before:absolute before:bottom-6 before:left-[1.375rem] before:top-6 before:w-px before:bg-gradient-to-b before:from-indigo-200 before:via-gray-200 before:to-amber-200 sm:before:left-[1.625rem]">
          {STEPS.map((step) => (
            <li key={step.time} className="tf-reveal relative flex gap-4 sm:gap-5">
              <span
                className={`relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ring-4 ring-gray-50 sm:h-[3.25rem] sm:w-[3.25rem] ${step.tone}`}
              >
                <step.Icon className="h-5 w-5" />
              </span>
              <Link
                href={step.href}
                className="group block flex-1 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-lg"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono font-semibold text-gray-900">{step.time}</span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 font-semibold text-gray-600">{step.module}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{step.text}</p>
                <p className="mt-3 font-mono text-xs text-gray-400">{step.meta}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
