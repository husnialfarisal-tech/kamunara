// src/app/home/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Kamunara | Solusi Digital Terpercaya',
  description: 'Kami membantu bisnis, instansi, dan organisasi mencapai transformasi digital yang efisien, aman, dan scalable.',
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <div className="font-heading">{children}</div>
}
