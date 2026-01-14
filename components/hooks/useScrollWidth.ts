'use client'

import { useEffect } from 'react'

export function useScrollWidth() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolltop = window.scrollY || document.documentElement.scrollTop
      const body = document.body

      if (scrolltop > 0 && !body.classList.contains('scrolled')) {
        body.classList.add('scrolled')
      } else if (scrolltop === 0 && body.classList.contains('scrolled')) {
        body.classList.remove('scrolled')
      }
    }

    // Initial check
    handleScroll()

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

