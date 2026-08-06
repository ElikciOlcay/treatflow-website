import { NextRequest, NextResponse } from "next/server";
import {
  GERMAN_SPEAKING_COUNTRIES,
  MARKET_BY_COUNTRY,
  MARKET_COOKIE,
  isMarket,
  isPrefixedMarket,
  marketHomePath,
  type Market,
} from "./app/i18n/config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Bekannte Crawler – keine Geo-Redirects auf /, damit hreflang sauber bleibt. */
const BOT_UA =
  /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterest|redditbot|gptbot|chatgpt|claude|anthropic|perplexity|google-extended|bytespider|applebot|duckduckbot/i;

/** Alte Sprach-Locales → neuer Default-Markt (US) bzw. Mapping. */
const LEGACY_LOCALE_TO_MARKET: Record<string, Market> = {
  en: "us",
  es: "us",
  it: "us",
  fr: "us",
  "en-nl": "nl",
};

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

function detectMarketFromCountry(country: string | null): Market | null {
  if (!country) return null;
  if ((GERMAN_SPEAKING_COUNTRIES as readonly string[]).includes(country)) {
    return "de";
  }
  return MARKET_BY_COUNTRY[country] ?? null;
}

function redirectWithMarket(request: NextRequest, market: Market, path = "") {
  const home = marketHomePath(market);
  const target =
    path && market !== "de"
      ? `${home}${path.startsWith("/") ? path : `/${path}`}`
      : path && market === "de"
        ? path
        : home;
  const response = NextResponse.redirect(new URL(target || "/", request.url));
  response.cookies.set(MARKET_COOKIE, market, {
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
    path: "/",
  });
  return response;
}

