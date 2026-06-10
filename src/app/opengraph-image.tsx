import { ImageResponse } from 'next/og'

export const alt = 'Fluo Coaching'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          gap: '32px',
        }}
      >
        {/* Logo FLUO */}
        <div style={{ display: 'flex', alignItems: 'flex-end', lineHeight: '1' }}>
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '240px',
              fontWeight: '700',
              color: '#1E3830',
            }}
          >
            FLU
          </span>
          <div style={{ display: 'flex', position: 'relative', width: '190px', height: '200px' }}>
            <div
              style={{
                position: 'absolute',
                width: '148px',
                height: '148px',
                borderRadius: '50%',
                backgroundColor: '#FFFF33',
                bottom: '16px',
                left: '10px',
              }}
            />
            <span
              style={{
                position: 'absolute',
                fontFamily: 'Georgia, serif',
                fontSize: '240px',
                fontWeight: '700',
                color: '#1E3830',
                bottom: '0px',
                left: '0px',
              }}
            >
              O
            </span>
          </div>
        </div>

        {/* Sous-titre */}
        <span
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '34px',
            color: '#1E3830',
            letterSpacing: '1px',
          }}
        >
          Bilans de compétences & coaching professionnel
        </span>
      </div>
    ),
    { ...size }
  )
}
