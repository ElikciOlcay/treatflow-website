'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!consent) {
            setErrorMsg('Bitte stimme dem Erhalt des Newsletters zu.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, consent: true }),
            });
            const data = await res.json();

            if (!res.ok) {
                setErrorMsg(data.error || 'Ein Fehler ist aufgetreten.');
                setStatus('error');
                return;
            }

            setStatus('success');
            setEmail('');
            setConsent(false);
        } catch {
            setErrorMsg('Verbindungsfehler. Bitte versuche es erneut.');
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="max-w-md mx-auto bg-white/10 border border-white/20 rounded-xl p-6 text-center">
                <CheckCircle className="h-8 w-8 text-white mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">Du bist angemeldet.</p>
                <p className="text-indigo-100 text-sm">
                    Du erhältst die nächsten Studio-Tipps direkt per E-Mail.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Deine E-Mail-Adresse"
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                    type="submit"
                    disabled={status === 'loading' || !consent}
                    className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <>
                            Anmelden
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                    )}
                </button>
            </div>
            <label className="flex items-start gap-2 mt-4 text-left cursor-pointer">
                <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) => {
                        setConsent(event.target.checked);
                        if (event.target.checked && status === 'error') {
                            setStatus('idle');
                            setErrorMsg('');
                        }
                    }}
                    className="mt-1 h-4 w-4 rounded border-indigo-200 text-indigo-600 focus:ring-white"
                />
                <span className="text-indigo-100 text-sm leading-relaxed">
                    Ich möchte den Treatflow-Newsletter erhalten und akzeptiere die{' '}
                    <Link href="/datenschutz" className="underline underline-offset-2 hover:text-white">
                        Datenschutzerklärung
                    </Link>
                    . Abmeldung jederzeit möglich.
                </span>
            </label>
            {status === 'error' && (
                <p className="text-white text-sm mt-3">{errorMsg}</p>
            )}
        </form>
    );
}
