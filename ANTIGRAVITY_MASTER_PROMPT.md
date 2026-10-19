# Antigravity Master Prompt --- Covai Creative Corner (CCC)

You are a senior product designer, art director, UX writer, and frontend
engineer. Build a complete, production-minded website for **Covai
Creative Corner (CCC)**, a cinematic creative production studio and
brand/content partner.

Do not stop at a concept, wireframe, or static mockup. Inspect the
current repository first, understand its framework and existing
conventions, then implement the website end-to-end. If the repository is
empty, create a sensible project using Next.js App Router, TypeScript,
and a clean CSS architecture. Do not overwrite existing work without
understanding it.

Use the companion `CCC_WEBSITE_DESIGN_BRIEF.md` as the source of truth
if it is present. If it is not present, follow this prompt.

------------------------------------------------------------------------

## 1. Business and positioning

CCC offers two connected categories:

**Studio & production** - Podcast and video studio rental. - Recording
and shoot support. - Video/podcast editing and content delivery. -
End-to-end production options where confirmed.

**Brand & content services** - Content strategy and scripting. -
Branding and brand identity. - Social media management. - Digital
marketing. - Creative production and editing.

The audience includes founders, business owners, creators, and teams who
value quality, consistency, and clear communication. Do not mention a
revenue threshold or make the website sound exclusive based on revenue.

Positioning direction: **"A creative studio for the stories and brands
people need to notice."** This is a working line; you may improve it
while keeping the meaning.

Primary conversion paths: 1. Studio booking enquiry through WhatsApp. 2.
Business/creative-services enquiry through WhatsApp.

Important: WhatsApp click-to-chat starts a conversation; it does not
confirm a booking. Do not present a click as a completed reservation.

------------------------------------------------------------------------

## 2. Non-negotiable art direction

The result must feel cinematic, tactile, editorial, premium, and custom
art-directed.

### Absolutely do not use

-   Gradients: no gradient backgrounds, borders, text, glows, or
    overlays.
-   Generic Apple, Linear, Stripe, or generic SaaS landing-page clones.
-   The predictable centered hero + two buttons + three rounded cards
    template.
-   Generic AI-generated landing-page styling, neon blobs, excessive
    glassmorphism, or dashboard UI.
-   Random decorative 3D objects that do not relate to recording,
    production, storytelling, or the brand.
-   Fake client logos, fabricated case studies, invented testimonials,
    made-up awards, or unsupported performance claims.
-   Unverified addresses, phone numbers, equipment lists, prices, or
    booking policies.
-   Huge animation libraries if CSS and Intersection Observer are
    enough.

### Visual direction

Think of a contemporary independent creative studio photographed for a
design magazine: - Deep matte charcoal surfaces. - Restrained warm,
burnt-orange accent. - Warm off-white editorial panels. - Realistic
studio imagery with controlled practical lighting. - Tactile framing,
layered compositions, purposeful asymmetry, strong negative space. -
Large expressive display typography mixed with clean UI typography and
small monospace production labels. - Thin rules, image crops, restrained
shadows, frame-within-frame compositions, and occasional subtle grain.

### Design tokens

Use these as the starting point: - Ink: `#111110` - Raised panel:
`#1B1B19` - Paper: `#F1EEE7` - Muted text on dark: `#B8B3AA` - Muted
text on light: `#5E5A54` - Accent: `#C77A4B` - Border on dark:
`rgba(241,238,231,0.16)` - Border on light: `rgba(17,17,16,0.16)`

Use solid colours only. Validate contrast; adjust tokens if necessary.

### Typography

Use a purposeful three-role system: - Display serif: `DM Serif Display`
or `Cormorant Garamond` for expressive headings. - Sans-serif: `Manrope`
or `Plus Jakarta Sans` for body, nav, UI, and buttons. - Monospace:
`IBM Plex Mono` for labels, indexes, and production annotations.

Do not randomly mix typefaces. Limit to one family per role, establish a
responsive type scale with `clamp()`, and use fallbacks. Load fonts
appropriately and avoid blocking rendering.

------------------------------------------------------------------------

## 3. Required pages and routes

Build a coherent multi-page website, not just a hero demo:

-   `/` --- Home
-   `/studio` --- Studio & Production
-   `/services` --- Creative Services
-   `/work` --- Selected Work / Capabilities
-   `/about` --- About CCC
-   `/contact` --- Book / Contact

If time or project structure makes a separate page genuinely
impractical, create a high-quality single-page experience with clear
section anchors, but prefer the routes above.

