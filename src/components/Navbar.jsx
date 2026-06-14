import { useState, useEffect } from 'react'
import { BarChart2, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080D1A]/95 backdrop-blur-md border-b border-[#1A2B4A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-white text-lg">
          <BarChart2 className="w-6 h-6 text-blue-500" />
          CPA Dashboards
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://calendly.com/gilbert-urgiles-cpa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-blue-600 hover:bg-blue-500 text-white rounded-full px-5 py-2 text-sm font-semibold transition-colors"
          >
            Book a Free Call
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#080D1A] border-t border-[#1A2B4A] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/gilbert-urgiles-cpa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-5 py-2 text-sm font-semibold text-center transition-colors mt-2"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </header>
  )
}

