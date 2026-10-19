# Covai Creative Corner (CCC)

## Website Design & Experience Brief

**Document type:** Creative direction, content strategy, UX
specification, and implementation brief\
**Status:** Ready for design and development\
**Business:** Covai Creative Corner (CCC)\
**Primary conversion paths:** WhatsApp studio booking and
business-services enquiry

------------------------------------------------------------------------

## 1. Project overview

Covai Creative Corner is a creative production studio and brand-growth
partner. It gives founders, business owners, creators, and teams a place
to record high-quality content and access the strategy and production
support needed to publish it consistently.

CCC combines two connected offers:

1.  **Studio and production:** studio rental, podcast recording, video
    shoots, recording support, editing, and content delivery.
2.  **Brand and content services:** content strategy, scripting,
    branding, social media management, and digital marketing.

The website must make these offers feel like one cohesive creative
partner, while making it easy to understand which service a visitor
needs and start a conversation through WhatsApp.

### Core positioning

**A creative studio for the stories and brands people need to notice.**

This is a working positioning line, not a mandatory final tagline. The
site should communicate that CCC is a place to create, and a partner
that helps turn raw ideas into clear, consistent, high-quality content.

### Audience

-   Founders and business owners who want to communicate their
    expertise.
-   Creators and podcasters who need a professional recording
    environment.
-   Teams that need campaign, interview, or brand content.
-   Businesses looking for a reliable partner for scripting, editing,
    publishing, and social media.
-   People who value quality, time, consistency, and a thoughtful
    creative process.

Do not mention or imply a specific monthly-revenue threshold in the
website copy.

------------------------------------------------------------------------

## 2. Goals and success criteria

### Business goals

-   Generate qualified studio enquiries and WhatsApp booking
    conversations.
-   Generate enquiries for production, branding, strategy, social media,
    and marketing services.
-   Show the relationship between physical production and ongoing
    content support.
-   Establish a premium, credible impression even before CCC has a large
    library of original photography.
-   Make service selection straightforward without overwhelming
    visitors.

### Visitor goals

-   Understand what CCC does within the first few seconds.
-   See the studio experience and types of content that can be created.
-   Find the service relevant to their needs.
-   Understand the process and what happens after contacting CCC.
-   Start a WhatsApp conversation with useful context prefilled.

### Success indicators

Track these when analytics are configured: - WhatsApp studio-booking
clicks. - WhatsApp business-enquiry clicks. - Contact-form submissions,
if a form is added. - Service-page visits and CTA click-through rates. -
Mobile performance, page load, and Core Web Vitals. - Search impressions
and clicks for relevant local and service terms.

Do not fabricate client counts, testimonials, awards, project outcomes,
or performance metrics.

------------------------------------------------------------------------

## 3. Creative direction: cinematic, tactile, premium

### The desired feeling

-   Cinematic, intimate, crafted, confident, and contemporary.
-   A real creative space rather than a generic software startup or
    template agency.
-   Editorial compositions with deliberate asymmetry and strong
    hierarchy.
-   Physical depth: frames, layers, shadows, crop changes, object
    movement, and parallax.
-   A restrained palette and material-led design instead of decorative
    effects.

### Avoid

-   Gradients of any kind, including gradient text, backgrounds,
    borders, and glow treatments.
-   Generic Apple, Linear, or Stripe-inspired landing-page clones.
-   Repetitive rounded cards arranged in a predictable three-column
    grid.
-   SaaS dashboard aesthetics, neon glows, excessive glassmorphism, and
    meaningless floating blobs.
-   Overused AI-site tropes: huge centered heading plus two buttons plus
    a gradient orb.
-   Unsubstantiated social proof, invented client logos, fake
    testimonials, or fake project metrics.
-   Scroll effects that make reading difficult, trap the user, or delay
    access to the content.

### Visual references in words

Think of a cinematic production studio photographed for an independent
creative magazine: dark matte surfaces, controlled warm practical
lights, tactile materials, rich black levels, grain used sparingly,
close-up equipment details, and editorial typography. The website should
feel art-directed rather than merely decorated.

------------------------------------------------------------------------

## 4. Brand and design system

