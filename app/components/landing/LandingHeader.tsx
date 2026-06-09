import Image from 'next/image';
import { Star } from 'lucide-react';
import { LandingPrimaryCTA } from './LandingCTA';

type LandingHeaderProps = {
    landingPage?: string;
};

export default function LandingHeader({ landingPage = 'landing/kosmetikstudio-software' }: LandingHeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center shrink-0">
                    <Image
                        src="/images/logos/treatflow-logo.svg"
                        alt="Treatflow Logo"
                        width={120}
                        height={32}
                        className="h-8 w-auto"
                        priority
                    />
                </div>

                <div className="hidden md:flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                    </div>
                    <span>4,6/5</span>
                    <span className="text-gray-300">|</span>
                    <span>500+ getestet</span>
                </div>

                <LandingPrimaryCTA
                    label="Kostenlos testen"
                    landingPage={landingPage}
                    className="!px-5 !py-2.5 !text-sm !shadow-none"
                />
            </div>
        </header>
    );
}
