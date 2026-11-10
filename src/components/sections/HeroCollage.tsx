import styles from './HeroCollage.module.css';

/**
 * Illustrative hero composition: layered social + search + ad cards.
 * Purely decorative and generic — no real accounts, results, or metrics are shown.
 */
export default function HeroCollage() {
  return (
    <div className={styles.stage} aria-hidden="true">
      {/* Central "reel" frame */}
      <div className={styles.phone}>
        <div className={styles.phoneTop}>
          <span className={styles.avatar} />
          <span className={styles.nameLines}>
            <i />
            <i />
          </span>
        </div>
        <div className={styles.reel}>
          <span className={styles.play}>
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
            </svg>
          </span>
          <span className={styles.reelTag}>REEL</span>
        </div>
        <div className={styles.phoneFoot}>
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Personal branding card */}
      <div className={`${styles.card} ${styles.cardBrand}`}>
        <span className={styles.cardLabel}>Personal Branding</span>
        <span className={styles.chipRow}>
          <b>IG</b>
          <b>YT</b>
          <b>in</b>
        </span>
      </div>

      {/* Ads card with a generic growth chart */}
      <div className={`${styles.card} ${styles.cardAds}`}>
        <span className={styles.cardLabel}>Meta Ads</span>
        <svg viewBox="0 0 120 56" className={styles.chart}>
          <rect x="6" y="34" width="16" height="18" rx="4" />
          <rect x="30" y="26" width="16" height="26" rx="4" />
          <rect x="54" y="30" width="16" height="22" rx="4" />
          <rect x="78" y="14" width="16" height="38" rx="4" />
          <path d="M100 30l8-12 8 12" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Search / SEO card */}
      <div className={`${styles.card} ${styles.cardSearch}`}>
        <span className={styles.searchBar}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M16 16l5 5" />
          </svg>
          <i />
        </span>
        <span className={styles.result}>
          <i />
          <i />
        </span>
        <span className={styles.seoTag}>SEO</span>
      </div>

      {/* Sparkle accents */}
      <svg className={`${styles.spark} ${styles.sparkOne}`} viewBox="0 0 24 24">
        <path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z" fill="currentColor" />
      </svg>
      <svg className={`${styles.spark} ${styles.sparkTwo}`} viewBox="0 0 24 24">
        <path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z" fill="currentColor" />
      </svg>
    </div>
  );
}
