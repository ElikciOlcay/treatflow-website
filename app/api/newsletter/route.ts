import { NextRequest, NextResponse } from 'next/server';
import { isValidEmail, upsertLoopsContact } from '@/lib/loops';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, consent } = body;

        if (consent !== true) {
            return NextResponse.json(
                { error: 'Bitte stimme dem Erhalt des Newsletters zu.' },
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

        const mailingListId = process.env.LOOPS_NEWSLETTER_MAILING_LIST_ID;
        const payload: Record<string, unknown> = {
            email,
            source: 'Newsletter Blog',
            userType: 'newsletter',
            subscribed: true,
        };

        if (mailingListId) {
            payload.mailingLists = {
                [mailingListId]: true,
            };
        }

        await upsertLoopsContact(payload);

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.' },
            { status: 500 }
        );
    }
}
