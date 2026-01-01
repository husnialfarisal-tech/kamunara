'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { Database } from 'lucide-react'
import { features, enabledFeatures, packagePrices } from './data'

export default function SubscriptionSection() {

  const [isMonthly, setIsMonthly] = useState(true)

  const formatPrice = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  const renderFeatureText = (text: string) => {
    if (text.includes('(Coming Soon)')) {
      const parts = text.split('(Coming Soon)')
      return (
        <>
          {parts[0]}
          <span className="text-yellow-400">(Coming Soon)</span>
        </>
      )
    }
    return text
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Database className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Berlangganan PIPOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pilih Paket yang Tepat
          </h2>
          <p className="text-lg text-stone-300 max-w-3xl mx-auto">
            Dapatkan akses penuh ke fitur PIPOS dengan paket berlangganan yang sesuai kebutuhan bisnis Anda
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-white/10 rounded-full p-2 flex items-center gap-2">
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isMonthly ? 'bg-amber-500 text-white' : 'text-stone-400 hover:text-white'
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isMonthly ? 'bg-amber-500 text-white' : 'text-stone-400 hover:text-white'
              }`}
            >
              Tahunan
            </button>
          </div>
        </motion.div>

        {/* Subscription Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Standar Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{
              y: -14,
              scale: 1.045,
              boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
              transition: { duration: 0.14, ease: 'easeOut' }
            }}
            className="group relative bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-3xl p-6 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
            </div>

            {!isMonthly && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="absolute top-4 right-4 z-20"
              >
                <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full font-medium shadow-lg hover:bg-green-500/30 hover:border-green-500/50 transition-all duration-200 cursor-pointer">
                  Hemat 10%
                </div>
              </motion.div>
            )}

            <div className="relative z-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
                <p className="text-stone-400 text-sm">Cocok untuk toko kecil</p>

                <div className="mt-4">
                  {isMonthly ? (
                    <>
                      <div className="text-4xl font-bold text-amber-400">
                        <div className="line-through text-stone-500 text-2xl">Rp 200.000</div>
                        <div>{formatPrice(packagePrices.standar.monthly)}<span className="text-xs text-stone-500 font-normal">/bulan</span></div>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">
                        <span className="font-normal">{formatPrice(packagePrices.standar.annual)}/tahun</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl font-bold text-amber-400">
                        <div className="line-through text-stone-500 text-2xl">Rp 1.200.000</div>
                        <div>{formatPrice(packagePrices.standar.annual)}<span className="text-xs text-stone-500 font-normal">/tahun</span></div>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">
                        <span className="font-normal">{formatPrice(packagePrices.standar.monthly)}/bulan</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => {
                  const isEnabled = enabledFeatures.standar[index]
                  return (
                    <div key={index} className="flex items-center gap-3 text-stone-300">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isEnabled ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                        {isEnabled ? (
                          <Check className="w-3 h-3 text-green-400" />
                        ) : (
                          <X className="w-3 h-3 text-red-400" />
                        )}
                      </div>
                      <span className={`text-sm ${isEnabled ? 'text-stone-300' : 'text-stone-500'}`}>
                        {renderFeatureText(feature.standar)}
                      </span>
                    </div>
                  )
                })}
              </div>

              <button
                onClick={() => window.open(`https://wa.me/628131415160?text=Halo, saya ingin membeli paket Standard PIPOS`, '_blank')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
              >
                Pilih Standard
              </button>
            </div>
          </motion.div>

          {/* Profesional Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              y: -14,
              scale: 1.045,
              boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
              transition: { duration: 0.14, ease: 'easeOut' }
            }}
            className="group relative bg-neutral-900/60 backdrop-blur-sm border border-amber-500/50 hover:border-amber-400 rounded-3xl p-6 overflow-hidden transform lg:scale-105"
          >
            <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              POPULER
            </div>

            {!isMonthly && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                className="absolute top-12 right-4 z-20"
              >
                <span className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full font-medium shadow-lg hover:bg-green-500/30 hover:border-green-500/50 transition-all duration-200 cursor-pointer block">
                  Hemat 10%
                </span>
              </motion.div>
            )}

            <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <p className="text-stone-400 text-sm">Ideal untuk bisnis berkembang</p>

                <div className="mt-6">
                  {isMonthly ? (
                    <>
                      <div className="text-4xl font-bold text-amber-400">
                        <div className="line-through text-stone-500 text-2xl">Rp 600.000</div>
                        <div>{formatPrice(packagePrices.prof.monthly)}<span className="text-xs text-stone-500 font-normal">/bulan</span></div>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">
                        <span className="font-normal">{formatPrice(packagePrices.prof.annual)}/tahun</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl font-bold text-amber-400">
                        <div className="line-through text-stone-500 text-2xl">Rp 4.800.000</div>
                        <div>{formatPrice(packagePrices.prof.annual)}<span className="text-xs text-stone-500 font-normal">/tahun</span></div>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">
                        <span className="font-normal">{formatPrice(packagePrices.prof.monthly)}/bulan</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => {
                  const isEnabled = enabledFeatures.prof[index]
                  return (
                    <div key={index} className="flex items-center gap-3 text-stone-300">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isEnabled ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                        {isEnabled ? (
                          <Check className="w-3 h-3 text-green-400" />
                        ) : (
                          <X className="w-3 h-3 text-red-400" />
                        )}
                      </div>
                      <span className={`text-sm ${isEnabled ? 'text-stone-300' : 'text-stone-500'}`}>
                        {renderFeatureText(feature.prof)}
                      </span>
                    </div>
                  )
                })}
              </div>

              <button
                onClick={() => window.open(`https://wa.me/628131415160?text=Halo, saya ingin membeli paket Professional PIPOS`, '_blank')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
              >
                Pilih Professional
              </button>
            </div>
          </motion.div>

          {/* Exclusive Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              y: -14,
              scale: 1.045,
              boxShadow: '0 22px 45px -12px rgba(245, 158, 11, 0.55)',
              transition: { duration: 0.14, ease: 'easeOut' }
            }}
            className="group relative bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-3xl p-6 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-150 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl scale-110" />
            </div>

            {!isMonthly && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                className="absolute top-4 right-4 z-20"
              >
                <span className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full font-medium shadow-lg hover:bg-green-500/30 hover:border-green-500/50 transition-all duration-200 cursor-pointer block">
                  Hemat 10%
                </span>
              </motion.div>
            )}

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Exclusive</h3>
                <p className="text-stone-400 text-sm">Solusi enterprise lengkap</p>

                <div className="mt-6">
                  {isMonthly ? (
                    <>
                      <div className="text-4xl font-bold text-amber-400">
                        <div className="line-through text-stone-500 text-2xl">Rp 1.500.000</div>
                        <div>{formatPrice(packagePrices.excl.monthly)}<span className="text-xs text-stone-500 font-normal">/bulan</span></div>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">
                        <span className="font-normal">{formatPrice(packagePrices.excl.annual)}/tahun</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl font-bold text-amber-400">
                        <div className="line-through text-stone-500 text-2xl">Rp 12.000.000</div>
                        <div>{formatPrice(packagePrices.excl.annual)}<span className="text-xs text-stone-500 font-normal">/tahun</span></div>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">
                        <span className="font-normal">{formatPrice(packagePrices.excl.monthly)}/bulan</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => {
                  const isEnabled = enabledFeatures.excl[index]
                  return (
                    <div key={index} className="flex items-center gap-3 text-stone-300">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isEnabled ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                        {isEnabled ? (
                          <Check className="w-3 h-3 text-green-400" />
                        ) : (
                          <X className="w-3 h-3 text-red-400" />
                        )}
                      </div>
                      <span className={`text-sm ${isEnabled ? 'text-stone-300' : 'text-stone-500'}`}>
                        {renderFeatureText(feature.excl)}
                      </span>
                    </div>
                  )
                })}
              </div>

              <button
                onClick={() => window.open(`https://wa.me/628131415160?text=Halo, saya ingin membeli paket Exclusive PIPOS`, '_blank')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
              >
                Pilih Exclusive
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

