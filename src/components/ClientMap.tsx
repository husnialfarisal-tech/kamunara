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

    const isMobile = window.innerWidth < 768
    
    // Inisialisasi peta
    const map = L.map(mapContainerRef.current, {
      dragging: true, // Sebaiknya biarkan aktif, namun batasi zoom scroll jika ingin mencegah user "tersangkut" saat scroll halaman
      scrollWheelZoom: false, // Disarankan false agar tidak mengganggu scroll utama halaman
      touchZoom: true,
      zoomControl: false, // Kita pindahkan posisi zoom control nanti
    }).setView([-2.5489, 118.0149], 5)

    // Menambahkan kembali Zoom Control di posisi kanan bawah agar tidak menutupi informasi
    L.control.zoom({ position: 'bottomright' }).addTo(map)

    // TEMA PETA: Menggunakan 'Dark Matter' agar serasi dengan background Neutral-950 Anda
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      maxZoom: 20
    }).addTo(map)

    // Custom marker icon dengan animasi pulse (CSS di bawah)
    const customIcon = L.divIcon({
      className: 'relative',
      html: `
        <div class="map-marker-container">
          <div class="marker-pulse"></div>
          <div class="marker-main">
             <div class="marker-core"></div>
          </div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -35]
    })

    markers.forEach((markerData) => {
      const marker = L.marker([markerData.lat, markerData.lng], { icon: customIcon }).addTo(map)

      const popupContent = `
        <div class="custom-popup-content">
          <h3>${markerData.nama}</h3>
          <div class="badge">${markerData.produk}</div>
          <p><span>📍</span> ${markerData.kota}</p>
        </div>
      `
      marker.bindPopup(popupContent, { 
        maxWidth: 300,
        className: 'elegant-popup'
      })
    })

    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(m => [m.lat, m.lng]))
      map.fitBounds(bounds, { padding: [50, 50] })
    }

    mapRef.current = map

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [markers])

  return (
    <div className="w-full space-y-4">
      {/* Legend / Info Mini */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
           <p className="text-amber-400 text-sm font-medium mb-1 flex items-center gap-2">
             <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
             Status Sistem
           </p>
           <p className="text-stone-400 text-xs">Semua titik distribusi beroperasi normal dan terintegrasi secara real-time.</p>
        </div>
        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hidden md:block">
           <p className="text-indigo-400 text-sm font-medium mb-1">Interaksi Peta</p>
           <p className="text-stone-400 text-xs">Klik pada marker untuk detail kemitraan atau gunakan zoom untuk melihat area spesifik.</p>
        </div>
      </div>

      {/* Map Container dengan CSS Injector untuk styling Leaflet */}
      <div className="relative group">
        <div
          ref={mapContainerRef}
          className="w-full h-[450px] md:h-[600px] rounded-3xl overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-700 border border-white/10 shadow-inner"
        />
        
        {/* CSS Scoped untuk Leaflet */}
        <style jsx global>{`
          .leaflet-container {
            background: #0a0a0a !important;
          }
          
          /* Styling Popup */
          .elegant-popup .leaflet-popup-content-wrapper {
            background: #171717 !important;
            color: white !important;
            border-radius: 16px !important;
            padding: 0 !important;
            border: 1px solid rgba(255,255,255,0.1);
          }
          .elegant-popup .leaflet-popup-tip {
            background: #171717 !important;
          }
          .custom-popup-content {
            padding: 12px;
          }
          .custom-popup-content h3 {
            margin: 0 0 8px 0;
            color: #fbbf24;
            font-weight: 700;
          }
          .custom-popup-content .badge {
            display: inline-block;
            background: rgba(251, 191, 36, 0.1);
            color: #fbbf24;
            padding: 2px 10px;
            border-radius: 20px;
            font-size: 11px;
            border: 1px solid rgba(251, 191, 36, 0.3);
            margin-bottom: 8px;
          }

          /* Custom Marker Animation */
          .map-marker-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .marker-main {
            width: 24px;
            height: 24px;
            background: #f59e0b;
            border: 3px solid white;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
          }
          .marker-core {
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
          }
          .marker-pulse {
            position: absolute;
            width: 40px;
            height: 40px;
            background: rgba(245, 158, 11, 0.4);
            border-radius: 50%;
            animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
            z-index: 1;
          }
          @keyframes pulse-ring {
            0% { transform: scale(.3); opacity: 0.8; }
            80%, 100% { transform: scale(1.5); opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  )
}