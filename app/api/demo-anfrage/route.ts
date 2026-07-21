import { NextRequest, NextResponse } from 'next/server';

const LOOPS_API_URL = 'https://app.loops.so/api/v1/transactional';

// Loops Transactional: "Demo-Anfrage Benachrichtigung" (demo-anfrage-benachrichtigung.zip)
const TRANSACTIONAL_ID = 'cmq71868404s90jzcegofv056';
const NOTIFY_EMAIL = 'olcay.elikci@treatflow.io';

async function sendLoopsNotification(dataVariables: {
    name: string;
    praxisname: string;
    ort: string;
    telefon: string;
    email: string;
    wunsch: string;
    nachricht: string;
    leadSource: string;
    timestamp: string;
}) {
    const apiKey = process.env.LOOPS_API_KEY;

    if (!apiKey) {
        console.warn('LOOPS_API_KEY nicht konfiguriert');
        return;
    }

    const response = await fetch(LOOPS_API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            transactionalId: TRANSACTIONAL_ID,
            email: NOTIFY_EMAIL,
            dataVariables,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        console.error('Loops API Error:', error);
        throw new Error(`Loops API Error: ${response.status}`);
    }

    // Loops antwortet oft mit leerem Body oder Non-JSON – die Mail ist dann schon raus.
    const text = await response.text();
    if (!text.trim()) {
        return { success: true };
    }
    try {
        return JSON.parse(text);
    } catch {
        return { success: true };
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, praxisname, ort, telefon, email, wunsch, nachricht, leadSource } = body;

        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                { error: 'E-Mail-Adresse ist erforderlich.' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
                { status: 400 }
            );
        }

        if (!name || typeof name !== 'string' || !name.trim()) {
            return NextResponse.json(
                { error: 'Name ist erforderlich.' },
                { status: 400 }
            );
        }

        const timestamp = new Date().toLocaleString('de-DE', {
            timeZone: 'Europe/Vienna',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }) + ' Uhr';

        await sendLoopsNotification({
            name: name.trim(),
            praxisname: praxisname?.trim() || 'Nicht angegeben',
            ort: ort?.trim() || 'Nicht angegeben',
            telefon: telefon?.trim() || 'Nicht angegeben',
            email,
            wunsch: wunsch || 'Keine Angabe',
            nachricht: nachricht?.trim() || 'Keine Nachricht',
            leadSource: leadSource || 'Demo-Anfrage',
            timestamp,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Demo-Anfrage API Error:', error);
        return NextResponse.json(
            { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' },
            { status: 500 }
        );
    }
}
