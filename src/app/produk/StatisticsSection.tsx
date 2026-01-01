'use client'

import { motion } from 'framer-motion'
import { Building2, MapPin, Database, Smartphone } from 'lucide-react'

export default function StatisticsSection() {

  const stats = [
    { label: "Total Instansi", value: "6", icon: Building2 },
    { label: "Kota Tercover", value: "6", icon: MapPin },
    { label: "PIPOS", value: "4", icon: Database },
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
          whileHover={{
            y: -14,
            scale: 1.045,
            boxShadow: '0 22px 45px -12px rgba(255, 255, 255, 0.45)',
            transition: { duration: 0.14, ease: 'easeOut' }
          }}
          className="group relative p-6 bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-white/30 text-center overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent blur-2xl scale-110" />
          </div>

          <stat.icon className="w-8 h-8 text-white mx-auto mb-3 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />

          <div className="text-3xl font-bold text-white mb-2 transition-colors duration-150 group-hover:text-white">
            {stat.value}
          </div>

          <p className="text-stone-300 text-sm transition-colors duration-150 group-hover:text-stone-100">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

