import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — Gretias',
  description: 'Automotive consulting, Auto Ancillary advisory, and niche IT consulting services from Gretias.',
}

const services = [
  {
    id: 'automotive',
    icon: '🚗',
    title: 'Automotive Consulting',
    tagline: 'For OEMs, dealerships, and automotive enterprises',
    color: 'from-amber-600 to-amber-400',
    overview: 'The automotive sector is undergoing its most significant transformation in a century — electrification, software-defined vehicles, changing consumer behaviour, and supply chain disruption. Gretias helps automotive businesses navigate this inflection point with clear-eyed strategy and practical execution support.',
    offerings: [
      {
        title: 'Digital Transformation',
        points: [
          'Technology readiness assessments for OEM operations',
          'Digital roadmap design and prioritisation',
          'Legacy systems modernisation planning',
          'Connected vehicle and data strategy',
        ],
      },
      {
        title: 'Operational Excellence',
        points: [
          'Manufacturing process diagnostics and improvement',
          'Lean implementation and waste reduction',
          'Quality management system advisory',
          'Dealer operations efficiency',
        ],
      },
      {
        title: 'Market & Business Strategy',
        points: [
          'Market entry and expansion strategy',
          'Product portfolio and pricing advisory',
          'EV transition planning',
          'Partnership and JV structuring',
        ],
      },
    ],
  },
  {
    id: 'ancillary',
    icon: '⚙️',
    title: 'Auto Ancillary Advisory',
    tagline: 'For auto component manufacturers and Tier 1/2 suppliers',
    color: 'from-orange-600 to-orange-400',
    overview: 'Auto ancillary manufacturers face intense pressure — OEM cost-down demands, quality certification requirements, supply chain volatility, and the need to diversify beyond traditional ICE components. Gretias brings sector-specific expertise to help suppliers build resilience and grow.',
    offerings: [
      {
        title: 'Supply Chain Strategy',
        points: [
          'Supply chain risk assessment and resilience planning',
          'Vendor rationalisation and development',
          'Inventory optimisation',
          'Multi-source strategy for critical inputs',
        ],
      },
      {
        title: 'Process & Quality',
        points: [
          'Process re-engineering for cost and quality',
          'IATF 16949 / ISO readiness support',
          'APQP and PPAP process advisory',
          'Scrap reduction and yield improvement',
        ],
      },
      {
        title: 'Business Development',
        points: [
          'OEM diversification strategy',
          'Export market entry advisory',
          'EV component opportunity assessment',
          'Capacity planning and investment decisions',
        ],
      },
    ],
  },
  {
    id: 'it',
    icon: '💡',
    title: 'IT Advisory',
    tagline: 'Niche IT consulting for specialised industry needs',
    color: 'from-yellow-600 to-amber-400',
    overview: 'Technology decisions made without deep domain context lead to expensive misalignments. Gretias provides IT advisory that is grounded in your industry realities — whether you are selecting a new ERP, designing a data strategy, or evaluating a digital investment.',
    offerings: [
      {
        title: 'Technology Strategy',
        points: [
          'IT landscape assessment and roadmapping',
          'Build vs buy vs partner analysis',
          'Technology vendor evaluation and selection',
          'Architecture advisory for scalability',
        ],
      },
      {
        title: 'ERP & CRM Advisory',
        points: [
          'ERP selection (SAP, Oracle, Microsoft, Infor)',
          'CRM strategy and implementation advisory',
          'System integration architecture',
          'Post-implementation optimisation',
        ],
      },
      {
        title: 'Digital & Data',
        points: [
          'Data strategy and governance advisory',
          'Analytics platform selection',
          'Digital programme management',
          'IT-OT convergence for manufacturing clients',
        ],
      },
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="animated-gradient pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Services</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight max-w-2xl">
            Three verticals. <span className="gradient-text">One trusted partner.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Gretias operates at the intersection of deep industry experience and practical advisory. We don&apos;t just recommend — we help you move.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map(({ id, icon, title, tagline, color, overview, offerings }, idx) => (
        <section
          key={id}
          id={id}
          className={`py-20 px-6 ${idx % 2 === 1 ? 'bg-[#120900]' : ''}`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-3xl flex-shrink-0`}>
                {icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">{title}</h2>
                <p className="text-gray-500 text-sm mt-1">{tagline}</p>
              </div>
            </div>

            {/* Overview */}
            <div className="glow-card p-6 mb-8">
              <p className="text-gray-300 leading-relaxed">{overview}</p>
            </div>

            {/* Offerings grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offerings.map(({ title: ofTitle, points }) => (
                <div key={ofTitle} className="glow-card p-6">
                  <h3 className="text-white font-bold mb-4 text-base">{ofTitle}</h3>
                  <ul className="space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-amber-400 mt-0.5 flex-shrink-0">→</span>
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
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glow-card p-10">
            <h2 className="text-3xl font-extrabold mb-4">
              Not sure where to start?
            </h2>
            <p className="text-gray-400 mb-8">
              Tell us your challenge in a short message and we&apos;ll come back to you with an honest view of how we can help.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-3 text-base">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
