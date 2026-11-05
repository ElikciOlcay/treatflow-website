"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type ProductVideoSectionProps = {
    title?: string;
    description?: string;
    videoSrc?: string;
    posterSrc?: string;
    posterAlt?: string;
    /** Button-Text, aria-Präfix und Fallback-Text (Default: Deutsch). */
    playLabel?: string;
    playAriaPrefix?: string;
    unsupported?: string;
};

/**
 * Video direkt nach dem Hero (Startseite: Produktfilm, Funktionsseiten: Funktionsvideo).
 * Bis zum Klick wird nur das Vorschaubild geladen, erst dann das Video (mit Ton und
 * Steuerung) – so bleibt die Seite schnell.
 */
export default function ProductVideoSection({
    title = "Treatflow in einer Minute erklärt",
    description = "Online-Buchung, Kalender, digitale Formulare, Doku per Sprachdiktat, Kasse und mehr – so sieht dein Studioalltag mit Treatflow aus.",
    videoSrc = "/videos/treatflow-produktfilm.mp4",
    posterSrc = "/images/video/treatflow-produktfilm-poster.jpg",
    posterAlt = "Treatflow Produktfilm: Kalender, Online-Buchung und Kasse im Überblick",
    playLabel = "Video ansehen",
    playAriaPrefix = "Video abspielen",
    unsupported = "Dein Browser kann dieses Video nicht abspielen.",
}: ProductVideoSectionProps) {
    const [playing, setPlaying] = useState(false);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-indigo-50/60" aria-labelledby="produktfilm-titel">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <h2 id="produktfilm-titel" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
                </div>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5 bg-gray-900">
                    {playing ? (
                        <video
                            src={videoSrc}
                            poster={posterSrc}
                            controls
                            autoPlay
                            playsInline
                            preload="auto"
                            className="absolute inset-0 w-full h-full"
                        >
                            {unsupported}
                        </video>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setPlaying(true)}
                            className="group absolute inset-0 w-full h-full cursor-pointer"
                            aria-label={`${playAriaPrefix}: ${title}`}
                        >
                            <Image
                                src={posterSrc}
                                alt={posterAlt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                className="object-cover"
                                quality={85}
                            />
                            <span className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/20 transition-colors" />
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="flex items-center gap-3 rounded-full bg-indigo-600 text-white pl-5 pr-7 py-4 text-lg font-semibold shadow-xl group-hover:bg-indigo-700 group-hover:scale-105 transition-all">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                                        <Play className="h-5 w-5 fill-current ml-0.5" />
                                    </span>
                                    {playLabel}
                                </span>
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
