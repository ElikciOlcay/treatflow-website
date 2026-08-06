import Link from "next/link";
import type { Dictionary } from "../i18n/dictionaries";
import {
  marketHomePath,
  marketLabels,
  markets,
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

const featureLabels: Record<
  NavLang,
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
  nl: {
    calendar: "Afsprakenkalender",
    vouchers: "Cadeaubonnen",
    booking: "Online boeken",
    records: "Klantendossiers",
    forms: "Formulieren",
    docs: "Behandelingsdocumentatie",
    messaging: "Berichten",
    integrations: "Integraties",
    features: "Alle functies",
    shop: "Shop",
    website: "Studio-website",
  },
  fi: {
    calendar: "Ajanvarauskalenteri",
    vouchers: "Lahjakortit",
    booking: "Verkkovaraus",
    records: "Asiakaskortistot",
    forms: "Lomakkeet",
    docs: "Hoitodokumentaatio",
    messaging: "Viestintä",
    integrations: "Integraatiot",
    features: "Kaikki ominaisuudet",
    shop: "Kauppa",
    website: "Studion verkkosivusto",
  },
};

const industryLabels: Record<NavLang, Record<IndustryPageKey, string>> = {
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
  nl: {
    "beauty-salon-software": "Beauty salons",
    "laser-hair-removal-software": "Laserontharing",
    "permanent-makeup-software": "Permanente make-up",
    "aesthetic-clinic-software": "Esthetische klinieken",
    "tattoo-studio-software": "Tattoostudio's",
    "nail-salon-software": "Nagelsalons",
    "lash-studio-software": "Wimperstudio's",
    "spa-wellness-software": "Spa & wellness",
    "massage-software": "Massagepraktijken",
  },
  fi: {
    "beauty-salon-software": "Kauneussalongit",
    "laser-hair-removal-software": "Laserkarvanpoisto",
    "permanent-makeup-software": "Pysyvä meikki",
    "aesthetic-clinic-software": "Esteettiset klinikat",
    "tattoo-studio-software": "Tatuointistudiot",
    "nail-salon-software": "Kynsisalongit",
    "lash-studio-software": "Ripsistudiot",
    "spa-wellness-software": "Spa & wellness",
    "massage-software": "Hierontapalvelut",
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
  locale = "us",
}: {
  dict: Dictionary;
  locale?: PrefixedMarket;
}) {
  const market = locale;
  const lang = toNavLang(market);
  const base = marketPathPrefix[market];
  const labels = featureLabels[lang];
  const industries = industryLabels[lang];
  const ctaPath = getPrimaryCtaPath(market);
  const ctaExternal = isExternalCta(market);
  const ctaLabel = ctaExternal ? dict.footer.tryFree : dict.footer.requestAccess;
  const loginUrl = APP_LOGIN_BY_MARKET[market] ?? APP_LOGIN_BY_MARKET.us;

  const featureLinks = [
    { href: `${base}/${EN_SLUGS["appointment-calendar"]}`, label: labels.calendar },
    { href: `${base}/${EN_SLUGS.vouchers}`, label: labels.vouchers },
    { href: `${base}/${EN_SLUGS["online-booking"]}`, label: labels.booking },
    { href: `${base}/${EN_SLUGS["client-records"]}`, label: labels.records },
    { href: `${base}/${EN_SLUGS.forms}`, label: labels.forms },
    { href: `${base}/${EN_SLUGS["treatment-documentation"]}`, label: labels.docs },
    { href: `${base}/${EN_SLUGS.messaging}`, label: labels.messaging },
    { href: `${base}/${EN_SLUGS.integrations}`, label: labels.integrations },
    { href: `${base}/${EN_SLUGS.features}`, label: labels.features },
    { href: `${base}/${EN_SLUGS.shop}`, label: labels.shop },
    { href: `${base}/${EN_SLUGS["studio-website"]}`, label: labels.website },
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
                    href={`${base}/${EN_SLUGS[key]}`}
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
                  href={`${base}/${EN_SLUGS.about}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/${EN_SLUGS.contact}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/${EN_SLUGS.pricing}`}
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
                  href={`${base}/${EN_SLUGS.privacy}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/${EN_SLUGS.terms}`}
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
            {markets.map((m) => (
              <Link
                key={m}
                href={marketHomePath(m)}
                className="hover:text-white transition-colors"
              >
                {marketLabels[m]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
