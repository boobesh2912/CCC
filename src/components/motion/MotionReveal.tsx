'use client';

import { useEffect, useRef, type ReactNode, type CSSProperties, type ElementType } from 'react';

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  style?: CSSProperties;
  as?: ElementType;
}

/**
 * Scroll-triggered reveal component using Intersection Observer.
 * Respects prefers-reduced-motion automatically via CSS.
 */
export default function MotionReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 650,
  once = true,
  threshold = 0.15,
  style,
  as: Component = 'div',
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('visible');
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once, threshold]);

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none',
  };

  const initialStyle: CSSProperties = {
    opacity: 0,
    transform: translateMap[direction],
    transition: `opacity ${duration}ms var(--ease-out), transform ${duration}ms var(--ease-out)`,
    willChange: 'opacity, transform',
    ...style,
  };

  return (
    <Component ref={ref} className={className} style={initialStyle}>
      {children}
    </Component>
  );
}
