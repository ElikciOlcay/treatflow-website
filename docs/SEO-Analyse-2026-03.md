# SEO-Analyse: Sichtbarkeitsverlust und mögliche Ursachen

**Stand:** 03.03.2026 | Bezug: SEO-Bericht 02.03.2026 (DESKTOP)

---

## 1. Kurzfassung

- **Sichtbarkeit:** Rückgang um 94,3 % (auf 0,50)
- **Top 3 / Top 10:** 0 Keywords (alle verloren)
- **Abgestiegene/verlorene Begriffe:** vor allem „Kundenkartei“ (programm, app, software, kosmetik, digitale kundenkartei kosmetik)
- **Neue Rankings:** Anamnese-Begriffe auf `/blog` (Positionen 36–92, geringeres Suchvolumen)

Die wahrscheinlichste technische Ursache im eigenen Projekt: **stark rankende URLs wurden entfernt und nur noch auf `/blog` weitergeleitet**. Dazu kommt eine **Keyword-Lücke** (Suchbegriffe „Kundenkartei“ vs. Darstellung „Kundenverwaltung“).

---

## 2. Identifizierte Ursachen im Projekt

### 2.1 Wegfall dedizierter Kundenkartei- und Anamnese-Seiten (Hauptursache)

In `next.config.ts` sind **permanente Redirects (301)** eingetragen:

| Alte URL (thematisch stark) | Redirect-Ziel |
|-----------------------------|--------------|
| `/warum-eine-digitale-kundenkartei-fuer-kosmetikstudios-unverzichtbar-ist` | `/blog` |
| `/anamnese-im-kosmetikstudio-wie-sie-mit-der-richtigen-methode-erfolgreich-behandeln` | `/blog` |
| Weitere thematische Artikel | `/blog` |

**Auswirkung:**

- Diese URLs haben sehr wahrscheinlich für Begriffe wie „kundenkartei programm“, „kundenkartei software“, „digitale kundenkartei kosmetik“, „anamnese kosmetik“ rankt.
- Nach dem 301 auf `/blog`:
  - Google sieht: „Starke Kundenkartei-/Anamnese-Seite existiert nicht mehr, Inhalt nur noch auf der allgemeinen Blog-Übersicht.“
  - Der Inhalt der alten Seiten ist nicht 1:1 auf einer eigenen URL mit gleichem Fokus ersetzt.
- Folge: Verlust der Top-Positionen und bei einigen Keywords komplett „RAUS“ aus dem Index für diese Suchanfragen.

Das erklärt den starken Rückgang bei Kundenkartei- und Anamnese-Keywords und den Verlust der Top-3/Top-10-Platzierungen.

### 2.2 Keyword-Lücke: „Kundenkartei“ vs. „Kundenverwaltung“

- **Gesuchte Begriffe (laut Bericht):** kundenkartei app, kundenkartei kosmetik, digitale kundenkartei kosmetik, kundenkartei programm, kundenkartei software.
- **Aktuelle Ausrichtung der Website:**
  - `layout.tsx` / Startseite: Fokus auf „Kosmetikstudio Software“, „Kundenverwaltung“, „Terminverwaltung“ – **nicht** „Kundenkartei“.
  - Seite `/kundenverwaltung`: Titel und Keywords „Kundenverwaltung“, „CRM“ – **nicht** „Kundenkartei“.

Nutzer suchen explizit nach „Kundenkartei“; die eigenen Seiten sprechen vor allem „Kundenverwaltung“ aus. Ohne die alte Kundenkartei-URL fehlt eine Seite, die klar und mit eigenem Fokus „Kundenkartei“ bedient.

### 2.3 Google Search Console / Verifizierung

In `app/layout.tsx` steht:

```ts
'google-site-verification': 'your-google-verification-code',
```

Wenn das ein Platzhalter ist und die Property in der Search Console nicht korrekt verifiziert ist, können Indexierungs- und Fehler-Meldungen unvollständig sein. Das erklärt keinen direkten Ranking-Verlust, kann aber die Diagnose erschweren.

### 2.4 robots.txt: Crawl-delay

- `Crawl-delay: 1` ist in `public/robots.txt` gesetzt.
- **Google ignoriert** `Crawl-delay`; andere Crawler können sich verlangsamen.
- Unwahrscheinlich als Hauptgrund für den Einbruch, aber unnötig und kann bei anderen Suchmaschinen/Crawlern Nachteile bringen.

---

## 3. Warum ChatGPT euch möglicherweise nicht mehr listet

- **Abhängigkeit von Sichtbarkeit:** Wenn eure Domain in Google (und ggf. Bing) stark abfällt, wird sie seltener in Suchergebnissen angezeigt und angeklickt. Viele KI-Systeme (inkl. Nutzung von Such- oder Crawl-Daten) berücksichtigen u. a. Relevanz und „Sichtbarkeit“ einer Quelle.
- **Kein direkter Zugriff auf eure Inhalte:** Wenn die früher genutzten Quellen (z. B. die alten Kundenkartei-/Anamnese-URLs) nicht mehr existieren oder stark an Relevanz verloren haben, kann die Nennung in Antworten zurückgehen.
- **Kein Einfluss auf ChatGPT-API/Index:** Ob und wie ChatGPT euch in Antworten erwähnt, lässt sich von eurer Seite aus nicht steuern. Eine Verbesserung der Suchmaschinen-Sichtbarkeit und klare, stabile Inhalte zu „Kundenkartei“ und „Anamnese“ sind die sinnvollsten Hebel, damit eure Domain wieder öfter als relevante Quelle in Erscheinung tritt.

