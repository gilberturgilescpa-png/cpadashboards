import { BarChart2, ExternalLink, Mail } from 'lucide-react'

const serviceLinks = [
  'Dashboard Jumpstart',
  'Starter Retainer',
  'Growth Retainer',
  'Executive Retainer',
]

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book a Call', href: 'https://calendly.com' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080D1A] border-t border-[#1A2B4A]">
      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 px-6 max-w-7xl mx-auto">
        {/* Col 1 — Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-white text-lg">
            <BarChart2 className="w-6 h-6 text-blue-500" />
            CPA Dashboards
          </div>
          <p className="text-slate-400 text-sm mt-3">
            Power BI dashboards built by a licensed CPA.
          </p>
          <p className="text-slate-500 text-xs mt-1">
            San Antonio, TX · Serving clients nationwide.
          </p>
          <a
            href="mailto:gilbert@cpadashboards.com"
            className="text-blue-400 text-sm mt-3 inline-block hover:text-blue-300 transition-colors"
          >
            gilbert@cpadashboards.com
          </a>
        </div>

        {/* Col 2 — Services */}
        <div>
          <h4 className="text-slate-300 font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Company */}
        <div>
          <h4 className="text-slate-300 font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Connect */}
        <div>
          <h4 className="text-slate-300 font-semibold text-sm mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="mailto:gilbert@cpadashboards.com"
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors flex items-center gap-1"
              >
                <Mail className="w-3 h-3" /> Email Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A2B4A] py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs">
          © 2025 CPA Dashboards LLC. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs max-w-md text-center">
          This is not a CPA firm and these services are not regulated by the Texas State Board of Public Accountancy.
        </p>
      </div>
    </footer>
  )
}
