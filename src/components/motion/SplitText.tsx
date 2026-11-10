'use client';

import { Fragment, useEffect, useRef, type CSSProperties, type ElementType } from 'react';

interface Part {
  text: string;
  /** Renders the words in the accent colour. */
  accent?: boolean;
}

interface SplitTextProps {
  parts: Part[] | string;
  as?: ElementType;
  className?: string;
  /** Above the fold: animate on load with CSS only, without waiting for scroll or hydration. */
  immediate?: boolean;
  /** Extra delay before the first word, in ms. */
  delay?: number;
  /** Delay between words, in ms. */
  stagger?: number;
}

/**
 * Headline whose words slide up out of a mask, one after another.
 * Hidden state lives in CSS (`.js .split`), so the text stays readable without JavaScript
 * and for reduced-motion users. Screen readers get the full text once.
 */
export default function SplitText({
  parts,
  as: Tag = 'h2',
  className = '',
  immediate = false,
  delay = 0,
  stagger = 70,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const list: Part[] = typeof parts === 'string' ? [{ text: parts }] : parts;
  const words = list.flatMap((p) =>
    p.text
      .split(' ')
      .filter(Boolean)
      .map((word) => ({ word, accent: p.accent }))
  );
  const fullText = list.map((p) => p.text).join(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el || immediate) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <Tag
      ref={ref}
      className={`split ${immediate ? 'split-now' : ''} ${className}`.trim()}
      style={{ '--split-delay': `${delay}ms`, '--split-stagger': `${stagger}ms` } as CSSProperties}
    >
      <span className="sr-only">{fullText}</span>
      {words.map((w, i) => (
        <Fragment key={`${w.word}-${i}`}>
          <span className="split-word" aria-hidden="true">
            <span
              className={`split-inner ${w.accent ? 'split-accent' : ''}`.trim()}
              style={{ '--i': i } as CSSProperties}
            >
              {w.word}
            </span>
          </span>{' '}
        </Fragment>
      ))}
    </Tag>
  );
}
