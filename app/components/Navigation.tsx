import {
    ChevronDown, Calendar, Users, FileText, ClipboardCheck, Link2,
    Bell, Shield, BarChart3, ShoppingBag, Sparkles, Zap, Palette,
    Stethoscope, Pen, Gem, Eye, Waves, Hand, Globe
} from "lucide-react";
import Link from 'next/link';
import MobileMenu from "./MobileMenu";

const funktionen = [
    { href: '/terminkalender', label: 'Terminkalender', desc: 'Tages-, Wochen- und Monatsansicht', icon: Calendar, color: 'text-indigo-600 bg-indigo-100' },
    { href: '/kundenverwaltung', label: 'Kundenverwaltung', desc: 'Kundenprofile und Behandlungshistorie', icon: Users, color: 'text-emerald-600 bg-emerald-100' },
    { href: '/formulare', label: 'Formulare', desc: 'Digitale Anamnese und Einwilligungen', icon: ClipboardCheck, color: 'text-orange-600 bg-orange-100' },
    { href: '/behandlungsdokumentation', label: 'Dokumentation', desc: 'Behandlungen digital festhalten', icon: FileText, color: 'text-blue-600 bg-blue-100' },
    { href: '/online-buchungen', label: 'Online-Buchungen', desc: 'Persönlicher Buchungslink 24/7', icon: Link2, color: 'text-rose-600 bg-rose-100' },
    { href: '/nachrichtenautomatisierung', label: 'Nachrichten', desc: 'E-Mail und SMS automatisiert', icon: Bell, color: 'text-purple-600 bg-purple-100' },
    { href: '/nisv-dokumentation', label: 'NiSV-Dokumentation', desc: 'Konform dokumentieren', icon: Shield, color: 'text-teal-600 bg-teal-100' },
    { href: '/kosmetikstudio-software-vergleich', label: 'Software-Vergleich', desc: 'Treatflow vs. andere Lösungen', icon: BarChart3, color: 'text-gray-600 bg-gray-100' },
];

const branchen = [
    { href: '/kosmetikstudio-software', label: 'Kosmetikstudios', desc: 'Die All-in-One Lösung', icon: Sparkles, color: 'text-indigo-600 bg-indigo-100' },
    { href: '/laser-haarentfernung-software', label: 'Laser Haarentfernung', desc: 'NiSV-konform dokumentieren', icon: Zap, color: 'text-blue-600 bg-blue-100' },
    { href: '/permanent-makeup-software', label: 'Permanent Makeup', desc: 'PMU und Microblading', icon: Palette, color: 'text-rose-600 bg-rose-100' },
    { href: '/aesthetische-medizin-software', label: 'Ästhetische Medizin', desc: 'Praxis- und Patientenverwaltung', icon: Stethoscope, color: 'text-teal-600 bg-teal-100' },
    { href: '/tattoo-studio-software', label: 'Tattoo Studios', desc: 'Einwilligungen und Buchungen', icon: Pen, color: 'text-gray-600 bg-gray-200' },
    { href: '/nagelstudio-software', label: 'Nagelstudios', desc: 'Termine und Kundenvorlieben', icon: Gem, color: 'text-pink-600 bg-pink-100' },
    { href: '/lash-studio-software', label: 'Lash Studios', desc: 'Wimpern und Refill-Planung', icon: Eye, color: 'text-violet-600 bg-violet-100' },
    { href: '/spa-wellness-software', label: 'Spa & Wellness', desc: 'Gästeverwaltung und Buchungen', icon: Waves, color: 'text-cyan-600 bg-cyan-100' },
    { href: '/massage-software', label: 'Massage-Praxen', desc: 'Termine und Gesundheitsfragebögen', icon: Hand, color: 'text-amber-600 bg-amber-100' },
];

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
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Funktionen Mega Menu */}
                        <div className="relative group">
                            <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">
                                Funktionen
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute top-full -left-4 mt-2 w-[540px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                                <div className="grid grid-cols-2 gap-1">
                                    {funktionen.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                                <item.icon className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{item.label}</div>
                                                <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="border-t border-gray-100 mt-3 pt-3 grid grid-cols-2 gap-1">
                                    <Link
                                        href="/shop"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-amber-600 bg-amber-100">
                                            <ShoppingBag className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">Shop</div>
                                            <div className="text-xs text-gray-500 mt-0.5">Vorlagen und Formularpakete</div>
                                        </div>
                                    </Link>
                                    <Link
                                        href="/website-fuer-kosmetikstudios"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-indigo-600 bg-indigo-100">
                                            <Globe className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">Studio-Website</div>
                                            <div className="text-xs text-gray-500 mt-0.5">Individuelle Website ab 1.000 Euro</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Branchen Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium">
                                Branchen
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute top-full -left-4 mt-2 w-[540px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                                <div className="grid grid-cols-2 gap-1">
                                    {branchen.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                                <item.icon className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{item.label}</div>
                                                <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link href="/#pricing" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Preise</Link>
                        <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Blog</Link>
                        <Link href="/#testimonials" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Referenzen</Link>
                        <Link href="/kontakt" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Kontakt</Link>
                        <a
                            href="https://app.treatflow.io/auth/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                        >
                            Login
                        </a>
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
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
