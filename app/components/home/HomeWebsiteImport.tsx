"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, Check, FileText, Globe, ListChecks, Sparkles } from "lucide-react";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import type { HomeWebsiteImportContent } from "@/app/site/content/home/types";
import type { SiteMarket } from "@/app/site/content/shared";

const STEP_ICONS = [Globe, Sparkles, ListChecks];

const SCAN_API = `${process.env.NEXT_PUBLIC_DEMO_API_BASE || "https://app.treatflow.io"}/api/public/website-scan`;

type ScanService = { name: string; duration: number; price: number | null; priceFrom: boolean };
type ScanResult = {
  sourceUrl: string;
  business: { name: string | null; street: string | null; houseNumber: string | null; postalCode: string | null; city: string | null; logoUrl: string | null };
  categories: { name: string; services: ScanService[] }[];
  currency: string | null;
};
type ScanForm = { baseId: string; name: string; services: number };
type ScanError = keyof HomeWebsiteImportContent["scan"]["errors"];

type State =
  | { phase: "idle" }
  | { phase: "scanning" }
  | { phase: "done"; scanId: string; result: ScanResult; forms: ScanForm[] }
  | { phase: "error"; error: ScanError; url: string };

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

function fill(text: string, count: number) {
  return text.replace("{count}", String(count));
}

function track(name: string, market: SiteMarket, extra: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", name, { event_category: "home", event_label: market, ...extra });
  }
}

/** Fortschrittsanzeige: die Schritte rücken alle paar Sekunden weiter. */
function useLoadingStep(active: boolean) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!active) {
      setStep(0);
      return;
    }
    const timer = window.setInterval(() => setStep((current) => Math.min(current + 1, 2)), 12000);
    return () => window.clearInterval(timer);
  }, [active]);
  return step;
}

/**
 * Startseite: Website oder Buchungsseite direkt hier auslesen und zeigen, was
 * übernommen wird (Leistungen, Preise, passende Formulare). „Alles übernehmen“
 * führt zur Registrierung; die App übernimmt den gespeicherten Scan ohne neue Auswertung.
 */
