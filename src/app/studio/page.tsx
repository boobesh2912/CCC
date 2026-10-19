import MotionReveal from '@/components/motion/MotionReveal';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import FAQAccordion from '@/components/sections/FAQAccordion';
import { studioFeatures } from '@/content/services';
import { studioFaqs } from '@/content/faqs';
import { getStudioBookingUrl } from '@/lib/whatsapp';
import styles from './studio.module.css';

export const metadata = {
  title: 'Studio & Production | Covai Creative Corner',
  description:
    'A considered recording environment for podcasts, video interviews, founder dialogues, and brand content.',
};

export default function StudioPage() {
  const useCases = [
    {
      title: 'Podcasts & Vodcasts',
      desc: 'Multi-microphone acoustic tracking with synchronized multi-camera switching for episodic conversation series.',
    },
    {
      title: 'Founder & Executive Dialogues',
      desc: 'Controlled cinematic framing tailored for investor decks, thought leadership, and company milestones.',
    },
    {
      title: 'Video Shoots & Commercial Vignettes',
      desc: 'Configurable studio space featuring controlled key and practical lighting for focused brand productions.',
    },
    {
      title: 'Content Batches & Social Repurposing',
      desc: 'High-efficiency recording sessions structured specifically for rapid vertical clip extraction and delivery.',
    },
  ];

  const enquiryPoints = [
    'Session format (Vodcast, interview, solo address, or commercial shoot)',
    'Preferred calendar date and target production window',
    'Estimated duration and session block requirements',
    'Level of technical crew support required (Space-only vs. fully staffed recording)',
  ];

  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="THE STUDIO" />
            <h1 className={styles.heroTitle}>A considered space to record, create, and produce.</h1>
            <p className={styles.heroSubtitle}>
              CCC provides a professional studio environment designed for clear acoustics, controlled
              cinematic lighting, and uninterrupted production momentum.
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
        </div>
      </section>

      {/* 2. TWO OPTIONS: RENTAL VS SUPPORTED */}
      <section className={styles.optionsSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="PRODUCTION TIERS" />
            <h2 className={styles.sectionHeading}>Flexible production capacity.</h2>
          </MotionReveal>

          <div className={styles.optionsGrid}>
            {/* Option A */}
            <MotionReveal direction="up" delay={100} className={styles.optionCard}>
              <div className={styles.optionHeader}>
                <span className={styles.optionTag}>TIER 01</span>
                <span className={styles.optionIndex}>SPACE ONLY</span>
              </div>
              <h3 className={styles.optionTitle}>Studio Rental</h3>
              <p className={styles.optionDesc}>
                Bring your own production team, crew, and specialized gear. Use our acoustically
                treated environment, quiet climate control, and established sets independently.
              </p>
              <div className={styles.specList}>
                <div className={styles.specItem}>✓ Independent space access</div>
                <div className={styles.specItem}>✓ Calibrated acoustic treatment</div>
                <div className={styles.specItem}>✓ Practical ambient studio lighting</div>
                <div className={styles.specItem}>✓ Dedicated greenroom and prep zone</div>
              </div>
            </MotionReveal>

            {/* Option B */}
            <MotionReveal direction="up" delay={200} className={styles.optionCardAccent}>
              <div className={styles.optionHeader}>
                <span className={styles.optionTagAccent}>TIER 02</span>
                <span className={styles.optionIndexAccent}>FULL SERVICE</span>
              </div>
              <h3 className={styles.optionTitle}>Supported Production</h3>
              <p className={styles.optionDesc}>
                Step in and record. CCC manages multi-track audio engineering, 4K camera capture,
                lighting adjustments, and seamless digital ingest directly to delivery drives.
              </p>
              <div className={styles.specList}>
                <div className={styles.specItem}>✓ Dedicated technical operator</div>
                <div className={styles.specItem}>✓ Broadcast multi-track recording</div>
                <div className={styles.specItem}>✓ Synchronized multi-angle camera monitoring</div>
                <div className={styles.specItem}>✓ Direct-to-drive footage handoff & cloud backup</div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3. SUITABLE USE CASES */}
      <section className={styles.useCasesSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="APPLICATIONS" />
            <h2 className={styles.sectionHeading}>Engineered for purposeful content.</h2>
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
              <SectionEyebrow text="PREPARATION CHECKLIST" />
              <h2 className={styles.enquiryHeading}>What to share when checking dates.</h2>
              <p className={styles.enquiryLead}>
                To confirm studio availability quickly on WhatsApp, having these few details ready
                helps us reserve the appropriate block:
              </p>

              <div className={styles.pointsGrid}>
                {enquiryPoints.map((point, idx) => (
                  <div key={idx} className={styles.pointRow}>
                    <span className={styles.pointNumber}>[{idx + 1}]</span>
                    <span className={styles.pointText}>{point}</span>
                  </div>
                ))}
              </div>

              <div className={styles.enquiryAction}>
                <WhatsAppCTA
                  href={getStudioBookingUrl()}
                  label="Message Studio On WhatsApp"
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
            <SectionEyebrow text="THE PATHWAY" />
            <h2 className={styles.sectionHeading}>Session progression.</h2>
          </MotionReveal>

          <div className={styles.stepsGrid}>
            <div className={styles.stepBox}>
              <div className={styles.stepNum}>STEP 01</div>
              <h3 className={styles.stepHeadline}>Initial WhatsApp Brief</h3>
              <p className={styles.stepParagraph}>Share target production dates and recording format requirements.</p>
            </div>
            <div className={styles.stepBox}>
              <div className={styles.stepNum}>STEP 02</div>
              <h3 className={styles.stepHeadline}>Availability Confirmation</h3>
              <p className={styles.stepParagraph}>CCC locks your calendar block and details technical setup protocols.</p>
            </div>
            <div className={styles.stepBox}>
              <div className={styles.stepNum}>STEP 03</div>
              <h3 className={styles.stepHeadline}>Session Calibration</h3>
              <p className={styles.stepParagraph}>Arrive at the studio. Mic soundcheck, lighting levels, and framing review.</p>
            </div>
            <div className={styles.stepBox}>
              <div className={styles.stepNum}>STEP 04</div>
              <h3 className={styles.stepHeadline}>Production & Delivery</h3>
              <p className={styles.stepParagraph}>Record the session, verify media integrity, and initiate post pipeline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STUDIO SPECIFIC FAQS */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeaderWrap}>
            <MotionReveal direction="up">
              <SectionEyebrow text="STUDIO QUERIES" />
              <h2 className={styles.sectionHeading}>Studio operations & policies.</h2>
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
                Send a quick enquiry via WhatsApp to verify current calendar openings and schedule your session.
              </p>
              <div className={styles.closingBtn}>
                <WhatsAppCTA
                  href={getStudioBookingUrl()}
                  label="Ask About Studio Availability"
                  variant="primary"
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
