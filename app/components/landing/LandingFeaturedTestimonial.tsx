import { GoogleStars } from '@/app/landing/kosmetikstudio-software/data';

type LandingFeaturedTestimonialProps = {
    text: string;
    name: string;
    studio: string;
    source?: string;
    initials: string;
    color: string;
};

export default function LandingFeaturedTestimonial({
    text,
    name,
    studio,
    source = 'Google Bewertung',
    initials,
    color,
}: LandingFeaturedTestimonialProps) {
    return (
        <section className="py-8 bg-indigo-50/60 border-y border-indigo-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <GoogleStars size="sm" />
                    <span className="text-xs font-medium text-gray-500">{source}</span>
                </div>
                <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                    &ldquo;{text}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center justify-center gap-3">
                    <div
                        className={`w-9 h-9 ${color} rounded-full flex items-center justify-center text-white text-xs font-semibold`}
                    >
                        {initials}
                    </div>
                    <div className="text-left">
                        <div className="font-semibold text-gray-900 text-sm">{name}</div>
                        <div className="text-xs text-gray-500">{studio}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
