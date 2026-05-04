'use client'

import { useEffect, useState } from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";

function getSavedTheme() {
  if (typeof window === 'undefined') return 'light'
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

export function DarkBtn() {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = getSavedTheme()
    setTheme(saved)
    document.documentElement.classList.toggle('dark', saved === 'dark')
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    localStorage.setItem('theme', theme)
    document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Lax`
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme, mounted])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="h-10 w-10 rounded fixed top-4 right-4 md:top-6 md:right-6 flex items-center justify-center"
    >
      {theme === 'dark'
        ? <MdLightMode className="text-blue-400 text-2xl md:text-4xl cursor-pointer" />
        : <MdDarkMode className="text-blue-400 text-2xl md:text-4xl cursor-pointer" />
      }
    </button>
  )
}