import Script from "next/script";
import { siteIcons } from "@/app/site/icons";
import { getFeatureCommon } from "@/app/site/content/feature-common";
import type { SiteMarket } from "@/app/site/content/shared";

/**
 * Kompakte Fakten-Box für Money-Pages.
 *
 * Bewusst sehr dicht, scannbar und ohne Marketing-Floskeln gehalten,
 * damit KI-Crawler (ChatGPT, Perplexity, Claude, Google AI Overviews)
 * die Kernfakten in einem Block extrahieren können.
 *
 * Liefert zusätzlich Speakable-Schema, damit Sprachassistenten/AI
 * diesen Block bevorzugt vorlesen/zitieren.
 */

type Variant = "default" | "compact";

interface QuickFactsProps {
    variant?: Variant;
    className?: string;
    /** Sprache; ohne Angabe Deutsch. Texte: app/site/content/feature-common */
    market?: SiteMarket;
    /** `false`, wenn die Seite `speakable` schon in ihrem eigenen WebPage-Schema hat (PageSchemas). */
    speakableSchema?: boolean;
}

const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#treatflow-quick-facts"],
    },
};

export default function QuickFacts({
    variant = "default",
    className = "",
    market = "de",
    speakableSchema: withSpeakable = true,
}: QuickFactsProps) {
    const isCompact = variant === "compact";
    const content = getFeatureCommon(market).quickFacts;

    return (
        <section
            id="treatflow-quick-facts"
            aria-label={content.ariaLabel}
            className={`${isCompact ? "py-10" : "py-16"} bg-white ${className}`}
        >
            {withSpeakable && (
                <Script
                    id="quickfacts-speakable"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
                />
            )}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!isCompact && (
                    <div className="text-center mb-10">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                            {content.title}
                        </h2>
                        <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                            {content.subtitle}
                        </p>
                    </div>
                )}

                <div
                    className={`grid gap-4 ${
                        isCompact
                            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
                            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
                    }`}
                    itemScope
                    itemType="https://schema.org/Organization"
                >
                    <meta itemProp="name" content="Treatflow" />
                    <meta itemProp="url" content="https://www.treatflow.io" />
                    <meta itemProp="foundingDate" content="2023" />
                    <meta itemProp="foundingLocation" content="Bischofshofen, Austria" />

                    {content.facts.map((fact) => {
                        const Icon = siteIcons[fact.icon];
                        return (
                        <div
                            key={fact.value}
                            className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center hover:shadow-md transition-all duration-300"
                        >
                            <div
                                className={`w-10 h-10 ${fact.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                            >
                                <Icon className="h-5 w-5" />
                            </div>
                            <div className="text-sm lg:text-base font-bold text-gray-900 leading-tight mb-1">
                                {fact.value}
                            </div>
                            <div className="text-xs text-gray-500 leading-snug">
                                {fact.label}
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
