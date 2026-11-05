"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Bell, CalendarCheck, Check, Clock } from "lucide-react";
import { tryFeaturesDe } from "@/app/site/content/try-features/de";
import type { BookingPanelStrings } from "@/app/site/content/try-features/types";

// Beispiel-Studio für die Demo, keine echten Preise (Texte je Sprache: app/site/content/try-features/<lang>.ts)
export const TREATMENTS = tryFeaturesDe.demos.bookingPanel.treatments;

// Verfügbarkeit wie auf der echten Buchungsseite: Punkte zeigen, wie viel noch frei ist
type Level = "high" | "medium" | "low" | "full" | "closed";
const TIMES_BY_LEVEL: Record<Level, string[]> = {
  high: ["09:30", "11:00", "14:15", "17:45"],
  medium: ["11:00", "16:30"],
  low: ["18:15"],
  full: [],
  closed: [],
};
// Feste Verteilung Mo–Sa der beiden Wochen, sonntags geschlossen
const WEEK_PATTERN: Level[][] = [
  ["medium", "high", "low", "full", "high", "medium", "closed"],
  ["high", "medium", "high", "high", "low", "full", "closed"],
];
function legend(c: BookingPanelStrings): { label: string; dots: number; color: string }[] {
  return [
    { label: c.legend.high, dots: 3, color: "bg-emerald-400" },
    { label: c.legend.medium, dots: 2, color: "bg-amber-400" },
    { label: c.legend.low, dots: 1, color: "bg-red-400" },
    { label: c.legend.full, dots: 0, color: "bg-gray-300" },
  ];
}

type DemoDay = { key: string; weekday: string; dayOfMonth: number; label: string; level: Level; past: boolean };

function buildDays(today: Date, c: BookingPanelStrings): DemoDay[] {
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7)); // Montag dieser Woche
  const weekday = new Intl.DateTimeFormat(c.dateLocale, { weekday: "short" });
  const label = new Intl.DateTimeFormat(c.dateLocale, { weekday: "short", day: "numeric", month: "short" });
  const todayKey = today.toDateString();
  return Array.from({ length: 14 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const isToday = date.toDateString() === todayKey;
    return {
      key: date.toDateString(),
      weekday: weekday.format(date).replace(".", ""),
      dayOfMonth: date.getDate(),
      label: isToday ? c.today : label.format(date),
      level: WEEK_PATTERN[Math.floor(index / 7)][index % 7],
      past: date < start || (date.getTime() < new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()),
    };
  });
}

