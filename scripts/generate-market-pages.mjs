/**
 * Generates app/[market]/... pages for all prefixed country markets.
 * Run: node scripts/generate-market-pages.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const marketRoot = path.join(root, "app", "[market]");

const industryKeys = [
  "beauty-salon-software",
  "aesthetic-clinic-software",
  "laser-hair-removal-software",
  "permanent-makeup-software",
  "tattoo-studio-software",
  "nail-salon-software",
  "lash-studio-software",
  "spa-wellness-software",
  "massage-software",
];

const extraFeatureKeys = [
  "point-of-sale",
  "vouchers",
  "messaging",
  "integrations",
  "features",
  "shop",
  "studio-website",
];

const coreFeatureKeys = [
  "appointment-calendar",
  "online-booking",
  "client-records",
  "forms",
  "treatment-documentation",
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
  console.log("write", path.relative(root, filePath));
}

const layout = `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionaryForMarket } from "@/app/i18n/dictionaries";
import { buildHreflangAlternates } from "@/app/i18n/seo";
import {
  BASE_URL,
  htmlLangTags,
  isPrefixedMarket,
  marketPathPrefix,
  ogLocaleTags,
  prefixedMarkets,
  type PrefixedMarket,
} from "@/app/i18n/config";
import NavigationEn from "@/app/components/NavigationEn";
import FooterEn from "@/app/components/FooterEn";
import HtmlLang from "@/app/components/HtmlLang";

export function generateStaticParams() {
  return prefixedMarkets.map((market) => ({ market }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}): Promise<Metadata> {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const prefix = marketPathPrefix[market];
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: "Treatflow: All-in-One Software for Beauty Salons & Aesthetic Clinics",
      template: "%s | Treatflow",
    },
    description:
      "Manage appointments, online booking, client records, consent forms and treatment documentation - all in one app. GDPR-compliant.",
    alternates: {
      canonical: \`\${BASE_URL}\${prefix}\`,
      ...buildHreflangAlternates("home"),
    },
    openGraph: {
      type: "website",
      locale: ogLocaleTags[market],
      url: \`\${BASE_URL}\${prefix}\`,
      siteName: "Treatflow",
    },
  };
}

export default async function MarketLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const dict = await getDictionaryForMarket(market);

  return (
    <div className="min-h-screen bg-white">
      <HtmlLang lang={htmlLangTags[market]} />
      <NavigationEn dict={dict} locale={market} />
      {children}
      <FooterEn dict={dict} locale={market} />
    </div>
  );
}
`;

const homePage = `import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import HomePageIntl from "@/app/components/HomePageIntl";
import {
  countryHomeMeta,
  getCountryHomePage,
  type CountryHomeMarket,
} from "@/app/i18n/markets/country-homes";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const meta = countryHomeMeta[market as CountryHomeMarket];
  return buildPageMetadata({
    pageKey: "home",
    locale: market,
    title: meta.title,
    description: meta.description,
  });
}

export default async function MarketHome({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <HomePageIntl content={getCountryHomePage(market as CountryHomeMarket)} />;
}
`;

const pricingPage = `import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import PricingPageIntl from "@/app/components/PricingPageIntl";
import { getMarketPricingCopy } from "@/app/i18n/markets/market-content";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const copy = getMarketPricingCopy(market);
  return buildPageMetadata({
    pageKey: "pricing",
    locale: market,
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function MarketPricing({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <PricingPageIntl copy={getMarketPricingCopy(market)} />;
}
`;

const earlyAccessPage = `import { notFound } from "next/navigation";
import EarlyAccessPage from "@/app/components/EarlyAccessPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, marketLabels, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  return buildPageMetadata({
    pageKey: "early-access",
    locale: market,
    title: "Request early access",
    description: \`Treatflow early access for \${marketLabels[market]}. Self-serve signup is currently available in Germany, Austria and Switzerland.\`,
  });
}

export default async function MarketEarlyAccess({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return (
    <EarlyAccessPage
      locale={market}
      leadSource={\`Early Access \${market.toUpperCase()}\`}
      title="Request early access to Treatflow"
      subtitle={\`We are expanding into \${marketLabels[market]}. Tell us about your studio and we will follow up personally.\`}
      note="Self-serve registration is currently open for Germany, Austria and Switzerland only."
      copy={{
        nameLabel: "Your name",
        studioLabel: "Studio / clinic name",
        cityLabel: "City",
        countryLabel: "Country",
        emailLabel: "Email",
        phoneLabel: "Phone (optional)",
        messageLabel: "How can we help? (optional)",
        submitLabel: "Request early access",
        successTitle: "Request received",
        successText: "Thanks! We will review your request and get back to you shortly.",
        errorText: "Something went wrong. Please try again or email hello@treatflow.io.",
        requiredHint: "Fields marked with * are required",
      }}
    />
  );
}
`;

function industryPage(key) {
  return `import { notFound } from "next/navigation";
import InternationalSeoPage from "@/app/components/InternationalSeoPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getMarketIndustryPage } from "@/app/i18n/markets/market-content";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const content = getMarketIndustryPage(market, "${key}");
  return buildPageMetadata({
    pageKey: content.pageKey,
    locale: market,
    title: content.serviceName,
    description: content.serviceDescription,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <InternationalSeoPage content={getMarketIndustryPage(market, "${key}")} />;
}
`;
}

function extraFeaturePage(key) {
  return `import { notFound } from "next/navigation";
import FeaturePageEn from "@/app/components/FeaturePageEn";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getMarketExtraFeaturePage } from "@/app/i18n/markets/market-content";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const content = getMarketExtraFeaturePage(market, "${key}");
  return buildPageMetadata({
    pageKey: "${key}",
    locale: market,
    title: content.title,
    description: content.subtitle,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <FeaturePageEn {...getMarketExtraFeaturePage(market, "${key}")} />;
}
`;
}

function coreFeaturePage(key) {
  const titles = {
    "appointment-calendar": {
      title: "Appointment Calendar for Beauty Salons",
      description:
        "Clear appointment calendar for beauty studios – daily, weekly and monthly views, team scheduling and automatic reminders.",
    },
    "online-booking": {
      title: "Online Booking for Beauty Salons",
      description:
        "24/7 online booking for beauty and aesthetic studios – real availability, deposits and automatic reminders.",
    },
    "client-records": {
      title: "Digital Client Records for Beauty Studios",
      description:
        "Client profiles, treatment history and photos in one digital record – built for beauty and aesthetic studios.",
    },
    forms: {
      title: "Digital Intake & Consent Forms",
      description:
        "Digital intake and consent forms your clients fill in before the appointment. Secure signatures, no paperwork.",
    },
    "treatment-documentation": {
      title: "Treatment Documentation for Beauty & Aesthetics",
      description:
        "Structured treatment notes and before/after photos – linked to the client history.",
    },
  };
  const meta = titles[key];
  return `import { notFound } from "next/navigation";
import FeaturePageEn from "@/app/components/FeaturePageEn";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getCoreFeaturePage } from "@/app/i18n/markets/core-feature-pages";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  return buildPageMetadata({
    pageKey: "${key}",
    locale: market,
    title: ${JSON.stringify(meta.title)},
    description: ${JSON.stringify(meta.description)},
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  return <FeaturePageEn {...getCoreFeaturePage(market, "${key}")} />;
}
`;
}

const contactPage = `import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, marketPathPrefix, type PrefixedMarket } from "@/app/i18n/config";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  return buildPageMetadata({
    pageKey: "contact",
    locale: raw as PrefixedMarket,
    title: "Contact Treatflow",
    description: "Get in touch with the Treatflow team. We help beauty salons and aesthetic clinics digitize appointments, forms and treatment documentation.",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const early = \`\${marketPathPrefix[market]}/early-access\`;
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-lg text-gray-600 mb-8">
          Email us at{" "}
          <a className="text-indigo-600 font-medium" href="mailto:hello@treatflow.io">
            hello@treatflow.io
          </a>{" "}
          or request early access for your market.
        </p>
        <Link
          href={early}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
        >
          Request early access
        </Link>
      </div>
    </section>
  );
}
`;

const aboutPage = `import { notFound } from "next/navigation";
import { Heart, MapPin, ShieldCheck, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, marketPathPrefix, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  return buildPageMetadata({
    pageKey: "about",
    locale: raw as PrefixedMarket,
    title: "About Treatflow",
    description:
      "Treatflow is the all-in-one software for beauty studios. Made in Austria, GDPR-compliant and hosted in the EU.",
  });
}

const values = [
  { icon: Heart, title: "Built for studios", desc: "We build hand in hand with beauty professionals - every feature solves a real, everyday problem." },
  { icon: ShieldCheck, title: "Privacy first", desc: "GDPR-compliant and hosted on EU servers. Your data and your clients' data stay protected." },
  { icon: Users, title: "Personal support", desc: "Real people who know the beauty industry - and help you get set up and get the most out of Treatflow." },
  { icon: MapPin, title: "Made in Austria", desc: "Developed and supported in Europe, for studios across Europe and beyond." },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const early = \`\${marketPathPrefix[market]}/early-access\`;

  return (
    <>
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            About us
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Software that gives studios their time back
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Treatflow started with a simple observation: beauty professionals spend
            far too much time on admin instead of their clients. We set out to change
            that - with one clear app that brings appointments, clients, forms,
            documentation and payments together.
          </p>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[16/9]">
          <Image
            src="/images/lifestyle/ueber-uns-studio-interior.png"
            alt="Modern beauty studio interior"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What we stand for
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={early}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
            >
              Request early access <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
`;

const privacyPage = `import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  return buildPageMetadata({
    pageKey: "privacy",
    locale: raw as PrefixedMarket,
    title: "Privacy Policy",
    description: "Treatflow privacy policy. GDPR-compliant, hosted in the EU.",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-indigo">
        <h1>Privacy Policy</h1>
        <p>
          Treatflow is hosted on EU servers and designed for GDPR compliance.
          For the full German privacy policy, see{" "}
          <a href="/datenschutz">/datenschutz</a>. Contact: hello@treatflow.io.
        </p>
      </div>
    </section>
  );
}
`;

const termsPage = `import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import { isPrefixedMarket, type PrefixedMarket } from "@/app/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  return buildPageMetadata({
    pageKey: "terms",
    locale: raw as PrefixedMarket,
    title: "Terms of Service",
    description: "Treatflow terms of service.",
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-indigo">
        <h1>Terms of Service</h1>
        <p>
          By using Treatflow you agree to our terms. For contractual details during
          early access, we will provide market-specific terms when onboarding your studio.
          Contact: hello@treatflow.io.
        </p>
      </div>
    </section>
  );
}
`;

// Clear and recreate
if (fs.existsSync(marketRoot)) {
  fs.rmSync(marketRoot, { recursive: true, force: true });
}
ensureDir(marketRoot);

write(path.join(marketRoot, "layout.tsx"), layout);
write(path.join(marketRoot, "page.tsx"), homePage);
write(path.join(marketRoot, "pricing", "page.tsx"), pricingPage);
write(path.join(marketRoot, "early-access", "page.tsx"), earlyAccessPage);
write(path.join(marketRoot, "contact", "page.tsx"), contactPage);
write(path.join(marketRoot, "about", "page.tsx"), aboutPage);
write(path.join(marketRoot, "privacy", "page.tsx"), privacyPage);
write(path.join(marketRoot, "terms", "page.tsx"), termsPage);

for (const key of industryKeys) {
  write(path.join(marketRoot, key, "page.tsx"), industryPage(key));
}
for (const key of extraFeatureKeys) {
  write(path.join(marketRoot, key, "page.tsx"), extraFeaturePage(key));
}
for (const key of coreFeatureKeys) {
  write(path.join(marketRoot, key, "page.tsx"), coreFeaturePage(key));
}

console.log("Done.");
