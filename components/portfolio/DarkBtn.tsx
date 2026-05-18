'use client'

import { useEffect, useRef, useState } from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";

function getSavedTheme() {
  if (typeof window === 'undefined') return 'light'
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

export function DarkBtn() {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [message, setMessage] = useState<any>('')

  const timeoutRef = useRef<any>(null)

  // Initial theme setup
  useEffect(() => {
    const saved = getSavedTheme()
    setTheme(saved)
    document.documentElement.classList.toggle('dark', saved === 'dark')
    setMounted(true)
  }, [])

  // Sync theme
  useEffect(() => {
    if (!mounted) return

    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme, mounted])

  // 🔥 Greeting on first load
  useEffect(() => {
    if (!mounted) return

    // const hasShown = sessionStorage.getItem('hello-shown')
    // if (hasShown) return

    const hour = new Date().getHours()
    const greeting =
      hour < 12 ? <><span>&#127748;</span> Good Morning</> :
      hour < 18 ? <><span>&#127749;</span> Good Afternoon</> :
      <><span>&#127750;</span> Good Evening</>

    // Delay ensures animation triggers properly
    setTimeout(() => {
      setMessage(greeting)
      setExpanded(true)

      timeoutRef.current = setTimeout(() => {
        setExpanded(false)
      }, 2000)
    }, 100)

    // sessionStorage.setItem('hello-shown', 'true')
  }, [mounted])

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)

    setMessage(newTheme === 'dark' ? <><MdDarkMode /> Dark Mode</> : <><MdLightMode /> Light Mode</>)
    setExpanded(true)

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setExpanded(false)
    }, 2000)
  }

  if (!mounted) return null

  return (
    <>
      {/* Dynamic Island */}
      <div
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          flex items-center justify-center
          bg-black/80 backdrop-blur-md text-white
          rounded-full overflow-hidden
          origin-center transform
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          shadow-[0_8px_30px_rgba(0,0,0,0.3)]
          ${expanded
            ? 'px-4 py-2 min-w-[140px] scale-100 opacity-100'
            : 'px-0 py-0 min-w-0 scale-0 opacity-0 pointer-events-none'}
        `}
      >
        <span className="text-sm whitespace-nowrap flex items-center gap-2 md:gap-3">
          {message}
        </span>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className="h-10 w-10 z-50 p-2 glass rounded-full cursor-pointer fixed top-3 right-3 md:top-6 md:right-6 flex items-center justify-center"
      >
        {theme === 'dark'
          ? <MdLightMode className="text-2xl md:text-3xl" />
          : <MdDarkMode className="text-2xl md:text-3xl" />
        }
      </button>
    </>
  )
}