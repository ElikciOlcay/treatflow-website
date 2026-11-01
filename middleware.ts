import { NextRequest, NextResponse } from "next/server";
import {
  GERMAN_SPEAKING_COUNTRIES,
  MARKET_BY_COUNTRY,
  MARKET_COOKIE,
  isPrefixedMarket,
  resolveSiteMarket,
  type Market,
} from "./app/i18n/config";
import { LOCALIZED_SLUGS, delocalizeSlug, localizeEnSlug } from "./app/i18n/market-routes";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Bekannte Crawler – keine Geo-Redirects auf /, damit hreflang sauber bleibt. */
const BOT_UA =
  /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterest|redditbot|gptbot|chatgpt|claude|anthropic|perplexity|google-extended|bytespider|applebot|duckduckbot|mistral|cohere|meta-external/i;

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

/** Erste unterstuetzte Sprache aus Accept-Language (de oder ein Prefix-Markt). */
function preferredLanguage(request: NextRequest): Market | null {
  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase();
  if (!acceptLanguage) return null;
  const tags = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { lang } of tags) {
    if (lang === "de") return "de";
    if (isPrefixedMarket(lang)) return lang;
  }
  return null;
}

function isGermanSpeakingCountry(country: string | null): boolean {
  if (!country) return false;
  return (GERMAN_SPEAKING_COUNTRIES as readonly string[]).includes(country);
}

function redirectToLanguage(request: NextRequest, market: Market, path = "") {
  const prefix = market === "de" ? "" : `/${market}`;
  const target = path
    ? `${prefix}${path.startsWith("/") ? path : `/${path}`}` || "/"
    : prefix || "/";
  const response = NextResponse.redirect(new URL(target, request.url));
  response.cookies.set(MARKET_COOKIE, market, {
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
    path: "/",
  });
  return response;
}

/** Legacy-Laender → /en. */
function rewriteLegacyPath(pathname: string): string | null {
  if (pathname === "/en-nl" || pathname.startsWith("/en-nl/")) {
    const rest = pathname.replace(/^\/en-nl/, "") || "";
    return `/en${rest}`;
  }

  const countryMatch = pathname.match(
    /^\/(us|uk|fi|ie|ca|au|ae)(\/.*)?$/
  );
  if (countryMatch) {
    const rest = countryMatch[2] || "";
    return `/en${rest}`;
  }

  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const legacyTarget = rewriteLegacyPath(pathname);
  if (legacyTarget) {
    return NextResponse.redirect(new URL(legacyTarget, request.url), 301);
  }

  const prefixMatch = pathname.match(/^\/([a-z]{2})(?:\/([^/]+))?(\/.*)?$/);
  if (prefixMatch && isPrefixedMarket(prefixMatch[1])) {
    const market = prefixMatch[1];
    const firstSegment = prefixMatch[2];
    const rest = prefixMatch[3] ?? "";
    let response: NextResponse;

    if (firstSegment && market in LOCALIZED_SLUGS) {
      const localized = localizeEnSlug(market, firstSegment);
      const internal = delocalizeSlug(market, firstSegment);
      if (localized !== firstSegment) {
        // EN-Slug unter Sprach-Prefix → kanonischer lokaler Slug
        const url = request.nextUrl.clone();
        url.pathname = `/${market}/${localized}${rest}`;
        return NextResponse.redirect(url, 301);
      }
      if (internal) {
        const url = request.nextUrl.clone();
        url.pathname = `/${market}/${internal}${rest}`;
        response = NextResponse.rewrite(url);
      } else {
        response = NextResponse.next();
      }
    } else {
      response = NextResponse.next();
    }

    response.cookies.set(MARKET_COOKIE, market, {
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
    return redirectToLanguage(request, resolved);
  }

  const country = detectCountry(request);
  const browserLang = preferredLanguage(request);
  // DACH bleibt Kernmarkt: Besucher aus DE/AT/CH/LI sehen weiter die deutsche Seite
  if (browserLang === "de" || isGermanSpeakingCountry(country)) {
    const response = NextResponse.next();
    response.cookies.set(MARKET_COOKIE, "de", {
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
      path: "/",
    });
    return response;
  }

  // Ausserhalb DACH: Browsersprache vor Land (z. B. Englisch sprechende Person in Spanien)
  if (browserLang) {
    return redirectToLanguage(request, browserLang);
  }
  const countryMarket = country ? MARKET_BY_COUNTRY[country] : undefined;
  if (countryMarket && countryMarket !== "de") {
    return redirectToLanguage(request, countryMarket);
  }

  return redirectToLanguage(request, "en");
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon|manifest|robots.txt|sitemap.xml|llms|.*\\..*).*)",
  ],
};
