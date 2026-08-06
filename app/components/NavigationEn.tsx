"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Link2,
  Users,
  ClipboardCheck,
  FileText,
  Gift,
  Bell,
  Plug,
  ShoppingBag,
  Globe,
  Sparkles,
  Zap,
  Palette,
  Stethoscope,
  Pen,
  Gem,
  Eye,
  Waves,
  Hand,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Dictionary } from "../i18n/dictionaries";
import {
  marketPathPrefix,
  type PrefixedMarket,
} from "../i18n/config";
import {
  APP_LOGIN_BY_MARKET,
  getPrimaryCtaPath,
  isExternalCta,
} from "../i18n/market-access";
import { EN_SLUGS } from "../i18n/market-routes";
import type { IndustryPageKey } from "../i18n/industry-slugs";

type NavLang = "en" | "nl" | "fi";

function toNavLang(market: PrefixedMarket): NavLang {
  if (market === "nl") return "nl";
  if (market === "fi") return "fi";
  return "en";
}

type L10n = Record<NavLang, string>;

const featureDefs: {
  slug: string;
  label: L10n;
  desc: L10n;
  icon: typeof Calendar;
  color: string;
}[] = [
  {
    slug: EN_SLUGS["appointment-calendar"],
    label: {
      en: "Appointment calendar",
      nl: "Afsprakenkalender",
      fi: "Ajanvarauskalenteri",
    },
    desc: {
      en: "Daily, weekly and monthly views",
      nl: "Dag-, week- en maandweergave",
      fi: "Päivä-, viikko- ja kuukausinäkymät",
    },
    icon: Calendar,
    color: "text-indigo-600 bg-indigo-100",
  },
  {
    slug: EN_SLUGS.vouchers,
    label: {
      en: "Vouchers",
      nl: "Cadeaubonnen",
      fi: "Lahjakortit",
    },
    desc: {
      en: "Sell, redeem and track balances",
      nl: "Verkoop, verzilver en volg saldi",
      fi: "Myy, lunasta ja seuraa saldoja",
    },
    icon: Gift,
    color: "text-purple-600 bg-purple-100",
  },
  {
    slug: EN_SLUGS["online-booking"],
    label: {
      en: "Online booking",
      nl: "Online boeken",
      fi: "Verkkovaraus",
    },
    desc: {
      en: "Personal booking link 24/7",
      nl: "Persoonlijke boekingslink 24/7",
      fi: "Henkilökohtainen varauslinkki 24/7",
    },
    icon: Link2,
    color: "text-rose-600 bg-rose-100",
  },
  {
    slug: EN_SLUGS["client-records"],
    label: {
      en: "Client records",
      nl: "Klantendossiers",
      fi: "Asiakaskortistot",
    },
    desc: {
      en: "History, notes and photos",
      nl: "Geschiedenis, notities en foto's",
      fi: "Historia, muistiinpanot ja kuvat",
    },
    icon: Users,
    color: "text-emerald-600 bg-emerald-100",
  },
  {
    slug: EN_SLUGS.forms,
    label: {
      en: "Forms",
      nl: "Formulieren",
      fi: "Lomakkeet",
    },
    desc: {
      en: "Digital intake and consent",
      nl: "Digitale anamnese en toestemming",
      fi: "Digitaalinen anamneesi ja suostumus",
    },
    icon: ClipboardCheck,
    color: "text-orange-600 bg-orange-100",
  },
  {
    slug: EN_SLUGS["treatment-documentation"],
    label: {
      en: "Treatment documentation",
      nl: "Behandelingsdocumentatie",
      fi: "Hoitodokumentaatio",
    },
    desc: {
      en: "Document treatments digitally",
      nl: "Documenteer behandelingen digitaal",
      fi: "Dokumentoi hoidot digitaalisesti",
    },
    icon: FileText,
    color: "text-blue-600 bg-blue-100",
  },
  {
    slug: EN_SLUGS.messaging,
    label: {
      en: "Messaging",
      nl: "Berichten",
      fi: "Viestintä",
    },
    desc: {
      en: "Automated email and SMS",
      nl: "Geautomatiseerde e-mail en sms",
      fi: "Automaattiset sähköpostit ja tekstiviestit",
    },
    icon: Bell,
    color: "text-purple-600 bg-purple-100",
  },
  {
    slug: EN_SLUGS.integrations,
    label: {
      en: "Integrations",
      nl: "Integraties",
      fi: "Integraatiot",
    },
    desc: {
      en: "Calendar, accounting and more",
      nl: "Agenda, boekhouding en meer",
      fi: "Kalenteri, kirjanpito ja muuta",
    },
    icon: Plug,
    color: "text-indigo-600 bg-indigo-100",
  },
];

