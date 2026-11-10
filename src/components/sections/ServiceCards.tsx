import Link from 'next/link';
import MotionReveal from '@/components/motion/MotionReveal';
import ServiceIcon from '@/components/ui/ServiceIcon';
import { services } from '@/content/services';
import styles from './ServiceCards.module.css';

const tones: Record<string, 'orange' | 'ink'> = {
  'personal-branding': 'orange',
  'digital-marketing': 'ink',
};

/** The two CCC service lines as large, colourful cards. */
export default function ServiceCards() {
  return (
    <ul className={styles.grid}>
      {services.map((svc, i) => (
        <li key={svc.id} className={styles.item}>
          <MotionReveal direction="up" delay={i * 140} className={styles.reveal}>
            <Link href={`/services#${svc.id}`} className={`${styles.card} ${styles[tones[svc.id]]}`}>
              <span className={styles.top}>
                <span className={styles.icon}>
                  <ServiceIcon name={svc.id} size={34} />
                </span>
                <span className={styles.index}>{svc.index}</span>
              </span>

              <span className={styles.body}>
                <span className={styles.title}>{svc.title}</span>
                <span className={styles.tagline}>{svc.tagline}</span>
                <span className={styles.desc}>{svc.description}</span>
              </span>

              <span className={styles.chips} aria-label={`${svc.title} includes`}>
                {svc.chips.map((chip) => (
                  <span key={chip} className={styles.chip}>
                    {chip}
                  </span>
                ))}
              </span>

              <span className={styles.more}>
                <span>Explore {svc.title}</span>
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