These are starting tokens. Refine them after checking contrast and
testing actual imagery.

### Colour palette

  --------------------------------------------------------------------------
  Token                   Value                      Use
  ----------------------- -------------------------- -----------------------
  `--ccc-ink`             `#111110`                  Primary background /
                                                     dark sections

  `--ccc-panel`           `#1B1B19`                  Raised surfaces and
                                                     alternate panels

  `--ccc-paper`           `#F1EEE7`                  Light editorial
                                                     sections

  `--ccc-muted`           `#B8B3AA`                  Secondary text on dark
                                                     surfaces

  `--ccc-ink-muted`       `#5E5A54`                  Secondary text on light
                                                     surfaces

  `--ccc-accent`          `#C77A4B`                  Restrained burnt-orange
                                                     accent

  `--ccc-line-dark`       `rgba(241,238,231,0.16)`   Borders on dark
                                                     surfaces

  `--ccc-line-light`      `rgba(17,17,16,0.16)`      Borders on light
                                                     surfaces
  --------------------------------------------------------------------------

Rules: - No gradients. - Use the accent selectively for small labels,
active states, markers, and CTA emphasis. - Avoid making every button,
icon, and heading the accent colour. - Keep contrast accessible. Do not
use muted text for essential content if contrast fails. - Use solid
colours and actual photography for visual richness.

### Typography: intentionally varied, not random

Use three complementary roles, each with a clear job:

1.  **Display serif:** `DM Serif Display` or `Cormorant Garamond` for
    oversized editorial statements and selected section titles.
2.  **Sans-serif:** `Manrope` or `Plus Jakarta Sans` for navigation,
    body copy, buttons, and UI.
3.  **Monospace:** `IBM Plex Mono` for small production labels, section
    indexes, timestamps, and technical annotations.

Use one display face, one sans-serif, and one monospace family at most.
Load fonts locally where licensing permits, or use a reliable font
provider with appropriate fallbacks. Do not use typography variation as
random decoration. Define a consistent type scale using `clamp()`.

Suggested hierarchy: - Hero statement: responsive, tight line-height,
3--5 lines maximum on desktop. - Section heading: expressive serif or
strong sans, depending on the section. - Body copy: comfortable reading
size and line length. - Eyebrow labels: monospace, uppercase,
letter-spaced, concise. - Buttons: sans-serif, medium weight, clear
verbs.

### Layout and spacing

-   Use a responsive grid with a strong left alignment and occasional
    deliberate overlap.
-   Desktop content width: approximately 1200--1400px, with generous
    outer margins.
-   Use a consistent spacing scale and fluid spacing via `clamp()`.
-   Alternate dark cinematic sections with occasional paper-colour
    editorial sections.
-   Use large image crops, split compositions, horizontal image strips,
    and layered typography instead of repeating identical cards.
-   Keep the navigation legible and the primary CTA visible.

### Shape and material

-   Prefer square or lightly rounded corners; avoid excessive
    pill-shaped containers.
-   Use thin borders, restrained shadows, image masks, subtle texture,
    and offset layers.
-   Add fine film-grain texture only if it does not harm readability or
    performance.
-   No gradients or fake glass surfaces.

------------------------------------------------------------------------

## 5. Site architecture

### Required pages

1.  **Home** --- overall positioning, studio introduction, service
    overview, work preview, process, and CTA.
2.  **Studio & Production** --- what can be recorded, rental vs
    supported production, equipment/amenities only when verified,
    process, and booking CTA.
3.  **Creative Services** --- content strategy, scripting, editing,
    branding, social media management, and digital marketing.
4.  **Work / Selected Projects** --- only real projects with approved
    visuals and accurate descriptions. If there is not enough real work
    yet, label it "Selected Experiments" or launch with a restrained
    capabilities showcase rather than fabricated case studies.
5.  **About CCC** --- philosophy, approach, and real team details once
    supplied.
6.  **Contact / Book a Session** --- separate paths for studio bookings
    and broader business enquiries.

Optional later pages: - Individual service detail pages for SEO. -
Insights / journal for useful content. - FAQs. - Privacy policy and
terms, as applicable.

