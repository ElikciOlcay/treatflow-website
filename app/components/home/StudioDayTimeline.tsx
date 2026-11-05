import Link from "next/link";
import { filterByFeature } from "@/app/i18n/feature-availability";
import { resolveHref } from "@/app/i18n/site-pages";
import { siteIcons } from "@/app/site/icons";
import { homeDe } from "@/app/site/content/home/de";
import type { StudioDayContent } from "@/app/site/content/home/types";
import type { SiteMarket } from "@/app/site/content/shared";

/** Ein Termin von der Buchung bis zur Kasse, als Zeitleiste erzählt. */
export default function StudioDayTimeline({
  content = homeDe.studioDay,
  market = "de",
}: {
  content?: StudioDayContent;
  market?: SiteMarket;
} = {}) {
  const steps = filterByFeature(content.steps, market).flatMap((step) => {
    const href = resolveHref(market, step.href);
    return href ? [{ ...step, href, Icon: siteIcons[step.icon] }] : [];
  });

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="studio-day-title">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">{content.eyebrow}</p>
          <h2 id="studio-day-title" className="text-3xl font-bold leading-tight tracking-tight text-gray-900 lg:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {content.subtitle}
          </p>
        </div>

        <ol className="relative space-y-5 before:absolute before:bottom-6 before:left-[1.375rem] before:top-6 before:w-px before:bg-gradient-to-b before:from-indigo-200 before:via-gray-200 before:to-emerald-200 sm:before:left-[1.625rem]">
          {steps.map((step) => (
            <li key={step.time} className="tf-reveal relative flex gap-4 sm:gap-5">
              <span
                className={`relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ring-4 ring-white sm:h-[3.25rem] sm:w-[3.25rem] ${step.tone}`}
              >
                <step.Icon className="h-5 w-5" />
              </span>
              <Link
                href={step.href}
                className="group block flex-1 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-lg"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono font-semibold text-gray-900">{step.time}</span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 font-semibold text-gray-600">{step.module}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{step.text}</p>
                <p className="mt-3 font-mono text-xs text-gray-400">{step.meta}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
