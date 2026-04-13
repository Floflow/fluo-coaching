'use client'

// ─────────────────────────────────────────
// ScrollObserver — active les animations fade-in au scroll
// Référence : fluo-accueil.html — JS scroll fade-in
// ─────────────────────────────────────────

import { useEffect } from 'react'

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach(el => {
      observer.observe(el)
      // Éléments déjà visibles au chargement (above the fold)
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible')
      }
    })

    return () => observer.disconnect()
  }, [])

  return null
}
