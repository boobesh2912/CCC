import styles from './Marquee.module.css';

interface MarqueeProps {
  items: string[];
  /** `solid` is the orange band; `outline` is big outlined text on the page background. */
  variant?: 'solid' | 'outline';
  reverse?: boolean;
}

function Star() {
  return (
    <svg className={styles.star} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z" fill="currentColor" />
    </svg>
  );
}

/** Scrolling headline band. Decorative: the words are exposed once to screen readers. */
export default function Marquee({ items, variant = 'solid', reverse = false }: MarqueeProps) {
  const row = (
    <ul className={styles.row}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          <span>{item}</span>
          <Star />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`${styles.band} ${variant === 'outline' ? styles.outline : ''}`}>
      <p className="sr-only">{items.join(', ')}</p>
      <div className={`${styles.track} ${reverse ? styles.reverse : ''}`} aria-hidden="true">
        {row}
        {row}
      </div>
    </div>
  );
}
