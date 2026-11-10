import type { Metadata } from 'next';
import MotionReveal from '@/components/motion/MotionReveal';
import TiltFrame from '@/components/motion/TiltFrame';
import ButtonLink from '@/components/ui/ButtonLink';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import HeroVisual from '@/components/sections/HeroVisual';
import { getStudioWaitlistUrl } from '@/lib/whatsapp';
import styles from './studio.module.css';

export const metadata: Metadata = {
  title: 'Studio — Coming Soon',
  alternates: { canonical: '/studio' },
  description:
    'The Covai Creative Corner studio is coming soon. Get in touch to hear when it opens.',
};

// Planned uses only: no equipment, capacity, hours, or pricing until CCC confirms them.
const plans = [
  {
    title: 'Podcasts & video podcasts',
    desc: 'A calm, focused space for conversations and episodic shows.',
  },
  {
    title: 'Interviews & founder content',
    desc: 'Sit-down conversations and expert content for your channels.',
  },
  {
    title: 'Brand shoots',
    desc: 'Short videos and content made for your social channels.',
  },
];

export default function StudioPage() {
  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroLayout}`}>
          <MotionReveal direction="up" className={styles.heroText} immediate>
            <div className={styles.eyebrowRow}>
              <SectionEyebrow text="THE STUDIO" />
              <span className={styles.soonBadge}>COMING SOON</span>
            </div>
            <h1 className={styles.heroTitle}>
              Something worth recording is <span className={styles.accent}>on its way.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              The CCC studio isn&apos;t open yet. We&apos;re getting a space ready for podcasts, interviews
              and brand shoots, and we&apos;d love to tell you when it&apos;s ready.
            </p>
            <div className={styles.heroActions}>
              <WhatsAppCTA
                href={getStudioWaitlistUrl()}
                label="Notify Me on WhatsApp"
                variant="primary"
                size="large"
                analyticsEvent="studio_waitlist_click"
              />
              <ButtonLink href="/services" variant="outline" size="large">
                Explore Services
              </ButtonLink>
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

      {/* 2. WHAT WE'RE PLANNING */}
      <section className={styles.plansSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="WHAT TO EXPECT" />
            <h2 className={styles.sectionHeading}>What the studio is being built for.</h2>
          </MotionReveal>

          <ul className={styles.plansGrid}>
            {plans.map((p, i) => (
              <li key={p.title} className={styles.planItem}>
                <MotionReveal direction="up" delay={i * 100} className={styles.planReveal}>
                  <article className={styles.plan}>
                    <span className={styles.planIndex}>0{i + 1}</span>
                    <h3 className={styles.planTitle}>{p.title}</h3>
                    <p className={styles.planDesc}>{p.desc}</p>
                  </article>
                </MotionReveal>
              </li>
            ))}
          </ul>
          <p className={styles.note}>
            Details such as availability, setup and pricing will be shared when the studio opens.
          </p>
        </div>
      </section>

      {/* 3. IN THE MEANTIME */}
      <section className={styles.meanwhileSection}>
        <div className="container">
          <MotionReveal direction="up">
            <div className={styles.meanwhile}>
              <div className={styles.meanwhileText}>
                <SectionEyebrow text="IN THE MEANTIME" variant="light" />
                <h2 className={styles.meanwhileTitle}>Need content made now?</h2>
                <p className={styles.meanwhileCopy}>
                  Our Personal Branding service already covers scripting, shooting and editing for
                  your channels. The studio will simply add another place to do it.
                </p>
              </div>
              <ButtonLink href="/services#personal-branding" variant="secondary" size="large">
                See Personal Branding
              </ButtonLink>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 4. NOTIFY */}
      <section id="notify" className={styles.closingSection}>
        <div className="container">
          <div className={styles.closingBox}>
            <MotionReveal direction="up">
              <SectionEyebrow text="GET NOTIFIED" variant="ink" />
              <h2 className={styles.closingTitle}>Want to hear when the studio opens?</h2>
              <p className={styles.closingText}>
                Send us a quick WhatsApp message and we&apos;ll keep you posted. It&apos;s not a booking,
                just a way to stay in the loop.
              </p>
              <div className={styles.closingBtn}>
                <WhatsAppCTA
                  href={getStudioWaitlistUrl()}
                  label="Notify Me on WhatsApp"
                  variant="ink"
                  size="large"
                  analyticsEvent="studio_waitlist_click"
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
