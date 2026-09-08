import {
  Bell,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Gift,
  Globe,
  Link2,
  Plug,
  ShoppingBag,
  Users,
  type LucideIcon,
} from "lucide-react";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import { EN_SLUGS, marketPagePath, type MarketPageSlug } from "@/app/i18n/market-routes";
import type { PrefixedMarket } from "@/app/i18n/config";
import { getUiChrome } from "./ui-chrome";

export type FeaturesOverviewCard = {
  href: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  highlights: string[];
  color: string;
  bg: string;
};

export type FeaturesOverviewContent = {
  breadcrumbLabel: string;
  homeHref: string;
  registerHref: string;
  pricingHref: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  primaryCta: string;
  pricingCta: string;
  heroImageSrc: string;
  heroImageAlt: string;
  capsules: { question: string; answer: string }[];
  workflowTitle: string;
  workflowSubtitle: string;
  workflowSteps: { href: string; label: string; desc: string }[];
  cardsTitle: string;
  cardsSubtitle: string;
  cards: FeaturesOverviewCard[];
  learnMore: string;
  stepLabel: (n: number) => string;
  showCheckoutSection: boolean;
  checkoutTitle: string;
  checkoutText: string;
  checkoutNote?: string;
  checkoutLinkHref?: string;
  checkoutLinkLabel?: string;
  industriesTitle: string;
  industriesSubtitle: string;
  industries: { href: string; label: string }[];
  relatedTitle: string;
  relatedLinks: { href: string; label: string }[];
  faqs: { question: string; answer: string }[];
  faqTitle: string;
  faqBadge: string;
  bottomTitle: string;
  bottomText: string;
};

function p(market: PrefixedMarket, slug: string) {
  return `/${market}/${slug}`;
}

