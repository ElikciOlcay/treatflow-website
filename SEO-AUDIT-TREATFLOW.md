# Treatflow SEO-Analyse -- Vollstaendiger Audit-Bericht

**Website:** https://www.treatflow.io  
**Datum:** 28. Maerz 2026  
**Umfang:** 79 indexierbare Seiten (inkl. Blog)  
**Technologie:** Next.js (SSR/SSG)

---

## A. Executive Summary

treatflow.io ist eine gut strukturierte Next.js-Website mit 79 indexierbaren Seiten (inkl. Blog). Die Grundlagen (Metadata, Canonicals, Schema Markup, DSGVO-Consent) sind solide. Die Website deckt das Kernthema "Kosmetikstudio Software" in beachtlicher Tiefe ab -- Feature-Seiten, Branchenseiten, Geo-Seiten und 30+ Blog-Artikel.

### Staerken

- Alle Seiten (bis auf Landing-Pages) haben eigene Metadata inkl. Canonical
- Umfangreiche Schema-Markup-Implementierung (Organization, WebSite, SoftwareApplication, FAQ, Review)
- Gute Branchen-Abdeckung (10 Verticals)
- Sinnvolle Content-Cluster-Strategie (Kosmetikstudio als Hub)
- LLM-optimierte Dateien (llms.txt, llms-full.txt) vorhanden

### Kritische Probleme

1. Sitemap.xml liefert HTTP 500 -- Google kann die Sitemap nicht lesen
2. Doppelte robots.txt -- app/robots.ts und public/robots.txt konkurrieren, die ausgelieferte Version ist die minimale aus app/robots.ts (ohne Disallow-Regeln)
3. Keyword-Kannibalisierung bei mehreren Kundenkartei- und Dokumentations-Seiten
4. Fehlende dedizierte Preisseite -- Preise sind nur als Section auf der Homepage
5. Schwache interne Verlinkung zwischen Blog und Money-Pages
6. Homepage hat kein eigenes metadata -- erbt nur aus Layout (Canonical ist generisch)

---

## B. Komplette URL-/Seitenliste

### B.1 Kern- & Feature-Seiten (22 Seiten)

| URL | Seitentyp | Title (+ " | Treatflow") | Meta Description | H1 | Canonical | Index |
|-----|-----------|---------------------------|------------------|----|-----------|-------|
| / | Homepage | Kosmetikstudio Software: Termine & Kunden | Verwalte Terminkalender, Online-Buchungen, Kundenkartei und Behandlungsdoku -- DSGVO-konform, 14 Tage kostenlos testen. Ideal fuer dein Studio. | Schluss mit Terminchaos, Zettelwirtschaft und No-Shows | https://www.treatflow.io (nur im Layout) | Ja |
| /terminkalender | Feature | Terminplaner & Kalender fuers Kosmetikstudio | Terminplaner und Terminkalender fuer dein Kosmetikstudio: Online-Buchungen 24/7, automatische Erinnerungen per SMS und E-Mail, weniger No-Shows. | Der Terminplaner fuer dein Kosmetikstudio | Ja | Ja |
| /kundenverwaltung | Feature | Digitale Kundenkartei fuers Kosmetikstudio | Kundenverwaltung, Behandlungsverlauf und wichtige Infos an einem Ort. Weniger Zettel, mehr Ueberblick -- sicher und strukturiert. | Kundenkartei Kosmetik -- alle Kundendaten in einer App | Ja | Ja |
| /formulare | Feature | Anamneseformular Kosmetik: Fragen & Pflichten | Checkliste & Beispiele (Microneedling, Laser, PMU). Formulare mit KI-Generator -- NiSV-konform und rechtssicher. | Professionelle Formulare fuer alle Behandlungen | Ja | Ja |
| /behandlungsdokumentation | Feature | Behandlungsdokumentation Kosmetik digital | Digitale Behandlungsdokumentation Kosmetik mit Vorher-Nachher-Fotos, Notizen und Historie. Strukturiert, nachvollziehbar und NiSV-konform. | Professionelle Behandlungsdokumentation | Ja | Ja |
| /online-buchungen | Feature | Online-Buchungen Kosmetikstudio: 24/7 Termine | Deine Kunden buchen rund um die Uhr ueber deinen persoenlichen Link. Automatische Bestaetigungen, weniger No-Shows und kein Telefonstress mehr. | Online Buchungssystem fuer Kosmetikstudio | Ja | Ja |
| /nachrichtenautomatisierung | Feature | SMS & E-Mail Erinnerungen fuers Kosmetikstudio | Automatische Nachrichten per E-Mail und SMS fuer Kosmetikstudios: Terminbestaetigungen, Erinnerungen, Stornierungen und Follow-ups. Ab 0,09 EUR pro SMS. | Automatische Nachrichten fuer mehr Kundenbindung | Ja | Ja |
| /nisv-dokumentation | Feature | NiSV-Dokumentation: Beratung & Doku digital | Erstelle, speichere und finde Unterlagen schnell wieder. Reduziere Papieraufwand und behalte Fristen im Blick -- ideal fuer NiSV-relevante Behandlungen. | NiSV-Dokumentation digital im Griff | Ja | Ja |
| /kundenkartei-software | Feature/SEO | Kundenkartei App fuer Kosmetik & Beauty | Die Kundenkartei App fuer Kosmetikstudios: Kundendaten, Behandlungshistorie und Fotos in einer App. DSGVO-konform, 14 Tage kostenlos testen. | Deine digitale Kundenkartei fuer Kosmetik | Ja | Ja |
| /shop | Feature | Produktverkauf & Lager fuer Kosmetikstudios | Integriertes Produktverkauf-System fuer Kosmetikstudios. Verkaufe Pflegeprodukte direkt an deine Kunden mit einfacher Lagerverwaltung. | Verkaufe Produkte und behalte alles im Blick | Ja | Ja |
| /website-fuer-kosmetikstudios | Service | Website fuer Kosmetikstudio erstellen lassen | Individuelle Website fuer dein Kosmetikstudio, Laserstudio oder Beauty Business. Professionell, mobil optimiert und auf Buchungen ausgelegt. Ab 1.000 Euro. | Individuelle Websites fuer Kosmetikstudios | Ja | Ja |
| /kosmetikstudio-software-vergleich | Vergleich | Kosmetikstudio Software Vergleich & Checkliste | Online-Buchung, Kundenkartei, Doku/Compliance, Support, Datenschutz: So findest du die passende Loesung -- inklusive Checkliste. | Kosmetikstudio Software im Vergleich | Ja | Ja |
| /treatflow-vs-treatwell | Vergleich | Treatflow vs. Treatwell: Der ehrliche Vergleich fuer Kosmetikstudios | Treatflow oder Treatwell? Keine Provisionen, NiSV-konforme Dokumentation und persoenliche Betreuung vs. Marktplatz-Modell mit bis zu 35% Provision. Jetzt vergleichen. | Treatflow vs. Treatwell: Was passt besser? | Ja | Ja |

