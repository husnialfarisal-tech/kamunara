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
      href: "/solutions/pipos",
      bgImage: "/images/bg1.png" 
    },
    { 
      name: "NOIbook", 
      src: "/images/logo_NOIbook.png", 
      href: "/solutions/noibook",
      bgImage: "/images/bg2.png" 
    }, 
    { 
      name: "KITkapital", 
      src: "/images/logo_KITkapital.png", 
      href: "/solutions/kitkapital",
      bgImage: "/images/bg4.png" 
    }, 
  ]

  return (
    <>
      <Navbar />
      <main className="relative pt-32 pb-24 md:pb-32 min-h-screen bg-neutral-950 overflow-hidden">
        
        {/* Elemen Dekorasi Background - Dibuat lebih tipis agar tidak mengganggu foto asli */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(700px,90vw)] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Gradient ini tetap ada tapi diatur agar tidak menutupi foto utama */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-neutral-950/50 to-neutral-950 pointer-events-none" />

        <div className="relative z-10">
          
          {/* ================= HERO SECTION (YANG DIUBAH) ================= */}
          <section className="relative pb-24 md:pb-36 px-4 text-center overflow-hidden min-h-screen -mt-32">
            <div className="absolute inset-0 z-0">
              
              {/* 1. Gambar dibuat Opacity 100 (Full Color) */}
              <div className="absolute inset-0 bg-[url('/images/putih.png')] bg-cover bg-center opacity-100" />
              
              {/* 2. Overlay gelap dihapus, diganti gradient transparan ke hitam (hanya di paling bawah) agar teks footer nanti nyambung */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10 pt-28">
              <div className="flex flex-col items-center justify-center">
                
                <div className="text-center max-w-3xl">
                  {/* Area Judul Kosong sesuai request sebelumnya */}

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-10 text-lg sm:text-xl text-stone-300 drop-shadow-md"
                  >
                  
                  </motion.p>
                </div>
                
              </div>
            </div>
          </section>
          {/* ================= END HERO SECTION ================= */}

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
                  className="group relative w-full border-t border-white/5 overflow-hidden"
                >
                  
                  {/* --- BACKGROUND IMAGE LAYER --- */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.bgImage} 
                      alt={`Background ${item.name}`} 
                      className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-neutral-950/90 group-hover:bg-neutral-950/70 transition-colors duration-700" />
                  </div>

                  {/* --- CONTENT LAYER (Logo & Teks) --- */}
                  <div className="py-20 md:py-28 flex flex-col justify-center items-center gap-8 md:gap-10 relative z-10 px-4">
                    
                    {/* Logo Wrapper */}
                    <div className="relative">
                        <img 
                        src={item.src} 
                        alt={item.name} 
                        className="h-24 md:h-32 lg:h-36 w-auto object-contain filter transition-all duration-500 opacity-90 group-hover:opacity-100 transform group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
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