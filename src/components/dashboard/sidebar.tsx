'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  TrendingUp,
  DollarSign,
  BarChart3,
  Shield,
  FileText,
  MessageSquare,
  Settings,
  Zap,
  ChevronRight,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', id: 'overview' },
  { icon: TrendingUp, label: 'Cash Flow', id: 'cashflow' },
  { icon: DollarSign, label: 'Profitability', id: 'profitability' },
  { icon: BarChart3, label: 'Forecasts', id: 'forecasts' },
  { icon: Shield, label: 'Risk Radar', id: 'risk' },
  { icon: FileText, label: 'Board Reports', id: 'board' },
  { icon: MessageSquare, label: 'AI Copilot', id: 'copilot' },
]

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="w-60 h-screen flex flex-col"
      style={{
        background: '#0D0D0D',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 40,
      }}
    >
      {/* Logo */}
      <div className="p-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#10B981' }}>
            <Zap className="w-4 h-4 text-black" />
          </div>
          <span className="font-bold text-base text-white tracking-tight">MAXABI</span>
        </div>
        <div
          className="mt-3 px-2 py-1 rounded-md text-xs inline-flex items-center gap-1"
          style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981' }}
        >
          <div className="w-1 h-1 rounded-full bg-[#10B981] animate-pulse" />
          CFO Dashboard
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group"
            style={{
              background: activeSection === id ? 'rgba(16,185,129,0.1)' : 'transparent',
              color: activeSection === id ? '#10B981' : '#A1A1AA',
              border: activeSection === id ? '1px solid rgba(16,185,129,0.15)' : '1px solid transparent',
            }}
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
            {activeSection === id && <ChevronRight className="w-3 h-3 ml-auto" />}
          </button>
        ))}
      </nav>

      {/* Settings */}
      <div className="p-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#A1A1AA] hover:text-white transition-colors"
        >
          <Settings className="w-4 h-4" />
          Settings
        </Link>
      </div>
    </motion.aside>
  )
}
