import type { Metadata } from 'next';
import Link from 'next/link';
import MotionReveal from '@/components/motion/MotionReveal';
import ParallaxImage from '@/components/motion/ParallaxImage';
import TiltFrame from '@/components/motion/TiltFrame';
import ButtonLink from '@/components/ui/ButtonLink';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Marquee from '@/components/ui/Marquee';
import RotatingBadge from '@/components/ui/RotatingBadge';
import FAQAccordion from '@/components/sections/FAQAccordion';
import HeroStickers from '@/components/sections/HeroStickers';
import HeroVisual from '@/components/sections/HeroVisual';
import PlatformTiles from '@/components/sections/PlatformTiles';
import WhyCards from '@/components/sections/WhyCards';
import SplitText from '@/components/motion/SplitText';
import ProcessSequence from '@/components/sections/ProcessSequence';
import ServiceCards from '@/components/sections/ServiceCards';
import { processSteps, marqueeItems } from '@/content/services';
import { homeFaqs } from '@/content/faqs';
import { getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: { absolute: 'Covai Creative Corner — Personal Branding & Digital Marketing Agency' },
  alternates: { canonical: '/' },
  description:
    'Covai Creative Corner helps founders, creators and businesses expand their market and grow, with personal branding and digital marketing: Instagram, YouTube, LinkedIn, Meta Ads, Google Ads and SEO.',
};

