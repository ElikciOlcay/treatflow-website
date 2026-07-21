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

type NavLocale = Extract<Locale, "en" | "es" | "it" | "fr">;

const featureDefs = [
  {
    slug: {
      en: "appointment-calendar",
      es: "calendario-citas",
      it: "calendario-appuntamenti",
      fr: "calendrier-rendez-vous",
    },
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
    slug: {
      en: "online-booking",
      es: "reservas-online",
      it: "prenotazioni-online",
      fr: "reservation-en-ligne",
    },
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
    slug: {
      en: "client-records",
      es: "fichas-clientes",
      it: "schede-clienti",
      fr: "fiches-clients",
    },
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
    slug: {
      en: "forms",
      es: "formularios",
      it: "moduli",
      fr: "formulaires",
    },
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
    slug: {
      en: "treatment-documentation",
      es: "documentacion-tratamientos",
      it: "documentazione-trattamenti",
      fr: "documentation-soins",
    },
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
] as const;

const pricingContact: Record<NavLocale, { pricing: string; contact: string }> = {
  en: { pricing: "pricing", contact: "contact" },
  es: { pricing: "precios", contact: "contacto" },
  it: { pricing: "prezzi", contact: "contatto" },
  fr: { pricing: "tarifs", contact: "contact" },
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
  const routes = pricingContact[locale];

  const featureLinks = featureDefs.map((item) => ({
    href: `${base}/${item.slug[locale]}`,
    label: item.label[locale],
    desc: item.desc[locale],
    icon: item.icon,
    color: item.color,
  }));

  const links = [
    { href: `${base}/${routes.pricing}`, label: dict.nav.pricing },
    { href: `${base}/${routes.contact}`, label: dict.nav.contact },
  ];

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
              <div className="absolute top-full -left-4 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
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
            </div>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
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
          <div className="border-t border-gray-100 pt-3" />
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
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
