'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Briefcase, TrendingUp, Zap, Cpu, Facebook, Target, Code2, Award, DollarSign, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image' // IMPORT IMAGE DARI NEXT.JS

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// --- Statistics Data ---
const statsData = [
  { value: "2", label: "Proyek Selesai" },
  { value: "2", label: "Klien Puas" },
  { value: "1", label: "Tahun Pengalaman" },
  { value: "10", label: "Tim Profesional" }
]

// --- Values Data ---
const values = [
  { icon: Heart, title: "Integritas", desc: "Kejujuran dan transparansi penuh" },
  { icon: Zap, title: "Inovasi", desc: "Mengadopsi teknologi terkini" },
  { icon: Users, title: "Kolaborasi", desc: "Bekerja sama untuk hasil terbaik" },
  { icon: Award, title: "Kualitas", desc: "Standar terbaik di setiap deliverable" },
  { icon: Target, title: "Hasil Orientasi", desc: "Fokus pencapaian tujuan klien" },
  { icon: Code2, title: "Profesionalisme", desc: "Etika tinggi & standar profesional" }
]

// --- DATA TIM ---
const teamMembers = [
  { role: 'Manajer', name: 'Nama Manajer', image: '/images/manager.jpg', desc: 'Leading the Vision & Strategy. Bertanggung jawab atas arah keseluruhan perusahaan.' },
  { role: 'Supervisor', name: 'Nama Supervisor', image: '/images/manager.jpg', desc: 'Operational Excellence. Memastikan setiap proyek berjalan sesuai timeline dan kualitas.' },
  { role: 'Finance', name: 'Nama Finance', image: '/images/manager.jpg', desc: 'Financial Health. Mengelola kesehatan finansial dan perencanaan anggaran strategis.' },
  { role: 'Digital Program', name: 'Nama Programmer', image: '/images/manager.jpg', desc: 'Tech Innovation. Arsitek di balik solusi digital dan pengembangan sistem.' },
  { role: 'Sales Marketing 1', name: 'Nama Sales 1', image: '/images/manager.jpg', desc: 'Market Expansion. Membuka peluang pasar baru dan menjalin kemitraan strategis.' },
  { role: 'Sales Marketing 2', name: 'Nama Sales 2', image: '/images/manager.jpg', desc: 'Client Relations. Menjaga hubungan erat dan kepuasan klien jangka panjang.' },
  { role: 'Sales Marketing 3', name: 'Nama Sales 3', image: '/images/manager.jpg', desc: 'Growth Specialist. Fokus pada strategi pertumbuhan penjualan dan akuisisi.' },
]

