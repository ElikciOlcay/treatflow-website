export type LandingSignupEvent = 'kosmetik_lp_signup_click';
export type LandingDemoEvent = 'kosmetik_lp_demo_click';
export type LandingEventName = LandingSignupEvent | LandingDemoEvent;

export const LANDING_URLS = {
    register: 'https://app.treatflow.io/auth/register',
    demo: 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f',
} as const;

export function trackLandingSignup(
    landingPage = 'landing/kosmetikstudio-software',
    params?: Record<string, string>,
) {
    trackLandingEvent('kosmetik_lp_signup_click', landingPage, params);
}

export function trackLandingDemo(
    landingPage = 'landing/kosmetikstudio-software',
    params?: Record<string, string>,
) {
    trackLandingEvent('kosmetik_lp_demo_click', landingPage, params);
}

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
        if (eventName === 'kosmetik_lp_signup_click') {
            window.fbq('track', 'Lead', {
                content_name: 'Kosmetikstudio Software Landing Page',
                content_category: 'Registration CTA',
            });
        } else if (eventName === 'kosmetik_lp_demo_click') {
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
