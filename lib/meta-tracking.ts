// Meta Conversions API Client-Side Tracking
export interface UserData {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    fbc?: string; // Facebook Click ID
    fbp?: string; // Facebook Browser ID
}

export interface CustomData {
    content_name?: string;
    content_category?: string;
    value?: number;
    currency?: string;
    [key: string]: any;
}

export interface TrackingEvent {
    eventName: string;
    userData: UserData;
    customData?: CustomData;
    eventSourceUrl?: string;
}

// Get client information
function getClientInfo() {
    return {
        clientIpAddress: '', // Will be determined server-side
        clientUserAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
        eventSourceUrl: typeof window !== 'undefined' ? window.location.href : '',
    };
}

// Get Facebook IDs from cookies/localStorage
function getFacebookIds(): { fbc?: string; fbp?: string } {
    if (typeof window === 'undefined') return {};

    const fbc = getCookie('_fbc');
    const fbp = getCookie('_fbp');

    return { fbc, fbp };
}

// Helper function to get cookies
function getCookie(name: string): string | undefined {
    if (typeof document === 'undefined') return undefined;

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()?.split(';').shift();
    }
    return undefined;
}

// Track event via Meta Conversions API
export async function trackMetaEvent(event: TrackingEvent): Promise<boolean> {
    try {
        const clientInfo = getClientInfo();
        const facebookIds = getFacebookIds();

        // Merge Facebook IDs with user data
        const userData = {
            ...event.userData,
            ...facebookIds,
        };

        const payload = {
            eventName: event.eventName,
            userData,
            customData: event.customData || {},
            eventSourceUrl: event.eventSourceUrl || clientInfo.eventSourceUrl,
            clientIpAddress: clientInfo.clientIpAddress,
            clientUserAgent: clientInfo.clientUserAgent,
        };

        console.log('Tracking Meta event:', event.eventName, payload);

        const response = await fetch('/api/meta-conversion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Meta tracking failed:', error);
            return false;
        }

        const result = await response.json();
        console.log('Meta tracking success:', result);
        return true;

    } catch (error) {
        console.error('Meta tracking error:', error);
        return false;
    }
}

// Predefined tracking functions for common events
export const MetaTracking = {
    // Track page view
    trackPageView: (userData: UserData = {}) => {
        return trackMetaEvent({
            eventName: 'PageView',
            userData,
            customData: {
                content_name: 'Dokumentation & Formulare Landing Page',
                content_category: 'Landing Page',
            },
        });
    },

    // Track lead generation
    trackLead: (userData: UserData, customData?: CustomData) => {
        return trackMetaEvent({
            eventName: 'Lead',
            userData,
            customData: {
                content_name: 'Dokumentation & Formulare Landing Page',
                content_category: 'Lead Generation',
                value: 0,
                currency: 'EUR',
                ...customData,
            },
        });
    },

    // Track video view
    trackVideoView: (userData: UserData = {}, videoName?: string) => {
        return trackMetaEvent({
            eventName: 'ViewContent',
            userData,
            customData: {
                content_type: 'video',
                content_name: videoName || 'Treatflow Demo Video',
                content_category: 'Product Demo',
            },
        });
    },

    // Track button click
    trackButtonClick: (userData: UserData = {}, buttonName?: string) => {
        return trackMetaEvent({
            eventName: 'InitiateCheckout',
            userData,
            customData: {
                content_name: buttonName || 'CTA Button Click',
                content_category: 'User Interaction',
            },
        });
    },

    // Track form submission
    trackFormSubmission: (userData: UserData, formName?: string) => {
        return trackMetaEvent({
            eventName: 'CompleteRegistration',
            userData,
            customData: {
                content_name: formName || 'Landing Page Form',
                content_category: 'Form Submission',
                registration_method: 'landing_page',
            },
        });
    },
};
