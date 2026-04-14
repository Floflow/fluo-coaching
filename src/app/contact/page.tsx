// ─────────────────────────────────────────
// Page Contact — Fluo Coaching
// ─────────────────────────────────────────

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CalendlyInline from '@/components/CalendlyInline'

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
        <section style={{ padding: '4rem 0 3rem', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <p className="label fade-in">On fait le point ?</p>
            <h1 className="page-intro-title fade-in fade-in-delay-1" style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>
              Parlons de toi
            </h1>
            <p style={{
              fontSize: '1rem', fontWeight: 300, color: 'var(--text-mid)',
              lineHeight: 1.8, maxWidth: '520px',
            }} className="fade-in fade-in-delay-2">
              Choisis ce qui te convient le mieux — réserver un créneau ou m&rsquo;envoyer un message.
              Dans les deux cas, je te réponds personnellement.
            </p>
          </div>
        </section>

        {/* ── Deux colonnes ── */}
        <section className="section">
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

                <form className="form" name="contact" method="POST" action="#">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="firstname">Prénom *</label>
                      <input className="form-input form-input-light" type="text" id="firstname" name="firstname" placeholder="Marie" required autoComplete="given-name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="lastname">Nom *</label>
                      <input className="form-input form-input-light" type="text" id="lastname" name="lastname" placeholder="Dupont" required autoComplete="family-name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input className="form-input form-input-light" type="email" id="email" name="email" placeholder="marie@exemple.fr" required autoComplete="email" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Ta situation en quelques mots</label>
                    <textarea className="form-input form-input-light form-textarea" id="message" name="message" placeholder="Je ne sais plus vraiment où j'en suis dans ma carrière…" />
                  </div>
                  <div className="form-check">
                    <input type="checkbox" id="gdpr" name="gdpr" required />
                    <label className="form-check-label form-check-label-light" htmlFor="gdpr">
                      J&rsquo;accepte que mes données soient utilisées pour traiter ma demande.
                      Elles ne seront jamais transmises à des tiers.
                    </label>
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }} data-track="contact-form-submit">
                    Envoyer <span className="btn-arrow">→</span>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
