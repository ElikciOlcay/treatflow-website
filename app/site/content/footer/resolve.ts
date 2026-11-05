import { featureAvailable } from "@/app/i18n/feature-availability";
import { APP_LOGIN_BY_MARKET, APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import { resolveHref } from "@/app/i18n/site-pages";
import type { SiteMarket } from "../shared";
import type { FooterContent, FooterLink } from "./types";

export type ResolvedFooterLink =
  | { kind: "internal"; href: string; label: string }
  | { kind: "external"; href: string; label: string }
  | { kind: "cookie-settings"; label: string };

export type ResolvedFooter = {
  tagline: string;
  instagramAria: string;
  columns: { sections: { title: string; links: ResolvedFooterLink[] }[] }[];
  popularTopicsTitle: string;
  popularTopics: { href: string; label: string }[];
  rights: string;
};

function resolveLink(link: FooterLink, market: SiteMarket): ResolvedFooterLink | null {
  if (link.feature && !featureAvailable(link.feature, market)) return null;
  if ("special" in link) {
    if (link.special === "cookie-settings") return { kind: "cookie-settings", label: link.label };
    const href = link.special === "register" ? APP_REGISTER_BY_MARKET[market] : APP_LOGIN_BY_MARKET[market];
    return { kind: "external", href, label: link.label };
  }
  const href = resolveHref(market, link.href);
  return href ? { kind: "internal", href, label: link.label } : null;
}

/** Filtert nach Funktionsverfügbarkeit, blendet fehlende Seiten und leere Abschnitte aus. */
export function resolveFooter(content: FooterContent, market: SiteMarket): ResolvedFooter {
  return {
    tagline: content.tagline,
    instagramAria: content.instagramAria,
    columns: content.columns
      .map((column) => ({
        sections: column.sections
          .map((section) => ({
            title: section.title,
            links: section.links.flatMap((link) => resolveLink(link, market) ?? []),
          }))
          .filter((section) => section.links.length > 0),
      }))
      .filter((column) => column.sections.length > 0),
    popularTopicsTitle: content.popularTopicsTitle,
    popularTopics: content.popularTopics.flatMap((topic) => {
      if (topic.feature && !featureAvailable(topic.feature, market)) return [];
      const href = resolveHref(market, topic.href);
      return href ? [{ href, label: topic.label }] : [];
    }),
    rights: content.rights,
  };
}
