import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '..', 'public', 'downloads', 'hygieneplan-kosmetikstudio.pdf');

const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 60, bottom: 60, left: 50, right: 50 },
    info: {
        Title: 'Hygieneplan Kosmetikstudio – Vorlage',
        Author: 'Treatflow',
        Subject: 'Hygieneplan Vorlage fuer Kosmetikstudios, Nagelstudios und Beauty-Studios',
    },
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const blue = '#2563EB';
const darkGray = '#1F2937';
const mediumGray = '#4B5563';
const lightGray = '#F3F4F6';
const white = '#FFFFFF';

const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

function drawHeader() {
    doc.rect(0, 0, doc.page.width, 120).fill(blue);
    doc.fontSize(24).fill(white).font('Helvetica-Bold')
        .text('Hygieneplan', 50, 35, { align: 'left' });
    doc.fontSize(13).fill(white).font('Helvetica')
        .text('Vorlage fuer Kosmetikstudios, Nagelstudios und Beauty-Studios', 50, 68, { align: 'left' });
    doc.fontSize(9).fill('#93C5FD')
        .text('Erstellt mit Treatflow – www.treatflow.io', 50, 92, { align: 'left' });
    doc.moveDown(2);
}

function sectionTitle(title) {
    doc.moveDown(0.5);
    const y = doc.y;
    doc.rect(doc.page.margins.left, y, 4, 18).fill(blue);
    doc.fontSize(14).fill(darkGray).font('Helvetica-Bold')
        .text(title, doc.page.margins.left + 14, y + 1);
    doc.moveDown(0.7);
}

function bodyText(text) {
    doc.fontSize(10).fill(mediumGray).font('Helvetica')
        .text(text, { lineGap: 3 });
    doc.moveDown(0.3);
}

function bulletPoint(text) {
    const x = doc.page.margins.left;
    const y = doc.y;
    doc.fontSize(10).fill(blue).font('Helvetica-Bold')
        .text('•', x, y);
    doc.fontSize(10).fill(mediumGray).font('Helvetica')
        .text(text, x + 14, y, { lineGap: 2 });
    doc.moveDown(0.15);
}

function tableHeader(cols) {
    const y = doc.y;
    doc.rect(doc.page.margins.left, y, pageWidth, 22).fill(blue);
    let xPos = doc.page.margins.left + 8;
    cols.forEach((col) => {
        doc.fontSize(9).fill(white).font('Helvetica-Bold')
            .text(col.label, xPos, y + 6, { width: col.width - 16 });
        xPos += col.width;
    });
    doc.y = y + 22;
}

function tableRow(cols, values, isAlt) {
    const y = doc.y;
    const rowHeight = 20;
    if (isAlt) {
        doc.rect(doc.page.margins.left, y, pageWidth, rowHeight).fill(lightGray);
    }
    let xPos = doc.page.margins.left + 8;
    values.forEach((val, i) => {
        doc.fontSize(9).fill(mediumGray).font('Helvetica')
            .text(val, xPos, y + 5, { width: cols[i].width - 16 });
        xPos += cols[i].width;
    });
    doc.y = y + rowHeight;
}

function checkboxLine(text) {
    const x = doc.page.margins.left;
    const y = doc.y;
    doc.rect(x, y + 1, 10, 10).lineWidth(0.8).stroke(mediumGray);
    doc.fontSize(10).fill(mediumGray).font('Helvetica')
        .text(text, x + 18, y, { lineGap: 2 });
    doc.moveDown(0.15);
}

function pageBreakIfNeeded(minSpace) {
    if (doc.y > doc.page.height - doc.page.margins.bottom - minSpace) {
        doc.addPage();
    }
}

// =============================================
// SEITE 1: Deckblatt + Studio-Informationen
// =============================================

drawHeader();
doc.y = 145;

sectionTitle('Angaben zum Studio');
bodyText('Bitte fuellen Sie die folgenden Angaben vollstaendig aus:');
doc.moveDown(0.3);

const fields = [
    'Name des Studios:',
    'Inhaber:in / Verantwortliche:r:',
    'Adresse:',
    'Telefon / E-Mail:',
    'Zustaendiges Gesundheitsamt:',
    'Erstellt am:',
    'Letzte Aktualisierung:',
    'Version:',
];

fields.forEach((field) => {
    const y = doc.y;
    doc.fontSize(10).fill(darkGray).font('Helvetica-Bold')
        .text(field, doc.page.margins.left, y, { continued: false });
    const lineY = y + 14;
    doc.moveTo(doc.page.margins.left + 180, lineY)
        .lineTo(doc.page.margins.left + pageWidth, lineY)
        .lineWidth(0.5).stroke('#D1D5DB');
    doc.y = lineY + 10;
});

