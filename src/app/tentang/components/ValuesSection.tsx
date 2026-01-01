'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Users, Award, Target, Code2 } from 'lucide-react'

const values = [
  { icon: Heart, title: "Integritas", desc: "Kejujuran dan transparansi penuh" },
  { icon: Zap, title: "Inovasi", desc: "Mengadopsi teknologi terkini" },
  { icon: Users, title: "Kolaborasi", desc: "Bekerja sama untuk hasil terbaik" },
  { icon: Award, title: "Kualitas", desc: "Standar terbaik di setiap deliverable" },
  { icon: Target, title: "Hasil Orientasi", desc: "Fokus pencapaian tujuan klien" },
  { icon: Code2, title: "Profesionalisme", desc: "Etika tinggi & standar profesional" }
]

export default function ValuesSection() {
  return (
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
  )
}

