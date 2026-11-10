import Link from 'next/link';
import MotionReveal from '@/components/motion/MotionReveal';
import ServiceIcon, { type ServiceIconName } from '@/components/ui/ServiceIcon';
import styles from './PlatformTiles.module.css';

interface Tile {
  href: string;
  label: string;
  sub: string;
  icon: ServiceIconName;
  tone: 'orange' | 'yellow' | 'paper' | 'pink' | 'ink';
}

const tiles: Tile[] = [
  { href: '/services#instagram', label: 'Instagram', sub: 'Reels, carousels and stories', icon: 'instagram', tone: 'orange' },
  { href: '/services#youtube', label: 'YouTube', sub: 'Channels built to be found', icon: 'youtube', tone: 'yellow' },
  { href: '/services#linkedin', label: 'LinkedIn', sub: 'Thought leadership that lands', icon: 'linkedin', tone: 'paper' },
  { href: '/services#meta-ads', label: 'Meta Ads', sub: 'Facebook and Instagram campaigns', icon: 'meta', tone: 'pink' },
  { href: '/services#google-ads', label: 'Google Ads', sub: 'Search, Display and YouTube', icon: 'google', tone: 'ink' },
  { href: '/services#seo', label: 'SEO', sub: 'Be found when people search', icon: 'seo', tone: 'orange' },
];

/** Colourful platform tiles linking to each offering. */
export default function PlatformTiles() {
  return (
    <ul className={styles.grid}>
      {tiles.map((t, i) => (
        <li key={t.label} className={styles.item}>
          <MotionReveal direction="up" delay={(i % 3) * 100} className={styles.reveal}>
            <Link href={t.href} className={`${styles.tile} ${styles[t.tone]}`}>
              <span className={styles.icon}>
                <ServiceIcon name={t.icon} size={30} />
              </span>
              <span className={styles.text}>
                <span className={styles.label}>{t.label}</span>
                <span className={styles.sub}>{t.sub}</span>
              </span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          </MotionReveal>
        </li>
      ))}
    </ul>
  );
}
