'use client'
import Link from 'next/link'
import { useLang } from '@/components/Providers'
import { t } from '@/lib/i18n'

export default function About() {
  const { lang } = useLang()
  const tr = t(lang).about

  return (
    <>
      {/* Hero */}
      <section className="section-bg-alt pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-4">{tr.hero.sectionLabel}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 max-w-2xl leading-tight" style={{ color: 'var(--text)' }}>
            {tr.hero.title} <span className="gradient-text">{tr.hero.titleAccent}</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {tr.hero.sub}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-bg py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="section-label mb-4">{tr.story.sectionLabel}</div>
            <h2 className="text-3xl font-extrabold mt-4 mb-6" style={{ color: 'var(--text)' }}>
              {tr.story.title} <span className="gradient-text">{tr.story.titleAccent}</span>
            </h2>
            <p className="leading-relaxed mb-4 text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>{tr.story.p1}</p>
            <p className="leading-relaxed mb-4 text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>{tr.story.p2}</p>
            <p className="leading-relaxed text-sm md:text-base"       style={{ color: 'var(--text-muted)' }}>{tr.story.p3}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {(tr.story.stats as { label: string; value: string }[]).map(({ label, value }) => (
              <div key={label} className="glow-card p-5">
                <div className="text-xs mb-1 uppercase tracking-wider" style={{ color: 'var(--text-subtle)' }}>{label}</div>
                <div className="font-bold" style={{ color: 'var(--text)' }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-bg-alt py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-label mx-auto w-fit mb-4">{tr.values.sectionLabel}</div>
            <h2 className="text-3xl font-extrabold mt-4" style={{ color: 'var(--text)' }}>
              {tr.values.title} <span className="gradient-text">{tr.values.titleAccent}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(tr.values.items as { icon: string; title: string; desc: string }[]).map(({ icon, title, desc }) => (
              <div key={title} className="glow-card p-6">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-bg py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-label mx-auto w-fit mb-4">{tr.approach.sectionLabel}</div>
            <h2 className="text-3xl font-extrabold mt-4" style={{ color: 'var(--text)' }}>
              {tr.approach.title} <span className="gradient-text">{tr.approach.titleAccent}</span>
            </h2>
          </div>
          <div className="space-y-5">
            {(tr.approach.steps as { step: string; title: string; desc: string }[]).map(({ step, title, desc }) => (
              <div key={step} className="glow-card p-6 flex gap-6 items-start">
                <div className="text-2xl font-extrabold gradient-text flex-shrink-0 w-12">{step}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-bg-alt py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>{tr.cta.title}</h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{tr.cta.sub}</p>
          <Link href="/contact" className="btn-primary px-8 py-3 text-base">{tr.cta.btn}</Link>
        </div>
      </section>
    </>
  )
}
