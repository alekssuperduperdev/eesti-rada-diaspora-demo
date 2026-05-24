import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const pages = ['index.html', 'artikkel.html', 'rubriigid.html', 'kogukond.html'];

for (const page of pages) {
  test(`${page} has required shell tags`, () => {
    const html = readFileSync(page, 'utf8');
    assert.match(html, /<header[\s>]/i);
    assert.match(html, /<main[\s>]/i);
    assert.match(html, /<footer[\s>]/i);
    assert.match(html, /assets\/css\/styles\.css/);
    assert.match(html, /assets\/js\/main\.js/);
  });
}
