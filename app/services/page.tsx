'use client'
import Link from 'next/link'
import { useLang } from '@/components/Providers'
import { t } from '@/lib/i18n'

const SERVICE_COLORS = [
  'from-amber-500 to-orange-600',
  'from-orange-500 to-red-500',
  'from-slate-500 to-slate-700',
  'from-yellow-500 to-amber-600',
]

type Offering = { title: string; points: string[] }
type ServiceItem = {
  id: string; icon: string; title: string; tagline: string; overview: string; offerings: Offering[]
}

export default function Services() {
  const { lang } = useLang()
  const tr = t(lang)
  const sv = tr.services as unknown as {
    sectionLabel: string
    hero: { title: string; titleAccent: string; sub: string }
    items: ServiceItem[]
    cta: { title: string; sub: string; btn: string }
  }

  return (
    <>
      {/* Hero */}
      <section className="section-bg-alt pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-4">{sv.sectionLabel}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight max-w-2xl" style={{ color: 'var(--text)' }}>
            {sv.hero.title} <span className="gradient-text">{sv.hero.titleAccent}</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {sv.hero.sub}
          </p>
        </div>
      </section>

      {/* Service sections */}
      {sv.items.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={idx % 2 === 0 ? 'section-bg py-20 px-6' : 'section-bg-alt py-20 px-6'}
        >
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${SERVICE_COLORS[idx]} flex items-center justify-center text-3xl flex-shrink-0 shadow-md`}>
                {service.icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--text)' }}>{service.title}</h2>
                <p className="text-sm mt-1" style={{ color: 'var(--text-subtle)' }}>{service.tagline}</p>
              </div>
            </div>

            {/* Overview */}
            <div className="glow-card p-6 mb-8">
              <p className="leading-relaxed text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>{service.overview}</p>
            </div>

            {/* Offerings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.offerings.map((off) => (
                <div key={off.title} className="glow-card p-6">
                  <h3 className="font-bold mb-4 text-sm" style={{ color: 'var(--text)' }}>{off.title}</h3>
                  <ul className="space-y-2">
                    {off.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: 'var(--accent)' }}>→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-bg py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glow-card p-10">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>{sv.cta.title}</h2>
            <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{sv.cta.sub}</p>
            <Link href="/contact" className="btn-primary px-8 py-3 text-base">{sv.cta.btn}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
