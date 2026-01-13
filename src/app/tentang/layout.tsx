import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Kami - Kamunara | Solusi Digital Terpercaya',
  description: 'Pelajari lebih lanjut tentang Kamunara, perusahaan outsource software development terpercaya.',
}

export default function TentangLayout({ children }: { children: React.ReactNode }) {
  return <div className="font-heading">{children}</div>
}
