'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useLang } from '@/components/Providers'
import { t } from '@/lib/i18n'

/* ── Slide images per service ── */
const SLIDE_IMAGES = [
  '/auto-hero.svg',  // custom automotive consulting blueprint illustration
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85&auto=format&fit=crop',  // construction cranes
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85&auto=format&fit=crop',  // luxury real estate
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=85&auto=format&fit=crop',  // clean manufacturing
]

const SERVICE_COLORS = [
  'from-amber-500 to-orange-600',
  'from-orange-500 to-red-500',
  'from-slate-500 to-slate-700',
  'from-yellow-500 to-amber-600',
]

const INTERVAL = 5500

/* ══════════════════════════════════════════════
   Hero Slider Component
══════════════════════════════════════════════ */
function HeroSlider({ slides }: { slides: { title: string; sub: string; service: string }[] }) {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progRef  = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((idx: number) => {
    setCurrent(idx)
    setProgress(0)
    if (timerRef.current) clearInterval(timerRef.current)
    if (progRef.current)  clearInterval(progRef.current)

    const tick = 100 / (INTERVAL / 100)
    progRef.current  = setInterval(() => setProgress(p => Math.min(p + tick, 100)), 100)
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length)
      setProgress(0)
    }, INTERVAL)
  }, [slides.length])

  useEffect(() => {
    goTo(0)
    return () => {
      clearInterval(timerRef.current!)
      clearInterval(progRef.current!)
    }
  }, [goTo])

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  return (
    <div className="hero-slider">
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === current ? 'active' : ''}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SLIDE_IMAGES[i]} alt={slide.title} className="slide-img" loading={i === 0 ? 'eager' : 'lazy'} />
          <div className="slide-overlay" />
          <div className="slide-content">
            <div className="max-w-6xl mx-auto w-full px-6 md:px-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-bold uppercase tracking-widest text-white"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                <span className={`w-4 h-4 rounded-full bg-gradient-to-br ${SERVICE_COLORS[i]} inline-block`} />
                {slide.service}
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight max-w-3xl"
                style={{ textShadow: '0 2px 32px rgba(0,0,0,0.4)' }}
              >
                {slide.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                {slide.sub}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className="slider-arrow slider-arrow-left" onClick={prev} aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button className="slider-arrow slider-arrow-right" onClick={next} aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* Navigation dots */}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <button key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>

      {/* Progress bar */}
      <div className="slider-progress" style={{ width: `${progress}%` }} />
    </div>
  )
}

/* ══════════════════════════════════════════════
   Home Page
══════════════════════════════════════════════ */
export default function Home() {
  const { lang } = useLang()
  const tr = t(lang)

  return (
    <>
      {/* ── Hero Slider ── */}
      <HeroSlider slides={tr.hero.slides as { title: string; sub: string; service: string }[]} />

      {/* ── Stats Bar ── */}
      <section className="section-bg-alt" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {(tr.stats as { value: string; label: string }[]).map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">{value}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-bg py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mx-auto w-fit mb-4">{tr.homeServices.sectionLabel}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>
              {tr.homeServices.title} <span className="gradient-text">{tr.homeServices.titleAccent}</span>
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>{tr.homeServices.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {(tr.homeServices.items as { icon: string; title: string; desc: string; points: string[] }[]).map(({ icon, title, desc, points }, idx) => (
              <div key={idx} className="glow-card p-6 flex flex-col">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${SERVICE_COLORS[idx]} flex items-center justify-center text-2xl mb-4 flex-shrink-0 shadow-md`}>
                  {icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>{desc}</p>
                <ul className="space-y-1.5">
                  {points.map((p: string) => (
                    <li key={p} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: 'var(--accent)' }}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">{tr.homeServices.viewAll}</Link>
          </div>
        </div>
      </section>

      {/* ── Why Gretias ── */}
      <section className="section-bg-alt py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mx-auto w-fit mb-4">{tr.whyUs.sectionLabel}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>
              {tr.whyUs.title} <span className="gradient-text">{tr.whyUs.titleAccent}</span>
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>{tr.whyUs.sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(tr.whyUs.items as { icon: string; title: string; desc: string }[]).map(({ icon, title, desc }) => (
              <div key={title} className="glow-card p-6 text-center">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-bg py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glow-card p-12">
            <div className="text-4xl mb-5">🚀</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>
              {tr.cta.title}
            </h2>
            <p className="mb-8 max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {tr.cta.sub}
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-3">
              {tr.cta.btn}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
