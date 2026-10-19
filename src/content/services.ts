export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whoItHelps: string;
  typicalWork: string[];
  cta: string;
  ctaType: 'studio' | 'services';
}

export const services: ServiceItem[] = [
  {
    id: 'content-strategy',
    index: '01',
    title: 'Content Strategy',
    shortDescription: 'Define what to say, who to say it to, and where to say it.',
    fullDescription:
      'A content strategy maps your expertise to the formats and channels your audience actually uses. CCC helps define topics, plan content calendars, and build a repeatable system for publishing.',
    whoItHelps: 'Founders, teams, and brands building a consistent content presence.',
    typicalWork: [
      'Audience and topic definition',
      'Content calendar planning',
      'Channel and format recommendations',
      'Messaging and positioning guidance',
    ],
    cta: 'Discuss Content Strategy',
    ctaType: 'services',
  },
  {
    id: 'scripting',
    index: '02',
    title: 'Scripting & Creative Direction',
    shortDescription: 'Shape ideas into structured, purposeful scripts and briefs.',
    fullDescription:
      'Great content starts with a clear plan. CCC helps shape ideas into scripts, outlines, and creative briefs that make recording sessions productive and content purposeful.',
    whoItHelps: 'Podcasters, video creators, and teams preparing content.',
    typicalWork: [
      'Episode and video scripting',
      'Interview preparation and question design',
      'Creative brief development',
      'Narrative and story structuring',
    ],
    cta: 'Discuss Scripting',
    ctaType: 'services',
  },
  {
    id: 'editing',
    index: '03',
    title: 'Video & Podcast Editing',
    shortDescription: 'Turn raw recordings into polished, publishable content.',
    fullDescription:
      'CCC handles editing from raw footage or audio through to a finished product ready for publishing. This includes cuts, colour, sound, graphics, and format adaptation for different platforms.',
    whoItHelps: 'Creators and businesses producing regular video or podcast content.',
    typicalWork: [
      'Video editing and colour grading',
      'Podcast audio editing and mixing',
      'Short-form clip creation',
      'Subtitles and basic graphics',
    ],
    cta: 'Discuss Editing',
    ctaType: 'services',
  },
  {
    id: 'branding',
    index: '04',
    title: 'Brand Identity',
    shortDescription: 'Build a visual and verbal identity that holds up across every touchpoint.',
    fullDescription:
      'A clear brand identity makes every piece of content more recognisable and more effective. CCC develops visual systems, tone guidelines, and brand assets that work across platforms.',
    whoItHelps: 'New brands, businesses repositioning, and creators building a personal brand.',
    typicalWork: [
      'Logo and visual identity design',
      'Brand guidelines and tone of voice',
      'Social media templates and asset systems',
      'Brand audit and refinement',
    ],
    cta: 'Discuss Branding',
    ctaType: 'services',
  },
  {
    id: 'social-media',
    index: '05',
    title: 'Social Media Management',
    shortDescription: 'Keep channels active with consistent, well-crafted content.',
    fullDescription:
      'CCC manages social channels with planned, produced, and published content. The focus is on consistency, quality, and a system that reflects the brand without requiring daily founder involvement.',
    whoItHelps: 'Businesses and creators who need consistent social presence without doing it all themselves.',
    typicalWork: [
      'Content planning and scheduling',
      'Post creation and copywriting',
      'Platform management and community response',
      'Performance tracking and reporting',
    ],
    cta: 'Discuss Social Media',
    ctaType: 'services',
  },
  {
    id: 'marketing',
    index: '06',
    title: 'Digital Marketing',
    shortDescription: 'Reach the right people with planned, measured campaigns.',
    fullDescription:
      'CCC plans and manages digital campaigns across search, social, and content channels. The approach is practical, data-informed, and focused on helping real people find your work.',
    whoItHelps: 'Businesses investing in paid or organic growth who want a partner, not just an ad account.',
    typicalWork: [
      'Campaign strategy and planning',
      'Ad creation and management',
      'SEO foundations and content optimisation',
      'Analytics setup and performance reporting',
    ],
    cta: 'Discuss Marketing',
    ctaType: 'services',
  },
];

export const studioFeatures = [
  'Studio rental',
  'Podcast and video recording',
  'Editing and content delivery',
  'Production support, where available',
];

export const brandFeatures = [
  'Content strategy and scripting',
  'Branding and identity',
  'Video editing',
  'Social media management',
  'Digital marketing',
];

export const processSteps = [
  {
    index: '01',
    title: 'Shape the idea',
    description: 'Define the audience, the message, and the format.',
    label: 'DEFINE',
  },
  {
    index: '02',
    title: 'Set the scene',
    description: 'Plan the recording, visuals, and production needs.',
    label: 'PLAN',
  },
  {
    index: '03',
    title: 'Make the work',
    description: 'Record, shoot, design, or edit.',
    label: 'CREATE',
  },
  {
    index: '04',
    title: 'Put it to work',
    description: 'Prepare content for the channels where the audience will see it.',
    label: 'PUBLISH',
  },
];
