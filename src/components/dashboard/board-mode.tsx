'use client'

import { motion } from 'framer-motion'
import { Download, Share2, Presentation, Check } from 'lucide-react'

const reportSections = [
  { title: 'Executive Summary', status: 'ready', pages: 2 },
  { title: 'Financial Performance', status: 'ready', pages: 4 },
  { title: 'Cash Flow Analysis', status: 'ready', pages: 3 },
  { title: 'Risk Assessment', status: 'ready', pages: 2 },
  { title: 'Strategic Recommendations', status: 'generating', pages: 3 },
]

export default function BoardMode() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="rounded-2xl p-6"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-white">Board Report</h3>
          <p className="text-xs text-[#A1A1AA] mt-0.5">Q4 2024 — AI-generated narrative</p>
        </div>
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium"
          style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.15)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          AI Writing...
        </div>
      </div>

      <div className="space-y-2 mb-5">
        {reportSections.map((section) => (
          <div
            key={section.title}
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.04)' }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: section.status === 'ready' ? 'rgba(16,185,129,0.1)' : 'rgba(59,130,246,0.1)',
              }}
            >
              {section.status === 'ready' ? (
                <Check className="w-3.5 h-3.5 text-[#10B981]" />
              ) : (
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#3B82F6] border-t-transparent animate-spin" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">{section.title}</p>
              <p className="text-xs text-[#A1A1AA]">{section.pages} pages</p>
            </div>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: section.status === 'ready' ? 'rgba(16,185,129,0.1)' : 'rgba(59,130,246,0.1)',
                color: section.status === 'ready' ? '#10B981' : '#3B82F6',
              }}
            >
              {section.status === 'ready' ? 'Ready' : 'Generating'}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-black transition-all hover:opacity-90"
          style={{ background: '#10B981' }}
        >
          <Download className="w-4 h-4" />
          Export PDF
        </button>
        <button
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:bg-white/5"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Share2 className="w-4 h-4" />
        </button>
        <button
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:bg-white/5"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Presentation className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}
