import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200">
            <Sparkles size={14} /> New: auto-grade insights
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Run your classroom like a modern product
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            TeachEase centralizes students, subjects, lectures, exams, and grades in one place — so you can focus on teaching.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="/app" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/30">
              Launch app <ArrowRight size={18} />
            </a>
            <a href="#pricing" className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white">See pricing</a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-6 text-center text-sm text-slate-300">
            <div>
              <p className="text-2xl font-semibold">5 min</p>
              <p className="text-xs text-slate-400">Setup</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">99.9%</p>
              <p className="text-xs text-slate-400">Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">GDPR</p>
              <p className="text-xs text-slate-400">Compliant</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 overflow-hidden p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-cyan-500/20" />
            {/* Mock UI */}
            <div className="relative space-y-3">
              <div className="h-8 w-40 rounded-lg bg-white/20" />
              <div className="grid grid-cols-3 gap-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-24 rounded-xl bg-white/10" />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-40 rounded-xl bg-white/10" />
                <div className="h-40 rounded-xl bg-white/10" />
              </div>
              <div className="h-10 w-full rounded-lg bg-white/10" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/70 to-transparent text-sm text-slate-200">
              The dashboard you already have — now in the cloud.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
