import styles from './Marquee.module.css';

interface MarqueeProps {
  items: string[];
}

function Star() {
  return (
    <svg className={styles.star} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z" fill="currentColor" />
    </svg>
  );
}

/** Scrolling headline band. Decorative: the words are exposed once to screen readers. */
export default function Marquee({ items }: MarqueeProps) {
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
    <div className={styles.band}>
      <p className="sr-only">{items.join(', ')}</p>
      <div className={styles.track} aria-hidden="true">
        {row}
        {row}
      </div>
    </div>
  );
}
