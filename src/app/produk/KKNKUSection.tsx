'use client'

import { motion } from 'framer-motion'
import { Smartphone, Shield, Zap } from 'lucide-react'

export default function KKNKUSection() {

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
          whileHover={{
            y: -14,
            scale: 1.045,
            boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
            transition: { duration: 0.14, ease: 'easeOut' }
          }}
          className="group relative bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-3xl p-8 overflow-hidden order-2 lg:order-1"
        >
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
  )
}
