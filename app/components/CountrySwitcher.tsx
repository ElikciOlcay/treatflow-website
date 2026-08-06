"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  MARKET_COOKIE,
  marketFlags,
  marketHomePath,
  marketLabels,
  switchableMarkets,
  type Market,
} from "../i18n/config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export default function CountrySwitcher({ current }: { current: Market }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function selectMarket(market: Market) {
    document.cookie = `${MARKET_COOKIE}=${market}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
    setOpen(false);
    router.push(marketHomePath(market));
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Country"
      >
        <span className="text-base leading-none" aria-hidden>
          {marketFlags[current]}
        </span>
        <span className="hidden sm:inline">{marketLabels[current]}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <ul
          className="absolute right-0 top-full mt-2 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50 max-h-[70vh] overflow-y-auto"
          role="listbox"
        >
          {switchableMarkets.map((market) => (
            <li key={market}>
              <button
                type="button"
                onClick={() => selectMarket(market)}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2.5 ${
                  market === current
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700"
                }`}
                role="option"
                aria-selected={market === current}
              >
                <span className="text-base leading-none" aria-hidden>
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
