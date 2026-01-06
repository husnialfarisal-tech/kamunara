'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import { ArrowLeft, CheckCircle2, BookOpen, PieChart, Cloud } from 'lucide-react'
import Link from 'next/link'

export default function NoibookPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-neutral-950 text-white overflow-hidden pt-32 pb-20">
        
        {/* Background Glow - Nuansa Hijau/Emerald untuk pembukuan */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          
          {/* Tombol Kembali ke Home */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link href="/home" className="inline-flex items-center gap-3 text-stone-400 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Kembali ke Home</span>
            </Link>
          </motion.div>

          {/* Header Produk */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative p-10 border border-white/5 rounded-2xl bg-neutral-900/30 backdrop-blur-sm flex justify-center items-center"
            >
              {/* Gambar Logo NOIbook */}
              <img 
                src="/images/logo_NOIbook.png" 
                alt="Logo NOIbook" 
                className="w-full max-w-[250px] h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                NOIbook System
              </h1>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                Solusi manajemen pembukuan dan administrasi modern. NOIbook menyederhanakan pencatatan yang kompleks menjadi wawasan bisnis yang jelas dan terstruktur.
              </p>
              
              <div className="space-y-4">
                {['Automated Bookkeeping', 'Cloud Storage', 'Smart Reporting'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                    <span className="text-stone-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Detail Fitur */}
          <section className="border-t border-white/10 pt-16">
            <div className="text-center mb-16">
               <span className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-2 block">Fitur Utama</span>
               <h2 className="text-3xl font-bold">Kelola Lebih Baik</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: BookOpen, title: "Pencatatan Rapi", desc: "Sistem pencatatan yang intuitif dan mudah ditelusuri kembali." },
                { icon: PieChart, title: "Visualisasi Data", desc: "Grafik keuangan yang real-time untuk pengambilan keputusan." },
                { icon: Cloud, title: "Akses Dimana Saja", desc: "Data tersimpan aman di cloud dan bisa diakses dari perangkat apapun." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-emerald-500/20 transition-all"
                >
                   <item.icon className="w-10 h-10 text-emerald-500 mb-4" />
                   <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                   <p className="text-stone-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <CTA title="Coba NOIbook Sekarang" description="Sederhanakan administrasi bisnis Anda hari ini." buttonText="Hubungi Kami" href="/kontak" />
      <Footer />
    </>
  )
}