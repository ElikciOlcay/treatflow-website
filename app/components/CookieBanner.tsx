'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { X, Cookie, Settings } from 'lucide-react';
import Link from 'next/link';

const COOKIE_TEXTS = {
    de: {
        title: 'Cookie-Einstellungen',
        intro:
            'Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. Einige Cookies sind notwendig für den Betrieb der Website, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.',
        learnMore: 'Mehr erfahren',
        privacyHref: '/datenschutz',
        acceptAll: 'Alle akzeptieren',
        acceptNecessary: 'Nur notwendige',
        settings: 'Einstellungen',
        modalIntro:
            'Wir verwenden verschiedene Arten von Cookies. Sie können Ihre Einstellungen für jede Kategorie anpassen.',
        necessary: 'Notwendige Cookies',
        alwaysActive: 'Immer aktiv',
        necessaryDesc:
            'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. Sie speichern Ihre Cookie-Präferenzen und Sicherheitseinstellungen.',
        analytics: 'Analyse-Cookies',
        analyticsDesc:
            'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen anonym sammeln und melden. Wir verwenden Google Analytics.',
        marketing: 'Marketing-Cookies',
        marketingDesc:
            'Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen. Derzeit verwenden wir keine Marketing-Cookies.',
        functional: 'Funktionale Cookies',
        functionalDesc:
            'Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierung, wie Chat-Widgets oder Videos.',
        save: 'Einstellungen speichern',
    },
    en: {
        title: 'Cookie settings',
        intro:
            'We use cookies to give you the best experience on our website. Some cookies are necessary to operate the site, while others help us improve this website and your experience.',
        learnMore: 'Learn more',
        privacyHref: '/en/privacy',
        acceptAll: 'Accept all',
        acceptNecessary: 'Necessary only',
        settings: 'Settings',
        modalIntro:
            'We use different types of cookies. You can adjust your settings for each category.',
        necessary: 'Necessary cookies',
        alwaysActive: 'Always active',
        necessaryDesc:
            'These cookies are required for the basic functions of the website and cannot be disabled. They store your cookie preferences and security settings.',
        analytics: 'Analytics cookies',
        analyticsDesc:
            'These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously. We use Google Analytics.',
        marketing: 'Marketing cookies',
        marketingDesc:
            'These cookies are used to show you relevant advertising. We currently do not use any marketing cookies.',
        functional: 'Functional cookies',
        functionalDesc:
            'These cookies enable enhanced functionality and personalisation, such as chat widgets or videos.',
        save: 'Save settings',
    },
    es: {
        title: 'Configuración de cookies',
        intro:
            'Utilizamos cookies para ofrecerte la mejor experiencia en nuestro sitio web. Algunas son necesarias para el funcionamiento del sitio; otras nos ayudan a mejorarlo.',
        learnMore: 'Más información',
        privacyHref: '/es/privacidad',
        acceptAll: 'Aceptar todas',
        acceptNecessary: 'Solo necesarias',
        settings: 'Configuración',
        modalIntro:
            'Utilizamos distintos tipos de cookies. Puedes ajustar la configuración de cada categoría.',
        necessary: 'Cookies necesarias',
        alwaysActive: 'Siempre activas',
        necessaryDesc:
            'Estas cookies son necesarias para las funciones básicas del sitio y no se pueden desactivar. Guardan tus preferencias de cookies y ajustes de seguridad.',
        analytics: 'Cookies de análisis',
        analyticsDesc:
            'Estas cookies nos ayudan a entender cómo interactúan los visitantes con el sitio, de forma anónima. Utilizamos Google Analytics.',
        marketing: 'Cookies de marketing',
        marketingDesc:
            'Estas cookies se usan para mostrar publicidad relevante. Actualmente no utilizamos cookies de marketing.',
        functional: 'Cookies funcionales',
        functionalDesc:
            'Estas cookies permiten funciones avanzadas y personalización, como widgets de chat o vídeos.',
        save: 'Guardar configuración',
    },
    it: {
        title: 'Impostazioni cookie',
        intro:
            'Utilizziamo i cookie per offrirti la migliore esperienza sul nostro sito. Alcuni sono necessari per il funzionamento; altri ci aiutano a migliorarlo.',
        learnMore: 'Scopri di più',
        privacyHref: '/it/privacy',
        acceptAll: 'Accetta tutti',
        acceptNecessary: 'Solo necessari',
        settings: 'Impostazioni',
        modalIntro:
            'Utilizziamo diversi tipi di cookie. Puoi regolare le impostazioni per ogni categoria.',
        necessary: 'Cookie necessari',
        alwaysActive: 'Sempre attivi',
        necessaryDesc:
            'Questi cookie sono necessari per le funzioni di base del sito e non possono essere disattivati. Memorizzano le preferenze cookie e le impostazioni di sicurezza.',
        analytics: 'Cookie analitici',
        analyticsDesc:
            'Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito in forma anonima. Utilizziamo Google Analytics.',
        marketing: 'Cookie di marketing',
        marketingDesc:
            'Questi cookie vengono usati per mostrare pubblicità pertinente. Al momento non utilizziamo cookie di marketing.',
        functional: 'Cookie funzionali',
        functionalDesc:
            'Questi cookie abilitano funzionalità avanzate e personalizzazione, come widget chat o video.',
        save: 'Salva impostazioni',
    },
    fr: {
        title: 'Paramètres des cookies',
        intro:
            'Nous utilisons des cookies pour vous offrir la meilleure expérience sur notre site. Certains sont nécessaires au fonctionnement ; d\'autres nous aident à l\'améliorer.',
        learnMore: 'En savoir plus',
        privacyHref: '/fr/confidentialite',
        acceptAll: 'Tout accepter',
        acceptNecessary: 'Nécessaires uniquement',
        settings: 'Paramètres',
        modalIntro:
            'Nous utilisons différents types de cookies. Vous pouvez ajuster les paramètres pour chaque catégorie.',
        necessary: 'Cookies nécessaires',
        alwaysActive: 'Toujours actifs',
        necessaryDesc:
            'Ces cookies sont requis pour les fonctions de base du site et ne peuvent pas être désactivés. Ils enregistrent vos préférences cookies et paramètres de sécurité.',
        analytics: 'Cookies analytiques',
        analyticsDesc:
            'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec le site de manière anonyme. Nous utilisons Google Analytics.',
        marketing: 'Cookies marketing',
        marketingDesc:
            'Ces cookies sont utilisés pour afficher de la publicité pertinente. Nous n\'utilisons actuellement aucun cookie marketing.',
        functional: 'Cookies fonctionnels',
        functionalDesc:
            'Ces cookies permettent des fonctionnalités avancées et de la personnalisation, comme des widgets de chat ou des vidéos.',
        save: 'Enregistrer les paramètres',
    },
} as const;

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        fbq: ((...args: any[]) => void) & {
            callMethod?: (...args: any[]) => void;
            queue?: any[];
            push?: any;
            loaded?: boolean;
            version?: string;
        };
        _fbq?: any;
    }
}

