'use client'

import { useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import HomeSection from '@/components/sections/HomeSection'
import AboutSection from '@/components/sections/AboutSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ContactSection from '@/components/sections/ContactSection'
import Navigation from '@/components/Navigation'
import ModalBox from '@/components/ModalBox'
import Footer from '@/components/Footer'
import ScriptLoader from '@/components/ScriptLoader'
import { useMenuToggle } from '@/components/hooks/useMenuToggle'
import { useScrollWidth } from '@/components/hooks/useScrollWidth'

export default function Home() {
  useMenuToggle()
  useScrollWidth()

  useEffect(() => {
    // Ensure wrapper doesn't have nav-opened class on mount
    const wrapper = document.querySelector('.resumo_fn_wrapper')
    if (wrapper) {
      wrapper.classList.remove('nav-opened', 'nav-hover-close')
    }
    
    // Handle anchor link clicks to close menu
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]')
      if (link && (link as HTMLAnchorElement).href.includes('#')) {
        const hash = (link as HTMLAnchorElement).hash
        if (hash && hash !== '#') {
          const wrapper = document.querySelector('.resumo_fn_wrapper')
          if (wrapper) {
            wrapper.classList.remove('nav-opened', 'nav-hover-close')
          }
          const navLi = document.querySelectorAll('#nav ul li')
          navLi.forEach((li) => {
            const element = li as HTMLElement
            element.style.transitionDelay = '0ms'
          })
        }
      }
    }
    
    document.addEventListener('click', handleAnchorClick)
    
    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <div className="resumo_fn_wrapper">
      <ScriptLoader />
      
      <div className="resumo_fn_content">
        <Sidebar />
        
        <div className="resumo_fn_left">
          <div className="resumo_fn_page">
            <HomeSection />
            <PortfolioSection />
            <AboutSection />
            <ContactSection />
          </div>
          
          <Footer />
        </div>
      </div>
      
      <Navigation />
      
      {/* Magic Cursor */}
      <div className="frenify-cursor cursor-outer" data-default="yes" data-link="yes" data-slider="yes">
        <span className="fn-cursor"></span>
      </div>
      <div className="frenify-cursor cursor-inner" data-default="yes" data-link="yes" data-slider="yes">
        <span className="fn-cursor">
          <span className="fn-left"></span>
          <span className="fn-right"></span>
        </span>
      </div>
    </div>
  )
}

