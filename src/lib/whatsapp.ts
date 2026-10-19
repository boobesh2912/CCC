import { siteConfig } from '@/content/site';

/**
 * WhatsApp click-to-chat URL builder.
 *
 * ⚠️  A click opens a WhatsApp conversation — it does NOT confirm a booking.
 *     CTA copy must never imply a completed reservation.
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

/** Prefilled message for studio booking enquiry */
export const studioBookingMessage = `Hi CCC, I'm interested in booking the studio.
Type of session: [Podcast / Video shoot / Other]
Preferred date: [Date]
Preferred time: [Time]
Support needed: [Studio only / Production support]`;

/** Prefilled message for creative/business services enquiry */
export const servicesEnquiryMessage = `Hi CCC, I'd like to discuss a creative project.
Business/brand: [Name]
What I need help with: [Content strategy / Production / Branding / Social media / Marketing / Other]
Brief overview: [A few details]`;

export function getStudioBookingUrl(): string {
  return buildWhatsAppUrl(studioBookingMessage);
}

export function getServicesEnquiryUrl(): string {
  return buildWhatsAppUrl(servicesEnquiryMessage);
}

export function isWhatsAppConfigured(): boolean {
  // Digits only, with country code: at least 8 digits after stripping spaces/+/dashes.
  return siteConfig.whatsappNumber.replace(/\D/g, '').length >= 8;
}
