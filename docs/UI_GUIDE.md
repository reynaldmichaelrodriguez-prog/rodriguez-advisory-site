# Rodriguez Advisory UI Guide

## Brand position

Rodriguez Advisory is a premium, founder-led finance operations visibility advisory site. The one-page homepage should emphasize:

- Finance Operations Visibility from CRM follow-up to cash collection.
- CRM-to-Cash and AP-to-Payment workflow clarity.
- Ownership, follow-up, controls, and human review.
- Practical AI support only where it helps; do not imply live Grok/API integrations.

## Visual system

### Palette

- Deep Navy `#1B2A4A`: premium structure, footer, dark section, assistant badges, primary text accents.
- Warm Stone `#F5F1EB`: main page background and calm workflow surfaces.
- Amber Gold `#C9922A`: CTA buttons, proof metric numbers, selected highlights, and small states.
- Near Black `#1A1A2E`: default body text.
- Light Slate `#E8EBF0`: card borders and low-emphasis dividers.
- White `#FFFFFF`: cards and content panels.

Avoid gradients, neon, purple, bright blue, glassmorphism, playful chatbot visuals, stock photography, and generic SaaS patterns.

### Typography

Use Inter through the global CSS stack. Headlines should be large, calm, high-contrast, and tightly tracked. Body copy should be short with clear hierarchy and no tiny low-contrast text.

### Layout

- Keep a one-page site in this order: Header, Hero + AI Workflow Assistant, Proof Metrics, What We Solve, Selected Work, About Mike, Final CTA/Footer.
- Use strong whitespace and intentional section spacing.
- Use 4px to 8px radii for premium cards and controls.
- Use minimal shadows only to lift important white cards.
- Mobile stacks the hero before the assistant, then metrics and remaining sections.

## Content components

### Header

The header should show Rodriguez Advisory and Finance Operations Visibility on the left, with anchors for What We Solve, Selected Work, About, and Book a Call. Keep the primary booking button visible and easy to tap.

### Hero

Lead with the exact headline: "Finance operations visibility from CRM follow-up to cash collection." Pair it with the line "CRM-to-Cash. AP-to-Payment. AI-assisted where it helps." Include a compact proof preview under the CTAs.

### AI Workflow Assistant

Render the AI Workflow Assistant as a premium chat-style card with:

- RA assistant initials badge.
- Practical AI with human review label.
- Assistant message bubble.
- Prompt chips that wrap cleanly.
- Input row with Generate recommendation button.
- Safety note: "Do not enter sensitive financial data."
- Recommendation card for an AP Exception Tracker.
- Human review where controls matter indicator.

Do not add live provider claims or integrations until intentionally implemented.

### Proof metrics

Show four strong metric cards immediately after the hero. Metric values should be large and Amber Gold. Labels should be concise and factual.

### What We Solve

Include native text-based workflow diagrams for CRM-to-Cash and AP-to-Payment, followed by four concise cards for CRM-to-Cash, AP-to-Payment, AR & Collections, and AI-Assisted Finance Operations.

### Selected Work

Use four cards only. Each card must include a native mini-mockup visual at the top plus Output, Tools, and Why it matters. Do not use raw screenshots, stock photos, or fake dashboard numbers.

### About Mike

Use a polished founder card with MR initials, "Founder-led advisory," and the caption "Photo to be added" until a real photo is supplied. Keep the founder bio concise and credentials visible.

## Accessibility

- Use semantic sections, headings, links, and labeled form controls.
- Maintain strong contrast between text and backgrounds.
- Keep touch targets large enough on mobile.
