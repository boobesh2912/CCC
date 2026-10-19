import MotionReveal from '@/components/motion/MotionReveal';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './work.module.css';

export const metadata = {
  title: 'Selected Capabilities | Covai Creative Corner',
  description:
    'An illustrative showcase of production formats, creative scopes, and media delivery capabilities.',
};

export default function WorkPage() {
  const capabilities = [
    {
      id: 'vodcast',
      category: 'PODCAST PRODUCTION',
      aspectClass: styles.aspectWide,
      title: 'Multi-Camera Episodic Vodcasts',
      desc: 'Synchronized multi-angle capture with dedicated broadcast audio lines, dynamic live switching, and comprehensive raw multi-track assets for post-production flexibility.',
      spec: '16:9 4K UHD · 24FPS · ISOLATED MULTI-TRACK AUDIO',
    },
    {
      id: 'brand-film',
      category: 'BRAND FILMS & CINEMA',
      aspectClass: styles.aspectTall,
      title: 'Executive & Brand Vignettes',
      desc: 'Cinematic visual treatments designed for brand positioning, leadership perspectives, and investor communication with calibrated practical and key illumination.',
      spec: '4:5 / 16:9 DUAL RATIO · LOG COLOR PROFILE',
    },
    {
      id: 'identity-systems',
      category: 'BRAND IDENTITY',
      aspectClass: styles.aspectSquare,
      title: 'Tactile Visual Systems & Typography',
      desc: 'Comprehensive visual architecture encompassing logotypes, bespoke font hierarchies, spatial palettes, and physical media guidelines.',
      spec: 'DESIGN TOKENS · EDITORIAL GUIDES · PRINT & DIGITAL',
    },
    {
      id: 'social-series',
      category: 'SOCIAL ECOSYSTEMS',
      aspectClass: styles.aspectPanoramic,
      title: 'Repurposed Vertical Content Suites',
      desc: 'Extracted short-form hooks, dynamic closed captioning, and platform-native pacing constructed systematically from long-form studio recordings.',
      spec: '9:16 VERTICAL · RETENTION OPTIMIZED · SUBTITLED',
    },
    {
      id: 'dialogue-series',
      category: 'INTERVIEWS & DIALOGUE',
      aspectClass: styles.aspectStandard,
      title: 'Thought Leadership Dialogues',
      desc: 'Structured long-form conversational environments built for industry founders and specialists to unpack complex insights with editorial calm.',
      spec: 'STUDIO A SETTING · MULTI-MIC ARRAY · LIVE MONITORING',
    },
    {
      id: 'campaign-content',
      category: 'CAMPAIGN PRODUCTION',
      aspectClass: styles.aspectTallAlt,
      title: 'Digital Campaign Assets & Ad Vignettes',
      desc: 'Targeted visual creative built with deliberate narrative tension and brand clarity, engineered to test and perform across digital channels.',
      spec: 'MULTI-FORMAT DELIVERIES · COLOR GRADED · SOUND DESIGNED',
    },
  ];

  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <MotionReveal direction="up">
            <SectionEyebrow text="SELECTED CAPABILITIES" />
            <h1 className={styles.heroTitle}>What we can create.</h1>
            <p className={styles.heroSubtitle}>
              CCC brings together studio production and creative services. Here is the spectrum of
              production formats and content architectures we bring to life for brands and founders.
            </p>
            <div className={styles.noticeTag}>
              <span className={styles.noticeDot} />
              <span>NOTE: CAPABILITIES FRAMEWORK · NO FABRICATED CASE STUDIES OR CLIENT LOGOS</span>
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
                Share what you&apos;re planning. CCC will evaluate the technical scope, recommend
                the optimal recording setup, and outline production requirements.
              </p>
              <div className={styles.closingBtn}>
                <WhatsAppCTA
                  href={getServicesEnquiryUrl()}
                  label="Discuss a Project"
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
