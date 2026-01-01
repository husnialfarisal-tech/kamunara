'use client'

import { motion } from 'framer-motion'
import { Compass, Rocket } from 'lucide-react'

export default function VisionMissionSection() {
  return (
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
                <p className="text-sm">Menyediakan solusi IT outsourcing yang andal untuk membantu perusahaan mencapai tujuan digital.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-amber-300 font-semibold block mb-2">Berkolaborasi Bersama</span>
                <p className="text-sm">Menerapkan filosofi "Karya Kita Bersama" dalam setiap kemitraan pengembangan.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-amber-300 font-semibold block mb-2">Memberdayakan Energi Muda</span>
                <p className="text-sm">Menciptakan ekosistem kerja dinamis bagi talenta muda untuk berkembang dan berinovasi.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-amber-300 font-semibold block mb-2">Beradaptasi</span>
                <p className="text-sm">Menjadi perusahaan agile dalam menghadapi tren teknologi agar tetap relevan dan futuristik.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

