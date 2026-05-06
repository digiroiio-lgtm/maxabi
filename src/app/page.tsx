import Navbar from '@/components/landing/navbar'
import Hero from '@/components/landing/hero'
import Comparison from '@/components/landing/comparison'
import Modules from '@/components/landing/modules'
import CopilotPreview from '@/components/landing/copilot-preview'
import CTA from '@/components/landing/cta'

export default function Home() {
  return (
    <main style={{ background: '#0A0A0A' }}>
      <Navbar />
      <Hero />
      <Comparison />
      <Modules />
      <CopilotPreview />
      <CTA />
      <footer className="py-8 px-8 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-sm text-[#A1A1AA]">© 2024 MAXABI. AI-Powered Financial Intelligence for CFOs.</p>
      </footer>
    </main>
  )
}