### B.2 SEO-Cluster-Seiten (9 Seiten)

| URL | Title | H1 | Canonical |
|-----|-------|-----|-----------|
| /kosmetikstudio-software | Kosmetikstudio Software: Termine, Kunden & Doku | Die Software fuer dein Kosmetikstudio | Ja |
| /terminsoftware-kosmetikstudio | Terminsoftware & Terminplaner Kosmetikstudio | Online-Termine und Kalender fuer dein Kosmetikstudio | Ja |
| /kundenkartei-kosmetikstudio | Digitale Kundenkartei fuer dein Kosmetikstudio | Digitale Kundenkartei fuer dein Kosmetikstudio | Ja |
| /anamnesebogen-kosmetikstudio | Anamnesebogen Kosmetik: Formulare & Vorlagen | Anamneseboegen und Formulare digital im Kosmetikstudio | Ja |
| /behandlungsdokumentation-kosmetikstudio | Behandlungsdoku Kosmetikstudio: NiSV-konform | Behandlungsdokumentation fuer dein Kosmetikstudio | Ja |
| /nisv-dokumentation-kosmetikstudio | NiSV-Doku Kosmetikstudio: rechtssicher | NiSV-konforme Dokumentation fuer dein Kosmetikstudio | Ja |
| /digitale-anamnese-kosmetikstudio | Digitale Anamnese Kosmetikstudio: papierlos | Digitale Anamnese fuer dein Kosmetikstudio | Ja |
| /online-terminbuchung-kosmetikstudio | Online-Terminbuchung Kosmetikstudio: 24/7 | Online-Terminbuchung fuer dein Kosmetikstudio | Ja |
| /sms-erinnerungen-kosmetikstudio | SMS-Erinnerungen Kosmetik: weniger No-Shows | SMS-Erinnerungen fuer dein Kosmetikstudio | Ja |

### B.3 Branchenseiten (10 Seiten)

| URL | Title | H1 |
|-----|-------|-----|
| /kosmetikstudio-software | Kosmetikstudio Software: Termine, Kunden & Doku | Die Software fuer dein Kosmetikstudio |
| /schoenheitssalon-software | Schoenheitssalon Software fuer Kosmetikinstitut | Schoenheitssalon Software fuer deinen Salon |
| /laser-haarentfernung-software | Software fuer Laser Haarentfernung & NiSV-Doku | Software fuer Laser Haarentfernung |
| /permanent-makeup-software | Permanent Makeup Software: Termine & Doku | Software fuer dein Permanent Makeup Studio |
| /aesthetische-medizin-software | Aesthetische Medizin Software: Praxis & Doku | Software fuer aesthetische Medizin |
| /tattoo-studio-software | Tattoo Studio Software: Termine & Verwaltung | Software fuer dein Tattoo Studio |
| /nagelstudio-software | Nagelstudio Software: Termine & Verwaltung | Software fuer dein Nagelstudio |
| /lash-studio-software | Lash Studio Software: Termine & Einwilligungen | Software fuer dein Wimpernstudio |
| /spa-wellness-software | Spa & Wellness Software: Termine & Verwaltung | Software fuer dein Spa & Wellness Studio |
| /massage-software | Massage Software: Termine, Kunden & Verwaltung | Software fuer deine Massage-Praxis |

### B.4 Geo-Seiten (6 Seiten)

| URL | Title |
|-----|-------|
| /studio-software-deutschland | Studio Software Deutschland: Beauty & Kosmetik |
| /studio-software-oesterreich | Studio Software Oesterreich: Beauty & Kosmetik |
| /kosmetikstudio-software-berlin | Kosmetikstudio Software Berlin: Termine & mehr |
| /kosmetikstudio-software-wien | Kosmetikstudio Software Wien: Online-Buchungen |
| /permanent-makeup-software-deutschland | Permanent Makeup Software Deutschland: PMU |
| /laserstudio-software-deutschland | Laserstudio Software Deutschland: NiSV-konform |

### B.5 Sonstige Seiten

| URL | Seitentyp | Title |
|-----|-----------|-------|
| /kontakt | Kontakt | Kontakt - Treatflow Support & Beratung |
| /ueber-uns | Ueber uns | Ueber uns - Treatflow Team Made in Austria |
| /impressum | Legal | (vorhanden) |
| /datenschutz | Legal | (vorhanden) |
| /hygieneplan-kosmetikstudio-pdf | Ratgeber/Lead | Hygieneplan Kosmetikstudio & Nagelstudio PDF |
| /landing/terminsoftware-kosmetikstudio | Landing (noindex) | Terminsoftware Kosmetikstudio - 14 Tage gratis testen |
| /landing/dokumentation-formulare | Landing | NiSV-Dokumentation & Formulare fuers Studio |
| /demo/skin-atelier | Demo | (vorhanden) |

### B.6 Blog-Seiten (31 Seiten inkl. Index)

