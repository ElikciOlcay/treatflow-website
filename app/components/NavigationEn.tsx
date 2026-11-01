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
  isBundleLang,
  marketPathPrefix,
  type PrefixedMarket,
} from "../i18n/config";
import {
  APP_LOGIN_BY_MARKET,
  getPrimaryCtaPath,
  isExternalCta,
} from "../i18n/market-access";
import { marketPagePath, type MarketPageSlug } from "../i18n/market-routes";
import type { IndustryPageKey } from "../i18n/industry-slugs";
import { chromeLangFromMarket, getUiChrome, type ChromeLang } from "../i18n/markets/ui-chrome";

/** fi ist keine Live-Sprache mehr; Eintraege bleiben optional erhalten. */
type L10n = Record<ChromeLang, string> & { fi?: string };
type FeatureGroupId = "appointments" | "clients" | "sales";

const featureGroupTitles: Record<FeatureGroupId, L10n> = {
  appointments: {
    en: "Appointments",
    nl: "Afspraken",
    fi: "Ajanvaraukset",
    tr: "Randevular",
    it: "Appuntamenti",
    pl: "Wizyty",
    es: "Citas",
    fr: "Rendez-vous",
  },
  clients: {
    en: "Clients",
    nl: "Klanten",
    fi: "Asiakkaat",
    tr: "Müşteriler",
    it: "Clienti",
    pl: "Klienci",
    es: "Clientes",
    fr: "Clients",
  },
  sales: {
    en: "Sales",
    nl: "Verkoop",
    fi: "Myynti",
    tr: "Satış",
    it: "Vendite",
    pl: "Sprzedaż",
    es: "Ventas",
    fr: "Ventes",
  },
};

const featureGroupOrder: FeatureGroupId[] = ["appointments", "clients", "sales"];