function Dots({ level, selected }: { level: Level; selected: boolean }) {
  if (level === "closed") return <span className="h-1 w-4" aria-hidden="true" />;
  const filled = level === "high" ? 3 : level === "medium" ? 2 : level === "low" ? 1 : 0;
  const color = level === "high" ? "bg-emerald-400" : level === "medium" ? "bg-amber-400" : level === "low" ? "bg-red-400" : "bg-gray-300";
  return (
    <span className="flex gap-px" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-1 w-1 rounded-full ${selected ? (i < filled ? "bg-white/90" : "bg-white/40") : level === "full" ? "bg-gray-300" : i < filled ? color : "bg-gray-200"}`}
        />
      ))}
    </span>
  );
}

// Vorausgefüllte Beispieldaten, damit niemand eigene Daten eintippen muss
const DEMO_CUSTOMER = tryFeaturesDe.demos.bookingPanel.customer;

type Step = "select" | "details" | "booked";

export type DemoCustomer = { name: string; email: string; phone: string };

type BookingPanelProps = {
  onBooked: (time: string, treatment: string, customer: DemoCustomer, dayLabel: string) => void;
  onInteract: () => void;
  onContinue: () => void;
  /** Texte/Beispieldaten der Sprache (Default: Deutsch) */
  content?: BookingPanelStrings;
};

const inputClass =
  "mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400/20";

/** Mini-Buchungsseite eines Beispiel-Studios: Behandlung, Tag und Zeit wählen, Daten prüfen, buchen. */
export default function BookingPanel({ onBooked, onInteract, onContinue, content: c = tryFeaturesDe.demos.bookingPanel }: BookingPanelProps) {
  const TREATMENTS = c.treatments;
  const DEMO_CUSTOMER = c.customer;
  const [step, setStep] = useState<Step>("select");
  const [treatment, setTreatment] = useState<number | null>(null);
  const [days, setDays] = useState<DemoDay[] | null>(null);
  const [day, setDay] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [customer, setCustomer] = useState<DemoCustomer>(DEMO_CUSTOMER);

  // Erst im Browser berechnen: die Seite wird vorgerendert, das Datum wäre sonst veraltet
  useEffect(() => setDays(buildDays(new Date(), c)), [c]);

  const selectedDay = day !== null && days ? days[day] : null;
  const dayLabel = selectedDay?.label ?? c.today;
  const slots = selectedDay ? TIMES_BY_LEVEL[selectedDay.level] : [];

  const reset = () => {
    setTreatment(null);
    setDay(null);
    setTime(null);
    setCustomer(DEMO_CUSTOMER);
    setStep("select");
  };

  if (step === "booked" && treatment !== null && time) {
    return (
      <div className="flex flex-col justify-center py-4 text-center" role="status" aria-live="polite" data-demo-booked>
        <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_24px_-10px_rgba(16,185,129,0.9)]">
          <Check className="h-6 w-6" strokeWidth={3} />
        </span>
        <p className="text-lg font-semibold text-gray-900">{c.bookedTitle}</p>
        <p className="mt-1 text-sm text-gray-600">
          {TREATMENTS[treatment].name} · {dayLabel}, {time}{c.timeSuffix}
        </p>
        <ul className="mx-auto mt-5 max-w-xs space-y-2 text-left text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <CalendarCheck className="h-4 w-4 flex-shrink-0 text-indigo-500" />
            {c.bookedInCalendar}
          </li>
          <li className="flex items-center gap-2">
            <Bell className="h-4 w-4 flex-shrink-0 text-indigo-500" />
            <span className="min-w-0">
              {c.bookedConfirmationTo}<span className="font-medium text-gray-900">{customer.email.trim() || DEMO_CUSTOMER.email}</span>
            </span>
          </li>
        </ul>
        <button
          type="button"
          onClick={onContinue}
          className="mx-auto mt-5 flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
        >
          {c.continueLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
        <button type="button" onClick={reset} className="mt-3 text-sm font-semibold text-indigo-600 hover:text-indigo-800">
          {c.bookAnother}
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
          onBooked(time, TREATMENTS[treatment].name, {
            name: customer.name.trim() || DEMO_CUSTOMER.name,
            email: customer.email.trim() || DEMO_CUSTOMER.email,
            phone: customer.phone.trim() || DEMO_CUSTOMER.phone,
          }, dayLabel);
        }}
      >
        <div className="mb-4 flex items-center justify-between gap-3 rounded-xl bg-indigo-50 px-3.5 py-2.5 text-sm">
          <span className="min-w-0 truncate text-gray-900">
            <span className="font-medium">{TREATMENTS[treatment].name}</span>
            <span className="text-gray-500"> · {dayLabel}, {time}{c.timeSuffix}</span>
          </span>
          <button
            type="button"
            onClick={() => setStep("select")}
            className="flex flex-shrink-0 items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {c.change}
          </button>
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">{c.stepDetails}</p>
        <div className="space-y-2.5">
          <label className="block text-xs font-semibold text-gray-700">
            {c.nameLabel}
            <input
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              autoComplete="off"
              className={inputClass}
            />
          </label>
          <div className="grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2">
            <label className="block text-xs font-semibold text-gray-700">
              {c.emailLabel}
              <input
                type="email"
                value={customer.email}
                onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                autoComplete="off"
                className={inputClass}
              />
            </label>
            <label className="block text-xs font-semibold text-gray-700">
              {c.phoneLabel}
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
          {c.submit}
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-3 text-center text-[11px] text-gray-400">{c.disclaimer}</p>
      </form>
    );
  }

  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">{c.stepTreatment}</p>
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
                  {item.minutes}{` ${c.minutesUnit}`}
                </span>
                <span className="font-semibold text-gray-700">{item.price}</span>
              </span>
            </button>
          );
        })}
      </div>

      <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-gray-500">{c.stepDay}</p>
      <div className={`grid grid-cols-7 gap-1 ${treatment === null ? "opacity-40" : ""}`}>
        {(days ?? []).slice(0, 7).map((d) => (
          <span key={`label-${d.key}`} className="pb-0.5 text-center text-[10px] font-semibold uppercase text-gray-400">
            {d.weekday}
          </span>
        ))}
        {(days ?? []).map((d, index) => {
          const disabled = treatment === null || d.past || d.level === "closed" || d.level === "full";
          const active = day === index;
          return (
            <button
              key={d.key}
              type="button"
              disabled={disabled}
              onClick={() => {
                onInteract();
                setDay(index);
                setTime(null);
              }}
              aria-pressed={active}
              aria-label={`${d.label}${d.level === "full" ? c.fullAria : d.level === "closed" ? c.closedAria : ""}`}
              className={`flex h-11 flex-col items-center justify-center gap-0.5 rounded-lg text-sm transition-all ${
                active
                  ? "bg-indigo-600 font-semibold text-white"
                  : d.past || d.level === "closed"
                    ? "cursor-not-allowed text-gray-300"
                    : d.level === "full"
                      ? "cursor-not-allowed text-gray-400 line-through decoration-gray-300"
                      : "text-gray-900 hover:bg-indigo-50 disabled:cursor-not-allowed"
              }`}
            >
              {d.dayOfMonth}
              {!d.past && <Dots level={d.level} selected={active} />}
            </button>
          );
        })}
        {!days && <span className="col-span-7 h-24" aria-hidden="true" />}
      </div>
      <ul className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[10px] text-gray-500">
          {legend(c).map((item) => (
            <li key={item.label} className="flex items-center gap-1">
              <span className="flex gap-px" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span key={i} className={`h-1 w-1 rounded-full ${item.dots === 0 ? item.color : i < item.dots ? item.color : "bg-gray-200"}`} />
                ))}
              </span>
              {item.label}
            </li>
          ))}
        </ul>

      <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-gray-500">
        {c.stepTime}{selectedDay ? ` · ${selectedDay.label}` : ""}
      </p>
      <div className="grid grid-cols-4 gap-2">
        {(selectedDay ? slots : TIMES_BY_LEVEL.high).map((slot) => {
          const active = time === slot;
          return (
            <button
              key={slot}
              type="button"
              disabled={!selectedDay}
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
      {selectedDay && slots.length < 4 && (
        <p className="mt-2 text-[11px] text-gray-500">{c.fewLeft}</p>
      )}

      <button
        type="button"
        disabled={treatment === null || day === null || time === null}
        onClick={() => setStep("details")}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
      >
        {c.next}
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 text-center text-[11px] text-gray-400">{c.footnote}</p>
    </div>
  );
}
