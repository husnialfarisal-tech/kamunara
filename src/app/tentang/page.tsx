'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Briefcase, Users as UsersIcon, TrendingUp, Zap, Cpu, ChevronDown, Facebook, Compass, Rocket, Target, Code2, Award, DollarSign } from 'lucide-react'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

// --- Statistics Data ---
const statsData = [
  { value: "2", label: "Proyek Selesai" },
  { value: "2", label: "Klien Puas" },
  { value: "1", label: "Tahun Pengalaman" },
  { value: "10", label: "Tim Profesional" }
]

// --- Organization Chart Data ---
const staffMembers = [
  { title: "Finance", icon: Zap },
  { title: "Sales 1", icon: TrendingUp },
  { title: "Sales 2", icon: TrendingUp },
  { title: "Sales 3", icon: TrendingUp },
  { title: "Marketing", icon: Zap }
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


export default function TentangPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-950 relative selection:bg-amber-500/30 overflow-hidden">
        
        {/* AMBIENT BACKGROUND PARTICLES - Fixed overflow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-amber-200 rounded-full"
              initial={{
                x: `${Math.random() * 100}%`,
                y: '100vh',
                opacity: 0,
              }}
              animate={{
                y: '-20vh',
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
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
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Tentang
                <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Kamunara
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-xl text-stone-300 max-w-3xl mx-auto"
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
                  <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 text-sm font-medium">Tentang Kami</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white">Mengenal Kamunara</h2>
                  <p className="text-lg text-stone-300 leading-relaxed">
                    Kamunara adalah perusahaan IT outsourcing yang baru berkembang dan berfokus pada pengembangan website serta aplikasi. Bernaung di bawah DS Company, kami hadir dengan semangat inovasi dan komitmen kualitas untuk mendukung transformasi digital organisasi dan perusahaan.
                  </p>
                  <p className="text-lg text-stone-300 leading-relaxed">
                    <em>"Kami berfokus pada penyediaan layanan pengembangan dan pembuatan software digital"</em> 
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {statsData.map((stat, i) => (
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
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative aspect-square flex flex-col items-center justify-center bg-stone-900/50 rounded-2xl border border-amber-500/20 hover:border-amber-500/70 overflow-hidden"
                  >
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent transition-transform duration-150 group-hover:scale-110 relative z-10">
                      {stat.value}
                    </div>
                    <p className="text-stone-300 text-sm font-medium transition-colors duration-150 group-hover:text-white relative z-10 text-center">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Visi & Misi Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.35)',
                  transition: { duration: 0.14, ease: 'easeOut' }
                }}
                className="group relative bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-3xl p-10 md:p-12 border border-amber-500/20 overflow-hidden"
              >
                {/* Inner glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/3 text-center">
                    <div className="space-y-6">
                      <div className="bg-amber-500/20 rounded-2xl p-6 inline-block">
                        <Compass className="w-16 h-16 mx-auto text-amber-400 mb-2" />
                        <p className="text-amber-400 font-bold uppercase tracking-widest text-xs">Visionary</p>
                      </div>
                      <div className="bg-blue-500/20 rounded-2xl p-6 inline-block ml-4">
                        <Rocket className="w-16 h-16 mx-auto text-blue-400 mb-2" />
                        <p className="text-blue-400 font-bold uppercase tracking-widest text-xs">Mission</p>
                      </div>
                      <h3 className="text-3xl font-bold text-white mt-4">Visi & Misi</h3>
                    </div>
                  </div>

                  <div className="lg:w-2/3 space-y-12">
                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visi Kami</h2>
                      <p className="text-xl text-amber-300 font-medium italic leading-relaxed">
                        "Menjadi mitra pengembangan dan transformasi digital pilihan global, yang menghubungkan talenta terbaik untuk menciptakan solusi berdampak bagi kemajuan bersama."
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Misi Kami</h2>
                      <div className="grid md:grid-cols-2 gap-6 text-stone-200">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <span className="text-amber-300 font-semibold block mb-2">Membangun Jembatan Digital</span>
                          <p className="text-sm">Menyediakan solusi IT outsourcing yang andal dan tim developer berkualitas untuk membantu perusahaan di seluruh indonesia mencapai tujuan digital mereka.</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <span className="text-amber-300 font-semibold block mb-2">Berkolaborasi, Bukan Hanya Bekerja </span>
                          <p className="text-sm">Menerapkan filosofi "Karya Kita Bersama" dalam setiap kemitraan, memastikan klien merasa sebagai bagian integral dari proses pengembangan.</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <span className="text-amber-300 font-semibold block mb-2">Memberdayakan Energi Muda</span>
                          <p className="text-sm">Menciptakan ekosistem kerja yang dinamis dan inovatif bagi talenta muda untuk berkembang, belajar, dan memberikan ide-ide terbaiknya.</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <span className="text-amber-300 font-semibold block mb-2">Beradaptasi dengan PerubahanBeradaptasi</span>
                          <p className="text-sm"> Menjadi perusahaan yang lincah (agile) dalam menghadapi tren teknologi, memastikan solusi yang kami berikan relevan dan futuristik.</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Bagan Organisasi Kamunara */}
           <section className="py-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Bagan Organisasi</h2>
                <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              </div>
              
              <div className="flex flex-col items-center">
                
                {/* LEVEL 1: MANAGER (Warna Tetap Amber Solid) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                    transition: { duration: 0.14, ease: 'easeOut' }
                  }}
                  className="group relative w-64 p-6 bg-gradient-to-b from-amber-500 to-amber-600 rounded-2xl text-center shadow-lg overflow-hidden"
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-150 pointer-events-none">
                    <div className="absolute inset-0 bg-white/20 blur-xl scale-110" />
                  </div>
                  <Briefcase className="w-8 h-8 mx-auto mb-2 text-white transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3 relative z-10" />
                  <h3 className="text-white font-bold text-lg relative z-10">Manager</h3>
                </motion.div>

                {/* Connector Level 1 ke Level 2 (MANAGER -> FINANCE, SUPERVISOR, DIGITAL) */}
                <div className="relative w-full max-w-5xl h-12 mb-4">
                  {/* Vertical Center Line (Manager -> Supervisor) */}
                  <div className="absolute left-1/2 top-0 h-full w-px bg-stone-700" />
                  
                  {/* Desktop Branches */}
                  <div className="hidden md:block absolute top-0 w-full h-full">
                    {/* Horizontal Line connecting Finance and Digital Program */}
                    <div className="absolute top-4 left-[calc(50%-280px)] right-[calc(50%-280px)] h-px bg-stone-700" />
                    
                    {/* Vertical Drop to Finance */}
                    <div className="absolute top-4 left-[calc(50%-280px)] h-full w-px bg-stone-700" />
                    
                    {/* Vertical Drop to Digital Program */}
                    <div className="absolute top-4 right-[calc(50%-280px)] h-full w-px bg-stone-700" />
                  </div>
                </div>

                {/* LEVEL 2: FINANCE (KIRI) - SUPERVISOR (TENGAH) - DIGITAL PROGRAM (KANAN) */}
                <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-12 w-full relative">
                  
                  {/* KIRI: FINANCE (Warna Hijau Transparan mirip Digital Program) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{
                      y: -14,
                      scale: 1.045,
                      boxShadow: '0 22px 45px -12px rgba(16, 185, 129, 0.55)',
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative w-full md:w-56 p-4 bg-emerald-500/10 border border-emerald-500/40 hover:border-emerald-500/60 rounded-xl text-center flex flex-col items-center justify-center gap-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent blur-2xl scale-110" />
                    </div>
                    {/* Icon DollarSign untuk Finance */}
                    <DollarSign className="w-6 h-6 text-emerald-400 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3 relative z-10" />
                    <h3 className="text-emerald-400 font-bold text-sm relative z-10">Finance</h3>
                  </motion.div>

                  {/* TENGAH: SUPERVISOR & ANAKNYA (Warna Tetap Stone) */}
                  <div className="flex flex-col items-center">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.45)',
                        transition: { duration: 0.14, ease: 'easeOut' }
                      }}
                      className="group relative w-full md:w-60 p-5 bg-stone-800 border border-amber-500/50 rounded-2xl text-center overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-150 pointer-events-none">
                        <div className="absolute inset-0 bg-amber-500/20 blur-xl scale-110" />
                      </div>
                      <UsersIcon className="w-6 h-6 mx-auto mb-2 text-amber-500 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3 relative z-10" />
                      <h3 className="text-white font-bold relative z-10">Supervisor</h3>
                    </motion.div>

                    {/* Garis Connector Supervisor ke Sales */}
                    <div className="relative w-full max-w-[500px] h-12 my-2">
                        {/* Vertical Center Line */}
                        <div className="absolute left-1/2 top-0 h-full w-px bg-stone-700" />
                        
                        {/* Desktop Branches */}
                        <div className="hidden md:block absolute top-0 w-full h-full">
                            {/* Horizontal Line */}
                            <div className="absolute top-4 left-0 right-0 h-px bg-stone-700" />
                            {/* Drop to Left Sales */}
                            <div className="absolute top-4 left-[16.66%] h-full w-px bg-stone-700" />
                            {/* Drop to Right Sales */}
                            <div className="absolute top-4 right-[16.66%] h-full w-px bg-stone-700" />
                        </div>
                    </div>

                    {/* LEVEL 3: 3 SALES MARKETING (Warna Tetap Stone) */}
                    <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
                      {[1, 2, 3].map((item) => (
                        <motion.div 
                          key={item}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{
                            y: -14,
                            scale: 1.045,
                            boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                            transition: { duration: 0.14, ease: 'easeOut' }
                          }}
                          className="group relative p-3 bg-stone-900 border border-white/10 hover:border-amber-500/50 rounded-xl text-center overflow-hidden"
                        >
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                          </div>
                          {/* Icon TrendingUp untuk Sales */}
                          <TrendingUp className="w-5 h-5 mx-auto mb-2 text-stone-400 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3 relative z-10" />
                          <span className="text-white font-medium text-xs relative z-10">Sales Mkt.</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* KANAN: DIGITAL PROGRAM (Warna Tetap Amber Transparan) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{
                      y: -14,
                      scale: 1.045,
                      boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative w-full md:w-56 p-4 bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/50 rounded-xl text-center flex flex-col items-center justify-center gap-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                    </div>
                    <Cpu className="w-6 h-6 text-amber-500 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3 relative z-10" />
                    <span className="text-amber-500 font-bold text-sm relative z-10">Digital Program</span>
                  </motion.div>

                </div>
              </div>
            </div>
          </section>
          {/* Values Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-4 py-2 mb-6">
                  <Heart className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">Nilai Perusahaan</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nilai dan Prinsip</h2>
                <p className="text-stone-300 text-lg max-w-2xl mx-auto">Fondasi dalam setiap langkah kami</p>
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
                      boxShadow: '0 22px 45px -12px rgba(255, 255, 255, 0.45)',
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative p-8 bg-stone-900/80 rounded-2xl border border-white/10 hover:border-white/30 text-center overflow-hidden"
                  >
                    {/* Inner glow effect - white glow for white theme */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent blur-2xl scale-110" />
                    </div>

                    <div className="bg-white/10 rounded-xl p-4 w-fit mx-auto mb-6 transition-colors duration-150 group-hover:bg-white/20 relative z-10">
                      <value.icon className="w-8 h-8 text-white transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3 relative z-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{value.title}</h3>
                    <p className="text-stone-400 relative z-10">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Media Section - After Values/Principles */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ikuti Kami di Media Sosial</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative"
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-amber-500/30 blur-xl scale-110 rounded-xl" />
                    </div>
                    <Link
                      href="https://www.tiktok.com/@kamunara.group"
                      target="_blank"
                      className="relative z-10 flex items-center gap-3 px-6 py-3 bg-white text-black rounded-xl hover:bg-stone-200 transition-all shadow-md"
                    >
                      <svg className="w-5 h-5 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.24-1.72.88-2.14 1.71-.49.95-.44 2.18.14 3.07.45.75 1.2 1.29 2.05 1.48.85.19 1.75.06 2.5-.37.53-.3.91-.77 1.13-1.32.13-.39.18-.79.18-1.2V.02z"/>
                      </svg>
                      <span className="font-bold">TikTok</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      boxShadow: '0 22px 45px -12px rgba(236, 72, 153, 0.55)',
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative"
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30 blur-xl scale-110 rounded-xl" />
                    </div>
                    <Link
                      href="https://www.instagram.com/kamunara.group"
                      target="_blank"
                      className="relative z-10 flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-xl text-white hover:opacity-90 transition-all"
                    >
                      <svg className="w-6 h-6 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="font-bold">Instagram</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      boxShadow: '0 22px 45px -12px rgba(37, 99, 235, 0.55)',
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative"
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-blue-500/30 blur-xl scale-110 rounded-xl" />
                    </div>
                    <Link
                      href="https://facebook.com/kamunara.group"
                      target="_blank"
                      className="relative z-10 flex items-center gap-3 px-6 py-3 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition-all"
                    >
                      <Facebook className="w-6 h-6 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />
                      <span className="font-bold">Facebook</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <CTA
            title="Ingin Bekerja Sama?"
            description="Kami siap membantu Anda dalam transformasi digital. Mari diskusikan kebutuhan Anda"
            buttonText="Hubungi Kami"
            href="/kontak"
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

// anjay