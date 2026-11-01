const portfolioItems = [
  {
    tag: 'Financial Reporting',
    title: 'Executive KPI Dashboard',
    desc: 'Monthly P&L, cash flow, and KPI tracking for a regional veterinary group. Connected to source data for real-time reporting.',
  },
  {
    tag: 'FP&A',
    title: 'Budget vs. Actual Analysis',
    desc: 'Variance analysis, department-level budget tracking, and forecast vs. actuals with drill-through by cost center.',
  },
  {
    tag: 'T12M Reporting',
    title: 'Trailing 12-Month P&L',
    desc: 'Full income statement to EBITDA with % of Revenue, YoY growth %, and color-coded variance analysis.',
  },
]

const PBI_EMBED_URL =
  'https://app.powerbi.com/view?r=eyJrIjoiM2VhNWQwNmEtMzVlYS00YmMwLWExMjgtMjUxYjkwMGJiNzk5IiwidCI6ImYzODAxYmI1LTQxNWEtNDExMS05YTdiLTE1YTA3NTg3NmNjZiJ9'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 font-medium uppercase tracking-wider">
            Sample Work
          </span>
          <h2 className="text-4xl font-bold text-white mt-4">Dashboards That Drive Decisions</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-base">
            A sample of the reporting we build — customized to your data, your business, your decisions.
          </p>
        </div>

        {/* Live Interactive Demo */}
        <div className="mt-12">
          <div className="bg-[#0D1629] border border-[#1A2B4A] rounded-2xl overflow-hidden">
            {/* Label bar */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-[#1A2B4A]">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-sm font-semibold text-white">Live Interactive Demo — Pinnacle Veterinary Partners</span>
              </div>
              <a
                href={PBI_EMBED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                Open full screen ↗
              </a>
            </div>

            {/* Responsive iframe wrapper (16:9 aspect ratio) */}
            <div className="relative w-full" style={{ paddingTop: '62.25%' }}>
              <iframe
                title="Pinnacle Veterinary Partners"
                src={PBI_EMBED_URL}
                frameBorder="0"
                allowFullScreen={true}
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <div className="px-6 py-3 border-t border-[#1A2B4A]">
              <p className="text-xs text-slate-500">
                Demo data only. Use the slicers and drill-downs to explore — this is the same experience your team would have.
              </p>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="bg-[#0D1629] border border-[#1A2B4A] rounded-2xl p-6 card-glow-hover transition-all duration-300"
            >
              <span className="text-xs text-blue-400 bg-blue-600/10 border border-blue-600/20 rounded-full px-3 py-1">
                {item.tag}
              </span>
              <h3 className="font-bold text-white mt-3 text-base">{item.title}</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-slate-400 text-sm mb-4">Ready to see what we can build for you?</p>
          <a
            href="https://calendly.com/gilbert-urgiles-cpa/30min"
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
