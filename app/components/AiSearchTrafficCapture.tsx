"use client";

import { useEffect } from "react";

const AI_HOSTS = [
  "chatgpt.com",
  "chat.openai.com",
  "perplexity.ai",
  "gemini.google.com",
  "copilot.microsoft.com",
];

function hostFromReferrer(referrer: string): string | null {
  try {
    return new URL(referrer).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function isAiHost(host: string): boolean {
  return AI_HOSTS.some((ai) => host === ai || host.endsWith(`.${ai}`));
}

/**
 * Erfasst ChatGPT-/AI-Search-Referrals in dataLayer, ohne bestehende
 * GTM-/GA4-Events zu ersetzen. UTM bleibt erhalten, falls ChatGPT ihn setzt.
 */
export default function AiSearchTrafficCapture() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source")?.toLowerCase() ?? "";
    const referrerHost = hostFromReferrer(document.referrer);
    const fromUtm =
      utmSource.includes("chatgpt") ||
      utmSource.includes("openai") ||
      utmSource.includes("perplexity") ||
      utmSource === "gemini";
    const fromReferrer = referrerHost ? isAiHost(referrerHost) : false;

    if (!fromUtm && !fromReferrer) return;

    const source =
      utmSource ||
      (referrerHost?.includes("chatgpt") || referrerHost?.includes("openai")
        ? "chatgpt.com"
        : referrerHost ?? "ai_search");

    try {
      sessionStorage.setItem("tf_traffic_source", "ai_search");
      sessionStorage.setItem("tf_ai_source", source);
    } catch {
      /* private mode */
    }

    const w = window as Window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "ai_search_referral",
      traffic_channel: "AI Search / ChatGPT",
      traffic_source: source,
      referrer_host: referrerHost ?? undefined,
      utm_source: utmSource || undefined,
    });
  }, []);

  return null;
}

export function withAiSearchUtm(href: string): string {
  if (typeof window === "undefined") return href;
  try {
    if (sessionStorage.getItem("tf_traffic_source") !== "ai_search") return href;
    const url = new URL(href, window.location.origin);
    if (!url.searchParams.get("utm_source")) {
      url.searchParams.set(
        "utm_source",
        sessionStorage.getItem("tf_ai_source") || "chatgpt.com"
      );
    }
    if (!url.searchParams.get("utm_medium")) {
      url.searchParams.set("utm_medium", "ai_search");
    }
    return url.toString();
  } catch {
    return href;
  }
}
