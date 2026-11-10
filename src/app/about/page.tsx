import type { Metadata } from 'next';
import Link from 'next/link';
import ButtonLink from '@/components/ui/ButtonLink';
import MotionReveal from '@/components/motion/MotionReveal';
import SplitText from '@/components/motion/SplitText';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About CCC',
  alternates: { canonical: '/about' },
  description:
    'The approach behind Covai Creative Corner: a personal branding and digital marketing agency built on a clear point of view and a thoughtful plan.',
};

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Start with intention.',
      body: 'Every project begins with a clear understanding of who it is for and what it needs to say. Before we plan a post, a shoot or a campaign, we pin down the message so everything that follows carries weight.',
    },
    {
      num: '02',
      title: 'Make it with care.',
      body: 'Quality comes from preparation as much as tools: a clear plan, attention to detail in every post and ad, and an honest look at what is working.',
    },
    {
      num: '03',
      title: 'Put it where it matters.',
      body: 'Content only matters once people see it. We help adapt the work for the channels your audience uses, without losing what it was meant to say.',
    },
  ];

  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <MotionReveal direction="up" immediate>
            <SectionEyebrow text="ABOUT CCC" />
            <SplitText as="h1" immediate className={styles.heroTitle} parts="Good content starts before the camera rolls." />
            <p className={styles.heroSubtitle}>
              Covai Creative Corner is a personal branding and digital marketing agency built around one
              conviction: the strongest work comes from a clear point of view, a thoughtful plan,
              and respect for the audience&apos;s attention.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* 2. PHILOSOPHY & VALUES */}
      <section className={styles.philosophySection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="OPERATING PRINCIPLES" />
            <h2 className={styles.sectionHeading}>How we approach the work.</h2>
          </MotionReveal>

          <div className={styles.principlesGrid}>
            {principles.map((pr) => (
              <MotionReveal key={pr.num} direction="up" className={styles.principleCard}>
                <span className={styles.principleNum}>{pr.num}</span>
                <h3 className={styles.principleTitle}>{pr.title}</h3>
                <p className={styles.principleBody}>{pr.body}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TWO CONNECTED OFFERS OVERVIEW */}
      <section className={styles.offersSection}>
        <div className="container">
          <div className={styles.offersLayout}>
            <div className={styles.offerLeft}>
              <MotionReveal direction="up">
                <SectionEyebrow text="HOW IT FITS TOGETHER" />
                <h2 className={styles.sectionHeading}>Two services that work as one.</h2>
                <p className={styles.offerLead}>
                  Personal Branding builds the story and the content. Digital Marketing puts it in front
                  of the people who matter. Together, they help you expand your market and grow.
                </p>
              </MotionReveal>
            </div>

            <div className={styles.offerCards}>
              <MotionReveal direction="up" delay={100} className={styles.offerCardDark}>
                <h3 className={styles.offerCardTitle}>Personal Branding</h3>
                <p className={styles.offerCardDesc}>
                  Instagram, YouTube, LinkedIn and your website, backed by content strategy,
                  scripting, shooting and editing.
                </p>
                <Link href="/services#personal-branding" className={styles.offerLink}>
                  Explore Personal Branding
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              </MotionReveal>

              <MotionReveal direction="up" delay={200} className={styles.offerCardPaper}>
                <h3 className={styles.offerCardTitlePaper}>Digital Marketing</h3>
                <p className={styles.offerCardDescPaper}>
                  Meta Ads, Google Ads, SEO and a joined-up paid strategy, planned around your
                  goals and your budget.
                </p>
                <Link href="/services#digital-marketing" className={styles.offerLinkPaper}>
                  Explore Digital Marketing
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM / FOUNDER DOCUMENTED PLACEHOLDER */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.teamCard}>
            <MotionReveal direction="up">
              <SectionEyebrow text="THE TEAM" />
              <h2 className={styles.teamHeading}>The people behind CCC.</h2>
              <div className={styles.teamContentBlock}>
                {/* 
                  TODO: FOUNDER / TEAM DETAILS PLACEHOLDER
                  Insert verified founder biography, portrait photography, and leadership 
                  credentials here once confirmed by CCC management.
                */}
                <p className={styles.teamStatement}>
                  CCC is built for founders, creators and businesses who want a thoughtful creative
                  partner to help their work reach more people. A studio is also on the way.
                </p>
                <p className={styles.teamNotice}>
                  Team profiles and portraits will be added here soon.
                </p>
              </div>

              {/* Documented image slot */}
              <div className={styles.teamVisualSlot}>
                <div className={styles.teamSlotLabel}>TEAM PORTRAIT · COMING SOON</div>
                <div className={styles.teamSlotAspect}>16:9</div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className={styles.closingSection}>
        <div className="container">
          <div className={styles.closingBox}>
            <MotionReveal direction="up">
              <SectionEyebrow text="ENGAGEMENT" variant="ink" />
              <h2 className={styles.closingTitle}>Ready to start a conversation?</h2>
              <p className={styles.closingText}>
                Whether you want to build a personal brand or grow a business, tell us where you are
                and we&apos;ll help you figure out the next step.
              </p>
              <div className={styles.closingBtn}>
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
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
