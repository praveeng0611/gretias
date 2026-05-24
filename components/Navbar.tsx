'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#080D1A]/90 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
            G
          </div>
          <span className="text-white font-bold text-lg tracking-tight">Gretias</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === href
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary text-sm py-2 px-5">
            Get in Touch →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0D1630]/95 backdrop-blur-md border-t border-white/5 px-6 py-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium mb-1 transition-all ${
                pathname === href ? 'text-blue-400 bg-blue-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm py-2.5 px-5 mt-2 w-full justify-center"
          >
            Get in Touch →
          </Link>
        </div>
      )}
    </header>
  )
}