doc.moveDown(1);
sectionTitle('Geltungsbereich');
bodyText(
    'Dieser Hygieneplan gilt fuer alle Raeumlichkeiten, Behandlungen und Mitarbeiter:innen des oben genannten Studios. ' +
    'Er regelt die Durchfuehrung und Dokumentation aller hygienerelevanten Massnahmen und ist fuer alle Mitarbeiter:innen verbindlich.'
);

doc.moveDown(0.5);
bodyText('Dieser Hygieneplan umfasst insbesondere:');
[
    'Alle Behandlungsraeume und Arbeitsbereiche',
    'Empfangs- und Wartebereich',
    'Sanitaeranlagen und Personalraeume',
    'Lager- und Aufbereitungsraeume',
    'Alle fest angestellten und freien Mitarbeiter:innen',
].forEach(bulletPoint);

// =============================================
// SEITE 2: Reinigungs- und Desinfektionsplan
// =============================================

doc.addPage();

sectionTitle('Reinigungs- und Desinfektionsplan');
bodyText(
    'Der folgende Plan legt fest, welche Bereiche und Gegenstaende wann, wie und von wem gereinigt und desinfiziert werden muessen.'
);
doc.moveDown(0.3);

const cols = [
    { label: 'Was', width: pageWidth * 0.25 },
    { label: 'Wann', width: pageWidth * 0.2 },
    { label: 'Wie / Womit', width: pageWidth * 0.3 },
    { label: 'Wer', width: pageWidth * 0.25 },
];

tableHeader(cols);

const rows = [
    ['Behandlungsliege', 'Nach jedem Kunden', 'Flaechendesinfektion (VAH-gelistet)', 'Behandler:in'],
    ['Arbeitsinstrumente', 'Nach jedem Kunden', 'Desinfektion + ggf. Sterilisation', 'Behandler:in'],
    ['Arbeitsflaechen', 'Nach jedem Kunden', 'Wischdesinfektion', 'Behandler:in'],
    ['Fussboden Behandlung', 'Taeglich', 'Feuchtreinigung mit Reiniger', 'Reinigungskraft'],
    ['Sanitaeranlagen', 'Taeglich', 'Reinigung + Desinfektion', 'Reinigungskraft'],
    ['Tuergriffe / Schalter', 'Mehrmals taeglich', 'Wischdesinfektion', 'Alle'],
    ['Empfangsbereich', 'Taeglich', 'Feuchtreinigung', 'Reinigungskraft'],
    ['Waschbecken', 'Taeglich', 'Reinigung + Desinfektion', 'Reinigungskraft'],
    ['Handtuecher / Bezuege', 'Nach jedem Kunden', '60°C Waesche', 'Zustaendige:r'],
    ['Abfallbehaelter', 'Taeglich / bei Bedarf', 'Entleerung + Reinigung', 'Reinigungskraft'],
];

rows.forEach((row, i) => tableRow(cols, row, i % 2 === 1));

doc.moveDown(1);
sectionTitle('Verwendete Desinfektionsmittel');
bodyText('Bitte hier die im Studio verwendeten Desinfektionsmittel eintragen (nur VAH-gelistete Mittel verwenden):');
doc.moveDown(0.3);

const dCols = [
    { label: 'Produkt', width: pageWidth * 0.3 },
    { label: 'Einsatzbereich', width: pageWidth * 0.25 },
    { label: 'Konzentration', width: pageWidth * 0.2 },
    { label: 'Einwirkzeit', width: pageWidth * 0.25 },
];

tableHeader(dCols);

for (let i = 0; i < 5; i++) {
    tableRow(dCols, ['', '', '', ''], i % 2 === 1);
}

// =============================================
// SEITE 3: Instrumentenaufbereitung + Haendehygiene
// =============================================

doc.addPage();

sectionTitle('Instrumentenaufbereitung');
bodyText(
    'Alle wiederverwendbaren Instrumente muessen nach jeder Anwendung aufbereitet werden. ' +
    'Die Aufbereitung erfolgt in folgenden Schritten:'
);
doc.moveDown(0.3);

const steps = [
    '1. Grobe Reinigung – Entfernung sichtbarer Verschmutzungen direkt nach Gebrauch',
    '2. Desinfektion – Einlegen in Desinfektionsloesung (VAH-gelistet, vorgeschriebene Einwirkzeit beachten)',
    '3. Spuelung – Gruendliches Abspuelen unter fliessendem Wasser',
    '4. Trocknung – Vollstaendige Trocknung vor Lagerung oder Sterilisation',
    '5. Sterilisation (falls erforderlich) – Im Autoklaven gemaess Herstellerangaben',
    '6. Verpackung / Lagerung – Staubfrei und geschuetzt aufbewahren',
];

