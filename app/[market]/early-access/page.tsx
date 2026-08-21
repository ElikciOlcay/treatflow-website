import { notFound, redirect } from "next/navigation";
import {
  isPrefixedMarket,
  type PrefixedMarket,
} from "@/app/i18n/config";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";

/**
 * Early Access entfaellt: alle Maerkte registrieren sich direkt in der App.
 * Alte URLs werden auf die Register-URL mit passendem ?lang= umgeleitet.
 */
export default async function EarlyAccessRedirectPage({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  redirect(APP_REGISTER_BY_MARKET[market]);
}
