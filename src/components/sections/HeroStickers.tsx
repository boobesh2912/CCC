import ServiceIcon from '@/components/ui/ServiceIcon';
import styles from './HeroStickers.module.css';

/** Decorative floating labels that sit around the hero visual. */
export default function HeroStickers() {
  return (
    <div className={styles.layer} aria-hidden="true">
      <span className={`${styles.sticker} ${styles.one}`}>
        <ServiceIcon name="personal-branding" size={20} />
        Personal Branding
      </span>
      <span className={`${styles.sticker} ${styles.two}`}>
        <ServiceIcon name="meta" size={20} />
        Meta Ads
      </span>
      <span className={`${styles.sticker} ${styles.three}`}>
        <ServiceIcon name="seo" size={20} />
        SEO
      </span>
    </div>
  );
}
