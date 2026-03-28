'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle, Download, Loader2, Lock } from 'lucide-react';
import Link from 'next/link';

interface LeadDownloadFormProps {
    downloadUrl: string;
    leadSource: string;
    buttonText?: string;
    successTitle?: string;
    successDescription?: string;
    disclaimerText?: string;
    compact?: boolean;
}

export default function LeadDownloadForm({
    downloadUrl,
    leadSource,
    buttonText = 'Kostenlos herunterladen',
    successTitle = 'Download bereit!',
    successDescription = 'Dein Download startet automatisch.',
    disclaimerText,
    compact = false,
}: LeadDownloadFormProps) {
    const [email, setEmail] = useState('');
    const [studioName, setStudioName] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('/api/lead-magnet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, studioName, leadSource }),
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMsg(data.error || 'Ein Fehler ist aufgetreten.');
                setStatus('error');
                return;
            }

            setStatus('success');

            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch {
            setErrorMsg('Verbindungsfehler. Bitte versuche es erneut.');
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{successTitle}</h3>
                <p className="text-gray-600 mb-6">{successDescription}</p>
                <a
                    href={downloadUrl}
                    download
                    className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors mb-8"
                >
                    <Download className="mr-2 h-5 w-5" />
                    Nochmal herunterladen
                </a>
                <div className="border-t border-emerald-200 pt-6 mt-2">
                    <p className="text-gray-700 font-medium mb-3">
                        Du willst Formulare, Dokumentation und Studioverwaltung komplett digital lösen?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            Treatflow 14 Tage kostenlos testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/formulare"
                            className="inline-flex items-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                        >
                            Digitale Formulare ansehen
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={compact ? '' : 'bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm'}>
            <div className={compact ? 'space-y-3' : 'space-y-4'}>
                <div>
                    <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-Mail-Adresse *
                    </label>
                    <input
                        id="lead-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="deine@email.de"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="lead-studio" className="block text-sm font-medium text-gray-700 mb-1">
                        Studio-Name <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                        id="lead-studio"
                        type="text"
                        value={studioName}
                        onChange={(e) => setStudioName(e.target.value)}
                        placeholder="z. B. Beauty Studio Maria"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                </div>

                {status === 'error' && (
                    <p className="text-red-600 text-sm">{errorMsg}</p>
                )}

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {status === 'loading' ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Wird verarbeitet...
                        </>
                    ) : (
                        <>
                            <Download className="mr-2 h-5 w-5" />
                            {buttonText}
                        </>
                    )}
                </button>
            </div>

            <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                <Lock className="h-3 w-3 flex-shrink-0" />
                <span>Deine Daten werden nicht an Dritte weitergegeben.</span>
            </div>

            {disclaimerText && (
                <p className="mt-3 text-xs text-gray-400 leading-relaxed">{disclaimerText}</p>
            )}
        </form>
    );
}
