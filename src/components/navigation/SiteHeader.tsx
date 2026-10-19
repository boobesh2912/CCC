'use client';

import { useState, useEffect, useRef, useCallback, type CSSProperties, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { services } from '@/content/services';
import { getStudioBookingUrl, isWhatsAppConfigured } from '@/lib/whatsapp';
import styles from './SiteHeader.module.css';

interface MenuChild {
  label: string;
  href: string;
}

interface MenuItem {
  key: string;
  label: string;
  href: string;
  children?: MenuChild[];
}

const menu: MenuItem[] = [
  { key: 'home', label: 'Home', href: '/' },
  {
    key: 'studio',
    label: 'Studio',
    href: '/studio',
    children: [
      { label: 'Studio Rental', href: '/studio' },
      { label: 'Production Support', href: '/studio#production' },
      { label: 'What People Record Here', href: '/studio#use-cases' },
      { label: 'Studio FAQs', href: '/studio#studio-faqs' },
    ],
  },
  {
    key: 'services',
    label: 'Services',
    href: '/services',
    children: services.map((s) => ({ label: s.title, href: `/services#${s.id}` })),
  },
  { key: 'work', label: 'Work', href: '/work' },
  { key: 'about', label: 'About', href: '/about' },
  {
    key: 'contact',
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'Book the Studio', href: '/contact' },
      { label: 'Discuss a Creative Project', href: '/contact' },
      { label: 'Send an Enquiry', href: '/contact#enquiry' },
    ],
  },
];

const FALLBACK_PANEL = 'services';

function currentKeyFor(pathname: string): string | null {
  const match = menu.find((m) => (m.href === '/' ? pathname === '/' : pathname.startsWith(m.href)));
  return match ? match.key : null;
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className={styles.wordmark} aria-label="Covai Creative Corner — Home" onClick={onClick}>
      <span className={styles.wmMain}>
        CCC<span className={styles.wmDot}>.</span>
      </span>
      <span className={styles.wmSub}>Covai Creative Corner</span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverKey, setHoverKey] = useState<string | null>(null);
  const [panelKey, setPanelKey] = useState(FALLBACK_PANEL);
  const [lastPathname, setLastPathname] = useState(pathname);

  const openBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  // Close menu on route change (adjusting state during render, not in an effect)
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  const currentKey = currentKeyFor(pathname);
  const activeKey = hoverKey ?? currentKey ?? FALLBACK_PANEL;
  const panelItem = menu.find((m) => m.key === panelKey) ?? menu.find((m) => m.key === FALLBACK_PANEL)!;
  const studioReady = isWhatsAppConfigured();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Move focus into the menu when it opens, and back to the trigger when it closes
  useEffect(() => {
    if (menuOpen) {
      closeBtnRef.current?.focus();
    } else if (wasOpen.current) {
      openBtnRef.current?.focus();
    }
    wasOpen.current = menuOpen;
  }, [menuOpen]);

  const openMenu = useCallback(() => {
    const cur = currentKeyFor(pathname);
    const curItem = menu.find((m) => m.key === cur);
    setPanelKey(curItem?.children ? curItem.key : FALLBACK_PANEL);
    setHoverKey(null);
    setMenuOpen(true);
  }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        closeMenu();
        return;
      }
      if (e.key !== 'Tab' || !overlayRef.current) return;
      const focusable = overlayRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [closeMenu]
  );

  const previewItem = (item: MenuItem) => {
    setHoverKey(item.key);
    if (item.children) setPanelKey(item.key);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#main-content" className={styles.skipLink}>
          Skip to content
        </a>
        <div className={styles.bar}>
          <button
            ref={openBtnRef}
            type="button"
            className={styles.menuBtn}
            onClick={openMenu}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-haspopup="dialog"
          >
            <span className={styles.burger} aria-hidden="true">
              <span />
              <span />
            </span>
            <span className={styles.menuBtnLabel}>Menu</span>
          </button>

          <Wordmark />

          <Link href="/contact" className={styles.contactPill} aria-label="Contact Us">
            <span className={styles.pillLabel}>Contact Us</span>
            <span className={styles.pillArrow}>
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </header>

      <div
        id="site-menu"
        ref={overlayRef}
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!menuOpen}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.arc} aria-hidden="true" />

        <div className={styles.overlayBar}>
          <button ref={closeBtnRef} type="button" className={styles.closeBtn} onClick={closeMenu} aria-label="Close menu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <Wordmark onClick={closeMenu} />
          <Link href="/contact" className={`${styles.contactPill} ${styles.contactPillLight}`} aria-label="Contact Us" onClick={closeMenu}>
            <span className={styles.pillLabel}>Contact Us</span>
            <span className={styles.pillArrow}>
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <div className={styles.overlayBody}>
          <nav className={styles.mainNav} aria-label="Main navigation" onPointerLeave={() => setHoverKey(null)}>
            <ul className={styles.navList}>
              {menu.map((item, i) => (
                <li key={item.key} style={{ '--i': i } as CSSProperties}>
                  <Link
                    href={item.href}
                    className={`${styles.menuLink} ${activeKey === item.key ? styles.menuLinkActive : ''}`}
                    aria-current={currentKey === item.key ? 'page' : undefined}
                    onPointerEnter={() => previewItem(item)}
                    onFocus={() => previewItem(item)}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.panel}>
            <p className={styles.panelLabel}>{panelItem.label}</p>
            <ul key={panelItem.key} className={styles.subList}>
              {panelItem.children?.map((child, i) => (
                <li key={child.label} style={{ '--i': i } as CSSProperties}>
                  <Link href={child.href} className={styles.subLink} onClick={closeMenu}>
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
            {studioReady ? (
              <a href={getStudioBookingUrl()} target="_blank" rel="noopener noreferrer" className={styles.panelCta} onClick={closeMenu}>
                Book the Studio on WhatsApp
              </a>
            ) : (
              <Link href="/studio" className={styles.panelCta} onClick={closeMenu}>
                Explore the Studio
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
