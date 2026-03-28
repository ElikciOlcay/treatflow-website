# Treatflow: Interner Verlinkungsplan & Kannibalisierungsloesung

**Datum:** 28. Maerz 2026  
**Ziel:** SEO-Cluster-Seiten staerken, Kannibalisierung loesen -- OHNE Aenderung der Hauptnavigation  
**Fokus:** SEO + Conversion gemeinsam denken

---

## A. Executive Summary

Die Analyse der aktuellen internen Verlinkung zeigt ein klares Muster:

**4 Cluster-Seiten sind gut vernetzt:**
- /terminsoftware-kosmetikstudio (verlinkt von 5 Feature-Seiten, 8 Branchenseiten, 1 Blog)
- /kundenkartei-kosmetikstudio (verlinkt von 6 Feature-Seiten, 8 Branchenseiten, 1 Blog)
- /anamnesebogen-kosmetikstudio (verlinkt von 8 Feature-Seiten, 6 Branchenseiten)
- /nisv-dokumentation-kosmetikstudio (verlinkt von 4 Feature-Seiten, 3 Branchenseiten, 1 Blog)

**4 Cluster-Seiten sind quasi isoliert (0 oder nahe 0 interne Links im Body):**
- /online-terminbuchung-kosmetikstudio -- 1 eingehender Link (von /kundenkartei-kosmetikstudio), 0 ausgehende
- /digitale-anamnese-kosmetikstudio -- 1 eingehender Link (von /kundenkartei-kosmetikstudio), 0 ausgehende
- /sms-erinnerungen-kosmetikstudio -- 0 eingehende aus Feature/Branchenseiten, 1 Blog-Link, 0 ausgehende
- /behandlungsdokumentation-kosmetikstudio -- 2 eingehende (Feature-Seiten), 0 ausgehende (importiert nicht mal Link)

Zusaetzlich haben 3 dieser 4 isolierten Seiten (behandlungsdokumentation-kosmetikstudio, digitale-anamnese-kosmetikstudio, online-terminbuchung-kosmetikstudio) keinerlei ausgehende interne Links im Body -- sie sind Sackgassen fuer Crawler und Nutzer.

**Kernmassnahmen (ohne Nav-Aenderung):**
1. "Verwandte Funktionen"-Bloecke auf den 4 isolierten Cluster-Seiten ergaenzen
2. Feature-Seiten um passende Cluster-Links erweitern
3. Blog-Artikel gezielt auf Cluster-Seiten verlinken statt auf Feature-Seiten
4. Homepage um thematische Link-Module erweitern
5. Kannibalisierung durch klare Rollenverteilung loesen

---

## B. SEO-Cluster-Seiten mit zu schwacher interner Verlinkung

### B.1 Ist-Zustand: Eingehende Links pro Cluster-Seite

Die folgende Matrix zeigt, welche Seiten auf welche Cluster-Seite verlinken (nur Body-Content, ohne Nav/Footer).

Legende: F = Feature-Seite, B = Branchenseite, C = Cluster-Seite, BL = Blog, HP = Homepage

#### /terminsoftware-kosmetikstudio
| Quelle | Linktyp |
|--------|---------|
| /terminkalender (F) | Karte "Mehr erfahren" |
| /kundenverwaltung (F) | Karte "Mehr erfahren" |
| /online-buchungen (F) | Karte "Mehr erfahren" |
| /nachrichtenautomatisierung (F) | Karte "Mehr erfahren" |
| /kosmetikstudio-software (F) | Cluster-Section "Mehr erfahren" |
| /laser-haarentfernung-software (B) | Karte |
| /permanent-makeup-software (B) | Karte |
| /aesthetische-medizin-software (B) | Karte |
| /nagelstudio-software (B) | Karte |
| /lash-studio-software (B) | Karte |
| /tattoo-studio-software (B) | Karte |
| /spa-wellness-software (B) | Karte |
| /massage-software (B) | Karte |
| /anamnesebogen-kosmetikstudio (C) | Cross-Link |
| /nisv-dokumentation-kosmetikstudio (C) | Cross-Link |
| /blog/terminbuchung-kosmetikstudio (BL) | Passende Seiten |
| / (HP) | Nein -- nicht direkt |
**Status: GUT (16+ Links). Kein akuter Handlungsbedarf.**

#### /kundenkartei-kosmetikstudio
| Quelle | Linktyp |
|--------|---------|
| /terminkalender (F) | Karte |
| /kundenverwaltung (F) | Karte |
| /formulare (F) | Karte |
| /online-buchungen (F) | Karte |
| /nachrichtenautomatisierung (F) | Karte |
| /kosmetikstudio-software (F) | Cluster-Section |
| /laser-haarentfernung-software (B) | Karte |
| /permanent-makeup-software (B) | Karte |
| /aesthetische-medizin-software (B) | Karte |
| /nagelstudio-software (B) | Karte |
| /lash-studio-software (B) | Karte |
| /tattoo-studio-software (B) | Karte |
| /spa-wellness-software (B) | Karte |
| /massage-software (B) | Karte |
| /anamnesebogen-kosmetikstudio (C) | Cross-Link |
| /nisv-dokumentation-kosmetikstudio (C) | Cross-Link |
| /terminsoftware-kosmetikstudio (C) | Cross-Link |
| /kundenkartei-software (C) | Cross-Link |
| /blog/kundenkartei-kosmetik (BL) | Link |
| / (HP) | Ja -- Feature-Grid |
**Status: SEHR GUT (19+ Links). Kein Handlungsbedarf.**

