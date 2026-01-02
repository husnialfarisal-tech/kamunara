'use client'

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      
      // ✅ Konsep Premium: Dimulai dari 1.05x (sedikit zoom) lalu mengecil ke 1.0
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      
      transition={{
        duration: 1.2,           // ✅ Sangat lambat & tenang untuk kesan mewah
        ease: [0.22, 1, 0.36, 1] // ✅ Kurva eksklusif agar berhenti dengan sangat halus
      }}
      
      className="w-full origin-center"
    >
      {children}
    </motion.div>
  )
}