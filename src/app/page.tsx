'use client'

import { motion } from 'framer-motion'
import { Rocket, Sparkles, ArrowRight, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden relative selection:bg-amber-500/30">
      
      {/* AMBIENT BACKGROUND PARTICLES (Diperbaiki agar tanpa Error) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-amber-200 rounded-full"
            // Memperbaiki posisi awal untuk mencegah hydration mismatch
            initial={{ 
              x: `${Math.random() * 100}vw`,
              y: '100vh', 
              opacity: 0,
            }}
            animate={{
              y: '-20vh',
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <section className="pt-20 pb-24 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ───────────────────── TEXT AREA ───────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2"
                /* BACKDROP BLUR DIHAPUS DI SINI */
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">
                  Digital Solutions Expert
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Transformasi
                <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Digital Anda
                </span>
              </h1>

              <p className="text-xl text-stone-300 leading-relaxed max-w-xl">
                Kamunara adalah perusahaan outsource yang berfokus pada pengembangan
                software website & mobile. Kami hadir sebagai mitra teknologi yang
                solid, modern, dan berkelanjutan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/home">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      bg-gradient-to-r from-amber-400 to-amber-600
                      text-stone-900 font-bold
                      px-8 py-4 rounded-xl
                      flex items-center gap-2
                      shadow-lg shadow-amber-600/30
                      hover:shadow-amber-600/50 transition-shadow
                    "
                  >
                    Meluncur
                    <Rocket className="w-5 h-5" />
                  </motion.button>
                </Link>

                <Link href="/tentang">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      border-2 border-amber-500/50 hover:border-amber-500
                      text-amber-400 font-bold
                      px-8 py-4 rounded-xl
                      hover:bg-amber-500/10
                      flex items-center gap-2
                      /* BACKDROP BLUR DIHAPUS DI SINI */
                    "
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* ───────────────────── 3D GYRO-CORE ANIMATION (NO BLUR) ───────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative perspective-[2000px] flex items-center justify-center"
            >
              <div className="relative h-[420px] lg:h-[560px] w-full flex items-center justify-center">

                {/* 2. THE 3D GYROSCOPE CONTAINER */}
                <motion.div
                  animate={{
                    rotateX: [15, 20, 15],
                    rotateY: [-15, -10, -15],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] flex items-center justify-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  
                  {/* --- RING 1: OUTER DASHED RING --- */}
                  <motion.div
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border-2 border-dashed border-amber-100/80 rounded-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Orbital Points */}
                    {[0, 90, 180, 270].map((deg) => (
                      <div
                        key={deg}
                        className="absolute top-1/2 left-1/2 w-3 h-3 bg-amber-50 rounded-full border border-amber-200"
                        style={{
                          transform: `rotateY(${deg}deg) translateZ(220px)`, 
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* --- RING 2: MIDDLE TECH RING (BLUR DIHAPUS & BORDER DIPERJELAS) --- */}
                  <motion.div
                    animate={{ rotateX: [0, -360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    /* Perubahan: backdrop-blur dihapus, border diubah jadi putih solid & lebih tebal */
                    className="absolute inset-[10%] border-2 border-white rounded-full bg-white/5"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Tech details */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-amber-200" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-2 bg-amber-200" />
                  </motion.div>

                  {/* --- RING 3: INNER FAST RING --- */}
                  <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-[25%] border border-dotted border-white rounded-full"
                  />

                  {/* --- THE CORE (Inti Energi) --- */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="relative w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-white to-amber-100 rounded-full z-10 flex items-center justify-center border-2 border-white"
                    style={{ 
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Icon di tengah Core */}
                    <Cpu className="text-amber-600 w-12 h-12 lg:w-16 lg:h-16 relative z-20" />
                  </motion.div>

                  {/* --- FLOATING DATA BITS --- */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        translateY: [0, -30, 0],
                        translateX: [0, (i % 2 === 0 ? 10 : -10), 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: 'easeInOut'
                      }}
                      className="absolute w-1.5 h-1.5 bg-white rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 60}deg) translate(100px) rotate(-${i * 60}deg)`,
                      }}
                    />
                  ))}

                </motion.div>

                {/* BRAND LABEL BELOW */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute bottom-4 lg:bottom-10 text-center z-20"
                >
                  <p className="text-stone-300 font-bold tracking-[0.5em] text-sm lg:text-base">
                    KAMUNARA
                  </p>
                  {/* Animated Underline */}
                  <div className="h-[1px] w-full mx-auto mt-2 overflow-hidden">
                    <motion.div 
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="h-full w-[50%] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                    />
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  )
}