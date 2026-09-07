import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AiAnswerCapsule, { AiAnswerCapsuleGroup } from "./AiAnswerCapsule";
import Breadcrumbs, { generateBreadcrumbSchema } from "./Breadcrumbs";
import FaqSectionEn from "./FaqSectionEn";
import TreatmentWorkflow from "./TreatmentWorkflow";
import { getFeaturesOverview } from "@/app/i18n/markets/features-overview";
import type { PrefixedMarket } from "@/app/i18n/config";

export default function FeaturesPageEn({ market = "en" }: { market?: PrefixedMarket }) {
  const content = getFeaturesOverview(market);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: market === "tr" ? "Treatflow özellikleri" : "Treatflow features",
    itemListElement: content.cards.map((card, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: card.title,
      url: `https://www.treatflow.io${card.href}`,
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema(
              [{ label: content.breadcrumbLabel }],
              content.homeHref,
              market === "tr" ? "Ana sayfa" : "Home"
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Breadcrumbs
        homeHref={content.homeHref}
        homeLabel={market === "tr" ? "Ana sayfa" : "Home"}
        items={[{ label: content.breadcrumbLabel }]}
      />

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {content.eyebrow}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {content.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
              {content.subtitle}
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {content.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={content.registerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              >
                {content.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                href={content.pricingHref}
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                {content.pricingCta}
              </Link>
            </div>
          </div>
          <div className="order-2 relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[4/3] lg:min-h-[400px] lg:aspect-auto">
            <Image
              src={content.heroImageSrc}
              alt={content.heroImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              quality={85}
              priority
            />
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 bg-white pt-12 pb-10">
        <AiAnswerCapsuleGroup>
          {content.capsules.map((capsule) => (
            <AiAnswerCapsule
              key={capsule.question}
              question={capsule.question}
              answer={capsule.answer}
            />
          ))}
        </AiAnswerCapsuleGroup>
      </div>

      <TreatmentWorkflow
        title={content.workflowTitle}
        subtitle={content.workflowSubtitle}
        steps={content.workflowSteps}
        stepLabel={content.stepLabel}
        learnMore={content.learnMore}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {content.cardsTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {content.cardsSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.cards.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group flex h-full flex-col bg-white border border-gray-100 rounded-3xl p-7 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div
                  className={`w-11 h-11 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed flex-1">{feature.desc}</p>
                <ul className="space-y-2 mb-5">
                  {feature.highlights.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-sm font-medium text-indigo-600 mt-auto">
                  {content.learnMore}
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {content.showCheckoutSection && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {content.checkoutTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{content.checkoutText}</p>
            {content.checkoutNote && content.checkoutLinkHref && content.checkoutLinkLabel && (
              <p className="text-sm text-gray-500">
                {content.checkoutNote}{" "}
                <Link href={content.checkoutLinkHref} className="text-indigo-600 hover:underline">
                  {content.checkoutLinkLabel}
                </Link>
              </p>
            )}
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            {content.industriesTitle}
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            {content.industriesSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {content.industries.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            {content.relatedTitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {content.relatedLinks.map((link) => (
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

      <FaqSectionEn faqs={content.faqs} title={content.faqTitle} badge={content.faqBadge} />

      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{content.bottomTitle}</h2>
          <p className="text-indigo-100 text-lg mb-8">{content.bottomText}</p>
          <a
            href={content.registerHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
          >
            {content.primaryCta}
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