---

## 4. Empfohlene Maßnahmen (priorisiert)

### Sofort / kurzfristig

1. **Kundenkartei- und Anamnese-Inhalt wieder auf eigenen URLs anbieten**
   - **Option A:** Alte URLs reaktivieren und eigenen, SEO-optimierten Content wieder unter z. B.  
     `/warum-eine-digitale-kundenkartei-fuer-kosmetikstudios-unverzichtbar-ist` und  
     `/anamnese-im-kosmetikstudio-wie-sie-mit-der-richtigen-methode-erfolgreich-behandeln` bereitstellen (Redirects in `next.config.ts` entfernen).
   - **Option B:** Neue, thematisch fokussierte Seiten anlegen, z. B.  
     `/kundenkartei-kosmetik` und `/anamnese-kosmetikstudio`, mit klaren Titeln/Descriptions und Inhalten zu „Kundenkartei“ bzw. „Anamnese“, und die alten URLs dauerhaft (301) auf diese neuen Seiten umleiten.
   - Ziel: Wieder eine klare, indexierbare Seite pro Themencluster (Kundenkartei / Anamnese), damit Google wieder konkrete Landingpages für diese Suchanfragen hat.

2. **Keyword-Integration „Kundenkartei“**
   - In den **globalen Meta-Daten** (`layout.tsx`): „Kundenkartei“ ergänzen (z. B. in Keywords, optional in Title/Description-Varianten).
   - Auf der **Startseite** und auf **/kundenverwaltung**: Begriffe wie „digitale Kundenkartei“, „Kundenkartei für Kosmetikstudios“ natürlich im Text und in Überschriften einbauen, ohne Keyword-Stuffing.

3. **Google Search Console**
   - Echten Verification-Code eintragen und Property prüfen.
   - Prüfen: Indexierungsstatus, Coverage-Fehler, „URL-Prüfung“ für Homepage und wichtige Unterseiten (inkl. neuer Kundenkartei-/Anamnese-URLs).

### Mittelfristig

4. **Sitemap**
   - Neue Kundenkartei- und Anamnese-Seiten in `app/sitemap.ts` aufnehmen mit sinnvoller `priority` und `changeFrequency`.

5. **robots.txt**
   - `Crawl-delay: 1` entfernen (von Google ohnehin ignoriert, bei anderen Crawlern potentiell nachteilig).

6. **Strukturierte Daten**
   - Auf den neuen/überarbeiteten Seiten passende Schema.org-Typen (z. B. `Article` / `WebPage`) und klare `name`/`description` zu „Kundenkartei“ bzw. „Anamnese“ ergänzen.

---

## 5. Was ihr testen solltet (nach Umsetzung)

- **Google Search Console:** Indexierung der neuen/angepassten URLs prüfen; „Abdeckung“ und „Verbesserungen“ im Auge behalten.
- **Google Suche:** z. B. `site:treatflow.io kundenkartei` und `site:treatflow.io anamnese kosmetik` – ob die gewünschten Seiten erscheinen.
- **Manuelle Suche:** Relevante Suchanfragen (z. B. „kundenkartei kosmetik“, „digitale kundenkartei kosmetik“, „anamnese kosmetikstudio“) in Google (idealerweise inkognito) prüfen – ob und wo treatflow.io auftaucht.
- **Technisch:** Nach Änderungen an Redirects und neuen Seiten einen kurzen Check: Alle Links und Redirects funktionieren, keine toten Links, korrekte Canonical-URLs.

