import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FeaturePage from "./FeaturePage";
import { resolveHref } from "@/app/i18n/site-pages";
import { getFormsContent } from "@/app/site/content/forms";
import type { SiteMarket } from "@/app/site/content/shared";

/** Seite „forms“ für alle Sprachen (DE: Root-Route, sonst app/[market]/…). */
export default function FormsPage({ market }: { market: SiteMarket }) {
  const content = getFormsContent(market);
  const banner = content.tryBanner;
  const bannerHref = resolveHref(market, banner.href);

  return (
    <FeaturePage
      content={content}
      market={market}
      pageKey="forms"
      theme="green"
      afterUnderstand={
        bannerHref ? (
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{banner.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{banner.text}</p>
                </div>
                <Link
                  href={bannerHref}
                  className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  {banner.button}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        ) : null
      }
    />
  );
}
