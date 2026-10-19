import Link from 'next/link';
import MotionReveal from '@/components/motion/MotionReveal';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './about.module.css';

export const metadata = {
  title: 'About CCC | Covai Creative Corner',
  description:
    'Creative philosophy, production discipline, and collaborative standards behind Covai Creative Corner.',
};

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Start with intention.',
      body: 'Every project begins with a clear understanding of who it is for and what it needs to say. Before adjusting lights or hitting record, we establish the core thesis so every frame and sentence carries weight.',
    },
    {
      num: '02',
      title: 'Make it with care.',
      body: 'Quality production is not merely about owning expensive hardware. It is the discipline of considered preparation, calibrated room acoustics, patient soundchecks, and surgical post-production.',
    },
    {
      num: '03',
      title: 'Put it where it matters.',
      body: 'A master recording achieves nothing sitting in cold storage. We engineer content to live where attention gathers, adapting formats for platforms without diluting message integrity.',
    },
  ];

  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="ABOUT CCC" />
            <h1 className={styles.heroTitle}>Good content starts before the camera rolls.</h1>
            <p className={styles.heroSubtitle}>
              Covai Creative Corner is a creative production studio and brand partner built around one
              conviction: the strongest work comes from a clear point of view, a thoughtful
              production process, and an uncompromising respect for the audience&apos;s attention.
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
                <SectionEyebrow text="THE ECOSYSTEM" />
                <h2 className={styles.sectionHeading}>Physical studio meets creative strategy.</h2>
                <p className={styles.offerLead}>
                  CCC was specifically structured to bridge the historical gap between where content
                  is captured and how brands are built.
                </p>
              </MotionReveal>
            </div>

            <div className={styles.offerCards}>
              <MotionReveal direction="up" delay={100} className={styles.offerCardDark}>
                <h3 className={styles.offerCardTitle}>Studio & Production</h3>
                <p className={styles.offerCardDesc}>
                  A quiet, acoustically treated recording space with broadcast equipment,
                  monitoring, and technical staff available for rent or full production.
                </p>
                <Link href="/studio" className={styles.offerLink}>
                  Explore Studio Spaces
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              </MotionReveal>

              <MotionReveal direction="up" delay={200} className={styles.offerCardPaper}>
                <h3 className={styles.offerCardTitlePaper}>Brand & Content Services</h3>
                <p className={styles.offerCardDescPaper}>
                  Strategic narrative, identity design, podcast and video editing, and
                  channel-specific digital publishing systems.
                </p>
                <Link href="/services" className={styles.offerLinkPaper}>
                  Explore Creative Services
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
              <h2 className={styles.teamHeading}>Crafted in Coimbatore.</h2>
              <div className={styles.teamContentBlock}>
                {/* 
                  TODO: FOUNDER / TEAM DETAILS PLACEHOLDER
                  Insert verified founder biography, portrait photography, and leadership 
                  credentials here once confirmed by CCC management.
                */}
                <p className={styles.teamStatement}>
                  CCC was founded with the conviction that Coimbatore&apos;s creators, entrepreneurs,
                  and growing enterprises deserve immediate access to broadcast-grade studio
                  facilities and senior-level creative direction.
                </p>
                <p className={styles.teamNotice}>
                  [Verified team profiles, director credentials, and leadership portraits will be
                  published as part of the official studio launch sequence.]
                </p>
              </div>

              {/* Documented image slot */}
              <div className={styles.teamVisualSlot}>
                <div className={styles.teamSlotLabel}>RESERVED: LEADERSHIP & STUDIO TEAM PORTRAIT</div>
                <div className={styles.teamSlotAspect}>ASPECT: 16:9 · NATURAL PRACTICAL ILLUMINATION</div>
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
              <SectionEyebrow text="ENGAGEMENT" />
              <h2 className={styles.closingTitle}>Ready to start a conversation?</h2>
              <p className={styles.closingText}>
                Whether booking studio recording time or planning a broader brand content pipeline,
                we are ready to discuss your objectives.
              </p>
              <div className={styles.closingBtn}>
                <WhatsAppCTA
                  href={getServicesEnquiryUrl()}
                  label="Discuss a Creative Project"
                  variant="primary"
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