**On-Page-Checkliste** für Money-Pages, Compliance-Seiten und interne Verlinkung: siehe [SEO-Auswertung-2026-03-Keyword-Portfolio.md](SEO-Auswertung-2026-03-Keyword-Portfolio.md#6-on-page-checkliste-money-pages) (Abschnitt 6).

---

## 6. Google Search Console – Top-Suchanfragen (Performance)

**Quelle:** GSC Performance, Filter Hauptseite, Zeitraum 3 Monate (ca. 02.12.25–25.02.26). Property ggf. treatflow.com (Codebasis nutzt treatflow.io; bei Redirect .com → .io gelten die Daten für dieselbe Website.)

**Häufigste Suchanfragen (Impressionen):**

| Suchanfrage | Impressionen |
|-------------|--------------|
| kosmetikstudio software | 598 |
| software für kosmetikstudio | 459 |
| software kosmetikstudio | 386 |
| software kosmetik | 370 |
| kundenkartei kosmetik | 353 |
| treatflow | 291 |
| digitale kundenkartei kosmetik | 148 |
| beste terminplaner app für kosmetikstudio | 88 |
| kundenkartei kosmetik app kostenlos | 63 |
| treatflow login | 57 |

**Insgesamt:** 289 Suchanfragen in der Tabelle. Das Diagramm zeigte zwei Leistungsspitzen (ca. 10.02. und 20.02.) und anschließend einen Rückgang – Optimierung auf diese Queries kann Klicks und Positionen stabilisieren.

---

## 7. Umgesetzte Optimierungen (basierend auf GSC-Queries)

**Stand:** 03.03.2026

- **Layout (global):** Description und Keywords um die Top-Queries ergänzt: „Software für Kosmetikstudio“, „Software Kosmetik“, „Kundenkartei Kosmetik“, „digitale Kundenkartei Kosmetik“, „Terminplaner App Kosmetikstudio“. Open Graph und Twitter-Description angepasst.
- **Startseite:** Hero-Text mit „digitale Kundenkartei für Kosmetikstudios“, Feature-Bereich „Kundenverwaltung & Kundenkartei“ inkl. „Digitale Kundenkartei Kosmetik“. Strukturierte Daten (SoftwareApplication): Description und featureList um „Digitale Kundenkartei“ ergänzt.
- **/kundenverwaltung:** Title/Description und Keywords auf „Kundenkartei“ ausgerichtet (Kundenkartei Kosmetik, digitale Kundenkartei, Kundenkartei App). Hero: H1 „Kundenkartei Kosmetik“, Untertitel „Digitale Kundenkartei für Kosmetikstudios“.
- **/terminkalender:** Title/Description und Keywords um „Terminplaner App Kosmetikstudio“, „beste Terminplaner App für Kosmetikstudio“ ergänzt. Hero: H1 „Terminplaner App für dein Kosmetikstudio“, Fließtext mit „Terminplaner-App“.

**Optional (nicht umgesetzt):**

- **treatflow login (57 Impressionen):** Redirect von `/login` auf `https://app.treatflow.io/auth/login` (oder Anmeldeseite) in `next.config.ts` erwägen, damit die Suchintention „Login“ direkt erfüllt wird.
- **Kundenkartei-/Anamnese-Landingpages:** Siehe Abschnitt 4 (weiterhin empfohlen für starken Effekt).

---

## 8. SEO für Google und KI (umgesetzt)

**Stand:** 03.03.2026

Ziel: beste Auffindbarkeit in Google und in KI-Suchen (z. B. ChatGPT Search, Perplexity).

### Umgesetzte technische Maßnahmen

| Maßnahme | Nutzen |
|----------|--------|
| **robots.txt** | `Crawl-delay` entfernt (Google ignoriert es; andere Crawler schneller). **OAI-SearchBot** explizit erlaubt (ChatGPT Search). `Allow: /manifest.json` und `Allow: /llms.txt` für *.json-Ausnahme. |
| **Organization + WebSite JSON-LD** (Layout) | Klare Unternehmens- und Website-Entität für Google (Knowledge Panel, Sitelinks) und KI. Enthält: Name, Logo, Beschreibung, Kontakt, `potentialAction` SearchAction. |
| **FAQPage-Schema** (Startseite) | 5 Fragen/Antworten zu Treatflow. Google kann FAQ-Snippets anzeigen; KI können die Antworten zitieren und verlinken. |
| **Open-Graph-Image absolute URL** | `https://www.treatflow.io/images/og-image.jpg` – einige Crawler und soziale/KI-Systeme brauchen absolute URLs. |
| **manifest.json** | Beschreibung an SEO-Description angeglichen. |
| **llms.txt** (`/llms.txt`) | Kurzbeschreibung und Liste wichtiger URLs für KI-Crawler. Hilft LLMs, die relevanten Seiten zu priorisieren. |

### Weitere Empfehlungen für KI-Sichtbarkeit

- **Bing Webmaster Tools:** Sitemap einreichen; ChatGPT Search nutzt u. a. Bing-Daten.
- **Inhalte:** Klare, natürlich formulierte FAQs und Überschriften (H1, H2) – KI greifen auf semantische Struktur und Frage-Antwort-Muster zu.
- **Backlinks:** Relevante Verlinkungen stärken Autorität und werden von Suchmaschinen und KI-Quellen genutzt.
- **Referrer prüfen:** In Analytics auf `utm_source=chatgpt.com` oder ähnliche KI-Referrer achten.

### Was ihr testen solltet (Google + KI)

- **Google:** Rich Results Test (search.google.com/test/rich-results) für Startseite – SoftwareApplication und FAQPage prüfen.
- **Strukturierte Daten:** Schema Markup Validator (validator.schema.org) für eine Seite mit JSON-LD.
- **KI:** In ChatGPT Search bzw. Perplexity z. B. „Software für Kosmetikstudio“ oder „Kundenkartei Kosmetik“ suchen – ob treatflow.io genannt/zitiert wird (kann mit Verzögerung nach Indexierung erfolgen).

---

*Dieses Dokument dient der internen Analyse und Maßnahmenplanung. Die genannten Redirects und Stellen im Code beziehen sich auf den Stand der Codebasis zum Erstellungsdatum.*