const industryDefs: {
  key: IndustryPageKey;
  label: L10n;
  desc: L10n;
  icon: typeof Sparkles;
  color: string;
}[] = [
  {
    key: "beauty-salon-software",
    label: {
      en: "Beauty salons",
      nl: "Beauty salons",
      fi: "Kauneussalongit",
    },
    desc: {
      en: "All-in-one studio software",
      nl: "All-in-one studiosoftware",
      fi: "All-in-one-studio-ohjelmisto",
    },
    icon: Sparkles,
    color: "text-indigo-600 bg-indigo-100",
  },
  {
    key: "laser-hair-removal-software",
    label: {
      en: "Laser hair removal",
      nl: "Laserontharing",
      fi: "Laserkarvanpoisto",
    },
    desc: {
      en: "Session tracking and consent",
      nl: "Sessies en toestemmingen",
      fi: "Käyntiseuranta ja suostumukset",
    },
    icon: Zap,
    color: "text-blue-600 bg-blue-100",
  },
  {
    key: "permanent-makeup-software",
    label: {
      en: "Permanent makeup",
      nl: "Permanente make-up",
      fi: "Pysyvä meikki",
    },
    desc: {
      en: "PMU and microblading",
      nl: "PMU en microblading",
      fi: "PMU ja microblading",
    },
    icon: Palette,
    color: "text-rose-600 bg-rose-100",
  },
  {
    key: "aesthetic-clinic-software",
    label: {
      en: "Aesthetic clinics",
      nl: "Esthetische klinieken",
      fi: "Esteettiset klinikat",
    },
    desc: {
      en: "Documentation and patient records",
      nl: "Documentatie en patiëntendossiers",
      fi: "Dokumentointi ja potilaskortistot",
    },
    icon: Stethoscope,
    color: "text-teal-600 bg-teal-100",
  },
  {
    key: "tattoo-studio-software",
    label: {
      en: "Tattoo studios",
      nl: "Tattoostudio's",
      fi: "Tatuointistudiot",
    },
    desc: {
      en: "Consent and bookings",
      nl: "Toestemmingen en boekingen",
      fi: "Suostumukset ja varaukset",
    },
    icon: Pen,
    color: "text-gray-600 bg-gray-200",
  },
  {
    key: "nail-salon-software",
    label: {
      en: "Nail salons",
      nl: "Nagelsalons",
      fi: "Kynsisalongit",
    },
    desc: {
      en: "Appointments and preferences",
      nl: "Afspraken en voorkeuren",
      fi: "Ajanvaraukset ja mieltymykset",
    },
    icon: Gem,
    color: "text-pink-600 bg-pink-100",
  },
  {
    key: "lash-studio-software",
    label: {
      en: "Lash studios",
      nl: "Wimperstudio's",
      fi: "Ripsistudiot",
    },
    desc: {
      en: "Extensions and refill planning",
      nl: "Extensions en refill-planning",
      fi: "Pidennysten ja täyttöjen suunnittelu",
    },
    icon: Eye,
    color: "text-violet-600 bg-violet-100",
  },
  {
    key: "spa-wellness-software",
    label: {
      en: "Spa & wellness",
      nl: "Spa & wellness",
      fi: "Spa & wellness",
    },
    desc: {
      en: "Guest management and bookings",
      nl: "Gastbeheer en boekingen",
      fi: "Vierashallinta ja varaukset",
    },
    icon: Waves,
    color: "text-cyan-600 bg-cyan-100",
  },
  {
    key: "massage-software",
    label: {
      en: "Massage practices",
      nl: "Massagepraktijken",
      fi: "Hierontapalvelut",
    },
    desc: {
      en: "Bookings and health questionnaires",
      nl: "Boekingen en gezondheidsvragenlijsten",
      fi: "Varaukset ja terveyskyselyt",
    },
    icon: Hand,
    color: "text-amber-600 bg-amber-100",
  },
];

const allFeaturesLabel: L10n = {
  en: "View all features",
  nl: "Bekijk alle functies",
  fi: "Näytä kaikki ominaisuudet",
};

const shopLabel: L10n = {
  en: "Shop",
  nl: "Shop",
  fi: "Kauppa",
};
const shopDesc: L10n = {
  en: "Product sales and inventory",
  nl: "Productverkoop en voorraad",
  fi: "Tuotemyynti ja varasto",
};

const websiteLabel: L10n = {
  en: "Studio website",
  nl: "Studio-website",
  fi: "Studion verkkosivusto",
};
const websiteDesc: L10n = {
  en: "Custom website for your studio",
  nl: "Website op maat voor jouw studio",
  fi: "Räätälöity verkkosivusto studiollesi",
};

