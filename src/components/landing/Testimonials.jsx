import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'TeachEase cut my grading time in half and made parent comms a breeze.',
    author: 'Amelia R.',
    role: 'High School Teacher'
  },
  {
    quote: 'Our department finally has a single source of truth for students and exams.',
    author: 'Dr. Ken M.',
    role: 'Dept. Chair'
  },
  {
    quote: 'Setup took minutes. The analytics helped us spot struggling students early.',
    author: 'Priya S.',
    role: 'Vice Principal'
  },
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">What educators are saying</h2>
          <p className="mt-3 text-slate-300">Real stories from schools and teachers using TeachEase daily.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-slate-200">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-400">— {t.author}, {t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
