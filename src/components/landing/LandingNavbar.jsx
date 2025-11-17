import { BookOpen } from 'lucide-react'

export default function LandingNavbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white">
            <BookOpen size={20} />
          </div>
          <div>
            <p className="text-lg font-bold text-white">TeachEase</p>
            <p className="text-[11px] text-slate-400 -mt-1">Teach smarter. Not harder.</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a href="/" className="px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-slate-100">Go to App</a>
        </div>
      </div>
    </nav>
  )
}
