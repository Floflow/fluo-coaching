'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p style={{ color: 'var(--text)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
        Merci pour ton message !
      </p>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit} data-section="contact">
      <div className="form-row">
        <div className="form-group">
          <label className="form-label form-label-light" htmlFor="firstname">Prénom *</label>
          <input className="form-input form-input-light" type="text" id="firstname" name="firstname" placeholder="Marie" required autoComplete="given-name" />
        </div>
        <div className="form-group">
          <label className="form-label form-label-light" htmlFor="lastname">Nom *</label>
          <input className="form-input form-input-light" type="text" id="lastname" name="lastname" placeholder="Dupont" required autoComplete="family-name" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label form-label-light" htmlFor="email">Email *</label>
        <input className="form-input form-input-light" type="email" id="email" name="email" placeholder="marie@exemple.fr" required autoComplete="email" />
      </div>
      <div className="form-group">
        <label className="form-label form-label-light" htmlFor="message">Ta situation en quelques mots</label>
        <textarea className="form-input form-input-light form-textarea" id="message" name="message" placeholder="Je ne sais plus vraiment où j'en suis dans ma carrière…" />
      </div>
      <div className="form-check">
        <input type="checkbox" id="gdpr" name="gdpr" required />
        <label className="form-check-label form-check-label-light" htmlFor="gdpr">
          J&rsquo;accepte que mes données soient utilisées pour traiter ma demande.
          Elles ne seront jamais transmises à des tiers.
        </label>
      </div>
      {status === 'error' && (
        <p style={{ color: '#e53e3e', fontSize: '0.9rem' }}>
          Une erreur est survenue. Réessaie ou écris-moi directement à{' '}
          <a href="mailto:floriane@fluocoaching.com">floriane@fluocoaching.com</a>.
        </p>
      )}
      <button
        type="submit"
        className="btn-primary"
        style={{ alignSelf: 'flex-start' }}
        data-track="contact-form-submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Envoi…' : <>Envoyer <span className="btn-arrow">→</span></>}
      </button>
    </form>
  )
}
