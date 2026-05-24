import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

test('README includes GitHub Pages setup instructions', () => {
  assert.equal(existsSync('README.md'), true);
  const readme = readFileSync('README.md', 'utf8');
  assert.match(readme, /GitHub Pages/i);
  assert.match(readme, /Settings\s*>\s*Pages/i);
});

test('.nojekyll exists', () => {
  assert.equal(existsSync('.nojekyll'), true);
});