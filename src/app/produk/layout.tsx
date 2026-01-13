import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Produk - Kamunara | Solusi Digital Terpercaya',
  description: 'Jelajahi produk dan layanan digital kami yang dirancang untuk membantu transformasi bisnis Anda.',
}

export default function ProdukLayout({ children }: { children: React.ReactNode }) {
  return <div className="font-heading">{children}</div>
}
