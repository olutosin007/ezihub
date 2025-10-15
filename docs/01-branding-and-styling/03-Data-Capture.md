<!-- cb3183fb-5bb6-4c3a-b462-082284788438 5a65eb24-b841-471d-88d8-21cdc4552d74 -->
# 03 – EziHub Data Capture Plan (Simple Built‑In System)

## Objective

Implement a lightweight, built‑in lead capture system that collects visitor details from prominent CTAs (hero, support/contact, footer), stores them securely, and enables non‑technical staff to view/export submissions.

## Key Capture Points (current site)

File: `src/index.html`

1) Hero section (above the fold)

- Element: Primary CTA “Join the Waitlist”
- Location: Hero content column, near headline
- Target: Opens compact modal form (no page leave)
- Form purpose: Early‑access/waitlist

2) Navigation → Contact Us

- Element: Menu item `Contact Us`
- Location: Top nav, maps to `#support`
- Target: Scroll to Support section; convert section to full contact form

3) Support section (Contact Us)

- Element: Current support/contact block
- Location: Section id `#support`
- Target: Replace/enhance with structured contact form + info panel

4) Footer CTA

- Elements: Footer call‑to‑action button “Join the Waitlist”; newsletter area
- Location: Footer card + newsletter block
- Target: Reuse hero modal form for CTA; keep newsletter lightweight (email only)

5) Fallback deep links

- Element: Any `mailto:` or non‑form links
- Target: Point them to the same modal or support form when feasible

## Data Model (initial)

Core Lead fields (Waitlist + Contact)

- firstName (text, required)
- lastName (text, optional)
- email (email, required)
- company (text, optional)
- roleOrInterest (select: Professional, Employer, Institution, Partner, Other)
- message (textarea; optional for Waitlist, required for Contact)
- source (hidden: hero, nav, support, footer, newsletter)
- consent (checkbox; required)
- createdAt (server‑set)

Newsletter fields (minimal)

- email (required)
- source=newsletter

## Forms & UX

A) Hero Waitlist Modal (reusable)

- Trigger: Hero “Join the Waitlist” and Footer CTA
- Layout: Minimal 2‑step or single step
- Fields: firstName, email, roleOrInterest, consent
- Copy: Benefits of joining; privacy note
- Success: Inline success state + close; optional redirect hash `#thanks`

B) Support/Contact Form (section `#support`)

- Fields: firstName, lastName, email, company, roleOrInterest, message, consent
- Right/Below Column: Static contact info (email, location)
- Success: Inline success banner + ID reference number

C) Newsletter (footer)

- Single email field + consent link; uses the same endpoint with `source=newsletter`

## Validation & Accessibility

- Client: required, email format, 1s debounce; disable submit while sending
- A11y: labels/aria‑describedby, focus trap in modal, keyboard dismiss (Esc)
- Locale: copy strings centralized for easy edits
- Rate limit: basic cooldown (e.g., 30s) per IP/email client‑side

## Submission & Storage (MVP)

- Endpoint: `/api/leads` (POST JSON)
- Storage: SQLite (single-file DB). File: `data/ezihub_leads.sqlite`. Migrations included. Easy export to CSV.
- Shape: { fields..., userAgent, ipHash, createdAt }
- Notifications: skipped for now (no emails). Add later behind a feature flag.

## Admin (Non‑Technical Access)

- Route: `/admin/leads` (basic auth)
- Views: Table (sortable/searchable); filters by source/date; detail view; CSV export
- Exports: CSV for all/filtered rows

## Tracking & Analytics

- Events: `lead_submit_success` (source, role), `lead_submit_error`
- Funnel: clicks on triggers vs. submissions

## Security & Privacy

- Consent text: link to Privacy Policy (footer)
- Spam control: honeypot field + lightweight challenge (no CAPTCHA initially)
- Data minimization: collect only necessary fields; encrypt at rest when upgraded

## Implementation Touchpoints (minimal edits)

- Hero: wrap “Join the Waitlist” button with `data-open="waitlist-modal"`
- Modal: one shared modal component injected near end of body
- Nav: unchanged (Contact Us → `#support`)
- Support: convert section into contact form preserving current styles
- Footer CTA: triggers same modal
- Newsletter: simple inline form; posts to `/api/leads` with `source=newsletter`

## Content & Copy

- Keep tone consistent with EziHub voice
- Short consent: “I agree to be contacted about EziHub. See Privacy Policy.”

## Rollout Plan

1) Add shared modal markup & styles (non‑intrusive)
2) Wire triggers: hero CTA, footer CTA
3) Replace support block with structured form (keep info panel)
4) Implement minimal API + storage (SQLite/JSON)
5) Add admin list/export
6) QA: validation, a11y, error states; test mobile
7) Metrics: add basic client events
8) Docs: brief admin usage notes in `/docs`

## Risks & Mitigations

- Spam: add honeypot + basic throttling
- Data loss: add periodic JSON/SQL backups
- UX friction: 4 fields max in modal; deeper form only in support
- Growth path: later integrate SuiteCRM; ensure CSV exports include all fields


