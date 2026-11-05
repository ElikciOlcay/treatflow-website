import { filterByFeature } from "@/app/i18n/feature-availability";
import { resolveHref } from "@/app/i18n/site-pages";
import type { SiteIconName, SiteMarket } from "../shared";
import type { NavigationContent, NavMenuItem, NavTextLink } from "./types";

export type ResolvedNavItem = {
  href: string;
  label: string;
  desc: string;
  icon: SiteIconName;
  color: string;
};

export type ResolvedNavLink = { href: string; label: string };

/** Navigation mit aufgelösten Pfaden – serialisierbar (für MobileMenu). */
export type ResolvedNavigation = {
  featuresLabel: string;
  featureGroups: { title: string; items: ResolvedNavItem[] }[];
  allFeatures: ResolvedNavLink | null;
  industriesLabel: string;
  industries: ResolvedNavItem[];
  links: ResolvedNavLink[];
  login: string;
  cta: string;
  menuAria?: string;
};

function resolveItems(items: NavMenuItem[], market: SiteMarket): ResolvedNavItem[] {
  return filterByFeature(items, market).flatMap((item) => {
    const href = resolveHref(market, item.href);
    if (!href) return [];
    return [{ href, label: item.label, desc: item.desc, icon: item.icon, color: item.color }];
  });
}

function resolveLink(link: NavTextLink, market: SiteMarket): ResolvedNavLink | null {
  if (link.feature && filterByFeature([link], market).length === 0) return null;
  const href = resolveHref(market, link.href);
  return href ? { href, label: link.label } : null;
}

/** Filtert nach Funktionsverfügbarkeit und blendet Links auf fehlende Seiten aus. */
export function resolveNavigation(content: NavigationContent, market: SiteMarket): ResolvedNavigation {
  return {
    featuresLabel: content.featuresLabel,
    featureGroups: content.featureGroups
      .map((group) => ({ title: group.title, items: resolveItems(group.items, market) }))
      .filter((group) => group.items.length > 0),
    allFeatures: resolveLink(content.allFeatures, market),
    industriesLabel: content.industriesLabel,
    industries: resolveItems(content.industries, market),
    links: content.links.flatMap((link) => resolveLink(link, market) ?? []),
    login: content.login,
    cta: content.cta,
    menuAria: content.menuAria,
  };
}
