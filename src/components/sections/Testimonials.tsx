'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'


interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  companyType: string
  location: string
  content: string
  rating: number
  project: string
  results: string[]
}

interface ProjectShowcase {
  id: number
  name: string
  url: string
  image: string
  description: string
  focus: string
  tags: string[]
  stats: string[]
}

const testimonials: Testimonial[] = [
  {
    id: 2,
    name: 'James Mollel',
    position: 'Operations Manager',
    company: 'Dar Logistics Ltd',
    companyType: 'Logistics',
    location: 'Dar es Salaam',
    content: 'Our warehouse operations depend on real-time inventory tracking. Neuraltale designed a network that handles 200+ scanners and tablets without any slowdowns. The system has paid for itself through improved efficiency and reduced errors.',
    rating: 5,
    project: 'Industrial network for 15,000 sqm warehouse facility',
    results: [
      '25% improvement in picking accuracy',
      '30% reduction in inventory processing time',
      'Seamless integration with existing WMS'
    ]
  },
  {
    id: 3,
    name: 'Dr. Amina Hassan',
    position: 'Director',
    company: 'Coast Medical Centre',
    companyType: 'Healthcare',
    location: 'Zanzibar',
    content: 'Patient data security was our biggest concern. Neuraltale implemented a HIPAA-compliant network that keeps our medical records completely separate from guest Wi-Fi. Their M-Pesa integration also allows patients to pay bills seamlessly.',
    rating: 5,
    project: 'Secure medical network with payment integration',
    results: [
      'Zero security incidents in 24 months',
      '50% faster patient check-in process',
      '90% of patients now use digital payments'
    ]
  },
  {
    id: 6,
    name: 'Mohamed Ali',
    position: 'Owner',
    company: 'Stone Town Restaurants',
    companyType: 'Restaurant Chain',
    location: 'Zanzibar',
    content: 'Managing 5 restaurant locations was a nightmare before Neuraltale. Now I can see real-time sales, manage inventory, and even monitor security cameras from my phone. Their cloud-based system works perfectly even during power outages with the UPS setup.',
    rating: 5,
    project: 'Multi-location restaurant management system',
    results: [
      'Real-time monitoring across 5 locations',
      '25% improvement in inventory management',
      'Seamless operations during power outages'
    ]
  }
]

const projectShowcases: ProjectShowcase[] = [
  {
    id: 1,
    name: 'The Link Africa',
    url: 'https://thelink.africa',
    image: '/The_link_Hub.png',
    description: 'A modern digital platform focused on connecting users to business opportunities, services, and ecosystem insights across Africa.',
    focus: 'Education, industry, and entrepreneurship hub',
    tags: ['Community', 'Opportunity Network', 'Youth-focused'],
    stats: ['Brand-led homepage', 'Conversion-focused hero', 'Editorial content sections']
  },
  {
    id: 2,
    name: 'Neurashop',
    url: 'https://neurashop.neuraltale.com',
    image: '/Neurashop.png',
    description: 'AI-enhanced e-commerce experience with smart product discovery, personalized recommendations, and conversion-focused storefront UX.',
    focus: 'Fast product discovery and storefront conversion',
    tags: ['E-commerce', 'AI Commerce', 'Mobile Ready'],
    stats: ['Product-first layout', 'Sales-oriented CTA flow', 'Strong trust signals']
  },
  {
    id: 3,
    name: 'Mali Up',
    url: 'https://maliup.neuraltale.com',
    image: '/Mali%20Up.png',
    description: 'A multi-tenant mobile-first business management product that supports sales, invoicing, inventory, and analytics for African SMBs.',
    focus: 'Mobile-first SaaS for SMB operations',
    tags: ['Flutter', 'ERP', 'Android Primary'],
    stats: ['Dashboard-led UI', 'Module-rich flows', 'Operations-focused design']
  },
  {
    id: 4,
    name: ' Barra Beach',
    url: 'https://barrabeach.tz/',
    image: '/barra hotel.png',
    description: 'Official tourism portal showcasing destinations, travel information, and promotional content for visitors exploring Tanzania.',
    focus: 'Destination storytelling and public-facing promotion',
    tags: ['Tourism', 'Public Sector', 'Destination Marketing'],
    stats: ['Image-first presentation', 'Information rich sections', 'Clear destination hierarchy']
  }
  ,
  {
    id: 5,
    name: 'Hillsview Production',
    url: 'https://www.hillsviewproduction.com',
    image: '/Hillsview.png',
    description: 'A media production company delivering high-quality video production, post-production, and multimedia content for brands and events.',
    focus: 'Video production, post-production, and multimedia services',
    tags: ['Media', 'Production', 'Video'],
    stats: ['Portfolio-led homepage', 'Video-first hero', 'Showreel and case studies']
  }
]

