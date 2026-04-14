'use client'

const CALENDLY_URL = 'https://calendly.com/floperrindb/30min?background_color=F8F5EF&text_color=1E3830&primary_color=CCCC00&hide_gdpr_banner=1'

type Props = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  dataTrack?: string
}

export default function CalendlyButton({ children, className, style, dataTrack }: Props) {
  function openCalendly(e: React.MouseEvent) {
    e.preventDefault()
    const w = window as Window & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } }
    if (typeof window !== 'undefined' && w.Calendly) {
      w.Calendly.initPopupWidget({ url: CALENDLY_URL })
    }
  }

  return (
    <button
      onClick={openCalendly}
      className={className}
      style={style}
      data-track={dataTrack}
    >
      {children}
    </button>
  )
}
