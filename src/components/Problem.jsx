import { Clock, Grid3X3, AlertCircle, Search, XCircle, Database } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Month-End Close Takes a Week',
    desc: 'Your team spends days manually pulling data from different systems just to produce a report.',
  },
  {
    icon: Grid3X3,
    title: 'KPIs Scattered Across Spreadsheets',
    desc: "Six different files, three different formulas for the same metric. Nobody agrees on the number.",
  },
  {
    icon: AlertCircle,
    title: 'Reports Are Always 30 Days Old',
    desc: 'By the time the report hits your desk, the decisions it should inform have already been made.',
  },
  {
    icon: Search,
    title: "Can't Drill Into the Details",
    desc: "Your summary says revenue is down but you can't quickly see which product, region, or customer is driving it.",
  },
  {
    icon: XCircle,
    title: 'Excel Crashes on Large Datasets',
    desc: "Your workbook has 200,000 rows and takes 10 minutes to refresh. That's not a you problem — that's a tool problem.",
  },
  {
    icon: Database,
    title: 'No Single Source of Truth',
    desc: "Finance says one number, sales says another. Everyone's right and everyone's wrong — because there's no central data source.",
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Label */}
        <span className="inline-flex items-center rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 font-medium uppercase tracking-wider">
          The Problem
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mt-4 text-white">Does This Sound Familiar?</h2>

        {/* Subtitle */}
        <p className="text-center text-slate-400 max-w-2xl mx-auto mt-3 text-lg">
          You're not alone. Most growing businesses are making critical decisions on outdated, error-prone spreadsheets.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {problems.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-[#0D1629] border border-[#1A2B4A] rounded-xl p-6 card-glow-hover transition-all duration-300"
          >
            <Icon className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-white mt-3 text-base">{title}</h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA text */}
      <div className="mt-12 text-center">
        <p className="text-2xl font-bold text-white">There's a better way.</p>
        <p className="text-slate-400 mt-2 max-w-2xl mx-auto text-base leading-relaxed">
          Power BI connects your data sources, automates your reports, and puts real-time intelligence in front of the people who need it.
        </p>
      </div>
    </section>
  )
}
