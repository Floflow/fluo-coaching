'use client'

const CALENDLY_URL = 'https://calendly.com/floperrindb'

type Props = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  dataTrack?: string
}

export default function CalendlyButton({ children, className, style, dataTrack }: Props) {
  function openCalendly(e: React.MouseEvent) {
    e.preventDefault()
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({ url: CALENDLY_URL })
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
