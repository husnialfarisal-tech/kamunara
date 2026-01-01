'use client'

import { motion } from 'framer-motion'

const statsData = [
  { value: "2", label: "Proyek Selesai" },
  { value: "2", label: "Klien Puas" },
  { value: "1", label: "Tahun Pengalaman" },
  { value: "10", label: "Tim Profesional" }
]

export default function StatisticsSection() {
  return (
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
  )
}

