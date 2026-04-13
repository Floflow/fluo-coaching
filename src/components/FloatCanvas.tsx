'use client'

// ─────────────────────────────────────────
// FloatCanvas — 6 carrés scroll-driven
// Partent du chaos en haut, s'alignent au bas du hero au scroll
// Référence : fluo-accueil.html — section "2. CARRÉS FLOTTANTS"
// ─────────────────────────────────────────

import { useEffect } from 'react'

const COLORS = [
  '#1E3830', '#1E3830', '#2C5446', '#2C5446',
  '#EDEAE0', '#D5D1C8', '#FFFF33', '#1A2E28',
]
const S = 72, G = 8, U = S + G
const FIXED_COLS = 6

type Floater = {
  targetX: number; chaosX: number
  finalOp: number; color: string; chaosSize: number
}

function buildFloaters(): Floater[] {
  const floaters: Floater[] = []
  for (let c = 0; c < FIXED_COLS; c++) {
    const seed = Math.sin(c * 17.3 + 5.1) * 10000
    const rand = seed - Math.floor(seed)
    floaters.push({
      targetX:   c * U + 20,
      chaosX:    c * U + 20 + (rand - 0.5) * 80,
      finalOp:   0.45 + rand * 0.35,
      color:     COLORS[Math.floor(rand * COLORS.length)],
      chaosSize: S * (0.75 + rand * 0.5),
    })
  }
  return floaters
}

export default function FloatCanvas() {
  useEffect(() => {
    // Ne s'active que sur les pages avec une section .hero
    if (!document.querySelector('.hero')) return

    // Créer le canvas et l'injecter dans le body
    const fc = document.createElement('canvas')
    fc.id = 'float-canvas'
    fc.style.cssText = 'position:fixed;top:0;right:0;pointer-events:none;z-index:0;'
    document.body.appendChild(fc)
    const ctx = fc.getContext('2d')!

    let floaters = buildFloaters()
    let isAligned = false

    function resize() {
      fc.width  = FIXED_COLS * U + 40
      fc.height = window.innerHeight
      floaters  = buildFloaters()
      isAligned = false
    }

    function draw() {
      const heroSection = document.querySelector('.hero') as HTMLElement | null
      const sy   = window.scrollY
      const winH = window.innerHeight
      const heroBottom = heroSection
        ? heroSection.offsetTop + heroSection.offsetHeight
        : winH

      const heroBottomInViewport = heroBottom - sy - S - 16
      const scrollDuration = 600
      const progress = Math.min(1, sy / scrollDuration)
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2

      if (isAligned && progress >= 1) return
      if (progress >= 1) isAligned = true

      ctx.clearRect(0, 0, fc.width, fc.height)

      floaters.forEach((f, i) => {
        const chaosY = 60 + i * 12
        const x      = f.chaosX + (f.targetX - f.chaosX) * eased
        const rawY   = chaosY + sy * (0.12 + i * 0.015)
        const y      = progress >= 1
          ? heroBottomInViewport
          : Math.min(heroBottomInViewport, rawY)
        const size   = f.chaosSize + (S - f.chaosSize) * eased
        const op     = f.finalOp * (0.12 + eased * 0.25)

        ctx.globalAlpha = op
        ctx.fillStyle   = f.color
        ctx.beginPath()
        ctx.roundRect(x, y, size, size, 4)
        ctx.fill()
      })
      ctx.globalAlpha = 1
    }

    function onScroll() {
      if (!isAligned) {
        requestAnimationFrame(draw)
      } else {
        const heroSection = document.querySelector('.hero') as HTMLElement | null
        if (!heroSection) return
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const sy = window.scrollY
        const heroBottomInViewport = heroBottom - sy - S - 16

        ctx.clearRect(0, 0, fc.width, fc.height)
        if (heroBottomInViewport < -S) return

        floaters.forEach(f => {
          ctx.globalAlpha = f.finalOp * 0.37
          ctx.fillStyle   = f.color
          ctx.beginPath()
          ctx.roundRect(f.targetX, heroBottomInViewport, S, S, 4)
          ctx.fill()
        })
        ctx.globalAlpha = 1
      }
    }

    resize()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', () => { resize(); requestAnimationFrame(draw) })
    requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('scroll', onScroll)
      fc.remove()
    }
  }, [])

  return null
}
