import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">

      {/* Main Content - Critical path, loads immediately */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo - Render immediately */}
          <div className="flex justify-center mb-8">
            <Logo size="lg" showText={true} layout="vertical" />
          </div>

          {/* Main Heading - Static HTML for instant LCP */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">Building Tomorrow's</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Solutions
            </span>
            <span className="block text-gray-200">Today</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            NEURALTALE delivers AI-powered solutions through <span className="text-blue-400 font-semibold">Neuraflow</span> and 
            <span className="text-green-400 font-semibold"> Neurashop</span> to transform businesses across Africa.
          </p>

          {/* CTA Buttons - Critical, load immediately */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <Link href="/services">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Our Services
              </button>
            </Link>
            <a href="https://eshop.neuraltale.com" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl text-lg font-semibold hover:border-green-300 hover:text-green-300 hover:bg-white/10 transition-all duration-300">
               🛒 Neurashop
              </button>
            </a>
          </div>


        </div>
      </div>
    </section>
  )
}
