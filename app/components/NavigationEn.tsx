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
import type { Locale } from "../i18n/config";
import { localePathPrefix } from "../i18n/config";
import {
  APP_LOGIN_BY_LOCALE,
  getPrimaryCtaPath,
  isExternalCta,
} from "../i18n/market-access";
import {
  coreFeatureSlugs,
  extraFeatureSlugs,
  industryPath,
  productPath,
  type IntlLocale,
} from "../i18n/intl-routes";
import type { IndustryPageKey } from "../i18n/industry-slugs";

type NavLocale = Extract<Locale, "en" | "es" | "it" | "fr">;

type L10n = Record<NavLocale, string>;

const featureDefs: {
  slug: Record<NavLocale, string>;
  label: L10n;
  desc: L10n;
  icon: typeof Calendar;
  color: string;
}[] = [
  {
    slug: coreFeatureSlugs["appointment-calendar"],
    label: {
      en: "Appointment calendar",
      es: "Calendario de citas",
      it: "Calendario appuntamenti",
      fr: "Calendrier de rendez-vous",
    },
    desc: {
      en: "Daily, weekly and monthly views",
      es: "Vistas diaria, semanal y mensual",
      it: "Viste giornaliera, settimanale e mensile",
      fr: "Vues journalière, hebdomadaire et mensuelle",
    },
    icon: Calendar,
    color: "text-indigo-600 bg-indigo-100",
  },
  {
    slug: extraFeatureSlugs.vouchers,
    label: {
      en: "Vouchers",
      es: "Vales",
      it: "Buoni regalo",
      fr: "Bons cadeaux",
    },
    desc: {
      en: "Sell, redeem and track balances",
      es: "Vende, canjea y controla saldos",
      it: "Vendi, riscatta e gestisci residui",
      fr: "Vendez, utilisez et suivez les soldes",
    },
    icon: Gift,
    color: "text-purple-600 bg-purple-100",
  },
  {
    slug: coreFeatureSlugs["online-booking"],
    label: {
      en: "Online booking",
      es: "Reservas online",
      it: "Prenotazioni online",
      fr: "Réservation en ligne",
    },
    desc: {
      en: "Personal booking link 24/7",
      es: "Enlace de reserva personal 24/7",
      it: "Link di prenotazione personale 24/7",
      fr: "Lien de réservation personnel 24/7",
    },
    icon: Link2,
    color: "text-rose-600 bg-rose-100",
  },
  {
    slug: coreFeatureSlugs["client-records"],
    label: {
      en: "Client records",
      es: "Fichas de clientes",
      it: "Schede clienti",
      fr: "Fiches clients",
    },
    desc: {
      en: "History, notes and photos",
      es: "Historial, notas y fotos",
      it: "Storico, note e foto",
      fr: "Historique, notes et photos",
    },
    icon: Users,
    color: "text-emerald-600 bg-emerald-100",
  },
  {
    slug: coreFeatureSlugs.forms,
    label: {
      en: "Forms",
      es: "Formularios",
      it: "Moduli",
      fr: "Formulaires",
    },
    desc: {
      en: "Digital intake and consent",
      es: "Anamnesis y consentimientos digitales",
      it: "Anamnesi e consensi digitali",
      fr: "Anamnèse et consentements numériques",
    },
    icon: ClipboardCheck,
    color: "text-orange-600 bg-orange-100",
  },
  {
    slug: coreFeatureSlugs["treatment-documentation"],
    label: {
      en: "Treatment documentation",
      es: "Documentación de tratamientos",
      it: "Documentazione trattamenti",
      fr: "Documentation des soins",
    },
    desc: {
      en: "Document treatments digitally",
      es: "Documenta tratamientos en digital",
      it: "Documenta i trattamenti in digitale",
      fr: "Documentez les soins en numérique",
    },
    icon: FileText,
    color: "text-blue-600 bg-blue-100",
  },
  {
    slug: extraFeatureSlugs.messaging,
    label: {
      en: "Messaging",
      es: "Mensajería",
      it: "Messaggistica",
      fr: "Messagerie",
    },
    desc: {
      en: "Automated email and SMS",
      es: "Email y SMS automatizados",
      it: "Email e SMS automatici",
      fr: "E-mails et SMS automatisés",
    },
    icon: Bell,
    color: "text-purple-600 bg-purple-100",
  },
  {
    slug: extraFeatureSlugs.integrations,
    label: {
      en: "Integrations",
      es: "Integraciones",
      it: "Integrazioni",
      fr: "Intégrations",
    },
    desc: {
      en: "Calendar, accounting and more",
      es: "Calendario, contabilidad y más",
      it: "Calendario, contabilità e altro",
      fr: "Calendrier, comptabilité et plus",
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
      es: "Salones de belleza",
      it: "Centri estetici",
      fr: "Instituts de beauté",
    },
    desc: {
      en: "All-in-one studio software",
      es: "Software todo en uno",
      it: "Software tutto-in-uno",
      fr: "Logiciel tout-en-un",
    },
    icon: Sparkles,
    color: "text-indigo-600 bg-indigo-100",
  },
  {
    key: "laser-hair-removal-software",
    label: {
      en: "Laser hair removal",
      es: "Depilación láser",
      it: "Epilazione laser",
      fr: "Épilation laser",
    },
    desc: {
      en: "Session tracking and consent",
      es: "Sesiones y consentimientos",
      it: "Sedute e consensi",
      fr: "Séances et consentements",
    },
    icon: Zap,
    color: "text-blue-600 bg-blue-100",
  },
  {
    key: "permanent-makeup-software",
    label: {
      en: "Permanent makeup",
      es: "Maquillaje permanente",
      it: "Trucco permanente",
      fr: "Maquillage permanent",
    },
    desc: {
      en: "PMU and microblading",
      es: "PMU y microblading",
      it: "PMU e microblading",
      fr: "PMU et microblading",
    },
    icon: Palette,
    color: "text-rose-600 bg-rose-100",
  },
  {
    key: "aesthetic-clinic-software",
    label: {
      en: "Aesthetic clinics",
      es: "Clínicas estéticas",
      it: "Cliniche estetiche",
      fr: "Cliniques esthétiques",
    },
    desc: {
      en: "Documentation and patient records",
      es: "Documentación y fichas",
      it: "Documentazione e schede",
      fr: "Documentation et fiches",
    },
    icon: Stethoscope,
    color: "text-teal-600 bg-teal-100",
  },
  {
    key: "tattoo-studio-software",
    label: {
      en: "Tattoo studios",
      es: "Estudios de tatuajes",
      it: "Studi di tatuaggi",
      fr: "Salons de tatouage",
    },
    desc: {
      en: "Consent and bookings",
      es: "Consentimientos y reservas",
      it: "Consensi e prenotazioni",
      fr: "Consentements et réservations",
    },
    icon: Pen,
    color: "text-gray-600 bg-gray-200",
  },
  {
    key: "nail-salon-software",
    label: {
      en: "Nail salons",
      es: "Salones de uñas",
      it: "Centri unghie",
      fr: "Salons d'ongles",
    },
    desc: {
      en: "Appointments and preferences",
      es: "Citas y preferencias",
      it: "Appuntamenti e preferenze",
      fr: "Rendez-vous et préférences",
    },
    icon: Gem,
    color: "text-pink-600 bg-pink-100",
  },
  {
    key: "lash-studio-software",
    label: {
      en: "Lash studios",
      es: "Estudios de pestañas",
      it: "Studi ciglia",
      fr: "Studios de cils",
    },
    desc: {
      en: "Extensions and refill planning",
      es: "Extensiones y rellenos",
      it: "Extension e refill",
      fr: "Extensions et refill",
    },
    icon: Eye,
    color: "text-violet-600 bg-violet-100",
  },
  {
    key: "spa-wellness-software",
    label: {
      en: "Spa & wellness",
      es: "Spa y wellness",
      it: "Spa e wellness",
      fr: "Spa et wellness",
    },
    desc: {
      en: "Guest management and bookings",
      es: "Gestión de huéspedes y reservas",
      it: "Gestione ospiti e prenotazioni",
      fr: "Gestion des hôtes et réservations",
    },
    icon: Waves,
    color: "text-cyan-600 bg-cyan-100",
  },
  {
    key: "massage-software",
    label: {
      en: "Massage practices",
      es: "Centros de masajes",
      it: "Studi di massaggi",
      fr: "Cabinets de massage",
    },
    desc: {
      en: "Bookings and health questionnaires",
      es: "Reservas y cuestionarios de salud",
      it: "Prenotazioni e questionari sanitari",
      fr: "Réservations et questionnaires santé",
    },
    icon: Hand,
    color: "text-amber-600 bg-amber-100",
  },
];

