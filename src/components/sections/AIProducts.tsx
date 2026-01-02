'use client'

import { motion } from 'framer-motion'
import { FaBrain, FaShoppingCart, FaRobot, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa'

export default function AIProducts() {
  const products = [
    {
      name: 'Neuraflow',
      tagline: 'AI Business Intelligence',
      description: 'Transform your business operations with AI-powered workflow automation, predictive analytics, and intelligent decision support.',
      icon: FaBrain,
      color: 'blue',
      features: [
        { icon: FaRobot, text: 'Automated Workflows' },
        { icon: FaChartLine, text: 'Predictive Analytics' },
        { icon: FaLightbulb, text: 'Smart Insights' }
      ],
      cta: 'Learn More',
      link: '/services#ai'
    },
    {
      name: 'Neurashop',
      tagline: 'AI E-commerce Platform',
      description: 'Experience intelligent online shopping with AI-powered product recommendations and personalized shopping experiences.',
      icon: FaShoppingCart,
      color: 'green',
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
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
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
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-4 border border-purple-500/30">
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
              <div className={`bg-gradient-to-br ${
                product.color === 'blue' 
                  ? 'from-blue-900/40 to-blue-800/40 border-blue-500/30' 
                  : 'from-green-900/40 to-emerald-800/40 border-green-500/30'
              } border rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                {/* Product Icon & Name */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`${
                    product.color === 'blue' ? 'bg-blue-500/20' : 'bg-green-500/20'
                  } p-4 rounded-xl`}>
                    <product.icon className={`w-8 h-8 ${
                      product.color === 'blue' ? 'text-blue-400' : 'text-green-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{product.name}</h3>
                    <p className={`text-sm ${
                      product.color === 'blue' ? 'text-blue-300' : 'text-green-300'
                    }`}>{product.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <feature.icon className={`w-5 h-5 ${
                        product.color === 'blue' ? 'text-blue-400' : 'text-green-400'
                      }`} />
                      <span className="text-gray-300">{feature.text}</span>
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
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                    } text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
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
          className="text-center bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm"
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