| URL | Kategorie | Titel |
|-----|-----------|-------|
| /blog | Index | Kosmetikstudio Blog: Tipps fuer Beauty-Profis |
| /blog/beste-kosmetikstudio-software-2026 | Software | Beste Kosmetikstudio Software 2026 |
| /blog/terminbuchung-kosmetikstudio | Organisation | Terminbuchung Kosmetikstudio |
| /blog/kundenkartei-kosmetik | Digitalisierung | Kundenkartei Kosmetik: Digital statt Zettelchaos |
| /blog/behandlungsdokumentation-kosmetik | Recht | Behandlungsdokumentation Kosmetik |
| /blog/schoenheitssalon-software | Software | Schoenheitssalon Software 2026 |
| /blog/software-kosmetikinstitut | Digitalisierung | Software Kosmetikinstitut |
| /blog/kosmetikstudio-eroeffnen-guide | Business | Kosmetikstudio eroeffnen: Guide |
| /blog/online-buchungssystem-vorteile | Digitalisierung | Warum Online-Buchungssystem |
| /blog/behandlungsdokumentation-nisv-konform | Recht | NiSV-konform dokumentieren |
| /blog/no-shows-reduzieren-kosmetikstudio | Automatisierung | No-Shows reduzieren |
| /blog/anamnese-formulare-digital-kosmetik | Recht | Anamnese digital |
| /blog/dsgvo-datenschutz-kosmetikstudio | Recht | DSGVO im Kosmetikstudio |
| /blog/email-marketing-kosmetikstudios | Marketing | Email-Marketing |
| /blog/social-media-marketing-kosmetikstudio | Marketing | Social Media Marketing |
| /blog/google-business-profil-kosmetikstudio | Marketing | Google Business Profil |
| /blog/saisonales-marketing-beauty-studios | Marketing | Saisonales Marketing |
| /blog/erste-kundinnen-gewinnen-kosmetikstudio | Marketing | Erste Kundinnen gewinnen |
| /blog/kundenbindung-kosmetikstudio-5-strategien | Kundenbindung | 5 Strategien Kundenbindung |
| /blog/lash-wimpern-kundenbindung | Kundenbindung | Lash-Kundinnen binden |
| /blog/hautanalyse-beratung-kosmetikstudio | Fachkompetenz | Professionelle Hautanalyse |
| /blog/anti-aging-trends-2024 | Fachkompetenz | Anti-Aging Trends 2024 |
| /blog/ki-kosmetikstudio-hautanalyse | Digitalisierung | KI Hautanalyse |
| /blog/hygiene-sicherheit-kosmetikstudio | Recht | Hygiene und Sicherheit |
| /blog/mitarbeiterfuehrung-beauty-business | Business | Mitarbeiterfuehrung |
| /blog/kosmetikstudio-buchhaltung-steuern | Business | Buchhaltung & Steuern |
| /blog/preisgestaltung-kosmetikbehandlungen | Business | Preisgestaltung |
| /blog/zusatzumsatz-kosmetikstudio-produkte | Business | Zusatzumsatz Produkte |
| /blog/terminkalender-kosmetikstudio-effizienz | Organisation | Terminkalender Effizienz |
| /blog/nachrichtenautomatisierung-kosmetikstudio | Automatisierung | Nachrichtenautomatisierung |
| /blog/sms-erinnerungen-termine-kosmetikstudio | Automatisierung | SMS-Erinnerungen |
| /blog/wochenplanung-termine-kosmetikstudio | Organisation | Wochenplanung |
| /blog/urlaub-vertretung-kosmetikstudio | Business | Urlaub & Vertretung |
| /blog/behandlungsraum-einrichten-kosmetikstudio | Fachkompetenz | Behandlungsraum einrichten |

---

## C. Informationsarchitektur

### C.1 Aktuelle Struktur

```
treatflow.io/
|
|-- Homepage (/) -- Hub-Seite mit allen wichtigen internen Links
|
|-- FUNKTIONEN (Navigation-Dropdown)
|   |-- /terminkalender
|   |-- /kundenverwaltung
|   |-- /formulare
|   |-- /behandlungsdokumentation
|   |-- /online-buchungen
|   |-- /nachrichtenautomatisierung
|   |-- /nisv-dokumentation
|   |-- /kosmetikstudio-software-vergleich
|   |-- /shop
|   |-- /website-fuer-kosmetikstudios
|
|-- BRANCHEN (Navigation-Dropdown)
|   |-- /kosmetikstudio-software (Hauptbranche)
|   |-- /schoenheitssalon-software
|   |-- /laser-haarentfernung-software
|   |-- /permanent-makeup-software
|   |-- /aesthetische-medizin-software
|   |-- /tattoo-studio-software
|   |-- /nagelstudio-software
|   |-- /lash-studio-software
|   |-- /spa-wellness-software
|   |-- /massage-software
|
|-- SEO-CLUSTER (nicht in Navigation, aber in Sitemap)
|   |-- /terminsoftware-kosmetikstudio
|   |-- /kundenkartei-kosmetikstudio
|   |-- /kundenkartei-software
|   |-- /anamnesebogen-kosmetikstudio
|   |-- /behandlungsdokumentation-kosmetikstudio
|   |-- /nisv-dokumentation-kosmetikstudio
|   |-- /digitale-anamnese-kosmetikstudio
|   |-- /online-terminbuchung-kosmetikstudio
|   |-- /sms-erinnerungen-kosmetikstudio
|
|-- GEO-SEITEN (nur im Footer)
|   |-- /studio-software-deutschland
|   |-- /studio-software-oesterreich
|   |-- /kosmetikstudio-software-berlin
|   |-- /kosmetikstudio-software-wien
|   |-- /permanent-makeup-software-deutschland
|   |-- /laserstudio-software-deutschland
|
|-- VERGLEICH
|   |-- /kosmetikstudio-software-vergleich
|   |-- /treatflow-vs-treatwell
|
|-- BLOG (30 Artikel + Index)
|   |-- /blog/[slug]
|
|-- LANDING (teils noindex)
|   |-- /landing/terminsoftware-kosmetikstudio
|   |-- /landing/dokumentation-formulare
|
|-- SONSTIGE
    |-- /kontakt
    |-- /ueber-uns
    |-- /hygieneplan-kosmetikstudio-pdf
    |-- /impressum
    |-- /datenschutz
```

