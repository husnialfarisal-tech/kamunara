'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Check, X, Database, Shield, Zap, Smartphone, Building2, MapPin, 
  ArrowLeft, Layers, BarChart3, Users, Printer, ScanLine, Youtube 
} from 'lucide-react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ============================================
// DATA & CONFIG
// ============================================

const packagePrices = {
  standar: { monthly: 99999, annual: 1080000 },
  prof: { monthly: 299999, annual: 4320000 },
  excl: { monthly: 999999, annual: 10800000 }
}

const features = [
  { standar: 'Single User', prof: 'Multi User (1 Owner, 1 Admin, 4 Kasir)', excl: 'User (Sesuai kebutuhan)' },
  { standar: '1000 Produk', prof: '5000 Produk (100 Bergambar)', excl: 'Produk (Sesuai kebutuhan)' },
  { standar: 'Custom Tampilan dan Fitur', prof: 'Custom Tampilan dan Fitur', excl: 'Custom Tampilan dan Fitur (Sesuai kebutuhan)' },
  { standar: 'Laporan Transaksi (Basic)', prof: 'Laporan Transaksi (Advance)', excl: 'Laporan Transaksi (Sesuai kebutuhan)' },
  { standar: 'Fitur Diskon Produk', prof: 'Fitur Diskon Produk', excl: 'Fitur Diskon Produk (Sesuai kebutuhan)' },
  { standar: 'Scan Barcode', prof: 'Scan Barcode', excl: 'Scan Barcode (Sesuai kebutuhan)' },
  { standar: 'Generate Barcode', prof: 'Generate Barcode', excl: 'Generate Barcode (Sesuai kebutuhan)' },
  { standar: 'Print Struk', prof: 'Print Struk', excl: 'Print Struk (Sesuai kebutuhan)' },
  { standar: 'Manajemen Pelanggan', prof: 'Manajemen Pelanggan', excl: 'Manajemen Pelanggan (Sesuai kebutuhan)' },
  { standar: 'Pembayaran Digital (Coming Soon)', prof: 'Pembayaran Digital (Coming Soon)', excl: 'Pembayaran Digital (Coming Soon)' },
  { standar: 'Pengaturan Operasi Toko', prof: 'Pengaturan Operasi Toko', excl: 'Pengaturan Operasi Toko (Sesuai kebutuhan)' },
  { standar: 'Dukungan Multi-Outlet', prof: 'Dukungan Multi-Outlet (Add-On)', excl: 'Dukungan Multi-Outlet (Sesuai kebutuhan)' },
  { standar: 'Backup & Recovery Data', prof: 'Backup & Recovery Data', excl: 'Backup & Recovery Data (Sesuai kebutuhan)' },
  { standar: 'Analisis & Laporan (Dasar)', prof: 'Analisis & Laporan (Lengkap)', excl: 'Analisis & Laporan (Sesuai kebutuhan)' },
  { standar: 'Koneksi NOIbook (Coming Soon)', prof: 'Koneksi NOIBook (Coming Soon)', excl: 'Koneksi NOIBook (Coming Soon)' },
  { standar: 'Koneksi KITCapital (Coming Soon)', prof: 'Koneksi KITCapital (Coming Soon)', excl: 'Koneksi KITCapital (Coming Soon)' }
]

const enabledFeatures = {
  standar: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false],
  prof: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  excl: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
}

const clientLocations = [
  { nama: 'Toko Makmur', produk: 'PIPos', kota: 'Sagea', lat: 0.464371, lng: 128.096860 },
  { nama: 'Toko Rizky', produk: 'PIPos', kota: 'Saketa', lat: -0.356588, lng: 127.846552 },
  { nama: 'Toko Sembako', produk: 'PIPos', kota: 'Sofifi', lat: 0.75, lng: 127.55 },
  { nama: 'Toko Peralatan', produk: 'PIPos', kota: 'Tobelo', lat: 1.73, lng: 127.99 },
  { nama: 'Jati Mart', produk: 'PIPos', kota: 'Buli', lat: 0.83, lng: 128.27 },
  { nama: 'Universitas Khairun', produk: 'KKNKU', kota: 'Ternate', lat: 0.7890, lng: 127.3890 }
]

