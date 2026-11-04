"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Play, Star } from "lucide-react";
import StudioCalendarBackdrop from "./StudioCalendarBackdrop";

const REGISTER_URL = "https://app.treatflow.io/auth/register?lang=de";
const DEMO_URL =
  "https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f";

const AUTO_STEP_MS = 3200;
const MAX_AUTO_STEP = 4;

/** Hero der Startseite: Botschaft links, Produktbild mit Link zur Live-Demo rechts, Kalender darunter. */
export default function HomeHero() {
  const [calendarStep, setCalendarStep] = useState(0);

  // Der Kalender füllt sich beim Laden Schritt für Schritt mit Buchungen
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCalendarStep(MAX_AUTO_STEP);
      return;
    }
    const timer = window.setInterval(() => {
      setCalendarStep((step) => (step >= MAX_AUTO_STEP ? step : step + 1));
    }, AUTO_STEP_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-4 pb-[21rem] pt-28 sm:px-6 sm:pb-[23rem] lg:px-8 lg:pb-[25rem] lg:pt-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_36rem_at_10%_-10%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(48rem_30rem_at_100%_10%,rgba(56,189,248,0.08),transparent_60%)]" />
        {/* Kalender als Boden unter dem Inhalt, nicht dahinter */}
        <div className="absolute inset-x-0 bottom-12 h-[360px] sm:h-[420px] lg:bottom-16 lg:h-[420px]">
          <StudioCalendarBackdrop step={calendarStep} locale="de-DE" newBookingLabel="Neue Buchung" />
          {/* Kalender läuft nach unten weich aus statt hart an der nächsten Fläche zu enden */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Für Kosmetikstudios, die wachsen wollen
          </div>
          <h1 className="mb-5 text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
            Schluss mit Terminchaos,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">Zettelwirtschaft</span>
            {" "}und <span className="whitespace-nowrap">No-Shows</span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-600 lg:text-xl">
            Termine, Kunden, Formulare, Behandlungsdokumentation und Kasse in einer übersichtlichen App.
            So findet sich dein Team sofort zurecht.
          </p>
          <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 whitespace-nowrap px-6 py-4 text-base font-semibold text-white shadow-[0_14px_34px_-14px_rgba(79,70,229,0.8)] sm:px-8 sm:text-lg transition-all duration-200 hover:brightness-110"
            >
              Jetzt 14 Tage kostenlos testen
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 px-6 py-4 text-base font-semibold sm:px-8 sm:text-lg text-gray-700 backdrop-blur transition-colors hover:border-indigo-300 hover:text-indigo-600"
            >
              Demo buchen
            </a>
          </div>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600 lg:justify-start">
            {["Ohne Kreditkarte", "In 2 Minuten startklar", "Kostenloser Datenumzug"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-3 lg:justify-start">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">4,6/5 auf Google</span>
            </div>
            <span className="hidden text-gray-400 sm:inline">|</span>
            <span className="text-gray-600">
              Bereits von <span className="font-semibold text-gray-900">500+ Studios</span> getestet
            </span>
          </div>
        </div>

        {/* Produktbild; ein Klick führt zur Seite, auf der man die Funktionen live testet */}
        <Link
          href="/funktionen-live-testen"
          className="group relative block w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)] aspect-[4/3] lg:aspect-[5/4]"
        >
          <Image
            src="/images/lifestyle/hero-startseite-en.png"
            alt="Treatflow auf Laptop und Tablet: Kalender, Kasse und Kundenakte in einem modernen Studio"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            quality={85}
            priority
          />
          <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-900/40 to-transparent" aria-hidden="true" />
          <span className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg backdrop-blur transition-all group-hover:bg-white group-hover:shadow-xl sm:bottom-6">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 text-white">
              <Play className="h-3 w-3 fill-current" />
            </span>
            Funktionen live testen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </section>
  );
}
