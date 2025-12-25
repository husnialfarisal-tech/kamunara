'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, MapPin, Database, Shield, Zap, ArrowRight, Building2, Globe } from 'lucide-react'
import Link from 'next/link'
import ClientMap from '@/components/ClientMap'
import 'leaflet/dist/leaflet.css'

export default function Produk() {
  // Data marker untuk peta lokasi klien
  const clientLocations = [
    {
      nama: 'Universitas Negeri A',
      produk: 'PIPOS',
      kota: 'Jakarta',
      lat: -6.2088,
      lng: 106.8456
    },
    {
      nama: 'Pemerintah Daerah B',
      produk: 'PIPOS & KKNKU',
      kota: 'Bandung',
      lat: -6.9175,
      lng: 107.6191
    },
    {
      nama: 'Rumah Sakit C',
      produk: 'PIPOS',
      kota: 'Surabaya',
      lat: -7.2575,
      lng: 112.7521
    },
    {
      nama: 'Perusahaan Swasta D',
      produk: 'KKNKU',
      kota: 'Medan',
      lat: 3.5952,
      lng: 98.6722
    },
    {
      nama: 'Sekolah Swasta E',
      produk: 'PIPOS',
      kota: 'Yogyakarta',
      lat: -7.7956,
      lng: 110.3695
    },
    {
      nama: 'Instansi Pemerintah F',
      produk: 'PIPOS & KKNKU',
      kota: 'Semarang',
      lat: -6.9667,
      lng: 110.4167
    }
  ]

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
              <Link href="/produk" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                Produk
              </Link>
              <Link href="/tentang" className="text-stone-300 hover:text-amber-400 transition-colors font-medium">
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
              Produk
              <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Kami
              </span>
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Solusi digital terintegrasi yang dirancang untuk memenuhi kebutuhan bisnis modern
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {/* Pipos Product */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2">
                  <Database className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">Manajemen Database</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  PIPOS
                </h2>
                <p className="text-lg text-stone-300 leading-relaxed">
                  Sistem Manajemen Database yang komprehensif untuk membantu organisasi mengelola data dengan efisien. PIPOS menyediakan antarmuka yang intuitif dan fitur canggih untuk pengelolaan informasi.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-stone-300">
                    <Shield className="w-5 h-5 text-amber-400" />
                    <span>Keamanan data berlapis</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-300">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <span>Akses cepat dan responsif</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-300">
                    <Database className="w-5 h-5 text-amber-400" />
                    <span>Backup dan restore otomatis</span>
                  </div>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all"
              >
                <div className="bg-stone-700/50 rounded-2xl p-8 text-center">
                  <Database className="w-32 h-32 mx-auto text-amber-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">PIPOS</h3>
                  <p className="text-stone-400">Professional Information & Process Operation System</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* KKNKU Product */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all order-2 lg:order-1"
              >
                <div className="bg-stone-700/50 rounded-2xl p-8 text-center">
                  <Smartphone className="w-32 h-32 mx-auto text-amber-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">KKNKU</h3>
                  <p className="text-stone-400">Kartu Kredit Nasional Kartu Universitas</p>
                </div>
              </motion.div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2">
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">Aplikasi Mobile</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  KKNKU
                </h2>
                <p className="text-lg text-stone-300 leading-relaxed">
                  Aplikasi mobile yang inovatif untuk manajemen dan akses informasi kartu kredit nasional kampus. Memudahkan mahasiswa dan staf dalam mengakses layanan keuangan dengan mudah dan aman.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-stone-300">
                    <Shield className="w-5 h-5 text-amber-400" />
                    <span>Transaksi aman dan terenkripsi</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-300">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <span>Antarmuka yang user-friendly</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-300">
                    <Smartphone className="w-5 h-5 text-amber-400" />
                    <span>Tersedia untuk iOS dan Android</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GIS Mapping Section */}
      <section className="py-20 px-4 bg-stone-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Pemetaan Digital</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              GIS Instansi
            </h2>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto mb-8">
              Pemetaan instansi yang telah menggunakan produk dari Kamunara untuk meningkatkan efisiensi dan produktivitas
            </p>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <ClientMap markers={clientLocations} />
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { label: "Total Instansi", value: "6+", icon: Building2 },
              { label: "Kota Tercover", value: "6", icon: MapPin },
              { label: "PIPOS", value: "4", icon: Database },
              { label: "KKNKU", value: "3", icon: Smartphone }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-6 border border-amber-500/20 text-center"
              >
                <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-stone-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Instansi List Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Daftar Instansi
            </h3>
            <p className="text-stone-300">
              Klik marker pada peta atau lihat detail di bawah ini
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Universitas Negeri A",
                location: "Jakarta",
                product: "PIPOS",
                description: "Sistem manajemen database untuk menyimpan data mahasiswa dan akademik dengan efisien",
                applications: ["Data Mahasiswa", "Nilai Akademik", "Keuangan", "Perpustakaan"]
              },
              {
                name: "Pemerintah Daerah B",
                location: "Bandung",
                product: "PIPOS & KKNKU",
                description: "Integrasi sistem untuk manajemen data kependudukan dan layanan keuangan digital",
                applications: ["Kependudukan", "Layanan Publik", "Pembayaran Digital", "Administrasi"]
              },
              {
                name: "Rumah Sakit C",
                location: "Surabaya",
                product: "PIPOS",
                description: "Sistem database terpadu untuk rekam medis dan manajemen pasien",
                applications: ["Rekam Medis", "Jadwal Dokter", "Farmasi", "Administrasi RS"]
              },
              {
                name: "Perusahaan Swasta D",
                location: "Medan",
                product: "KKNKU",
                description: "Aplikasi mobile untuk manajemen benefit karyawan dan kartu kredit perusahaan",
                applications: ["Manajemen Karyawan", "Benefit", "Penggajian", "Laporan"]
              },
              {
                name: "Sekolah Swasta E",
                location: "Yogyakarta",
                product: "PIPOS",
                description: "Sistem informasi sekolah terpadu untuk manajemen data siswa dan guru",
                applications: ["Data Siswa", "Data Guru", "Jadwal Pelajaran", "Nilai"]
              },
              {
                name: "Instansi Pemerintah F",
                location: "Semarang",
                product: "PIPOS & KKNKU",
                description: "Solusi digital untuk manajemen data pegawai dan layanan keuangan",
                applications: ["Data Pegawai", "Absensi", "Penggajian", "Laporan"]
              }
            ].map((instansi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-500/10 rounded-xl p-3">
                    <Building2 className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{instansi.name}</h3>
                    <p className="text-stone-400 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {instansi.location}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-amber-500/10 text-amber-400 text-sm px-3 py-1 rounded-full">
                    {instansi.product}
                  </span>
                </div>

                <p className="text-stone-300 mb-4">{instansi.description}</p>

                <div className="border-t border-stone-700 pt-4">
                  <h4 className="text-amber-400 text-sm font-medium mb-3">Aplikasi yang Digunakan:</h4>
                  <div className="flex flex-wrap gap-2">
                    {instansi.applications.map((app, i) => (
                      <span
                        key={i}
                        className="bg-stone-700 text-stone-300 text-xs px-2 py-1 rounded"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Tertarik dengan Produk Kami?
            </h2>
            <p className="text-stone-800 text-lg max-w-2xl mx-auto mb-8">
              Diskusikan kebutuhan bisnis Anda dengan tim kami dan temukan solusi yang tepat
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
