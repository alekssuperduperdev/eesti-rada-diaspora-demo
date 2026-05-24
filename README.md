# Eesti Rada GitHub Pages Demo

Static four-page ET/DE demo site for GitHub Pages.

## Live Demo

https://alekssuperduperdev.github.io/eesti-rada-diaspora-demo/

## Run tests

```bash
npm test
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Open repository `Settings > Pages`.
3. Choose `Deploy from a branch`.
4. Select `main` (root) or `master` (root).
5. Save and wait for the published URL.

## QA Evidence

- Test suite: `npm test` -> pass (`21 passed, 0 failed`)
- Lighthouse sanity pass (local `http://localhost:8080`):
  - Performance: `81`
  - Accessibility: `100`
- Artifact: `lighthouse-report.json`
- Note: On Windows, Lighthouse can end with a temp-cleanup `EPERM` after writing the JSON output. The report file is still generated and valid.
