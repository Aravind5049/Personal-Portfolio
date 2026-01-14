'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Sidebar() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Wait for jQuery, Typed.js, and Resumo to be available
    const initTyped = () => {
      if (typeof window === 'undefined') return undefined
      
      const $ = (window as any).jQuery
      if (!$) {
        return undefined
      }
      
      // Check if Typed.js jQuery plugin is available
      if (!$.fn || !$.fn.typed) {
        return undefined
      }
      
      if (!typedRef.current) {
        return undefined
      }
      
      // Try using Resumo.typed() first (from init.js)
      const Resumo = (window as any).Resumo
      if (Resumo && Resumo.typed) {
        try {
          Resumo.typed()
          console.log('Typed initialized via Resumo.typed()')
          return undefined // Let Resumo handle cleanup
        } catch (error) {
          console.error('Error calling Resumo.typed():', error)
        }
      }
      
      // Fallback: Initialize manually
      const animatedTitle = $(typedRef.current).closest('.animated_title')
      if (!animatedTitle.length) {
        return undefined
      }
      
      // Check if already initialized
      if (animatedTitle.data('typed')) {
        return undefined
      }
      
      // Get all title_in spans and extract their text
      const items = animatedTitle.find('.title_in')
      if (items.length === 0) {
        return undefined
      }
      
      const strings: string[] = []
      items.each((index: number, element: HTMLElement) => {
        const text = $(element).text().trim()
        if (text) {
          strings.push(text)
        }
      })
      
      if (strings.length === 0) {
        return undefined
      }
      
      console.log('Initializing Typed.js manually with strings:', strings)
      
      // Use jQuery plugin method (like original code)
      try {
        animatedTitle.typed({
          strings: strings,
          loop: true,
          smartBackspace: false,
          typeSpeed: 40,
          startDelay: 700,
          backDelay: 3000
        })
        console.log('Typed.js initialized successfully')
      } catch (error) {
        console.error('Error initializing Typed.js:', error)
        return undefined
      }

      return () => {
        const typedInstance = animatedTitle.data('typed')
        if (typedInstance && typedInstance.destroy) {
          typedInstance.destroy()
        }
      }
    }

    // Listen for scripts loaded event
    const handleScriptsLoaded = () => {
      setTimeout(() => {
        initTyped()
      }, 200)
    }
    
    window.addEventListener('scriptsLoaded', handleScriptsLoaded)

    // Try to initialize immediately
    let cleanup = initTyped()
    
    // If not ready, wait and retry
    if (!cleanup) {
      const checkInterval = setInterval(() => {
        cleanup = initTyped()
        if (cleanup) {
          clearInterval(checkInterval)
        }
      }, 500)

      // Stop checking after 15 seconds
      const timeout = setTimeout(() => {
        clearInterval(checkInterval)
      }, 15000)

      return () => {
        window.removeEventListener('scriptsLoaded', handleScriptsLoaded)
        clearInterval(checkInterval)
        clearTimeout(timeout)
        if (cleanup) {
          cleanup()
        }
      }
    }

    return () => {
      window.removeEventListener('scriptsLoaded', handleScriptsLoaded)
      if (cleanup) {
        cleanup()
      }
    }
  }, [])

  return (
    <div className="resumo_fn_right">
      {/* Menu Trigger */}
      <a href="#" className="menu_trigger">
        <span className="text">Menu</span>
        <span className="hamb">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Panel Content */}
      <div className="right_in">
        <div className="right_top">
          <div className="border1"></div>
          <div className="border2"></div>

          <div className="img_holder">
            <Image 
              src="/img/thumb/profile-pic.png" 
              alt="Aravind - UI/UX Designer and Frontend Engineer"
              width={300}
              height={300}
              priority
            />
            <div className="abs_img" data-bg-img="/img/thumb/profile-pic.png"></div>
          </div>
          <div className="title_holder">
            <h5>Hi There! I am</h5>
            <h3>
              <span className="animated_title">
                <span ref={typedRef} className="title_in">Aravind</span>
                <span className="title_in" style={{ display: 'none' }}>UI/UX Designer</span>
                <span className="title_in" style={{ display: 'none' }}>Frontend Developer</span>
              </span>
            </h3>
          </div>
        </div>
        <div className="right_bottom" style={{ flexDirection: 'column' }}>
          <div className="social">
            <ul>
              <li>
                <a 
                  style={{ padding: '0px' }} 
                  href="https://www.linkedin.com/in/aravind-kanaparthi-515421bb/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Connect on LinkedIn"
                >
                  <img src="/svg/social/linkedin.svg" alt="LinkedIn" className="fn__svg" />
                </a>
              </li>
              <li>
                <a 
                  style={{ padding: '0px' }} 
                  href="https://www.behance.net/aravindkanapar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="View on Behance"
                >
                  <img src="/svg/social/behance.svg" alt="Behance" className="fn__svg" />
                </a>
              </li>
              <li>
                <a 
                  style={{ padding: '0px' }} 
                  href="https://www.instagram.com/geek.percept?igsh=MWk2N3phenVvMTZ3aQ==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow on Instagram"
                >
                  <img src="/svg/social/instagram.svg" alt="Instagram" className="fn__svg" />
                </a>
              </li>
              <li>
                <a 
                  style={{ padding: '0px' }} 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow on Facebook"
                >
                  <img src="/svg/social/facebook.svg" alt="Facebook" className="fn__svg" />
                </a>
              </li>
              <li>
                <a 
                  style={{ padding: '0px' }} 
                  href="https://dribbble.com/MinimalMindframe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="View on Dribbble"
                >
                  <img src="/svg/social/dribbble.svg" alt="Dribbble" className="fn__svg" />
                </a>
              </li>
            </ul>
          </div>
          <div className="download_resume">
            <a href="/img/Aravind-Resume.pdf" download>Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

