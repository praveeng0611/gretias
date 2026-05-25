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
      {/* ── Navbar bar ── */}
      <header className="navbar fixed top-0 left-0 right-0" style={{ zIndex: 9999 }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-extrabold text-sm shadow">
              G
            </div>
            <span className="font-extrabold text-base sm:text-lg" style={{ color: 'var(--text)' }}>
              Gretias<span className="hidden sm:inline"> Consulting</span>
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

          {/* Right side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Language — desktop only */}
            <div className="hidden md:flex items-center gap-0.5 rounded-lg px-1 py-1"
              style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)' }}>
              {LANGS.map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`lang-btn ${lang === l ? 'active' : ''}`}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme toggle — desktop only */}
            <button className="theme-toggle hidden md:flex" onClick={toggle} aria-label="Toggle theme">
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>

            {/* CTA — desktop only */}
            <Link href="/contact" className="btn-primary hidden md:inline-flex py-2 px-4 text-sm">
              {tr.nav.cta}
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: 'var(--accent-bg)', color: 'var(--accent)', border: '1.5px solid var(--accent-border)' }}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      {open && (
        <div
          className="md:hidden fixed inset-0 flex flex-col"
          style={{ zIndex: 99999, background: theme === 'dark' ? '#0D0800' : '#ffffff' }}
        >
          {/* Menu header */}
          <div
            className="flex items-center justify-between px-5 h-16 flex-shrink-0"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-extrabold text-sm">
                G
              </div>
              <span className="font-extrabold text-base" style={{ color: 'var(--text)' }}>
                Gretias Consulting
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: 'var(--accent-bg)', color: 'var(--accent)', border: '1.5px solid var(--accent-border)' }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-5 pt-6 pb-4 gap-2 flex-1 overflow-y-auto">
            {links.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold text-lg"
                style={{
                  color:      isActive(href) ? '#ffffff' : 'var(--text)',
                  background: isActive(href)
                    ? 'linear-gradient(135deg, #D97706, #EA580C)'
                    : 'var(--bg-alt)',
                  border: `1.5px solid ${isActive(href) ? 'transparent' : 'var(--border)'}`,
                }}
              >
                <span className="text-2xl w-8 text-center">{icon}</span>
                {label}
                {isActive(href) && (
                  <span className="ml-auto text-white opacity-80">→</span>
                )}
              </Link>
            ))}
          </nav>

          {/* Bottom section */}
          <div className="px-5 pb-8 flex flex-col gap-4 flex-shrink-0">
            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center py-4 text-base rounded-2xl"
            >
              {tr.nav.cta}
            </Link>

            {/* Language + Theme */}
            <div
              className="flex items-center justify-between p-4 rounded-2xl"
              style={{ background: 'var(--bg-alt)', border: '1.5px solid var(--border)' }}
            >
              {/* Language picker */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>
                  Language
                </span>
                <div className="flex items-center gap-1">
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className="px-3 py-1.5 rounded-lg text-sm font-bold transition-all"
                      style={{
                        background: lang === l ? 'linear-gradient(135deg, #D97706, #EA580C)' : 'var(--bg)',
                        color:      lang === l ? '#ffffff' : 'var(--text-muted)',
                        border:     `1.5px solid ${lang === l ? 'transparent' : 'var(--border)'}`,
                      }}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme toggle */}
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>
                  Theme
                </span>
                <button
                  onClick={toggle}
                  className="flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{ background: 'var(--bg)', border: '1.5px solid var(--border)', color: 'var(--text-muted)' }}
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
