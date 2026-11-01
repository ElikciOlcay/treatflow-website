# International SEO Roadmap – Treatflow

Zentrale Referenz für internationale Marketing-Seiten und Early Access.

**Stand:** November 2026
**Technische Basis:** Next.js App Router, `app/[market]` für alle Sprachen außer DE (Root)

---

## Aktueller Status

| Sprache | URL | Inhalte | Blog | llms |
|---------|-----|---------|------|------|
| Deutsch | `/` | komplett (inkl. DACH-only: Kasse, Pay, NiSV) | `/blog` | `llms.txt` |
| Englisch | `/en` | komplett | `/en/blog` | `llms-en.txt` |
| Türkisch | `/tr` | komplett + Ratgeber `/tr/rehber` | `/tr/blog` | `llms-tr.txt` |
| Niederländisch | `/nl` | komplett | `/nl/blog` | `llms-nl.txt` |
| Italienisch | `/it` | komplett | `/it/blog` | `llms-it.txt` |
| Polnisch | `/pl` | komplett | `/pl/blog` | `llms-pl.txt` |
| Spanisch | `/es` | komplett | `/es/blog` | `llms-es.txt` |
| Französisch | `/fr` | komplett | `/fr/blog` | `llms-fr.txt` |

Nicht in NL/IT/PL/ES/FR: Neuigkeiten, Formulare testen, Kasse/POS, Early Access.

---

## Architektur

- `app/i18n/config.ts` – Sprachen, Prefixe, Geo-Zuordnung (`MARKET_BY_COUNTRY`)
- `app/i18n/market-routes.ts` – `EN_SLUGS` + `LOCALIZED_SLUGS` (lokale URLs je Sprache; ES/IT/FR = alte Slugs von 2026)
- `middleware.ts` – rewritet `/nl/prijzen` → `/nl/pricing` (Ordner), 301t `/nl/pricing` → `/nl/prijzen`, Geo-/Browser-Redirect auf `/`
- `app/i18n/seo.ts` – hreflang für alle Sprachen, x-default = Englisch
- `app/i18n/locales/<lang>/` – Inhalte NL/IT/PL/ES/FR (`general.ts` + `pages.ts`, Vertrag `locales/types.ts`). Links als `/en/...` schreiben, `getLocaleContent()` lokalisiert sie.
- TR/EN: weiter über `app/i18n/markets/*`
- Blog: `lib/blog-intl/` (Themen in `topics.ts`, Artikel in `posts/<lang>.ts`), Routen `app/[market]/blog`. Ein Thema verbindet alle Sprachfassungen + die deutsche Fassung per hreflang.

### Neuen Blogartikel international anlegen

1. Thema in `lib/blog-intl/types.ts` (`BlogTopicId`) und `topics.ts` ergänzen (`deSlug`, Bild, pageKeys)
2. Artikel je Sprache in `lib/blog-intl/posts/<lang>.ts` (answer-first, takeaways, FAQ)
3. Sitemap, RSS (`/{lang}/blog/feed.xml`) und hreflang laufen automatisch
4. Artikel in `public/llms-<lang>.txt` ergänzen

### Neue Sprache hinzufügen

1. `config.ts` (markets, prefixedMarkets, bundleLanguages, Tabellen)
2. Slugs in `LOCALIZED_SLUGS`
3. `app/i18n/locales/<lang>/` nach `types.ts`
4. Chrome-Texte: `ui-chrome.ts`, `dictionaries/<lang>.json`, NavigationEn/FooterEn
5. Blog-UI in `lib/blog-intl/ui.ts`, Artikel in `posts/<lang>.ts`
6. `public/llms-<lang>.txt`, `robots.ts`, `next.config.ts` (Content-Language)
7. App-Sprache in `market-access.ts` (`APP_LANGUAGES`), falls die App sie kann

Siehe auch `docs/GSC_INTERNATIONAL_CHECKLIST.md`.

---

## Conversion-Regeln

- **Alle Sprachen:** Self-Serve-Registrierung in der App mit `?lang=` (de/en/tr/nl/it/pl; es/fr → en)
- **DE:** zusätzlich HubSpot-Demo

---

## Nächste Schritte (Produkt/Go-to-Market)

1. Deploy + GSC Sitemap / URL-Prüfung
2. App-Registrierung für Non-DACH sperren (tfv2)
3. Einen Pilotmarkt Sales-led onboarden
4. Content nur für diesen Markt vertiefen
5. Optional später: `/nl`, Self-Serve pro Land
