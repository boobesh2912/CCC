'use client';

import { useId, useState, type FormEvent, type ReactNode } from 'react';
import { trackCTAClick } from '@/lib/analytics';
import { buildWhatsAppUrl, isWhatsAppConfigured } from '@/lib/whatsapp';
import styles from './EnquiryForm.module.css';

const INTERESTS = ['Personal Branding', 'Digital Marketing', 'Both', 'Not sure yet'] as const;

const NEEDS = [
  'Content strategy',
  'Scripting',
  'Shooting',
  'Editing',
  'Instagram',
  'YouTube',
  'LinkedIn',
  'Website',
  'Meta Ads',
  'Google Ads',
  'SEO',
  'Paid marketing',
] as const;

const READY_OPTIONS = [
  'Yes, ₹30,000 or more',
  "Not yet, I'm starting smaller",
  'Not sure, I need guidance',
] as const;

const BUDGETS = [
  'Under ₹10,000',
  '₹10,000 – ₹30,000',
  '₹30,000 – ₹60,000',
  '₹60,000 – ₹1,00,000',
  'Above ₹1,00,000',
  'Not sure yet',
] as const;

interface FormValues {
  name: string;
  brand: string;
  interest: string;
  needs: string[];
  ready: string;
  budget: string;
  overview: string;
}

const initialValues: FormValues = {
  name: '',
  brand: '',
  interest: '',
  needs: [],
  ready: '',
  budget: '',
  overview: '',
};

type Errors = Partial<Record<keyof FormValues, string>>;

function validate(v: FormValues): Errors {
  const errors: Errors = {};
  if (!v.name.trim()) errors.name = 'Please add your name.';
  if (!v.interest) errors.interest = 'Choose what you are interested in.';
  if (!v.ready) errors.ready = 'Let us know how you are thinking about budget.';
  if (!v.budget) errors.budget = 'Choose an approximate monthly budget.';
  if (v.overview.trim().length < 10) errors.overview = 'Add a sentence or two about your brand and goals.';
  return errors;
}

function buildMessage(v: FormValues): string {
  return [
    "Hi CCC, I'd like to discuss a project.",
    `Name: ${v.name.trim()}`,
    v.brand.trim() && `Business/brand: ${v.brand.trim()}`,
    `Interested in: ${v.interest}`,
    v.needs.length > 0 && `Needs: ${v.needs.join(', ')}`,
    `Ready to invest ₹30,000+ per month: ${v.ready}`,
    `Approximate monthly budget: ${v.budget}`,
    `Overview: ${v.overview.trim()}`,
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * Enquiry form that prepares a WhatsApp message on the visitor's device.
 * Nothing is submitted to a server; the visitor reviews and sends the message themselves.
 */
export default function EnquiryForm() {
  const uid = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const configured = isWhatsAppConfigured();

  const id = (field: string) => `${uid}-${field}`;

  function set<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function toggleNeed(need: string) {
    set(
      'needs',
      values.needs.includes(need) ? values.needs.filter((n) => n !== need) : [...values.needs, need]
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(id(firstError))?.focus();
      return;
    }
    if (!configured) return;

    trackCTAClick('services_enquiry_click');
    window.open(buildWhatsAppUrl(buildMessage(values)), '_blank', 'noopener,noreferrer');
    setOpened(true);
  }

  const errorId = (field: string) => id(`${field}-error`);
  const describedBy = (field: keyof FormValues) => (errors[field] ? errorId(field) : undefined);

  function errorText(field: keyof FormValues): ReactNode {
    return errors[field] ? (
      <p id={errorId(field)} className={styles.error}>
        {errors[field]}
      </p>
    ) : null;
  }

  function radioGroup(
    field: 'interest' | 'ready',
    legend: string,
    options: readonly string[],
    hint?: string
  ) {
    return (
      <fieldset className={styles.group} aria-describedby={describedBy(field)}>
        <legend className={styles.legend}>{legend}</legend>
        {hint && <p className={styles.hint}>{hint}</p>}
        <div className={styles.chips}>
          {options.map((option, i) => (
            <label key={option} className={styles.chip}>
              <input
                id={i === 0 ? id(field) : undefined}
                type="radio"
                name={field}
                value={option}
                checked={values[field] === option}
                onChange={() => set(field, option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {errorText(field)}
      </fieldset>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor={id('name')} className={styles.label}>
            Your name
          </label>
          <input
            id={id('name')}
            name="name"
            type="text"
            autoComplete="name"
            className={styles.input}
            value={values.name}
            onChange={(e) => set('name', e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy('name')}
          />
          {errorText('name')}
        </div>

        <div className={styles.field}>
          <label htmlFor={id('brand')} className={styles.label}>
            Business or brand <span className={styles.optional}>(optional)</span>
          </label>
          <input
            id={id('brand')}
            name="brand"
            type="text"
            autoComplete="organization"
            className={styles.input}
            value={values.brand}
            onChange={(e) => set('brand', e.target.value)}
          />
        </div>
      </div>

      {radioGroup('interest', 'What are you interested in?', INTERESTS)}

      <fieldset className={styles.group}>
        <legend className={styles.legend}>
          What do you need help with? <span className={styles.optional}>(optional, pick any)</span>
        </legend>
        <div className={styles.chips}>
          {NEEDS.map((need) => (
            <label key={need} className={styles.chip}>
              <input
                type="checkbox"
                name="needs"
                value={need}
                checked={values.needs.includes(need)}
                onChange={() => toggleNeed(need)}
              />
              <span>{need}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.budgetBox}>
        <p className={styles.budgetTitle}>Budget</p>
        <p className={styles.budgetLead}>
          Marketing works best when the plan fits the budget. This helps us recommend the right
          scope, not turn anyone away.
        </p>

        {radioGroup('ready', 'Are you ready to invest ₹30,000 or more per month?', READY_OPTIONS)}

        <div className={styles.field}>
          <label htmlFor={id('budget')} className={styles.label}>
            Approximate monthly budget
          </label>
          <select
            id={id('budget')}
            name="budget"
            className={styles.input}
            value={values.budget}
            onChange={(e) => set('budget', e.target.value)}
            aria-invalid={errors.budget ? true : undefined}
            aria-describedby={describedBy('budget')}
          >
            <option value="">Select a range…</option>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
          {errorText('budget')}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor={id('overview')} className={styles.label}>
          Tell us about your brand and goals
        </label>
        <textarea
          id={id('overview')}
          name="overview"
          rows={4}
          className={styles.input}
          value={values.overview}
          onChange={(e) => set('overview', e.target.value)}
          aria-invalid={errors.overview ? true : undefined}
          aria-describedby={describedBy('overview')}
        />
        {errorText('overview')}
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={!configured}>
          Send Enquiry via WhatsApp
          <span aria-hidden="true">→</span>
        </button>
        <p className={styles.note} role="status">
          {!configured
            ? 'WhatsApp enquiries are not switched on yet. Please check back soon.'
            : opened
              ? 'WhatsApp should now be open with your message. Press send there to reach CCC. We will reply to talk through the next step.'
              : 'Nothing is sent from this page. The form prepares a WhatsApp message that you review and send yourself.'}
        </p>
      </div>
    </form>
  );
}
