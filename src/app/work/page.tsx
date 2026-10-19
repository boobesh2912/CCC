import MotionReveal from '@/components/motion/MotionReveal';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './work.module.css';

export const metadata = {
  title: 'Selected Capabilities',
  alternates: { canonical: '/work' },
  description:
    'The kinds of podcasts, video, brand, and social content CCC can help create — shown as illustrative formats, not client projects.',
};

export default function WorkPage() {
  const capabilities = [
    {
      id: 'vodcast',
      category: 'PODCAST PRODUCTION',
      aspectClass: styles.aspectWide,
      title: 'Episodic Video Podcasts',
      desc: 'A recurring conversation series, recorded in the studio and edited into full episodes for YouTube and audio platforms.',
      spec: 'FORMAT · 16:9 LONG-FORM',
    },
    {
      id: 'brand-film',
      category: 'BRAND FILMS & CINEMA',
      aspectClass: styles.aspectTall,
      title: 'Founder & Brand Films',
      desc: 'Short pieces where a founder or team explains what they do and why it matters, shaped by a script and a clear point of view.',
      spec: 'FORMAT · SHORT FILM',
    },
    {
      id: 'identity-systems',
      category: 'BRAND IDENTITY',
      aspectClass: styles.aspectSquare,
      title: 'Brand Identity Systems',
      desc: 'A wordmark, colour, typography, and tone of voice brought together into guidelines and templates a team can actually use.',
      spec: 'FORMAT · IDENTITY & GUIDELINES',
    },
    {
      id: 'social-series',
      category: 'SOCIAL ECOSYSTEMS',
      aspectClass: styles.aspectPanoramic,
      title: 'Short-Form Clips from Long Recordings',
      desc: 'One studio session cut into a set of captioned vertical clips for Reels, Shorts, and LinkedIn.',
      spec: 'FORMAT · 9:16 VERTICAL',
    },
    {
      id: 'dialogue-series',
      category: 'INTERVIEWS & DIALOGUE',
      aspectClass: styles.aspectStandard,
      title: 'Interview & Expert Series',
      desc: 'Planned interviews with founders and specialists, with question design and a structure that lets the guest go deep.',
      spec: 'FORMAT · INTERVIEW SERIES',
    },
    {
      id: 'campaign-content',
      category: 'CAMPAIGN PRODUCTION',
      aspectClass: styles.aspectTallAlt,
      title: 'Campaign Content',
      desc: 'Visual and video assets for a launch or campaign, planned around one message and adapted for each channel it runs on.',
      spec: 'FORMAT · MULTI-CHANNEL',
    },
  ];

  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <MotionReveal direction="up" immediate>
            <SectionEyebrow text="SELECTED CAPABILITIES" />
            <h1 className={styles.heroTitle}>What we can create.</h1>
            <p className={styles.heroSubtitle}>
              CCC brings studio production and creative services together. These are the kinds of
              formats we can help you plan, record, and finish. Real projects will appear here as
              they&apos;re approved for publication.
            </p>
            <div className={styles.noticeTag}>
              <span className={styles.noticeDot} />
              <span>ILLUSTRATIVE FORMATS · NOT CLIENT PROJECTS</span>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 2. MASONRY EDITORIAL GRID */}
      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.masonryGrid}>
            {capabilities.map((cap, i) => (
              <MotionReveal
                key={cap.id}
                direction="up"
                delay={(i % 3) * 120}
                className={styles.gridCard}
              >
                {/* Visual Asset Container */}
                <div className={`${styles.visualFrame} ${cap.aspectClass}`}>
                  <div className={styles.visualMetaTop}>
                    <span className={styles.visualCategory}>{cap.category}</span>
                    <span className={styles.visualConceptBadge}>ILLUSTRATIVE CONCEPT</span>
                  </div>
                  <div className={styles.visualMetaBottom}>
                    <span className={styles.visualSpec}>{cap.spec}</span>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{cap.title}</h3>
                  <p className={styles.cardDesc}>{cap.desc}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLOSING CTA */}
      <section className={styles.closingSection}>
        <div className="container">
          <div className={styles.closingBox}>
            <MotionReveal direction="up">
              <SectionEyebrow text="COLLABORATION" />
              <h2 className={styles.closingTitle}>Have a specific production format in mind?</h2>
              <p className={styles.closingText}>
                Share what you&apos;re planning. CCC will talk through the format, what the
                production involves, and the right next step.
              </p>
              <div className={styles.closingBtn}>
                <WhatsAppCTA
                  href={getServicesEnquiryUrl()}
                  label="Discuss a Similar Project"
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
