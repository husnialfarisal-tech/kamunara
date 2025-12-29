'use client' 
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import { Zap, ShieldCheck, Smartphone, Code, Layers, BarChart3 } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32 pb-24 md:pb-32 min-h-screen bg-neutral-950 overflow-hidden">
        
        {/* Elemen Dekorasi Background (Glow Effects) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />

        <div className="relative z-10">
          
          {/* Hero Section */}
          {/* 
             PERUBAHAN:
             - 'min-h-[85vh]' diganti menjadi 'min-h-screen'.
             - Ini membuat tinggi section menjadi 100% tinggi layar (penuh ke bawah).
             - '-mt-32' tetap ada agar background naik full ke atas (di bawah navbar).
          */}
          <section className="relative pb-24 md:pb-36 px-4 text-center overflow-hidden min-h-screen -mt-32">
            
            {/* Background Gambar tim.jpeg */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[url('/images/tim.jpeg')] bg-cover bg-center opacity-40" />
              <div className="absolute inset-0 bg-neutral-950/80" />
            </div>

            {/* 
               Container teks dengan 'pt-24' agar posisi teks tetap di tengah dan tidak tertutup navbar
               karena section ditarik naik (-mt-32).
            */}
            <div className="container mx-auto max-w-5xl relative z-10 pt-24">
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
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl font-bold text-white text-center mb-12"
              >
                Keunggulan Layanan
              </motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 px-4 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
             
            <div className="container mx-auto max-w-5xl">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl font-bold text-white text-center mb-4"
              >
                Teknologi Kami
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-stone-400 text-center mb-12 max-w-2xl mx-auto"
              >
                Menggunakan stack teknologi terbaru untuk memastikan produk Anda tangguh dan siap masa depan.
              </motion.p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Code,
                    title: 'Clean Code',
                    desc: 'Struktur kode yang rapi, mudah dikelola, dan mengikuti standar industri terbaik.'
                  },
                  {
                    icon: Layers,
                    title: 'Scalable Architecture',
                    desc: 'Sistem dirancang untuk tumbuh seiring bisnis Anda tanpa perlu rebuild total.'
                  },
                  {
                    icon: BarChart3,
                    title: 'Analytics Ready',
                    desc: 'Integrasi mudah dengan tools analitik untuk memantau performa bisnis secara real-time.'
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
                      boxShadow: '0 22px 45px -12px rgba(99, 102, 241, 0.55)',
                      transition: {
                        duration: 0.14,
                        ease: 'easeOut'
                      }
                    }}
                    className="group relative p-8 bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-indigo-500/30 text-center overflow-hidden rounded-2xl"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent blur-2xl scale-110" />
                    </div>
                    <item.icon className="w-12 h-12 text-indigo-400 mx-auto mb-6 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />
                    <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-150 group-hover:text-indigo-200">
                      {item.title}
                    </h3>
                    <p className="text-stone-400 transition-colors duration-150 group-hover:text-stone-100">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
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