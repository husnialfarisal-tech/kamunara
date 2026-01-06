'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/home', label: 'Home' }, // Pastikan href sesuai halaman Anda (biasanya '/' untuk home)
    { href: '/produk', label: 'Produk' },
    { href: '/tentang', label: 'Tentang' },
    { href: '/kontak', label: 'Kontak' },
  ]

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        bg-stone-900/80 backdrop-blur-md
        border-b border-amber-500/20
      "
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* ================= LOGO SECTION (DIPERBAIKI) ================= */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              {/* Container Logo: Dibuat relative agar Image fill berfungsi sempurna */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                <Image
                  src="/images/kamunara_copy.png"
                  alt="Logo Kamunara"
                  fill // Mengisi container parent secara otomatis
                  sizes="(max-width: 768px) 48px, 56px"
                  className="object-contain" // Menjaga proporsi logo agar tidak gepeng
                  priority
                />
              </div>

              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300">
                KAMUNARA
              </span>
            </motion.div>
          </Link>
          {/* ================= END LOGO SECTION ================= */}

          {/* Menu Desktop (FULL BOLD + LIQUID ANIMATION) */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href} className="relative group">
                  
                  {/* Efek Latar Belakang "Liquid Pill" */}
                  <motion.div
                    className="absolute inset-0 bg-amber-500/10 rounded-full -z-0 border border-amber-500/10 blur-[1px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.9
                    }}
                    whileHover={{
                      opacity: 1,
                      scale: 1,
                      backgroundColor: 'rgba(251, 191, 36, 0.15)'
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                  />

                  {/* Teks - Menggunakan font-bold secara konsisten */}
                  <motion.span
                    className={`
                      relative z-10 block font-bold transition-colors duration-500 px-4 py-1.5
                      ${isActive ? 'text-amber-400' : 'text-stone-300 group-hover:text-white'}
                    `}
                    whileHover={{ 
                      scale: 1.05, 
                      letterSpacing: "0.02em" 
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    {item.label}
                  </motion.span>

                </Link>
              )
            })}
          </div>

          {/* Hamburger Icon Mobile */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-400 focus:outline-none z-50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </motion.button>
        </div>
      </div>

      {/* Overlay Gelap & Menu Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="
                md:hidden
                fixed top-0 right-0 h-screen w-3/4 max-w-xs
                bg-stone-900/95
                border-l border-amber-500/20
                shadow-2xl
                py-24 px-6
                z-50
                overflow-y-auto
              "
            >
              {/* Tombol Close Internal */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-amber-400 focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>

              {/* List Menu Mobile - Tetap Bold */}
              <div className="flex flex-col gap-8">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className={`
                        text-2xl flex items-center justify-between transition-colors
                        ${isActive ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400 font-bold'}
                      `}
                    >
                      <span className="font-bold tracking-tight">{item.label}</span>
                      
                      {/* Indikator Aktif Mobile */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeDot"
                          className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_10px_#fbbf24]"
                        />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Tambahan Dekorasi di bawah menu mobile agar tidak kosong */}
              <div className="mt-20 pt-8 border-t border-white/5">
                 <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">
                   © 2025 Kamunara Ecosystem
                 </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}