import type { Metadata } from 'next';
import MotionReveal from '@/components/motion/MotionReveal';
import SplitText from '@/components/motion/SplitText';
import ButtonLink from '@/components/ui/ButtonLink';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './work.module.css';

export const metadata: Metadata = {
  title: 'What We Can Create',
  alternates: { canonical: '/work' },
  description:
    'The kinds of content and campaigns CCC can help create across Instagram, YouTube, LinkedIn, websites, Meta Ads, Google Ads and SEO, shown as illustrative formats, not client projects.',
};

// Illustrative formats only. Replace with real, approved projects when available.
const capabilities = [
  {
    id: 'short-form',
    category: 'SHORT-FORM VIDEO',
    aspectClass: styles.aspectWide,
    title: 'Reels & Shorts Series',
    desc: 'A recurring short-form series, scripted, shot and edited for Instagram and YouTube.',
    spec: 'FORMAT · 9:16 VERTICAL',
  },
  {
    id: 'youtube-channel',
    category: 'YOUTUBE',
    aspectClass: styles.aspectTall,
    title: 'YouTube Channel Launch',
    desc: 'Channel positioning, titles, thumbnails and a repeatable upload workflow, so your channel is easy to find and easy to follow.',
    spec: 'FORMAT · LONG-FORM VIDEO',
  },
  {
    id: 'linkedin',
    category: 'LINKEDIN',
    aspectClass: styles.aspectSquare,
    title: 'Founder Thought Leadership',
    desc: 'Posts and carousels that put a founder’s expertise in front of decision-makers.',
    spec: 'FORMAT · POSTS & CAROUSELS',
  },
  {
    id: 'brand-site',
    category: 'WEBSITE',
    aspectClass: styles.aspectPanoramic,
    title: 'Personal Brand Website',
    desc: 'A clean, mobile-first website that backs up everything you publish.',
    spec: 'FORMAT · WEBSITE',
  },
  {
    id: 'paid',
    category: 'PAID MARKETING',
    aspectClass: styles.aspectStandard,
    title: 'Meta & Google Ad Campaigns',
    desc: 'Campaigns with creative built to earn the click, and tracking set up to show what is working.',
    spec: 'FORMAT · PAID CAMPAIGNS',
  },
  {
    id: 'seo',
    category: 'SEO',
    aspectClass: styles.aspectTallAlt,
    title: 'Search Visibility',
    desc: 'Keyword research, on-page fixes and content, so the right people can find you on Google.',
    spec: 'FORMAT · ORGANIC SEARCH',
  },
];

export default function WorkPage() {
  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <MotionReveal direction="up" immediate>
            <SectionEyebrow text="WHAT WE CAN CREATE" />
            <SplitText as="h1" immediate className={styles.heroTitle} parts="Content and campaigns, built to be noticed." />
            <p className={styles.heroSubtitle}>
              These are the kinds of content and campaigns CCC can help you plan, make and grow. Real
              projects will appear here as they&apos;re approved for publication.
            </p>
            <div className={styles.noticeTag}>
              <span className={styles.noticeDot} />
              <span>ILLUSTRATIVE FORMATS · NOT CLIENT PROJECTS</span>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 2. EDITORIAL GRID */}
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
                <div className={`${styles.visualFrame} ${cap.aspectClass}`}>
                  <div className={styles.visualMetaTop}>
                    <span className={styles.visualCategory}>{cap.category}</span>
                    <span className={styles.visualConceptBadge}>ILLUSTRATIVE CONCEPT</span>
                  </div>
                  <div className={styles.visualMetaBottom}>
                    <span className={styles.visualSpec}>{cap.spec}</span>
                  </div>
                </div>

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
              <SectionEyebrow text="COLLABORATION" variant="ink" />
              <h2 className={styles.closingTitle}>Have something like this in mind?</h2>
              <p className={styles.closingText}>
                Share what you&apos;re planning and your monthly budget. We&apos;ll talk through the
                format and the right next step.
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
