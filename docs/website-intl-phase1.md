# Website international – Phase 1: alle Sprachen wie die deutsche Seite

Ziel (Owner): Die englische Seite soll genau wie die deutsche aussehen – alle Sektionen –,
aber nur Funktionen zeigen, die wir dort wirklich anbieten. Danach alle anderen Sprachen.
Die deutsche Seite (Root, `app/(de)/…`) ist das Referenz-Design.

## Das Muster

```
app/i18n/feature-availability.ts   featureAvailable(feature, market), filterByFeature(items, market)
app/i18n/site-pages.ts             logische Seiten-Keys → Pfad je Sprache (oder null = gibt es dort nicht)
app/site/icons.ts                  Icon-Namen (String) → lucide-Komponente
app/site/RichTextView.tsx          Fließtext mit sprachabhängigen Links ausgeben
app/site/content/shared.ts         Typen: SiteMarket, Href, RichText, GatedText …
app/site/content/<bereich>/
  types.ts                         Content-Typ des Bereichs
  de.ts                            deutsche Texte (Referenz, = bisheriges Markup)
  en.ts tr.ts nl.ts it.ts pl.ts es.ts fr.ts
  index.ts                         get<Bereich>Content(market)
  resolve.ts                       (optional) Filtern + Links auflösen, serialisierbar für Client-Komponenten
```

Bereiche bisher: `navigation`, `footer`, `home` (Hero, Bewertungen, Zeitleiste,
Funktionskacheln, Video, Preise, FAQ, CTA, SEO-Links, Meta, JSON-LD).

Regeln:

1. **Eine Komponente für alle Sprachen.** Die Komponente bekommt `content` + `market`.
   Ohne Props rendert sie Deutsch (`content = homeDe.x`, `market = "de"`), damit die vielen
   deutschen Aufrufer (`<Navigation />`, `<SocialProofBar />`, `<PricingSection />` …) unverändert
   bleiben. Markup/Klassen/Reihenfolge nicht ändern – nur Strings durch `content.*` ersetzen.
2. **Keine festen Pfade für Seiten, die es in mehreren Sprachen gibt.** Links in Inhalten sind
   `Href = string | { page: SitePageKey; hash?; fallback? }`. `resolveHref(market, href)` liefert den
   lokalisierten Pfad (`/preise`, `/en/pricing`, `/nl/prijzen`, `/tr/fiyatlar` …) oder `null`, wenn die
   Seite in der Sprache nicht existiert – dann blendet die Komponente den Link/Eintrag aus.
   Feste Strings nur für DE-only-Seiten in `de.ts` (z. B. `/kundenkartei-software`, PDFs, Regionen).
   `fallback` nur dort, wo ein Ersatzziel inhaltlich passt (Workflows → Nachrichten).
3. **Verfügbarkeit per Tag.** Einträge, die von einer nicht überall angebotenen Funktion abhängen,
   bekommen `feature: "pos" | "sumup" | "whatsapp" | "accounting" | "vouchers" | "nisv" | "pay"`
   und werden mit `filterByFeature` gefiltert. Reine Text-Listen nutzen `GatedText`
   (`{ text, feature }`) + `gatedTexts()`. Seiten-Keys können selbst ein `feature` haben
   (`point-of-sale`, `vouchers`, `treatflow-pay`, `nisv-documentation`) – Links darauf verschwinden
   automatisch. Regeln: DACH-only (`pos`, `sumup`, `whatsapp`, `accounting`, `vouchers`, `nisv`)
   → nur `de`; `pay` → überall außer `tr`.
4. **Texte, die eine DACH-Funktion nur erwähnen** (z. B. „per E-Mail oder WhatsApp“), werden in den
   anderen Sprachen einfach ohne die Funktion formuliert – kein Tag nötig.
5. **Icons als Namen** (`icon: "calendar"`), damit Inhalte serialisierbar sind (MobileMenu und
   HomeHero sind Client-Komponenten).
