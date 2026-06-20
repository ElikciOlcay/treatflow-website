import { NextRequest, NextResponse } from 'next/server';

const LOOPS_API_BASE = 'https://app.loops.so/api/v1';
const LOOPS_TRANSACTIONAL_URL = `${LOOPS_API_BASE}/transactional`;
const LOOPS_CONTACTS_UPDATE_URL = `${LOOPS_API_BASE}/contacts/update`;

/** Loops-Mailinglisten pro Lead-Magnet (startet den zugehörigen Workflow) */
const LEAD_MAGNET_MAILING_LISTS: Record<string, string> = {
    'Hygieneplan Kosmetikstudio PDF': 'cmq7r8nvt5uiy0jxi1atv03zb',
};

async function sendLoopsNotification(data: {
    email: string;
    studioName: string;
    leadSource: string;
    timestamp: string;
    contactConsent: boolean;
}) {
    const apiKey = process.env.LOOPS_API_KEY;
    const transactionalId = 'cmpwetiyf21im0jybyi331fig';
    const notifyEmail = 'olcay.elikci@treatflow.io';

    if (!apiKey) {
        console.warn('LOOPS_API_KEY nicht konfiguriert');
        return;
    }

    const response = await fetch(LOOPS_TRANSACTIONAL_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            transactionalId,
            email: notifyEmail,
            dataVariables: {
                email: data.email,
                studioName: data.studioName,
                leadSource: data.leadSource,
                timestamp: data.timestamp,
                contactConsent: data.contactConsent ? 'Ja' : 'Nein',
            },
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        console.error('Loops API Error:', error);
        throw new Error(`Loops API Error: ${response.status}`);
    }

    return response.json();
}

async function addLeadToLoops(data: {
    email: string;
    studioName: string;
    leadSource: string;
    mailingListId?: string;
}) {
    const apiKey = process.env.LOOPS_API_KEY;

    if (!apiKey) {
        console.warn('LOOPS_API_KEY nicht konfiguriert');
        return;
    }

    const payload: Record<string, unknown> = {
        email: data.email,
        source: data.leadSource,
        studioName: data.studioName,
        userType: 'lead_magnet',
    };

    if (data.mailingListId) {
        payload.mailingLists = {
            [data.mailingListId]: true,
        };
    }

    const response = await fetch(LOOPS_CONTACTS_UPDATE_URL, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const error = await response.text();
        console.error('Loops Contact API Error:', error);
        throw new Error(`Loops Contact API Error: ${response.status}`);
    }

    return response.json();
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, studioName, leadSource, contactConsent } = body;

        if (contactConsent !== true) {
            return NextResponse.json(
                { error: 'Bitte stimme der Kontaktaufnahme zu, um den Download zu starten.' },
                { status: 400 }
            );
        }

        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                { error: 'E-Mail-Adresse ist erforderlich.' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
                { status: 400 }
            );
        }

        const source = leadSource || 'Unbekannt';
        const studio = studioName?.trim() || 'Nicht angegeben';
        const timestamp = new Date().toLocaleString('de-DE', { 
            timeZone: 'Europe/Vienna',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }) + ' Uhr';

        const mailingListId = LEAD_MAGNET_MAILING_LISTS[source];

        await Promise.all([
            addLeadToLoops({
                email,
                studioName: studio,
                leadSource: source,
                mailingListId,
            }),
            sendLoopsNotification({
                email,
                studioName: studio,
                leadSource: source,
                timestamp,
                contactConsent: true,
            }),
        ]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Lead-Magnet API Error:', error);
        return NextResponse.json(
            { error: 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.' },
            { status: 500 }
        );
    }
}
