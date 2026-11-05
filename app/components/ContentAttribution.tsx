import Link from "next/link";
import {
  TREATFLOW_AUTHORS,
  formatDate,
  type TreatflowAuthorKey,
} from "@/lib/content-attribution";
import { resolveHrefOrHome } from "@/app/i18n/site-pages";
import { getFeatureCommon } from "@/app/site/content/feature-common";
import type { SiteMarket } from "@/app/site/content/shared";

type ContentAttributionProps = {
  dateModified: string;
  datePublished?: string;
  authorKey?: TreatflowAuthorKey;
  className?: string;
  /** Sprache; ohne Angabe Deutsch. */
  market?: SiteMarket;
};

/**
 * Sichtbare Autor- und Aktualisierungszeile (E-E-A-T / AI-Citations).
 * Unter Hero oder AiAnswerCapsule platzieren.
 */
export default function ContentAttribution({
  dateModified,
  datePublished,
  authorKey = "olcay",
  className = "",
  market = "de",
}: ContentAttributionProps) {
  const author = TREATFLOW_AUTHORS[authorKey];
  const labels = getFeatureCommon(market).attribution;
  const authorHref = resolveHrefOrHome(market, labels.authorHref);
  const modifiedLabel = formatDate(dateModified, labels.dateLocale);
  const publishedLabel = datePublished ? formatDate(datePublished, labels.dateLocale) : null;

  return (
    <div
      className={`mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-gray-500 ${className}`}
    >
      <span>
        {labels.updated}{" "}
        <time dateTime={dateModified} className="font-medium text-gray-700">
          {modifiedLabel}
        </time>
      </span>
      <span className="hidden sm:inline text-gray-300" aria-hidden>
        ·
      </span>
      <span>
        {labels.by}{" "}
        <Link
          href={authorHref}
          className="font-medium text-indigo-700 hover:text-indigo-800 transition-colors"
        >
          {author.name}
        </Link>
        <span className="text-gray-500">, {labels.jobTitles[authorKey]}</span>
      </span>
      {publishedLabel && publishedLabel !== modifiedLabel && (
        <>
          <span className="hidden sm:inline text-gray-300" aria-hidden>
            ·
          </span>
          <span>
            {labels.created}{" "}
            <time dateTime={datePublished} className="text-gray-600">
              {publishedLabel}
            </time>
          </span>
        </>
      )}
    </div>
  );
}
