'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { siteIcons } from '../site/icons';
import type { SiteMarket } from '../site/content/shared';
import type { ResolvedNavigation } from '../site/content/navigation/resolve';

/** Mobile Navigation; Inhalte kommen bereits aufgelöst aus Navigation.tsx. */
export default function MobileMenu({
    market,
    nav,
    loginUrl,
    registerUrl,
}: {
    market: SiteMarket;
    nav: ResolvedNavigation;
    loginUrl: string;
    registerUrl: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [funktionenOpen, setFunktionenOpen] = useState(false);
    const [branchenOpen, setBranchenOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-indigo-600 transition-colors p-1"
                aria-label={nav.menuAria}
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
                    <div className="px-4 py-5 space-y-1">

                        {/* Funktionen Accordion */}
                        <button
                            onClick={() => setFunktionenOpen(!funktionenOpen)}
                            className="flex items-center justify-between w-full py-3 text-gray-900 font-medium"
                        >
                            <span>{nav.featuresLabel}</span>
                            <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${funktionenOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {funktionenOpen && (
                            <div className="pb-3 space-y-3">
                                {nav.featureGroups.map((group) => (
                                    <div key={group.title}>
                                        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 px-2 mb-1">
                                            {group.title}
                                        </p>
                                        {group.items.map((item) => {
                                            const Icon = siteIcons[item.icon];
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                                        <Icon className="h-4 w-4" />
                                                    </div>
                                                    <span className="text-sm text-gray-700">{item.label}</span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                ))}
                                {nav.allFeatures && (
                                    <div className="border-t border-gray-100 pt-2">
                                        <Link
                                            href={nav.allFeatures.href}
                                            className="block py-2.5 px-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {nav.allFeatures.label}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="border-t border-gray-100" />

                        {/* Branchen Accordion */}
                        <button
                            onClick={() => setBranchenOpen(!branchenOpen)}
                            className="flex items-center justify-between w-full py-3 text-gray-900 font-medium"
                        >
                            <span>{nav.industriesLabel}</span>
                            <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${branchenOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {branchenOpen && (
                            <div className="pb-3 space-y-1">
                                {nav.industries.map((item) => {
                                    const Icon = siteIcons[item.icon];
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm text-gray-700">{item.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}

                        <div className="border-t border-gray-100" />

                        {/* Direkte Links (Anker wie „Referenzen“ als <a>) */}
                        {nav.links.map((link) =>
                            link.href.includes('#') ? (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block py-3 text-gray-700 font-medium hover:text-indigo-600 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block py-3 text-gray-700 font-medium hover:text-indigo-600 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}

                        <div className="border-t border-gray-100 pt-4 mt-2 space-y-3">
                            <div className="pb-2">
                                <LanguageSwitcher current={market} />
                            </div>
                            <a
                                href={loginUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center py-2.5 text-gray-700 font-medium border border-gray-200 rounded-lg hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {nav.login}
                            </a>
                            <a
                                href={registerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {nav.cta}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
