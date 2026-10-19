import Link from 'next/link';
import CurrentYear from '@/components/ui/CurrentYear';
import { siteConfig } from '@/content/site';
import { getStudioBookingUrl, isWhatsAppConfigured } from '@/lib/whatsapp';
import styles from './ContactFooter.module.css';

export default function ContactFooter() {
  const whatsAppReady = isWhatsAppConfigured();
  const hasSocial =
    siteConfig.social.instagram ||
    siteConfig.social.youtube ||
    siteConfig.social.linkedin;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top section */}
        <div className={styles.top}>
          {/* Wordmark */}
          <div className={styles.brand}>
            <Link href="/" className={styles.wordmark} aria-label="Covai Creative Corner — Home">
              COVAI CREATIVE CORNER
            </Link>
            <p className={styles.tagline}>{siteConfig.tagline}</p>
          </div>

          {/* Navigation columns */}
          <div className={styles.navColumns}>
            {siteConfig.footerNavigation.map((group) => (
              <div key={group.title} className={styles.navGroup}>
                <h3 className={styles.navGroupTitle}>{group.title}</h3>
                <ul className={styles.navList}>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.navItem}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className={styles.rule} />

        {/* Bottom section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © <CurrentYear /> Covai Creative Corner. All rights reserved.
          </p>
          <div className={styles.socialLinks}>
            {whatsAppReady && (
              <a
                href={getStudioBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                WhatsApp
              </a>
            )}
            {hasSocial && (
              <>
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                )}
                {siteConfig.social.youtube && (
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="YouTube"
                  >
                    YouTube
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
