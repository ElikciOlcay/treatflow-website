export const ADS_ATTRIBUTION_COOKIE = "tf_ads_attr";
export const ADS_ATTRIBUTION_STORAGE_KEY = "tf_ads_attr";
export const ADS_ATTRIBUTION_MAX_AGE_SECONDS = 90 * 24 * 60 * 60;

export const ATTRIBUTION_KEYS = [
    "gclid",
    "gbraid",
    "wbraid",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
] as const;

export type AttributionKey = (typeof ATTRIBUTION_KEYS)[number];

export type AdsAttribution = {
    gclid?: string;
    gbraid?: string;
    wbraid?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    landing_page?: string;
    captured_at?: string;
};

const TRACKED_HOSTS = ["app.treatflow.io", "meetings-eu1.hubspot.com"];

function sanitize(value: string): string {
    return value.trim().slice(0, 200).replace(/[<>\r\n]/g, "");
}

export function hasAttribution(attr: AdsAttribution | null | undefined): boolean {
    if (!attr) return false;
    return ATTRIBUTION_KEYS.some((key) => Boolean(attr[key]));
}

export function parseAttributionFromSearchParams(
    params: URLSearchParams,
    landingPage?: string,
): AdsAttribution {
    const result: AdsAttribution = {};
    for (const key of ATTRIBUTION_KEYS) {
        const value = params.get(key);
        if (value) result[key] = sanitize(value);
    }
    if (landingPage) result.landing_page = sanitize(landingPage);
    if (hasAttribution(result)) {
        result.captured_at = new Date().toISOString();
    }
    return result;
}

export function parseAttributionFromCookieValue(raw: string | undefined | null): AdsAttribution {
    if (!raw) return {};
    try {
        const parsed = JSON.parse(decodeURIComponent(raw)) as unknown;
        if (!parsed || typeof parsed !== "object") return {};
        const record = parsed as Record<string, unknown>;
        const result: AdsAttribution = {};
        for (const key of ATTRIBUTION_KEYS) {
            const value = record[key];
            if (typeof value === "string" && value) result[key] = sanitize(value);
        }
        if (typeof record.landing_page === "string") {
            result.landing_page = sanitize(record.landing_page);
        }
        if (typeof record.captured_at === "string") {
            result.captured_at = sanitize(record.captured_at);
        }
        return result;
    } catch {
        return {};
    }
}

export function mergeAttribution(base: AdsAttribution, incoming: AdsAttribution): AdsAttribution {
    if (!hasAttribution(incoming)) return { ...base };
    const clickIdChanged = Boolean(
        (incoming.gclid && incoming.gclid !== base.gclid) ||
            (incoming.gbraid && incoming.gbraid !== base.gbraid) ||
            (incoming.wbraid && incoming.wbraid !== base.wbraid),
    );
    const merged: AdsAttribution = { ...base };
    for (const key of ATTRIBUTION_KEYS) {
        if (incoming[key]) merged[key] = incoming[key];
    }
    if (incoming.landing_page && (clickIdChanged || !merged.landing_page)) {
        merged.landing_page = incoming.landing_page;
    }
    merged.captured_at = clickIdChanged
        ? incoming.captured_at || new Date().toISOString()
        : incoming.captured_at || base.captured_at || new Date().toISOString();
    return merged;
}

export function applyAttributionToUrl(href: string, attr: AdsAttribution): string {
    if (!hasAttribution(attr)) return href;
    try {
        const url = new URL(href);
        for (const key of ATTRIBUTION_KEYS) {
            const value = attr[key];
            if (value && !url.searchParams.get(key)) {
                url.searchParams.set(key, value);
            }
        }
        return url.toString();
    } catch {
        return href;
    }
}

export function isTrackedOutboundUrl(href: string, base = "https://www.treatflow.io"): boolean {
    try {
        const url = new URL(href, base);
        return TRACKED_HOSTS.includes(url.hostname);
    } catch {
        return false;
    }
}

export function cookieDomainForHost(hostname: string): string | undefined {
    if (hostname === "localhost" || hostname === "127.0.0.1") return undefined;
    if (hostname === "treatflow.io" || hostname.endsWith(".treatflow.io")) {
        return ".treatflow.io";
    }
    return undefined;
}

export function serializeAttributionCookie(
    attr: AdsAttribution,
    hostname: string,
    secure = true,
): string {
    const domain = cookieDomainForHost(hostname);
    const parts = [
        `${ADS_ATTRIBUTION_COOKIE}=${encodeURIComponent(JSON.stringify(attr))}`,
        "Path=/",
        `Max-Age=${ADS_ATTRIBUTION_MAX_AGE_SECONDS}`,
        "SameSite=Lax",
    ];
    if (secure) parts.push("Secure");
    if (domain) parts.push(`Domain=${domain}`);
    return parts.join("; ");
}

function readCookie(name: string): string | undefined {
    if (typeof document === "undefined") return undefined;
    const match = document.cookie.split("; ").find((part) => part.startsWith(`${name}=`));
    return match ? match.slice(name.length + 1) : undefined;
}

export function getStoredAttribution(): AdsAttribution {
    if (typeof window === "undefined") return {};
    let stored: AdsAttribution = {};
    try {
        stored = parseAttributionFromCookieValue(sessionStorage.getItem(ADS_ATTRIBUTION_STORAGE_KEY));
    } catch {
        stored = {};
    }
    const fromCookie = parseAttributionFromCookieValue(readCookie(ADS_ATTRIBUTION_COOKIE));
    return mergeAttribution(stored, fromCookie);
}

export function captureAttributionFromLocation(): AdsAttribution {
    if (typeof window === "undefined") return {};
    const fromUrl = parseAttributionFromSearchParams(
        new URLSearchParams(window.location.search),
        window.location.pathname,
    );
    const merged = mergeAttribution(getStoredAttribution(), fromUrl);
    if (!hasAttribution(merged)) return merged;
    try {
        sessionStorage.setItem(ADS_ATTRIBUTION_STORAGE_KEY, JSON.stringify(merged));
    } catch {
        // private mode
    }
    return merged;
}

export function persistAttributionCookie(attr: AdsAttribution): void {
    if (typeof document === "undefined" || !hasAttribution(attr)) return;
    document.cookie = serializeAttributionCookie(
        attr,
        window.location.hostname,
        window.location.protocol === "https:",
    );
}

export function applyStoredAttributionToUrl(href: string): string {
    return applyAttributionToUrl(href, getStoredAttribution());
}
