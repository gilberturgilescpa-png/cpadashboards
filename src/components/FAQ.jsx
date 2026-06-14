import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What data sources can you connect to?',
    a: 'We connect to virtually any data source — QuickBooks Online, NetSuite, Sage, Salesforce, Excel files, SQL Server, Google Sheets, Snowflake, Stripe, HubSpot, and more. If your data lives somewhere, we can likely connect to it.',
  },
  {
    q: 'How long does the first dashboard take?',
    a: 'Typically 1-2 weeks from the time we receive data access. Complex multi-source builds may take 2-3 weeks. We\'ll give you a realistic timeline during the discovery call.',
  },
  {
    q: 'Do I need to give you access to my accounting software?',
    a: "Yes — read-only access is all we need. We'll walk you through setting up a read-only credential so your data stays secure. We never have write access to your financial systems.",
  },
  {
    q: 'Is my financial data secure?',
    a: "Absolutely. All data is transmitted over encrypted connections, never stored on our servers, and all system access is read-only. We're happy to sign an NDA before any engagement begins.",
  },
  {
    q: 'Can I cancel my retainer anytime?',
    a: "Yes. We require 30 days written notice to cancel, but there are no long-term contracts, no cancellation fees, and no penalties. You keep all dashboards and files we've built — they're yours.",
  },
  {
    q: "What's the difference between this and hiring a full-time analyst?",
    a: 'A full-time BI analyst in Texas costs $85,000-$120,000 per year in salary alone — before benefits, equipment, and onboarding. Our Executive retainer delivers comparable output for $2,500/month ($30,000/year) with zero HR overhead and immediate results.',
  },
  {
    q: 'Do you offer tax, audit, or accounting services?',
    a: 'No. CPA Dashboards provides data analytics and business intelligence consulting services only — not tax preparation, auditing, or public accounting. This is not a CPA firm.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 font-medium uppercase tracking-wider">
            FAQ
          </span>
        </div>
        <h2 className="text-4xl font-bold text-center text-white mt-4">Common Questions</h2>

        <div className="mt-12">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-[#1A2B4A]">
              <button
                className="w-full flex justify-between items-center py-5 cursor-pointer hover:text-blue-400 transition-colors text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-white pr-4">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <p className="text-slate-400 pb-5 text-sm leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
