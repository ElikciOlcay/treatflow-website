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
Funktionskacheln, Video, Preise, FAQ, CTA, SEO-Links, Meta, JSON-LD), `feature-common`
(gemeinsame Texte der Funktions-Bausteine) und die Funktionsseiten `appointment-calendar`,
`online-booking`, `client-records`.

### Funktionsseiten: `feature-common` + `FeaturePage`

```
app/site/content/feature-common/   Texte der Bausteine je Sprache (getFeatureCommon(market))
  types.ts                         FeatureCommonContent + FeaturePageContent (Seiten-Inhaltstyp)
app/site/content/<seite>/          types.ts (= FeaturePageContent), de/en/tr/nl/it/pl/es/fr.ts, index.ts
app/site/pages/FeaturePage.tsx     generisches Layout: Hero → Video (nur wenn `video`) → Understand →
                                   HowItWorks → Cards → SocialProofBar → FAQ → Related → CTA + JSON-LD
app/site/pages/<Seite>Page.tsx     dünne Hülle: Content + pageKey + Theme
```

- Bausteine nehmen `market?: SiteMarket` (Default `"de"` = bisherige Texte, alle anderen DE-Seiten
  bleiben unverändert): `FeatureHero` (Standard-CTA, Vertrauenszeile, „4,6/5 auf Google“, „Kurz
  erklärt“, Breadcrumb-Home, `lang`), alle `FeatureSections` (Default-Überschriften, `lang`,
  `FeaturePageCta` mit Register-URL je Markt und „Preise ansehen“ → `{ page: "pricing" }`),
  `ContentAttribution` (Datum/Labels/Autor-Link je Sprache), `CTASection`, `QuickFacts`.
  `generateWebPageSchema` hat `inLanguage` (Default `de-DE`).
- Seiteninhalte sind serialisierbar (Icons als Namen, Links als `Href`). `feature`-Tags auf
  Karten/FAQ/Kapseln/Related/Schritten, `GatedText` für Chips und Stichpunkte. Related-Links und
  Hero-/CTA-Zweitbutton verschwinden, wenn die Zielseite in der Sprache fehlt
  (`customer-workflows`, `treatflow-pay`, DE-only `/kundenkartei-software`).
- `video` nur in `de.ts` (deutsche Funktionsvideos).
- DE-Route `app/(de)/<slug>/page.tsx` baut Metadata aus `de.ts` (inkl. OpenGraph) und rendert
  Navigation + `<XPage market="de" />` + Footer; `app/[market]/<en-slug>/page.tsx` nutzt
  `buildPageMetadata`. TR-Money-Slugs (`app/tr/online-randevu-sistemi`, `app/tr/musteri-takip-programi`)
  rendern dieselbe Seite in `TrSeoShell` (Meta-Titel/-Beschreibung aus dem früheren TR-SEO-Text).
- Neue Funktionsseite mit gleichem Layout: Content-Ordner anlegen, `<X>Page.tsx` mit
  `FeaturePage` bauen, DE- und [market]-Route umstellen. HTML der DE-Seite vorher/nachher per curl
  vergleichen (für die drei Seiten: Markup + JSON-LD identisch).

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
   14 Tage Test (wie alle Märkte), ₺1.490/₺1.990 (jährlich ₺16.100/₺21.500), kein Treatflow Pay.
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
- Funktions-Bausteine sprachfähig (`feature-common`), Terminkalender, Online-Buchungen und
  Kundenverwaltung in allen 8 Sprachen auf dem DE-Layout (alte `FeaturePageEn`-Nutzung für diese
  drei Routen und die TR-`TrMoneyPage` für Buchung/Kundenverwaltung ersetzt).
- Gutscheine: `app/[market]/vouchers` → 404 für alle Sprachen, `seoPageSlugs.vouchers` nur DE
  (kein hreflang/Sitemap mehr), robots `/*/vouchers`.
- Phase-1-Seiten in allen Sprachen auf dem DE-Layout: Funktionen, Preise (TR `app/tr/fiyatlar`),
  Formulare, Behandlungsdokumentation, Nachrichten (außerhalb DE nur E-Mail), Integrationen
  (außerhalb DE Google, Zapier, KI-Assistenten, Treatflow Pay), Shop, Studio-Website.
  Neu: Kunden-Workflows (`client-workflows`, TR `musteri-otomasyonlari`, nl `klantworkflows`,
  it `flussi-clienti`, pl `automatyzacje-dla-klientow`, es `flujos-clientes`, fr `parcours-clients`)
  und Treatflow Pay (`treatflow-pay`, nicht tr). Entfernt: `FeaturesPageEn.tsx`, `PricingPageIntl.tsx`.
