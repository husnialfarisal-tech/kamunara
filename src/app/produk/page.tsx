import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import HeroSection from './HeroSection'
import PIPOSSection from './PIPOSSection'
import SubscriptionSection from './SubscriptionSection'
import ProyekKamiSection from './ProyekKamiSection'
import KKNKUSection from './KKNKUSection'
import ClientMapSection from './ClientMapSection'
import StatisticsSection from './StatisticsSection'
import InstitutionsSection from './InstitutionsSection'

export default function ProdukPage() {
  return (
    <>
      <Navbar />
      
      <main className="relative pt-32 min-h-screen bg-neutral-950 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />

        <div className="relative z-10 pb-12">
          {/* Hero Section */}
          <HeroSection />

          {/* Section Produk: PIPOS & KKNKU */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <PIPOSSection />
              
              {/* Subscription Section */}
              <SubscriptionSection />
              
              {/* Proyek Kami Section */}
              <ProyekKamiSection />
              
              {/* KKNKU Section */}
              <KKNKUSection />
              
              {/* Client Map */}
              <ClientMapSection />
              
              {/* Statistics */}
              <StatisticsSection />
              
              {/* Institutions */}
              <InstitutionsSection />
            </div>
          </section>

          {/* CTA */}
          <CTA
            title="Tertarik dengan Produk Kami?"
            description="Diskusikan kebutuhan bisnis Anda dengan tim kami dan temukan solusi yang tepat"
            buttonText="Hubungi Kami"
            href="/kontak"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

