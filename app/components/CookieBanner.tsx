'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import Link from 'next/link';

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true, // Always true, cannot be disabled
        analytics: false,
        marketing: false,
        functional: false
    });

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('treatflow-cookie-consent');
        if (!cookieConsent) {
            setShowBanner(true);
        } else {
            // Load saved preferences
            const savedPreferences = JSON.parse(cookieConsent);
            setPreferences(savedPreferences);

            // Initialize Google Analytics if analytics cookies are accepted
            if (savedPreferences.analytics) {
                initializeGoogleAnalytics();
            }
        }
    }, []);

    const initializeGoogleAnalytics = () => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
                analytics_storage: 'granted'
            });
        }
    };

    const disableGoogleAnalytics = () => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
                analytics_storage: 'denied'
            });
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

        // Initialize analytics
        initializeGoogleAnalytics();
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

        // Disable analytics
        disableGoogleAnalytics();
    };

    const handleSavePreferences = () => {
        localStorage.setItem('treatflow-cookie-consent', JSON.stringify(preferences));
        setShowBanner(false);
        setShowSettings(false);

        // Update Google Analytics based on preferences
        if (preferences.analytics) {
            initializeGoogleAnalytics();
        } else {
            disableGoogleAnalytics();
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
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <Cookie className="h-6 w-6 text-indigo-600 mt-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Cookie-Einstellungen
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten.
                                Einige Cookies sind notwendig für den Betrieb der Website, während andere uns helfen,
                                diese Website und Ihre Erfahrung zu verbessern.{' '}
                                <Link href="/datenschutz" className="text-indigo-600 hover:text-indigo-800 underline">
                                    Mehr erfahren
                                </Link>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleAcceptAll}
                                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                                >
                                    Alle akzeptieren
                                </button>
                                <button
                                    onClick={handleAcceptNecessary}
                                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                                >
                                    Nur notwendige
                                </button>
                                <button
                                    onClick={() => setShowSettings(true)}
                                    className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center gap-2"
                                >
                                    <Settings className="h-4 w-4" />
                                    Einstellungen
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
                                <h2 className="text-2xl font-bold text-gray-900">Cookie-Einstellungen</h2>
                                <button
                                    onClick={() => setShowSettings(false)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <X className="h-5 w-5 text-gray-500" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <p className="text-gray-600">
                                    Wir verwenden verschiedene Arten von Cookies. Sie können Ihre Einstellungen für jede Kategorie anpassen.
                                </p>

                                {/* Necessary Cookies */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-gray-900">Notwendige Cookies</h3>
                                        <div className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-medium">
                                            Immer aktiv
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                                        Sie speichern Ihre Cookie-Präferenzen und Sicherheitseinstellungen.
                                    </p>
                                </div>

                                {/* Analytics Cookies */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-gray-900">Analyse-Cookies</h3>
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
                                        Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen
                                        anonym sammeln und melden. Wir verwenden Google Analytics.
                                    </p>
                                </div>

                                {/* Marketing Cookies */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-gray-900">Marketing-Cookies</h3>
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
                                        Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen. Derzeit verwenden wir keine Marketing-Cookies.
                                    </p>
                                </div>

                                {/* Functional Cookies */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-gray-900">Funktionale Cookies</h3>
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
                                        Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierung, wie Chat-Widgets oder Videos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                                <button
                                    onClick={handleSavePreferences}
                                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex-1"
                                >
                                    Einstellungen speichern
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                                >
                                    Alle akzeptieren
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

