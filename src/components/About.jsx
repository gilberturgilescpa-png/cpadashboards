const credentials = [
  'Licensed CPA · TX #116976',
  'Power BI (Advanced DAX)',
  'SQL & Snowflake',
  'FP&A & Financial Modeling',
  'Alteryx & Azure',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#080D1A]/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left — avatar card */}
        <div className="flex justify-center">
          <div
            className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl aspect-square max-w-sm w-full flex flex-col items-center justify-center border border-blue-500/30"
            style={{ boxShadow: '0 0 40px rgba(37,99,235,0.2)' }}
          >
            <div className="text-8xl font-black text-white/20 select-none">GU</div>
            <div className="text-white font-bold text-xl mt-4">Gilbert Urgiles</div>
            <div className="text-blue-200 text-sm mt-1">CPA, Power BI Developer</div>
          </div>
        </div>

        {/* Right — bio */}
        <div>
          <span className="inline-flex items-center rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 font-medium uppercase tracking-wider">
            About
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Built by a CPA. Designed for Finance Teams.
          </h2>

          <p className="text-slate-400 mt-4 leading-relaxed">
            I'm Gilbert Urgiles — a licensed CPA (TX #116976) and AVP Business Intelligence Developer with over 10 years in finance and data analytics.
          </p>
          <p className="text-slate-400 mt-4 leading-relaxed">
            My background spans FP&amp;A at a Fortune 50 health company, internal audit at a federal credit union, and enterprise BI development at one of the nation's largest banks. I've built dashboards for executive leadership, automated reporting pipelines that eliminated hundreds of hours of manual work, and translated raw financial data into boardroom-ready intelligence.
          </p>
          <p className="text-slate-400 mt-4 leading-relaxed">
            I started CPA Dashboards because I kept seeing the same gap: growing businesses drowning in Excel, with no BI expertise in-house and no easy way to get it. Most BI consultants don't understand finance. Most CPAs don't build dashboards. I do both.
          </p>

          {/* Credential pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {credentials.map((c) => (
              <span
                key={c}
                className="bg-[#111D35] border border-[#1A2B4A] text-slate-300 text-xs rounded-full px-4 py-2"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
