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
  const [showToast, setShowToast] = useState(false)

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

  let timeout

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)

    setShowToast(true)

    clearTimeout(timeout)
    timeout = setTimeout(() => setShowToast(false), 2000)
  }

  if (!mounted) return null

  return (
    <>
      {/* ✅ Toast */}
      <div
  className={`
    fixed top-4 left-1/2 -translate-x-1/2 z-50
    text-sm px-4 py-1 rounded-full
    bg-black/80 backdrop-blur-md text-white
    origin-center
    transition-all duration-300 ease-in-out
    ${showToast ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 pointer-events-none'}
  `}
>
  {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
</div>

      {/* Button */}
      <button
        onClick={toggleTheme}
        className="h-10 w-10 z-50 p-2 glass rounded-full fixed top-3 right-3 md:top-6 md:right-6 flex items-center justify-center"
      >
        {theme === 'dark'
          ? <MdLightMode className="text-blue-400 text-2xl md:text-3xl" />
          : <MdDarkMode className="text-blue-400 text-2xl md:text-3xl" />
        }
      </button>
    </>
  )
}