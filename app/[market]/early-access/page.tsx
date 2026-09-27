import { notFound, redirect } from "next/navigation";
import {
  isPrefixedMarket,
} from "@/app/i18n/config";
import { DEMO_BOOKING_URL } from "@/app/i18n/market-access";

/**
 * Alte Early-Access-URLs gehen auf die persönliche Demo.
 */
export default async function EarlyAccessRedirectPage({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  redirect(DEMO_BOOKING_URL);
}
