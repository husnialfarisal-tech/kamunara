'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Rocket, Sparkles, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  /* ───────── MOUSE PARALLAX SETUP ───────── */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 })

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-16, 16])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden">
      <section className="pt-20 pb-24 px-4">
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
                      border-2 border-amber-500
                      text-amber-400 font-bold
                      px-8 py-4 rounded-xl
                      hover:bg-amber-500/10
                      flex items-center gap-2
                    "
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* ───────────────────── INTERACTIVE 3D LOGO ───────────────────── */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                mouseX.set(0)
                mouseY.set(0)
              }}
              className="relative perspective-[1800px]"
            >
              <div className="relative h-[420px] lg:h-[560px] flex items-center justify-center">

                {/* Ambient glow */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                  className="
                    absolute inset-0
                    bg-gradient-radial from-stone-300/20 via-stone-500/10 to-transparent
                    blur-[110px]
                  "
                />

                {/* 3D Object */}
                <motion.div
                  style={{ rotateX, rotateY }}
                  className="relative preserve-3d"
                >
                  {/* Depth shadow */}
                  <div className="absolute inset-0 translate-x-[18px] translate-y-[22px] opacity-40 blur-xl">
                    <Image
                      src="/images/logo_kamunara.png"
                      alt=""
                      fill
                      className="object-contain grayscale"
                    />
                  </div>

                  {/* Mid depth */}
                  <div className="absolute inset-0 translate-x-[9px] translate-y-[11px] opacity-65 blur-[2px]">
                    <Image
                      src="/images/logo_kamunara.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Main logo */}
                  <motion.div
                    animate={{ rotateZ: [0.6, -0.6, 0.6] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-[260px] h-[260px] lg:w-[340px] lg:h-[340px]"
                  >
                    <Image
                      src="/images/logo_kamunara.png"
                      alt="Logo Kamunara"
                      fill
                      priority
                      className="
                        object-contain
                        drop-shadow-[0_30px_45px_rgba(0,0,0,0.65)]
                      "
                    />

                    {/* Specular highlight */}
                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-tr
                        from-white/12 via-white/6 to-transparent
                        mix-blend-screen
                        rounded-full
                      "
                    />
                  </motion.div>
                </motion.div>

                {/* Brand name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-6 text-center"
                >
                  <p className="text-stone-300 font-semibold tracking-[0.35em] text-lg">
                    KAMUNARA
                  </p>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