### C.2 Bewertung der Informationsarchitektur

**Positiv:**
- Klare Trennung Funktionen vs. Branchen in der Navigation
- Footer verlinkt alle wichtigen Seitenbereiche
- Content-Cluster-Ansatz fuer "Kosmetikstudio" als Hauptthema gut umgesetzt

**Probleme:**

1. SEO-Cluster-Seiten nicht in Navigation: Die 9 SEO-Cluster-Seiten (z.B. /terminsoftware-kosmetikstudio) sind nur ueber Sitemap und vereinzelte interne Links erreichbar -- nicht ueber Navigation oder Footer. Das schwaecht deren Authority.

2. Kannibalisierung Kundenkartei: Drei Seiten konkurrieren um aehnliche Keywords:
   - /kundenverwaltung (Feature-Seite)
   - /kundenkartei-software (SEO-Seite)
   - /kundenkartei-kosmetikstudio (Cluster-Seite)

3. Kannibalisierung Dokumentation: Vier Seiten ueberlappen:
   - /behandlungsdokumentation (Feature)
   - /behandlungsdokumentation-kosmetikstudio (Cluster)
   - /nisv-dokumentation (Feature)
   - /nisv-dokumentation-kosmetikstudio (Cluster)

4. Kannibalisierung Terminbuchung: Drei Seiten:
   - /terminkalender (Feature)
   - /terminsoftware-kosmetikstudio (Cluster)
   - /online-terminbuchung-kosmetikstudio (Cluster)

5. Kannibalisierung Anamnese/Formulare:
   - /formulare (Feature)
   - /anamnesebogen-kosmetikstudio (Cluster)
   - /digitale-anamnese-kosmetikstudio (Cluster)

