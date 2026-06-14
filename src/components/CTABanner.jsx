export default function CTABanner() {
  return (
    <section className="relative py-24 px-6 text-center overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-[#060B18]">
      {/* Decorative dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
          Ready to Stop Guessing and Start Knowing?
        </h2>
        <p className="text-xl text-blue-200 mt-4 max-w-2xl mx-auto leading-relaxed">
          Book a free 30-minute discovery call. We'll review your current reporting setup and show you exactly what's possible — no pressure, no pitch deck.
        </p>
        <div className="mt-8">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-white text-blue-700 hover:bg-blue-50 rounded-full px-10 py-4 text-lg font-bold transition-colors shadow-lg"
          >
            Book Your Free Call
          </a>
        </div>
        <p className="mt-4 text-sm text-blue-300">
          Free 30-minute call · No commitment · Response within 24 hours
        </p>
      </div>
    </section>
  )
}