Each page must have: - A page-specific title and meta description. - One
meaningful H1. - Clear navigation and footer. - Relevant internal
links. - A suitable CTA. - Responsive and reduced-motion states.

Do not create empty placeholder pages. Each route needs purposeful
content.

------------------------------------------------------------------------

## 4. Homepage content and structure

Build the homepage in this order, adapting composition to feel
art-directed rather than repetitive.

### 4.1 Header

-   Wordmark text: `COVAI CREATIVE CORNER`; compact `CCC` mark is
    acceptable as a temporary typographic mark.
-   Links: Studio, Services, Work, About.
-   Main CTA: `Book the Studio` or `Start a Project`.
-   Header may start transparent over the hero and become solid after
    scrolling, but ensure contrast at every point.
-   Accessible mobile menu with keyboard controls, focus handling, and a
    clear WhatsApp CTA.
-   Do not invent a finished logo. Create a clean typographic treatment
    that can later be replaced.

### 4.2 Cinematic hero

Suggested content: - Eyebrow: `COVAI · CREATIVE PRODUCTION STUDIO` - H1:
**Make room for a better story.** - Supporting copy: "A production
studio and creative partner for podcasts, video, brands, and content
built to connect." - Primary CTA: `Book the Studio` - Secondary CTA:
`Explore Creative Services`

Visual composition: - Use a cinematic studio image or short, muted,
looping background video, with a deliberate crop and readable text safe
area. - Use a split or full-bleed layout with offset framing, not a
generic centered hero. - Add a small production label such as
`RECORD / CREATE / PUBLISH`. - Add a small scroll cue that is accessible
and not required for navigation.

Assets are currently unavailable. Use licensed stock or generated
concept imagery only as clearly replaceable placeholders. Never imply a
placeholder is CCC's real studio or an actual client project. Put
replacement notes in comments or an asset README. Prefer image slots
with stable aspect ratios. Do not generate fake text inside images.

### 4.3 Studio introduction

Headline: **A space to think out loud.** Copy: "Bring the idea, the
conversation, or the story. CCC gives you a considered space to record
it, with options for studio-only sessions or production support." Use
one large image plus a detail crop. Do not list unverified equipment,
capacity, address, or hours.

CTA: `Ask About Studio Availability`

### 4.4 Two ways to work with CCC

Use a split editorial layout, overlapping image/text composition, or
numbered visual chapters. Avoid identical rounded cards.

**01 --- Studio & Production** "From a quiet recording session to a
fully supported shoot, choose the level of production help that fits
your project." List: - Studio rental - Podcast and video recording -
Editing and content delivery - Production support, where available CTA:
`Plan a Studio Session`

**02 --- Brand & Content** "Build a clear voice and a repeatable content
system, from the first idea to the final post." List: - Content strategy
and scripting - Branding and identity - Video editing - Social media
management - Digital marketing CTA: `Discuss a Project`

Do not promise deliverables or production capabilities beyond this
brief.

### 4.5 Scroll-led process sequence

Build a sequence with four stages: 1. **Shape the idea** --- define
audience, message, and format. 2. **Set the scene** --- plan recording,
visuals, and production needs. 3. **Make the work** --- record, shoot,
design, or edit. 4. **Put it to work** --- prepare content for the
relevant channels.

Interaction: - Use a timeline, changing image crops, storyboard frames,
or a progress marker. - Optional pinned scroll sequence on desktop only
if it is smooth and accessible. - Keep the sequence in normal document
flow on mobile. - Never hijack the wheel, trap scrolling, or require
users to scroll a precise distance to access content. - If JavaScript is
disabled, all copy must remain readable.

### 4.6 Work / capabilities showcase

-   Only show real CCC work if approved assets are provided.
-   If no portfolio is available, label the section `What we can create`
    or `Capabilities`, not "Our client results".
-   Use clearly illustrative concept imagery and label it as
    illustrative if needed.
-   Do not fabricate clients, project metrics, testimonials, outcomes,
    or brand logos.
-   Give each item a distinct image ratio or layout.
-   Include a CTA to discuss a similar project.

### 4.7 Services list

Show the six core service areas: - Content strategy - Scripting and
creative direction - Video and podcast editing - Brand identity - Social
media management - Digital marketing

Use editorial rows, a numbered list, or a horizontal rail with distinct
compositions. Hover/focus may reveal a short description or preview, but
all content must remain available without hover. On touch screens, use
tap-to-expand only where it improves usability.

### 4.8 Philosophy / About

