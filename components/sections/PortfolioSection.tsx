'use client'

import { useState } from 'react'
import Image from 'next/image'
import PortfolioModal from '@/components/PortfolioModal'

// Portfolio data - you can move this to a separate data file later
const portfolioItems = [
  {
    id: 1,
    title: 'PocketCare — Health Records Platform',
    category: 'UI/UX - Mobile Developement',
    thumb: '/img/blog/01-thumb.jpg',
    images: [
      '/img/blog/appstore-01.jpg',
      '/img/blog/AppScreenshots/appstore-02.jpg',
      '/img/blog/AppScreenshots/appstore-03.jpg',
      '/img/blog/AppScreenshots/appstore-04.jpg',
    ],
    description: 'PocketCare is a digital health records platform designed to help users securely store, view, and understand their medical data. The product focuses on simplifying complex health information through intuitive interfaces and AI-powered insights, enabling users to make informed decisions about their health.',
    role: [
      'Led branding, visual identity, and end-to-end UI/UX for web and mobile experiences.',
      'Designed a health summary dashboard that presents AI-generated insights from medical reports in a clear, actionable format.',
      'Created the UX for an AI health companion chatbot, allowing users to ask questions, understand reports, and navigate health data more easily.',
      'Designed user flows for record upload, categorization, viewing, and secure sharing.',
      'Built reusable UI components and design systems to ensure consistency and scalability.',
      'Collaborated closely with product, engineering, and backend teams to refine workflows and feature logic.',
      'Focused on accessibility, clarity, and trust—critical for healthcare-related experiences.',
    ],
    tools: [
      'Design: Figma, Adobe Illustrator, Adobe Photoshop',
      'Frontend: React, HTML, CSS, JavaScript',
      'Prototyping & Interaction: Figma Prototypes',
      'AI UX: Conversational flow design, prompt structuring, AI insight visualization',
      'Collaboration: Git, Jira, Agile workflows',
    ],
    slidesPerView: 3,
  },
  {
    id: 2,
    title: 'Accessibility & Assistance Platform.',
    category: 'UI/UX - Mobile Developement',
    thumb: '/img/blog/02-thumb.jpg',
    images: [
      '/img/blog/02-01.jpg',
      '/img/blog/02-02.jpg',
      '/img/blog/02-03.jpg',
      '/img/blog/02-04.jpg',
      '/img/blog/02-05.jpg',
    ],
    description: 'The Accessibility & Assistance Platform is designed to support individuals with special needs and senior users in managing daily activities and making informed decisions. The product focuses on simplicity, clarity, and inclusivity, combining AI-driven assistance with thoughtfully designed mobile and tablet experiences.',
    role: [
      'Designed AI-powered assistants for meal planning and decision support, providing safe, personalized guidance for daily tasks.',
      'Created accessible conversational flows, prompt strategies, and guided interaction models tailored for diverse user abilities.',
      'Designed and developed mobile interfaces, implementing key features using Flutter.',
      'Conceptualized and built a tablet-specific experience, optimizing layouts, navigation, and interactions for larger screens.',
      'Conducted iterative UX refinements to ensure clarity, ease of use, and reduced cognitive load.',
      'Translated real-world user challenges into intuitive, user-friendly digital solutions.',
    ],
    tools: [
      'Design: Figma, Adobe XD',
      'Development: Flutter, Dart',
      'AI Integration: Conversational AI, prompt engineering',
      'Prototyping: Figma Prototypes, Interactive mockups',
    ],
    slidesPerView: 3,
  },
  {
    id: 3,
    title: 'OTT / Entertainment Platform',
    category: 'UI/UX - Web & Mobile',
    thumb: '/img/blog/03-thumb.jpg',
    images: [
      '/img/blog/03-01.webp',
      '/img/blog/03-02.webp',
      '/img/blog/03-03.webp',
      '/img/blog/03-04.webp',
      '/img/blog/03-05.webp',
      '/img/blog/03-06.webp',
      '/img/blog/03-07.webp',
      '/img/blog/03-08.webp',
    ],
    description: 'The OTT / Entertainment Platform is a cross-platform streaming product designed to deliver a seamless content discovery and viewing experience across web and mobile devices. The platform focuses on intuitive navigation, performance, and visual consistency to support high user engagement.',
    role: [
      'Contributed to UI/UX design and frontend development across web and mobile platforms.',
      'Designed adaptive layouts for content browsing, playback screens, and user engagement flows.',
      'Implemented modular, reusable UI components using React and React Native.',
      'Worked closely with backend and product teams to align UI workflows with platform functionality.',
      'Ensured visual consistency, responsiveness, and usability across devices and screen sizes.',
    ],
    tools: [
      'Design: Figma',
      'Frontend: React, React Native, JavaScript',
      'Styling: CSS3, Responsive Layouts',
      'Collaboration: Git, Jira, Agile workflows',
    ],
    slidesPerView: 3,
  },
  {
    id: 4,
    title: 'Valet Parking',
    category: 'UI/UX - Mobile',
    thumb: '/img/blog/04-thumb.jpg',
    images: [
      '/img/blog/04-01.jpg',
      '/img/blog/04-02.jpg',
      '/img/blog/04-03.jpg',
      '/img/blog/04-04.jpg',
      '/img/blog/04-05.jpg',
      '/img/blog/04-06.jpg',
    ],
    description: 'A mobile application for valet parking services, designed to streamline the parking experience for users.',
    role: [],
    tools: [],
    slidesPerView: 3,
  },
  {
    id: 5,
    title: 'RiteSize',
    category: 'UI/UX - Mobile',
    thumb: '/img/blog/05-thumb.jpg',
    images: [
      '/img/blog/05-01.jpg',
      '/img/blog/05-02.jpg',
      '/img/blog/05-03.jpg',
    ],
    description: 'RiteSize is a mobile application focused on size fitting and measurement solutions.',
    role: [],
    tools: [],
    slidesPerView: 1, // Special case: 1 slide per view
  },
]

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const handleItemClick = (id: number) => {
    setSelectedItem(id)
  }

  const handleClose = () => {
    setSelectedItem(null)
  }

  const handlePrev = () => {
    if (selectedItem !== null) {
      const currentIndex = portfolioItems.findIndex(item => item.id === selectedItem)
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : portfolioItems.length - 1
      setSelectedItem(portfolioItems[prevIndex].id)
    }
  }

  const handleNext = () => {
    if (selectedItem !== null) {
      const currentIndex = portfolioItems.findIndex(item => item.id === selectedItem)
      const nextIndex = currentIndex < portfolioItems.length - 1 ? currentIndex + 1 : 0
      setSelectedItem(portfolioItems[nextIndex].id)
    }
  }

  const currentItem = selectedItem ? portfolioItems.find(item => item.id === selectedItem) : null
  const currentIndex = selectedItem ? portfolioItems.findIndex(item => item.id === selectedItem) : -1
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < portfolioItems.length - 1

  return (
    <>
      <section id="news" style={{ paddingTop: '0px' }}>
        <div className="container">
          <div className="roww">
            <div className="resumo_fn_main_title">
              <h3 className="subtitle">Portfolio</h3>
              <h3 className="title">Latest Projects</h3>
            </div>

            <div className="resumo_fn_blog_list">
              <ul className="modal_items" data-from="blog" data-count="5">
                {portfolioItems.map((item) => (
                  <li key={item.id}>
                    <div 
                      className="item modal_item" 
                      data-index={item.id}
                      onClick={() => handleItemClick(item.id)}
                      style={{ cursor: 'pointer' }}
                    >
                    <div className="img_holder">
                      <Image
                        src={item.thumb}
                        alt={item.title}
                        width={400}
                        height={300}
                      />
                      <div 
                        className="abs_img" 
                        style={{ backgroundImage: `url(${item.thumb})` }}
                      ></div>
                    </div>
                    <div className="title_holder">
                      <p>{item.category}</p>
                      <h3>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleItemClick(item.id); }}>{item.title}</a>
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <PortfolioModal
      item={currentItem || null}
      isOpen={selectedItem !== null}
      onClose={handleClose}
      onPrev={handlePrev}
      onNext={handleNext}
      hasPrev={hasPrev}
      hasNext={hasNext}
    />
    </>
  )
}

