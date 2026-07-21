import { NextRequest, NextResponse } from "next/server";
import {
  FRENCH_SPEAKING_COUNTRIES,
  GERMAN_SPEAKING_COUNTRIES,
  ITALIAN_SPEAKING_COUNTRIES,
  LOCALE_COOKIE,
  SPANISH_SPEAKING_COUNTRIES,
  isLocale,
  localeHomePath,
  type Locale,
} from "./app/i18n/config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Bekannte Crawler – keine Geo-Redirects auf /, damit hreflang sauber bleibt. */
const BOT_UA =
  /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterest|redditbot|gptbot|chatgpt|claude|anthropic|perplexity|google-extended|bytespider|applebot|duckduckbot/i;

function detectCountry(request: NextRequest): string | null {
  const header =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry");
  return header ? header.toUpperCase() : null;
}

function isBot(request: NextRequest): boolean {
  const ua = request.headers.get("user-agent") || "";
  return BOT_UA.test(ua);
}

function prefersGerman(request: NextRequest): boolean {
  const country = detectCountry(request);
  if (country) {
    return (GERMAN_SPEAKING_COUNTRIES as readonly string[]).includes(country);
  }
  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase();
  if (acceptLanguage) {
    return acceptLanguage.split(",").some((part) => part.trim().startsWith("de"));
  }
  return false;
}

function detectLocaleFromCountry(country: string | null): Locale | null {
  if (!country) return null;
  // DACH hat Vorrang (auch vor FR fuer CH)
  if ((GERMAN_SPEAKING_COUNTRIES as readonly string[]).includes(country)) return "de";
  if ((SPANISH_SPEAKING_COUNTRIES as readonly string[]).includes(country)) return "es";
  if ((ITALIAN_SPEAKING_COUNTRIES as readonly string[]).includes(country)) return "it";
  if ((FRENCH_SPEAKING_COUNTRIES as readonly string[]).includes(country)) return "fr";
  return null;
}

function redirectWithLocale(request: NextRequest, locale: Locale) {
  const response = NextResponse.redirect(new URL(localeHomePath(locale), request.url));
  response.cookies.set(LOCALE_COOKIE, locale, {
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
    path: "/",
  });
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Legacy: /en-nl → /en
  if (pathname === "/en-nl" || pathname.startsWith("/en-nl/")) {
    const target = pathname.replace(/^\/en-nl/, "/en") || "/en";
    return NextResponse.redirect(new URL(target, request.url), 301);
  }

  if (pathname !== "/") {
    return NextResponse.next();
  }

  if (isBot(request)) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  // Altes Cookie en-nl → en
  if (cookieLocale === "en-nl") {
    return redirectWithLocale(request, "en");
  }

  if (isLocale(cookieLocale)) {
    if (cookieLocale === "de") {
      return NextResponse.next();
    }
    return redirectWithLocale(request, cookieLocale);
  }

  const country = detectCountry(request);
  const fromCountry = detectLocaleFromCountry(country);

  if (fromCountry === "de" || (!fromCountry && prefersGerman(request))) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, "de", {
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
      path: "/",
    });
    return response;
  }

  if (fromCountry) {
    return redirectWithLocale(request, fromCountry);
  }

  return redirectWithLocale(request, "en");
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon|manifest|robots.txt|sitemap.xml|llms.txt|llms-full.txt|.*\\..*).*)",
  ],
};
