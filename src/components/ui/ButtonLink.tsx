import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './WhatsAppCTA.module.css';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ink' | 'inkOutline';
  size?: 'default' | 'large';
  className?: string;
}

/** Internal-link button that shares the CTA look. Always works, with or without WhatsApp configured. */
export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'default',
  className = '',
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${styles.cta} ${styles[variant]} ${styles[size]} ${className}`.trim()}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
