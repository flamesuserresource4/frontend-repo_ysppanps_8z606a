import { motion } from 'framer-motion'
import { Users, BookOpen, Calendar, GraduationCap, Shield, Zap, BarChart3 } from 'lucide-react'

const features = [
  {
    title: 'Students & Rosters',
    desc: 'Import or add students in seconds. Filter by class, track progress, and keep records tidy.',
    icon: Users,
  },
  {
    title: 'Subjects & Lectures',
    desc: 'Plan your syllabus, schedule sessions, and never miss an upcoming lecture.',
    icon: BookOpen,
  },
  {
    title: 'Exams & Grades',
    desc: 'Record marks, compute averages, and generate insights automatically.',
    icon: GraduationCap,
  },
  {
    title: 'Secure by default',
    desc: 'Enterprise-grade security, SSO-ready, and compliant with global standards.',
    icon: Shield,
  },
  {
    title: 'Blazing fast',
    desc: 'Optimized for speed with modern tech — instant load times and smooth interactions.',
    icon: Zap,
  },
  {
    title: 'Analytics built-in',
    desc: 'Understand trends with smart charts and actionable metrics at a glance.',
    icon: BarChart3,
  },
]

export default function LandingFeatures() {
  return (
    <section id="features" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need to run a modern classroom</h2>
          <p className="mt-3 text-slate-300">TeachEase replaces spreadsheets and scattered tools with a single, delightful workspace.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white">
                <f.icon size={18} />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