const Testimonials = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const projectCarouselRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const [isDesktopViewport, setIsDesktopViewport] = useState(false)

  const scrollToProject = useCallback((index: number) => {
    const carousel = projectCarouselRef.current
    const normalizedIndex = (index + projectShowcases.length) % projectShowcases.length
    const projectCard = carousel?.querySelector<HTMLElement>(`[data-project-index="${normalizedIndex}"]`)

    if (!carousel || !projectCard) {
      return
    }

    const targetLeft = projectCard.offsetLeft
    carousel.scrollTo({ left: targetLeft, behavior: 'smooth' })
    setActiveProjectIndex(normalizedIndex)
  }, [])

  const handleProjectScroll = useCallback(() => {
    const carousel = projectCarouselRef.current

    if (!carousel) {
      return
    }

    const cards = Array.from(carousel.querySelectorAll<HTMLElement>('[data-project-index]'))

    if (!cards.length) {
      return
    }

    const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2
    let closestIndex = activeProjectIndex
    let smallestDistance = Number.POSITIVE_INFINITY

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(cardCenter - carouselCenter)

      if (distance < smallestDistance) {
        smallestDistance = distance
        closestIndex = index
      }
    })

    if (closestIndex !== activeProjectIndex) {
      setActiveProjectIndex(closestIndex)
    }
  }, [activeProjectIndex])

  const handlePreviousProject = useCallback(() => {
    scrollToProject(activeProjectIndex - 1)
  }, [activeProjectIndex, scrollToProject])

  const handleNextProject = useCallback(() => {
    scrollToProject(activeProjectIndex + 1)
  }, [activeProjectIndex, scrollToProject])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    const handleViewportChange = (event: MediaQueryListEvent) => {
      setIsDesktopViewport(event.matches)
    }

    setIsDesktopViewport(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleViewportChange)

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange)
    }
  }, [])

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting)
      },
      { threshold: 0.35 }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isSectionVisible || !isDesktopViewport) {
      return
    }

    const intervalId = window.setInterval(() => {
      scrollToProject(activeProjectIndex + 1)
    }, 2000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [activeProjectIndex, isSectionVisible, isDesktopViewport, scrollToProject])

  const renderStars = useCallback((rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }, [])

  const getInitials = useCallback((name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Website Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore live websites we have built and launched, with landing-page previews and direct links to each project.
          </p>
        </div>

        {/* Main Project Showcase Display */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              Best featured projects
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Swipe or use arrows
            </span>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={handlePreviousProject}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-amber-200 bg-white/95 p-3 text-[#002855] shadow-lg shadow-black/10 transition hover:bg-amber-50"
              aria-label="Show previous project"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <button
              type="button"
              onClick={handleNextProject}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-amber-200 bg-white/95 p-3 text-[#002855] shadow-lg shadow-black/10 transition hover:bg-amber-50"
              aria-label="Show next project"
            >
              <span aria-hidden="true">›</span>
            </button>

            <div
              ref={projectCarouselRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 pr-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              onScroll={handleProjectScroll}
            >
              {projectShowcases.map((project, index) => (
                <div
                  key={project.id}
                  data-project-index={index}
                  className="min-w-full snap-start sm:min-w-[calc(50%-0.625rem)] lg:min-w-[calc(33.333%-0.875rem)]"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center justify-center border-b border-gray-100 bg-[#f8fbff]">
                      <img
                        src={project.image}
                        alt={`${project.name} landing page preview`}
                        className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-[1.01] sm:h-56"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">{project.name}</h3>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#002855]">{project.focus}</p>
                      <p className="line-clamp-2 text-sm text-gray-600">{project.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projectShowcases.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => scrollToProject(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeProjectIndex ? 'w-6 bg-amber-500' : 'w-2 bg-amber-200'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid - Hidden on mobile to reduce duplication */}
        <div className="mt-16 hidden md:block">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            All Customer Success Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative overflow-hidden rounded-2xl border border-amber-100 bg-gradient-to-br from-white via-white to-amber-50/70 p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.32)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-[#002855]" />
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-sm mr-4 shadow-md">
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    {testimonial.companyType}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-gray-500">
                    {testimonial.location}
                  </span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white/90 p-4 text-xs font-medium text-gray-600 shadow-sm">
                  {testimonial.project}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Let us help transform your business with reliable, scalable technology solutions 
            tailored to your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors duration-300"
            >
              Get Your Free Consultation
            </a>
            <a
              href="/portfolio"
              className="px-8 py-4 border-2 border-amber-500 text-amber-500 font-bold rounded-lg hover:bg-amber-50 transition-colors duration-300"
            >
              View More Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
