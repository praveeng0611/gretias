'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Lang } from '@/lib/i18n'

// ── Theme ──────────────────────────────────────────────
type Theme = 'light' | 'dark'

interface ThemeCtxType {
  theme: Theme
  toggle: () => void
}

const ThemeCtx = createContext<ThemeCtxType>({ theme: 'light', toggle: () => {} })

// ── Language ───────────────────────────────────────────
interface LangCtxType {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangCtx = createContext<LangCtxType>({ lang: 'en', setLang: () => {} })

// ── Provider ───────────────────────────────────────────
export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [lang, setLangState] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = (localStorage.getItem('gretias-theme') as Theme) || 'light'
    const savedLang = (localStorage.getItem('gretias-lang') as Lang) || 'en'
    setTheme(savedTheme)
    setLangState(savedLang)
    document.documentElement.setAttribute('data-theme', savedTheme)
    document.documentElement.lang = savedLang
    setMounted(true)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('gretias-theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('gretias-lang', l)
    document.documentElement.lang = l
  }

  // Suppress hydration mismatch by not rendering theme-sensitive UI until mounted
  if (!mounted) {
    return (
      <ThemeCtx.Provider value={{ theme: 'light', toggle }}>
        <LangCtx.Provider value={{ lang: 'en', setLang }}>
          {children}
        </LangCtx.Provider>
      </ThemeCtx.Provider>
    )
  }

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>
      <LangCtx.Provider value={{ lang, setLang }}>
        {children}
      </LangCtx.Provider>
    </ThemeCtx.Provider>
  )
}

export const useTheme = () => useContext(ThemeCtx)
export const useLang = () => useContext(LangCtx)