Headline: **Good content starts before the camera rolls.** Copy: "The
strongest content is built with intention: a clear point of view, a
thoughtful production process, and a reason for the audience to care."
Do not invent the founder's name, biography, years of experience, team
size, or client history. Create a section that can be populated once
confirmed.

### 4.9 FAQ

Include an accessible accordion with these questions: - Can I rent the
studio without production support? - Can CCC help with recording and
editing? - Can you help plan topics and scripts? - Do you offer ongoing
social media support? - How do I check availability and pricing? - What
should I bring to a studio session?

Avoid inventing operational policies. Where an answer needs
confirmation, say the details depend on the session/project and invite
the visitor to ask CCC through WhatsApp. Make it easy to replace these
answers when the client confirms the details.

### 4.10 Closing CTA

Headline: **Have something worth putting on record?** Copy: "Tell us
what you're planning. We'll help you figure out the right next step."
Buttons: - `Book via WhatsApp` - `Discuss a Creative Project`

### 4.11 Footer

Include wordmark, navigation, studio/service links, WhatsApp, and
verified social links only. Do not invent location or contact details.
Generate the current year dynamically. Add a privacy policy link if
required by actual data collection/analytics.

------------------------------------------------------------------------

## 5. Studio page

Create a dedicated `/studio` page explaining: - Studio rental and
supported production as two options. - Suitable use cases: podcasts,
interviews, founder content, video shoots, and brand content, without
promising unsupported setups. - What a visitor should share when
enquiring: session type, preferred date/time, approximate duration, and
support needed. - A simple process: enquire → confirm availability and
requirements → plan session → record/create. - FAQs and strong WhatsApp
CTAs. - Image-led cinematic storytelling and verified details only.

Do not add fake pricing, calendars, availability, booking confirmations,
or equipment specifications.

------------------------------------------------------------------------

## 6. Services page

Create a dedicated `/services` page with clear service descriptions and
a distinct visual rhythm. Include: - Content strategy and planning. -
Scripting and creative direction. - Video/podcast editing. - Branding
and visual identity. - Social media management. - Digital marketing.

For each service explain: 1. What it is. 2. Who it helps. 3. What a
typical collaboration may involve, using careful non-binding language.
4. How to enquire.

Do not promise results such as guaranteed growth, virality, leads, or
revenue.

------------------------------------------------------------------------

## 7. Work page

Create `/work` as a portfolio framework that is useful even before real
assets arrive: - If there are no real case studies, title it
`Selected Capabilities` or `What We Can Create`. - Use clearly marked
illustrative visuals, not fake case studies. - Make it easy to replace
each item with a real project image, title, description, and approved
credit. - Provide a strong CTA. - Do not invent client names, logos,
project results, quotes, or metrics.

------------------------------------------------------------------------

## 8. About page

Create `/about` around CCC's creative philosophy and working process. Do
not invent founder/team details. Use copy that explains the approach and
leave an obvious, documented location for real biography and team images
to be inserted later.

------------------------------------------------------------------------

## 9. Contact page and WhatsApp booking

WhatsApp is mandatory and should be the most direct contact path.

Create two distinct enquiry flows.

### Studio booking CTA

Prefilled message: "Hi CCC, I'm interested in booking the studio. Type
of session: \[Podcast / Video shoot / Other\] Preferred date: \[Date\]
Preferred time: \[Time\] Support needed: \[Studio only / Production
support\]"

### Business services CTA

Prefilled message: "Hi CCC, I'd like to discuss a creative project.
Business/brand: \[Name\] What I need help with: \[Content strategy /
Production / Branding / Social media / Marketing / Other\] Brief
overview: \[A few details\]"

### Implementation rules

-   Use `https://wa.me/<international-number>?text=<encoded-message>`.
-   Create a single configuration source, for example
    `NEXT_PUBLIC_WHATSAPP_NUMBER`, with digits only including country
    code.
-   **Do not invent a WhatsApp number.** If not supplied, create a
    clearly named placeholder and document that the site must not launch
    until it is replaced.
-   Encode messages safely using `encodeURIComponent`.
-   Ensure CTAs are actual links/buttons with accessible names and
    visible focus styles.
-   Include a fallback contact method or clear note if the number is not
    configured.
-   Track only the CTA click event if analytics is configured; never
    send the contents of a message to analytics.
-   Do not claim the booking is confirmed.
-   If you add a short enquiry form, validate it, show clear errors, and
    either open WhatsApp with the completed message or connect to a real
    configured endpoint. Do not pretend a form was submitted to a server
    if it was not.