#### /anamnesebogen-kosmetikstudio
| Quelle | Linktyp |
|--------|---------|
| Alle 8 Feature-Seiten (F) | Karten |
| /permanent-makeup-software (B) | Karte |
| /nagelstudio-software (B) | Karte |
| /lash-studio-software (B) | Karte |
| /tattoo-studio-software (B) | Karte |
| /spa-wellness-software (B) | Karte |
| /massage-software (B) | Karte |
| /nisv-dokumentation-kosmetikstudio (C) | Cross-Link |
| 0 Blog-Artikel | -- |
| / (HP) | Nein |
**Status: GUT (14+ Links), aber 0 Blog-Links. Blog-Verlinkung ergaenzen.**

#### /nisv-dokumentation-kosmetikstudio
| Quelle | Linktyp |
|--------|---------|
| /formulare (F) | Karte |
| /behandlungsdokumentation (F) | Karte |
| /nisv-dokumentation (F) | Karte |
| /kosmetikstudio-software (F) | Cluster-Section |
| /laser-haarentfernung-software (B) | Karte |
| /aesthetische-medizin-software (B) | Karte |
| /blog/behandlungsdokumentation-kosmetik (BL) | Link |
| /terminsoftware-kosmetikstudio (C) | Cross-Link |
| /anamnesebogen-kosmetikstudio (C) | Cross-Link |
**Status: OK (9 Links), aber fehlt auf Branchenseiten ohne NiSV-Fokus und in den meisten Blog-Artikeln.**

---

### DIE 4 KRITISCHEN SEITEN:

#### /online-terminbuchung-kosmetikstudio -- KRITISCH
| Quelle | Linktyp |
|--------|---------|
| /kundenkartei-kosmetikstudio (C) | 1x Cross-Link |
| Keine Feature-Seite | -- |
| Keine Branchenseite | -- |
| Kein Blog-Artikel | -- |
| Homepage | Nein |
**Ausgehende Links: 0 (Seite importiert Link nicht)**
**Status: ISOLIERT. Nur 1 eingehender Link. Keine ausgehenden Links. Sackgasse.**

Warum kritisch:
- Die Feature-Seite /online-buchungen verlinkt NICHT hierher (obwohl thematisch identisch)
- 8 Branchenseiten verlinken auf /terminsoftware-kosmetikstudio, aber NICHT auf /online-terminbuchung-kosmetikstudio
- Blog-Artikel wie "online-buchungssystem-vorteile" verlinken auf /online-buchungen statt hierher

#### /digitale-anamnese-kosmetikstudio -- KRITISCH
| Quelle | Linktyp |
|--------|---------|
| /kundenkartei-kosmetikstudio (C) | 1x Cross-Link |
| Keine Feature-Seite | -- |
| Keine Branchenseite | -- |
| Kein Blog-Artikel | -- |
| Homepage | Nein |
**Ausgehende Links: 0 (Seite importiert Link nicht)**
**Status: ISOLIERT. Nur 1 eingehender Link. Keine ausgehenden Links. Sackgasse.**

Warum kritisch:
- /formulare (Feature) verlinkt auf /anamnesebogen-kosmetikstudio, aber NICHT auf /digitale-anamnese-kosmetikstudio
- Blog-Artikel "anamnese-formulare-digital-kosmetik" verlinkt auf /formulare, nicht hierher

#### /sms-erinnerungen-kosmetikstudio -- KRITISCH
| Quelle | Linktyp |
|--------|---------|
| /blog/sms-erinnerungen-termine-kosmetikstudio (BL) | 1x CTA "Mehr erfahren" |
| Keine Feature-Seite | -- |
| Keine Branchenseite | -- |
| Homepage | Ja (Feature-Grid) |
**Ausgehende Links: 0 (Link importiert aber nicht genutzt)**
**Status: SCHWACH. Nur 2 eingehende Links (Blog + HP). Keine ausgehenden. Fast-Sackgasse.**

Warum kritisch:
- /nachrichtenautomatisierung (Feature) verlinkt NICHT hierher
- Blog "no-shows-reduzieren" verlinkt auf /nachrichtenautomatisierung, nicht hierher
- Keine Branchenseite verlinkt hierher

#### /behandlungsdokumentation-kosmetikstudio -- KRITISCH
| Quelle | Linktyp |
|--------|---------|
| /behandlungsdokumentation (F) | 1x Karte |
| /nisv-dokumentation (F) | 1x Karte |
| /blog/behandlungsdokumentation-kosmetik (BL) | 1x Link |
| Keine Branchenseite | -- |
| Homepage | Nein |
**Ausgehende Links: 0 (importiert Link-Komponente nicht)**
**Status: SCHWACH. 3 eingehende Links. 0 ausgehende. Sackgasse.**

---

## C. Konkrete Internal-Linking-Tabelle

### C.1 Sofort-Massnahmen: Cross-Link-Bloecke auf isolierten Cluster-Seiten ergaenzen

Diese 4 Seiten brauchen jeweils einen "Verwandte Funktionen"-Block mit 3-4 Links:

| Zielseite (bekommt Block) | Links im Block | Prioritaet |
|---------------------------|----------------|------------|
| /behandlungsdokumentation-kosmetikstudio | /kosmetikstudio-software, /nisv-dokumentation-kosmetikstudio, /anamnesebogen-kosmetikstudio, /kundenkartei-kosmetikstudio | HOCH |
| /online-terminbuchung-kosmetikstudio | /kosmetikstudio-software, /terminsoftware-kosmetikstudio, /kundenkartei-kosmetikstudio, /sms-erinnerungen-kosmetikstudio | HOCH |
| /digitale-anamnese-kosmetikstudio | /kosmetikstudio-software, /anamnesebogen-kosmetikstudio, /kundenkartei-kosmetikstudio, /nisv-dokumentation-kosmetikstudio | HOCH |
| /sms-erinnerungen-kosmetikstudio | /kosmetikstudio-software, /terminsoftware-kosmetikstudio, /online-terminbuchung-kosmetikstudio, /kundenkartei-kosmetikstudio | HOCH |

