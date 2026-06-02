const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF(htmlPath, outputPath) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' }
    });
    
    await browser.close();
    console.log(`PDF created: ${outputPath}`);
}

const htmlPath = path.join(__dirname, '../pdf-templates/anamnesebogen-kosmetik-einwilligung.html');
const outputPath = path.join(__dirname, '../public/downloads/anamnesebogen-kosmetik-einwilligung.pdf');

generatePDF(htmlPath, outputPath);
