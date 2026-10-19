import MotionReveal from '@/components/motion/MotionReveal';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { isWhatsAppConfigured, getStudioBookingUrl, getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact & Booking | Covai Creative Corner',
  description:
    'Start a WhatsApp conversation with CCC to book studio recording time or initiate a creative services enquiry.',
};

export default function ContactPage() {
  const isConfigured = isWhatsAppConfigured();

  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="DIRECT ENQUIRY" />
            <h1 className={styles.heroTitle}>Let&apos;s figure out the right next step.</h1>
            <p className={styles.heroSubtitle}>
              Whether you want to book studio recording sessions or structure a creative project,
              start with a direct WhatsApp message. CCC will respond directly to confirm details.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* 2. DUAL CONVERSION PATHS */}
      <section className={styles.pathsSection}>
        <div className="container">
          <div className={styles.pathsGrid}>
            {/* PATH A: STUDIO BOOKING */}
            <MotionReveal direction="up" delay={100} className={styles.pathCardDark}>
              <div className={styles.pathCardHeader}>
                <span className={styles.pathLabel}>PATHWAY 01</span>
                <span className={styles.pathIndicator}>STUDIO PRODUCTION</span>
              </div>
              <h2 className={styles.pathTitle}>Book the Studio</h2>
              <p className={styles.pathDesc}>
                Reserve the recording studio for a podcast series, video interview, founder talk, or
                creative session.
              </p>

              <div className={styles.checklistBlock}>
                <h4 className={styles.checklistHeading}>Suggested information to include:</h4>
                <ul className={styles.checklist}>
                  <li className={styles.checkItem}>
                    <span className={styles.bulletDark} />
                    <span>Type of session: Podcast / Video shoot / Other</span>
                  </li>
                  <li className={styles.checkItem}>
                    <span className={styles.bulletDark} />
                    <span>Preferred target date & time window</span>
                  </li>
                  <li className={styles.checkItem}>
                    <span className={styles.bulletDark} />
                    <span>Estimated recording duration</span>
                  </li>
                  <li className={styles.checkItem}>
                    <span className={styles.bulletDark} />
                    <span>Support level: Studio only vs. Production crew</span>
                  </li>
                </ul>
              </div>

              <div className={styles.cardAction}>
                <WhatsAppCTA
                  href={getStudioBookingUrl()}
                  label="Ask About Studio Availability"
                  variant="primary"
                  size="large"
                  analyticsEvent="studio_booking_click"
                />
              </div>
              <p className={styles.actionNote}>
                Clicking opens a prefilled WhatsApp conversation. Session times are confirmed
                manually by CCC based on room availability.
              </p>
            </MotionReveal>

            {/* PATH B: CREATIVE SERVICES */}
            <MotionReveal direction="up" delay={200} className={styles.pathCardPaper}>
              <div className={styles.pathCardHeader}>
                <span className={styles.pathLabelPaper}>PATHWAY 02</span>
                <span className={styles.pathIndicatorPaper}>CREATIVE PARTNERSHIP</span>
              </div>
              <h2 className={styles.pathTitlePaper}>Discuss a Creative Project</h2>
              <p className={styles.pathDescPaper}>
                Reach out about content strategy, scripting, brand identity, podcast editing, or
                digital growth systems.
              </p>

              <div className={styles.checklistBlock}>
                <h4 className={styles.checklistHeadingPaper}>Suggested information to include:</h4>
                <ul className={styles.checklist}>
                  <li className={styles.checkItemPaper}>
                    <span className={styles.bulletPaper} />
                    <span>Your company, brand, or creator handle</span>
                  </li>
                  <li className={styles.checkItemPaper}>
                    <span className={styles.bulletPaper} />
                    <span>Core needs: Strategy / Editing / Identity / Marketing</span>
                  </li>
                  <li className={styles.checkItemPaper}>
                    <span className={styles.bulletPaper} />
                    <span>Brief project overview or current challenge</span>
                  </li>
                  <li className={styles.checkItemPaper}>
                    <span className={styles.bulletPaper} />
                    <span>Expected timeframe or launch milestone</span>
                  </li>
                </ul>
              </div>

              <div className={styles.cardAction}>
                <WhatsAppCTA
                  href={getServicesEnquiryUrl()}
                  label="Discuss a Creative Project"
                  variant="secondary"
                  size="large"
                  analyticsEvent="services_enquiry_click"
                />
              </div>
              <p className={styles.actionNotePaper}>
                Clicking opens a tailored WhatsApp message. CCC will evaluate project alignment and
                propose next steps.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS PROGRESSION */}
      <section className={styles.howSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="THE PROGRESSION" />
            <h2 className={styles.sectionHeading}>What happens after you reach out.</h2>
          </MotionReveal>

          <div className={styles.stepsRow}>
            <MotionReveal direction="up" delay={100} className={styles.stepItem}>
              <span className={styles.stepNum}>01</span>
              <h3 className={styles.stepTitle}>Direct Message</h3>
              <p className={styles.stepDesc}>
                Send your requirements over WhatsApp. No opaque web forms or ticketing systems.
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={200} className={styles.stepItem}>
              <span className={styles.stepNum}>02</span>
              <h3 className={styles.stepTitle}>Scope & Schedule</h3>
              <p className={styles.stepDesc}>
                We verify calendar openings, suggest equipment configurations, and outline project
                scope.
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={300} className={styles.stepItem}>
              <span className={styles.stepNum}>03</span>
              <h3 className={styles.stepTitle}>Execute & Produce</h3>
              <p className={styles.stepDesc}>
                Step into the studio or launch creative sprints with verified technical support.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 4. FALLBACK NOTICE FOR CLIENT TESTING */}
      {!isConfigured && (
        <section className={styles.fallbackNoticeSection}>
          <div className="container">
            <div className={styles.fallbackBox}>
              <span className={styles.fallbackTag}>DEPLOYMENT NOTICE FOR CCC CLIENT</span>
              <p className={styles.fallbackText}>
                The live WhatsApp number configuration variable (
                <code>NEXT_PUBLIC_WHATSAPP_NUMBER</code>) is currently using a placeholder. Add your
                international country code and digit sequence in <code>src/content/site.ts</code> or
                environment variables to activate direct one-click routing prior to production launch.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