- Funktionen live testen (`try-features`): `app/site/pages/TryFeaturesPage.tsx` + `app/site/content/try-features/*`,
  Live-Demo-Komponenten (`app/components/live-demo/*`) nehmen Texte per Prop (Default Deutsch). Slugs: en `try-features`,
  tr `canli-demo` (`app/tr/canli-demo`), nl `functies-live-testen`, it `prova-funzioni-dal-vivo`, pl `wyprobuj-funkcje`,
  es `probar-funciones`, fr `tester-les-fonctionnalites`. Formular-Sektion nur de/en/tr (es gibt `try-forms`), außerhalb DE
  keine WhatsApp-Zeile. Offen: Demo-Endpunkt `/api/public/demo-dictation` der App antwortet immer deutsch – die Website
  schickt außerhalb DE `locale` mit, die App muss das noch auswerten.

## Offene Punkte für die nächsten Agents

### Seiten, die auf DE verlinkt sind, aber in [market] fehlen (Links derzeit ausgeblendet)

| Key (`site-pages.ts`) | DE-Quelle | Ziel | Hinweis |
| --- | --- | --- | --- |
| `foot-care-software` | `app/(de)/fusspflege-software` | `app/[market]/foot-care-software` | Branchen-Menü + Footer |
| `imprint` | `app/(de)/impressum` | `app/[market]/imprint` | rechtlich prüfen: evtl. auf DE-Impressum verlinken |
| `news` | – | nl/it/pl/es/fr/tr | gibt es nur für en (bewusst) |
| `try-forms` | `app/(de)/formulare-testen` | nl/it/pl/es/fr | existiert nur en/tr |

### Phase 2 (noch offen)

Branchen-, Vergleichs- und Info-Seiten (about, contact, terms, news, blog) nutzen noch die alten
Market-Inhalte (`FeaturePageEn`, `market-content.ts`, `extra-feature-pages-*.ts`) und nennen außerhalb
DE teils WhatsApp/NiSV. Danach können die alten Market-Inhalte und `PricingSectionIntl` weg.

### Sonstiges / bekannt

- `bookingPage`/`crmPage` in `app/i18n/tr-seo/money-pages.ts` sind ungenutzt (TR-Seiten rendern jetzt
  `FeaturePage`); die anderen TR-Money-Pages nennen teils noch „WhatsApp ve e-posta“ – prüfen.
- Treatflow-Pay-Gebühr (2,69 %) wird für alle Pay-Märkte übernommen – prüfen, ob außerhalb DACH gleich.
- Übersetzungen der drei Funktionsseiten von Muttersprachlern gegenlesen, u. a. Raum-Begriffe
  („cabine“/„cabinas“/„cabines“/„gabinety“), PL „gabinety“ kollidiert mit „gabinet medycyny estetycznej“;
  TR-Aussage „KVKK ve GDPR uyumlu“ rechtlich bestätigen.

- Hero-Bild `hero-startseite-en.png` zeigt evtl. Kassen-UI – für Nicht-DE ggf. neues Bild.
- „Referenzen“-Link (`/#testimonials`) zielt auch auf DE ins Leere (kein `id="testimonials"` auf
  der Startseite) – schon vor diesem Branch so; parität beibehalten.
- Nach dem Umbau ungenutzt (können weg, wenn niemand sie braucht): `ChallengeSelector`,
  `ComparisonTable`, `BenefitStats`; `HomePageIntl` wird nur noch für Typen
  (`app/i18n/locales/types.ts`, `markets/country-homes.ts`, `markets/home-pages.ts`) gebraucht –
  die alten Home-Inhalte dort sind jetzt tot und können mit aufgeräumt werden.
- TR-Meta-Beschreibung nennt „İlk 100 işletmeye lansman fiyatları“ – prüfen, ob noch aktuell.
- Formulierungen der Übersetzungen (z. B. FR „lapins“ für No-Shows, NL „Colofon“ für Impressum)
  sollten Muttersprachler einmal gegenlesen.
- Offene Fragen aus Phase 1: Studio-Website-Preis (ab 1.000 €, 200 € Guthaben) auch für TR/PL?
  MCP im FAQ „im Booking-Plan enthalten“ korrekt? „E-Mail-Erinnerungen unbegrenzt in allen Plänen“
  für alle Märkte? Außerhalb DE weiche Rechtsaussagen in Formular-/Doku-FAQs juristisch prüfen.
- Bilder mit deutscher Oberfläche (z. B. `formulare-marketplace.png`, `og-website-service.jpg`).
