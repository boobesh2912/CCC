import type { Metadata } from 'next';
import MotionReveal from '@/components/motion/MotionReveal';
import ButtonLink from '@/components/ui/ButtonLink';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import ServiceIcon from '@/components/ui/ServiceIcon';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import { services } from '@/content/services';
import { getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Services — Personal Branding & Digital Marketing',
  alternates: { canonical: '/services' },
  description:
    'Personal branding (Instagram, YouTube, LinkedIn, website, scripting, shooting, content strategy, editing) and digital marketing (Meta Ads, Google Ads, SEO, paid marketing) from Covai Creative Corner.',
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <MotionReveal direction="up" immediate>
            <SectionEyebrow text="SERVICES" />
            <h1 className={styles.heroTitle}>
              Two services. <span className={styles.accent}>Everything</span> your brand needs.
            </h1>
            <p className={styles.heroSubtitle}>
              Build the story with Personal Branding, then put it in front of the right people with
              Digital Marketing. Start with one, or bring both together.
            </p>
            <nav className={styles.jump} aria-label="Jump to a service">
              {services.map((svc) => (
                <a key={svc.id} href={`#${svc.id}`} className={styles.jumpLink}>
                  <span className={styles.jumpIndex}>{svc.index}</span>
                  {svc.title}
                  <span aria-hidden="true">↓</span>
                </a>
              ))}
            </nav>
          </MotionReveal>
        </div>
      </section>

      {/* 2. THE TWO SERVICES */}
      {services.map((svc, si) => {
        const light = si % 2 === 1;
        return (
          <section
            key={svc.id}
            id={svc.id}
            className={`${styles.service} ${light ? styles.serviceLight : styles.serviceDark}`}
          >
            <div className="container">
              <div className={styles.serviceHead}>
                <MotionReveal direction="up" className={styles.serviceTitleBlock}>
                  <div className={styles.serviceMeta}>
                    <span className={styles.serviceIndex}>{svc.index}</span>
                    <SectionEyebrow text="SERVICE" variant={light ? 'light' : 'dark'} />
                  </div>
                  <h2 className={styles.serviceTitle}>{svc.title}</h2>
                  <p className={styles.serviceTagline}>{svc.tagline}</p>
                </MotionReveal>

                <MotionReveal direction="up" delay={150} className={styles.serviceIntro}>
                  <p className={styles.serviceDesc}>{svc.description}</p>
                  <p className={styles.whoItHelps}>
                    <strong>Who it helps:</strong> {svc.whoItHelps}
                  </p>
                  <ButtonLink href="/contact#enquiry" variant={light ? 'secondary' : 'primary'}>
                    {svc.cta}
                  </ButtonLink>
                </MotionReveal>
              </div>

              <ul className={styles.offerGrid}>
                {svc.offerings.map((o, oi) => (
                  <li key={o.id} id={o.id} className={styles.offerItem}>
                    <MotionReveal direction="up" delay={(oi % 4) * 90} className={styles.offerReveal}>
                      <article className={styles.offer}>
                        <span className={styles.offerIcon}>
                          <ServiceIcon name={o.icon} size={28} />
                        </span>
                        <h3 className={styles.offerTitle}>{o.title}</h3>
                        <p className={styles.offerDesc}>{o.description}</p>
                        <ul className={styles.points}>
                          {o.points.map((pt) => (
                            <li key={pt}>{pt}</li>
                          ))}
                        </ul>
                      </article>
                    </MotionReveal>
                  </li>
                ))}
              </ul>

              <p className={styles.note}>
                Scope is agreed with you before work starts. Typical work varies by project.
              </p>
            </div>
          </section>
        );
      })}

      {/* 3. CLOSING CTA */}
      <section className={styles.closingSection}>
        <div className="container">
          <div className={styles.closingBox}>
            <MotionReveal direction="up">
              <SectionEyebrow text="NOT SURE WHERE TO START?" variant="ink" />
              <h2 className={styles.closingTitle}>Tell us your goal. We&apos;ll suggest the way in.</h2>
              <p className={styles.closingText}>
                Share what you&apos;re working on and your monthly budget, and we&apos;ll recommend where
                to begin. No pressure, no fixed packages.
              </p>
              <div className={styles.closingBtn}>
                <ButtonLink href="/contact#enquiry" variant="ink" size="large">
                  Start a Project
                </ButtonLink>
                <WhatsAppCTA
                  href={getServicesEnquiryUrl()}
                  label="Chat on WhatsApp"
                  variant="inkOutline"
                  size="large"
                  analyticsEvent="services_enquiry_click"
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
