'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Hindari hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

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

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    font-medium transition-colors
                    ${isActive ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400'}
                  `}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* Tombol toggle dark/light di desktop */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-amber-500/20 transition-colors focus:outline-none"
                aria-label="Ganti mode gelap/terang"
              >
                {theme === 'dark' ? (
                  <Sun className="w-6 h-6 text-amber-400" />
                ) : (
                  <Moon className="w-6 h-6 text-amber-400" />
                )}
              </button>
            )}
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
                        text-xl font-medium transition-colors
                        ${isActive ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400'}
                      `}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>

              {/* Tombol toggle dark/light di mobile menu */}
              {mounted && (
                <div className="mt-8 pt-4 border-t border-amber-500/20">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-3 text-stone-300 hover:text-amber-400 transition-colors w-full text-left"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="w-6 h-6 text-amber-400" />
                        <span>Mode Terang</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-6 h-6 text-amber-400" />
                        <span>Mode Gelap</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}