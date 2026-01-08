'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Home, ShoppingBag, Info, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  // Deteksi apakah sedang di halaman Home
  // Kita anggap root '/' dan '/home' adalah halaman utama yang butuh animasi
  const isHomePage = pathname === '/' || pathname === '/home'

  // Mengambil posisi scroll
  const { scrollY } = useScroll()

  // --- LOGIC ANIMASI (Hanya aktif jika isHomePage) ---
  
  // 1. Background
  const bgBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"])
  
  // 2. Backdrop Blur
  const bgBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])
  
  // 3. Shadow
  const boxShadow = useTransform(scrollY, [0, 100], ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 20px rgba(0,0,0,0.05)"])
  
  // 4. Border Bottom
  const borderBottom = useTransform(scrollY, [0, 100], ["1px solid rgba(0,0,0,0)", "1px solid rgba(0,0,0,0.05)"])
  
  // 5. Padding
  const navPadding = useTransform(scrollY, [0, 100], ["2rem 1rem", "1rem 1rem"])

  // 6. LOGO ANIMATION
  const logoScale = useTransform(scrollY, [0, 200], [3.5, 1])
  const logoY = useTransform(scrollY, [0, 200], [250, 0]) // Logo turun di home
  const logoWeight = useTransform(scrollY, [0, 200], [300, 700])
  
  // Opacity Icons
  const iconsOpacity = useTransform(scrollY, [0, 150], [0, 1])
  const iconsPointerEvents = useTransform(scrollY, [0, 150], ['none', 'auto'])

  const menuItems = [
    { href: '/home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { href: '/produk', label: 'Produk', icon: <ShoppingBag className="w-5 h-5" /> },
    { href: '/tentang', label: 'Tentang', icon: <Info className="w-5 h-5" /> },
    { href: '/kontak', label: 'Kontak', icon: <Mail className="w-5 h-5" /> },
  ]

  return (
    <motion.nav
      style={{
        // TERNARY OPERATOR: Jika Home pakai animasi, jika tidak pakai nilai statis (final state)
        backgroundColor: isHomePage ? bgBackground : "rgba(255, 255, 255, 0.9)",
        backdropFilter: isHomePage ? bgBlur : "blur(12px)",
        boxShadow: isHomePage ? boxShadow : "0px 4px 20px rgba(0,0,0,0.05)",
        borderBottom: isHomePage ? borderBottom : "1px solid rgba(0,0,0,0.05)",
        padding: isHomePage ? navPadding : "1rem 1rem",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out"
    >
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">

          {/* ================= ICONS SECTION (LEFT) ================= */}
          <motion.div 
            style={{ 
                opacity: isHomePage ? iconsOpacity : 1, 
                pointerEvents: isHomePage ? iconsPointerEvents : 'auto' 
            }}
            className="hidden md:flex items-center gap-6 md:w-1/3 justify-start"
          >
             {menuItems.slice(0, 2).map((item) => {
               const isActive = pathname === item.href
               return (
                 <Link key={item.href} href={item.href} className="group relative p-2">
                   <div className={`flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-stone-500 hover:text-black'} transition-colors duration-300`}>
                     {item.icon}
                     <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 absolute -bottom-4 transition-opacity duration-300 whitespace-nowrap">
                       {item.label}
                     </span>
                   </div>
                 </Link>
               )
             })}
          </motion.div>


          {/* ================= CENTER LOGO (KAMUNARA) ================= */}
          <div className="flex-grow flex justify-center md:w-1/3 z-20">
            <Link href="/" className="relative block">
              <motion.div
                style={{ 
                  scale: isHomePage ? logoScale : 1,
                  y: isHomePage ? logoY : 0,
                  fontWeight: isHomePage ? logoWeight : 700
                }}
                className="text-black tracking-widest uppercase origin-center whitespace-nowrap text-2xl" // Tambahkan text-2xl sebagai base size
              >
                 KAMUNARA
              </motion.div>
            </Link>
          </div>


          {/* ================= ICONS SECTION (RIGHT) ================= */}
          <motion.div 
            style={{ 
                opacity: isHomePage ? iconsOpacity : 1, 
                pointerEvents: isHomePage ? iconsPointerEvents : 'auto' 
            }}
            className="hidden md:flex items-center gap-6 md:w-1/3 justify-end"
          >
             {menuItems.slice(2, 4).map((item) => {
               const isActive = pathname === item.href
               return (
                 <Link key={item.href} href={item.href} className="group relative p-2">
                   <div className={`flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-stone-500 hover:text-black'} transition-colors duration-300`}>
                     {item.icon}
                     <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 absolute -bottom-4 transition-opacity duration-300 whitespace-nowrap">
                       {item.label}
                     </span>
                   </div>
                 </Link>
               )
             })}
          </motion.div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <motion.div 
             className="md:hidden absolute right-0"
             animate={{ opacity: 1 }}
          >
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>

        </div>
      </div>

      {/* ================= MOBILE DRAWER (Sama seperti sebelumnya) ================= */}
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
                <span className="text-xl font-bold tracking-widest">MENU</span>
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
                    <span className="text-lg font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-stone-100">
                 <p className="text-xs text-stone-400 text-center tracking-widest">
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