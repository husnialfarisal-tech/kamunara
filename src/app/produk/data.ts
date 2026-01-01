export const packagePrices = {
  standar: { monthly: 100000, annual: 1080000 },
  prof: { monthly: 400000, annual: 4320000 },
  excl: { monthly: 1000000, annual: 10800000 }
}

export const features = [
  // Urutan dari tabel pertama (Image ID: 2)
  {
    standar: 'Single User',
    prof: 'Multi User (1 Owner, 1 Admin, 4 Kasir)',
    excl: 'User (Sesuai kebutuhan)'
  },
  {
    standar: '1000 Produk',
    prof: '5000 Produk (100 Bergambar)',
    excl: 'Produk (Sesuai kebutuhan)'
  },
  {
    standar: 'Custom Tampilan dan Fitur',
    prof: 'Custom Tampilan dan Fitur',
    excl: 'Custom Tampilan dan Fitur (Sesuai kebutuhan)'
  },
  {
    standar: 'Laporan Transaksi (Basic)',
    prof: 'Laporan Transaksi (Advance)',
    excl: 'Laporan Transaksi (Sesuai kebutuhan)'
  },
  {
    standar: 'Fitur Diskon Produk',
    prof: 'Fitur Diskon Produk',
    excl: 'Fitur Diskon Produk (Sesuai kebutuhan)'
  },
  {
    standar: 'Scan Barcode',
    prof: 'Scan Barcode',
    excl: 'Scan Barcode (Sesuai kebutuhan)'
  },
  {
    standar: 'Generate Barcode',
    prof: 'Generate Barcode',
    excl: 'Generate Barcode (Sesuai kebutuhan)'
  },
  {
    standar: 'Print Struk',
    prof: 'Print Struk',
    excl: 'Print Struk (Sesuai kebutuhan)'
  },

  // Urutan dari tabel kedua (Image ID: 3) – dilanjutkan langsung
  {
    standar: 'Manajemen Pelanggan',
    prof: 'Manajemen Pelanggan',
    excl: 'Manajemen Pelanggan (Sesuai kebutuhan)'
  },
  {
    standar: 'Pembayaran Digital (Coming Soon)',
    prof: 'Pembayaran Digital (Coming Soon)',
    excl: 'Pembayaran Digital (Coming Soon)'
  },
  {
    standar: 'Pengaturan Operasi Toko',
    prof: 'Pengaturan Operasi Toko',
    excl: 'Pengaturan Operasi Toko (Sesuai kebutuhan)'
  },
  {
    standar: 'Dukungan Multi-Outlet',
    prof: 'Dukungan Multi-Outlet (Add-On)',
    excl: 'Dukungan Multi-Outlet (Sesuai kebutuhan)'
  },
  {
    standar: 'Backup & Recovery Data',
    prof: 'Backup & Recovery Data',
    excl: 'Backup & Recovery Data (Sesuai kebutuhan)'
  },
  {
    standar: 'Analisis & Laporan (Dasar)',
    prof: 'Analisis & Laporan (Lengkap)',
    excl: 'Analisis & Laporan (Sesuai kebutuhan)'
  },
  {
    standar: 'Koneksi Noi Book (Coming Soon)',
    prof: 'Koneksi Noi Book (Coming Soon)',
    excl: 'Koneksi Noi Book (Coming Soon)'
  },
];

export const enabledFeatures = {
  standar: [true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true],
  prof: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  excl: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
}

// Data marker untuk peta
export const clientLocations = [
  { nama: 'Toko Makmur', produk: 'PIPOS', kota: 'Sagea', lat: 0.464371, lng: 128.096860 },
  { nama: 'Toko Rizky', produk: 'PIPOS', kota: 'Saketa', lat: -0.356588, lng: 127.846552 },
  { nama: 'Toko Sembako', produk: 'PIPOS', kota: 'Sofifi', lat: 0.75, lng: 127.55 },
  { nama: 'Toko Peralatan', produk: 'PIPOS', kota: 'Tobelo', lat: 1.73, lng: 127.99 },
  { nama: 'Jati Mart', produk: 'PIPOS', kota: 'Buli', lat: 0.83, lng: 128.27 },
  { nama: 'Universitas Khairun', produk: 'KKNKU', kota: 'Ternate', lat: 0.7890, lng: 127.3890 }
]
