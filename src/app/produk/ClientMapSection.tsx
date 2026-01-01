'use client'

import dynamic from 'next/dynamic'
import { clientLocations } from './data'

// Dynamic import ClientMap – hanya load di client-side
const ClientMap = dynamic(() => import('@/components/ClientMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] md:h-[600px] bg-stone-800 rounded-2xl flex items-center justify-center text-stone-400">
      Memuat peta interaktif...
    </div>
  )
})

export default function ClientMapSection() {
  return (
    <div className="h-[500px] sm:h-[600px] lg:h-[700px] w-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-lg">
      <ClientMap markers={clientLocations} />
    </div>
  )
}

