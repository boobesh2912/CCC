import type { Metadata } from 'next';
import MotionReveal from '@/components/motion/MotionReveal';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import EnquiryForm from '@/components/sections/EnquiryForm';
import { isWhatsAppConfigured, getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact — Start a Project',
  alternates: { canonical: '/contact' },
  description:
    'Tell Covai Creative Corner about your brand, goals and monthly budget. Start a conversation about personal branding or digital marketing on WhatsApp.',
};

const nextSteps = [
  {
    title: 'You send your details',
    body: 'Fill in the form. It prepares a WhatsApp message for you to review and send.',
  },
  {
    title: 'We review and reply',
    body: 'CCC looks at your goals and budget, then replies with questions or a suggested way in.',
  },
  {
    title: 'We plan it together',
    body: 'If it is a fit, we agree the scope and the plan before any work starts.',
  },
];

export default function ContactPage() {
  const isConfigured = isWhatsAppConfigured();

  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <MotionReveal direction="up" immediate>
            <SectionEyebrow text="CONTACT" />
            <h1 className={styles.heroTitle}>
              Let&apos;s figure out the <span className={styles.accent}>right next step.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Tell us about your brand, your goals and your monthly budget. We&apos;ll reply on WhatsApp
              with the best way to begin.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* 2. ENQUIRY FORM — prepares a WhatsApp message; nothing is sent to a server */}
      <section className={styles.formSection} id="enquiry" aria-labelledby="enquiry-heading">
        <div className="container">
          <div className={styles.formLayout}>
            <MotionReveal direction="up" className={styles.formIntro}>
              <SectionEyebrow text="START A PROJECT" variant="light" />
              <h2 id="enquiry-heading" className={styles.formHeading}>
                Tell us what you&apos;re building.
              </h2>
              <p className={styles.formLead}>
                A few quick questions help us understand where you are and what would actually move the
                needle.
              </p>

              <ol className={styles.steps}>
                {nextSteps.map((step, i) => (
                  <li key={step.title} className={styles.step}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    <span>
                      <strong className={styles.stepTitle}>{step.title}</strong>
                      <span className={styles.stepBody}>{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </MotionReveal>

            <MotionReveal direction="up" delay={150} className={styles.formWrap}>
              <EnquiryForm />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3. PREFER TO CHAT */}
      <section className={styles.chatSection}>
        <div className="container">
          <div className={styles.chatBox}>
            <MotionReveal direction="up">
              <SectionEyebrow text="PREFER TO CHAT?" variant="ink" />
              <h2 className={styles.chatTitle}>Skip the form. Message us directly.</h2>
              <p className={styles.chatText}>
                Open WhatsApp with a starter message and tell us in your own words. Mention your
                brand, what you need and your monthly budget.
              </p>
              <div className={styles.chatBtn}>
                <WhatsAppCTA
                  href={getServicesEnquiryUrl()}
                  label="Chat on WhatsApp"
                  variant="ink"
                  size="large"
                  analyticsEvent="services_enquiry_click"
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 4. DEV-ONLY NOTICE — never shown in production */}
      {!isConfigured && process.env.NODE_ENV !== 'production' && (
        <section className={styles.fallbackNoticeSection}>
          <div className="container">
            <div className={styles.fallbackBox}>
              <span className={styles.fallbackTag}>DEVELOPMENT NOTICE</span>
              <p className={styles.fallbackText}>
                <code>NEXT_PUBLIC_WHATSAPP_NUMBER</code> is not set, so WhatsApp buttons and the
                enquiry form are switched off. Add the number (digits only, with country code) to
                your environment before launch.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