export default function TentangPage() {
  const [particles, setParticles] = useState<{ x: number; y: number; duration: number; delay: number }[]>([])

  useEffect(() => {
    const generatedParticles = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white relative selection:bg-zinc-200 overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-white pointer-events-none" />

        {/* AMBIENT BACKGROUND PARTICLES */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-[3px] h-[3px] bg-zinc-400/40 rounded-full blur-[1px]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                y: [0, -100], 
                opacity: [0, 0.8, 0], 
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 pt-32 pb-12">

          {/* Hero Section */}
          <section className="pb-16 px-4 text-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="container mx-auto max-w-4xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold font-heading text-black mb-6 leading-tight"
              >
                Tentang
                <span className="block bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-400 bg-clip-text text-transparent">
                  Kamunara
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-xl text-zinc-600 max-w-3xl mx-auto"
              >
                Mengenal lebih dekat siapa kami dan apa yang kami lakukan untuk membantu transformasi digital Anda
              </motion.p>
            </motion.div>
          </section>

          {/* About Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.2 }
                  }
                }}
                className="max-w-3xl mx-auto space-y-12"
              >
                <motion.div variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }} className="space-y-6">
                  {/* Badge Style */}
                  <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-2">
                    <Users className="w-4 h-4 text-black" />
                    <span className="text-black text-sm font-medium">Tentang Kami</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">Mengenal Kamunara</h2>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    Kamunara adalah perusahaan IT outsourcing yang baru berkembang dan berfokus pada pengembangan website serta aplikasi. Bernaung di bawah DS Company, kami hadir dengan semangat inovasi dan komitmen kualitas untuk mendukung transformasi digital organisasi dan perusahaan.
                  </p>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    <em>"Kami berfokus pada penyediaan layanan pengembangan dan pembuatan software digital"</em> 
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {statsData.map((stat, i) => {
                    const bgColors = ['bg-[#f3f7e6]', 'bg-[#dbeadd]', 'bg-[#c4dcd3]', 'bg-[#b5d5d0]'];
                    const cardColor = bgColors[i % bgColors.length];

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        whileHover={{
                          y: -14,
                          scale: 1.045,
                          boxShadow: '0 22px 45px -12px rgba(0, 0, 0, 0.1)',
                          transition: { duration: 0.14, ease: 'easeOut' }
                        }}
                        className={`group relative aspect-square flex flex-col items-center justify-center ${cardColor} rounded-2xl border border-zinc-200 hover:border-zinc-900 overflow-hidden shadow-sm`}
                      >
                        <div className="text-3xl md:text-4xl font-bold text-black transition-transform duration-150 group-hover:scale-110 relative z-10">
                          {stat.value}
                        </div>
                        <p className="text-zinc-600 text-sm font-medium transition-colors duration-150 group-hover:text-black relative z-10 text-center">
                          {stat.label}
                        </p>
                      </motion.div>
                    )
                })}
              </div>
            </div>
          </section>

          {/* Visi & Misi Section */}
          <section className="py-0">
            <div className="text-center py-10">
               <p className="text-zinc-400 text-[10px] md:text-xs tracking-[0.5em] uppercase font-serif">
                 VISI & MISI
               </p>
            </div>

            <div className="flex flex-col">
              
              {/* BAGIAN VISI */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group relative w-full overflow-hidden min-h-[350px] flex items-center justify-center bg-[#f3f7e6] border-y border-zinc-100"
              >
                <div className="relative z-10 w-full h-full">
                  <div className="container mx-auto px-4 py-16 text-center max-w-4xl">
                      <h3 className="text-3xl md:text-4xl font-bold font-heading text-black mb-6 tracking-wide">Visi Kami</h3>
                      <p className="text-xl md:text-2xl text-zinc-700 font-light italic leading-relaxed font-serif">
                        "Menjadi mitra pengembangan dan transformasi digital pilihan global, yang menghubungkan talenta terbaik untuk menciptakan solusi berdampak bagi kemajuan bersama."
                      </p>
                  </div>
                </div>
              </motion.div>

              {/* BAGIAN MISI */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="group relative w-full overflow-hidden min-h-[450px] flex items-center bg-[#f7f9ed]"
              >
                <div className="relative z-10 w-full h-full">
                  <div className="container mx-auto px-4 py-16">
                      <div className="flex flex-col items-center mb-10">
                        <h3 className="text-3xl md:text-4xl font-bold font-heading text-black tracking-wide">Misi Kami</h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Misi Items */}
                        {[
                            { title: "Membangun Jembatan Digital", desc: "Menyediakan solusi IT outsourcing yang andal dan tim developer berkualitas." },
                            { title: "Berkolaborasi", desc: "Menerapkan filosofi 'Karya Kita Bersama' dalam setiap kemitraan." },
                            { title: "Memberdayakan Energi Muda", desc: "Menciptakan ekosistem kerja yang dinamis dan inovatif bagi talenta muda." },
                            { title: "Adaptasi & Inovasi", desc: "Menjadi perusahaan yang lincah (agile) dalam menghadapi tren teknologi." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 border-l-2 border-zinc-300 pl-6 hover:border-black transition-colors duration-300">
                                <span className="text-black text-lg font-medium block mb-2 font-serif">{item.title}</span>
                                <p className="text-zinc-600 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                      </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* ========================================================================= */}
          {/* UPDATED: Bagan Organisasi (MODERN, CLEAN, ANIMATED)                       */}
          {/* ========================================================================= */}
          <section className="py-24 bg-white border-t border-zinc-100 pb-0">
            {/* Header Section */}
            <div className="px-4 text-center bg-white mb-20">
                <div className="container mx-auto max-w-4xl">
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-6xl font-bold text-black mb-6"
                    >
                      Struktur Tim
                    </motion.h2>
                    <motion.div 
                      initial={{ opacity: 0, width: 0 }}
                      whileInView={{ opacity: 1, width: 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-1 bg-black mx-auto mb-6"
                    />
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-zinc-500 text-lg md:text-xl font-light"
                    >
                      Profesional berdedikasi yang menggerakkan inovasi di Kamunara
                    </motion.p>
                </div>
            </div>

            {/* TEAM LIST CONTAINER */}
            <div className="container mx-auto px-4 max-w-6xl pb-24">
               {teamMembers.map((member, index) => (
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                   className="group flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 py-16 border-b border-zinc-100 last:border-0"
                 >
                    {/* --- TEXT CONTENT (LEFT) --- */}
                    <div className="flex-1 text-center md:text-left order-2 md:order-1">
                        <div className="mb-4">
                           <span className="inline-block px-3 py-1 bg-white border border-zinc-200 text-zinc-500 text-xs font-bold tracking-wider uppercase rounded-full mb-3 shadow-sm">
                             {member.role === 'Manajer' ? 'Leadership' : 'Team Member'}
                           </span>
                           <h3 className="text-3xl md:text-5xl font-bold text-black mb-2 group-hover:text-zinc-600 transition-colors duration-300">
                             {member.role}
                           </h3>
                        </div>
                        <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-xl mx-auto md:mx-0 group-hover:text-black transition-colors duration-300">
                          {member.desc}
                        </p>
                        
                        {/* Decorative Line that grows on hover */}
                        <div className="h-px w-24 bg-zinc-300 mt-8 mx-auto md:mx-0 group-hover:w-full group-hover:bg-black transition-all duration-700 ease-in-out origin-left" />
                    </div>

                    {/* --- CIRCLE IMAGE (RIGHT) --- */}
                    <div className="order-1 md:order-2 shrink-0">
                       <motion.div 
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full"
                       >
                          {/* Container Foto Bersih (Tanpa Background Abu Default) */}
                          <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-zinc-100 bg-white">
                             <Image 
                                src={member.image} 
                                alt={member.role}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
                                style={{ objectPosition: 'center 20%' }}
                             />
                             
                             {/* Overlay Halus saat Hover */}
                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
                          </div>
                          
                          {/* Floating Decor (Animated) */}
                          <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-white text-black border border-zinc-100 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 z-10">
                             <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                          </div>
                       </motion.div>
                    </div>

                 </motion.div>
               ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="py-24 px-4 bg-zinc-50">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-2 mb-6 shadow-sm">
                  <Heart className="w-4 h-4 text-black" />
                  <span className="text-black text-sm font-medium">Nilai Perusahaan</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-black mb-4">Nilai dan Prinsip</h2>
                <p className="text-zinc-600 text-lg max-w-2xl mx-auto">Fondasi dalam setiap langkah kami</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      y: -14,
                      scale: 1.045,
                      boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative p-8 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-900 text-center overflow-hidden shadow-sm"
                  >
                    <div className="bg-zinc-50 rounded-xl p-4 w-fit mx-auto mb-6 transition-colors duration-150 border border-zinc-100 relative z-10">
                      <value.icon className="w-8 h-8 text-black transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3 relative z-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3 relative z-10">{value.title}</h3>
                    <p className="text-zinc-600 relative z-10">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Media Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-24 text-center"
              >
                <h3 className="text-2xl font-bold text-black mb-8">Ikuti Kami di Media Sosial</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  
                    {/* TIKTOK BUTTON */}
                    <motion.div
                     whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.14 } }}
                     className="group relative"
                   >
                     <Link
                       href="https://www.tiktok.com/@kamunara.group"
                       target="_blank"
                       className="relative z-10 flex items-center gap-3 px-8 py-4 bg-white text-black border border-zinc-200 rounded-full hover:bg-zinc-100 transition-all shadow-md"
                     >
                       <svg className="w-5 h-5 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.24-1.72.88-2.14 1.71-.49.95-.44 2.18.14 3.07.45.75 1.2 1.29 2.05 1.48.85.19 1.75.06 2.5-.37.53-.3.91-.77 1.13-1.32.13-.39.18-.79.18-1.2V.02z"/>
                       </svg>
                       <span className="font-bold">TikTok</span>
                     </Link>
                   </motion.div>

                   {/* INSTAGRAM BUTTON */}
                   <motion.div
                     whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.14 } }}
                     className="group relative"
                   >
                     <Link
                       href="https://www.instagram.com/kamunara.group"
                       target="_blank"
                       className="relative z-10 flex items-center gap-3 px-8 py-4 bg-white text-black border border-zinc-200 rounded-full hover:bg-zinc-100 transition-all shadow-md"
                     >
                       <svg className="w-5 h-5 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                         <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                       </svg>
                       <span className="font-bold">Instagram</span>
                     </Link>
                   </motion.div>

                   {/* FACEBOOK BUTTON */}
                   <motion.div
                     whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.14 } }}
                     className="group relative"
                   >
                     <Link
                       href="https://www.facebook.com/share/g/17gbQKDK8M/?mibextid=wwXIfr"
                       target="_blank"
                       className="relative z-10 flex items-center gap-3 px-8 py-4 bg-white text-black border border-zinc-200 rounded-full hover:bg-zinc-100 transition-all shadow-md"
                     >
                       <Facebook className="w-5 h-5 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />
                       <span className="font-bold">Facebook</span>
                     </Link>
                   </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

        </div>

        {/* SECTION BARU: CTA FULL WIDTH BLACK */}
        <section className="relative w-full bg-black py-24 px-4 text-center mt-20">
          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
            >
              Ingin Bekerja Sama?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              Kami siap membantu Anda dalam transformasi digital. Mari diskusikan kebutuhan Anda
            </motion.p>
            
            <motion.a 
              href="/kontak"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-black font-bold py-4 px-12 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Hubungi Kami
            </motion.a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}