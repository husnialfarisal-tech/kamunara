'use client' 
// Wajib karena:
// - pakai framer-motion
// - ada interaksi hover / animasi

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code2, Menu, X } from 'lucide-react'  // <-- TAMBAH: Menu & X untuk hamburger & close
import { usePathname } from 'next/navigation'
import { useState } from 'react'  // <-- TAMBAH: untuk state toggle menu mobile

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)  // <-- TAMBAH: state untuk buka/tutup menu mobile

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
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-stone-900" />
            </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              KAMUNARA
            </span>
          </motion.div>

          {/* ===== Menu Desktop ===== */}
          {/* Tetap seperti asli: muncul di layar besar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            {/* Home */}
            <Link
              href="/home"
              className={`
                font-medium transition-colors
                ${pathname === '/home' 
                  ? 'text-amber-400 font-bold' 
                  : 'text-stone-300 hover:text-amber-400'}
              `}
            >
              Home
            </Link>

            {/* Produk */}
            <Link
              href="/produk"
              className={`
                font-medium transition-colors
                ${pathname === '/produk' 
                  ? 'text-amber-400 font-bold'
                  : 'text-stone-300 hover:text-amber-400'}
              `}
            >
              Produk
            </Link>

            {/* Tentang */}
            <Link
              href="/tentang"
              className={`
                font-medium transition-colors
                ${pathname === '/tentang' 
                  ? 'text-amber-400 font-bold'
                  : 'text-stone-300 hover:text-amber-400'}
              `}
            >
              Tentang
            </Link>

            {/* Kontak */}
            <Link
              href="/kontak"
              className={`
                font-medium transition-colors
                ${pathname === '/kontak' 
                  ? 'text-amber-400 font-bold'
                  : 'text-stone-300 hover:text-amber-400'}
              `}
            >
              Kontak
            </Link>
          </motion.div>

          {/* ===== Hamburger Icon ===== */}
          {/* TAMBAH: Muncul hanya di mobile (md:hidden) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-400 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu Dropdown ===== */}
      {/* TAMBAH: Muncul saat hamburger diklik di mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-stone-900/95 border-b border-amber-500/20 py-8 px-4 absolute top-full left-0 right-0 shadow-lg"
        >
          <div className="flex flex-col gap-6 items-center">
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
                  onClick={() => setIsOpen(false)} // Tutup menu setelah klik link
                  className={`
                    font-medium text-lg transition-colors
                    ${isActive ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400'}
                  `}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </motion.div>
      )}
    </nav>
  )
}