### C.2 Feature-Seiten: Fehlende Cluster-Links ergaenzen

| Quellseite | Fehlender Link | Empfohlener Anchor | Linktyp | Prioritaet |
|------------|---------------|-------------------|---------|------------|
| /online-buchungen | /online-terminbuchung-kosmetikstudio | Online-Terminbuchung fuer Kosmetikstudios | Karte im "Verwandte Funktionen"-Block | HOCH |
| /online-buchungen | /sms-erinnerungen-kosmetikstudio | SMS-Erinnerungen fuer weniger No-Shows | Karte | HOCH |
| /nachrichtenautomatisierung | /sms-erinnerungen-kosmetikstudio | SMS-Erinnerungen im Kosmetikstudio | Karte im "Verwandte Funktionen"-Block | HOCH |
| /nachrichtenautomatisierung | /online-terminbuchung-kosmetikstudio | Online-Terminbuchung | Karte | Mittel |
| /formulare | /digitale-anamnese-kosmetikstudio | Digitale Anamnese im Kosmetikstudio | Karte im "Verwandte Funktionen"-Block | HOCH |
| /behandlungsdokumentation | /behandlungsdokumentation-kosmetikstudio | Doku speziell fuer Kosmetikstudios | Kontextlink im Fliesstext | Mittel |
| /nisv-dokumentation | /behandlungsdokumentation-kosmetikstudio | Behandlungsdokumentation im Kosmetikstudio | Kontextlink | Mittel |
| /terminkalender | /online-terminbuchung-kosmetikstudio | Online-Terminbuchung | Karte ergaenzen | Mittel |
| /terminkalender | /sms-erinnerungen-kosmetikstudio | SMS-Erinnerungen | Karte ergaenzen | Mittel |

### C.3 Branchenseiten: Fehlende Cluster-Links ergaenzen

Aktuell verlinken die meisten Branchenseiten auf 3 Cluster-Seiten. Folgende fehlen durchgehend:

| Quellseiten (alle 9 Branchenseiten) | Fehlender Link | Empfohlener Anchor | Prioritaet |
|--------------------------------------|---------------|-------------------|------------|
| Alle Branchenseiten | /sms-erinnerungen-kosmetikstudio | Automatische Erinnerungen per SMS | Mittel |
| Alle Branchenseiten | /online-terminbuchung-kosmetikstudio | Online-Terminbuchung 24/7 | Mittel |
| Alle Branchenseiten | /behandlungsdokumentation-kosmetikstudio | Behandlungsdokumentation | Mittel |
| /schoenheitssalon-software (hat 0 Cluster-Links!) | /terminsoftware-kosmetikstudio | Terminsoftware | HOCH |
| /schoenheitssalon-software | /kundenkartei-kosmetikstudio | Digitale Kundenkartei | HOCH |
| /schoenheitssalon-software | /anamnesebogen-kosmetikstudio | Digitale Formulare | HOCH |

Empfehlung: Auf jeder Branchenseite den bestehenden 3-4er Cross-Link-Block um 1-2 weitere Cluster-Links erweitern (z.B. 5er-Grid statt 4er).

### C.4 Blog-Artikel: Cluster-Links statt Feature-Links

| Blog-Artikel | Aktueller Link | Sollte verlinken auf | Anchor-Text | Prioritaet |
|--------------|---------------|---------------------|-------------|------------|
| /blog/no-shows-reduzieren-kosmetikstudio | /nachrichtenautomatisierung | /sms-erinnerungen-kosmetikstudio | SMS-Erinnerungen fuer Kosmetikstudios | HOCH |
| /blog/no-shows-reduzieren-kosmetikstudio | (fehlt) | /online-terminbuchung-kosmetikstudio | Online-Terminbuchung mit Bestaetigungen | HOCH |
| /blog/anamnese-formulare-digital-kosmetik | /formulare | /digitale-anamnese-kosmetikstudio | Digitale Anamnese im Kosmetikstudio | HOCH |
| /blog/anamnese-formulare-digital-kosmetik | /nisv-dokumentation | /nisv-dokumentation-kosmetikstudio | NiSV-konforme Dokumentation | HOCH |
| /blog/anamnese-formulare-digital-kosmetik | (fehlt) | /anamnesebogen-kosmetikstudio | Anamnesebogen-Vorlagen | Mittel |
| /blog/online-buchungssystem-vorteile | /online-buchungen | /online-terminbuchung-kosmetikstudio | Online-Terminbuchung fuer Kosmetikstudios | HOCH |
| /blog/behandlungsdokumentation-nisv-konform | /behandlungsdokumentation | /behandlungsdokumentation-kosmetikstudio | Behandlungsdokumentation fuer Kosmetikstudios | HOCH |
| /blog/behandlungsdokumentation-nisv-konform | (fehlt) | /nisv-dokumentation-kosmetikstudio | NiSV-Dokumentation digital | HOCH |
| /blog/terminkalender-kosmetikstudio-effizienz | /terminkalender | /terminsoftware-kosmetikstudio | Terminsoftware Kosmetikstudio | Mittel |
| /blog/terminkalender-kosmetikstudio-effizienz | (fehlt) | /online-terminbuchung-kosmetikstudio | Online-Terminbuchung | Mittel |
| /blog/nachrichtenautomatisierung-kosmetikstudio | /nachrichtenautomatisierung | /sms-erinnerungen-kosmetikstudio | SMS-Erinnerungen fuer Studios | HOCH |
| /blog/sms-erinnerungen-termine-kosmetikstudio | (hat Link) | /online-terminbuchung-kosmetikstudio | Online-Terminbuchung | Mittel |
| /blog/dsgvo-datenschutz-kosmetikstudio | /kundenverwaltung | /kundenkartei-kosmetikstudio | Digitale Kundenkartei DSGVO-konform | Mittel |
| /blog/beste-kosmetikstudio-software-2026 | (nur Blog-Links) | /kosmetikstudio-software | Kosmetikstudio Software | HOCH |
| /blog/beste-kosmetikstudio-software-2026 | (fehlt) | /terminsoftware-kosmetikstudio | Terminsoftware | Mittel |
| /blog/beste-kosmetikstudio-software-2026 | (fehlt) | /kundenkartei-kosmetikstudio | Kundenkartei | Mittel |
| /blog/kosmetikstudio-eroeffnen-guide | (fehlt) | /anamnesebogen-kosmetikstudio | Digitale Anamneseboegen | Mittel |
| /blog/kosmetikstudio-eroeffnen-guide | (fehlt) | /online-terminbuchung-kosmetikstudio | Online-Terminbuchung | Mittel |
| /blog/schoenheitssalon-software | (fehlt) | /schoenheitssalon-software (ist vorhanden) | + /kundenkartei-kosmetikstudio | Mittel |
| /blog/software-kosmetikinstitut | /behandlungsdokumentation | /behandlungsdokumentation-kosmetikstudio | Behandlungsdokumentation Kosmetik | Mittel |
| /blog/hygiene-sicherheit-kosmetikstudio | (unbekannt) | /nisv-dokumentation-kosmetikstudio | NiSV-konforme Dokumentation | Mittel |
| /blog/hygiene-sicherheit-kosmetikstudio | (unbekannt) | /anamnesebogen-kosmetikstudio | Digitale Anamneseboegen | Mittel |
| /blog/kundenbindung-kosmetikstudio-5-strategien | (unbekannt) | /sms-erinnerungen-kosmetikstudio | Automatische SMS-Erinnerungen | Mittel |
| /blog/kundenbindung-kosmetikstudio-5-strategien | (unbekannt) | /kundenkartei-kosmetikstudio | Digitale Kundenkartei | Mittel |
| /blog/email-marketing-kosmetikstudios | (unbekannt) | /nachrichtenautomatisierung | Nachrichtenautomatisierung | Niedrig |
| /blog/lash-wimpern-kundenbindung | (unbekannt) | /sms-erinnerungen-kosmetikstudio | Terminerinnerungen per SMS | Mittel |
| /blog/lash-wimpern-kundenbindung | (unbekannt) | /kundenkartei-kosmetikstudio | Digitale Kundenkartei | Mittel |

