/**
 * CCC services. Two service lines, each with specific offerings.
 * Copy is deliberately non-binding: no guaranteed results, prices, or timelines.
 */

export type OfferingIcon =
  | 'strategy'
  | 'script'
  | 'camera'
  | 'edit'
  | 'instagram'
  | 'youtube'
  | 'linkedin'
  | 'website'
  | 'meta'
  | 'google'
  | 'seo'
  | 'paid';

export interface Offering {
  id: string;
  title: string;
  icon: OfferingIcon;
  description: string;
  /** Typical collaboration, in non-binding language. */
  points: string[];
}

export interface Service {
  id: 'personal-branding' | 'digital-marketing';
  index: string;
  title: string;
  tagline: string;
  description: string;
  whoItHelps: string;
  /** Short chips shown on the overview cards. */
  chips: string[];
  offerings: Offering[];
  cta: string;
}

export const services: Service[] = [
  {
    id: 'personal-branding',
    index: '01',
    title: 'Personal Branding',
    tagline: 'Become the name people remember in your field.',
    description:
      'We shape how you show up online, from the story you tell to the content you publish on Instagram, YouTube, LinkedIn and your own website. One clear voice, planned and produced end to end.',
    whoItHelps:
      'Founders, professionals, creators and experts who want their name to carry weight online.',
    chips: [
      'Instagram',
      'YouTube',
      'LinkedIn',
      'Website',
      'Scripting',
      'Shooting',
      'Content strategy',
      'Editing',
    ],
    cta: 'Start Personal Branding',
    offerings: [
      {
        id: 'content-strategy',
        title: 'Content Strategy',
        icon: 'strategy',
        description: 'A clear plan for what to say, who to say it to, and where to say it.',
        points: [
          'Audience and positioning',
          'Content pillars and calendar',
          'Platform-by-platform plan',
        ],
      },
      {
        id: 'scripting',
        title: 'Scripting',
        icon: 'script',
        description: 'Hooks, scripts and briefs that turn your ideas into content worth watching.',
        points: [
          'Reel, Short and long-form scripts',
          'Hooks and storytelling structure',
          'Creative direction for each shoot',
        ],
      },
      {
        id: 'shooting',
        title: 'Shooting',
        icon: 'camera',
        description: 'Planned shoot days so you arrive prepared and leave with content you can use.',
        points: [
          'Shot lists and shoot planning',
          'Video and photo for your channels',
          'Setup depends on the project',
        ],
      },
      {
        id: 'editing',
        title: 'Editing',
        icon: 'edit',
        description: 'Raw footage shaped into polished videos, ready for each platform.',
        points: [
          'Reels, Shorts and long-form edits',
          'Captions, subtitles and graphics',
          'Formats for each platform',
        ],
      },
      {
        id: 'instagram',
        title: 'Instagram',
        icon: 'instagram',
        description: 'A profile and content rhythm that looks consistent and feels like you.',
        points: [
          'Profile and highlights setup',
          'Reels, carousels and stories',
          'Content planning and posting',
        ],
      },
      {
        id: 'youtube',
        title: 'YouTube',
        icon: 'youtube',
        description: 'A channel built to be found, watched and remembered.',
        points: [
          'Channel positioning and setup',
          'Titles, thumbnails and editing',
          'Upload and content workflow',
        ],
      },
      {
        id: 'linkedin',
        title: 'LinkedIn',
        icon: 'linkedin',
        description: 'Show your expertise where decision-makers are already paying attention.',
        points: [
          'Profile optimisation',
          'Posts and carousels in your voice',
          'Thought-leadership planning',
        ],
      },
      {
        id: 'website',
        title: 'Website',
        icon: 'website',
        description: 'A clean personal or brand website that backs up everything you publish.',
        points: [
          'Portfolio and brand pages',
          'Mobile-first design',
          'SEO foundations',
        ],
      },
    ],
  },
  {
    id: 'digital-marketing',
    index: '02',
    title: 'Digital Marketing',
    tagline: 'Put your brand in front of the people ready to buy.',
    description:
      'Paid and organic marketing across Meta, Google and search, planned around your goals and your budget. We test, measure and refine so your spend works harder over time.',
    whoItHelps:
      'Businesses and brands that want more enquiries, a wider market and a clearer view of what their marketing is doing.',
    chips: ['Meta Ads', 'Google Ads', 'SEO', 'Paid marketing', 'Retargeting', 'Reporting'],
    cta: 'Start Digital Marketing',
    offerings: [
      {
        id: 'meta-ads',
        title: 'Meta Ads',
        icon: 'meta',
        description: 'Facebook and Instagram campaigns built around creative that earns the click.',
        points: [
          'Audience and creative testing',
          'Lead and sales campaigns',
          'Tracking and optimisation',
        ],
      },
      {
        id: 'google-ads',
        title: 'Google Ads',
        icon: 'google',
        description: 'Reach people while they are actively searching for what you offer.',
        points: [
          'Search, Display and YouTube campaigns',
          'Keyword planning and ad copy',
          'Conversion tracking',
        ],
      },
      {
        id: 'seo',
        title: 'SEO',
        icon: 'seo',
        description: 'Build steady, organic visibility so the right people can find you.',
        points: [
          'Keyword research',
          'On-page and technical basics',
          'Local SEO and search content',
        ],
      },
      {
        id: 'paid-marketing',
        title: 'Paid Marketing',
        icon: 'paid',
        description: 'A joined-up paid strategy so every rupee of ad spend has a job to do.',
        points: [
          'Budget planning across channels',
          'Funnels and retargeting',
          'Clear reporting on what matters',
        ],
      },
    ],
  },
];

export const processSteps = [
  {
    index: '01',
    title: 'Discover',
    description: 'We learn your brand, your audience, and what you want to achieve.',
    label: 'DISCOVER',
  },
  {
    index: '02',
    title: 'Strategise',
    description: 'We plan the content, the channels, and the budget around your goals.',
    label: 'PLAN',
  },
  {
    index: '03',
    title: 'Create & launch',
    description: 'We produce the content and set up the campaigns, with your input at each step.',
    label: 'CREATE',
  },
  {
    index: '04',
    title: 'Grow & refine',
    description: 'We review what is working, improve it, and keep building momentum.',
    label: 'GROW',
  },
];

/** Platforms and channels, used for the marquee band. */
export const marqueeItems = [
  'Personal Branding',
  'Instagram',
  'YouTube',
  'LinkedIn',
  'Meta Ads',
  'Google Ads',
  'SEO',
];
