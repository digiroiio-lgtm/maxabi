'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { metrics } from '@/lib/mock-data'

interface MetricCardProps {
  label: string
  value: string
  change: number
  trend: string
  aiSignal: string
  history: number[]
  delay?: number
}

function MetricCard({ label, value, change, trend, aiSignal, history, delay = 0 }: MetricCardProps) {
  const isPositive = change > 0
  const isNeutral = change === 0
  const chartData = history.map((v) => ({ value: v }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl p-5"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs text-[#A1A1AA] uppercase tracking-wider mb-1">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
        <div className="w-20 h-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={isPositive ? '#10B981' : '#EF4444'}
                strokeWidth={1.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex items-center gap-1.5 mb-3">
        {isPositive ? (
          <TrendingUp className="w-3.5 h-3.5 text-[#22C55E]" />
        ) : isNeutral ? (
          <Minus className="w-3.5 h-3.5 text-[#A1A1AA]" />
        ) : (
          <TrendingDown className="w-3.5 h-3.5 text-[#EF4444]" />
        )}
        <span
          className="text-xs font-medium"
          style={{ color: isPositive ? '#22C55E' : isNeutral ? '#A1A1AA' : '#EF4444' }}
        >
          {isPositive ? '+' : ''}{change}% vs last month
        </span>
      </div>

      <div
        className="rounded-lg px-3 py-2"
        style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.1)' }}
      >
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-1 h-1 rounded-full bg-[#10B981]" />
          <span className="text-xs font-medium text-[#10B981]">AI Signal</span>
        </div>
        <p className="text-xs text-[#A1A1AA] leading-relaxed">{aiSignal}</p>
      </div>
    </motion.div>
  )
}

export default function ExecutiveMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <MetricCard
        label="Cash Position"
        value={`$${metrics.cashPosition.value}${metrics.cashPosition.unit}`}
        change={metrics.cashPosition.change}
        trend={metrics.cashPosition.trend}
        aiSignal={metrics.cashPosition.aiSignal}
        history={metrics.cashPosition.history}
        delay={0}
      />
      <MetricCard
        label="EBITDA"
        value={`$${metrics.ebitda.value}${metrics.ebitda.unit}`}
        change={metrics.ebitda.change}
        trend={metrics.ebitda.trend}
        aiSignal={metrics.ebitda.aiSignal}
        history={metrics.ebitda.history}
        delay={0.1}
      />
      <MetricCard
        label="Net Profit Margin"
        value={`${metrics.netProfitMargin.value}${metrics.netProfitMargin.unit}`}
        change={metrics.netProfitMargin.change}
        trend={metrics.netProfitMargin.trend}
        aiSignal={metrics.netProfitMargin.aiSignal}
        history={metrics.netProfitMargin.history}
        delay={0.2}
      />
      <MetricCard
        label="Liquidity Runway"
        value={`${metrics.liquidityRunway.value} ${metrics.liquidityRunway.unit}`}
        change={metrics.liquidityRunway.change}
        trend={metrics.liquidityRunway.trend}
        aiSignal={metrics.liquidityRunway.aiSignal}
        history={metrics.liquidityRunway.history}
        delay={0.3}
      />
    </div>
  )
}
