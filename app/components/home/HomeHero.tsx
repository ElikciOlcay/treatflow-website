"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Play, Star } from "lucide-react";
import StudioCalendarBackdrop from "./StudioCalendarBackdrop";
import { APP_REGISTER_BY_MARKET, DEMO_BOOKING_URL } from "@/app/i18n/market-access";
import { resolveHref } from "@/app/i18n/site-pages";
import { homeDe } from "@/app/site/content/home/de";
import type { HomeHeroContent } from "@/app/site/content/home/types";
import type { SiteMarket } from "@/app/site/content/shared";

const AUTO_STEP_MS = 3200;
const MAX_AUTO_STEP = 4;

/** Hero der Startseite: Botschaft links, Produktbild mit Link zur Live-Demo rechts, Kalender darunter. */
export default function HomeHero({
  content = homeDe.hero,
  market = "de",
}: {
  content?: HomeHeroContent;
  market?: SiteMarket;
} = {}) {
  const registerUrl = APP_REGISTER_BY_MARKET[market];
  const liveDemoHref = resolveHref(market, content.liveDemo.href);
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
          <StudioCalendarBackdrop step={calendarStep} locale={content.calendarLocale} newBookingLabel={content.newBookingLabel} />
          {/* Kalender läuft nach unten weich aus statt hart an der nächsten Fläche zu enden */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            {content.badge}
          </div>
          <h1 className="mb-5 text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
            {content.title.before}{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">{content.title.highlight}</span>
            {" "}{content.title.connector} <span className="whitespace-nowrap">{content.title.end}</span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-600 lg:text-xl">
            {content.subtitle}
          </p>
          <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 whitespace-nowrap px-6 py-4 text-base font-semibold text-white shadow-[0_14px_34px_-14px_rgba(79,70,229,0.8)] sm:px-8 sm:text-lg transition-all duration-200 hover:brightness-110"
            >
              {content.primaryCta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={DEMO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 px-6 py-4 text-base font-semibold sm:px-8 sm:text-lg text-gray-700 backdrop-blur transition-colors hover:border-indigo-300 hover:text-indigo-600"
            >
              {content.demoCta}
            </a>
          </div>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600 lg:justify-start">
            {content.checks.map((item) => (
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
              <span className="text-gray-600">{content.rating}</span>
            </div>
            <span className="hidden text-gray-400 sm:inline">|</span>
            <span className="text-gray-600">
              {content.tested.before}<span className="font-semibold text-gray-900">{content.tested.highlight}</span>{content.tested.after}
            </span>
          </div>
        </div>

        {/* Produktbild; ein Klick führt zur Seite, auf der man die Funktionen live testet */}
        {liveDemoHref ? (
          <Link
            href={liveDemoHref}
            className="group relative block w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)] aspect-[4/3] lg:aspect-[5/4]"
          >
            <Image
              src={content.image.src}
              alt={content.image.alt}
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
              {content.liveDemo.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ) : (
          // Sprache ohne „Funktionen live testen“-Seite: Bild ohne Link
          <div className="relative block w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)] aspect-[4/3] lg:aspect-[5/4]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
              quality={85}
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
