// ─────────────────────────────────────────
// Layout global — Fluo Coaching
// Charge les polices via next/font (pas de FOUT)
// ─────────────────────────────────────────

import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import FloatCanvas from '@/components/FloatCanvas'
import ScrollObserver from '@/components/ScrollObserver'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fluo Coaching — Bilan de compétences & Coaching professionnel',
  description:
    "Tu ne te reconnais plus dans ton travail ? Floriane t'accompagne pour comprendre, explorer et décider sereinement de la suite. Bilan de compétences éligible CPF.",
  metadataBase: new URL('https://fluo-coaching.fr'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  openGraph: {
    title: 'Fluo Coaching — Bilan de compétences & Coaching professionnel',
    description:
      "Un accompagnement structuré pour comprendre pourquoi tu n'avances plus — et décider sereinement de la suite.",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: 'if(window.location.hash)history.replaceState(null,"",window.location.pathname+window.location.search)' }} />
        <FloatCanvas />
        <ScrollObserver />
        {children}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
