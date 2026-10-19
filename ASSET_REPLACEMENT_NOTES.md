# CCC — Asset & Data Replacement Checklist

> **This file lists every placeholder that must be replaced before launch.**

## 🔴 Critical (blocks launch)

| Item | Current Status | Where to Update |
|------|---------------|-----------------|
| WhatsApp number | `REPLACE_WITH_REAL_NUMBER` placeholder | `src/content/site.ts` → `whatsappNumber` |
| Domain / URL | Placeholder `covaicreativecorner.com` | `src/content/site.ts` → `url` |

## 🟠 Required for quality launch

| Item | Current Status | Where to Update |
|------|---------------|-----------------|
| Studio wide shot photograph | No image — using CSS placeholder | `public/images/` → replace `hero-studio.jpg` |
| Studio detail/close-up images | No images | `public/images/` → `studio-detail-*.jpg` |
| Founder/team photo(s) | Not included | `public/images/` → `team-*.jpg`, update About page |
| Founder name & bio | Placeholder text, no name | `src/app/about/page.tsx` |
| Location / city / service area | Empty in config | `src/content/site.ts` → `location` |
| Social media profile URLs | Empty strings | `src/content/site.ts` → `social` |
| Favicon & OG image | Default Next.js | `src/app/favicon.ico`, `public/images/og-image.jpg` |

## 🟡 Recommended before launch

| Item | Current Status | Where to Update |
|------|---------------|-----------------|
| Real portfolio/work samples | Illustrative placeholders only | `src/app/work/page.tsx`, `public/images/work/` |
| Client testimonials | None — never fabricated | Add only with permission |
| Equipment/amenities list | Not listed | `src/app/studio/page.tsx` |
| Studio capacity & hours | Not listed | `src/app/studio/page.tsx` |
| Pricing information | Not included | Add only when confirmed by CCC |
| FAQ answers | Provisional — direct to WhatsApp | `src/content/faqs.ts` |
| Booking policies | Not included | Add to FAQ or studio page when confirmed |
| Privacy policy page | Not created | Create `/privacy` route if analytics/forms collect data |

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
