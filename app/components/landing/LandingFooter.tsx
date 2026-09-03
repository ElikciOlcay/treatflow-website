import Image from 'next/image';
import CookieSettingsLink from '../CookieSettingsLink';

export default function LandingFooter() {
    return (
        <footer className="py-8 bg-gray-900 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/images/logos/treatflow-logo.png"
                            alt="Treatflow Logo"
                            width={120}
                            height={32}
                            className="h-7 w-auto"
                        />
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <a href="/impressum" className="hover:text-white transition-colors">
                            Impressum
                        </a>
                        <a href="/datenschutz" className="hover:text-white transition-colors">
                            Datenschutz
                        </a>
                        <CookieSettingsLink
                            label="Cookie-Einstellungen"
                            className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-sm"
                        />
                    </div>
                    <p className="text-xs">&copy; {new Date().getFullYear()} Treatflow</p>
                </div>
            </div>
        </footer>
    );
}
