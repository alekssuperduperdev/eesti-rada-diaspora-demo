import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('styles.css defines required brand tokens', () => {
  const css = readFileSync('assets/css/styles.css', 'utf8');
  assert.match(css, /--color-bg:\s*#f[0-9a-f]{5}/i);
  assert.match(css, /--color-text:\s*#1[0-9a-f]{5}/i);
  assert.match(css, /--color-accent:\s*#0[0-9a-f]{5}/i);
  assert.match(css, /\.site-header/);
  assert.match(css, /\.rubric-grid/);
  assert.match(css, /@media\s*\(max-width:\s*900px\)/i);
});