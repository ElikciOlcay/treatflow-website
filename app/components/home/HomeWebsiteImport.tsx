"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Globe, ListChecks, Sparkles } from "lucide-react";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import type { HomeWebsiteImportContent } from "@/app/site/content/home/types";
import type { SiteMarket } from "@/app/site/content/shared";

const STEP_ICONS = [Globe, Sparkles, ListChecks];

/** Akzeptiert „studio.at“ wie „https://studio.at/preise“; leer bei Unsinn. */
function normalizeUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
    return url.hostname.includes(".") ? url.toString() : null;
  } catch {
    return null;
  }
}

/**
 * Startseite: Website oder Buchungsseite eingeben. Die App übernimmt nach der
 * Registrierung Leistungen, Preise und Kontaktdaten per KI.
 */
export default function HomeWebsiteImport({ content, market }: { content: HomeWebsiteImportContent; market: SiteMarket }) {
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = normalizeUrl(value);
    if (!url) {
      setInvalid(true);
      return;
    }
    const target = new URL(APP_REGISTER_BY_MARKET[market]);
    target.searchParams.set("website", url);
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "website_import_start", { event_category: "home", event_label: market });
    }
    window.open(target.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="website-import-title">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-6 shadow-[0_30px_70px_-45px_rgba(79,70,229,0.55)] sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600 ring-1 ring-indigo-100">
              <Sparkles className="h-3.5 w-3.5" />
              {content.eyebrow}
            </p>
            <h2 id="website-import-title" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-3 text-lg text-gray-600">{content.subtitle}</p>

            <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row" noValidate>
              <label htmlFor="website-import-url" className="sr-only">
                {content.inputLabel}
              </label>
              <input
                id="website-import-url"
                type="text"
                inputMode="url"
                autoComplete="url"
                autoCapitalize="none"
                spellCheck={false}
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
                  setInvalid(false);
                }}
                placeholder={content.placeholder}
                aria-invalid={invalid}
                aria-describedby="website-import-note"
                className={`min-h-14 w-full flex-1 rounded-xl border bg-white px-4 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/40 ${
                  invalid ? "border-red-300" : "border-gray-200 focus:border-indigo-400"
                }`}
              />
              <button
                type="submit"
                className="group inline-flex min-h-14 items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 text-base font-semibold text-white shadow-[0_14px_34px_-14px_rgba(79,70,229,0.8)] transition-all hover:brightness-110"
              >
                {content.button}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
            <p id="website-import-note" className={`mt-2 text-sm ${invalid ? "text-red-600" : "text-gray-500"}`}>
              {invalid ? content.invalid : content.note}
            </p>
          </div>

          <ol className="space-y-4">
            {content.steps.map((step, index) => {
              const Icon = STEP_ICONS[index] || Sparkles;
              return (
                <li key={step.title} className="flex gap-4 rounded-2xl bg-white/80 p-4 ring-1 ring-gray-100">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{step.title}</p>
                    <p className="mt-0.5 text-sm text-gray-600">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
