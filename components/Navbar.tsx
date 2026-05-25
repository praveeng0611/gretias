'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme, useLang } from './Providers'
import { t, type Lang } from '@/lib/i18n'

const LANGS: Lang[] = ['en', 'de', 'fr']

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}
function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const { lang, setLang } = useLang()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const tr = t(lang)

  const links = [
    { href: '/',         label: tr.nav.home },
    { href: '/about',    label: tr.nav.about },
    { href: '/services', label: tr.nav.services },
    { href: '/contact',  label: tr.nav.contact },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="navbar fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" onClick={() => setOpen(false)}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-extrabold text-sm shadow">
            G
          </div>
          <span className="font-extrabold text-lg" style={{ color: 'var(--text)' }}>Gretias</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                color:      isActive(href) ? 'var(--accent)' : 'var(--text-muted)',
                background: isActive(href) ? 'var(--accent-bg)' : 'transparent',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">

          {/* Language switcher */}
          <div
            className="hidden sm:flex items-center gap-0.5 rounded-lg px-1 py-1"
            style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)' }}
          >
            {LANGS.map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`lang-btn ${lang === l ? 'active' : ''}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* CTA desktop */}
          <Link href="/contact" className="btn-primary hidden md:inline-flex py-2 px-4 text-sm">
            {tr.nav.cta}
          </Link>

          {/* Mobile menu */}
          <button className="md:hidden theme-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                style={{
                  color:      isActive(href) ? 'var(--accent)' : 'var(--text)',
                  background: isActive(href) ? 'var(--accent-bg)' : 'transparent',
                }}
              >
                {label}
              </Link>
            ))}
            <div className="flex items-center gap-1 mt-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
              <span className="text-xs mr-2" style={{ color: 'var(--text-subtle)' }}>Lang:</span>
              {LANGS.map((l) => (
                <button key={l} onClick={() => { setLang(l); setOpen(false) }} className={`lang-btn ${lang === l ? 'active' : ''}`}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
              {tr.nav.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
