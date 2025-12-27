'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type CTAProps = {
  title: string
  description: string
  buttonText: string
  href: string
  variant?: 'default' | 'outline' // opsional: bisa tambah varian nanti
  className?: string // untuk custom styling kalau perlu override
}

export default function CTA({
  title,
  description,
  buttonText,
  href,
  variant = 'default',
  className = '',
}: CTAProps) {
  return (
    <section className={`py-16 md:py-20 px-4 ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }} // lebih smooth saat scroll
          className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-10 md:p-12 text-center shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 md:mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-stone-800 mb-8 md:mb-10 max-w-3xl mx-auto">
            {description}
          </p>

          <Link href={href} passHref>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(245, 158, 11, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-stone-900 text-amber-400 font-semibold px-8 py-4 md:px-10 md:py-5 rounded-xl flex items-center justify-center gap-3 mx-auto shadow-lg hover:bg-stone-800 transition-colors"
            >
              {buttonText}
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}