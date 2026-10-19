/**
 * Analytics utility — stub for future implementation.
 * Only tracks CTA click events; never sends message content or PII.
 */

export type CTAEvent = 'studio_booking_click' | 'services_enquiry_click' | 'whatsapp_click';

export function trackCTAClick(event: CTAEvent): void {
  // TODO: Connect to analytics provider (GA4, Plausible, etc.) when configured.
  // Only the event name should be sent — never the message content.
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] CTA Click: ${event}`);
  }
}