The initial implementation may use a single scrolling home page plus
separate Studio, Services, Work, and Contact routes if the project scope
is small. Keep the architecture easy to expand.

------------------------------------------------------------------------

## 6. Homepage experience, section by section

### A. Navigation

-   Wordmark: "COVAI CREATIVE CORNER" with a compact "CCC" mark if a
    final logo is not available.
-   Links: Studio, Services, Work, About.
-   Main CTA: "Book the Studio" or "Start a Project".
-   On mobile, use a compact accessible menu and a clear WhatsApp
    action.
-   Navigation can begin transparent over the hero and transition to a
    solid background after scrolling. Do not let text become unreadable
    over imagery.

### B. Cinematic hero

Use an asymmetric hero, not a generic centered SaaS hero.

Suggested copy: - Eyebrow: `COVAI · CREATIVE PRODUCTION STUDIO` -
Headline: **Make room for a better story.** - Supporting copy: "A
production studio and creative partner for podcasts, video, brands, and
content built to connect." - Primary CTA: "Book the Studio" - Secondary
CTA: "Explore Creative Services"

Visual: - A large, cinematic still or short muted looping video of a
real studio setup: microphone, camera, practical lights, table, and
acoustic materials. - Use a full-bleed image, split frame, or oversized
crop with editorial text layered over a safe area. - If real assets are
not available, use a temporary licensed/approved placeholder and mark it
clearly for replacement. Never imply a stock image is CCC's actual
studio. - Add small production-style annotations such as
`RECORD / CREATE / PUBLISH` or a section index.

Motion: - Slow, restrained image parallax on pointer/scroll where
supported. - Text reveals in short staggered groups. - One tactile hover
or cursor response on a decorative frame, not on every element. -
Respect reduced-motion preferences.

### C. Studio introduction

Headline: **A space to think out loud.** Copy: "Bring the idea, the
conversation, or the story. CCC gives you a considered space to record
it, with options for studio-only sessions or production support." Use
one large studio image and a secondary detail crop. Add a small fact
rail only for verified details such as location, booking duration,
equipment, or capacity.

CTA: "Ask About Studio Availability".

### D. Two ways to work with CCC

Create a visual split or overlapping editorial composition, not two
generic cards.

**01 --- Studio & Production** "From a quiet recording session to a
fully supported shoot, choose the level of production help that fits
your project." - Studio rental - Podcast and video recording - Editing
and content delivery - Production support, where available

CTA: "Plan a Studio Session"

**02 --- Brand & Content** "Build a clear voice and a repeatable content
system, from the first idea to the final post." - Content strategy and
scripting - Branding and identity - Video editing - Social media
management - Digital marketing

CTA: "Discuss a Project"

Do not promise a specific deliverable, turnaround, or included equipment
until CCC confirms it.

### E. Scroll-led "from idea to output" sequence

Build a pinned or semi-pinned sequence only if it works on mobile and
does not trap scroll.

Stages: 1. **Shape the idea** --- define the audience, message, and
format. 2. **Set the scene** --- plan the recording, visuals, and
production needs. 3. **Make the work** --- record, shoot, design, or
edit. 4. **Put it to work** --- prepare content for the channels where
the audience will see it.

Visual treatment: - A timeline, frame-by-frame storyboard, or four
changing image crops. - Images can move at different speeds for depth. -
A simple progress marker updates as the user scrolls. - The content
remains readable without JavaScript and on narrow screens.

### F. Selected work / capabilities

-   Use actual CCC projects only after the client supplies them.
-   Show each project with a distinctive image ratio or layout.
-   Each item can include project type, the problem, CCC's contribution,
    and the output.
-   Do not publish client names or work without permission.
-   If there are no approved projects, use a "What we can create"
    section with clearly illustrative concepts, not fake case studies.

### G. Creative services showcase

Present services as editorial rows, a numbered list, or a horizontal
rail that transforms on hover: - Content strategy - Scripting and
creative direction - Video and podcast editing - Brand identity - Social
media management - Digital marketing

On hover/focus, reveal a concise description or preview image. On touch
devices, use tap-to-expand. Every service must remain discoverable
without hover.

### H. About / philosophy

