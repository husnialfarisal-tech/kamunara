'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  const [particles, setParticles] = useState<{ x: number; y: number; duration: number; delay: number }[]>([])

  useEffect(() => {
    const generatedParticles = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-stone-900 to-neutral-950 overflow-hidden relative selection:bg-amber-500/30">
     
      {/* AMBIENT BACKGROUND PARTICLES (KUNANG-KUNANG) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-amber-400/40 rounded-full blur-[1px]"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* BACKGROUND GLOW ACCENT (Pojok Kanan Bawah) */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <section className="pt-20 pb-24 px-4 relative z-10 flex items-center min-h-[calc(100vh-80px)]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ───────────────────── TEXT AREA ───────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="space-y-8 relative z-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 backdrop-blur-md rounded-full px-5 py-2 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span className="text-amber-400 text-sm font-bold tracking-wide">
                  Digital Solutions Expert
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                Transformasi
                <span className="block bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                  Digital Anda
                </span>
              </h1>

              <p className="text-xl text-stone-400 leading-relaxed max-w-xl border-l-4 border-amber-500/30 pl-6">
                Kamunara adalah perusahaan outsource yang berfokus pada pengembangan
                software website & mobile. Kami hadir sebagai mitra teknologi yang
                solid, modern, dan berkelanjutan.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link href="/home">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(245, 158, 11, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      bg-gradient-to-r from-amber-500 to-amber-700
                      text-white font-bold
                      px-8 py-4 rounded-xl
                      flex items-center gap-3
                      shadow-lg shadow-amber-900/40
                      transition-all border border-amber-400/20
                    "
                  >
                    Meluncur
                    <Rocket className="w-5 h-5" />
                  </motion.button>
                </Link>

                <Link href="/tentang">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      border border-stone-600 hover:border-amber-500
                      text-stone-300 hover:text-amber-400 font-bold
                      px-8 py-4 rounded-xl
                      flex items-center gap-3
                      transition-colors backdrop-blur-sm
                    "
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* ───────────────────── NEW: "REACTOR CORE" LOGO ANIMATION ───────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative flex items-center justify-center h-[500px] w-full perspective-[1000px]"
            >
              
              {/* 1. ATMOSPHERE GLOW (Behind) */}
              <div className="absolute w-[300px] h-[300px] bg-amber-500/20 rounded-full blur-[80px] animate-pulse-slow" />

              {/* 2. THE MAIN ROTATING STRUCTURE */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center"
              >
                
                {/* Ring 1: Outer Dashed Orbit (Thin & Techy) */}
                <div className="absolute inset-0 border border-dashed border-stone-700 rounded-full opacity-40" />
                
                {/* Ring 2: The "Comet" Ring (Rotating Gold Segment) */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-transparent border-t-amber-500/60 border-l-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                />

                {/* Ring 3: Glass Ring (Thick) */}
                <div className="absolute inset-16 border-[1px] border-white/10 rounded-full bg-white/[0.02] backdrop-blur-[1px]" />
                
                {/* Ring 4: Inner Active Energy Ring (Fast) */}
                <motion.div 
                   animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                   transition={{ 
                     rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                     scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                   }}
                   className="absolute inset-24 border-2 border-amber-500/30 border-b-amber-400 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                />

                {/* Orbiting Particles (Electrons) */}
                {[0, 120, 240].map((deg, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-full h-full"
                    style={{ rotate: deg }}
                    animate={{ rotate: deg + 360 }}
                    transition={{ duration: 8 + i, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3 h-3 bg-amber-200 rounded-full shadow-[0_0_10px_#fbbf24]" />
                  </motion.div>
                ))}

              </motion.div>

              {/* 3. THE CORE (Logo Container) - COUNTER ROTATION (Agar logo tetap lurus) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 {/* Hexagon/Circle Tech Background behind logo */}
                 <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-stone-900/80 rounded-full border border-amber-500/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.2)] z-10">
                    
                    {/* Pulsing Core Effect */}
                    <motion.div 
                      animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-amber-500/10 rounded-full"
                    />

                    {/* THE LOGO - UPDATED TO BE ROUND */}
                    <motion.div
                      className="relative w-20 h-20 md:w-24 md:h-24 z-20 rounded-full overflow-hidden flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src="/images/Kamunara_Icon_Logo.png"
                        alt="Kamunara Core Logo"
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        priority
                      />
                      
                      {/* Logo Shimmer/Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent skew-x-12"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 2, ease: "easeInOut" }}
                      />
                    </motion.div>
                 </div>
              </div>

              {/* 4. BRAND TEXT BELOW CORE */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 md:bottom-20 z-0"
              >
                 <div className="flex flex-col items-center gap-2">
                    <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500/60 font-mono">
                      KAMUNARA
                    </span>
                 </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>
    </main>
  )
}