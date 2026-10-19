import type { Metadata } from 'next';
import Link from 'next/link';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionEyebrow text="404 · NOTHING ON THIS REEL" />
        <h1 className={styles.title}>This take didn&apos;t make the cut.</h1>
        <p className={styles.copy}>
          The page you&apos;re looking for has moved or doesn&apos;t exist. Here&apos;s where to go
          next.
        </p>
        <nav className={styles.links} aria-label="Helpful links">
          <Link href="/" className={styles.primary}>
            Back to Home
          </Link>
          <Link href="/studio" className={styles.link}>
            The Studio
          </Link>
          <Link href="/services" className={styles.link}>
            Creative Services
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </nav>
      </div>
    </section>
  );
}
