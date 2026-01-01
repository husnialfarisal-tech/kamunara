'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <motion.div variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
          }} className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Tentang Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Mengenal Kamunara</h2>
            <p className="text-lg text-stone-300 leading-relaxed">
              Kamunara adalah perusahaan IT outsourcing yang baru berkembang dan berfokus pada pengembangan website serta aplikasi. Bernaung di bawah DS Company, kami hadir dengan semangat inovasi dan komitmen kualitas untuk mendukung transformasi digital organisasi dan perusahaan.
            </p>
            <p className="text-lg text-stone-300 leading-relaxed">
              <em>"Kami berfokus pada penyediaan layanan pengembangan dan pembuatan software digital"</em> 
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