**Wichtig:** Bei Blog-Artikeln sollen die BESTEHENDEN Links auf Feature-Seiten (/online-buchungen, /nachrichtenautomatisierung etc.) NICHT entfernt werden. Stattdessen sollen ZUSAETZLICHE Links auf die Cluster-Seiten ergaenzt werden. Idealerweise im Fliesstext mit natuerlichem Anchor-Text.

### C.5 Homepage-Links (ohne Nav-Aenderung)

| Bereich auf HP | Fehlender Link | Empfohlener Anchor | Linktyp | Prioritaet |
|----------------|---------------|-------------------|---------|------------|
| SEO-Textblock unten | /terminsoftware-kosmetikstudio | Terminsoftware fuer Kosmetikstudios | Textlink im Prose-Block | HOCH |
| SEO-Textblock unten | /anamnesebogen-kosmetikstudio | Digitale Anamneseboegen | Textlink | HOCH |
| SEO-Textblock unten | /behandlungsdokumentation-kosmetikstudio | Behandlungsdokumentation | Textlink | HOCH |
| SEO-Textblock unten | /nisv-dokumentation-kosmetikstudio | NiSV-Dokumentation | Textlink | HOCH |
| SEO-Textblock unten | /digitale-anamnese-kosmetikstudio | Digitale Anamnese | Textlink | Mittel |
| SEO-Textblock unten | /online-terminbuchung-kosmetikstudio | Online-Terminbuchung | Textlink | Mittel |
| SEO-Textblock unten | /sms-erinnerungen-kosmetikstudio | SMS-Erinnerungen | Textlink | Mittel |
| Linkleiste unter SEO-Text | /terminsoftware-kosmetikstudio | Terminsoftware | Underline-Link (wie bestehende) | HOCH |
| Linkleiste unter SEO-Text | /anamnesebogen-kosmetikstudio | Anamneseboegen digital | Underline-Link | Mittel |
| Linkleiste unter SEO-Text | /sms-erinnerungen-kosmetikstudio | SMS-Erinnerungen | Underline-Link | Mittel |
| Linkleiste unter SEO-Text | /digitale-anamnese-kosmetikstudio | Digitale Anamnese | Underline-Link | Niedrig |

---

## D. Kannibalisierungsloesung pro Seitencluster

### D.1 Cluster: Kundenkartei / Kundenverwaltung

**Betroffene Seiten:**
1. /kundenverwaltung -- Feature-Seite (in Nav)
2. /kundenkartei-software -- SEO-Seite
3. /kundenkartei-kosmetikstudio -- Cluster-Seite

**Loesung: Klare Rollentrennung**

| Seite | Rolle | Primaeres Keyword | Suchintention | Content-Fokus |
|-------|-------|-------------------|---------------|---------------|
| /kundenverwaltung | **Produkt-Feature-Seite** | "Kundenverwaltung Kosmetikstudio" | Nutzer kennt Treatflow bereits, will Feature verstehen | Produktdemo, Screenshots, Feature-Liste, "So funktioniert es" |
| /kundenkartei-software | **Generische SEO-Seite** | "Kundenkartei App", "Kundenkartei Software" | Nutzer sucht allgemein nach einer Kundenkartei-Loesung | Vergleich kostenlos vs. bezahlt, was eine gute App ausmacht, warum digital besser als Papier, Treatflow als Empfehlung |
| /kundenkartei-kosmetikstudio | **Branchen-spezifische SEO-Seite** | "Kundenkartei Kosmetikstudio", "digitale Kundenkartei Kosmetik" | Kosmetikerin sucht Kundenkartei speziell fuers Studio | Probleme mit Papierkarteien im Kosmetikstudio, Anforderungen an Kundenkartei fuer Beauty, Behandlungshistorie, Fotos, DSGVO |

