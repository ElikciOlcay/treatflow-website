"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowDown, Check, Clock, Mail, MessageCircle, Send, type LucideIcon } from "lucide-react";
import type { DemoCustomer } from "./BookingPanel";
import StudioCalendarDemo from "./StudioCalendarDemo";
import { scrollToElement } from "./scroll";
import { tryFeaturesDe } from "@/app/site/content/try-features/de";
import type { BookingMessagesStrings, BookingPanelStrings, CalendarStrings } from "@/app/site/content/try-features/types";

type BookingMessagesProps = {
  booking: { time: string; treatment: string; customer: DemoCustomer; dayLabel: string };
  /** Texte der Sprache (Default: Deutsch); ohne `whatsappTitle` keine WhatsApp-Zeile */
  content?: BookingMessagesStrings;
  calendar?: CalendarStrings;
  treatments?: BookingPanelStrings["treatments"];
  today?: string;
  /** id der Diktat-Sektion (Sprungziel „Weiter geht's“) */
  dictationId?: string;
};

// Zeitplan in Millisekunden ab der Landung im Kalender
const FLIGHT_MS = 1400;
const EMAIL_SENDING_AT = 150;
const WHATSAPP_SENDING_AT = 450;
const EMAIL_SENT_AT = 1250;
const WHATSAPP_SENT_AT = 1650;
const REMINDER_AT = 2300;
const NEXT_HINT_AT = 3200;

type SendState = "idle" | "sending" | "sent";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Nach der Demo-Buchung: Die Seite scrollt zum Studio-Kalender, der Termin fliegt aus dem
 * Buchungsfenster in seine Spalte, rechts daneben gehen E-Mail und WhatsApp raus.
 */
