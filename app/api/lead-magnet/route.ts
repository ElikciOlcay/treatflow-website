import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, studioName, leadSource } = body;

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

        if (process.env.RESEND_API_KEY) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            await resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL || 'Treatflow <noreply@treatflow.io>',
                to: 'olcay.elikci@treatflow.io',
                subject: `Neuer Lead: ${source}`,
                html: `
                    <h2>Neuer Lead über ${source}</h2>
                    <table style="border-collapse:collapse;font-family:sans-serif;">
                        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">E-Mail:</td><td style="padding:8px 0;">${email}</td></tr>
                        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Studio-Name:</td><td style="padding:8px 0;">${studio}</td></tr>
                        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Quelle:</td><td style="padding:8px 0;">${source}</td></tr>
                        <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Zeitpunkt:</td><td style="padding:8px 0;">${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</td></tr>
                    </table>
                `,
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Lead-Magnet API Error:', error);
        return NextResponse.json(
            { error: 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.' },
            { status: 500 }
        );
    }
}
