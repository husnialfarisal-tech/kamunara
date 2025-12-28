'use client'  // Wajib karena ada framer-motion (animasi & hover)

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Facebook, Send, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Import komponen reusable dari folder components (sudah dipindah ke src/components/)
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'  // Pakai CTA yang sudah ada (reusable)

export default function KontakPage() {
  return (
    <>
      {/* Navbar global – diimport dari components, tidak perlu duplikat kode */}
      <Navbar />

      {/* 
         BACKGROUND UPDATE (DISAMAKAN DENGAN HALAMAN LAIN):
         - Base color 'neutral-950'.
         - Efek glow/ambient modern.
         - Konten dibungkus relative z-10.
      */}
      <main className="relative pt-32 min-h-screen bg-neutral-950 overflow-hidden">
        
        {/* Elemen Dekorasi Background (Glow Effects) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />

        {/* Content Wrapper agar berada di atas background */}
        <div className="relative z-10">

          {/* Hero Section – ringkas, lebih fokus */}
          <section className="pb-16 px-4 text-center">
            <div className="container mx-auto max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Hubungi
                <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Kami
                </span>
              </motion.h1>
              <p className="text-xl text-stone-300 max-w-3xl mx-auto">
                Kami siap membantu transformasi digital bisnis Anda. Pilih cara yang paling nyaman!
              </p>
            </div>
          </section>

          {/* Contact Info & Form – grid 2 kolom di large screen */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Kolom kiri: Informasi Kontak + Social Media */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="space-y-10"
                >
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Informasi Kontak
                    </h2>
                    <p className="text-stone-300 text-lg">
                      Pilih channel yang paling mudah untuk Anda
                    </p>
                  </div>

                  {/* Contact Cards – lebih ringkas, hover x:10 tetap */}
                              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Telepon', value: '+62 82271029268', href: 'tel:+6282271029268' },
                  { icon: Mail, label: 'Email', value: 'info@kamunara.com', href: 'mailto:info@kamunara.com' },
                  { icon: MapPin, label: 'Alamat', value: 'Sangaji Utara, Ternate Utara, Kota Ternate, Maluku Utara 97711, Indonesia', href: '#' },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{
                      y: -12,
                      scale: 1.045,
                      boxShadow: '0 20px 40px -12px rgba(245, 158, 11, 0.55)',
                      transition: { duration: 0.14, ease: 'easeOut' }
                    }}
                    className="group relative flex items-center gap-4 p-6 bg-gradient-to-br from-stone-800/80 to-stone-900/80 rounded-2xl border border-amber-500/20 hover:border-amber-500/70 transition-all overflow-hidden"
                  >
                    {/* Glow background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/25 to-transparent blur-2xl scale-110" />
                    </div>

                    {/* Icon */}
                    <div className="bg-amber-500/20 rounded-xl p-4 transition-all duration-150 group-hover:bg-amber-500/30 group-hover:scale-110">
                      <item.icon className="w-6 h-6 text-amber-400 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-6" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-white font-bold mb-1 transition-colors duration-150 group-hover:text-amber-200">
                        {item.label}
                      </h3>
                      <p className="text-stone-300 transition-colors duration-150 group-hover:text-stone-100">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>


                  {/* Social Media – tetap 4 tombol, tapi lebih rapi */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Media Sosial</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {/* WhatsApp – prioritas utama di Indonesia */}
                      <motion.a
                        href="https://wa.me/6282271029268"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-6 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl text-white hover:from-green-700 hover:to-green-800 transition-all"
                      >
                        <MessageCircle className="w-6 h-6" />
                        <span className="font-bold">WhatsApp</span>
                      </motion.a>

                      {/* Instagram */}
                      <motion.a
                        href="https://instagram.com/kamunara.group"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-6 bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl text-white hover:from-pink-700 hover:to-purple-800 transition-all"
                      >
                        {/* SVG Instagram */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="font-bold">Instagram</span>
                      </motion.a>

                      {/* Facebook & Email – tetap */}
                      <motion.a
                        href="https://facebook.com/RIZKY"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white hover:from-blue-700 hover:to-blue-800 transition-all"
                      >
                        <Facebook className="w-6 h-6" />
                        <span className="font-bold">Facebook</span>
                      </motion.a>

                      <motion.a
                        href="mailto:info@kamunara.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl text-white hover:from-red-700 hover:to-orange-700 transition-all"
                      >
                        <Mail className="w-6 h-6" />
                        <span className="font-bold">Email</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Kolom kanan: Form Kontak */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all"
                >
                  <h2 className="text-3xl font-bold text-white mb-6">Kirim Pesan</h2>

                  {/* Form – masih dummy, tambah onSubmit kalau mau fungsional */}
                  <form className="space-y-6">
                    <div>
                      <label className="block text-stone-300 mb-2 font-medium">Nama Lengkap</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Masukkan email"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-2 font-medium">Subjek</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Masukkan subjek"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-2 font-medium">Pesan</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                        placeholder="Masukkan pesan Anda"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-stone-900 font-bold py-4 rounded-xl hover:from-amber-500 hover:to-amber-700 transition-all flex items-center justify-center gap-2"
                    >
                      Kirim Pesan
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>

                  {/* Catatan: Form ini masih dummy. Untuk membuatnya berfungsi: */}
                  {/* 1. Tambah onSubmit handler */}
                  {/* 2. Gunakan react-hook-form + zod untuk validasi */}
                  {/* 3. Kirim ke backend (EmailJS, API route, atau server action) */}
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section – sekarang pakai komponen CTA reusable */}
          <CTA
            title="Siap Memulai Proyek?"
            description="Hubungi kami sekarang dan mari diskusikan bagaimana kami dapat membantu transformasi digital bisnis Anda"
            buttonText="Chat WhatsApp"
            href="https://wa.me/6282271029268"  // Bisa external link
          />
        </div> {/* End of Content Wrapper */}
      </main>

      {/* Footer global – diimport dari components */}
      <Footer />
    </>
  )
}