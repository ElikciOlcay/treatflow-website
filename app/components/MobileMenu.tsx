'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
                    <div className="px-4 py-6 space-y-4">
                        <div className="border-b border-gray-200 pb-4 mb-4">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Funktionen</p>
                            <Link
                                href="/terminkalender"
                                className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Terminkalender
                            </Link>
                            <Link
                                href="/kundenverwaltung"
                                className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Kundenverwaltung
                            </Link>
                            <Link
                                href="/formulare"
                                className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Formulare
                            </Link>
                            <Link
                                href="/behandlungsdokumentation"
                                className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Dokumentation
                            </Link>
                            <Link
                                href="/online-buchungen"
                                className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Online-Buchungen
                            </Link>
                            <Link
                                href="/shop"
                                className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Shop
                            </Link>
                        </div>
                        <a
                            href="/#pricing"
                            className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Preise
                        </a>
                        <Link
                            href="/blog"
                            className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Blog
                        </Link>
                        <a
                            href="/#testimonials"
                            className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Referenzen
                        </a>
                        <Link
                            href="/kontakt"
                            className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Kontakt
                        </Link>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors mt-4 block text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Demo buchen
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
