"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const VIDEO_SRC = "/videos/treatflow-produktfilm.mp4";
const POSTER_SRC = "/images/video/treatflow-produktfilm-poster.jpg";

/**
 * Produktfilm direkt nach dem Hero. Bis zum Klick wird nur das Vorschaubild geladen,
 * erst dann das Video (mit Ton und Steuerung) – so bleibt die Startseite schnell.
 */
export default function ProductVideoSection() {
    const [playing, setPlaying] = useState(false);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-indigo-50/60" aria-labelledby="produktfilm-titel">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <h2 id="produktfilm-titel" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                        Treatflow in einer Minute erklärt
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Online-Buchung, Kalender, digitale Formulare, Doku per Sprachdiktat, Kasse und mehr – so sieht dein Studioalltag mit Treatflow aus.
                    </p>
                </div>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5 bg-gray-900">
                    {playing ? (
                        <video
                            src={VIDEO_SRC}
                            poster={POSTER_SRC}
                            controls
                            autoPlay
                            playsInline
                            preload="auto"
                            className="absolute inset-0 w-full h-full"
                        >
                            Dein Browser kann dieses Video nicht abspielen.
                        </video>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setPlaying(true)}
                            className="group absolute inset-0 w-full h-full cursor-pointer"
                            aria-label="Produktfilm abspielen"
                        >
                            <Image
                                src={POSTER_SRC}
                                alt="Treatflow Produktfilm: Kalender, Online-Buchung und Kasse im Überblick"
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
                                    Video ansehen
                                </span>
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
