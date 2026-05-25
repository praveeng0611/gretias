'use client'
import { useState, useEffect } from 'react'
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const { lang, setLang } = useLang()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const tr = t(lang)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const links = [
    { href: '/',         label: tr.nav.home,     icon: '🏠' },
    { href: '/about',    label: tr.nav.about,    icon: '👥' },
    { href: '/services', label: tr.nav.services, icon: '⚙️' },
    { href: '/contact',  label: tr.nav.contact,  icon: '✉️' },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className="navbar fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 min-w-0" onClick={() => setOpen(false)}>
            <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-extrabold text-sm shadow">
              G
            </div>
            <span className="font-extrabold text-base sm:text-lg truncate" style={{ color: 'var(--text)' }}>
              <span className="hidden xs:inline">Gretias </span>Consulting
            </span>
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
          <div className="flex items-center gap-2 flex-shrink-0">

            {/* Language switcher — desktop only */}
            <div
              className="hidden md:flex items-center gap-0.5 rounded-lg px-1 py-1"
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

            {/* CTA — desktop only */}
            <Link href="/contact" className="btn-primary hidden md:inline-flex py-2 px-4 text-sm">
              {tr.nav.cta}
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden theme-toggle"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile slide-down drawer */}
      <div
        className="md:hidden fixed left-0 right-0 z-40"
        style={{
          top: '64px',
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.18)',
          transform: open ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <nav className="px-4 pt-4 pb-6 flex flex-col">

          {/* Nav links */}
          <div className="flex flex-col gap-1 mb-5">
            {links.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-4 rounded-xl font-semibold text-base transition-all"
                style={{
                  color:      isActive(href) ? 'var(--accent)' : 'var(--text)',
                  background: isActive(href) ? 'var(--accent-bg)' : 'transparent',
                  borderLeft: isActive(href) ? '3px solid var(--accent)' : '3px solid transparent',
                }}
              >
                <span className="text-xl w-7 text-center">{icon}</span>
                {label}
                {isActive(href) && (
                  <span className="ml-auto text-xs font-bold" style={{ color: 'var(--accent)' }}>●</span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary justify-center py-3.5 text-base mb-5"
          >
            {tr.nav.cta}
          </Link>

          {/* Language + Theme row */}
          <div
            className="flex items-center justify-between pt-4"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-subtle)' }}>Language</span>
              <div
                className="flex items-center gap-0.5 rounded-lg px-1 py-1"
                style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)' }}
              >
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l) }}
                    className={`lang-btn ${lang === l ? 'active' : ''}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

        </nav>
      </div>
    </>
  )
}
