# The Silent Voice

## Current State
The site is a literary magazine called "Real Truth" with sections for articles, writings, and songs by Hridiman Dutta and Ayushman Bhattacharya. The backend stores content items. The frontend is a reading/publishing platform.

## Requested Changes (Diff)

### Add
- New hero section: "The Silent Voice" branding, tagline about giving small vendors and shop owners their own websites
- "How It Works" section: step-by-step process explaining how Hridiman and Ayushman build a website for a client (consultation, design, delivery)
- "Why You Need a Website" section: informational content for small vendors/shop owners — benefits, reach, credibility
- "What We Offer" / Services section: what clients get when they work with The Silent Voice
- "Meet the Team" section: Hridiman Dutta (Founder) and Ayushman Bhattacharya (Co-founder) with their photos and short bios focused on their mission to empower small businesses
- "Get Started" / Contact CTA section at bottom with the email thesilentvoiceofrealtruth@gmail.com

### Modify
- Site name/branding: "Real Truth" → "The Silent Voice"
- Navigation links updated to match new sections: Home, About, Services, How It Works, Contact
- Footer updated with new brand name, tagline, and same contact email
- Overall tone: from literary/artistic to professional, informative, service-oriented
- Design: sleek, classy, minimal — dark elegant palette, clean typography, generous whitespace

### Remove
- Articles, Writings, Songs content sections and their backend data usage
- Literary magazine aesthetic and copy
- Vol. I / Est. 2026 masthead elements

## Implementation Plan
1. Fully rewrite App.tsx as a single-page service/agency website for "The Silent Voice"
2. Keep founder photos: Hridiman at /assets/uploads/WhatsApp-Image-2026-03-11-at-6.14.23-PM-1.jpeg, Ayushman at /assets/uploads/ayushmab-1.jpeg
3. Sections: Hero, Why A Website, How It Works (3 steps), Services/What We Offer, Meet the Team, Contact/Footer
4. No backend data reads needed — purely informational frontend
5. Keep existing design system tokens; use sleek dark/neutral palette with gold or warm accent
