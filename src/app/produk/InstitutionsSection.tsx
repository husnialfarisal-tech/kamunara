'use client'

import { motion } from 'framer-motion'
import { Building2, MapPin } from 'lucide-react'

const institutions = [
  {
    name: "Toko Makmur",
    location: "Sagea, Halmahera Tengah",
    product: "PIPOS",
    description: "Sistem kasir toko untuk pengelolaan penjualan harian, stok barang, dan laporan keuangan secara real-time.",
    applications: ["Kasir Penjualan", "Manajemen Stok", "Laporan Harian", "Manajemen User"]
  },
  {
    name: "Toko Rizky",
    location: "Saketa, Halmahera Selatan",
    product: "PIPOS",
    description: "Aplikasi kasir modern untuk toko sembako dengan fitur pencatatan transaksi dan kontrol stok yang mudah digunakan.",
    applications: ["Kasir Sembako", "Manajemen Produk", "Laporan Penjualan", "Riwayat Transaksi"]
  },
  {
    name: "Toko Sembako",
    location: "Sofifi, Halmahera",
    product: "PIPOS",
    description: "Sistem kasir terintegrasi untuk toko kebutuhan pokok guna mempermudah transaksi dan monitoring stok barang.",
    applications: ["Kasir Toko", "Manajemen Stok", "Laporan Bulanan", "Manajemen Harga"]
  },
  {
    name: "Toko Peralatan",
    location: "Tobelo, Halmahera Utara",
    product: "PIPOS",
    description: "Sistem kasir untuk toko peralatan dengan dukungan pencatatan item besar, stok gudang, dan laporan penjualan.",
    applications: ["Kasir Peralatan", "Manajemen Gudang", "Laporan Penjualan", "Manajemen Produk"]
  },
  {
    name: "Jati Mart",
    location: "Buli, Halmahera Timur",
    product: "PIPOS",
    description: "Aplikasi kasir untuk minimarket yang mendukung transaksi cepat, stok otomatis, dan laporan keuangan.",
    applications: ["Kasir Minimarket", "Manajemen Stok", "Laporan Keuangan", "Manajemen User"]
  },
  {
    name: "Universitas Khairun",
    location: "Ternate",
    product: "PIPOS & KKNKU",
    description: "Sistem terintegrasi untuk manajemen kasir universitas dan website KKN - mengelola pembayaran mahasiswa dan program Kuliah Kerja Nyata",
    applications: ["Kasir Universitas", "Pendaftaran KKN", "Berkas Mahasiswa", "Manajemen Lokasi"]
  }
]

export default function InstitutionsSection() {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {institutions.map((instansi, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            y: -14,
            scale: 1.045,
            boxShadow: '0 22px 45px -12px rgba(255, 255, 255, 0.45)',
            transition: { duration: 0.14, ease: 'easeOut' }
          }}
          className="group relative bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-white/30 rounded-2xl p-6 overflow-hidden transition-all"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent blur-2xl scale-110" />
          </div>

          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="bg-white/10 rounded-xl p-3">
              <Building2 className="w-6 h-6 text-white transition-transform duration-150 group-hover:scale-125 group-hover:-rotate-3" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white transition-colors duration-150 group-hover:text-white">
                {instansi.name}
              </h3>
              <p className="text-stone-400 text-sm flex items-center gap-1 transition-colors duration-150 group-hover:text-stone-100">
                <MapPin className="w-3 h-3 text-white" /> {instansi.location}
              </p>
            </div>
          </div>

          <div className="mb-4 relative z-10">
            <span className="inline-block bg-white/10 text-white text-sm px-3 py-1 rounded-full transition-colors duration-150 group-hover:bg-white/20 group-hover:text-white">
              {instansi.product}
            </span>
          </div>

          <p className="text-stone-300 mb-4 relative z-10 transition-colors duration-150 group-hover:text-stone-100">
            {instansi.description}
          </p>

          <div className="border-t border-stone-700 pt-4 relative z-10">
            <h4 className="text-white text-sm font-medium mb-3 transition-colors duration-150 group-hover:text-white">
              Aplikasi yang Digunakan:
            </h4>
            <div className="flex flex-wrap gap-2">
              {instansi.applications.map((app, i) => (
                <span
                  key={i}
                  className="bg-neutral-800 text-stone-300 text-xs px-2 py-1 rounded transition-colors duration-150 group-hover:bg-neutral-700 group-hover:text-stone-100"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

