import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080D1A]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <span className="text-white font-bold text-lg">Gretias</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strategic consulting for Automotive, Auto Ancillary, and niche IT advisory. Clarity in complexity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:hello@gretias.com" className="hover:text-amber-400 transition-colors">
                  hello@gretias.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Send us a message →
                </Link>
              </li>
            </ul>
            <p className="text-gray-500 text-xs mt-4">
              A <a href="https://gnosisolabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Gnosiso Labs</a> initiative
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Gretias. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Built by Gnosiso Labs</p>
        </div>
      </div>
    </footer>
  )
}
