/**
 * CONTOH PENGGUNAAN ClientMap di Halaman Produk
 * ================================================
 *
 * Berikut adalah contoh cara menggunakan komponen ClientMap
 * di halaman produk Anda (src/app/produk/page.tsx atau file lainnya)
 *
 * 1. Import komponen:
 *    import ClientMap from '@/components/ClientMap'
 *
 * 2. Siapkan data marker sebagai array JavaScript:
 *    const clientLocations = [
 *      { nama: 'Universitas Negeri A', produk: 'PIPOS', kota: 'Jakarta', lat: -6.2088, lng: 106.8456 },
 *      { nama: 'Pemerintah Daerah B', produk: 'PIPOS & KKNKU', kota: 'Bandung', lat: -6.9175, lng: 107.6191 },
 *      { nama: 'Rumah Sakit C', produk: 'PIPOS', kota: 'Surabaya', lat: -7.2575, lng: 112.7521 },
 *      { nama: 'Perusahaan Swasta D', produk: 'KKNKU', kota: 'Medan', lat: 3.5952, lng: 98.6722 },
 *      { nama: 'Sekolah Swasta E', produk: 'PIPOS', kota: 'Yogyakarta', lat: -7.7956, lng: 110.3695 },
 *      { nama: 'Instansi Pemerintah F', produk: 'PIPOS & KKNKU', kota: 'Semarang', lat: -6.9667, lng: 110.4167 }
 *    ]
 *
 * 3. Gunakan komponen ClientMap di JSX:
 *    <section className="py-20 px-4 bg-stone-900/50">
 *      <div className="container mx-auto">
 *        <h2 className="text-4xl font-bold text-white mb-8 text-center">
 *          Peta Lokasi Klien Kami
 *        </h2>
 *        <ClientMap markers={clientLocations} />
 *      </div>
 *    </section>
 *
 * ================================================
 *
 * PENTING: Pastikan leaflet sudah terinstall:
 * bun add leaflet
 *
 * Catatan:
 * - Komponen ini adalah Client Component ('use client')
 * - Kompatibel dengan Next.js App Router
 * - Otomatis menyesuaikan zoom untuk menampilkan semua marker
 * - Marker memiliki popup dengan info klien
 * - Styling sudah disertakan dalam komponen
 */

// ================================================
// CONTOH DATA YANG BISA ANDA GUNAKAN
// ================================================

export const exampleClientLocations = [
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
