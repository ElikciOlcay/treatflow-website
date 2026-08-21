import { NextRequest, NextResponse } from "next/server";
import {
  GERMAN_SPEAKING_COUNTRIES,
  MARKET_COOKIE,
  resolveSiteMarket,
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

/** Browser bevorzugt Deutsch (Accept-Language). */
function prefersGermanLanguage(request: NextRequest): boolean {
  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase();
  if (!acceptLanguage) return false;
  return acceptLanguage.split(",").some((part) => part.trim().startsWith("de"));
}

function isGermanSpeakingCountry(country: string | null): boolean {
  if (!country) return false;
  return (GERMAN_SPEAKING_COUNTRIES as readonly string[]).includes(country);
}

function redirectToLanguage(request: NextRequest, market: "de" | "en", path = "") {
  const target =
    market === "de"
      ? path || "/"
      : path
        ? `/en${path.startsWith("/") ? path : `/${path}`}`
        : "/en";
  const response = NextResponse.redirect(new URL(target, request.url));
  response.cookies.set(MARKET_COOKIE, market, {
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
    path: "/",
  });
  return response;
}

/** Alte Sprach-Locales (es/it/fr) und Legacy-Laender → /en. */
function rewriteLegacyPath(pathname: string): string | null {
  if (pathname === "/en-nl" || pathname.startsWith("/en-nl/")) {
    const rest = pathname.replace(/^\/en-nl/, "") || "";
    return `/en${rest}`;
  }

  const countryMatch = pathname.match(
    /^\/(us|uk|nl|fi|ie|ca|au|ae)(\/.*)?$/
  );
  if (countryMatch) {
    const rest = countryMatch[2] || "";
    return `/en${rest}`;
  }

  const localeMatch = pathname.match(/^\/(es|it|fr)(\/.*)?$/);
  if (localeMatch) {
    const legacy = localeMatch[1];
    const rest = localeMatch[2] || "";
    const slugMaps: Record<string, Record<string, string>> = {
      es: {
        "/precios": "/pricing",
        "/contacto": "/contact",
        "/acceso-anticipado": "/early-access",
        "/sobre-nosotros": "/about",
        "/privacidad": "/privacy",
        "/terminos": "/terms",
        "/funciones": "/features",
      },
      it: {
        "/prezzi": "/pricing",
        "/contatto": "/contact",
        "/accesso-anticipato": "/early-access",
        "/chi-siamo": "/about",
        "/termini": "/terms",
        "/funzioni": "/features",
      },
      fr: {
        "/tarifs": "/pricing",
        "/acces-anticipe": "/early-access",
        "/a-propos": "/about",
        "/confidentialite": "/privacy",
        "/conditions": "/terms",
        "/fonctionnalites": "/features",
      },
    };
    const mapped = slugMaps[legacy]?.[rest] ?? rest;
    return `/en${mapped}`;
  }

  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const legacyTarget = rewriteLegacyPath(pathname);
  if (legacyTarget) {
    return NextResponse.redirect(new URL(legacyTarget, request.url), 301);
  }

  // /en und Unterseiten: Cookie auf en setzen, Seite rendern
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const response = NextResponse.next();
    response.cookies.set(MARKET_COOKIE, "en", {
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
      path: "/",
    });
    return response;
  }

  if (pathname !== "/") {
    return NextResponse.next();
  }

  if (isBot(request)) {
    return NextResponse.next();
  }

  const cookieRaw = request.cookies.get(MARKET_COOKIE)?.value;
  if (cookieRaw) {
    const resolved = resolveSiteMarket(cookieRaw);
    if (resolved === "de") {
      const response = NextResponse.next();
      if (cookieRaw !== "de") {
        response.cookies.set(MARKET_COOKIE, "de", {
          maxAge: COOKIE_MAX_AGE,
          sameSite: "lax",
          path: "/",
        });
      }
      return response;
    }
    return redirectToLanguage(request, "en");
  }

  const country = detectCountry(request);
  if (isGermanSpeakingCountry(country) || prefersGermanLanguage(request)) {
    const response = NextResponse.next();
    response.cookies.set(MARKET_COOKIE, "de", {
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
      path: "/",
    });
    return response;
  }

  // Alle anderen → Englisch (nicht laenderbezogen)
  return redirectToLanguage(request, "en");
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon|manifest|robots.txt|sitemap.xml|llms.txt|llms-full.txt|.*\\..*).*)",
  ],
};
