'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-3xl p-16"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.05) 100%)',
            border: '1px solid rgba(16,185,129,0.15)',
          }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready for AI-powered<br />financial intelligence?
          </h2>
          <p className="text-[#A1A1AA] text-lg mb-10 max-w-xl mx-auto">
            Join forward-thinking CFOs who have replaced their BI stack with MAXABI.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-black transition-all hover:opacity-90"
              style={{ background: '#10B981' }}
            >
              Explore Live Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="px-8 py-4 rounded-xl font-semibold text-white transition-all hover:bg-white/5"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
