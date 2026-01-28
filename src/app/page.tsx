'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  const [particles, setParticles] = useState<{ x: number; y: number; duration: number; delay: number; size: number }[]>([])

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 15, // Lebih lambat, lebih "berat"
      delay: Math.random() * 5,
      size: Math.random() > 0.5 ? 4 : 2, // Ukuran bervariasi
    }))
    setParticles(generatedParticles)
  }, [])

  // Palette yang digunakan:
  // #f3f7e6 (Pale Sage), #f7f9ed (Light Green), #dbeadd (Mint), #b5d5d0 (Muted Teal), #c4dcd3 (Sage)

  return (
    <main className="min-h-screen bg-white overflow-hidden relative selection:bg-[#dbeadd]/50 selection:text-[#5d7063]">
      
      {/* AMBIENT BACKGROUND PARTICLES (Soft Floating Particles) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            // Menggunakan warna palette untuk partikel: Sage atau Mint
            className={`absolute rounded-full blur-[0.5px] ${i % 2 === 0 ? 'bg-[#c4dcd3]/40' : 'bg-[#dbeadd]/40'}`}
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px` }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* BACKGROUND GLOW ACCENT (Soft Teal & Sage) */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#b5d5d0]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-[#f7f9ed]/30 rounded-full blur-[80px] pointer-events-none" />

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
                // Badge menggunakan warna #f7f9ed (Light Green) dengan border Sage
                className="inline-flex items-center gap-2 bg-[#f7f9ed] border border-[#c4dcd3] backdrop-blur-md rounded-full px-5 py-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#b5d5d0] animate-pulse" />
                <span className="text-[#5d7063] text-sm tracking-wide font-bold"
                style={{
                fontFamily: 'var(--font-brand)',
                fontWeight: 400
                }}
                >
                  KAMUNARA
                </span>
              </motion.div>

              <h1 className="font-heading text-5xl md:text-7xl font-bold text-black leading-tight tracking-tight">
                Transformasi
                <span className="block bg-gradient-to-r from-[#5d7063] via-[#7d9184] to-[#b5d5d0] bg-clip-text text-transparent">
                  Digital Anda
                </span>
              </h1>

              <p className="text-xl text-zinc-600 leading-relaxed max-w-xl border-l-4 border-[#b5d5d0] pl-6">
                Kamunara adalah perusahaan outsourcing yang bergerak sebagai penyedia layanan Software yang
                berspesialisasi pada pengembangan maupun penyedia layanan digital, Website & Aplikasi
                Mobile.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link href="/home">
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -5px rgba(20, 156, 136, 0.4)" }}
                    whileTap={{ scale: 0.97 }}
                    // UPDATE: Warna tombol "Meluncur" sekarang Deep Teal solid (#149c88)
                    className="
                      bg-[#149c88] hover:bg-[#118a78]
                      text-white font-bold tracking-wide
                      px-8 py-4 rounded-xl
                      flex items-center gap-3
                      sfhadow-xl shadow-[#149c88]/20
                      transition-all border border-[#149c88]
                    "
                  >
                    Meluncur
                    {/* Icon roket sedikit diputar agar dinamis */}
                    <Rocket className="w-5 h-5 fill-white/20" />
                  </motion.button>
                </Link>

                <Link href="/tentang">
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(45, 59, 52, 0.05)" }}
                    whileTap={{ scale: 0.97 }}
                    // UPDATE: Warna tombol "Pelajari" border gelap (#2d3b34) agar kontrasnya tajam
                    className="
                      border-2 border-[#2d3b34]/80 hover:border-[#2d3b34]
                      text-[#2d3b34] font-bold tracking-wide
                      px-8 py-4 rounded-xl
                      flex items-center gap-3
                      transition-colors bg-transparent
                    "
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-5 h-5 stroke-[3px]" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* ───────────────────── NEW: "ABSTRACT FLOATING LAYERS" ANIMATION ───────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative flex items-center justify-center h-[500px] w-full perspective-[1200px]"
            >
              
              {/* Layer 1: Background Soft Pale Sage Rounded Square (Bottom) */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 60, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#f3f7e6] rounded-[3rem] shadow-2xl z-10"
              />
              
              {/* Layer 2: Floating Mint Circle (Middle) */}
              <motion.div
                animate={{ rotate: -360, y: [0, -20, 0] }}
                transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] bg-[#dbeadd]/40 backdrop-blur-sm border-2 border-[#b5d5d0]/30 rounded-full z-20 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(181,213,208,0.4)]"
              />

              {/* Layer 3: Tilted Sage Green Rounded Rect (Orbiting) */}
              <motion.div
                animate={{ rotate: 360, scale: [0.8, 0.95, 0.8] }}
                transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] bg-gradient-to-br from-[#f7f9ed] to-[#c4dcd3] rounded-3xl z-30 opacity-80 border border-white/50 shadow-lg"
              />

              {/* Orbiting Particles (Small colored dots) */}
              {[0, 90, 180, 270].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ rotate: deg }}
                  animate={{ rotate: deg + 360 }}
                  transition={{ duration: 15 + (i * 2), repeat: Infinity, ease: "linear" }}
                >
                  {/* Partikel Palette */}
                  <div 
                    className={`
                      absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-md
                      ${i === 0 ? 'bg-[#b5d5d0]' : i === 1 ? 'bg-[#f3f7e6] border border-[#5d7063]' : 'bg-[#c4dcd3]'}
                    `}
                  />
                </motion.div>
              ))}

              {/* THE CORE (Logo Container) - White Clean Glass */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
                 {/* Card Container */}
                <motion.div
                    animate={{ y: [0, -5, 0] }} // Mild breathing effect
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/90 backdrop-blur-md rounded-[2rem] p-6 md:p-8 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-white/60 flex items-center justify-center relative overflow-hidden"
                >
                    {/* Decorative shine overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#f7f9ed]/20 to-transparent skew-x-12 pointer-events-none" />

                    {/* THE LOGO */}
                    <motion.div
                      className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
                      whileHover={{ rotate: [0, -5, 5, 0] }} // Wiggle effect on hover
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src="/images/Kamunara_Icon_Logo.png"
                        alt="Kamunara Core Logo"
                        fill
                        className="object-contain drop-shadow-md"
                        priority
                      />
                    </motion.div>
                </motion.div>
              </div>

              {/* 4. BRAND TEXT (Floating at bottom) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-0 z-30"
              >
                <div className="flex flex-col items-center gap-2">
                   {/* Connecting Line */}
                  <motion.div 
                    animate={{ scaleY: [0, 1, 0], opacity: [0, 0.8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="h-12 w-[1px] bg-[#c4dcd3]/60 origin-top"
                  />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#5d7063] font-bold"
                    style={{
                    fontFamily: 'var(--font-brand)',
                    fontWeight: 400
                    }}
                      >
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