const featureDefs: {
  key: MarketPageSlug;
  group: FeatureGroupId;
  label: L10n;
  desc: L10n;
  icon: typeof Calendar;
  color: string;
}[] = [
  {
    key: "appointment-calendar",
    group: "appointments",
    label: {
      en: "Appointment calendar",
      nl: "Afsprakenkalender",
      fi: "Ajanvarauskalenteri",
      tr: "Randevu takvimi",
      it: "Calendario appuntamenti",
      pl: "Kalendarz wizyt",
      es: "Agenda de citas",
      fr: "Agenda des rendez-vous",
    },
    desc: {
      en: "Daily, weekly and monthly views",
      nl: "Dag-, week- en maandweergave",
      fi: "Päivä-, viikko- ja kuukausinäkymät",
      tr: "Günlük, haftalık ve aylık görünüm",
      it: "Vista giornaliera, settimanale e mensile",
      pl: "Widok dnia, tygodnia i miesiąca",
      es: "Vista diaria, semanal y mensual",
      fr: "Vues jour, semaine et mois",
    },
    icon: Calendar,
    color: "text-indigo-600 bg-indigo-100",
  },
  {
    key: "online-booking",
    group: "appointments",
    label: {
      en: "Online booking",
      nl: "Online boeken",
      fi: "Verkkovaraus",
      tr: "Online randevu",
      it: "Prenotazioni online",
      pl: "Rezerwacje online",
      es: "Reservas online",
      fr: "Réservation en ligne",
    },
    desc: {
      en: "Personal booking link 24/7",
      nl: "Persoonlijke boekingslink 24/7",
      fi: "Henkilökohtainen varauslinkki 24/7",
      tr: "Instagram, Google ve web'den 7/24 randevu",
      it: "Il tuo link di prenotazione 24/7",
      pl: "Własny link do rezerwacji 24/7",
      es: "Tu enlace de reservas 24/7",
      fr: "Votre lien de réservation 24h/24",
    },
    icon: Link2,
    color: "text-rose-600 bg-rose-100",
  },
  {
    key: "messaging",
    group: "appointments",
    label: {
      en: "Messaging",
      nl: "Berichten",
      fi: "Viestintä",
      tr: "Hatırlatmalar",
      it: "Promemoria",
      pl: "Przypomnienia",
      es: "Recordatorios",
      fr: "Rappels",
    },
    desc: {
      en: "Automated WhatsApp and email",
      nl: "Geautomatiseerde WhatsApp en e-mail",
      fi: "Automaattiset WhatsApp- ja sähköpostimuistutukset",
      tr: "Otomatik WhatsApp ve e-posta hatırlatması",
      it: "WhatsApp ed e-mail automatici",
      pl: "Automatyczne wiadomości WhatsApp i e-mail",
      es: "WhatsApp y e-mail automáticos",
      fr: "WhatsApp et e-mail automatisés",
    },
    icon: Bell,
    color: "text-purple-600 bg-purple-100",
  },
  {
    key: "client-records",
    group: "clients",
    label: {
      en: "Client records",
      nl: "Klantendossiers",
      fi: "Asiakaskortistot",
      tr: "Müşteri takibi",
      it: "Schede clienti",
      pl: "Kartoteka klientów",
      es: "Fichas de clientes",
      fr: "Fiches clients",
    },
    desc: {
      en: "History, notes and photos",
      nl: "Geschiedenis, notities en foto's",
      fi: "Historia, muistiinpanot ja kuvat",
      tr: "Geçmiş, notlar ve fotoğraflar",
      it: "Storico, note e foto",
      pl: "Historia, notatki i zdjęcia",
      es: "Historial, notas y fotos",
      fr: "Historique, notes et photos",
    },
    icon: Users,
    color: "text-emerald-600 bg-emerald-100",
  },
  {
    key: "forms",
    group: "clients",
    label: {
      en: "Consultation & consent",
      nl: "Formulieren",
      fi: "Lomakkeet",
      tr: "Onam formları",
      it: "Anamnesi e consenso",
      pl: "Wywiad i zgody",
      es: "Consulta y consentimiento",
      fr: "Questionnaires et consentements",
    },
    desc: {
      en: "Digital intake and consent",
      nl: "Digitale anamnese en toestemming",
      fi: "Digitaalinen anamneesi ja suostumus",
      tr: "Dijital anamnez ve onam",
      it: "Moduli digitali con firma",
      pl: "Cyfrowe formularze z podpisem",
      es: "Formularios digitales con firma",
      fr: "Formulaires numériques avec signature",
    },
    icon: ClipboardCheck,
    color: "text-orange-600 bg-orange-100",
  },
  {
    key: "treatment-documentation",
    group: "clients",
    label: {
      en: "Treatment documentation",
      nl: "Behandeldocumentatie",
      fi: "Hoitodokumentaatio",
      tr: "İşlem kayıtları",
      it: "Documentazione trattamenti",
      pl: "Dokumentacja zabiegów",
      es: "Documentación de tratamientos",
      fr: "Documentation des soins",
    },
    desc: {
      en: "Document treatments digitally",
      nl: "Documenteer behandelingen digitaal",
      fi: "Dokumentoi hoidot digitaalisesti",
      tr: "Seans notları ve öncesi-sonrası fotoğraf",
      it: "Documenta i trattamenti in digitale",
      pl: "Dokumentuj zabiegi cyfrowo",
      es: "Documenta los tratamientos en digital",
      fr: "Documentez vos soins en numérique",
    },
    icon: FileText,
    color: "text-blue-600 bg-blue-100",
  },
  {
    key: "vouchers",
    group: "sales",
    label: {
      en: "Vouchers",
      nl: "Cadeaubonnen",
      fi: "Lahjakortit",
      tr: "Hediye çeki",
      it: "Buoni regalo",
      pl: "Bony podarunkowe",
      es: "Tarjetas regalo",
      fr: "Cartes cadeaux",
    },
    desc: {
      en: "Sell, redeem and track balances",
      nl: "Verkoop, verzilver en volg saldi",
      fi: "Myy, lunasta ja seuraa saldoja",
      tr: "Satış, kullanım ve bakiye takibi",
      it: "Vendi, riscatta e controlla i saldi",
      pl: "Sprzedaż, realizacja i kontrola salda",
      es: "Vende, canjea y controla saldos",
      fr: "Vendez, encaissez et suivez les soldes",
    },
    icon: Gift,
    color: "text-purple-600 bg-purple-100",
  },
  {
    key: "shop",
    group: "sales",
    label: {
      en: "Shop",
      nl: "Shop",
      fi: "Kauppa",
      tr: "Mağaza",
      it: "Negozio",
      pl: "Sklep",
      es: "Tienda",
      fr: "Boutique",
    },
    desc: {
      en: "Product sales and inventory",
      nl: "Productverkoop en voorraad",
      fi: "Tuotemyynti ja varasto",
      tr: "Ürün satışı ve stok",
      it: "Vendita prodotti e magazzino",
      pl: "Sprzedaż produktów i magazyn",
      es: "Venta de productos e inventario",
      fr: "Vente de produits et stock",
    },
    icon: ShoppingBag,
    color: "text-amber-600 bg-amber-100",
  },
  {
    key: "integrations",
    group: "sales",
    label: {
      en: "Integrations",
      nl: "Integraties",
      fi: "Integraatiot",
      tr: "Entegrasyonlar",
      it: "Integrazioni",
      pl: "Integracje",
      es: "Integraciones",
      fr: "Intégrations",
    },
    desc: {
      en: "Calendar, accounting and more",
      nl: "Agenda, boekhouding en meer",
      fi: "Kalenteri, kirjanpito ja muuta",
      tr: "Google Takvim, Zapier ve otomasyonlar",
      it: "Calendario, contabilità e altro",
      pl: "Kalendarz, księgowość i więcej",
      es: "Calendario, contabilidad y más",
      fr: "Agenda, comptabilité et plus",
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
      nl: "Schoonheidssalons",
      fi: "Kauneussalongit",
      tr: "Güzellik salonları",
      it: "Centri estetici",
      pl: "Salony kosmetyczne",
      es: "Centros de estética",
      fr: "Instituts de beauté",
    },
    desc: {
      en: "All-in-one studio software",
      nl: "All-in-one salonsoftware",
      fi: "All-in-one-studio-ohjelmisto",
      tr: "Randevu, müşteri ve işlem yönetimi",
      it: "Gestionale tutto in uno",
      pl: "Program all-in-one dla salonu",
      es: "Software todo en uno",
      fr: "Logiciel tout-en-un",
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
      tr: "Lazer epilasyon",
      it: "Epilazione laser",
      pl: "Depilacja laserowa",
      es: "Depilación láser",
      fr: "Épilation laser",
    },
    desc: {
      en: "Session tracking and consent",
      nl: "Sessies en toestemmingen",
      fi: "Käyntiseuranta ja suostumukset",
      tr: "Seans takibi ve onam",
      it: "Sedute e consensi",
      pl: "Serie zabiegów i zgody",
      es: "Sesiones y consentimientos",
      fr: "Suivi des séances et consentements",
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
      tr: "Kalıcı makyaj",
      it: "Trucco permanente",
      pl: "Makijaż permanentny",
      es: "Micropigmentación",
      fr: "Maquillage permanent",
    },
    desc: {
      en: "PMU and microblading",
      nl: "PMU en microblading",
      fi: "PMU ja microblading",
      tr: "PMU ve microblading",
      it: "PMU e microblading",
      pl: "PMU i microblading",
      es: "PMU y microblading",
      fr: "PMU et microblading",
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
      tr: "Medikal estetik merkezleri",
      it: "Cliniche estetiche",
      pl: "Gabinety medycyny estetycznej",
      es: "Clínicas estéticas",
      fr: "Cliniques esthétiques",
    },
    desc: {
      en: "Documentation and patient records",
      nl: "Documentatie en patiëntendossiers",
      fi: "Dokumentointi ja potilaskortistot",
      tr: "Onam ve işlem kaydı",
      it: "Documentazione e schede pazienti",
      pl: "Dokumentacja i kartoteka pacjentów",
      es: "Documentación e historiales",
      fr: "Documentation et dossiers patients",
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
      tr: "Dövme stüdyoları",
      it: "Studi di tatuaggi",
      pl: "Studia tatuażu",
      es: "Estudios de tatuaje",
      fr: "Salons de tatouage",
    },
    desc: {
      en: "Consent and bookings",
      nl: "Toestemmingen en boekingen",
      fi: "Suostumukset ja varaukset",
      tr: "Onam ve randevu",
      it: "Consensi e prenotazioni",
      pl: "Zgody i rezerwacje",
      es: "Consentimientos y reservas",
      fr: "Consentements et réservations",
    },
    icon: Pen,
    color: "text-gray-600 bg-gray-200",
  },
  {
    key: "nail-salon-software",
    label: {
      en: "Nail salons",
      nl: "Nagelstudio's",
      fi: "Kynsisalongit",
      tr: "Tırnak salonları",
      it: "Centri unghie",
      pl: "Salony paznokci",
      es: "Salones de uñas",
      fr: "Ongleries",
    },
    desc: {
      en: "Appointments and preferences",
      nl: "Afspraken en voorkeuren",
      fi: "Ajanvaraukset ja mieltymykset",
      tr: "Randevular ve tercihler",
      it: "Appuntamenti e preferenze",
      pl: "Wizyty i preferencje",
      es: "Citas y preferencias",
      fr: "Rendez-vous et préférences",
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
      tr: "Kirpik stüdyoları",
      it: "Extension ciglia",
      pl: "Stylizacja rzęs",
      es: "Estudios de pestañas",
      fr: "Extensions de cils",
    },
    desc: {
      en: "Extensions and refill planning",
      nl: "Extensions en refill-planning",
      fi: "Pidennysten ja täyttöjen suunnittelu",
      tr: "İpek kirpik ve dolgu planı",
      it: "Applicazioni e refill",
      pl: "Przedłużanie i uzupełnianie",
      es: "Extensiones y relleno",
      fr: "Poses et remplissages",
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
      tr: "Spa ve wellness",
      it: "Spa e wellness",
      pl: "Spa i wellness",
      es: "Spa y wellness",
      fr: "Spa et bien-être",
    },
    desc: {
      en: "Guest management and bookings",
      nl: "Gastbeheer en boekingen",
      fi: "Vierashallinta ja varaukset",
      tr: "Misafir takibi ve randevu",
      it: "Gestione ospiti e prenotazioni",
      pl: "Obsługa gości i rezerwacje",
      es: "Gestión de clientes y reservas",
      fr: "Gestion des clients et réservations",
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
      tr: "Masaj merkezleri",
      it: "Centri massaggi",
      pl: "Gabinety masażu",
      es: "Centros de masaje",
      fr: "Centres de massage",
    },
    desc: {
      en: "Bookings and health questionnaires",
      nl: "Boekingen en gezondheidsvragenlijsten",
      fi: "Varaukset ja terveyskyselyt",
      tr: "Randevu ve sağlık formu",
      it: "Prenotazioni e questionari sulla salute",
      pl: "Rezerwacje i ankiety zdrowotne",
      es: "Reservas y cuestionarios de salud",
      fr: "Réservations et questionnaires santé",
    },
    icon: Hand,
    color: "text-amber-600 bg-amber-100",
  },
];

