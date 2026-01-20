import { ChevronDown } from "lucide-react";
import Link from 'next/link';
import MobileMenu from "./MobileMenu";

export default function Navigation() {
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/images/logos/treatflow-logo.svg"
                                alt="Treatflow Logo"
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="relative group">
                            <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                                Funktionen
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-2">
                                    <Link href="/terminkalender" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                                        Terminkalender
                                    </Link>
                                    <Link href="/kundenverwaltung" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                                        Kundenverwaltung
                                    </Link>
                                    <Link href="/formulare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                                        Formulare
                                    </Link>
                                    <Link href="/behandlungsdokumentation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                                        Dokumentation
                                    </Link>
                                    <Link href="/online-buchungen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                                        Online-Buchungen
                                    </Link>
                                    <Link href="/nachrichtenautomatisierung" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                                        Nachrichtenautomatisierung
                                    </Link>
                                    <Link href="/shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                                        Shop
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</Link>
                        <Link href="/#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Preise</Link>
                        <Link href="/blog" className="text-gray-600 hover:text-indigo-600 transition-colors">Blog</Link>
                        <Link href="/#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Referenzen</Link>
                        <Link href="/kontakt" className="text-gray-600 hover:text-indigo-600 transition-colors">Kontakt</Link>
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Kostenlos testen
                        </a>
                    </div>
                    <MobileMenu />
                </div>
            </div>
        </nav>
    );
}