**Interne Verlinkung:**
- /kundenkartei-software soll prominent auf /kundenkartei-kosmetikstudio verlinken ("Speziell fuer Kosmetikstudios")
- /kundenkartei-kosmetikstudio soll auf /kundenverwaltung verlinken ("Alle Features ansehen")
- /kundenverwaltung soll auf /kundenkartei-kosmetikstudio verlinken ("Fuer Kosmetikstudios")
- Blog-Artikel sollen primaer auf /kundenkartei-kosmetikstudio verlinken (ist die SEO-Hauptzielseite fuer "Kundenkartei Kosmetik")

**Konkrete Massnahme:** Title und H1 der Feature-Seite /kundenverwaltung staerker auf "Kundenverwaltung" ausrichten (nicht "Kundenkartei"), um Keyword-Overlap zu reduzieren.

### D.2 Cluster: Terminbuchung / Terminkalender / Terminsoftware

**Betroffene Seiten:**
1. /terminkalender -- Feature-Seite (in Nav)
2. /online-buchungen -- Feature-Seite (in Nav)
3. /terminsoftware-kosmetikstudio -- Cluster-Seite
4. /online-terminbuchung-kosmetikstudio -- Cluster-Seite

**Loesung:**

| Seite | Rolle | Primaeres Keyword | Suchintention | Content-Fokus |
|-------|-------|-------------------|---------------|---------------|
| /terminkalender | **Produkt-Feature: Kalender** | "Terminplaner Kosmetikstudio", "Terminkalender Kosmetik" | Will Kalender-Funktion verstehen | Tagesansicht, Wochenansicht, Drag&Drop, Mitarbeiterkalender |
| /online-buchungen | **Produkt-Feature: Buchung** | "Online Buchungssystem Kosmetikstudio" | Will Online-Buchungsfunktion verstehen | Buchungslink, 24/7, Bestaetigungen, kein Telefon |
| /terminsoftware-kosmetikstudio | **SEO-Hauptseite Termine** | "Terminsoftware Kosmetikstudio", "Terminplaner Kosmetikstudio" | Sucht Terminsoftware-Loesung allgemein | Umfassender Ratgeber: warum digital, was muss die Software koennen, Vergleich, Treatflow als Loesung |
| /online-terminbuchung-kosmetikstudio | **SEO-Hauptseite Online-Buchung** | "Online Terminbuchung Kosmetikstudio", "Terminbuchung Kosmetik online" | Sucht Online-Buchungsloesung | Fokus auf Online-Aspekt, Kundenperspektive, Vorher/Nachher, Buchungslink-Konzept |

**Interne Verlinkung:**
- /terminkalender verlinkt auf /terminsoftware-kosmetikstudio ("Mehr ueber Terminsoftware")
- /online-buchungen verlinkt auf /online-terminbuchung-kosmetikstudio ("Online-Terminbuchung im Detail")
- /terminsoftware-kosmetikstudio verlinkt auf /terminkalender UND /online-buchungen ("Features ansehen")
- /online-terminbuchung-kosmetikstudio verlinkt auf /online-buchungen ("Alle Buchungs-Features") UND /sms-erinnerungen-kosmetikstudio

**Konkrete Massnahme:** /terminkalender Title/H1 auf "Terminkalender" fokussieren, /terminsoftware-kosmetikstudio auf "Terminsoftware". So wird "Kalender" vs. "Software" klarer getrennt.

### D.3 Cluster: Behandlungsdokumentation / NiSV

**Betroffene Seiten:**
1. /behandlungsdokumentation -- Feature-Seite (in Nav)
2. /behandlungsdokumentation-kosmetikstudio -- Cluster-Seite
3. /nisv-dokumentation -- Feature-Seite (in Nav)
4. /nisv-dokumentation-kosmetikstudio -- Cluster-Seite

**Loesung:**

| Seite | Rolle | Primaeres Keyword | Suchintention |
|-------|-------|-------------------|---------------|
| /behandlungsdokumentation | **Produkt-Feature** | "Behandlungsdokumentation Software" | Will Feature verstehen |
| /behandlungsdokumentation-kosmetikstudio | **SEO-Hauptseite** | "Behandlungsdokumentation Kosmetikstudio" | Sucht Doku-Loesung fuers Studio |
| /nisv-dokumentation | **Produkt-Feature NiSV** | "NiSV Dokumentation Software" | Will NiSV-Feature verstehen |
| /nisv-dokumentation-kosmetikstudio | **SEO-Hauptseite NiSV** | "NiSV Dokumentation Kosmetik", "NiSV Pflichten" | Sucht NiSV-konforme Loesung |

**Interne Verlinkung:**
- Feature-Seiten verlinken jeweils auf ihre Cluster-Seite ("Speziell fuer Kosmetikstudios")
- Cluster-Seiten verlinken auf Feature-Seiten ("Alle Features ansehen")
- /nisv-dokumentation-kosmetikstudio MUSS auf /behandlungsdokumentation-kosmetikstudio verlinken (fehlt aktuell)
- /behandlungsdokumentation-kosmetikstudio MUSS auf /nisv-dokumentation-kosmetikstudio verlinken (fehlt, weil 0 Links)

### D.4 Cluster: Formulare / Anamnese

**Betroffene Seiten:**
1. /formulare -- Feature-Seite (in Nav)
2. /anamnesebogen-kosmetikstudio -- Cluster-Seite
3. /digitale-anamnese-kosmetikstudio -- Cluster-Seite

**Loesung:**

