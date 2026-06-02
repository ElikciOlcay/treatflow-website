# Loops Lead-Magnet E-Mail Template

Dieses Template wird an dich gesendet, wenn jemand einen Lead-Magneten (z.B. Hygieneplan-PDF) herunterlädt.

## Setup in Loops

### 1. Template erstellen

1. Gehe zu [Loops Dashboard](https://app.loops.so) → **Transactional**
2. Klicke auf **Create transactional email**
3. Name: `lead-magnet-notification`
4. Wähle **MJML** als Editor
5. Kopiere den Inhalt von `index.mjml` hinein
6. Speichern und **Transactional ID** notieren (z.B. `clx...`)

### 2. Variablen im Template

Das Template verwendet folgende Variablen:

| Variable | Beschreibung | Beispiel |
|----------|-------------|----------|
| `{DATA_VARIABLE:email}` | E-Mail des Leads | `studio@beispiel.de` |
| `{DATA_VARIABLE:studioName}` | Name des Studios | `Beauty Studio Maria` |
| `{DATA_VARIABLE:leadSource}` | Name des Lead-Magnets | `Hygieneplan Kosmetikstudio PDF` |
| `{DATA_VARIABLE:timestamp}` | Zeitpunkt des Downloads | `02.06.2026, 11:15 Uhr` |

### 3. Environment Variables

Füge diese Umgebungsvariablen in Vercel hinzu:

```env
LOOPS_API_KEY=your_loops_api_key
```

**Hinweis:** Transactional ID und Notify-E-Mail sind direkt im Code hinterlegt.

### 4. API Key holen

1. Loops Dashboard → **Settings** → **API**
2. Klicke **Create API Key**
3. Kopiere den Key und speichere ihn in Vercel

## Dateistruktur

```
loops-lead-magnet-template/
├── index.mjml          # Das E-Mail Template (MJML)
├── README.md           # Diese Anleitung
└── route.ts.example    # Beispiel API-Route mit Loops-Integration
```

## Testen

1. In Loops unter **Transactional** → dein Template → **Send test email**
2. Oder: Lead-Magnet Formular auf der Website ausfüllen

## Logo ersetzen

Das Template verwendet `https://www.treatflow.io/images/logo-white.png`. 
Falls dieses Bild nicht existiert, lade ein weißes Logo hoch und passe die URL an.
