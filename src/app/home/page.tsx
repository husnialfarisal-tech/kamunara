'use client'

import { motion } from 'framer-motion'
import { Code2, Rocket, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      {/* Navigation - hanya muncul di sini dan halaman lain */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/80 backdrop-blur-md border-b border-amber-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-stone-900" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                KAMUNARA
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-8"
            >
              <Link href="/home" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                Home
              </Link>
              <Link href="/produk" className="text-stone-300 hover:text-amber-400 transition-colors font-medium">
                Produk
              </Link>
              <Link href="/tentang" className="text-stone-300 hover:text-amber-400 transition-colors font-medium">
                Tentang
              </Link>
              <Link href="/kontak" className="text-stone-300 hover:text-amber-400 transition-colors font-medium">
                Kontak
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Features Section */}
      <section className="pt-32 pb-20 px-4 bg-stone-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Solusi Digital
              <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Terdepan
              </span>
            </h2>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              Kami menyediakan berbagai solusi digital yang inovatif untuk membantu bisnis Anda berkembang di era digital
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-12 h-12" />,
                title: "Web Development",
                description: "Pembuatan website modern, responsif, dan performa tinggi sesuai kebutuhan bisnis Anda"
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Mobile Applications",
                description: "Pengembangan aplikasi mobile untuk iOS dan Android dengan pengalaman pengguna terbaik"
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Digital Solutions",
                description: "Solusi digital terintegrasi untuk meningkatkan efisiensi dan produktivitas bisnis"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all group"
              >
                <div className="bg-amber-500/10 rounded-xl p-4 w-fit mb-6 group-hover:bg-amber-500/20 transition-all">
                  <div className="text-amber-400">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-stone-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Siap Transformasi Digital?
            </h2>
            <p className="text-stone-800 text-lg max-w-2xl mx-auto mb-8">
              Mari diskusikan bagaimana Kamunara dapat membantu mengembangkan solusi digital yang tepat untuk bisnis Anda
            </p>
            <Link href="/kontak">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-stone-900 text-amber-400 font-bold px-10 py-4 rounded-lg hover:bg-stone-800 transition-all flex items-center gap-2 mx-auto"
              >
                Hubungi Kami Sekarang
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-amber-500/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-stone-400">
            © 2024 Kamunara. All rights reserved. Holding by DS Company.
          </p>
        </div>
      </footer>
    </main>
  )
}