const institutions = [
  { name: "Toko Makmur", location: "Sagea, Halmahera Tengah", product: "PIPos", description: "Sistem kasir toko untuk pengelolaan penjualan harian, stok barang, dan laporan keuangan secara real-time.", applications: ["Kasir Penjualan", "Manajemen Stok", "Laporan Harian", "Manajemen User"] },
  { name: "Toko Rizky", location: "Saketa, Halmahera Selatan", product: "PIPos", description: "Aplikasi kasir modern untuk toko sembako dengan fitur pencatatan transaksi dan kontrol stok yang mudah digunakan.", applications: ["Kasir Sembako", "Manajemen Produk", "Laporan Penjualan", "Riwayat Transaksi"] },
  { name: "Toko Sembako", location: "Sofifi, Halmahera", product: "PIPos", description: "Sistem kasir terintegrasi untuk toko kebutuhan pokok guna mempermudah transaksi dan monitoring stok barang.", applications: ["Kasir Toko", "Manajemen Stok", "Laporan Bulanan", "Manajemen Harga"] },
  { name: "Toko Peralatan", location: "Tobelo, Halmahera Utara", product: "PIPos", description: "Sistem kasir untuk toko peralatan dengan dukungan pencatatan item besar, stok gudang, dan laporan penjualan.", applications: ["Kasir Peralatan", "Manajemen Gudang", "Laporan Penjualan", "Manajemen Produk"] },
  { name: "Jati Mart", location: "Buli, Halmahera Timur", product: "PIPos", description: "Aplikasi kasir untuk minimarket yang mendukung transaksi cepat, stok otomatis, dan laporan keuangan.", applications: ["Kasir Minimarket", "Manajemen Stok", "Laporan Keuangan", "Manajemen User"] },
  { name: "Universitas Khairun", location: "Ternate", product: "PIPos & KKNKU", description: "Sistem terintegrasi untuk manajemen kasir universitas dan website KKN - mengelola pembayaran mahasiswa dan program Kuliah Kerja Nyata", applications: ["Kasir Universitas", "Pendaftaran KKN", "Berkas Mahasiswa", "Manajemen Lokasi"] }
]

// ============================================
// COMPONENTS
// ============================================

function HeroSection() {
  return (
    <section className="pb-16 px-4 text-center">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold font-heading text-black mb-6 leading-tight"
        >
          Produk
          <span className="block bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
            Kami
          </span>
        </motion.h1>
        <p className="text-xl text-black max-w-3xl mx-auto">
          Solusi digital terintegrasi yang dirancang untuk memenuhi kebutuhan bisnis modern
        </p>
      </div>
    </section>
  )
}

