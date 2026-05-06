'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { riskData } from '@/lib/mock-data'

const levelColors = {
  high: { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.15)', text: '#EF4444', bar: '#EF4444' },
  medium: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.15)', text: '#F59E0B', bar: '#F59E0B' },
  low: { bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.12)', text: '#10B981', bar: '#10B981' },
}

export default function RiskRadar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="rounded-2xl p-6"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-white">Risk Radar</h3>
          <p className="text-xs text-[#A1A1AA] mt-0.5">Live risk monitoring</p>
        </div>
        <span
          className="text-xs px-2 py-1 rounded-full font-medium"
          style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B' }}
        >
          1 High Risk
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {riskData.map((risk, i) => {
          const colors = levelColors[risk.level as keyof typeof levelColors]
          const TrendIcon = risk.trend === 'up' ? TrendingUp : risk.trend === 'down' ? TrendingDown : Minus

          return (
            <motion.div
              key={risk.category}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="rounded-xl p-4"
              style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-white">{risk.category}</p>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">{risk.detail}</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <TrendIcon className="w-3.5 h-3.5" style={{ color: colors.text }} />
                  <span
                    className="text-xs font-semibold px-1.5 py-0.5 rounded capitalize"
                    style={{ color: colors.text, background: `${colors.bar}20` }}
                  >
                    {risk.level}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#A1A1AA]">Risk Score</span>
                  <span className="text-xs font-medium" style={{ color: colors.text }}>{risk.score}/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${risk.score}%` }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                    className="h-full rounded-full"
                    style={{ background: colors.bar }}
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