const META_PIXEL_ID = '796776476409381';

export default function CookieBanner() {
    const pathname = usePathname();
    const cookieLocale = pathname?.startsWith('/es')
        ? 'es'
        : pathname?.startsWith('/it')
          ? 'it'
          : pathname?.startsWith('/fr')
            ? 'fr'
            : pathname?.startsWith('/en')
              ? 'en'
              : 'de';
    const t = COOKIE_TEXTS[cookieLocale];
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true, // Always true, cannot be disabled
        analytics: false,
        marketing: false,
        functional: false
    });

    useEffect(() => {
        const cookieConsent = localStorage.getItem('treatflow-cookie-consent');
        if (!cookieConsent) {
            setShowBanner(true);
        } else {
            const savedPreferences = JSON.parse(cookieConsent);
            setPreferences(savedPreferences);

            applyConsentToGoogle(savedPreferences);
            if (savedPreferences.marketing) {
                initializeMetaPixel();
            }
        }
    }, []);

    const applyConsentToGoogle = (prefs: typeof preferences) => {
        if (typeof window === 'undefined' || !window.gtag) return;
        window.gtag('consent', 'update', {
            ad_storage: prefs.marketing ? 'granted' : 'denied',
            ad_user_data: prefs.marketing ? 'granted' : 'denied',
            ad_personalization: prefs.marketing ? 'granted' : 'denied',
            analytics_storage: prefs.analytics ? 'granted' : 'denied',
            functionality_storage: prefs.functional ? 'granted' : 'denied',
            personalization_storage: prefs.functional ? 'granted' : 'denied',
        });
    };

    const initializeMetaPixel = () => {
        if (typeof window === 'undefined') return;
        const w = window as any;
        if (w.fbq) {
            w.fbq('consent', 'grant');
            return;
        }

        (function (f: any, b: any, e: string, v: string) {
            if (f.fbq) return;
            const n: any = f.fbq = function () {
                n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = true;
            n.version = '2.0';
            n.queue = [];
            const t = b.createElement(e) as HTMLScriptElement;
            t.async = true;
            t.src = v;
            const s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        })(w, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

        w.fbq('init', META_PIXEL_ID);
        w.fbq('track', 'PageView');
    };

    const disableMetaPixel = () => {
        if (typeof window === 'undefined') return;
        const w = window as any;
        if (w.fbq) {
            w.fbq('consent', 'revoke');
        }
    };

    const handleAcceptAll = () => {
        const newPreferences = {
            necessary: true,
            analytics: true,
            marketing: true,
            functional: true
        };

        setPreferences(newPreferences);
        localStorage.setItem('treatflow-cookie-consent', JSON.stringify(newPreferences));
        setShowBanner(false);
        setShowSettings(false);

        applyConsentToGoogle(newPreferences);
        initializeMetaPixel();
    };

    const handleAcceptNecessary = () => {
        const newPreferences = {
            necessary: true,
            analytics: false,
            marketing: false,
            functional: false
        };

        setPreferences(newPreferences);
        localStorage.setItem('treatflow-cookie-consent', JSON.stringify(newPreferences));
        setShowBanner(false);
        setShowSettings(false);

        applyConsentToGoogle(newPreferences);
        disableMetaPixel();
    };

    const handleSavePreferences = () => {
        localStorage.setItem('treatflow-cookie-consent', JSON.stringify(preferences));
        setShowBanner(false);
        setShowSettings(false);

        applyConsentToGoogle(preferences);

        if (preferences.marketing) {
            initializeMetaPixel();
        } else {
            disableMetaPixel();
        }
    };

    const handlePreferenceChange = (type: keyof typeof preferences) => {
        if (type === 'necessary') return; // Cannot disable necessary cookies

        setPreferences(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    if (!showBanner) return null;

    return (
        <>
            {/* Cookie Banner */}
            <div data-cookie-banner className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <Cookie className="h-6 w-6 text-indigo-600 mt-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {t.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                {t.intro}{' '}
                                <Link href={t.privacyHref} className="text-indigo-600 hover:text-indigo-800 underline">
                                    {t.learnMore}
                                </Link>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleAcceptAll}
                                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                                >
                                    {t.acceptAll}
                                </button>
                                <button
                                    onClick={handleAcceptNecessary}
                                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                                >
                                    {t.acceptNecessary}
                                </button>
                                <button
                                    onClick={() => setShowSettings(true)}
                                    className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center gap-2"
                                >
                                    <Settings className="h-4 w-4" />
                                    {t.settings}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cookie Settings Modal */}
            {showSettings && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
                                <button
                                    onClick={() => setShowSettings(false)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <X className="h-5 w-5 text-gray-500" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <p className="text-gray-600">
                                    {t.modalIntro}
                                </p>

                                {/* Necessary Cookies */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-gray-900">{t.necessary}</h3>
                                        <div className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-medium">
                                            {t.alwaysActive}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {t.necessaryDesc}
                                    </p>
                                </div>

                                {/* Analytics Cookies */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-gray-900">{t.analytics}</h3>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.analytics}
                                                onChange={() => handlePreferenceChange('analytics')}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                        </label>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {t.analyticsDesc}
                                    </p>
                                </div>

                                {/* Marketing Cookies */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-gray-900">{t.marketing}</h3>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.marketing}
                                                onChange={() => handlePreferenceChange('marketing')}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                        </label>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {t.marketingDesc}
                                    </p>
                                </div>

                                {/* Functional Cookies */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-gray-900">{t.functional}</h3>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.functional}
                                                onChange={() => handlePreferenceChange('functional')}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                        </label>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {t.functionalDesc}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                                <button
                                    onClick={handleSavePreferences}
                                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex-1"
                                >
                                    {t.save}
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                                >
                                    {t.acceptAll}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

