# Design Spec: Eesti Rada Diaspora Web Mockup

Date: 2026-05-24
Project: Digital mockup of Estonian diaspora newspaper "Eesti Rada"
Primary audience: Estonian diaspora community
Visual direction: Hybrid (modern interface + subtle newspaper/archive cues)
Languages in UI: Estonian + German
Delivery target: Live GitHub Pages demo

## 1. Goal
Create a presentable, multi-page website mockup that demonstrates how a digital version of "Eesti Rada" could look and feel for diaspora readers. The demo should communicate trust, identity, readability, and community relevance.

## 2. Scope
In scope:
- Four static pages with real navigation between pages
- User-provided logo integrated as main brand asset
- Distinct but consistent page layouts
- Responsive behavior for desktop and mobile
- GitHub Pages-ready repository structure

Out of scope:
- Backend/CMS
- Authentication/user accounts
- Dynamic commenting system
- Production content workflow

## 3. Information Architecture
The demo contains 4 pages:

1. `index.html` (Homepage)
- Hero with logo and lead story
- Current highlights
- Topic/rubric preview section
- Teaser block linking to community area

2. `artikkel.html` (Article page)
- Large article headline
- Metadata row (date, author, category)
- Long-form readable article body
- Inline image block
- Related stories list

3. `rubriigid.html` (Rubrics/topics)
- Card-based overview of editorial categories
- Short descriptions per rubric
- Clear entry points to representative content

4. `kogukond.html` (Community page)
- Community and association updates
- Invitation to submit stories ("Saada lugu")
- Contact/participation calls to action

## 4. Visual System
### 4.1 Brand
- Use provided "EESTI RADA" logo as the primary header brand marker.
- Keep logo consistently visible in top navigation across all pages.

### 4.2 Style Direction
Hybrid look:
- Modern structure: clear spacing, hierarchy, responsive grid
- Newspaper heritage cues: subtle dividers, serif accents, archival texture hints

### 4.3 Color Palette
- Off-white background for warmth and readability
- Charcoal/near-black for primary text
- Estonian blue accent for links, highlights, and active states

### 4.4 Typography
- Readability-first body typography
- Display style for major headlines with newspaper flavor
- Strong contrast between headlines, metadata, and body copy

## 5. Content & Language Strategy
- Interface elements include Estonian and German context labels where suitable.
- Core navigation and CTAs should remain easy for diaspora audiences with mixed language comfort.
- Demo content is mock editorial text, but tone should reflect community journalism.

## 6. Technical Architecture
Stack:
- HTML
- CSS
- Minimal vanilla JavaScript

Suggested structure:
- `index.html`
- `artikkel.html`
- `rubriigid.html`
- `kogukond.html`
- `assets/logo.png`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/img/*`

Implementation principles:
- Shared header/footer and consistent navigation pattern on every page
- Progressive enhancement: core content stays usable without JS
- No build step required

## 7. Deployment Plan (GitHub Pages)
- Host as static site from repository root
- Pages source: default branch root (`master` or `main` depending on repo setup)
- Expected URL pattern: `https://<username>.github.io/<repo>/`

## 8. Quality Gates
Before declaring demo complete:
- Check all internal links across 4 pages
- Validate responsive layout on mobile and desktop widths
- Ensure logo displays correctly and proportionally
- Confirm text contrast and legibility in key sections
- Run a quick Lighthouse pass (performance/accessibility sanity check)

## 9. Risks & Mitigations
Risk: Visual style becomes too generic modern portal.
Mitigation: Preserve archival cues via typography, separators, and tone.

Risk: Heavy assets reduce perceived quality/performance.
Mitigation: Use optimized images and restrained decorative effects.

Risk: Language friction for mixed diaspora users.
Mitigation: Keep navigation clear, short labels, and bilingual cues.

## 10. Definition of Done
This mockup is done when:
- 4 pages are implemented and interlinked
- Design expresses hybrid modern + newspaper identity
- Provided logo is integrated in the global header
- ET+DE language cues are present
- Site is publicly reachable on GitHub Pages
