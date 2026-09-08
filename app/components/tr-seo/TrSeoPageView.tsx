"use client";

import { useEffect } from "react";

export default function TrSeoPageView({
  landingPage,
  keywordCluster,
}: {
  landingPage: string;
  keywordCluster: string;
}) {
  useEffect(() => {
    const w = window as Window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "tr_seo_page_view",
      landing_page: landingPage,
      keyword_cluster: keywordCluster,
      market: "TR",
      locale: "tr",
    });
  }, [landingPage, keywordCluster]);

  return null;
}
