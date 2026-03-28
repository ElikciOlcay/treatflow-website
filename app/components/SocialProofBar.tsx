import { Star, ExternalLink } from 'lucide-react';

const reviews = [
    {
        text: 'Wir arbeiten vollständig digital und erfüllen alle NiSV-Anforderungen. Klare Empfehlung.',
        name: 'Maren B.',
        studio: 'haarfrei',
    },
    {
        text: 'Ein Must-Have für alle Studios. Kein Papierkram mehr und nichts geht verloren.',
        name: 'Fatma S.',
        studio: 'Kosmetikstudio',
    },
    {
        text: 'Auf Wünsche wird immer eingegangen. Man fühlt sich bestens betreut und ernst genommen.',
        name: 'E. B.',
        studio: 'Kosmetikstudio',
    },
];

export default function SocialProofBar() {
    return (
        <section className="py-12 bg-gray-50 border-y border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-900">4.9/5</span>
                        <span className="text-xs text-gray-400">|</span>
                        <a
                            href="https://www.google.com/maps?cid=3775494386032646257"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-indigo-600 transition-colors"
                        >
                            Google Reviews
                            <ExternalLink className="h-3 w-3" />
                        </a>
                    </div>
                    <p className="text-sm text-gray-600">
                        Über <span className="font-semibold text-gray-900">500 Studios</span> vertrauen auf Treatflow
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {reviews.map((review) => (
                        <div key={review.name} className="bg-white rounded-xl p-5 border border-gray-100">
                            <div className="flex text-amber-400 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                &ldquo;{review.text}&rdquo;
                            </p>
                            <div className="text-xs">
                                <span className="font-semibold text-gray-900">{review.name}</span>
                                <span className="text-gray-400 mx-1">&middot;</span>
                                <span className="text-gray-500">{review.studio}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