Headline: **Good content starts before the camera rolls.** Copy: "The
strongest content is built with intention: a clear point of view, a
thoughtful production process, and a reason for the audience to care."
Keep claims grounded. Add real founder/team information when supplied.
Do not invent a founder story or years of experience.

### I. FAQ

Potential questions: - Can I rent the studio without production
support? - Can CCC help with recording and editing? - Can you help plan
topics and scripts? - Do you offer ongoing social media support? - How
do I check availability and pricing? - What should I bring to a studio
session?

Answers must be confirmed with the client before launch. Where details
are unknown, use a WhatsApp CTA rather than inventing policies.

### J. Closing CTA

Headline: **Have something worth putting on record?** Supporting copy:
"Tell us what you're planning. We'll help you figure out the right next
step." Buttons: - "Book via WhatsApp" - "Discuss a Creative Project"

### K. Footer

Include: - CCC wordmark. - Studio, Services, Work, About, Contact
links. - WhatsApp and confirmed social links. - Actual location and
contact details only after confirmation. - Copyright year generated
dynamically. - Privacy policy link if data collection or analytics
require it.

------------------------------------------------------------------------

## 7. WhatsApp booking and enquiry flow

WhatsApp is a required primary conversion path.

### Two distinct CTA paths

**Studio booking** Prefilled message example: "Hi CCC, I'm interested in
booking the studio.\
Type of session: \[Podcast / Video shoot / Other\]\
Preferred date: \[Date\]\
Preferred time: \[Time\]\
Support needed: \[Studio only / Production support\]"

**Business services** Prefilled message example: "Hi CCC, I'd like to
discuss a creative project.\
Business/brand: \[Name\]\
What I need help with: \[Content strategy / Production / Branding /
Social media / Marketing / Other\]\
Brief overview: \[A few details\]"

### Implementation

-   Use the official `https://wa.me/` click-to-chat format with a
    verified international phone number.
-   Store the number in one configuration variable,
    e.g. `NEXT_PUBLIC_WHATSAPP_NUMBER`, containing digits only with
    country code. Never invent the number.
-   Encode message text safely using `encodeURIComponent`.
-   If the number is not yet supplied, use a clearly named placeholder
    and block production launch until replaced.
-   Open WhatsApp in a new tab where appropriate and include safe link
    attributes.
-   Provide a visible fallback contact method if WhatsApp cannot open.
-   Track CTA click events without sending message contents or sensitive
    data to analytics.
-   Do not pretend that clicking the button confirms a booking. It
    starts a conversation; CCC confirms availability manually unless a
    booking system is added later.

### Optional booking form

If needed, provide a short form that captures session type, preferred
date/time, name, and contact method, then opens WhatsApp with the
details. Do not collect unnecessary sensitive data. Add validation and a
privacy note. The form must not claim to submit to a backend unless one
is implemented.

------------------------------------------------------------------------

## 8. Motion, parallax, and 3D interaction rules

The site should feel tactile and alive while staying usable.

### Allowed motion patterns

-   Scroll-triggered reveal: opacity plus a small vertical translation,
    with staggered groups.
-   Image parallax: subtle and capped, using transform rather than
    layout-affecting properties.
-   Layered depth: background image, foreground frame, and text moving
    at different rates.
-   Scroll-linked section progress indicators.
-   Hover image crop changes, underline movement, and small
    magnetic-style CTA response on pointer devices.
-   Lightweight 3D tilt on one or two intentional visual elements, such
    as a framed project image or studio scene.
-   A rotating or floating 3D object only if it supports the studio
    story and is not a generic decorative orb.
-   Smooth transitions between dark and light sections, using solid
    colours rather than gradients.

### Performance and accessibility requirements

-   Use CSS transforms and opacity for animation where possible.
-   Avoid scroll event handlers that run expensive work on every frame;
    use Intersection Observer or a well-supported animation library.
-   Use GSAP/ScrollTrigger only if the experience genuinely requires
    timeline/pinned sequences; otherwise use CSS and Intersection
    Observer.
-   Use Three.js only if a real 3D scene adds clear value. Prefer CSS 3D
    for small effects.
