import {
  ArrowRight,
  CheckCircle,
  Star,
  X,
  Lock,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Tablet,
  Monitor,
  Sparkles,
  HelpCircle,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import AiAnswerCapsule from "../AiAnswerCapsule";
import MarketFaqAccordion from "./MarketFaqAccordion";
import { generateFaqSchema } from "@/lib/schema";
import { BASE_URL } from "../../i18n/config";

export type IconItem = {
  icon: LucideIcon;
  label: string;
  desc: string;
  color: string;
  href?: string;
};

export type MarketHomeContent = {
  locale: string;
  htmlLang: string;
  basePath: string;
  canonicalPath: string;
  appRegister: string;
  demoUrl: string;
  serviceName: string;
  serviceDescription: string;
  hero: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    titleTail?: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    bullets: string[];
    ratingLabel: string;
    ratingValue: string;
    image: { src: string; alt: string };
  };
  aiCapsules: { question: string; answer: string }[];
  trustBar: { icon: LucideIcon; text: string }[];
  steps: {
    title: string;
    subtitle: string;
    ctaText: string;
    items: { step: string; title: string; desc: string }[];
  };
  features: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaNote: string;
    items: IconItem[];
  };
  extras: {
    title: string;
    subtitle: string;
    items: IconItem[];
  };
  comparison: {
    title: string;
    subtitle: string;
    treatflowLabel: string;
    otherLabel: string;
    rows: { feature: string; treatflow: string; other: string }[];
  };
  verticals: {
    title: string;
    subtitle: string;
    items: { href: string; label: string }[];
    moreLabel: string;
  };
  stats: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaNote: string;
    items: { icon: LucideIcon; value: string; label: string; desc: string; color: string }[];
  };
  everywhere: {
    title: string;
    subtitle: string;
    moments: { icon: LucideIcon; time: string; text: string }[];
    devicesTitle: string;
    devicesSubtitle: string;
    realtimeLabel: string;
  };
  support: {
    badge: string;
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    badgeNote: string;
  };
  pricing: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaText: string;
    note: string;
    plans: {
      name: string;
      price: string;
      period: string;
      description: string;
      featured?: boolean;
      badge?: string;
      included: string[];
      excluded?: string[];
    }[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  seoText: {
    title: string;
    paragraphs: string[];
    links: { href: string; label: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    bullets: string[];
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  ratingValueSchema?: string;
  ratingCountSchema?: string;
  areaServed?: string[];
};

const DEVICE_ICONS = [Smartphone, Tablet, Monitor];

export default function MarketHomePage({ content }: { content: MarketHomeContent }) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: content.serviceName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    description: content.serviceDescription,
    url: `${BASE_URL}${content.canonicalPath}`,
    inLanguage: content.htmlLang,
    author: { "@type": "Organization", name: "Treatflow", url: BASE_URL },
    offers: content.pricing.plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price.replace(/[^\d]/g, ""),
      priceCurrency: "EUR",
      description: plan.description,
    })),
    ...(content.ratingValueSchema
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: content.ratingValueSchema,
            ratingCount: content.ratingCountSchema ?? "19",
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
  };

  return (
    <>
      <Script
        id={`software-schema-${content.locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id={`faq-schema-${content.locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFaqSchema(content.faq.items)),
        }}
      />

      {/* Hero */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {content.hero.eyebrow}
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
              {content.hero.titleLead}{" "}
              <span className="text-indigo-600">{content.hero.titleHighlight}</span>
              {content.hero.titleTail ? ` ${content.hero.titleTail}` : ""}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href={content.appRegister}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {content.hero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={content.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                {content.hero.secondaryCta}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-600 mb-6">
              {content.hero.bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
              <span className="font-semibold text-gray-900">{content.hero.ratingLabel}</span>
              <span className="text-gray-400">|</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">{content.hero.ratingValue}</span>
            </div>
          </div>
          <div className="order-2 relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[4/3] lg:min-h-[400px] lg:aspect-auto">
            <Image
              src={content.hero.image.src}
              alt={content.hero.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* AI answer capsules (Answer Engine Optimization) */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {content.aiCapsules.map((capsule, i) => (
            <AiAnswerCapsule
              key={capsule.question}
              question={capsule.question}
              answer={capsule.answer}
              className={i === 0 ? "mt-0" : ""}
            />
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {content.trustBar.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                <item.icon className="h-4 w-4 text-indigo-500" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 lg:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {content.steps.title}
              </h2>
              <p className="text-gray-600">{content.steps.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {content.steps.items.map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-xl border border-gray-100 p-5 text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href={content.appRegister}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
              >
                {content.steps.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {content.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {content.features.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.features.items.map((item) => {
              const body = (
                <>
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </>
              );
              return item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
                >
                  {body}
                </Link>
              ) : (
                <div
                  key={item.label}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
                >
                  {body}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <a
              href={content.appRegister}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              {content.features.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="text-sm text-gray-500 mt-3">{content.features.ctaNote}</p>
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {content.extras.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {content.extras.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.extras.items.map((item) => {
              const body = (
                <>
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  {item.href && (
                    <span className="inline-flex items-center text-sm font-medium text-indigo-600 mt-4 group-hover:text-indigo-700">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </>
              );
              return item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
                >
                  {body}
                </Link>
              ) : (
                <div
                  key={item.label}
                  className="group bg-white p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl"
                >
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {content.comparison.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {content.comparison.subtitle}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-4 text-sm font-semibold text-gray-500" />
              <div className="p-4 text-center text-sm font-bold text-indigo-600">
                {content.comparison.treatflowLabel}
              </div>
              <div className="p-4 text-center text-sm font-semibold text-gray-500">
                {content.comparison.otherLabel}
              </div>
            </div>
            {content.comparison.rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-b border-gray-100 last:border-0`}
              >
                <div className="p-4 text-sm font-medium text-gray-900">{row.feature}</div>
                <div className="p-4 flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{row.treatflow}</span>
                </div>
                <div className="p-4 flex items-start gap-2 text-sm text-gray-500">
                  <X className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>{row.other}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {content.verticals.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {content.verticals.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {content.verticals.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <span className="bg-indigo-50 border border-indigo-200 rounded-full px-5 py-2 text-sm font-medium text-indigo-700">
              {content.verticals.moreLabel}
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {content.stats.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.stats.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.stats.items.map((stat) => (
              <div
                key={stat.label}
                className="relative bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={content.appRegister}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {content.stats.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="text-sm text-gray-500 mt-3">{content.stats.ctaNote}</p>
          </div>
        </div>
      </section>

      {/* Everywhere */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {content.everywhere.title}
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {content.everywhere.subtitle}
              </p>
              <div className="space-y-6">
                {content.everywhere.moments.map((m) => (
                  <div key={m.time} className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <m.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{m.time}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 lg:p-8 w-full max-w-md">
                <div className="text-center mb-6">
                  <div className="text-sm font-semibold text-indigo-600 mb-2">
                    {content.everywhere.devicesTitle}
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {content.everywhere.devicesSubtitle}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {DEVICE_ICONS.map((Icon, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 bg-gray-50 rounded-2xl p-4 border border-gray-100"
                    >
                      <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                        <Icon className="h-5 w-5 text-indigo-600" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    {content.everywhere.realtimeLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support banner */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 shadow-xl">
            <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute right-1/4 -bottom-10 h-44 w-44 rounded-full bg-fuchsia-300/20 blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center p-6 sm:p-8 lg:p-10">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5" />
                  {content.support.badge}
                </div>
                <h2 className="mt-4 text-2xl lg:text-3xl font-bold text-white leading-tight">
                  {content.support.title}
                </h2>
                <p className="mt-3 text-base text-white/85 leading-relaxed">
                  {content.support.text}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={content.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-md transition-all duration-300 hover:bg-indigo-50 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {content.support.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={content.appRegister}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    {content.support.secondaryCta}
                  </a>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-4 text-sm font-medium text-white backdrop-blur-sm ring-1 ring-white/20">
                  <CheckCircle className="h-5 w-5 text-emerald-300" />
                  {content.support.badgeNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="h-4 w-4 fill-current" />
              {content.pricing.badge}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {content.pricing.title}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {content.pricing.titleHighlight}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content.pricing.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.pricing.plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? "bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-6 relative overflow-hidden"
                    : "bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
                }
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-1 ${plan.featured ? "" : "text-gray-900"}`}>
                    {plan.price}
                    <span className={`text-lg ${plan.featured ? "text-indigo-200" : "text-gray-600"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm mt-2 ${plan.featured ? "text-indigo-200" : "text-gray-500"}`}>
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.included.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle
                        className={`h-4 w-4 mr-3 flex-shrink-0 ${plan.featured ? "text-green-300" : "text-green-500"}`}
                      />
                      <span className={`text-sm ${plan.featured ? "" : "text-gray-700"}`}>{feature}</span>
                    </li>
                  ))}
                  {plan.excluded?.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <X className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={content.appRegister}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    plan.featured
                      ? "w-full bg-white text-indigo-600 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                      : "w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                  }
                >
                  {content.pricing.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-600 text-sm">{content.pricing.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <HelpCircle className="h-4 w-4" />
              {content.faq.badge}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{content.faq.title}</h2>
            <p className="text-xl text-gray-600">{content.faq.subtitle}</p>
          </div>
          <MarketFaqAccordion items={content.faq.items} />
        </div>
      </section>

      {/* SEO text */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
            {content.seoText.title}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            {content.seoText.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {content.seoText.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-indigo-600 transition-colors underline underline-offset-4"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-indigo-600" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            {content.finalCta.title}
          </h2>
          <p className="text-indigo-100 text-lg mb-8">{content.finalCta.subtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 text-white/90">
            {content.finalCta.bullets.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-sm"
              >
                <CheckCircle className="h-4 w-4 text-indigo-200 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a
              href={content.appRegister}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              {content.finalCta.primaryCta}
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
            <a
              href={content.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              {content.finalCta.secondaryCta}
            </a>
          </div>
          <p className="text-sm text-indigo-200 mt-6">{content.finalCta.note}</p>
        </div>
      </section>
    </>
  );
}
