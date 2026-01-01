'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
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
  )
}