| Seite | Rolle | Primaeres Keyword | Suchintention |
|-------|-------|-------------------|---------------|
| /formulare | **Produkt-Feature** | "Anamneseformular Kosmetik", "Formular Generator" | Will Formular-Feature verstehen |
| /anamnesebogen-kosmetikstudio | **SEO-Hauptseite Anamnesebogen** | "Anamnesebogen Kosmetik", "Anamnesebogen Kosmetikstudio" | Sucht Anamnesebogen-Vorlagen und -Loesung |
| /digitale-anamnese-kosmetikstudio | **SEO-Seite: Digitaler Prozess** | "Digitale Anamnese Kosmetikstudio", "Anamnese App" | Sucht digitalen Anamnese-Prozess (papierlos, vorab per Link) |

**Differenzierung:** /anamnesebogen = WAS (Inhalte, Vorlagen, Pflichtfelder), /digitale-anamnese = WIE (digitaler Workflow, vorab per E-Mail, elektronische Unterschrift).

**Interne Verlinkung:**
- /formulare verlinkt auf BEIDE Cluster-Seiten (aktuell nur auf /anamnesebogen)
- /anamnesebogen-kosmetikstudio verlinkt auf /digitale-anamnese-kosmetikstudio ("So funktioniert die digitale Anamnese")
- /digitale-anamnese-kosmetikstudio verlinkt auf /anamnesebogen-kosmetikstudio ("Anamnesebogen-Vorlagen")

### D.5 Blog-Kannibalisierung

| Blog-Artikel | Konkurriert mit | Loesung |
|-------------|-----------------|---------|
| /blog/schoenheitssalon-software | /schoenheitssalon-software | Blog = Ratgeber ("Was ist wichtig bei der Auswahl"), Landingpage = Produktseite. Blog verlinkt prominent auf Landingpage. |
| /blog/software-kosmetikinstitut | /schoenheitssalon-software | Blog = alternativer Suchintent "Kosmetikinstitut". Blog verlinkt auf /schoenheitssalon-software UND /kosmetikstudio-software. |
| /blog/kundenkartei-kosmetik | /kundenkartei-kosmetikstudio | Blog = "Warum digital?"-Ratgeber. Verlinkt prominent auf Cluster-Seite als CTA. |
| /blog/behandlungsdokumentation-kosmetik | /behandlungsdokumentation-kosmetikstudio | Blog = "Wie dokumentiert man richtig?"-Ratgeber. Verlinkt auf Cluster als Loesung. |
| /blog/terminbuchung-kosmetikstudio | /terminsoftware-kosmetikstudio | Blog = "Tipps fuer bessere Terminbuchung". Verlinkt auf Cluster als Software-Loesung. |

**Prinzip:** Jeder Blog-Artikel, der thematisch mit einer Cluster-/Landingpage ueberlappt, soll:
1. Als Ratgeber/Informationsseite positioniert sein (informational intent)
2. Mindestens 1x prominent auf die zugehoerige Cluster-Seite verlinken (CTA + Textlink)
3. Einen klar anderen H1/Title haben als die Cluster-Seite
4. NICHT auf dieselben transaktionalen Keywords optimiert sein

---

## E. Homepage als SEO-Hub -- konkrete Empfehlungen

Die Homepage hat bereits eine gute Linkstruktur. Folgende Erweiterungen sind OHNE Nav-Aenderung moeglich:

### E.1 SEO-Textblock erweitern

Der bestehende SEO-Textblock am Ende der Homepage (vor dem CTA) enthaelt 3 Absaetze mit internen Links. Dieser kann um 1-2 weitere Absaetze erweitert werden:

**Neuer Absatz-Vorschlag (nach dem bestehenden Text):**

"Ob du eine Terminsoftware fuer dein Kosmetikstudio suchst, deine Kundenkartei digitalisieren oder Anamneseboegen papierlos gestalten moechtest -- Treatflow bietet fuer jeden Bereich eine spezialisierte Loesung. Die Online-Terminbuchung ermoeglicht deinen Kunden, rund um die Uhr Termine zu vereinbaren. Automatische SMS-Erinnerungen reduzieren No-Shows. Und die Behandlungsdokumentation erfuellt alle NiSV-Anforderungen."

Dieser Absatz wuerde natuerliche Kontextlinks auf folgende Cluster-Seiten ermoeglichen:
- /terminsoftware-kosmetikstudio
- /kundenkartei-kosmetikstudio (oder /kundenkartei-software)
- /anamnesebogen-kosmetikstudio
- /online-terminbuchung-kosmetikstudio
- /sms-erinnerungen-kosmetikstudio
- /behandlungsdokumentation-kosmetikstudio

### E.2 Linkleiste unter SEO-Text erweitern

Aktuell 8 Links. Ergaenzen um:
- Terminsoftware Kosmetikstudio -> /terminsoftware-kosmetikstudio
- Anamnesebogen digital -> /anamnesebogen-kosmetikstudio
- SMS-Erinnerungen -> /sms-erinnerungen-kosmetikstudio
- Online-Terminbuchung -> /online-terminbuchung-kosmetikstudio
- Digitale Anamnese -> /digitale-anamnese-kosmetikstudio
- Behandlungsdokumentation -> /behandlungsdokumentation-kosmetikstudio

### E.3 FAQ-Antworten mit Links anreichern

Die bestehenden FAQ-Antworten auf der Homepage enthalten aktuell KEINE internen Links. Moeglichkeiten:

| FAQ-Frage | Link-Moeglichkeit |
|-----------|-------------------|
| "Was ist der Unterschied zwischen Basic und Booking?" | Link auf /online-terminbuchung-kosmetikstudio bei "Buchungskalender" |
| "Kann ich meine bestehenden Kundendaten importieren?" | Link auf /kundenkartei-kosmetikstudio bei "Kundendaten" |
| "Wie funktioniert der Formular-Marketplace?" | Link auf /anamnesebogen-kosmetikstudio bei "Formulare fuer alle Beauty-Behandlungen" |
| "Ist Treatflow DSGVO-konform?" | Link auf /nisv-dokumentation-kosmetikstudio bei "NiSV-Anforderungen" |

