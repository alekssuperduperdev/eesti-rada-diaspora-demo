# Design Spec: Eesti Rada Premium Newspaper Relaunch

Date: 2026-05-24
Project: Major redesign of digital Estonian diaspora newspaper mockup
Primary audience: Estonian diaspora community
Visual direction: Modern European news (feature-led)
Image direction: Photorealistic editorial photography
Languages in UI: Estonian + German
Delivery target: Live GitHub Pages demo

## 1. Goal
Deliver a large, unmistakable redesign that upgrades the current demo from a simple mockup into a professional newspaper-grade digital experience.

## 2. Scope
In scope:
- Keep 4-page structure (Start, Artikel, Rubriken, Kogukond)
- Full visual and structural redesign on all pages
- Significant content expansion with newsroom-like modules
- New high-quality image asset set across all pages
- Responsive experience for desktop and mobile

Out of scope:
- Backend/CMS
- User authentication
- Real-time comments

## 3. Information Architecture
### 3.1 index.html (Start)
- Newspaper masthead and ET/DE navigation
- Lead Story hero (large image, standfirst, metadata)
- Top Stories area (multi-card newsroom block)
- Opinion/Voices column
- Quick Briefing strip
- Rubrik teaser block
- Community spotlight with CTA to Kogukond

### 3.2 artikkel.html (Artikel)
- Longread layout with strong headline hierarchy
- Byline row with date, author, rubric
- Structured content sections (analysis, context)
- Inline photo(s) + captions
- Factbox and pullquote
- Related stories + next read navigation

### 3.3 rubriigid.html (Rubriken)
- Rubric front page with editorial cards
- Distinct visual lanes for key rubrics (Kultuur, Ajalugu, Kogemuslood, Kohad)
- Clear entry points to representative stories
- Supporting image thumbnails per rubric

### 3.4 kogukond.html (Kogukond)
- Community newsdesk layout aligned with same visual language as editorial pages
- Update stream (dated entries)
- Story submission and participation modules
- Contact and initiative highlights

## 4. Visual System
### 4.1 Design principles
- Professional newspaper hierarchy, no widget-like UI blocks
- Editorial rhythm via spacing, rules, section dividers, and typography contrast
- Large lead visuals and structured multi-column reading flow

### 4.2 Color and typography
- Paper-inspired background tones
- Deep ink text colors
- Estonian-blue accent for links, active navigation, and key CTAs
- Headline/body type contrast tuned for newsroom readability

### 4.3 Imagery
- New photorealistic editorial-style assets for hero and section modules
- Image set mapped to each page context (lead, article inline, rubric visuals, community visual)

## 5. Content Strategy
- Substantially richer editorial content across all pages
- ET/DE cues remain visible and readable
- Tone: serious, trustworthy, community-focused journalism

## 6. Technical Architecture
- Static site: HTML + CSS + minimal vanilla JS
- Reuse existing file layout and deployment model
- Preserve progressive enhancement (core content works without JS)

## 7. Quality Gates
- Existing test suite remains passing
- Cross-page link integrity maintained
- Layout validated at desktop and mobile breakpoints
- New assets properly rendered and proportioned
- Live GitHub Pages deployment verified

## 8. Definition of Done
- Large visual and structural change clearly visible across all 4 pages
- Professional newspaper look and feel achieved
- New high-quality image assets integrated site-wide
- ET/DE language cues preserved
- Site live on GitHub Pages with updated design
