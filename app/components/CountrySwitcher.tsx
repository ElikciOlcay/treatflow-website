"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  MARKET_COOKIE,
  isPrefixedMarket,
  marketFlags,
  marketHomePath,
  marketLabels,
  marketPathPrefix,
  resolveSiteMarket,
  switchableMarkets,
  type Market,
} from "../i18n/config";
import { delocalizeSlug } from "../i18n/market-routes";
import { getPagePath, seoPageSlugs, type SeoPageKey } from "../i18n/seo";
import { getUiChrome } from "../i18n/markets/ui-chrome";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Ermittelt die entsprechende Seite in der Zielsprache (Fallback: Startseite). */
function equivalentPath(pathname: string | null, target: Market): string {
  const home = marketHomePath(target);
  if (!pathname) return home;

  const segments = pathname.split("/").filter(Boolean);
  let from: Market = "de";
  if (segments[0] && isPrefixedMarket(segments[0])) {
    from = segments[0];
    segments.shift();
  }
  const rest = segments.join("/");
  if (!rest) return home;

  // Blogartikel sind nicht 1:1 uebersetzt → Blog-Index der Zielsprache
  if (segments[0] === "blog") {
    return target === "de" ? "/blog" : `${marketPathPrefix[target]}/blog`;
  }

  const candidates = new Set<string>([rest]);
  if (from !== "de") {
    const en = delocalizeSlug(from, rest);
    if (en) candidates.add(en);
  }

  const keys = Object.keys(seoPageSlugs) as SeoPageKey[];
  const key = keys.find((k) => {
    const slug = seoPageSlugs[k][from];
    return slug !== undefined && slug !== "" && candidates.has(slug);
  });
  if (!key || seoPageSlugs[key][target] === undefined) return home;
  return getPagePath(target, key);
}

/** Sprachumschalter fuer alle Website-Sprachen. */
export default function CountrySwitcher({
  current,
  variant = "dropdown",
}: {
  current: Market;
  /** "inline" zeigt alle Sprachen als Raster (z. B. im mobilen Menue). */
  variant?: "dropdown" | "inline";
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const active = resolveSiteMarket(current);
  const ariaLabel = active === "de" ? "Sprache" : getUiChrome(active).languageAria;

  useEffect(() => {
    if (variant !== "dropdown") return;
    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [variant]);

  function selectLanguage(market: Market) {
    const next = resolveSiteMarket(market);
    document.cookie = `${MARKET_COOKIE}=${next}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
    setOpen(false);
    router.push(equivalentPath(pathname, next));
  }

  const badge = (market: Market) => (
    <span
      className="inline-flex h-5 min-w-[1.5rem] items-center justify-center rounded bg-gray-100 px-1 text-[10px] font-semibold tracking-wide text-gray-700"
      aria-hidden
    >
      {marketFlags[market]}
    </span>
  );

  if (variant === "inline") {
    return (
      <div role="group" aria-label={ariaLabel}>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
          {ariaLabel}
        </p>
        <ul className="grid grid-cols-2 gap-2">
          {switchableMarkets.map((market) => (
            <li key={market}>
              <button
                type="button"
                onClick={() => selectLanguage(market)}
                lang={market}
                aria-current={market === active ? "true" : undefined}
                className={`w-full flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                  market === active
                    ? "border-indigo-200 bg-indigo-50 text-indigo-600 font-semibold"
                    : "border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {badge(market)}
                {marketLabels[market]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        {badge(active)}
        <span className="hidden sm:inline">{marketLabels[active]}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <ul
          className="absolute right-0 top-full mt-2 w-48 max-h-[70vh] overflow-y-auto bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50"
          role="listbox"
          aria-label={ariaLabel}
        >
          {switchableMarkets.map((market) => (
            <li key={market}>
              <button
                type="button"
                onClick={() => selectLanguage(market)}
                lang={market}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2.5 ${
                  market === active
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700"
                }`}
                role="option"
                aria-selected={market === active}
              >
                {badge(market)}
                {marketLabels[market]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
