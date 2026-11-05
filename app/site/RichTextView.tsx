import { Fragment } from "react";
import Link from "next/link";
import { resolveHref } from "@/app/i18n/site-pages";
import type { RichText, SiteMarket } from "./content/shared";

/**
 * Gibt `RichText` aus. Links werden je Sprache aufgelöst; gibt es die Zielseite
 * in der Sprache nicht, bleibt nur der Text stehen.
 */
export default function RichTextView({
  text,
  market,
  linkClassName,
}: {
  text: RichText;
  market: SiteMarket;
  linkClassName: string;
}) {
  if (typeof text === "string") return <>{text}</>;
  return (
    <>
      {text.map((part, index) => {
        if (typeof part === "string") return <Fragment key={index}>{part}</Fragment>;
        const href = resolveHref(market, part.href);
        if (!href) return <Fragment key={index}>{part.text}</Fragment>;
        return (
          <Link key={index} href={href} className={linkClassName}>
            {part.text}
          </Link>
        );
      })}
    </>
  );
}
