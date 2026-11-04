"use client";

import type { RefObject } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { TREATMENTS, type DemoCustomer } from "./BookingPanel";

type StudioCalendarDemoProps = {
  booking: { time: string; treatment: string; customer: DemoCustomer; dayLabel: string };
  /** true, sobald der fliegende Termin angekommen ist */
  landed: boolean;
  /** Platz des neuen Termins; dorthin fliegt der Termin aus dem Buchungsfenster */
  targetRef: RefObject<HTMLDivElement | null>;
};

const FIRST_HOUR = 9;
const LAST_HOUR = 19;
const HOUR_PX = 56;

// Wer welche Behandlung übernimmt, wie im Demo-Studio Aurora
const STAFF = [
  { name: "Elif", initials: "EA", color: "bg-rose-400", treatment: "Gesichtsbehandlung" },
  { name: "Jana", initials: "JV", color: "bg-amber-400", treatment: "Wimpernlifting" },
  { name: "Mara", initials: "MK", color: "bg-emerald-500", treatment: "Laser-Haarentfernung" },
];

// Bestehende Termine; liegen nie auf den buchbaren Demo-Zeiten
const EXISTING: { staff: number; start: string; end: string; title: string; customer: string; tone: string }[] = [
  { staff: 0, start: "12:15", end: "13:15", title: "Peeling", customer: "Sarah K.", tone: "bg-rose-50 border-rose-300 text-rose-900" },
  { staff: 0, start: "15:20", end: "16:20", title: "Hydrafacial", customer: "Nina B.", tone: "bg-rose-50 border-rose-300 text-rose-900" },
  { staff: 1, start: "10:20", end: "11:00", title: "Brow Lifting", customer: "Julia M.", tone: "bg-amber-50 border-amber-300 text-amber-900" },
  { staff: 1, start: "12:00", end: "13:00", title: "Wimpernverlängerung", customer: "Anna S.", tone: "bg-amber-50 border-amber-300 text-amber-900" },
  { staff: 1, start: "15:15", end: "16:15", title: "Refill", customer: "Mia T.", tone: "bg-amber-50 border-amber-300 text-amber-900" },
  { staff: 2, start: "10:00", end: "10:45", title: "Laser Beine", customer: "Laura P.", tone: "bg-emerald-50 border-emerald-300 text-emerald-900" },
  { staff: 2, start: "12:30", end: "13:30", title: "Laser Rücken", customer: "Tom R.", tone: "bg-emerald-50 border-emerald-300 text-emerald-900" },
  { staff: 2, start: "15:00", end: "15:45", title: "Laser Gesicht", customer: "Eva L.", tone: "bg-emerald-50 border-emerald-300 text-emerald-900" },
];

function minutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(total: number) {
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function topFor(time: string) {
  return ((minutes(time) - FIRST_HOUR * 60) / 60) * HOUR_PX;
}

/** Tagesansicht des Studio-Kalenders mit freiem Platz für den gerade gebuchten Demo-Termin. */
export default function StudioCalendarDemo({ booking, landed, targetRef }: StudioCalendarDemoProps) {
  const staffIndex = Math.max(0, STAFF.findIndex((s) => s.treatment === booking.treatment));
  const duration = TREATMENTS.find((t) => t.name === booking.treatment)?.minutes ?? 60;
  const end = formatTime(minutes(booking.time) + duration);
  const top = topFor(booking.time);
  const height = (duration / 60) * HOUR_PX;
  const dayTitle = booking.dayLabel === "heute" ? "Heute" : booking.dayLabel;

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)]">
        {/* Kopfzeile wie in der App */}
        <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-400" aria-hidden="true">
              <ChevronLeft className="h-4 w-4" />
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-400" aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </span>
            <p className="ml-1 text-sm font-semibold text-gray-900">{dayTitle}</p>
          </div>
          <span className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">Tag</span>
        </div>

        <div className="grid grid-cols-[3rem_repeat(3,minmax(0,1fr))] border-b border-gray-100 sm:grid-cols-[3.5rem_repeat(3,minmax(0,1fr))]">
          <span />
          {STAFF.map((s) => (
            <div key={s.name} className="flex items-center justify-center gap-2 border-l border-gray-100 py-2.5">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ${s.color}`}>{s.initials}</span>
              <span className="text-xs font-semibold text-gray-700">{s.name}</span>
            </div>
          ))}
        </div>

        <div className="relative grid grid-cols-[3rem_repeat(3,minmax(0,1fr))] sm:grid-cols-[3.5rem_repeat(3,minmax(0,1fr))]" style={{ height: (LAST_HOUR - FIRST_HOUR) * HOUR_PX }}>
          {/* Stundenraster */}
          <div className="relative">
            {Array.from({ length: LAST_HOUR - FIRST_HOUR }, (_, i) => (
              <span key={i} className="absolute right-2 -translate-y-1/2 text-[10px] text-gray-400" style={{ top: i * HOUR_PX }}>
                {i === 0 ? "" : `${String(FIRST_HOUR + i).padStart(2, "0")}:00`}
              </span>
            ))}
          </div>
          {STAFF.map((s, column) => (
            <div key={s.name} className="relative border-l border-gray-100">
              {Array.from({ length: LAST_HOUR - FIRST_HOUR }, (_, i) => (
                <span key={i} className="absolute inset-x-0 border-t border-gray-100" style={{ top: i * HOUR_PX }} aria-hidden="true" />
              ))}
              {EXISTING.filter((a) => a.staff === column).map((a) => (
                <div
                  key={a.start}
                  className={`absolute inset-x-1 overflow-hidden rounded-md border-l-4 px-1.5 py-1 text-[10px] leading-tight sm:text-[11px] ${a.tone}`}
                  style={{ top: topFor(a.start) + 1, height: ((minutes(a.end) - minutes(a.start)) / 60) * HOUR_PX - 2 }}
                >
                  <p className="truncate font-semibold">{a.customer}</p>
                  <p className="truncate opacity-75">{a.title}</p>
                </div>
              ))}
              {column === staffIndex && (
                <div
                  ref={targetRef}
                  className={`absolute inset-x-1 z-10 overflow-hidden rounded-md border-l-4 border-indigo-600 bg-indigo-600 px-1.5 py-1 text-[10px] leading-tight text-white sm:text-[11px] ${landed ? "tf-cal-landed" : ""}`}
                  style={{ top: top + 1, height: height - 2, visibility: landed ? "visible" : "hidden" }}
                  role="status"
                  aria-label={`Neuer Termin: ${booking.customer.name}, ${booking.treatment}, ${booking.time} bis ${end} Uhr`}
                >
                  {duration < 45 ? (
                    <p className="truncate">
                      <span className="font-semibold">{booking.customer.name}</span> · {booking.time}–{end}
                    </p>
                  ) : (
                    <>
                      <p className="truncate font-semibold">{booking.customer.name}</p>
                      <p className="truncate opacity-90">
                        {booking.treatment} · {booking.time}–{end}
                      </p>
                    </>
                  )}
                </div>
              )}
              {/* Hinweis direkt über dem neuen Termin, sobald er gelandet ist */}
              {column === staffIndex && landed && (
                <span
                  className="tf-msg-pop absolute right-1 z-20 flex items-center gap-1 whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg"
                  style={{ top: Math.max(4, top - 26) }}
                >
                  <Sparkles className="h-3 w-3" />
                  Neu · online gebucht
                </span>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