### E.4 Feature-Grid auf Homepage erweitern

Das Feature-Grid zeigt aktuell 5 Feature-Karten (Terminkalender, Online-Buchung, Kundenkartei, Dokumentation, Erinnerungen). Diese verlinken auf:
- /terminkalender
- /online-buchungen
- /kundenkartei-kosmetikstudio (bereits gut!)
- /behandlungsdokumentation
- /sms-erinnerungen-kosmetikstudio (bereits gut!)

Empfehlung: Keine Aenderung noetig -- die wichtigsten Cluster sind bereits verlinkt.

---

## F. Blog als interner Link-Hebel

### F.1 Uebersicht: Welcher Blog-Artikel soll wohin verlinken?

| Nr. | Blog-Artikel | Empfohlene Links (1-3) | Prioritaet |
|-----|-------------|----------------------|------------|
| 1 | /blog/no-shows-reduzieren-kosmetikstudio | +/sms-erinnerungen-kosmetikstudio, +/online-terminbuchung-kosmetikstudio | HOCH |
| 2 | /blog/anamnese-formulare-digital-kosmetik | +/digitale-anamnese-kosmetikstudio, +/anamnesebogen-kosmetikstudio | HOCH |
| 3 | /blog/online-buchungssystem-vorteile | +/online-terminbuchung-kosmetikstudio | HOCH |
| 4 | /blog/behandlungsdokumentation-nisv-konform | +/behandlungsdokumentation-kosmetikstudio, +/nisv-dokumentation-kosmetikstudio | HOCH |
| 5 | /blog/beste-kosmetikstudio-software-2026 | +/kosmetikstudio-software, +/terminsoftware-kosmetikstudio, +/kundenkartei-kosmetikstudio | HOCH |
| 6 | /blog/nachrichtenautomatisierung-kosmetikstudio | +/sms-erinnerungen-kosmetikstudio | HOCH |
| 7 | /blog/terminkalender-kosmetikstudio-effizienz | +/terminsoftware-kosmetikstudio, +/online-terminbuchung-kosmetikstudio | Mittel |
| 8 | /blog/kosmetikstudio-eroeffnen-guide | +/online-terminbuchung-kosmetikstudio, +/anamnesebogen-kosmetikstudio | Mittel |
| 9 | /blog/dsgvo-datenschutz-kosmetikstudio | +/kundenkartei-kosmetikstudio (statt /kundenverwaltung) | Mittel |
| 10 | /blog/software-kosmetikinstitut | +/behandlungsdokumentation-kosmetikstudio (statt /behandlungsdokumentation) | Mittel |
| 11 | /blog/sms-erinnerungen-termine-kosmetikstudio | +/online-terminbuchung-kosmetikstudio | Mittel |
| 12 | /blog/hygiene-sicherheit-kosmetikstudio | +/nisv-dokumentation-kosmetikstudio, +/anamnesebogen-kosmetikstudio | Mittel |
| 13 | /blog/kundenbindung-kosmetikstudio-5-strategien | +/sms-erinnerungen-kosmetikstudio, +/kundenkartei-kosmetikstudio | Mittel |
| 14 | /blog/lash-wimpern-kundenbindung | +/sms-erinnerungen-kosmetikstudio, +/kundenkartei-kosmetikstudio | Mittel |
| 15 | /blog/schoenheitssalon-software | +/kundenkartei-kosmetikstudio, +/terminsoftware-kosmetikstudio | Mittel |
| 16 | /blog/terminbuchung-kosmetikstudio | +/online-terminbuchung-kosmetikstudio (zusaetzlich zu bestehendem /terminsoftware Link) | Mittel |
| 17 | /blog/behandlungsdokumentation-kosmetik | +/anamnesebogen-kosmetikstudio | Mittel |

### F.2 Prinzipien fuer Blog-Verlinkung

1. **Jeder Blog-Artikel soll mindestens 1 Link auf eine Cluster-/Money-Page haben** -- idealerweise als natuerlicher Kontextlink im Fliesstext
2. **Bestehende Links auf Feature-Seiten beibehalten** -- nur ERGAENZEN, nicht ersetzen
3. **CTA am Ende jedes Artikels soll auf die thematisch passende Cluster-Seite verlinken**, nicht pauschal auf die Homepage
4. **"Passende Seiten"- oder "Weiterlesen"-Block am Ende jedes Artikels** soll 2-3 Links enthalten: 1x Cluster-Seite + 1-2x thematisch verwandte Blog-Artikel

---

## G. Priorisierter Umsetzungsplan

### Stufe A: Sofort umsetzen (1-3 Tage, wenig Aufwand)

| Nr. | Massnahme | Betroffene Seiten | Aufwand |
|-----|-----------|------------------|---------|
| A1 | **"Verwandte Funktionen"-Block auf 4 isolierten Cluster-Seiten ergaenzen** -- /behandlungsdokumentation-kosmetikstudio, /online-terminbuchung-kosmetikstudio, /digitale-anamnese-kosmetikstudio, /sms-erinnerungen-kosmetikstudio brauchen jeweils einen Cross-Link-Block mit 4 Links (Vorlage: bestehender Block auf /terminsoftware-kosmetikstudio kopieren und anpassen) | 4 Seiten | Klein -- Copy/Paste + Anpassen |
| A2 | **Homepage SEO-Text um 1 Absatz erweitern** mit natuerlichen Links auf /terminsoftware-kosmetikstudio, /anamnesebogen-kosmetikstudio, /online-terminbuchung-kosmetikstudio, /sms-erinnerungen-kosmetikstudio, /behandlungsdokumentation-kosmetikstudio | 1 Seite (Homepage) | Klein |
| A3 | **Homepage Linkleiste erweitern** um 4-6 zusaetzliche Cluster-Links | 1 Seite (Homepage) | Minimal |
| A4 | **Feature-Seite /online-buchungen: Karte fuer /online-terminbuchung-kosmetikstudio ergaenzen** im bestehenden "Verwandte Funktionen"-Block | 1 Seite | Klein |
| A5 | **Feature-Seite /nachrichtenautomatisierung: Karte fuer /sms-erinnerungen-kosmetikstudio ergaenzen** | 1 Seite | Klein |
| A6 | **Feature-Seite /formulare: Karte fuer /digitale-anamnese-kosmetikstudio ergaenzen** | 1 Seite | Klein |