-   Lazy-load non-critical images and 3D modules.
-   Keep the main thread responsive; avoid large uncompressed video and
    heavy 3D assets.
-   Respect `prefers-reduced-motion: reduce`; replace parallax and 3D
    movement with static states and simplify reveals.
-   Do not hijack scrolling, force scroll snapping, or prevent users
    from scrolling normally.
-   Make interactive elements keyboard accessible and ensure focus
    styles remain visible.
-   No essential information should depend on animation, hover, or
    WebGL.

### Mobile motion

-   Reduce or disable pointer-follow effects.
-   Remove heavy parallax and complex pinned sequences on small screens.
-   Use simple reveals, natural document flow, and touch-friendly
    controls.
-   Test on lower-powered devices and slower connections.

------------------------------------------------------------------------

## 9. Technical implementation recommendation

Use the client's existing stack if one is already established. If
starting fresh, use:

-   **Framework:** Next.js with App Router and TypeScript.
-   **Styling:** CSS Modules or a well-structured global CSS system;
    Tailwind is acceptable if it does not result in generic component
    styling.
-   **Animation:** CSS transitions and Intersection Observer first;
    GSAP/ScrollTrigger only for complex scroll sequences.
-   **3D:** CSS 3D for lightweight interactions; Three.js only when
    justified.
-   **Icons:** Lucide or custom SVGs, used consistently.
-   **Forms:** Client-side validation initially; connect a real endpoint
    or CRM only when configured.
-   **Deployment:** Vercel or the client's existing host.
-   **Content:** Keep service descriptions, contact data, and social
    links in a central configuration/content file.
-   **Analytics:** Add only after the client selects a provider and
    configures consent/privacy requirements.

Do not add a CMS, database, auth, or complex booking backend unless the
client needs it. WhatsApp is sufficient for the initial enquiry flow.

### Suggested component structure

-   `SiteHeader`
-   `MobileNavigation`
-   `CinematicHero`
-   `SectionEyebrow`
-   `StudioIntro`
-   `OfferSplit`
-   `ProcessSequence`
-   `ProjectShowcase`
-   `ServiceList`
-   `AboutStatement`
-   `FAQAccordion`
-   `WhatsAppCTA`
-   `ContactFooter`
-   `MotionReveal`
-   `ReducedMotionProvider` or equivalent shared motion utility

### Suggested project structure

Adapt to the generated app, but keep separation of concerns:

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

------------------------------------------------------------------------

## 10. Content and asset plan

CCC currently has no confirmed usable brand asset library. The build
must accommodate this without fabricating reality.

### Asset priorities

1.  A real studio wide shot.
2.  Close-ups of microphones, camera rig, lighting, set details, and
    acoustic materials.
3.  A real recording in progress, with releases/permission.
4.  Portraits of the founder/team if desired.
5.  Real work samples: podcast clips, campaign content, brand identity,
    or edited videos.
6.  A simple CCC wordmark and favicon.

### Interim assets

-   Use licensed stock imagery or generated concept imagery only as a
    temporary design placeholder.
-   Do not label placeholder imagery as a real CCC project or actual
    studio.
-   Put replacement instructions in code comments or asset
    documentation.
-   Avoid unlicensed images, famous brand logos, and fake testimonials.
-   Build layouts with replaceable image slots and correct aspect
    ratios.

### Copywriting voice

-   Clear, assured, creative, and specific.
-   Avoid agency jargon such as "360-degree solutions," "disruptive
    synergy," or "we take your brand to the next level."
-   Explain what CCC does and what the customer can do next.
-   Prefer concise sentences and strong verbs.
-   Never claim guaranteed growth, virality, leads, or revenue.

------------------------------------------------------------------------

## 11. SEO and discoverability

### Technical SEO

-   Unique title and meta description per page.
-   One clear H1 per page, with a logical H2/H3 structure.
-   Canonical URLs and a valid sitemap/robots configuration.
-   Open Graph and social sharing metadata.
-   Descriptive alt text for meaningful images; empty alt for decorative
    images.
-   Descriptive URLs such as `/studio`, `/services`, `/work`, and
    `/contact`.
-   Add structured data only when factual information is available.
-   Do not invent a street address, opening hours, phone number, or
    review rating.
