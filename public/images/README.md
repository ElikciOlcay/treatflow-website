# Bilder-Struktur für Treatflow Website

## Ordner-Struktur
```
public/images/
├── screenshots/          # Originale App-Screenshots
├── mockups/             # Browser-Mockups (fertig bearbeitet)
└── README.md           # Diese Datei
```

## Namenskonvention für Screenshots

### 1. Homepage Hero Section
- **Dateiname:** `dashboard-main.png`
- **Beschreibung:** Hauptdashboard mit Sidebar, Navigation, Termine
- **Verwendung:** `app/page.tsx` Hero Section

### 2. Homepage VisualShowcase Section
- **Dateiname:** `kundenverwaltung-overview.png`
- **Beschreibung:** Kundenverwaltung Übersicht
- **Verwendung:** `app/components/VisualShowcase.tsx`

- **Dateiname:** `formulare-marketplace.png`
- **Beschreibung:** Formular-Generator/Marketplace
- **Verwendung:** `app/components/VisualShowcase.tsx`

- **Dateiname:** `kalender-overview.png`
- **Beschreibung:** Terminkalender Ansicht
- **Verwendung:** `app/components/VisualShowcase.tsx`

### 3. Subpages Hero Sections

#### Terminkalender
- **Dateiname:** `terminkalender-hero.png`
- **Beschreibung:** Kalender-Ansicht (Wochen/Monatsansicht)
- **Verwendung:** `app/terminkalender/page.tsx`

#### Kundenverwaltung
- **Dateiname:** `kundenverwaltung-hero.png`
- **Beschreibung:** Kundenliste mit Details
- **Verwendung:** `app/kundenverwaltung/page.tsx`

#### Formulare
- **Dateiname:** `formulare-hero.png`
- **Beschreibung:** Formular-Marketplace oder Editor
- **Verwendung:** `app/formulare/page.tsx`

#### Behandlungsdokumentation
- **Dateiname:** `dokumentation-hero.png`
- **Beschreibung:** Behandlungsdokumentation Interface
- **Verwendung:** `app/behandlungsdokumentation/page.tsx`

#### Online-Buchungen
- **Dateiname:** `online-buchung-hero.png`
- **Beschreibung:** Kundensicht der Buchungsseite
- **Verwendung:** `app/online-buchungen/page.tsx`
- **Besonderheit:** Zeigt die Kundenseite (mein-studio.treatflow.io)

#### Shop
- **Dateiname:** `shop-hero.png`
- **Beschreibung:** E-Commerce Interface
- **Verwendung:** `app/shop/page.tsx`

## Technische Anforderungen

### Bildformat
- **Format:** PNG (beste Qualität für Screenshots)
- **Grund:** Verlustfreie Kompression, perfekt für Text und UI-Elemente
- **Vermeiden:** JPEG (schlechte Qualität bei Screenshots)

### Bildgrößen
- **Breite:** Mindestens 1200px (für Retina-Displays)
- **Aspect Ratio:** 16:9 (für aspect-video CSS-Klasse)
- **Beispiel:** 1200x675px oder 1920x1080px

### Optimierung
- PNG-Komprimierung für Web verwenden
- Maximale Dateigröße: 800KB pro Bild (PNG ist größer als WebP)
- Tools: TinyPNG, ImageOptim, oder Squoosh

## Nächste Schritte

1. **Screenshots erstellen** von der echten App
2. **Browser-Mockups** erstellen (mit Safari-Header)
3. **Bilder optimieren** (WebP-Format, komprimiert)
4. **Dateien hochladen** in entsprechende Ordner
5. **Code anpassen** um Placeholder durch echte Bilder zu ersetzen

## Code-Beispiel für Bildintegration

```jsx
// Placeholder ersetzen durch:
<img 
  src="/images/mockups/dashboard-main.png" 
  alt="Treatflow Dashboard"
  className="w-full h-full object-cover"
  loading="lazy"
/>
```
