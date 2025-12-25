# ClientMap - Komponen Peta Interaktif

Komponen React peta interaktif menggunakan Leaflet.js dan OpenStreetMap untuk menampilkan lokasi klien.

## Fitur

- ✅ Peta interaktif dengan Leaflet.js
- ✅ OpenStreetMap sebagai tile provider
- ✅ Marker custom dengan warna gold/amber
- ✅ Popup informasi untuk setiap marker
- ✅ Auto-fit untuk menampilkan semua marker
- ✅ Styling modern dan responsif
- ✅ Kompatibel dengan Next.js App Router

## Installation

Pastikan leaflet sudah terinstall:

```bash
bun add leaflet
```

## Cara Penggunaan

### 1. Import Komponen

```tsx
import ClientMap from '@/components/ClientMap'
```

### 2. Siapkan Data Marker

Data marker berupa array JavaScript dengan struktur:

```typescript
interface MarkerData {
  nama: string    // Nama klien
  produk: string  // Nama produk yang digunakan
  kota: string    // Nama kota
  lat: number     // Latitude
  lng: number     // Longitude
}
```

Contoh data:

```typescript
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
  }
]
```

### 3. Gunakan di Halaman Produk

```tsx
'use client'

import ClientMap from '@/components/ClientMap'

export default function Produk() {
  const clientLocations = [
    // ... data marker Anda
  ]

  return (
    <div>
      {/* ... konten produk yang sudah ada ... */}

      {/* Tambahkan peta di bawah daftar produk */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Peta Lokasi Klien Kami
          </h2>
          <ClientMap markers={clientLocations} />
        </div>
      </section>
    </div>
  )
}
```

## Props

| Prop     | Type          | Required | Deskripsi                      |
|----------|---------------|----------|-------------------------------|
| markers  | MarkerData[]  | Yes      | Array data lokasi klien        |

### MarkerData

| Field    | Type   | Required | Deskripsi             |
|----------|--------|----------|----------------------|
| nama     | string | Yes      | Nama klien           |
| produk   | string | Yes      | Nama produk           |
| kota     | string | Yes      | Nama kota            |
| lat      | number | Yes      | Koordinat latitude    |
| lng      | number | Yes      | Koordinat longitude   |

## Styling

Komponen sudah memiliki styling bawaan dengan:
- Height: 600px
- Border dengan warna amber
- Shadow effect
- Border radius
- Full width responsif

Jika ingin mengubah styling, Anda bisa membungkusnya dengan div dan mengatur style sesuai kebutuhan.

## Contoh Lengkap

Lihat file `ClientMap.example.ts` untuk contoh lengkap penggunaan.

## Troubleshooting

### Map tidak muncul
- Pastikan leaflet sudah terinstall
- Cek console untuk error
- Pastikan container parent memiliki height

### Marker tidak muncul
- Cek format data marker
- Pastikan lat/lng valid
- Koordinat harus berupa angka (bukan string)

### Styling tidak sesuai
- Pastikan CSS Leaflet sudah di-import di komponen
- Cek z-index jika peta tertutup elemen lain
