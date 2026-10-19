/**
 * CCC Site Configuration
 * Central source of truth for all business details, contact info, and site metadata.
 *
 * ⚠️  BEFORE LAUNCH: Replace all placeholder values marked with TODO.
 */

export const siteConfig = {
  name: 'Covai Creative Corner',
  shortName: 'CCC',
  tagline: 'A creative studio for the stories and brands people need to notice.',
  description:
    'Covai Creative Corner is a creative production studio and brand partner for podcasts, video, brands, and content built to connect.',
  url: 'https://covaicreativecorner.com', // TODO: Confirm domain before launch

  /**
   * ⚠️  CRITICAL: Replace with CCC's real WhatsApp number before launch.
   * Format: country code + number, digits only. Example: 919876543210
   * The site MUST NOT go live with this placeholder.
   */
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || 'REPLACE_WITH_REAL_NUMBER') as string, // TODO: Replace with real WhatsApp number

  social: {
    // TODO: Add confirmed social profile URLs before launch
    instagram: '', // e.g. 'https://instagram.com/covaicreativecorner'
    youtube: '', // e.g. 'https://youtube.com/@covaicreativecorner'
    linkedin: '', // e.g. 'https://linkedin.com/company/covai-creative-corner'
  },

  /** TODO: Confirm location details before publishing */
  location: {
    city: '', // e.g. 'Coimbatore'
    area: '', // e.g. 'Peelamedu'
    fullAddress: '', // Only add when confirmed
  },

  navigation: [
    { label: 'Studio', href: '/studio' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
  ] as const,

  footerNavigation: [
    {
      title: 'Studio',
      links: [
        { label: 'Studio Rental', href: '/studio' },
        { label: 'Production Support', href: '/studio#production' },
        { label: 'Book a Session', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Content Strategy', href: '/services#content-strategy' },
        { label: 'Branding & Identity', href: '/services#branding' },
        { label: 'Video & Podcast Editing', href: '/services#editing' },
        { label: 'Social Media', href: '/services#social-media' },
        { label: 'Digital Marketing', href: '/services#marketing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About CCC', href: '/about' },
        { label: 'Selected Work', href: '/work' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ] as const,
} as const;

export type NavItem = (typeof siteConfig.navigation)[number];
