import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MAXABI - AI-Powered BI for CFOs',
  description: 'Ultra-clean, minimalist AI-powered business intelligence platform for CFOs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body style={{ background: '#0A0A0A', color: '#FFFFFF', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
