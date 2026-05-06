'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Lightbulb, TrendingUp, BarChart3, ArrowRight } from 'lucide-react'
import { aiInsights } from '@/lib/mock-data'

const iconMap = {
  alert: AlertTriangle,
  opportunity: Lightbulb,
  signal: TrendingUp,
  forecast: BarChart3,
}

const colorMap = {
  high: { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.15)', text: '#EF4444', badge: 'rgba(239,68,68,0.15)' },
  medium: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.15)', text: '#F59E0B', badge: 'rgba(245,158,11,0.15)' },
  low: { bg: 'rgba(16,185,129,0.05)', border: 'rgba(16,185,129,0.1)', text: '#10B981', badge: 'rgba(16,185,129,0.1)' },
}

export default function AIInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-2xl p-6"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-white">AI Insights</h3>
          <p className="text-xs text-[#A1A1AA] mt-0.5">{aiInsights.length} signals detected</p>
        </div>
        <button className="text-xs text-[#10B981] hover:underline">View all</button>
      </div>

      <div className="space-y-3">
        {aiInsights.map((insight, i) => {
          const Icon = iconMap[insight.type as keyof typeof iconMap] ?? TrendingUp
          const colors = colorMap[insight.priority as keyof typeof colorMap]

          return (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="rounded-xl p-4 cursor-pointer transition-all hover:-translate-y-0.5"
              style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: colors.badge }}
                >
                  <Icon className="w-4 h-4" style={{ color: colors.text }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium text-white truncate">{insight.title}</p>
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-full font-medium shrink-0"
                      style={{ background: colors.badge, color: colors.text }}
                    >
                      {insight.priority}
                    </span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-2">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#A1A1AA]">{insight.timestamp}</span>
                    <button className="flex items-center gap-1 text-xs font-medium" style={{ color: colors.text }}>
                      {insight.action} <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
