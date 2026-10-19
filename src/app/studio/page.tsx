import type { Metadata } from 'next';
import MotionReveal from '@/components/motion/MotionReveal';
import TiltFrame from '@/components/motion/TiltFrame';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import FAQAccordion from '@/components/sections/FAQAccordion';
import HeroVisual from '@/components/sections/HeroVisual';
import { studioFaqs } from '@/content/faqs';
import { getStudioBookingUrl } from '@/lib/whatsapp';
import styles from './studio.module.css';

export const metadata: Metadata = {
  title: 'Studio & Production',
  alternates: { canonical: '/studio' },
  description:
    'Book the CCC studio for podcasts, interviews, founder content, video shoots, and brand content — studio-only or with production support.',
};

// Use cases only — no equipment, capacity, hours, or pricing until CCC confirms them.
const useCases = [
  {
    title: 'Podcasts & video podcasts',
    desc: 'Conversations, interviews, and episodic shows recorded in a calm, focused space.',
  },
  {
    title: 'Interviews',
    desc: 'Sit-down interviews and guest conversations for your channel, brand, or team.',
  },
  {
    title: 'Founder content',
    desc: 'Founders and leaders sharing expertise, announcements, or an ongoing series.',
  },
  {
    title: 'Video shoots & brand content',
    desc: 'Short brand pieces, explainers, and content made for your social channels.',
  },
];

const enquiryPoints = [
  'Type of session — podcast, interview, video shoot, or something else',
  'Preferred date and time',
  'Approximate duration',
  'Support needed — studio only, or production support',
];

const steps = [
  { title: 'Enquire', body: 'Send a WhatsApp message with your session type, date, and duration.' },
  {
    title: 'Confirm the details',
    body: 'CCC confirms availability and talks through what your session needs.',
  },
  { title: 'Plan the session', body: 'Agree the format, timing, and any production support.' },
  {
    title: 'Record & create',
    body: 'Come in and make the work. Add editing afterwards if you need it.',
  },
];

