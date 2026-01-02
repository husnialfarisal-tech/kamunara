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
        
        {/* Elemen Dekorasi Background (Glow Effects) - Fixed overflow */}
        {/* Top glow - centered and responsive to prevent overflow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        {/* Bottom glow - centered and responsive */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(700px,90vw)] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
        {/* Radial gradient overlay - safe for mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />

        <div className="relative z-10">
          
          {/* Hero Section */}
          <section className="relative pb-24 md:pb-36 px-4 text-center overflow-hidden min-h-screen -mt-32">
            
            {/* Background Gambar tim.jpeg */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[url('/images/tim.jpeg')] bg-cover bg-center opacity-40" />
              <div className="absolute inset-0 bg-neutral-950/80" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10 pt-28">
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    
    
    {/* ================= LEFT : TITLE ================= */}
    <div className="text-center lg:text-left">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="font-extrabold tracking-tight leading-[1.05]"
      >
        <span className="block text-4xl sm:text-5xl md:text-6xl text-white/90">
          Solusi Digital
        </span>

        <span className="relative inline-block mt-4 text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
          Terdepan
          <span className="absolute left-0 -bottom-4 w-24 h-[3px] rounded-full bg-gradient-to-r from-amber-400/80 to-transparent" />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 text-lg sm:text-xl text-stone-300 max-w-xl"
      >
        Kami membantu bisnis, instansi, dan organisasi mencapai transformasi
        digital yang efisien, aman, dan scalable.
      </motion.p>
    </div>

    {/* ================= RIGHT : 3D ANIMATION (PARALLAX DEPTH) ================= */}
    {/* Container Perspective untuk efek kedalaman 3D */}
    <div className="relative h-[360px] sm:h-[420px] w-full flex items-center justify-center perspective-[1200px]">
      
      {/* Scene Group - Tidak berputar, hanya kontainer untuk objek melayang */}
      <div className="relative w-64 h-80 transform-style-3d">
        
        {/* 1. CARD BELAKANG (Deep Layer) */}
        <motion.div
          animate={{ 
            y: [0, -15, 0], 
            rotateY: [-10, 10, -10] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-2xl transform translate-z-[-60px] scale-90 origin-center"
        >
           {/* Hiasan garis di belakang */}
           <div className="absolute inset-0 border border-amber-500/10 rounded-2xl scale-110 opacity-50" />
        </motion.div>

        {/* 2. CARD UTAMA (Middle Layer) */}
        <motion.div
          animate={{ 
            y: [0, -10, 0], // Melayang vertikal pelan
            rotateX: [2, -2, 2], // Miring sedikit depan belakang
            rotateY: [-2, 2, -2]  // Miring sedikit kiri kanan
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-neutral-800/80 to-neutral-900/90 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 z-10 overflow-hidden"
        >
          {/* Efek kilau cahaya di dalam kartu */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-amber-500/30 rounded-full" 
            />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)]">
               <Zap className="text-white w-10 h-10 fill-white/20" />
            </div>
          </div>
          
          <h3 className="text-white font-bold text-xl tracking-wide">Inovasi</h3>
          <p className="text-amber-200/60 text-xs mt-2 uppercase tracking-widest">Next Gen</p>
          
          {/* Progress Bar Animasi */}
          <div className="w-full mt-6">
            <div className="flex justify-between text-[10px] text-stone-400 mb-1 font-mono">
              <span>PROCESS</span>
              <span className="text-emerald-400">98%</span>
            </div>
            <div className="h-1 w-full bg-neutral-700/50 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: ["30%", "90%", "60%", "98%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="h-full bg-gradient-to-r from-amber-400 to-emerald-400" 
              />
            </div>
          </div>
        </motion.div>

        {/* 3. ELEMEN DEPAN (Floating Overlay - Security) */}
        <motion.div
          animate={{ 
            y: [0, 20, 0], 
            x: [0, -10, 0],
            rotateX: [10, 5, 10]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-12 bottom-12 w-28 h-20 bg-neutral-900/80 backdrop-blur-xl border border-indigo-500/40 rounded-xl flex items-center justify-center transform translate-z-[50px] shadow-[0_10px_40px_-10px_rgba(99,102,241,0.5)] z-20"
        >
          <Code className="text-indigo-300 w-8 h-8" />
          {/* Detail chip */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]" />
        </motion.div>

        {/* 4. ELEMEN SAMPING (Floating Orb - Tech) */}
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotateZ: [0, 10, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          /* PERBAIKAN: z-30 ditambahkan dan translate-z dinaikkan menjadi [50px] agar benar-benar di depan */
          className="absolute -left-10 top-10 w-24 h-24 bg-neutral-800/80 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center transform translate-z-[50px] rotate-y-[-15deg] z-30"
        >
           <ShieldCheck className="text-emerald-400 w-10 h-10" />
        </motion.div>

        {/* 5. GLOW AMBIENT (Menambah volume) */}
        <motion.div
           animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
           transition={{ duration: 4, repeat: Infinity }}
           className="absolute inset-0 bg-amber-500/20 rounded-full blur-[60px] transform translate-z-[-80px]"
        />

      </div>
    </div>

  </div>
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

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
                      boxShadow: '0 22px 45px -12px rgba(255, 255, 255, 0.45)',
                      transition: {
                        duration: 0.14,
                        ease: 'easeOut'
                      }
                    }}
                    className="group relative p-8 bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-white/30 text-center overflow-hidden rounded-2xl"
                  >
                    {/* Glow putih */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent blur-2xl scale-110" />
                    </div>

                    {/* Icon putih */}
                    <item.icon className="w-12 h-12 text-white mx-auto mb-6 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />

                    <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-150 group-hover:text-white">
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