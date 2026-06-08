import { Play } from 'lucide-react';

export default function VideoPlaceholder() {
    return (
        <div className="relative w-full aspect-video bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 rounded-2xl overflow-hidden shadow-2xl">
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(99,102,241,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168,85,247,0.3) 0%, transparent 50%)',
                }}
                aria-hidden="true"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 mb-4">
                    <Play className="h-7 w-7 sm:h-8 sm:w-8 text-white fill-white ml-1" />
                </div>
                <p className="text-white/80 text-sm sm:text-base font-medium">
                    Video folgt in Kürze
                </p>
                <p className="text-white/50 text-xs sm:text-sm mt-1 max-w-xs">
                    Hier wird bald ein Erklärvideo von Olcay eingebettet.
                </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                <div className="h-full w-0 bg-indigo-500 rounded-full" />
            </div>
        </div>
    );
}