const allFeaturesLabel: L10n = {
  en: "View all features",
  nl: "Bekijk alle functies",
  fi: "Näytä kaikki ominaisuudet",
  tr: "Tüm özellikleri gör",
  it: "Vedi tutte le funzioni",
  pl: "Zobacz wszystkie funkcje",
  es: "Ver todas las funciones",
  fr: "Voir toutes les fonctionnalités",
};

export default function NavigationEn({
  dict,
  locale = "en",
}: {
  dict: Dictionary;
  locale?: PrefixedMarket;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const market = locale;
  const lang = chromeLangFromMarket(market);
  const base = marketPathPrefix[market];
  const ctaPath = getPrimaryCtaPath(market);
  const ctaExternal = isExternalCta(market);
  const ctaLabel = ctaExternal ? dict.nav.tryFree : dict.nav.requestAccess;
  const loginUrl = APP_LOGIN_BY_MARKET[market] ?? APP_LOGIN_BY_MARKET.en;

  // Gutscheine: nur TR ausgeblendet (NL/IT/PL/ES/FR bleiben sichtbar)
  const featureLinks = featureDefs
    .filter((item) => !(market === "tr" && item.key === "vouchers"))
    .map((item) => ({
      href: marketPagePath(market, item.key),
      group: item.group,
      label: item.label[lang],
      desc: item.desc[lang],
      icon: item.icon,
      color: item.color,
    }));

  const featureGroups = featureGroupOrder
    .map((groupId) => ({
      id: groupId,
      title: featureGroupTitles[groupId][lang],
      items: featureLinks.filter((item) => item.group === groupId),
    }))
    .filter((group) => group.items.length > 0);

  const industryLinks = [
    ...(market === "tr"
      ? [
          {
            href: "/tr/guzellik-merkezi-programi",
            label: "Güzellik merkezleri",
            desc: "Randevu, onam ve işlem kaydı",
            icon: Sparkles,
            color: "text-indigo-600 bg-indigo-100",
            key: "beauty-center-software",
          },
        ]
      : []),
    ...industryDefs.map((item) => ({
      href: marketPagePath(market, item.key),
      label: item.label[lang],
      desc: item.desc[lang],
      icon: item.icon,
      color: item.color,
      key: item.key,
    })),
  ];

  const featuresOverviewHref = marketPagePath(market, "features");
  const pricingHref = marketPagePath(market, "pricing");
  const newsHref = marketPagePath(market, "news");
  const contactHref = marketPagePath(market, "contact");
  const blogHref = `${base}/blog`;
  // News gibt es nicht fuer TR und die Bundle-Sprachen (NL/IT/PL/ES/FR)
  const showNews = market !== "tr" && !isBundleLang(market);
  const chrome = getUiChrome(market);

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

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">
                {dict.nav.features}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full -left-4 pt-2 w-[760px] max-w-[calc(100vw-2rem)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4">
                <div className="grid grid-cols-3 gap-2">
                  {featureGroups.map((group) => (
                    <div key={group.id}>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 px-2.5 mb-1">
                        {group.title}
                      </p>
                      <div className="space-y-0.5">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors"
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
            {showNews && (
              <Link
                href={newsHref}
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {dict.nav.news}
              </Link>
            )}
            <Link
              href={blogHref}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {chrome.blog}
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
            aria-label={chrome.menuAria}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
          {featureGroups.map((group) => (
            <div key={group.id} className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {group.title}
              </p>
              {group.items.map((item) => (
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
            </div>
          ))}
          <Link
            href={featuresOverviewHref}
            className="block pl-2 text-sm font-medium text-indigo-600"
            onClick={() => setMobileOpen(false)}
          >
            {allFeaturesLabel[lang]}
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
          {showNews && (
            <Link
              href={newsHref}
              className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setMobileOpen(false)}
            >
              {dict.nav.news}
            </Link>
          )}
          <Link
            href={blogHref}
            className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
            onClick={() => setMobileOpen(false)}
          >
            {chrome.blog}
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
          <div className="border-t border-gray-100 pt-3">
            <LanguageSwitcher current={market} variant="inline" />
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
