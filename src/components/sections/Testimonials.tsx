'use client'

import { useState, useCallback } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mwangi',
    position: 'General Manager',
    company: 'Kilimanjaro Hotel',
    companyType: 'Hospitality',
    location: 'Arusha',
    content: 'Neuraltale transformed our guest Wi-Fi experience completely. Before, we had constant complaints about slow internet. Now our guests consistently praise our connectivity in reviews. The TP-Link Omada system they installed has been rock solid for 18 months.',
    rating: 5,
    project: 'Complete hotel Wi-Fi infrastructure for 80 rooms',
    results: [
      '99.5% network uptime',
      '40% increase in positive reviews mentioning Wi-Fi',
      'Zero guest Wi-Fi complaints in the last 12 months'
    ]
  },
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
    id: 4,
    name: 'Peter Msigwa',
    position: 'IT Manager',
    company: 'Tanzanite Manufacturing',
    companyType: 'Manufacturing',
    location: 'Moshi',
    content: 'We needed a network that could handle harsh industrial conditions. The solution Neuraltale provided has survived dust, heat, and power fluctuations for over 2 years. Their local support is exceptional - they have never taken more than 4 hours to respond.',
    rating: 5,
    project: 'Industrial-grade network for manufacturing facility',
    results: [
      '99.8% uptime despite harsh conditions',
      '4-hour maximum support response time',
      '60% reduction in network-related downtime'
    ]
  },
  {
    id: 5,
    name: 'Grace Mushi',
    position: 'Principal',
    company: 'Mwanza Secondary School',
    companyType: 'Education',
    location: 'Mwanza',
    content: 'Neuraltale helped us bring reliable internet to our 800 students. The parental control features and bandwidth management ensure educational use while the student portal makes it easy to manage access. This has revolutionized how we teach.',
    rating: 5,
    project: 'Educational network for 800+ students and 45 staff',
    results: [
      '100% curriculum now includes digital learning',
      '80% improvement in student research capabilities',
      'Reduced internet costs by 35% through better management'
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
    image: 'https://image.thum.io/get/width/1200/noanimate/https://thelink.africa',
    description: 'A modern digital platform focused on connecting users to business opportunities, services, and ecosystem insights across Africa.'
  },
  {
    id: 2,
    name: 'Neurashop',
    url: 'https://neurashop.neuraltale.com',
    image: 'https://image.thum.io/get/width/1200/noanimate/https://neurashop.neuraltale.com',
    description: 'AI-enhanced e-commerce experience with smart product discovery, personalized recommendations, and conversion-focused storefront UX.'
  },
  {
    id: 3,
    name: 'Mali Up',
    url: 'https://maliup.neuraltale.com',
    image: 'https://image.thum.io/get/width/1200/noanimate/https://maliup.neuraltale.com',
    description: 'A multi-tenant mobile-first business management product that supports sales, invoicing, inventory, and analytics for African SMBs.'
  },
  {
    id: 4,
    name: 'Tanzania Tourism',
    url: 'https://www.tanzaniatourism.go.tz',
    image: 'https://image.thum.io/get/width/1200/noanimate/https://www.tanzaniatourism.go.tz',
    description: 'Official tourism portal showcasing destinations, travel information, and promotional content for visitors exploring Tanzania.'
  }
]

const Testimonials = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const nextProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev + 1) % projectShowcases.length)
  }, [])

  const prevProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev - 1 + projectShowcases.length) % projectShowcases.length)
  }, [])

  const currentProject = projectShowcases[currentProjectIndex]

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
    <section className="py-16 bg-gray-50">
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
        <div className="max-w-4xl mx-auto ">
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 lg:p-10 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous project"
            >
              <FaChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next project"
            >
              <FaChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src={currentProject.image}
                  alt={`${currentProject.name} landing page preview`}
                  className="h-56 sm:h-64 md:h-72 w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </a>

              <div className="text-left">
                <span className="inline-flex rounded-full bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 mb-3">
                  Live Project
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {currentProject.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {currentProject.description}
                </p>
                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-amber-600"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projectShowcases.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentProjectIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProjectIndex ? 'bg-amber-500' : 'bg-amber-200'
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
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm mr-4">
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
                
                <p className="text-gray-700 mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>
                
                <div className="text-sm text-amber-500 font-medium">
                  {testimonial.companyType} • {testimonial.location}
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
