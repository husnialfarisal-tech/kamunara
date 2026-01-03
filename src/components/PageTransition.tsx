'use client'

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    // ✅ WRAPPER: Div ini berfungsi sebagai "penutup" (mask)
    // overflow-hidden: Memastikan tidak ada bagian animasi yang keluar dari area ini
    // w-full: Mengikuti lebar kontainer induk (standar Next.js layout)
    <div className="w-full overflow-hidden">
      
      <motion.div
        key={pathname}
        
        // ✅ Konsep Premium
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        
        // ✅ PERBAIKAN:
        // 1. Hapus 'w-screen' (ganti dengan 'w-full' agar sinkron dengan layout Next.js)
        // 2. origin-center agar animasi zoom dari tengah
        className="w-full origin-center"
      >
        {children}
      </motion.div>
      
    </div>
  )
}