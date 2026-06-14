export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const bars = [40, 55, 45, 70, 60, 85, 75, 90]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left column */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 font-medium">
            Licensed CPA · Power BI Expert
          </span>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl font-black leading-tight mt-4 text-white">
            Your Finance Data,{' '}
            <span className="text-gradient">Finally Under Control</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-400 mt-4 max-w-lg leading-relaxed">
            Custom Power BI dashboards built by a licensed CPA — for CFOs, Controllers, and growing businesses that have outgrown Excel.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://calendly.com/gilbert-urgiles-cpa/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-4 font-semibold text-lg transition-colors"
            >
              Book a Free Discovery Call
            </a>
            <button
              onClick={scrollToPortfolio}
              className="border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white rounded-full px-8 py-4 font-semibold text-lg transition-colors"
            >
              See Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8 flex-wrap">
            <div>
              <div className="text-3xl font-black text-white">10+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Years Finance Experience</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">Licensed</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">CPA, TX #116976</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">2 Weeks</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">First Dashboard Delivered</div>
            </div>
          </div>
        </div>

        {/* Right column — dashboard mockup */}
        <div
          className="bg-[#0D1629] rounded-2xl p-6 border border-[#1A2B4A] w-full"
          style={{ boxShadow: '0 0 60px rgba(37,99,235,0.15)' }}
        >
          {/* Window controls */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-slate-400">Executive Dashboard — Q2 2024</span>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-[#111D35] rounded-lg p-3">
              <div className="text-xs text-slate-500">Revenue</div>
              <div className="text-sm font-bold text-emerald-400 mt-1">$2.4M</div>
              <div className="text-xs text-emerald-400/70 mt-0.5">↑ 12%</div>
            </div>
            <div className="bg-[#111D35] rounded-lg p-3">
              <div className="text-xs text-slate-500">Gross Margin</div>
              <div className="text-sm font-bold text-blue-400 mt-1">68%</div>
              <div className="text-xs text-blue-400/70 mt-0.5">↑ 3pts</div>
            </div>
            <div className="bg-[#111D35] rounded-lg p-3">
              <div className="text-xs text-slate-500">Operating Exp</div>
              <div className="text-sm font-bold text-slate-300 mt-1">$890K</div>
              <div className="text-xs text-slate-400/70 mt-0.5">↓ 5%</div>
            </div>
            <div className="bg-[#111D35] rounded-lg p-3">
              <div className="text-xs text-slate-500">Net Income</div>
              <div className="text-sm font-bold text-emerald-400 mt-1">$428K</div>
              <div className="text-xs text-emerald-400/70 mt-0.5">↑ 18%</div>
            </div>
          </div>

          {/* Bar chart */}
          <div className="mt-4">
            <div className="text-xs text-slate-500 mb-2">Monthly Revenue</div>
            <div className="flex items-end gap-1 h-20">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="bg-blue-600 hover:bg-blue-500 rounded-t w-full transition-colors cursor-default"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Line chart SVG */}
          <div className="mt-4 relative">
            <div className="text-xs text-slate-500 mb-2">Net Income Trend</div>
            <svg
              viewBox="0 0 300 60"
              className="w-full h-14"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(34,211,238,0.3)" />
                  <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                </linearGradient>
              </defs>
              {/* Area fill */}
              <path
                d="M0,55 L37,48 L75,42 L112,38 L150,30 L187,22 L225,18 L262,10 L300,5 L300,60 L0,60 Z"
                fill="url(#lineGrad)"
              />
              {/* Line */}
              <polyline
                points="0,55 37,48 75,42 112,38 150,30 187,22 225,18 262,10 300,5"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Dots */}
              {[
                [0, 55], [37, 48], [75, 42], [112, 38],
                [150, 30], [187, 22], [225, 18], [262, 10], [300, 5]
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill="#22d3ee" />
              ))}
            </svg>
          </div>

          {/* Tags */}
          <div className="mt-4 flex gap-2">
            <span className="bg-blue-600/20 text-blue-400 text-xs rounded-full px-2 py-1">Power BI</span>
            <span className="bg-blue-600/20 text-blue-400 text-xs rounded-full px-2 py-1">Live Data</span>
          </div>
        </div>
      </div>
    </section>
  )
}

