'use client'

import { motion } from 'framer-motion'
import { Facebook } from 'lucide-react'
import Link from 'next/link'

export default function SocialMediaSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Ikuti Kami di Media Sosial</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        <motion.div
          whileHover={{
            y: -8,
            scale: 1.05,
            boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
            transition: { duration: 0.14, ease: 'easeOut' }
          }}
          className="group relative"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
            <div className="absolute inset-0 bg-amber-500/30 blur-xl scale-110 rounded-xl" />
          </div>
          <Link
            href="https://www.tiktok.com/@kamunara.group"
            target="_blank"
            className="relative z-10 flex items-center gap-3 px-6 py-3 bg-white text-black rounded-xl hover:bg-stone-200 transition-all shadow-md"
          >
            <svg className="w-5 h-5 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.24-1.72.88-2.14 1.71-.49.95-.44 2.18.14 3.07.45.75 1.2 1.29 2.05 1.48.85.19 1.75.06 2.5-.37.53-.3.91-.77 1.13-1.32.13-.39.18-.79.18-1.2V.02z"/>
            </svg>
            <span className="font-bold">TikTok</span>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.05,
            boxShadow: '0 22px 45px -12px rgba(236, 72, 153, 0.55)',
            transition: { duration: 0.14, ease: 'easeOut' }
          }}
          className="group relative"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30 blur-xl scale-110 rounded-xl" />
          </div>
          <Link
            href="https://www.instagram.com/kamunara.group"
            target="_blank"
            className="relative z-10 flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-xl text-white hover:opacity-90 transition-all"
          >
            <svg className="w-6 h-6 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="font-bold">Instagram</span>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.05,
            boxShadow: '0 22px 45px -12px rgba(37, 99, 235, 0.55)',
            transition: { duration: 0.14, ease: 'easeOut' }
          }}
          className="group relative"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
            <div className="absolute inset-0 bg-blue-500/30 blur-xl scale-110 rounded-xl" />
          </div>
          <Link
            href="https://facebook.com/kamunara.group"
            target="_blank"
            className="relative z-10 flex items-center gap-3 px-6 py-3 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition-all"
          >
            <Facebook className="w-6 h-6 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />
            <span className="font-bold">Facebook</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

