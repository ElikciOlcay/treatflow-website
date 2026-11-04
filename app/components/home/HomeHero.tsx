"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Bell, CalendarCheck, Check, CheckCircle, Clock, Star } from "lucide-react";
import StudioCalendarBackdrop from "./StudioCalendarBackdrop";

const REGISTER_URL = "https://app.treatflow.io/auth/register?lang=de";
const DEMO_URL =
  "https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f";

// Beispiel-Studio für die Demo, keine echten Preise
const TREATMENTS = [
  { name: "Gesichtsbehandlung", minutes: 60, price: "89 €" },
  { name: "Laser-Haarentfernung", minutes: 30, price: "79 €" },
  { name: "Wimpernlifting", minutes: 45, price: "59 €" },
];
const TIMES = ["09:30", "11:00", "14:15", "17:45"];
const AUTO_STEP_MS = 3200;
const MAX_AUTO_STEP = 4;

/** Hero der Startseite: Botschaft links, ausprobierbare Online-Buchung rechts, Kalender dahinter. */
export default function HomeHero() {
  const [calendarStep, setCalendarStep] = useState(0);
  const [touched, setTouched] = useState(false);
  const [bookedTime, setBookedTime] = useState<string | null>(null);

  // Solange niemand die Demo nutzt, füllt sich der Kalender von selbst ein Stück
  useEffect(() => {
    if (touched) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCalendarStep(MAX_AUTO_STEP);
      return;
    }
    const timer = window.setInterval(() => {
      setCalendarStep((step) => (step >= MAX_AUTO_STEP ? step : step + 1));
    }, AUTO_STEP_MS);
    return () => window.clearInterval(timer);
  }, [touched]);

  return (
    <section className="relative overflow-hidden bg-white px-4 pb-60 pt-28 sm:px-6 sm:pb-60 lg:px-8 lg:pb-72">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_36rem_at_10%_-10%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(48rem_30rem_at_100%_10%,rgba(56,189,248,0.08),transparent_60%)]" />
        {/* Kalender als Boden unter dem Inhalt, nicht dahinter */}
        <div className="absolute inset-x-0 bottom-0 h-[360px] sm:h-[420px] lg:h-[460px]">
          <StudioCalendarBackdrop step={calendarStep} locale="de-DE" newBookingLabel="Neue Buchung" bookedTime={bookedTime} />
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

        <BookingDemo
          onBooked={(time) => {
            setTouched(true);
            setBookedTime(time);
            setCalendarStep((step) => Math.min(step + 1, 6));
          }}
          onInteract={() => setTouched(true)}
        />
      </div>
    </section>
  );
}

type BookingDemoProps = { onBooked: (time: string) => void; onInteract: () => void };

/** Mini-Buchungsseite eines Beispiel-Studios: Behandlung wählen, Zeit wählen, buchen. */
function BookingDemo({ onBooked, onInteract }: BookingDemoProps) {
  const [treatment, setTreatment] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  const reset = () => {
    setTreatment(null);
    setTime(null);
    setBooked(false);
  };

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-200/50 via-white/0 to-sky-200/50 blur-2xl" aria-hidden="true" />
      <div className="rounded-2xl border border-gray-200/80 bg-white/95 p-4 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)] backdrop-blur min-[380px]:p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-indigo-400 text-sm font-bold text-white">
              A
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">Studio Aurora</p>
              <p className="truncate text-xs text-gray-500">Online-Buchung · Beispiel</p>
            </div>
          </div>
          <span className="hidden flex-shrink-0 whitespace-nowrap rounded-full bg-emerald-50 min-[360px]:inline-block px-2.5 py-1 text-[11px] font-semibold text-emerald-700">Probier es aus</span>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)]">
        <div
          className={`[grid-area:1/1] flex flex-col justify-center py-4 text-center ${booked ? "" : "invisible"}`}
          role="status"
          aria-live="polite"
          aria-hidden={!booked}
        >
          {booked && treatment !== null && time ? (
          <>
            <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_24px_-10px_rgba(16,185,129,0.9)]">
              <Check className="h-6 w-6" strokeWidth={3} />
            </span>
            <p className="text-lg font-semibold text-gray-900">Termin gebucht</p>
            <p className="mt-1 text-sm text-gray-600">
              {TREATMENTS[treatment].name} · heute {time} Uhr
            </p>
            <ul className="mx-auto mt-5 max-w-xs space-y-2 text-left text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CalendarCheck className="h-4 w-4 flex-shrink-0 text-indigo-500" />
                Steht sofort im Kalender des Studios
              </li>
              <li className="flex items-center gap-2">
                <Bell className="h-4 w-4 flex-shrink-0 text-indigo-500" />
                Erinnerung per E-Mail oder WhatsApp
              </li>
            </ul>
            <button
              type="button"
              onClick={reset}
              className="mt-5 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Noch einen Termin buchen
            </button>
          </>
          ) : null}
        </div>
        <div className={`[grid-area:1/1] ${booked ? "invisible" : ""}`} aria-hidden={booked} inert={booked}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">1. Behandlung</p>
            <div className="space-y-2">
              {TREATMENTS.map((item, index) => {
                const active = treatment === index;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      onInteract();
                      setTreatment(index);
                    }}
                    aria-pressed={active}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm transition-all ${
                      active
                        ? "border-indigo-400 bg-indigo-50 shadow-[0_0_0_1px_rgba(99,102,241,0.35)]"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <span className="min-w-0 font-medium text-gray-900">{item.name}</span>
                    <span className="flex flex-shrink-0 items-center gap-2.5 whitespace-nowrap text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {item.minutes} Min
                      </span>
                      <span className="font-semibold text-gray-700">{item.price}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-gray-500">2. Uhrzeit heute</p>
            <div className="grid grid-cols-4 gap-2">
              {TIMES.map((slot) => {
                const active = time === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={treatment === null}
                    onClick={() => {
                      onInteract();
                      setTime(slot);
                    }}
                    aria-pressed={active}
                    className={`rounded-lg border py-2 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-40 ${
                      active
                        ? "border-indigo-500 bg-indigo-600 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              disabled={treatment === null || time === null}
              onClick={() => {
                if (!time) return;
                setBooked(true);
                onBooked(time);
              }}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
            >
              Termin buchen
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-[11px] text-gray-400">So sieht deine Buchungsseite für Kundinnen aus.</p>
        </div>
        </div>
      </div>
    </div>
  );
}
