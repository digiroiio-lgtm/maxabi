'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '@/components/dashboard/sidebar'
import Topbar from '@/components/dashboard/topbar'
import ExecutiveMetrics from '@/components/dashboard/executive-metrics'
import AIInsights from '@/components/dashboard/ai-insights'
import CashflowEngine from '@/components/dashboard/cashflow-engine'
import ProfitabilityMap from '@/components/dashboard/profitability-map'
import RiskRadar from '@/components/dashboard/risk-radar'
import BoardMode from '@/components/dashboard/board-mode'
import AICopilot from '@/components/dashboard/ai-copilot'

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#0A0A0A' }}>
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="flex-1 flex flex-col overflow-hidden" style={{ marginLeft: '240px' }}>
        <Topbar />

        <main
          className="flex-1 overflow-y-auto p-6 pt-20"
          style={{ background: '#0A0A0A' }}
        >
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-xl font-bold text-white capitalize">
                {activeSection === 'overview' ? 'Executive Overview' :
                 activeSection === 'cashflow' ? 'Cash Flow Engine' :
                 activeSection === 'profitability' ? 'Profitability Map' :
                 activeSection === 'forecasts' ? 'Financial Forecasts' :
                 activeSection === 'risk' ? 'Risk Radar' :
                 activeSection === 'board' ? 'Board Reports' :
                 activeSection === 'copilot' ? 'AI Copilot' : activeSection}
              </h1>
              <p className="text-sm text-[#A1A1AA] mt-0.5">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Overview */}
            {activeSection === 'overview' && (
              <div className="space-y-5">
                <ExecutiveMetrics />
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                  <div className="xl:col-span-2">
                    <CashflowEngine />
                  </div>
                  <AIInsights />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                  <ProfitabilityMap />
                  <RiskRadar />
                </div>
              </div>
            )}

            {activeSection === 'cashflow' && (
              <div className="space-y-5">
                <ExecutiveMetrics />
                <CashflowEngine />
              </div>
            )}

            {activeSection === 'profitability' && (
              <div className="space-y-5">
                <ProfitabilityMap />
              </div>
            )}

            {activeSection === 'forecasts' && (
              <div className="space-y-5">
                <CashflowEngine />
                <AIInsights />
              </div>
            )}

            {activeSection === 'risk' && (
              <div className="space-y-5">
                <RiskRadar />
                <AIInsights />
              </div>
            )}

            {activeSection === 'board' && (
              <div className="space-y-5">
                <BoardMode />
              </div>
            )}

            {activeSection === 'copilot' && (
              <div className="max-w-3xl">
                <AICopilot />
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
