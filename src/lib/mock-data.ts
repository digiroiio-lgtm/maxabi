export const metrics = {
  cashPosition: {
    value: 24.7,
    unit: 'M',
    currency: 'USD',
    change: 3.2,
    trend: 'up',
    aiSignal: 'Cash reserves are 18% above Q3 target. Consider short-term instruments.',
    history: [22, 21.5, 23, 22.8, 23.5, 24.1, 24.7],
  },
  ebitda: {
    value: 8.3,
    unit: 'M',
    currency: 'USD',
    change: -1.1,
    trend: 'down',
    aiSignal: 'EBITDA compression detected. OpEx spike in R&D department (+22%).',
    history: [9.1, 8.9, 8.7, 8.8, 8.5, 8.4, 8.3],
  },
  netProfitMargin: {
    value: 14.2,
    unit: '%',
    change: 0.8,
    trend: 'up',
    aiSignal: 'Margin improvement driven by enterprise segment growth.',
    history: [13.1, 13.4, 13.7, 13.8, 14.0, 14.1, 14.2],
  },
  liquidityRunway: {
    value: 18,
    unit: 'months',
    change: 2,
    trend: 'up',
    aiSignal: 'Runway extended. No immediate fundraising required.',
    history: [14, 15, 15, 16, 16, 17, 18],
  },
}

export const aiInsights = [
  {
    id: '1',
    type: 'alert',
    priority: 'high',
    title: 'FX Exposure Alert',
    description: 'EUR/USD movement of 2.3% this week has created $340K unrealized loss on European receivables. Consider hedging instruments for Q4.',
    timestamp: '2 hours ago',
    action: 'Review FX hedging',
  },
  {
    id: '2',
    type: 'opportunity',
    priority: 'medium',
    title: 'Working Capital Optimization',
    description: '3 suppliers offer 2% early payment discount. AI estimates $127K annual savings if payment terms restructured.',
    timestamp: '5 hours ago',
    action: 'Optimize payment terms',
  },
  {
    id: '3',
    type: 'signal',
    priority: 'low',
    title: 'Revenue Pattern Detected',
    description: 'Enterprise segment showing 34% faster conversion in Q4. AI recommends reallocating 15% of SMB budget to enterprise pipeline.',
    timestamp: '1 day ago',
    action: 'View pipeline analysis',
  },
  {
    id: '4',
    type: 'forecast',
    priority: 'medium',
    title: 'Q4 Cash Flow Projection',
    description: 'Based on current AR aging and pipeline, Q4 operating cash flow projected at $6.2M (±$0.4M). 87% confidence interval.',
    timestamp: '2 days ago',
    action: 'View full forecast',
  },
]

export const cashflowData: Record<string, { date: string; optimistic: number; expected: number; stress: number }[]> = {
  '30d': [
    { date: 'Dec 1', optimistic: 25.2, expected: 24.7, stress: 23.1 },
    { date: 'Dec 5', optimistic: 25.8, expected: 25.0, stress: 23.4 },
    { date: 'Dec 10', optimistic: 26.1, expected: 25.2, stress: 23.0 },
    { date: 'Dec 15', optimistic: 27.0, expected: 25.8, stress: 22.5 },
    { date: 'Dec 20', optimistic: 27.5, expected: 26.1, stress: 22.8 },
    { date: 'Dec 25', optimistic: 28.0, expected: 26.4, stress: 23.1 },
    { date: 'Dec 31', optimistic: 28.9, expected: 26.8, stress: 23.5 },
  ],
  '90d': [
    { date: 'Oct', optimistic: 22.0, expected: 21.5, stress: 19.8 },
    { date: 'Nov', optimistic: 23.5, expected: 22.8, stress: 20.5 },
    { date: 'Dec', optimistic: 25.8, expected: 24.1, stress: 21.2 },
    { date: 'Jan', optimistic: 27.0, expected: 25.5, stress: 22.0 },
  ],
  '365d': [
    { date: 'Q1 2024', optimistic: 18.0, expected: 17.2, stress: 15.5 },
    { date: 'Q2 2024', optimistic: 20.5, expected: 19.1, stress: 16.8 },
    { date: 'Q3 2024', optimistic: 22.8, expected: 21.0, stress: 18.2 },
    { date: 'Q4 2024', optimistic: 25.8, expected: 24.1, stress: 20.0 },
    { date: 'Q1 2025', optimistic: 28.2, expected: 26.0, stress: 21.5 },
  ],
}

