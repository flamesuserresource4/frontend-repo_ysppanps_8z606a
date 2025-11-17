import { useState, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Users, Calendar, GraduationCap } from 'lucide-react'
import LandingNavbar from '../components/landing/LandingNavbar'
import LandingHero from '../components/landing/LandingHero'
import LandingFeatures from '../components/landing/LandingFeatures'
import LandingPricing from '../components/landing/LandingPricing'
import LandingFooter from '../components/landing/LandingFooter'
import Logos from '../components/landing/Logos'
import Testimonials from '../components/landing/Testimonials'
import VideoDemo from '../components/landing/VideoDemo'
import Newsletter from '../components/landing/Newsletter'
import ABTestToggle from '../components/landing/ABTestToggle'

export default function Landing() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0.9])
  const y = useTransform(scrollYProgress, [0, 1], [0, 40])
  const [variant, setVariant] = useState('A')

  const handleVariant = useCallback((v) => setVariant(v), [])

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,#4f46e5_0%,transparent_60%)] opacity-40" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] bg-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <LandingNavbar />

      <motion.div style={{ opacity, y }}>
        <LandingHero ctaStyle={variant === 'A' ? 'indigo' : 'emerald'} headlineVariant={variant} />
      </motion.div>

      <Logos />

      <LandingFeatures />

      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Students managed', value: '25k+', icon: Users },
              { title: 'Lectures scheduled', value: '120k+', icon: Calendar },
              { title: 'Grades recorded', value: '3.2M', icon: GraduationCap },
            ].map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                    <s.icon size={18} />
                  </div>
                  <p className="text-slate-300 text-sm">{s.title}</p>
                </div>
                <p className="mt-3 text-3xl font-semibold">{s.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <VideoDemo />

      <Testimonials />

      <LandingPricing />

      <Newsletter />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to simplify your teaching workflow?</h3>
          <p className="mt-3 text-slate-300">Start free, set up in minutes, and upgrade whenever you like.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/app" className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white shadow-lg shadow-indigo-900/30 ${variant==='A' ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-emerald-600 hover:bg-emerald-500'}`}>
              Get started <ArrowRight size={18} />
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white">
              View pricing
            </a>
          </div>
        </div>
      </section>

      <LandingFooter />

      <ABTestToggle onVariant={handleVariant} />
    </div>
  )
}