// --------------------------------------------------------
// NEW: DETAIL VIEW PIPos
// --------------------------------------------------------
function PIPosDetailView({ onBack }: { onBack: () => void }) {
  const detailFeatures = [
    { icon: ScanLine, title: "Point of Sales Modern", desc: "Antarmuka kasir yang responsif, mendukung scan barcode, dan pencarian produk super cepat." },
    { icon: Layers, title: "Manajemen Inventori", desc: "Pelacakan stok real-time, notifikasi stok menipis, dan manajemen varian produk." },
    { icon: BarChart3, title: "Laporan Lengkap", desc: "Analisis penjualan harian, mingguan, bulanan, hingga laba rugi yang otomatis tergenerate." },
    { icon: Users, title: "Manajemen Karyawan", desc: "Kontrol hak akses (Owner, Admin, Kasir) dan pantau kinerja shift karyawan." },
    { icon: Printer, title: "Dukungan Hardware", desc: "Kompatibel dengan berbagai printer thermal (Bluetooth/USB) dan barcode scanner." },
    { icon: Shield, title: "Keamanan Data", desc: "Backup data otomatis ke cloud untuk mencegah kehilangan riwayat transaksi." },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pb-20"
    >
      {/* Tombol Kembali */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-500 hover:text-black mb-8 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Kembali ke Daftar Produk</span>
      </button>

      {/* Header Detail */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 bg-white rounded-full flex items-center justify-center border border-zinc-200 shadow-[0_0_60px_-15px_rgba(0,0,0,0.08)]">
                 <Image
                    src="/images/logo_pipos_copy.png"
                    alt="PIPos Logo Large"
                    width={200}
                    height={200}
                    className="object-contain animate-pulse-slow"
                  />
            </div>
        </div>
        <div className="w-full lg:w-2/3 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">PIPos <span className="text-amber-500">System</span></h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                PIPos (Point of Sales System) bukan sekadar aplikasi kasir biasa. Ini adalah ekosistem manajemen ritel yang dirancang untuk memangkas waktu administrasi dan meningkatkan profitabilitas. 
                Dengan PIPos, Anda tidak hanya mencatat penjualan, tetapi juga memahami pola beli pelanggan, mengelola stok tanpa pusing, dan mengambil keputusan bisnis berdasarkan data akurat.
            </p>
            <div className="flex flex-wrap gap-3">
                <span className="bg-zinc-100 text-zinc-700 border border-zinc-200 px-4 py-1.5 rounded-full text-sm">Cloud Based</span>
                <span className="bg-zinc-100 text-zinc-700 border border-zinc-200 px-4 py-1.5 rounded-full text-sm">Real-time Sync</span>
                <span className="bg-zinc-100 text-zinc-700 border border-zinc-200 px-4 py-1.5 rounded-full text-sm">Multi Device</span>
            </div>
        </div>
      </div>

      {/* Grid Fitur Detail */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-black mb-8 text-center">Fitur Unggulan</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailFeatures.map((fitur, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl hover:border-amber-500/30 transition-colors">
                    <fitur.icon className="w-10 h-10 text-amber-500 mb-4" />
                    <h4 className="text-xl font-bold text-black mb-2">{fitur.title}</h4>
                    <p className="text-zinc-600 text-sm leading-relaxed">{fitur.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Demo Section */}
      <div className="bg-[#b5d5d0] border border-zinc-200 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden shadow-sm">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -z-10" />
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -z-10" />
         
         <h3 className="text-3xl font-bold text-black mb-4">Lihat PIPos Beraksi</h3>
         <p className="text-black mb-8 max-w-2xl mx-auto">
           Saksikan bagaimana PIPos dapat menyederhanakan operasional bisnis Anda dalam hitungan menit. Tonton demo singkat penggunaan aplikasi.
         </p>

         <a 
           href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-3 bg-black hover:bg-zinc-800 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-black/20 group"
         >
            <Youtube className="w-7 h-7 text-white" />
            <span className="text-lg">Tonton Demo di YouTube</span>
         </a>
         
         <p className="mt-4 text-xs text-zinc-700">
           *Anda akan diarahkan ke halaman YouTube
         </p>
      </div>

    </motion.div>
  )
}

function PIPosSection({ onDetailClick }: { onDetailClick: () => void }) {
  return (
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
            whileHover={{ y: -4, scale: 1.02, boxShadow: '0 8px 20px -6px rgba(0, 0, 0, 0.1)', transition: { duration: 0.14, ease: 'easeOut' } }}
            className="group relative inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-2"
          >
            <Database className="w-4 h-4 text-black transition-transform duration-150 group-hover:scale-110 group-hover:-rotate-3" />
            <span className="text-black text-sm font-medium transition-colors duration-150">Manajemen Kasir</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">PIPos</h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Sistem Manajemen Kasir yang komprehensif untuk membantu toko dan bisnis mengelola transaksi dengan efisien. PIPos menyediakan 3 level akses: Owner untuk kontrol penuh, Admin untuk manajemen operasional, dan Kasir untuk transaksi harian.
          </p>
          <div className="space-y-3 pb-4">
            <div className="flex items-center gap-3 text-black"><Shield className="w-5 h-5 text-black" /><span>3 Level akses: Owner, Admin, Kasir</span></div>
            <div className="flex items-center gap-3 text-black"><Zap className="w-5 h-5 text-black" /><span>Transaksi penjualan real-time</span></div>
            <div className="flex items-center gap-3 text-black"><Database className="w-5 h-5 text-black" /><span>Laporan dan analisis bisnis lengkap</span></div>
          </div>
          
          {/* Tombol Trigger untuk melihat detail */}
          <button
            onClick={onDetailClick}
            className="inline-flex items-center gap-2 text-black hover:text-zinc-700 font-semibold border-b border-black/30 hover:border-black transition-all pb-1 group"
          >
            Lihat deskripsi PIPos
            <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* PIPos Card - Clickable as well */}
        <motion.div
          onClick={onDetailClick}
          whileHover={{ y: -14, scale: 1.045, boxShadow: '0 22px 45px -12px rgba(0, 0, 0, 0.1)', transition: { duration: 0.14, ease: 'easeOut' } }}
          className="group relative bg-[#f3f7e6] border border-zinc-200 hover:border-zinc-900 rounded-3xl p-8 overflow-hidden cursor-pointer shadow-sm"
        >
          {/* Overlay Hint on Hover */}
          <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
             <span className="bg-black text-white px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Lihat Detail
             </span>
          </div>

          <div className="bg-transparent rounded-2xl p-10 text-center relative z-10 border border-transparent">
            <div className="w-32 h-32 mx-auto mb-6 transition-transform duration-150 group-hover:scale-120 group-hover:-rotate-3">
              <Image
                src="/images/logo_pipos_copy.png"
                alt="PIPos Logo"
                width={138}
                height={138}
                className="object-contain"
                priority
              />
            </div>

            <h3 className="text-2xl font-bold text-black mb-2 transition-colors duration-150">PIPos</h3>
            <p className="text-zinc-600 transition-colors duration-150">Point of Sale System dengan 3 Role Akses</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function SubscriptionSection() {
  const [isMonthly, setIsMonthly] = useState(true)
  const formatPrice = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  const renderFeatureText = (text: string) => {
    if (text.includes('(Coming Soon)')) {
      const parts = text.split('(Coming Soon)')
      return <>{parts[0]}<span className="text-zinc-500">(Coming Soon)</span></>
    }
    return text
  }

  // UPDATE: Logic warna kartu berdasarkan tipe paket untuk efek 3D
  const getCardColor = (pkg: string) => {
    switch(pkg) {
        // Standard & Exclusive menggunakan Sage Green dengan Gradient halus
        case 'standar': return 'bg-gradient-to-br from-[#dbe8e2] to-[#c4dcd3]'
        case 'prof': return 'bg-gradient-to-br from-[#eaf4f3] to-[#dbeadd]' // Professional menggunakan Blue-Green
        case 'excl': return 'bg-gradient-to-br from-[#dbe8e2] to-[#c4dcd3]' // Exclusive sama seperti Standard
        default: return 'bg-zinc-50'
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.02, boxShadow: '0 8px 20px -6px rgba(0, 0, 0, 0.1)', transition: { duration: 0.14, ease: 'easeOut' } }}
            className="group relative inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-2 mb-6"
          >
            <Database className="w-4 h-4 text-black transition-transform duration-150 group-hover:scale-110 group-hover:-rotate-3" />
            <span className="text-black text-sm font-medium transition-colors duration-150">Berlangganan PIPos</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-black mb-6">Pilih Paket yang Tepat</h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Dapatkan akses penuh ke fitur PIPos dengan paket berlangganan yang sesuai kebutuhan bisnis Anda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-zinc-100 border border-zinc-200 rounded-full p-2 flex items-center gap-2 shadow-sm">
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isMonthly ? 'bg-black text-white shadow-md' : 'text-zinc-500 hover:text-black'
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isMonthly ? 'bg-black text-white shadow-md' : 'text-zinc-500 hover:text-black'
              }`}
            >
              Tahunan
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {['standar', 'prof', 'excl'].map((pkg, idx) => (
            <motion.div
              key={pkg}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              
              // 3D CARD STYLING START
              whileHover={{
                y: -16, // Floating lebih tinggi saat hover
                scale: 1.03, // Scale sedikit
                boxShadow: '0 40px 80px -12px rgba(0,0,0,0.25)', // Bayangan lebih besar dan gelap
                // PERUBAHAN: Duration dipercepat menjadi 0.2 agar lebih responsif
                transition: { duration: 0.2, ease: 'easeOut' }, 
              }}
              className={`
                group relative 
                ${getCardColor(pkg)} 
                border border-white/40 rounded-[2.5rem] overflow-hidden 
                shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500
                ${pkg === 'prof' 
                  ? 'transform scale-105 z-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border-black/5' 
                  : 'z-10'}
              `}
              >
              {/* 3D CARD STYLING END */}
              
              <div className="absolute top-3 right-3 z-20 flex flex-col gap-1 items-end">
                {pkg === 'prof' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="
                      bg-black text-white border border-black
                      text-[10px] md:text-xs font-bold px-3 py-1 rounded-full
                      shadow-lg shadow-black/20 uppercase tracking-wider
                    "
                  >
                    POPULER
                  </motion.div>
                )}

                {!isMonthly && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="
                      bg-white/90 backdrop-blur-sm border border-zinc-200
                      text-black text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full shadow-sm
                    "
                  >
                    Diskon 10%
                  </motion.div>
                )}
              </div>

              {/* Glossy Overlay for Premium Feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none opacity-60" />

              <div className="relative z-10 px-6 pt-14 pb-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-2 tracking-tight">
                    {pkg === 'standar' ? 'Standard' : pkg === 'prof' ? 'Professional' : 'Exclusive'}
                  </h3>
                  <p className="text-zinc-600 text-xs md:text-sm min-h-[40px]">
                    {pkg === 'standar' ? 'Cocok untuk toko kecil' : pkg === 'prof' ? 'Ideal untuk bisnis berkembang' : 'Solusi enterprise lengkap'}
                  </p>

                  <div className="mt-5">
                    {isMonthly ? (
                      <div className="text-2xl md:text-3xl font-bold text-black">
                        <div className="line-through text-zinc-500 text-sm md:text-base opacity-70 mb-1">
                          {pkg === 'standar' ? 'Rp 200.000' : pkg === 'prof' ? 'Rp 600.000' : 'Rp 1.500.000'}
                        </div>
                        {formatPrice(packagePrices[pkg as keyof typeof packagePrices].monthly)}
                        <span className="text-sm text-zinc-600 font-normal">/bulan</span>
                      </div>
                    ) : (
                      <div className="text-2xl md:text-3xl font-bold text-black">
                        <div className="line-through text-zinc-500 text-sm md:text-base opacity-70 mb-1">
                          {pkg === 'standar' ? 'Rp 1.200.000' : pkg === 'prof' ? 'Rp 4.800.000' : 'Rp 12.000.000'}
                        </div>
                        {formatPrice(packagePrices[pkg as keyof typeof packagePrices].annual)}
                        <span className="text-sm text-zinc-600 font-normal">/tahun</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  {features.map((feature, index) => {
                    const isEnabled = enabledFeatures[pkg as keyof typeof enabledFeatures][index]
                    return (
                      <div key={index} className="flex items-start gap-3 text-zinc-600">
                        <div
                          className={`mt-0.5 w-5 h-5 min-w-[1.25rem] rounded-full flex items-center justify-center ${
                            isEnabled ? 'bg-black/10' : 'bg-transparent border border-zinc-300'
                          }`}
                        >
                          {isEnabled ? <Check className="w-3 h-3 text-black" /> : <X className="w-3 h-3 text-zinc-400" />}
                        </div>
                        <span className={`text-sm text-left ${isEnabled ? 'text-black font-medium' : 'text-zinc-400'}`}>
                          {renderFeatureText(feature[pkg as keyof typeof feature])}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* UPDATE: TOMBOL DENGAN EFEK GOOEY */}
                <motion.button
                  onClick={() =>
                    window.open(
                      `https://wa.me/628131415160?text=Halo, saya ingin membeli paket ${
                        pkg === 'standar' ? 'Standard' : pkg === 'prof' ? 'Professional' : 'Exclusive'
                      } PIPos`,
                      '_blank'
                    )
                  }
                  whileHover={{ scale: 1.05 }} // Scale saat hover
                  whileTap={{ scale: 0.9 }} // Squish saat di-klik
                  // Fisika Spring untuk efek "Gooey/Jelly"
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="
                    w-full bg-black hover:bg-zinc-800 
                    text-white font-semibold py-3 px-4 rounded-xl 
                    shadow-md hover:shadow-xl hover:shadow-black/30
                    text-sm
                  "
                >
                  Pilih {pkg === 'standar' ? 'Standard' : pkg === 'prof' ? 'Professional' : 'Exclusive'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProyekKamiSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold font-heading text-black mb-6 leading-tight"
        >
          Proyek
          <span className="block bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">Kami</span>
        </motion.h2>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          Berbagai proyek yang telah kami kerjakan untuk membantu transformasi digital bisnis dan institusi
        </p>
      </div>
    </section>
  )
}

function KKNKUSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          whileHover={{ y: -14, scale: 1.045, boxShadow: '0 22px 45px -12px rgba(0, 0, 0, 0.1)', transition: { duration: 0.14, ease: 'easeOut' } }}
          className="group relative bg-[#f3f7e6] border border-zinc-200 hover:border-zinc-900 rounded-3xl p-8 overflow-hidden order-2 lg:order-1 shadow-sm"
        >
          <div className="bg-transparent rounded-2xl p-10 text-center relative z-10 border border-transparent">

            <div className="w-32 h-32 mx-auto mb-6 transition-transform duration-150 group-hover:scale-120 group-hover:-rotate-3">
              <Image
                src="/images/logo.png"
                alt="KKNKU Logo"
                width={128}
                height={128}
                className="object-contain"
                priority
              />
            </div>

            <h3 className="text-2xl font-bold text-black mb-2 transition-colors duration-150">
              KKNKU
            </h3>
            <p className="text-zinc-600 transition-colors duration-150">
              Kuliah Kerja Nyata Universitas Khairun
            </p>
          </div>
        </motion.div>

        <div className="space-y-6 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.02, boxShadow: '0 8px 20px -6px rgba(0, 0, 0, 0.1)', transition: { duration: 0.14, ease: 'easeOut' } }}
            className="group relative inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-2"
          >
            <Smartphone className="w-4 h-4 text-black transition-transform duration-150 group-hover:scale-110 group-hover:-rotate-3" />
            <span className="text-black text-sm font-medium transition-colors duration:150">
              Manajemen KKN
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold font-heading text-black">KKNKU</h2>

          <p className="text-lg text-zinc-600 leading-relaxed">
            Website manajemen Kuliah Kerja Nyata (KKN) untuk Universitas Khairun Ternate. Sistem terintegrasi untuk mengelola pendaftaran KKN, pengurusan berkas, dan pemilihan lokasi KKN dengan mudah dan terorganisir.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-zinc-600">
              <Shield className="w-5 h-5 text-black" />
              <span>Pendaftaran dan verifikasi mahasiswa</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-600">
              <Zap className="w-5 h-5 text-black" />
              <span>Manajemen berkas dan dokumen KKN</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-600">
              <Smartphone className="w-5 h-5 text-black" />
              <span>Pemilihan dan pengelolaan lokasi KKN</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// --------------------------------------------------------
// NEW SECTION: MARQUEE LOGO (TRUSTED PARTNERS)
// --------------------------------------------------------
function TrustedPartnersSection() {
  const logos = Array(8).fill([
    { src: "/images/logo_pipos_copy.png", alt: "PIPos" },
    { src: "/images/logo_NOIbook.png", alt: "NOIbook" },
    { src: "/images/logo_KITkapital.png", alt: "KITkapital" },
    { src: "/images/logo_betarak.PNG", alt: "Betarak" },
    { src: "/images/logo.png", alt: "Universitas Khairun" },
  ]).flat()

  return (
    <section className="py-10 border-y border-zinc-200 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-6 text-center">
         <p className="text-sm text-zinc-400 uppercase tracking-widest font-medium">CLINET KAMUNARA</p>
      </div>
      
      {/* Container Marquee with optional fading mask */}
      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Wrapper Animasi */}
        <motion.div
          className="flex items-center gap-16 md:gap-32 px-50 min-w-max"
          animate={{ x: ["0%", "-100%"] }} 
          transition={{ 
            duration: 150, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {/* Render Logo 2 set untuk loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="relative group flex items-center justify-center h-20 md:h-28 w-48 md:w-72 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// --------------------------------------------------------
// NEW COMPONENT: CLIENT MAP TITLE
// --------------------------------------------------------
function ClientTitleSection() {
  return (
    <div className="container mx-auto px-4 pt-20 pb-8 text-center">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
       >
         <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
           <MapPin className="w-4 h-4 text-amber-400" />
           <span className="text-amber-400 text-sm font-medium">Jangkauan Kami</span>
         </div>
         <h2 className="text-4xl md:text-5xl font-bold font-heading text-black mb-4">
           Mitra & Persebaran <span className="text-amber-500">Klien</span>
         </h2>
         <p className="text-zinc-600 max-w-2xl mx-auto">
           Bisnis dan institusi yang telah mempercayakan operasional mereka menggunakan sistem PIPos di berbagai wilayah.
         </p>
       </motion.div>
    </div>
  )
}

const ClientMap = dynamic(() => import('@/components/ClientMap'), {
  ssr: false,
  loading: () => <div className="h-[400px] md:h-[600px] bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400">Memuat peta interaktif...</div>
})

function ClientMapSection() {
  return (
    <div className="h-[500px] sm:h-[600px] lg:h-[700px] w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-50">
      <ClientMap markers={clientLocations} />
    </div>
  )
}

function StatisticsSection() {
  const stats = [
    { label: "Total Instansi", value: "6", icon: Building2 },
    { label: "Kota Tercover", value: "6", icon: MapPin },
    { label: "PIPos", value: "4", icon: Database },
    { label: "KKNKU", value: "3", icon: Smartphone }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ y: -8, scale: 1.02, boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.1)', transition: { duration: 0.14, ease: 'easeOut' } }}
          className="group relative p-6 bg-[#f7f9ed] border border-zinc-200 hover:border-zinc-900 text-center overflow-hidden rounded-2xl shadow-sm"
        >
          <stat.icon className="w-8 h-8 text-black mx-auto mb-3 transition-transform duration-150 group-hover:scale-110 group-hover:-rotate-3" />
          <div className="text-3xl font-bold text-black mb-2 transition-colors duration-150">{stat.value}</div>
          <p className="text-zinc-600 text-sm transition-colors duration-150">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

function InstitutionsSection() {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {institutions.map((instansi, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.02, boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.1)', transition: { duration: 0.14, ease: 'easeOut' } }}
          className="group relative bg-[#f7f9ed] border border-zinc-200 hover:border-zinc-900 rounded-2xl p-6 overflow-hidden shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="bg-white/50 rounded-xl p-3">
              <Building2 className="w-6 h-6 text-black transition-transform duration-150 group-hover:scale-110 group-hover:-rotate-3" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black transition-colors duration-150">{instansi.name}</h3>
              <p className="text-zinc-600 text-sm flex items-center gap-1 transition-colors duration-150">
                <MapPin className="w-3 h-3 text-black" /> {instansi.location}
              </p>
            </div>
          </div>
          <div className="mb-4 relative z-10">
            <span className="inline-block bg-white/60 text-black text-sm px-3 py-1 rounded-full transition-colors duration:150 group-hover:bg-white group-hover:text-black">
              {instansi.product}
            </span>
          </div>
          <p className="text-zinc-600 mb-4 relative z-10 transition-colors duration:150 group-hover:text-black">
            {instansi.description}
          </p>
          <div className="border-t border-zinc-200 pt-4 relative z-10">
            <h4 className="text-black text-sm font-medium mb-3 transition-colors duration:150 group-hover:text-black">
              Aplikasi yang Digunakan:
            </h4>
            <div className="flex flex-wrap gap-2">
              {instansi.applications.map((app, i) => (
                <span
                  key={i}
                  className="bg-white/60 text-zinc-700 text-xs px-2 py-1 rounded transition-colors duration:150 group-hover:bg-white group-hover:text-black"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function ProdukPage() {
  const [activeView, setActiveView] = useState<'list' | 'PIPos-detail'>('list')

  return (
    <>
      <Navbar />
      <main className="relative pt-32 min-h-screen bg-white overflow-hidden">
        {/* Background Gradients - Subtle Light Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-white pointer-events-none" />

        <div className="relative z-10 pb-12">
          
          <AnimatePresence mode="wait">
            {activeView === 'list' ? (
              <motion.div
                key="list-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <HeroSection />
                
                {/* CONTENT SECTION START */}
                <section className="py-16 px-4">
                  <div className="container mx-auto space-y-24"> 
                    
                    {/* PIPos */}
                    <PIPosSection onDetailClick={() => setActiveView('PIPos-detail')} />
                    
                    {/* HARGA */}
                    <SubscriptionSection />
                    
                    {/* HEADER PROYEK */}
                    <ProyekKamiSection />
                    
                    {/* KKNKU */}
                    <KKNKUSection />
                  </div>
                </section>

                {/* --- BAGIAN BARU: MARQUEE LOGO --- */}
                {/* Diletakkan full width di luar container agar menyentuh ujung layar */}
                <TrustedPartnersSection />

                {/* --- BAGIAN BARU: CLIENT MAP & LIST --- */}
                <section className="px-4 pb-16">
                    {/* JUDUL BARU SEBELUM CLIENT */}
                    <ClientTitleSection />

                    <div className="container mx-auto">
                      <ClientMapSection />
                      <StatisticsSection />
                      <InstitutionsSection />
                    </div>
                </section>
                {/* CONTENT SECTION END */}

              </motion.div>
            ) : (
              // TAMPILAN DETAIL
              <motion.div key="detail-view">
                 <PIPosDetailView onBack={() => setActiveView('list')} />
              </motion.div>
            )}
          </AnimatePresence>
        </div> {/* Menutup div wrapper 'pb-12' sebelumnya agar section hitam di bawahnya bisa full-width dan mentok ke footer */}

        {/* SECTION BARU: CTA FULL WIDTH BLACK (Tanpa Kotak Kartu) */}
        <section className="relative w-full bg-black py-24 px-4 text-center mt-20">
          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.h2 
              key={activeView} // Re-animate on view change
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
            >
              {activeView === 'list' ? "Tertarik dengan Produk Kami?" : "Siap Menggunakan PIPos?"}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              Diskusikan kebutuhan bisnis Anda dengan tim kami dan temukan solusi yang tepat
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