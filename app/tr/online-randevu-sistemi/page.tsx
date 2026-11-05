import type { Metadata } from "next";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import OnlineBookingPage from "@/app/site/pages/OnlineBookingPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getOnlineBookingContent } from "@/app/site/content/online-booking";

const { meta } = getOnlineBookingContent("tr");

export const metadata: Metadata = buildPageMetadata({
  pageKey: "online-booking",
  locale: "tr",
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
});

/** Gleiche Seite wie DE/[market], Inhalte aus app/site/content/online-booking/tr.ts */
export default function Page() {
  return (
    <TrSeoShell>
      <OnlineBookingPage market="tr" />
    </TrSeoShell>
  );
}
