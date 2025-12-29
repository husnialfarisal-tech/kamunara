'use client'
import { motion, AnimatePresence } from 'framer-motion'
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
import { useState } from 'react'
import { Check, X } from 'lucide-react'

export default function ProdukPage() {
  const [isMonthly, setIsMonthly] = useState(true)

  const packagePrices = {
    standar: { monthly: 100000, annual: 1080000 },
    prof: { monthly: 400000, annual: 4320000 },
    excl: { monthly: 1000000, annual: 10800000 }
  }

  const formatPrice = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  const features = [
    { standar: '1 Toko', prof: '5 Toko', excl: 'Unlimited Toko' },
    { standar: 'Kasir Penjualan', prof: 'Kasir Penjualan Advanced', excl: 'Full POS Features' },
    { standar: 'Manajemen Stok Dasar', prof: 'Manajemen Stok Lengkap', excl: 'Manajemen Stok Advanced' },
    { standar: 'Laporan Harian', prof: 'Laporan Analisis', excl: 'Laporan Business Intelligence' },
    { standar: '3 User Account', prof: '15 User Account', excl: 'Unlimited User Account' },
    { standar: 'Support Email', prof: 'Priority Support', excl: '24/7 Premium Support' },
    { standar: 'Integrasi Payment Gateway', prof: 'Integrasi Payment Gateway', excl: 'API Access & Integrations' },
    { standar: 'Backup Otomatis', prof: 'Backup Otomatis', excl: 'Custom Development' },
    { standar: 'API Access & Integrations', prof: 'API Access & Integrations', excl: 'White Label Solution' },
    { standar: 'Custom Development', prof: 'Custom Development', excl: 'Multi-currency Support' }
  ]

  const enabledFeatures = {
    standar: [true, true, true, true, true, true, false, false, false, false],
    prof: [true, true, true, true, true, true, true, true, false, false],
    excl: [true, true, true, true, true, true, true, true, true, true]
  }
  // Data marker untuk peta
  const clientLocations = [
  { nama: 'Toko Makmur', produk: 'PIPOS', kota: 'Sagea', lat: 0.464371, lng: 128.096860 }, 
  { nama: 'Toko Rizky', produk: 'PIPOS', kota: 'Saketa', lat: -0.356588, lng: 127.846552 },
  { nama: 'Toko Sembako', produk: 'PIPOS', kota: 'Sofifi', lat: 0.75, lng: 127.55 },
  { nama: 'Toko Peralatan', produk: 'PIPOS', kota: 'Tobelo', lat: 1.73, lng: 127.99 },
  { nama: 'Jati Mart', produk: 'PIPOS', kota: 'Buli', lat: 0.83, lng: 128.27},
  { nama: 'Universitas Khairun', produk: 'KKNKU', kota: 'Ternate', lat: 0.7890, lng: 127.3890 }
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

              {/* Section PIPOS Subscription */}
              <section className="py-16 px-4">
                <div className="container mx-auto">
                  
                  {/* Section Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                  >
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                      <Database className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 text-sm font-medium">Berlangganan PIPOS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Pilih Paket yang Tepat
                    </h2>
                    <p className="text-lg text-stone-300 max-w-3xl mx-auto">
                      Dapatkan akses penuh ke fitur PIPOS dengan paket berlangganan yang sesuai kebutuhan bisnis Anda
                    </p>
                  </motion.div>

                  {/* Pricing Toggle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-12"
                  >
                    <div className="bg-neutral-900/60 backdrop-blur-sm border border-white/10 rounded-full p-2 flex items-center gap-2">
                      <button
                        onClick={() => setIsMonthly(true)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                          isMonthly ? 'bg-amber-500 text-white' : 'text-stone-400 hover:text-white'
                        }`}
                      >
                        Bulanan
                      </button>
                      <button
                        onClick={() => setIsMonthly(false)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                          !isMonthly ? 'bg-amber-500 text-white' : 'text-stone-400 hover:text-white'
                        }`}
                      >
                        Tahunan
                      </button>

                    </div>
                  </motion.div>

                  {/* Subscription Cards */}
                  <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* Standar Package */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      whileHover={{
                        y: -14,
                        scale: 1.045,
                        boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                        transition: { duration: 0.14, ease: 'easeOut' }
                      }}
                      className="group relative bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-3xl p-6 overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                      </div>

                      {/* Hemat 10% Badge - Interactive */}
                      {!isMonthly && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20 }}
                          className="absolute top-4 right-4 z-20"
                        >
                          <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full font-medium shadow-lg hover:bg-green-500/30 hover:border-green-500/50 transition-all duration-200 cursor-pointer">
                            Hemat 10%
                          </div>
                        </motion.div>
                      )}

                      <div className="relative z-10">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
                          <p className="text-stone-400 text-sm">Cocok untuk toko kecil</p>

                          <div className="mt-4">
                            {isMonthly ? (
                              <>
                                <div className="text-4xl font-bold text-amber-400">
                                  <div className="line-through text-stone-500 text-2xl">Rp 100.000</div>
                                  <div>Rp 99.999<span className="text-xs text-stone-500">/bulan</span></div>
                                </div>
                                <div className="text-xs text-stone-500 mt-1">
                                  Rp 1.080.000/tahun
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="text-4xl font-bold text-amber-400">
                                  <div className="line-through text-stone-500 text-2xl">Rp 1.200.000</div>
                                  <div>Rp 1.080.000<span className="text-xs text-stone-500">/tahun</span></div>
                                </div>
                                <div className="text-xs text-stone-500 mt-1">
                                  Rp 99.999/bulan
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4 mb-8">
                          {features.map((feature, index) => {
                            const isEnabled = enabledFeatures.standar[index]
                            return (
                              <div key={index} className="flex items-center gap-3 text-stone-300">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isEnabled ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                                  {isEnabled ? (
                                    <Check className="w-3 h-3 text-green-400" />
                                  ) : (
                                    <X className="w-3 h-3 text-red-400" />
                                  )}
                                </div>
                                <span className={`text-sm ${isEnabled ? 'text-stone-300' : 'text-stone-500'}`}>
                                  {feature.standar}
                                </span>
                              </div>
                            )
                          })}
                        </div>

                        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25">
                          Pilih Standard
                        </button>
                      </div>
                    </motion.div>

                    {/* Profesional Package */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{
                        y: -14,
                        scale: 1.045,
                        boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                        transition: { duration: 0.14, ease: 'easeOut' }
                      }}
                      className="group relative bg-neutral-900/60 backdrop-blur-sm border border-amber-500/50 hover:border-amber-400 rounded-3xl p-6 overflow-hidden transform lg:scale-105"
                    >
                      <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        POPULER
                      </div>

                      {/* Hemat 10% Badge - Interactive */}
                      {!isMonthly && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                          className="absolute top-12 right-4 z-20"
                        >
                          <span className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full font-medium shadow-lg hover:bg-green-500/30 hover:border-green-500/50 transition-all duration-200 cursor-pointer block">
                            Hemat 10%
                          </span>
                        </motion.div>
                      )}

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                      </div>

                      <div className="relative z-10">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                          <p className="text-stone-400 text-sm">Ideal untuk bisnis berkembang</p>

                          <div className="mt-6">
                            {isMonthly ? (
                              <>
                                <div className="text-4xl font-bold text-amber-400">
                                  <div className="line-through text-stone-500 text-2xl">Rp 400.000</div>
                                  <div>Rp 399.999<span className="text-xs text-stone-500">/bulan</span></div>
                                </div>
                                <div className="text-xs text-stone-500 mt-1">
                                  Rp 4.320.000/tahun
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="text-4xl font-bold text-amber-400">
                                  <div className="line-through text-stone-500 text-2xl">Rp 4.800.000</div>
                                  <div>Rp 4.320.000<span className="text-xs text-stone-500">/tahun</span></div>
                                </div>
                                <div className="text-xs text-stone-500 mt-1">
                                  Rp 399.999/bulan
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4 mb-8">
                          {features.map((feature, index) => {
                            const isEnabled = enabledFeatures.prof[index]
                            return (
                              <div key={index} className="flex items-center gap-3 text-stone-300">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isEnabled ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                                  {isEnabled ? (
                                    <Check className="w-3 h-3 text-green-400" />
                                  ) : (
                                    <X className="w-3 h-3 text-red-400" />
                                  )}
                                </div>
                                <span className={`text-sm ${isEnabled ? 'text-stone-300' : 'text-stone-500'}`}>
                                  {feature.prof}
                                </span>
                              </div>
                            )
                          })}
                        </div>

                        <button
                          onClick={() => window.open(`https://wa.me/628131415160?text=Halo, saya ingin membeli paket Professional PIPOS`, '_blank')}
                          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
                        >
                          Pilih Professional
                        </button>
                      </div>
                    </motion.div>

                    {/* Exclusive Package */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      whileHover={{
                        y: -14,
                        scale: 1.045,
                        boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                        transition: { duration: 0.14, ease: 'easeOut' }
                      }}
                      className="group relative bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-3xl p-6 overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                      </div>

                      {/* Hemat 10% Badge - Interactive */}
                      {!isMonthly && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                          className="absolute top-4 right-4 z-20"
                        >
                          <span className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full font-medium shadow-lg hover:bg-green-500/30 hover:border-green-500/50 transition-all duration-200 cursor-pointer block">
                            Hemat 10%
                          </span>
                        </motion.div>
                      )}

                      <div className="relative z-10">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-white mb-2">Exclusive</h3>
                          <p className="text-stone-400 text-sm">Solusi enterprise lengkap</p>

                          <div className="mt-6">
                            {isMonthly ? (
                              <>
                                <div className="text-4xl font-bold text-amber-400">
                                  <div className="line-through text-stone-500 text-2xl">Rp 1.000.000</div>
                                  <div>Rp 999.999<span className="text-xs text-stone-500">/bulan</span></div>
                                </div>
                                <div className="text-xs text-stone-500 mt-1">
                                  Rp 10.800.000/tahun
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="text-4xl font-bold text-amber-400">
                                  <div className="line-through text-stone-500 text-2xl">Rp 12.000.000</div>
                                  <div>Rp 10.800.000<span className="text-xs text-stone-500">/tahun</span></div>
                                </div>
                                <div className="text-xs text-stone-500 mt-1">
                                  Rp 999.999/bulan
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4 mb-8">
                          {features.map((feature, index) => {
                            const isEnabled = enabledFeatures.excl[index]
                            return (
                              <div key={index} className="flex items-center gap-3 text-stone-300">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isEnabled ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                                  {isEnabled ? (
                                    <Check className="w-3 h-3 text-green-400" />
                                  ) : (
                                    <X className="w-3 h-3 text-red-400" />
                                  )}
                                </div>
                                <span className={`text-sm ${isEnabled ? 'text-stone-300' : 'text-stone-500'}`}>
                                  {feature.excl}
                                </span>
                              </div>
                            )
                          })}
                        </div>

                        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25">
                          Pilih Exclusive
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Proyek Kami Section */}
              <section className="py-16 px-4">
                <div className="container mx-auto text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                  >
                    Proyek
                    <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      Kami
                    </span>
                  </motion.h2>
                  <p className="text-xl text-stone-300 max-w-3xl mx-auto">
                    Berbagai proyek yang telah kami kerjakan untuk membantu transformasi digital bisnis dan institusi
                  </p>
                </div>
              </section>

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
              { label: "Total Instansi", value: "6", icon: Building2 },
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
                  boxShadow: '0 22px 45px -12px rgba(255, 255, 255, 0.45)',
                  transition: { duration: 0.14, ease: 'easeOut' }
                }}
                className="group relative p-6 bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-white/30 text-center overflow-hidden rounded-2xl"
              >
                {/* Glow putih */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent blur-2xl scale-110" />
                </div>

                {/* Icon putih */}
                <stat.icon className="w-8 h-8 text-white mx-auto mb-3 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />

                {/* Angka putih */}
                <div className="text-3xl font-bold text-white mb-2 transition-colors duration-150 group-hover:text-white">
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
                      name: "Toko Makmur",
                      location: "Sagea, Halmahera Tengah",
                      product: "PIPOS",
                      description: "Sistem kasir toko untuk pengelolaan penjualan harian, stok barang, dan laporan keuangan secara real-time.",
                      applications: ["Kasir Penjualan", "Manajemen Stok", "Laporan Harian", "Manajemen User"]
                    },
                    {
                      name: "Toko Rizky",
                      location: "Saketa, Halmahera Selatan",
                      product: "PIPOS",
                      description: "Aplikasi kasir modern untuk toko sembako dengan fitur pencatatan transaksi dan kontrol stok yang mudah digunakan.",
                      applications: ["Kasir Sembako", "Manajemen Produk", "Laporan Penjualan", "Riwayat Transaksi"]
                    },
                    {
                      name: "Toko Sembako",
                      location: "Sofifi, Halmahera",
                      product: "PIPOS",
                      description: "Sistem kasir terintegrasi untuk toko kebutuhan pokok guna mempermudah transaksi dan monitoring stok barang.",
                      applications: ["Kasir Toko", "Manajemen Stok", "Laporan Bulanan", "Manajemen Harga"]
                    },
                    {
                      name: "Toko Peralatan",
                      location: "Tobelo, Halmahera Utara",
                      product: "PIPOS",
                      description: "Sistem kasir untuk toko peralatan dengan dukungan pencatatan item besar, stok gudang, dan laporan penjualan.",
                      applications: ["Kasir Peralatan", "Manajemen Gudang", "Laporan Penjualan", "Manajemen Produk"]
                    },
                    {
                      name: "Jati Mart",
                      location: "Buli, Halmahera Timur",
                      product: "PIPOS",
                      description: "Aplikasi kasir untuk minimarket yang mendukung transaksi cepat, stok otomatis, dan laporan keuangan.",
                      applications: ["Kasir Minimarket", "Manajemen Stok", "Laporan Keuangan", "Manajemen User"]
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
                        boxShadow: '0 22px 45px -12px rgba(255, 255, 255, 0.45)',
                        transition: { duration: 0.14, ease: 'easeOut' }
                      }}
                      className="group relative bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-white/30 rounded-2xl p-6 overflow-hidden transition-all"
                    >
                      {/* Glow effect putih */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent blur-2xl scale-110" />
                      </div>

                      <div className="flex items-center gap-3 mb-4 relative z-10">
                        <div className="bg-white/10 rounded-xl p-3">
                          <Building2 className="w-6 h-6 text-white transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white transition-colors duration-150 group-hover:text-white">
                            {instansi.name}
                          </h3>
                          <p className="text-stone-400 text-sm flex items-center gap-1 transition-colors duration-150 group-hover:text-stone-100">
                            <MapPin className="w-3 h-3 text-white" /> {instansi.location}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4 relative z-10">
                        <span className="inline-block bg-white/10 text-white text-sm px-3 py-1 rounded-full transition-colors duration-150 group-hover:bg-white/20 group-hover:text-white">
                          {instansi.product}
                        </span>
                      </div>

                      <p className="text-stone-300 mb-4 relative z-10 transition-colors duration-150 group-hover:text-stone-100">
                        {instansi.description}
                      </p>

                      <div className="border-t border-stone-700 pt-4 relative z-10">
                        <h4 className="text-white text-sm font-medium mb-3 transition-colors duration-150 group-hover:text-white">
                          Aplikasi yang Digunakan:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {instansi.applications.map((app, i) => (
                            <span
                              key={i}
                              className="bg-neutral-800 text-stone-300 text-xs px-2 py-1 rounded transition-colors duration-150 group-hover:bg-neutral-700 group-hover:text-stone-100"
                            >
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