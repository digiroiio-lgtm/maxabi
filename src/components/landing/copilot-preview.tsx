'use client'

import { motion } from 'framer-motion'
import { MessageSquare, User, Bot } from 'lucide-react'
import { copilotConversation } from '@/lib/mock-data'

const prompts = [
  'What is our cash runway if we hire 20 more engineers?',
  'Which customers are most at risk of churn this quarter?',
  'Generate a board summary for Q4 performance.',
  'How does our EBITDA compare to industry benchmarks?',
]

export default function CopilotPreview() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: '#3B82F6' }}
          >
            <Bot className="w-3.5 h-3.5" />
            CFO Copilot
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Ask Anything. Get Answers Instantly.</h2>
          <p className="text-[#A1A1AA] text-lg">Your AI financial analyst, available 24/7.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Sample prompts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#A1A1AA] mb-4 uppercase tracking-wider font-medium">Example questions CFOs ask</p>
            <div className="space-y-3">
              {prompts.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all hover:-translate-y-0.5"
                  style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <MessageSquare className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span className="text-sm text-white">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Chat preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
            style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="p-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: '#3B82F6' }}>
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm font-medium text-white">MAX Copilot</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] ml-auto" />
                <span className="text-xs text-[#10B981]">Online</span>
              </div>
            </div>

            <div className="p-4 space-y-4 max-h-72 overflow-y-auto">
              {copilotConversation.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'ai' && (
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#3B82F6' }}>
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <div
                    className="rounded-xl px-4 py-3 max-w-xs text-sm leading-relaxed"
                    style={{
                      background: msg.role === 'user' ? 'rgba(16,185,129,0.1)' : '#171717',
                      border: msg.role === 'user' ? '1px solid rgba(16,185,129,0.2)' : '1px solid rgba(255,255,255,0.06)',
                      color: '#fff',
                    }}
                  >
                    {msg.message}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(255,255,255,0.1)' }}>
                      <User className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <input
                  type="text"
                  placeholder="Ask your CFO Copilot..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-[#A1A1AA] outline-none"
                  readOnly
                />
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer"
                  style={{ background: '#10B981' }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
