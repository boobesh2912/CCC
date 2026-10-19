'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/**
 * Renders the visitor's current year, so the copyright never goes stale in a static build.
 * Read on the client only — Next.js disallows `new Date()` during prerender.
 */
export default function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null
  );
  return <span>{year}</span>;
}
