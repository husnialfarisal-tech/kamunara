'use client'

import { motion } from 'framer-motion'
import { Database, Shield, Zap } from 'lucide-react'

export default function PIPOSSection() {
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
            whileHover={{
              y: -8,
              scale: 1.04,
              boxShadow: '0 15px 30px -8px rgba(245, 158, 11, 0.45)',
              transition: { duration: 0.14, ease: 'easeOut' }
            }}
            className="group relative inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 overflow-hidden"
          >
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

        <motion.div
          whileHover={{
            y: -14,
            scale: 1.045,
            boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
            transition: { duration: 0.14, ease: 'easeOut' }
          }}
          className="group relative bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-3xl p-8 overflow-hidden"
        >
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
  )
}
