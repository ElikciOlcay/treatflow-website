import { Star, ExternalLink } from 'lucide-react';
import { homeDe } from '@/app/site/content/home/de';
import type { SocialProofContent } from '@/app/site/content/home/types';


/** Bewertungsleiste. Ohne Props = deutsche Texte. */
export default function SocialProofBar({ content = homeDe.socialProof }: { content?: SocialProofContent } = {}) {
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
                        <span className="text-sm font-semibold text-gray-900">{content.rating}</span>
                        <span className="text-xs text-gray-400">|</span>
                        <a
                            href="https://www.google.com/maps?cid=3775494386032646257"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-indigo-600 transition-colors"
                        >
                            {content.allReviews}
                            <ExternalLink className="h-3 w-3" />
                        </a>
                    </div>
                    <p className="text-sm text-gray-600">
                        {content.tested.before}<span className="font-semibold text-gray-900">{content.tested.highlight}</span>{content.tested.after}
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {content.reviews.map((review) => (
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
                {content.note && (
                    <p className="mt-4 text-center text-xs text-gray-400">{content.note}</p>
                )}
            </div>
        </section>
    );
}
