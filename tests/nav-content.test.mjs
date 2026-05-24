import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const pages = ['index.html', 'artikkel.html', 'rubriigid.html', 'kogukond.html'];

for (const page of pages) {
  test(`${page} includes logo and ET+DE labels`, () => {
    const html = readFileSync(page, 'utf8');
    assert.match(html, /assets\/logo\.png/);
    assert.match(html, /Avaleht\s*\/\s*Startseite/);
    assert.match(html, /Rubriigid\s*\/\s*Rubriken/);
    assert.match(html, /Kogukond\s*\/\s*Gemeinschaft/);
  });
}