export const profitabilityData = [
  {
    customer: 'Acme Corp',
    revenue: 2400000,
    grossMargin: 68,
    paymentSpeed: 'Fast',
    riskScore: 12,
    aiNote: 'Expand contract',
  },
  {
    customer: 'Globex Industries',
    revenue: 1850000,
    grossMargin: 54,
    paymentSpeed: 'Slow',
    riskScore: 67,
    aiNote: 'Payment risk',
  },
  {
    customer: 'Initech Systems',
    revenue: 1200000,
    grossMargin: 71,
    paymentSpeed: 'Fast',
    riskScore: 8,
    aiNote: 'Upsell ready',
  },
  {
    customer: 'Umbrella Corp',
    revenue: 980000,
    grossMargin: 42,
    paymentSpeed: 'Average',
    riskScore: 45,
    aiNote: 'Review terms',
  },
  {
    customer: 'Stark Enterprises',
    revenue: 3200000,
    grossMargin: 76,
    paymentSpeed: 'Fast',
    riskScore: 5,
    aiNote: 'Strategic partner',
  },
  {
    customer: 'Wayne Industries',
    revenue: 760000,
    grossMargin: 38,
    paymentSpeed: 'Slow',
    riskScore: 78,
    aiNote: 'Consider offboarding',
  },
]

export const riskData = [
  {
    category: 'FX Risk',
    level: 'high',
    score: 74,
    detail: 'EUR/USD exposure: $2.1M unhedged',
    trend: 'up',
  },
  {
    category: 'Liquidity Risk',
    level: 'low',
    score: 18,
    detail: '18-month runway, strong AR collection',
    trend: 'down',
  },
  {
    category: 'Customer Dependency',
    level: 'medium',
    score: 42,
    detail: 'Top 3 customers = 48% of revenue',
    trend: 'stable',
  },
  {
    category: 'Debt Pressure',
    level: 'low',
    score: 22,
    detail: 'Debt/EBITDA ratio: 1.2x (healthy)',
    trend: 'down',
  },
  {
    category: 'Supply Chain Risk',
    level: 'medium',
    score: 55,
    detail: '2 key suppliers flagged for delays',
    trend: 'up',
  },
  {
    category: 'Operational Volatility',
    level: 'low',
    score: 31,
    detail: 'Headcount stable, processes automated',
    trend: 'stable',
  },
]

export const copilotConversation = [
  {
    role: 'user',
    message: 'What is our cash runway if we increase hiring by 20%?',
  },
  {
    role: 'ai',
    message: 'Based on current burn rate of $1.37M/month and $24.7M cash position, your runway is 18 months. A 20% headcount increase would add approximately $380K/month in OpEx (salaries + benefits + tools), reducing runway to ~13.2 months. I recommend considering a phased hiring plan over 6 months to maintain a runway above 15 months.',
  },
  {
    role: 'user',
    message: 'Which customers should we prioritize for contract renewal this quarter?',
  },
  {
    role: 'ai',
    message: 'Based on gross margin, payment behavior, and growth potential: Priority 1: Stark Enterprises (76% margin, fast payer, $3.2M ARR) — renew at 15% uplift. Priority 2: Acme Corp (68% margin, strategic fit) — expand scope. Deprioritize: Wayne Industries (38% margin, 78-day DSO) — consider restructuring or offboarding to free capacity.',
  },
]
