'use client'
import { useState } from 'react'
import { useLang } from '@/components/Providers'
import { t } from '@/lib/i18n'

export default function Contact() {
  const { lang } = useLang()
  const tr = t(lang).contact

  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="section-bg-alt pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-4">{tr.sectionLabel}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 leading-tight" style={{ color: 'var(--text)' }}>
            {tr.hero.title} <span className="gradient-text">{tr.hero.titleAccent}</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {tr.hero.sub}
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-bg py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="glow-card p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--text)' }}>{tr.form.successTitle}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{tr.form.successSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glow-card p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-1.5 font-semibold" style={{ color: 'var(--text-muted)' }}>
                      {tr.form.name} *
                    </label>
                    <input
                      className="form-input"
                      placeholder={tr.form.namePlaceholder}
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-1.5 font-semibold" style={{ color: 'var(--text-muted)' }}>
                      {tr.form.email} *
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder={tr.form.emailPlaceholder}
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-1.5 font-semibold" style={{ color: 'var(--text-muted)' }}>
                    {tr.form.company}
                  </label>
                  <input
                    className="form-input"
                    placeholder={tr.form.companyPlaceholder}
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-1.5 font-semibold" style={{ color: 'var(--text-muted)' }}>
                    {tr.form.service}
                  </label>
                  <select
                    className="form-input"
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">{tr.form.servicePlaceholder}</option>
                    {(tr.form.services as string[]).map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-1.5 font-semibold" style={{ color: 'var(--text-muted)' }}>
                    {tr.form.message} *
                  </label>
                  <textarea
                    className="form-input resize-none"
                    rows={5}
                    placeholder={tr.form.messagePlaceholder}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm" style={{ color: '#ef4444' }}>{tr.form.error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? tr.form.sending : tr.form.send}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glow-card p-6">
              <h3 className="font-bold mb-4" style={{ color: 'var(--text)' }}>{tr.info.directTitle}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📧</span>
                  <a href="mailto:hello@gretias.com" className="transition-colors" style={{ color: 'var(--text-muted)' }}
                     onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                     onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    hello@gretias.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌐</span>
                  <span style={{ color: 'var(--text-muted)' }}>gretias.gnosisolabs.com</span>
                </div>
              </div>
            </div>

            <div className="glow-card p-6">
              <h3 className="font-bold mb-4" style={{ color: 'var(--text)' }}>{tr.info.expectTitle}</h3>
              <ul className="space-y-3 text-sm">
                {(tr.info.expect as string[]).map(item => (
                  <li key={item} className="flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-0.5 font-bold" style={{ color: 'var(--accent)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glow-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--text)' }}>{tr.info.servicesTitle}</h3>
              <div className="space-y-2 mt-3">
                {(tr.info.servicesList as string[]).map(s => (
                  <div key={s} className="text-sm py-1.5" style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
