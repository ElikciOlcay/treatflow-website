# Google Search Console – Internationale Locales

Nach dem Deploy von EN/ES/IT/FR diese Schritte in der Search Console ausführen.

## Property

Bestehende Domain-Property nutzen (empfohlen):

`https://www.treatflow.io` bzw. Domain-Property `treatflow.io`

Keine separaten Properties pro Sprache nötig, wenn die Domain-Property alle Unterpfade abdeckt.

## Sitemap einreichen

1. Search Console → Indexierung → Sitemaps  
2. Sitemap-URL einreichen (falls noch nicht aktiv):

`https://www.treatflow.io/sitemap.xml`

Die Sitemap enthält bereits DE + `/en/*` + `/es/*` + `/it/*` + `/fr/*` inkl. Early-Access-URLs und hreflang-Alternates.

## URL-Prüfung (Stichprobe)

Nach dem Deploy in der URL-Prüfung abrufen / indexieren lassen:

| Locale | Beispiel-URLs |
|--------|----------------|
| EN | `https://www.treatflow.io/en`, `…/en/early-access`, `…/en/pricing` |
| ES | `https://www.treatflow.io/es`, `…/es/acceso-anticipado`, `…/es/precios` |
| IT | `https://www.treatflow.io/it`, `…/it/accesso-anticipato`, `…/it/prezzi` |
| FR | `https://www.treatflow.io/fr`, `…/fr/acces-anticipe`, `…/fr/tarifs` |

## hreflang prüfen

1. Beliebige internationale Seite öffnen → Seitenquelltext  
2. `<link rel="alternate" hreflang="…">` prüfen  
3. Erwartet u. a.:

- `hreflang="de"` → deutsche Entsprechung (Root bzw. DE-Slug)
- `hreflang="en"` → `/en/…`
- `hreflang="es"` → `/es/…`
- `hreflang="it"` → `/it/…`
- `hreflang="fr"` → `/fr/…`
- `hreflang="x-default"` → in der Regel `/en` (globale Default)

4. Optional: [hreflang-Tags-Tester](https://technicalseo.com/tools/hreflang/) oder Rich Results / URL Inspection

## International Targeting (optional)

Bei Domain-Property: kein zwingendes „Ziel-Land“ setzen (spricht alle Märkte an).  
Spracherkennung läuft über hreflang + `html lang`.

## Nach 48–72 Stunden

- Abdeckung: neue `/en|/es|/it|/fr`-URLs ohne harte Fehler  
- Keine massenhaften „Seite mit Weiterleitung“ / Soft-404 auf Locale-Homepages  
- Performance-Report nach Seite filtern: `Contains /en`, `/es`, `/it`, `/fr`