export default function BookingMessages({
  booking,
  content: c = tryFeaturesDe.demos.messages,
  calendar,
  treatments,
  today,
  dictationId = tryFeaturesDe.anchors.dictation,
}: BookingMessagesProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const ghostRef = useRef<HTMLDivElement | null>(null);
  const [flying, setFlying] = useState(false);
  const [landed, setLanded] = useState(false);
  const [email, setEmail] = useState<SendState>("idle");
  const [whatsapp, setWhatsapp] = useState<SendState>("idle");
  const [reminder, setReminder] = useState(false);
  const [nextHint, setNextHint] = useState(false);
  const firstName = booking.customer.name.split(" ")[0] || booking.customer.name;

  useEffect(() => {
    const timers: number[] = [];
    let frame = 0;

    const afterLanding = () => {
      setFlying(false);
      setLanded(true);
      timers.push(
        window.setTimeout(() => setEmail("sending"), EMAIL_SENDING_AT),
        window.setTimeout(() => setWhatsapp("sending"), WHATSAPP_SENDING_AT),
        window.setTimeout(() => setEmail("sent"), EMAIL_SENT_AT),
        window.setTimeout(() => setWhatsapp("sent"), WHATSAPP_SENT_AT),
        window.setTimeout(() => setReminder(true), REMINDER_AT),
        window.setTimeout(() => setNextHint(true), NEXT_HINT_AT)
      );
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLanded(true);
      setEmail("sent");
      setWhatsapp("sent");
      setReminder(true);
      setNextHint(true);
      return;
    }

    // Startpunkt ist die Bestätigung im Buchungsfenster; der Termin fliegt, während die Seite scrollt
    const source = document.querySelector("[data-demo-booked]")?.getBoundingClientRect();
    scrollToElement(targetRef.current, "center");
    if (!source) {
      afterLanding();
      return () => timers.forEach((timer) => window.clearTimeout(timer));
    }

    setFlying(true);
    const startWidth = Math.min(240, source.width);
    const startHeight = 52;
    const startX = source.left + (source.width - startWidth) / 2;
    const startY = source.top + Math.min(source.height / 2, 120) - startHeight / 2;
    const startedAt = performance.now();

    const step = (now: number) => {
      const ghost = ghostRef.current;
      const target = targetRef.current?.getBoundingClientRect();
      const t = Math.min(1, (now - startedAt) / FLIGHT_MS);
      if (ghost && target) {
        const e = easeInOutCubic(t);
        const arc = Math.sin(Math.PI * t);
        ghost.style.left = `${startX + (target.left - startX) * e - arc * 40}px`;
        ghost.style.top = `${startY + (target.top - startY) * e}px`;
        ghost.style.width = `${startWidth + (target.width - startWidth) * e}px`;
        ghost.style.height = `${startHeight + (target.height - startHeight) * e}px`;
        ghost.style.transform = `rotate(${-5 * arc}deg) scale(${1 + 0.08 * arc})`;
        ghost.style.opacity = "1";
      }
      if (t < 1) frame = window.requestAnimationFrame(step);
      else afterLanding();
    };
    frame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <div className="mx-auto mt-16 max-w-6xl lg:mt-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-600">{c.eyebrow}</p>
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
          {c.titleBefore}{firstName}{c.titleAfter}
        </h3>
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-12">
        <StudioCalendarDemo booking={booking} landed={landed} targetRef={targetRef} content={calendar} treatments={treatments} today={today} />

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.45)] sm:p-6" aria-live="polite">
          <p className="mb-5 text-sm font-semibold text-gray-900">{c.sentTitle}</p>
          <div className="space-y-3">
            <SendRow
              Icon={Mail}
              iconClass="bg-indigo-500"
              title={c.emailTitle}
              recipient={booking.customer.email}
              state={email}
              content={c}
            />
            {c.whatsappTitle && (
              <SendRow
                Icon={MessageCircle}
                iconClass="bg-[#25d366]"
                title={c.whatsappTitle}
                recipient={booking.customer.phone}
                state={whatsapp}
                content={c}
              />
            )}
            {reminder && (
              <div className="tf-msg-pop flex items-center gap-3 rounded-xl border border-dashed border-gray-200 px-3.5 py-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{c.reminderTitle}</p>
                  <p className="truncate text-xs text-gray-500">{c.reminderWhen}</p>
                </div>
              </div>
            )}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-gray-500">{c.footnote}</p>
        </div>
      </div>

      {/* Nach der Animation: weiter zur Behandlungsdoku */}
      {nextHint && (
        <div className="tf-msg-pop mt-14 flex justify-center lg:mt-16">
          <a
            href={`#${dictationId}`}
            onClick={(event) => {
              event.preventDefault();
              scrollToElement(document.getElementById(dictationId), "start");
            }}
            className="group flex flex-col items-center gap-4 text-center"
          >
            <span>
              <span className="block text-sm font-semibold uppercase tracking-wide text-indigo-600">{c.nextEyebrow}</span>
              <span className="mt-1 block text-xl font-bold text-gray-900 group-hover:text-indigo-600 lg:text-2xl">
                {c.nextTitle}
              </span>
            </span>
            <span className="relative flex h-14 w-14 items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-indigo-400 opacity-30" aria-hidden="true" />
              <span className="tf-arrow-bounce relative flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-[0_14px_30px_-10px_rgba(79,70,229,0.8)] transition-colors group-hover:bg-indigo-700">
                <ArrowDown className="h-6 w-6" strokeWidth={2.5} />
              </span>
            </span>
          </a>
        </div>
      )}

      {flying &&
        createPortal(
          <div
            ref={ghostRef}
            className="pointer-events-none fixed z-[60] overflow-hidden rounded-lg border-l-4 border-indigo-800 bg-indigo-600 px-2 py-1.5 text-[11px] leading-tight text-white opacity-0 shadow-[0_20px_40px_-12px_rgba(79,70,229,0.7)]"
            aria-hidden="true"
          >
            <p className="truncate font-semibold">{booking.customer.name}</p>
            <p className="truncate opacity-90">
              {booking.treatment} · {booking.time}
            </p>
          </div>,
          document.body
        )}
    </div>
  );
}

type SendRowProps = {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  recipient: string;
  state: SendState;
  content: BookingMessagesStrings;
};

/** Eine Nachricht, die verschickt wird: erst fliegt ein Papierflieger los, dann kommt der Haken. */
function SendRow({ Icon, iconClass, title, recipient, state, content: c }: SendRowProps) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 transition-colors duration-500 ${
        state === "sent" ? "border-emerald-200 bg-emerald-50/60" : "border-gray-100 bg-gray-50"
      } ${state === "idle" ? "opacity-50" : ""}`}
    >
      <span className={`relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white ${iconClass}`}>
        {state === "sending" && <span className={`absolute inset-0 animate-ping rounded-full opacity-40 ${iconClass}`} aria-hidden="true" />}
        <Icon className="relative h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="truncate text-xs text-gray-500">
          {state === "sent" ? c.deliveredTo.replace("{recipient}", recipient) : state === "sending" ? c.sending : c.waiting}
        </p>
        {state === "sending" && (
          <span className="mt-1.5 block h-1 overflow-hidden rounded-full bg-gray-200" aria-hidden="true">
            <span className="tf-send-progress block h-full rounded-full bg-indigo-500" />
          </span>
        )}
      </div>
      <span className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center">
        {state === "sending" && <Send className="tf-send-fly h-4 w-4 text-indigo-500" aria-hidden="true" />}
        {state === "sent" && (
          <span className="tf-msg-pop flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Check className="h-4 w-4" strokeWidth={3} />
          </span>
        )}
      </span>
    </div>
  );
}
