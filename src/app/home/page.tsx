'use client' 
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import { ArrowRight } from 'lucide-react' 
import Link from 'next/link' 

export default function HomePage() {
  
  // ==========================================
  // DAFTAR PRODUK
  // ==========================================
  const products = [
    { 
      name: "Pipos", 
      src: "/images/logo_pipos_copy.png", 
      href: "/solutions/pipos" 
    },
    { 
      name: "NOIbook", 
      src: "/images/logo_NOIbook.png", 
      href: "/solutions/noibook" 
    }, 
    { 
      name: "KITkapital", 
      src: "/images/logo_KITkapital.png", 
      href: "/solutions/kitkapital" 
    }, 
  ]

  return (
    <>
      <Navbar />
      <main className="relative pt-32 pb-24 md:pb-32 min-h-screen bg-neutral-950 overflow-hidden">
        
        {/* Elemen Dekorasi Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(700px,90vw)] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />

        <div className="relative z-10">
          
          {/* Hero Section */}
          <section className="relative pb-24 md:pb-36 px-4 text-center overflow-hidden min-h-screen -mt-32">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[url('/images/tim.jpeg')] bg-cover bg-center opacity-40" />
              <div className="absolute inset-0 bg-neutral-950/80" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10 pt-28">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left: Title */}
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

                {/* Right: 3D Animation */}
                <div className="relative h-[360px] sm:h-[420px] w-full flex items-center justify-center perspective-[1200px]">
                  <div className="relative w-64 h-80 transform-style-3d">
                    
                    {/* Background Card Effect */}
                    <motion.div
                      animate={{ y: [0, -15, 0], rotateY: [-10, 10, -10] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-2xl transform translate-z-[-60px] scale-90 origin-center"
                    >
                       <div className="absolute inset-0 border border-amber-500/10 rounded-2xl scale-110 opacity-50" />
                    </motion.div>

                    {/* Main Center Card */}
                    <motion.div
                      animate={{ y: [0, -10, 0], rotateX: [2, -2, 2], rotateY: [-2, 2, -2] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-br from-neutral-800/80 to-neutral-900/90 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 z-10 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="relative mb-6">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border border-dashed border-amber-500/30 rounded-full" 
                        />
                        {/* CENTER IMAGE: Kamunara */}
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)] overflow-hidden">
                           <img 
                             src="/images/kamunara_copy.png" 
                             alt="Kamunara" 
                             className="w-full h-full object-cover" 
                           />
                        </div>
                      </div>
                      <h3 className="text-white font-bold text-xl tracking-wide">KAMUNARA</h3>
                      <p className="text-amber-200/60 text-xs mt-2 uppercase tracking-widest">Next Gen</p>
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

                    {/* Floating Element 1 (Bottom Right): NOIbook - HIJAU */}
                    <motion.div
                      animate={{ y: [0, 20, 0], x: [0, -10, 0], rotateX: [10, 5, 10] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -right-12 bottom-12 w-28 h-20 bg-neutral-900/80 backdrop-blur-xl border border-emerald-500/40 rounded-xl flex items-center justify-center transform translate-z-[50px] shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] z-20 overflow-hidden"
                    >
                      <img 
                        src="/images/logo_NOIbook.png" 
                        alt="NOIbook" 
                        className="w-16 h-16 object-contain" 
                      />
                      {/* Titik dekorasi hijau */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
                    </motion.div>

                    {/* Floating Element 2 (Top Left): Pipos - MERAH */}
                    <motion.div
                      animate={{ y: [10, -10, 10], rotateZ: [0, 10, 0] }}
                      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -left-10 top-10 w-24 h-24 bg-neutral-800/80 backdrop-blur-xl border border-red-500/40 rounded-xl flex items-center justify-center transform translate-z-[50px] rotate-y-[-15deg] shadow-[0_0_30px_-10px_rgba(239,68,68,0.4)] z-30 overflow-hidden"
                    >
                       <img 
                        src="/images/logo_pipos_copy.png" 
                        alt="Pipos" 
                        className="w-16 h-16 object-contain" 
                      />
                    </motion.div>

                    {/* Floating Element 3 (Top Right): KITkapital - BIRU */}
                    <motion.div
                      animate={{ y: [-5, 15, -5], x: [5, -5, 5], rotateZ: [-5, 5, -5] }}
                      transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -right-10 top-16 w-20 h-20 bg-neutral-800/80 backdrop-blur-xl border border-blue-500/40 rounded-xl flex items-center justify-center transform translate-z-[40px] z-25 shadow-[0_0_30px_-10px_rgba(59,130,246,0.4)] overflow-hidden"
                    >
                       <img 
                        src="/images/logo_KITkapital.png" 
                        alt="KITkapital" 
                        className="w-14 h-14 object-contain" 
                      />
                    </motion.div>

                    {/* Background Glow */}
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

          {/* ================= SECTION PRODUK ================= */}
          <section className="relative w-full bg-neutral-950 overflow-hidden pb-32">
            
            <div className="text-center py-10">
               <p className="text-stone-600 text-[10px] md:text-xs tracking-[0.5em] uppercase font-serif">
                 Featured Products
               </p>
            </div>

            <div className="w-full">
              {products.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative w-full border-t border-white/5 hover:bg-neutral-900/30 transition-colors duration-500"
                >
                  <div className="py-20 md:py-28 flex flex-col justify-center items-center gap-8 md:gap-10 relative z-10 px-4">
                    
                    <div className="relative">
                       <img 
                        src={item.src} 
                        alt={item.name} 
                        className="h-24 md:h-32 lg:h-36 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 transform group-hover:scale-105"
                      />
                    </div>

                    <div className="overflow-hidden">
                      <Link href={item.href || '#'} className="inline-flex flex-col items-center group/btn cursor-pointer">
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-stone-500 group-hover:text-white transition-colors duration-300 uppercase flex items-center gap-2">
                           Lihat Detail Produk
                           <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                        </span>
                        <span className="w-0 h-[1px] bg-amber-500 mt-2 group-hover:w-full transition-all duration-500 ease-out" />
                      </Link>
                    </div>

                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>
              ))}
              
              <div className="w-full border-t border-white/5" />
            </div>
          </section>

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