steps.forEach((s) => {
    doc.fontSize(10).fill(mediumGray).font('Helvetica').text(s, { lineGap: 2 });
    doc.moveDown(0.15);
});

doc.moveDown(0.5);
bodyText('Einmalinstrumente und Einmalmaterialien werden nach einmaligem Gebrauch entsorgt und duerfen nicht wiederverwendet werden.');

doc.moveDown(1);
sectionTitle('Haendehygiene');
bodyText('Die Haendehygiene ist eine der wichtigsten Massnahmen zur Infektionspraevention:');
doc.moveDown(0.3);

[
    'Haendedesinfektion vor und nach jeder Behandlung',
    'Haendedesinfektion nach dem Ausziehen von Handschuhen',
    'Haendewaschen bei sichtbarer Verschmutzung',
    'Verwendung von Einmalhandschuhen bei invasiven Taetigkeiten',
    'Hautpflegemittel zur Pflege beanspruchter Haut bereitstellen',
    'Desinfektionsmittelspender an jedem Arbeitsplatz und im Eingangsbereich',
].forEach(bulletPoint);

doc.moveDown(1);
sectionTitle('Persoenliche Schutzausruestung');
bodyText('Folgende Schutzausruestung ist je nach Behandlung bereitzuhalten und zu verwenden:');
doc.moveDown(0.3);
[
    'Einmalhandschuhe (bei Hautkontakt, invasiven Behandlungen)',
    'Mundschutz (bei Staub- oder Aerosolbildung, z. B. Nagelfraeser)',
    'Schutzbrille (bei Laser- oder IPL-Behandlungen)',
    'Arbeitskleidung (taeglich wechseln, 60°C waschbar)',
].forEach(bulletPoint);

// =============================================
// SEITE 4: Abfall + Schulung + Dokumentation
// =============================================

doc.addPage();

sectionTitle('Abfallentsorgung');
bodyText('Die sachgerechte Entsorgung von Abfaellen ist Teil des Hygieneplans:');
doc.moveDown(0.3);

[
    'Normale Abfaelle (Verpackungen, Papier) – Hausmuell',
    'Kontaminierte Einmalmaterialien (Tupfer, Handschuhe) – gesonderte Entsorgung',
    'Spitze / scharfe Gegenstaende (Nadeln, Klingen) – durchstichsichere Behaelter',
    'Desinfektionsmittelreste – gemaess Herstellerangaben entsorgen',
    'Abfallbehaelter taeglich leeren und bei Bedarf desinfizieren',
].forEach(bulletPoint);

doc.moveDown(1);
sectionTitle('Schulung und Unterweisung');
bodyText(
    'Alle Mitarbeiter:innen muessen regelmaessig ueber die Inhalte dieses Hygieneplans unterwiesen werden. ' +
    'Schulungen sind zu dokumentieren.'
);
doc.moveDown(0.3);

[
    'Erstunterweisung vor Arbeitsbeginn (fuer neue Mitarbeiter:innen)',
    'Jaehrliche Auffrischungsschulung fuer das gesamte Team',
    'Anlassbezogene Schulung bei Aenderungen im Hygieneplan',
    'Dokumentation: Datum, Inhalte, Teilnehmerliste, Unterschriften',
].forEach(bulletPoint);

doc.moveDown(1);
sectionTitle('Dokumentation');
bodyText('Folgende Nachweise sollten lueckenlos gefuehrt und aufbewahrt werden:');
doc.moveDown(0.3);

[
    'Reinigungs- und Desinfektionsprotokolle',
    'Schulungsnachweise mit Unterschriften',
    'Aufbereitungsprotokolle fuer Instrumente',
    'Wartungsprotokolle fuer Geraete (Autoklav, Staubabsaugung etc.)',
    'Chargennachweise fuer Sterilisation',
    'Aktualisierungsprotokoll fuer den Hygieneplan',
].forEach(bulletPoint);

// =============================================
// SEITE 5: Checklisten
// =============================================

doc.addPage();

sectionTitle('Taegliche Checkliste');
bodyText('Folgende Punkte sollten taeglich geprueft und dokumentiert werden:');
doc.moveDown(0.3);

[
    'Alle Arbeitsflaechen desinfiziert',
    'Instrumente aufbereitet und einsatzbereit',
    'Desinfektionsmittelspender gefuellt',
    'Handtuecher und Einmalmaterialien aufgefuellt',
    'Sanitaeranlagen gereinigt',
    'Abfallbehaelter geleert',
    'Fussboeden feucht gereinigt',
    'Behandlungsliegen geprueft und desinfiziert',
].forEach(checkboxLine);

doc.moveDown(1);
sectionTitle('Woechentliche Checkliste');
bodyText('Folgende Punkte sollten woechentlich geprueft werden:');
doc.moveDown(0.3);

