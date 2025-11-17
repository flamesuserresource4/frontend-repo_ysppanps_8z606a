export default function FAQ() {
  const faqs = [
    { q: 'Is there a free plan?', a: 'Yes. Start with Starter, free forever for up to 50 students.' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. No contracts, no hidden fees.' },
    { q: 'Do you support schools/teams?', a: 'Yes. Team plan includes seats, roles, and SSO.' },
    { q: 'How is my data stored?', a: 'We use secure, encrypted databases with global backups.' },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">Frequently asked questions</h3>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none font-medium text-white group-open:text-indigo-300">
                {f.q}
              </summary>
              <p className="mt-2 text-slate-300 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
