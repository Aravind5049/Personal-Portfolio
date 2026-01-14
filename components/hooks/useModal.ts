'use client'

import { useEffect } from 'react'

export function useModal() {
  useEffect(() => {
    const modalItems = document.querySelectorAll('.modal_item')
    const modalBox = document.querySelector('.resumo_fn_modalbox')
    const closeButtons = document.querySelectorAll('.resumo_fn_modalbox .closer, .resumo_fn_modalbox .extra_closer')
    const prevNext = document.querySelector('.resumo_fn_modalbox .fn__nav')

    const openModal = (item: Element) => {
      const hiddenContent = item.querySelector('.fn__hidden')
      if (!hiddenContent || !modalBox) return

      const content = hiddenContent.innerHTML
      const modalIn = modalBox.querySelector('.modal_in')
      if (modalIn) {
        modalIn.innerHTML = content
      }

      // Set data attributes for navigation
      const items = item.closest('.modal_items')
      const index = item.getAttribute('data-index')
      const from = items?.getAttribute('data-from')
      
      if (prevNext && index && from) {
        prevNext.setAttribute('data-index', index)
        prevNext.setAttribute('data-from', from)
      }

      document.body.classList.add('modal')
      modalBox.classList.add('opened')

      // Initialize background images
      const bgImages = modalBox.querySelectorAll('[data-bg-img]')
      bgImages.forEach((el) => {
        const bgImg = el.getAttribute('data-bg-img')
        if (bgImg) {
          (el as HTMLElement).style.backgroundImage = `url(${bgImg})`
        }
      })

      // Initialize background images for slider items
      setTimeout(() => {
        const sliderItems = modalBox.querySelectorAll('.blog_slider .abs_img')
        sliderItems.forEach((el) => {
          const bgImg = el.getAttribute('data-bg-img')
          if (bgImg) {
            (el as HTMLElement).style.backgroundImage = `url(${bgImg})`
          }
        })
      }, 100)
    }

    const closeModal = () => {
      if (modalBox) {
        modalBox.classList.remove('opened', 'hovered')
        const modalIn = modalBox.querySelector('.modal_in')
        if (modalIn) {
          modalIn.innerHTML = ''
        }
        document.body.classList.remove('modal')
      }
    }

    // Handle modal item clicks
    modalItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault()
        openModal(item)
      })
    })

    // Handle close button clicks
    closeButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        closeModal()
      })
    })

    // Handle prev/next navigation
    if (prevNext) {
      const prevBtn = prevNext.querySelector('.prev')
      const nextBtn = prevNext.querySelector('.next')

      const handleNav = (direction: 'prev' | 'next') => {
        const from = prevNext.getAttribute('data-from')
        const currentIndex = parseInt(prevNext.getAttribute('data-index') || '1')
        if (!from) return

        const items = document.querySelector(`.modal_items[data-from="${from}"]`)
        if (!items) return

        const count = parseInt(items.getAttribute('data-count') || '1')
        let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1
        
        if (newIndex < 1) newIndex = count
        if (newIndex > count) newIndex = 1

        const newItem = items.querySelector(`.modal_item[data-index="${newIndex}"]`)
        if (newItem) {
          prevNext.setAttribute('data-index', newIndex.toString())
          openModal(newItem)
        }
      }

      prevBtn?.addEventListener('click', (e) => {
        e.preventDefault()
        handleNav('prev')
      })

      nextBtn?.addEventListener('click', (e) => {
        e.preventDefault()
        handleNav('next')
      })
    }

    return () => {
      modalItems.forEach((item) => {
        item.removeEventListener('click', () => {})
      })
      closeButtons.forEach((btn) => {
        btn.removeEventListener('click', () => {})
      })
    }
  }, [])
}

