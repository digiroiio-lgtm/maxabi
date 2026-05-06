'use client'

import { motion } from 'framer-motion'
import { Search, Bell, ChevronDown } from 'lucide-react'

export default function Topbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 right-0 z-30 flex items-center gap-4 px-6 py-4"
      style={{
        left: '240px',
        background: 'rgba(10,10,10,0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Search */}
      <div
        className="flex items-center gap-3 px-4 py-2 rounded-xl flex-1 max-w-md"
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <Search className="w-4 h-4 text-[#A1A1AA]" />
        <input
          type="text"
          placeholder="Ask AI anything about your finances..."
          className="flex-1 bg-transparent text-sm text-white placeholder-[#A1A1AA] outline-none"
        />
        <kbd className="text-xs text-[#A1A1AA] px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.06)' }}>
          ⌘K
        </kbd>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        {/* Notifications */}
        <button
          className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-colors hover:bg-white/5"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Bell className="w-4 h-4 text-[#A1A1AA]" />
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
            style={{ background: '#10B981' }}
          />
        </button>

        {/* Workspace selector */}
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-white transition-colors hover:bg-white/5"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="w-5 h-5 rounded-md" style={{ background: '#10B981' }} />
          <span className="text-sm font-medium">Acme Corp</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#A1A1AA]" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-black"
            style={{ background: '#10B981' }}
          >
            CF
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-medium text-white">CFO</p>
            <p className="text-xs text-[#A1A1AA]">cfo@acme.com</p>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
