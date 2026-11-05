"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle, Mic, type LucideIcon } from "lucide-react";
import BookingPanel, { type DemoCustomer } from "./BookingPanel";
import BookingMessages from "./BookingMessages";
import DictationPanel from "./DictationPanel";
import { tryFeaturesDe } from "@/app/site/content/try-features/de";
import type { LiveDemosContent, TryFeaturesContent } from "@/app/site/content/try-features/types";

/** Kartenrahmen eines Beispiel-Studios, in dem jede Live-Demo läuft. */
function DemoFrame({ subtitle, studioName, liveBadge, children }: { subtitle: string; studioName: string; liveBadge: string; children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-200/50 via-white/0 to-sky-200/50 blur-2xl" aria-hidden="true" />
      <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)] min-[380px]:p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-indigo-400 text-sm font-bold text-white">
              A
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">{studioName}</p>
              <p className="truncate text-xs text-gray-500">{subtitle}</p>
            </div>
          </div>
          <span className="hidden flex-shrink-0 whitespace-nowrap rounded-full bg-emerald-50 min-[360px]:inline-block px-2.5 py-1 text-[11px] font-semibold text-emerald-700">{liveBadge}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

type DemoSectionProps = {
  id: string;
  eyebrow: string;
  Icon: LucideIcon;
  title: string;
  text: string;
  points: string[];
  /** `null`-href = Seite gibt es in der Sprache nicht → Link ausblenden */
  link: { href: string | null; label: string };
  demo: ReactNode;
  /** Optionaler Inhalt unter dem zweispaltigen Bereich */
  below?: ReactNode;
  reverse?: boolean;
  tone?: "white" | "gray";
};

function DemoSection({ id, eyebrow, Icon, title, text, points, link, demo, below, reverse = false, tone = "white" }: DemoSectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${tone === "gray" ? "bg-gray-50" : "bg-white"}`}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-indigo-600">
            <Icon className="h-4 w-4" />
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{text}</p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                {point}
              </li>
            ))}
          </ul>
          {link.href && (
            <Link href={link.href} className="mt-6 inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-800">
              {link.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
        <div className={reverse ? "lg:order-1" : ""}>{demo}</div>
      </div>
      {below}
    </section>
  );
}

type LiveDemosProps = {
  /** Texte der Sprache (Default: Deutsch) */
  content?: LiveDemosContent;
  /** Aufgelöste „Mehr zu …“-Links (`null` = ausblenden) */
  links?: { booking: string | null; dictation: string | null };
  anchors?: TryFeaturesContent["anchors"];
  /** Ziel von „Weiter: Formulare“ im Diktat; `null`, wenn die Sprache keine Formular-Demo hat */
  formsHref?: string | null;
};

/** Die beiden interaktiven Demos der Seite; der gebuchte Termin wird ans Diktat weitergegeben. */
export default function LiveDemos({
  content: c = tryFeaturesDe.demos,
  links = { booking: "/online-buchungen", dictation: "/behandlungsdokumentation" },
  anchors = tryFeaturesDe.anchors,
  formsHref = `#${tryFeaturesDe.anchors.forms}`,
}: LiveDemosProps = {}) {
  const [booking, setBooking] = useState<{ time: string; treatment: string; customer: DemoCustomer; dayLabel: string } | null>(null);

  return (
    <>
      <DemoSection
        id={anchors.booking}
        eyebrow={c.booking.eyebrow}
        Icon={CalendarDays}
        title={c.booking.title}
        text={c.booking.text}
        points={c.booking.points}
        link={{ href: links.booking, label: c.booking.link.label }}
        below={
          booking ? (
            <BookingMessages
              key={`${booking.treatment}-${booking.dayLabel}-${booking.time}-${booking.customer.name}`}
              booking={booking}
              content={c.messages}
              calendar={c.calendar}
              treatments={c.bookingPanel.treatments}
              today={c.bookingPanel.today}
              dictationId={anchors.dictation}
            />
          ) : null
        }
        demo={
          <DemoFrame subtitle={c.booking.frameSubtitle} studioName={c.studioName} liveBadge={c.liveBadge}>
            <BookingPanel
              content={c.bookingPanel}
              onInteract={() => {}}
              onBooked={(time, treatment, customer, dayLabel) => setBooking({ time, treatment, customer, dayLabel })}
              onContinue={() => document.getElementById(anchors.dictation)?.scrollIntoView({ behavior: "smooth" })}
            />
          </DemoFrame>
        }
      />
      <DemoSection
        id={anchors.dictation}
        eyebrow={c.dictation.eyebrow}
        Icon={Mic}
        title={c.dictation.title}
        text={c.dictation.text}
        points={c.dictation.points}
        link={{ href: links.dictation, label: c.dictation.link.label }}
        demo={
          <DemoFrame subtitle={c.dictation.frameSubtitle} studioName={c.studioName} liveBadge={c.liveBadge}>
            <DictationPanel booking={booking} content={c.dictationPanel} timeSuffix={c.bookingPanel.timeSuffix} formsHref={formsHref} />
          </DemoFrame>
        }
        reverse
        tone="gray"
      />
    </>
  );
}
