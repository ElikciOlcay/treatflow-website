/** Ländervorwahlen für das Telefonfeld der Lead-Magnet-Formulare */
export const PHONE_COUNTRIES = [
    { code: 'AT', dial: '+43', label: '🇦🇹 +43' },
    { code: 'DE', dial: '+49', label: '🇩🇪 +49' },
    { code: 'CH', dial: '+41', label: '🇨🇭 +41' },
] as const;

export type PhoneCountryCode = (typeof PHONE_COUNTRIES)[number]['code'];

/**
 * Normalisiert eine Telefonnummer ins E.164-Format (z. B. +436601234567).
 * - "+43 660 ..." oder "0043 660 ..." bleibt international
 * - "0660 ..." bekommt die gewählte Ländervorwahl (führende 0 entfällt)
 * Gibt null zurück, wenn die Nummer nicht plausibel ist.
 */
export function normalizePhone(raw: string, country: string = 'AT'): string | null {
    if (!raw || typeof raw !== 'string') return null;

    let value = raw.trim().replace(/[\s\-()./]/g, '');
    if (!value) return null;

    if (value.startsWith('00')) {
        value = `+${value.slice(2)}`;
    }

    if (!value.startsWith('+')) {
        const dial = PHONE_COUNTRIES.find((c) => c.code === country)?.dial ?? '+43';
        value = `${dial}${value.replace(/^0+/, '')}`;
    }

    // E.164: + und 8–15 Ziffern, erste Ziffer nach + nicht 0
    if (!/^\+[1-9]\d{7,14}$/.test(value)) return null;

    return value;
}
