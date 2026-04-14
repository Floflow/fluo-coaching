'use client'

const CALENDLY_URL =
  'https://calendly.com/floperrindb?background_color=F8F5EF&text_color=1E3830&primary_color=CCCC00'

export default function CalendlyInline() {
  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}
