import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const pages = ['index.html', 'artikkel.html', 'rubriigid.html', 'kogukond.html'];

for (const page of pages) {
  test(`${page} exists`, () => assert.equal(existsSync(page), true));
}

test('all nav links point to existing html files', () => {
  for (const page of pages) {
    const html = readFileSync(page, 'utf8');
    const hrefs = [...html.matchAll(/href="([^"]+\.html)"/g)].map((m) => m[1]);
    for (const href of hrefs) {
      assert.equal(existsSync(href), true, `${page} -> missing ${href}`);
    }
  }
});