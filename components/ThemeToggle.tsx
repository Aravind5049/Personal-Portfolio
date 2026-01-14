'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get theme from localStorage or check current body class
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    const bodyHasLight = document.body.classList.contains('light')
    
    let currentTheme: 'light' | 'dark' = 'dark'
    
    if (savedTheme) {
      currentTheme = savedTheme
    } else if (bodyHasLight) {
      currentTheme = 'light'
    }
    
    setTheme(currentTheme)
    // Ensure body has the correct class - remove all theme classes first
    document.body.classList.remove('light', 'dark')
    // Add the correct theme class
    document.body.classList.add(currentTheme)
    
    // Also apply to html element if needed
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(currentTheme)
  }, [])

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Get current theme from state
    setTheme((currentTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light'
      
      // Update DOM immediately - use requestAnimationFrame to ensure it happens
      requestAnimationFrame(() => {
        document.body.classList.remove('light', 'dark')
        document.body.classList.add(newTheme)
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(newTheme)
        
        // Save to localStorage
        localStorage.setItem('theme', newTheme)
      })
      
      return newTheme
    })
  }
  
  useEffect(() => {
    if (!mounted) return
    
    // Add click listener directly to DOM element as backup
    const toggleElement = document.getElementById('theme_toggle')
    if (toggleElement) {
      const handleInteraction = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
        
        // Use functional setState to get current theme
        setTheme((currentTheme) => {
          const newTheme = currentTheme === 'light' ? 'dark' : 'light'
          
          // Update DOM immediately
          requestAnimationFrame(() => {
            document.body.classList.remove('light', 'dark')
            document.body.classList.add(newTheme)
            document.documentElement.classList.remove('light', 'dark')
            document.documentElement.classList.add(newTheme)
            localStorage.setItem('theme', newTheme)
          })
          
          return newTheme
        })
      }
      
      // Use both click and touchend for mobile support
      toggleElement.addEventListener('click', handleInteraction, { capture: true, passive: false })
      toggleElement.addEventListener('touchend', handleInteraction, { capture: true, passive: false })
      
      return () => {
        toggleElement.removeEventListener('click', handleInteraction, { capture: true } as any)
        toggleElement.removeEventListener('touchend', handleInteraction, { capture: true } as any)
      }
    }
  }, [mounted])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button 
        type="button"
        className="theme_toggle" 
        id="theme_toggle" 
        aria-label="Toggle Theme"
      >
        <span className="icon">☀️</span>
      </button>
    )
  }

  return (
    <button 
      type="button"
      className="theme_toggle" 
      id="theme_toggle" 
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      onTouchEnd={toggleTheme}
      style={{ 
        cursor: 'pointer',
        pointerEvents: 'auto',
        zIndex: 10000002,
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(255,255,255,.2)',
        borderRadius: '50%',
        background: 'transparent',
        padding: '10px',
        width: '44px',
        height: '44px',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation'
      }}
    >
      <span className="icon">{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
  )
}

