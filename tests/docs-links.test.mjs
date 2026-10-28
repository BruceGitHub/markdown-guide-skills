import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const files = ['README.md', 'flows/README.md', 'flows/project-to-delivery.md'];

test('local markdown links resolve', () => {
  const missing = [];

  for (const file of files) {
    const raw = readFileSync(file, 'utf8');
    for (const match of raw.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const link = match[1];
      if (link.startsWith('#') || link.startsWith('http://') || link.startsWith('https://')) continue;
      if (link.includes('{{')) continue;

      const target = link.split('#', 1)[0];
      if (target && !existsSync(resolve(dirname(file), target))) {
        missing.push(`${file}: ${link}`);
      }
    }
  }

  assert.deepEqual(missing, []);
});
