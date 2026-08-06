import Link from "next/link";
import {
  TREATFLOW_AUTHORS,
  formatDeDate,
  type TreatflowAuthorKey,
} from "@/lib/content-attribution";

type ContentAttributionProps = {
  dateModified: string;
  datePublished?: string;
  authorKey?: TreatflowAuthorKey;
  className?: string;
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
}: ContentAttributionProps) {
  const author = TREATFLOW_AUTHORS[authorKey];
  const modifiedLabel = formatDeDate(dateModified);
  const publishedLabel = datePublished ? formatDeDate(datePublished) : null;

  return (
    <div
      className={`mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-gray-500 ${className}`}
    >
      <span>
        Aktualisiert am{" "}
        <time dateTime={dateModified} className="font-medium text-gray-700">
          {modifiedLabel}
        </time>
      </span>
      <span className="hidden sm:inline text-gray-300" aria-hidden>
        ·
      </span>
      <span>
        Von{" "}
        <Link
          href={author.url}
          className="font-medium text-indigo-700 hover:text-indigo-800 transition-colors"
        >
          {author.name}
        </Link>
        <span className="text-gray-500">, {author.jobTitle}</span>
      </span>
      {publishedLabel && publishedLabel !== modifiedLabel && (
        <>
          <span className="hidden sm:inline text-gray-300" aria-hidden>
            ·
          </span>
          <span>
            Erstellt am{" "}
            <time dateTime={datePublished} className="text-gray-600">
              {publishedLabel}
            </time>
          </span>
        </>
      )}
    </div>
  );
}
