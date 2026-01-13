'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import { ArrowLeft, CheckCircle2, BarChart3, Layers, ShieldCheck, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function PiposPage() {
  return (
    <>
      <Navbar />
      
      <main className="relative min-h-screen bg-white text-black overflow-hidden pt-32 pb-24">
        
        {/* --- Background Elements --- */}
        {/* 1. Grid Pattern Halus untuk kesan Arsitektural/Modern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        {/* 2. Soft Red Glow (Ambient Light) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          
          {/* Tombol Kembali */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <Link href="/home" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center group-hover:border-red-600 group-hover:text-red-600 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </div>
              <span className="text-sm font-medium tracking-widest uppercase text-neutral-500 group-hover:text-black transition-colors duration-300">
                Kembali ke Home
              </span>
            </Link>
          </motion.div>

          {/* --- Hero Section --- */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            
            {/* Kolom Kiri: Gambar Produk */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative"
            >
              {/* Decorative Circle Behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-100 to-white rounded-3xl transform rotate-3 scale-105 -z-10 border border-neutral-100" />
              
              {/* Main Card */}
              <div className="relative p-12 bg-white/80 backdrop-blur-xl border border-neutral-200/60 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] flex justify-center items-center overflow-hidden group">
                 {/* Subtle Shine Effect on Hover */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-10 pointer-events-none" />
                 
                 <Image 
                    src="/images/logo_pipos_copy.png" 
                    alt="Logo Pipos" 
                    width={300}
                    height={300}
                    className="w-full max-w-[280px] h-auto object-contain drop-shadow-2xl relative z-20 transform group-hover:scale-105 transition-transform duration-500"
                    priority
                 />
              </div>
            </motion.div>

            {/* Kolom Kanan: Konten Teks */}
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-4">
                 <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-wider border border-red-100 uppercase">
                    Enterprise Solution
                 </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold font-heading mb-6 text-black tracking-tight leading-[1.1]">
                PIPOS <span className="text-red-600">System</span>
              </h1>
              
              <p className="text-neutral-600 text-lg leading-relaxed mb-10 max-w-lg">
                Platform integrasi data presisi tinggi. Mengubah kompleksitas arus informasi organisasi Anda menjadi wawasan yang dapat ditindaklanjuti secara <i>real-time</i>.
              </p>
              
              <div className="space-y-5">
                {[
                  { text: 'Real-time Analytics Dashboard', desc: 'Pemantauan data langsung tanpa jeda.' },
                  { text: 'Secure Data Integration', desc: 'Enkripsi tingkat militer untuk keamanan total.' },
                  { text: 'Multi-platform Support', desc: 'Terintegrasi mulus dengan sistem yang ada.' }
                ].map((feature, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                       <CheckCircle2 className="w-4 h-4 text-red-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                        <h4 className="text-black font-semibold text-base">{feature.text}</h4>
                        <p className="text-neutral-500 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- Detail Fitur Section --- */}
          <section className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
            
            <div className="text-center pt-24 mb-16">
               <span className="text-red-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                 Keunggulan Utama
               </span>
               <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                 Teknologi di Balik Performa
               </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: BarChart3, title: "Analitik Mendalam", desc: "Visualisasi data kompleks menjadi grafik yang mudah dipahami untuk pengambilan keputusan strategis." },
                { icon: Layers, title: "Skalabilitas Tanpa Batas", desc: "Arsitektur cloud-native yang siap menangani lonjakan data seiring pertumbuhan bisnis Anda." },
                { icon: ShieldCheck, title: "Keamanan Berlapis", desc: "Protokol keamanan standar industri melindungi aset data Anda dari ancaman siber." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group p-8 rounded-3xl bg-white border border-neutral-100 hover:border-red-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.1)] transition-all duration-300 relative overflow-hidden"
                >
                   {/* Hover Gradient Background */}
                   <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <div className="relative z-10">
                       <div className="w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300 shadow-sm">
                          <item.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
                       </div>
                       
                       <h3 className="text-xl font-bold mb-3 text-black group-hover:text-red-700 transition-colors">{item.title}</h3>
                       <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-700 transition-colors">
                         {item.desc}
                       </p>
                   </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </main>
      
      <CTA title="Siap Mengoptimalkan Data?" description="Jadwalkan demo eksklusif dengan tim ahli kami." buttonText="Hubungi Sales" href="/kontak" />
      <Footer />
    </>
  )
}