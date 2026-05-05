// ─────────────────────────────────────────
// Page Contact — Fluo Coaching
// ─────────────────────────────────────────

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CalendlyInline from '@/components/CalendlyInline'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Fluo Coaching',
  description:
    'Réserve une séance découverte gratuite ou envoie-moi un message. 30 minutes pour faire connaissance, sans engagement.',
}

export default function Contact() {
  return (
    <>
      <Header />
      <main>

        {/* ── Intro ── */}
        <section style={{ padding: '3rem 0 2rem' }}>
          <div className="container">
            <p className="label fade-in">On fait le point ?</p>
            <h1 className="page-intro-title fade-in fade-in-delay-1" style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>
              Parlons de <span className="hl">toi</span>
            </h1>
            <div style={{
              fontSize: '1rem', fontWeight: 300, color: 'var(--text-mid)',
              lineHeight: 1.8, maxWidth: '640px', marginBottom: '2.5rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }} className="fade-in fade-in-delay-2">
              <p>Tu peux réserver un créneau pour qu&rsquo;on s&rsquo;appelle, ou m&rsquo;envoyer un message si tu préfères commencer par là.</p>
              <p>C&rsquo;est l&rsquo;occasion de me parler de ta situation, de ce que tu recherches et de me poser toutes tes questions.</p>
              <p>À très vite !</p>
            </div>
          </div>
        </section>

        {/* ── Deux colonnes ── */}
        <section className="section section-alt">
          <div className="container">
            <div className="contact-page-grid">

              {/* Bloc gauche — Calendly inline */}
              <div className="fade-in">
                <p className="label" style={{ marginBottom: '1.25rem' }}>Séance découverte gratuite</p>
                <CalendlyInline />
              </div>

              {/* Séparateur vertical */}
              <div className="contact-page-sep" aria-hidden="true" />

              {/* Bloc droit — Formulaire */}
              <div className="contact-page-bloc fade-in fade-in-delay-1">
                <p className="label" style={{ marginBottom: '1rem' }}>Tu préfères écrire ?</p>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 700, lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem',
                }}>
                  Envoie-moi<br />un message
                </h2>
                <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                  Je te réponds personnellement sous 48h.
                </p>

                <ContactForm />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
