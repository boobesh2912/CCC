import { ImageResponse } from 'next/og';

// Typographic share image. Replace with a real studio photograph once available.
export const alt = 'Covai Creative Corner — Make room for a better story.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#111110',
          padding: '72px 80px',
          color: '#F1EEE7',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            fontSize: 22,
            letterSpacing: 4,
            color: '#B8B3AA',
          }}
        >
          <span>COVAI CREATIVE CORNER</span>
          <span style={{ color: '#C77A4B' }}>RECORD / CREATE / PUBLISH</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: 96, height: 3, backgroundColor: '#C77A4B', marginBottom: 36 }} />
          <div style={{ fontSize: 96, lineHeight: 1.04, maxWidth: 900 }}>
            Make room for a better story.
          </div>
        </div>
        <div style={{ fontSize: 26, color: '#B8B3AA', fontFamily: 'sans-serif' }}>
          Podcast &amp; video studio · Brand and content services
        </div>
      </div>
    ),
    size
  );
}
