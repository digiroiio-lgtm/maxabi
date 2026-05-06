'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, User, Send, Sparkles } from 'lucide-react'
import { copilotConversation } from '@/lib/mock-data'

const suggestedQueries = [
  'What is our burn rate trend?',
  'Forecast cash flow for next quarter',
  'Which department has highest OpEx growth?',
  "Summarize today's financial risks",
]

export default function AICopilot() {
  const [input, setInput] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="rounded-2xl overflow-hidden"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="p-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: '#3B82F6' }}>
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">MAX Copilot</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs text-[#10B981]">Online — Ready to analyze</span>
            </div>
          </div>
          <div className="ml-auto">
            <Sparkles className="w-4 h-4 text-[#A1A1AA]" />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-5 space-y-4 h-64 overflow-y-auto">
        <AnimatePresence>
          {copilotConversation.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'ai' && (
                <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#3B82F6' }}>
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
              )}
              <div
                className="rounded-xl px-4 py-3 max-w-sm text-sm leading-relaxed"
                style={{
                  background: msg.role === 'user' ? 'rgba(16,185,129,0.1)' : '#0D0D0D',
                  border: msg.role === 'user' ? '1px solid rgba(16,185,129,0.15)' : '1px solid rgba(255,255,255,0.05)',
                  color: '#fff',
                }}
              >
                {msg.message}
              </div>
              {msg.role === 'user' && (
                <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <User className="w-3.5 h-3.5 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Suggested queries */}
      <div className="px-5 pb-3">
        <p className="text-xs text-[#A1A1AA] mb-2">Suggested</p>
        <div className="flex flex-wrap gap-2">
          {suggestedQueries.map((q, i) => (
            <button
              key={i}
              onClick={() => setInput(q)}
              className="text-xs px-3 py-1.5 rounded-full transition-all hover:border-[#10B981]/40"
              style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.06)', color: '#A1A1AA' }}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          className="flex items-center gap-3 rounded-xl px-4 py-3"
          style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <input
            type="text"
            placeholder="Ask anything about your finances..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-sm text-white placeholder-[#A1A1AA] outline-none"
          />
          <button
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
            style={{ background: input ? '#10B981' : 'rgba(255,255,255,0.08)' }}
          >
            <Send className="w-3.5 h-3.5" style={{ color: input ? '#000' : '#A1A1AA' }} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
