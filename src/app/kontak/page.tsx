'use client'  // Wajib karena ada framer-motion (animasi & hover)

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Facebook, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

// Import komponen reusable dari folder components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export default function KontakPage() {
  // State untuk form
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  })
  
  // State untuk loading dan feedback
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  // Handler untuk perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Handler untuk submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setFeedback({ type: null, message: '' })

    try {
      const response = await fetch('/api/kirim-pesanan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setFeedback({
          type: 'success',
          message: data.message
        })
        // Reset form setelah berhasil
        setFormData({ nama: '', email: '', subjek: '', pesan: '' })
      } else {
        setFeedback({
          type: 'error',
          message: data.message || 'Gagal mengirim pesan. Silakan coba lagi.'
        })
      }
    } catch {
      setFeedback({
        type: 'error',
        message: 'Terjadi kesalahan. Silakan coba lagi nanti.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <main className="relative pt-32 min-h-screen bg-neutral-950 overflow-hidden">
        
        {/* Elemen Dekorasi Background (Glow Effects) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(700px,90vw)] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />

        <div className="relative z-10">

          {/* Hero Section */}
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

                  <div className="space-y-6">
                    {[
                      { icon: Phone, label: 'Telepon', value: '+62 8131415160', href: 'https://wa.me/628131415160' },
                      { icon: Mail, label: 'Email', value: 'kamunaragroup@gmail.com', href: 'mailto:kamunaragroup@gmail.com?subject=Pertanyaan%20dari%20Website' },
                      { icon: MapPin, label: 'Alamat', value: 'Sangaji Utara, Ternate Utara, Kota Ternate, Maluku Utara 97723, Indonesia', href: 'https://maps.app.goo.gl/uKn437RHkubrFqJMA' },
                    ].map((item, i) => (
                      <motion.div key={i}>
                        <motion.a
                          href={item.href}
                          target={item.label === 'Telepon' ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                          whileHover={{
                            y: -14,
                            scale: 1.045,
                            boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
                            transition: { duration: 0.14, ease: 'easeOut' }
                          }}
                          className="group relative flex items-center gap-4 p-6 bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 transition-all overflow-hidden rounded-2xl"
                        >
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
                          </div>

                          <div className="relative z-10 bg-amber-500/20 rounded-xl p-4 transition-all duration-150 group-hover:bg-amber-500/30 group-hover:scale-110">
                            <item.icon className="w-6 h-6 text-amber-400 transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-6" />
                          </div>

                          <div className="relative z-10">
                            <h3 className="text-white font-bold mb-1 transition-colors duration-150 group-hover:text-amber-200">
                              {item.label}
                            </h3>
                            <p className="text-stone-300 transition-colors duration-150 group-hover:text-stone-100">
                              {item.value}
                            </p>
                          </div>
                        </motion.a>
                        
                        {/* ====================== PETA GOOGLE MAPS FINAL - LEBIH PANJANG KE BAWAH ====================== */}
                        {item.label === 'Alamat' && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 ml-4"  // margin atas lebih lega
                          >
                            <div className="bg-neutral-800/80 rounded-xl p-4 border border-amber-500/20">
                              {/* Wrapper kontrol ukuran peta - Responsive Height */}
                              <div className="rounded-lg overflow-hidden border border-amber-500/30 relative w-full">
                                <div 
                                  className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px]"
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.415401845929!2d127.38525152206422!3d0.8142791746857311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329cb1007a543ab7%3A0x4625131a3c383b17!2sBetarak%20Kota%20Ternate%20Utara!5e0!3m2!1sid!2sid!4v1767053118577!5m2!1sid!2sid"
                                    className="absolute inset-0 w-full h-full"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lokasi Kantor Kamunara - Sangaji Utara, Ternate"
                                  />
                                </div>
                              </div>

                              {/* Tombol buka maps */}
                              <div className="mt-4 text-center">
                                <motion.a
                                  href="https://maps.app.goo.gl/uKn437RHkubrFqJMA"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-amber-500/30"
                                >
                                  <MapPin className="w-4 h-4" />
                                  Buka di Google Maps (Detail Lengkap)
                                </motion.a>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {/* ============================================================================================ */}
                      </motion.div>
                    ))}
                  </div>

                  {/* Social Media */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Hubungi Kami</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.a
                        href="https://wa.me/628131415160"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-6 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl text-white hover:from-green-700 hover:to-green-800 transition-all"
                      >
                        <MessageCircle className="w-6 h-6" />
                        <span className="font-bold">WhatsApp</span>
                      </motion.a>

                      <motion.a
                        href="https://instagram.com/kamunara.group"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-6 bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl text-white hover:from-pink-700 hover:to-purple-800 transition-all"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="font-bold">Instagram</span>
                      </motion.a>

                      <motion.a
                        href="https://facebook.com/Putri Haildaa"
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

                  {feedback.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                        feedback.type === 'success' 
                          ? 'bg-green-500/20 border border-green-500/30' 
                          : 'bg-red-500/20 border border-red-500/30'
                      }`}
                    >
                      {feedback.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <p className={feedback.type === 'success' ? 'text-green-200' : 'text-red-200'}>
                        {feedback.message}
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-stone-300 mb-2 font-medium">Nama Lengkap</label>
                      <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-stone-500"
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-stone-500"
                        placeholder="Masukkan email"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-2 font-medium">Subjek</label>
                      <input
                        type="text"
                        name="subjek"
                        value={formData.subjek}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-stone-500"
                        placeholder="Masukkan subjek"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-2 font-medium">Pesan</label>
                      <textarea
                        name="pesan"
                        value={formData.pesan}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors resize-none placeholder:text-stone-500"
                        placeholder="Masukkan pesan Anda"
                        required
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-gradient-to-r from-amber-400 to-amber-600 text-stone-900 font-bold py-4 rounded-xl hover:from-amber-500 hover:to-amber-700 transition-all flex items-center justify-center gap-2 ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-stone-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          Kirim Pesan
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <CTA
            title="Siap Memulai Proyek?"
            description="Hubungi kami sekarang dan mari diskusikan bagaimana kami dapat membantu transformasi digital bisnis Anda"
            buttonText="Chat WhatsApp"
            href="https://wa.me/628131415160"
          />
        </div>
      </main>

      <Footer />
    </>
  )
}