// Illustrative formats only. Replace with real, approved work when available.
const formats = [
  {
    tag: 'ILLUSTRATIVE CONCEPT · 01',
    mark: 'SHORT-FORM VIDEO',
    title: 'Reels & Shorts series',
    desc: 'A recurring short-form series, scripted, shot and edited for Instagram and YouTube.',
    wrap: styles.capItemLarge,
    visual: styles.capVisualAspectWide,
  },
  {
    tag: 'ILLUSTRATIVE CONCEPT · 02',
    mark: 'THOUGHT LEADERSHIP',
    title: 'Founder & expert content',
    desc: 'LinkedIn and YouTube content that puts your expertise front and centre.',
    wrap: styles.capItemTall,
    visual: styles.capVisualAspectTall,
  },
  {
    tag: 'ILLUSTRATIVE CONCEPT · 03',
    mark: 'PAID CAMPAIGNS',
    title: 'Ad campaigns',
    desc: 'Meta and Google campaigns with creative built to earn the click.',
    wrap: styles.capItemStandard,
    visual: styles.capVisualAspectSquare,
  },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={`${styles.heroSection} bg-dots`} aria-label="Introduction">
        <div className="container">
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <MotionReveal direction="up" delay={100} immediate>
                <div className={styles.eyebrowWrapper}>
                  <SectionEyebrow text="COVAI · CREATIVE MARKETING AGENCY" />
                  <span className={styles.productionTag}>PERSONAL BRANDING / DIGITAL MARKETING</span>
                </div>
              </MotionReveal>

              <MotionReveal direction="up" delay={200} immediate>
                <SplitText
                  as="h1"
                  immediate
                  stagger={90}
                  className={styles.heroTitle}
                  parts={[{ text: 'Make room for a' }, { text: 'better story.', accent: true }]}
                />
              </MotionReveal>

              <MotionReveal direction="up" delay={300} immediate>
                <p className={styles.heroSubtitle}>
                  Personal branding and digital marketing for founders, creators and businesses who
                  want to expand their market and grow.
                </p>
              </MotionReveal>

              <MotionReveal direction="up" delay={400} immediate>
                <div className={styles.heroActions}>
                  <ButtonLink href="/contact#enquiry" variant="primary" size="large">
                    Start a Project
                  </ButtonLink>
                  <Link href="/services" className={styles.secondaryAction}>
                    Explore Services
                    <span className={styles.actionArrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </MotionReveal>

              <MotionReveal direction="none" delay={500} immediate>
                <div className={styles.scrollCue}>
                  <span className={styles.scrollLine} />
                  <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
                </div>
              </MotionReveal>
            </div>

            <div className={styles.heroMedia}>
              <RotatingBadge className={styles.heroBadge} />
              <HeroStickers />
              <MotionReveal direction="up" delay={250} immediate>
                <ParallaxImage speed={0.04}>
                  <TiltFrame>
                    <HeroVisual />
                  </TiltFrame>
                </ParallaxImage>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* 2. SERVICES */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesHead}>
            <MotionReveal direction="up">
              <SectionEyebrow text="01 · WHAT WE DO" variant="light" />
              <SplitText className={styles.servicesHeading} parts="Two services. One growing brand." />
            </MotionReveal>
            <MotionReveal direction="up" delay={150}>
              <Link href="/services" className={styles.pillLink}>
                All services
                <span aria-hidden="true">→</span>
              </Link>
            </MotionReveal>
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* 3. PLATFORMS */}
      <section className={`${styles.platformsSection} bg-dots`}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="02 · WHERE YOU SHOW UP" />
          </MotionReveal>
          <SplitText className={styles.sectionHeading} parts="Every platform that matters, covered." />
          <PlatformTiles />
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className={styles.processSection}>
        <div className="container">
          <MotionReveal direction="up">
            <div className={styles.processHeader}>
              <SectionEyebrow text="03 · HOW WE WORK" />
              <SplitText className={styles.sectionHeading} parts="From first idea to real momentum." />
              <p className={styles.processLead}>
                Four stages that take your brand from a rough idea to content and campaigns your
                audience actually sees.
              </p>
            </div>
          </MotionReveal>
          <ProcessSequence steps={processSteps} />
        </div>
      </section>

      {/* 5. WHY CCC */}
      <section className={styles.whySection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="04 · HOW WE THINK" variant="ink" />
          </MotionReveal>
          <SplitText className={styles.whyHeading} parts="Marketing with a point of view." />
          <WhyCards />
        </div>
      </section>

      {/* 6. WHAT WE CAN CREATE (illustrative) */}
      <section className={styles.capabilitiesSection}>
        <div className="container">
          <div className={styles.capabilitiesHeader}>
            <MotionReveal direction="up">
              <SectionEyebrow text="05 · WHAT WE CAN CREATE" />
              <SplitText className={styles.sectionHeading} parts="Content and campaigns built to be noticed." />
              <p className={styles.capabilitiesSub}>
                Illustrative formats, not client projects, showing the kinds of work CCC can help you
                make.
              </p>
            </MotionReveal>
          </div>

          <div className={styles.capabilitiesGrid}>
            {formats.map((f, i) => (
              <MotionReveal key={f.title} direction="up" delay={100 * (i + 1)} className={f.wrap}>
                <div className={f.visual}>
                  <div className={styles.capOverlayTag}>{f.tag}</div>
                  <div className={styles.capWatermark}>{f.mark}</div>
                </div>
                <div className={styles.capMeta}>
                  <h3 className={styles.capTitle}>{f.title}</h3>
                  <p className={styles.capDesc}>{f.desc}</p>
                </div>
              </MotionReveal>
            ))}
          </div>

          <div className={styles.capabilitiesAction}>
            <Link href="/work" className={styles.textLink}>
              See What We Can Create
              <span className={styles.actionArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Marquee
        variant="outline"
        reverse
        items={['Tell your story', 'Grow your brand', 'Expand your market']}
      />

      {/* 7. STUDIO — COMING SOON */}
      <section className={styles.soonSection}>
        <div className="container">
          <MotionReveal direction="up">
            <div className={styles.soonCard}>
              <div className={styles.soonText}>
                <span className={styles.soonBadge}>COMING SOON</span>
                <SplitText className={styles.soonTitle} parts="The CCC Studio is on its way." />
                <p className={styles.soonCopy}>
                  We&apos;re getting a space ready for podcasts, interviews and brand shoots. Want to
                  hear when it opens?
                </p>
              </div>
              <ButtonLink href="/studio" variant="ink" size="large">
                See what&apos;s coming
              </ButtonLink>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 6. PHILOSOPHY */}
      <section className={styles.philosophySection}>
        <div className="container">
          <div className={styles.philosophyBlock}>
            <MotionReveal direction="up">
              <SectionEyebrow text="06 · PHILOSOPHY" />
              <SplitText className={styles.philosophyHeading} parts="Good content starts before the camera rolls." />
            </MotionReveal>
            <MotionReveal direction="up" delay={150}>
              <p className={styles.philosophyBody}>
                The strongest brands are built with intention: a clear point of view, a thoughtful
                plan, and a reason for the audience to care. Marketing works best when it has a story
                worth telling.
              </p>
            </MotionReveal>
            <MotionReveal direction="up" delay={250}>
              <div className={styles.philosophyLinkWrap}>
                <Link href="/about" className={styles.textLink}>
                  Read About CCC&apos;s Approach
                  <span className={styles.actionArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className={`${styles.faqSection} bg-dots`}>
        <div className="container">
          <div className={styles.faqLayout}>
            <div className={styles.faqHeader}>
              <MotionReveal direction="up">
                <SectionEyebrow text="07 · QUESTIONS" />
                <SplitText className={styles.sectionHeading} parts="Frequently asked questions." />
                <p className={styles.faqSub}>
                  Quick answers about the services. For anything specific, send us an enquiry.
                </p>
              </MotionReveal>
            </div>
            <div className={styles.faqBody}>
              <MotionReveal direction="up" delay={150}>
                <FAQAccordion items={homeFaqs} />
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLOSING CTA */}
      <section className={styles.closingSection}>
        <div className="container">
          <div className={styles.closingCard}>
            <MotionReveal direction="up">
              <span className={styles.closingEyebrow}>LET&apos;S TALK</span>
              <SplitText className={styles.closingHeadline} parts="Ready to grow a brand people remember?" />
              <p className={styles.closingCopy}>
                Tell us about your brand and your goals. We&apos;ll help you figure out the right next
                step.
              </p>
              <div className={styles.closingActions}>
                <ButtonLink href="/contact#enquiry" variant="ink" size="large">
                  Start a Project
                </ButtonLink>
                <WhatsAppCTA
                  href={getServicesEnquiryUrl()}
                  label="Chat on WhatsApp"
                  variant="inkOutline"
                  size="large"
                  analyticsEvent="services_enquiry_click"
                />
              </div>
              <p className={styles.closingDisclaimer}>
                An enquiry starts a conversation. There&apos;s no commitment until we agree a plan
                together.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