function rewriteLegacyLocalePath(pathname: string): { market: Market; rest: string } | null {
  const match = pathname.match(/^\/(en|es|it|fr)(\/.*)?$/);
  if (!match) return null;
  const legacy = match[1];
  const rest = match[2] || "";
  const market = LEGACY_LOCALE_TO_MARKET[legacy] ?? "us";

  // Map localized legacy slugs roughly to EN slugs for ES/IT/FR
  let mappedRest = rest;
  const slugMaps: Record<string, Record<string, string>> = {
    es: {
      "/precios": "/pricing",
      "/contacto": "/contact",
      "/acceso-anticipado": "/early-access",
      "/sobre-nosotros": "/about",
      "/privacidad": "/privacy",
      "/terminos": "/terms",
      "/calendario-citas": "/appointment-calendar",
      "/reservas-online": "/online-booking",
      "/fichas-clientes": "/client-records",
      "/formularios": "/forms",
      "/documentacion-tratamientos": "/treatment-documentation",
      "/funciones": "/features",
      "/mensajeria": "/messaging",
      "/integraciones": "/integrations",
      "/tienda": "/shop",
      "/vales": "/vouchers",
      "/caja-registradora": "/point-of-sale",
      "/web-para-salones": "/studio-website",
      "/software-salon-belleza": "/beauty-salon-software",
      "/software-clinica-estetica": "/aesthetic-clinic-software",
      "/software-depilacion-laser": "/laser-hair-removal-software",
      "/software-maquillaje-permanente": "/permanent-makeup-software",
      "/software-estudio-tatuajes": "/tattoo-studio-software",
      "/software-salon-unas": "/nail-salon-software",
      "/software-extension-pestanas": "/lash-studio-software",
      "/software-spa-wellness": "/spa-wellness-software",
      "/software-masajes": "/massage-software",
    },
    it: {
      "/prezzi": "/pricing",
      "/contatto": "/contact",
      "/accesso-anticipato": "/early-access",
      "/chi-siamo": "/about",
      "/termini": "/terms",
      "/calendario-appuntamenti": "/appointment-calendar",
      "/prenotazioni-online": "/online-booking",
      "/schede-clienti": "/client-records",
      "/moduli": "/forms",
      "/documentazione-trattamenti": "/treatment-documentation",
      "/funzioni": "/features",
      "/messaggistica": "/messaging",
      "/integrazioni": "/integrations",
      "/negozio": "/shop",
      "/buoni-regalo": "/vouchers",
      "/cassa": "/point-of-sale",
      "/sito-web-centro": "/studio-website",
      "/software-centro-estetico": "/beauty-salon-software",
      "/software-clinica-estetica": "/aesthetic-clinic-software",
      "/software-epilazione-laser": "/laser-hair-removal-software",
      "/software-trucco-permanente": "/permanent-makeup-software",
      "/software-studio-tatuaggi": "/tattoo-studio-software",
      "/software-centro-unghie": "/nail-salon-software",
      "/software-extension-ciglia": "/lash-studio-software",
      "/software-spa-wellness": "/spa-wellness-software",
      "/software-massaggi": "/massage-software",
    },
    fr: {
      "/tarifs": "/pricing",
      "/acces-anticipe": "/early-access",
      "/a-propos": "/about",
      "/confidentialite": "/privacy",
      "/conditions": "/terms",
      "/calendrier-rendez-vous": "/appointment-calendar",
      "/reservation-en-ligne": "/online-booking",
      "/fiches-clients": "/client-records",
      "/formulaires": "/forms",
      "/documentation-soins": "/treatment-documentation",
      "/fonctionnalites": "/features",
      "/messagerie": "/messaging",
      "/integrations": "/integrations",
      "/boutique": "/shop",
      "/bons-cadeaux": "/vouchers",
      "/caisse": "/point-of-sale",
      "/site-web-institut": "/studio-website",
      "/logiciel-institut-beaute": "/beauty-salon-software",
      "/logiciel-clinique-esthetique": "/aesthetic-clinic-software",
      "/logiciel-epilation-laser": "/laser-hair-removal-software",
      "/logiciel-maquillage-permanent": "/permanent-makeup-software",
      "/logiciel-salon-tatouage": "/tattoo-studio-software",
      "/logiciel-salon-ongles": "/nail-salon-software",
      "/logiciel-extension-cils": "/lash-studio-software",
      "/logiciel-spa-wellness": "/spa-wellness-software",
      "/logiciel-massage": "/massage-software",
    },
  };

  if (legacy !== "en" && slugMaps[legacy]?.[rest]) {
    mappedRest = slugMaps[legacy][rest];
  }

  return { market, rest: mappedRest };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Legacy: /en-nl → /nl
  if (pathname === "/en-nl" || pathname.startsWith("/en-nl/")) {
    const rest = pathname.replace(/^\/en-nl/, "") || "";
    return NextResponse.redirect(new URL(`/nl${rest}`, request.url), 301);
  }

  // Legacy Sprach-Pfade → Laender-Maerkte
  const legacy = rewriteLegacyLocalePath(pathname);
  if (legacy) {
    const target = legacy.rest
      ? `/${legacy.market}${legacy.rest}`
      : `/${legacy.market}`;
    return NextResponse.redirect(new URL(target, request.url), 301);
  }

  if (pathname !== "/") {
    return NextResponse.next();
  }

  if (isBot(request)) {
    return NextResponse.next();
  }

  const cookieMarket = request.cookies.get(MARKET_COOKIE)?.value;

  if (cookieMarket && LEGACY_LOCALE_TO_MARKET[cookieMarket]) {
    return redirectWithMarket(request, LEGACY_LOCALE_TO_MARKET[cookieMarket]);
  }

  if (isMarket(cookieMarket)) {
    if (cookieMarket === "de") {
      return NextResponse.next();
    }
    return redirectWithMarket(request, cookieMarket);
  }

  const country = detectCountry(request);
  const fromCountry = detectMarketFromCountry(country);

  if (fromCountry === "de" || (!fromCountry && prefersGerman(request))) {
    const response = NextResponse.next();
    response.cookies.set(MARKET_COOKIE, "de", {
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
      path: "/",
    });
    return response;
  }

  if (fromCountry && isPrefixedMarket(fromCountry)) {
    return redirectWithMarket(request, fromCountry);
  }

  // Unbekannte Laender → US (englischer Default-Markt)
  return redirectWithMarket(request, "us");
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon|manifest|robots.txt|sitemap.xml|llms.txt|llms-full.txt|.*\\..*).*)",
  ],
};
