import MotionReveal from '@/components/motion/MotionReveal';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { services } from '@/content/services';
import { getServicesEnquiryUrl } from '@/lib/whatsapp';
import styles from './services.module.css';

export const metadata = {
  title: 'Creative Services',
  alternates: { canonical: '/services' },
  description:
    'Content strategy, scripting, video and podcast editing, brand identity, social media management, and digital marketing from Covai Creative Corner.',
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <MotionReveal direction="up" immediate>
            <SectionEyebrow text="CREATIVE SERVICES" />
            <h1 className={styles.heroTitle}>Build a voice worth hearing.</h1>
            <p className={styles.heroSubtitle}>
              From content strategy to publishing, CCC gives your brand the creative production and
              support it needs to show up with intention.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* 2. SERVICES COMPREHENSIVE LIST */}
      <div className={styles.servicesContainer}>
        {services.map((svc, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={svc.id}
              id={svc.id}
              className={`${styles.serviceSection} ${
                index % 3 === 2 ? styles.serviceSectionPaper : isEven ? styles.serviceSectionDark : styles.serviceSectionPanel
              }`}
            >
              <div className="container">
                <div className={`${styles.serviceGrid} ${isEven ? '' : styles.serviceGridReverse}`}>
                  {/* Service Text Detail */}
                  <div className={styles.serviceText}>
                    <MotionReveal direction="up">
                      <div className={styles.serviceHeaderMeta}>
                        <span className={styles.serviceIndex}>{svc.index}</span>
                        <span className={styles.serviceCategory}>SERVICE</span>
                      </div>
                      <h2 className={styles.serviceTitle}>{svc.title}</h2>
                      <p className={styles.serviceDesc}>{svc.fullDescription}</p>

                      <div className={styles.serviceSubBlock}>
                        <h3 className={styles.subHeading}>Who it helps</h3>
                        <p className={styles.subParagraph}>{svc.whoItHelps}</p>
                      </div>

                      <div className={styles.serviceSubBlock}>
                        <h3 className={styles.subHeading}>Typical collaboration scope</h3>
                        <ul className={styles.scopeList}>
                          {svc.typicalWork.map((item) => (
                            <li key={item} className={styles.scopeItem}>
                              <span className={styles.scopeBullet} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.serviceCta}>
                        <WhatsAppCTA
                          href={getServicesEnquiryUrl()}
                          label={svc.cta}
                          variant={index % 3 === 2 ? 'primary' : 'outline'}
                          analyticsEvent="services_enquiry_click"
                        />
                      </div>
                    </MotionReveal>
                  </div>

                  {/* Asymmetric Visual Element */}
                  <div className={styles.serviceVisual}>
                    <MotionReveal direction="up" delay={150}>
                      <div className={styles.visualFrame}>
                        <div className={styles.visualTag}>{svc.title.toUpperCase()}</div>
                        <div className={styles.visualPlaceholderDetail}>
                          <span className={styles.visualCode}>SERVICE {svc.index}</span>
                          <span className={styles.visualAspectNotice}>IMAGE TO FOLLOW</span>
                        </div>
                      </div>
                    </MotionReveal>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. CLOSING CTA */}
      <section className={styles.closingSection}>
        <div className="container">
          <div className={styles.closingBox}>
            <MotionReveal direction="up">
              <SectionEyebrow text="INITIAL DISCUSSIONS" />
              <h2 className={styles.closingTitle}>Not sure where to start?</h2>
              <p className={styles.closingText}>
                Tell us what you&apos;re working on and we&apos;ll suggest how CCC can help. We can
                structure an engagement around a single high-priority piece or an ongoing publishing
                cadence.
              </p>
              <div className={styles.closingBtn}>
                <WhatsAppCTA
                  href={getServicesEnquiryUrl()}
                  label="Discuss a Creative Project"
                  variant="primary"
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