const allFeaturesLabel: L10n = {
  en: "View all features",
  es: "Ver todas las funciones",
  it: "Vedi tutte le funzionalità",
  fr: "Voir toutes les fonctionnalités",
};

const shopLabel: L10n = {
  en: "Shop",
  es: "Tienda",
  it: "Negozio",
  fr: "Boutique",
};
const shopDesc: L10n = {
  en: "Product sales and inventory",
  es: "Venta de productos y stock",
  it: "Vendita prodotti e magazzino",
  fr: "Vente de produits et stock",
};

const websiteLabel: L10n = {
  en: "Studio website",
  es: "Web para salones",
  it: "Sito web del centro",
  fr: "Site web institut",
};
const websiteDesc: L10n = {
  en: "Custom website for your studio",
  es: "Web a medida para tu salón",
  it: "Sito su misura per il tuo centro",
  fr: "Site sur mesure pour votre institut",
};

export default function NavigationEn({
  dict,
  locale = "en",
}: {
  dict: Dictionary;
  locale?: NavLocale;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const base = localePathPrefix[locale] || "/en";
  const ctaPath = getPrimaryCtaPath(locale);
  const ctaExternal = isExternalCta(locale);
  const ctaLabel = ctaExternal ? dict.nav.tryFree : dict.nav.requestAccess;
  const loginUrl = APP_LOGIN_BY_LOCALE[locale] ?? APP_LOGIN_BY_LOCALE.en!;

  const featureLinks = featureDefs.map((item) => ({
    href: `${base}/${item.slug[locale]}`,
    label: item.label[locale],
    desc: item.desc[locale],
    icon: item.icon,
    color: item.color,
  }));

  const industryLinks = industryDefs.map((item) => ({
    href: industryPath(locale as IntlLocale, item.key),
    label: item.label[locale],
    desc: item.desc[locale],
    icon: item.icon,
    color: item.color,
    key: item.key,
  }));

  const featuresOverviewHref = `${base}/${extraFeatureSlugs.features[locale]}`;
  const shopHref = `${base}/${extraFeatureSlugs.shop[locale]}`;
  const websiteHref = `${base}/${extraFeatureSlugs["studio-website"][locale]}`;
  const pricingHref = productPath(locale as IntlLocale, "pricing");
  const contactHref = productPath(locale as IntlLocale, "contact");

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
                    {allFeaturesLabel[locale]}
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
                      <div className="text-sm font-medium text-gray-900">{shopLabel[locale]}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{shopDesc[locale]}</div>
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
                      <div className="text-sm font-medium text-gray-900">{websiteLabel[locale]}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{websiteDesc[locale]}</div>
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
            <LanguageSwitcher current={locale} />
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
            {allFeaturesLabel[locale]}
          </Link>
          <Link
            href={shopHref}
            className="block pl-2 text-sm font-medium text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            {shopLabel[locale]}
          </Link>
          <Link
            href={websiteHref}
            className="block pl-2 text-sm font-medium text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            {websiteLabel[locale]}
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
            <LanguageSwitcher current={locale} />
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
