import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const expectations = {
  'index.html': [/Leitstory/i, /Aktuell|Aktuaalne/i],
  'artikkel.html': [/Byline|Autor/i, /Loe edasi|Weiterlesen/i],
  'rubriigid.html': [/Kultuur/i, /Ajalugu/i],
  'kogukond.html': [/Saada lugu/i, /Kontakt/i]
};

for (const [page, patterns] of Object.entries(expectations)) {
  test(`${page} has required content sections`, () => {
    const html = readFileSync(page, 'utf8');
    for (const pattern of patterns) assert.match(html, pattern);
  });
}