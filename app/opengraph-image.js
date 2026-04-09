import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'INFERNO Neapolitana'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: '#050505',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1200&auto=format&fit=crop"
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(5,5,5,0.2), rgba(5,5,5,0.7))',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div style={{ fontSize: 96, fontWeight: 900, color: 'white', letterSpacing: '-3px', lineHeight: 1 }}>
            INFERNO
          </div>
          <div style={{ fontSize: 48, fontWeight: 900, color: '#ef4444', letterSpacing: '4px' }}>
            NEAPOLITANA
          </div>
          <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', letterSpacing: '4px', marginTop: 12 }}>
            WARSZAWA • PIZZA NEAPOLITANA
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
