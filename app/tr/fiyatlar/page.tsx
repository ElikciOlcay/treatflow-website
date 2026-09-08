import type { Metadata } from "next";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import PricingPageIntl from "@/app/components/PricingPageIntl";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getMarketPricingCopy } from "@/app/i18n/markets/market-content";

const copy = getMarketPricingCopy("tr");

export const metadata: Metadata = buildPageMetadata({
  pageKey: "pricing",
  locale: "tr",
  title: copy.meta.title,
  description: copy.meta.description,
});

export default function Page() {
  return (
    <TrSeoShell>
      <div className="pt-16">
        <PricingPageIntl copy={copy} />
      </div>
    </TrSeoShell>
  );
}
