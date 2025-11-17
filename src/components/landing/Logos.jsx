export default function Logos() {
  const logos = [
    { name: 'EduCore', text: 'EduCore' },
    { name: 'CampusOS', text: 'CampusOS' },
    { name: 'Learnify', text: 'Learnify' },
    { name: 'GradeMate', text: 'GradeMate' },
    { name: 'SchoolHub', text: 'SchoolHub' },
    { name: 'ClassFlow', text: 'ClassFlow' },
  ]

  return (
    <section className="py-16 border-y border-white/10 bg-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-widest text-slate-400">Trusted by modern educators</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center h-10 rounded bg-white/5 border border-white/10 text-slate-300 text-sm">
              {l.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
