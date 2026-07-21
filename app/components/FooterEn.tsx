import Link from "next/link";
import type { Dictionary } from "../i18n/dictionaries";
import type { Locale } from "../i18n/config";
import { localePathPrefix } from "../i18n/config";
import {
  APP_LOGIN_BY_LOCALE,
  getPrimaryCtaPath,
  isExternalCta,
} from "../i18n/market-access";

type NavLocale = Extract<Locale, "en" | "es" | "it" | "fr">;

const labels: Record<
  NavLocale,
  { calendar: string; booking: string; records: string; forms: string; docs: string }
> = {
  en: {
    calendar: "Appointment calendar",
    booking: "Online booking",
    records: "Client records",
    forms: "Forms",
    docs: "Treatment documentation",
  },
  es: {
    calendar: "Calendario de citas",
    booking: "Reservas online",
    records: "Fichas de clientes",
    forms: "Formularios",
    docs: "Documentación de tratamientos",
  },
  it: {
    calendar: "Calendario appuntamenti",
    booking: "Prenotazioni online",
    records: "Schede clienti",
    forms: "Moduli",
    docs: "Documentazione trattamenti",
  },
  fr: {
    calendar: "Calendrier de rendez-vous",
    booking: "Réservation en ligne",
    records: "Fiches clients",
    forms: "Formulaires",
    docs: "Documentation des soins",
  },
};

function pathsFor(locale: NavLocale) {
  const base = localePathPrefix[locale];
  const map: Record<
    NavLocale,
    {
      home: string;
      pricing: string;
      contact: string;
      about: string;
      privacy: string;
      terms: string;
      calendar: string;
      booking: string;
      records: string;
      forms: string;
      docs: string;
    }
  > = {
    en: {
      home: base,
      pricing: `${base}/pricing`,
      contact: `${base}/contact`,
      about: `${base}/about`,
      privacy: `${base}/privacy`,
      terms: `${base}/terms`,
      calendar: `${base}/appointment-calendar`,
      booking: `${base}/online-booking`,
      records: `${base}/client-records`,
      forms: `${base}/forms`,
      docs: `${base}/treatment-documentation`,
    },
    es: {
      home: base,
      pricing: `${base}/precios`,
      contact: `${base}/contacto`,
      about: `${base}/sobre-nosotros`,
      privacy: `${base}/privacidad`,
      terms: `${base}/terminos`,
      calendar: `${base}/calendario-citas`,
      booking: `${base}/reservas-online`,
      records: `${base}/fichas-clientes`,
      forms: `${base}/formularios`,
      docs: `${base}/documentacion-tratamientos`,
    },
    it: {
      home: base,
      pricing: `${base}/prezzi`,
      contact: `${base}/contatto`,
      about: `${base}/chi-siamo`,
      privacy: `${base}/privacy`,
      terms: `${base}/termini`,
      calendar: `${base}/calendario-appuntamenti`,
      booking: `${base}/prenotazioni-online`,
      records: `${base}/schede-clienti`,
      forms: `${base}/moduli`,
      docs: `${base}/documentazione-trattamenti`,
    },
    fr: {
      home: base,
      pricing: `${base}/tarifs`,
      contact: `${base}/contact`,
      about: `${base}/a-propos`,
      privacy: `${base}/confidentialite`,
      terms: `${base}/conditions`,
      calendar: `${base}/calendrier-rendez-vous`,
      booking: `${base}/reservation-en-ligne`,
      records: `${base}/fiches-clients`,
      forms: `${base}/formulaires`,
      docs: `${base}/documentation-soins`,
    },
  };
  return map[locale];
}

export default function FooterEn({
  dict,
  locale = "en",
}: {
  dict: Dictionary;
  locale?: NavLocale;
}) {
  const paths = pathsFor(locale);
  const featureLabels = labels[locale];
  const ctaPath = getPrimaryCtaPath(locale);
  const ctaExternal = isExternalCta(locale);
  const ctaLabel = ctaExternal ? dict.footer.tryFree : dict.footer.requestAccess;
  const loginUrl = APP_LOGIN_BY_LOCALE[locale] ?? APP_LOGIN_BY_LOCALE.en!;

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src="/images/logos/treatflow-logo.png"
              alt="Treatflow Logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">{dict.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.features}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={paths.calendar} className="text-gray-400 hover:text-white transition-colors">
                  {featureLabels.calendar}
                </Link>
              </li>
              <li>
                <Link href={paths.booking} className="text-gray-400 hover:text-white transition-colors">
                  {featureLabels.booking}
                </Link>
              </li>
              <li>
                <Link href={paths.records} className="text-gray-400 hover:text-white transition-colors">
                  {featureLabels.records}
                </Link>
              </li>
              <li>
                <Link href={paths.forms} className="text-gray-400 hover:text-white transition-colors">
                  {featureLabels.forms}
                </Link>
              </li>
              <li>
                <Link href={paths.docs} className="text-gray-400 hover:text-white transition-colors">
                  {featureLabels.docs}
                </Link>
              </li>
              <li>
                <Link href={paths.pricing} className="text-gray-400 hover:text-white transition-colors">
                  {dict.footer.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.company}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={paths.about} className="text-gray-400 hover:text-white transition-colors">
                  {dict.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={paths.contact} className="text-gray-400 hover:text-white transition-colors">
                  {dict.footer.contact}
                </Link>
              </li>
              <li>
                {ctaExternal ? (
                  <a
                    href={ctaPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {ctaLabel}
                  </a>
                ) : (
                  <Link href={ctaPath} className="text-gray-400 hover:text-white transition-colors">
                    {ctaLabel}
                  </Link>
                )}
              </li>
              <li>
                <a
                  href={loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.login}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={paths.privacy} className="text-gray-400 hover:text-white transition-colors">
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={paths.terms} className="text-gray-400 hover:text-white transition-colors">
                  {dict.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col sm:flex-row justify-between gap-4">
          <span>
            © {new Date().getFullYear()} Treatflow. {dict.footer.rights}
          </span>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="hover:text-white transition-colors">
              Deutsch
            </Link>
            <Link href="/en" className="hover:text-white transition-colors">
              English
            </Link>
            <Link href="/es" className="hover:text-white transition-colors">
              Español
            </Link>
            <Link href="/it" className="hover:text-white transition-colors">
              Italiano
            </Link>
            <Link href="/fr" className="hover:text-white transition-colors">
              Français
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
