import { NextRequest, NextResponse } from 'next/server';
import {
    ensureLoopsContactProperties,
    formatViennaTimestamp,
    isValidEmail,
    LEAD_MAGNET_MAILING_LISTS,
    sendLoopsTransactional,
    upsertLoopsContact,
} from '@/lib/loops';
import { normalizePhone } from '@/lib/phone';

const NOTIFY_TRANSACTIONAL_ID = 'cmpwetiyf21im0jybyi331fig';
const NOTIFY_EMAIL = 'olcay.elikci@treatflow.io';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, studioName, phone, phoneCountry, leadSource, contactConsent } = body;

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

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
                { status: 400 }
            );
        }

        const normalizedPhone = normalizePhone(phone, phoneCountry);
        if (!normalizedPhone) {
            return NextResponse.json(
                { error: 'Bitte gib eine gültige Telefonnummer ein.' },
                { status: 400 }
            );
        }

        const source = leadSource || 'Unbekannt';
        const studio = studioName?.trim() || 'Nicht angegeben';
        const timestamp = formatViennaTimestamp();
        const mailingListId = LEAD_MAGNET_MAILING_LISTS[source];

        const contactPayload: Record<string, unknown> = {
            email,
            source,
            studioName: studio,
            phone: normalizedPhone,
            // Nachweis der Einwilligung (E-Mail + Telefon inkl. KI-Anruf), § 174 TKG / § 7 UWG
            contactConsentAt: new Date().toISOString(),
            userType: 'lead_magnet',
            subscribed: true,
        };

        if (mailingListId) {
            contactPayload.mailingLists = {
                [mailingListId]: true,
            };
        }

        await ensureLoopsContactProperties({ phone: 'string', contactConsentAt: 'date' });

        await Promise.all([
            upsertLoopsContact(contactPayload),
            sendLoopsTransactional(NOTIFY_TRANSACTIONAL_ID, NOTIFY_EMAIL, {
                email,
                studioName: studio,
                phone: normalizedPhone,
                leadSource: source,
                timestamp,
                contactConsent: 'Ja (E-Mail + Telefon/KI)',
            }),
        ]);

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.' },
            { status: 500 }
        );
    }
}
