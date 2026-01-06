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
        bg-white/90 backdrop-blur-md
        border-b border-gray-100
        shadow-sm
      "
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* ================= LOGO SECTION ================= */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              {/* Container Logo */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <Image
                  src="/images/kamunara_copy.png"
                  alt="Logo Kamunara"
                  fill
                  sizes="(max-width: 768px) 40px, 48px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Teks KAMUNARA - Hitam Solid */}
              <span className="text-xl md:text-2xl font-bold text-black tracking-tight">
                KAMUNARA
              </span>
            </motion.div>
          </Link>
          {/* ================= END LOGO SECTION ================= */}

          {/* Menu Desktop (Simple & Elegant) */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href} className="relative group">
                  <motion.span
                    className={`
                      relative z-10 block text-sm font-medium transition-colors duration-300 px-2 py-1
                      ${isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}
                    `}
                    whileHover={{ 
                      scale: 1.05, 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {/* Garis bawah tipis hanya muncul saat hover */}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  </motion.span>
                </Link>
              )
            })}
          </div>

          {/* Hamburger Icon Mobile (Hitam) */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black focus:outline-none z-50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Overlay Gelap & Menu Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Content (Putih) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="
                md:hidden
                fixed top-0 right-0 h-screen w-3/4 max-w-xs
                bg-white
                shadow-2xl
                py-20 px-6
                z-50
                overflow-y-auto
              "
            >
              {/* Tombol Close Internal */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-black focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              {/* List Menu Mobile */}
              <div className="flex flex-col gap-6">
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
                        text-lg flex items-center justify-between transition-colors pb-2 border-b border-gray-100
                        ${isActive ? 'text-black font-bold' : 'text-gray-600 hover:text-black font-medium'}
                      `}
                    >
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Footer Mobile */}
              <div className="mt-12 pt-6">
                 <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                   © 2025 Kamunara
                 </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}