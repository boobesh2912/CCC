import MotionReveal from '@/components/motion/MotionReveal';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import EnquiryForm from '@/components/sections/EnquiryForm';
import { isWhatsAppConfigured, getStudioBookingUrl, getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact & Booking',
  alternates: { canonical: '/contact' },
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
          <MotionReveal direction="up" immediate>
            <SectionEyebrow text="DIRECT ENQUIRY" />
            <h1 className={styles.heroTitle}>Let&apos;s figure out the right next step.</h1>
            <p className={styles.heroSubtitle}>
              Whether you want to book studio recording sessions or structure a creative project,
              start with a WhatsApp message. CCC will reply to confirm availability and details.
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
                Ask about the studio for a podcast, video interview, founder content, or a creative
                session.
              </p>

              <div className={styles.checklistBlock}>
                <h3 className={styles.checklistHeading}>Suggested information to include:</h3>
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
                    <span>Support needed: studio only or production support</span>
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
                Opens WhatsApp with a prefilled message. Sessions are confirmed by CCC based on
                availability.
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
                Reach out about content strategy, scripting, brand identity, editing, social media,
                or digital marketing.
              </p>

              <div className={styles.checklistBlock}>
                <h3 className={styles.checklistHeadingPaper}>Suggested information to include:</h3>
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
                Opens WhatsApp with a prefilled message. CCC will reply to talk through next
                steps.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3. ENQUIRY FORM — prepares a WhatsApp message; nothing is sent to a server */}
      <section className={styles.formSection} id="enquiry" aria-labelledby="enquiry-heading">
        <div className="container">
          <div className={styles.formLayout}>
            <MotionReveal direction="up" className={styles.formIntro}>
              <SectionEyebrow text="WRITE IT OUT" variant="light" />
              <h2 id="enquiry-heading" className={styles.formHeading}>
                Prefer to fill in the details first?
              </h2>
              <p className={styles.formLead}>
                Answer a few questions and we&apos;ll turn them into a WhatsApp message for you to
                review and send.
              </p>
            </MotionReveal>
            <MotionReveal direction="up" delay={150}>
              <EnquiryForm />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS PROGRESSION */}
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
                Send your requirements over WhatsApp — use a button above or the form below.
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={200} className={styles.stepItem}>
              <span className={styles.stepNum}>02</span>
              <h3 className={styles.stepTitle}>Scope & Schedule</h3>
              <p className={styles.stepDesc}>
                CCC confirms availability for studio sessions, or talks through scope for creative
                projects.
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={300} className={styles.stepItem}>
              <span className={styles.stepNum}>03</span>
              <h3 className={styles.stepTitle}>Execute & Produce</h3>
              <p className={styles.stepDesc}>
                Come in and record, or start the creative work — with support agreed up front.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 5. FALLBACK NOTICE — shown only in development so it never reaches visitors */}
      {!isConfigured && process.env.NODE_ENV !== 'production' && (
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
