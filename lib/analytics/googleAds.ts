import { getStoredAttribution } from "./adsAttribution";

const ADS_ID_RE = /^AW-\d+$/;
const ADS_LABEL_RE = /^[A-Za-z0-9_-]+$/;

function adsId(): string {
    const raw = (process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "").trim();
    return ADS_ID_RE.test(raw) ? raw : "";
}

function leadLabel(): string {
    const raw = (process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL || "").trim();
    return ADS_LABEL_RE.test(raw) ? raw : "";
}

export function trackGenerateLead(options: {
    source: string;
    email?: string;
    phone?: string;
    transactionId?: string;
    value?: number;
}): void {
    if (typeof window === "undefined") return;

    const attribution = getStoredAttribution();
    const w = window as Window & {
        dataLayer?: Record<string, unknown>[];
        gtag?: (...args: unknown[]) => void;
    };

    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
        event: "generate_lead",
        lead_source: options.source,
        value: options.value ?? 0,
        currency: "EUR",
        ...attribution,
    });

    if (typeof w.gtag !== "function") return;

    w.gtag("event", "generate_lead", {
        event_category: "lead",
        event_label: options.source,
        value: options.value ?? 0,
        currency: "EUR",
    });

    const conversionId = adsId();
    const label = leadLabel();
    if (!conversionId || !label) return;

    if (options.email) {
        w.gtag("set", "user_data", {
            email: options.email,
            phone_number: options.phone || undefined,
        });
    }

    w.gtag("event", "conversion", {
        send_to: `${conversionId}/${label}`,
        value: options.value ?? 0,
        currency: "EUR",
        transaction_id: options.transactionId,
    });
}
