'use client'

import { motion } from 'framer-motion'

export default function ProyekKamiSection() {

  return (
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
  )
}

