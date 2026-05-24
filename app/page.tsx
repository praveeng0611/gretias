import Link from 'next/link'

const services = [
  {
    icon: '🚗',
    title: 'Automotive Consulting',
    desc: 'Strategic advisory for OEMs, dealerships, and automotive enterprises — from digital transformation to operational excellence and market expansion.',
    points: ['Digital transformation roadmaps', 'Operational efficiency', 'Market entry strategy', 'Dealer network optimisation'],
    color: 'from-blue-600 to-blue-400',
    glow: 'rgba(37,99,235,0.15)',
  },
  {
    icon: '⚙️',
    title: 'Auto Ancillary Advisory',
    desc: 'End-to-end advisory for auto component manufacturers — supply chain resilience, process engineering, vendor development and quality systems.',
    points: ['Supply chain strategy', 'Vendor development', 'Process optimisation', 'Quality & compliance'],
    color: 'from-cyan-600 to-cyan-400',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: '💡',
    title: 'IT Advisory',
    desc: 'Niche IT consulting for specialised industries — technology selection, digital roadmaps, ERP/CRM implementations, and system integration.',
    points: ['Technology strategy', 'ERP / CRM advisory', 'Systems integration', 'Digital roadmapping'],
    color: 'from-indigo-600 to-indigo-400',
    glow: 'rgba(79,70,229,0.15)',
  },
]

const stats = [
  { value: '15+', label: 'Years of industry experience' },
  { value: '3', label: 'Specialisation verticals' },
  { value: '50+', label: 'Projects delivered' },
  { value: '100%', label: 'Client-first approach' },
]

const whyUs = [
  { icon: '🎯', title: 'Industry Depth', desc: 'Deep domain expertise in automotive and IT — not generalists.' },
  { icon: '🤝', title: 'Partner Mindset', desc: 'We work alongside you, not just deliver reports.' },
  { icon: '⚡', title: 'Actionable Outcomes', desc: 'Every engagement ends with clarity and a path forward.' },
  { icon: '🔒', title: 'Trusted & Discreet', desc: 'Confidential advisory with your best interests at heart.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="animated-gradient min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="section-label mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              IT & Industry Consulting
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Clarity in{' '}
              <span className="gradient-text">Complexity.</span>
              <br />Strategy that Moves.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Gretias delivers strategic consulting for Automotive, Auto Ancillary, and niche IT sectors.
              Proven expertise. Actionable direction. Results that last.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">
                Explore Services →
              </Link>
              <Link href="/contact" className="btn-outline">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-[#0A1020]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">{value}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mx-auto w-fit">Our Services</div>
            <h2 className="text-4xl font-extrabold mb-4">
              Three Pillars of <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Deep specialisation across the industries that move the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc, points, color }) => (
              <div key={title} className="glow-card p-7 flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl mb-5`}>
                  {icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="mt-auto space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-blue-400 mt-0.5">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Gretias */}
      <section className="py-24 px-6 bg-[#0A1020]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mx-auto w-fit">Why Gretias</div>
            <h2 className="text-4xl font-extrabold mb-4">
              Built on <span className="gradient-text">Trust & Results</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We bring the depth of industry insiders with the objectivity of trusted advisors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="glow-card p-6 text-center">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glow-card p-12">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to move forward?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Whether you need a strategic review, a transformation roadmap, or an expert second opinion — let&apos;s talk.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-3">
              Start the Conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
