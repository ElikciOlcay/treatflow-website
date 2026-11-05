import { ChevronDown } from "lucide-react";
import Link from 'next/link';
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { APP_LOGIN_BY_MARKET, APP_REGISTER_BY_MARKET } from "../i18n/market-access";
import { marketHomePath } from "../i18n/config";
import { siteIcons } from "../site/icons";
import type { SiteMarket } from "../site/content/shared";
import { getNavigationContent, type NavigationContent } from "../site/content/navigation";
import { resolveNavigation, type ResolvedNavItem } from "../site/content/navigation/resolve";

function FunktionenLink({ item }: { item: ResolvedNavItem }) {
    const Icon = siteIcons[item.icon];
    return (
        <Link
            href={item.href}
            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors"
        >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                <Icon className="h-4 w-4" />
            </div>
            <div>
                <div className="text-sm font-medium text-gray-900">{item.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
            </div>
        </Link>
    );
}

/**
 * Hauptnavigation aller Sprachen. Ohne Props = deutsche Seite (wie bisher).
 * Inhalte: app/site/content/navigation/<lang>.ts
 */
export default function Navigation({
    market = "de",
    content,
}: {
    market?: SiteMarket;
    content?: NavigationContent;
} = {}) {
    const nav = resolveNavigation(content ?? getNavigationContent(market), market);
    const loginUrl = APP_LOGIN_BY_MARKET[market];
    const registerUrl = APP_REGISTER_BY_MARKET[market];

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href={marketHomePath(market)} className="flex items-center">
                            <img
                                src="/images/logos/treatflow-logo.svg"
                                alt="Treatflow Logo"
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Funktionen Mega Menu */}
                        <div className="relative group">
                            <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">
                                {nav.featuresLabel}
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute top-full -left-4 pt-2 w-[760px] max-w-[calc(100vw-2rem)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4">
                                    <div className="grid grid-cols-3 gap-2">
                                        {nav.featureGroups.map((group) => (
                                            <div key={group.title}>
                                                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 px-2.5 mb-1">
                                                    {group.title}
                                                </p>
                                                <div className="space-y-0.5">
                                                    {group.items.map((item) => (
                                                        <FunktionenLink key={item.href} item={item} />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {nav.allFeatures && (
                                        <div className="border-t border-gray-100 mt-3 pt-3">
                                            <Link
                                                href={nav.allFeatures.href}
                                                className="block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
                                            >
                                                {nav.allFeatures.label}
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Branchen Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">
                                {nav.industriesLabel}
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute top-full -left-4 mt-2 w-[540px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                                <div className="grid grid-cols-2 gap-1">
                                    {nav.industries.map((item) => {
                                        const Icon = siteIcons[item.icon];
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{item.label}</div>
                                                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {nav.links.map((link) => (
                            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">{link.label}</Link>
                        ))}
                        <a
                            href={loginUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                        >
                            {nav.login}
                        </a>
                        <LanguageSwitcher current={market} />
                        <a
                            href={registerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                        >
                            {nav.cta}
                        </a>
                    </div>
                    <MobileMenu market={market} nav={nav} loginUrl={loginUrl} registerUrl={registerUrl} />
                </div>
            </div>
        </nav>
    );
}
