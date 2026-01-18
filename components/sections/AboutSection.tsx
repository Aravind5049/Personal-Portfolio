'use client'

import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'

const bioImages = [
  '/img/Personal_Portfolio_Pic/Bio-01.jpg',
  '/img/Personal_Portfolio_Pic/Bio-02.jpg',
  '/img/Personal_Portfolio_Pic/Bio-03.jpg',
  '/img/Personal_Portfolio_Pic/Bio-04.jpg',
  '/img/Personal_Portfolio_Pic/Bio-05.jpg',
  '/img/Personal_Portfolio_Pic/Bio-06.jpg',
  '/img/Personal_Portfolio_Pic/Bio-07.jpg',
]

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Beyond the Screen</h3>
            <p className="desc">
              I&apos;m someone who enjoys bringing structure to complexity — whether it&apos;s designing intuitive digital products or composing music. As a UI/UX Designer and Frontend Engineer, I&apos;m naturally curious, detail-oriented, and driven by how people experience technology in real life. I care deeply about clarity, accessibility, and thoughtful interaction design.
              <br/><br/>
              Outside of product work, I&apos;m a professional musician with over 12 years of performance experience, which strongly influences my sense of rhythm, timing, and storytelling in design. I enjoy exploring new tools, experimenting with AI-driven experiences, and continuously refining my craft through learning, collaboration, and creative problem-solving.
            </p>
          </div>

          <div className="about_slider_wrapper" style={{ marginTop: '50px' }}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="about_slider"
              style={{ position: 'relative', width: '100%' }}
            >
              {bioImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="about_slider_item">
                    <div className="img_holder">
                      <Image 
                        src="/img/thumb/square.jpg" 
                        alt={`Aravind Portfolio Image ${index + 1}`}
                        width={400}
                        height={400}
                        style={{ opacity: 0 }}
                      />
                      <div 
                        className="abs_img" 
                        data-bg-img={img}
                        style={{ 
                          backgroundImage: `url(${img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

