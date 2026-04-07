'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const PARTICLES = [
  { width: 6.8, height: 3.3, top: '39.6%', left: '60.4%', duration: 7.2, delay: 0.2 },
  { width: 5.4, height: 2.6, top: '9.0%', left: '85.6%', duration: 5.9, delay: 0.6 },
  { width: 2.9, height: 6.7, top: '60.6%', left: '83.7%', duration: 6.8, delay: 1.1 },
  { width: 6.0, height: 3.1, top: '70.9%', left: '31.1%', duration: 7.6, delay: 0.4 },
  { width: 6.7, height: 4.1, top: '96.8%', left: '84.3%', duration: 5.7, delay: 1.4 },
  { width: 6.9, height: 6.8, top: '31.1%', left: '97.9%', duration: 6.3, delay: 0.8 },
  { width: 3.5, height: 3.5, top: '65.0%', left: '40.2%', duration: 4.9, delay: 0.5 },
  { width: 4.8, height: 7.2, top: '86.3%', left: '77.2%', duration: 7.0, delay: 1.0 },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#001529]">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-amber-500/20 rounded-full blur-sm"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              top: particle.top,
              left: particle.left,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-gray-300">
              Pioneering Tech Solutions in Africa
            </span>
          </motion.div>

          {/* Logo with delayed entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Logo size="xl" showText={true} layout="vertical" textClassName="text-amber-500" />
          </motion.div>

          {/* Main Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-tight"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Tomorrow's</span>
            <br />
            <span className="relative inline-block">
              Tech Solutions
              <motion.svg
                className="absolute w-full h-3 -bottom-2 left-0 text-amber-500 opacity-60"
                viewBox="0 0 200 9"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <path d="M2.00025 6.99997C2.00025 6.99997 101 -0.5 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </motion.svg>
            </span>
            {" "}Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Empowering businesses with <span className="text-amber-400 font-semibold">Neuraflow</span> AI integration and <span className="text-cyan-400 font-semibold">Neurashop</span> enterprise commerce.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <Link href="/services" className="group">
              <button className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 group-hover:scale-105">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <a href="https://neurashop.neuraltale.com" target="_blank" rel="noopener noreferrer" className="group">
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:border-amber-500/50 hover:text-amber-400 group-hover:scale-105">
                Visit Neurashop
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-amber-500"
          />
        </div>
      </motion.div>
    </section>
  )
}
