"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, CalendarCheck, CheckCheck, Mail } from "lucide-react";
import type { DemoCustomer } from "./BookingPanel";

type BookingMessagesProps = {
  booking: { time: string; treatment: string; customer: DemoCustomer; dayLabel: string };
};

// Zeitplan der Animation in Millisekunden ab der Buchung
const EMAIL_AT = 400;
const TYPING_AT = 1700;
const WHATSAPP_AT = 3300;

/** Zeigt nach der Demo-Buchung, welche Nachrichten Treatflow der Kundin automatisch schickt. */
export default function BookingMessages({ booking }: BookingMessagesProps) {
  const [phase, setPhase] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const firstName = booking.customer.name.split(" ")[0] || booking.customer.name;

  useEffect(() => {
    setPhase(0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase(3);
      return;
    }
    rootRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    const timers = [
      window.setTimeout(() => setPhase(1), EMAIL_AT),
      window.setTimeout(() => setPhase(2), TYPING_AT),
      window.setTimeout(() => setPhase(3), WHATSAPP_AT),
    ];
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [booking]);

  return (
    <div ref={rootRef} className="tf-msg-reveal mx-auto mt-16 max-w-5xl scroll-mt-28 lg:mt-20" aria-live="polite">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-600">Und das passiert danach automatisch</p>
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
          {firstName} bekommt Bestätigung und Erinnerung automatisch. Du musst nichts tun.
        </h3>
      </div>

      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
        {/* E-Mail direkt nach der Buchung */}
        <div>
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Mail className="h-4 w-4 text-indigo-500" />
            Sofort nach der Buchung · E-Mail
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-[0_24px_60px_-36px_rgba(15,23,42,0.45)]">
            <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-3" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <span className="ml-3 truncate text-xs text-gray-400">Posteingang · {booking.customer.email}</span>
            </div>
            <div className="min-h-[15.5rem] p-5">
              {phase >= 1 ? (
                <div className="tf-msg-pop">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-indigo-400 text-sm font-bold text-white">
                      A
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="truncate text-sm font-semibold text-gray-900">Studio Aurora</p>
                        <span className="flex-shrink-0 text-xs text-gray-400">gerade eben</span>
                      </div>
                      <p className="truncate text-sm font-medium text-gray-800">Dein Termin ist bestätigt</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
                    <p>Hallo {firstName},</p>
                    <p>
                      danke für deine Buchung. Wir freuen uns auf dich!
                    </p>
                    <div className="flex items-center gap-3 rounded-xl bg-indigo-50 px-3.5 py-3 text-gray-800">
                      <CalendarCheck className="h-5 w-5 flex-shrink-0 text-indigo-500" />
                      <span>
                        <span className="font-semibold">{booking.treatment}</span>
                        <span className="block text-xs text-gray-500">{booking.dayLabel} · {booking.time} Uhr · Studio Aurora</span>
                      </span>
                    </div>
                    <span className="inline-flex rounded-lg bg-gray-900 px-3.5 py-2 text-xs font-semibold text-white">Termin verwalten</span>
                  </div>
                </div>
              ) : (
                <div className="flex h-full min-h-[13rem] items-center justify-center text-sm text-gray-400">
                  <span className="tf-msg-pulse">E-Mail wird gesendet …</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* WhatsApp-Erinnerung vor dem Termin */}
        <div>
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Bell className="h-4 w-4 text-emerald-500" />
            Vor dem Termin · WhatsApp
          </p>
          <div className="mx-auto w-full max-w-[19rem] rounded-[2.25rem] border-[6px] border-gray-900 bg-gray-900 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.6)]">
            <div className="overflow-hidden rounded-[1.75rem] bg-[#efeae2]">
              <div className="flex items-center gap-2.5 bg-[#075e54] px-4 pb-3 pt-4 text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-indigo-400 text-xs font-bold">A</span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">Studio Aurora</p>
                  <p className="text-[11px] text-white/75">{phase === 2 ? "schreibt …" : "online"}</p>
                </div>
              </div>
              <div className="flex min-h-[15.5rem] flex-col justify-end gap-2 p-3">
                <span className="mx-auto mb-1 rounded-md bg-white/80 px-2 py-0.5 text-[10px] font-medium text-gray-500">1 Tag vor dem Termin</span>
                {phase === 2 && (
                  <div className="tf-msg-pop flex w-fit items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-3.5 py-3 shadow-sm" aria-label="Studio Aurora schreibt">
                    <span className="tf-typing-dot h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span className="tf-typing-dot h-1.5 w-1.5 rounded-full bg-gray-400" style={{ animationDelay: "150ms" }} />
                    <span className="tf-typing-dot h-1.5 w-1.5 rounded-full bg-gray-400" style={{ animationDelay: "300ms" }} />
                  </div>
                )}
                {phase >= 3 && (
                  <div className="tf-msg-pop max-w-[90%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-[13px] leading-snug text-gray-800 shadow-sm">
                    <p>
                      Hallo {firstName}, kleine Erinnerung: Dein Termin für <span className="font-semibold">{booking.treatment}</span> ist morgen um{" "}
                      <span className="font-semibold">{booking.time} Uhr</span>. Wir freuen uns auf dich! 🌸
                    </p>
                    <p className="mt-1 flex items-center justify-end gap-1 text-[10px] text-gray-400">
                      09:00
                      <CheckCheck className="h-3.5 w-3.5 text-sky-500" />
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-gray-500">Wann die Erinnerung rausgeht, stellst du in Treatflow selbst ein.</p>
    </div>
  );
}
