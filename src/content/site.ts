/**
 * CCC Site Configuration
 * Central source of truth for all business details, contact info, and site metadata.
 *
 * ⚠️  BEFORE LAUNCH: Replace all placeholder values marked with TODO.
 */

export const siteConfig = {
  name: 'Covai Creative Corner',
  shortName: 'CCC',
  tagline: 'A creative marketing agency for the stories and brands people need to notice.',
  description:
    'Covai Creative Corner is a personal branding and digital marketing agency that helps founders, creators and businesses expand their market and grow.',
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
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Studio', href: '/studio' },
  ] as const,

  footerNavigation: [
    {
      title: 'Services',
      links: [
        { label: 'Personal Branding', href: '/services#personal-branding' },
        { label: 'Digital Marketing', href: '/services#digital-marketing' },
        { label: 'Instagram & YouTube', href: '/services#instagram' },
        { label: 'LinkedIn', href: '/services#linkedin' },
        { label: 'Meta & Google Ads', href: '/services#meta-ads' },
        { label: 'SEO', href: '/services#seo' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About CCC', href: '/about' },
        { label: 'What We Create', href: '/work' },
        { label: 'Studio (coming soon)', href: '/studio' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ] as const,
} as const;

export type NavItem = (typeof siteConfig.navigation)[number];
