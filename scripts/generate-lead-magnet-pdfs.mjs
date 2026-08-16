import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.join(__dirname, '..', 'pdf-templates');
const outputDir = path.join(__dirname, '..', 'public', 'downloads');
const css = fs.readFileSync(path.join(templatesDir, 'lead-magnet-base.css'), 'utf8');

const files = [
    'nisv-checkliste-kosmetikstudio',
    'kundenkartei-vorlage-kosmetikstudio',
    'no-show-playbook-kosmetikstudio',
    'preisliste-vorlage-kosmetikstudio',
];

async function generate() {
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

    fs.mkdirSync(outputDir, { recursive: true });
    const browser = await puppeteer.launch(launchOptions);

    for (const name of files) {
        const htmlPath = path.join(templatesDir, `${name}.html`);
        const outputPath = path.join(outputDir, `${name}.pdf`);
        const html = fs.readFileSync(htmlPath, 'utf8').replace('/* BASE_CSS */', css);
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '0', right: '0', bottom: '0', left: '0' },
        });
        await page.close();
    }

    await browser.close();
}

generate().catch((error) => {
    process.exitCode = 1;
    throw error;
});