export default function NavigationEn({
  dict,
  locale = "us",
}: {
  dict: Dictionary;
  locale?: PrefixedMarket;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const market = locale;
  const lang = toNavLang(market);
  const base = marketPathPrefix[market];
  const ctaPath = getPrimaryCtaPath(market);
  const ctaExternal = isExternalCta(market);
  const ctaLabel = ctaExternal ? dict.nav.tryFree : dict.nav.requestAccess;
  const loginUrl = APP_LOGIN_BY_MARKET[market] ?? APP_LOGIN_BY_MARKET.us;

  const featureLinks = featureDefs.map((item) => ({
    href: `${base}/${item.slug}`,
    label: item.label[lang],
    desc: item.desc[lang],
    icon: item.icon,
    color: item.color,
  }));

  const industryLinks = industryDefs.map((item) => ({
    href: `${base}/${EN_SLUGS[item.key]}`,
    label: item.label[lang],
    desc: item.desc[lang],
    icon: item.icon,
    color: item.color,
    key: item.key,
  }));

  const featuresOverviewHref = `${base}/${EN_SLUGS.features}`;
  const shopHref = `${base}/${EN_SLUGS.shop}`;
  const websiteHref = `${base}/${EN_SLUGS["studio-website"]}`;
  const pricingHref = `${base}/${EN_SLUGS.pricing}`;
  const contactHref = `${base}/${EN_SLUGS.contact}`;

  const ctaClass =
    "bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors";

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={base || "/"} className="flex items-center">
            <img
              src="/images/logos/treatflow-logo.svg"
              alt="Treatflow Logo"
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">
                {dict.nav.features}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full -left-4 mt-2 w-[540px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                <div className="grid grid-cols-2 gap-1">
                  {featureLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}
                      >
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-100 mt-3 pt-3">
                  <Link
                    href={featuresOverviewHref}
                    className="block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 py-2 rounded-lg hover:bg-indigo-50 transition-colors mb-2"
                  >
                    {allFeaturesLabel[lang]}
                  </Link>
                </div>
                <div className="border-t border-gray-100 pt-3 grid grid-cols-2 gap-1">
                  <Link
                    href={shopHref}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-amber-600 bg-amber-100">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{shopLabel[lang]}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{shopDesc[lang]}</div>
                    </div>
                  </Link>
                  <Link
                    href={websiteHref}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-indigo-600 bg-indigo-100">
                      <Globe className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{websiteLabel[lang]}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{websiteDesc[lang]}</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">
                {dict.nav.industries}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full -left-4 mt-2 w-[540px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                <div className="grid grid-cols-2 gap-1">
                  {industryLinks.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}
                      >
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={pricingHref}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {dict.nav.pricing}
            </Link>
            <Link
              href={contactHref}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {dict.nav.contact}
            </Link>
            <a
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {dict.nav.login}
            </a>
            <LanguageSwitcher current={market} />
            {ctaExternal ? (
              <a href={ctaPath} target="_blank" rel="noopener noreferrer" className={ctaClass}>
                {ctaLabel}
              </a>
            ) : (
              <Link href={ctaPath} className={ctaClass}>
                {ctaLabel}
              </Link>
            )}
          </div>

          <button
            type="button"
            className="lg:hidden text-gray-700"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            {dict.nav.features}
          </p>
          {featureLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 pl-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setMobileOpen(false)}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}
              >
                <item.icon className="h-4 w-4" />
              </div>
              {item.label}
            </Link>
          ))}
          <Link
            href={featuresOverviewHref}
            className="block pl-2 text-sm font-medium text-indigo-600"
            onClick={() => setMobileOpen(false)}
          >
            {allFeaturesLabel[lang]}
          </Link>
          <Link
            href={shopHref}
            className="block pl-2 text-sm font-medium text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            {shopLabel[lang]}
          </Link>
          <Link
            href={websiteHref}
            className="block pl-2 text-sm font-medium text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            {websiteLabel[lang]}
          </Link>

          <div className="border-t border-gray-100 pt-3" />
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            {dict.nav.industries}
          </p>
          {industryLinks.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="flex items-center gap-3 pl-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setMobileOpen(false)}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}
              >
                <item.icon className="h-4 w-4" />
              </div>
              {item.label}
            </Link>
          ))}

          <div className="border-t border-gray-100 pt-3" />
          <Link
            href={pricingHref}
            className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
            onClick={() => setMobileOpen(false)}
          >
            {dict.nav.pricing}
          </Link>
          <Link
            href={contactHref}
            className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
            onClick={() => setMobileOpen(false)}
          >
            {dict.nav.contact}
          </Link>
          <a
            href={loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
          >
            {dict.nav.login}
          </a>
          <div className="pt-2">
            <LanguageSwitcher current={market} />
          </div>
          {ctaExternal ? (
            <a
              href={ctaPath}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-indigo-600 text-white text-center px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              {ctaLabel}
            </a>
          ) : (
            <Link
              href={ctaPath}
              className="block bg-indigo-600 text-white text-center px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