const cardMeta = {
  calendar: { icon: CalendarDays, color: "text-indigo-600", bg: "bg-indigo-50" },
  booking: { icon: Link2, color: "text-rose-600", bg: "bg-rose-50" },
  records: { icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
  forms: { icon: ClipboardCheck, color: "text-orange-600", bg: "bg-orange-50" },
  docs: { icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
  messaging: { icon: Bell, color: "text-purple-600", bg: "bg-purple-50" },
  integrations: { icon: Plug, color: "text-sky-600", bg: "bg-sky-50" },
  shop: { icon: ShoppingBag, color: "text-amber-600", bg: "bg-amber-50" },
  vouchers: { icon: Gift, color: "text-violet-600", bg: "bg-violet-50" },
  website: { icon: Globe, color: "text-teal-600", bg: "bg-teal-50" },
} as const;

function enContent(market: PrefixedMarket): FeaturesOverviewContent {
  const chrome = getUiChrome(market);
  const base = (key: keyof typeof EN_SLUGS) => p(market, EN_SLUGS[key]);
  return {
    breadcrumbLabel: "Features",
    homeHref: `/${market}`,
    registerHref: APP_REGISTER_BY_MARKET[market],
    pricingHref: base("pricing"),
    eyebrow: "All features",
    title: "Salon and clinic software, from booking to documentation",
    subtitle:
      "Treatflow combines calendar, online booking, client records, digital forms, treatment notes and follow-ups in one workspace. Built for beauty salons and aesthetic clinics – not as a booking marketplace.",
    bullets: [
      "No commission on bookings",
      "Forms, photos and notes on the client record",
      "Voice dictation for treatment notes",
      "Checkout where available",
    ],
    primaryCta: chrome.startTrial,
    pricingCta: chrome.seePricing,
    heroImageSrc: "/images/lifestyle/hero-startseite-en.png",
    heroImageAlt:
      "Treatflow on laptop and tablet in a clinic: calendar, checkout and client records",
    capsules: [
      {
        question: "What features does Treatflow include?",
        answer:
          "Treatflow includes an appointment calendar, online booking without commission, client records, digital consultation and consent forms, treatment documentation with photos and voice dictation, reminders, integrations, shop and vouchers. Checkout and POS features depend on the country.",
      },
      {
        question: "Is Treatflow all-in-one software?",
        answer:
          "Yes. Treatflow is studio software for beauty salons and aesthetic clinics. Booking, records, forms, documentation and follow-ups sit in one system. It is not a marketplace and does not take a booking commission.",
      },
    ],
    workflowTitle: "How the features work together",
    workflowSubtitle:
      "Each step links to the next, so the team works from one client journey instead of separate tools.",
    workflowSteps: [
      {
        href: base("online-booking"),
        label: "Online booking",
        desc: "Clients book on your own link. Slots stay in sync with the studio calendar.",
      },
      {
        href: base("forms"),
        label: "Intake and consent",
        desc: "Consultation and consent forms can be completed before the client arrives.",
      },
      {
        href: base("client-records"),
        label: "Client records",
        desc: "History, notes and forms sit on one profile the whole team can open.",
      },
      {
        href: base("treatment-documentation"),
        label: "Documentation",
        desc: "Notes, voice dictation, parameters and photos stay attached to the visit.",
      },
      {
        href: base("messaging"),
        label: "Follow-ups",
        desc: "Reminders and automated messages reduce no-shows and bring clients back.",
      },
    ],
    cardsTitle: "Features at a glance",
    cardsSubtitle:
      "Every card opens the dedicated page. POS stays country-specific and is not listed as an international product.",
    cards: [
      {
        href: base("appointment-calendar"),
        ...cardMeta.calendar,
        title: "Appointment calendar",
        desc: "Day, week and month views with columns for staff or rooms. Online bookings land in the same calendar.",
        highlights: ["Staff and room columns", "Drag and drop", "Synced with online booking"],
      },
      {
        href: base("online-booking"),
        ...cardMeta.booking,
        title: "Online booking",
        desc: "Your own booking page with live availability. No marketplace commission. Confirmations go out automatically.",
        highlights: ["24/7 booking link", "No commission", "Optional deposits"],
      },
      {
        href: base("client-records"),
        ...cardMeta.records,
        title: "Client records",
        desc: "History, notes, forms and photos on one profile the whole team can open before the visit.",
        highlights: ["Searchable profiles", "Forms on the record", "Team visibility"],
      },
      {
        href: base("forms"),
        ...cardMeta.forms,
        title: "Consultation and consent",
        desc: "Send intake and consent forms before the appointment. Clients complete them on their phone, including a digital signature.",
        highlights: ["Send before arrival", "Digital signatures", "Stored on the record"],
      },
      {
        href: base("treatment-documentation"),
        ...cardMeta.docs,
        title: "Treatment documentation",
        desc: "Session notes, parameters and before-and-after photos on the visit. Dictate notes by voice and optionally refine them with AI.",
        highlights: ["Notes and parameters", "Voice dictation", "Before/after photos"],
      },
      {
        href: base("messaging"),
        ...cardMeta.messaging,
        title: "Reminders and follow-ups",
        desc: "Automatic WhatsApp and email reminders before appointments, plus follow-ups after treatments. Timing is configurable.",
        highlights: ["WhatsApp and email", "Booking confirmations", "Reactivation messages"],
      },
      {
        href: base("integrations"),
        ...cardMeta.integrations,
        title: "Integrations",
        desc: "Keep Treatflow in sync with tools you already use, including Google Calendar and Zapier.",
        highlights: ["Google Calendar", "Zapier", "Less double entry"],
      },
      {
        href: base("shop"),
        ...cardMeta.shop,
        title: "Shop and inventory",
        desc: "Sell retail products alongside treatments and keep stock in the same workspace.",
        highlights: ["Product sales", "Inventory", "Tied to the client"],
      },
      {
        href: base("vouchers"),
        ...cardMeta.vouchers,
        title: "Vouchers",
        desc: "Sell and redeem gift vouchers, including remaining balances, without a separate spreadsheet.",
        highlights: ["Sell and redeem", "Remaining balance", "Validity control"],
      },
      {
        href: base("studio-website"),
        ...cardMeta.website,
        title: "Studio website",
        desc: "A studio site connected to your Treatflow booking page, so visitors can book instead of only browsing.",
        highlights: ["Mobile-first", "Booking connected", "Built for studios"],
      },
    ],
    learnMore: chrome.learnMore,
    stepLabel: chrome.stepLabel,
    showCheckoutSection: true,
    checkoutTitle: "Checkout where available",
    checkoutText:
      "Fiscal POS (TSE in Germany, RKSV in Austria) is part of Treatflow for DACH studios. International studios can still run booking, records, forms and documentation in one place. Payments are not sold as a worldwide core feature.",
    checkoutNote: "German product page:",
    checkoutLinkHref: "/kassensystem-kosmetikstudio",
    checkoutLinkLabel: "Kassensystem",
    industriesTitle: "Who these features are for",
    industriesSubtitle: "The same product map, adapted to how each studio works.",
    industries: [
      { href: base("beauty-salon-software"), label: "Beauty salons" },
      { href: base("aesthetic-clinic-software"), label: "Aesthetic clinics" },
      { href: base("laser-hair-removal-software"), label: "Laser hair removal" },
      { href: base("permanent-makeup-software"), label: "Permanent makeup" },
      { href: base("lash-studio-software"), label: "Lash studios" },
      { href: base("nail-salon-software"), label: "Nail salons" },
      { href: base("massage-software"), label: "Massage and wellness" },
      { href: base("spa-wellness-software"), label: "Spa" },
    ],
    relatedTitle: chrome.relatedTitle,
    relatedLinks: [
      { href: base("pricing"), label: "Pricing" },
      { href: base("software-comparison"), label: chrome.softwareComparison },
      { href: base("treatflow-vs-fresha"), label: chrome.vsFresha },
      { href: base("treatflow-vs-treatwell"), label: chrome.vsTreatwell },
    ],
    faqs: [
      {
        question: "What features does Treatflow include?",
        answer:
          "Treatflow includes an appointment calendar, online booking without commission, client records, digital consultation and consent forms, treatment documentation with photos and voice dictation, reminders, integrations, shop, vouchers and an optional studio website. Checkout and POS features depend on the country.",
      },
      {
        question: "Is Treatflow all-in-one software or only a booking tool?",
        answer:
          "Treatflow is studio software, not a marketplace. Booking, records, forms, documentation and follow-ups sit in one system so the team is not switching between apps.",
      },
      {
        question: "Does Treatflow include a point of sale?",
        answer:
          "Checkout and POS features are available where fiscal requirements are supported, currently in Germany and Austria. International studios can still use booking, records, forms and documentation.",
      },
      {
        question: "Can I try every feature before paying?",
        answer: "Yes. You can start a 14-day free trial with no credit card. Cancel anytime.",
      },
    ],
    faqTitle: chrome.faqTitle,
    faqBadge: chrome.faqBadge,
    bottomTitle: "Ready to run the studio in one place?",
    bottomText: "Start your free trial – no credit card required, cancel anytime.",
  };
}

function trContent(): FeaturesOverviewContent {
  const market = "tr" as const;
  const chrome = getUiChrome("tr");
  const base = (key: MarketPageSlug) => marketPagePath("tr", key);
  return {
    breadcrumbLabel: "Özellikler",
    homeHref: "/tr",
    registerHref: APP_REGISTER_BY_MARKET.tr,
    pricingHref: base("pricing"),
    eyebrow: "Tüm özellikler",
    title: "Randevudan işlem kaydına, tek salon yazılımı",
    subtitle:
      "Treatflow; randevu takvimi, komisyonsuz online randevu, müşteri takibi, dijital onam formları, işlem notları ve hatırlatmaları tek panelde toplar. Pazaryeri değil – sizin salon yazılımınız.",
    bullets: [
      "Randevu başına komisyon yok",
      "Onam, fotoğraf ve notlar müşteri kaydında",
      "İşlem notlarını sesle yazın",
      "30 gün ücretsiz, kredi kartı gerekmez",
    ],
    primaryCta: chrome.startTrial,
    pricingCta: chrome.seePricing,
    heroImageSrc: "/images/lifestyle/hero-startseite-tr.png",
    heroImageAlt:
      "Treatflow salon yönetim yazılımı: randevu takvimi, müşteri kayıtları, online randevu ve dijital onam laptop, tablet ve telefonda",
    capsules: [
      {
        question: "Treatflow hangi özellikleri içerir?",
        answer:
          "Treatflow randevu takvimi, komisyonsuz online randevu, müşteri takibi, dijital anamnez ve onam formları, fotoğraflı işlem kaydı, sesli not, WhatsApp ve e-posta hatırlatmaları, entegrasyonlar ve mağaza sunar.",
      },
      {
        question: "Treatflow A'dan Z'ye salon yazılımı mı?",
        answer:
          "Evet. Treatflow güzellik salonları ve medikal estetik klinikleri için salon yönetim yazılımıdır. Randevu, müşteri kaydı, onam, işlem kaydı ve hatırlatma aynı sistemdedir. Pazaryeri değildir, randevu komisyonu almaz.",
      },
    ],
    workflowTitle: "Özellikler nasıl birlikte çalışır",
    workflowSubtitle:
      "Her adım bir sonrakine bağlanır – ekip ayrı uygulamalar arasında geçiş yapmaz, müşteri yolculuğu tek yerdedir.",
    workflowSteps: [
      {
        href: base("online-booking"),
        label: "Online randevu",
        desc: "Müşteri sizin linkinizden 7/24 randevu alır. Slotlar salon takvimiyle aynı anda güncellenir.",
      },
      {
        href: base("forms"),
        label: "Anamnez ve onam",
        desc: "Müşteri gelmeden anamnez ve onam formunu telefonda doldurur, dijital imza atar.",
      },
      {
        href: base("client-records"),
        label: "Müşteri takibi",
        desc: "Geçmiş, notlar ve formlar tek kartta – tüm ekip randevu öncesi açabilir.",
      },
      {
        href: base("treatment-documentation"),
        label: "İşlem kaydı",
        desc: "Seans notları, parametreler ve öncesi-sonrası fotoğraflar ziyarete bağlı kalır.",
      },
      {
        href: base("messaging"),
        label: "Hatırlatmalar",
        desc: "WhatsApp ve e-posta ile gelmeme azalır; işlem sonrası mesajlarla müşteri geri döner.",
      },
    ],
    cardsTitle: "Özelliklere bakış",
    cardsSubtitle:
      "Her kart ilgili sayfayı açar.",
    cards: [
      {
        href: base("appointment-calendar"),
        ...cardMeta.calendar,
        title: "Randevu takvimi",
        desc: "Gün, hafta ve ay görünümü; personel veya oda sütunları. Online randevular aynı takvime düşer.",
        highlights: ["Personel ve oda sütunları", "Sürükle-bırak", "Online randevu ile senkron"],
      },
      {
        href: base("online-booking"),
        ...cardMeta.booking,
        title: "Online randevu",
        desc: "Kendi randevu sayfanız, canlı müsaitlik. Pazaryeri komisyonu yok. Onaylar otomatik gider.",
        highlights: ["7/24 randevu linki", "Komisyon yok", "Instagram ve Google"],
      },
      {
        href: base("client-records"),
        ...cardMeta.records,
        title: "Müşteri takibi",
        desc: "Geçmiş, notlar, formlar ve fotoğraflar tek kartta – ekip ziyaret öncesi açar.",
        highlights: ["Aranabilir kartlar", "Formlar kayıtta", "Ekip görünürlüğü"],
      },
      {
        href: base("forms"),
        ...cardMeta.forms,
        title: "Anamnez ve onam",
        desc: "Randevudan önce anamnez ve onam gönderin. Müşteri telefonda doldurur, dijital imza atar.",
        highlights: ["Gelmeden doldurulur", "Dijital imza", "Müşteri kaydında saklanır"],
      },
      {
        href: base("treatment-documentation"),
        ...cardMeta.docs,
        title: "İşlem kayıtları",
        desc: "Seans notları, parametreler ve öncesi-sonrası fotoğraflar. Notları sesle yazın.",
        highlights: ["Not ve parametre", "Sesli not", "Öncesi-sonrası fotoğraf"],
      },
      {
        href: base("messaging"),
        ...cardMeta.messaging,
        title: "Hatırlatmalar",
        desc: "Randevu öncesi otomatik WhatsApp ve e-posta; işlem sonrası takip mesajları. Zamanlama sizde.",
        highlights: ["WhatsApp ve e-posta", "Randevu onayı", "Geri çağırma mesajları"],
      },
      {
        href: base("integrations"),
        ...cardMeta.integrations,
        title: "Entegrasyonlar",
        desc: "Treatflow'u Google Takvim ve Zapier gibi kullandığınız araçlarla senkron tutun.",
        highlights: ["Google Takvim", "Zapier", "Çift kayıt azalır"],
      },
      {
        href: base("shop"),
        ...cardMeta.shop,
        title: "Mağaza ve stok",
        desc: "İşlemlerin yanında perakende ürün satın, stoku aynı panelde tutun.",
        highlights: ["Ürün satışı", "Stok", "Müşteri kaydına bağlı"],
      },
      {
        href: base("studio-website"),
        ...cardMeta.website,
        title: "Salon web sitesi",
        desc: "Treatflow randevu sayfanıza bağlı salon sitesi – ziyaretçi sadece bakmaz, randevu alır.",
        highlights: ["Mobil uyumlu", "Randevuya bağlı", "Salonlar için"],
      },
    ],
    learnMore: chrome.learnMore,
    stepLabel: chrome.stepLabel,
    showCheckoutSection: false,
    checkoutTitle: "",
    checkoutText: "",
    industriesTitle: "Bu özellikler kimler için",
    industriesSubtitle: "Aynı ürün haritası, her işletmenin çalışma şekline göre.",
    industries: [
      { href: "/tr/guzellik-merkezi-programi", label: "Güzellik merkezleri" },
      { href: base("beauty-salon-software"), label: "Güzellik salonları" },
      { href: base("aesthetic-clinic-software"), label: "Estetik klinikleri" },
      { href: base("laser-hair-removal-software"), label: "Lazer epilasyon" },
      { href: base("permanent-makeup-software"), label: "Kalıcı makyaj" },
      { href: base("lash-studio-software"), label: "Kirpik stüdyoları" },
      { href: base("nail-salon-software"), label: "Tırnak salonları" },
      { href: base("massage-software"), label: "Masaj ve wellness" },
      { href: base("spa-wellness-software"), label: "Spa" },
    ],
    relatedTitle: chrome.relatedTitle,
    relatedLinks: [
      { href: base("pricing"), label: "Fiyatlar" },
      { href: base("software-comparison"), label: chrome.softwareComparison },
      { href: base("treatflow-vs-fresha"), label: chrome.vsFresha },
      { href: base("treatflow-vs-treatwell"), label: chrome.vsTreatwell },
    ],
    faqs: [
      {
        question: "Treatflow hangi özellikleri içerir?",
        answer:
          "Randevu takvimi, komisyonsuz online randevu, müşteri takibi, dijital anamnez ve onam, fotoğraflı işlem kaydı, sesli not, hatırlatmalar, entegrasyonlar, mağaza ve isteğe bağlı salon web sitesi.",
      },
      {
        question: "Treatflow sadece randevu aracı mı, yoksa salon yazılımı mı?",
        answer:
          "Treatflow salon yazılımıdır, pazaryeri değildir. Randevu, müşteri kaydı, onam, işlem kaydı ve hatırlatma aynı sistemdedir; ekip uygulamalar arasında geçiş yapmaz.",
      },
      {
        question: "Ödemeden önce tüm özellikleri deneyebilir miyim?",
        answer:
          "Evet. 30 gün ücretsiz deneme, kredi kartı gerekmez, taahhüt yok. İstediğiniz zaman iptal edin.",
      },
    ],
    faqTitle: chrome.faqTitle,
    faqBadge: chrome.faqBadge,
    bottomTitle: "Salonu tek yerden yönetmeye hazır mısınız?",
    bottomText: "Ücretsiz denemenizi başlatın – kredi kartı gerekmez, istediğiniz zaman iptal edin.",
  };
}

export function getFeaturesOverview(market: PrefixedMarket): FeaturesOverviewContent {
  if (market === "tr") return trContent();
  return enContent(market);
}
