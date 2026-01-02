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
    { href: '/home', label: 'Home' },
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

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/images/Kamunara_copy.png"
                alt="Logo Kamunara"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              KAMUNARA
            </span>
          </motion.div>

          {/* Menu Desktop (UPDATED SECTION - LIQUID PILL & ULTRA SMOOTH) */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href} className="relative group">
                  
                  {/* IDE BARU: Latar Belakang "Liquid Pill" yang Bercahaya */}
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
                      backgroundColor: 'rgba(251, 191, 36, 0.15)' // Sedikit lebih terang saat hover
                    }}
                    // KURVA [0.25, 0.8, 0.25, 1] memberikan efek 'smooth' premium
                    transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                  />

                  {/* Teks dengan efek scale dan letter spacing yang lembut */}
                  <motion.span
                    className={`
                      relative z-10 block font-medium transition-colors duration-500 px-4 py-1.5
                      ${isActive ? 'text-amber-400' : 'text-stone-300 group-hover:text-white'}
                    `}
                    whileHover={{ 
                      scale: 1.05, // Teks membesar sedikit
                      letterSpacing: "0.05em" // Jarak huruf melebar pelan (efek elegan)
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }} // Pegas super halus
                  >
                    {item.label}
                  </motion.span>

                </Link>
              )
            })}
          </div>

          {/* Hamburger Icon */}
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

      {/* Overlay gelap + Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

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
              {/* Tombol Close (X) di pojok kanan atas */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-amber-400 focus:outline-none z-50"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Isi Menu */}
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
                        text-xl font-bold transition-colors
                        ${isActive ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400'}
                      `}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}