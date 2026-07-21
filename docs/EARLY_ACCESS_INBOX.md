# Early Access – Inbox & Antwort-Templates

## Wohin gehen Anfragen?

| Schritt | Detail |
|--------|--------|
| Formular | `/en/early-access`, `/es/acceso-anticipado`, `/it/accesso-anticipato`, `/fr/acces-anticipe` |
| API | `POST /api/demo-anfrage` |
| Versand | Loops Transactional `cmq71868404s90jzcegofv056` („Demo-Anfrage Benachrichtigung“) |
| Empfänger | `olcay.elikci@treatflow.io` |
| Lead-Kennung | `leadSource` z. B. `Early Access EN` / `ES` / `IT` / `FR` |
| Extra-Info | Feld `wunsch` enthält `Early Access \| locale=… \| country=…` |

Öffentliche Absenderadresse für Antworten an Studios: **hello@treatflow.io** (oder persönlich von Olcay, Reply-To auf hello).

## Wer antwortet?

- Primär: Olcay (Inbox der Loops-Benachrichtigung)
- Ziel-SLA: innerhalb von **1–2 Werktagen**
- Kein Self-Serve-Account anlegen, bevor der Markt freigeschaltet ist
- Bei DACH-Anfragen über Early Access: auf normale Registrierung / Demo hinweisen

## Antwort-Templates

Betreff jeweils anpassen: `Treatflow early access – {Studio}` (bzw. lokale Variante).

### EN

```
Hi {Name},

thanks for your interest in Treatflow for {Studio} ({Country}).

Self-serve signup is currently available in Germany, Austria and Switzerland. For other countries we are collecting early-access requests and onboarding studios step by step.

I have your request and will follow up with next steps for your market. If helpful, reply with:
- studio size (solo / team)
- which tools you use today (booking, client records, forms)
- when you would like to start

Best regards,
Olcay
Treatflow
hello@treatflow.io
```

### ES

```
Hola {Name},

gracias por tu interés en Treatflow para {Studio} ({Country}).

El registro directo está disponible actualmente en Alemania, Austria y Suiza. En otros países recopilamos solicitudes de acceso anticipado y activamos estudios paso a paso.

He recibido tu solicitud y te escribiré con los siguientes pasos. Si quieres, responde con:
- tamaño del salón (individual / equipo)
- herramientas que usas hoy (reservas, fichas, formularios)
- cuándo te gustaría empezar

Un saludo,
Olcay
Treatflow
hello@treatflow.io
```

### IT

```
Ciao {Name},

grazie per l'interesse in Treatflow per {Studio} ({Country}).

La registrazione diretta è al momento disponibile in Germania, Austria e Svizzera. Negli altri Paesi raccogliamo le richieste di accesso anticipato e attiviamo i centri passo dopo passo.

Ho ricevuto la tua richiesta e ti scriverò con i prossimi passi. Se vuoi, rispondi con:
- dimensione del centro (solo / team)
- strumenti che usi oggi (prenotazioni, schede, moduli)
- quando vorresti iniziare

Cordiali saluti,
Olcay
Treatflow
hello@treatflow.io
```

### FR

```
Bonjour {Name},

merci pour votre intérêt pour Treatflow concernant {Studio} ({Country}).

L'inscription en libre-service est actuellement disponible en Allemagne, Autriche et Suisse. Pour les autres pays, nous collectons les demandes d'accès anticipé et accompagnons les instituts progressivement.

J'ai bien reçu votre demande et je vous recontacterai avec la suite. Si vous le souhaitez, répondez avec :
- taille de l'institut (solo / équipe)
- outils utilisés aujourd'hui (réservation, fiches, formulaires)
- date de démarrage souhaitée

Cordialement,
Olcay
Treatflow
hello@treatflow.io
```

## Ablehnung / Warteliste (kurz)

Wenn noch kein Onboarding möglich ist: Template oben nutzen und klar sagen, dass sie auf der Liste stehen und bei Marktöffnung kontaktiert werden. Keine falsche Erwartung auf sofortigen Account.
