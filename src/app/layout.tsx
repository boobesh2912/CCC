import type { Metadata } from 'next';
import { Bricolage_Grotesque, Manrope, IBM_Plex_Mono } from 'next/font/google';
import '@/styles/globals.css';
import SiteHeader from '@/components/navigation/SiteHeader';
import ContactFooter from '@/components/navigation/ContactFooter';
import Preloader from '@/components/ui/Preloader';
import { siteConfig } from '@/content/site';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: '/' },
  title: {
    default: 'Covai Creative Corner — Creative Production Studio',
    template: '%s | Covai Creative Corner',
  },
  description:
    'A creative production studio and brand partner for podcasts, video, brands, and content built to connect.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Covai Creative Corner',
    title: 'Covai Creative Corner — Creative Production Studio',
    description:
      'A creative production studio and brand partner for podcasts, video, brands, and content built to connect.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Covai Creative Corner — Creative Production Studio',
    description:
      'A creative production studio and brand partner for podcasts, video, brands, and content built to connect.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available (scroll reveals) and tracks whether the preloader has already played this session. */}
        <script
          dangerouslySetInnerHTML={{ __html: "(function(d){var c=d.documentElement.classList;c.add('js');try{if(sessionStorage.getItem('ccc-seen')){c.add('no-preload')}else{sessionStorage.setItem('ccc-seen','1');c.add('preloading')}}catch(e){c.add('preloading')}})(document)" }}
        />
      </head>
      <body className="grain-overlay">
        <Preloader />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <ContactFooter />
      </body>
    </html>
  );
}
