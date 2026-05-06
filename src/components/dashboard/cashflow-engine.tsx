'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { cashflowData } from '@/lib/mock-data'

type Period = '30d' | '90d' | '365d'

const periods: { label: string; value: Period }[] = [
  { label: '30 Days', value: '30d' },
  { label: '90 Days', value: '90d' },
  { label: '1 Year', value: '365d' },
]

export default function CashflowEngine() {
  const [period, setPeriod] = useState<Period>('30d')
  const data = cashflowData[period]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-2xl p-6"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-white">Cash Flow Engine</h3>
          <p className="text-xs text-[#A1A1AA] mt-0.5">Multi-scenario projection</p>
        </div>
        <div className="flex items-center gap-1 rounded-lg p-1" style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.06)' }}>
          {periods.map((p) => (
            <button
              key={p.value}
              onClick={() => setPeriod(p.value)}
              className="px-3 py-1.5 rounded-md text-xs font-medium transition-all"
              style={{
                background: period === p.value ? '#10B981' : 'transparent',
                color: period === p.value ? '#000' : '#A1A1AA',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorOptimistic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorStress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis
              dataKey="date"
              tick={{ fill: '#A1A1AA', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#A1A1AA', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `$${v}M`}
            />
            <Tooltip
              contentStyle={{
                background: '#171717',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
                color: '#fff',
                fontSize: 12,
              }}
              formatter={(value) => [`$${value}M`, '' as string] as [string, string]}
            />
            <Legend
              wrapperStyle={{ fontSize: 11, color: '#A1A1AA', paddingTop: 12 }}
            />
            <Area type="monotone" dataKey="optimistic" stroke="#10B981" strokeWidth={1.5} fill="url(#colorOptimistic)" name="Optimistic" />
            <Area type="monotone" dataKey="expected" stroke="#3B82F6" strokeWidth={1.5} fill="url(#colorExpected)" name="Expected" />
            <Area type="monotone" dataKey="stress" stroke="#EF4444" strokeWidth={1.5} fill="url(#colorStress)" name="Stress" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
