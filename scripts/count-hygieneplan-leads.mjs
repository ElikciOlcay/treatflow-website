import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '..', '.env.local');
const envContent = readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/^LOOPS_API_KEY=(.+)$/m);
const apiKey = apiKeyMatch?.[1]?.trim();

if (!apiKey) {
  console.error('LOOPS_API_KEY nicht gefunden');
  process.exit(1);
}

const HYGIENEPLAN_MAILING_LIST_ID = 'cmq7r8nvt5uiy0jxi1atv03zb';
const LEAD_SOURCE = 'Hygieneplan Kosmetikstudio PDF';

async function loopsFetch(path) {
  const response = await fetch(`https://app.loops.so/api/v1${path}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${path} -> ${response.status}: ${text}`);
  }
  return text ? JSON.parse(text) : null;
}

async function main() {
  const [mailingLists, segments, workflows] = await Promise.all([
    loopsFetch('/lists').catch(() => loopsFetch('/mailing-lists')),
    loopsFetch('/audience-segments').catch(() => null),
    loopsFetch('/workflows').catch(() => null),
  ]);

  const hygieneList = Array.isArray(mailingLists)
    ? mailingLists.find((l) => l.id === HYGIENEPLAN_MAILING_LIST_ID || l.name?.includes('Hygieneplan'))
    : null;

  console.log(JSON.stringify({
    mailingList: hygieneList ?? null,
    audienceSegments: segments,
    workflows: Array.isArray(workflows)
      ? workflows.map((w) => ({ id: w.id, name: w.name, status: w.status }))
      : workflows,
  }, null, 2));
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
