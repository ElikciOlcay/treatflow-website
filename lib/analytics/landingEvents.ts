export type LandingEventName = 'google_ads_lp_cta_click' | 'google_ads_lp_demo_click';

export const LANDING_URLS = {
    register: 'https://app.treatflow.io/register',
    demo: 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f',
} as const;

export function trackLandingEvent(
    eventName: LandingEventName,
    landingPage = 'landing/kosmetikstudio-software',
    params?: Record<string, string>,
) {
    if (typeof window === 'undefined') return;

    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', eventName, {
            event_category: 'landing_page',
            event_label: landingPage,
            ...params,
        });
    }

    if (typeof window.fbq !== 'undefined') {
        if (eventName === 'google_ads_lp_cta_click') {
            window.fbq('track', 'Lead', {
                content_name: 'Kosmetikstudio Software Landing Page',
                content_category: 'Registration CTA',
            });
        } else if (eventName === 'google_ads_lp_demo_click') {
            window.fbq('track', 'Schedule', {
                content_name: 'Kosmetikstudio Software Landing Page',
            });
        }
    }

    const w = window as Window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
        event: eventName,
        landing_page: landingPage,
        ...params,
    });
}
