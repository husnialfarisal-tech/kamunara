'use client'

import { motion } from 'framer-motion'
import { Rocket, Sparkles, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      {/* Hero Section - Landing (tanpa nav) */}
      <section className="pt-16 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">Digital Solutions Expert</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Transformasi
                <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Digital Anda
                </span>
              </h1>

              <p className="text-xl text-stone-300 leading-relaxed">
                Kamunara adalah perusahaan outsource yang berfokus pada penyedia layanan pembuatan dan pengembangan software digital baik berbasis website maupun mobile. Holding pada perusahaan DS, kami hadir sebagai mitra terpercaya untuk solusi teknologi Anda.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">

                {/*  CTA 1 : MELUNCUR
                    Fungsi:
                    - Tombol utama (primary CTA)
                    - Mengarahkan user dari landing (/) ke halaman Home (/home)
                */}
                <Link href="/home">
                  <motion.button
                    whileHover={{ scale: 1.05 }}   // animasi saat hover
                    whileTap={{ scale: 0.95 }}     // animasi saat klik
                    className="
                      bg-gradient-to-r from-amber-400 to-amber-600
                      text-stone-900
                      font-bold
                      px-8 py-4
                      rounded-lg
                      hover:from-amber-500 hover:to-amber-700
                      transition-all
                      flex items-center justify-center gap-2
                    "
                  >
                    Meluncur...
                    <Rocket className="w-5 h-5" />
                  </motion.button>
                </Link>

                {/* CTA 2 : PELAJARI LEBIH LANJUT
                    Fungsi:
                    - Secondary CTA
                    - Mengarahkan user ke halaman Tentang (/tentang)
                */}
                <Link href="/tentang">
                  <motion.button
                    whileHover={{ scale: 1.05 }}   // animasi saat hover
                    whileTap={{ scale: 0.95 }}     // animasi saat klik
                    className="
                      border-2 border-amber-500
                      text-amber-400
                      font-bold
                      px-8 py-4
                      rounded-lg
                      hover:bg-amber-500/10
                      transition-all
                      flex items-center justify-center gap-2
                    "
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>

              </div>
              {/*  Stop disini */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                <motion.div
                  animate={{
                    rotateY: 360,
                    rotateX: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl blur-3xl"
                />
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-4 bg-gradient-to-br from-stone-700 to-stone-800 rounded-3xl border border-amber-500/30 flex items-center justify-center overflow-hidden"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-center"
                  >
                    {/* Logo Kamunara - pengganti Code2 */}
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <Image
                        src="/images/logo_kamunara.png"
                        alt="Logo Kamunara"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                          className="w-3 h-3 bg-amber-400 rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                          className="w-3 h-3 bg-amber-500 rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                          className="w-3 h-3 bg-amber-600 rounded-full"
                        />
                      </div>
                      <p className="text-amber-400 font-medium">KAMUNARA</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}