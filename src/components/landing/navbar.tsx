'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{ background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#10B981' }}>
          <Zap className="w-4 h-4 text-black" />
        </div>
        <span className="font-bold text-lg tracking-tight text-white">MAXABI</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {['Product', 'Use Cases', 'Pricing', 'Docs'].map((item) => (
          <Link key={item} href="#" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Link href="#" className="text-sm text-[#A1A1AA] hover:text-white transition-colors px-4 py-2">
          Sign in
        </Link>
        <Link
          href="/dashboard"
          className="text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          style={{ background: '#10B981', color: '#000' }}
        >
          View Demo
        </Link>
      </div>
    </motion.nav>
  )
}
