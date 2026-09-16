"use client";

import { useEffect } from "react";
import { withAiSearchUtm } from "@/app/components/AiSearchTrafficCapture";
import {
    applyStoredAttributionToUrl,
    captureAttributionFromLocation,
    hasAttribution,
    isTrackedOutboundUrl,
    persistAttributionCookie,
} from "@/lib/analytics/adsAttribution";
import { hasCookiebotMarketingConsent, onCookiebotVisibilityChange } from "@/lib/cookiebot";

function decorateHref(href: string): string {
    return applyStoredAttributionToUrl(withAiSearchUtm(href));
}

export default function AdsAttributionCapture() {
    useEffect(() => {
        captureAttributionFromLocation();

        const persistIfAllowed = () => {
            const current = captureAttributionFromLocation();
            if (hasCookiebotMarketingConsent() && hasAttribution(current)) {
                persistAttributionCookie(current);
            }
        };

        persistIfAllowed();

        const decorate = (event: MouseEvent) => {
            const target = event.target as Element | null;
            const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
            if (!anchor) return;
            const href = anchor.getAttribute("href");
            if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
                return;
            }
            if (!isTrackedOutboundUrl(anchor.href)) return;
            const next = decorateHref(anchor.href);
            if (next !== anchor.href) {
                anchor.href = next;
            }
        };

        document.addEventListener("click", decorate, true);
        document.addEventListener("auxclick", decorate, true);
        const stopCookiebotWatch = onCookiebotVisibilityChange(persistIfAllowed);

        return () => {
            document.removeEventListener("click", decorate, true);
            document.removeEventListener("auxclick", decorate, true);
            stopCookiebotWatch();
        };
    }, []);

    return null;
}
