'use client'

import { useEffect } from 'react'

export default function ScriptLoader() {
  useEffect(() => {
    // Load jQuery and other scripts if needed
    if (typeof window !== 'undefined' && !(window as any).jQuery) {
      const script = document.createElement('script')
      script.src = '/js/jquery.js'
      script.async = false // Load synchronously to ensure order
      document.head.appendChild(script)

      script.onload = () => {
        console.log('jQuery loaded')
        // Load typed.js
        const typedScript = document.createElement('script')
        typedScript.src = '/js/typed.js'
        typedScript.async = false
        document.head.appendChild(typedScript)

        typedScript.onload = () => {
          console.log('Typed.js loaded')
          // Trigger a custom event when scripts are ready
          window.dispatchEvent(new Event('scriptsLoaded'))
          
          // Load init.js for other jQuery features
          const initScript = document.createElement('script')
          initScript.src = '/js/init.js'
          initScript.async = true
          document.body.appendChild(initScript)
        }
      }
    } else if ((window as any).jQuery && (window as any).jQuery.fn && (window as any).jQuery.fn.typed) {
      // Scripts already loaded
      console.log('Scripts already loaded')
      window.dispatchEvent(new Event('scriptsLoaded'))
    }
  }, [])

  return null
}

