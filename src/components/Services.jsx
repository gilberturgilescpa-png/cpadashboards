import { Check, X } from 'lucide-react'

const plans = [
  {
    badge: 'ONE-TIME',
    badgeClass: 'bg-slate-700 text-slate-300',
    name: 'Dashboard Jumpstart',
    price: '$2,500',
    period: '/one-time',
    subtitle: 'Perfect for getting started',
    features: [
      { text: 'Discovery & requirements session', included: true },
      { text: '1 fully built Power BI dashboard', included: true },
      { text: 'Up to 8 visuals & KPIs', included: true },
      { text: 'Data source connection & setup', included: true },
      { text: '30-day post-delivery support', included: true },
      { text: 'Training walkthrough session', included: true },
      { text: 'No ongoing updates', included: false },
    ],
    featured: false,
    ctaClass: 'w-full border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-xl py-3 font-semibold mt-8 transition-all',
  },
  {
    badge: 'MONTHLY',
    badgeClass: 'bg-blue-600/20 text-blue-400 border border-blue-500/30',
    name: 'Starter Retainer',
    price: '$750',
    period: '/month',
    subtitle: 'For small businesses & early-stage reporting',
    features: [
      { text: '1 Power BI dashboard maintained', included: true },
      { text: 'Up to 2 updates per month', included: true },
      { text: 'Monthly 30-min check-in call', included: true },
      { text: 'Email support (48hr response)', included: true },
      { text: 'Data refresh monitoring', included: true },
    ],
    featured: false,
    ctaClass: 'w-full border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-xl py-3 font-semibold mt-8 transition-all',
  },
  {
    badge: 'MOST POPULAR',
    badgeClass: 'bg-blue-600 text-white',
    name: 'Growth Retainer',
    price: '$1,500',
    period: '/month',
    subtitle: 'For growing companies with multiple reporting needs',
    features: [
      { text: 'Up to 3 Power BI dashboards', included: true },
      { text: 'Up to 5 updates per month', included: true },
      { text: 'Priority email support (24hr)', included: true },
      { text: 'Monthly 60-min strategy call', included: true },
      { text: 'Up to 2 custom SQL views', included: true },
      { text: 'KPI framework consultation', included: true },
    ],
    featured: true,
    ctaClass: 'w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3 font-semibold mt-8 transition-all',
  },
  {
    badge: 'FULL SERVICE',
    badgeClass: 'bg-slate-700 text-slate-300',
    name: 'Executive Retainer',
    price: '$2,500',
    period: '/month',
    subtitle: 'Complete BI coverage for CFOs and leadership teams',
    features: [
      { text: 'Unlimited dashboards', included: true },
      { text: 'Unlimited updates', included: true },
      { text: 'Same-day support response', included: true },
      { text: 'Weekly 30-min check-ins', included: true },
      { text: 'Unlimited SQL reporting views', included: true },
      { text: 'Data pipeline consultation', included: true },
      { text: 'Dedicated Slack channel', included: true },
    ],
    featured: false,
    ctaClass: 'w-full border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-xl py-3 font-semibold mt-8 transition-all',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="text-center">
        <span className="inline-flex items-center rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 font-medium uppercase tracking-wider">
          Services &amp; Pricing
        </span>
        <h2 className="text-4xl font-bold text-center mt-4 text-white">Simple, Transparent Pricing</h2>
        <p className="text-center text-slate-400 mt-3 text-base">
          No long-term contracts. Cancel anytime with 30 days notice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-8 flex flex-col ${
              plan.featured
                ? 'bg-[#0D1629] border-2 border-blue-600 card-glow'
                : 'bg-[#0D1629] border border-[#1A2B4A]'
            }`}
          >
            {/* Most popular badge */}
            {plan.featured && (
              <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-bold rounded-full px-4 py-1">
                MOST POPULAR
              </span>
            )}

            {/* Badge */}
            <span className={`inline-flex self-start text-xs rounded-full px-3 py-1 font-semibold ${plan.badgeClass}`}>
              {plan.badge}
            </span>

            {/* Name */}
            <h3 className="text-xl font-bold text-white mt-3">{plan.name}</h3>

            {/* Price */}
            <div className="mt-2 flex items-baseline gap-1">
              <span className={`text-4xl font-black ${plan.featured ? 'text-gradient' : 'text-white'}`}>
                {plan.price}
              </span>
              <span className="text-slate-400 text-sm">{plan.period}</span>
            </div>

            {/* Subtitle */}
            <p className="text-slate-400 text-sm mt-1">{plan.subtitle}</p>

            {/* Divider */}
            <div className="border-t border-[#1A2B4A] mt-4" />

            {/* Features */}
            <ul className="mt-4 space-y-3 flex-1">
              {plan.features.map((f) => (
                <li key={f.text} className="flex items-start gap-2">
                  {f.included ? (
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                  )}
                  <span className={`text-sm ${f.included ? 'text-slate-300' : 'text-slate-500'}`}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-center ${plan.ctaClass}`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="text-slate-400 text-sm mt-8 text-center">
        Not sure which plan fits?{' '}
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400 transition-colors"
        >
          Book a free 30-minute discovery call
        </a>{' '}
        — we'll figure it out together.
      </p>
    </section>
  )
}
