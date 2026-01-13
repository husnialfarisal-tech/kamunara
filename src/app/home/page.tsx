'use client' 
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
      bgImage: "/images/new1.png" 
    },
    { 
      name: "NOIbook", 
      src: "/images/logo_NOIbook.png", 
      href: "/solutions/noibook",
      bgImage: "/images/new2.png" 
    }, 
    { 
      name: "KITkapital", 
      src: "/images/logo_KITkapital.png", 
      href: "/solutions/kitkapital",
      bgImage: "/images/new3.png" 
    }, 
  ]

  return (
    <>
      <Navbar />
      {/* 
         UPDATE: 
         1. Mengubah padding-bottom main menjadi 0 (pb-0) agar tidak ada sisa putih.
         2. Menambahkan 'flex flex-col' pada main agar isi tersusun rapi vertikal.
      */}
      <main className="relative pt-32 pb-0 md:pb-0 min-h-screen bg-white overflow-hidden flex flex-col">
        
        {/* Elemen Dekorasi Background - Premium Sage Green & Zinc Blur */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#dbe8e2]/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-zinc-100/50 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Gradient untuk memastikan background bersih dan putih */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-white pointer-events-none" />

        {/* 
           UPDATE: 
           1. 'flex flex-col flex-grow' agar container ini mengisi sisa layar.
           2. 'pb-0' agar tidak ada gap di bawah sebelum footer.
        */}
        <div className="relative z-10 flex flex-col flex-grow">
          
          {/* ================= HERO SECTION ================= */}
          <section className="relative pb-24 md:pb-36 px-4 text-center overflow-hidden min-h-[80vh]">
            <div className="absolute inset-0 z-0">
              
              {/* 1. Gambar Opacity 100 (Full Color) */}
              <div className="absolute inset-0 bg-[url('/images/putih.png')] bg-cover bg-center opacity-100" />
              
              {/* 2. Overlay Putih Transparan agar teks terbaca */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10 pt-28">
              <div className="flex flex-col items-center justify-center">
                
                <div className="text-center max-w-3xl">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-10 text-lg sm:text-xl text-black drop-shadow-sm"
                  >
                    {/* Teks kosong sesuai request sebelumnya */}
                  </motion.p>
                </div>
                
              </div>
            </div>
          </section>
          {/* ================= END HERO SECTION ================= */}

          {/* ================= SECTION PRODUK ================= */}
          <section className="relative w-full bg-white overflow-hidden pb-32">
            
            <div className="text-center py-10">
               {/* Judul diubah menjadi text-black (Hitam) */}
               <p className="text-black text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold font-serif">
                 Featured Products
               </p>
            </div>

            {/* Menghapus container agar Full Kiri dan Kanan */}
            <div className="w-full">
              {products.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  
                  // 3D CARD STYLING (Sama seperti kartu berlanggan)
                  whileHover={{ 
                    y: -8, // Naik responsif
                    boxShadow: '0 12px 30px -8px rgba(0,0,0,0.1)', 
                    scale: 1.01,
                    transition: { duration: 0.2, ease: 'circOut' } // Cepat naik turun
                  }}
                  
                  // Background default (Sage Green) sesuai style halaman produk
                  className="group relative w-full border-y border-zinc-200 overflow-hidden bg-gradient-to-br from-[#dbe8e2] to-[#c4dcd3]"
                >        
                  {/* --- BACKGROUND IMAGE LAYER --- */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.bgImage} 
                      alt={`Background ${item.name}`} 
                      // UPDATE: 
                      // 1. Duration dipercepat (500ms) agar lebih responsif
                      // 2. Easing diubah ke 'ease-out' agar lebih smooth berhentinya
                      // 3. Scale diubah dari 'scale-100' ke 'scale-105' agar efeknya Zoom In (Membesar) saat muncul, bukan mengecil
                      className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transform scale-100 group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                  </div>

                  {/* --- CONTENT LAYER (Logo & Teks) --- */}
                  <div className="py-20 md:py-28 flex flex-col justify-center items-center gap-8 md:gap-10 relative z-10 px-4">
                    
                    {/* Logo Wrapper */}
                    <div className="relative">
                        <img 
                          src={item.src} 
                          alt={item.name} 
                          className="h-24 md:h-32 lg:h-36 w-auto object-contain filter transition-all duration-500 opacity-100 transform group-hover:scale-110 drop-shadow-[0_4px_6px_rgba(0,0,0,0.05)]"
                        />
                    </div>

                    <div className="overflow-hidden">
                      <Link href={item.href || '#'} className="inline-flex flex-col items-center group/btn cursor-pointer">
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-black group-hover:text-black transition-colors duration-300 uppercase flex items-center gap-2">
                           Lihat Detail Produk
                           {/* Icon berubah warna ke Amber saat hover */}
                           <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-amber-600" />
                        </span>
                        <span className="w-0 h-[1px] bg-amber-600 mt-2 group-hover:w-full transition-all duration-500 ease-out" />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ================= NEW SECTION CTA (BLACK THEME) ================= */}
          {/* UPDATE: Menambahkan 'mt-auto' agar bagian ini didorong ke bawah layar */}
          <section className="bg-black text-white py-24 md:py-40 relative overflow-hidden mt-auto">
            {/* Subtle White Glow on Black Background for Depth */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Siap Memulai Transformasi Digital?
              </h2>
              <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Mari diskusikan solusi terbaik untuk bisnis Anda hari ini
              </p>
              
              <Link href="/kontak">
                {/* Tombol Putih untuk kontras background hitam */}
                <button className="
                  bg-white text-black hover:bg-stone-200 
                  font-bold py-4 px-10 rounded-xl 
                  shadow-lg shadow-white/10
                  transition-all duration-300 hover:scale-105 hover:shadow-xl
                ">
                  Hubungi Kami
                </button>
              </Link>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}