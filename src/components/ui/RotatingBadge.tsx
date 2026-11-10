import styles from './RotatingBadge.module.css';

const BADGE_TEXT = 'RECORD • CREATE • PUBLISH • EXPAND YOUR MARKET • GROW YOUR BUSINESS • ';

// Circle path radius 82 → circumference ≈ 515. The text is stretched to fill it exactly.
const RING_LENGTH = 510;

/** Decorative rotating sticker. */
export default function RotatingBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.badge} ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 200 200" className={styles.ring}>
        <defs>
          <path id="ccc-badge-path" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
        </defs>
        <text className={styles.text}>
          <textPath
            href="#ccc-badge-path"
            startOffset="0"
            textLength={RING_LENGTH}
            lengthAdjust="spacing"
          >
            {BADGE_TEXT}
          </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 24 24" className={styles.core}>
        <path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z" fill="currentColor" />
      </svg>
    </div>
  );
}
