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

          {/* ===== Logo ===== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/images/logo_kamunara.png"
                alt="Logo Kamunara"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              KAMUNARA
            </span>
          </motion.div>

          {/* ===== Menu Desktop ===== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            {[
              { href: '/home', label: 'Home' },
              { href: '/produk', label: 'Produk' },
              { href: '/tentang', label: 'Tentang' },
              { href: '/kontak', label: 'Kontak' },
            ].map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    font-medium transition-colors
                    ${isActive
                      ? 'text-amber-400 font-bold'
                      : 'text-stone-300 hover:text-amber-400'}
                  `}
                >
                  {item.label}
                </Link>
              )
            })}
          </motion.div>

          {/* ===== Hamburger Icon (Mobile) ===== */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-400 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </motion.button>
        </div>
      </div>

      {/* ===== Mobile Menu Slide dari KANAN ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="
              md:hidden
              fixed top-0 right-0 h-screen w-3/4
              bg-stone-900/95
              border-l border-amber-500/20
              shadow-2xl
              py-24 px-6
            "
          >
            <div className="flex flex-col gap-8">
              {[
                { href: '/home', label: 'Home' },
                { href: '/produk', label: 'Produk' },
                { href: '/tentang', label: 'Tentang' },
                { href: '/kontak', label: 'Kontak' },
              ].map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      text-xl font-medium transition-colors
                      ${isActive
                        ? 'text-amber-400 font-bold'
                        : 'text-stone-300 hover:text-amber-400'}
                    `}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}