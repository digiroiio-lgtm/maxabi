'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profitabilityData } from '@/lib/mock-data'

function RiskBadge({ score }: { score: number }) {
  let bg: string, color: string, label: string
  if (score < 30) {
    bg = 'rgba(16,185,129,0.1)'; color = '#10B981'; label = 'Low'
  } else if (score < 60) {
    bg = 'rgba(245,158,11,0.1)'; color = '#F59E0B'; label = 'Medium'
  } else {
    bg = 'rgba(239,68,68,0.1)'; color = '#EF4444'; label = 'High'
  }
  return (
    <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: bg, color }}>
      {label} ({score})
    </span>
  )
}

function PaymentBadge({ speed }: { speed: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    Fast: { bg: 'rgba(16,185,129,0.1)', color: '#10B981' },
    Average: { bg: 'rgba(245,158,11,0.1)', color: '#F59E0B' },
    Slow: { bg: 'rgba(239,68,68,0.1)', color: '#EF4444' },
  }
  const style = map[speed] ?? map['Average']
  return (
    <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={style}>
      {speed}
    </span>
  )
}

export default function ProfitabilityMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-2xl p-6"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-white">Profitability Map</h3>
          <p className="text-xs text-[#A1A1AA] mt-0.5">Customer-level intelligence</p>
        </div>
        <button className="text-xs text-[#10B981] hover:underline flex items-center gap-1">
          Full report <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {['Customer', 'Revenue', 'Gross Margin', 'Payment Speed', 'Risk Score', 'AI Note'].map((h) => (
                <th key={h} className="text-left pb-3 pr-4 text-xs font-medium text-[#A1A1AA] uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {profitabilityData.map((row, i) => (
              <motion.tr
                key={row.customer}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="group cursor-pointer transition-all"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}
              >
                <td className="py-3 pr-4 font-medium text-white group-hover:text-[#10B981] transition-colors">
                  {row.customer}
                </td>
                <td className="py-3 pr-4 text-white">
                  ${(row.revenue / 1000000).toFixed(2)}M
                </td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${row.grossMargin}%`,
                          background: row.grossMargin >= 60 ? '#10B981' : row.grossMargin >= 45 ? '#F59E0B' : '#EF4444',
                        }}
                      />
                    </div>
                    <span className="text-white text-xs">{row.grossMargin}%</span>
                  </div>
                </td>
                <td className="py-3 pr-4"><PaymentBadge speed={row.paymentSpeed} /></td>
                <td className="py-3 pr-4"><RiskBadge score={row.riskScore} /></td>
                <td className="py-3 text-xs text-[#A1A1AA]">{row.aiNote}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
