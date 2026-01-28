'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Home, ShoppingBag, Info, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isHomePage = ['/', '/home', '/home/'].includes(pathname)
  const { scrollY } = useScroll()

  // --- LOGIC ANIMASI NAVBAR ---
  const bgBackground = useTransform(scrollY, [0, 100], ["rgba(255,255,255, 0)", "rgba(255,255,255, 0.9)"])
  const bgBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])
  const boxShadow = useTransform(scrollY, [0, 100], ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 20px rgba(0,0,0,0.05)"])
  const borderBottom = useTransform(scrollY, [0, 100], ["1px solid rgba(0,0,0,0)", "1px solid rgba(0,0,0,0.05)"])
  
  // Padding Navbar: Tetap sedikit lebih tebal (sesuai request)
  const navPadding = useTransform(scrollY, [0, 100], ["2.2rem 1rem", "1.2rem 1rem"])

  // --- LOGIC ANIMASI LOGO TEKS (KAMUNARA) ---
  const logoScale = useTransform(scrollY, [0, 250], [1.5, 0.6])
  const logoY = useTransform(scrollY, [0, 250], [380, 0])
  
  // --- LOGIC ANIMASI LOGO GAMBAR ---
  const imgOpacity = useTransform(scrollY, [0, 150], [1, 0])
  const imgY = useTransform(scrollY, [0, 150], [60, 50])
  const imgScale = useTransform(scrollY, [0, 150], [1, 0.8])

  // --- LOGIC ICONS ---
  const iconsY = useTransform(scrollY, [0, 100], [35, 0])

  const menuItems = [
    { href: '/home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { href: '/produk', label: 'Produk', icon: <ShoppingBag className="w-5 h-5" /> },
    { href: '/tentang', label: 'Tentang', icon: <Info className="w-5 h-5" /> },
    { href: '/kontak', label: 'Kontak', icon: <Mail className="w-5 h-5" /> },
  ]

  return (
    <motion.nav
      style={{
        backgroundColor: isHomePage ? bgBackground : "rgba(255, 255, 255, 0.9)",
        backdropFilter: isHomePage ? bgBlur : "blur(12px)",
        boxShadow: isHomePage ? boxShadow : "0px 4px 20px rgba(0,0,0,0.05)",
        borderBottom: isHomePage ? borderBottom : "1px solid rgba(0,0,0,0.05)",
        padding: isHomePage ? navPadding : "1.2rem 1rem",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out"
    >
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">

          {/* ================= SECTION KIRI (KOSONG / SPACER) ================= */}
          <div className="hidden md:block md:w-1/3"></div>

          {/* ================= CENTER LOGO SECTION ================= */}
          <div className="flex-grow flex justify-center md:w-1/3 z-20 relative h-10 items-center">
            
            {/* 1. GAMBAR LOGO (Hanya di Home) */}
            {isHomePage && (
              <motion.div
                initial={{ opacity: 1, y: 60, scale: 1 }}
                style={{
                  opacity: imgOpacity,
                  y: imgY,
                  scale: imgScale,
                  pointerEvents: 'none',
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
              >
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <Image 
                    src="/images/kamunara_copy.png" 
                    alt="Kamunara Logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </motion.div>
            )}

            {/* 2. TEKS LOGO (MENGGUNAKAN GARET) */}
            <Link href="/" className="relative block z-20">
              <motion.div
                style={{
                  scale: isHomePage ? logoScale : 0.7,
                  y: isHomePage ? logoY : 0,
                  WebkitTextStroke: '1.9px black',
                  fontFamily: 'var(--font-brand)',
                  fontWeight: 400,
                }}
                className="text-black tracking-widest uppercase origin-center whitespace-nowrap text-3xl md:text-5xl"
              >
                KAMUNARA
              </motion.div>
            </Link>

          </div>

          {/* ================= ICONS SECTION (KANAN) ================= */}
          <motion.div 
            style={{ 
                opacity: 1, 
                y: isHomePage ? iconsY : 0,
                pointerEvents: 'auto' 
            }}
            className="hidden md:flex items-center gap-6 md:w-1/3 justify-end"
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href} className="group relative p-2">
                  <div className={`flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-stone-500 hover:text-black'} transition-colors duration-300`}>
                    {item.icon}
                    <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 absolute -bottom-4 transition-opacity duration-300 whitespace-nowrap font-brand font-normal">
                      {item.label}
                    </span>
                  </div>
                </Link>
              )
            })}
          </motion.div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <motion.div 
            className="md:hidden absolute right-0 z-50"
            animate={{ opacity: 1 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black focus:outline-none cursor-pointer hover:bg-stone-100 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>

        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden h-screen"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white shadow-2xl z-50 flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-normal tracking-widest font-brand">MENU</span>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6 text-stone-500 hover:text-black" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-stone-600 hover:text-black transition-colors group"
                  >
                    <div className="p-2 bg-stone-100 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium font-brand">{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-stone-100">
                <p className="text-xs text-stone-400 text-center tracking-widest font-brand font-normal">
                  © 2025 KAMUNARA
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}