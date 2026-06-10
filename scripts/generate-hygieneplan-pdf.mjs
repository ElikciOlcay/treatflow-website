import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, '..', 'pdf-templates', 'hygieneplan-kosmetikstudio.html');
const outputPath = path.join(__dirname, '..', 'public', 'downloads', 'hygieneplan-kosmetikstudio.pdf');

async function generateHygieneplanPdf() {
    const chromePaths = [
        process.env.PUPPETEER_EXECUTABLE_PATH,
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/Applications/Chromium.app/Contents/MacOS/Chromium',
    ].filter(Boolean);

    const launchOptions = {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    };

    for (const executablePath of chromePaths) {
        if (fs.existsSync(executablePath)) {
            launchOptions.executablePath = executablePath;
            break;
        }
    }

    const browser = await puppeteer.launch(launchOptions);

    const page = await browser.newPage();
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    await browser.close();
    console.log(`PDF erstellt: ${outputPath}`);
}

generateHygieneplanPdf().catch((err) => {
    console.error('PDF-Generierung fehlgeschlagen:', err);
    process.exit(1);
});
