// ─────────────────────────────────────────
// Contact — section sombre + formulaire
// Référence visuelle : fluo-accueil.html — section "CONTACT" (ligne 1593)
// ─────────────────────────────────────────

'use client'

import CalendlyButton from './CalendlyButton'

export default function Contact() {
  return (
    <section
      className="section section-dark"
      id="contact"
      data-section="contact"
    >
      <div className="container">
        <div className="contact-grid">

          {/* Intro gauche */}
          <div className="contact-intro">
            <p className="label fade-in" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '0.5rem' }}>
              On fait le point ?
            </p>
            <h2 className="contact-title fade-in">
              Un appel découverte,<br />sans engagement.
            </h2>
            <p className="contact-desc fade-in">
              30 minutes pour se présenter, comprendre ta situation et répondre à toutes tes questions.
            </p>
            <CalendlyButton className="btn-fluo-dark fade-in fade-in-delay-1" dataTrack="cta-booking">
              Choisir un créneau <span className="btn-arrow">→</span>
            </CalendlyButton>
          </div>

          {/* Formulaire droite */}
          <div className="contact-form fade-in fade-in-delay-1">
            <p style={{
              fontSize: '15px', fontWeight: 300,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.6, marginBottom: '1.75rem',
            }}>
              Tu peux aussi me laisser un message ici, je te réponds personnellement.
            </p>

            <form
              className="form"
              name="contact"
              method="POST"
              action="#"
              data-section="contact"
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstname">Prénom *</label>
                  <input
                    className="form-input"
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Marie"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="lastname">Nom *</label>
                  <input
                    className="form-input"
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Dupont"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email *</label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="marie@exemple.fr"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Téléphone</label>
                <input
                  className="form-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+33 6 00 00 00 00"
                  autoComplete="tel"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Votre situation en quelques mots</label>
                <textarea
                  className="form-input form-textarea"
                  id="message"
                  name="message"
                  placeholder="Je ne sais plus vraiment où j'en suis dans ma carrière…"
                />
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="gdpr"
                  name="gdpr"
                  required
                />
                <label className="form-check-label" htmlFor="gdpr">
                  J&rsquo;accepte que mes données soient utilisées pour traiter ma demande.
                  Elles ne seront jamais transmises à des tiers.
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ alignSelf: 'flex-start' }}
                data-track="contact-form-submit"
              >
                Envoyer ma demande <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
