# Umfassende Keyword-Recherche: Terminplaner / Kosmetikstudio / Studio-Software (DE)

**Stand:** 08.08.2026 (Update: Intent-Korrektur)
**Ziel:** Alle mit kostenlosen Tools erreichbaren Quellen ausschöpfen, um die besten (noch nicht oder unterpriorisiert abgedeckten) Keywords im Umfeld „Terminplaner", „Kosmetikstudio" und „Kosmetikstudio-Software" zu finden.

> **Korrektur nach Intent-Check (08.08., zweiter Durchlauf):** Ein reines Suchvolumen reicht nicht – entscheidend ist, ob die Suchintention tatsächlich **Beautystudio + B2B** ist. Abschnitt 0 unten dokumentiert, welche der zuvor genannten Cluster (v.a. „Buchungstool") diesen Test **nicht** bestanden haben und warum. Die Tabellen in Abschnitt 4/5 wurden entsprechend bereinigt.

---

## 0. Intent-Validierung: Ist es wirklich Beauty-B2B?

Für jeden generischen Kopfbegriff wurde die Performance-Suite-„Keyword Ideen"-Tabelle (zeigt die stärksten thematisch verwandten Suchanfragen) geprüft. Ergebnis: Mehrere Begriffe mit hohem SV werden **nicht** von Beautystudio-Suchenden dominiert, sondern von komplett anderen Branchen.

| Kopfbegriff | SV | Tatsächlich dominierende verwandte Suchanfragen (aus PS) | Urteil |
|---|---:|---|---|
| **buchungstool** | 310 | buchungstool ferienwohnung, jimdo/wordpress buchungstool, smoobu buchungstool, buchungstool website | ❌ **Nicht Beauty** – dominiert von Ferienwohnung/Website-Baukasten |
| **buchungssoftware** | 260 | buchungssoftware hotel, buchungssoftware ferienwohnung, hotel buchungsprogramm | ❌ **Nicht Beauty** – dominiert von Hotel/Vermietung |
| **kassensoftware** | 460 | günstiges kassensystem einzelhandel, kassenprogramm gastronomie, ec kassensystem | ❌ **Nicht Beauty** – dominiert von Einzelhandel/Gastronomie |
| **kassensystem** | 6.600 | kassensystem gastronomie, kassensystem einzelhandel, sumup kassensysteme | ❌ **Nicht Beauty** – dominiert von Gastro/Einzelhandel |
| **praxissoftware** | 850 | tomedo/medistar/medatixx/elefant praxissoftware, psychotherapie praxissoftware | ❌ **Nicht Beauty** – dominiert von Arzt-/Therapiepraxis-Software (andere Zielgruppe) |
| **crm-software / crm** | 3.200 / 36.500 | crm zoho, dynamics nav, crm for sap, crm ms dynamics | ❌ **Nicht Beauty** – dominiert von Enterprise-CRM (falsche Zielgruppe) |
| **terminbuchungstool / terminbuchungssystem** | 260 / 170 | online termin, online terminbuchung (generisch, keine Fremdbranchen-Dominanz erkennbar, aber auch kein Beauty-Signal) | ⚠️ **Neutral** – generisch „Termin", könnte Beauty einschließen, ist aber nicht beautyspezifisch nachweisbar |
| **kundenverwaltung / -software** | 170–210 | crm, crm funktionen, kundenverwaltung mit excel | ⚠️ **Neutral** – generischer Kleinunternehmer-Softwarebegriff, Beauty ist nur Teilmenge |

**Zusätzlicher Test:** Es wurde direkt nach exakten Beauty+Tool-Kombinationen gesucht (`buchungssystem-kosmetikstudio`, `buchungstool-salon`, `crm-kosmetikstudio`, `beautysalon-software` usw.) – **alle 20 getesteten Kombinationen liefern 404** in der Performance-Suite-DB (kein messbares Suchvolumen für die exakte Phrase). Einzige Ausnahme: **„kassensoftware kosmetik" = 10 SV** (neu, sehr klein aber real).

**Konsequenz:** Die im ersten Durchlauf empfohlenen Cluster „Buchungstool" und „Kassensoftware" (als eigenständige Kopfbegriffe) werden **zurückgezogen**. Sie sind zwar volumenstark, aber die Suchenden sind zu >90% Ferienwohnungs-Vermieter, Gastronomen oder Einzelhändler – nicht Kosmetikstudios. Gleiches gilt für „Praxissoftware" (Arztpraxen) und „CRM-Software" (Enterprise). Diese Begriffe sind für Content-Erwähnungen (z. B. Vergleichsartikel „Alternativen zu klassischer Kassensoftware") höchstens als Randerwähnung nutzbar, **nicht** als eigene Landingpage-Zielkeywords.

**Was bleibt als echter Beauty-B2B-Kern** (siehe bereinigte Liste in Abschnitt 4): ausschließlich Keywords, die explizit „kosmetikstudio"/„kosmetik" als Modifier enthalten – auch wenn das Einzel-SV dadurch klein ist (10–320). Das ist der Preis für echte Zielgruppen-Passung: hochspezifische B2B-Beauty-Phrasen haben in Tools wie Performance Suite/Ubersuggest strukturell niedrigeres gemessenes Volumen, weil die meisten Nutzer generisch suchen und erst in den SERPs/Anzeigen filtern.

---

## 1. Verwendete Quellen (alle kostenlos)

| Quelle | Was geliefert wurde | Einschränkung |
|---|---|---|
| **Performance Suite Keyword-DB** (OSG) | Echtes SV/CPC/Difficulty für DE, direkt pro Keyword-Seite | Nur Keywords mit eigener DB-Seite (viele Long-Tails 404) |
| **Performance Suite "Keyword Ideen"-Tabellen** | Pro Haupt-Keyword bis zu 10 verwandte Keywords mit SV/CPC (ohne Account) | Nur Top-10, Rest hinter Free-Account-Wall |
| **Google Suggest API** (roh, ohne Login) | Nachfrage-Signal / Long-Tail-Formulierungen, inkl. Alphabet-Expansion (a–z) für 4 Kern-Seeds | Kein Suchvolumen, nur Popularitäts-Ranking |
| **Bing Suggest API** | Zusätzliche, bei Google nicht auftauchende Formulierungen | Kein Suchvolumen |
| **Ubersuggest (neilpatel.com)** | Cross-Check von 1 Kern-Keyword (unregistrierter Free-Modus = 1 Suche) | Nur 1 Suche ohne Account möglich |
| **Google Ads Keyword Planner (API)** | – | Nicht nutzbar: ADC-Authentifizierung fehlt weiterhin (`gcloud auth application-default login` nötig) |
| **searchvolume.io** | – | Blockiert automatisierte Zugriffe per reCAPTCHA |
| **Bestehende GSC-Daten** (`SEO-RANKING-BERICHT-2026-04-03.md`) | Reale Impressions/Positionen von treatflow.io für Long-Tails ohne PS-Eintrag | Nur Keywords, für die schon Impressionen existieren |

**Cross-Validierung:** Ubersuggest zeigt für „kosmetikstudio software" ebenfalls **~10–20 monatliche Suchanfragen** – deckt sich mit den Performance-Suite-Werten. Die PS-Zahlen sind damit als verlässlich einzuschätzen.

---

## 2. Neue Funde seit letzter Recherche (07.08.) – nach Intent-Check bereinigt

### 2a. Echte Beauty-B2B-Funde (Keyword enthält explizit „kosmetik(studio)" – hohe Zielgruppen-Passung)

| SV | Keyword | CPC | Quelle | Einordnung |
|---:|---------|-----|--------|------------|
| 90 | kassensystem kosmetikstudio | 14,16 € | PS direkt | bestätigt, bereits bekannt |
| 90 | kosmetikstudio kassensystem | 11,55 € | PS direkt | Wortstellungs-Variante, **neu** |
| 30 | terminkalender kosmetikstudio | 7,29 € | PS direkt | Direkter Treffer, **neu** – bisher nicht auf dem Schirm |
| 10 | **kassensoftware kosmetik** | 0,00 € | PS direkt | **neu**, sehr klein aber einzige beautyspezifische Kassen-Software-Phrase mit Daten |

→ Das sind die einzigen zusätzlich gefundenen Keywords, die den B2B-Beauty-Test wirklich bestehen. Absichtlich kurze Liste: Wie in Abschnitt 0 gezeigt, haben 20 getestete Beauty+Tool-Kombinationen (z. B. „buchungssystem kosmetikstudio", „crm kosmetikstudio") **kein messbares Suchvolumen** – Nutzer suchen dort fast nie die exakte Kombination, sondern generisch.

### 2b. Generische Begriffe – hohes SV, aber **zurückgezogen** (nicht beautyspezifisch, siehe Abschnitt 0)

| SV | Keyword | Warum zurückgezogen |
|---:|---------|---|
| 460 | kassensoftware | Dominiert von Einzelhandel/Gastronomie |
| 320 | praxis software / praxissoftware | Dominiert von Arzt-/Therapiepraxis-Software (Medatixx, Tomedo etc.) |
| 320 | buchungstools | Dominiert von Ferienwohnung/Website-Baukasten |
| 310 | buchungstool | Dominiert von Ferienwohnung/Website-Baukasten |
| 270 | buchungs tool | Dito |
| 260 | buchungssoftware | Dominiert von Hotel/Vermietung |
| 260 | terminbuchungstool | Neutral-generisch, kein Beauty-Signal nachweisbar |
| 170 | terminbuchungssystem | Neutral-generisch, kein Beauty-Signal nachweisbar |
| 150 | crm funktionen | Enterprise-CRM, falsche Zielgruppe |

### 2c. Branchen-Vokabular (kein Software-Intent, nur B2C-lokal – für Content/Glossar, nicht als B2B-Zielkeyword)

| SV | Keyword | CPC | Hinweis |
|---:|---------|-----|---|
| 880 | kosmetikinstitut | 1,53 € | Lokale „Studio in der Nähe"-Suche, kein Software-Intent |
| 850 | laserstudio | 1,86 € | Dito |

### 2d. Generischer Kleinunternehmer-Software-Begriff (Beauty ist Teilmenge, nicht exklusiv)

| SV | Keyword | CPC | Hinweis |
|---:|---------|-----|---|
| 210 | software für kundenverwaltung / kundenverwaltung software | 21,06 € | Hohe Kaufabsicht (CPC!), aber branchenübergreifend – Beauty muss im Content explizit adressiert werden, nicht das Keyword allein |
| 70 | kundenverwaltung software kostenlos | 7,44 € | Dito |
| 70 | kundenkartei kostenlos | 3,52 € | Dito, aber „Kundenkartei" ist im DACH-Raum bereits stark mit Beauty/Friseur assoziiert – höhere Passung als „Kundenverwaltung" |
| 50 | terminvereinbarung online | 3,72 € | Neutral generisch |
| 40 | programm für kundenverwaltung | 10,38 € | Long-Tail, generisch |
| 30 | kundenverwaltung excel / app kostenlos | 7,71–8,41 € | Long-Tail, generisch |
| 20 | kundenverwaltung app | 14,23 € | Long-Tail, generisch |

### NiSV-Compliance-Cluster (100 % beautyspezifisch – NiSV reguliert explizit Laser/IPL-Behandlungen in Kosmetikstudios)

| SV | Keyword | CPC |
|---:|---------|-----|
| 90 | nisv verordnung | 1,23 € |
| 70 | nisv fachkundenachweis | 1,23 € |
| 60 | nisv fachkunde | 2,48 € |
| 50 | nisv zertifizierungsstelle | 1,06 € |
| 50 | nisv radiofrequenz | 1,29 € |

→ Guter Ansatz für einen Content-Hub „NiSV Fachkunde & Dokumentation" – aktuell deckt Treatflow nur „NiSV Dokumentation" ab, nicht den Fachkunde-Nachweis-Suchintent.

### Reale GSC-Signale (treatflow.io bekommt hier schon Impressionen, aber ohne eigene Landingpage)

Aus `SEO-RANKING-BERICHT-2026-04-03.md` – diese Begriffe generieren **bereits jetzt** Impressionen, sind aber nicht in der PS-DB:

| Keyword | Impressions | Position | Kommentar |
|---|---:|---:|---|
| kundenkartei für selbstständige | 81 | 32 | Bisher komplett unbeachtet – klarer Ausbaukandidat |
| kundenkartei online kostenlos | 33 | 13 | Schon gut platziert, Content schärfen |
| kundenkartei vorlage pdf | 90 | – (nicht gerankt) | Lead-Magnet-Chance (PDF-Vorlage + Softwarehinweis) |
| kundenkartei-vorlage kostenlos | 50 | – (nicht gerankt) | Gleiche Chance |

---

## 3. Nachfrage-Signale ohne Suchvolumen (Google/Bing Suggest, keine PS-Seite)

Diese Formulierungen taucht bei Google/Bing Autocomplete häufig auf, haben aber keine eigene Performance-Suite-Seite (=vermutlich SV < 10, aber real gesuchte Formulierungen – nützlich für Content/FAQ/Meta-Description-Varianten):

**Kundenkartei-Ökosystem (starke Nachfrage im Nachbarmarkt Friseur/Nagelstudio – identische Zielgruppe wie Kosmetikstudio):**
- kundenkartei friseur, kundenkartei nagelstudio, kundenkartei wimpernverlängerung, kundenkartei excel vorlage kostenlos, kundenkartei anlegen, kundenkartei vorlage, kundenkartei vorlage pdf, kundenkartei online

**Software/Tool-Absicht:**
- terminbuchungssoftware, terminbuchungssoftware kostenlos, kundenverwaltungssystem, kasse für kosmetikstudio, kassensystem für kosmetikstudio, software kosmetikstudio kostenlos, online terminbuchung tool (kostenlos), terminkalender für kosmetikstudio

**Digitale Anamnese (eigenes Cluster, aktuell nur als Long-Tail `/anamnesebogen-kosmetikstudio` abgedeckt):**
- digitale anamnese, digitale anamnese praxis, digitale anamnese und aufklärung, digitale anamnesebögen, behandlungsdokumentation (+ Fachrichtungs-Varianten: heilpraktiker, physiotherapie, zahnarzt – für B2B-Vergleichscontent relevant, da diese Praxen ähnliche Software suchen)

→ Empfehlung: Diese Begriffe primär in **Meta-Descriptions, FAQ-Abschnitten und H2/H3-Überschriften** einsetzen (nicht als eigene Landingpages, da SV zu gering für dedizierte Seiten).

---

## 4. Gesamt-Ranking – nur Keywords mit echtem Beauty-B2B-Bezug

Diese Tabelle enthält **ausschließlich** Keywords, die entweder (a) explizit „kosmetik/kosmetikstudio" enthalten, (b) als Compliance-Begriff exklusiv für Kosmetikstudios gilt (NiSV, Hygieneplan), oder (c) bereits reale, beautyspezifische GSC-Rankings von treatflow.io hat. Generische Kopfbegriffe ohne nachgewiesenen Beauty-Bezug (kassensystem, buchungstool, praxissoftware, crm, kassensoftware …) wurden **entfernt** – siehe Abschnitt 0 für die Begründung. Sie können weiterhin als große Kopfbegriffe im Content erwähnt werden, sind aber keine eigenen Zielkeywords mehr.

| SV | Keyword | CPC | Intent |
|---:|---------|-----|--------|
| 8.600 | anamnesebogen | 1,38 € | Vorlage / Info (branchenübergreifend, aber Treatflow rankt hier bereits) |
| 1.900 | hygieneplan | 1,18 € | Vorlage, Kosmetikstudio-Pflicht |
| 560 | anamnesebogen zum ausdrucken | 1,02 € | Vorlage |
| 320 | hygieneplan kosmetikstudio pdf | 1,30 € | Content, 100 % beautyspezifisch |
| 260 | kundenkartei* (SE-Ranking, Pos. 19) | – | **Bestes Bestandskeyword**, DACH-weit stark mit Beauty/Friseur assoziiert |
| 250 | kassensystem kosmetik | 8,51 € | Software, beautyspezifisch |
| 210 | kundenverwaltung software / software für kundenverwaltung | 21,06 € | Generisch Kleinunternehmer-Software, hohe Kaufabsicht – Beauty im Content explizit ansprechen |
| 170 | kundenverwaltung | 13,08 € | Generisch, Beauty als Teilzielgruppe |
| 140 | nisv | 1,54 € | Compliance, 100 % beautyspezifisch (Laser/IPL-Regulierung) |
| 90 | kassensystem kosmetikstudio | 14,16 € | Software, beautyspezifisch |
| 90 | kosmetikstudio kassensystem | 11,55 € | Software, beautyspezifisch (neu) |
| 90 | nisv verordnung | 1,23 € | Compliance, beautyspezifisch (neu) |
| 70 | nisv fachkundenachweis | 1,23 € | Compliance, beautyspezifisch (neu) |
| 60 | nisv fachkunde | 2,48 € | Compliance, beautyspezifisch (neu) |
| 50 | kundenkartei kosmetik | 2,50 € | Software, beautyspezifisch |
| 50 | nisv zertifizierungsstelle / nisv radiofrequenz | ~1,2 € | Compliance, beautyspezifisch (neu) |
| 40 | terminplaner kosmetikstudio | 0,00 € | Software, beautyspezifisch |
| 40 | anamnesebogen kosmetik | 0,32 € | Vorlage, beautyspezifisch |
| 40 | kosmetikstudio software | – | Software – **Kern-Keyword, höchste Kaufintention** |
| 30 | terminkalender kosmetikstudio | 7,29 € | Software, beautyspezifisch (neu) |
| 20 | digitale kundenkartei kosmetik | – | Software, beautyspezifisch |
| 10 | kassensoftware kosmetik | 0,00 € | Software, beautyspezifisch (neu) |
| 10 | terminplaner kosmetik / kundenkartei software / software kosmetikstudio | 5,6–6,1 € | Software, beautyspezifisch |

\* Wert aus SE Ranking / GSC (kein PS-Eintrag), aber real bestätigt durch treatflow.io-Rankingdaten.

**Wichtig zu lesen:** Die absoluten Zahlen sind klein (10–320 SV pro Einzelbegriff). Das ist bei einem Nischen-B2B-Produkt für eine sehr spezifische Branche (Kosmetikstudios in DACH) normal und **kein Zeichen dafür, dass das Thema unwichtig ist** – es zeigt nur, dass generische Tools wie Performance Suite/Ubersuggest bei so spezifischen B2B-Nischen strukturell niedrige Werte liefern. Addiert man die Beauty-Kern-Keywords, kommt man auf ca. **1.900–2.200 SV** an wirklich zielgruppengenauen, kaufnahen Suchanfragen – das ist die realistische Zielgröße.

---

## 5. Priorisierte Handlungsempfehlungen für Treatflow

1. **„kundenkartei" bleibt das wertvollste Bestandskeyword** (SV 260, aktuell Pos. 19 laut GSC) – Kannibalisierung zwischen `/kundenverwaltung` und `/kundenkartei-software` klären, stärker auf eine Seite konsolidieren.
2. **Kassensystem-Cluster für Kosmetikstudios ausbauen**: kassensystem kosmetik (250) + kassensystem kosmetikstudio (90) + kosmetikstudio kassensystem (90) + kassensoftware kosmetik (10, neu) = **~440 SV**, ausschließlich beautyspezifisch, aktuell nirgends dediziert abgedeckt. *(Achtung: „Kassensoftware"/„Kassensystem" solo nicht mehr verfolgen – siehe Abschnitt 0, dominiert von Gastro/Einzelhandel.)*
3. **NiSV-Fachkunde-Content-Hub**: Ergänzt bestehende NiSV-Dokumentation um Fachkunde-Nachweis-Aspekt (SV-Cluster ~260 über 5 Keywords, alle 100 % beautyspezifisch), sinnvoll als Unterseite/FAQ zu `/nisv-dokumentation`.
4. **Kundenkartei-Vorlage als Lead-Magnet**: „kundenkartei vorlage pdf" hat bereits 90 GSC-Impressions ohne Ranking – eine kostenlose PDF-Vorlage + Softwarehinweis auf `/kundenkartei-software` einbauen (Quick Win).
5. **Terminkalender/-planer für Kosmetikstudio ergänzen**: „terminkalender kosmetikstudio" (30, neu) + „terminplaner kosmetikstudio" (40) + „terminplaner kosmetik" (10) – kleines aber 100 % passendes Cluster für die bestehende `/terminkalender`-Seite.
6. **Nicht mehr verfolgen (zurückgezogen nach Intent-Check):**
   - „Buchungstool"/„Buchungssoftware"-Cluster – dominiert von Ferienwohnung/Hotel/Website-Baukasten, nicht Beauty.
   - „Kassensoftware"/„Kassensystem" solo – dominiert von Gastronomie/Einzelhandel.
   - „Praxissoftware" – dominiert von Arzt-/Therapiepraxis-Software (andere Zielgruppe, andere Softwarebrands).
   - „CRM-Software"/„CRM Funktionen" – dominiert von Enterprise-CRM (SAP, Dynamics, Zoho), falsche Zielgruppengröße.
   - „terminplaner"/„terminkalender" solo (4.400 SV) – Intent ist zu >80 % Papierkalender/DFN-Tool/Consumer-App, nicht B2B-Software.
7. **Generell für neuen Content:** Wenn ein generischer Kopfbegriff (z. B. „Kundenverwaltung", „Terminbuchung") als Landingpage-Basis dient, muss „für Kosmetikstudios"/„Kosmetikstudio" **explizit in H1, Title und den ersten 100 Wörtern** stehen – sonst rankt/konvertiert die Seite für die falsche (branchenfremde) Suchintention, selbst wenn das Ranking gelingt.

---

## 6. Bekannte Grenzen dieser Recherche

- Google Ads Keyword Planner blieb ohne echte Volumendaten (ADC-Login fehlt) – für 100% autorisierte Zahlen wäre `gcloud auth application-default login` durch den User nötig.
- Ubersuggest, Sistrix, Ahrefs Free etc. sind im unregistrierten Modus auf 1 Suche limitiert bzw. verlangen einen Account für Bulk-Daten – für tiefere Cross-Validierung wäre ein kostenloser Account sinnvoll.
- Performance-Suite-Zahlen stammen aus einem Drittanbieter-Modell (nicht direkt Google Ads) – Größenordnung ist verlässlich, exakte Zahlen können abweichen.