export default function HomeWebsiteImport({ content, market }: { content: HomeWebsiteImportContent; market: SiteMarket }) {
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [state, setState] = useState<State>({ phase: "idle" });
  const loadingStep = useLoadingStep(state.phase === "scanning");
  const scan = content.scan;

  function registerUrl(params: Record<string, string>) {
    const target = new URL(APP_REGISTER_BY_MARKET[market]);
    for (const [key, val] of Object.entries(params)) target.searchParams.set(key, val);
    return target.toString();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = normalizeUrl(value);
    if (!url) {
      setInvalid(true);
      return;
    }
    setState({ phase: "scanning" });
    track("website_scan_start", market);
    try {
      const response = await fetch(SCAN_API, {
        method: "POST",
        // text/plain: kein CORS-Preflight nötig
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify({ url, locale: market }),
      });
      const data = await response.json().catch(() => null);
      if (data?.ok) {
        setState({ phase: "done", scanId: data.scanId, result: data.result, forms: data.forms || [] });
        track("website_scan_done", market, { value: data.result?.categories?.length || 0 });
        return;
      }
      const error: ScanError = data?.error && data.error in scan.errors ? data.error : "failed";
      setState({ phase: "error", error, url });
      track("website_scan_failed", market, { reason: error });
    } catch {
      setState({ phase: "error", error: "failed", url });
    }
  }

  const intro = (
    <div>
      <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600 ring-1 ring-indigo-100">
        <Sparkles className="h-3.5 w-3.5" />
        {content.eyebrow}
      </p>
      <h2 id="website-import-title" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {content.title}
      </h2>
      <p className="mt-3 text-lg text-gray-600">{content.subtitle}</p>
    </div>
  );

  const form = (
    <>
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
          disabled={state.phase === "scanning"}
          onChange={(event) => {
            setValue(event.target.value);
            setInvalid(false);
          }}
          placeholder={content.placeholder}
          aria-invalid={invalid}
          aria-describedby="website-import-note"
          className={`min-h-14 w-full flex-1 rounded-xl border bg-white px-4 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/40 disabled:opacity-60 ${
            invalid ? "border-red-300" : "border-gray-200 focus:border-indigo-400"
          }`}
        />
        <button
          type="submit"
          disabled={state.phase === "scanning"}
          className="group inline-flex min-h-14 items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 text-base font-semibold text-white shadow-[0_14px_34px_-14px_rgba(79,70,229,0.8)] transition-all hover:brightness-110 disabled:opacity-60"
        >
          {content.button}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </form>
      <p id="website-import-note" className={`mt-2 text-sm ${invalid ? "text-red-600" : "text-gray-500"}`}>
        {invalid ? content.invalid : content.note}
      </p>
    </>
  );

  let side: React.ReactNode = (
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
  );

  if (state.phase === "scanning") {
    side = (
      <div className="rounded-2xl bg-white/90 p-6 ring-1 ring-gray-100" role="status" aria-live="polite">
        <p className="font-semibold text-gray-900">{scan.loadingTitle}</p>
        <p className="mt-1 text-sm text-gray-500">{scan.loadingHint}</p>
        <ul className="mt-5 space-y-3 text-sm">
          {scan.loadingSteps.map((label, index) => (
            <li key={label} className={`flex items-center gap-3 ${index <= loadingStep ? "text-gray-900" : "text-gray-400"}`}>
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
                {index < loadingStep ? (
                  <Check className="h-4 w-4 text-indigo-600" />
                ) : index === loadingStep ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                )}
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (state.phase === "error") {
    side = (
      <div className="rounded-2xl bg-white/90 p-6 ring-1 ring-gray-100">
        <p className="text-sm text-gray-700">{scan.errors[state.error]}</p>
        <a
          href={registerUrl({ website: state.url })}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          {scan.fallbackCta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    );
  }

  const done = state.phase === "done" ? state : null;

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="website-import-title">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-6 shadow-[0_30px_70px_-45px_rgba(79,70,229,0.55)] sm:p-10">
        {done ? (
          <ScanResultView
            content={content}
            market={market}
            result={done.result}
            forms={done.forms}
            ctaHref={registerUrl({ scan: done.scanId })}
            onAgain={() => setState({ phase: "idle" })}
          />
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              {intro}
              {form}
            </div>
            {side}
          </div>
        )}
      </div>
    </section>
  );
}

function ScanResultView({
  content,
  market,
  result,
  forms,
  ctaHref,
  onAgain,
}: {
  content: HomeWebsiteImportContent;
  market: SiteMarket;
  result: ScanResult;
  forms: ScanForm[];
  ctaHref: string;
  onAgain: () => void;
}) {
  const scan = content.scan;
  const total = result.categories.reduce((sum, category) => sum + category.services.length, 0);
  const b = result.business;
  const address = [[b.street, b.houseNumber].filter(Boolean).join(" "), [b.postalCode, b.city].filter(Boolean).join(" ")]
    .filter(Boolean)
    .join(", ");
  const currency = result.currency || "EUR";
  const money = (value: number) => {
    try {
      return new Intl.NumberFormat(market, { style: "currency", currency }).format(value);
    } catch {
      return `${value} ${currency}`;
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200">
            {b.logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={b.logoUrl} alt="" className="h-full w-full object-contain p-1" referrerPolicy="no-referrer" />
            ) : (
              <span className="text-xl font-semibold text-gray-700">{(b.name || "?").charAt(0).toUpperCase()}</span>
            )}
          </span>
          <div className="min-w-0">
            <h2 id="website-import-title" className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {total ? fill(scan.foundTitle, total) : scan.foundNone}
            </h2>
            <p className="truncate text-sm text-gray-600">{[b.name, address].filter(Boolean).join(" · ")}</p>
          </div>
        </div>
        <button type="button" onClick={onAgain} className="self-start text-sm font-medium text-indigo-600 hover:text-indigo-800 sm:self-center">
          {scan.again}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
          {result.categories.slice(0, 6).map((category) => (
            <div key={category.name} className="min-w-0 rounded-2xl bg-white p-4 ring-1 ring-gray-100">
              <div className="flex items-baseline justify-between gap-3">
                <p className="truncate font-semibold text-gray-900">{category.name}</p>
                <span className="flex-shrink-0 text-xs text-gray-500">{category.services.length}</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-sm">
                {category.services.slice(0, 3).map((service, index) => (
                  <li key={`${service.name}-${index}`} className="flex items-baseline gap-2">
                    <span className="min-w-0 flex-1 truncate text-gray-700">{service.name}</span>
                    {service.price !== null ? (
                      <span className="flex-shrink-0 whitespace-nowrap tabular-nums text-gray-900">
                        {service.priceFrom ? `${scan.from} ` : ""}
                        {money(service.price)}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
              {category.services.length > 3 ? (
                <p className="mt-2 text-xs text-gray-500">{fill(scan.servicesMore, category.services.length - 3)}</p>
              ) : null}
            </div>
          ))}
          {result.categories.length > 6 ? (
            <p className="text-sm text-gray-500 sm:col-span-2">
              {fill(scan.servicesMore, result.categories.slice(6).reduce((sum, category) => sum + category.services.length, 0))}
            </p>
          ) : null}
        </div>

        <div className="min-w-0 space-y-4">
          {forms.length ? (
            <div className="rounded-2xl bg-white p-4 ring-1 ring-gray-100">
              <p className="flex items-center gap-2 font-semibold text-gray-900">
                <FileText className="h-4 w-4 text-indigo-600" />
                {scan.formsTitle}
              </p>
              <p className="mt-1 text-xs text-gray-500">{scan.formsHint}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {forms.map((item) => (
                  <li key={item.baseId} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span className="min-w-0 flex-1 text-gray-800">{item.name}</span>
                    <span className="flex-shrink-0 text-xs text-gray-500">{item.services}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="rounded-2xl bg-indigo-600 p-5 text-white">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("website_scan_register", market)}
              className="group flex min-h-12 items-center justify-center rounded-xl bg-white px-5 text-center text-base font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              {scan.cta}
              <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="mt-3 text-center text-xs text-indigo-100">{scan.ctaNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
