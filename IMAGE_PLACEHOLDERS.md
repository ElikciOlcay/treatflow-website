# Image Placeholders für Treatflow Website

Diese Datei dokumentiert alle Stellen, wo echte Screenshots/Bilder eingefügt werden können.

## 1. Hero Section - Dashboard Screenshot
**Datei:** `app/page.tsx` (Zeile ~142-432)
**Beschreibung:** Hauptdashboard-Screenshot im Hero-Bereich
**Aktuell:** Detailliertes Mockup mit Sidebar, Navigation, Termine, Kunden, Formulare
**Empfehlung:** Ersetzen durch echten Dashboard-Screenshot
**Größe:** Aspect-ratio 16:9 (video format)

## 2. VisualShowcase Section - Funktions-Screenshots  
**Datei:** `app/components/VisualShowcase.tsx`
**Beschreibung:** Verschiedene Feature-Mockups
**Aktuell:** Placeholder mit Icons und Text
**Zu ersetzen:**
- Kundenverwaltung Screenshot
- Formular-Generator Screenshot  
- Kalender-Ansicht Screenshot

## 3. ScreenshotSection - App Screenshots
**Datei:** `app/components/ScreenshotSection.tsx` 
**Beschreibung:** Grid mit verschiedenen App-Screenshots
**Aktuell:** Placeholder-Karten mit Icons
**Zu ersetzen:**
- Desktop Version Screenshot
- Mobile Version Screenshot  
- Tablet Version Screenshot

## 4. Unterseiten - Hero Section Placeholders
**Aktuell:** Placeholder mit passenden Icons und Beschreibungstext
**Zu ersetzen:** Echte Screenshots der jeweiligen Features

### 4.1 Terminkalender Hero
**Datei:** `app/terminkalender/page.tsx` (Zeile ~67-77)
**Browser-URL:** app.treatflow.io/kalender
**Icon:** Calendar (Indigo)
**Ersetzen mit:** Screenshot des echten Terminkalenders

### 4.2 Kundenverwaltung Hero  
**Datei:** `app/kundenverwaltung/page.tsx` (Zeile ~67-77)
**Browser-URL:** app.treatflow.io/kunden
**Icon:** Users (Blue)
**Ersetzen mit:** Screenshot der echten Kundenverwaltung

### 4.3 Formulare Hero
**Datei:** `app/formulare/page.tsx` (Zeile ~67-77)
**Browser-URL:** app.treatflow.io/formulare
**Icon:** FileText (Green)
**Ersetzen mit:** Screenshot des echten Formular-Marketplace

### 4.4 Behandlungsdokumentation Hero
**Datei:** `app/behandlungsdokumentation/page.tsx` (Zeile ~67-77)
**Browser-URL:** app.treatflow.io/dokumentation
**Icon:** FileText (Purple)
**Ersetzen mit:** Screenshot der echten Behandlungsdokumentation

### 4.5 Online-Buchungen Hero
**Datei:** `app/online-buchungen/page.tsx` (Zeile ~67-77)
**Browser-URL:** mein-studio.treatflow.io
**Icon:** Link2 (Orange)
**Ersetzen mit:** Screenshot der echten Online-Buchungsseite (Kundensicht)

### 4.6 Shop Hero
**Datei:** `app/shop/page.tsx` (Zeile ~67-77)
**Browser-URL:** app.treatflow.io/shop
**Icon:** ShoppingBag (Emerald)
**Ersetzen mit:** Screenshot des echten integrierten Shops

## Technische Hinweise:
- Alle Bilder sollten optimiert sein (WebP format empfohlen)
- Responsive Größen berücksichtigen
- Alt-Tags für Accessibility hinzufügen
- Lazy Loading implementieren für bessere Performance

## Nächste Schritte:
1. Screenshots von der echten Anwendung erstellen
2. Bilder optimieren und in `/public/images/` speichern
3. Placeholder-Code durch `<img>` oder `<Image>` Tags ersetzen
4. Responsive Breakpoints testen
