'use client'

// ─────────────────────────────────────────
// HeroCanvas — grille de carrés apparaissant ligne par ligne
// Référence : fluo-accueil.html — section "1. HERO CANVAS"
// ─────────────────────────────────────────

import { useEffect, useRef } from 'react'

const COLORS = [
  '#1E3830', '#1E3830', '#2C5446', '#2C5446',
  '#EDEAE0', '#D5D1C8', '#FFFF33', '#1A2E28',
]
const S = 72, G = 8, U = S + G
const ROW_DELAY = 0.35, ROW_FADEIN = 0.9
const HERO_ROW_COUNT = 5

function getCols(w: number) {
  if (w >= 2000) return 14
  if (w >= 1800) return 12
  if (w >= 1600) return 11
  if (w >= 1400) return 9
  if (w >= 1200) return 8
  if (w >= 1000) return 7
  return 6
}

type Square = {
  x: number; y: number; size: number
  opacity: number; present: number; color: string
}

function buildRows(cols: number): Square[][] {
  const rows: Square[][] = []
  for (let r = 0; r < HERO_ROW_COUNT; r++) {
    const progress = (r / (HERO_ROW_COUNT - 1)) * 0.3
    const row: Square[] = []
    for (let c = 0; c < cols; c++) {
      const seed  = Math.sin(r * 7.3 + c * 13.1) * 10000
      const rand  = seed - Math.floor(seed)
      const rand2 = (Math.sin(seed * 2.3) * 10000) - Math.floor(Math.sin(seed * 2.3) * 10000)
      row.push({
        x:       c * U + (rand  - 0.5) * 100 * (1 - progress),
        y:       r * U + (rand2 - 0.5) * 70  * (1 - progress),
        size:    S * (1 + (rand - 0.5) * 0.7 * (1 - progress)),
        opacity: 0.10 + progress * 0.20,
        present: rand > 0.45 ? 1 : 0,
        color:   COLORS[Math.floor(rand * COLORS.length)],
      })
    }
    rows.push(row)
  }
  return rows
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rows: Square[][] = []
    let startTime: number | null = null
    let rafId: number

    function resize() {
      const hero = canvas!.parentElement
      if (!hero) return
      const cols = getCols(window.innerWidth)
      canvas!.height = hero.offsetHeight
      canvas!.width  = cols * U + 40
      rows = buildRows(cols)
    }

    function draw(ts: number) {
      if (!startTime) startTime = ts
      const elapsed   = (ts - startTime) / 1000
      const totalH    = HERO_ROW_COUNT * U
      const offsetTop = (canvas!.height - totalH) / 2
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      rows.forEach((row, r) => {
        const rp = Math.min(1, Math.max(0, (elapsed - r * ROW_DELAY) / ROW_FADEIN))
        if (!rp) return
        row.forEach(sq => {
          if (!sq.present) return
          ctx!.globalAlpha = sq.opacity * rp
          ctx!.fillStyle   = sq.color
          ctx!.beginPath()
          ctx!.roundRect(sq.x + 20, sq.y + offsetTop, sq.size, sq.size, 4)
          ctx!.fill()
        })
      })
      ctx!.globalAlpha = 1
      rafId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', top: 0, right: 0, height: '100%' }}
    />
  )
}
