import Link from "next/link";
import type { Dictionary } from "../i18n/dictionaries";
import {
  isBundleLang,
  marketHomePath,
  marketLabels,
  marketPathPrefix,
  switchableMarkets,
  type PrefixedMarket,
} from "../i18n/config";
import {
  APP_LOGIN_BY_MARKET,
  getPrimaryCtaPath,
  isExternalCta,
} from "../i18n/market-access";
import { marketPagePath } from "../i18n/market-routes";
import type { IndustryPageKey } from "../i18n/industry-slugs";
import CookieSettingsLink from "./CookieSettingsLink";
import { chromeLangFromMarket, getUiChrome, type ChromeLang } from "../i18n/markets/ui-chrome";

/** fi ist keine Live-Sprache mehr; Eintraege bleiben erhalten. */
type NavLang = ChromeLang | "fi";

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
    forms: "Consultation & consent",
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
    docs: "Behandeldocumentatie",
    messaging: "Berichten",
    integrations: "Integraties",
    features: "Alle functies",
    shop: "Shop",
    website: "Salonwebsite",
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
  tr: {
    calendar: "Randevu takvimi",
    vouchers: "Hediye çeki",
    booking: "Online randevu",
    records: "Müşteri takibi",
    forms: "Onam formları",
    docs: "İşlem kayıtları",
    messaging: "Hatırlatmalar",
    integrations: "Entegrasyonlar",
    features: "Tüm özellikler",
    shop: "Mağaza",
    website: "Salon web sitesi",
  },
  it: {
    calendar: "Calendario appuntamenti",
    vouchers: "Buoni regalo",
    booking: "Prenotazioni online",
    records: "Schede clienti",
    forms: "Anamnesi e consenso",
    docs: "Documentazione trattamenti",
    messaging: "Promemoria",
    integrations: "Integrazioni",
    features: "Tutte le funzioni",
    shop: "Negozio",
    website: "Sito web del centro",
  },
  pl: {
    calendar: "Kalendarz wizyt",
    vouchers: "Bony podarunkowe",
    booking: "Rezerwacje online",
    records: "Kartoteka klientów",
    forms: "Wywiad i zgody",
    docs: "Dokumentacja zabiegów",
    messaging: "Przypomnienia",
    integrations: "Integracje",
    features: "Wszystkie funkcje",
    shop: "Sklep",
    website: "Strona salonu",
  },
  es: {
    calendar: "Agenda de citas",
    vouchers: "Tarjetas regalo",
    booking: "Reservas online",
    records: "Fichas de clientes",
    forms: "Consulta y consentimiento",
    docs: "Documentación de tratamientos",
    messaging: "Recordatorios",
    integrations: "Integraciones",
    features: "Todas las funciones",
    shop: "Tienda",
    website: "Web del centro",
  },
  fr: {
    calendar: "Agenda des rendez-vous",
    vouchers: "Cartes cadeaux",
    booking: "Réservation en ligne",
    records: "Fiches clients",
    forms: "Questionnaires et consentements",
    docs: "Documentation des soins",
    messaging: "Rappels",
    integrations: "Intégrations",
    features: "Toutes les fonctionnalités",
    shop: "Boutique",
    website: "Site web de l'institut",
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
    "beauty-salon-software": "Schoonheidssalons",
    "laser-hair-removal-software": "Laserontharing",
    "permanent-makeup-software": "Permanente make-up",
    "aesthetic-clinic-software": "Esthetische klinieken",
    "tattoo-studio-software": "Tattoostudio's",
    "nail-salon-software": "Nagelstudio's",
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
  tr: {
    "beauty-salon-software": "Güzellik salonları",
    "laser-hair-removal-software": "Lazer epilasyon",
    "permanent-makeup-software": "Kalıcı makyaj",
    "aesthetic-clinic-software": "Medikal estetik merkezleri",
    "tattoo-studio-software": "Dövme stüdyoları",
    "nail-salon-software": "Tırnak salonları",
    "lash-studio-software": "Kirpik stüdyoları",
    "spa-wellness-software": "Spa ve wellness",
    "massage-software": "Masaj merkezleri",
  },
  it: {
    "beauty-salon-software": "Centri estetici",
    "laser-hair-removal-software": "Epilazione laser",
    "permanent-makeup-software": "Trucco permanente",
    "aesthetic-clinic-software": "Cliniche estetiche",
    "tattoo-studio-software": "Studi di tatuaggi",
    "nail-salon-software": "Centri unghie",
    "lash-studio-software": "Extension ciglia",
    "spa-wellness-software": "Spa e wellness",
    "massage-software": "Centri massaggi",
  },
  pl: {
    "beauty-salon-software": "Salony kosmetyczne",
    "laser-hair-removal-software": "Depilacja laserowa",
    "permanent-makeup-software": "Makijaż permanentny",
    "aesthetic-clinic-software": "Gabinety medycyny estetycznej",
    "tattoo-studio-software": "Studia tatuażu",
    "nail-salon-software": "Salony paznokci",
    "lash-studio-software": "Stylizacja rzęs",
    "spa-wellness-software": "Spa i wellness",
    "massage-software": "Gabinety masażu",
  },
  es: {
    "beauty-salon-software": "Centros de estética",
    "laser-hair-removal-software": "Depilación láser",
    "permanent-makeup-software": "Micropigmentación",
    "aesthetic-clinic-software": "Clínicas estéticas",
    "tattoo-studio-software": "Estudios de tatuaje",
    "nail-salon-software": "Salones de uñas",
    "lash-studio-software": "Estudios de pestañas",
    "spa-wellness-software": "Spa y wellness",
    "massage-software": "Centros de masaje",
  },
  fr: {
    "beauty-salon-software": "Instituts de beauté",
    "laser-hair-removal-software": "Épilation laser",
    "permanent-makeup-software": "Maquillage permanent",
    "aesthetic-clinic-software": "Cliniques esthétiques",
    "tattoo-studio-software": "Salons de tatouage",
    "nail-salon-software": "Ongleries",
    "lash-studio-software": "Extensions de cils",
    "spa-wellness-software": "Spa et bien-être",
    "massage-software": "Centres de massage",
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
  locale?: PrefixedMarket;
}) {
  const market = locale;
  const lang = chromeLangFromMarket(market);
  const bundle = isBundleLang(market);
  const page = (key: Parameters<typeof marketPagePath>[1]) => marketPagePath(market, key);
  const base = marketPathPrefix[market];
  const labels = featureLabels[lang];
  const industries = industryLabels[lang];
  const ctaPath = getPrimaryCtaPath(market);
  const ctaExternal = isExternalCta(market);
  const ctaLabel = ctaExternal ? dict.footer.tryFree : dict.footer.requestAccess;
  const loginUrl = APP_LOGIN_BY_MARKET[market] ?? APP_LOGIN_BY_MARKET.en;
  const chrome = getUiChrome(market);

  const featureLinks = [
    { href: page("appointment-calendar"), label: labels.calendar },
    // Gutscheine: nur TR ausgeblendet
    ...(market === "tr" ? [] : [{ href: page("vouchers"), label: labels.vouchers }]),
    { href: page("online-booking"), label: labels.booking },
    { href: page("client-records"), label: labels.records },
    { href: page("forms"), label: labels.forms },
    { href: page("treatment-documentation"), label: labels.docs },
    { href: page("messaging"), label: labels.messaging },
    { href: page("integrations"), label: labels.integrations },
    { href: page("features"), label: labels.features },
    { href: page("shop"), label: labels.shop },
    { href: page("studio-website"), label: labels.website },
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
              {market === "tr" && (
                <li>
                  <Link
                    href="/tr/guzellik-merkezi-programi"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Güzellik merkezleri
                  </Link>
                </li>
              )}
              {industryOrder.map((key) => (
                <li key={key}>
                  <Link
                    href={page(key)}
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
                  href={page("about")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  href={page("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.contact}
                </Link>
              </li>
              {market !== "tr" && !bundle && (
                <li>
                  <Link
                    href={page("news")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {dict.nav.news}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href={`${base}/blog`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {chrome.blog}
                </Link>
              </li>
              {market === "tr" && (
                <li>
                  <Link
                    href="/tr/rehber"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Rehber
                  </Link>
                </li>
              )}
              {!bundle && (
                <li>
                  <Link
                    href={page("try-forms")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {chrome.trySampleForms}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href={page("software-comparison")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {chrome.softwareComparison}
                </Link>
              </li>
              <li>
                <Link
                  href={page("treatflow-vs-fresha")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {chrome.vsFresha}
                </Link>
              </li>
              <li>
                <Link
                  href={page("treatflow-vs-treatwell")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {chrome.vsTreatwell}
                </Link>
              </li>
              <li>
                <Link
                  href={page("pricing")}
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
                  href={page("privacy")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <CookieSettingsLink
                  label={chrome.cookieSettings}
                  className="text-gray-400 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-sm"
                />
              </li>
              <li>
                <Link
                  href={page("terms")}
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
            {switchableMarkets.map((m) => (
              <Link
                key={m}
                href={marketHomePath(m)}
                hrefLang={m}
                lang={m}
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
