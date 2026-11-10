import { siteConfig } from '@/content/site';

/**
 * WhatsApp click-to-chat URL builder.
 *
 * A click opens a WhatsApp conversation — it does NOT confirm anything.
 * CTA copy must never imply a completed booking or purchase.
 */

const WHATSAPP_BASE = 'https://wa.me/';

let warned = false;

function getWhatsAppNumber(): string {
  if (!isWhatsAppConfigured()) {
    if (!warned) {
      warned = true;
      console.warn(
        '⚠️  WhatsApp number is not configured. Set NEXT_PUBLIC_WHATSAPP_NUMBER before launch.'
      );
    }
    return '';
  }
  return siteConfig.whatsappNumber.replace(/\D/g, '');
}

export function buildWhatsAppUrl(message?: string): string {
  const number = getWhatsAppNumber();
  const base = `${WHATSAPP_BASE}${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Prefilled message for a general services enquiry. */
export const servicesEnquiryMessage = `Hi CCC, I'd like to discuss a project.
Business/brand: [Name]
I'm interested in: [Personal Branding / Digital Marketing / Both]
Monthly budget: [Approximate budget]
Brief overview: [A few details]`;

/** Prefilled message for the studio waiting list. */
export const studioWaitlistMessage = `Hi CCC, please let me know when the studio opens.
Name: [Name]
I'm interested in using it for: [Podcast / Video shoot / Other]`;

export function getServicesEnquiryUrl(): string {
  return buildWhatsAppUrl(servicesEnquiryMessage);
}

export function getStudioWaitlistUrl(): string {
  return buildWhatsAppUrl(studioWaitlistMessage);
}

export function isWhatsAppConfigured(): boolean {
  // Digits only, with country code: at least 8 digits after stripping spaces/+/dashes.
  return siteConfig.whatsappNumber.replace(/\D/g, '').length >= 8;
}
