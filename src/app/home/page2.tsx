'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'

export default function HomePage() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  // Efek parallax halus untuk gambar
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <>
      <Navbar />
      
      <main className="bg-neutral-950 min-h-screen text-white selection:bg-amber-500/30">
        
        {/* ========================================================
            1. HERO SECTION (Tampilan Layaknya Cover Majalah Vogue/Dior)
           ======================================================== */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* Background Image (Cinematic) */}
          <div className="absolute inset-0 z-0">
            {/* Ganti src dengan foto High Res tim atau kantor yang estetik */}
            <Image 
              src="/images/tim.jpeg" 
              alt="Kamunara Editorial"
              fill
              className="object-cover object-center opacity-60 grayscale hover:grayscale-0 transition-all duration-[2s] ease-in-out scale-105"
              priority
            />
            {/* Overlay Gradient Mewah */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          </div>

          {/* Hero Content - Minimalis Tengah */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-amber-400 text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-mono"
            >
              Est. 2024 — Digital Atelier
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mix-blend-overlay"
            >
              KAMUNARA
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-12"
            >
              <Link href="#collections">
                <button className="group border border-white/20 px-8 py-4 rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-500 ease-out">
                  <span className="text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-4">
                    Lihat Koleksi
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            <span className="text-[10px] tracking-widest text-white/50">SCROLL</span>
          </motion.div>
        </section>


        {/* ========================================================
            2. THE COLLECTIONS (Produk Layanan sebagai "Fashion Item")
           ======================================================== */}
        <section id="collections" className="py-32 px-4 md:px-12 bg-neutral-950" ref={targetRef}>
          
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white mb-4">
              THE <span className="font-serif italic text-amber-500">COLLECTIONS</span>
            </h2>
            <div className="w-12 h-[1px] bg-amber-500 mx-auto" />
          </div>

          {/* Grid Layout ala Gucci/Chanel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto">

            {/* CARD 1: WEB DEVELOPMENT (Big & Bold) */}
            <Link href="/layanan/web-development" className="group relative h-[600px] md:h-[800px] w-full overflow-hidden block">
              <div className="absolute inset-0 bg-neutral-800">
                {/* Image Placeholder - Ganti dengan Screenshot Website Keren / Abstract Tech */}
                <motion.div style={{ y }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
                <span className="text-amber-400 text-xs tracking-[0.3em] mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  DIGITAL CRAFTSMANSHIP
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  WEB <br/> DEVELOPMENT
                </h3>
                <div className="h-[1px] w-0 group-hover:w-24 bg-white transition-all duration-700 delay-100 mb-6" />
                <span className="text-sm underline decoration-amber-500 underline-offset-8 text-neutral-300 group-hover:text-white transition-colors">
                  Selengkapnya
                </span>
              </div>
            </Link>

            {/* CARD 2: MOBILE APPS (Big & Bold) */}
            <Link href="/layanan/mobile-apps" className="group relative h-[600px] md:h-[800px] w-full overflow-hidden block md:mt-24">
              <div className="absolute inset-0 bg-neutral-800">
                 {/* Image Placeholder */}
                <motion.div style={{ y }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
                <span className="text-amber-400 text-xs tracking-[0.3em] mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  MOBILITY & PRESTIGE
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  MOBILE <br/> APPLICATIONS
                </h3>
                <div className="h-[1px] w-0 group-hover:w-24 bg-white transition-all duration-700 delay-100 mb-6" />
                <span className="text-sm underline decoration-amber-500 underline-offset-8 text-neutral-300 group-hover:text-white transition-colors">
                  Selengkapnya
                </span>
              </div>
            </Link>

          </div>
        </section>


        {/* ========================================================
            3. EDITORIAL SECTION (Filosofi Brand - Minimalist Text)
           ======================================================== */}
        <section className="py-32 bg-neutral-900 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            
            <ZapIconDecor /> {/* Icon dekorasi kecil */}

            <h2 className="text-3xl md:text-5xl leading-tight font-serif italic text-white/90 mb-8">
              "Teknologi bukan sekadar kode. <br/> Ini adalah seni merancang masa depan."
            </h2>
            
            <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              Seperti sebuah rumah mode merancang busana *haute couture*, Kamunara merancang arsitektur digital yang presisi, eksklusif, dan dirancang khusus untuk skala bisnis Anda.
            </p>

            <Link href="/tentang">
              <button className="text-white border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors uppercase tracking-widest text-xs">
                Baca Filosofi Kami
              </button>
            </Link>

          </div>
        </section>

        {/* ========================================================
            4. VISUAL BREAK (Banner Panjang)
           ======================================================== */}
        <div className="relative h-[400px] w-full overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-30" />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10vw] font-bold text-white/5 select-none pointer-events-none">
                  KAMUNARA
                </span>
             </div>
        </div>

        <CTA_Luxury />

      </main>
      <Footer />
    </>
  )
}

// --- Komponen Kecil untuk Estetika ---

function ZapIconDecor() {
  return (
    <div className="flex justify-center mb-8">
      <div className="w-px h-8 bg-amber-500/50"></div>
    </div>
  )
}

function CTA_Luxury() {
  return (
    <section className="py-32 px-4 text-center bg-neutral-950">
       <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
         SIAP BERKOLABORASI?
       </h2>
       <p className="text-neutral-400 mb-10 text-sm tracking-widest uppercase">
         Mari ciptakan mahakarya digital anda
       </p>
       <Link href="/kontak">
         <button className="bg-white text-black px-12 py-4 rounded-none hover:bg-amber-500 hover:text-white transition-colors duration-300 font-bold uppercase tracking-widest text-sm">
           Hubungi Kami
         </button>
       </Link>
    </section>
  )
}