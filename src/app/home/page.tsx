'use client' 
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import { Zap, ShieldCheck, Smartphone } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* 
         BACKGROUND UPDATE:
         - Diganti ke base color 'neutral-950' yang sangat elegan dan dalam.
         - Ditambahkan div 'absolute' untuk efek glow/aurora modern.
         - Konten utama dibungkus div 'relative z-10' agar tetap terbaca di atas background.
      */}
      <main className="relative pt-32 pb-24 md:pb-32 min-h-screen bg-neutral-950 overflow-hidden">
        
        {/* Elemen Dekorasi Background (Glow Effects) */}
        {/* Cahaya Amber hangat di kiri atas */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Cahaya Indigo/Deep Blue di kanan bawah untuk kontras elegan */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Gradient Overlay untuk tekstur halus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />

        {/* Wrapper Konten Utama (Z-Index agar di atas background) */}
        <div className="relative z-10">
          
          {/* Hero Section */}
          <section className="pb-16 md:pb-24 px-4 text-center">
            <div className="container mx-auto max-w-5xl">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Solusi Digital
                <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mt-2">
                  Terdepan
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto mb-12"
              >
                Kami membantu bisnis, instansi, dan organisasi mencapai transformasi digital yang efisien, aman, dan scalable.
              </motion.p>
            </div>
          </section>

          {/* Benefit Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Cepat & Responsif',
                  desc: 'Performa tinggi di semua device'
                },
                {
                  icon: ShieldCheck,
                  title: 'Aman & Terpercaya',
                  desc: 'Keamanan data berlapis & enkripsi'
                },
                {
                  icon: Smartphone,
                  title: 'Mobile First',
                  desc: 'Solusi web & aplikasi mobile modern'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{
                    y: -14,
                    scale: 1.045,
                    boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                    transition: {
                      duration: 0.14,
                      ease: 'easeOut'
                    }
                  }}
                  className="group relative p-8 bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 text-center overflow-hidden rounded-2xl"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                  </div>
                  <item.icon className="w-12 h-12 text-amber-400 mx-auto mb-6 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-150 group-hover:text-amber-200">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 transition-colors duration-150 group-hover:text-stone-100">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <CTA
            title="Siap Memulai Transformasi Digital?"
            description="Mari diskusikan solusi terbaik untuk bisnis Anda hari ini"
            buttonText="Hubungi Kami"
            href="/kontak"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}