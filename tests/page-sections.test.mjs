import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const expectations = {
  'index.html': [/Leitstory/i, /Aktuell|Aktuaalne/i, /Rubriikide eelvaade/i, /kogukond\.html/i],
  'artikkel.html': [/Kuupäev:/i, /Autor:/i, /Rubriik:/i, /<figure[\s>]/i, /Seotud lood/i],
  'rubriigid.html': [/Kultuur/i, /Ajalugu/i, /Ava esinduslugu/i, /Saada oma lugu/i],
  'kogukond.html': [/Saada lugu/i, /Kontakt/i, /Kogukonna ja ühingu uuendused/i, /<ul>/i]
};

for (const [page, patterns] of Object.entries(expectations)) {
  test(`${page} has required content sections`, () => {
    const html = readFileSync(page, 'utf8');
    for (const pattern of patterns) assert.match(html, pattern);
  });
}
