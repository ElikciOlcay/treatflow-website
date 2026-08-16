import { NextRequest, NextResponse } from 'next/server';
import {
    formatViennaTimestamp,
    isValidEmail,
    sendLoopsTransactional,
    upsertLoopsContact,
} from '@/lib/loops';

const TRANSACTIONAL_ID = 'cmq71868404s90jzcegofv056';
const NOTIFY_EMAIL = 'olcay.elikci@treatflow.io';

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

        if (!isValidEmail(email)) {
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

        const timestamp = formatViennaTimestamp();
        const source = leadSource || 'Demo-Anfrage';
        const studio = praxisname?.trim() || 'Nicht angegeben';
        const firstName = name.trim();

        await Promise.all([
            upsertLoopsContact({
                email,
                firstName,
                source,
                studioName: studio,
                userType: 'demo_request',
                subscribed: true,
            }),
            sendLoopsTransactional(TRANSACTIONAL_ID, NOTIFY_EMAIL, {
                name: firstName,
                praxisname: studio,
                ort: ort?.trim() || 'Nicht angegeben',
                telefon: telefon?.trim() || 'Nicht angegeben',
                email,
                wunsch: wunsch || 'Keine Angabe',
                nachricht: nachricht?.trim() || 'Keine Nachricht',
                leadSource: source,
                timestamp,
            }),
        ]);

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' },
            { status: 500 }
        );
    }
}
