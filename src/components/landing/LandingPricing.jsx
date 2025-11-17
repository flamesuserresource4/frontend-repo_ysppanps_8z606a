import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    highlight: 'Everything to get started',
    features: [
      'Up to 50 students',
      'Unlimited subjects',
      'Basic grading',
      'Email support',
    ],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$9/mo',
    highlight: 'Best for growing teachers',
    features: [
      'Up to 500 students',
      'Advanced grading & analytics',
      'Priority support',
      'Export to CSV',
    ],
    cta: 'Try Pro',
    popular: true,
  },
  {
    name: 'Team',
    price: '$29/mo',
    highlight: 'For schools & departments',
    features: [
      'Unlimited students',
      'Team seats & roles',
      'SSO & compliance',
      'Dedicated support',
    ],
    cta: 'Contact sales',
    popular: false,
  },
]

export default function LandingPricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Start free. Upgrade when you see the value.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border ${t.popular ? 'border-indigo-400/60 bg-indigo-500/10' : 'border-white/10 bg-white/5'} p-6`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded bg-indigo-600 text-white">Most popular</div>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-slate-300 text-sm">{t.highlight}</p>
              <p className="mt-4 text-3xl font-bold">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-200">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-600/20 text-green-400">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/" className={`mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-lg ${t.popular ? 'bg-white text-slate-900 hover:bg-slate-100' : 'border border-white/10 hover:bg-white/10 text-white'}`}>
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