6. Keine Preisseite als eigenstaendige URL: /preise existiert nicht -- Pricing ist nur eine Section auf der Homepage (Anchor /#pricing). Das ist verschenktes Ranking-Potential fuer "Kosmetikstudio Software Preise/Kosten".

7. Blog-Artikel kannibalisieren Landingpages:
   - /blog/schoenheitssalon-software vs. /schoenheitssalon-software
   - /blog/software-kosmetikinstitut vs. /schoenheitssalon-software
   - /blog/kundenkartei-kosmetik vs. /kundenkartei-kosmetikstudio
   - /blog/behandlungsdokumentation-kosmetik vs. /behandlungsdokumentation-kosmetikstudio
   - /blog/terminbuchung-kosmetikstudio vs. /terminsoftware-kosmetikstudio

---

## D. Keyword-Mapping der bestehenden Seiten

### D.1 Money-Pages (hohe kommerzielle Suchintention)

| URL | Primaeres Keyword | Sekundaere Keywords | Bewertung |
|-----|-------------------|---------------------|-----------|
| / | Kosmetikstudio Software | Software fuer Kosmetikstudio, Studio Software | Gut -- aber Title koennte staerker fokussiert sein |
| /kosmetikstudio-software | Kosmetikstudio Software | Software Kosmetik, All-in-One Kosmetikstudio | KANNIBALISIERT MIT HOMEPAGE |
| /terminkalender | Terminplaner Kosmetikstudio | Terminkalender Kosmetik | Gut |
| /online-buchungen | Online Buchungssystem Kosmetikstudio | Terminbuchung Kosmetik online | Gut |
| /kundenverwaltung | Kundenkartei Kosmetikstudio | Digitale Kundenkartei Kosmetik | Konkurriert mit 2 anderen Seiten |
| /formulare | Anamnesebogen Kosmetik | Anamnese Formular Kosmetikstudio | Konkurriert mit Cluster-Seiten |
| /behandlungsdokumentation | Behandlungsdokumentation Kosmetik | Dokumentation Software | Konkurriert mit Cluster |
| /nisv-dokumentation | NiSV Dokumentation Software | NiSV konform dokumentieren | Konkurriert mit Cluster |
| /shop | Produktverkauf Kosmetikstudio | Lagerverwaltung Beauty | Nischenthema, ok |

### D.2 Branchenseiten

| URL | Primaeres Keyword | Bewertung |
|-----|-------------------|-----------|
| /schoenheitssalon-software | Schoenheitssalon Software | Gut -- aber "Software Kosmetikinstitut" waere relevanter als "Schoenheitssalon" |
| /laser-haarentfernung-software | Laser Haarentfernung Software | Gut |
| /permanent-makeup-software | Permanent Makeup Software / PMU Software | Gut |
| /aesthetische-medizin-software | Aesthetische Medizin Software | Gut |
| /tattoo-studio-software | Tattoo Studio Software | Gut |
| /nagelstudio-software | Nagelstudio Software | Gut |
| /lash-studio-software | Lash Studio Software / Wimpernstudio Software | Gut |
| /spa-wellness-software | Spa Software / Wellness Software | Gut |
| /massage-software | Massage Software | Gut -- "Massagepraxis Software" auch relevant |

### D.3 Keywords ohne passende Landingpage

| Keyword-Cluster | Suchvolumen-Vermutung | Fehlende Seite |
|-----------------|----------------------|----------------|
| Kosmetikstudio Software Preise/Kosten | Mittel | /preise |
| CRM Kosmetikstudio / CRM Beauty Salon | Mittel | Keine dedizierte CRM-Seite |
| Kassensystem Kosmetikstudio / Kasse Beauty | Mittel | Fehlt komplett |
| Gutschein Software Kosmetik | Niedrig-Mittel | Fehlt |
| Kosmetikstudio App / Beauty App | Hoch | Keine App-Store-Seite |
| Treatflow Erfahrungen/Test | Niedrig | Fehlt |
| Kosmetikstudio Software kostenlos | Hoch | Sollte als Vergleich existieren |
| Terminbuchung Website einbinden / Booking Widget | Mittel | Fehlt |
| Friseur Software / Hairstylist Software | Hoch | Branche fehlt |
| Microblading Software | Niedrig | Wird ueber PMU abgedeckt |
| Kosmetikstudio eroeffnen Checkliste (transaktional) | Mittel | Blog existiert, aber kein Lead-Magnet |
| Einwilligungserklaerung Kosmetik Vorlage | Mittel | Nur im Blog beruehrt |

---

## E. Onpage-Audit der wichtigsten Seiten

### E.1 Homepage /

| Kriterium | Bewertung | Details |
|-----------|-----------|---------|
| Title | Gut (51 Zeichen) | "Kosmetikstudio Software: Termine & Kunden | Treatflow" -- klar, Keyword vorne |
| Meta Description | Gut (138 Zeichen) | Enthaelt USPs und CTA |
| H1 | Gut | "Schluss mit Terminchaos, Zettelwirtschaft und No-Shows" -- emotional, aber kein Haupt-Keyword |
| Keyword-Fokus | Mittel | H1 ist emotionaler Einstieg, Keyword "Kosmetikstudio Software" fehlt in H1 |
| Content-Tiefe | Gut | Umfangreiche Seite mit Challenges, Vergleichstabelle, Pricing, FAQs, Testimonials, SEO-Text |
| Interne Links | Sehr gut | Verlinkt Feature-Seiten, Branchenseiten, Blog, Vergleichsseiten |
| Schema Markup | Sehr gut | SoftwareApplication, FAQPage, Review-Schema |
| CTA-Logik | Sehr gut | Mehrfache CTAs (Register + Demo), konsistent |
| Problem | KEIN EIGENES METADATA | Erbt aus layout.tsx -- die Canonical ist nur https://www.treatflow.io ohne explizite Seitenmetadata |

### E.2 /kosmetikstudio-software

| Kriterium | Bewertung | Details |
|-----------|-----------|---------|
| Title | Gut | "Kosmetikstudio Software: Termine, Kunden & Doku" |
| H1 | Gut | "Die Software fuer dein Kosmetikstudio" |
| Problem | KANNIBALISIERT MIT HOMEPAGE | Beide zielen auf "Kosmetikstudio Software". Die Seite rankt vermutlich schwaecher als die HP |
| Content | Sehr gut | Umfangreich mit Problem/Loesung, Features, Testimonials, FAQ |
| Empfehlung | Differenzieren: HP = Brand + Uebersicht, diese Seite = dezidiert "Kosmetikstudio Software" mit mehr Vergleichsinhalt |

### E.3 /terminkalender

| Kriterium | Bewertung |
|-----------|-----------|
| Title | Gut -- "Terminplaner & Kalender fuers Kosmetikstudio" |
| H1 | Gut -- "Der Terminplaner fuer dein Kosmetikstudio" |
| Keyword-Fokus | Klar auf "Terminplaner Kosmetikstudio" |
| Problem | Konkurriert mit /terminsoftware-kosmetikstudio und /online-terminbuchung-kosmetikstudio |

### E.4 /online-buchungen

| Kriterium | Bewertung |
|-----------|-----------|
| Title | Gut -- "Online-Buchungen Kosmetikstudio: 24/7 Termine" |
| H1 | Gut -- "Online Buchungssystem fuer Kosmetikstudio" |
| Problem | Konkurriert mit /online-terminbuchung-kosmetikstudio -- fast identischer Intent |

### E.5 /behandlungsdokumentation

| Kriterium | Bewertung |
|-----------|-----------|
| Title | Gut -- "Behandlungsdokumentation Kosmetik digital" |
| Problem | Konkurriert stark mit /behandlungsdokumentation-kosmetikstudio |

### E.6 /kosmetikstudio-software-vergleich

| Kriterium | Bewertung |
|-----------|-----------|
| Title | Gut -- "Kosmetikstudio Software Vergleich & Checkliste" |
| Problem | Description ist recht kurz. Vermutlich zu duenn im Content -- es wird eine Checkliste gezeigt aber kein tatsaechlicher Vergleich mit Konkurrenten (Timely, Shore, Treatwell, etc.) |
| Empfehlung | Konkrete Anbieter vergleichen, Feature-Tabelle mit Mitbewerbern |

### E.7 /treatflow-vs-treatwell

| Kriterium | Bewertung |
|-----------|-----------|
| Title | Sehr gut -- "Treatflow vs. Treatwell: Der ehrliche Vergleich" |
| Content | Stark -- Provisions-Thema, Feature-Vergleich, Preisrechner |
| Empfehlung | Mehr solcher "vs."-Seiten erstellen (vs. Shore, vs. Timely, vs. Fresha, etc.) |

### E.8 Blog-Artikel allgemein

| Kriterium | Bewertung |
|-----------|-----------|
| Umfang | 30 Artikel -- solide Basis |
| Kategorien | Gut aufgeteilt (Software, Business, Marketing, Recht, etc.) |
| Problem | Einige Artikel von 2024 ("Anti-Aging Trends 2024") sind veraltet |
| Problem | Blog-Artikel kannibalisieren teilweise Landingpages |
| Problem | Schwache CTA-Integration -- Artikel verlinken selten auf Feature-Seiten |

---

## F. Internal-Linking-Audit

### F.1 Staerken der internen Verlinkung

- Homepage verlinkt auf alle Feature-Seiten, alle Branchenseiten und wichtige Blog-Artikel (SEO-Text unten)
- Navigation verlinkt auf 8 Funktionen + 9 Branchen
- Footer hat 5 Spalten mit Links zu Funktionen, Branchen, Produkt, Unternehmen, Regionen

### F.2 Schwaechen und Probleme

SEO-Cluster-Seiten erhalten zu wenig Links:

| Seite | In Navigation | In Footer | Von HP | LinkJuice |
|-------|---------------|-----------|--------|-----------|
| /terminsoftware-kosmetikstudio | Nein | Nein | Nein | Schwach |
| /kundenkartei-kosmetikstudio | Nein | Nein | Ja (1x Feature-Grid) | Mittel |
| /anamnesebogen-kosmetikstudio | Nein | Nein | Nein | Schwach |
| /behandlungsdokumentation-kosmetikstudio | Nein | Nein | Nein | Schwach |
| /nisv-dokumentation-kosmetikstudio | Nein | Nein | Nein | Schwach |
| /online-terminbuchung-kosmetikstudio | Nein | Nein | Nein | Schwach |
| /sms-erinnerungen-kosmetikstudio | Nein | Nein | Ja (1x Feature-Grid) | Mittel |
| /digitale-anamnese-kosmetikstudio | Nein | Nein | Nein | Schwach |
| /hygieneplan-kosmetikstudio-pdf | Nein | Ja | Ja (SEO-Text) | Mittel |

Weitere Probleme:
- Blog-Artikel verlinken kaum auf Money-Pages (meist nur generischer CTA am Ende)
- Geo-Seiten sind isoliert (nur ueber Footer erreichbar, keine Quervernetzung)

### F.3 Konkrete Link-Empfehlungen

| Von (Seite) | Nach (Seite) | Anchor-Text-Vorschlag |
|-------------|-------------|----------------------|
| /blog/terminbuchung-kosmetikstudio | /terminsoftware-kosmetikstudio | Terminsoftware fuer Kosmetikstudios |
| /blog/terminbuchung-kosmetikstudio | /online-buchungen | Online-Buchungssystem |
| /blog/kundenkartei-kosmetik | /kundenkartei-kosmetikstudio | Digitale Kundenkartei fuers Kosmetikstudio |
| /blog/behandlungsdokumentation-kosmetik | /behandlungsdokumentation-kosmetikstudio | Behandlungsdokumentation Software |
| /blog/behandlungsdokumentation-nisv-konform | /nisv-dokumentation | NiSV-Dokumentation Software |
| /blog/no-shows-reduzieren-kosmetikstudio | /sms-erinnerungen-kosmetikstudio | SMS-Erinnerungen fuer Kosmetikstudios |
| /blog/anamnese-formulare-digital-kosmetik | /digitale-anamnese-kosmetikstudio | Digitale Anamnese |
| /blog/online-buchungssystem-vorteile | /online-terminbuchung-kosmetikstudio | Online-Terminbuchung |
| /blog/kosmetikstudio-eroeffnen-guide | /kosmetikstudio-software | Kosmetikstudio Software |
| /kosmetikstudio-software | /terminsoftware-kosmetikstudio | Terminsoftware |
| /kosmetikstudio-software | /blog/beste-kosmetikstudio-software-2026 | Kosmetikstudio Software Vergleich 2026 |
| /terminkalender | /terminsoftware-kosmetikstudio | Terminsoftware fuer Kosmetikstudios |
| /kundenverwaltung | /kundenkartei-kosmetikstudio | Kundenkartei im Kosmetikstudio |
| /formulare | /anamnesebogen-kosmetikstudio | Anamnesebogen Kosmetikstudio |
| /formulare | /digitale-anamnese-kosmetikstudio | Digitale Anamnese |
| Alle Branchenseiten | Jeweilige Geo-Seiten | ...in Deutschland / ...in Oesterreich |

---

## G. Technical-SEO-Audit

### G.1 robots.txt

**Problem: Zwei konkurrierende Dateien**
- app/robots.ts generiert eine minimale robots.txt: nur Allow: / + Sitemap + Host
- public/robots.txt enthaelt ausfuehrlichere Regeln (Disallow /api/, /_next/, AI-Bot-Regeln)
- Im Live-Abruf wird die minimale Version von app/robots.ts ausgeliefert -- die Disallow-Regeln aus public/robots.txt greifen also NICHT

Empfehlung: Die Disallow-Regeln (/api/, /_next/, etc.) und die AI-Bot-Regeln aus public/robots.txt in app/robots.ts uebernehmen, oder public/robots.txt loeschen und alles ueber app/robots.ts steuern.

### G.2 sitemap.xml

**KRITISCH: HTTP 500 Error**
- Der Abruf von https://www.treatflow.io/sitemap.xml liefert einen 500 Internal Server Error
- Google kann die Sitemap nicht lesen -- das ist ein kritisches Problem fuer die Indexierung
- Im Code (app/sitemap.ts) sind ca. 70 URLs korrekt definiert
- Vermutung: Build-Fehler oder Runtime-Fehler in der Sitemap-Generierung

Empfehlung: Sofort den Fehler auf Production debuggen und beheben.

### G.3 Sitemap-Vollstaendigkeit (im Code)

Fehlende URLs in der Sitemap:
- /landing/terminsoftware-kosmetikstudio fehlt (ist noindex, also ok)
- /demo/skin-atelier fehlt (vermutlich absichtlich)
- Alle Blog-Artikel sind enthalten

### G.4 Canonicals

- Alle Seiten haben korrekte self-referencing Canonicals
- Problem: Homepage-Canonical ist https://www.treatflow.io (aus Layout) -- sollte explizit in page.tsx gesetzt werden
- Landing-Page /landing/terminsoftware-kosmetikstudio hat noindex + eigenes Canonical -- sinnvoll fuer Ads

### G.5 Open Graph / Social Meta

- Root-Layout definiert globale OG-Tags
- Die meisten Seiten ueberschreiben mit eigenen OG-Titeln und Descriptions
- Probleme:
  - /kundenkartei-software hat KEIN OG-Image
  - /hygieneplan-kosmetikstudio-pdf hat KEINEN OpenGraph-Block
  - Einige OG-Images referenzieren lokale Pfade (/images/...) statt absolute URLs -- Next.js loest das ueber metadataBase auf, sollte aber geprueft werden

### G.6 Strukturierte Daten / Schema Markup

Vorhanden:
- Organization + WebSite (Root-Layout) -- korrekt
- SoftwareApplication mit Offers (Homepage) -- korrekt
- FAQPage (Homepage) -- korrekt
- Review / AggregateRating (Homepage) -- korrekt

Fehlend:
- Kein Article/BlogPosting Schema auf Blog-Artikeln
- Kein BreadcrumbList Schema (Breadcrumbs fehlen generell)
- Kein HowTo Schema auf Seiten wie Hygieneplan
- Kein LocalBusiness auf Geo-Seiten

### G.7 Weitere technische Punkte

| Pruefpunkt | Status | Details |
|-----------|--------|---------|
| html lang="de" | OK | Korrekt gesetzt |
| Viewport | OK | width=device-width, initial-scale=1 |
| Favicon | OK | SVG vorhanden |
| RSS Feed | OK | /blog/feed.xml im Head verlinkt |
| Google Tag Manager | OK | GTM + GA4 mit Consent-Default "denied" |
| Meta Pixel | Vorhanden | Facebook Pixel aktiv |
| H1-Struktur | OK | Jede Seite hat genau eine H1 |
| Font Loading | OK | next/font/google fuer Inter |
| Image Optimization | OK | next/image mit WebP/AVIF, Caching 1 Jahr |
| Security Headers | OK | X-Frame-Options, nosniff, Referrer-Policy |
| poweredByHeader: false | OK | X-Powered-By ist deaktiviert |
| CSS Optimization | OK | experimental.optimizeCss: true |
| Redirects | OK | Alte Blog-URLs redirecten auf neue Seiten (301) |

### G.8 Potentielle Probleme

1. Doppelte Schema-Markup-Deklaration: SoftwareApplication und Review-Schema definieren beide aggregateRating mit unterschiedlichen ratingCount (500) vs. reviewCount (7) -- das ist inkonsistent und koennte Google verwirren.

2. JS-Rendering: Als Next.js SSR/SSG-App sollte Server-Side Rendering kein Problem sein. Allerdings werden einige Komponenten (ChallengeSelector, CookieBanner) clientseitig gerendert -- der Hauptcontent wird aber serverseitig ausgeliefert.

3. Alt-Texte: Das Hero-Image auf der Homepage hat einen Alt-Text ("Treatflow Kalender im modernen Kosmetikstudio") -- gut. Fuer andere Seiten muesste individuell geprueft werden.

---

## H. Content-Gaps / Fehlende Landingpages

### H.1 Hohe Prioritaet -- Fehlende Money-Pages

| Fehlende Seite | Keyword-Ziel | Begruendung |
|---------------|-------------|-------------|
| /preise | Kosmetikstudio Software Preise, Kosmetikstudio Software Kosten | Eigenstaendige Preisseite rankt besser als Anchor-Link; hohes Kaufintent |
| /kosmetikstudio-software-kostenlos | Kosmetikstudio Software kostenlos, Kundenkartei kostenlos | Vergleichs-/Ratgeber-Seite: "Kostenlos vs. Bezahlt" |
| /treatflow-vs-shore | Shore Alternative, Shore vs. | Wichtiger deutscher Wettbewerber |
| /treatflow-vs-timely | Timely Alternative | Wettbewerber-Vergleich |
| /treatflow-vs-fresha | Fresha Alternative, Fresha vs. | Wettbewerber-Vergleich |
| /crm-kosmetikstudio | CRM Kosmetikstudio, CRM Beauty Salon | Suchintent existiert, keine Seite dafuer |

### H.2 Mittlere Prioritaet -- Branchen & Features

| Fehlende Seite | Keyword-Ziel | Begruendung |
|---------------|-------------|-------------|
| /friseur-software oder /hairstylist-software | Friseur Software, Friseursalon Software | Grosses Suchvolumen, Branche fehlt komplett |
| /kosmetikstudio-app | Kosmetikstudio App, Beauty App | Mobiler Suchintent, eigene Seite sinnvoll |
| /gutschein-software-kosmetikstudio | Gutschein Kosmetikstudio, Gutschein Software | Feature fehlt oder wird nicht kommuniziert |
| /einwilligungserklaerung-kosmetik-vorlage | Einwilligungserklaerung Kosmetik Vorlage | Ratgeber + Lead-Magnet Potential |
| /kassensystem-kosmetikstudio | Kassensystem Kosmetikstudio, Kasse Beauty | Falls Feature vorhanden oder geplant |
| /mitarbeiterverwaltung-kosmetikstudio | Mitarbeiterverwaltung Kosmetik | Feature existiert (Kalender), aber keine dedizierte Seite |

### H.3 Niedrige Prioritaet -- Geo-Erweiterung & Nischen

| Fehlende Seite | Keyword-Ziel |
|---------------|-------------|
| /kosmetikstudio-software-muenchen | Lokales SEO -- Muenchen |
| /kosmetikstudio-software-hamburg | Lokales SEO -- Hamburg |
| /kosmetikstudio-software-koeln | Lokales SEO -- Koeln |
| /kosmetikstudio-software-schweiz | Laendererweiterung CH |
| /nagelstudio-software-deutschland | Geo + Branche |
| /lash-studio-software-deutschland | Geo + Branche |
| /tattoo-software-deutschland | Geo + Branche |

### H.4 Blog-Content-Gaps

| Fehlendes Thema | Keyword-Potential |
|-----------------|-------------------|
| Kosmetikstudio Businessplan Vorlage | Hoch -- Gruendungs-Traffic |
| Kosmetikstudio Einrichtung Kosten | Mittel |
| Behandlungskatalog erstellen Kosmetikstudio | Mittel |
| Microblading Einwilligungserklaerung | Nische, aber konkretes Keyword |
| Laser Aufklaerungsbogen Vorlage | NiSV-relevant |
| Datenschutzerklaerung Kosmetikstudio Muster | DSGVO-Traffic |
| Kosmetikstudio Flyer gestalten | Offline-Marketing-Traffic |
| Wartezeiten reduzieren Kosmetikstudio | Alltagsproblem |
| Kundenfeedback einholen Kosmetik | Bewertungen, Google Reviews |

---

## I. Priorisierte To-do-Liste

### HOCH -- Sofort angehen

| Nr. | Aufgabe | Bereich | Impact |
|-----|---------|---------|--------|
| 1 | Sitemap.xml 500-Error beheben | Technical | Kritisch -- ohne Sitemap keine effiziente Indexierung |
| 2 | robots.txt konsolidieren -- app/robots.ts mit Disallow-Regeln aus public/robots.txt ergaenzen ODER public/robots.txt entfernen und alles ueber app/robots.ts steuern | Technical | Hoch -- Crawler crawlen aktuell /api/ und /_next/ |
| 3 | Eigenstaendige Preisseite /preise erstellen | Content | Hoch -- direktes Ranking-Potential fuer "Kosmetikstudio Software Preise" |
| 4 | Keyword-Kannibalisierung aufloesen -- Klare Intent-Trennung zwischen Feature-Seiten und Cluster-Seiten definieren: Feature = Produktbeschreibung, Cluster = SEO-Ratgeber mit staerkerem Informationsgehalt | OnPage | Hoch -- verhindert, dass Google die falsche Seite rankt |
| 5 | Blog-Artikel mit Links zu Money-Pages anreichern -- Mindestens 2-3 kontextuelle Links pro Artikel auf Feature-/Cluster-Seiten | Internal Linking | Hoch -- staerkt Money-Pages |
| 6 | Schema-Markup Inkonsistenz beheben -- ratingCount: 500 vs. reviewCount: 7 vereinheitlichen | Technical | Mittel-Hoch |

### MITTEL -- Innerhalb der naechsten 4 Wochen

| Nr. | Aufgabe | Bereich | Impact |
|-----|---------|---------|--------|
| 7 | Vergleichsseiten erstellen: /treatflow-vs-shore, /treatflow-vs-fresha, /treatflow-vs-timely | Content | Hoch -- faengt Wettbewerber-Traffic ab |
| 8 | SEO-Cluster-Seiten in die Navigation einbauen -- z.B. als Unterlinks in Feature-Dropdown oder als Breadcrumbs | IA / Linking | Mittel |
| 9 | Blog-Kannibalisierung mit Landingpages aufloesen -- Blog-Artikel sollten klar als "Ratgeber" positioniert sein und auf die Landingpage verlinken, nicht mit ihr um Keywords konkurrieren. Ggf. Canonical setzen oder Content differenzieren | OnPage | Mittel |
| 10 | Veraltete Blog-Artikel aktualisieren -- "Anti-Aging Trends 2024", "Kosmetikstudio eroeffnen Guide 2024" auf 2025/2026 aktualisieren | Content | Mittel |
| 11 | Breadcrumbs implementieren -- Verbessert UX und ermoeglicht BreadcrumbList-Schema | Technical/UX | Mittel |
| 12 | Seite /kosmetikstudio-software-kostenlos erstellen -- "Kostenlos vs. Bezahlt" als SEO-optimierter Ratgeber | Content | Mittel |
| 13 | BlogPosting/Article Schema auf Blog-Artikeln implementieren | Technical | Mittel |
| 14 | OG-Images fuer alle Seiten sicherstellen -- /kundenkartei-software und /hygieneplan-kosmetikstudio-pdf fehlen | Social/Technical | Niedrig-Mittel |
| 15 | Homepage-Metadata explizit in page.tsx setzen -- Statt nur aus Layout zu erben | Technical | Niedrig-Mittel |

### NIEDRIG -- Backlog / Langfristig

| Nr. | Aufgabe | Bereich | Impact |
|-----|---------|---------|--------|
| 16 | Geo-Seiten ausbauen -- Muenchen, Hamburg, Koeln, Schweiz | Content | Niedrig -- nur sinnvoll wenn lokales Suchvolumen vorhanden |
| 17 | Branche "Friseur" evaluieren -- /friseur-software nur wenn Produkt dafuer passt | Content | Mittel |
| 18 | Lead-Magnets erstellen -- PDF-Downloads (Businessplan-Vorlage, Einwilligungsvorlagen) fuer E-Mail-Liste | Content/Marketing | Mittel |
| 19 | /kosmetikstudio-app Seite erstellen -- Fuer mobilen Suchintent | Content | Niedrig |
| 20 | Interne Suche optimieren -- SearchAction im Schema verweist auf /blog?q= -- funktioniert das tatsaechlich? | Technical | Niedrig |
| 21 | RSS-Feed pruefen -- /blog/feed.xml ist im Head verlinkt, pruefen ob der Feed korrekt generiert wird | Technical | Niedrig |
| 22 | Hreflang-Tags evaluieren -- Falls Schweiz/AT-Versionen geplant sind | Technical | Niedrig |

---

### Zusammenfassung der Dringlichkeiten

**Sofort (diese Woche):**
1. Sitemap-500-Fehler beheben
2. robots.txt konsolidieren

**Kurzfristig (2 Wochen):**
3. Preisseite erstellen
4. Kannibalisierung analysieren und Seiten differenzieren
5. Blog-Artikel mit internen Links zu Money-Pages versehen
6. Schema-Inkonsistenz beheben

**Mittelfristig (1-2 Monate):**
7. Vergleichsseiten (vs. Shore, vs. Fresha)
8. Breadcrumbs + BreadcrumbList Schema
9. Blog-Artikel aktualisieren
10. BlogPosting Schema

---

**Erstellt am:** 28. Maerz 2026  
**Quelle:** Analyse des Quellcodes + Live-Website-Crawl  
**Hinweis:** Alle Beobachtungen basieren auf dem tatsaechlichen Code und Live-Abrufen. Vermutungen sind als solche gekennzeichnet.
