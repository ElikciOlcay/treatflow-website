'use client';

import { useState } from 'react';
import {
    Menu, X, Calendar, Users, FileText, ClipboardCheck, Link2,
    Bell, Shield, BarChart3, ShoppingBag, Sparkles, Zap, Palette,
    Stethoscope, Pen, ChevronDown, Gem, Eye, Waves, Hand, Globe
} from 'lucide-react';
import Link from 'next/link';

const funktionen = [
    { href: '/terminkalender', label: 'Terminkalender', icon: Calendar, color: 'text-indigo-600 bg-indigo-100' },
    { href: '/kundenverwaltung', label: 'Kundenverwaltung', icon: Users, color: 'text-emerald-600 bg-emerald-100' },
    { href: '/formulare', label: 'Formulare', icon: ClipboardCheck, color: 'text-orange-600 bg-orange-100' },
    { href: '/behandlungsdokumentation', label: 'Dokumentation', icon: FileText, color: 'text-blue-600 bg-blue-100' },
    { href: '/online-buchungen', label: 'Online-Buchungen', icon: Link2, color: 'text-rose-600 bg-rose-100' },
    { href: '/nachrichtenautomatisierung', label: 'Nachrichten', icon: Bell, color: 'text-purple-600 bg-purple-100' },
    { href: '/nisv-dokumentation', label: 'NiSV-Dokumentation', icon: Shield, color: 'text-teal-600 bg-teal-100' },
    { href: '/kosmetikstudio-software-vergleich', label: 'Software-Vergleich', icon: BarChart3, color: 'text-gray-600 bg-gray-100' },
    { href: '/shop', label: 'Shop', icon: ShoppingBag, color: 'text-amber-600 bg-amber-100' },
    { href: '/website-fuer-kosmetikstudios', label: 'Studio-Website', icon: Globe, color: 'text-indigo-600 bg-indigo-100' },
];

const branchen = [
    { href: '/kosmetikstudio-software', label: 'Kosmetikstudios', icon: Sparkles, color: 'text-indigo-600 bg-indigo-100' },
    { href: '/laser-haarentfernung-software', label: 'Laser Haarentfernung', icon: Zap, color: 'text-blue-600 bg-blue-100' },
    { href: '/permanent-makeup-software', label: 'Permanent Makeup', icon: Palette, color: 'text-rose-600 bg-rose-100' },
    { href: '/aesthetische-medizin-software', label: 'Ästhetische Medizin', icon: Stethoscope, color: 'text-teal-600 bg-teal-100' },
    { href: '/tattoo-studio-software', label: 'Tattoo Studios', icon: Pen, color: 'text-gray-600 bg-gray-200' },
    { href: '/nagelstudio-software', label: 'Nagelstudios', icon: Gem, color: 'text-pink-600 bg-pink-100' },
    { href: '/lash-studio-software', label: 'Lash Studios', icon: Eye, color: 'text-violet-600 bg-violet-100' },
    { href: '/spa-wellness-software', label: 'Spa & Wellness', icon: Waves, color: 'text-cyan-600 bg-cyan-100' },
    { href: '/massage-software', label: 'Massage-Praxen', icon: Hand, color: 'text-amber-600 bg-amber-100' },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [funktionenOpen, setFunktionenOpen] = useState(false);
    const [branchenOpen, setBranchenOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-indigo-600 transition-colors p-1"
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
                            <span>Funktionen</span>
                            <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${funktionenOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {funktionenOpen && (
                            <div className="pb-3 space-y-1">
                                {funktionen.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                            <item.icon className="h-4 w-4" />
                                        </div>
                                        <span className="text-sm text-gray-700">{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        )}

                        <div className="border-t border-gray-100" />

                        {/* Branchen Accordion */}
                        <button
                            onClick={() => setBranchenOpen(!branchenOpen)}
                            className="flex items-center justify-between w-full py-3 text-gray-900 font-medium"
                        >
                            <span>Branchen</span>
                            <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${branchenOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {branchenOpen && (
                            <div className="pb-3 space-y-1">
                                {branchen.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                            <item.icon className="h-4 w-4" />
                                        </div>
                                        <span className="text-sm text-gray-700">{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        )}

                        <div className="border-t border-gray-100" />

                        {/* Direkte Links */}
                        <a
                            href="/#pricing"
                            className="block py-3 text-gray-700 font-medium hover:text-indigo-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Preise
                        </a>
                        <Link
                            href="/blog"
                            className="block py-3 text-gray-700 font-medium hover:text-indigo-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Blog
                        </Link>
                        <a
                            href="/#testimonials"
                            className="block py-3 text-gray-700 font-medium hover:text-indigo-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Referenzen
                        </a>
                        <Link
                            href="/kontakt"
                            className="block py-3 text-gray-700 font-medium hover:text-indigo-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Kontakt
                        </Link>

                        <div className="border-t border-gray-100 pt-4 mt-2 space-y-3">
                            <a
                                href="https://app.treatflow.io/auth/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center py-2.5 text-gray-700 font-medium border border-gray-200 rounded-lg hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </a>
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Kostenlos testen
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
