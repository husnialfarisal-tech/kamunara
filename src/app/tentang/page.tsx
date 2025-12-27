'use client'

import { motion } from 'framer-motion'
import { Code2, Target, Heart, Users, Award, Zap, ArrowRight, Mail, MessageCircle, Facebook } from 'lucide-react'
import Link from 'next/link'

// Import komponen reusable
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export default function TentangPage() {
  return (
    <>
      {/* Navbar global – diimport dari components */}
      <Navbar />

      <main className="pt-32 min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        {/* Hero Section – ringkas & impactful */}
        <section className="pb-16 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Tentang
              <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Kamunara
              </span>
            </motion.h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Mengenal lebih dekat siapa kami dan apa yang kami lakukan untuk membantu transformasi digital Anda
            </p>
          </div>
        </section>

        {/* About Kamunara Section – sekarang hanya 1 kolom */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto space-y-12"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">Tentang Kami</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Apa dan Siapa Kamunara?</h2>
                <p className="text-lg text-stone-300 leading-relaxed">
                  Kamunara adalah perusahaan outsource IT yang fokus pada pengembangan software website & mobile berkualitas tinggi. Berholding di DS Company, kami hadir sebagai mitra terpercaya untuk transformasi digital organisasi dan perusahaan.
                </p>
                <p className="text-lg text-stone-300 leading-relaxed">
                  Solusi kami inovatif, efisien, dan dirancang untuk hasil terbaik.
                </p>

                {/* Stats Cards – hanya bagian ini yang tetap di sebelah kiri (sekarang jadi satu-satunya) */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-10 border border-amber-500/20 hover:border-amber-500/50 transition-all"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "50+", label: "Proyek Selesai" },
                      { value: "30+", label: "Klien Puas" },
                      { value: "5+", label: "Tahun Pengalaman" },
                      { value: "20+", label: "Tim Profesional" }
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-6 bg-stone-700/50 rounded-2xl">
                        <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                          {stat.value}
                        </div>
                        <p className="text-stone-300 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Bagian media sosial tetap di tempatnya */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Ikuti Kami di Media Sosial</h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {/* WhatsApp */}
                    <Link
                      href="https://wa.me/6282271029268"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-white hover:from-green-500 hover:to-green-600 transition-all shadow-md"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-medium">WhatsApp</span>
                    </Link>

                    {/* Instagram */}
                    <Link
                      href="https://www.instagram.com/kamunara.group"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-xl text-white hover:from-pink-500 hover:to-purple-600 transition-all shadow-md"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="font-medium">Instagram</span>
                    </Link>

                    {/* Facebook */}
                    <Link
                      href="https://facebook.com/kamunara.group"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white hover:from-blue-500 hover:to-blue-600 transition-all shadow-md"
                    >
                      <Facebook className="w-6 h-6" />
                      <span className="font-medium">Facebook</span>
                    </Link>

                    {/* Email */}
                    <Link
                      href="mailto:info@kamunara.com"
                      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl text-white hover:from-red-500 hover:to-orange-500 transition-all shadow-md"
                    >
                      <Mail className="w-6 h-6" />
                      <span className="font-medium">Email</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Visi & Misi Section – layout lebih balance */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-3xl p-10 md:p-12 border border-amber-500/20"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/3 text-center">
                  <div className="bg-amber-500/20 rounded-2xl p-8 inline-block">
                    <Target className="w-24 h-24 mx-auto text-amber-400 mb-4" />
                    <h3 className="text-2xl font-bold text-amber-400">Visi & Misi</h3>
                  </div>
                </div>

                <div className="lg:w-2/3 space-y-12">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visi Kami</h2>
                    <p className="text-xl text-amber-300 font-medium italic leading-relaxed">
                      "Menjadi mitra pengembangan dan transformasi digital pilihan global, yang menghubungkan talenta terbaik untuk menciptakan solusi berdampak bagi kemajuan bersama."
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Misi Kami</h2>
                    <div className="space-y-6 text-lg text-stone-200 leading-relaxed">
                      <p>
                        <span className="text-amber-300 font-semibold">Membangun Jembatan Digital</span><br />
                        Menyediakan solusi IT outsourcing yang andal dan tim developer berkualitas untuk membantu perusahaan di seluruh Indonesia mencapai tujuan digital mereka.
                      </p>
                      <p>
                        <span className="text-amber-300 font-semibold">Berkolaborasi, Bukan Hanya Bekerja</span><br />
                        Menerapkan filosofi "Karya Kita Bersama" dalam setiap kemitraan, memastikan klien merasa sebagai bagian integral dari proses pengembangan.
                      </p>
                      <p>
                        <span className="text-amber-300 font-semibold">Memberdayakan Energi Muda</span><br />
                        Menciptakan ekosistem kerja yang dinamis dan inovatif bagi talenta muda untuk berkembang, belajar, dan memberikan ide-ide terbaiknya.
                      </p>
                      <p>
                        <span className="text-amber-300 font-semibold">Beradaptasi dengan Perubahan</span><br />
                        Menjadi perusahaan yang lincah (agile) dalam menghadapi tren teknologi, memastikan solusi yang kami berikan relevan dan futuristik.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section – grid responsif */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">Nilai Perusahaan</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nilai dan Prinsip</h2>
              <p className="text-stone-300 text-lg max-w-2xl mx-auto">
                Fondasi dalam setiap langkah kami
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Integritas", desc: "Kejujuran dan transparansi penuh" },
                { icon: Zap, title: "Inovasi", desc: "Mengadopsi teknologi terkini" },
                { icon: Users, title: "Kolaborasi", desc: "Bekerja sama untuk hasil terbaik" },
                { icon: Award, title: "Kualitas", desc: "Standar terbaik di setiap deliverable" },
                { icon: Target, title: "Hasil Orientasi", desc: "Fokus pencapaian tujuan klien" },
                { icon: Code2, title: "Profesionalisme", desc: "Etika tinggi & standar profesional" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all group text-center"
                >
                  <div className="bg-amber-500/10 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:bg-amber-500/20 transition-all">
                    <value.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-stone-400">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-10 md:p-12 border border-amber-500/20"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">Fokus Utama</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Fokus Utama Kami</h2>
                <p className="text-stone-300 text-lg max-w-2xl mx-auto">
                  Area keunggulan dalam memberikan layanan terbaik
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-stone-700/50 rounded-2xl">
                    <div className="bg-amber-500/20 rounded-xl p-3 flex-shrink-0">
                      <Code2 className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Pengembangan Website</h3>
                      <p className="text-stone-400">Website modern, responsif, performa tinggi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-stone-700/50 rounded-2xl">
                    <div className="bg-amber-500/20 rounded-xl p-3 flex-shrink-0">
                      <Zap className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Aplikasi Mobile</h3>
                      <p className="text-stone-400">iOS & Android dengan UX terbaik</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-stone-700/50 rounded-2xl">
                    <div className="bg-amber-500/20 rounded-xl p-3 flex-shrink-0">
                      <Award className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Sistem Informasi</h3>
                      <p className="text-stone-400">Terintegrasi untuk efisiensi operasional</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-stone-700/50 rounded-2xl">
                    <div className="bg-amber-500/20 rounded-xl p-3 flex-shrink-0">
                      <Users className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Konsultasi IT</h3>
                      <p className="text-stone-400">Strategi digital untuk transformasi bisnis</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section – pakai CTA reusable */}
        <CTA
          title="Ingin Bekerja Sama?"
          description="Kami siap membantu Anda dalam transformasi digital. Mari diskusikan kebutuhan Anda"
          buttonText="Hubungi Kami"
          href="/kontak"
        />
      </main>

      {/* Footer global */}
      <Footer />
    </>
  )
} 