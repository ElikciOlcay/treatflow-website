"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Bell, CalendarCheck, Check, Clock } from "lucide-react";

// Beispiel-Studio für die Demo, keine echten Preise
const TREATMENTS = [
  { name: "Gesichtsbehandlung", minutes: 60, price: "89 €" },
  { name: "Laser-Haarentfernung", minutes: 30, price: "79 €" },
  { name: "Wimpernlifting", minutes: 45, price: "59 €" },
];
const TIMES = ["09:30", "11:00", "14:15", "17:45"];

// Vorausgefüllte Beispieldaten, damit niemand eigene Daten eintippen muss
const DEMO_CUSTOMER = { name: "Lena Muster", email: "lena@beispiel.at", phone: "+43 660 1234567" };

type Step = "select" | "details" | "booked";

type BookingPanelProps = {
  onBooked: (time: string, treatment: string) => void;
  onInteract: () => void;
  onContinue: () => void;
};

const inputClass =
  "mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400/20";

/** Mini-Buchungsseite eines Beispiel-Studios: Behandlung und Zeit wählen, Daten prüfen, buchen. */
export default function BookingPanel({ onBooked, onInteract, onContinue }: BookingPanelProps) {
  const [step, setStep] = useState<Step>("select");
  const [treatment, setTreatment] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [customer, setCustomer] = useState(DEMO_CUSTOMER);

  const reset = () => {
    setTreatment(null);
    setTime(null);
    setCustomer(DEMO_CUSTOMER);
    setStep("select");
  };

  if (step === "booked" && treatment !== null && time) {
    return (
      <div className="flex flex-col justify-center py-4 text-center" role="status" aria-live="polite">
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
            <span className="min-w-0">
              Bestätigung an <span className="font-medium text-gray-900">{customer.email.trim() || DEMO_CUSTOMER.email}</span>
            </span>
          </li>
        </ul>
        <button
          type="button"
          onClick={onContinue}
          className="mx-auto mt-5 flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
        >
          Weiter: Behandlung dokumentieren
          <ArrowRight className="h-4 w-4" />
        </button>
        <button type="button" onClick={reset} className="mt-3 text-sm font-semibold text-indigo-600 hover:text-indigo-800">
          Noch einen Termin buchen
        </button>
      </div>
    );
  }

  if (step === "details" && treatment !== null && time) {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onInteract();
          setStep("booked");
          onBooked(time, TREATMENTS[treatment].name);
        }}
      >
        <div className="mb-4 flex items-center justify-between gap-3 rounded-xl bg-indigo-50 px-3.5 py-2.5 text-sm">
          <span className="min-w-0 truncate text-gray-900">
            <span className="font-medium">{TREATMENTS[treatment].name}</span>
            <span className="text-gray-500"> · heute {time} Uhr</span>
          </span>
          <button
            type="button"
            onClick={() => setStep("select")}
            className="flex flex-shrink-0 items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Ändern
          </button>
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">3. Deine Daten</p>
        <div className="space-y-2.5">
          <label className="block text-xs font-semibold text-gray-700">
            Name
            <input
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              autoComplete="off"
              className={inputClass}
            />
          </label>
          <div className="grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2">
            <label className="block text-xs font-semibold text-gray-700">
              E-Mail
              <input
                type="email"
                value={customer.email}
                onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                autoComplete="off"
                className={inputClass}
              />
            </label>
            <label className="block text-xs font-semibold text-gray-700">
              Telefon
              <input
                type="tel"
                value={customer.phone}
                onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                autoComplete="off"
                className={inputClass}
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800"
        >
          Termin buchen
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-3 text-center text-[11px] text-gray-400">Beispieldaten, es wird nichts gesendet oder gespeichert.</p>
      </form>
    );
  }

  return (
    <div>
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
                active ? "border-indigo-500 bg-indigo-600 text-white" : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300"
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
        onClick={() => setStep("details")}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
      >
        Weiter
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 text-center text-[11px] text-gray-400">So sieht deine Buchungsseite für Kundinnen aus.</p>
    </div>
  );
}