6. **Fakten je Markt:** 14 Tage Test, EUR-Preise (Basic 39/421 €, Booking 59/637 €); Türkei:
   30 Tage Test, ₺1.490/₺1.990 (jährlich ₺16.100/₺21.500), kein Treatflow Pay.
   Videos nur, wenn es ein Video in der Sprache gibt (`home.video` fehlt außer in DE).

### Eine Seite umstellen (Rezept)

1. Deutsche Seite `app/(de)/<slug>/page.tsx` lesen. Alle sichtbaren Strings + Links in einen Typ
   `app/site/content/<seite>/types.ts` übernehmen, deutsche Werte nach `de.ts`.
2. Sektionen als Komponente(n) mit `content` + `market` bauen (wiederverwendbare Sektionen
   wie `SocialProofBar`, `PricingSection`, `FAQSection`, `ProductVideoSection` nehmen bereits Props).
   DE-Seite rendert sie mit `de.ts`; HTML muss gleich bleiben (vorher/nachher per curl vergleichen).
3. `en.ts` schreiben (ohne DACH-Funktionen, `feature`-Tags setzen), dann tr/nl/it/pl/es/fr.
4. Seite unter `app/[market]/<en-slug>/page.tsx` auf dieselbe Komponente umstellen
   (`generateMetadata` mit `buildPageMetadata({ pageKey, locale: market, … })`).
   Navigation/Footer kommen aus `app/[market]/layout.tsx`.
5. **Neue Seite** (gibt es bisher nur auf DE, z. B. `kunden-workflows`): Slug in
   `market-routes.ts` (`EN_SLUGS` + `LOCALIZED_SLUGS`/`TR_SLUG_OVERRIDES`) und `seo.ts`
   (`SeoPageKey`, `DE_SLUGS`, `seoPageSlugs`) ergänzen, in `site-pages.ts` beim Key `seo: "<key>"`
   setzen, Sitemap-Liste in `app/sitemap.ts` ergänzen. Danach erscheinen alle vorhandenen Links
   (Navigation, Footer, Startseite) automatisch in allen Sprachen.

### Sprachumschalter / hreflang

Unverändert: `LanguageSwitcher` (= `CountrySwitcher`) ermittelt die Zielseite über
`seoPageSlugs`, `buildPageMetadata`/`buildHreflangAlternates` erzeugen hreflang. Navigation und
MobileMenu übergeben nur `current={market}`. Der Footer zeigt auf Nicht-DE-Seiten zusätzlich die
crawlbaren Sprachlinks (wie früher `FooterEn`).

## Erledigt (dieser Branch)

- `app/i18n/feature-availability.ts`, `app/i18n/site-pages.ts`, `app/site/**`.
- Startseite: `app/(de)/page.tsx` und `app/[market]/(home)/page.tsx` rendern beide
  `components/home/HomePage.tsx` (+ `HomeSchemas`). Hero, SocialProofBar, StudioDayTimeline,
  Funktionskacheln (`HomeFeatureGrid`), ProductVideoSection (nur DE), PricingSection, FAQSection,
  CTA (`HomeFinalCta`), SEO-Links (`HomeSeoLinks`).
- Chrome: `Navigation` + `MobileMenu` + `Footer` für alle Sprachen; `[market]/layout.tsx`,
  `tr-seo/TrSeoShell.tsx`, `en/try-forms`, `tr/try-forms` nutzen sie.
  Entfernt: `NavigationEn.tsx`, `FooterEn.tsx`, `HomePageEn.tsx`, `funktionenNav.ts`.
- Inhalte für de, en, tr, nl, it, pl, es, fr (home, navigation, footer).
- Gutscheine: `app/[market]/vouchers` → 404 für alle Sprachen, `seoPageSlugs.vouchers` nur DE
  (kein hreflang/Sitemap mehr), robots `/*/vouchers`.

## Offene Punkte für die nächsten Agents

### Seiten, die auf DE verlinkt sind, aber in [market] fehlen (Links derzeit ausgeblendet)

