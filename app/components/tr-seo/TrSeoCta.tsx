"use client";

import { useEffect, useState } from "react";
import { withAiSearchUtm } from "@/app/components/AiSearchTrafficCapture";

type Props = {
  href: string;
  label: string;
  className?: string;
  landingPage: string;
  keywordCluster: string;
};

export default function TrSeoCta({
  href,
  label,
  className,
  landingPage,
  keywordCluster,
}: Props) {
  const [resolvedHref, setResolvedHref] = useState(href);

  useEffect(() => {
    setResolvedHref(withAiSearchUtm(href));
  }, [href]);

  function onClick() {
    const w = window as Window & {
      dataLayer?: Record<string, unknown>[];
      gtag?: (...args: unknown[]) => void;
    };
    const payload = {
      event_category: "seo_landing",
      event_label: landingPage,
      landing_page: landingPage,
      keyword_cluster: keywordCluster,
      market: "TR",
      locale: "tr",
    };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "tr_seo_signup_click", ...payload });
    if (typeof w.gtag === "function") {
      w.gtag("event", "generate_lead", payload);
    }
  }

  return (
    <a
      href={resolvedHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {label}
    </a>
  );
}
