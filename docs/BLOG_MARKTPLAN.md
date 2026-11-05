# Blog-Marktplan (länderspezifische Artikel)

Ergänzt `BLOG_REDAKTIONSPLAN.md`. Dort erscheint jedes Thema in allen 8 Sprachen.
Hier stehen Themen, die nur **in einer Sprache** erscheinen und auf lokale Suchbegriffe
des jeweiligen Marktes zielen (was dort wirklich gesucht wird, nicht eine Übersetzung).

Die Freitags-Routine nimmt die **erste Zeile mit Status `offen`**, schreibt den Artikel
nur in der Sprache aus Spalte `Lang`, setzt den Status auf `live (JJJJ-MM-TT)` und merged.

Regeln:
- Im Topic-Eintrag (`lib/blog-intl/topics.ts`) `markets: ["<lang>"]` setzen.
- Keine DACH-only-Funktionen: Kasse/POS, Treatflow Pay, TSE, RKSV, NiSV, WhatsApp-Versand, Gutscheine, Buchhaltung.
  Erinnerungen außerhalb von DACH laufen per E-Mail.
- Rechtliches (Gewerbe, Genehmigungen, Datenschutz, Medizinrecht) nur allgemein und mit dem Hinweis,
  die zuständige Behörde zu fragen. Keine erfundenen Paragraphen, Gebühren oder Fristen.
- Keine Konkurrenten namentlich schlechtmachen. Vergleiche nur nach Kriterien.
- Bilder: nur vorhandene Dateien aus `public/images/blog/`, `public/images/lifestyle/` oder `public/images/branchen/`.
- Neue Zeilen dürfen unten angehängt werden; Märkte abwechseln.

| # | Status | Lang | Themen-ID | Arbeitstitel | Fokus-Suchbegriff (Landessprache) | pageKeys | Bild |
|---|--------|------|-----------|--------------|-----------------------------------|----------|------|
| 1 | offen | tr | tr-appointment-book-vs-software | Randevu defteri und Excel vs. Programm | randevu takip programı, güzellik salonu randevu programı | appointment-calendar, online-booking, client-records | /images/lifestyle/online-buchung-smartphone.png |
| 2 | offen | pl | pl-booking-without-commission | Online-Buchung ohne Provision für Salons | program do salonu kosmetycznego, rezerwacje online bez prowizji | online-booking, pricing, appointment-calendar | /images/blog/online-buchung-vorteile.jpg |
| 3 | offen | it | it-beauty-centre-management-software | Gestionale fürs Kosmetikinstitut: worauf achten | gestionale centro estetico, programma gestione centro estetico | beauty-salon-software, features, pricing | /images/blog/beste-kosmetikstudio-software-2026.jpg |
| 4 | offen | es | es-online-agenda-beauty-centre | Online-Agenda fürs Kosmetikzentrum | agenda online centro de estética, programa de citas estética | appointment-calendar, online-booking, client-records | /images/blog/terminkalender.png |
| 5 | offen | fr | fr-client-record-beauty-institute | Fiche cliente im Institut digital führen | fiche cliente institut de beauté, fiche technique esthétique | client-records, forms, treatment-documentation | /images/lifestyle/dokumentation-waehrend-behandlung.png |
| 6 | offen | nl | nl-digital-client-card-salon | Digitale Klantenkaart im Salon | klantenkaart schoonheidssalon, klantenkaart schoonheidsspecialiste | client-records, forms, treatment-documentation | /images/lifestyle/dokumentation-waehrend-behandlung.png |
| 7 | offen | en | en-patch-test-records | Patch-Tests dokumentieren (Lash, Brow, Tint) | patch test record form salon, lash patch test | forms, treatment-documentation, lash-studio-software | /images/blog/anamnesebogen-kosmetikstudio.jpg |
| 8 | offen | tr | tr-laser-session-tracking | Lazer-Epilasyon: Seans-Takip | lazer epilasyon seans takibi, lazer merkezi programı | laser-hair-removal-software, treatment-documentation, appointment-calendar | /images/lifestyle/laser-studio-beratung.png |
| 9 | offen | pl | pl-client-card-gdpr | Karta klienta zgodnie z RODO | karta klienta salon kosmetyczny, karta klienta RODO | client-records, forms, treatment-documentation | /images/blog/dsgvo-kosmetikstudio.jpg |
| 10 | offen | it | it-informed-consent-aesthetic-treatments | Consenso informato in der Ästhetik | consenso informato trattamenti estetici, modulo consenso estetista | forms, treatment-documentation, aesthetic-clinic-software | /images/lifestyle/aesthetik-medizin-beratung.png |
| 11 | offen | es | es-informed-consent-aesthetics | Consentimiento informado in der Ästhetik | consentimiento informado estética, ficha de cliente estética | forms, treatment-documentation, client-records | /images/lifestyle/aesthetik-medizin-beratung.png |
| 12 | offen | fr | fr-online-booking-institute-no-commission | Online-Termine fürs Institut ohne Provision | prise de rendez-vous en ligne institut de beauté, agenda en ligne esthéticienne | online-booking, appointment-calendar, pricing | /images/blog/online-buchung-vorteile.jpg |
| 13 | offen | nl | nl-self-employed-beautician-admin | Selbstständige Schoonheidsspecialiste: Termine und Kartei im Griff | zzp schoonheidsspecialiste, afsprakenplanner schoonheidssalon | appointment-calendar, online-booking, client-records | /images/blog/wochenplanung-termine.jpg |
| 14 | offen | en | en-room-rental-beauty-therapist | Selbstständig im gemieteten Behandlungsraum (UK/IE) | renting a beauty room, self-employed beauty therapist | appointment-calendar, online-booking, pricing | /images/blog/behandlungsraum-einrichten.jpg |
| 15 | offen | tr | tr-instagram-to-bookings | Von Instagram-DMs zu festen Terminen | instagram'dan randevu, güzellik salonu instagram | online-booking, studio-website, appointment-calendar | /images/blog/social-media-marketing.jpg |
| 16 | offen | pl | pl-cosmetology-practice-booking | Kosmetologie-Praxis: Termine und Doku | gabinet kosmetologiczny program, dokumentacja zabiegów kosmetologicznych | treatment-documentation, appointment-calendar, forms | /images/lifestyle/dokumentation-waehrend-behandlung.png |
| 17 | offen | it | it-online-booking-beauty-centre | Prenotazioni online fürs Centro estetico | prenotazione online centro estetico, agenda appuntamenti estetista | online-booking, appointment-calendar, messaging | /images/blog/terminkalender.png |
| 18 | offen | es | es-reduce-no-shows-reminders | Ausfälle senken mit Erinnerungen (ES) | recordatorio de citas centro de estética, clientes que no se presentan | messaging, online-booking, appointment-calendar | /images/blog/no-shows-reduzieren.jpg |
| 19 | offen | fr | fr-consent-form-aesthetics | Fiche de consentement in der Ästhetik | fiche de consentement esthétique, questionnaire santé institut | forms, treatment-documentation, client-records | /images/blog/anamnesebogen-kosmetikstudio.jpg |
| 20 | offen | nl | nl-intake-form-salon | Intakeformulier digital | intakeformulier schoonheidssalon, intakeformulier huidbehandeling | forms, client-records, treatment-documentation | /images/blog/anamnesebogen-kosmetikstudio.jpg |
| 21 | offen | en | en-aesthetics-consultation-records | Beratung und Doku in der Ästhetik-Klinik (UK) | aesthetics consultation form, aesthetic clinic record keeping | aesthetic-clinic-software, forms, treatment-documentation | /images/lifestyle/aesthetik-medizin-beratung.png |
