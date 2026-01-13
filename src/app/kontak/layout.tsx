import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontak Kami - Kamunara | Solusi Digital Terpercaya',
  description: 'Hubungi kami untuk konsultasi dan informasi lebih lanjut tentang layanan digital Kamunara.',
}

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return <div className="font-heading">{children}</div>
}