Make CTA labels specific, such as `Ask About Studio Availability` and
`Discuss a Creative Project`, instead of using `Submit` everywhere.

------------------------------------------------------------------------

## 10. Motion and interactions

The user specifically wants elements to move, reveal on scroll, and feel
premium. Implement these effects with restraint.

### Required interaction patterns

1.  Scroll-triggered reveals for selected sections.
2.  Subtle image parallax in the hero and one or two showcase sections.
3.  Layered depth using image frames, foreground elements, and
    restrained transforms.
4.  A scroll-progress indicator for the process sequence or a small
    section marker.
5.  Refined hover/focus interactions on navigation, service rows, image
    frames, and CTAs.
6.  One or two lightweight 3D effects that relate to the studio, such as
    a framed image with gentle pointer tilt or a layered camera-frame
    composition.
7.  Header appearance transition on scroll, with accessible contrast.
8.  Accessible FAQ accordion.
9.  Functional WhatsApp links with distinct prefilled messages.
10. Responsive mobile menu.

### Implementation constraints

-   Prefer CSS transforms and opacity.
-   Use Intersection Observer for reveal triggers.
-   Use GSAP/ScrollTrigger only if a pinned/timeline sequence genuinely
    benefits from it; keep it isolated and clean up listeners/timelines
    correctly.
-   Use CSS 3D for simple depth. Add Three.js only if the implementation
    proves a real 3D scene is worth the weight.
-   Avoid scroll hijacking, unnecessary smooth-scroll libraries,
    continuous animation loops, excessive pointer tracking, or
    animations that block interaction.
-   Use `prefers-reduced-motion` to remove parallax, tilt, and
    nonessential reveals; present all content immediately in a stable
    layout.
-   Keep all content accessible without animation or hover.
-   Disable or reduce pointer effects on touch devices.
-   Respect browser and device performance limitations.
-   Avoid CLS by defining image/video aspect ratios and reserving media
    dimensions.

### Motion timing

-   Short UI transitions: roughly 160--260ms.
-   Section reveals: roughly 450--750ms, with modest stagger.
-   Parallax: small travel distance and low sensitivity.
-   Never animate every element. Establish a hierarchy so motion feels
    intentional.

------------------------------------------------------------------------

## 11. Responsive design

Test and tune at: - 320px and 375px mobile widths. - 390--430px modern
mobile widths. - 768--1024px tablet widths. - 1280--1440px laptop
widths. - 1600px+ desktop widths.

Requirements: - No horizontal overflow. - Hero type scales with
`clamp()` and wraps intentionally. - Desktop overlap compositions become
natural-flow layouts on mobile. - Mobile navigation is
keyboard-accessible and touch-friendly. - All interactions work without
hover. - Reduce parallax and 3D effects on mobile. - Keep CTA targets
comfortably tappable. - Images use appropriate focal points and
`object-position`. - Avoid fixed-height sections that crop content on
short screens. - Do not use horizontal carousels for essential content
unless keyboard and touch access are excellent.

------------------------------------------------------------------------

## 12. Technical architecture

If the repository already has a framework, preserve it unless there is a
clear technical reason not to. If empty, prefer:

-   Next.js App Router.
-   TypeScript.
-   CSS Modules or clean global CSS with design tokens. Tailwind is
    acceptable if the final result remains bespoke.
-   Lucide icons or consistent custom SVG icons.
-   CSS animations and Intersection Observer by default.
-   GSAP/ScrollTrigger only for complex sequences.
-   CSS 3D before Three.js.
-   Centralized content and contact configuration.

Suggested structure:

``` text
app/
  page.tsx
  studio/page.tsx
  services/page.tsx
  work/page.tsx
  about/page.tsx
  contact/page.tsx
  layout.tsx
components/
  navigation/
  sections/
  motion/
  ui/
content/
  site.ts
  services.ts
  faqs.ts
lib/
  whatsapp.ts
  analytics.ts
public/
  images/
  video/
  fonts/
styles/
  globals.css
```

Suggested reusable components: - `SiteHeader` - `MobileNavigation` -
`CinematicHero` - `SectionEyebrow` - `StudioIntro` - `OfferSplit` -
`ProcessSequence` - `ProjectShowcase` - `ServiceList` -
`AboutStatement` - `FAQAccordion` - `WhatsAppCTA` - `ContactFooter` -
`MotionReveal`

Do not create abstractions for every tiny element. Reuse components
where there is a real pattern.

### Image and video handling

