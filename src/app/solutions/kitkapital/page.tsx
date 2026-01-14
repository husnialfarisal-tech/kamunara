'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import { ArrowLeft, CheckCircle2, TrendingUp, Briefcase, Globe, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function KitKapitalPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-neutral-950 text-white overflow-hidden pt-32 pb-20">
        
        {/* ============================================================ */}
        {/* START: COMING SOON OVERLAY (WHITE, BLACK, CYAN THEME)        */}
        {/* ============================================================ */}
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="bg-white max-w-lg w-full rounded-3xl p-8 md:p-12 text-center shadow-[0_0_60px_-15px_rgba(8,145,178,0.3)] relative overflow-hidden"
            >
                {/* Background Pattern Hiasan */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-tr-full -ml-8 -mb-8"></div>

                <div className="relative z-10 flex flex-col items-center">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                        <Rocket className="w-8 h-8 text-cyan-600" />
                    </div>

                    {/* Main Title */}
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-2 tracking-tight">
                        COMING <span className="text-cyan-600">SOON</span>
                    </h2>

                    <div className="h-1 w-20 bg-black rounded-full mb-6"></div>

                    {/* Description */}
                    <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                        <b>KITkapital</b> sedang dalam tahap pengembangan akhir. Kami menyiapkan platform investasi dan manajemen aset terbaik untuk Anda.
                    </p>

                    {/* Action Button */}
                    <Link 
                        href="/home" 
                        className="group flex items-center gap-2 bg-black hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Kembali ke Beranda
                    </Link>
                </div>
            </motion.div>
        </div>
        {/* ============================================================ */}
        {/* END: COMING SOON OVERLAY                                     */}
        {/* ============================================================ */}

        {/* Background Glow - Nuansa Biru/Cyan untuk Capital/Finance */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* KONTEN ASLI (Blur & Disabled) */}
        <div className="container mx-auto px-4 relative z-10 max-w-5xl opacity-30 pointer-events-none grayscale">
          
          {/* Tombol Kembali ke Home */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 text-stone-400">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Kembali ke Home</span>
            </div>
          </div>

          {/* Header Produk */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative p-10 border border-white/5 rounded-2xl bg-neutral-900/30 flex justify-center items-center">
              {/* Gambar Logo KITkapital */}
              <img 
                src="/images/logo_KITkapital.png" 
                alt="Logo KITkapital" 
                className="w-full max-w-[250px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-normal font-heading mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                KITkapital
              </h1>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                Platform manajemen aset dan permodalan terintegrasi. KITkapital membantu Anda memantau pertumbuhan aset dan mengelola sumber daya finansial secara efisien.
              </p>
              
              <div className="space-y-4">
                {['Asset Management', 'Investment Tracking', 'Secure Vault'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-cyan-500 w-5 h-5" />
                    <span className="text-stone-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detail Fitur */}
          <section className="border-t border-white/10 pt-16">
            <div className="text-center mb-16">
               <span className="text-cyan-500 text-xs font-normal font-heading tracking-widest uppercase mb-2 block">Kapabilitas</span>
               <h2 className="text-3xl font-normal font-heading">Pertumbuhan Aset</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: TrendingUp, title: "Analytics Growth", desc: "Pantau tren pertumbuhan modal dengan presisi tinggi." },
                { icon: Briefcase, title: "Portfolio Manager", desc: "Kelola berbagai portofolio dalam satu dashboard terpusat." },
                { icon: Globe, title: "Global Access", desc: "Konektivitas ke pasar dan data global secara real-time." }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-xl bg-neutral-900/50 border border-white/5"
                >
                   <item.icon className="w-10 h-10 text-cyan-500 mb-4" />
                   <h3 className="text-xl font-normal font-heading mb-2">{item.title}</h3>
                   <p className="text-stone-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      
      {/* Footer juga di-blur */}
      <div className="opacity-30 pointer-events-none grayscale">
        <CTA title="Mulai dengan KITkapital" description="Diskusikan kebutuhan manajemen aset Anda." buttonText="Hubungi Sales" href="/kontak" />
        <Footer />
      </div>
    </>
  )
}