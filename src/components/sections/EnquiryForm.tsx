'use client';

import { useId, useState, type FormEvent } from 'react';
import { trackCTAClick } from '@/lib/analytics';
import { buildWhatsAppUrl, isWhatsAppConfigured } from '@/lib/whatsapp';
import styles from './EnquiryForm.module.css';

type EnquiryType = 'studio' | 'project';

interface FormValues {
  name: string;
  sessionType: string;
  date: string;
  time: string;
  duration: string;
  support: string;
  brand: string;
  need: string;
  overview: string;
}

const initialValues: FormValues = {
  name: '',
  sessionType: '',
  date: '',
  time: '',
  duration: '',
  support: '',
  brand: '',
  need: '',
  overview: '',
};

type Errors = Partial<Record<keyof FormValues, string>>;

function validate(type: EnquiryType, v: FormValues): Errors {
  const errors: Errors = {};
  if (!v.name.trim()) errors.name = 'Please add your name.';
  if (type === 'studio') {
    if (!v.sessionType) errors.sessionType = 'Choose the type of session.';
    if (!v.date) errors.date = 'Choose a preferred date.';
    if (!v.support) errors.support = 'Choose the support you need.';
  } else {
    if (!v.need) errors.need = 'Choose what you need help with.';
    if (v.overview.trim().length < 10) errors.overview = 'Add a sentence or two about the project.';
  }
  return errors;
}

