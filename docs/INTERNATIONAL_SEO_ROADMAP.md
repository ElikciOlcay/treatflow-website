# International SEO Roadmap – Treatflow

Zentrale Referenz für internationale Marketing-Seiten und Early Access.

**Stand:** Juli 2026  
**Technische Basis:** Next.js App Router, Locale-Subtrees (`/`, `/en`, `/es`, `/it`, `/fr`)

---

## Aktueller Status

| Markt | URL | Sprache | Conversion | Status |
|-------|-----|---------|------------|--------|
| DACH | `/` | Deutsch | Self-Serve + Demo buchen | **live** |
| Global EN | `/en` | Englisch | Early Access | **live** – Features + 9 Branchen |
| Spanisch | `/es` | Español | Early Access | **live** – Features + 9 Branchen |
| Italienisch | `/it` | Italiano | Early Access | **live** – Features + 9 Branchen |
| Französisch | `/fr` | Français | Early Access | **live** – Features + 9 Branchen |

`/en-nl` wurde entfernt (301 → `/en`). Niederländisch `/nl` bleibt optional geplant.

**Parität (Aug 2026):** Internationale Locales haben dieselben Kern-Funktionen und Branchenseiten wie die DE-Navigation (ohne Blog, ohne NiSV/TSE-DACH-Spezifika). Content über `industry-pages-intl.ts`, `extra-feature-pages-intl.ts`, `FeaturePageEn`, `InternationalSeoPage`.

---

## Architektur

- `app/i18n/config.ts` – Locales, Prefixes, Geo-Redirect
- `app/i18n/seo.ts` – hreflang, `SeoPageKey`, Metadata
- `app/i18n/market-access.ts` – CTA: Register (DE) vs Early Access (intl)
- `app/i18n/markets/` – Content pro Markt
- Shared UI: `HomePageIntl`, `FeaturePageEn`, `PricingPageIntl`, `EarlyAccessPage`

### Neue Locale hinzufügen

1. Locale in `config.ts`
2. Slugs in `seo.ts`
3. Content unter `markets/`
4. Subtree `app/<locale>/`
5. `sitemap.ts` + Middleware Geo
6. Early-Access-Pfad in `market-access.ts`
7. Diese Roadmap aktualisieren

### hreflang

| Pfad | hreflang |
|------|----------|
| `/` | `de` |
| `/en` | `en` |
| `/es` | `es` |
| `/it` | `it` |
| `/fr` | `fr` |
| x-default | `/en` |

Siehe auch `docs/GSC_INTERNATIONAL_CHECKLIST.md`.

---

## Conversion-Regeln

- **DE:** Registrierung + HubSpot-Demo
- **EN/ES/IT/FR:** nur Early-Access-Formular → `/api/demo-anfrage` → Loops an `olcay.elikci@treatflow.io`
- Antwort-Templates: `docs/EARLY_ACCESS_INBOX.md`

---

## Nächste Schritte (Produkt/Go-to-Market)

1. Deploy + GSC Sitemap / URL-Prüfung
2. App-Registrierung für Non-DACH sperren (tfv2)
3. Einen Pilotmarkt Sales-led onboarden
4. Content nur für diesen Markt vertiefen
5. Optional später: `/nl`, Self-Serve pro Land