-   Use optimized responsive images.
-   Set width/height or aspect ratio.
-   Lazy-load below-the-fold media.
-   Use a poster image for background video.
-   Mute autoplay video and avoid autoplay audio.
-   Prefer lightweight, short loops and stop playback when offscreen if
    practical.
-   Provide static image fallbacks.
-   Add meaningful alt text for informative images and empty alt for
    decorative images.
-   Clearly label placeholder assets in code comments or documentation.

### SEO

-   Page-specific metadata and Open Graph data.
-   Semantic headings and HTML.
-   Descriptive route names.
-   Sitemap and robots configuration.
-   Alt text.
-   Canonical URLs when domain is confirmed.
-   Structured data only for verified facts.
-   Do not invent a physical address, opening hours, reviews, phone
    number, or location-specific claim.
-   Use local SEO terms only after confirming CCC's actual
    location/service area.

### Performance

-   Aim for strong Core Web Vitals and a fast mobile experience.
-   Avoid shipping large animation/3D dependencies to every page.
-   Lazy-load non-critical components.
-   Avoid layout shift.
-   Compress images and use modern formats.
-   Avoid unnecessary client components; keep content server-rendered
    where possible.
-   Inspect bundle impact before adding libraries.

### Accessibility

-   Target WCAG 2.2 AA.
-   Semantic landmarks and proper heading order.
-   Keyboard-accessible navigation, accordions, forms, and CTAs.
-   Visible focus styles.
-   Sufficient contrast.
-   Reduced-motion support.
-   Clear form labels and error messages.
-   No essential information only available on hover.
-   Ensure motion does not cause discomfort or block use.

------------------------------------------------------------------------

## 13. Content and asset integrity

No confirmed brand assets are available at the start.

-   Use replaceable, licensed placeholders or generated concept imagery.
-   Never claim placeholder images depict CCC's real premises or
    clients.
-   Do not fabricate case studies, testimonials, customer logos, awards,
    years in business, team size, or results.
-   Do not invent phone number, location, pricing, equipment, opening
    hours, or availability.
-   Add a short `ASSET_REPLACEMENT_NOTES.md` or code comments listing
    the images and business details the client must provide.
-   Use a temporary typographic wordmark, not a fake final logo.
-   Keep service copy editable from a central content file where
    practical.

Required assets/data checklist to document: - Confirmed WhatsApp number
with country code. - Confirmed location/service area. - Real studio
photos. - Equipment/amenities list approved by client. - Founder/team
details, if they want them published. - Approved portfolio examples and
client permissions. - Social profile URLs. - Confirmed booking rules and
pricing, if to be displayed.

------------------------------------------------------------------------

## 14. Quality assurance and acceptance criteria

Before finishing:

### Visual quality

-   The result feels bespoke, cinematic, and premium.
-   No gradients are present anywhere.
-   Typography has intentional roles and hierarchy.
-   Layouts have visual variety without losing consistency.
-   No generic repeated card grid dominates the site.
-   Imagery feels cinematic but is clearly replaceable until real assets
    arrive.
-   The website does not look like an Apple/Linear/Stripe clone.

### Functional quality

-   All required routes load.
-   Navigation and mobile menu work.
-   WhatsApp studio CTA and service CTA use different prefilled
    messages.
-   The WhatsApp number is centralized and not fabricated.
-   All links have real destinations or are clearly disabled/omitted
    until confirmed.
-   FAQ accordion works with keyboard and screen readers.
-   Forms, if included, validate correctly and never fake backend
    success.
-   No dead buttons or placeholder links such as `href="#"`.

### Motion and accessibility

-   Scroll reveals, parallax, and 3D effects work on supported devices.
-   Reduced-motion preference produces a calm, static alternative.
-   Mobile does not rely on hover.
-   No scroll traps or content hidden behind pinned sections.
-   Keyboard focus is visible.
-   No horizontal overflow at required viewport widths.

### Technical quality

-   TypeScript/build/lint checks pass where configured.
-   No console errors.
-   Images are optimized and do not cause layout shift.
-   Metadata exists for each route.
-   No unverified business claims.
-   Performance is checked at mobile size.
-   Code is organized and easy to maintain.

### Final response after implementation

When the build is complete, report: 1. What was implemented. 2.
Routes/pages created. 3. Main design and motion decisions. 4. Where the
WhatsApp number and social links must be configured. 5. Any remaining
real assets or business details needed before launch. 6. Checks actually
run and any failures still unresolved.

Do not claim a check passed unless you ran it. Do not stop after writing
a plan. Implement the website in the repository.
