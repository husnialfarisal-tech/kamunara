'use client'

import { motion } from 'framer-motion'
import { Code2, Target, Heart, Users, Award, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Tentang() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/80 backdrop-blur-md border-b border-amber-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-8"
            >
              <Link href="/home" className="text-stone-300 hover:text-amber-400 transition-colors font-medium">
                Home
              </Link>
              <Link href="/produk" className="text-stone-300 hover:text-amber-400 transition-colors font-medium">
                Produk
              </Link>
              <Link href="/tentang" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                Tentang
              </Link>
              <Link href="/kontak" className="text-stone-300 hover:text-amber-400 transition-colors font-medium">
                Kontak
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Tentang
              <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Kamunara
              </span>
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Mengenal lebih dekat siapa kami dan apa yang kami lakukan untuk membantu transformasi digital Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Kamunara Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">Tentang Kami</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Apa dan Siapa Kamunara?
              </h2>
              <p className="text-lg text-stone-300 leading-relaxed">
                Kamunara adalah perusahaan outsource yang berfokus pada penyedia layanan pembuatan dan pengembangan software digital baik berbasis website maupun mobile. Kami berholding pada perusahaan DS yang telah berpengalaman dalam industri teknologi.
              </p>
              <p className="text-lg text-stone-300 leading-relaxed">
                Kami hadir sebagai mitra terpercaya untuk membantu organisasi dan perusahaan dalam melakukan transformasi digital melalui solusi perangkat lunak yang inovatif, efisien, dan berkualitas tinggi.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-12 border border-amber-500/20 hover:border-amber-500/50 transition-all"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-stone-700/50 rounded-2xl">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <p className="text-stone-300 text-sm">Proyek Selesai</p>
                </div>
                <div className="text-center p-6 bg-stone-700/50 rounded-2xl">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                    30+
                  </div>
                  <p className="text-stone-300 text-sm">Klien Puas</p>
                </div>
                <div className="text-center p-6 bg-stone-700/50 rounded-2xl">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <p className="text-stone-300 text-sm">Tahun Pengalaman</p>
                </div>
                <div className="text-center p-6 bg-stone-700/50 rounded-2xl">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                    20+
                  </div>
                  <p className="text-stone-300 text-sm">Tim Profesional</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-3xl p-12 border border-amber-500/20">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/3">
                  <div className="bg-amber-500/20 rounded-2xl p-8 text-center">
                    <Target className="w-24 h-24 mx-auto text-amber-400 mb-4" />
                    <h3 className="text-2xl font-bold text-amber-400">Misi Kami</h3>
                  </div>
                </div>
                <div className="lg:w-2/3 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Tujuan dan Visi Kamunara
                  </h2>
                  <p className="text-lg text-stone-300 leading-relaxed">
                    Kami bertekad untuk menjadi mitra strategis dalam transformasi digital bagi organisasi dan perusahaan di Indonesia. Melalui solusi perangkat lunak yang inovatif dan berkualitas, kami membantu meningkatkan efisiensi, produktivitas, dan daya saing dalam era digital.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                      <p className="text-stone-300">Menyediakan solusi digital yang relevan dan sesuai kebutuhan</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                      <p className="text-stone-300">Memberikan layanan berkualitas tinggi dengan standar profesional</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                      <p className="text-stone-300">Berinovasi terus menerus dalam pengembangan teknologi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">Nilai Perusahaan</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Nilai dan Prinsip
              </h2>
              <p className="text-stone-300 text-lg max-w-2xl mx-auto">
                Nilai-nilai yang menjadi fondasi dalam setiap langkah kami
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Integritas",
                  description: "Menjunjung tinggi kejujuran dan transparansi dalam setiap kerjasama"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Inovasi",
                  description: "Selalu berinovasi dan mengadopsi teknologi terkini"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Kolaborasi",
                  description: "Bekerja sama sebagai tim untuk hasil yang terbaik"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Kualitas",
                  description: "Menyajikan kualitas terbaik dalam setiap deliverable"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Hasil Orientasi",
                  description: "Fokus pada pencapaian tujuan dan kepuasan klien"
                },
                {
                  icon: <Code2 className="w-8 h-8" />,
                  title: "Profesionalisme",
                  description: "Bekerja dengan standar profesional dan etika tinggi"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all group"
                >
                  <div className="bg-amber-500/10 rounded-xl p-4 w-fit mb-6 group-hover:bg-amber-500/20 transition-all">
                    <div className="text-amber-400">{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-stone-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Focus Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-12 border border-amber-500/20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">Fokus Utama</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Fokus Utama Kami
                </h2>
                <p className="text-stone-300 text-lg max-w-2xl mx-auto">
                  Area fokus utama dalam memberikan layanan terbaik
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
                      <p className="text-stone-400">Website modern, responsif, dan performa tinggi untuk kebutuhan bisnis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-stone-700/50 rounded-2xl">
                    <div className="bg-amber-500/20 rounded-xl p-3 flex-shrink-0">
                      <Zap className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Aplikasi Mobile</h3>
                      <p className="text-stone-400">Aplikasi iOS dan Android dengan pengalaman pengguna terbaik</p>
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
                      <p className="text-stone-400">Sistem informasi terintegrasi untuk efisiensi operasional</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-stone-700/50 rounded-2xl">
                    <div className="bg-amber-500/20 rounded-xl p-3 flex-shrink-0">
                      <Users className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Konsultasi IT</h3>
                      <p className="text-stone-400">Konsultasi strategi digital untuk transformasi bisnis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Ingin Bekerja Sama?
            </h2>
            <p className="text-stone-800 text-lg max-w-2xl mx-auto mb-8">
              Kami siap membantu Anda dalam transformasi digital. Mari diskusikan kebutuhan Anda
            </p>
            <Link href="/kontak">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-stone-900 text-amber-400 font-bold px-10 py-4 rounded-lg hover:bg-stone-800 transition-all flex items-center gap-2 mx-auto"
              >
                Hubungi Kami
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-amber-500/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-stone-400">
            © 2024 Kamunara. All rights reserved. Holding by DS Company.
          </p>
        </div>
      </footer>
    </main>
  )
}
