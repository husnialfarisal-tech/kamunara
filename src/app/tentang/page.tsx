'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

// Komponen utama
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import StatisticsSection from './StatisticsSection'

// Komponen yang sudah dipisahkan
import VisionMissionSection from './components/VisionMissionSection'
import OrganizationChartSection from './components/OrganizationChartSection'
import ValuesSection from './components/ValuesSection'
import SocialMediaSection from './components/SocialMediaSection'

export default function TentangPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-950 relative selection:bg-amber-500/30">
        
        {/* AMBIENT BACKGROUND PARTICLES */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-amber-200 rounded-full"
              initial={{
                x: `${Math.random() * 100}vw`,
                y: '100vh',
                opacity: 0,
              }}
              animate={{
                y: '-20vh',
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Glow Effects - Same style as other pages */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 pt-32 pb-12">

          {/* Hero Section */}
          <HeroSection />

          {/* About Section */}
          <AboutSection />
          <StatisticsSection />

          {/* Visi & Misi Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <VisionMissionSection />
            </div>
          </section>

          {/* Bagan Organisasi Kamunara */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Bagan Organisasi</h2>
                <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              </div>
              <OrganizationChartSection />
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-4 py-2 mb-6">
                  <Heart className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">Nilai Perusahaan</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nilai dan Prinsip</h2>
                <p className="text-stone-300 text-lg max-w-2xl mx-auto">Fondasi dalam setiap langkah kami</p>
              </div>

              <ValuesSection />
              
              {/* Social Media Section - After Values/Principles */}
              <SocialMediaSection />
            </div>
          </section>

          {/* CTA Section */}
          <CTA
            title="Ingin Bekerja Sama?"
            description="Kami siap membantu Anda dalam transformasi digital. Mari diskusikan kebutuhan Anda"
            buttonText="Hubungi Kami"
            href="/kontak"
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

