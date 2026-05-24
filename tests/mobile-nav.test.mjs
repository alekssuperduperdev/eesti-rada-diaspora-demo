import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('main.js contains mobile nav toggle hooks', () => {
  const js = readFileSync('assets/js/main.js', 'utf8');
  assert.match(js, /data-nav-toggle/);
  assert.match(js, /aria-expanded/);
});