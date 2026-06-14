const portfolioItems = [
  {
    tag: 'Financial Reporting',
    title: 'Executive KPI Dashboard',
    desc: 'Monthly P&L, cash flow, and KPI tracking for a regional distribution company. Connected to QuickBooks Online for real-time data.',
    visual: 'kpi',
  },
  {
    tag: 'Sales Analytics',
    title: 'Sales Pipeline & Revenue',
    desc: 'Opportunity tracking, close rate analysis, and revenue forecasting for a 50-person B2B SaaS company.',
    visual: 'pipeline',
  },
  {
    tag: 'FP&A',
    title: 'Budget vs. Actual Dashboard',
    desc: 'Variance analysis, department-level budget tracking, and forecast vs. actuals for a healthcare services group.',
    visual: 'budget',
  },
]

function KpiVisual() {
  const bars = [55, 70, 45, 80, 65, 90]
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-[#0D1629] rounded-lg p-2">
          <div className="text-xs text-slate-500">Revenue</div>
          <div className="text-sm font-bold text-emerald-400">$2.4M</div>
        </div>
        <div className="bg-[#0D1629] rounded-lg p-2">
          <div className="text-xs text-slate-500">Margin</div>
          <div className="text-sm font-bold text-blue-400">68%</div>
        </div>
        <div className="bg-[#0D1629] rounded-lg p-2">
          <div className="text-xs text-slate-500">Op Exp</div>
          <div className="text-sm font-bold text-slate-300">$890K</div>
        </div>
        <div className="bg-[#0D1629] rounded-lg p-2">
          <div className="text-xs text-slate-500">Net Inc</div>
          <div className="text-sm font-bold text-emerald-400">$428K</div>
        </div>
      </div>
      <div className="flex items-end gap-1 flex-1 px-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="bg-blue-600/70 rounded-t w-full"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function PipelineVisual() {
  const stages = [
    { label: 'Leads', value: '$1.2M', color: 'bg-blue-500', width: '100%' },
    { label: 'Qualified', value: '$840K', color: 'bg-blue-600', width: '75%' },
    { label: 'Proposal', value: '$560K', color: 'bg-blue-700', width: '50%' },
    { label: 'Closed', value: '$280K', color: 'bg-emerald-500', width: '28%' },
  ]
  return (
    <div className="h-full flex flex-col justify-center gap-2">
      {stages.map((s) => (
        <div key={s.label} className="flex items-center gap-2">
          <div className="text-xs text-slate-500 w-14 text-right flex-shrink-0">{s.label}</div>
          <div className="flex-1 bg-[#0D1629] rounded h-5 overflow-hidden">
            <div
              className={`${s.color} h-full rounded flex items-center justify-end pr-2 transition-all`}
              style={{ width: s.width }}
            >
              <span className="text-white text-xs font-semibold">{s.value}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function BudgetVisual() {
  const rows = [
    { dept: 'Sales', budget: 420, actual: 398, variance: '+5.2%', positive: true },
    { dept: 'Ops', budget: 310, actual: 335, variance: '-8.1%', positive: false },
    { dept: 'HR', budget: 180, actual: 174, variance: '+3.3%', positive: true },
    { dept: 'IT', budget: 95, actual: 88, variance: '+7.4%', positive: true },
  ]
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-4 gap-1 text-xs text-slate-500 mb-1 px-1">
        <div>Dept</div><div>Budget</div><div>Actual</div><div>Var</div>
      </div>
      {rows.map((r) => (
        <div key={r.dept} className="grid grid-cols-4 gap-1 text-xs px-1 py-0.5 rounded hover:bg-[#0D1629] transition-colors">
          <div className="text-slate-300 font-medium">{r.dept}</div>
          <div className="text-slate-400">${r.budget}K</div>
          <div className="text-slate-400">${r.actual}K</div>
          <div className={r.positive ? 'text-emerald-400 font-semibold' : 'text-red-400 font-semibold'}>{r.variance}</div>
        </div>
      ))}
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 font-medium uppercase tracking-wider">
            Sample Work
          </span>
          <h2 className="text-4xl font-bold text-white mt-4">Dashboards That Drive Decisions</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-base">
            A sample of the reporting we build — customized to your data, your business, your decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="bg-[#0D1629] border border-[#1A2B4A] rounded-2xl overflow-hidden card-glow-hover transition-all duration-300"
            >
              {/* Visual area */}
              <div className="h-48 bg-[#111D35] p-4 relative">
                {item.visual === 'kpi' && <KpiVisual />}
                {item.visual === 'pipeline' && <PipelineVisual />}
                {item.visual === 'budget' && <BudgetVisual />}
              </div>

              {/* Text */}
              <div className="p-6">
                <span className="text-xs text-blue-400 bg-blue-600/10 border border-blue-600/20 rounded-full px-3 py-1">
                  {item.tag}
                </span>
                <h3 className="font-bold text-white mt-2 text-base">{item.title}</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-slate-400 text-sm mb-4">Ready to see what we can build for you?</p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-3 font-semibold transition-colors"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  )
}
