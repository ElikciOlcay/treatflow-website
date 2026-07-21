import {
  ArrowRight,
  CheckCircle,
  Lock,
  Server,
  Shield,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import AiAnswerCapsule from "./AiAnswerCapsule";

export type HomePageIntlContent = {
  locale: string;
  earlyAccessHref: string;
  pricingHref: string;
  hero: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    titleTail?: string;
    subtitle: string;
    primaryCta: string;
    trustItems: string[];
    studiosLabel: string;
    ratingValue: string;
    image: { src: string; alt: string };
  };
  aiCapsules: { question: string; answer: string }[];
  trustBar: { icon: LucideIcon; text: string }[];
  features: {
    title: string;
    subtitle: string;
    ctaNote: string;
    items: { icon: LucideIcon; label: string; desc: string; color: string }[];
  };
  extras: {
    title: string;
    subtitle: string;
    items: { icon: LucideIcon; label: string; desc: string }[];
  };
  faqs: {
    title: string;
    pricingLinkLabel: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    note: string;
  };
  schemas?: {
    software?: Record<string, unknown>;
    faq?: Record<string, unknown>;
  };
};

export default function HomePageIntl({ content }: { content: HomePageIntlContent }) {
  return (
    <>
      {content.schemas?.software && (
        <Script
          id={`structured-data-${content.locale}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(content.schemas.software) }}
        />
      )}
      {content.schemas?.faq && (
        <Script
          id={`faq-schema-${content.locale}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(content.schemas.faq) }}
        />
      )}

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
              <Link
                href={content.earlyAccessHref}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {content.hero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-600 mb-6">
              {content.hero.trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
              <span className="font-semibold text-gray-900">{content.hero.studiosLabel}</span>
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

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {content.aiCapsules.map((capsule, index) => (
            <AiAnswerCapsule
              key={capsule.question}
              question={capsule.question}
              answer={capsule.answer}
              className={index === 0 ? "mt-0" : undefined}
            />
          ))}
        </div>
      </section>

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
            {content.features.items.map((item) => (
              <div
                key={item.label}
                className="group relative bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={content.earlyAccessHref}
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              {content.hero.primaryCta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <p className="text-sm text-gray-500 mt-3">{content.features.ctaNote}</p>
          </div>
        </div>
      </section>

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
            {content.extras.items.map((item) => (
              <div
                key={item.label}
                className="group bg-white p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">
            {content.faqs.title}
          </h2>
          <div className="space-y-4">
            {content.faqs.items.map((item) => (
              <div key={item.q} className="border border-gray-100 rounded-xl p-6 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={content.pricingHref}
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
            >
              {content.faqs.pricingLinkLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-600" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">{content.cta.title}</h2>
          <p className="text-indigo-100 text-lg mb-8">{content.cta.subtitle}</p>
          <div className="flex justify-center">
            <Link
              href={content.earlyAccessHref}
              className="bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {content.hero.primaryCta}
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-indigo-200 mt-6">{content.cta.note}</p>
        </div>
      </section>
    </>
  );
}

export const homeTrustIcons = { Lock, Server, Shield, ShieldCheck };
