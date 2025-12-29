'use client'
import { motion } from 'framer-motion'
import {
  Smartphone,
  MapPin,
  Database,
  Shield,
  Zap,
  Building2,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Dynamic import ClientMap – hanya load di client-side
const ClientMap = dynamic(() => import('@/components/ClientMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] md:h-[600px] bg-stone-800 rounded-2xl flex items-center justify-center text-stone-400">
      Memuat peta interaktif...
    </div>
  )
})

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import 'leaflet/dist/leaflet.css'

export default function ProdukPage() {
  // Data marker untuk peta
  const clientLocations = [
    { nama: 'Universitas Negeri A', produk: 'PIPOS', kota: 'Jakarta', lat: -6.2088, lng: 106.8456 },
    { nama: 'Menteri Koordinator B', produk: 'PIPOS & KKNKU', kota: 'Bandung', lat: -6.9175, lng: 107.6191 },
    { nama: 'Rumah Sakit C', produk: 'PIPOS', kota: 'Surabaya', lat: -7.2575, lng: 112.7521 },
    { nama: 'Perusahaan Swasta D', produk: 'KKNKU', kota: 'Medan', lat: 3.5952, lng: 98.6722 },
    { nama: 'Sekolah Swasta E', produk: 'PIPOS', kota: 'Yogyakarta', lat: -7.7956, lng: 110.3695 },
    { nama: 'Universitas Khairun', produk: 'PIPOS & KKNKU', kota: 'Ternate', lat: 1.8047, lng: 127.3821 }
  ]

  return (
    <>
      <Navbar />
      
      {/* 
         BACKGROUND UPDATE (DISAMAKAN DENGAN HOME PAGE):
         - Base color diganti ke 'neutral-950'.
         - Glow effects ditambahkan untuk kesan modern & elegan.
         - Konten utama dibungkus relative z-10.
      */}
      <main className="relative pt-32 min-h-screen bg-neutral-950 overflow-hidden">
        
        {/* Elemen Dekorasi Background (Glow Effects) */}
        {/* Cahaya Amber hangat di kiri atas */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Cahaya Indigo/Deep Blue di kanan bawah */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Gradient Overlay untuk tekstur halus (Vignette) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />

        {/* Content Wrapper dengan z-index agar berada di atas dekorasi */}
        <div className="relative z-10 pb-12">
          
          {/* Hero Section */}
          <section className="pb-16 px-4 text-center">
            <div className="container mx-auto max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Produk
                <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Kami
                </span>
              </motion.h1>
              <p className="text-xl text-stone-300 max-w-3xl mx-auto">
                Solusi digital terintegrasi yang dirancang untuk memenuhi kebutuhan bisnis modern
              </p>
            </div>
          </section>

          {/* Section Produk: PIPOS & KKNKU */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              
              {/* PIPOS */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -8,
                        scale: 1.04,
                        boxShadow: '0 15px 30px -8px rgba(245, 158, 11, 0.45)',
                        transition: { duration: 0.14, ease: 'easeOut' }
                      }}
                      className="group relative inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 overflow-hidden"
                    >
                      {/* Glow untuk badge */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-150 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-transparent blur-xl scale-110" />
                      </div>
                      <Database className="w-4 h-4 text-amber-400 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-6" />
                      <span className="text-amber-400 text-sm font-medium transition-colors duration-150 group-hover:text-amber-200">
                        Manajemen Kasir
                      </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">PIPOS</h2>
                    <p className="text-lg text-stone-300 leading-relaxed">
                      Sistem Manajemen Kasir yang komprehensif untuk membantu toko dan bisnis mengelola transaksi dengan efisien. PIPOS menyediakan 3 level akses: Owner untuk kontrol penuh, Admin untuk manajemen operasional, dan Kasir untuk transaksi harian. Dilengkapi dengan fitur canggih untuk pelaporan dan analisis bisnis.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-stone-300">
                        <Shield className="w-5 h-5 text-amber-400" />
                        <span>3 Level akses: Owner, Admin, Kasir</span>
                      </div>
                      <div className="flex items-center gap-3 text-stone-300">
                        <Zap className="w-5 h-5 text-amber-400" />
                        <span>Transaksi penjualan real-time</span>
                      </div>
                      <div className="flex items-center gap-3 text-stone-300">
                        <Database className="w-5 h-5 text-amber-400" />
                        <span>Laporan dan analisis bisnis lengkap</span>
                      </div>
                    </div>
                  </div>

                  {/* === KOTAK PIPOS (HOVER DISAMAKAN DENGAN HOME) === */}
                  <motion.div
                    whileHover={{
                      y: -14,
                      scale: 1.045,
                      boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-3xl p-8 overflow-hidden"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                    </div>

                    <div className="bg-neutral-800/50 rounded-2xl p-10 text-center relative z-10">
                      <Database className="w-32 h-32 mx-auto text-amber-400 mb-6 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />
                      <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-150 group-hover:text-amber-200">
                        PIPOS
                      </h3>
                      <p className="text-stone-400 transition-colors duration-150 group-hover:text-stone-100">
                        Point of Sale System dengan 3 Role Akses
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>


              {/* KKNKU */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* === KOTAK KKNKU (HOVER DISAMAKAN DENGAN HOME) === */}
                  <motion.div
                    whileHover={{
                      y: -14,
                      scale: 1.045,
                      boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-3xl p-8 overflow-hidden order-2 lg:order-1"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                    </div>

                    <div className="bg-neutral-800/50 rounded-2xl p-10 text-center relative z-10">
                      <Smartphone className="w-32 h-32 mx-auto text-amber-400 mb-6 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />
                      <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-150 group-hover:text-amber-200">
                        KKNKU
                      </h3>
                      <p className="text-stone-400 transition-colors duration-150 group-hover:text-stone-100">
                        Kuliah Kerja Nyata Universitas Khairun
                      </p>
                    </div>
                  </motion.div>

                  {/* TEKS KKNKU (TIDAK DIUBAH) */}
                  <div className="space-y-6 order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2">
                      <Smartphone className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 text-sm font-medium">Manajemen KKN</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">KKNKU</h2>
                    <p className="text-lg text-stone-300 leading-relaxed">
                      Website manajemen Kuliah Kerja Nyata (KKN) untuk Universitas Khairun Ternate. Sistem terintegrasi untuk mengelola pendaftaran KKN, pengurusan berkas, dan pemilihan lokasi KKN dengan mudah dan terorganisir.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-stone-300">
                        <Shield className="w-5 h-5 text-amber-400" />
                        <span>Pendaftaran dan verifikasi mahasiswa</span>
                      </div>
                      <div className="flex items-center gap-3 text-stone-300">
                        <Zap className="w-5 h-5 text-amber-400" />
                        <span>Manajemen berkas dan dokumen KKN</span>
                      </div>
                      <div className="flex items-center gap-3 text-stone-300">
                        <Smartphone className="w-5 h-5 text-amber-400" />
                        <span>Pemilihan dan pengelolaan lokasi KKN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>


              {/* Peta interaktif */}
              <div className="h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-lg">
                <ClientMap markers={clientLocations} />
              </div>

              {/* Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12"
              >
                {[
                  { label: "Total Instansi", value: "6+", icon: Building2 },
                  { label: "Kota Tercover", value: "6", icon: MapPin },
                  { label: "PIPOS", value: "4", icon: Database },
                  { label: "KKNKU", value: "3", icon: Smartphone }
                ].map((stat, i) => (
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
                    className="group relative p-6 bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 text-center overflow-hidden rounded-2xl"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                    </div>

                    <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />
                    
                    <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2 transition-colors duration-150 group-hover:text-amber-200">
                      {stat.value}
                    </div>
                    
                    <p className="text-stone-300 text-sm transition-colors duration-150 group-hover:text-stone-100">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Daftar Instansi - dengan hover pada card lokasi */}
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Universitas Negeri A",
                    location: "Jakarta",
                    product: "PIPOS",
                    description: "Sistem kasir terpadu untuk pembayaran UKT, semester, dan layanan administrasi mahasiswa dengan 3 level akses",
                    applications: ["Pembayaran UKT", "Kasir Administrasi", "Laporan Keuangan", "Manajemen User"]
                  },
                  {
                    name: "Menteri Koordinator B",
                    location: "Bandung",
                    product: "PIPOS & KKNKU",
                    description: "Integrasi sistem kasir dan website KKN untukUniversitas Khairun Ternate - mengelola layanan publik dan program Kuliah Kerja Nyata",
                    applications: ["Kasir Layanan", "Pendaftaran KKN", "Manajemen Lokasi", "Pelaporan"]
                  },
                  {
                    name: "Rumah Sakit C",
                    location: "Surabaya",
                    product: "PIPOS",
                    description: "Sistem kasirRS untuk pembayaran pasien, layanan kesehatan, dan manajemen administrasi rumah sakit dengan kontrol akses",
                    applications: ["Kasir Pasien", "Pembayaran Tindakan", "Laporan Keuangan", "Manajemen Admin"]
                  },
                  {
                    name: "Perusahaan Swasta D",
                    location: "Medan",
                    product: "KKNKU",
                    description: "Website KKN untuk Universitas Khairun Ternate - sistem manajemen mahasiswa yang akan melaksanakan Kuliah Kerja Nyata dengan fitur pendaftaran dan seleksi",
                    applications: ["Pendaftaran KKN", "Seleksi Mahasiswa", "Manajemen Lokasi", "Tracking Progress"]
                  },
                  {
                    name: "Sekolah Swasta E",
                    location: "Yogyakarta",
                    product: "PIPOS",
                    description: "Sistem kasir sekolah untuk pembayaran SPP, kegiatan, dan administrasi sekolah dengan sistem user management",
                    applications: ["Kasir SPP", "Pembayaran Kegiatan", "Laporan Keuangan", "Manajemen User"]
                  },
                  {
                    name: "Universitas Khairun",
                    location: "Ternate",
                    product: "PIPOS & KKNKU",
                    description: "Sistem terintegrasi untuk manajemen kasir universitas dan website KKN - mengelola pembayaran mahasiswa dan program Kuliah Kerja Nyata",
                    applications: ["Kasir Universitas", "Pendaftaran KKN", "Berkas Mahasiswa", "Manajemen Lokasi"]
                  }
                ].map((instansi, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      y: -14,
                      scale: 1.045,
                      boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-2xl p-6 overflow-hidden transition-all"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                    </div>

                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className="bg-amber-500/10 rounded-xl p-3">
                        <Building2 className="w-6 h-6 text-amber-400 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white transition-colors duration-150 group-hover:text-amber-200">
                          {instansi.name}
                        </h3>
                        <p className="text-stone-400 text-sm flex items-center gap-1 transition-colors duration-150 group-hover:text-stone-100">
                          <MapPin className="w-3 h-3" /> {instansi.location}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 relative z-10">
                      <span className="inline-block bg-amber-500/10 text-amber-400 text-sm px-3 py-1 rounded-full transition-colors duration-150 group-hover:bg-amber-500/20 group-hover:text-amber-200">
                        {instansi.product}
                      </span>
                    </div>

                    <p className="text-stone-300 mb-4 relative z-10 transition-colors duration-150 group-hover:text-stone-100">
                      {instansi.description}
                    </p>

                    <div className="border-t border-stone-700 pt-4 relative z-10">
                      <h4 className="text-amber-400 text-sm font-medium mb-3 transition-colors duration-150 group-hover:text-amber-200">
                        Aplikasi yang Digunakan:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {instansi.applications.map((app, i) => (
                          <span key={i} className="bg-neutral-800 text-stone-300 text-xs px-2 py-1 rounded transition-colors duration-150 group-hover:bg-neutral-700 group-hover:text-stone-100">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <CTA
            title="Tertarik dengan Produk Kami?"
            description="Diskusikan kebutuhan bisnis Anda dengan tim kami dan temukan solusi yang tepat"
            buttonText="Hubungi Kami"
            href="/kontak"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}