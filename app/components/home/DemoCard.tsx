"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Mic, type LucideIcon } from "lucide-react";
import BookingPanel from "./BookingPanel";
import DictationPanel from "./DictationPanel";

type TabKey = "booking" | "dictation";

const TABS: { key: TabKey; label: string; shortLabel: string; Icon: LucideIcon }[] = [
  { key: "booking", label: "Termin buchen", shortLabel: "Termin", Icon: CalendarDays },
  { key: "dictation", label: "Dokumentieren", shortLabel: "Dokumentieren", Icon: Mic },
];

const SUBTITLE: Record<TabKey, string> = {
  booking: "Online-Buchung · Beispiel",
  dictation: "Behandlungsdoku · Beispiel",
};

const tabClass = (active: boolean) =>
  `flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-2 text-xs font-semibold transition-all sm:text-sm ${
    active ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-800"
  }`;

type DemoCardProps = {
  onBooked: (time: string) => void;
  onInteract: () => void;
};

/** Ausprobier-Karte im Hero: Termin buchen, Behandlung per Sprache dokumentieren, Link zu den Demo-Formularen. */
export default function DemoCard({ onBooked, onInteract }: DemoCardProps) {
  const [tab, setTab] = useState<TabKey>("booking");
  const [booking, setBooking] = useState<{ time: string; treatment: string } | null>(null);

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
              <p className="truncate text-xs text-gray-500">{SUBTITLE[tab]}</p>
            </div>
          </div>
          <span className="hidden flex-shrink-0 whitespace-nowrap rounded-full bg-emerald-50 min-[360px]:inline-block px-2.5 py-1 text-[11px] font-semibold text-emerald-700">Probier es aus</span>
        </div>

        {/* Die beiden Reiter teilen sich den Platz, der Formular-Link nimmt nur so viel wie nötig */}
        <div className="mb-5 flex gap-1 rounded-xl bg-gray-100 p-1">
          <div role="tablist" aria-label="Demo auswählen" className="flex min-w-0 flex-1 gap-1">
            {TABS.map(({ key, label, shortLabel, Icon }) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  id={`demo-tab-${key}`}
                  aria-selected={active}
                  aria-controls={`demo-panel-${key}`}
                  onClick={() => {
                    onInteract();
                    setTab(key);
                  }}
                  className={`${tabClass(active)} flex-auto`}
                >
                  <Icon className="hidden h-4 w-4 flex-shrink-0 sm:block" />
                  <span className="sm:hidden">{shortLabel}</span>
                  <span className="hidden sm:inline">{label}</span>
                </button>
              );
            })}
          </div>
          {/* Formulare haben eine eigene Seite mit allen Demo-Vorlagen */}
          <Link href="/formulare-testen" className={`${tabClass(false)} flex-none`}>
            <span>Formulare</span>
            <ArrowUpRight className="h-3.5 w-3.5 flex-shrink-0" />
          </Link>
        </div>

        {/* Gleiche Mindesthöhe für beide Reiter, damit beim Wechseln nichts springt */}
        <div className="min-h-[21.5rem]">
          {/* Panels bleiben gemountet, damit Eingaben beim Wechseln nicht verloren gehen */}
          <div id="demo-panel-booking" role="tabpanel" aria-labelledby="demo-tab-booking" hidden={tab !== "booking"}>
            <BookingPanel
              onInteract={onInteract}
              onBooked={(time, treatment) => {
                setBooking({ time, treatment });
                onBooked(time);
              }}
              onContinue={() => setTab("dictation")}
            />
          </div>
          <div id="demo-panel-dictation" role="tabpanel" aria-labelledby="demo-tab-dictation" hidden={tab !== "dictation"}>
            <DictationPanel booking={booking} />
          </div>
        </div>
      </div>
    </div>
  );
}