[
    'Bestandskontrolle Desinfektionsmittel und Verbrauchsmaterial',
    'Tiefenreinigung aller Behandlungsraeume',
    'Pruefung und Reinigung der Staubabsaugung',
    'Kuehlschrank-Temperaturkontrolle (falls Produkte gekuehlt werden)',
    'Waesche- und Textilbestand pruefen',
].forEach(checkboxLine);

doc.moveDown(1);
sectionTitle('Monatliche / Jaehrliche Pruefung');
doc.moveDown(0.3);

[
    'Hygieneplan auf Aktualitaet pruefen und ggf. aktualisieren',
    'Wartung und Pruefung technischer Geraete',
    'Ueberblick ueber Schulungsnachweise',
    'Nachbestellung von Desinfektionsmitteln und Material',
    'Vorbereitung auf moegliche Begehungen durch das Gesundheitsamt',
].forEach(checkboxLine);

// =============================================
// SEITE 6: Schulungsnachweis + Unterschriften
// =============================================

doc.addPage();

sectionTitle('Schulungsnachweis');
bodyText('Bitte fuer jede durchgefuehrte Schulung eine Zeile ausfuellen:');
doc.moveDown(0.3);

const sCols = [
    { label: 'Datum', width: pageWidth * 0.15 },
    { label: 'Thema', width: pageWidth * 0.35 },
    { label: 'Teilnehmer:in', width: pageWidth * 0.25 },
    { label: 'Unterschrift', width: pageWidth * 0.25 },
];

tableHeader(sCols);
for (let i = 0; i < 10; i++) {
    tableRow(sCols, ['', '', '', ''], i % 2 === 1);
}

doc.moveDown(1.5);
sectionTitle('Bestaetigung und Unterschrift');
bodyText(
    'Hiermit bestaetigen die Unterzeichnenden, dass sie den Inhalt dieses Hygieneplans ' +
    'zur Kenntnis genommen haben und sich zur Einhaltung verpflichten.'
);
doc.moveDown(1);

for (let i = 0; i < 4; i++) {
    const y = doc.y;
    doc.moveTo(doc.page.margins.left, y + 30)
        .lineTo(doc.page.margins.left + 200, y + 30)
        .lineWidth(0.5).stroke('#D1D5DB');
    doc.moveTo(doc.page.margins.left + 260, y + 30)
        .lineTo(doc.page.margins.left + pageWidth, y + 30)
        .lineWidth(0.5).stroke('#D1D5DB');
    doc.fontSize(8).fill('#9CA3AF').font('Helvetica')
        .text('Name, Datum', doc.page.margins.left, y + 34)
        .text('Unterschrift', doc.page.margins.left + 260, y + 34);
    doc.y = y + 55;
}

// =============================================
// Letzte Seite: Hinweis + Treatflow-Branding
// =============================================

pageBreakIfNeeded(200);
doc.moveDown(1);

doc.rect(doc.page.margins.left, doc.y, pageWidth, 1).fill('#E5E7EB');
doc.moveDown(1);

doc.fontSize(9).fill('#9CA3AF').font('Helvetica-Bold')
    .text('Hinweis zur Verwendung dieser Vorlage', doc.page.margins.left);
doc.moveDown(0.3);
doc.fontSize(8).fill('#9CA3AF').font('Helvetica')
    .text(
        'Diese Vorlage dient ausschliesslich als allgemeine Orientierungshilfe. Sie wurde nach bestem Wissen erstellt, ' +
        'erhebt jedoch keinen Anspruch auf Vollstaendigkeit, Aktualitaet oder rechtliche Wirksamkeit. Sie ersetzt keine ' +
        'individuelle rechtliche, medizinische oder fachliche Beratung. Wir empfehlen, den fertigen Hygieneplan durch das ' +
        'zustaendige Gesundheitsamt oder eine fachkundige Stelle pruefen zu lassen.',
        { lineGap: 2 }
    );

doc.moveDown(1.5);
doc.rect(doc.page.margins.left, doc.y, pageWidth, 60).fill(blue);
const boxY = doc.y;
doc.fontSize(12).fill(white).font('Helvetica-Bold')
    .text('Hygieneplan digital verwalten?', doc.page.margins.left + 16, boxY + 12);
doc.fontSize(9).fill('#BFDBFE').font('Helvetica')
    .text(
        'Mit Treatflow organisierst du Formulare, Dokumentation und Studioverwaltung komplett digital.',
        doc.page.margins.left + 16, boxY + 30, { width: pageWidth - 32 }
    );
doc.fontSize(9).fill('#93C5FD').font('Helvetica')
    .text('www.treatflow.io', doc.page.margins.left + 16, boxY + 44);

doc.end();

stream.on('finish', () => {
    console.log(`PDF erstellt: ${outputPath}`);
});
