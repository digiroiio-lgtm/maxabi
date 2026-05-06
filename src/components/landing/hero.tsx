'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#10B981' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            AI-Powered CFO Intelligence
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Your CFO Command<br />
            <span style={{ color: '#10B981' }}>Center.</span>
          </h1>

          <p className="text-lg text-[#A1A1AA] leading-relaxed mb-8 max-w-lg">
            MAXABI transforms raw financial data into executive-grade intelligence. Real-time insights, AI-driven forecasts, and boardroom-ready reports — all in one ultra-clean platform.
          </p>

          <div className="flex items-center gap-4 mb-12">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-black transition-all hover:opacity-90"
              style={{ background: '#10B981' }}
            >
              See Live Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all hover:bg-white/5"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Book a Demo
            </Link>
          </div>

          <div className="flex items-center gap-8">
            {[
              { icon: TrendingUp, label: 'Real-time AI Insights' },
              { icon: Shield, label: 'Bank-grade Security' },
              { icon: Zap, label: 'Instant Forecasts' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                <Icon className="w-4 h-4 text-[#10B981]" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: '#111111',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 0 80px rgba(16,185,129,0.08)',
            }}
          >
            {/* Mock dashboard preview */}
            <div className="p-4" style={{ background: '#0D0D0D', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-4 text-xs text-[#A1A1AA]">maxabi.app/dashboard</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Cash Position', value: '$24.7M', change: '+3.2%', positive: true },
                  { label: 'EBITDA', value: '$8.3M', change: '-1.1%', positive: false },
                  { label: 'Net Margin', value: '14.2%', change: '+0.8%', positive: true },
                  { label: 'Runway', value: '18 mo', change: '+2 mo', positive: true },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl p-3"
                    style={{ background: '#171717', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <p className="text-xs text-[#A1A1AA] mb-1">{m.label}</p>
                    <p className="text-base font-bold text-white">{m.value}</p>
                    <p className={`text-xs ${m.positive ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>{m.change}</p>
                  </div>
                ))}
              </div>

              {/* AI Insight */}
              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span className="text-xs font-medium text-[#10B981]">AI Signal</span>
                </div>
                <p className="text-xs text-[#A1A1AA]">FX exposure alert: EUR/USD movement created $340K unrealized loss. Hedging recommended.</p>
              </div>

              {/* Chart placeholder */}
              <div
                className="rounded-xl p-4 h-24"
                style={{ background: '#171717', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-xs text-[#A1A1AA] mb-2">Cash Flow Forecast</p>
                <div className="flex items-end gap-1 h-12">
                  {[40, 55, 48, 62, 58, 70, 65, 75, 72, 80].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i >= 6 ? 'rgba(16,185,129,0.3)' : 'rgba(16,185,129,0.15)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
