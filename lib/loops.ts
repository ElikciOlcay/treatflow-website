const LOOPS_API_BASE = 'https://app.loops.so/api/v1';

/** Gemeinsame Loops-Liste für Lead-Magnet-Nurturing (Hygieneplan + Anamnese) */
export const LEAD_MAGNET_MAILING_LIST_ID = 'cmq7r8nvt5uiy0jxi1atv03zb';

export const LEAD_MAGNET_MAILING_LISTS: Record<string, string> = {
    'Hygieneplan Kosmetikstudio PDF': LEAD_MAGNET_MAILING_LIST_ID,
    'Anamnesebogen Kosmetik PDF': LEAD_MAGNET_MAILING_LIST_ID,
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string) {
    return EMAIL_REGEX.test(email);
}

export function formatViennaTimestamp(date = new Date()) {
    return (
        date.toLocaleString('de-DE', {
            timeZone: 'Europe/Vienna',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }) + ' Uhr'
    );
}

export async function upsertLoopsContact(payload: Record<string, unknown>) {
    const apiKey = process.env.LOOPS_API_KEY;
    if (!apiKey) {
        throw new Error('LOOPS_API_KEY nicht konfiguriert');
    }

    const response = await fetch(`${LOOPS_API_BASE}/contacts/update`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Loops Contact API Error: ${response.status} ${error}`);
    }

    return response.json().catch(() => ({ success: true }));
}

export async function sendLoopsTransactional(
    transactionalId: string,
    email: string,
    dataVariables: Record<string, string>
) {
    const apiKey = process.env.LOOPS_API_KEY;
    if (!apiKey) {
        throw new Error('LOOPS_API_KEY nicht konfiguriert');
    }

    const response = await fetch(`${LOOPS_API_BASE}/transactional`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            transactionalId,
            email,
            dataVariables,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Loops Transactional API Error: ${response.status} ${error}`);
    }

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
