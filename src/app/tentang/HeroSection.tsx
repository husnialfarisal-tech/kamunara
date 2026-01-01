'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="pb-16 px-4 text-center">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="container mx-auto max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Tentang
          <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Kamunara
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-stone-300 max-w-3xl mx-auto"
        >
          Mengenal lebih dekat siapa kami dan apa yang kami lakukan untuk membantu transformasi digital Anda
        </motion.p>
      </motion.div>
    </section>
  )
}

