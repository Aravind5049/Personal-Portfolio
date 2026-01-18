'use client'

import { useEffect } from 'react'

export function useMenuToggle() {
  useEffect(() => {
    const opener = document.querySelector('.resumo_fn_right .menu_trigger')
    const closer = document.querySelector('.resumo_fn_navigation .closer')
    const overlayCloser = document.querySelector('.resumo_fn_nav_overlay')
    const overlay = document.querySelector('.resumo_fn_nav_overlay')
    const wrapper = document.querySelector('.resumo_fn_wrapper')
    const navLi = document.querySelectorAll('#nav ul li')
    const navFooter = document.querySelector('.resumo_fn_navigation .nav_footer')
    
    const speed = 200
    const transitionTime = 700
    const summary = (navLi.length + 1) * speed + transitionTime

    const openMenu = () => {
      if (wrapper) {
        wrapper.classList.add('nav-opened')
        navLi.forEach((li, i) => {
          const element = li as HTMLElement
          element.style.transitionDelay = `${i * speed + transitionTime}ms`
        })
        setTimeout(() => {
          navFooter?.classList.add('ready')
        }, summary)
      }
    }

    const closeMenu = () => {
      if (wrapper) {
        navLi.forEach((li) => {
          const element = li as HTMLElement
          element.style.transitionDelay = '0ms'
        })
        wrapper.classList.remove('nav-opened', 'nav-hover-close')
        navFooter?.classList.remove('ready')
      }
    }

    opener?.addEventListener('click', (e) => {
      e.preventDefault()
      openMenu()
    })

    closer?.addEventListener('click', (e) => {
      e.preventDefault()
      closeMenu()
    })

    overlayCloser?.addEventListener('click', (e) => {
      e.preventDefault()
      closeMenu()
    })

    overlayCloser?.addEventListener('mouseenter', () => {
      wrapper?.classList.add('nav-hover-close')
    })

    overlayCloser?.addEventListener('mouseleave', () => {
      wrapper?.classList.remove('nav-hover-close')
    })

    // Ensure menu starts closed
    closeMenu()

    return () => {
      opener?.removeEventListener('click', openMenu)
      closer?.removeEventListener('click', closeMenu)
      overlayCloser?.removeEventListener('click', closeMenu)
      overlayCloser?.removeEventListener('mouseenter', () => {})
      overlayCloser?.removeEventListener('mouseleave', () => {})
    }
  }, [])
}

