import { Star, Bell, Clock } from 'lucide-react';

const stats = [
    { value: '500+', label: 'Studios haben Treatflow bereits getestet' },
    { value: '4,6/5', label: 'Google-Bewertung', stars: true },
    { icon: Bell, label: 'Weniger No-Shows' },
    { icon: Clock, label: 'Spart Zeit im Studioalltag' },
] as const;

export default function LandingSocialProofBar() {
    return (
        <section className="py-5 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center text-center">
                            {'value' in stat && stat.value ? (
                                <>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        {'stars' in stat && stat.stars && (
                                            <div className="flex text-amber-400 mr-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                                                ))}
                                            </div>
                                        )}
                                        <span className="text-2xl sm:text-3xl font-bold text-indigo-600">{stat.value}</span>
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</span>
                                </>
                            ) : (
                                <>
                                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-1.5">
                                        {'icon' in stat && stat.icon && (
                                            <stat.icon className="h-5 w-5 text-indigo-600" />
                                        )}
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-600 leading-tight font-medium">{stat.label}</span>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
