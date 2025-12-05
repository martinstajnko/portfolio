# Copilot Instructions (Portfolio)

## Scope
- Static site: HTML + CSS + JS only. No build tools.
- Modern, simple, accessible; mobile-first; fast load.
- Do not touch legacy `hostinger_portfolio/` unless asked.

## Structure
- Root pages: `index.html` (EN), `slo.html` (SLO). Parity of sections across languages.
- Styles: `style_slo.css` (primary), `style_web_pages.css` only for `wedding_web_pages_more.html`.
- Assets: `static/` (images, favicon, resume).
- JS: `js/main.js` (scroll-to-top helper).

## Design/UX
- Use Montserrat (Google Fonts), Font Awesome kit `ff2e88431e.js`.
- Keep palette teal/cyan gradients (`#69b6ad` → `#29b9da`), accent `#ffe082`.
- Navbar sticky, outside `#page`, with slight blur; anchor links for sections; language switch via full-page link.
- Cards (services/projects/about): light glassmorphism, subtle lift on hover. Disabled project links: `.disabled`, `tabindex="-1"`, `aria-disabled="true"`, `pointer-events:none; opacity:0.6;`.

## Sections (both languages)
1) `#header` hero (photo, title, subtitle, brief text)
2) `#about` (bio, tech badges, soft skills, education)
3) `#services` (grid of service cards)
4) `#demo-projects` (cards, links disabled until ready)
5) `#contact` (email, phone, social links, resume download)
6) Footer copyright

## Conventions
- Bootstrap 5.2.3 CDN with integrity; keep version unless asked.
- Asset paths relative (`./static/images/...`, `./static/resume.pdf`).
- Keep social links `target="_blank"`.

## When adding content
- Add services/projects to both `index.html` and `slo.html`.
- Reuse existing card/tech-badge patterns; match icons and wording style.
- Keep copy concise; avoid inline styles; prefer existing utility classes.

## Testing checklist
- Both languages load; nav anchors scroll correctly; mobile nav toggles.
- Social links open new tab; resume link works.
- Hover/gradient animations smooth; layout OK on mobile.