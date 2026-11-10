import type { OfferingIcon } from '@/content/services';

export type ServiceIconName = OfferingIcon | 'personal-branding' | 'digital-marketing';

/** Generic line icons (no brand logos). */
export default function ServiceIcon({ name, size = 30 }: { name: ServiceIconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'strategy':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        </svg>
      );
    case 'script':
      return (
        <svg {...common}>
          <path d="M5 4h10l4 4v12H5z" />
          <path d="M14 4v5h5M8 13h8M8 17h5" />
        </svg>
      );
    case 'camera':
      return (
        <svg {...common}>
          <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
      );
    case 'edit':
      return (
        <svg {...common}>
          <circle cx="6" cy="7" r="2.5" />
          <circle cx="6" cy="17" r="2.5" />
          <path d="M8 8.5L20 18M8 15.5L20 6" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="0.8" fill="currentColor" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...common}>
          <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
          <path d="M10 9.5v5l4.5-2.5z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
          <path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 015 0v3" />
        </svg>
      );
    case 'website':
      return (
        <svg {...common}>
          <rect x="3" y="4.5" width="18" height="15" rx="3" />
          <path d="M3 9.5h18" />
          <circle cx="6.5" cy="7" r="0.6" fill="currentColor" />
        </svg>
      );
    case 'meta':
      return (
        <svg {...common}>
          <path d="M12 12c-1.5-2.2-3-3.5-4.7-3.5A3.5 3.5 0 003.8 12a3.5 3.5 0 003.5 3.5C9 15.5 10.5 14.2 12 12zm0 0c1.5 2.2 3 3.5 4.7 3.5a3.5 3.5 0 003.5-3.5 3.5 3.5 0 00-3.5-3.5C15 8.5 13.5 9.8 12 12z" />
        </svg>
      );
    case 'google':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M16.5 16.5L21 21M8.5 11h5M11 8.5v5" />
        </svg>
      );
    case 'seo':
      return (
        <svg {...common}>
          <path d="M4 19V5M4 19h16" />
          <path d="M8 15l4-4 3 3 5-6" />
        </svg>
      );
    case 'personal-branding':
      return (
        <svg {...common}>
          <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6L12 16.7 6.6 19.6l1.2-6L3.3 9.4l6.1-.8z" />
        </svg>
      );
    case 'paid':
    case 'digital-marketing':
    default:
      return (
        <svg {...common}>
          <path d="M4 14v-4l11-5v14z" />
          <path d="M15 9.5a3 3 0 010 5M7 14l1.5 6" />
        </svg>
      );
  }
}