| Key (`site-pages.ts`) | DE-Quelle | Ziel | Hinweis |
| --- | --- | --- | --- |
| `customer-workflows` | `app/(de)/kunden-workflows` | `app/[market]/customer-workflows` | Startseite verlinkt per `fallback` auf messaging |
| `treatflow-pay` | `app/(de)/treatflow-pay` | `app/[market]/treatflow-pay` | `feature: "pay"` → nicht in tr |
| `try-features` | `app/(de)/funktionen-live-testen` | `app/[market]/try-features` | Hero-Bild ist dann wieder verlinkt |
| `foot-care-software` | `app/(de)/fusspflege-software` | `app/[market]/foot-care-software` | Branchen-Menü + Footer |
| `imprint` | `app/(de)/impressum` | `app/[market]/imprint` | rechtlich prüfen: evtl. auf DE-Impressum verlinken |
| `news` | – | nl/it/pl/es/fr/tr | gibt es nur für en (bewusst) |
| `try-forms` | `app/(de)/formulare-testen` | nl/it/pl/es/fr | existiert nur en/tr |

### Phase-1-Seiten: auf das Muster umstellen (DE-Design + Inhalte je Sprache)

| Seite | DE-Quelle | [market]-Route (EN-Slug) |
| --- | --- | --- |
| Funktionen | `app/(de)/funktionen/page.tsx` | `app/[market]/features` |
| Preise | `app/(de)/preise/page.tsx` | `app/[market]/pricing` (TR: `app/tr/fiyatlar`) |
| Terminkalender | `app/(de)/terminkalender/page.tsx` | `app/[market]/appointment-calendar` |
| Online-Buchungen | `app/(de)/online-buchungen/page.tsx` | `app/[market]/online-booking` (TR: `app/tr/online-randevu-sistemi`) |
| Kundenverwaltung | `app/(de)/kundenverwaltung/page.tsx` | `app/[market]/client-records` (TR: `app/tr/musteri-takip-programi`) |
| Formulare | `app/(de)/formulare/page.tsx` | `app/[market]/forms` |
| Behandlungsdokumentation | `app/(de)/behandlungsdokumentation/page.tsx` | `app/[market]/treatment-documentation` |
| Nachrichten | `app/(de)/nachrichtenautomatisierung/page.tsx` | `app/[market]/messaging` (ohne WhatsApp) |
| Kunden-Workflows | `app/(de)/kunden-workflows/page.tsx` | neu: `app/[market]/customer-workflows` |
| Integrationen | `app/(de)/integrationen/page.tsx` | `app/[market]/integrations` (ohne Lexware/AbaNinja/SumUp) |
| Shop | `app/(de)/shop/page.tsx` | `app/[market]/shop` |
| Studio-Website | `app/(de)/website-fuer-kosmetikstudios/page.tsx` | `app/[market]/studio-website` |
| Treatflow Pay | `app/(de)/treatflow-pay/page.tsx` | neu: `app/[market]/treatflow-pay` (nicht tr) |

Viele DE-Funktionsseiten nutzen `ProductVideoSection` mit deutschen Videos: in anderen Sprachen
weglassen, bis es Videos gibt. `SocialProofBar` nimmt `content={getHomeContent(market).socialProof}`.

### Sonstiges / bekannt

- Hero-Bild `hero-startseite-en.png` zeigt evtl. Kassen-UI – für Nicht-DE ggf. neues Bild.
- „Referenzen“-Link (`/#testimonials`) zielt auch auf DE ins Leere (kein `id="testimonials"` auf
  der Startseite) – schon vor diesem Branch so; parität beibehalten.
- Nach dem Umbau ungenutzt (können weg, wenn niemand sie braucht): `ChallengeSelector`,
  `ComparisonTable`, `BenefitStats`, `SupportTrustBanner`; `HomePageIntl` wird nur noch für Typen
  (`app/i18n/locales/types.ts`, `markets/country-homes.ts`, `markets/home-pages.ts`) gebraucht –
  die alten Home-Inhalte dort sind jetzt tot und können mit aufgeräumt werden.
- TR-Meta-Beschreibung nennt „İlk 100 işletmeye lansman fiyatları“ – prüfen, ob noch aktuell.
- Formulierungen der Übersetzungen (z. B. FR „lapins“ für No-Shows, NL „Colofon“ für Impressum)
  sollten Muttersprachler einmal gegenlesen.
