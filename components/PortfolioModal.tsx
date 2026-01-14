'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'

interface PortfolioItem {
  id: number
  title: string
  category: string
  images: string[]
  description: string
  role: string[]
  tools: string[]
  slidesPerView: number
}

interface PortfolioModalProps {
  item: PortfolioItem | null
  isOpen: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}

export default function PortfolioModal({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: PortfolioModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal')
    } else {
      document.body.classList.remove('modal')
    }
    return () => {
      document.body.classList.remove('modal')
    }
  }, [isOpen])

  if (!item || !isOpen) return null

  return (
    <div className={`resumo_fn_modalbox ${isOpen ? 'opened' : ''}`}>
      <a className="extra_closer" href="#" onClick={(e) => { e.preventDefault(); onClose(); }} aria-label="Close modal"></a>
      <div className="box_inner">
        <a className="closer" href="#" onClick={(e) => { e.preventDefault(); onClose(); }} aria-label="Close modal">
          <span></span>
        </a>
        <div className="modal_content">
          <div className="modal_in">
            <p className="fn__cat">{item.category}</p>
            <h3 className="fn__title">{item.title}</h3>
            <div className="blog_slider_wrapper">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={item.slidesPerView}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: item.slidesPerView === 1 ? 1 : 2,
                  },
                  1024: {
                    slidesPerView: item.slidesPerView,
                  },
                }}
                className="blog_slider"
              >
                {item.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="item">
                      <div className="img_holder">
                        <Image
                          src={img}
                          alt={`${item.title} Screenshot ${idx + 1}`}
                          width={800}
                          height={600}
                          style={{ opacity: 0 }}
                        />
                        <div 
                          className="abs_img" 
                          style={{ 
                            backgroundImage: `url(${img})`,
                            backgroundPosition: item.id === 1 ? 'top' : 'center center'
                          }}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <p className="fn__desc">{item.description}</p>
            {item.role.length > 0 && (
              <div className="fn__desc">
                <p><strong>My Role & Activities</strong></p>
                <ul>
                  {item.role.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.tools.length > 0 && (
              <div className="fn__desc">
                <p><strong>Tools & Technologies</strong></p>
                <ul>
                  {item.tools.map((tool, idx) => (
                    <li key={idx}>{tool}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="fn__nav" data-from="blog" data-index={item.id}>
            <a 
              href="#" 
              className={`prev ${!hasPrev ? 'disabled' : ''}`}
              onClick={(e) => { e.preventDefault(); if (hasPrev) onPrev(); }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a 
              href="#" 
              className={`next ${!hasNext ? 'disabled' : ''}`}
              onClick={(e) => { e.preventDefault(); if (hasNext) onNext(); }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

