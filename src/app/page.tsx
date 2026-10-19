import Link from 'next/link';
import MotionReveal from '@/components/motion/MotionReveal';
import ParallaxImage from '@/components/motion/ParallaxImage';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import FAQAccordion from '@/components/sections/FAQAccordion';
import HeroVisual from '@/components/sections/HeroVisual';
import ProcessSequence from '@/components/sections/ProcessSequence';
import ServiceCards from '@/components/sections/ServiceCards';
import Marquee from '@/components/ui/Marquee';
import RotatingBadge from '@/components/ui/RotatingBadge';
import TiltFrame from '@/components/motion/TiltFrame';
import { studioFeatures, brandFeatures, processSteps } from '@/content/services';
import { homeFaqs } from '@/content/faqs';
import { getStudioBookingUrl, getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './page.module.css';

export const metadata = {
  title: { absolute: 'Covai Creative Corner — Creative Production Studio & Brand Partner' },
  alternates: { canonical: '/' },
  description:
    'A creative production studio and content partner for podcasts, video, brands, and content built to connect.',
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* 1. CINEMATIC HERO */}
      <section className={styles.heroSection} aria-label="Introduction">
        <div className="container">
          <div className={styles.heroLayout}>
            {/* Left Content Safe Area */}
            <div className={styles.heroContent}>
              <MotionReveal direction="up" delay={100} immediate>
                <div className={styles.eyebrowWrapper}>
                  <SectionEyebrow text="COVAI · CREATIVE PRODUCTION STUDIO" />
                  <span className={styles.productionTag}>RECORD / CREATE / PUBLISH</span>
                </div>
              </MotionReveal>

              <MotionReveal direction="up" delay={200} immediate>
                <h1 className={styles.heroTitle}>
                  Make room for a <span className={styles.heroAccent}>better story.</span>
                </h1>
              </MotionReveal>

              <MotionReveal direction="up" delay={300} immediate>
                <p className={styles.heroSubtitle}>
                  A production studio and creative partner for podcasts, video, brands, and
                  content built to connect.
                </p>
              </MotionReveal>

              <MotionReveal direction="up" delay={400} immediate>
                <div className={styles.heroActions}>
                  <WhatsAppCTA
                    href={getStudioBookingUrl()}
                    label="Book the Studio"
                    variant="primary"
                    analyticsEvent="studio_booking_click"
                  />
                  <Link href="/services" className={styles.secondaryAction}>
                    Explore Creative Services
                    <span className={styles.actionArrow} aria-hidden="true">→</span>
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

            {/* Right Asymmetrical Visual Composition */}
            <div className={styles.heroMedia}>
              <RotatingBadge className={styles.heroBadge} />
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

      <Marquee items={['Podcasts', 'Video', 'Brand identity', 'Social media', 'Marketing']} />

      {/* 2. STUDIO INTRO */}
      <section className={styles.studioIntroSection}>
        <div className="container">
          <div className={styles.studioIntroGrid}>
            <div className={styles.studioIntroText}>
              <MotionReveal direction="up">
                <SectionEyebrow text="01 · THE SPACE" />
                <h2 className={styles.sectionHeading}>A space to think out loud.</h2>
                <p className={styles.bodyParagraph}>
                  Bring the idea, the conversation, or the story. CCC gives you a considered space
                  to record it, with options for studio-only sessions or production support.
                </p>
                <div className={styles.introCta}>
                  <WhatsAppCTA
                    href={getStudioBookingUrl()}
                    label="Ask About Studio Availability"
                    variant="primary"
                    analyticsEvent="studio_booking_click"
                  />
                </div>
              </MotionReveal>
            </div>

            <div className={styles.studioIntroCrops}>
              <MotionReveal direction="up" delay={150}>
                <div className={styles.primaryCrop}>
                  <div className={styles.cropPlaceholder}>
                    <div className={styles.cropLabel}>STUDIO · WIDE</div>
                    <div className={styles.cropSpec}>PHOTOGRAPHY TO FOLLOW</div>
                  </div>
                </div>
              </MotionReveal>
              <MotionReveal direction="up" delay={300}>
                <div className={styles.secondaryCrop}>
                  <div className={styles.cropPlaceholderMini}>
                    <div className={styles.cropLabel}>DETAIL · CLOSE-UP</div>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TWO WAYS TO WORK WITH CCC */}
      <section className={styles.twoWaysSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="02 · WAYS TO WORK" />
            <h2 className={styles.sectionHeading}>Two ways to work with CCC.</h2>
          </MotionReveal>

          <div className={styles.twoWaysGrid}>
            {/* Track 01 */}
            <MotionReveal direction="up" delay={100} className={styles.wayCardDark}>
              <div className={styles.wayHeader}>
                <span className={styles.wayNumber}>01</span>
                <span className={styles.wayTag}>PRODUCTION</span>
              </div>
              <h3 className={styles.wayTitle}>Studio & Production</h3>
              <p className={styles.wayDescription}>
                From a quiet recording session to a fully supported shoot, choose the level of
                production help that fits your project.
              </p>
              <ul className={styles.wayList}>
                {studioFeatures.map((feat) => (
                  <li key={feat} className={styles.wayItem}>
                    <span className={styles.itemBullet} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.wayCta}>
                <WhatsAppCTA
                  href={getStudioBookingUrl()}
                  label="Plan a Studio Session"
                  variant="primary"
                  analyticsEvent="studio_booking_click"
                />
              </div>
            </MotionReveal>

            {/* Track 02 */}
            <MotionReveal direction="up" delay={200} className={styles.wayCardPaper}>
              <div className={styles.wayHeader}>
                <span className={styles.wayNumberPaper}>02</span>
                <span className={styles.wayTagPaper}>BRAND & CONTENT</span>
              </div>
              <h3 className={styles.wayTitlePaper}>Brand & Content</h3>
              <p className={styles.wayDescriptionPaper}>
                Build a clear voice and a repeatable content system, from the first idea to the
                final post.
              </p>
              <ul className={styles.wayList}>
                {brandFeatures.map((feat) => (
                  <li key={feat} className={styles.wayItemPaper}>
                    <span className={styles.itemBulletPaper} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.wayCta}>
                <WhatsAppCTA
                  href={getServicesEnquiryUrl()}
                  label="Discuss a Project"
                  variant="secondary"
                  analyticsEvent="services_enquiry_click"
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 4. SCROLL-LED PROCESS SEQUENCE */}
      <section className={styles.processSection}>
        <div className="container">
          <MotionReveal direction="up">
            <div className={styles.processHeader}>
              <SectionEyebrow text="03 · THE PROCESS" />
              <h2 className={styles.sectionHeading}>From idea to output.</h2>
              <p className={styles.processLead}>
                Four stages that take a piece of content from a rough idea to something your
                audience actually sees.
              </p>
            </div>
          </MotionReveal>

          <ProcessSequence steps={processSteps} />
        </div>
      </section>

      {/* 5. CAPABILITIES SHOWCASE */}
      <section className={styles.capabilitiesSection}>
        <div className="container">
          <div className={styles.capabilitiesHeader}>
            <MotionReveal direction="up">
              <SectionEyebrow text="04 · CAPABILITIES" />
              <h2 className={styles.sectionHeading}>What we can create.</h2>
              <p className={styles.capabilitiesSub}>
                Illustrative formats — not client projects — showing the kinds of work CCC can
                help you make.
              </p>
            </MotionReveal>
          </div>

          <div className={styles.capabilitiesGrid}>
            <MotionReveal direction="up" delay={100} className={styles.capItemLarge}>
              <div className={styles.capVisualAspectWide}>
                <div className={styles.capOverlayTag}>ILLUSTRATIVE CONCEPT · 01</div>
                <div className={styles.capWatermark}>PODCAST SERIES</div>
              </div>
              <div className={styles.capMeta}>
                <h3 className={styles.capTitle}>Episodic video podcasts</h3>
                <p className={styles.capDesc}>
                  A recurring conversation series, recorded and edited into full episodes.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={200} className={styles.capItemTall}>
              <div className={styles.capVisualAspectTall}>
                <div className={styles.capOverlayTag}>ILLUSTRATIVE CONCEPT · 02</div>
                <div className={styles.capWatermark}>FOUNDER CONTENT</div>
              </div>
              <div className={styles.capMeta}>
                <h3 className={styles.capTitle}>Founder conversations</h3>
                <p className={styles.capDesc}>
                  Founders and leaders sharing what they know, framed with care.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={300} className={styles.capItemStandard}>
              <div className={styles.capVisualAspectSquare}>
                <div className={styles.capOverlayTag}>ILLUSTRATIVE CONCEPT · 03</div>
                <div className={styles.capWatermark}>SOCIAL REPURPOSING</div>
              </div>
              <div className={styles.capMeta}>
                <h3 className={styles.capTitle}>Short-form clips</h3>
                <p className={styles.capDesc}>
                  Captioned vertical cuts for Reels, Shorts, and LinkedIn from one recording.
                </p>
              </div>
            </MotionReveal>
          </div>

          <div className={styles.capabilitiesAction}>
            <Link href="/work" className={styles.textLink}>
              See What We Can Create
              <span className={styles.actionArrow} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SERVICES */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesHead}>
            <MotionReveal direction="up">
              <SectionEyebrow text="05 · SERVICES" variant="light" />
              <h2 className={styles.servicesHeading}>Everything your story needs.</h2>
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

      {/* 7. PHILOSOPHY / ABOUT STATEMENT */}
      <section className={styles.philosophySection}>
        <div className="container">
          <div className={styles.philosophyBlock}>
            <MotionReveal direction="up">
              <SectionEyebrow text="06 · PHILOSOPHY" />
              <h2 className={styles.philosophyHeading}>
                Good content starts before the camera rolls.
              </h2>
            </MotionReveal>
            <MotionReveal direction="up" delay={150}>
              <p className={styles.philosophyBody}>
                The strongest content is built with intention: a clear point of view, a thoughtful
                production process, and a reason for the audience to care.
              </p>
            </MotionReveal>
            <MotionReveal direction="up" delay={250}>
              <div className={styles.philosophyLinkWrap}>
                <Link href="/about" className={styles.textLink}>
                  Read About CCC&apos;s Approach
                  <span className={styles.actionArrow} aria-hidden="true">→</span>
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqLayout}>
            <div className={styles.faqHeader}>
              <MotionReveal direction="up">
                <SectionEyebrow text="07 · QUESTIONS" />
                <h2 className={styles.sectionHeading}>Frequently asked questions.</h2>
                <p className={styles.faqSub}>
                  Quick answers on the studio and services. For anything specific, ask CCC on
                  WhatsApp.
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

      {/* 9. CLOSING CTA */}
      <section className={styles.closingSection}>
        <div className="container">
          <div className={styles.closingCard}>
            <MotionReveal direction="up">
              <span className={styles.closingEyebrow}>START ON RECORD</span>
              <h2 className={styles.closingHeadline}>Have something worth putting on record?</h2>
              <p className={styles.closingCopy}>
                Tell us what you&apos;re planning. We&apos;ll help you figure out the right next
                step.
              </p>
              <div className={styles.closingActions}>
                <WhatsAppCTA
                  href={getStudioBookingUrl()}
                  label="Book via WhatsApp"
                  variant="ink"
                  size="large"
                  analyticsEvent="studio_booking_click"
                />
                <WhatsAppCTA
                  href={getServicesEnquiryUrl()}
                  label="Discuss a Creative Project"
                  variant="inkOutline"
                  size="large"
                  analyticsEvent="services_enquiry_click"
                />
              </div>
              <p className={styles.closingDisclaimer}>
                Both buttons open a WhatsApp conversation with CCC. Sessions are confirmed by CCC
                based on availability — a message is not a booking.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