function buildMessage(type: EnquiryType, v: FormValues): string {
  if (type === 'studio') {
    return [
      "Hi CCC, I'm interested in booking the studio.",
      `Name: ${v.name.trim()}`,
      `Type of session: ${v.sessionType}`,
      `Preferred date: ${v.date}`,
      v.time && `Preferred time: ${v.time}`,
      v.duration.trim() && `Approximate duration: ${v.duration.trim()}`,
      `Support needed: ${v.support}`,
    ]
      .filter(Boolean)
      .join('\n');
  }
  return [
    "Hi CCC, I'd like to discuss a creative project.",
    `Name: ${v.name.trim()}`,
    v.brand.trim() && `Business/brand: ${v.brand.trim()}`,
    `What I need help with: ${v.need}`,
    `Brief overview: ${v.overview.trim()}`,
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * Short enquiry form that prepares a WhatsApp message on the visitor's device.
 * Nothing is submitted to a server; the visitor sends the message themselves.
 */
export default function EnquiryForm() {
  const uid = useId();
  const [type, setType] = useState<EnquiryType>('studio');
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const configured = isWhatsAppConfigured();

  const id = (field: string) => `${uid}-${field}`;

  function set<K extends keyof FormValues>(field: K, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(type, values);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(id(firstError))?.focus();
      return;
    }
    if (!configured) return;

    trackCTAClick(type === 'studio' ? 'studio_booking_click' : 'services_enquiry_click');
    window.open(buildWhatsAppUrl(buildMessage(type, values)), '_blank', 'noopener,noreferrer');
    setOpened(true);
  }

  function fieldProps(field: keyof FormValues) {
    const hasError = Boolean(errors[field]);
    return {
      id: id(field),
      name: field,
      value: values[field],
      'aria-invalid': hasError || undefined,
      'aria-describedby': hasError ? id(`${field}-error`) : undefined,
    };
  }

  function errorText(field: keyof FormValues) {
    return errors[field] ? (
      <p id={id(`${field}-error`)} className={styles.error}>
        {errors[field]}
      </p>
    ) : null;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <fieldset className={styles.typeSwitch}>
        <legend className={styles.legend}>What are you enquiring about?</legend>
        <div className={styles.typeOptions}>
          {(
            [
              ['studio', 'A studio session'],
              ['project', 'A creative project'],
            ] as const
          ).map(([value, label]) => (
            <label key={value} className={styles.typeOption}>
              <input
                type="radio"
                name="enquiryType"
                value={value}
                checked={type === value}
                onChange={() => {
                  setType(value);
                  setErrors({});
                  setOpened(false);
                }}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.grid}>
        <div className={styles.fieldWide}>
          <label htmlFor={id('name')} className={styles.label}>
            Your name
          </label>
          <input
            type="text"
            autoComplete="name"
            className={styles.input}
            onChange={(e) => set('name', e.target.value)}
            {...fieldProps('name')}
          />
          {errorText('name')}
        </div>

        {type === 'studio' ? (
          <>
            <div className={styles.field}>
              <label htmlFor={id('sessionType')} className={styles.label}>
                Type of session
              </label>
              <select
                className={styles.input}
                onChange={(e) => set('sessionType', e.target.value)}
                {...fieldProps('sessionType')}
              >
                <option value="">Select…</option>
                <option>Podcast</option>
                <option>Interview</option>
                <option>Video shoot</option>
                <option>Other</option>
              </select>
              {errorText('sessionType')}
            </div>

            <div className={styles.field}>
              <label htmlFor={id('support')} className={styles.label}>
                Support needed
              </label>
              <select
                className={styles.input}
                onChange={(e) => set('support', e.target.value)}
                {...fieldProps('support')}
              >
                <option value="">Select…</option>
                <option>Studio only</option>
                <option>Production support</option>
                <option>Not sure yet</option>
              </select>
              {errorText('support')}
            </div>

            <div className={styles.field}>
              <label htmlFor={id('date')} className={styles.label}>
                Preferred date
              </label>
              <input
                type="date"
                className={styles.input}
                onChange={(e) => set('date', e.target.value)}
                {...fieldProps('date')}
              />
              {errorText('date')}
            </div>

            <div className={styles.field}>
              <label htmlFor={id('time')} className={styles.label}>
                Preferred time <span className={styles.optional}>(optional)</span>
              </label>
              <input
                type="time"
                className={styles.input}
                onChange={(e) => set('time', e.target.value)}
                {...fieldProps('time')}
              />
            </div>

            <div className={styles.fieldWide}>
              <label htmlFor={id('duration')} className={styles.label}>
                Approximate duration <span className={styles.optional}>(optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 2 hours"
                className={styles.input}
                onChange={(e) => set('duration', e.target.value)}
                {...fieldProps('duration')}
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.field}>
              <label htmlFor={id('brand')} className={styles.label}>
                Business or brand <span className={styles.optional}>(optional)</span>
              </label>
              <input
                type="text"
                autoComplete="organization"
                className={styles.input}
                onChange={(e) => set('brand', e.target.value)}
                {...fieldProps('brand')}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor={id('need')} className={styles.label}>
                What you need help with
              </label>
              <select
                className={styles.input}
                onChange={(e) => set('need', e.target.value)}
                {...fieldProps('need')}
              >
                <option value="">Select…</option>
                <option>Content strategy</option>
                <option>Scripting</option>
                <option>Production</option>
                <option>Editing</option>
                <option>Branding</option>
                <option>Social media</option>
                <option>Marketing</option>
                <option>Other</option>
              </select>
              {errorText('need')}
            </div>

            <div className={styles.fieldWide}>
              <label htmlFor={id('overview')} className={styles.label}>
                Brief overview
              </label>
              <textarea
                rows={4}
                className={styles.input}
                onChange={(e) => set('overview', e.target.value)}
                {...fieldProps('overview')}
              />
              {errorText('overview')}
            </div>
          </>
        )}
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={!configured}>
          {type === 'studio' ? 'Open Studio Enquiry in WhatsApp' : 'Open Project Enquiry in WhatsApp'}
        </button>
        <p className={styles.note} role="status">
          {!configured
            ? 'WhatsApp enquiries are not switched on yet. Please check back soon.'
            : opened
              ? 'WhatsApp should now be open with your message. Press send there to reach CCC — CCC will reply to confirm details.'
              : 'Nothing is sent from this page. The form prepares a WhatsApp message that you review and send yourself.'}
        </p>
      </div>
    </form>
  );
}
