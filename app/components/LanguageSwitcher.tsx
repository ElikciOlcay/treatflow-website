"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import {
  LOCALE_COOKIE,
  localeHomePath,
  localeLabels,
  switchableLocales,
  type Locale,
} from "../i18n/config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function selectLocale(locale: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
    setOpen(false);
    router.push(localeHomePath(locale));
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" />
        {localeLabels[current]}
        <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <ul
          className="absolute right-0 top-full mt-2 w-44 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50"
          role="listbox"
        >
          {switchableLocales.map((locale) => (
            <li key={locale}>
              <button
                type="button"
                onClick={() => selectLocale(locale)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                  locale === current
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700"
                }`}
                role="option"
                aria-selected={locale === current}
              >
                {localeLabels[locale]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
