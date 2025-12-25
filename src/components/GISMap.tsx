'use client'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Building2, MapPin } from 'lucide-react'
import { Icon } from 'leaflet'
import { useEffect } from 'react'

// Create custom icon for markers
const createCustomIcon = () => {
  return new Icon({
    iconUrl: `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f59e0b'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  })
}

interface InstansiData {
  id: number
  name: string
  location: string
  product: string
  description: string
  applications: string[]
  position: [number, number]
}

const instansiData: InstansiData[] = [
  {
    id: 1,
    name: "Universitas Negeri A",
    location: "Jakarta",
    product: "PIPOS",
    description: "Sistem manajemen database untuk menyimpan data mahasiswa dan akademik dengan efisien",
    applications: ["Data Mahasiswa", "Nilai Akademik", "Keuangan", "Perpustakaan"],
    position: [-6.2088, 106.8456]
  },
  {
    id: 2,
    name: "Pemerintah Daerah B",
    location: "Bandung",
    product: "PIPOS & KKNKU",
    description: "Integrasi sistem untuk manajemen data kependudukan dan layanan keuangan digital",
    applications: ["Kependudukan", "Layanan Publik", "Pembayaran Digital", "Administrasi"],
    position: [-6.9175, 107.6191]
  },
  {
    id: 3,
    name: "Rumah Sakit C",
    location: "Surabaya",
    product: "PIPOS",
    description: "Sistem database terpadu untuk rekam medis dan manajemen pasien",
    applications: ["Rekam Medis", "Jadwal Dokter", "Farmasi", "Administrasi RS"],
    position: [-7.2575, 112.7521]
  },
  {
    id: 4,
    name: "Perusahaan Swasta D",
    location: "Medan",
    product: "KKNKU",
    description: "Aplikasi mobile untuk manajemen benefit karyawan dan kartu kredit perusahaan",
    applications: ["Manajemen Karyawan", "Benefit", "Penggajian", "Laporan"],
    position: [3.5952, 98.6722]
  },
  {
    id: 5,
    name: "Sekolah Swasta E",
    location: "Yogyakarta",
    product: "PIPOS",
    description: "Sistem informasi sekolah terpadu untuk manajemen data siswa dan guru",
    applications: ["Data Siswa", "Data Guru", "Jadwal Pelajaran", "Nilai"],
    position: [-7.7956, 110.3695]
  },
  {
    id: 6,
    name: "Instansi Pemerintah F",
    location: "Semarang",
    product: "PIPOS & KKNKU",
    description: "Solusi digital untuk manajemen data pegawai dan layanan keuangan",
    applications: ["Data Pegawai", "Absensi", "Penggajian", "Laporan"],
    position: [-6.9667, 110.4167]
  }
]

function MapController({ bounds }: { bounds: [[number, number], [number, number]] }) {
  const map = useMap()
  useEffect(() => {
    map.fitBounds(bounds, { padding: [50, 50] })
  }, [map, bounds])
  return null
}

export default function GISMap() {
  // Calculate bounds to fit all markers
  const bounds: [[number, number], [number, number]] = [
    [instansiData[0].position[0], instansiData[0].position[1]],
    [instansiData[0].position[0], instansiData[0].position[1]]
  ]

  instansiData.forEach(instansi => {
    if (instansi.position[0] < bounds[0][0]) bounds[0][0] = instansi.position[0]
    if (instansi.position[1] < bounds[0][1]) bounds[0][1] = instansi.position[1]
    if (instansi.position[0] > bounds[1][0]) bounds[1][0] = instansi.position[0]
    if (instansi.position[1] > bounds[1][1]) bounds[1][1] = instansi.position[1]
  })

  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl">
      <MapContainer
        center={[-2.5489, 118.0149]}
        zoom={5}
        className="w-full h-full"
        style={{ backgroundColor: '#1c1917' }}
      >
        <MapController bounds={bounds} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {instansiData.map((instansi) => (
          <Marker
            key={instansi.id}
            position={instansi.position}
            icon={createCustomIcon()}
          >
            <Popup
              maxWidth={350}
              className="leaflet-popup-content-wrapper"
            >
              <div className="p-0 bg-stone-800 text-stone-100 rounded-lg min-w-[280px]">
                <div className="flex items-start gap-2 mb-3">
                  <div className="bg-amber-500/20 rounded-lg p-2 mt-1">
                    <Building2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-400">{instansi.name}</h3>
                    <p className="text-stone-400 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {instansi.location}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="inline-block bg-amber-500/20 text-amber-400 text-xs px-3 py-1 rounded-full border border-amber-500/30">
                    {instansi.product}
                  </span>
                </div>

                <p className="text-stone-300 text-sm mb-3">{instansi.description}</p>

                <div className="border-t border-stone-700 pt-3">
                  <h4 className="text-amber-400 text-xs font-semibold mb-2 flex items-center gap-2">
                    Aplikasi yang Digunakan:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {instansi.applications.map((app, i) => (
                      <span
                        key={i}
                        className="bg-stone-700 text-stone-300 text-xs px-2 py-1 rounded hover:bg-amber-500/20 transition-colors"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