export default function StudioPage() {
  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroLayout}`}>
          <MotionReveal direction="up" className={styles.heroText} immediate>
            <SectionEyebrow text="THE STUDIO" />
            <h1 className={styles.heroTitle}>A considered space to record, create, and produce.</h1>
            <p className={styles.heroSubtitle}>
              Book the studio for podcasts, interviews, founder content, video shoots, and brand
              content — on your own, or with production support from CCC.
            </p>
            <div className={styles.heroCtaWrap}>
              <WhatsAppCTA
                href={getStudioBookingUrl()}
                label="Ask About Studio Availability"
                variant="primary"
                size="large"
                analyticsEvent="studio_booking_click"
              />
            </div>
          </MotionReveal>

          {/* Illustrative composition — replace with real studio photography (see ASSET_REPLACEMENT_NOTES.md) */}
          <MotionReveal direction="up" delay={200} className={styles.heroMedia} immediate>
            <TiltFrame>
              <HeroVisual />
            </TiltFrame>
            <p className={styles.mediaCaption}>Illustrative composition · studio photography to follow</p>
          </MotionReveal>
        </div>
      </section>

      {/* 2. TWO OPTIONS: RENTAL VS SUPPORTED */}
      <section className={styles.optionsSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="TWO OPTIONS" />
            <h2 className={styles.sectionHeading}>Two ways to use the studio.</h2>
          </MotionReveal>

          <div className={styles.optionsGrid}>
            <MotionReveal direction="up" delay={100} className={styles.optionCard}>
              <div className={styles.optionHeader}>
                <span className={styles.optionTag}>OPTION 01</span>
                <span className={styles.optionIndex}>STUDIO ONLY</span>
              </div>
              <h3 className={styles.optionTitle}>Studio Rental</h3>
              <p className={styles.optionDesc}>
                Bring your own team and run the session your way. Book the space for recording or
                shooting, and add help from CCC only if you need it.
              </p>
              <ul className={styles.specList}>
                <li className={styles.specItem}>Book the space for your own session</li>
                <li className={styles.specItem}>Bring your own crew and setup</li>
                <li className={styles.specItem}>Add production help on request</li>
                <li className={styles.specItem}>Session details confirmed over WhatsApp</li>
              </ul>
            </MotionReveal>

            <MotionReveal direction="up" delay={200} className={styles.optionCardAccent}>
              <span id="production" className={styles.anchor} aria-hidden="true" />
              <div className={styles.optionHeader}>
                <span className={styles.optionTagAccent}>OPTION 02</span>
                <span className={styles.optionIndexAccent}>WITH SUPPORT</span>
              </div>
              <h3 className={styles.optionTitle}>Supported Production</h3>
              <p className={styles.optionDesc}>
                Prefer to focus on the conversation? CCC can help plan the session, support the
                recording, and take the footage into editing — depending on what your project needs.
              </p>
              <ul className={styles.specList}>
                <li className={styles.specItem}>Help planning the session format</li>
                <li className={styles.specItem}>Recording and shoot support</li>
                <li className={styles.specItem}>Editing and content delivery</li>
                <li className={styles.specItem}>Scope agreed before the session</li>
              </ul>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3. SUITABLE USE CASES */}
      <section id="use-cases" className={styles.useCasesSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="USE CASES" />
            <h2 className={styles.sectionHeading}>What people record here.</h2>
          </MotionReveal>

          <div className={styles.useCasesGrid}>
            {useCases.map((uc, i) => (
              <MotionReveal key={uc.title} direction="up" delay={i * 80} className={styles.useCaseItem}>
                <span className={styles.useCaseIndex}>0{i + 1}</span>
                <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                <p className={styles.useCaseDesc}>{uc.desc}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT TO SHARE WHEN ENQUIRING */}
      <section className={styles.enquiryPointsSection}>
        <div className="container">
          <div className={styles.enquiryCard}>
            <MotionReveal direction="up">
              <SectionEyebrow text="BEFORE YOU MESSAGE" />
              <h2 className={styles.enquiryHeading}>What to share when checking dates.</h2>
              <p className={styles.enquiryLead}>
                Including these details in your first WhatsApp message helps CCC check availability
                and reply with the right options:
              </p>

              <div className={styles.pointsGrid}>
                {enquiryPoints.map((point, idx) => (
                  <div key={point} className={styles.pointRow}>
                    <span className={styles.pointNumber}>[{idx + 1}]</span>
                    <span className={styles.pointText}>{point}</span>
                  </div>
                ))}
              </div>

              <div className={styles.enquiryAction}>
                <WhatsAppCTA
                  href={getStudioBookingUrl()}
                  label="Message the Studio on WhatsApp"
                  variant="primary"
                  analyticsEvent="studio_booking_click"
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 5. WORKFLOW: 4 SIMPLE STEPS */}
      <section className={styles.stepsSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="HOW BOOKING WORKS" />
            <h2 className={styles.sectionHeading}>From first message to recording.</h2>
          </MotionReveal>

          <ol className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <li key={step.title} className={styles.stepBox}>
                <div className={styles.stepNum}>STEP 0{i + 1}</div>
                <h3 className={styles.stepHeadline}>{step.title}</h3>
                <p className={styles.stepParagraph}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. STUDIO SPECIFIC FAQS */}
      <section id="studio-faqs" className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeaderWrap}>
            <MotionReveal direction="up">
              <SectionEyebrow text="STUDIO QUESTIONS" />
              <h2 className={styles.sectionHeading}>Studio questions.</h2>
            </MotionReveal>
          </div>
          <MotionReveal direction="up" delay={150}>
            <FAQAccordion items={studioFaqs} />
          </MotionReveal>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className={styles.closingSection}>
        <div className="container">
          <div className={styles.closingBox}>
            <MotionReveal direction="up">
              <h2 className={styles.closingTitle}>Ready to step into the studio?</h2>
              <p className={styles.closingText}>
                Send a quick WhatsApp message. CCC will check availability and confirm the details
                with you — your message starts the conversation; it isn&apos;t a confirmed booking.
              </p>
              <div className={styles.closingBtn}>
                <WhatsAppCTA
                  href={getStudioBookingUrl()}
                  label="Ask About Studio Availability"
                  variant="ink"
                  size="large"
                  analyticsEvent="studio_booking_click"
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
