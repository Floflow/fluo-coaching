// ─────────────────────────────────────────
// Landing page — Fluo Coaching
// ─────────────────────────────────────────

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Douleurs from '@/components/Douleurs'
import Offres from '@/components/Offres'
import Floriane from '@/components/Floriane'
import Temoignages from '@/components/Temoignages'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Douleurs />
        <Offres />
        <Floriane />
        <Temoignages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
