import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Gretias',
  description: 'Learn about Gretias — our story, mission, and the team behind our automotive and IT advisory practice.',
}

const values = [
  { icon: '🎯', title: 'Precision', desc: 'We go deep before we go broad. Every recommendation is grounded in evidence and context.' },
  { icon: '🤝', title: 'Partnership', desc: 'We embed ourselves in your challenges. Your success is our measure of success.' },
  { icon: '🔍', title: 'Transparency', desc: 'Honest counsel, even when it is hard to hear. No ambiguity, no jargon.' },
  { icon: '⚡', title: 'Momentum', desc: 'We bias toward action. Insights mean nothing without execution.' },
]

const approach = [
  { step: '01', title: 'Discover', desc: 'We begin by understanding your business, industry dynamics, and the specific challenge at hand — through structured conversations and data review.' },
  { step: '02', title: 'Diagnose', desc: 'We map the root causes, not just symptoms. Using industry frameworks and our sector experience, we identify where the real leverage lies.' },
  { step: '03', title: 'Design', desc: 'We build a practical strategy — one that accounts for your organisation\'s capacity, market realities, and timelines.' },
  { step: '04', title: 'Deliver', desc: 'We stay alongside you through execution, monitoring progress and adapting the plan as conditions evolve.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="animated-gradient pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">About Gretias</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 max-w-2xl leading-tight">
            Experienced advisors. <span className="gradient-text">Practical outcomes.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Gretias was founded to bridge the gap between strategy and reality in two industries where the stakes are high and the complexity is real — Automotive and IT.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-[#120900]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="section-label">Our Story</div>
            <h2 className="text-3xl font-extrabold mt-4 mb-6">
              Born from the <span className="gradient-text">industry, not a textbook</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Gretias was built by practitioners who spent years inside automotive enterprises and technology organisations — understanding what works, what stalls, and what the spreadsheets don&apos;t capture.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We saw too many consulting engagements that delivered polished decks but left teams no better equipped to move. Gretias exists to do the opposite — to work alongside leadership, translate strategy into action, and stay accountable to outcomes.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Today we serve clients across Automotive OEMs, Auto Ancillary manufacturers, and specialised IT organisations — bringing the same rigour and candour to every engagement.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Industries Served', value: '3 core verticals' },
              { label: 'Engagement Style', value: 'Embedded advisory' },
              { label: 'Geography', value: 'India & global' },
              { label: 'Approach', value: 'Outcomes-first' },
            ].map(({ label, value }) => (
              <div key={label} className="glow-card p-5">
                <div className="text-gray-500 text-xs mb-1 uppercase tracking-wider">{label}</div>
                <div className="text-white font-bold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-label mx-auto w-fit">Our Values</div>
            <h2 className="text-3xl font-extrabold mt-4">
              What guides <span className="gradient-text">every engagement</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="glow-card p-6">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6 bg-[#120900]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-label mx-auto w-fit">Our Approach</div>
            <h2 className="text-3xl font-extrabold mt-4">
              How we <span className="gradient-text">work with you</span>
            </h2>
          </div>
          <div className="space-y-6">
            {approach.map(({ step, title, desc }) => (
              <div key={step} className="glow-card p-6 flex gap-6 items-start">
                <div className="text-2xl font-extrabold gradient-text flex-shrink-0 w-12">{step}</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Want to work with us?
          </h2>
          <p className="text-gray-400 mb-8">
            Tell us about your challenge. We&apos;ll tell you honestly whether and how we can help.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-3 text-base">
            Start the Conversation →
          </Link>
        </div>
      </section>
    </>
  )
}
