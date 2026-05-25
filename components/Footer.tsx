'use client'
import Link from 'next/link'
import { useLang } from './Providers'
import { t } from '@/lib/i18n'

export default function Footer() {
  const { lang } = useLang()
  const tr = t(lang)

  const links = [
    { href: '/',         label: tr.nav.home },
    { href: '/about',    label: tr.nav.about },
    { href: '/services', label: tr.nav.services },
    { href: '/contact',  label: tr.nav.contact },
  ]

  return (
    <footer className="divider" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-extrabold text-sm">
                G
              </div>
              <span className="font-extrabold text-lg" style={{ color: 'var(--text)' }}>Gretias</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {tr.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ color: 'var(--text)' }}>{tr.footer.nav}</h4>
            <ul className="space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ color: 'var(--text)' }}>{tr.footer.getInTouch}</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li>
                <a
                  href="mailto:hello@gretias.com"
                  className="transition-colors"
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  hello@gretias.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors"
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {tr.nav.cta} →
                </Link>
              </li>
            </ul>
            <p className="text-xs mt-4" style={{ color: 'var(--text-subtle)' }}>
              {tr.footer.initiative}{' '}
              <a
                href="https://gnosisolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-subtle)')}
              >
                {tr.footer.initiativeLink}
              </a>
              {tr.footer.initiativeSuffix ? ` ${tr.footer.initiativeSuffix}` : ''}
            </p>
          </div>
        </div>

        <div className="divider pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>
            © {new Date().getFullYear()} Gretias. {tr.footer.copyright}
          </p>
          <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>{tr.footer.builtBy}</p>
        </div>
      </div>
    </footer>
  )
}
