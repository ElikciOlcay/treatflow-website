import Script from "next/script";
import {
    MapPin,
    Shield,
    Euro,
    Users,
    Star,
    Clock,
} from "lucide-react";

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
}

const facts = [
    {
        icon: MapPin,
        value: "Made in Austria",
        label: "Bischofshofen, gegründet 2023",
        color: "bg-rose-100 text-rose-600",
    },
    {
        icon: Shield,
        value: "DSGVO-konform",
        label: "EU-Server (Frankfurt), SSL, tägliche Backups",
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        icon: Euro,
        value: "Ab 39 EUR/Monat",
        label: "Basic-Plan, jährlich 35 EUR/Monat",
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        icon: Users,
        value: "500+ Studios",
        label: "Im deutschsprachigen Raum (DE, AT, CH)",
        color: "bg-amber-100 text-amber-600",
    },
    {
        icon: Star,
        value: "4,6/5 Sterne",
        label: "Google-Bewertungen aus 19 Reviews",
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        icon: Clock,
        value: "14 Tage kostenlos",
        label: "Ohne Kreditkarte, jederzeit kündbar",
        color: "bg-sky-100 text-sky-600",
    },
];

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
}: QuickFactsProps) {
    const isCompact = variant === "compact";

    return (
        <section
            id="treatflow-quick-facts"
            aria-label="Treatflow Quick Facts"
            className={`${isCompact ? "py-10" : "py-16"} bg-white ${className}`}
        >
            <Script
                id="quickfacts-speakable"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!isCompact && (
                    <div className="text-center mb-10">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                            Treatflow auf einen Blick
                        </h2>
                        <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                            Die wichtigsten Fakten zu Treatflow.
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

                    {facts.map((fact) => (
                        <div
                            key={fact.value}
                            className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center hover:shadow-md transition-all duration-300"
                        >
                            <div
                                className={`w-10 h-10 ${fact.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                            >
                                <fact.icon className="h-5 w-5" />
                            </div>
                            <div className="text-sm lg:text-base font-bold text-gray-900 leading-tight mb-1">
                                {fact.value}
                            </div>
                            <div className="text-xs text-gray-500 leading-snug">
                                {fact.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
