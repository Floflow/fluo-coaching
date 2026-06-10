import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Fluo Coaching'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  const logoBuffer = readFileSync(join(process.cwd(), 'public/images/logo-clair.png'))
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="Fluo Coaching" style={{ width: '700px' }} />
      </div>
    ),
    { ...size }
  )
}
