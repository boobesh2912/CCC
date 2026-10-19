import Link from 'next/link';
import MotionReveal from '@/components/motion/MotionReveal';
import { services } from '@/content/services';
import styles from './ServiceCards.module.css';

const tones = ['orange', 'ink', 'yellow', 'pink', 'paper', 'ink'] as const;

function ServiceIcon({ id }: { id: string }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (id) {
    case 'content-strategy':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        </svg>
      );
    case 'scripting':
      return (
        <svg {...common}>
          <path d="M5 4h10l4 4v12H5z" />
          <path d="M14 4v5h5M8 13h8M8 17h5" />
        </svg>
      );
    case 'editing':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M10 9.5v5l4.5-2.5z" />
        </svg>
      );
    case 'branding':
      return (
        <svg {...common}>
          <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6L12 16.7 6.6 19.6l1.2-6L3.3 9.4l6.1-.8z" />
        </svg>
      );
    case 'social-media':
      return (
        <svg {...common}>
          <path d="M4 5h16v11H9l-5 4z" />
          <path d="M8.5 10h7" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 14v-4l11-5v14z" />
          <path d="M15 9.5a3 3 0 010 5M7 14l1.5 6" />
        </svg>
      );
  }
}

/** Colourful service cards linking to each service on /services. */
export default function ServiceCards() {
  return (
    <ul className={styles.grid}>
      {services.map((svc, i) => (
        <li key={svc.id} className={styles.item}>
          <MotionReveal direction="up" delay={(i % 3) * 110} className={styles.reveal}>
            <Link href={`/services#${svc.id}`} className={`${styles.card} ${styles[tones[i % tones.length]]}`}>
              <span className={styles.top}>
                <span className={styles.icon}>
                  <ServiceIcon id={svc.id} />
                </span>
                <span className={styles.index}>{svc.index}</span>
              </span>
              <span className={styles.body}>
                <span className={styles.title}>{svc.title}</span>
                <span className={styles.desc}>{svc.shortDescription}</span>
              </span>
              <span className={styles.more}>
                <span>Explore</span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          </MotionReveal>
        </li>
      ))}
    </ul>
  );
}
