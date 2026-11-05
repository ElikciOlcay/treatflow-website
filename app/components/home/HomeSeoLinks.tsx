import Link from "next/link";
import { filterByFeature } from "@/app/i18n/feature-availability";
import { resolveHref } from "@/app/i18n/site-pages";
import RichTextView from "@/app/site/RichTextView";
import type { HomeSeoContent } from "@/app/site/content/home/types";
import type { SiteMarket } from "@/app/site/content/shared";

/** SEO-Block nach dem CTA: Einleitungssatz + interne Links. */
export default function HomeSeoLinks({ content, market }: { content: HomeSeoContent; market: SiteMarket }) {
  const links = filterByFeature(content.links, market).flatMap((link) => {
    const href = resolveHref(market, link.href);
    return href ? [{ href, label: link.label }] : [];
  });

  return (
    <section className="py-10 bg-white border-t border-gray-100" aria-label={content.ariaLabel}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          <RichTextView text={content.intro} market={market} linkClassName="text-indigo-600 hover:underline" />
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-indigo-600 transition-colors underline underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
