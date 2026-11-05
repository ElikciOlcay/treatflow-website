import type { MetadataRoute } from "next";

/** Nur unter DE angeboten bzw. pro Sprache nicht vorhanden. */
const disallow = [
  "/api/",
  "/_next/",
  "/admin/",
  "/dashboard/",
  "/*/point-of-sale",
  "/*/vouchers",
  "/tr/news",
  "/nl/nieuws",
  "/it/novita",
  "/pl/nowosci",
  "/es/novedades",
  "/fr/nouveautes",
];

const allow = [
  "/",
  "/manifest.json",
  "/llms.txt",
  "/llms-*.txt",
  "/api/facts",
];

/**
 * KI-Crawler und -Assistenten ausdruecklich erlaubt (Sichtbarkeit in ChatGPT,
 * Claude, Perplexity, Gemini, Copilot, Apple Intelligence, Meta AI usw.).
 * Eigene Gruppen ersetzen die "*"-Regeln, deshalb bekommen sie dieselben Sperren.
 */
const aiAgents = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "bingbot",
  "meta-externalagent",
  "meta-externalfetcher",
  "Amazonbot",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
  "Bytespider",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow, disallow },
      { userAgent: aiAgents, allow, disallow },
    ],
    sitemap: "https://www.treatflow.io/sitemap.xml",
    host: "https://www.treatflow.io",
  };
}