### Stufe B: Naechste 2-4 Wochen (mittlerer Aufwand)

| Nr. | Massnahme | Betroffene Seiten | Aufwand |
|-----|-----------|------------------|---------|
| B1 | **Blog-Artikel mit Cluster-Links anreichern** -- die 6 hoch-priorisierten Blog-Artikel (Nr. 1-6 aus F.1) um jeweils 1-2 Kontextlinks auf Cluster-Seiten ergaenzen | 6 Blog-Artikel | Mittel |
| B2 | **Branchenseite /schoenheitssalon-software ueberarbeiten** -- aktuell 0 Cluster-Links, soll 3-4 bekommen (wie andere Branchenseiten) | 1 Seite | Mittel |
| B3 | **Alle 9 Branchenseiten um 1-2 fehlende Cluster-Links erweitern** -- /sms-erinnerungen und /online-terminbuchung fehlen ueberall | 9 Seiten | Mittel (systematisch) |
| B4 | **Homepage FAQ-Antworten mit Links anreichern** -- 3-4 FAQ-Antworten um Kontextlinks ergaenzen | 1 Seite | Klein |
| B5 | **Blog-Artikel 7-17 aus F.1 mit Cluster-Links anreichern** | 11 Blog-Artikel | Mittel |
| B6 | **Kannibalisierung Kundenkartei: Title/H1 von /kundenverwaltung differenzieren** -- staerker auf "Kundenverwaltung" statt "Kundenkartei" fokussieren | 1 Seite | Klein |
| B7 | **Cluster-Seiten untereinander besser vernetzen** -- z.B. /nisv-dokumentation-kosmetikstudio soll auf /behandlungsdokumentation-kosmetikstudio verlinken (fehlt aktuell) | 3-4 Seiten | Klein |

### Stufe C: Danach (groesserer Aufwand, strukturelle Verbesserungen ohne Nav-Aenderung)

| Nr. | Massnahme | Aufwand |
|-----|-----------|---------|
| C1 | **Breadcrumbs implementieren** -- Auf allen Seiten (ausser HP) Breadcrumbs einfuegen. Struktur: Home > [Kategorie] > Seite. Z.B. "Home > Funktionen > Terminkalender" oder "Home > Kosmetikstudio > Terminsoftware". Breadcrumbs liefern automatisch interne Links und BreadcrumbList-Schema. Ohne Nav-Aenderung, aber systemweit wirksam. | Mittel-Gross |
| C2 | **"Passende Loesungen"-Modul als Shared Component erstellen** -- Wiederverwendbare Komponente, die basierend auf der aktuellen Seite die 3-4 relevantesten Cluster-/Feature-Seiten als Karten-Grid anzeigt. Einmal bauen, auf allen Seiten einsetzen. | Mittel |
| C3 | **Blog-Artikel Fussbereich standardisieren** -- Jeder Blog-Artikel bekommt am Ende einen Block: 1x CTA auf passende Cluster-Seite + 2-3 "Weiterlesen"-Links (1x Cluster, 1-2x Blog). Als Shared Component implementieren. | Mittel |
| C4 | **Content-Differenzierung der kannibalisierten Seiten** -- Feature-Seiten staerker auf Produkt/Demo fokussieren (Screenshots, Videos, "So funktioniert es"), Cluster-Seiten auf Ratgeber/SEO ("Warum", "Vergleich", "Checkliste"). Erfordert Content-Ueberarbeitung. | Gross |
| C5 | **Footer um "Beliebte Themen"-Bereich erweitern** -- Unterhalb der bestehenden Footer-Spalten eine Zeile mit 6-8 Textlinks auf Cluster-Seiten. Kein Eingriff in Nav, aber jede Seite der Website bekommt automatisch Links auf alle Cluster-Seiten. | Klein |

---

## Zusammenfassung: Erwarteter Impact

| Massnahme | Betroffene Cluster-Seiten | Erwartete neue eingehende Links |
|-----------|--------------------------|-------------------------------|
| A1: Cross-Link-Bloecke | 4 Seiten | +16 ausgehende Links (je 4 pro Seite) |
| A2+A3: HP erweitern | Alle 8 | +6-8 Links von der staerksten Seite |
| A4-A6: Feature-Seiten | 3 isolierte Seiten | +3 Links von starken Seiten |
| B1+B5: Blog-Links | Alle 8 | +20-30 Links aus Blog-Content |
| B3: Branchenseiten | 3 isolierte Seiten | +9-18 Links |
| C1: Breadcrumbs | Alle Seiten | Systemweite Verlinkung |
| C5: Footer-Erweiterung | Alle 8 | +6-8 Links auf JEDER Seite (79x) |

**Groesster Hebel mit geringstem Aufwand:** A1 + A2 + A3 (in 1-2 Stunden umsetzbar, loest das akuteste Problem der 4 isolierten Cluster-Seiten)

---

**Erstellt am:** 28. Maerz 2026
**Basierend auf:** Code-Analyse aller page.tsx-Dateien (Feature, Cluster, Branch, Blog, Homepage)
