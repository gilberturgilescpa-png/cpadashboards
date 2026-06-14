import { Award, Building2, BarChart3, Zap, Shield } from 'lucide-react'

const cards = [
  {
    icon: Award,
    title: 'CPA-Level Financial Fluency',
    desc: 'Licensed CPA with 10+ years in FP&A, internal audit, and financial reporting. Your dashboards are built by someone who actually understands what the numbers mean.',
  },
  {
    icon: Building2,
    title: 'Enterprise Experience, SMB Price',
    desc: 'Currently AVP Business Intelligence Developer at a Fortune 500 bank. You get Fortune 500-grade BI expertise at a fraction of the cost.',
  },
  {
    icon: BarChart3,
    title: 'Finance-First Dashboard Design',
    desc: "Every dashboard is designed for decision-makers, not data engineers. Clean, intuitive layouts your CFO can navigate without a training session.",
  },
  {
    icon: Zap,
    title: 'Fast Time to Value',
    desc: 'Your first dashboard is live within 2 weeks. No long discovery phases, no enterprise sales cycles — just clean data and clear answers.',
  },
  {
    icon: Shield,
    title: 'You Own Everything',
    desc: "Every file, report, and data model we build is 100% yours. No vendor lock-in, no hidden IP clauses, no platform dependency.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-6 bg-[#080D1A]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 font-medium uppercase tracking-wider">
            Why CPA Dashboards
          </span>
        </div>
        <h2 className="text-4xl font-bold text-center text-white mt-4 max-w-3xl mx-auto">
          The Only BI Consultant Who Actually Understands Your Numbers
        </h2>
        <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
          Most dashboard developers are great with data but can't read a P&amp;L. Most CPAs understand finance but can't build a dashboard. We're the rare combination of both.
        </p>

        {/* Grid — 5 cards, last row centered */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.slice(0, 3).map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#0D1629] border border-[#1A2B4A] rounded-2xl p-8 card-glow-hover transition-all duration-300"
            >
              <Icon className="text-blue-400 w-8 h-8" />
              <h3 className="font-bold text-lg text-white mt-4">{title}</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
          {/* Bottom row — centered 2 cards on large */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
            {cards.slice(3).map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#0D1629] border border-[#1A2B4A] rounded-2xl p-8 card-glow-hover transition-all duration-300"
              >
                <Icon className="text-blue-400 w-8 h-8" />
                <h3 className="font-bold text-lg text-white mt-4">{title}</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
