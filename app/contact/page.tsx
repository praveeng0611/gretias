'use client'
import { useState } from 'react'

const services = [
  'Automotive Consulting',
  'Auto Ancillary Advisory',
  'IT Advisory',
  'Not sure yet',
]

export default function Contact() {
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

  const inputClass = 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/8 transition-all'

  return (
    <>
      {/* Hero */}
      <section className="animated-gradient pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Contact</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 leading-tight">
            Let&apos;s <span className="gradient-text">talk.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Tell us what you&apos;re working on. We&apos;ll respond within 24 hours with an honest view of how we can help.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="glow-card p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-white font-bold text-xl mb-2">Message received!</h3>
                <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glow-card p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                      Your Name *
                    </label>
                    <input
                      className={inputClass}
                      placeholder="Rajesh Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="rajesh@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                    Company / Organisation
                  </label>
                  <input
                    className={inputClass}
                    placeholder="ABC Motors Ltd"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                    Service of Interest
                  </label>
                  <select
                    className={inputClass}
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="" className="bg-[#0D1630]">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#0D1630]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                    Your Message *
                  </label>
                  <textarea
                    className={`${inputClass} resize-none`}
                    rows={5}
                    placeholder="Tell us about your challenge or what you need help with..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glow-card p-6">
              <h3 className="text-white font-bold mb-4">Direct Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📧</span>
                  <a href="mailto:hello@gretias.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    hello@gretias.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌐</span>
                  <span className="text-gray-300">gretias.gnosisolabs.com</span>
                </div>
              </div>
            </div>

            <div className="glow-card p-6">
              <h3 className="text-white font-bold mb-4">What to expect</h3>
              <ul className="space-y-3 text-sm">
                {[
                  'We respond within 24 hours on working days',
                  'First call is always no-commitment',
                  'We\'ll tell you honestly if we\'re not the right fit',
                  'Confidentiality is taken seriously from day one',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-400">
                    <span className="text-amber-400 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glow-card p-6">
              <h3 className="text-white font-bold mb-2">Our Services</h3>
              <div className="space-y-2 mt-3">
                {['🚗 Automotive Consulting', '⚙️ Auto Ancillary Advisory', '💡 IT Advisory'].map((s) => (
                  <div key={s} className="text-gray-400 text-sm py-1.5 border-b border-white/5 last:border-0">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
