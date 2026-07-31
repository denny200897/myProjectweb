import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'dist';

async function htmlFiles(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await htmlFiles(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = await htmlFiles(DIST);
const failures = [];

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const meta = html.match(/content-security-policy" content="([^"]*)"/i);
  if (!meta) {
    failures.push(`${file}：找不到 CSP meta`);
    continue;
  }
  const allowed = new Set(
    [...meta[1].matchAll(/'(sha(?:256|384|512)-[^']*)'/g)].map((m) => m[1])
  );

  for (const m of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (m[1].includes(' src=')) continue;
    const body = m[2];
    if (!body.trim()) continue;
    const hash =
      'sha256-' + createHash('sha256').update(body, 'utf8').digest('base64');
    if (!allowed.has(hash)) {
      failures.push(
        `${file}：inline script 未被 CSP 允許\n    hash: ${hash}\n    開頭: ${body.trim().slice(0, 70)}`
      );
    }
  }
}

if (failures.length) {
  console.error(`\nCSP 驗證失敗（${failures.length} 項）：\n`);
  for (const f of failures) console.error('  ' + f);
  console.error(
    '\n若是新增或修改了 is:inline script，請把上面的 hash 加進 astro.config.mjs 的 security.csp.scriptDirective.hashes。\n'
  );
  process.exit(1);
}

console.log(`CSP 驗證通過：${files.length} 個頁面的 inline script 皆被允許。`);