-   Optimize images with modern formats, responsive sizes, and explicit
    width/height.
-   Ensure text is rendered in a crawlable way and key content is not
    only client-side animation.

### Content themes

-   Podcast and video studio rental in Coimbatore/Covai, once location
    is confirmed.
-   Podcast recording and video production.
-   Content strategy and scripting.
-   Brand identity and social media management.
-   Digital marketing services.

Use local keywords naturally. Confirm whether CCC is in Coimbatore and
the exact service area before publishing local SEO claims.

------------------------------------------------------------------------

## 12. Accessibility and responsive behaviour

### Accessibility

-   Aim for WCAG 2.2 AA.
-   Keyboard access to all menus, accordions, buttons, and forms.
-   Visible focus states.
-   Sufficient colour contrast.
-   Semantic HTML and meaningful link text.
-   Captions or transcripts for meaningful video/audio.
-   Provide a pause/stop option for any non-essential autoplay motion.
-   Avoid flashing and rapid motion.
-   Respect reduced motion.
-   Make errors clear and associated with form fields.
-   Do not use colour alone to convey state.

### Responsive breakpoints

Use content-driven breakpoints, not device-name assumptions. Test at
least: - Small mobile: 320--375px. - Standard mobile: 390--430px. -
Tablet: 768--1024px. - Laptop: 1280--1440px. - Large desktop: 1600px and
above.

### Responsive rules

-   Headline scales fluidly and never overflows.
-   Navigation becomes an accessible mobile menu.
-   Overlapping desktop compositions return to natural flow on mobile.
-   Images retain intentional crops and focal points.
-   Buttons have touch-friendly hit areas.
-   No horizontal overflow except deliberate, keyboard-accessible
    carousels.
-   Disable or simplify heavy 3D and parallax on mobile.
-   Keep WhatsApp CTAs easy to find without covering content.

------------------------------------------------------------------------

## 13. Privacy, reliability, and operational notes

-   Do not include API keys, private tokens, or credentials in
    client-side code.
-   Do not collect form data unless the destination and privacy handling
    are defined.
-   Use a real phone number and real social URLs before launch.
-   Ensure all links and CTAs work.
-   Add a privacy policy if analytics, embedded media, or form handling
    require it.
-   Avoid autoplay audio.
-   If background video is used, mute it, provide a poster image, and
    disable it under reduced-motion/data-saving conditions where
    feasible.
-   Provide meaningful loading and fallback states for media.

------------------------------------------------------------------------

## 14. Launch checklist

### Content

-   [ ] Business name and spelling approved.
-   [ ] Phone number and WhatsApp number verified.
-   [ ] Studio location and service area confirmed.
-   [ ] Services and production capabilities confirmed.
-   [ ] Pricing and booking policies either confirmed or omitted.
-   [ ] Images and work samples approved for use.
-   [ ] Testimonials, logos, and client names used only with permission.
-   [ ] Social links verified.

### Design and motion

-   [ ] No gradients anywhere.
-   [ ] Visual identity is cinematic and not a generic template.
-   [ ] Typography has clear, consistent roles.
-   [ ] Parallax and scroll reveals are subtle and intentional.
-   [ ] Reduced-motion state works.
-   [ ] Mobile layout is fully usable without hover.
-   [ ] No scroll hijacking or animation traps.

### Engineering

-   [ ] All routes load and have metadata.
-   [ ] WhatsApp links open with the correct prefilled message.
-   [ ] Placeholder phone number cannot ship unnoticed.
-   [ ] Forms validate and communicate what happens next.
-   [ ] Images are optimized and dimensions are set.
-   [ ] Keyboard and screen-reader basics are tested.
-   [ ] No console errors, broken links, or horizontal overflow.
-   [ ] Performance checked on mobile.
-   [ ] Sitemap, robots, and favicon configured.

------------------------------------------------------------------------

## 15. Final creative principle

**Make CCC feel like a place where meaningful work gets made.**

The website should combine the atmosphere of a real production studio
with the clarity of a thoughtful creative partner. Every animation,
image, type treatment, and CTA should help visitors imagine what they
could create with CCC and make it easy to take the next step.
