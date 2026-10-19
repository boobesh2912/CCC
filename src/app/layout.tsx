import type { Metadata } from 'next';
import { DM_Serif_Display, Manrope, IBM_Plex_Mono } from 'next/font/google';
import '@/styles/globals.css';
import SiteHeader from '@/components/navigation/SiteHeader';
import ContactFooter from '@/components/navigation/ContactFooter';
import { siteConfig } from '@/content/site';

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif',
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
      className={`${dmSerif.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available so scroll reveals can hide content until it enters view. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="grain-overlay">
        <SiteHeader />
        <main id="main-content">{children}</main>
        <ContactFooter />
      </body>
    </html>
  );
}
