'use client'

import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FaBrain, FaShoppingCart, FaRobot, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa'

type ProductFeature = {
  icon: IconType
  text: string
}

type ProductBadge = {
  label: string
  value: string
}

type Product = {
  name: string
  tagline: string
  description: string
  icon: IconType
  color: 'blue' | 'green'
  features: ProductFeature[]
  cta: string
  link: string
  featured?: boolean
  badges?: ProductBadge[]
}

export default function AIProducts() {
  const products: Product[] = [
    {
      name: 'Mali Up',
      tagline: 'Multi-Tenant SaaS Business Management App',
      description: 'A pocket ERP that unifies sales, invoicing, inventory, finance, customer management, and business analytics in one mobile app.',
      icon: FaBrain,
      color: 'blue',
      featured: true,
      badges: [
        { label: 'Platform', value: 'Flutter · Android-first' },
        { label: 'Client', value: 'Neuraltale Technology' },
        { label: 'Type', value: 'UI/UX + Flutter-ready handoff' }
      ],
      features: [
        { icon: FaRobot, text: 'Multi-Tenant Operations for Multiple Businesses' },
        { icon: FaChartLine, text: 'Sales, Invoicing, Inventory, Finance, CRM, Analytics' }
      ],
      cta: 'Explore Mali Up',
      link: 'https://maliup.neuraltale.com'
    },
    {
      name: 'Neurashop',
      tagline: 'AI E-commerce Platform',
      description: 'Experience intelligent online shopping with AI-powered product recommendations and personalized shopping experiences.',
      icon: FaShoppingCart,
      color: 'green',
      badges: [
        { label: 'Platform', value: 'Web + Mobile-ready storefront' },
        { label: 'Client', value: 'Neuraltale Technology' },
        { label: 'Type', value: 'AI commerce + product discovery' }
      ],
      features: [
        { icon: FaUsers, text: 'Personalized Experience' },
        { icon: FaBrain, text: 'Smart Recommendations' },
        { icon: FaShoppingCart, text: '500+ Products' }
      ],
      cta: 'Shop Now',
      link: 'https://neurashop.neuraltale.com'
    }
  ]

  return (
    <section className="py-20 bg-[#002855] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm font-semibold mb-4 border border-teal-500/30">
            🤖 AI-Powered Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meet Our AI Products
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            NEURALTALE's cutting-edge AI platforms designed to revolutionize how you do business
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className={`${
                product.color === 'blue' 
                  ? 'bg-gradient-to-br from-[#00356f]/70 via-[#002855]/75 to-[#001f45]/85 border-amber-400/40 shadow-[0_22px_45px_-30px_rgba(255,193,7,0.9)]' 
                  : 'bg-teal-900/40 border-teal-500/30 shadow-[0_18px_40px_-30px_rgba(0,131,143,0.75)]'
              } border rounded-2xl p-5 sm:p-7 md:p-8 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                {product.featured ? (
                  <span className="mb-4 inline-flex items-center rounded-full border border-amber-300/40 bg-amber-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                    Featured Project
                  </span>
                ) : null}

                {/* Product Icon & Name */}
                <div className="mb-5 flex items-center space-x-3 sm:space-x-4">
                  <div className={`${
                    product.color === 'blue' ? 'bg-amber-500/20' : 'bg-teal-500/20'
                  } rounded-xl p-3 sm:p-4`}>
                    <product.icon className={`w-8 h-8 ${
                      product.color === 'blue' ? 'text-amber-400' : 'text-teal-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-white">{product.name}</h3>
                    <p className={`text-xs sm:text-sm font-medium tracking-wide ${
                      product.color === 'blue' ? 'text-amber-300' : 'text-teal-300'
                    }`}>{product.tagline}</p>
                  </div>
                </div>

                {product.badges?.length ? (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {product.badges.map((badge) => (
                      <span
                        key={badge.label}
                        className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-100"
                      >
                        <span className="uppercase tracking-[0.08em] text-slate-300">{badge.label}:</span>
                        <span className="text-white">{badge.value}</span>
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6 space-y-2.5 sm:space-y-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <feature.icon className={`w-5 h-5 ${
                        product.color === 'blue' ? 'text-amber-400' : 'text-teal-400'
                      }`} />
                      <span className="text-sm text-gray-300 sm:text-base">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={product.link}
                  target={product.link.startsWith('http') ? '_blank' : '_self'}
                  rel={product.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full ${
                      product.color === 'blue'
                        ? 'bg-amber-500 hover:bg-amber-600'
                        : 'bg-teal-600 hover:bg-teal-700'
                    } rounded-xl px-6 py-3 text-base font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg`}
                  >
                    {product.cta} →
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-teal-900/40 border border-teal-500/30 rounded-2xl p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Powered by NEURALTALE AI Technology
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our AI products combine machine learning, natural language processing, and advanced analytics 
            to deliver intelligent solutions that adapt to your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="px-4 py-2 bg-white/5 rounded-full">Machine Learning</span>
            <span className="px-4 py-2 bg-white/5 rounded-full">Natural Language Processing</span>
            <span className="px-4 py-2 bg-white/5 rounded-full">Predictive Analytics</span>
            <span className="px-4 py-2 bg-white/5 rounded-full">Computer Vision</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
