'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const traditional = [
  'Static reports updated weekly',
  'Manual data exports to Excel',
  'No predictive capabilities',
  'Fragmented data sources',
  'Days to create board reports',
  'Reactive decision-making',
]

const maxabi = [
  'Real-time AI-powered insights',
  'Automated data synthesis',
  'Predictive forecasting & scenarios',
  'Unified financial intelligence hub',
  'One-click board report generation',
  'Proactive risk detection',
]

export default function Comparison() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">From Dashboards to Decisions</h2>
          <p className="text-[#A1A1AA] text-lg">MAXABI replaces your BI stack with intelligent financial command.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional BI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8"
            style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.1)' }}>
                <X className="w-4 h-4 text-[#EF4444]" />
              </div>
              <h3 className="text-lg font-semibold text-white">Traditional BI</h3>
            </div>
            <ul className="space-y-4">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#A1A1AA]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* MAXABI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.05) 0%, #111111 100%)',
              border: '1px solid rgba(16,185,129,0.15)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.15)' }}>
                <Check className="w-4 h-4 text-[#10B981]" />
              </div>
              <h3 className="text-lg font-semibold text-white">MAXABI</h3>
            </div>
            <ul className="space-y-4">
              {maxabi.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
