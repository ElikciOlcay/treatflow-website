# PDF-Vorlagen

Dieser Ordner enthalt HTML-Vorlagen fur Lead-Magneten, die als PDF exportiert werden sollen.

## Anamnesebogen Kosmetik mit Einwilligung

**Datei:** `anamnesebogen-kosmetik-einwilligung.html`

### PDF erstellen

1. Offne die HTML-Datei im Browser (Chrome empfohlen)
2. Drucke die Seite (Cmd+P / Strg+P)
3. Wahle "Als PDF speichern"
4. Einstellungen:
   - Seitengroße: A4
   - Rander: Standard
   - Hintergrundgrafiken: aktivieren
5. Speichern unter: `public/downloads/anamnesebogen-kosmetik-einwilligung.pdf`

### Alternativ mit CLI (falls wkhtmltopdf installiert)

```bash
wkhtmltopdf --enable-local-file-access \
  pdf-templates/anamnesebogen-kosmetik-einwilligung.html \
  public/downloads/anamnesebogen-kosmetik-einwilligung.pdf
```

### Alternativ mit Puppeteer

```bash
npx puppeteer print pdf-templates/anamnesebogen-kosmetik-einwilligung.html \
  public/downloads/anamnesebogen-kosmetik-einwilligung.pdf
```

## Hygieneplan Kosmetikstudio

**Datei:** `hygieneplan-kosmetikstudio.html`

### PDF erstellen

```bash
node scripts/generate-hygieneplan-pdf.mjs
```

Speichert unter: `public/downloads/hygieneplan-kosmetikstudio.pdf`

## Inhalt des Anamnesebogens

- Personliche Daten
- Gesundheitsfragen (Vorerkrankungen, Allergien, Medikamente)
- Geplante Behandlung
- Aufklarung uber Risiken
- Einwilligung zur Behandlung
- Datenschutzhinweis (DSGVO)
- Unterschriftenfelder
- Hinweis auf digitale Version (Treatflow)
- Rechtlicher Disclaimer
