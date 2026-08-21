import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/app/i18n/seo";
import {
  isPrefixedMarket,
  marketLanguage,
  type PrefixedMarket,
} from "@/app/i18n/config";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import { getContactCopy } from "@/app/i18n/markets/static-pages-nl-fi";

const enContact = {
  metaTitle: "Contact Treatflow",
  metaDescription:
    "Get in touch with the Treatflow team. We help beauty salons and aesthetic clinics digitize appointments, forms and treatment documentation.",
  title: "Contact",
  body: "Email us at hello@treatflow.io or start your free trial right away.",
  cta: "Start free trial",
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
    locale: market,
    pageKey: "contact",
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
  const registerUrl = APP_REGISTER_BY_MARKET[market];
  const ctaLabel =
    lang === "nl"
      ? "Gratis proberen"
      : lang === "fi"
        ? "Aloita ilmainen kokeilu"
        : content.cta;

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
        <a
          href={registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
