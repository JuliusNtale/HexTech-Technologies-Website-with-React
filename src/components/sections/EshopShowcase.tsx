'use client'

import { motion } from 'framer-motion'
import { FaShoppingCart, FaCreditCard, FaTruck, FaShieldAlt, FaLaptop, FaNetworkWired, FaMobile, FaServer } from 'react-icons/fa'

export default function EshopShowcase() {

  const categories = [
    {
      icon: FaNetworkWired,
      name: 'Networking',
      items: 'Routers, Switches, Access Points'
    },
    {
      icon: FaLaptop,
      name: 'Computers',
      items: 'Laptops, Desktops, Workstations'
    },
    {
      icon: FaMobile,
      name: 'Mobile Devices',
      items: 'Smartphones, Tablets, Accessories'
    },
    {
      icon: FaServer,
      name: 'Enterprise',
      items: 'Servers, Storage, Data Centers'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            🛒 AI-Powered E-commerce
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Neurashop - Smart Shopping 24/7
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience our AI-powered e-commerce platform. Browse 500+ technology products with intelligent recommendations, 
            secure payments, and fast delivery across Tanzania.
          </p>
        </motion.div>

       
        {/* Product Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.a
                key={category.name}
                href="https://eshop.neuraltale.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:from-green-100 group-hover:to-emerald-100">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white p-4 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                      <category.icon className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.items}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Powered by <strong className="text-green-600">Neurashop</strong> - NEURALTALE's AI E-commerce Platform
            </p>
            <a href="https://eshop.neuraltale.com" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Visit Neurashop Now
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '500+', label: 'Products Available' },
            { number: '24/7', label: 'Online Shopping' },
            { number: '100%', label: 'Secure Checkout' },
            { number: 'All', label: 'Tanzania Delivery' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
