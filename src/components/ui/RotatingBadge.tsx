import styles from './RotatingBadge.module.css';

/** Decorative rotating sticker. */
export default function RotatingBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.badge} ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 200 200" className={styles.ring}>
        <defs>
          <path id="ccc-badge-path" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <text className={styles.text}>
          <textPath href="#ccc-badge-path" startOffset="0">
            RECORD • CREATE • PUBLISH • RECORD • CREATE • PUBLISH •
          </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 24 24" className={styles.core}>
        <path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z" fill="currentColor" />
      </svg>
    </div>
  );
}
