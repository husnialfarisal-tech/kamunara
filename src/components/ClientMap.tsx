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

    // Inisialisasi peta dengan ukuran besar
    const map = L.map(mapContainerRef.current, {
      // Default: matikan interaksi agar tidak ganggu scroll
      dragging: false,
      touchZoom: false,
      doubleClickZoom: false,
      scrollWheelZoom: false,
      boxZoom: false,
      keyboard: false
    }).setView([-2.5489, 118.0149], 5)

    // Tile layer: WARNA PUTIH KE ABU-ABUAN (light & minimalis)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
      subdomains: 'abcd'
    }).addTo(map)

    // Custom marker icon (tetap seperti asli)
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
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
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

    // Tambahkan marker
    markers.forEach((markerData) => {
      const marker = L.marker([markerData.lat, markerData.lng], { icon: customIcon }).addTo(map)

      const popupContent = `
        <div style="
          font-family: system-ui, -apple-system, sans-serif;
          padding: 12px;
          min-width: 200px;
          background: #1c1917;
          border-radius: 8px;
          color: #f5f5f4;
        ">
          <h3 style="
            margin: 0 0 8px 0;
            font-size: 16px;
            font-weight: bold;
            color: #fbbf24;
          ">
            ${markerData.nama}
          </h3>
          <div style="margin-bottom: 4px;">
            <span style="
              display: inline-block;
              background: rgba(251, 191, 36, 0.2);
              color: #fbbf24;
              padding: 4px 12px;
              border-radius: 16px;
              font-size: 12px;
              border: 1px solid rgba(251, 191, 36, 0.3);
            ">
              ${markerData.produk}
            </span>
          </div>
          <p style="
            margin: 8px 0 0 0;
            font-size: 14px;
            color: #a1a1aa;
            display: flex;
            align-items: center;
            gap: 6px;
          ">
            📍 ${markerData.kota}
          </p>
        </div>
      `

      marker.bindPopup(popupContent, { maxWidth: 300 })
    })

    // Fit bounds agar semua marker terlihat
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(m => [m.lat, m.lng]))
      map.fitBounds(bounds, { padding: [50, 50] })
    }

    mapRef.current = map

    // Aktifkan interaksi saat tekan Ctrl (desktop)
    const enableInteraction = () => {
      map.dragging.enable()
      map.touchZoom.enable()
      map.doubleClickZoom.enable()
      map.scrollWheelZoom.enable()
    }

    const disableInteraction = () => {
      map.dragging.disable()
      map.touchZoom.disable()
      map.doubleClickZoom.disable()
      map.scrollWheelZoom.disable()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) enableInteraction()
    }

    const handleKeyUp = () => disableInteraction()

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      map.remove()
      mapRef.current = null
    }
  }, [markers])

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: '100%',
        height: '700px',  // Ukuran lebih besar & fixed
        borderRadius: '16px',
        overflow: 'hidden',
        border: '2px solid rgba(251, 191, 36, 0.3)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
        touchAction: 'pan-x pan-y pinch-zoom'  // 2 jari tetap jalan di mobile
      }}
    />
  )
}