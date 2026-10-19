# CCC — Asset & Data Replacement Checklist

> **This file lists every placeholder that must be replaced before launch.**

## 🔴 Critical (blocks launch)

| Item | Current Status | Where to Update |
|------|---------------|-----------------|
| WhatsApp number | Not set — all WhatsApp buttons render disabled and the contact form is switched off until it is | Set `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits only, with country code) in `.env.local` or your host's env settings — see `.env.example` |
| Domain / URL | Placeholder `covaicreativecorner.com` (used for canonical URLs, sitemap, OG) | `src/content/site.ts` → `url` |

## 🟠 Required for quality launch

| Item | Current Status | Where to Update |
|------|---------------|-----------------|
| Studio wide shot photograph | Illustrative CSS composition (`HeroVisual`) on Home and Studio | `public/images/`, then swap `HeroVisual` in `src/app/page.tsx` and `src/app/studio/page.tsx` |
| Studio detail/close-up images | No images | `public/images/` → `studio-detail-*.jpg` |
| Founder/team photo(s) | Not included | `public/images/` → `team-*.jpg`, update About page |
| Founder name & bio | "The people behind CCC" section with a portrait slot | `src/app/about/page.tsx` (see TODO comment) |
| Location / city / service area | Empty in config | `src/content/site.ts` → `location` |
| Social media profile URLs | Empty strings | `src/content/site.ts` → `social` |
| Favicon & OG image | Temporary typographic versions | `src/app/icon.svg`, `src/app/opengraph-image.tsx` (or replace with `opengraph-image.jpg`) |

## 🟡 Recommended before launch

| Item | Current Status | Where to Update |
|------|---------------|-----------------|
| Real portfolio/work samples | Illustrative placeholders only | `src/app/work/page.tsx`, `public/images/work/` |
| Client testimonials | None — never fabricated | Add only with permission |
| Equipment/amenities list | Not listed — all unverified gear claims were removed | `src/app/studio/page.tsx` (options section) |
| Studio capacity & hours | Not listed | `src/app/studio/page.tsx` |
| Pricing information | Not included | Add only when confirmed by CCC |
| FAQ answers | Provisional — direct to WhatsApp | `src/content/faqs.ts` |
| Booking policies | Not included | Add to FAQ or studio page when confirmed |
| Privacy policy page | Not needed yet — no analytics, and the contact form only builds a WhatsApp message on the visitor's device | Create `/privacy` before adding analytics or a server-side form |

## 📸 Image Placeholders

All placeholder images use CSS-generated backgrounds with aspect ratios preserved.
No stock images are included. No placeholder claims to depict CCC's actual studio or work.

When adding real images:
1. Place them in `public/images/` with descriptive names
2. Use optimised formats (WebP preferred, JPEG fallback)
3. Include both standard and 2x sizes or use responsive `srcset`
4. Set explicit `width` and `height` attributes
5. Add meaningful `alt` text

## 🔤 Typographic Wordmark

The current "CCC" / "COVAI CREATIVE CORNER" text treatment is a temporary typographic mark.
Replace with the final logo when available. The header component accepts both text and image logos.
