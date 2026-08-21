"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  MARKET_COOKIE,
  marketFlags,
  marketHomePath,
  marketLabels,
  resolveSiteMarket,
  switchableMarkets,
  type Market,
} from "../i18n/config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Sprachumschalter: nur Deutsch und Englisch (nicht laenderbezogen). */
export default function CountrySwitcher({ current }: { current: Market }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const active = resolveSiteMarket(current);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function selectLanguage(market: Market) {
    const next = resolveSiteMarket(market);
    document.cookie = `${MARKET_COOKIE}=${next}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
    setOpen(false);
    router.push(marketHomePath(next));
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
      >
        <span
          className="inline-flex h-5 min-w-[1.5rem] items-center justify-center rounded bg-gray-100 px-1 text-[10px] font-semibold tracking-wide text-gray-700"
          aria-hidden
        >
          {marketFlags[active]}
        </span>
        <span className="hidden sm:inline">{marketLabels[active]}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <ul
          className="absolute right-0 top-full mt-2 w-44 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50"
          role="listbox"
        >
          {switchableMarkets.map((market) => (
            <li key={market}>
              <button
                type="button"
                onClick={() => selectLanguage(market)}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2.5 ${
                  market === active
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700"
                }`}
                role="option"
                aria-selected={market === active}
              >
                <span
                  className="inline-flex h-5 min-w-[1.5rem] items-center justify-center rounded bg-gray-100 px-1 text-[10px] font-semibold tracking-wide text-gray-700"
                  aria-hidden
                >
                  {marketFlags[market]}
                </span>
                {marketLabels[market]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
