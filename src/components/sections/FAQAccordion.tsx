'use client';

import { useState, useCallback } from 'react';
import type { FAQItem } from '@/content/faqs';
import styles from './FAQAccordion.module.css';

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className={`${styles.accordion} ${className}`} role="region" aria-label="Frequently asked questions">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={styles.item}>
            <h3 className={styles.questionWrapper}>
              <button
                className={styles.question}
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-question-${item.id}`}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
              hidden={!isOpen}
            >
              <p className={styles.answerText}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
