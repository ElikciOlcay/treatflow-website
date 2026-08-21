import { ArrowRight, CheckCircle, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FaqSectionEn, { type FaqEntry } from "./FaqSectionEn";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type FeaturePageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  image: { src: string; alt: string };
  features: FeatureItem[];
  closingTitle: string;
  closingText: string;
  earlyAccessHref?: string;
  primaryCta?: string;
  bottomTitle?: string;
  bottomText?: string;
  faqs?: FaqEntry[];
  relatedLinks?: { href: string; label: string }[];
  relatedTitle?: string;
  trustItems?: string[];
};

export default function FeaturePageEn({
  eyebrow,
  title,
  subtitle,
  bullets,
  image,
  features,
  closingTitle,
  closingText,
  earlyAccessHref = APP_REGISTER_BY_MARKET.us,
  primaryCta = "Start 14-day free trial",
  bottomTitle = "Ready to get started?",
  bottomText = "Start your free trial – no credit card required, cancel anytime.",
  faqs,
  relatedLinks,
  relatedTitle = "Related pages",
  trustItems = [
    "GDPR / EU hosting",
    "14-day free trial",
    "No commission on bookings",
  ],
}: FeaturePageProps) {
  const CtaTag = earlyAccessHref.startsWith("http") ? "a" : Link;
  const ctaProps = earlyAccessHref.startsWith("http")
    ? { href: earlyAccessHref, target: "_blank", rel: "noopener noreferrer" }
    : { href: earlyAccessHref };
  return (
    <>
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {eyebrow}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
              {subtitle}
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CtaTag
                {...ctaProps}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              >
                {primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </CtaTag>
            </div>
          </div>
          <div className="order-2 relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[4/3] lg:min-h-[400px] lg:aspect-auto">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4 text-center sm:text-left">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-700">
                <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="group bg-white p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{closingTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{closingText}</p>
        </div>
      </section>

      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">{relatedTitle}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedLinks.map((link) => (
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

      {faqs && faqs.length > 0 && <FaqSectionEn faqs={faqs} />}

      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{bottomTitle}</h2>
          <p className="text-indigo-100 text-lg mb-8">{bottomText}</p>
          <CtaTag
            {...ctaProps}
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
          >
            {primaryCta}
            <ArrowRight className="ml-3 h-5 w-5" />
          </CtaTag>
        </div>
      </section>
    </>
  );
}
