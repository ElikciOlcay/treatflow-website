import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import {
  isPrefixedMarket,
  marketLanguage,
  marketPathPrefix,
  type PrefixedMarket,
} from "@/app/i18n/config";
import Link from "next/link";
import { getContactCopy } from "@/app/i18n/markets/static-pages-nl-fi";

const enContact = {
  metaTitle: "Contact Treatflow",
  metaDescription:
    "Get in touch with the Treatflow team. We help beauty salons and aesthetic clinics digitize appointments, forms and treatment documentation.",
  title: "Contact",
  body: "Email us at hello@treatflow.io or request early access for your market.",
  cta: "Request early access",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const lang = marketLanguage[market];
  const content = lang === "nl" || lang === "fi" ? getContactCopy(lang) : enContact;
  return buildPageMetadata({
    pageKey: "contact",
    locale: market,
    title: content.metaTitle,
    description: content.metaDescription,
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
  const lang = marketLanguage[market];
  const content = lang === "nl" || lang === "fi" ? getContactCopy(lang) : enContact;
  const early = `${marketPathPrefix[market]}/early-access`;

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {content.body.includes("hello@treatflow.io") ? (
            <>
              {content.body.split("hello@treatflow.io")[0]}
              <a
                className="text-indigo-600 font-medium"
                href="mailto:hello@treatflow.io"
              >
                hello@treatflow.io
              </a>
              {content.body.split("hello@treatflow.io")[1]}
            </>
          ) : (
            content.body
          )}
        </p>
        <Link
          href={early}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
        >
          {content.cta}
        </Link>
      </div>
    </section>
  );
}
