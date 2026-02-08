import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#002855] via-[#001935] to-[#002855]">

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
            <span className="block bg-gradient-to-r from-[#FFC107] via-[#00838F] to-[#F5E6D3] bg-clip-text text-transparent">
              Tech Solutions
            </span>
            <span className="block text-gray-200">Today</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            NEURALTALE delivers AI-powered solutions through <span className="text-[#FFC107] font-semibold">Neuraflow</span> and 
            <span className="text-[#00838F] font-semibold"> Neurashop</span> to transform businesses across Africa.
          </p>

          {/* CTA Buttons - Critical, load immediately */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <Link href="/services">
              <button className="bg-gradient-to-r from-[#FFC107] to-[#00838F] text-[#002855] px-8 py-4 rounded-xl text-lg font-semibold hover:from-[#FFD54F] hover:to-[#00ACC1] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Our Services
              </button>
            </Link>
            <a href="https://neurashop.neuraltale.com" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-[#00838F] text-[#00838F] px-8 py-4 rounded-xl text-lg font-semibold hover:border-[#FFC107] hover:text-[#FFC107] hover:bg-white/10 transition-all duration-300">
               🛒 Neurashop
              </button>
            </a>
          </div>


        </div>
      </div>
    </section>
  )
}
