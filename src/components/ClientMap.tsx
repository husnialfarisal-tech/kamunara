'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MarkerData {
  nama: string
  produk: string
  kota: string
  lat: number
  lng: number
}

interface ClientMapProps {
  markers: MarkerData[]
}

export default function ClientMap({ markers }: ClientMapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return

    // Detect if it's mobile device
    const isMobile = window.innerWidth < 768
    
    // Set responsive height for map container
    const container = mapContainerRef.current
    if (container) {
      const screenHeight = window.innerHeight
      const maxHeight = Math.min(screenHeight * 0.6, 700) // 60% of screen height or max 700px
      const minHeight = isMobile ? 400 : 500
      container.style.setProperty('--map-height', `${Math.max(maxHeight, minHeight)}px`)
    }

    // Inisialisasi peta - enable interactions on mobile, desktop with instruction
    const map = L.map(mapContainerRef.current, {
      dragging: !isMobile, // Enable on mobile, disable on desktop by default
      touchZoom: true, // Always enable for mobile pinch-to-zoom
      doubleClickZoom: true,
      scrollWheelZoom: !isMobile, // Disable scroll zoom on mobile to avoid accidental zooming
      boxZoom: false,
      keyboard: false,
      zoomControl: true
    }).setView([-2.5489, 118.0149], isMobile ? 4 : 5)

    // Tile layer - tema terang yang bersih dan profesional
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & © <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
      subdomains: 'abcd'
    }).addTo(map)

    // Custom marker icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          width: 32px;
          height: 32px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 12px;
            height: 12px;
            background: white;
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    })

    // Tambahkan semua marker
    markers.forEach((markerData) => {
      const marker = L.marker([markerData.lat, markerData.lng], { icon: customIcon }).addTo(map)

      const popupContent = `
        <div style="
          font-family: system-ui, -apple-system, sans-serif;
          padding: 14px;
          min-width: 220px;
          background: #1c1917;
          border-radius: 10px;
          color: #f5f5f4;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        ">
          <h3 style="
            margin: 0 0 10px 0;
            font-size: 17px;
            font-weight: 700;
            color: #fbbf24;
          ">
            ${markerData.nama}
          </h3>
          <div style="margin-bottom: 8px;">
            <span style="
              display: inline-block;
              background: rgba(251, 191, 36, 0.25);
              color: #fbbf24;
              padding: 5px 14px;
              border-radius: 9999px;
              font-size: 13px;
              font-weight: 500;
              border: 1px solid rgba(251, 191, 36, 0.4);
            ">
              ${markerData.produk}
            </span>
          </div>
          <p style="
            margin: 0;
            font-size: 14px;
            color: #d1d5db;
            display: flex;
            align-items: center;
            gap: 8px;
          ">
            <span style="font-size: 16px;">📍</span>
            ${markerData.kota}
          </p>
        </div>
      `

      marker.bindPopup(popupContent, { maxWidth: 320 })
    })

    // Auto fit bounds jika ada marker
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(m => [m.lat, m.lng]))
      map.fitBounds(bounds, { padding: [60, 60] })
    }

    mapRef.current = map

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [markers])

  return (
    <div className="w-full">
      {/* Petunjuk penggunaan - tampil sebelum peta */}
      <div className="mb-6 p-4 sm:p-5 bg-gradient-to-r from-amber-900/20 to-amber-800/10 rounded-xl border border-amber-500/30 backdrop-blur-sm">
        <h3 className="text-base sm:text-lg font-semibold text-amber-300 mb-3 flex items-center gap-2">
          <span className="text-lg sm:text-xl">ℹ️</span> Cara Menggunakan Peta Ini
        </h3>
        <ul className="space-y-2.5 text-stone-300 text-xs sm:text-sm leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold mt-0.5">1.</span>
            <span>Klik pada <strong>tanda pin berwarna kuning</strong> untuk melihat informasi nama, produk, dan lokasi.</span>
          </li>
          <li className="flex items-start gap-3 hidden sm:block">
            <span className="text-amber-400 font-bold mt-0.5">2.</span>
            <span>Untuk menggerakkan peta atau memperbesar/kecilkan, tekan dan tahan tombol <strong>Ctrl</strong> (Windows) atau <strong>Cmd</strong> (Mac) sambil menggerakkan mouse.</span>
          </li>
          <li className="flex items-start gap-3 sm:hidden">
            <span className="text-amber-400 font-bold mt-0.5">2.</span>
            <span>Gerakkan jari di peta untuk menggeser, dan gunakan <strong>pinch-to-zoom</strong> untuk memperbesar atau memperkecil.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold mt-0.5">3.</span>
            <span>Peta akan otomatis menyesuaikan area agar semua lokasi dapat terlihat dengan baik.</span>
          </li>
        </ul>
      </div>

      {/* Container Peta */}
      <div
        ref={mapContainerRef}
        className="w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/30"
        style={{
          height: 'var(--map-height, 700px)',
          minHeight: '350px',
          touchAction: 'pan-x pan-y pinch-zoom'
        }}
      />
    </div>
  )
}