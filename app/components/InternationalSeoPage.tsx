import {
  ArrowRight,
  CheckCircle,
  Shield,
  Server,
  Lock,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import AiAnswerCapsule from "./AiAnswerCapsule";
import FaqSectionEn, { type FaqEntry } from "./FaqSectionEn";
import { generateServiceSchema } from "@/lib/schema";
import type { SeoPageKey } from "../i18n/seo";
import { BASE_URL, type Locale } from "../i18n/config";
import { getPrimaryCtaPath } from "../i18n/market-access";

export type FeatureBlock = {
  icon: LucideIcon;
  title: string;
  desc: string;
  points?: string[];
};

export type PageImage = {
  src: string;
  alt: string;
};

export type ProblemBlock = {
  problem: string;
  solution: string;
};

export type InternalLink = {
  href: string;
  label: string;
};

export type InternationalPageContent = {
  pageKey: SeoPageKey;
  canonicalPath: string;
  serviceName: string;
  serviceDescription: string;
  hero: {
    marketLabel: string;
    eyebrow: string;
    h1: string;
    subtitle: string;
  };
  aiCapsules: { question: string; answer: string }[];
  whatIsTreatflow: { title: string; paragraphs: string[] };
  whoIsItFor: { title: string; audiences: string[] };
  problems: { title: string; items: ProblemBlock[] };
  features: { title: string; items: FeatureBlock[] };
  benefits: { title: string; items: string[] };
  marketFit: { title: string; paragraphs: string[]; highlights: string[] };
  bestFor?: { title: string; items: string[] };
  useCases?: { title: string; items: string[] };
  comparison?: { title: string; paragraphs: string[] };
  aiSummary: { title: string; text: string };
  faqs: FaqEntry[];
  internalLinks: InternalLink[];
  internalLinksTitle?: string;
  areaServed?: string[];
  theme?: string;
  locale?: Extract<Locale, "en" | "es" | "it" | "fr">;
  ctaPrimaryLabel?: string;
  ctaBottomTitle?: string;
  ctaBottomText?: string;
  trustTrialLabel?: string;
  images?: {
    lifestyle?: PageImage;
    mockup?: PageImage;
  };
};

export default function InternationalSeoPage({
  content,
}: {
  content: InternationalPageContent;
}) {
  const locale = content.locale ?? "en";
  const earlyAccessHref = getPrimaryCtaPath(locale);
  const primaryLabel = content.ctaPrimaryLabel ?? "Request early access";
  const bottomTitle = content.ctaBottomTitle ?? "Ready to modernise your studio?";
  const bottomText =
    content.ctaBottomText ??
    "Request early access for your country. Self-serve signup is currently available in Germany, Austria and Switzerland.";
  const trustTrial = content.trustTrialLabel ?? "Early access available";

  const serviceSchema = generateServiceSchema({
    name: content.serviceName,
    description: content.serviceDescription,
    url: `${BASE_URL}${content.canonicalPath}`,
    serviceType: "Beauty and aesthetic studio management software",
    areaServed: content.areaServed ?? ["EU"],
  });

  return (
    <>
      <Script
        id={`service-schema-${content.pageKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {content.hero.eyebrow}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{content.hero.h1}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {content.hero.subtitle}
          </p>
          <div className="flex justify-center">
            <Link
              href={earlyAccessHref}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              {primaryLabel}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {content.aiCapsules.map((capsule) => (
          <AiAnswerCapsule
            key={capsule.question}
            question={capsule.question}
            answer={capsule.answer}
          />
        ))}
      </section>

      {/* What is Treatflow */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.whatIsTreatflow.title}</h2>
          {content.whatIsTreatflow.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-gray-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.whoIsItFor.title}</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {content.whoIsItFor.audiences.map((audience) => (
              <li key={audience} className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.problems.title}
          </h2>
          <div className="space-y-4">
            {content.problems.items.map((item) => (
              <div
                key={item.problem}
                className="bg-gray-50 rounded-xl border border-gray-100 p-6"
              >
                <p className="font-semibold text-gray-900 mb-2">{item.problem}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            {content.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.items.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.benefits.title}</h2>
          <ul className="space-y-3">
            {content.benefits.items.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Best for / Use cases / Comparison */}
      {(content.bestFor || content.useCases || content.comparison) && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {content.bestFor && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.bestFor.title}</h2>
                <ul className="space-y-2">
                  {content.bestFor.items.map((item) => (
                    <li key={item} className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-indigo-600 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {content.useCases && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.useCases.title}</h2>
                <ul className="space-y-2">
                  {content.useCases.items.map((item) => (
                    <li key={item} className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-indigo-600 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {content.comparison && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.comparison.title}</h2>
                {content.comparison.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-gray-600 leading-relaxed mb-3">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Market fit */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.marketFit.title}</h2>
          {content.marketFit.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-gray-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {content.marketFit.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 bg-indigo-50 rounded-xl p-4 border border-indigo-100"
              >
                <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: "GDPR / AVG compliant" },
              { icon: Server, text: "EU-hosted servers" },
              { icon: Lock, text: "SSL-encrypted" },
              { icon: CheckCircle, text: trustTrial },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Summary */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.aiSummary.title}</h2>
          <p className="text-gray-700 leading-relaxed">{content.aiSummary.text}</p>
        </div>
      </section>

      {/* Internal links */}
      {content.internalLinks.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              {content.internalLinksTitle ?? "Related pages"}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {content.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqSectionEn faqs={content.faqs} />

      {/* CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{bottomTitle}</h2>
          <p className="text-indigo-100 text-lg mb-8">{bottomText}</p>
          <div className="flex justify-center">
            <Link
              href={earlyAccessHref}
              className="bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center"
            >
              {primaryLabel}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
