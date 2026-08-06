import Link from "next/link";
import type { Dictionary } from "../i18n/dictionaries";
import type { Locale } from "../i18n/config";
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

const featureLabels: Record<
  NavLocale,
  {
    calendar: string;
    vouchers: string;
    booking: string;
    records: string;
    forms: string;
    docs: string;
    messaging: string;
    integrations: string;
    features: string;
    shop: string;
    website: string;
  }
> = {
  en: {
    calendar: "Appointment calendar",
    vouchers: "Vouchers",
    booking: "Online booking",
    records: "Client records",
    forms: "Forms",
    docs: "Treatment documentation",
    messaging: "Messaging",
    integrations: "Integrations",
    features: "All features",
    shop: "Shop",
    website: "Studio website",
  },
  es: {
    calendar: "Calendario de citas",
    vouchers: "Vales",
    booking: "Reservas online",
    records: "Fichas de clientes",
    forms: "Formularios",
    docs: "Documentación de tratamientos",
    messaging: "Mensajería",
    integrations: "Integraciones",
    features: "Todas las funciones",
    shop: "Tienda",
    website: "Web para salones",
  },
  it: {
    calendar: "Calendario appuntamenti",
    vouchers: "Buoni regalo",
    booking: "Prenotazioni online",
    records: "Schede clienti",
    forms: "Moduli",
    docs: "Documentazione trattamenti",
    messaging: "Messaggistica",
    integrations: "Integrazioni",
    features: "Tutte le funzionalità",
    shop: "Negozio",
    website: "Sito web del centro",
  },
  fr: {
    calendar: "Calendrier de rendez-vous",
    vouchers: "Bons cadeaux",
    booking: "Réservation en ligne",
    records: "Fiches clients",
    forms: "Formulaires",
    docs: "Documentation des soins",
    messaging: "Messagerie",
    integrations: "Intégrations",
    features: "Toutes les fonctionnalités",
    shop: "Boutique",
    website: "Site web institut",
  },
};

const industryLabels: Record<NavLocale, Record<IndustryPageKey, string>> = {
  en: {
    "beauty-salon-software": "Beauty salons",
    "laser-hair-removal-software": "Laser hair removal",
    "permanent-makeup-software": "Permanent makeup",
    "aesthetic-clinic-software": "Aesthetic clinics",
    "tattoo-studio-software": "Tattoo studios",
    "nail-salon-software": "Nail salons",
    "lash-studio-software": "Lash studios",
    "spa-wellness-software": "Spa & wellness",
    "massage-software": "Massage practices",
  },
  es: {
    "beauty-salon-software": "Salones de belleza",
    "laser-hair-removal-software": "Depilación láser",
    "permanent-makeup-software": "Maquillaje permanente",
    "aesthetic-clinic-software": "Clínicas estéticas",
    "tattoo-studio-software": "Estudios de tatuajes",
    "nail-salon-software": "Salones de uñas",
    "lash-studio-software": "Estudios de pestañas",
    "spa-wellness-software": "Spa y wellness",
    "massage-software": "Centros de masajes",
  },
  it: {
    "beauty-salon-software": "Centri estetici",
    "laser-hair-removal-software": "Epilazione laser",
    "permanent-makeup-software": "Trucco permanente",
    "aesthetic-clinic-software": "Cliniche estetiche",
    "tattoo-studio-software": "Studi di tatuaggi",
    "nail-salon-software": "Centri unghie",
    "lash-studio-software": "Studi ciglia",
    "spa-wellness-software": "Spa e wellness",
    "massage-software": "Studi di massaggi",
  },
  fr: {
    "beauty-salon-software": "Instituts de beauté",
    "laser-hair-removal-software": "Épilation laser",
    "permanent-makeup-software": "Maquillage permanent",
    "aesthetic-clinic-software": "Cliniques esthétiques",
    "tattoo-studio-software": "Salons de tatouage",
    "nail-salon-software": "Salons d'ongles",
    "lash-studio-software": "Studios de cils",
    "spa-wellness-software": "Spa et wellness",
    "massage-software": "Cabinets de massage",
  },
};

const industryOrder: IndustryPageKey[] = [
  "beauty-salon-software",
  "laser-hair-removal-software",
  "permanent-makeup-software",
  "aesthetic-clinic-software",
  "tattoo-studio-software",
  "nail-salon-software",
  "lash-studio-software",
  "spa-wellness-software",
  "massage-software",
];

export default function FooterEn({
  dict,
  locale = "en",
}: {
  dict: Dictionary;
  locale?: NavLocale;
}) {
  const labels = featureLabels[locale];
  const industries = industryLabels[locale];
  const ctaPath = getPrimaryCtaPath(locale);
  const ctaExternal = isExternalCta(locale);
  const ctaLabel = ctaExternal ? dict.footer.tryFree : dict.footer.requestAccess;
  const loginUrl = APP_LOGIN_BY_LOCALE[locale] ?? APP_LOGIN_BY_LOCALE.en!;
  const l = locale as IntlLocale;

  const featureLinks = [
    { href: `/${locale}/${coreFeatureSlugs["appointment-calendar"][locale]}`, label: labels.calendar },
    { href: `/${locale}/${extraFeatureSlugs.vouchers[locale]}`, label: labels.vouchers },
    { href: `/${locale}/${coreFeatureSlugs["online-booking"][locale]}`, label: labels.booking },
    { href: `/${locale}/${coreFeatureSlugs["client-records"][locale]}`, label: labels.records },
    { href: `/${locale}/${coreFeatureSlugs.forms[locale]}`, label: labels.forms },
    { href: `/${locale}/${coreFeatureSlugs["treatment-documentation"][locale]}`, label: labels.docs },
    { href: `/${locale}/${extraFeatureSlugs.messaging[locale]}`, label: labels.messaging },
    { href: `/${locale}/${extraFeatureSlugs.integrations[locale]}`, label: labels.integrations },
    { href: `/${locale}/${extraFeatureSlugs.features[locale]}`, label: labels.features },
    { href: `/${locale}/${extraFeatureSlugs.shop[locale]}`, label: labels.shop },
    { href: `/${locale}/${extraFeatureSlugs["studio-website"][locale]}`, label: labels.website },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
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
              {featureLinks.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.industries}</h3>
            <ul className="space-y-2 text-sm">
              {industryOrder.map((key) => (
                <li key={key}>
                  <Link
                    href={industryPath(l, key)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {industries[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.company}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={productPath(l, "about")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  href={productPath(l, "contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={productPath(l, "pricing")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.pricing}
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
                <Link
                  href={productPath(l, "privacy")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={productPath(l, "terms")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.terms}
                </Link>
              </li>
              {featureLinks.slice(7).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
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
