# Meta Conversions API Setup Guide

## 🎯 Übersicht

Die Meta Conversions API ist implementiert und bietet:
- **Server-seitige Tracking** für bessere Datenqualität
- **iOS 14.5+ Kompatibilität** durch First-Party Daten
- **Duale Tracking-Strategie** (Pixel + Conversions API)
- **Automatische Event-Deduplication**

## 🔧 Setup-Schritte

### 1. Meta Business Manager Konfiguration

1. **Access Token erstellen:**
   - Gehen Sie zu [Meta Business Manager](https://business.facebook.com)
   - System Users → Add → Erstellen Sie einen System User
   - Generate New Token → Wählen Sie Ihre App
   - Permissions: `ads_management`, `business_management`

2. **Pixel ID finden:**
   - Events Manager → Data Sources → Ihr Pixel
   - Kopieren Sie die Pixel ID (16-stellige Nummer)

3. **Test Event Code (Optional):**
   - Events Manager → Test Events → Generate Test Code

### 2. Environment Variables

Erstellen Sie eine `.env.local` Datei:

```bash
# Meta Conversions API
META_ACCESS_TOKEN=EAABwzLixnjYBO...  # Ihr Access Token
META_PIXEL_ID=1234567890123456        # Ihre Pixel ID
META_TEST_EVENT_CODE=TEST12345        # Optional für Testing
```

### 3. Pixel ID in Landing Page

Ersetzen Sie in `app/landing/dokumentation-formulare/page.tsx`:

```javascript
fbq('init', 'YOUR_PIXEL_ID'); // Replace with your actual Pixel ID
```

Mit Ihrer echten Pixel ID:

```javascript
fbq('init', '1234567890123456'); // Ihre Pixel ID
```

## 📊 Tracking Events

### Automatisch getrackte Events:

1. **PageView** - Beim Laden der Landing Page
2. **ViewContent** - Beim Abspielen des Videos
3. **InitiateCheckout** - Bei CTA-Button Klicks
4. **Lead** - Bei Formular-Submissions

### Event-Daten:

```javascript
// Lead Event Beispiel
{
  event_name: "Lead",
  user_data: {
    em: ["hashed_email"],
    ph: ["hashed_phone"],
    fn: ["hashed_first_name"],
    ln: ["hashed_last_name"]
  },
  custom_data: {
    content_name: "Dokumentation & Formulare Landing Page",
    content_category: "Lead Generation",
    value: 0,
    currency: "EUR"
  }
}
```

## 🧪 Testing

### 1. Test Events aktivieren

```bash
# In .env.local
META_TEST_EVENT_CODE=TEST12345
```

### 2. Events Manager prüfen

- Gehen Sie zu Events Manager → Test Events
- Führen Sie Aktionen auf der Landing Page aus
- Überprüfen Sie eingehende Events

### 3. API Health Check

```bash
curl http://localhost:3000/api/meta-conversion
```

Erwartete Antwort:
```json
{
  "status": "Meta Conversions API endpoint is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## 🔍 Debugging

### Browser Console

Events werden in der Browser-Konsole geloggt:
```
Meta event tracked: Lead
Lead tracked: {email: "...", phone: "..."}
```

### Server Logs

Server-seitige Logs zeigen API-Calls:
```
Sending to Meta Conversions API: {
  event_name: "Lead",
  event_id: "uuid-here",
  pixel_id: "1234567890123456"
}
```

### Häufige Probleme

1. **"Missing Meta API credentials"**
   - Überprüfen Sie `.env.local` Datei
   - Stellen Sie sicher, dass Variablen korrekt benannt sind

2. **"Failed to send event to Meta"**
   - Überprüfen Sie Access Token Permissions
   - Validieren Sie Pixel ID

3. **Events erscheinen nicht im Events Manager**
   - Warten Sie bis zu 20 Minuten für Datenverarbeitung
   - Überprüfen Sie Test Event Code

## 📈 Optimierung

### Event Matching Quality

- **Email-Adressen** haben höchste Matching-Rate
- **Telefonnummern** sollten im internationalen Format sein
- **Namen** werden automatisch gehashed

### Performance

- Events werden asynchron gesendet
- Keine Blockierung der User Experience
- Automatische Retry-Logik implementiert

## 🚀 Production Deployment

1. **Environment Variables setzen** (Vercel/Server)
2. **Test Event Code entfernen** (Production)
3. **Pixel ID aktualisieren** in Landing Page
4. **Events Manager überwachen** für Live-Events

## 📞 Support

Bei Problemen:
1. Überprüfen Sie Browser-Konsole und Server-Logs
2. Testen Sie API-Endpoint direkt
3. Validieren Sie Meta Business Manager Setup
4. Kontaktieren Sie Meta Support bei API-Problemen
